import { client, db, isLocalFallback } from "@/db";
import { questions } from "@/db/schema";
import { seedQuestions } from "@/lib/seed-data";

/**
 * Garantia de que o banco está pronto para uso.
 *
 * O app roda em serverless (Vercel + Turso) e a dona do site não tem acesso a
 * terminal, então não existe passo de migração manual: toda rota de API chama
 * `ensureDatabaseReady()` antes de consultar o banco. A função cria as tabelas
 * que faltarem, adiciona colunas novas em bancos criados por versões antigas do
 * schema e insere as questões de `lib/seed-data.ts` que ainda não existem
 * (comparando pelo `id` estável). Nunca apaga nem altera questões ou respostas
 * já gravadas.
 *
 * O resultado é memoizado por processo: a verificação acontece uma vez por
 * cold start, não a cada requisição.
 */
const DDL_STATEMENTS = [
  `CREATE TABLE IF NOT EXISTS questions (
    id TEXT PRIMARY KEY,
    instituicao TEXT NOT NULL,
    ano INTEGER NOT NULL,
    prova TEXT,
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

/**
 * Colunas acrescentadas depois da criação original da tabela. Bancos criados
 * antes delas precisam do ALTER; bancos novos já nascem com a coluna.
 */
const QUESTION_COLUMNS: Record<string, string> = {
  prova: `ALTER TABLE questions ADD COLUMN prova TEXT`,
};

export type DatabaseReadyReport = {
  /** Colunas que faltavam e foram acrescentadas nesta execução. */
  colunasAdicionadas: string[];
  /** Quantidade de questões inseridas nesta execução. */
  questoesInseridas: number;
  /** Total de questões no banco depois da sincronização. */
  totalQuestoes: number;
};

async function runMigrations(): Promise<DatabaseReadyReport> {
  // Em produção o sistema de arquivos é somente leitura: sem as variáveis do
  // Turso o app cairia no arquivo local e falharia com um erro críptico.
  if (isLocalFallback && process.env.NODE_ENV === "production") {
    throw new Error(
      "Banco de dados não configurado: faltam as variáveis TURSO_DATABASE_URL e TURSO_AUTH_TOKEN " +
        "no projeto da Vercel. Adicione-as em Settings → Environment Variables e faça um novo deploy (Redeploy)."
    );
  }

  for (const statement of DDL_STATEMENTS) {
    await client.execute(statement);
  }

  const info = await client.execute(`PRAGMA table_info(questions)`);
  const existingColumns = new Set(info.rows.map((row) => String(row.name)));
  const colunasAdicionadas: string[] = [];
  for (const [column, statement] of Object.entries(QUESTION_COLUMNS)) {
    if (existingColumns.has(column)) continue;
    await client.execute(statement);
    colunasAdicionadas.push(column);
  }

  const existing = await db.select({ id: questions.id }).from(questions);
  const existingIds = new Set(existing.map((q) => q.id));
  const novas = seedQuestions.filter((q) => !existingIds.has(q.id));
  for (const q of novas) {
    await db.insert(questions).values(q);
  }

  return {
    colunasAdicionadas,
    questoesInseridas: novas.length,
    totalQuestoes: existingIds.size + novas.length,
  };
}

let pending: Promise<DatabaseReadyReport> | null = null;

/**
 * Roda as migrações uma única vez por processo. Requisições simultâneas de um
 * cold start compartilham a mesma promise; se ela falhar, a memoização é
 * descartada para que a próxima requisição tente de novo.
 */
export function ensureDatabaseReady(): Promise<DatabaseReadyReport> {
  if (!pending) {
    pending = runMigrations().catch((error) => {
      pending = null;
      throw error;
    });
  }
  return pending;
}

/** Ignora a memoização — usada por `/api/setup`, que existe para ser reexecutada. */
export function forceDatabaseSync(): Promise<DatabaseReadyReport> {
  pending = runMigrations();
  return pending;
}
