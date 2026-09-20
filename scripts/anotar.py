#!/usr/bin/env python3
"""Aplica classificação e comentários a questões já extraídas.

Recebe um JSON no formato {"<id ou número>": {"grandeArea": ..., "tema": ...,
"subtema": ..., "comentarioGabarito": ...}} e grava apenas esses campos no
arquivo da prova, sem tocar em enunciado, alternativas ou gabarito.

    python3 scripts/anotar.py --slug usp-sp-2026-ad1 --patch anotacoes.json
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
CAMPOS = {"grandeArea", "tema", "subtema", "comentarioGabarito", "enunciado", "gabaritoOficial", "anulada", "alternativas", "imagens"}


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--slug", required=True)
    p.add_argument("--patch", type=Path, required=True, help="arquivo JSON com as anotações ('-' para stdin)")
    args = p.parse_args()

    bruto = sys.stdin.read() if str(args.patch) == "-" else args.patch.read_text(encoding="utf-8")
    patch = json.loads(bruto)

    arquivo = REPO / "data" / "provas" / f"{args.slug}.json"
    dados = json.loads(arquivo.read_text(encoding="utf-8"))
    por_id = {q["id"]: q for q in dados}

    aplicadas = 0
    for chave, campos in patch.items():
        qid = chave if chave.startswith(args.slug) else f"{args.slug}-q{int(chave):02d}"
        if qid not in por_id:
            raise SystemExit(f"{qid} não existe em {arquivo.name}")
        desconhecidos = set(campos) - CAMPOS
        if desconhecidos:
            raise SystemExit(f"{qid}: campo(s) não permitido(s): {sorted(desconhecidos)}")
        por_id[qid].update(campos)
        aplicadas += 1

    arquivo.write_text(json.dumps(dados, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    faltam = [q["id"] for q in dados if not q["comentarioGabarito"]]
    print(f"{aplicadas} questão(ões) anotada(s). Ainda sem comentário: {len(faltam)}.")


if __name__ == "__main__":
    main()
