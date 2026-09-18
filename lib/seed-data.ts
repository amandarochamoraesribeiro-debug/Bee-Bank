import type { NewQuestion } from "@/db/schema";
import { rm2026Ad1Questions } from "./seed-data-rm2026-ad1";
import { rm2026Ad1QuestionsB2 } from "./seed-data-rm2026-ad1-b2";

// Cada questão tem um `id` estável (não gerado aleatoriamente) para que novos
// lotes possam ser adicionados a este arquivo e sincronizados via /api/setup
// sem duplicar ou afetar as questões já existentes.
const questoesAvulsas: Omit<NewQuestion, "createdAt">[] = [
  {
    id: "usp-sp-2019-clm-pneumonia-comunidade",
    instituicao: "USP-SP",
    ano: 2019,
    grandeArea: "Clínica Médica",
    tema: "Pneumologia",
    subtema: "Pneumonia adquirida na comunidade",
    enunciado:
      "Homem, 40 anos de idade, sem doenças prévias diagnosticadas, com história de tosse produtiva há 4 dias. Refere que ontem apresentou episódio de febre, calafrios e fraqueza muscular. Nega coriza. Ao exame clínico apresentava pressão arterial de 142x90 mmHg, frequência cardíaca de 90 bpm, frequência respiratória de 22 irpm, temperatura de 38ºC e índice de massa corpórea de 33 kg/m². Ausculta pulmonar com redução discreta dos murmúrios vesiculares bilaterais. Ausculta cardíaca normal. Radiografia de tórax a seguir.\n\nQual a principal hipótese diagnóstica?",
    imagens: ["/images/questions/clinica-broncopneumonia-rx-torax.png"],
    tipo: "multipla_escolha",
    alternativas: [
      { letra: "A", texto: "Broncopneumonia." },
      { letra: "B", texto: "Atelectasia." },
      { letra: "C", texto: "Embolia pulmonar." },
      { letra: "D", texto: "Síndrome gripal." },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**Gabarito: A — Broncopneumonia**\n\n" +
      "O quadro combina **sinais clínicos de infecção bacteriana aguda** (febre, calafrios, fraqueza muscular, tosse produtiva de início nos últimos dias) com **sinais de gravidade/resposta inflamatória sistêmica** (taquicardia, taquipneia) e **redução do murmúrio vesicular** ao exame — achado compatível com consolidação/infiltrado pulmonar. A radiografia de tórax mostra opacidades compatíveis com processo infeccioso parenquimatoso, fechando o diagnóstico de **pneumonia bacteriana (broncopneumonia)**, padrão radiológico de infiltrados multifocais que acompanham a distribuição brônquica, mais comum em adultos e idosos, tipicamente por *S. pneumoniae*, *S. aureus* ou bacilos Gram-negativos.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(B) Atelectasia:** cursa com redução volumétrica do parênquima (retração), geralmente sem febre e sem o quadro infeccioso sistêmico descrito.\n" +
      "- **(C) Embolia pulmonar:** classicamente dispneia súbita e dor pleurítica, muitas vezes com fatores de risco para TVP; não explica febre com calafrios e o padrão radiográfico de consolidação.\n" +
      "- **(D) Síndrome gripal:** quadro viral de vias aéreas superiores (coriza, mialgia, tosse seca), sem consolidação radiográfica — e o paciente nega coriza.",
    anulada: false,
  },
  {
    id: "usp-sp-2018-cir-trauma-renal",
    instituicao: "USP-SP",
    ano: 2018,
    grandeArea: "Cirurgia Geral",
    tema: "Trauma",
    subtema: "Trauma renal / Trauma abdominal fechado",
    enunciado:
      "Homem de 36 anos de idade é vítima de acidente automobilístico (colisão entre dois automóveis de passeio). Chega ao pronto-socorro de um hospital terciário imobilizado por colar cervical e com vias aéreas protegidas. No exame clínico, está hemodinamicamente estável. Pontuação na escala de coma de Glasgow = 15; apresenta dor à palpação do flanco esquerdo. O resultado do FAST na sala de emergência é negativo. A tomografia computadorizada de abdome e pelve evidenciou volumoso hematoma perirrenal à esquerda e extravasamento de contraste na fase arterial.\n\nQual é a conduta para o caso?",
    imagens: [],
    tipo: "multipla_escolha",
    alternativas: [
      { letra: "A", texto: "Nefrectomia total esquerda." },
      { letra: "B", texto: "Embolização por arteriografia." },
      { letra: "C", texto: "Laparotomia exploradora e controle de danos." },
      { letra: "D", texto: "Observação clínica em terapia intensiva." },
    ],
    gabaritoOficial: "B",
    comentarioGabarito:
      "**Gabarito: B — Embolização por arteriografia**\n\n" +
      "O ponto-chave é que o paciente está **hemodinamicamente estável**, mas a tomografia mostra **sangramento ativo** (extravasamento de contraste na fase arterial — o *blush* arterial). No trauma renal, sangramento ativo demonstrado por imagem em paciente estável é indicação formal de **angioembolização seletiva**, que controla o sangramento preservando o parênquima renal e evitando cirurgia.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Nefrectomia total** e **(C) Laparotomia exploradora com controle de danos** são reservadas para **instabilidade hemodinâmica refratária** ou falha do manejo conservador/embolização — não é o caso aqui.\n" +
      "- **(D) Observação clínica isolada** seria adequada para um hematoma perirrenal estável, **sem** extravasamento ativo de contraste; como há sangramento ativo demonstrado, a conduta expectante pura expõe o paciente a risco de instabilização.",
    anulada: false,
  },
  {
    id: "usp-sp-2019-ped-imunizacao-nefrotica",
    instituicao: "USP-SP",
    ano: 2019,
    grandeArea: "Pediatria",
    tema: "Imunizações",
    subtema: "Contraindicações vacinais / Imunossupressão",
    enunciado:
      "Menina, 3 anos de idade, com diagnóstico recente de síndrome nefrótica, está na terceira semana de tratamento com prednisolona 2 mg/kg/dia. Está evoluindo com boa resposta, com redução do edema e não apresenta alterações urinárias neste momento. Sua mãe resolve procurar a UBS, devido a atraso vacinal.\n\nSegundo a recomendação do Ministério da Saúde, é uma contraindicação absoluta neste momento vacinar com:",
    imagens: [],
    tipo: "multipla_escolha",
    alternativas: [
      { letra: "A", texto: "Vacina tríplice bacteriana (DTP)." },
      { letra: "B", texto: "Vacina tríplice viral (SCR)." },
      { letra: "C", texto: "Vacina contra Influenza." },
      { letra: "D", texto: "Vacina contra Hepatite A." },
    ],
    gabaritoOficial: "B",
    comentarioGabarito:
      "**Gabarito: B — Vacina tríplice viral (SCR)**\n\n" +
      "A paciente está em uso de **corticoide em dose imunossupressora** (prednisona/prednisolona ≥ 2 mg/kg/dia, ou ≥ 20 mg/dia em maiores de 10kg, por período ≥ 14 dias). Nesse cenário, **vacinas de vírus vivo atenuado** — como **tríplice viral (SCR)**, varicela, febre amarela e VOP — estão **contraindicadas**, pelo risco de doença disseminada pelo próprio agente vacinal em um hospedeiro com imunidade celular comprometida. A recomendação do PNI é aguardar a suspensão do corticoide (geralmente um intervalo de 1 a 3 meses, dependendo da vacina) para reintroduzir vacinas de vírus vivo.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) DTP**, **(C) Influenza** e **(D) Hepatite A** são vacinas **inativadas** (ou de subunidade), que não se replicam no organismo e por isso são seguras mesmo durante a imunossupressão — podem e devem ser mantidas em dia.",
    anulada: false,
  },
  {
    id: "usp-sp-2019-go-adenomiose",
    instituicao: "USP-SP",
    ano: 2019,
    grandeArea: "Ginecologia e Obstetrícia",
    tema: "Ginecologia geral",
    subtema: "Sangramento uterino anormal / Adenomiose",
    enunciado:
      "Mulher, 42 anos de idade, 2 partos normais, marido vasectomizado, refere que seus ciclos menstruais permanecem regulares de 30 dias, mas sua menstruação vem aumentando em duração e quantidade há 6 meses, inclusive com aparecimento de cólica (que não apresentava antes). O exame clínico geral é normal. O toque vaginal, não doloroso, identifica útero em anteversoflexão, volume e forma normais, regiões anexiais sem alterações.\n\nQual é a principal hipótese diagnóstica?",
    imagens: [],
    tipo: "multipla_escolha",
    alternativas: [
      { letra: "A", texto: "Adenomiose." },
      { letra: "B", texto: "Miomatose uterina." },
      { letra: "C", texto: "Endometrite." },
      { letra: "D", texto: "Istmocele." },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**Gabarito: A — Adenomiose**\n\n" +
      "O perfil clássico da adenomiose é uma **mulher multípara**, geralmente entre 40-50 anos, com **hipermenorreia progressiva** (aumento de duração e volume do fluxo) associada a **dismenorreia secundária de início recente**, mantendo ciclos **regulares** (já que não há, necessariamente, disfunção ovulatória). Ao exame, o útero costuma ser normal ou discretamente aumentado/amolecido, **sem** distorção focal do contorno — compatível com o achado de \"volume e forma normais\" descrito na questão.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(B) Miomatose uterina:** tipicamente causa aumento e **irregularidade do contorno uterino** (útero aumentado, amolecido ou endurecido conforme a localização dos leiomiomas), o que não foi encontrado ao exame.\n" +
      "- **(C) Endometrite:** cursa com dor pélvica e frequentemente febre/corrimento, geralmente associada a manipulação uterina recente (parto, curetagem) — não é o cenário aqui.\n" +
      "- **(D) Istmocele:** é um defeito na cicatriz de **cesárea prévia**; a paciente teve apenas partos vaginais.",
    anulada: false,
  },
  {
    id: "usp-sp-2019-prev-fa-hiv",
    instituicao: "USP-SP",
    ano: 2019,
    grandeArea: "Medicina Preventiva e Social",
    tema: "Imunizações / Saúde do Adulto",
    subtema: "Vacinação em pacientes imunocomprometidos (PVHIV)",
    enunciado:
      "Homem, 22 anos de idade, tem infecção por HIV diagnosticada há 4 anos (exames recentes com CD4 550 cels/mm³, carga viral < 40 cópias/mL). Está em uso de terapia antirretroviral com tenofovir/lamivudina/efavirenz e procura antendimento no centro de imunizações porque ficou preocupado com as notícias de casos de febre amarela em sua cidade.\n\nQual é o esquema vacinal contra febre amarela a ser proposto para este paciente?",
    imagens: [],
    tipo: "multipla_escolha",
    alternativas: [
      { letra: "A", texto: "Dose fracionada e sem dose de reforço." },
      { letra: "B", texto: "Contraindicar vacinação." },
      { letra: "C", texto: "Dose plena (padrão) única." },
      { letra: "D", texto: "Dose fracionada com dose de reforço em 8 anos." },
    ],
    gabaritoOficial: "C",
    comentarioGabarito:
      "**Gabarito: C — Dose plena (padrão) única**\n\n" +
      "A vacina de febre amarela é de **vírus vivo atenuado**, e em pessoas vivendo com HIV (PVHIV) a indicação depende da contagem de **CD4**:\n" +
      "- **CD4 ≥ 350 cél/mm³:** vacinar com o **esquema padrão** (dose plena, dose única — desde a mudança do calendário nacional que eliminou o reforço de rotina).\n" +
      "- **CD4 entre 200-350 cél/mm³:** avaliar individualmente a relação risco-benefício (risco epidemiológico da região vs. risco de evento adverso).\n" +
      "- **CD4 < 200 cél/mm³:** vacinação **contraindicada**, pelo risco de doença viscerotrópica associada à vacina.\n\n" +
      "Como o paciente tem **CD4 550** e carga viral indetectável (bom controle imunológico e virológico), está indicada a **dose padrão única**, sem necessidade de fracionamento ou esquemas especiais.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) e (D)** descrevem esquemas fracionados, usados em contextos de **contingenciamento de doses** durante surtos, não como estratégia rotineira para PVHIV.\n" +
      "- **(B)** só se aplica quando CD4 < 200 cél/mm³, o que não é o caso.",
    anulada: false,
  },
];

export const seedQuestions: Omit<NewQuestion, "createdAt">[] = [
  ...questoesAvulsas,
  ...rm2026Ad1Questions,
  ...rm2026Ad1QuestionsB2,
];
