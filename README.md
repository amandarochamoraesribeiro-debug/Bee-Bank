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
npm run dev
```

Acesse `http://localhost:3000`. Não precisa criar tabelas nem rodar seed: na primeira
requisição o app cria o banco local (`./local.db`) e carrega as questões de `data/provas/`
sozinho.

## Scripts

| Script            | Descrição                                                        |
| ------------------ | ------------------------------------------------------------------ |
| `npm run dev`       | Sobe o servidor de desenvolvimento (Turbopack)                     |
| `npm run build`     | Build de produção                                                  |
| `npm run start`     | Sobe o servidor de produção (após `build`)                         |
| `npm run lint`      | ESLint                                                              |
| `npm run db:push`   | Sincroniza o schema do Drizzle com o banco (local ou Turso)         |
| `npm run db:studio` | Abre o Drizzle Studio (explorar/editar dados pelo navegador)        |
| `npm run db:seed`   | Limpa e repopula o banco a partir de `data/provas/`                 |

Scripts de ingestão de provas (Python, exigem `pymupdf` e `pillow`):

| Script                              | Descrição                                                   |
| ----------------------------------- | ----------------------------------------------------------- |
| `scripts/extrair_prova.py`          | PDF da prova → JSON + imagens recortadas                     |
| `scripts/recortar_alternativas.py`  | Recorta alternativas que são imagens, uma faixa por letra    |
| `scripts/anotar.py`                 | Aplica classificação e comentários às questões extraídas     |
| `scripts/conferir.py`               | Confere os arquivos de prova antes de publicar               |

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

## Adicionando uma prova inteira de uma vez

Este é o caminho principal para alimentar o banco: em vez de digitar questão por questão,
o PDF da prova entra inteiro, de uma vez só.

Cada prova vive em **um arquivo JSON** dentro de `data/provas/`, e as imagens em
`public/images/questions/<slug-da-prova>/`. O app sincroniza sozinho: ao receber o deploy,
a primeira visita já traz as questões novas — **não é preciso rodar nada nem abrir nenhuma
página de administração** (veja *Sincronização automática*, abaixo).

### 1. Extrair a prova do PDF

```bash
pip3 install pymupdf pillow      # só na primeira vez

python3 scripts/extrair_prova.py \
  --prova ~/provas/rm2026-ad1.pdf \
  --slug usp-sp-2026-ad1 \
  --instituicao "USP-SP" --ano 2026 \
  --nome-prova "Residência (Acesso Direto) — AD1" \
  --gabarito data/provas/usp-sp-2026-ad1.gabarito.txt \
  --remover 'Processo Seletivo aos Programas de Residência Médica.{0,120}PROVA AD1'
```

O script lê a prova respeitando o **layout de duas colunas**, separa enunciado e
alternativas, **recorta cada imagem** do PDF e a associa à questão certa, aplica o gabarito
e grava `data/provas/<slug>.json`. Ao final, informa quantas questões ficaram sem gabarito,
sem classificação ou sem comentário.

O arquivo de gabarito é um texto simples, uma questão por linha:

```
# linhas iniciadas por # são ignoradas
1 A
2 C
54 anulada
```

**Rodar de novo é seguro:** tudo que já foi escrito à mão (classificação, comentários,
ajustes no enunciado) é preservado; só entram questões novas e campos ainda vazios.

### 2. Alternativas que são imagens

Quando as alternativas são figuras (painéis de tomografia, dispositivos, gráficos), cada
uma vira uma imagem só, com a letra junto:

```bash
python3 scripts/recortar_alternativas.py --prova prova.pdf \
  --slug usp-sp-2026-ad1 --questao 72 --pagina 29
```

Opções úteis: `--coluna esq|dir` (prova em duas colunas), `--y-min/--y-max` (ignorar o que
está fora da faixa), `--imagens-enunciado N` (quantas figuras pertencem ao enunciado e
devem ser mantidas antes das alternativas) e `--rect A=x0,y0,x1,y1` (recorte manual, para
questões que espalham as alternativas pelas duas colunas).

### 3. Classificar e comentar

Crie um JSON com as anotações e aplique:

```bash
python3 scripts/anotar.py --slug usp-sp-2026-ad1 --patch anotacoes.json
```

```json
{
  "61": {
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "subtema": "Triagem neonatal",
    "comentarioGabarito": "**Gabarito oficial: B** ..."
  }
}
```

Questão ainda sem comentário **já aparece e já pode ser respondida** — a tela mostra o
gabarito oficial e avisa que o comentário está em preparo.

### 4. Conferir antes de publicar

```bash
python3 scripts/conferir.py
```

Acusa questão sem gabarito, alternativa faltando ou fora de ordem, gabarito apontando para
letra inexistente, classificação não preenchida, imagem declarada que não está no disco e
id repetido.

### 5. Publicar

`git add . && git commit && git push` — e pronto. O deploy da Vercel faz o resto.

## Sincronização automática do banco

Toda rota de API chama `ensureDatabaseReady()` (em `lib/db-init.ts`) antes de consultar o
banco. Uma vez por processo, ela:

1. cria as tabelas que faltarem;
2. acrescenta colunas novas em bancos criados por versões antigas do schema;
3. insere as questões de `data/provas/` que ainda não existem;
4. **atualiza** as que mudaram — cada questão guarda um hash do próprio conteúdo, então
   corrigir um gabarito ou reescrever um comentário chega ao banco no deploy seguinte.

Respostas, favoritos e caderno de erros ficam em outra tabela e **nunca são tocados**.

A rota `/api/setup` continua existindo para forçar a sincronização na hora e mostrar, em
português, o que o banco tem — útil para conferir um deploy. Se algo falhar, a mensagem de
erro aparece na própria tela, em vez de o site mostrar "nenhuma questão encontrada".

## Importando questões avulsas

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
3. Deploy normalmente (`vercel` ou via integração Git).

Não é preciso rodar migração nem seed manualmente: na primeira visita após o deploy, o app
cria as tabelas e carrega as questões sozinho (veja *Sincronização automática do banco*).

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
    setup/route.ts        # Diagnóstico e sincronização forçada (visitável no navegador)
components/
  ui/                    # Componentes base (Button, Badge, Dialog, Accordion, ...)
  questions/             # Componentes específicos do domínio (filtros, solver, galeria)
data/
  provas/                # Uma prova por arquivo JSON — fonte de verdade do banco
db/
  schema.ts              # Schema Drizzle (questions, user_answers)
  index.ts                # Client Drizzle/libSQL
lib/
  db-init.ts             # Criação de tabelas, migrações e sincronização das questões
scripts/
  extrair_prova.py        # PDF da prova → JSON + imagens
  recortar_alternativas.py# Alternativas em imagem, uma faixa por letra
  anotar.py               # Classificação e comentários
  conferir.py             # Conferência antes de publicar
  seed.ts                 # Repopula o banco a partir de data/provas/
```
