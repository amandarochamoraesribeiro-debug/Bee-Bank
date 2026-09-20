#!/usr/bin/env python3
"""Confere os arquivos de prova antes de publicar.

Verifica o que costuma quebrar depois de uma extração automática: questão sem
gabarito ou sem comentário, alternativas faltando ou fora de ordem, gabarito
apontando para uma letra que não existe, classificação não preenchida, imagem
declarada que não está no disco e id repetido.

    python3 scripts/conferir.py            # confere todas as provas
    python3 scripts/conferir.py --slug usp-sp-2026-ad1
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
GRANDES_AREAS = {
    "Clínica Médica",
    "Cirurgia Geral",
    "Pediatria",
    "Ginecologia e Obstetrícia",
    "Medicina Preventiva e Social",
}


def conferir(arquivo: Path, vistos: set[str]) -> list[str]:
    problemas: list[str] = []
    questoes = json.loads(arquivo.read_text(encoding="utf-8"))
    for q in questoes:
        qid = q.get("id", "<sem id>")
        def erro(msg: str) -> None:
            problemas.append(f"{arquivo.name} · {qid}: {msg}")

        if qid in vistos:
            erro("id repetido (outra questão já usa este id)")
        vistos.add(qid)

        if q.get("grandeArea") not in GRANDES_AREAS:
            erro(f"grandeArea inválida: {q.get('grandeArea')!r}")
        for campo in ("tema", "subtema", "enunciado", "comentarioGabarito"):
            valor = q.get(campo) or ""
            if not valor.strip() or valor == "A classificar":
                erro(f"{campo} vazio ou não classificado")

        letras = [a["letra"] for a in q.get("alternativas", [])]
        if len(letras) < 2:
            erro(f"só {len(letras)} alternativa(s)")
        elif letras != list("ABCDE"[: len(letras)]):
            erro(f"alternativas fora de ordem: {letras}")
        for a in q.get("alternativas", []):
            if not a["texto"].strip():
                erro(f"alternativa ({a['letra']}) sem texto")

        gabarito = q.get("gabaritoOficial") or ""
        if not gabarito:
            erro("sem gabarito oficial")
        elif gabarito not in letras:
            erro(f"gabarito {gabarito!r} não corresponde a nenhuma alternativa")

        for caminho in q.get("imagens", []):
            if not (REPO / "public" / caminho.lstrip("/")).exists():
                erro(f"imagem declarada mas ausente no disco: {caminho}")
    return problemas


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--slug", help="confere apenas uma prova")
    args = p.parse_args()

    pasta = REPO / "data" / "provas"
    arquivos = [pasta / f"{args.slug}.json"] if args.slug else sorted(pasta.glob("*.json"))

    vistos: set[str] = set()
    problemas: list[str] = []
    total = 0
    for arquivo in arquivos:
        questoes = json.loads(arquivo.read_text(encoding="utf-8"))
        total += len(questoes)
        problemas += conferir(arquivo, vistos)

    if problemas:
        print(f"{len(problemas)} problema(s) encontrado(s):\n")
        for linha in problemas:
            print(" -", linha)
        sys.exit(1)
    print(f"Tudo certo: {total} questões em {len(arquivos)} arquivo(s), sem problemas.")


if __name__ == "__main__":
    main()
