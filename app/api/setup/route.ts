import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { client, db } from "@/db";
import { questions } from "@/db/schema";
import { seedQuestions } from "@/lib/seed-data";

/**
 * Rota de inicialização, visitável no navegador (GET), pensada para quem está
 * hospedando o app e não tem acesso a terminal: cria as tabelas se não
 * existirem e semeia as questões de exemplo apenas se o banco estiver vazio.
 * Idempotente e segura de visitar mais de uma vez — nunca apaga respostas
 * de usuários já existentes.
 */
const DDL_STATEMENTS = [
  `CREATE TABLE IF NOT EXISTS questions (
    id TEXT PRIMARY KEY,
    instituicao TEXT NOT NULL,
    ano INTEGER NOT NULL,
    grande_area TEXT NOT NULL,
    tema TEXT NOT NULL,
    subtema TEXT NOT NULL,
    enunciado TEXT NOT NULL,
    imagens TEXT NOT NULL DEFAULT '[]',
    tipo TEXT NOT NULL DEFAULT 'multipla_escolha',
    alternativas TEXT NOT NULL,
    gabarito_oficial TEXT NOT NULL,
    comentario_gabarito TEXT NOT NULL,
    anulada INTEGER NOT NULL DEFAULT 0,
    created_at INTEGER NOT NULL DEFAULT (unixepoch())
  )`,
  `CREATE INDEX IF NOT EXISTS questions_grande_area_idx ON questions (grande_area)`,
  `CREATE INDEX IF NOT EXISTS questions_instituicao_idx ON questions (instituicao)`,
  `CREATE INDEX IF NOT EXISTS questions_ano_idx ON questions (ano)`,
  `CREATE INDEX IF NOT EXISTS questions_tema_idx ON questions (tema)`,
  `CREATE TABLE IF NOT EXISTS user_answers (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    question_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    alternativa_escolhida TEXT,
    acertou INTEGER,
    caderno_erros INTEGER NOT NULL DEFAULT 0,
    favorita INTEGER NOT NULL DEFAULT 0,
    tempo_gasto_segundos INTEGER,
    data_resposta INTEGER,
    updated_at INTEGER NOT NULL DEFAULT (unixepoch())
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS user_answers_user_question_idx ON user_answers (user_id, question_id)`,
  `CREATE INDEX IF NOT EXISTS user_answers_user_idx ON user_answers (user_id)`,
];

export async function GET() {
  const steps: string[] = [];

  for (const statement of DDL_STATEMENTS) {
    await client.execute(statement);
  }
  steps.push("Tabelas verificadas/criadas.");

  const existing = await db.select({ id: questions.id }).from(questions);

  if (existing.length === 0) {
    for (const q of seedQuestions) {
      await db.insert(questions).values({ id: nanoid(), ...q });
    }
    steps.push(`${seedQuestions.length} questões inseridas.`);
  } else {
    steps.push(`Banco já tinha ${existing.length} questão(ões) — nada foi alterado.`);
  }

  return NextResponse.json({ ok: true, steps });
}
