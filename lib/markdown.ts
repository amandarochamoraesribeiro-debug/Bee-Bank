/**
 * Enunciados vindos do PDF trazem quebras de linha que importam — listas de
 * exames laboratoriais, sinais vitais, itens separados. O Markdown, por padrão,
 * junta linhas seguidas num parágrafo só e transformaria tudo num bloco ilegível.
 *
 * Esta função marca essas quebras como quebras de verdade (dois espaços no fim
 * da linha, a sintaxe de *hard break* do Markdown), deixando de fora as linhas
 * que já têm significado estrutural — tabelas, listas, títulos e citações.
 */
const ESTRUTURAL = /^\s*(\||[-*+]\s|\d+[.)]\s|#{1,6}\s|>)/;

export function preservarQuebras(texto: string): string {
  const linhas = texto.split("\n");
  return linhas
    .map((linha, i) => {
      const proxima = linhas[i + 1];
      if (proxima === undefined || linha.trim() === "" || proxima.trim() === "") return linha;
      if (ESTRUTURAL.test(linha) || ESTRUTURAL.test(proxima)) return linha;
      return linha.replace(/\s*$/, "  ");
    })
    .join("\n");
}
