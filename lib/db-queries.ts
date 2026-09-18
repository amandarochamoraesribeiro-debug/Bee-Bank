import { eq, inArray, or, isNull, SQL } from "drizzle-orm";
import { db } from "@/db";
import { questions, userAnswers } from "@/db/schema";
import type { QuestionFilters, QuestionStatus } from "./types";

export function baseTaxonomyConditions(filters: QuestionFilters): SQL[] {
  const conditions: SQL[] = [];
  if (filters.instituicao?.length) {
    conditions.push(inArray(questions.instituicao, filters.instituicao));
  }
  if (filters.ano?.length) {
    conditions.push(inArray(questions.ano, filters.ano));
  }
  if (filters.grandeArea?.length) {
    conditions.push(inArray(questions.grandeArea, filters.grandeArea));
  }
  if (filters.tema?.length) {
    conditions.push(inArray(questions.tema, filters.tema));
  }
  if (filters.subtema?.length) {
    conditions.push(inArray(questions.subtema, filters.subtema));
  }
  return conditions;
}

/**
 * Assumes `userAnswers` was LEFT JOINed with `and(eq(userAnswers.questionId, questions.id), eq(userAnswers.userId, userId))`,
 * so unmatched rows have NULL userAnswers columns.
 */
export function statusCondition(status: QuestionStatus[]): SQL | undefined {
  if (!status.length) return undefined;
  const clauses: (SQL | undefined)[] = status.map((s) => {
    switch (s) {
      case "nao_resolvidas":
        return or(isNull(userAnswers.userId), isNull(userAnswers.alternativaEscolhida));
      case "acertadas":
        return eq(userAnswers.acertou, true);
      case "erradas":
        return eq(userAnswers.acertou, false);
      case "favoritas":
        return eq(userAnswers.favorita, true);
      case "caderno_erros":
        return eq(userAnswers.cadernoErros, true);
      default:
        return undefined;
    }
  });
  const valid = clauses.filter((c): c is SQL => Boolean(c));
  return valid.length ? or(...valid) : undefined;
}

export function parseListParam(value: string | null): string[] {
  if (!value) return [];
  return value.split(",").filter(Boolean);
}

export function parseNumberListParam(value: string | null): number[] {
  return parseListParam(value)
    .map((v) => Number(v))
    .filter((v) => !Number.isNaN(v));
}

export { db, questions, userAnswers };
