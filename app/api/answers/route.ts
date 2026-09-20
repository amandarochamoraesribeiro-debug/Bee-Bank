import { NextRequest, NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { z } from "zod";
import { db, questions, userAnswers } from "@/lib/db-queries";
import { ensureDatabaseReady } from "@/lib/db-init";
import { apiError } from "@/lib/api-error";

const bodySchema = z.object({
  userId: z.string().min(1),
  questionId: z.string().min(1),
  alternativaEscolhida: z.string().optional(),
  tempoGastoSegundos: z.number().int().nonnegative().optional(),
  favorita: z.boolean().optional(),
  cadernoErros: z.boolean().optional(),
});

export async function POST(request: NextRequest) {
  try {
    return await handlePost(request);
  } catch (error) {
    return apiError(error);
  }
}

async function handlePost(request: NextRequest) {
  await ensureDatabaseReady();

  const json = await request.json();
  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const { userId, questionId, alternativaEscolhida, tempoGastoSegundos, favorita, cadernoErros } =
    parsed.data;

  const [question] = await db.select().from(questions).where(eq(questions.id, questionId));
  if (!question) {
    return NextResponse.json({ error: "Questão não encontrada" }, { status: 404 });
  }

  const [existing] = await db
    .select()
    .from(userAnswers)
    .where(and(eq(userAnswers.userId, userId), eq(userAnswers.questionId, questionId)));

  const acertou =
    alternativaEscolhida !== undefined ? alternativaEscolhida === question.gabaritoOficial : undefined;

  const updates: Partial<typeof userAnswers.$inferInsert> = {
    updatedAt: new Date(),
  };
  if (alternativaEscolhida !== undefined) {
    updates.alternativaEscolhida = alternativaEscolhida;
    updates.acertou = acertou;
    updates.dataResposta = new Date();
    if (tempoGastoSegundos !== undefined) updates.tempoGastoSegundos = tempoGastoSegundos;
    if (acertou === false) updates.cadernoErros = true;
  }
  if (favorita !== undefined) updates.favorita = favorita;
  if (cadernoErros !== undefined) updates.cadernoErros = cadernoErros;

  if (existing) {
    await db.update(userAnswers).set(updates).where(eq(userAnswers.id, existing.id));
  } else {
    await db.insert(userAnswers).values({
      id: nanoid(),
      userId,
      questionId,
      alternativaEscolhida: alternativaEscolhida ?? null,
      acertou: acertou ?? null,
      tempoGastoSegundos: tempoGastoSegundos ?? null,
      dataResposta: alternativaEscolhida !== undefined ? new Date() : null,
      favorita: favorita ?? false,
      cadernoErros: cadernoErros ?? acertou === false,
      ...updates,
    });
  }

  const [result] = await db
    .select()
    .from(userAnswers)
    .where(and(eq(userAnswers.userId, userId), eq(userAnswers.questionId, questionId)));

  return NextResponse.json({ progresso: result, gabaritoOficial: question.gabaritoOficial });
}
