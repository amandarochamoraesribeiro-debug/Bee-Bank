# Bee Bank Questões

Plataforma interativa de **Banco de Questões** para preparação de Residência Médica (R1),
com filtragem hierárquica (Grande Área → Tema → Subtema), imagens clínicas com zoom,
gabaritos comentados e acompanhamento de progresso (acertos, erros, favoritos, caderno de erros).

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** + componentes próprios sobre **Radix UI** + **lucide-react**
- **Drizzle ORM** sobre **SQLite/libSQL** (`@libsql/client`) — roda com um arquivo local em
  desenvolvimento e com [Turso](https://turso.tech) (SQLite hospedado, compatível com
  serverless) em produção
- **react-markdown** para enunciados e comentários em Markdown
- **Zod** para validação da importação de questões

## Por que Turso e não um arquivo SQLite puro em produção?

A Vercel roda funções serverless com sistema de arquivos **efêmero e somente leitura**
(exceto `/tmp`), então um arquivo `.db` local não persiste entre requisições/deploys.
O Turso resolve isso mantendo a **mesma experiência SQLite** (mesmo schema, mesmo driver
`@libsql/client`, mesmas queries Drizzle), mas acessível via rede — com plano gratuito
generoso, suficiente para este projeto. Em desenvolvimento local nada muda: o app usa
`file:./local.db` automaticamente.

## Como rodar localmente

```bash
npm install

# cria as tabelas no banco local (./local.db)
npm run db:push

# popula com 5 questões reais (USP-SP), cobrindo as 5 grandes áreas do R1,
# incluindo 1 questão com imagem clínica (radiografia de tórax) e gabarito comentado
npm run db:seed

npm run dev
```

Acesse `http://localhost:3000`.

## Scripts

| Script            | Descrição                                                        |
| ------------------ | ------------------------------------------------------------------ |
| `npm run dev`       | Sobe o servidor de desenvolvimento (Turbopack)                     |
| `npm run build`     | Build de produção                                                  |
| `npm run start`     | Sobe o servidor de produção (após `build`)                         |
| `npm run lint`      | ESLint                                                              |
| `npm run db:push`   | Sincroniza o schema do Drizzle com o banco (local ou Turso)         |
| `npm run db:studio` | Abre o Drizzle Studio (explorar/editar dados pelo navegador)        |
| `npm run db:seed`   | Limpa e repopula o banco com as 5 questões de exemplo               |

## Modelo de dados

- **`questions`**: instituição, ano, grande área, tema, subtema, enunciado (Markdown),
  imagens (array de caminhos públicos), alternativas (JSON `{letra, texto}[]`), gabarito
  oficial, comentário do gabarito (Markdown) e flag de anulada.
- **`user_answers`**: progresso por usuário anônimo (identificado por um UUID salvo no
  `localStorage` do navegador — não há cadastro/login) e questão: alternativa escolhida,
  se acertou, favorito, caderno de erros e tempo gasto.

## Grandes áreas cobertas

Clínica Médica · Cirurgia Geral · Pediatria · Ginecologia e Obstetrícia · Medicina
Preventiva e Social — as 5 grandes áreas do R1.

## Importando novas questões

Acesse `/importar` na aplicação: cole um JSON no formato abaixo (aceita várias questões
de uma vez) e clique em **Importar Questões**. Antes, coloque as imagens referenciadas em
`public/images/questions/` e aponte para elas com o caminho público (ex.
`/images/questions/arquivo.png`).

```json
{
  "questions": [
    {
      "instituicao": "ENARE",
      "ano": 2024,
      "grandeArea": "Clínica Médica",
      "tema": "Cardiologia",
      "subtema": "Síndrome coronariana aguda",
      "enunciado": "Enunciado da questão (aceita **Markdown**)...",
      "imagens": ["/images/questions/exemplo.png"],
      "tipo": "multipla_escolha",
      "alternativas": [
        { "letra": "A", "texto": "Alternativa A" },
        { "letra": "B", "texto": "Alternativa B" }
      ],
      "gabaritoOficial": "A",
      "comentarioGabarito": "Explicação de cada alternativa...",
      "anulada": false
    }
  ]
}
```

Também é possível importar via API diretamente: `POST /api/import` com o mesmo corpo JSON.

## Atalhos de teclado (tela de resolução)

- `1`–`5` ou `A`–`E`: selecionar alternativa
- `Enter`: responder (ou avançar para a próxima, se já respondida)
- `←` / `→`: navegar entre questões
- `F`: favoritar/desfavoritar
- `R`: adicionar/remover do caderno de erros
- `G`: mostrar/ocultar o gabarito comentado (questão já respondida)

## Deploy no Vercel

1. Crie um banco gratuito em [turso.tech](https://turso.tech) e gere um `authToken`.
2. No projeto importado no Vercel, defina as variáveis de ambiente `TURSO_DATABASE_URL`
   e `TURSO_AUTH_TOKEN` (veja `.env.example`).
3. Rode `npm run db:push` e `npm run db:seed` **localmente, apontando para o Turso**
   (exporte as mesmas variáveis no seu terminal) para criar o schema e popular o banco
   remoto antes do primeiro deploy — ou publique e rode os mesmos comandos a partir de
   qualquer máquina com as variáveis de ambiente do Turso configuradas.
4. Deploy normalmente (`vercel` ou via integração Git).

## Estrutura

```
app/
  page.tsx              # Home — filtros hierárquicos + geração do caderno
  resolver/page.tsx      # Tela de resolução de questões
  importar/page.tsx      # Importador de questões (JSON)
  api/
    filters/route.ts     # Taxonomia + contadores por status
    questions/route.ts   # Lista de questões filtradas + progresso do usuário
    answers/route.ts     # Registrar resposta / favoritar / caderno de erros
    import/route.ts       # Importação em lote de questões
components/
  ui/                    # Componentes base (Button, Badge, Dialog, Accordion, ...)
  questions/             # Componentes específicos do domínio (filtros, solver, galeria)
db/
  schema.ts              # Schema Drizzle (questions, user_answers)
  index.ts                # Client Drizzle/libSQL
scripts/
  seed.ts                 # Seed com 5 questões reais (USP-SP)
```
