import type { NewQuestion } from "@/db/schema";
import avulsas from "@/data/provas/avulsas.json";
import uspSp2026Ad1 from "@/data/provas/usp-sp-2026-ad1.json";

/**
 * Catálogo de questões do banco.
 *
 * Cada prova vive em um arquivo JSON dentro de `data/provas/`. Para adicionar
 * uma prova inteira de uma vez basta gerar o JSON (veja `scripts/extrair_prova.py`
 * e `README.md`), salvá-lo nessa pasta e registrá-lo na lista `PROVAS` abaixo —
 * nenhum outro arquivo precisa ser editado. As rotas de API sincronizam o banco
 * sozinhas no próximo acesso, comparando pelo `id` estável de cada questão, e
 * nunca duplicam nem sobrescrevem o que já está gravado.
 */
export type SeedQuestion = Omit<NewQuestion, "createdAt">;

const PROVAS: SeedQuestion[][] = [
  avulsas as SeedQuestion[],
  uspSp2026Ad1 as SeedQuestion[],
];

export const seedQuestions: SeedQuestion[] = PROVAS.flat();
