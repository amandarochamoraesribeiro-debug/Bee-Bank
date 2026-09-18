import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { z } from "zod";
import { db, questions } from "@/lib/db-queries";
import { GRANDES_AREAS } from "@/db/schema";

const alternativaSchema = z.object({
  letra: z.string().min(1).max(2),
  texto: z.string().min(1),
});

const questionInputSchema = z.object({
  id: z.string().optional(),
  instituicao: z.string().min(1),
  ano: z.number().int().min(1990).max(2100),
  prova: z.string().optional(),
  grandeArea: z.enum(GRANDES_AREAS),
  tema: z.string().min(1),
  subtema: z.string().min(1),
  enunciado: z.string().min(1),
  imagens: z.array(z.string()).optional().default([]),
  tipo: z.string().optional().default("multipla_escolha"),
  alternativas: z.array(alternativaSchema).min(2),
  gabaritoOficial: z.string().min(1),
  comentarioGabarito: z.string().min(1),
  anulada: z.boolean().optional().default(false),
});

const bodySchema = z.object({
  questions: z.array(questionInputSchema).min(1),
});

export async function POST(request: NextRequest) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const values = parsed.data.questions.map((q) => ({
    id: q.id ?? nanoid(),
    instituicao: q.instituicao,
    ano: q.ano,
    prova: q.prova ?? null,
    grandeArea: q.grandeArea,
    tema: q.tema,
    subtema: q.subtema,
    enunciado: q.enunciado,
    imagens: q.imagens,
    tipo: q.tipo,
    alternativas: q.alternativas,
    gabaritoOficial: q.gabaritoOficial,
    comentarioGabarito: q.comentarioGabarito,
    anulada: q.anulada,
  }));

  await db.insert(questions).values(values);

  return NextResponse.json({ imported: values.length });
}

export async function GET() {
  const all = await db.select({ id: questions.id }).from(questions);
  return NextResponse.json({ total: all.length });
}
