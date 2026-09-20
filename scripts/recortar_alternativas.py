#!/usr/bin/env python3
"""Recorta alternativas que são imagens, uma faixa por letra.

Algumas questões trocam o texto das alternativas por figuras — painéis de
tomografia, dispositivos, gráficos. Aqui cada alternativa vira uma única
imagem contendo a letra e tudo que está na linha dela, que é como a prova
impressa se lê.

    python3 scripts/recortar_alternativas.py --prova prova.pdf \\
        --slug usp-sp-2026-ad1 --questao 72 --pagina 29

O JSON da prova é atualizado na hora: as imagens antigas da questão são
substituídas pelas faixas novas e cada alternativa ganha um texto do tipo
"Imagem (A) — 1ª imagem acima".
"""
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

import pymupdf as fitz

REPO = Path(__file__).resolve().parent.parent
RE_LETRA = re.compile(r"^\(?([A-E])\)$")
RE_MARCADOR = re.compile(r"\{(\d{1,3})\}")


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--prova", required=True)
    p.add_argument("--slug", required=True)
    p.add_argument("--questao", required=True, type=int)
    p.add_argument("--pagina", required=True, type=int, help="página do PDF (começa em 1)")
    p.add_argument("--margem", type=float, default=6, help="folga em pontos ao redor do recorte")
    p.add_argument("--qualidade", type=int, default=88)
    p.add_argument(
        "--coluna",
        choices=["esq", "dir", "todas"],
        default="todas",
        help="em provas de duas colunas, em qual delas está a questão",
    )
    p.add_argument(
        "--imagens-enunciado",
        type=int,
        default=0,
        help="quantas das imagens já extraídas pertencem ao enunciado (ficam antes das alternativas)",
    )
    p.add_argument("--y-min", type=float, help="ignorar o que estiver acima desta altura (pontos)")
    p.add_argument("--y-max", type=float, help="ignorar o que estiver abaixo desta altura (pontos)")
    p.add_argument(
        "--rect",
        action="append",
        default=[],
        metavar="LETRA=x0,y0,x1,y1",
        help="recorte manual de uma alternativa, em pontos do PDF. Use quando a "
        "questão espalha as alternativas pelas duas colunas. Pode repetir a opção.",
    )
    args = p.parse_args()

    doc = fitz.open(args.prova)
    page = doc[args.pagina - 1]
    largura = page.rect.width

    manuais: dict[str, fitz.Rect] = {}
    for spec in args.rect:
        letra, _, coords = spec.partition("=")
        x0, y0, x1, y1 = (float(v) for v in coords.split(","))
        manuais[letra.strip().upper()] = fitz.Rect(x0, y0, x1, y1)

    mid = largura / 2
    def na_faixa(y: float) -> bool:
        if args.y_min is not None and y < args.y_min:
            return False
        if args.y_max is not None and y > args.y_max:
            return False
        return True

    def na_coluna(x: float) -> bool:
        if args.coluna == "esq":
            return x < mid
        if args.coluna == "dir":
            return x >= mid
        return True

    if manuais:
        escolhidas = [(l, r) for l, r in sorted(manuais.items())]
        por_letra = {l: [r] for l, r in manuais.items()}
        gerar_recortes(page, args, escolhidas, por_letra)
        return

    letras: list[tuple[str, fitz.Rect]] = []
    for w in page.get_text("words"):
        m = RE_LETRA.match(w[4])
        if m and na_coluna(w[0]) and na_faixa(w[1]):
            letras.append((m.group(1), fitz.Rect(w[0], w[1], w[2], w[3])))

    # Fica só com a sequência A, B, C... de cima para baixo (a coluna das alternativas).
    esperado = "ABCDE"
    escolhidas: list[tuple[str, fitz.Rect]] = []
    for letra, rect in sorted(letras, key=lambda it: it[1].y0):
        if len(escolhidas) < len(esperado) and letra == esperado[len(escolhidas)]:
            escolhidas.append((letra, rect))
    if len(escolhidas) < 2:
        raise SystemExit("Não achei a coluna de alternativas nessa página.")

    # Cada figura é atribuída à letra cujo centro vertical está mais próximo:
    # as letras costumam ficar centralizadas na altura da própria figura.
    figuras = []
    for b in page.get_text("dict")["blocks"]:
        if b["type"] != 1:
            continue
        r = fitz.Rect(*b["bbox"])
        if r.width < 30 or r.height < 30:
            continue
        if not na_coluna((r.x0 + r.x1) / 2) or not na_faixa((r.y0 + r.y1) / 2):
            continue
        figuras.append(r)
    if not figuras:
        raise SystemExit("Nenhuma figura encontrada nessa página.")

    por_letra: dict[str, list[fitz.Rect]] = {letra: [] for letra, _ in escolhidas}
    for r in figuras:
        centro = (r.y0 + r.y1) / 2
        letra = min(escolhidas, key=lambda it: abs((it[1].y0 + it[1].y1) / 2 - centro))[0]
        por_letra[letra].append(r)

    gerar_recortes(page, args, escolhidas, por_letra)


def gerar_recortes(page, args, escolhidas, por_letra) -> None:
    """Recorta uma faixa por alternativa e atualiza o JSON da prova."""
    destino = REPO / "public" / "images" / "questions" / args.slug
    destino.mkdir(parents=True, exist_ok=True)
    caminhos = []
    for letra, rect_letra in escolhidas:
        figs = por_letra[letra]
        if not figs:
            raise SystemExit(f"A alternativa ({letra}) ficou sem figura — confira a página.")
        rect = fitz.Rect(rect_letra)
        for r in figs:
            rect |= r
        rect += (-args.margem, -args.margem, args.margem, args.margem)
        rect &= page.rect
        nome = f"q{args.questao:02d}-alt{letra}.jpg"
        page.get_pixmap(clip=rect, dpi=200).pil_save(destino / nome, format="JPEG", quality=args.qualidade)
        caminhos.append(f"/images/questions/{args.slug}/{nome}")
        print(f"  ({letra}) -> {nome}  [{len(figs)} figura(s), {rect.width:.0f}x{rect.height:.0f}pt]")

    arquivo = REPO / "data" / "provas" / f"{args.slug}.json"
    dados = json.loads(arquivo.read_text(encoding="utf-8"))
    qid = f"{args.slug}-q{args.questao:02d}"
    for q in dados:
        if q["id"] != qid:
            continue
        # As primeiras imagens já extraídas são as do enunciado e continuam valendo;
        # as demais eram as figuras soltas das alternativas e dão lugar às faixas novas.
        antigas = [i for i in q["imagens"] if "-alt" not in i]
        do_enunciado = antigas[: args.imagens_enunciado]
        for caminho in antigas[args.imagens_enunciado :]:
            (REPO / "public" / caminho.lstrip("/")).unlink(missing_ok=True)
        q["imagens"] = do_enunciado + caminhos
        ordinais = ["1ª", "2ª", "3ª", "4ª", "5ª", "6ª", "7ª", "8ª"]
        deslocamento = len(do_enunciado)
        q["alternativas"] = [
            {"letra": letra, "texto": f"Imagem ({letra}) — {ordinais[i + deslocamento]} imagem acima."}
            for i, (letra, _rect) in enumerate(escolhidas)
        ]
        break
    else:
        raise SystemExit(f"{qid} não está em {arquivo}")
    arquivo.write_text(json.dumps(dados, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"{qid} atualizada com {len(caminhos)} alternativas em imagem.")



if __name__ == "__main__":
    main()
