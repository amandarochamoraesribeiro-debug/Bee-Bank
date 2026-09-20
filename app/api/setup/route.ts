import { NextResponse } from "next/server";
import { forceDatabaseSync } from "@/lib/db-init";
import { apiError } from "@/lib/api-error";

/**
 * Rota de diagnóstico/sincronização, visitável no navegador (GET).
 *
 * O app já se auto-repara: todas as rotas de API chamam `ensureDatabaseReady()`
 * antes de consultar o banco, então em condições normais não é preciso abrir
 * esta página. Ela continua existindo para forçar a sincronização na hora e
 * mostrar, em português, o que o banco tem — útil para conferir se um deploy
 * novo trouxe questões novas. Sempre segura de visitar de novo: nunca duplica,
 * apaga ou altera questões e respostas já existentes.
 */
export async function GET() {
  try {
    const report = await forceDatabaseSync();
    const steps = ["Tabelas verificadas/criadas."];
    if (report.colunasAdicionadas.length > 0) {
      steps.push(`Coluna(s) adicionada(s): ${report.colunasAdicionadas.join(", ")}.`);
    }
    if (report.questoesInseridas > 0) {
      steps.push(`${report.questoesInseridas} questão(ões) nova(s) inserida(s).`);
    }
    steps.push(`Banco agora tem ${report.totalQuestoes} questão(ões) no total.`);
    return NextResponse.json({ ok: true, steps });
  } catch (error) {
    return apiError(error);
  }
}
