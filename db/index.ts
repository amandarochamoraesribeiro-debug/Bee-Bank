import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema";

// A integração da Vercel pode criar as variáveis com ou sem o prefixo "turso_"
// dependendo de como foi conectada — aceitamos as duas formas.
const url =
  process.env.TURSO_DATABASE_URL ?? process.env.turso_TURSO_DATABASE_URL ?? "file:./local.db";
const authToken = process.env.TURSO_AUTH_TOKEN ?? process.env.turso_TURSO_AUTH_TOKEN;

/** Verdadeiro quando caímos no arquivo local por falta das variáveis do Turso. */
export const isLocalFallback = url.startsWith("file:");

export const client = createClient(
  authToken ? { url, authToken } : { url }
);

export const db = drizzle(client, { schema });
