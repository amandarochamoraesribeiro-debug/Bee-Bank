import type { NewQuestion } from "@/db/schema";

const BASE = {
  instituicao: "USP-SP",
  ano: 2026,
  prova: "Residência (Acesso Direto) — AD1",
  tipo: "multipla_escolha",
  anulada: false,
} as const;

/**
 * USP-SP — Processo Seletivo de Residência Médica 2026 (Edital COREME/FM nº 03/2025),
 * prova AD1 de Áreas Básicas e Acesso Direto. Gabaritos conforme o gabarito oficial
 * retificado em 15/12/2025.
 */
export const rm2026Ad1Questions: Omit<NewQuestion, "createdAt">[] = [
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q01",
    grandeArea: "Clínica Médica",
    tema: "Cardiologia",
    subtema: "Insuficiência cardíaca descompensada / POCUS",
    enunciado:
      "Homem, 52 anos de idade, mecânico, tem hipertensão arterial sistêmica, diabetes melito tipo 2 e asma. Procura atendimento ambulatorial por falta de ar. Notou dispneia progressiva ao longo das duas últimas semanas durante o trabalho. Chegou a passar em pronto-socorro, foi medicado com salbutamol inalatório e acha que teve melhora discreta. Percebe edema frequente perimaleolar, ronco alto noturno e sonolência diurna. Nega angina, ortopneia, dispneia paroxística noturna, viagem ou imobilização recentes. Sinais vitais com temperatura de 36,2 °C, FC de 90 bpm, PA de 120×82 mmHg, FR de 16 irpm, SpO2 de 95%. Apresenta IMC de 32,3 kg/m². Murmúrios vesiculares universalmente reduzidos, sibilos expiratórios ocasionais. Bulhas hipofonéticas, sem sopros, veias do pescoço não visíveis, edema bilateral leve dos tornozelos.\n\nFoi realizada uma avaliação complementar com ultrassonografia à beira do leito, apresentada a seguir (ultrassonografia cardíaca paraesternal eixo longo na sístole e na diástole; ultrassonografia da veia cava inferior na inspiração e na expiração; ultrassonografia pulmonar — todos os campos com o mesmo padrão; ultrassonografia dos sistemas venosos femoral e poplíteo, sem e com teste de compressibilidade, com os mesmos achados nos dois membros).\n\nAssinale a alternativa que apresenta a conduta medicamentosa mais adequada neste momento.",
    imagens: ["/images/questions/rm2026-ad1/q01-pocus.jpg"],
    alternativas: [
      { letra: "A", texto: "Furosemida." },
      { letra: "B", texto: "Azitromicina." },
      { letra: "C", texto: "Rivaroxabana." },
      { letra: "D", texto: "Formoterol/budesonida." },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**Gabarito oficial: A — Furosemida**\n\n" +
      "O POCUS responde a questão. A ultrassonografia pulmonar mostra **linhas B difusas e confluentes** (artefatos verticais em \"cauda de cometa\" que partem da linha pleural, apagam as linhas A e acompanham a respiração) **em todos os campos** — o padrão B bilateral é sinônimo de **síndrome intersticial**, que neste contexto clínico significa congestão pulmonar. A veia cava inferior está **dilatada e com pouca variação respiratória** (pletórica), indicando pressão de átrio direito elevada. Somando dispneia progressiva, edema perimaleolar e bulhas hipofonéticas, o quadro é de **insuficiência cardíaca descompensada com congestão**, cujo tratamento imediato é **diurético de alça (furosemida)**.\n\n" +
      "Um detalhe importante: os sibilos não significam necessariamente broncoespasmo — a congestão pode cursar com \"asma cardíaca\", o que explica a melhora apenas discreta com salbutamol.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(B) Azitromicina:** não há febre, expectoração purulenta ou consolidação. Na pneumonia o padrão ultrassonográfico seria **focal** (consolidação com broncogramas aéreos), e não linhas B difusas e simétricas em todos os campos.\n" +
      "- **(C) Rivaroxabana:** o teste de compressibilidade **colapsou completamente** as veias femoral e poplítea bilateralmente — ou seja, **não há TVP** (a marca da trombose é justamente a veia que não colapsa sob compressão). Além disso, o paciente nega viagem/imobilização, não está taquicárdico nem hipoxêmico, e o TEP costuma cursar com padrão A (pulmão \"seco\") à ultrassonografia.\n" +
      "- **(D) Formoterol/budesonida:** trataria a asma, mas o achado dominante é volêmico, não obstrutivo. Insistir em broncodilatador/corticoide inalatório deixaria a congestão sem tratamento — e foi exatamente o que já falhou no pronto-socorro.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q02",
    grandeArea: "Clínica Médica",
    tema: "Nefrologia",
    subtema: "Distúrbios do sódio / Hiponatremia hipovolêmica",
    enunciado:
      "Mulher, 28 anos de idade, previamente hígida, procura atendimento de urgência. Queixa-se de diarreia aquosa há 4 dias com febre baixa. Teve 6 episódios por dia, com cólicas intensas, náuseas e hiporexia. O seu filho de 4 anos de idade está com os mesmos sintomas. Sinais vitais com PA de 110×68 mmHg, FC de 94 bpm, FR de 18 irpm, SpO2 de 99%, temperatura de 37,1 °C. Ao exame clínico, apresenta regular estado geral, mucosas secas, peristalse aumentada, desconforto abdominal difuso.\n\n**Exames laboratoriais:** Hb 13,7 g/dL · Leucócitos 15.890/mm³ · Plaquetas 384 mil/mm³ · Ur 47 mg/dL · Cr 1,18 mg/dL · Na⁺ 128 mEq/L · K⁺ 3,7 mEq/L · HCO₃⁻ 29 mEq/L\n\nAssinale a alternativa que apresenta um mecanismo fisiopatológico que faz parte do desenvolvimento da hiponatremia desta paciente.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Secreção inapropriada de ADH." },
      { letra: "B", texto: "Liberação de peptídeo natriurético." },
      { letra: "C", texto: "Elevação de aldosterona." },
      { letra: "D", texto: "Perda fecal de potássio." },
    ],
    gabaritoOficial: "C",
    comentarioGabarito:
      "**Gabarito oficial: C — Elevação de aldosterona**\n\n" +
      "Trata-se de **hiponatremia hipovolêmica** por gastroenterite: mucosas secas, relação ureia/creatinina elevada (47/1,18 ≈ 40, padrão pré-renal) e perda de fluido rico em sódio, reposto com líquidos hipotônicos. A depleção de volume dispara toda a resposta neuro-hormonal de retenção: **ativação do sistema renina-angiotensina-aldosterona** e liberação **não osmótica** de ADH. A banca aponta a elevação da aldosterona como parte desse processo — e o laboratório confirma que o eixo está ativado: **HCO₃⁻ de 29** (alcalose metabólica de contração, com excreção de H⁺) e potássio no limite inferior, ambos efeitos típicos do hiperaldosteronismo secundário.\n\n" +
      "Vale registrar a nuance conceitual: o mecanismo que **retém água livre** e efetivamente dilui o sódio é o ADH liberado por estímulo barorreceptor. A alternativa A é descartada não porque o ADH não participe, mas pelo adjetivo — veja abaixo.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Secreção inapropriada de ADH:** a SIADH exige paciente **euvolêmica**, com sódio urinário elevado e sem estímulo fisiológico para o hormônio. Aqui a secreção de ADH é **apropriada** — é a resposta correta do organismo à hipovolemia. Chamá-la de \"inapropriada\" trocaria o diagnóstico.\n" +
      "- **(B) Liberação de peptídeo natriurético:** os peptídeos natriuréticos são liberados pelo **estiramento atrial** (hipervolemia). Na depleção de volume eles estão suprimidos — o oposto do cenário.\n" +
      "- **(D) Perda fecal de potássio:** a depleção de potássio até pode contribuir para hiponatremia (saída de K⁺ e entrada de Na⁺ na célula), mas aqui o **K⁺ está em 3,7 mEq/L**, dentro da normalidade, o que torna esse mecanismo irrelevante neste caso.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q03",
    grandeArea: "Clínica Médica",
    tema: "Gastroenterologia",
    subtema: "Hipertensão portal / Profilaxia de sangramento varicoso",
    enunciado:
      "Homem, 53 anos de idade, tem esquistossomose hepatoesplênica e comparece em consulta ambulatorial de seguimento. Nota edema nos tornozelos desde a última consulta. Já teve episódios prévios de encefalopatia hepática. Faz uso crônico de lactulose. Sinais vitais com PA de 154×86 mmHg, FC de 89 bpm, FR de 16 irpm, SpO2 de 98%. Ao exame clínico, apresenta bom estado geral, vigil, orientado no tempo e no espaço, tônus normais, abdome plano, lobo esquerdo do fígado palpável, baço palpável, edema perimaleolar de 2+/4+.\n\n**Exames laboratoriais:** Hb 12,9 g/dL · Leucócitos 4.230/mm³ · Plaquetas 98 mil/mm³ · TGO/AST 37 U/L · TGP/ALT 43 U/L · Albumina 3,1 g/dL · INR 1,8 · Cr 1,37 mg/dL · Na⁺ 130 mEq/L · Urina tipo 1 normal\n\nEndoscopia digestiva alta com duas varizes esofágicas de grosso calibre, sem sinais de sangramento recente. Ultrassonografia de abdome superior com líquido livre em pequena quantidade na cavidade, aumento do lobo esquerdo do fígado e aumento do baço.\n\nCom base no caso clínico apresentado, assinale a alternativa que indica a melhor conduta terapêutica a ser realizada neste momento.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Infundir albumina." },
      { letra: "B", texto: "Introduzir carvedilol." },
      { letra: "C", texto: "Indicar paracentese." },
      { letra: "D", texto: "Restringir água diária." },
    ],
    gabaritoOficial: "B",
    comentarioGabarito:
      "**Gabarito oficial: B — Introduzir carvedilol**\n\n" +
      "O achado que muda a conduta agora é a endoscopia: **varizes esofágicas de grosso calibre, sem sangramento prévio**. Esse é o cenário clássico de **profilaxia primária de hemorragia varicosa**, indicada com **betabloqueador não seletivo** (propranolol, nadolol ou carvedilol) ou ligadura elástica. O carvedilol vem ganhando preferência por associar o bloqueio β não seletivo a um efeito **α1-bloqueador**, que reduz adicionalmente a resistência intra-hepática e diminui o gradiente de pressão venosa hepática de forma mais eficaz.\n\n" +
      "O restante do quadro (plaquetopenia, esplenomegalia, ascite discreta) apenas confirma a hipertensão portal — mas não exige intervenção imediata.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Infundir albumina:** albumina tem indicações precisas no cirrótico — peritonite bacteriana espontânea, **após paracentese de grande volume** (> 5 L) e síndrome hepatorrenal. Nenhuma delas está presente.\n" +
      "- **(C) Indicar paracentese:** a ascite é de **pequena quantidade**, sem tensão, sem febre/dor abdominal que sugiram PBE. Não há indicação diagnóstica nem terapêutica; a conduta para ascite leve é restrição de **sódio** e diurético, se necessário.\n" +
      "- **(D) Restringir água diária:** restrição hídrica é reservada à **hiponatremia significativa** (em geral Na⁺ < 125 mEq/L ou sintomática). Com Na⁺ de 130 mEq/L, restringir água não traz benefício e pode piorar a perfusão renal — o que se restringe na ascite é o **sal**, não a água.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q04",
    grandeArea: "Clínica Médica",
    tema: "Cardiologia",
    subtema: "Cardiomiopatias / Cardiomiopatia alcoólica",
    enunciado:
      "Homem, 47 anos de idade, possui antecedente de síndrome do túnel do carpo unilateral à direita. Procura o ambulatório por queixa de dispneia aos médios esforços. Relata despertar noturno por desconforto respiratório, que melhora com a ortostase. Consome de forma crônica 8 latas de cerveja por dia. Ao exame físico, apresenta bom estado geral, corado, hidratado. Auscultas cardíaca e pulmonar sem alterações. Abdome normotenso, indolor, presença de refluxo hepatojugular. Edema de membros inferiores bilateral.\n\n**Exames laboratoriais:** Hb 10,8 g/dL · Leucócitos 4.400/mm³ · Plaquetas 164 mil/mm³ · TGO/AST 48 U/L · TGP/ALT 36 U/L · Albumina 3,6 g/dL · INR 1,0 · TTPa R 0,9 · Bilirrubina total 0,6 mg/dL · Fosfatase alcalina 187 U/L · GGT 318 U/L · Saturação de transferrina 32% · Ferritina 997 ng/mL\n\nEcodopplercardiograma com estresse: fração de ejeção ventricular de 43%, volume diastólico de ventrículo esquerdo aumentado, ventrículo direito e átrios de tamanho normal, ausência de espessamento de septo, ausência de hipocinesia segmentar induzida por estresse farmacológico.\n\nCom relação ao caso clínico apresentado, assinale a alternativa que indica o diagnóstico pertinente.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Amiloidose subtipo ATTR." },
      { letra: "B", texto: "Cardiomiopatia alcóolica." },
      { letra: "C", texto: "Cardiomiopatia cirrótica." },
      { letra: "D", texto: "Hemocromatose." },
    ],
    gabaritoOficial: "B",
    comentarioGabarito:
      "**Gabarito oficial: B — Cardiomiopatia alcoólica**\n\n" +
      "O ecocardiograma define o fenótipo: **ventrículo esquerdo dilatado com fração de ejeção reduzida (43%), sem espessamento septal, sem hipocinesia segmentar induzida por estresse** — ou seja, uma **cardiomiopatia dilatada não isquêmica**. Com consumo de ~8 latas de cerveja/dia de forma crônica (bem acima do limiar cardiotóxico, classicamente > 80-90 g de etanol/dia por mais de 5 anos) e marcadores de uso pesado de álcool (**GGT 318**, macro/anemia, FA elevada), a etiologia alcoólica é a mais coerente.\n\n" +
      "Os detalhes \"distratores\" (túnel do carpo e ferritina alta) foram colocados justamente para testar se você ancora o raciocínio no ecocardiograma.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Amiloidose ATTR:** a síndrome do túnel do carpo é uma pista clássica (costuma preceder anos, e caracteristicamente é **bilateral**), mas a amiloidose produz padrão **restritivo/hipertrófico** — espessamento das paredes e do septo, átrios aumentados, *strain* com poupança apical. O enunciado nega explicitamente espessamento septal e descreve átrios normais e VE **dilatado** — o oposto do esperado.\n" +
      "- **(C) Cardiomiopatia cirrótica:** exigiria cirrose estabelecida, e aqui não há: **INR 1,0**, bilirrubina 0,6, albumina 3,6. Além disso, sua marca é FE em repouso normal ou hiperdinâmica com **resposta contrátil inadequada ao estresse** — e o teste de estresse foi normal.\n" +
      "- **(D) Hemocromatose:** a ferritina de 997 impressiona, mas ela é reagente de fase aguda e sobe no etilismo. O marcador de triagem é a **saturação de transferrina**, que precisaria estar **> 45%** — aqui está **32%**, normal, o que essencialmente afasta sobrecarga de ferro.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q05",
    grandeArea: "Clínica Médica",
    tema: "Dermatologia",
    subtema: "Prurido crônico sem lesão primária",
    enunciado:
      "Mulher, 58 anos de idade, comparece à consulta ambulatorial por prurido cutâneo intenso. Refere que há 7 meses iniciou prurido no tronco e nos membros inferiores, sem lesões cutâneas. Há 1 mês, evolui com piora progressiva do sintoma, que passou a ser diário, acometendo quase todo o corpo e interferindo em atividades diárias e sono. Tem diagnósticos de hipertensão arterial sistêmica, diabetes melito tipo 2, dislipidemia e osteoartrite. Faz uso de hidroclorotiazida, metformina, dapagliflozina, sinvastatina e tramadol. Ao exame físico, apresenta sinais vitais normais, pele com leve xerose e algumas lesões escoriadas em membros inferiores, sem outras anormalidades. Tem exames de hemograma completo, ureia, creatinina, TGO/AST, TGP/ALT, FA e GGT normais. Hemoglobina glicada de 7,3%.\n\nQual é a conduta mais apropriada a respeito do prurido neste momento?",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Hidratar a pele e usar corticoide tópico nas lesões." },
      { letra: "B", texto: "Substituir o tramadol por analgésicos simples orais." },
      { letra: "C", texto: "Prescrever gabapentina ou pregabalina orais." },
      { letra: "D", texto: "Prescrever anti-histamínico oral por quinze dias." },
    ],
    gabaritoOficial: "B",
    comentarioGabarito:
      "**Gabarito oficial: B — Substituir o tramadol por analgésicos simples orais**\n\n" +
      "Prurido **sem lesão cutânea primária** (só escoriações, que são secundárias ao ato de coçar) obriga a procurar causa sistêmica ou medicamentosa. A investigação básica foi normal — hemograma, função renal, provas hepáticas e colestase todas sem alteração —, o que afasta as causas clássicas (colestase, uremia, anemia ferropriva, doença linfoproliferativa). Sobra a lista de medicamentos, e nela há um culpado óbvio: o **tramadol**. Os opioides induzem prurido por ativação de **receptores µ** (mecanismo central, não histaminérgico) e também por degranulação mastocitária inespecífica. A conduta correta diante de prurido de provável causa medicamentosa é **retirar o agente suspeito** antes de empilhar tratamento sintomático.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Hidratar e corticoide tópico:** a hidratação até ajuda na xerose leve, mas corticoide tópico trata **inflamação cutânea** — e não há dermatose primária aqui. É tratar o arranhão e ignorar a causa.\n" +
      "- **(C) Gabapentina/pregabalina:** são boas opções para prurido **neuropático ou urêmico refratário**, mas como terapia de segunda linha, depois de afastar e corrigir causas reversíveis. Prescrevê-las agora adicionaria efeitos adversos (sedação, tontura) sem remover o gatilho.\n" +
      "- **(D) Anti-histamínico oral:** o prurido opioide é predominantemente **não histaminérgico**, motivo pelo qual os anti-histamínicos costumam falhar — funcionam sobretudo pelo efeito sedativo. Também não haveria por que limitar arbitrariamente a 15 dias um sintoma que já dura 7 meses.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q06",
    grandeArea: "Clínica Médica",
    tema: "Cardiologia",
    subtema: "Síndrome coronariana aguda / IAM de parede inferior",
    enunciado:
      "Homem, 53 anos de idade, possui antecedente de hipertensão e diabetes melito tipo 2. Faz uso de hidroclorotiazida, metformina e gliclazida. Comparece ao departamento de emergência com queixa de dor torácica há cerca de uma hora. Ao exame físico, apresenta PA de 90×60 mmHg, FC de 60 bpm, FR de 25 irpm. Regular estado geral, sudoreico. Auscultas cardíaca e pulmonar sem alterações. Abdome e extremidades sem alterações. Foi realizado o eletrocardiograma apresentado a seguir.\n\nCom base no caso clínico apresentado, assinale a alternativa que indica a terapia intravenosa imediata pertinente.",
    imagens: ["/images/questions/rm2026-ad1/q06-ecg.jpg"],
    alternativas: [
      { letra: "A", texto: "Dobutamina." },
      { letra: "B", texto: "Nitroglicerina." },
      { letra: "C", texto: "Noradrenalina." },
      { letra: "D", texto: "Cloreto de sódio 0,9%." },
    ],
    gabaritoOficial: "D",
    comentarioGabarito:
      "**Gabarito oficial: D — Cloreto de sódio 0,9%**\n\n" +
      "O ECG mostra **supradesnivelamento do segmento ST em DII, DIII e aVF** (maior em DIII que em DII) com **infradesnivelamento recíproco em DI e aVL**: **IAM com supra de ST de parede inferior**, tipicamente por oclusão da **coronária direita**. O ponto-chave é o conjunto **hipotensão (90×60) + bradicardia relativa (60 bpm) + ausculta pulmonar limpa**: essa tríade em um infarto inferior sugere fortemente **acometimento do ventrículo direito**.\n\n" +
      "O VD infartado fica rígido e dependente de pré-carga: o débito cardíaco passa a depender do enchimento. A conduta imediata é, portanto, **expansão volêmica com cristaloide** (e, claro, acionar a reperfusão — angioplastia primária). A confirmação se faz com as **derivações direitas (V3R/V4R)**, que devem ser solicitadas sempre que houver supra inferior.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(B) Nitroglicerina:** é a alternativa mais perigosa — nitrato reduz a pré-carga e, no infarto de VD, pode causar **colapso hemodinâmico**. É contraindicação clássica nesse cenário (assim como em hipotensão e uso recente de inibidores de PDE-5).\n" +
      "- **(A) Dobutamina:** inotrópico faz sentido no choque cardiogênico por falência de bomba do VE — que cursaria com congestão pulmonar. Aqui os pulmões estão limpos e o problema é **pré-carga insuficiente**, que se corrige primeiro com volume.\n" +
      "- **(C) Noradrenalina:** vasopressor é resgate para hipotensão **refratária após otimização da volemia**. Iniciar com ele, sem antes expandir, aumenta a pós-carga e o consumo miocárdico de oxigênio sem corrigir o mecanismo.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q07",
    grandeArea: "Clínica Médica",
    tema: "Hematologia",
    subtema: "Gamopatia monoclonal / MGUS",
    enunciado:
      "Homem, 68 anos de idade, passa em consulta ambulatorial. Ele tem fadiga crônica e o exame clínico é normal. Durante investigação, detectou-se uma anormalidade na eletroforese de proteínas, conforme imagem apresentada a seguir (componente monoclonal de 1,2 g/dL — 16,8%; gamaglobulinas 0,39 g/dL; proteína total 7,40 g/dL).\n\nForam realizados exames de hemograma completo, creatinina, cálcio e radiografias ósseas que estavam normais.\n\nCom base nessas informações, assinale a alternativa que apresenta a conduta indicada neste momento.",
    imagens: ["/images/questions/rm2026-ad1/q07-eletroforese.jpg"],
    alternativas: [
      { letra: "A", texto: "Imunofixação e pesquisa de cadeias leves livres no sangue." },
      { letra: "B", texto: "Biópsia de medula óssea e pesquisa por citogenética/FISH." },
      { letra: "C", texto: "Eletroforese de proteínas séricas a cada 6 meses." },
      { letra: "D", texto: "Cintilografia óssea ou tomografia de corpo inteiro." },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**Gabarito oficial: A — Imunofixação e pesquisa de cadeias leves livres no sangue**\n\n" +
      "A eletroforese apenas **detecta e quantifica** o pico monoclonal (1,2 g/dL). Ela não diz qual é a imunoglobulina envolvida. O próximo passo obrigatório é **caracterizar** o componente M: a **imunofixação** define a classe da cadeia pesada e o tipo de cadeia leve (IgG kappa, IgA lambda etc.), e a **dosagem de cadeias leves livres séricas** fornece a relação κ/λ.\n\n" +
      "Isso não é detalhe acadêmico: os três critérios que estratificam o risco de progressão da **MGUS** para mieloma são exatamente **(1)** componente M ≥ 1,5 g/dL, **(2)** isotipo **não IgG** e **(3)** relação de cadeias leves livres alterada. Sem imunofixação e cadeias leves, não é possível classificar o risco — nem decidir quem precisa de mielograma. Como não há critérios CRAB (cálcio, creatinina, hemograma e radiografias **normais**), a hipótese é MGUS.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(B) Biópsia de medula com FISH:** indicada quando há suspeita de mieloma/critérios CRAB ou MGUS de risco intermediário/alto. Com pico de 1,2 g/dL e sem os outros dados de risco ainda desconhecidos, é um passo à frente do necessário.\n" +
      "- **(C) Eletroforese a cada 6 meses:** é a conduta de **seguimento** de uma MGUS de baixo risco já caracterizada. Repetir o mesmo exame sem antes tipar o componente M não acrescenta informação.\n" +
      "- **(D) Cintilografia óssea:** é o exame **errado** para mieloma — as lesões são **osteolíticas puras**, sem reação osteoblástica, e por isso a cintilografia é frequentemente falso-negativa. O papel de imagem corporal total (TC de baixa dose, PET-TC ou RM) existe, mas vem **depois** da caracterização laboratorial, e as radiografias já foram normais.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q08",
    grandeArea: "Clínica Médica",
    tema: "Psiquiatria",
    subtema: "Transtornos de ansiedade / Agorafobia",
    enunciado:
      "Homem, 45 anos de idade, busca atendimento ambulatorial. Refere ter procurado o pronto-socorro 3 vezes nos últimos 4 meses, com crises de dor precordial, taquicardia, falta de ar, formigamento nas mãos e tontura. Durante as crises, que ocorriam quando ele estava em casa, ficava muito assustado achando que iria morrer. Nos atendimentos de urgência, realizou eletrocardiogramas, radiografias de tórax e exames de sangue de urgência que apresentaram resultados normais. Devido às crises, passou a evitar andar de elevador por ter medo de ter uma crise e não poder sair ou receber ajuda. Não há queixas descritas entre as crises.\n\nAlém do transtorno de pânico, qual é o diagnóstico mais apropriado a partir dos sintomas descritos?",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Agorafobia." },
      { letra: "B", texto: "Claustrofobia." },
      { letra: "C", texto: "Ansiedade generalizada." },
      { letra: "D", texto: "Fobia específica." },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**Gabarito oficial: A — Agorafobia**\n\n" +
      "A palavra-chave está no **motivo** da esquiva: ele evita o elevador **\"por ter medo de ter uma crise e não poder sair ou receber ajuda\"**. Esse é o núcleo conceitual da agorafobia no DSM-5: medo ou ansiedade acentuados relacionados a situações das quais **escapar seria difícil** ou nas quais **socorro poderia não estar disponível** caso surjam sintomas de pânico. O DSM-5 exige duas ou mais de cinco categorias (transporte público, espaços abertos, locais fechados, filas/multidões, sair sozinho de casa) — o elevador se enquadra em \"locais fechados\", e o diagnóstico é feito em conjunto com a evolução do quadro.\n\n" +
      "Note ainda que, no DSM-5, agorafobia e transtorno de pânico são **diagnósticos independentes** e podem (e frequentemente devem) ser codificados juntos — exatamente como o enunciado propõe.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(B) Claustrofobia:** seria o medo do **espaço fechado em si** (sufocar, ficar preso pelo ambiente). Aqui o objeto do medo não é o elevador, e sim a **crise de pânico** e a impossibilidade de obter ajuda.\n" +
      "- **(C) Ansiedade generalizada:** exige preocupação excessiva, difusa e **persistente** (≥ 6 meses) sobre vários domínios da vida, com sintomas presentes na maior parte dos dias. O enunciado é explícito: **\"não há queixas descritas entre as crises\"**.\n" +
      "- **(D) Fobia específica:** o medo se dirige a um objeto/situação circunscrito (altura, agulha, animal), e não à possibilidade de passar mal e não ser socorrido — que é o que caracteriza a esquiva agorafóbica.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q09",
    grandeArea: "Clínica Médica",
    tema: "Gastroenterologia",
    subtema: "Síndromes disabsortivas / Doença celíaca",
    enunciado:
      "Homem, 57 anos de idade, com peso de 74 kg, passa em atendimento ambulatorial. Ele tem hipotireoidismo e faz uso de 225 µg/dia de levotiroxina. Descreve que há 8 meses tem episódios progressivos de dor abdominal. A dor é em cólica, difusa, de intensidade leve a moderada. Associa episódios de evacuações amolecidas. Nunca teve saída de sangue, muco ou pus. Nega tenesmo. Acredita que os episódios têm relação com a alimentação, mas não percebe refeições ou alimentos claramente relacionados. Ele é tabagista (24 anos-maço), etilista social ocasional. Nega sibilos, prurido nasal ou congestão nasal. Os sinais vitais e o exame clínico são normais. Traz consigo uma enterotomografia normal.\n\n**Exames laboratoriais:** Hb 10,1 g/dL · VCM 67 fL · HCM 30 pg · Leucócitos 6.750/mm³ · Plaquetas 490 mil/mm³\n\nUma biópsia tecidual do trato gastrointestinal deste paciente, mais provavelmente, identificaria a presença de",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "granuloma." },
      { letra: "B", texto: "H. pylori." },
      { letra: "C", texto: "infiltrado linfocítico." },
      { letra: "D", texto: "infiltrado eosinofílico." },
    ],
    gabaritoOficial: "C",
    comentarioGabarito:
      "**Gabarito oficial: C — infiltrado linfocítico**\n\n" +
      "Três pistas apontam para **doença celíaca**:\n" +
      "1. **Anemia microcítica (VCM 67)** com trombocitose — padrão de **ferropenia**, a manifestação extraintestinal mais comum da doença celíaca no adulto, por má absorção de ferro no duodeno proximal;\n" +
      "2. **Necessidade de dose alta de levotiroxina** (225 µg/dia para 74 kg ≈ 3 µg/kg/dia, bem acima da dose usual de 1,6 µg/kg/dia) — a má absorção do hormônio é um sinal de alerta clássico para doença celíaca, que ainda se associa à tireoidite de Hashimoto como doença autoimune concomitante;\n" +
      "3. **Diarreia/cólicas crônicas relacionadas à alimentação com enterotomografia normal** — a lesão celíaca é histológica, não é vista em imagem.\n\n" +
      "A histologia esperada é a de **linfocitose intraepitelial**, hiperplasia de criptas e atrofia vilositária (classificação de Marsh) — daí o \"infiltrado linfocítico\". O diagnóstico completo exige sorologia (antitransglutaminase IgA com IgA total) **antes** de retirar o glúten, mais biópsia duodenal.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Granuloma:** sugere **doença de Crohn** — mas seria esperado achado em imagem (a enterotomografia foi **normal**), e granulomas não caseosos aparecem em menos de metade das biópsias. O quadro também carece de sinais inflamatórios sistêmicos e de acometimento perianal.\n" +
      "- **(B) H. pylori:** pode causar anemia ferropriva refratária, mas não explica **diarreia crônica com cólicas difusas** nem a má absorção de levotiroxina de forma tão marcada; a infecção é gástrica, e o quadro aqui é de intestino delgado.\n" +
      "- **(D) Infiltrado eosinofílico:** apontaria para **gastroenterite eosinofílica**, que costuma vir com história atópica e eosinofilia periférica. O enunciado nega explicitamente sibilos e sintomas nasais, e o hemograma não mostra eosinofilia.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q10",
    grandeArea: "Clínica Médica",
    tema: "Psiquiatria",
    subtema: "Psicofarmacologia / Efeitos adversos de ISRS",
    enunciado:
      "Mulher, 35 anos de idade, em acompanhamento ambulatorial por artrite reumatoide e depressão. Faz uso de metotrexato 10 mg semanal, ácido fólico 5 mg semanal e fluoxetina 20 mg à noite. Procura ambulatório por insônia há 2 meses. Exame físico geral sem alterações e articulações sem sinais de flogismo.\n\nAssinale a alternativa que apresenta a conduta adequada para a queixa da paciente.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Trocar fluoxetina por clonazepam." },
      { letra: "B", texto: "Associar fluoxetina com clonazepam." },
      { letra: "C", texto: "Aumentar dose da fluoxetina." },
      { letra: "D", texto: "Orientar uso da fluoxetina pela manhã." },
    ],
    gabaritoOficial: "D",
    comentarioGabarito:
      "**Gabarito oficial: D — Orientar uso da fluoxetina pela manhã**\n\n" +
      "A fluoxetina é o ISRS com perfil mais **ativador** (e meia-vida longa, com metabólito ativo, a norfluoxetina, que dura dias). Insônia é um efeito adverso bem descrito, e a paciente a está tomando **à noite** — a explicação mais provável e mais simples para a queixa. A conduta correta é a intervenção de menor risco e maior rendimento: **transferir a dose para a manhã**, mantendo o tratamento antidepressivo que ela precisa para a depressão.\n\n" +
      "Esse raciocínio — antes de acrescentar fármaco, revisar horário, dose e o próprio medicamento em uso — é o que a questão quer avaliar (princípio de \"desprescrever/ajustar antes de somar\").\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Trocar fluoxetina por clonazepam:** seria abandonar o tratamento da **depressão**. Benzodiazepínico não é antidepressivo; a paciente ficaria sem cobertura para o transtorno de base.\n" +
      "- **(B) Associar clonazepam:** adiciona risco de **dependência, tolerância, quedas e prejuízo cognitivo** para tratar um efeito adverso que se resolve mudando o horário da dose. Benzodiazepínicos podem ter papel transitório em insônia grave, mas nunca como primeira medida quando há causa identificável e reversível.\n" +
      "- **(C) Aumentar a dose da fluoxetina:** intensificaria justamente o efeito ativador responsável pela insônia. Aumento de dose só faria sentido diante de resposta antidepressiva insuficiente — o que o enunciado não sugere.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q11",
    grandeArea: "Clínica Médica",
    tema: "Neurologia",
    subtema: "AVC / Síndromes corticais e heminegligência",
    enunciado:
      "Mulher, 74 anos de idade, tabagista, tem hipertensão e diabetes. Foi encontrada confusa em casa pela filha, que há 2 dias atrás havia a visto bem. Na admissão no pronto-socorro, encontrava-se afebril, eupneica, com PA de 170×110 mmHg, FC de 102 bpm, glicemia capilar de 145 mg/dL. Ao exame neurológico, apresentou-se vigil, alerta, irritada, afirmando “estou bem, quero ir para casa”. Tinha o olhar desviado para a direita quando distraída, mas conseguia olhar para a esquerda quando instruída pelo examinador. A paciente percebia o dedo do examinador em todos os quadrantes no exame de campos visuais por confrontação. Quando solicitada a ler um texto, começava a partir do meio da página e lia apenas o lado direito das frases repetidamente. Não apresentava fraqueza muscular.\n\nAssinale a alternativa que apresenta uma imagem de ressonância magnética compatível com o quadro da paciente descrita.",
    imagens: [
      "/images/questions/rm2026-ad1/q11-rm-a.jpg",
      "/images/questions/rm2026-ad1/q11-rm-b.jpg",
      "/images/questions/rm2026-ad1/q11-rm-c.jpg",
      "/images/questions/rm2026-ad1/q11-rm-d.jpg",
    ],
    alternativas: [
      { letra: "A", texto: "Imagem (A) — 1ª imagem acima." },
      { letra: "B", texto: "Imagem (B) — 2ª imagem acima." },
      { letra: "C", texto: "Imagem (C) — 3ª imagem acima." },
      { letra: "D", texto: "Imagem (D) — 4ª imagem acima." },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**Gabarito oficial: A**\n\n" +
      "O exame neurológico descreve uma **heminegligência (negligência hemiespacial) à esquerda**, e não uma hemianopsia:\n" +
      "- **desvio ocular conjugado para a direita quando distraída**, mas com capacidade de olhar para a esquerda **quando instruída** — indica déficit de atenção, não paresia do olhar;\n" +
      "- **campos visuais normais à confrontação** — o que exclui déficit campimétrico como explicação;\n" +
      "- **dislexia de negligência**: lê apenas o lado direito das frases e ignora a metade esquerda do texto;\n" +
      "- **anosognosia** (\"estou bem, quero ir para casa\"), típica de lesão do hemisfério direito.\n\n" +
      "A rede da atenção espacial é dominada pelo **hemisfério direito**, com papel central do **lobo parietal (junção temporoparietal) direito**. Logo, a imagem compatível é a que mostra lesão **parietal direita** — e, em corte axial, o lado direito do paciente aparece à **esquerda da imagem**. A alternativa **A** mostra exatamente isso: hipersinal em FLAIR na região **parieto-temporal direita**, compatível com infarto de ramo da artéria cerebral média direita (território posterior), sem comprometer a via motora — o que explica a ausência de fraqueza.\n\n" +
      "**Por que as outras estão erradas:** as demais imagens correspondem a cortes/territórios que não explicam a síndrome — lesões em topografia inferior (temporo-occipital, nível dos giros temporais mediais/mesencéfalo) ou exame sem lesão cortical parietal direita. Lesões occipitais produziriam **hemianopsia homônima** (com campos alterados à confrontação, o que não ocorreu); lesões do hemisfério **esquerdo** dariam afasia e/ou déficit motor direito; e lesões que atingissem a cápsula interna cursariam com **hemiparesia**, explicitamente ausente aqui.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q12",
    grandeArea: "Clínica Médica",
    tema: "Endocrinologia",
    subtema: "Cetoacidose diabética / Distúrbios do potássio",
    enunciado:
      "Mulher, 22 anos de idade, procura o pronto-socorro por indisposição. Descreve ter polifagia, poliúria e polidipsia progressivas no último mês, com piora na última semana. Nos últimos dois dias, teve náuseas, alguns vômitos e passou a maior parte do dia sentada por indisposição. Ao exame clínico, apresentou PA de 110×62 mmHg, FC de 106 bpm, FR de 28 irpm, temperatura 36,2 °C, SpO2 de 98%, mucosas secas, vigil, sem sinais de desconforto respiratório, **força grau IV nos membros inferiores**, sem outras anormalidades.\n\n**Exames laboratoriais:** Glicemia 482 mg/dL · pH 7,27 · HCO₃⁻ 12 mEq/L · pCO₂ 26 mmHg · Cetonas detectadas no sangue\n\nUm eletrocardiograma foi realizado e pode ser observado na imagem a seguir.\n\nAssinale a alternativa que contém o item mais apropriado à prescrição imediata da paciente.",
    imagens: ["/images/questions/rm2026-ad1/q12-ecg.jpg"],
    alternativas: [
      { letra: "A", texto: "Bicarbonato de sódio." },
      { letra: "B", texto: "Insulina em bomba de infusão." },
      { letra: "C", texto: "Adenosina em bólus." },
      { letra: "D", texto: "Cloreto de potássio." },
    ],
    gabaritoOficial: "D",
    comentarioGabarito:
      "**Gabarito oficial: D — Cloreto de potássio**\n\n" +
      "O diagnóstico é **cetoacidose diabética** (glicemia 482, pH 7,27, HCO₃⁻ 12, cetonemia). A pegadinha está no que vem **antes** da insulina. O ECG mostra o padrão de **hipocalemia**: **onda T achatada, infradesnivelamento do ST e onda U proeminente** (fusão T-U, mais visível nas derivações precordiais). Isso se soma a uma pista clínica frequentemente ignorada: **força grau IV nos membros inferiores** — fraqueza muscular por hipopotassemia.\n\n" +
      "Na CAD o potássio corporal total está **sempre depletado** (diurese osmótica, vômitos, hiperaldosteronismo secundário), mesmo quando o potássio sérico parece normal — porque a acidose e a falta de insulina deslocam K⁺ para fora das células. Ao iniciar insulina, o K⁺ volta rapidamente para o intracelular, e uma hipocalemia já existente pode virar **arritmia fatal**. Por isso as diretrizes (ADA) determinam: se **K⁺ < 3,3 mEq/L**, **adiar a insulina** e repor potássio primeiro; entre 3,3 e 5,2, repor junto com a hidratação.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(B) Insulina em bomba:** é a base do tratamento da CAD, mas **não pode ser o item imediato** diante de evidência de hipocalemia — administrá-la antes de repor potássio é justamente o erro que a questão testa.\n" +
      "- **(A) Bicarbonato de sódio:** reservado a acidose **grave (pH < 6,9)**. Com pH de 7,27 não há indicação, e o bicarbonato ainda **agrava a hipocalemia** (desloca K⁺ para dentro da célula), além de risco de acidose liquórica paradoxal e edema cerebral.\n" +
      "- **(C) Adenosina em bólus:** usada em taquicardias supraventriculares paroxísticas. A paciente está em **taquicardia sinusal** (106 bpm), resposta fisiológica à desidratação e à acidose — tratar a causa, não o ritmo.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q13",
    grandeArea: "Medicina Preventiva e Social",
    tema: "Epidemiologia clínica",
    subtema: "Testes diagnósticos / Razão de verossimilhança",
    enunciado:
      "Homem, 58 anos de idade, procura atendimento por dispneia. A médica residente, que realizou o atendimento, observou a presença de um achado clínico que favoreceu, significativamente, a possibilidade de se tratar de um caso de insuficiência cardíaca.\n\nA partir da análise da tabela, assinale a alternativa que contém o achado clínico observado.\n\n| Sinal clínico | Sensibilidade (%) | Especificidade (%) | Razão de verossimilhança positiva | Razão de verossimilhança negativa |\n| --- | --- | --- | --- | --- |\n| (A) Hepatomegalia | 3,2 | 97 | 1,07 | 1,00 |\n| (B) Terceira bulha | 10 | 85 | 0,67 | 1,06 |\n| (C) Estertores | 29 | 77 | 1,26 | 0,92 |\n| (D) Refluxo abdominojugular | 33 | 94 | 5,50 | 0,71 |",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Hepatomegalia." },
      { letra: "B", texto: "Terceira bulha." },
      { letra: "C", texto: "Estertores." },
      { letra: "D", texto: "Refluxo abdominojugular." },
    ],
    gabaritoOficial: "D",
    comentarioGabarito:
      "**Gabarito oficial: D — Refluxo abdominojugular**\n\n" +
      "A pergunta é sobre qual achado, **quando presente**, mais aumenta a probabilidade da doença. Quem responde isso é a **razão de verossimilhança positiva (RV+)**, não a sensibilidade nem a especificidade isoladamente.\n\n" +
      "Regra prática de interpretação da RV+:\n" +
      "- **RV+ ≈ 1** → o achado **não altera** a probabilidade (exame inútil para confirmar);\n" +
      "- **RV+ 2 a 5** → aumento pequeno;\n" +
      "- **RV+ 5 a 10** → aumento **moderado a importante**;\n" +
      "- **RV+ > 10** → aumento grande (praticamente confirma).\n\n" +
      "O refluxo abdominojugular tem **RV+ = 5,50**, de longe a maior da tabela — em termos de probabilidade pós-teste, desloca a suspeita em cerca de **+30 pontos percentuais** (regra dos 15-30-45 para RV+ de 2, 5 e 10). É, portanto, o achado que \"favoreceu significativamente\" o diagnóstico.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Hepatomegalia:** tem especificidade alta (97%), o que costuma enganar — mas a **RV+ é 1,07**, ou seja, praticamente **não muda nada** na probabilidade. Isso ocorre porque sua sensibilidade é baixíssima (3,2%): o cálculo RV+ = sens/(1−esp) = 0,032/0,03 ≈ 1,07.\n" +
      "- **(B) Terceira bulha:** na tabela apresentada, a **RV+ é 0,67** — menor que 1, ou seja, segundo esses dados o achado até **reduziria** a probabilidade. (Na literatura clássica a B3 tem RV+ alta; a questão pede a leitura **da tabela fornecida**, e é isso que deve guiar a resposta.)\n" +
      "- **(C) Estertores:** RV+ de 1,26 — aumento desprezível. Estertores são inespecíficos e aparecem em pneumonia, fibrose, DPOC e até em idosos hígidos.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q14",
    grandeArea: "Clínica Médica",
    tema: "Medicina de Emergência",
    subtema: "Via aérea / Complicações da intubação orotraqueal",
    enunciado:
      "Mulher, 53 anos de idade, antecedentes desconhecidos. Trazida à sala de emergência com relato de tosse produtiva, febre e prostração nos últimos 3 dias. Durante atendimento, evoluiu com franco desconforto respiratório, foi submetida à intubação orotraqueal e foram realizados procedimentos para estabilização. Ao exame físico, após os procedimentos, apresentou PA de 102×74 mmHg, FC de 112 bpm, SpO2 de 92%, temperatura de 37,9 °C. Regular estado geral, corada, hidratada. **Murmúrios vesiculares presentes à direita e globalmente reduzidos à esquerda.** Ausculta cardíaca e exame abdominal sem alterações. Extremidades com perfusão periférica adequada.\n\nAssinale a alternativa que apresenta uma imagem de radiografia compatível com o quadro da paciente.",
    imagens: [
      "/images/questions/rm2026-ad1/q14-rx-a.jpg",
      "/images/questions/rm2026-ad1/q14-rx-b.jpg",
      "/images/questions/rm2026-ad1/q14-rx-c.jpg",
      "/images/questions/rm2026-ad1/q14-rx-d.jpg",
    ],
    alternativas: [
      { letra: "A", texto: "Radiografia (A) — 1ª imagem acima." },
      { letra: "B", texto: "Radiografia (B) — 2ª imagem acima." },
      { letra: "C", texto: "Radiografia (C) — 3ª imagem acima." },
      { letra: "D", texto: "Radiografia (D) — 4ª imagem acima." },
    ],
    gabaritoOficial: "B",
    comentarioGabarito:
      "**Gabarito oficial: B**\n\n" +
      "Murmúrio vesicular **presente à direita e globalmente reduzido à esquerda logo após a intubação** é o quadro clássico de **intubação seletiva do brônquio-fonte direito** — que é mais curto, mais calibroso e mais verticalizado que o esquerdo, sendo o destino natural de um tubo aprofundado. Ventilando apenas o pulmão direito, o esquerdo colaba: **atelectasia total do pulmão esquerdo**.\n\n" +
      "A radiografia **B** mostra exatamente isso: **opacificação homogênea (\"velamento\") de todo o hemitórax esquerdo**, com pulmão direito aerado e, sobretudo, **desvio do mediastino e da traqueia para o mesmo lado da opacidade**, além de elevação da hemicúpula — os sinais de **perda de volume**. A conduta é imediata e simples: tracionar o tubo (reposicionar) e reavaliar a ausculta.\n\n" +
      "**Por que as outras estão erradas (o raciocínio que vale a prova):**\n" +
      "- O ponto discriminante em um hemitórax opaco é **para onde o mediastino desvia**. Se desvia **para o lado oposto** à opacidade, trata-se de processo que **ocupa espaço** — derrame pleural volumoso; se desvia **para o mesmo lado**, é **perda de volume** (atelectasia/colapso), como em B.\n" +
      "- Radiografias com **infiltrados bilaterais difusos** ou com **consolidação focal à direita** não explicam a assimetria descrita (a ausculta reduzida é **à esquerda**).\n" +
      "- Um **pneumotórax hipertensivo** — outro diagnóstico a considerar após intubação — produziria hipertransparência (campo **escuro**) com desvio contralateral e colapso hemodinâmico, e não velamento.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q15",
    grandeArea: "Clínica Médica",
    tema: "Alergia e Imunologia",
    subtema: "Urticária e angioedema",
    enunciado:
      "Mulher, 23 anos de idade, faz acompanhamento médico por rinite alérgica, dismenorreia e cefaleia tensional, com uso recorrente de anti-inflamatórios e analgésicos. A paciente comparece em consulta ambulatorial de rotina e refere que, nos últimos 8 meses, procurou o pronto-atendimento quatro vezes por edema em pálpebras e lábios. Um dos episódios foi acompanhado de edema de língua. Outro episódio foi acompanhado de lesões de pele eritematosas, edematosas e pruriginosas. Em um dos casos havia ingerido amendoim. Em duas ocasiões, recebeu adrenalina intramuscular com melhora do quadro. Nega que tenha ocorrido hipotensão, dispneia, diarreia ou dor abdominal nos quatro atendimentos.\n\nQual é a causa mais provável do quadro clínico desta paciente?",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Urticária aguda." },
      { letra: "B", texto: "Alergia alimentar." },
      { letra: "C", texto: "Anafilaxia recorrente." },
      { letra: "D", texto: "Angioedema hereditário." },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**Gabarito oficial: A — Urticária aguda**\n\n" +
      "O quadro é de **urticária com angioedema**, mediados por **histamina** (mastócitos): lesões **eritematosas, edematosas e pruriginosas** em um dos episódios, edema de pálpebras/lábios/língua, com boa resposta ao tratamento. O gatilho mais provável está bem escondido na primeira linha do enunciado: **uso recorrente de anti-inflamatórios (AINEs)** para dismenorreia e cefaleia. AINEs são uma das causas mais comuns de urticária/angioedema recorrente por mecanismo **não alérgico** (inibição da COX-1 com desvio para leucotrienos), e a associação com **rinite** ainda levanta a possibilidade de doença respiratória exacerbada por AINE.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(C) Anafilaxia recorrente:** anafilaxia exige acometimento **sistêmico** — hipotensão, ou envolvimento respiratório (dispneia, broncoespasmo, estridor), ou sintomas gastrointestinais persistentes. O enunciado **nega explicitamente** todos eles nas quatro ocorrências. Ter recebido adrenalina não define anafilaxia: a adrenalina foi usada de forma preventiva pelo edema de via aérea superior potencial.\n" +
      "- **(B) Alergia alimentar:** só **um** dos quatro episódios teve relação com alimento (amendoim); alergia alimentar IgE-mediada é **reprodutível** — ocorre de forma consistente minutos após a exposição ao mesmo alimento. Aqui os episódios se repetem **sem** ele.\n" +
      "- **(D) Angioedema hereditário:** é mediado por **bradicinina**, e por isso tem características opostas às descritas: **não** cursa com urticária nem prurido, é **doloroso/tensional**, evolui em horas, costuma ter história familiar e crises abdominais, e — o mais importante — **não responde a adrenalina, anti-histamínico ou corticoide**. A resposta à adrenalina praticamente exclui o diagnóstico.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q16",
    grandeArea: "Clínica Médica",
    tema: "Hematologia",
    subtema: "Linfadenopatia / Linfoma",
    enunciado:
      "Mulher, 35 anos de idade, previamente hígida, procura o ambulatório. Há 3 meses, queixa-se de calafrios ocorrendo 3 vezes por semana, além de prurido generalizado, sem melhora com uso de hidratantes. Relata edema facial leve ao despertar, com melhora ao longo do dia. Notou gânglio aumentado à direita e passou em odontologista que atribuiu a um procedimento feito no mês anterior. Ao exame clínico, apresentou PA de 113×66 mmHg, FC de 112 bpm, temperatura de 37,1 ºC, FR de 18 irpm, SpO2 de 97% em ar ambiente. Linfonodo cervical direito aumentado, firme, indolor, não aderido, medindo cerca de 2,5 cm. Turgência jugular discreta. Sem sinais de congestão pulmonar ou derrame pleural. Ausência de estertores ou sibilos. Abdome flácido, indolor, sem visceromegalias.\n\nAssinale a alternativa que apresenta a conduta apropriada neste momento.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Sorologia para mononucleose." },
      { letra: "B", texto: "Amoxicilina/clavulanato por 7 dias." },
      { letra: "C", texto: "Biópsia do linfonodo." },
      { letra: "D", texto: "Prednisona oral por 5 dias." },
    ],
    gabaritoOficial: "C",
    comentarioGabarito:
      "**Gabarito oficial: C — Biópsia do linfonodo**\n\n" +
      "Todos os sinais de alarme de linfadenopatia estão presentes: linfonodo **> 2 cm, firme, indolor, persistente há 3 meses**, associado a **sintomas B** (calafrios/sudorese), **prurido generalizado** — sintoma clássico do **linfoma de Hodgkin** — e, o achado mais preocupante, **edema facial matinal com turgência jugular**, sugerindo **compressão da veia cava superior** por massa mediastinal. Esse conjunto exige **diagnóstico histológico imediato**, de preferência por **biópsia excisional** do linfonodo (a PAAF costuma ser insuficiente, pois o diagnóstico de linfoma depende da arquitetura do tecido).\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Sorologia para mononucleose:** a mononucleose cursa com quadro **agudo** (faringite, febre, linfadenopatia generalizada, linfocitose atípica) em geral autolimitado em semanas — não com 3 meses de evolução, prurido e sinais de massa mediastinal.\n" +
      "- **(B) Amoxicilina/clavulanato:** a atribuição ao procedimento odontológico é a **armadilha** da questão. Adenite bacteriana é **dolorosa, quente, com sinais flogísticos** e evolui em dias; aqui o linfonodo é indolor e persiste há meses. Prescrever antibiótico só atrasaria o diagnóstico.\n" +
      "- **(D) Prednisona oral:** é potencialmente **perigoso** — corticoide antes da biópsia pode induzir lise parcial do tecido linfoide e **inviabilizar ou distorcer o diagnóstico histológico** do linfoma, além de mascarar sintomas.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q17",
    grandeArea: "Clínica Médica",
    tema: "Cardiologia",
    subtema: "Hipertensão arterial / Técnica de medida da PA",
    enunciado:
      "Homem, 43 anos de idade, possui antecedentes de diabetes melito tipo 2 e sobrepeso. Comparece em consulta para seguimento de controle glicêmico. Marido do paciente refere ronco esporádico em noites após ingestão de álcool e nega pausas respiratórias. Paciente nega sonolência diurna ou cefaleia. Foi realizada aferição de pressão arterial na triagem, que identificou valor de 148×92 mmHg.\n\nQual deve ser o próximo passo na avaliação da pressão arterial em consultório?",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Solicitar uma polissonografia tipo 1 (laboratório de sono)." },
      { letra: "B", texto: "Indicar Monitorização Ambulatorial da Pressão Arterial (MAPA)." },
      { letra: "C", texto: "Reavaliar medida de pressão arterial em consulta de retorno." },
      { letra: "D", texto: "Checar comprimento e largura do manguito utilizado na medição." },
    ],
    gabaritoOficial: "D",
    comentarioGabarito:
      "**Gabarito oficial: D — Checar comprimento e largura do manguito utilizado na medição**\n\n" +
      "A pergunta é sobre o **próximo passo na avaliação da PA em consultório** — ou seja, ainda dentro da medida. Antes de rotular um valor como alterado, é preciso garantir que a **técnica** foi adequada, e o erro sistemático mais comum (especialmente em pacientes com **sobrepeso**, como este) é o **manguito pequeno demais** para a circunferência do braço, o que **superestima** a pressão em até 10-30 mmHg.\n\n" +
      "A regra: a **bolsa inflável** deve ter largura correspondente a ~40% da circunferência do braço e comprimento capaz de envolver **80-100%** dela. Outras condições da medida válida: repouso de 3-5 minutos, bexiga vazia, sem café/cigarro nos 30 minutos anteriores, braço apoiado na altura do coração, e ao menos duas medidas.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(C) Reavaliar em consulta de retorno:** é um passo **legítimo, mas posterior** — o diagnóstico de HAS exige medidas em dias/consultas diferentes. Só que repetir uma medida feita com técnica errada apenas reproduz o erro.\n" +
      "- **(B) MAPA:** excelente para confirmar diagnóstico, avaliar hipertensão do avental branco/mascarada e o descenso noturno — mas é o passo **seguinte**, depois de uma medida de consultório confiável. Pedi-la agora seria usar um exame caro para resolver um problema de aferição.\n" +
      "- **(A) Polissonografia tipo 1:** o enunciado praticamente **descarta** apneia obstrutiva relevante — ronco apenas esporádico e ligado ao álcool, **sem pausas respiratórias, sem sonolência diurna e sem cefaleia matinal**. Não há indicação, e nada disso responde à pergunta feita.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q18",
    grandeArea: "Ginecologia e Obstetrícia",
    tema: "Planejamento familiar",
    subtema: "Contracepção hormonal combinada e risco de TEV",
    enunciado:
      "Mulher, 28 anos de idade, saudável, com gestação prévia sem intercorrências, procura atendimento ginecológico para iniciar o uso de contracepção hormonal combinada. Ela não possui história pessoal ou familiar de trombose venosa profunda, tromboembolia pulmonar ou complicações gestacionais. Soube por amigos do risco de trombose relacionado ao uso desse tipo de contraceptivo e solicita a realização de exames para pesquisa de trombofilias hereditárias antes de iniciar o método.\n\n| Trombofilia hereditária | Prevalência na população geral | Prevalência em pacientes com TEV | Risco relativo para 1º episódio de TEV |\n| --- | --- | --- | --- |\n| Deficiência de antitrombina | 0,02% | 1% | 5 a 10 |\n| Deficiência de proteína C | 0,2% | 3% | 4 a 6,5 |\n| Deficiência de proteína S | 0,03% – 0,13% | 2% | 1 a 10 |\n| Fator V de Leiden (heterozigoto) | 3% – 7% | 20% | 3 a 5 |\n| Mutação G20210A da protrombina (heterozigoto) | 0,7% – 4% | 5% | 2 a 3 |\n\nCom base nas evidências disponíveis na tabela e o risco de tromboembolia em usuárias de contraceptivos orais, qual é o melhor aconselhamento neste caso?",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Solicitar a pesquisa das trombofilias mais prevalentes na população." },
      { letra: "B", texto: "Solicitar as pesquisas das trombofilias com maior risco relativo de TEV." },
      { letra: "C", texto: "Realizar triagem laboratorial para as trombofilias hereditárias disponíveis." },
      { letra: "D", texto: "Não há necessidade de investigar trombofilias hereditárias." },
    ],
    gabaritoOficial: "D",
    comentarioGabarito:
      "**Gabarito oficial: D — Não há necessidade de investigar trombofilias hereditárias**\n\n" +
      "O rastreamento universal de trombofilias hereditárias **antes** de iniciar contraceptivo combinado **não é recomendado** por nenhuma diretriz (ACOG, OMS, sociedades de hematologia). A tabela existe justamente para você demonstrar o porquê, com números:\n\n" +
      "- As trombofilias de **maior risco relativo** (antitrombina, proteína C e S) são **raríssimas** — prevalência de 0,02% a 0,2%. Seria preciso testar dezenas de milhares de mulheres para encontrar poucas portadoras.\n" +
      "- As **mais prevalentes** (fator V de Leiden, protrombina G20210A) têm risco relativo apenas **moderado** (2 a 5) — e, como o risco **absoluto** de TEV em jovens é baixo (cerca de 2-10/10.000 mulheres-ano em usuárias), mesmo multiplicado ele permanece pequeno.\n" +
      "- Estima-se que seja necessário rastrear **milhares** de mulheres (e negar o método a muitas) para evitar **um único** episódio de TEV — com o custo adicional de gestações não planejadas, cujo risco de trombose é **maior** do que o do contraceptivo (o risco de TEV na gravidez e no puerpério supera o da pílula).\n\n" +
      "O que realmente guia a conduta é a **história clínica**: TEV prévio, história familiar de primeiro grau em idade jovem, trombofilia já conhecida na família, enxaqueca com aura, tabagismo acima de 35 anos. Nada disso está presente aqui.\n\n" +
      "**Por que as outras estão erradas:** **(A)**, **(B)** e **(C)** são variações da mesma conduta equivocada — rastrear sem indicação. Além do custo e da baixa relação custo-efetividade, um resultado positivo isolado em paciente assintomática gera **ansiedade, rótulo e restrição desnecessária** de métodos eficazes; e um resultado negativo **não exclui** risco de trombose, podendo dar falsa segurança (a maioria dos eventos ocorre em pessoas sem trombofilia identificável).",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q19",
    grandeArea: "Clínica Médica",
    tema: "Infectologia",
    subtema: "Pneumonia hospitalar / Interpretação de hemocultura",
    enunciado:
      "Homem, 73 anos de idade, com antecedente de insuficiência cardíaca de fração de ejeção reduzida e hipertensão arterial sistêmica. Internado por descompensação da insuficiência cardíaca por má adesão. Após 8 dias de internação hospitalar, intercorreu com febre, tosse produtiva, taquicardia e pressão arterial média limítrofe.\n\n**Exames laboratoriais:** Hb 14,2 mg/dL · Leucócitos 9.200/mm³ · Plaquetas 184 mil/mm³ · Cr 0,9 mg/dL · Hemocultura com identificação de *Staphylococcus epidermidis* em frasco aeróbio após 22h, frasco anaeróbio e outro par de hemocultura seguem negativos.\n\nAssinale a alternativa que apresenta a antibioticoterapia mais pertinente para o caso apresentado.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Ceftriaxone e azitromicina." },
      { letra: "B", texto: "Piperacilina com tazobactam." },
      { letra: "C", texto: "Vancomicina." },
      { letra: "D", texto: "Oxacilina." },
    ],
    gabaritoOficial: "B",
    comentarioGabarito:
      "**Gabarito oficial: B — Piperacilina com tazobactam**\n\n" +
      "Duas decisões independentes precisam ser tomadas aqui.\n\n" +
      "**1) A hemocultura é contaminação.** *Staphylococcus epidermidis* é estafilococo **coagulase-negativo**, integrante da flora da pele e o contaminante mais comum de hemoculturas. Os critérios que confirmam isso no caso: crescimento em **apenas 1 frasco de 4** (o par anaeróbio e o segundo par negativos) e **tempo de positivação tardio (22h)** — bacteremia verdadeira tende a positivar precocemente (< 16h) e em **múltiplos frascos**. Além disso, não há foco compatível (sem cateter de longa permanência, prótese valvar ou dispositivo cardíaco descritos).\n\n" +
      "**2) O quadro clínico é de pneumonia hospitalar.** Febre, tosse produtiva e instabilidade hemodinâmica limítrofe surgindo **após 48 h de internação** (aqui, no 8º dia) caracterizam **pneumonia adquirida no hospital**, com risco de patógenos MDR (bacilos Gram-negativos, incluindo *Pseudomonas aeruginosa*). A cobertura empírica adequada é um **betalactâmico antipseudomonas**, como piperacilina-tazobactam (alternativas: cefepima, meropenem).\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(C) Vancomicina:** seria tratar o **contaminante**. Ela entraria em pneumonia hospitalar apenas se houvesse fatores de risco para **MRSA** (alta prevalência local, uso recente de antibiótico EV, choque séptico/ventilação mecânica) — e, mesmo assim, **associada** à cobertura para Gram-negativos, nunca isolada.\n" +
      "- **(D) Oxacilina:** cobre *S. aureus* **sensível à meticilina** e não cobre Gram-negativos hospitalares. Além de tratar o contaminante, deixaria descoberto o agente provável. A maioria dos *S. epidermidis* hospitalares, aliás, é resistente à oxacilina.\n" +
      "- **(A) Ceftriaxone e azitromicina:** é o esquema de **pneumonia adquirida na comunidade**, sem atividade antipseudomonas — inadequado para um quadro que começou no 8º dia de internação.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q20",
    grandeArea: "Clínica Médica",
    tema: "Neurologia",
    subtema: "Parkinsonismo medicamentoso",
    enunciado:
      "Homem, 62 anos de idade, com histórico de hipertensão arterial sistêmica e dislipidemia, foi recentemente internado devido a infarto agudo do miocárdio de parede inferior, tratado com sucesso por intervenção coronariana percutânea primária. Ficou internado por 14 dias para controle sintomático. Neste período, a família notou o surgimento de tremores simétricos em repouso, predominantemente em membros superiores, associados à lentificação dos movimentos e dificuldade de marcha, com piora progressiva ao longo dos dias. Ao exame neurológico, o paciente apresentava rigidez em “roda denteada” em ambos os membros superiores, bradicinesia e tremor de repouso bilateral, mais proeminente nos membros superiores, com frequência de 4-6 Hz. A velocidade da marcha encontrava-se reduzida, com passos curtos e redução do balanço passivo dos membros superiores.\n\nAssinale a alternativa que apresenta a medicação mais provavelmente associada ao surgimento desses sintomas no caso descrito.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Clonazepam." },
      { letra: "B", texto: "Carvedilol." },
      { letra: "C", texto: "Bromoprida." },
      { letra: "D", texto: "Losartana." },
    ],
    gabaritoOficial: "C",
    comentarioGabarito:
      "**Gabarito oficial: C — Bromoprida**\n\n" +
      "O quadro é um **parkinsonismo medicamentoso** (secundário a fármacos), a segunda causa mais comum de parkinsonismo depois da doença de Parkinson. Dois dados o distinguem da doença de Parkinson idiopática: a instalação **subaguda** (dias a semanas, durante a internação) e, principalmente, a **simetria** dos sinais — a doença de Parkinson começa tipicamente de forma **assimétrica**.\n\n" +
      "A **bromoprida** (assim como a metoclopramida) é um **antagonista de receptores dopaminérgicos D2**, largamente prescrita como antiemética/procinética em internações. Ao bloquear a via nigroestriatal, reproduz todos os sinais descritos: tremor de repouso de 4-6 Hz, rigidez em roda denteada, bradicinesia e marcha em passos curtos com redução do balanço dos braços. O tratamento é **suspender o fármaco**; a melhora costuma ocorrer em semanas a meses (podendo levar até 6 meses).\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Clonazepam:** benzodiazepínico causa **sedação, ataxia e prejuízo cognitivo** — e é, na verdade, usado para tratar alguns distúrbios do movimento. Não bloqueia dopamina nem causa parkinsonismo.\n" +
      "- **(B) Carvedilol:** betabloqueadores podem causar fadiga, bradicardia e broncoespasmo; o propranolol é inclusive **tratamento** de tremor essencial. Não produzem rigidez, bradicinesia nem tremor de repouso.\n" +
      "- **(D) Losartana:** bloqueador do receptor de angiotensina, cujos efeitos adversos relevantes são hipotensão, hipercalemia e piora de função renal — sem ação sobre a via dopaminérgica.\n\n" +
      "**Dica de prova:** as classes que mais causam parkinsonismo medicamentoso são os **antipsicóticos típicos** (haloperidol), os **antieméticos/procinéticos bloqueadores D2** (metoclopramida, bromoprida), a **flunarizina/cinarizina** (muito usadas para \"labirintite\" e enxaqueca) e a **reserpina**.",
  },
];
