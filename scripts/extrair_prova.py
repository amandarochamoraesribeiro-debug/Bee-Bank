#!/usr/bin/env python3
"""Extrai uma prova inteira de um PDF para o formato do banco de questões.

Gera, de uma vez só:
  * `public/images/questions/<slug>/qNN-imgM.jpg` — cada imagem recortada do PDF
    e associada à questão em que ela aparece;
  * `data/provas/<slug>.json` — todas as questões (enunciado, alternativas,
    imagens, gabarito), prontas para o app sincronizar sozinho.

O script é conservador ao regravar: se o JSON da prova já existir, tudo que foi
escrito à mão (grandeArea/tema/subtema, comentário do gabarito, ajustes no
enunciado) é preservado; só entram questões novas e campos ainda vazios.

Uso típico:

    python3 scripts/extrair_prova.py \\
        --prova ~/provas/rm2026-ad1.pdf \\
        --slug usp-sp-2026-ad1 \\
        --instituicao "USP-SP" --ano 2026 \\
        --nome-prova "Residência (Acesso Direto) — AD1" \\
        --gabarito gabarito.txt

`gabarito.txt` é um arquivo simples com uma questão por linha ("12 C" ou
"12: C"); linhas com "anulada" marcam a questão como anulada.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
from pathlib import Path

try:
    import pymupdf as fitz
except ImportError:  # pragma: no cover - dependência opcional do ambiente
    sys.exit("Falta a biblioteca pymupdf. Instale com: pip3 install pymupdf pillow")

REPO = Path(__file__).resolve().parent.parent

# Marcador de início de questão no PDF: "{12}" ou "12." no começo da linha.
RE_MARCADOR = re.compile(r"\{(\d{1,3})\}")
# Alternativa: "(A) texto" — aceita também "A)" e "A -".
RE_ALTERNATIVA = re.compile(r"(?m)^\s*[\(]?([A-E])[\)\.\-]\s+")
RE_GABARITO = re.compile(r"^\s*(\d{1,3})\s*[:\-\.\)]?\s*([A-E])?\s*(anulada)?\s*$", re.I)


def blocos_em_ordem_de_leitura(page, mid: float):
    """Devolve os blocos de texto da página na ordem em que se lê (2 colunas)."""
    blocos = [b for b in page.get_text("blocks") if b[6] == 0]
    blocos.sort(key=lambda b: (round(b[1]), b[0]))
    esquerda, direita, ordenados = [], [], []

    def despejar():
        ordenados.extend(esquerda)
        ordenados.extend(direita)
        esquerda.clear()
        direita.clear()

    for x0, y0, x1, _y1, texto, *_ in blocos:
        largura = x1 - x0
        atravessa_o_meio = x0 < mid - 10 and x1 > mid + 10
        if atravessa_o_meio and largura > 260:
            # Bloco que ocupa a largura inteira: quebra o par de colunas.
            despejar()
            ordenados.append(texto)
        elif (x0 + x1) / 2 < mid:
            esquerda.append(texto)
        else:
            direita.append(texto)
    despejar()
    return ordenados


def extrair_texto(doc, mid: float) -> str:
    partes = []
    for pno in range(len(doc)):
        partes.extend(blocos_em_ordem_de_leitura(doc[pno], mid))
    return "".join(partes)


RUIDO: list[re.Pattern] = []

# Prefixos que levam hífen de verdade: "pré-natal" quebrado em duas linhas não
# pode virar "prénatal" quando a hifenização da diagramação é desfeita.
PREFIXOS_COM_HIFEN = (
    "pré|pós|anti|auto|semi|sub|super|contra|extra|infra|intra|micro|mini|multi|"
    "neo|não|recém|sobre|ultra|vice|bem|mal|além|aquém|ex|bate|guarda|meio|pseudo|co"
)
RE_HIFEN_QUEBRA = re.compile(r"(\w)-\n(\w)")
RE_PREFIXO = re.compile(rf"(?:^|[^\wà-ú])({PREFIXOS_COM_HIFEN})$", re.I)


def juntar_hifenizacao(texto: str) -> str:
    """Desfaz a hifenização da diagramação, preservando hífens legítimos."""

    def decidir(m: re.Match) -> str:
        inicio = texto.rfind("\n", 0, m.start()) + 1
        palavra = texto[inicio : m.start() + 1]
        return m.group(0).replace("-\n", "-") if RE_PREFIXO.search(palavra) else m.group(1) + m.group(2)

    return RE_HIFEN_QUEBRA.sub(decidir, texto)


def limpar(texto: str) -> str:
    """Desfaz as quebras de linha da diagramação, preservando os parágrafos."""
    for padrao in RUIDO:
        texto = padrao.sub(" ", texto)
    texto = texto.replace("­", "")
    texto = re.sub(r"#####+", "\n\n", texto)
    texto = juntar_hifenizacao(texto)
    linhas = [l.strip() for l in texto.split("\n")]
    saida, buffer = [], []
    for linha in linhas:
        if linha.startswith("•") and buffer:
            # Item de lista começa parágrafo novo, senão vira um bloco ilegível.
            saida.append(" ".join(buffer))
            buffer = []
        if not linha:
            if buffer:
                saida.append(" ".join(buffer))
                buffer = []
            continue
        buffer.append(linha)
    if buffer:
        saida.append(" ".join(buffer))
    texto = "\n\n".join(saida)
    texto = re.sub(r"[ \t]{2,}", " ", texto)
    return texto.strip()


def separar_questoes(texto: str) -> dict[int, str]:
    marcadores = list(RE_MARCADOR.finditer(texto))
    questoes: dict[int, str] = {}
    for i, m in enumerate(marcadores):
        numero = int(m.group(1))
        fim = marcadores[i + 1].start() if i + 1 < len(marcadores) else len(texto)
        questoes[numero] = texto[m.end() : fim]
    return questoes


def separar_alternativas(corpo: str) -> tuple[str, list[dict[str, str]]]:
    """Divide o corpo da questão em enunciado e alternativas.

    A busca acontece no texto ainda com as quebras de linha do PDF, porque é a
    quebra de linha que marca o início de cada alternativa; só depois cada
    pedaço é limpo separadamente.
    """
    corpo = corpo.replace("\u00ad", "")
    corpo = re.sub(r"#####+", "\n", corpo)
    corpo = juntar_hifenizacao(corpo)

    for padrao in RUIDO:
        corpo = padrao.sub(" ", corpo)

    marcas = list(RE_ALTERNATIVA.finditer(corpo))
    # Só vale como bloco de alternativas se as letras vierem em sequência A, B, C...
    esperado = "ABCDE"
    validas: list[re.Match] = []
    for m in marcas:
        proxima = esperado[len(validas)] if len(validas) < len(esperado) else None
        if m.group(1) == proxima:
            validas.append(m)
    if len(validas) < 2:
        return limpar(corpo), []

    enunciado = limpar(corpo[: validas[0].start()])
    alternativas = []
    for i, m in enumerate(validas):
        fim = validas[i + 1].start() if i + 1 < len(validas) else len(corpo)
        alternativas.append({"letra": m.group(1), "texto": limpar(corpo[m.end() : fim])})
    return enunciado, alternativas


def recortar_imagens(doc, mid: float, slug: str, qualidade: int) -> dict[int, list[str]]:
    """Recorta cada imagem do PDF e associa à questão em que ela aparece."""
    destino = REPO / "public" / "images" / "questions" / slug
    destino.mkdir(parents=True, exist_ok=True)
    por_questao: dict[int, list[tuple[int, float, fitz.Rect]]] = {}

    for pno in range(len(doc)):
        page = doc[pno]
        marcadores = []
        for w in page.get_text("words"):
            m = RE_MARCADOR.fullmatch(w[4])
            if m:
                marcadores.append((int(m.group(1)), w[0], w[1]))
        if not marcadores:
            continue

        caixas = []
        for b in page.get_text("dict")["blocks"]:
            if b["type"] != 1:
                continue
            x0, y0, x1, y1 = b["bbox"]
            if x1 - x0 < 40 or y1 - y0 < 40:
                continue  # ícone/ruído, não é figura clínica
            caixas.append((x0, y0, x1, y1))

        for bbox in sorted(caixas, key=lambda b: (b[1], b[0])):
            cx = (bbox[0] + bbox[2]) / 2
            coluna = "L" if cx < mid else "R"
            acima = [
                m
                for m in marcadores
                if ("L" if m[1] < mid else "R") == coluna and m[2] <= bbox[1] + 5
            ]
            if not acima:
                acima = [m for m in marcadores if m[2] <= bbox[1] + 5] or marcadores
            numero = max(acima, key=lambda m: m[2])[0]
            por_questao.setdefault(numero, []).append((pno, bbox[1], fitz.Rect(*bbox)))

    caminhos: dict[int, list[str]] = {}
    for numero, itens in sorted(por_questao.items()):
        itens.sort(key=lambda it: (it[0], it[1]))
        for idx, (pno, _y, rect) in enumerate(itens, start=1):
            nome = f"q{numero:02d}-img{idx}.jpg"
            pix = doc[pno].get_pixmap(clip=rect, dpi=200)
            pix.pil_save(destino / nome, format="JPEG", quality=qualidade)
            caminhos.setdefault(numero, []).append(f"/images/questions/{slug}/{nome}")
    return caminhos


def ler_gabarito(caminho: Path | None) -> dict[int, dict]:
    if not caminho:
        return {}
    gabarito: dict[int, dict] = {}
    for linha in caminho.read_text(encoding="utf-8").splitlines():
        if not linha.strip() or linha.lstrip().startswith("#"):
            continue
        m = RE_GABARITO.match(linha)
        if not m:
            print(f"  aviso: linha de gabarito ignorada -> {linha!r}", file=sys.stderr)
            continue
        numero = int(m.group(1))
        gabarito[numero] = {
            "gabaritoOficial": (m.group(2) or "").upper(),
            "anulada": bool(m.group(3)),
        }
    return gabarito


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--prova", required=True, help="PDF da prova")
    p.add_argument("--slug", required=True, help="identificador da prova, ex.: usp-sp-2026-ad1")
    p.add_argument("--instituicao", required=True)
    p.add_argument("--ano", required=True, type=int)
    p.add_argument("--nome-prova", required=True, help='tag visível, ex.: "Residência (Acesso Direto) — AD1"')
    p.add_argument("--gabarito", type=Path, help="arquivo texto com uma questão por linha (ex.: '12 C')")
    p.add_argument("--mid", type=float, help="posição horizontal que divide as duas colunas (padrão: metade da página)")
    p.add_argument("--qualidade", type=int, default=88, help="qualidade JPEG das imagens (padrão 88)")
    p.add_argument("--sem-imagens", action="store_true", help="não recortar imagens")
    p.add_argument(
        "--remover",
        action="append",
        default=[],
        metavar="REGEX",
        help="trecho a descartar do texto (cabeçalho/rodapé repetido). Pode repetir a opção.",
    )
    args = p.parse_args()

    RUIDO.extend(re.compile(r, re.I) for r in args.remover)

    doc = fitz.open(args.prova)
    mid = args.mid if args.mid is not None else doc[0].rect.width / 2

    texto = extrair_texto(doc, mid)
    questoes = separar_questoes(texto)
    if not questoes:
        sys.exit("Nenhum marcador de questão ({NN}) encontrado — confira o PDF ou ajuste --mid.")
    print(f"{len(questoes)} questões encontradas no PDF.")

    imagens = {} if args.sem_imagens else recortar_imagens(doc, mid, args.slug, args.qualidade)
    if imagens:
        print(f"{sum(len(v) for v in imagens.values())} imagens recortadas para public/images/questions/{args.slug}/")

    gabarito = ler_gabarito(args.gabarito)

    destino = REPO / "data" / "provas" / f"{args.slug}.json"
    existentes = {}
    if destino.exists():
        existentes = {q["id"]: q for q in json.loads(destino.read_text(encoding="utf-8"))}

    saida, novas = [], 0
    for numero in sorted(questoes):
        qid = f"{args.slug}-q{numero:02d}"
        enunciado, alternativas = separar_alternativas(questoes[numero])
        gab = gabarito.get(numero, {})
        questao = {
            "id": qid,
            "ordem": numero,
            "instituicao": args.instituicao,
            "ano": args.ano,
            "prova": args.nome_prova,
            "grandeArea": "A classificar",
            "tema": "A classificar",
            "subtema": "A classificar",
            "enunciado": enunciado,
            "imagens": imagens.get(numero, []),
            "tipo": "multipla_escolha",
            "alternativas": alternativas,
            "gabaritoOficial": gab.get("gabaritoOficial", ""),
            "comentarioGabarito": "",
            "anulada": gab.get("anulada", False),
        }
        anterior = existentes.get(qid)
        if anterior:
            # O trabalho manual manda: só preenchemos o que ainda está vazio.
            for campo, valor in anterior.items():
                if valor not in (None, "", [], "A classificar"):
                    questao[campo] = valor
        else:
            novas += 1
        saida.append(questao)

    destino.parent.mkdir(parents=True, exist_ok=True)
    destino.write_text(json.dumps(saida, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    sem_gabarito = [q["id"] for q in saida if not q["gabaritoOficial"]]
    sem_comentario = [q["id"] for q in saida if not q["comentarioGabarito"]]
    sem_classificacao = [q["id"] for q in saida if q["grandeArea"] == "A classificar"]
    print(f"\nEscrito {destino.relative_to(REPO)} — {len(saida)} questões ({novas} novas).")
    print(f"  sem gabarito:     {len(sem_gabarito)}")
    print(f"  sem classificação:{len(sem_classificacao)}")
    print(f"  sem comentário:   {len(sem_comentario)}")
    print("\nPronto. As questões aparecem no site no próximo acesso — não precisa rodar mais nada.")


if __name__ == "__main__":
    main()
