import { NextRequest, NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { db, questions, userAnswers } from "@/lib/db-queries";
import { baseTaxonomyConditions, parseListParam, parseNumberListParam, statusCondition } from "@/lib/db-queries";
import type { QuestionStatus, QuestionWithProgress } from "@/lib/types";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId") ?? "";

  const filters = {
    instituicao: parseListParam(searchParams.get("instituicao")),
    ano: parseNumberListParam(searchParams.get("ano")),
    grandeArea: parseListParam(searchParams.get("grandeArea")),
    tema: parseListParam(searchParams.get("tema")),
    subtema: parseListParam(searchParams.get("subtema")),
  };
  const status = parseListParam(searchParams.get("status")) as QuestionStatus[];
  const limitParam = searchParams.get("limit");
  const limit = limitParam ? Math.min(Number(limitParam) || 200, 500) : 200;

  const conditions = [...baseTaxonomyConditions(filters)];
  const statusClause = statusCondition(status);
  if (statusClause) conditions.push(statusClause);

  const rows = await db
    .select({
      question: questions,
      alternativaEscolhida: userAnswers.alternativaEscolhida,
      acertou: userAnswers.acertou,
      favorita: userAnswers.favorita,
      cadernoErros: userAnswers.cadernoErros,
    })
    .from(questions)
    .leftJoin(
      userAnswers,
      and(eq(userAnswers.questionId, questions.id), eq(userAnswers.userId, userId))
    )
    .where(conditions.length ? and(...conditions) : undefined)
    .orderBy(questions.ano, questions.id)
    .limit(limit);

  const result: QuestionWithProgress[] = rows.map((r) => ({
    id: r.question.id,
    instituicao: r.question.instituicao,
    ano: r.question.ano,
    prova: r.question.prova,
    grandeArea: r.question.grandeArea,
    tema: r.question.tema,
    subtema: r.question.subtema,
    enunciado: r.question.enunciado,
    imagens: r.question.imagens,
    tipo: r.question.tipo,
    alternativas: r.question.alternativas,
    gabaritoOficial: r.question.gabaritoOficial,
    comentarioGabarito: r.question.comentarioGabarito,
    anulada: r.question.anulada,
    progresso: {
      respondida: Boolean(r.alternativaEscolhida),
      alternativaEscolhida: r.alternativaEscolhida,
      acertou: r.acertou,
      favorita: Boolean(r.favorita),
      cadernoErros: Boolean(r.cadernoErros),
    },
  }));

  return NextResponse.json({ questions: result, total: result.length });
}
