import { sql } from "drizzle-orm";
import { sqliteTable, text, integer, index, uniqueIndex } from "drizzle-orm/sqlite-core";

export const GRANDES_AREAS = [
  "Clínica Médica",
  "Cirurgia Geral",
  "Pediatria",
  "Ginecologia e Obstetrícia",
  "Medicina Preventiva e Social",
] as const;

export type GrandeArea = (typeof GRANDES_AREAS)[number];

export type Alternativa = {
  letra: string;
  texto: string;
};

export const questions = sqliteTable(
  "questions",
  {
    id: text("id").primaryKey(),
    instituicao: text("instituicao").notNull(),
    ano: integer("ano").notNull(),
    /** Nome da prova/grupo, exibido como tag (ex.: "Acesso Direto — AD1"). */
    prova: text("prova"),
    grandeArea: text("grande_area").notNull(),
    tema: text("tema").notNull(),
    subtema: text("subtema").notNull(),
    enunciado: text("enunciado").notNull(),
    imagens: text("imagens", { mode: "json" }).$type<string[]>().notNull().default(sql`'[]'`),
    tipo: text("tipo").notNull().default("multipla_escolha"),
    alternativas: text("alternativas", { mode: "json" }).$type<Alternativa[]>().notNull(),
    gabaritoOficial: text("gabarito_oficial").notNull(),
    comentarioGabarito: text("comentario_gabarito").notNull(),
    anulada: integer("anulada", { mode: "boolean" }).notNull().default(false),
    /** Posição da questão dentro da prova — o número impresso no caderno. */
    ordem: integer("ordem"),
    /**
     * Impressão digital do conteúdo vindo de `data/provas/`. Serve para o app
     * detectar, sozinho, que uma questão foi corrigida e atualizar a linha do
     * banco — sem precisar comparar todos os campos a cada acesso.
     */
    conteudoHash: text("conteudo_hash"),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`),
  },
  (table) => [
    index("questions_grande_area_idx").on(table.grandeArea),
    index("questions_instituicao_idx").on(table.instituicao),
    index("questions_ano_idx").on(table.ano),
    index("questions_tema_idx").on(table.tema),
    index("questions_ordem_idx").on(table.ano, table.ordem),
  ]
);

export const userAnswers = sqliteTable(
  "user_answers",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull(),
    questionId: text("question_id")
      .notNull()
      .references(() => questions.id, { onDelete: "cascade" }),
    alternativaEscolhida: text("alternativa_escolhida"),
    acertou: integer("acertou", { mode: "boolean" }),
    cadernoErros: integer("caderno_erros", { mode: "boolean" }).notNull().default(false),
    favorita: integer("favorita", { mode: "boolean" }).notNull().default(false),
    tempoGastoSegundos: integer("tempo_gasto_segundos"),
    dataResposta: integer("data_resposta", { mode: "timestamp" }),
    updatedAt: integer("updated_at", { mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`),
  },
  (table) => [
    uniqueIndex("user_answers_user_question_idx").on(table.userId, table.questionId),
    index("user_answers_user_idx").on(table.userId),
  ]
);

export type Question = typeof questions.$inferSelect;
export type NewQuestion = typeof questions.$inferInsert;
export type UserAnswer = typeof userAnswers.$inferSelect;
export type NewUserAnswer = typeof userAnswers.$inferInsert;
