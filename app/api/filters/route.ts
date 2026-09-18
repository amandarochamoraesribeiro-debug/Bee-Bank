import { NextRequest, NextResponse } from "next/server";
import { and, eq, sql } from "drizzle-orm";
import { db, questions, userAnswers } from "@/lib/db-queries";
import { baseTaxonomyConditions, parseListParam, parseNumberListParam } from "@/lib/db-queries";
import type { FiltersResponse } from "@/lib/types";

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

  const allQuestions = await db
    .select({
      instituicao: questions.instituicao,
      ano: questions.ano,
      grandeArea: questions.grandeArea,
      tema: questions.tema,
      subtema: questions.subtema,
    })
    .from(questions);

  const instituicoes = Array.from(new Set(allQuestions.map((q) => q.instituicao))).sort();
  const anos = Array.from(new Set(allQuestions.map((q) => q.ano))).sort((a, b) => b - a);

  const areaMap = new Map<string, Map<string, Set<string>>>();
  for (const q of allQuestions) {
    if (!areaMap.has(q.grandeArea)) areaMap.set(q.grandeArea, new Map());
    const temaMap = areaMap.get(q.grandeArea)!;
    if (!temaMap.has(q.tema)) temaMap.set(q.tema, new Set());
    temaMap.get(q.tema)!.add(q.subtema);
  }

  const areas = Array.from(areaMap.entries()).map(([grandeArea, temaMap]) => ({
    grandeArea,
    temas: Array.from(temaMap.entries()).map(([tema, subtemas]) => ({
      tema,
      subtemas: Array.from(subtemas).sort(),
    })).sort((a, b) => a.tema.localeCompare(b.tema)),
  }));

  const whereConditions = and(...baseTaxonomyConditions(filters));

  const rows = await db
    .select({
      hasAnswer: sql<number>`case when ${userAnswers.alternativaEscolhida} is not null then 1 else 0 end`,
      acertou: userAnswers.acertou,
      favorita: userAnswers.favorita,
      cadernoErros: userAnswers.cadernoErros,
    })
    .from(questions)
    .leftJoin(
      userAnswers,
      and(eq(userAnswers.questionId, questions.id), eq(userAnswers.userId, userId))
    )
    .where(whereConditions);

  const counts = {
    total: rows.length,
    naoResolvidas: rows.filter((r) => !r.hasAnswer).length,
    acertadas: rows.filter((r) => r.acertou === true).length,
    erradas: rows.filter((r) => r.acertou === false).length,
    favoritas: rows.filter((r) => r.favorita === true).length,
    cadernoErros: rows.filter((r) => r.cadernoErros === true).length,
  };

  const response: FiltersResponse = { instituicoes, anos, areas, counts };
  return NextResponse.json(response);
}
