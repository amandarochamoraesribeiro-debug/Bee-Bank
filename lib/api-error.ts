import { NextResponse } from "next/server";

/**
 * Converte um erro inesperado de rota em uma resposta JSON com mensagem
 * legível. A UI mostra essa mensagem para a usuária em vez de simplesmente
 * exibir "nenhuma questão encontrada", que esconde falhas de banco.
 */
export function apiError(error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  console.error("[api] falha na rota:", error);
  return NextResponse.json({ error: message }, { status: 500 });
}
