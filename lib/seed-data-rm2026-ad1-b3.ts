import type { NewQuestion } from "@/db/schema";

const BASE = {
  instituicao: "USP-SP",
  ano: 2026,
  prova: "Residência (Acesso Direto) — AD1",
  tipo: "multipla_escolha",
  anulada: false,
} as const;

const IMG = "/images/questions/rm2026-ad1/";

/** USP-SP 2026 — prova AD1, questões 41 a 60. */
export const rm2026Ad1QuestionsB3: Omit<NewQuestion, "createdAt">[] = [
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q41",
    grandeArea: "Cirurgia Geral",
    tema: "Cirurgia do aparelho digestivo",
    subtema: "Colecistectomia / Colangiografia intraoperatória",
    enunciado:
      "Durante colecistectomia pós pancreatite aguda leve, foi optado pela realização de colangiografia intraoperatória. A imagem do campo operatório pode ser observada a seguir.\n\nEm qual das estruturas, destacadas pelas setas e numeradas de 1 a 4, deve ser introduzido o cateter da colangiografia?",
    imagens: [IMG + "q41-colangiografia.jpg"],
    alternativas: [
      { letra: "A", texto: "1." },
      { letra: "B", texto: "2." },
      { letra: "C", texto: "3." },
      { letra: "D", texto: "4." },
    ],
    gabaritoOficial: "C",
    comentarioGabarito:
      "**Gabarito oficial: C — estrutura 3 (ducto cístico)**\n\n" +
      "A colangiografia intraoperatória é feita cateterizando o **ducto cístico** — o único trajeto seguro para injetar contraste e opacificar a via biliar, permitindo diagnosticar coledocolitíase (indicação clássica após pancreatite biliar) e confirmar a anatomia biliar.\n\n" +
      "A imagem mostra a dissecção do **triângulo de Calot** com a **visão crítica de segurança** (*critical view of safety*), cujos três requisitos são: (1) o triângulo hepatocístico liberado de gordura e tecido fibroso; (2) o **terço inferior da vesícula descolado do leito hepático**; e (3) **apenas duas estruturas entrando na vesícula** — o ducto cístico e a artéria cística. Na foto, a estrutura **4** é o **infundíbulo da vesícula**; dele partem duas estruturas: a **1**, superior, e a **3**, inferior — o ducto cístico é justamente o elemento **inferolateral**, mais calibroso, que se continua com o infundíbulo, onde o cateter deve ser introduzido após uma pequena ductotomia.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Estrutura 1:** corresponde à **artéria cística**, que corre superiormente ao ducto no triângulo. Puncioná-la provoca sangramento e nenhuma opacificação biliar.\n" +
      "- **(B) Estrutura 2:** está **fora do triângulo**, junto ao ligamento hepatoduodenal — cateterizar ou clipar a via biliar principal por engano é exatamente o mecanismo da **lesão iatrogênica de via biliar**, a complicação mais temida da colecistectomia (a clássica \"lesão em Strasberg/Bismuth\" por confundir colédoco com cístico).\n" +
      "- **(D) Estrutura 4:** é a própria **vesícula (infundíbulo)** — injetar contraste ali apenas encheria a vesícula, sem estudar a via biliar.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q42",
    grandeArea: "Cirurgia Geral",
    tema: "Pré e pós-operatório",
    subtema: "Náuseas e vômitos pós-operatórios",
    enunciado:
      "Mulher, 59 anos de idade, foi submetida a colecistectomia laparoscópica devido a colecistite aguda há 1 dia. Na operação não foi realizada colangiografia intraoperatória e não houve colocação de dreno abdominal. Desde o pós-operatório imediato, apresentou vômitos de repetição sem aceitação da dieta e dor abdominal em tratamento com dipirona e **tramadol**. Ao exame físico, encontra-se em bom estado geral, eupneica, com FC de 95 bpm, PA de 120×70 mmHg, abdome doloroso à palpação profunda, sem sinais de irritação peritoneal.\n\n**Exames laboratoriais:** Hb 12 g/dL · Leucócitos 13.412/mm³ · PCR 90 mg/L · Bilirrubina total 1,1 mg/dL · FA 91 U/L · GGT 110 U/L · Amilase 100 U/L · Lipase 98 U/L\n\nAssinale a alternativa que apresenta a melhor conduta nesse momento.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Suspender tramadol e passar sonda nasogástrica." },
      { letra: "B", texto: "Suspender tramadol e administrar ondansetrona." },
      { letra: "C", texto: "Realizar tomografia de abdome." },
      { letra: "D", texto: "Realizar colangiorressonância." },
    ],
    gabaritoOficial: "B",
    comentarioGabarito:
      "**Gabarito oficial: B — Suspender tramadol e administrar ondansetrona**\n\n" +
      "O quadro é de **náuseas e vômitos pós-operatórios (NVPO)** de causa medicamentosa. O **tramadol** é um dos fármacos que mais provocam êmese (agonista opioide com efeito serotoninérgico adicional), e a paciente já reúne vários fatores de risco clássicos para NVPO (escore de Apfel): **sexo feminino, uso de opioide no pós-operatório e cirurgia laparoscópica**. A conduta correta é **retirar o agente causal e tratar o sintoma** com um antagonista 5-HT₃ (ondansetrona).\n\n" +
      "O ponto central é reconhecer que **não há sinais de complicação cirúrgica**: paciente em bom estado geral, hemodinamicamente estável, **sem irritação peritoneal**, com **bilirrubina, fosfatase alcalina, GGT, amilase e lipase normais** — o que afasta fístula biliar, coledocolitíase residual e pancreatite. A leucocitose de 13.412 e a PCR de 90 são **esperadas** no 1º pós-operatório de uma colecistite aguda (resposta inflamatória à doença e ao trauma cirúrgico).\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Sonda nasogástrica:** só se justifica em **obstrução intestinal ou íleo grave com distensão**, que não há aqui. Além de desconfortável, atrapalha a fisioterapia e não trata a causa.\n" +
      "- **(C) Tomografia de abdome:** exame para investigar coleção, abscesso ou biloma — hipóteses que exigiriam febre, dor progressiva, peritonite ou piora laboratorial.\n" +
      "- **(D) Colangiorressonância:** investiga a **via biliar** (coledocolitíase, lesão biliar), mas a paciente está **anictérica, com canaliculares e bilirrubinas normais** — não há qualquer dado que sugira obstrução biliar.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q43",
    grandeArea: "Cirurgia Geral",
    tema: "Cirurgia do aparelho digestivo",
    subtema: "Litíase biliar / Coledocolitíase",
    enunciado:
      "Mulher, 39 anos de idade, refere cólica em epigástrio e hipocôndrio direito com irradiação para dorso há 2 dias, que melhora com o uso de analgésicos e antiespasmódicos. **Nega febre.** Sem comorbidades. Ao exame físico, apresenta bom estado geral, corada, hidratada, **ictérica +/++++**, afebril; abdome distendido, flácido, doloroso em epigástrio e hipocôndrio direito sem sinais de peritonite.\n\n**Exames laboratoriais:** Hb 11,5 g/dL · Leucócitos 9.500/mm³ · TGO/AST 230 U/L · TGP/ALT 310 U/L · FA 430 U/L · GGT 352 U/L · Amilase 110 U/L · Lipase 72 U/L · Bilirrubina total 4,5 mg/dL · PCR 8 mg/L\n\nCom base no caso clínico descrito, assinale a alternativa que apresenta a principal hipótese diagnóstica.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Cólica biliar." },
      { letra: "B", texto: "Colangite." },
      { letra: "C", texto: "Coledocolitíase." },
      { letra: "D", texto: "Colecistite aguda." },
    ],
    gabaritoOficial: "C",
    comentarioGabarito:
      "**Gabarito oficial: C — Coledocolitíase**\n\n" +
      "A assinatura laboratorial é a de **obstrução da via biliar principal**: **icterícia com bilirrubina total de 4,5 mg/dL** somada ao **padrão colestático** (FA 430 e GGT 352, ambos ~3-4× o limite superior). A elevação concomitante das transaminases (AST 230, ALT 310) não descaracteriza — é típica do **cálculo em trânsito**, que provoca um pico transitório e precoce de transaminases antes de predominar o padrão colestático.\n\n" +
      "Os demais dados fecham o raciocínio: dor em cólica biliar clássica (epigástrio/hipocôndrio direito com irradiação dorsal), **sem febre**, **sem leucocitose** (9.500) e com **PCR de 8** — ou seja, **sem componente infeccioso/inflamatório**.\n\n" +
      "A confirmação se faz com **ultrassonografia** (procurando dilatação do colédoco > 6 mm e cálculos) e, se indeterminada, **colangiorressonância ou ecoendoscopia**; o tratamento é a **CPRE com papilotomia e retirada do cálculo**, seguida de colecistectomia.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(B) Colangite:** exigiria a **tríade de Charcot** — dor + **febre** + icterícia. A paciente está **afebril, sem leucocitose e com PCR normal**: é justamente a ausência de infecção que separa coledocolitíase simples de colangite.\n" +
      "- **(D) Colecistite aguda:** cursa com dor **persistente** (não em cólica que cede com analgésico), **sinal de Murphy**, febre e leucocitose — e **não causa icterícia significativa** (salvo na síndrome de Mirizzi).\n" +
      "- **(A) Cólica biliar:** é a dor transitória pela obstrução momentânea do ducto cístico, **com exames laboratoriais normais**. Aqui há icterícia franca e enzimas alteradas, o que significa obstrução da via biliar principal.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q44",
    grandeArea: "Cirurgia Geral",
    tema: "Trauma",
    subtema: "Drenagem pleural / Retirada de dreno",
    enunciado:
      "Mulher, 25 anos de idade, foi vítima de ferimento por arma branca em 2º espaço intercostal à direita há 5 dias. Na ocasião, foi submetida a drenagem de hemopneumotórax com dreno tubular multiperfurado 28 Fr. Evoluiu bem com **débito seroso de 40 mL/dia e sem borbulhar à inspiração profunda**. A imagem obtida na radiografia de tórax pode ser observada a seguir.\n\nAssinale a alternativa que apresenta a conduta correta neste momento.",
    imagens: [IMG + "q44-rx-torax.jpg"],
    alternativas: [
      { letra: "A", texto: "Manter o dreno em aspiração contínua." },
      { letra: "B", texto: "Manter o dreno e fisioterapia respiratória." },
      { letra: "C", texto: "Retirar o dreno com manobra de Valsalva." },
      { letra: "D", texto: "Retirar o dreno durante a inspiração." },
    ],
    gabaritoOficial: "C",
    comentarioGabarito:
      "**Gabarito oficial: C — Retirar o dreno com manobra de Valsalva**\n\n" +
      "A paciente preenche **todos os critérios de retirada** do dreno de tórax:\n" +
      "- **Ausência de escape aéreo** (\"sem borbulhar à inspiração profunda\" — o teste deve ser feito com inspiração profunda ou tosse, justamente para desmascarar fístulas pequenas);\n" +
      "- **Débito baixo e seroso** (40 mL/dia — em geral aceita-se retirar com < 200 mL/24 h de líquido não sanguinolento/não purulento);\n" +
      "- **Pulmão expandido** na radiografia, sem pneumotórax residual.\n\n" +
      "A **técnica** é o que a questão realmente cobra: retira-se o dreno com o paciente em **manobra de Valsalva** (expiração forçada contra a glote fechada) ou ao **final de uma inspiração profunda sustentada** — em ambos os casos a **pressão intrapleural fica positiva ou menos negativa**, impedindo que o ar seja aspirado para o espaço pleural no momento em que o tubo sai. Retira-se com movimento rápido e único, ocluindo imediatamente o orifício com curativo oclusivo (idealmente já com a sutura em bolsa previamente preparada), e faz-se radiografia de controle.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(D) Retirar durante a inspiração:** é o erro clássico — durante a inspiração **normal** a pressão intrapleural fica **mais negativa**, o que \"suga\" ar pelo trajeto do dreno e pode gerar **pneumotórax iatrogênico**.\n" +
      "- **(A) Aspiração contínua:** estaria indicada se houvesse pneumotórax persistente ou pulmão não expandido — o oposto do caso, e manter aspiração só retarda a retirada e mantém o risco de infecção.\n" +
      "- **(B) Manter o dreno e fisioterapia:** a fisioterapia respiratória é sempre bem-vinda, mas **manter um dreno sem indicação** aumenta dor, risco de empiema e tempo de internação.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q45",
    grandeArea: "Cirurgia Geral",
    tema: "Trauma",
    subtema: "Trauma abdominal fechado / Sinal do cinto de segurança",
    enunciado:
      "Mulher, 65 anos de idade, foi vítima de colisão de carro em alta velocidade contra anteparo fixo. Estava no banco traseiro do veículo com cinto de segurança. Na admissão no serviço de emergência encontrava-se:\n\n- **A:** intubada em ventilação mecânica;\n- **B:** murmúrios vesiculares simétricos;\n- **C:** PA de 140×90 mmHg e FC de 120 bpm;\n- **D:** Escala de coma de Glasgow 3T;\n- **E:** **marca do cinto de segurança em parede abdominal**. Diurese clara.\n\nRealizado o FAST, apresentado na imagem a seguir.\n\nCom base no caso descrito e no achado observado no FAST, assinale a alternativa que apresenta a lesão mais frequentemente associada a esse mecanismo de trauma.",
    imagens: [IMG + "q45-fast.jpg"],
    alternativas: [
      { letra: "A", texto: "Lesão intestinal." },
      { letra: "B", texto: "Lesão pancreática." },
      { letra: "C", texto: "Fratura de bacia." },
      { letra: "D", texto: "Rotura da parede abdominal." },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**Gabarito oficial: A — Lesão intestinal**\n\n" +
      "A **marca do cinto de segurança na parede abdominal (*seat belt sign*)** é um dos achados de exame físico com maior valor preditivo no trauma fechado: sua presença aumenta em várias vezes a probabilidade de **lesão de víscera oca (intestino) e de mesentério**. O mecanismo é a compressão das alças entre o cinto e a coluna vertebral, somada à desaceleração brusca — que produz explosão da alça (aumento súbito da pressão intraluminal), avulsão mesentérica e lesões em pontos de fixação.\n\n" +
      "O FAST positivo (líquido livre) em paciente com marca de cinto e **sem lesão de órgão sólido** reforça a hipótese. Compõem a clássica **\"síndrome do cinto de segurança\"**: lesão intestinal/mesentérica + **fratura de Chance** (fratura por flexão-distração da coluna lombar) + equimose da parede abdominal — sempre procure a fratura de Chance quando houver *seat belt sign*.\n\n" +
      "Atenção redobrada aqui: a paciente está **intubada com Glasgow 3T**, ou seja, **não é possível reavaliar o abdome clinicamente** — o que torna a investigação por imagem (tomografia) e o limiar cirúrgico mais baixos.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(B) Lesão pancreática:** ocorre por compressão direta contra a coluna (clássica no trauma de guidão de bicicleta e em crianças), mas é **bem menos frequente** que a lesão intestinal nesse mecanismo.\n" +
      "- **(C) Fratura de bacia:** associa-se a cintos **subabdominais mal posicionados** e a impactos laterais/atropelamentos; cursaria com instabilidade pélvica e, em geral, hipotensão — a paciente está hipertensa.\n" +
      "- **(D) Rotura da parede abdominal:** a hérnia traumática de parede (\"*seat belt hernia*\") é descrita, mas é **rara**; a questão pede a lesão **mais frequentemente** associada.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q46",
    grandeArea: "Cirurgia Geral",
    tema: "Cirurgia do aparelho digestivo",
    subtema: "Hérnia de hiato / Indicação cirúrgica",
    enunciado:
      "Mulher, 65 anos de idade, refere empachamento pós-prandial eventual. **Nega epigastralgia, pirose, regurgitação, disfagia, dor torácica ou náuseas.** Ao exame físico, encontra-se em bom estado geral, com IMC de 32 kg/m²; abdome flácido e indolor. Foi submetida a endoscopia digestiva alta que identificou hérnia hiatal volumosa, com **mucosa esofágica sem alterações** e pangastrite enantematosa leve. Na sequência, realizou exame de radiografia contrastado do esôfago que confirmou **hérnia hiatal tipo III**. Foi iniciado tratamento com omeprazol e domperidona, **com resolução do sintoma**.\n\nAssinale a alternativa que apresenta a melhor conduta para esta paciente.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Manometria e pH-metria esofágica para definição do diagnóstico e tratamento." },
      { letra: "B", texto: "Cirurgia para correção da hérnia de hiato com hiatoplastia e fundoplicatura." },
      { letra: "C", texto: "Cirurgia com correção da hérnia de hiato com hiatoplastia e bypass gástrico." },
      { letra: "D", texto: "Seguimento ambulatorial sem indicação de cirurgia no momento." },
    ],
    gabaritoOficial: "D",
    comentarioGabarito:
      "**Gabarito oficial: D — Seguimento ambulatorial sem indicação de cirurgia no momento**\n\n" +
      "A hérnia hiatal **tipo III** é mista (deslizamento + paraesofágica) e, durante anos, ensinou-se que toda hérnia paraesofágica deveria ser operada pelo risco de vôlvulo gástrico e encarceramento. Esse conceito **mudou**: estudos de história natural mostraram que o risco anual de complicação aguda em pacientes **assintomáticos ou oligossintomáticos é baixo (em torno de 1% ao ano)**, menor do que a morbimortalidade da correção eletiva em pacientes idosos. As diretrizes atuais (SAGES) recomendam, portanto, **conduta expectante** (*watchful waiting*) nesse cenário.\n\n" +
      "O caso é o retrato dessa situação: sintoma **único, leve e eventual** (empachamento), **sem disfagia, sem dor, sem regurgitação**, mucosa esofágica **normal** na endoscopia (sem esofagite ou Barrett) e **resolução completa com tratamento clínico**. Operar aqui é expor a paciente (65 anos, IMC 32) a risco sem benefício demonstrado.\n\n" +
      "A cirurgia estaria indicada se houvesse: sintomas **refratários** ou incapacitantes, disfagia/obstrução, anemia por lesões de Cameron, sangramento, volvo gástrico ou complicação aguda.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(B) Hiatoplastia + fundoplicatura:** é a técnica **correta** quando há indicação cirúrgica — mas a indicação é que não existe neste momento.\n" +
      "- **(C) Hiatoplastia + bypass gástrico:** o bypass é alternativa considerada em **obesidade grave (IMC ≥ 35-40)** com refluxo, pelo melhor controle do refluxo e da obesidade. Com IMC 32 e sem sintomas, não se justifica.\n" +
      "- **(A) Manometria e pH-metria:** são exames do pré-operatório da cirurgia antirrefluxo (avaliar motilidade e documentar refluxo patológico). Sem indicação cirúrgica e com sintomas resolvidos, não mudam a conduta.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q47",
    grandeArea: "Medicina Preventiva e Social",
    tema: "Bioética",
    subtema: "Autonomia, alta a pedido e risco de suicídio",
    enunciado:
      "Homem, 58 anos de idade, é trazido ao pronto-socorro com história de **ingestão de soda cáustica**. Foi realizada passagem de sonda nasoenteral. No segundo dia de internação, estava sem queixas e solicitou continuidade de recuperação domiciliar, pois sua esposa é enfermeira. O paciente apresenta **postura reservada, solícito, fala pouco** e diz não se conformar por ter ingerido **por engano** a soda cáustica que estava em uma garrafa igual à que usam para água. Quando o médico sugere uma consulta psiquiátrica, o paciente pede o favor de não chamar um psiquiatra, temendo o estigma, e acrescenta que tomará mais cuidado.\n\nCom base neste caso, assinale a alternativa que apresenta a conduta mais adequada.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Dar a alta se ele assinar o termo de responsabilidade por alta a pedido, respeitando a autonomia do doente." },
      { letra: "B", texto: "Dar a alta considerando que a esposa é capaz de dar continuidade ao cuidado." },
      { letra: "C", texto: "Não dar a alta e avaliar com familiares a circunstância do evento para dar continuidade ao cuidado." },
      { letra: "D", texto: "Não dar a alta e pedir avaliação psiquiátrica, omitindo a especialidade do médico avaliador." },
    ],
    gabaritoOficial: "C",
    comentarioGabarito:
      "**Gabarito oficial: C — Não dar a alta e avaliar com familiares a circunstância do evento**\n\n" +
      "Ingestão de **substância cáustica em adulto** deve ser tratada como **tentativa de suicídio até prova em contrário** — a ingestão acidental é a regra em crianças, não em adultos. O caso acumula sinais de alerta: relato pouco plausível, **retraimento** (\"postura reservada, fala pouco\"), pressa em receber alta e **recusa da avaliação psiquiátrica**.\n\n" +
      "Diante de risco de autoagressão, a autonomia **não é absoluta**: ela pressupõe capacidade de decisão preservada, que pode estar comprometida por transtorno mental ou ideação suicida ativa. A conduta correta combina duas coisas: **manter o paciente em ambiente seguro** e **buscar informação colateral com familiares** para reconstruir a circunstância real do evento — passo indispensável na avaliação de risco e que independe da concordância imediata do paciente.\n\n" +
      "Vale lembrar que casos de tentativa de suicídio são de **notificação compulsória** no Brasil (violência autoprovocada, Portaria MS 204/2016), e que a alta deve prever seguimento em saúde mental (RAPS/CAPS).\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Alta a pedido com termo assinado:** o termo de responsabilidade **não isenta** o médico quando existe risco iminente à vida e dúvida sobre a capacidade de decisão. Seria negligência.\n" +
      "- **(B) Alta porque a esposa é enfermeira:** a formação da acompanhante não substitui avaliação de risco nem vigilância adequada — e a lesão cáustica ainda exige seguimento de complicações (estenose esofágica).\n" +
      "- **(D) Pedir avaliação psiquiátrica omitindo a especialidade:** a conduta de reter o paciente está certa, mas **enganá-lo fere o princípio da veracidade** e o consentimento informado, além de destruir o vínculo terapêutico. Abordar o estigma abertamente é parte do cuidado.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q48",
    grandeArea: "Cirurgia Geral",
    tema: "Trauma",
    subtema: "Trauma vascular periférico associado a fratura",
    enunciado:
      "Homem, 28 anos de idade, foi vítima de queda de motocicleta. Na admissão intra-hospitalar, está consciente e estável hemodinamicamente. Ao exame físico, tem deformidade da coxa esquerda, com **ausência de pulso distal, diminuição da temperatura e palidez**. Relata intensa dor no membro inferior esquerdo. O exame radiológico pode ser observado na imagem a seguir.\n\nAssinale a alternativa que apresenta a melhor sequência de tratamento.",
    imagens: [IMG + "q48-rx-femur.jpg"],
    alternativas: [
      { letra: "A", texto: "Revascularização do membro seguida de fixação cirúrgica da fratura." },
      { letra: "B", texto: "Redução da fratura com tala seguida de revascularização do membro." },
      { letra: "C", texto: "Embolectomia com cateter de Fogarty seguida de fixação cirúrgica da fratura." },
      { letra: "D", texto: "Fixação cirúrgica da fratura seguida de revascularização do membro." },
    ],
    gabaritoOficial: "D",
    comentarioGabarito:
      "**Gabarito oficial: D — Fixação cirúrgica da fratura seguida de revascularização do membro**\n\n" +
      "A radiografia mostra **fratura diafisária de fêmur cominutiva e desviada** (alta energia), e o exame físico traz **sinais duros (hard signs) de lesão arterial**: ausência de pulso, palidez e hipotermia do membro. Trata-se de uma **lesão combinada ortopédica-vascular**, e a questão cobra a **ordem** das etapas.\n\n" +
      "A sequência preconizada é **estabilizar o osso primeiro** (habitualmente com **fixador externo**, rápido) e **depois reparar o vaso**. A lógica é mecânica: a fixação devolve comprimento e alinhamento ao membro — permitindo dimensionar corretamente o enxerto/reparo — e evita que a manipulação óssea **rompa uma anastomose vascular recém-confeccionada**.\n\n" +
      "Há uma ressalva importante na prática: quando o tempo de isquemia é crítico (aproximando-se de **6 horas**), coloca-se primeiro um **shunt intravascular temporário**, faz-se a fixação óssea e só então o reparo vascular definitivo — assim ganha-se perfusão sem comprometer a sequência. E sempre considerar **fasciotomia** profilática pelo risco de síndrome compartimental após a reperfusão.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Revascularizar e depois fixar:** é o erro conceitual da questão — a fixação posterior traciona e mobiliza o foco, com risco real de **deiscência/trombose da anastomose**.\n" +
      "- **(B) Redução com tala e depois revascularizar:** o alinhamento inicial com tala é correto **na sala de emergência** (pode inclusive restaurar o pulso), mas a tala **não dá estabilidade definitiva**; a fixação ainda teria de ser feita depois do reparo vascular, recaindo no mesmo problema de (A).\n" +
      "- **(C) Embolectomia com Fogarty:** o cateter de Fogarty trata **oclusão embólica** (fibrilação atrial, trombo cardíaco). Aqui a lesão é **traumática** (secção, *flap* intimal ou trombose local), exigindo exploração e reparo/enxerto — a embolectomia isolada não resolve.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q49",
    grandeArea: "Pediatria",
    tema: "Emergências pediátricas",
    subtema: "Suporte ventilatório no TCE grave",
    enunciado:
      "**Texto para as questões 49 a 51.** Criança, sexo masculino, 1 mês de vida, previamente hígida, é trazida à unidade de emergência após cair do trocador, há cerca de 30 minutos. Segundo a mãe, ela havia tirado a mão dele por alguns segundos para jogar a fralda no lixo e ele teria rolado e caído do trocador. Na admissão, o paciente estava inconsciente, sendo levado à sala de emergência. A seguir, os dados da avaliação sistematizada:\n\n- **A:** pérvia;\n- **B:** murmúrio vesicular e expansibilidade diminuídos, **FR de 8 irpm, SpO2 de 89%** em ar ambiente;\n- **C:** tempo de enchimento capilar < 1 segundo, pulsos presentes e simétricos, ausculta com 2BRNF sem sopros, PA de 108×70 mmHg;\n- **D:** **escala de coma de Glasgow 7**, pupilas isofotorreagentes;\n- **E:** hematoma subgaleal em região temporal direita.\n\nAssinale a alternativa que ilustra, corretamente, o suporte respiratório que deve ser prontamente instituído.",
    imagens: [IMG + "q49-op-a.jpg", IMG + "q49-op-b.jpg", IMG + "q49-op-c.jpg", IMG + "q49-op-d.jpg"],
    alternativas: [
      { letra: "A", texto: "Imagem (A) — 1ª imagem acima." },
      { letra: "B", texto: "Imagem (B) — 2ª imagem acima." },
      { letra: "C", texto: "Imagem (C) — 3ª imagem acima." },
      { letra: "D", texto: "Imagem (D) — 4ª imagem acima." },
    ],
    gabaritoOficial: "D",
    comentarioGabarito:
      "**Gabarito oficial: D — ventilação com bolsa-válvula-máscara (dispositivo bolsa-máscara)**\n\n" +
      "O lactente está em **insuficiência respiratória com hipoventilação**: **FR de 8 irpm** (bradipneia grave para 1 mês de vida, quando o normal é 30-60), **SpO2 de 89%**, expansibilidade reduzida e **Glasgow 7**. O problema, portanto, **não é falta de oxigênio ofertado — é falta de ventilação**. Nenhum dispositivo que apenas fornece O₂ corrige isso; é preciso **substituir a ventilação com pressão positiva**, com **bolsa-válvula-máscara** conectada a oxigênio, acompanhada das manobras de abertura de via aérea.\n\n" +
      "Isso é ainda mais urgente porque há **TCE grave** (Glasgow ≤ 8): a **hipóxia e a hipercapnia são lesões secundárias** que pioram diretamente o desfecho neurológico — a hipercapnia causa vasodilatação cerebral e aumento da pressão intracraniana. Glasgow ≤ 8 também é indicação de **intubação orotraqueal** na sequência, após ventilar e pré-oxigenar adequadamente.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **Cateter/cânula nasal de O₂** e **máscara com reservatório (não reinalante):** aumentam a FiO₂, mas **dependem do esforço respiratório do paciente** — que aqui é insuficiente (8 irpm). Poderiam até melhorar transitoriamente a saturação, mascarando uma hipercapnia progressiva.\n" +
      "- **CPAP nasal:** oferece pressão positiva contínua, mas também **exige drive respiratório preservado**; não é o dispositivo para quem está com rebaixamento do nível de consciência e bradipneia.\n\n" +
      "**Regra de ouro:** SpO₂ baixa com **respiração ineficaz** pede **ventilar**, não apenas oxigenar.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q50",
    grandeArea: "Pediatria",
    tema: "Violência e maus-tratos",
    subtema: "Traumatismo cranioencefálico / Suspeita de abuso infantil",
    enunciado:
      "**Texto para as questões 49 a 51.** Criança, sexo masculino, **1 mês de vida**, previamente hígida, é trazida à unidade de emergência após **cair do trocador**, há cerca de 30 minutos. Segundo a mãe, ela havia tirado a mão dele por alguns segundos para jogar a fralda no lixo e **ele teria rolado e caído** do trocador. Na admissão, o paciente estava inconsciente (Glasgow 7), com FR de 8 irpm, SpO2 de 89% e hematoma subgaleal em região temporal direita.\n\nFoi realizada tomografia de crânio, conforme imagem demonstrada a seguir. Após medidas de estabilização, o caso foi notificado ao serviço social.\n\nCom relação a essa decisão da equipe médica, pode-se afirmar:",
    imagens: [IMG + "q50-tc-cranio.jpg"],
    alternativas: [
      { letra: "A", texto: "Foi indicada porque a tomografia não é compatível com o trauma reportado." },
      { letra: "B", texto: "Foi motivada pela presença de hematoma em localização incomum nos traumas pediátricos." },
      { letra: "C", texto: "É justificada porque o mecanismo de trauma é incompatível com a faixa etária." },
      { letra: "D", texto: "Não havia indicação, pois não há incongruências nas circunstâncias do trauma." },
    ],
    gabaritoOficial: "C",
    comentarioGabarito:
      "**Gabarito oficial: C — o mecanismo de trauma é incompatível com a faixa etária**\n\n" +
      "Este é o conceito mais importante da suspeita de maus-tratos: a **história não é compatível com o desenvolvimento neuropsicomotor da criança**. Um lactente de **1 mês de vida não rola** — o rolar (decúbito dorsal ↔ ventral) é um marco que surge por volta dos **4 a 6 meses**. Ou seja, a criança **não poderia** ter \"rolado e caído\" sozinha do trocador, como relatado.\n\n" +
      "Essa é uma das *red flags* clássicas do trauma não acidental, ao lado de: história mutável ou divergente entre cuidadores, atraso na procura por atendimento, lesões desproporcionais ao mecanismo, lesões em estágios diferentes de evolução e lesões em locais pouco expostos.\n\n" +
      "A notificação é **obrigatória** diante da suspeita — não exige confirmação (ECA, art. 13, e notificação compulsória de violência). A tomografia mostra uma **coleção hiperdensa biconvexa (lenticular) fronto-temporal direita**, compatível com **hematoma extradural**, associada ao hematoma subgaleal do mesmo lado.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) A tomografia não é compatível com o trauma:** o **hematoma extradural é típico de trauma de impacto** com fratura e lesão da artéria meníngea média — poderia perfeitamente resultar de uma queda. Não é o achado tomográfico que levanta a suspeita, e sim a **história**.\n" +
      "- **(B) Localização incomum:** a região **temporal/fronto-temporal** é justamente a topografia mais comum do hematoma extradural.\n" +
      "- **(D) Não havia indicação:** há incongruência evidente — negá-la seria deixar de proteger a criança. Na dúvida, notifica-se: a notificação **não é acusação**, é proteção.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q51",
    grandeArea: "Pediatria",
    tema: "Emergências pediátricas",
    subtema: "Distúrbios ácido-básicos / Insuficiência respiratória",
    enunciado:
      "**Texto para as questões 49 a 51.** Lactente de 1 mês de vida, trazido após queda do trocador, inconsciente. Avaliação: via aérea pérvia; **murmúrio vesicular e expansibilidade diminuídos, FR de 8 irpm, SpO2 de 89%** em ar ambiente; enchimento capilar < 1 s, pulsos presentes e simétricos, PA de 108×70 mmHg; **Glasgow 7**, pupilas isofotorreagentes; hematoma subgaleal temporal direito.\n\nCom relação aos exames séricos coletados durante o atendimento inicial do paciente, assinale a alternativa que apresenta as alterações laboratoriais esperadas.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "pH 7,28 · paO₂ 58 mmHg · pCO₂ 55 mmHg · HCO₃⁻ 24 mmol/L · SpO₂ 89%" },
      { letra: "B", texto: "Hb 5,0 g/dL · Ht 18% · Leucócitos 12.000/mm³ · Plaquetas 310.000/µL" },
      { letra: "C", texto: "Relação TTPA 2,5 · Tempo de Protrombina (TP) 1,1 · Atividade TP 76%" },
      { letra: "D", texto: "Lactato arterial 55 mg/dL · Ureia 60 mg/dL · Creatinina 0,7 mg/dL" },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**Gabarito oficial: A — acidose respiratória aguda com hipoxemia**\n\n" +
      "O laboratório deve **espelhar a fisiopatologia** do paciente, e o problema aqui é **hipoventilação**: FR de 8 irpm com Glasgow 7. Hipoventilar significa **reter CO₂**, e a gasometria da alternativa A é exatamente esse retrato:\n" +
      "- **pCO₂ 55 mmHg** (elevado) → hipoventilação alveolar;\n" +
      "- **pH 7,28** (ácido) → acidose;\n" +
      "- **HCO₃⁻ 24 mmol/L** (normal) → **acidose respiratória aguda**, sem tempo para compensação metabólica renal (que levaria 2-5 dias);\n" +
      "- **paO₂ 58 mmHg / SpO₂ 89%** → hipoxemia, também explicada pela hipoventilação.\n\n" +
      "Vale gravar a regra da compensação aguda: na acidose respiratória **aguda**, o bicarbonato sobe apenas ~1 mEq/L para cada 10 mmHg de aumento da pCO₂ — por isso ele permanece praticamente normal, como no caso.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(B) Anemia grave (Hb 5,0):** não se espera. O paciente está **hemodinamicamente estável** (enchimento capilar < 1 s, pulsos cheios, PA normal-alta). Além disso, na hemorragia aguda a hemoglobina **demora horas** a cair, pois a perda é de sangue total — e o hematoma subgaleal, embora possa sangrar de forma significativa em lactentes, não produziria esse valor em 30 minutos sem repercussão hemodinâmica.\n" +
      "- **(C) Coagulopatia:** a coagulopatia associada ao trauma cranioencefálico grave existe, mas **não na primeira meia hora** e não isoladamente; o TP descrito, aliás, está essencialmente normal.\n" +
      "- **(D) Lactato elevado com ureia alta:** indicariam **hipoperfusão/choque**, e a perfusão está preservada (TEC < 1 s, PA 108×70). A creatinina normal ainda contradiz a elevação isolada da ureia.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q52",
    grandeArea: "Pediatria",
    tema: "Neonatologia",
    subtema: "Crescimento do prematuro / Idade corrigida",
    enunciado:
      "Prematura com idade gestacional ao nascer de **32 semanas**, sexo feminino, **peso ao nascer de 1.300 g**, adequado para idade gestacional, Z-score -1 (Intergrowth-21). Passou em consulta de retorno com a **idade cronológica de 56 dias de vida, com peso de 2.800 g**, em aleitamento materno exclusivo. Os gráficos a seguir são disponibilizados na caderneta da criança pelo Ministério da Saúde.\n\nOs pais estão curiosos em saber se o ganho de peso de sua filha está dentro do esperado. Com base nas informações apresentadas, pode-se afirmar que o ganho de peso",
    imagens: [IMG + "q52-graficos.jpg"],
    alternativas: [
      { letra: "A", texto: "é insuficiente, devendo-se iniciar complemento com fórmula láctea e coletar perfil de ferro." },
      { letra: "B", texto: "é insuficiente, devendo-se iniciar complemento com fórmula láctea após o seio e reavaliar em 1 semana." },
      { letra: "C", texto: "está adequado, devendo-se manter o aleitamento exclusivo e realizar seguimento pediátrico mensal." },
      { letra: "D", texto: "está adequado, mas abaixo do esperado para idade, devendo-se complementar para acelerar a recuperação nutricional." },
    ],
    gabaritoOficial: "C",
    comentarioGabarito:
      "**Gabarito oficial: C — está adequado; manter aleitamento exclusivo e seguimento mensal**\n\n" +
      "Duas contas resolvem a questão.\n\n" +
      "**1) Idade corrigida (o erro mais comum é esquecê-la).** Nasceu com 32 semanas e está com 56 dias = 8 semanas de vida. Logo, a **idade pós-menstrual é 32 + 8 = 40 semanas**, ou seja, ela está \"chegando ao termo\" agora. É nessa idade que se deve plotar o peso no gráfico do prematuro (Intergrowth/Fenton), usado até cerca de 50 semanas pós-menstruais — e não no gráfico de idade cronológica.\n\n" +
      "**2) Velocidade de ganho de peso.** De 1.300 g para 2.800 g em 56 dias = **1.500 g / 56 dias ≈ 27 g/dia**, o que corresponde a cerca de **15-18 g/kg/dia** — exatamente a meta preconizada para o prematuro (**15-20 g/kg/dia**, replicando o crescimento intrauterino). No gráfico, o peso de 2.800 g às 40 semanas mantém a criança no **mesmo canal de crescimento** em que nasceu (Z-score em torno de -1), sem queda de percentil.\n\n" +
      "Portanto: crescimento adequado, **manter aleitamento materno exclusivo** (padrão-ouro, com benefícios específicos no prematuro, como redução de enterocolite necrosante) e seguimento mensal. Lembrar de manter as suplementações de rotina do prematuro: **ferro e vitamina D**.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) e (B) \"Insuficiente\":** partem do erro de comparar 2.800 g com a idade **cronológica** de 2 meses (quando a média seria ~5 kg), ignorando a prematuridade. Introduzir fórmula sem indicação compromete a lactação (menos estímulo → menos produção).\n" +
      "- **(D) \"Adequado, mas complementar para acelerar\":** além de contraditória, aponta para **crescimento acelerado (*catch-up* excessivo)**, que está associado a maior risco de **síndrome metabólica, obesidade e hipertensão** na vida adulta — especialmente em prematuros.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q53",
    grandeArea: "Pediatria",
    tema: "Emergências pediátricas",
    subtema: "Choque séptico / Sepse associada à assistência",
    enunciado:
      "Criança, sexo masculino, 7 anos de idade, portadora de refluxo vesicoureteral bilateral, retornou hoje ao hospital por febre de até 38,8 °C. No exame físico inicial, o paciente está **letárgico e sonolento**, apresenta FC de 140 bpm, FR de 26 irpm, **PA de 90×40 mmHg**, SpO2 de 96% em ar ambiente, ausculta pulmonar e cardíaca normais, fígado no rebordo costal direito, **perfusão com retorno rápido (< 1 segundo), pulsos amplos**, escore de coma de Glasgow 14, pupilas isofotorreagentes. Temperatura atual de 37,2 °C, após uma hora do antitérmico administrado em casa.\n\nO paciente recebeu **alta há dois dias** do hospital, onde esteve internado em leito de terapia intensiva pediátrico devido a quadro de infecção do trato urinário grave por *Escherichia coli* sensível aos antibióticos testados. Durante internação, ficou com **sonda vesical de demora e cateter venoso central**, retirado no dia da alta, sem sinais flogísticos no exame físico de hoje.\n\nConsiderando os dados apresentados, a conduta indicada nesse momento é",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "iniciar expansão volêmica com cristaloide e antibiótico de espectro estendido para infecção nosocomial." },
      { letra: "B", texto: "iniciar fluidoterapia em velocidade de manutenção e cefalosporina de terceira geração." },
      { letra: "C", texto: "aguardar lactato, coagulograma, D-dímero e fibrinogênio para definir necessidade de antibiótico." },
      { letra: "D", texto: "aguardar coleta e resultados de sedimento urinário para definir necessidade de antibiótico." },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**Gabarito oficial: A — expansão volêmica com cristaloide + antibiótico de espectro estendido**\n\n" +
      "A criança está em **choque séptico quente (vasoplégico)** — e o erro clássico é não reconhecê-lo por causa do enchimento capilar rápido. Os sinais são: **alteração do nível de consciência** (letargia, Glasgow 14), **taquicardia (140 bpm)**, **hipotensão com pressão divergente** (90×40 — diastólica muito baixa, pulsos **amplos** e enchimento capilar **acelerado < 1 s**), tudo isso **já sem febre alta** no momento (37,2 °C), o que descarta taquicardia apenas febril.\n\n" +
      "Para um escolar de 7 anos, a PA sistólica mínima esperada é ≈ 70 + (2 × idade) = **84 mmHg** — ou seja, 90×40 já é limítrofe, e **hipotensão em criança é sinal tardio**: quando aparece, o choque está descompensado.\n\n" +
      "Aplica-se então o pacote da **primeira hora** (*Surviving Sepsis* pediátrico): acesso vascular, **coletar culturas sem atrasar**, **cristaloide 10-20 mL/kg em bolus** com reavaliação, e **antibiótico em até 1 hora**. O espectro deve ser **estendido/nosocomial** porque o paciente tem **fatores de risco para germes resistentes**: internação recente em UTI, **sonda vesical de demora** e **cateter venoso central** — cenário de ESBL, *Pseudomonas* e Gram-positivos relacionados a cateter.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(B) Manutenção + cefalosporina de 3ª geração:** subestima duas coisas — o paciente **precisa de bolus**, não de manutenção; e a ceftriaxona não cobre adequadamente o perfil nosocomial descrito.\n" +
      "- **(C) Aguardar lactato/coagulograma:** exames **não podem atrasar** antibiótico e volume no choque séptico. Cada hora de atraso aumenta a mortalidade.\n" +
      "- **(D) Aguardar sedimento urinário:** mesma armadilha. O urina 1 ajuda a orientar o foco, mas a decisão terapêutica é **clínica e imediata**.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q54",
    anulada: true,
    grandeArea: "Pediatria",
    tema: "Distúrbios hidroeletrolíticos",
    subtema: "Alterações eletrocardiográficas (questão anulada)",
    enunciado:
      "**(Questão anulada pela banca.)** Criança, sexo masculino, 4 anos de idade, foi admitido no pronto-socorro devido a quadro de diarreia e vômitos há 3 dias, em grande quantidade. Na admissão, apresentava sinais de instabilidade hemodinâmica, sendo iniciada expansão volêmica. O resultado da gasometria venosa coletada na admissão foi o seguinte:\n\n**pH 7,29 · HCO₃⁻ 15 mmol/L · Na⁺ 128 mEq/L · K⁺ 3,9 mEq/L · Ca²⁺ 4,92 mg/dL**\n\nFrente aos dados clínicos e laboratoriais apresentados, qual é o traçado eletrocardiográfico esperado?",
    imagens: [IMG + "q54-ecg-a.jpg", IMG + "q54-ecg-b.jpg", IMG + "q54-ecg-c.jpg", IMG + "q54-ecg-d.jpg"],
    alternativas: [
      { letra: "A", texto: "Traçado (A) — 1ª imagem acima." },
      { letra: "B", texto: "Traçado (B) — 2ª imagem acima." },
      { letra: "C", texto: "Traçado (C) — 3ª imagem acima." },
      { letra: "D", texto: "Traçado (D) — 4ª imagem acima." },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**⚠️ QUESTÃO ANULADA PELA BANCA — não há gabarito oficial.** (A alternativa marcada como correta aqui é apenas a mais defensável pelos próprios dados do enunciado; todos os candidatos receberam o ponto.)\n\n" +
      "**Por que ela caiu:** a ambiguidade está no cálcio. O enunciado informa **Ca²⁺ 4,92 mg/dL**, e a própria tabela de valores de referência da prova define **cálcio iônico de 1,1 a 1,4 mmol/L**, o que corresponde a cerca de **4,4 a 5,6 mg/dL**. Lido como **cálcio iônico**, portanto, **4,92 mg/dL é NORMAL**. Somando isso ao **potássio de 3,9 mEq/L (normal)**, não sobra nenhum distúrbio eletrolítico capaz de produzir alteração eletrocardiográfica específica — o traçado esperado seria **normal**.\n\n" +
      "A banca provavelmente pretendia que o valor fosse lido como **cálcio total** (cujo normal é 8,5-10,5 mg/dL), o que configuraria **hipocalcemia grave** e levaria ao achado clássico de **prolongamento do intervalo QT**. Como as duas leituras são possíveis e levam a respostas diferentes, a questão foi anulada.\n\n" +
      "**O que vale estudar (os padrões eletrocardiográficos dos distúrbios):**\n" +
      "- **Hipocalcemia:** **QT longo** à custa de alongamento do segmento ST, com onda T de morfologia normal;\n" +
      "- **Hipercalcemia:** **QT curto**;\n" +
      "- **Hipocalemia:** achatamento/inversão de T, **onda U proeminente**, infra de ST — risco de *torsades*;\n" +
      "- **Hipercalemia:** **T apiculada de base estreita**, achatamento da onda P, alargamento do QRS e, no extremo, onda sinusoidal;\n" +
      "- **Hipomagnesemia:** frequentemente acompanha a hipocalemia e também prolonga o QT.\n\n" +
      "**Detalhe clínico do caso:** a acidose metabólica (pH 7,29, HCO₃⁻ 15) com hiponatremia após 3 dias de diarreia e vômitos é esperada — e atenção, o **potássio \"normal\" na vigência de acidose costuma esconder depleção corporal total**, que se revela (com hipocalemia franca) assim que a acidose é corrigida.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q55",
    grandeArea: "Pediatria",
    tema: "Infectologia pediátrica",
    subtema: "Infecção de corrente sanguínea associada a cateter / MRSA",
    enunciado:
      "Criança, sexo masculino, 4 anos de idade, com antecedente de insuficiência renal crônica dialítica, portador de cateter de longa permanência, apresentou quadro de febre e tremores durante sessão de hemodiálise há 48 horas. Após estabilização inicial, foi internado em enfermaria de pediatria com prescrição de antibiótico parenteral. Ele está afebril há 24 horas, sem queixas, com sinais vitais normais e bom estado geral.\n\nA **hemocultura central** resultou positiva para ***Staphylococcus aureus*** (tempo de detecção: 12 h 41 min), com antibiograma mostrando **resistência a oxacilina e penicilina** (MRSA) e **sensibilidade a vancomicina (CIM 1), teicoplanina, linezolida, daptomicina, clindamicina, gentamicina, rifampicina e sulfametoxazol-trimetoprima**.\n\nNão foi coletada hemocultura periférica na admissão por dificuldade de acesso. Foi realizado ecocardiograma, sem achados de vegetação, e **retirado o cateter de longa permanência**.\n\nQual a melhor conduta para esse paciente?",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Manter vancomicina parenteral." },
      { letra: "B", texto: "Alta hospitalar com sulfametoxazol trimetoprima." },
      { letra: "C", texto: "Suspender antibioticoterapia e considerar contaminação." },
      { letra: "D", texto: "Descalonar para clindamicina oral, mantendo internação." },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**Gabarito oficial: A — Manter vancomicina parenteral**\n\n" +
      "Três princípios se somam aqui:\n\n" +
      "**1) *Staphylococcus aureus* em hemocultura NUNCA é contaminante.** Diferentemente dos estafilococos coagulase-negativos, o *S. aureus* isolado no sangue significa **bacteremia verdadeira** até prova em contrário, e sempre exige tratamento. O tempo de detecção curto (12 h) reforça carga bacteriana significativa.\n\n" +
      "**2) É MRSA.** A resistência à oxacilina define *S. aureus* resistente à meticilina, o que **exclui betalactâmicos** (oxacilina, cefazolina) e faz da **vancomicina parenteral** a droga de escolha (alternativas: daptomicina, linezolida).\n\n" +
      "**3) Bacteremia por *S. aureus* se trata por via parenteral e com duração mínima definida.** Mesmo em infecção de cateter **não complicada e com o cateter já removido** (passo essencial, feito corretamente), o tratamento é de **no mínimo 14 dias por via endovenosa**, contados a partir da **primeira hemocultura negativa** — e se estende a 4-6 semanas se houver endocardite, tromboflebite séptica, foco metastático ou persistência da bacteremia. Por isso também são obrigatórias **hemoculturas de controle** e atenção ao ecocardiograma (o transtorácico negativo **não exclui** endocardite; em caso de dúvida, transesofágico).\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(C) Considerar contaminação:** o erro mais grave. Bacteremia por *S. aureus* não tratada evolui com endocardite, osteomielite e abscessos metastáticos, com alta mortalidade.\n" +
      "- **(B) Alta com sulfametoxazol-trimetoprima oral:** troca precoce para via oral em bacteremia por *S. aureus* é inadequada — a biodisponibilidade e a penetração tecidual não garantem erradicação; o paciente ainda é **dialítico**, população de altíssimo risco de complicação.\n" +
      "- **(D) Descalonar para clindamicina oral:** mesmo problema. Além disso, a clindamicina pode apresentar **resistência induzível (fenótipo MLSb — teste do D)** em cepas eritromicina-resistentes, como esta, o que a torna uma escolha arriscada.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q56",
    grandeArea: "Pediatria",
    tema: "Imunizações",
    subtema: "Coqueluche / Vacinação na gestante",
    enunciado:
      "Criança, sexo feminino, **5 meses e duas semanas de vida**, compareceu no pronto-socorro, com relato de tosse há cerca de 1 semana. A mãe nega contactantes sintomáticos e **não observou coriza ou obstrução nasal**. Refere que a criança tem **crises de tosse e chegou a ficar com coloração arroxeada**, cerca de duas vezes no dia, nos últimos quatro dias. Ao exame físico, está em BEG, corada, hidratada, anictérica, acianótica. **Ausculta cardíaca e pulmonar sem alterações.** Apresenta FR de 36 irpm, FC de 120 bpm. Oroscopia com leve hiperemia de orofaringe. Restante do exame clínico sem alterações. Carteira de vacinação da criança e da mãe conforme imagem a seguir.\n\nConsiderando o principal agente etiológico envolvido, o quadro atual poderia ter sido prevenido com a vacina",
    imagens: [IMG + "q56-carteira-vacinal.jpg"],
    alternativas: [
      { letra: "A", texto: "DTPa para a mãe, às 20 semanas de gestação." },
      { letra: "B", texto: "VSR para a mãe, às 20 semanas de gestação." },
      { letra: "C", texto: "VPC10 aos 4 meses para a paciente (2ª dose)." },
      { letra: "D", texto: "INF3 aos 5 meses para a paciente (1ª dose)." },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**Gabarito oficial: A — dTpa para a mãe, a partir da 20ª semana de gestação**\n\n" +
      "O quadro é de **coqueluche** (*Bordetella pertussis*): **tosse paroxística em crises**, com **cianose** durante os acessos, **sem coriza e sem febre**, e — o achado mais característico — **ausculta pulmonar normal**, já que a coqueluche não produz consolidação nem sibilância. Essa dissociação entre a gravidade das crises e o exame normal é a marca da doença.\n\n" +
      "A carteira explica a vulnerabilidade: a criança tem **5 meses e meio** e recebeu apenas **duas doses de Penta** (a 3ª, dos 6 meses, ainda não), ou seja, **ainda não completou o esquema primário** — e é justamente antes dos 6 meses que ocorrem as formas graves e a maior letalidade da coqueluche.\n\n" +
      "A estratégia que protege esse lactente é a **vacinação da gestante com dTpa**, recomendada pelo PNI **a cada gestação, a partir da 20ª semana** (idealmente até 36 semanas). A vacina estimula a produção materna de anticorpos que atravessam a placenta e protegem o bebê exatamente na janela entre o nascimento e o término do esquema primário — e o cartão da mãe mostra o campo **dTpa em branco**, ou seja, ela **não foi vacinada**.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(B) Vacina contra VSR na gestante:** protege contra **bronquiolite por vírus sincicial respiratório**, que cursaria com coriza, sibilos/estertores e taquipneia — o oposto da ausculta normal deste caso.\n" +
      "- **(C) VPC10 (pneumocócica):** o pneumococo causa pneumonia e otite, com febre e alteração de ausculta; não provoca tosse paroxística com cianose e ausculta limpa.\n" +
      "- **(D) Influenza aos 5 meses:** além de a influenza cursar com febre e sintomas de via aérea superior, a vacina **só é licenciada a partir dos 6 meses** de idade — a proteção do lactente menor se faz, também aqui, vacinando a gestante.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q57",
    grandeArea: "Pediatria",
    tema: "Alergia e Imunologia",
    subtema: "Anafilaxia / Reação alérgica alimentar",
    enunciado:
      "Criança, sexo masculino, 4 anos de idade, **alérgica a amendoim**, comparece à unidade de emergência devido à ingestão acidental de um doce contendo o alérgeno há cerca de 40 minutos. Há 10 minutos, iniciou o surgimento de **placas urticariformes por todo o corpo, sem outras queixas**. Na avaliação inicial, paciente encontra-se em bom estado geral, corado, hidratado, ausculta cardíaca com 2BRNF sem sopros, FC de 102 bpm, PA de 88×54 mmHg, extremidades bem perfundidas, ausculta pulmonar com murmúrio vesicular presente, **sem ruídos adventícios**, FR de 24 irpm, SpO2 de 97% em ar ambiente. Abdome flácido, normotenso, indolor.\n\nA conduta indicada nesse momento é:",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Administrar adrenalina 1:1.000 por via intramuscular." },
      { letra: "B", texto: "Alta hospitalar, com anti-histamínico e corticosteroide." },
      { letra: "C", texto: "Monitorização hospitalar e administrar anti-histamínico." },
      { letra: "D", texto: "Realizar medidas de eliminação com lavagem gástrica." },
    ],
    gabaritoOficial: "C",
    comentarioGabarito:
      "**Gabarito oficial: C — Monitorização hospitalar e anti-histamínico**\n\n" +
      "O ponto da questão é **saber o que ainda NÃO é anafilaxia**. A criança tem **apenas acometimento cutâneo** (urticária generalizada), com **todos os demais sistemas normais**: respiratório (sem sibilos/estridor, FR 24, SpO2 97%), cardiovascular (PA 88×54 — normal para a idade, boa perfusão, FC 102) e gastrointestinal (abdome indolor, sem vômitos).\n\n" +
      "Pelos critérios diagnósticos, anafilaxia exige **acometimento de pele/mucosa + pelo menos um sistema** (respiratório, cardiovascular ou gastrointestinal persistente) **ou** hipotensão/broncoespasmo/envolvimento laríngeo após exposição a alérgeno conhecido. Nada disso está presente — trata-se, por ora, de **urticária aguda alérgica**.\n\n" +
      "Por isso a conduta é: **anti-histamínico** e, principalmente, **observação hospitalar**. A observação não é detalhe: a reação pode **progredir** nas primeiras horas e existe a possibilidade de **reação bifásica**. Se surgir qualquer sinal respiratório, cardiovascular ou gastrointestinal, a **adrenalina intramuscular (1:1.000, 0,01 mg/kg, máx. 0,3-0,5 mg, no vasto lateral)** deve ser aplicada **imediatamente**. Na alta, prescrever plano de ação e **autoinjetor/orientação** para nova exposição.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Adrenalina agora:** a adrenalina é o tratamento de **anafilaxia**, e nunca deve ser postergada quando ela existe — mas aqui os critérios não são preenchidos. (Atenção: em pacientes com **antecedente de anafilaxia grave** ao mesmo alérgeno, muitos serviços aplicam precocemente; a questão, porém, não traz esse dado.)\n" +
      "- **(B) Alta hospitalar:** perigoso — perde-se a janela de observação para progressão e reação bifásica.\n" +
      "- **(D) Lavagem gástrica:** **contraindicada**. Não há papel para descontaminação gastrointestinal em reação alérgica alimentar (o alérgeno já foi absorvido, e o procedimento traz risco de aspiração).",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q58",
    grandeArea: "Pediatria",
    tema: "Neurologia pediátrica",
    subtema: "Crise febril simples",
    enunciado:
      "Criança, sexo feminino, branca, **1 ano e 2 meses de idade**, apresenta febre de até 39,5 °C há um dia, **sem outros sintomas**. Há cerca de uma hora, apresentou **crise convulsiva tônico-clônica generalizada com duração de 4 minutos** na vigência de febre, sendo levada ao hospital. Foi admitida **já fora da crise, alerta e sem alterações no exame físico**. Paciente previamente hígida, com vacinação em dia, tem antecedente familiar de irmão e pai com histórico de crises convulsivas na vigência de febre até os cinco anos de idade.\n\nFrente aos dados apresentados, a conduta indicada para a paciente é",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "coletar eletrólitos, glicemia capilar e hemograma." },
      { letra: "B", texto: "coletar urina tipo 1 e urocultura por sondagem vesical." },
      { letra: "C", texto: "realizar ultrassom transfontanela e eletroencefalograma." },
      { letra: "D", texto: "manter observação hospitalar por 24h, sem exames." },
    ],
    gabaritoOficial: "B",
    comentarioGabarito:
      "**Gabarito oficial: B — coletar urina tipo 1 e urocultura por sondagem vesical**\n\n" +
      "Trata-se de uma **crise febril simples**, que preenche todos os critérios: criança entre **6 meses e 5 anos**, crise **generalizada**, **com menos de 15 minutos** de duração, **única em 24 horas**, com **recuperação completa** e exame neurológico normal — e ainda com **história familiar positiva**, presente em até um terço dos casos.\n\n" +
      "A consequência prática é fundamental: **a crise febril simples, por si, não exige investigação neurológica**. Não se pede eletroencefalograma, não se pede neuroimagem e não se faz punção lombar de rotina (esta fica reservada a sinais meníngeos, criança toxemiada, menores de 6-12 meses com vacinação incompleta para *Haemophilus*/pneumococo, ou uso prévio de antibiótico que possa mascarar meningite).\n\n" +
      "O raciocínio muda de foco: **o que importa agora é encontrar a causa da febre**. E, numa menina de 14 meses com **febre alta sem sinais localizatórios**, a principal infecção bacteriana oculta é a **infecção do trato urinário** — daí a coleta de urina **por método estéril**: **sondagem vesical** (ou punção suprapúbica). Saco coletor não serve para cultura, pela altíssima taxa de contaminação.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Eletrólitos, glicemia e hemograma:** exames laboratoriais de rotina **não são recomendados** na crise febril simples; seriam indicados se houvesse vômitos, diarreia, desidratação ou suspeita de distúrbio metabólico.\n" +
      "- **(C) Ultrassom transfontanela e EEG:** o EEG **não prediz** recorrência nem epilepsia futura na crise simples; e a ultrassonografia transfontanela, além de ter janela acústica já limitada nessa idade, não tem indicação.\n" +
      "- **(D) Observação por 24 h sem exames:** deixar de investigar o foco febril é o erro — a criança pode ter ITU, que exige antibiótico. Após identificar e tratar o foco, orienta-se a família sobre a **benignidade** do quadro (o prognóstico é excelente; o risco de epilepsia é pouco maior que o da população geral) e sobre o manejo de novas crises.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q59",
    grandeArea: "Pediatria",
    tema: "Crescimento e desenvolvimento",
    subtema: "Obesidade infantil / Curvas da OMS",
    enunciado:
      "Você é responsável pela organização de uma pesquisa sobre obesidade infantil. O objetivo é buscar pacientes do **sexo masculino, de 0 a 15 anos de idade, com diagnóstico de obesidade**, conforme padronização da Organização Mundial de Saúde (OMS) apresentada nos gráficos a seguir (IMC por idade para meninos: do nascimento aos 5 anos e dos 5 aos 19 anos, em escores-z), a fim de conhecer os hábitos alimentares destas crianças.\n\nConsiderando as referências da OMS e o objetivo da pesquisa, assinale a alternativa que apresenta o paciente mais adequado para o estudo.",
    imagens: [IMG + "q59-tabelas-oms.jpg"],
    alternativas: [
      { letra: "A", texto: "1 ano e 10 meses, IMC de 20 kg/m²" },
      { letra: "B", texto: "3 anos e 2 meses, IMC de 17,5 kg/m²" },
      { letra: "C", texto: "8 anos e 3 meses, IMC de 21 kg/m²" },
      { letra: "D", texto: "12 anos e 6 meses, IMC de 22,5 kg/m²" },
    ],
    gabaritoOficial: "C",
    comentarioGabarito:
      "**Gabarito oficial: C — 8 anos e 3 meses, IMC de 21 kg/m²**\n\n" +
      "A pegadinha é que **os pontos de corte da OMS mudam aos 5 anos**:\n\n" +
      "| Faixa etária | Sobrepeso | Obesidade | Obesidade grave |\n| --- | --- | --- | --- |\n| **0 a 5 anos** | > +2 escore-z | **> +3** | — |\n| **5 a 19 anos** | > +1 escore-z | **> +2** | > +3 |\n\n" +
      "Aplicando aos candidatos:\n" +
      "- **(C) 8 anos e 3 meses com IMC 21:** no gráfico de 5-19 anos, a curva **+2** nessa idade fica em torno de **19,5-20 kg/m²**. Um IMC de 21 está **acima de +2** → **obesidade**. ✔\n" +
      "- **(A) 1 ano e 10 meses com IMC 20:** aos ~22 meses a curva **+3** está em torno de **20,4** e a **+2** em torno de **18,8**. IMC 20 fica **entre +2 e +3** → **sobrepeso**, e não obesidade (nessa faixa, obesidade exige > +3).\n" +
      "- **(B) 3 anos e 2 meses com IMC 17,5:** aos 38 meses, **+1 ≈ 16,8** e **+2 ≈ 18,2**. IMC 17,5 fica entre +1 e +2 → **risco de sobrepeso** (para menores de 5 anos), longe da obesidade.\n" +
      "- **(D) 12 anos e 6 meses com IMC 22,5:** nessa idade, **+1 ≈ 21,5-22** e **+2 ≈ 24,5**. IMC 22,5 fica entre +1 e +2 → **sobrepeso**.\n\n" +
      "**Dica para a prova:** memorize a \"regra do 3 e do 2\" — **antes dos 5 anos, obesidade é > +3**; **depois dos 5 anos, obesidade é > +2**. Também vale lembrar que o IMC infantil **não tem valor absoluto fixo** (como os 30 kg/m² do adulto): ele sempre precisa ser interpretado por **idade e sexo**, porque o IMC varia fisiologicamente ao longo do crescimento (sobe no primeiro ano, cai até os 5-6 anos — o *rebote adiposo* — e volta a subir).",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q60",
    grandeArea: "Medicina Preventiva e Social",
    tema: "Saúde da criança",
    subtema: "Triagem visual escolar / Teste de Snellen",
    enunciado:
      "Criança, sexo masculino, 7 anos de idade é portadora de miopia e **usa lentes corretivas**. Em mutirão executado por **agentes comunitários de saúde treinados previamente**, foi submetida ao teste de Snellen em sua escola, **usando seus óculos**. A mãe da criança procura a unidade básica de saúde solicitando encaminhamento ao oftalmologista após a aplicação do teste, com resultado mostrado na imagem a seguir (olho direito: 0,7; olho esquerdo: 0,8).\n\nAssinale a alternativa que justifica, corretamente, o encaminhamento ao especialista.",
    imagens: [IMG + "q60-snellen.jpg"],
    alternativas: [
      { letra: "A", texto: "O resultado obtido no olho direito está alterado." },
      { letra: "B", texto: "O resultado obtido foi diferente nos dois olhos." },
      { letra: "C", texto: "O teste foi realizado com uso das lentes corretivas." },
      { letra: "D", texto: "O teste foi realizado por profissional não habilitado." },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**Gabarito oficial: A — o resultado do olho direito está alterado**\n\n" +
      "Na triagem visual escolar com a tabela de Snellen, o critério de encaminhamento ao oftalmologista é a **acuidade visual igual ou inferior a 0,7** em um ou ambos os olhos (outro critério aceito é **diferença de duas linhas ou mais** entre os olhos). O olho direito mediu exatamente **0,7** → **alterado**, justificando o encaminhamento.\n\n" +
      "Há um agravante importante: a criança **já usa correção** e fez o teste **com os óculos**. Ou seja, 0,7 é a **acuidade corrigida** — o que sugere **correção inadequada/desatualizada** (miopia em progressão, situação muito comum em escolares) ou outra causa associada, como **ambliopia**. Isso torna o encaminhamento ainda mais necessário.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(B) Diferença entre os olhos:** existe, mas é de **apenas uma linha** (0,7 vs 0,8) — abaixo do critério de duas linhas. Não é ela que justifica o encaminhamento.\n" +
      "- **(C) Ter feito o teste com as lentes:** está **correto** e é o recomendado — em quem já usa correção, avalia-se justamente a acuidade **com** os óculos, para saber se a correção está adequada.\n" +
      "- **(D) Profissional não habilitado:** o teste de Snellen é um instrumento **de triagem**, e **agentes comunitários de saúde e professores treinados** estão habilitados a aplicá-lo — é exatamente assim que funcionam as campanhas de saúde ocular escolar no SUS. O que o profissional treinado **não** faz é diagnóstico: por isso o encaminhamento.",
  },
];
