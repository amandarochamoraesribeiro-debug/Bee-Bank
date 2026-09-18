import type { NewQuestion } from "@/db/schema";

const BASE = {
  instituicao: "USP-SP",
  ano: 2026,
  prova: "Residência (Acesso Direto) — AD1",
  tipo: "multipla_escolha",
  anulada: false,
} as const;

const IMG = "/images/questions/rm2026-ad1/";

/** USP-SP 2026 — prova AD1, questões 21 a 40. */
export const rm2026Ad1QuestionsB2: Omit<NewQuestion, "createdAt">[] = [
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q21",
    grandeArea: "Clínica Médica",
    tema: "Nefrologia",
    subtema: "Hipercalemia / Lesão renal na nefrite lúpica",
    enunciado:
      "Mulher, 23 anos de idade, possui antecedente de lúpus eritematoso sistêmico com atividade prévia mucocutânea e articular em uso de hidroxicloroquina e prednisona, além de constipação crônica. Perdeu seguimento ambulatorial por 2 anos. Procura o departamento de emergência por cansaço inespecífico. Ao exame físico, apresentou PA de 152×88 mmHg, FC de 90 bpm, FR de 23 irpm, SpO2 de 94% em ar ambiente, ausculta cardiopulmonar sem alterações, hiperemia malar e em tronco.\n\n**Exames laboratoriais:** Hb 8,9 g/dL · Leucócitos 3.600/mm³ · Plaquetas 123 mil/mm³ · Cr 3,7 mg/dL · Ur 127 mg/dL · K⁺ 5,8 mEq/L · Na⁺ 135 mEq/L\n\nFoi realizado o eletrocardiograma apresentado a seguir.\n\nCom base no caso clínico descrito, assinale a alternativa que apresenta a conduta imediata pertinente.",
    imagens: [IMG + "q21-ecg.jpg"],
    alternativas: [
      { letra: "A", texto: "Gluconato de cálcio." },
      { letra: "B", texto: "Furosemida." },
      { letra: "C", texto: "Desmopressina." },
      { letra: "D", texto: "Poliestireno sulfonato de sódio." },
    ],
    gabaritoOficial: "B",
    comentarioGabarito:
      "**Gabarito oficial: B — Furosemida**\n\n" +
      "A questão testa duas decisões ao mesmo tempo: **ler o ECG** e **reconhecer a hipervolemia**.\n\n" +
      "O ECG mostra ritmo sinusal com **ondas T de base larga e morfologia normal**, sem os achados da hipercalemia (onda T apiculada, **simétrica e de base estreita**, achatamento de onda P, alargamento do QRS). Ou seja: **hipercalemia leve (5,8 mEq/L) sem repercussão eletrocardiográfica**.\n\n" +
      "O quadro é de **nefrite lúpica com lesão renal avançada** (Cr 3,7; ureia 127; anemia; citopenias; 2 anos sem seguimento) e sinais de **congestão/hipervolemia**: hipertensão (152×88), taquipneia (FR 23) e SpO2 de 94%. A **furosemida** resolve os dois problemas simultaneamente — promove **caliurese** (excreção renal de potássio, tratamento eficaz para hipercalemia leve com função renal residual) e **reduz a volemia**.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Gluconato de cálcio:** é **estabilizador de membrana**, indicado quando há **alterações eletrocardiográficas** (ou K⁺ > 6,5). Não reduz o potássio — apenas antagoniza o efeito cardíaco. Sem alterações no ECG, não está indicado.\n" +
      "- **(C) Desmopressina:** usada na uremia para **corrigir disfunção plaquetária** em caso de sangramento ativo. A paciente não sangra, e isso não trata nem a hipercalemia nem a congestão.\n" +
      "- **(D) Poliestireno sulfonato de sódio:** resina de troca de ação **lenta** (horas a dias), de eficácia questionada na fase aguda, e com risco de **necrose colônica** — risco ainda maior nesta paciente, que tem **constipação crônica** (detalhe colocado de propósito no enunciado).",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q22",
    grandeArea: "Clínica Médica",
    tema: "Nefrologia",
    subtema: "Hipertensão no paciente em diálise",
    enunciado:
      "Homem, 67 anos de idade, possui antecedentes de hipertensão arterial sistêmica, doença renal crônica dialítica e cefaleia tensional. Está internado na enfermaria de clínica médica em término de tratamento de pneumonia. Durante a evolução, foram identificados, nos controles das últimas 48 horas, múltiplas aferições de pressão arterial próximas a 180×120 mmHg. Apresentou um episódio de sua cefaleia habitual.\n\nAssinale a alternativa que apresenta uma etapa do exame físico fundamental para a conduta imediata.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Exame do fundo de olho." },
      { letra: "B", texto: "Medida do peso corpóreo." },
      { letra: "C", texto: "Aferição da circunferência cervical." },
      { letra: "D", texto: "Pesquisa de sopro abdominal." },
    ],
    gabaritoOficial: "B",
    comentarioGabarito:
      "**Gabarito oficial: B — Medida do peso corpóreo**\n\n" +
      "No paciente **em hemodiálise**, a hipertensão é, na esmagadora maioria das vezes, **volume-dependente**: o mecanismo dominante é a retenção de sódio e água entre as sessões. Por isso, o dado de exame físico que muda a conduta imediata é **o peso** — comparado ao **peso seco** (aquele em que o paciente fica euvolêmico ao fim da diálise).\n\n" +
      "Se o paciente está acima do peso seco, a conduta não é acrescentar anti-hipertensivo, e sim **retirar volume**: antecipar/ajustar a sessão de diálise e a ultrafiltração, além de restringir sal e água. Isso é ainda mais provável aqui porque ele recebeu antibióticos endovenosos e hidratação durante o tratamento da pneumonia.\n\n" +
      "Repare também que **não há emergência hipertensiva**: a cefaleia é a **habitual** (tensional), sem sintomas neurológicos, visuais, dor torácica ou dispneia — ou seja, sem lesão aguda de órgão-alvo.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Fundo de olho:** é o exame-chave para identificar **retinopatia hipertensiva grau III/IV (hemorragias, exsudatos, papiledema)** e caracterizar emergência hipertensiva. É útil, mas aqui não há suspeita de emergência — e, mesmo alterado, não mudaria o tratamento imediato, que é retirar volume.\n" +
      "- **(C) Circunferência cervical:** faz parte da triagem de **apneia obstrutiva do sono**, causa de hipertensão secundária — investigação **ambulatorial**, não imediata.\n" +
      "- **(D) Sopro abdominal:** sugere **estenose de artéria renal**. Além de ser investigação eletiva, é achado pouco relevante em um paciente que já está em **diálise** (o rim já não é alvo terapêutico).",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q23",
    grandeArea: "Clínica Médica",
    tema: "Oncologia",
    subtema: "Emergências oncológicas / Hipercalcemia maligna",
    enunciado:
      "Mulher, 41 anos de idade, portadora de neoplasia de mama com metástases óssea e pulmonar, encontra-se em uso de morfina, dipirona e lactulose. Há uma semana, evoluiu com sonolência progressiva, náuseas, vômitos, piora da constipação intestinal e queda de funcionalidade. Ao exame físico, apresentou PA de 130×78 mmHg, FC de 112 bpm, FR de 14 irpm, SpO2 de 94%; regular estado geral, sonolenta, desidratada, hipocorada; aparelho cardiopulmonar sem alterações; abdome distendido.\n\nDiante desses achados, a principal hipótese diagnóstica é de",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "metástase hepática." },
      { letra: "B", texto: "metástase cerebral." },
      { letra: "C", texto: "hipercalcemia." },
      { letra: "D", texto: "hiponatremia." },
    ],
    gabaritoOficial: "C",
    comentarioGabarito:
      "**Gabarito oficial: C — Hipercalcemia**\n\n" +
      "A hipercalcemia maligna é a **emergência metabólica mais comum em oncologia** (acomete até 20-30% dos pacientes com câncer avançado) e o câncer de mama com **metástases ósseas** é uma das causas clássicas — por osteólise local mediada por citocinas e pelo PTHrP.\n\n" +
      "O quadro clínico bate ponto a ponto com a mnemônica clássica *\"bones, stones, groans, moans\"*:\n" +
      "- **Neurológico:** sonolência progressiva, queda de funcionalidade, confusão;\n" +
      "- **Gastrointestinal:** náuseas, vômitos e **piora da constipação** (a hipercalcemia reduz a motilidade da musculatura lisa — repare que ela já usa morfina e lactulose, e mesmo assim piorou);\n" +
      "- **Renal/volêmico:** **desidratação**, por diabetes insipidus nefrogênico induzido pelo cálcio (poliúria) somada aos vômitos — o que gera um ciclo vicioso, já que a desidratação reduz a excreção renal de cálcio e eleva ainda mais a calcemia.\n\n" +
      "O tratamento é **hidratação vigorosa com salina** + **bisfosfonato** (ácido zoledrônico) ou denosumabe, com calcitonina nos casos graves para efeito rápido.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Metástase hepática:** produziria icterícia, hepatomegalia dolorosa e alteração de enzimas/função hepática; a encefalopatia hepática só surge em falência avançada, com outros estigmas.\n" +
      "- **(B) Metástase cerebral:** é uma hipótese plausível em câncer de mama, mas cursaria com **cefaleia, déficits focais, convulsão ou alteração de campo visual** — nada disso descrito. E não explica constipação e desidratação.\n" +
      "- **(D) Hiponatremia:** pode ocorrer (SIADH paraneoplásica ou induzida por opioides) e causar sonolência, mas cursaria com **euvolemia/hipervolemia**, e não com desidratação — além de não explicar a piora da constipação.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q24",
    grandeArea: "Clínica Médica",
    tema: "Endocrinologia",
    subtema: "Insuficiência adrenal / Doses de estresse",
    enunciado:
      "Homem, 49 anos de idade, tem diagnóstico recente de insuficiência adrenal e faz uso crônico de hidrocortisona e fludrocortisona por via oral. Ele procura o pronto-socorro com queixa de 3 dias de congestão nasal, cefaleia frontal intermitente, rinorreia e odinofagia leve. Ao exame físico, apresenta temperatura de 38,3 ºC, bom estado geral, congestão nasal bilateral, orofaringe com hiperemia, sem linfonodos cervicais ou lesões orais; sem outras anormalidades. Ele conta que a equipe de endocrinologia lhe entregou uma carta para levar consigo em caso de atendimentos de urgência, mas esqueceu de trazer este documento.\n\nCom base nessas informações, assinale a alternativa que apresenta a conduta mais apropriada para o paciente neste momento.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Manter as doses dos medicamentos e observar evolução em domicílio." },
      { letra: "B", texto: "Manter as doses dos medicamentos e indicar hospitalização." },
      { letra: "C", texto: "Aumentar a dose de hidrocortisona e observar evolução em domicílio." },
      { letra: "D", texto: "Aumentar a dose de hidrocortisona e indicar hospitalização." },
    ],
    gabaritoOficial: "C",
    comentarioGabarito:
      "**Gabarito oficial: C — Aumentar a dose de hidrocortisona e observar evolução em domicílio**\n\n" +
      "Esta é a aplicação direta das **\"sick day rules\"** (regras de dias de doença) da insuficiência adrenal. O paciente não produz cortisol e, portanto, **não consegue montar a resposta fisiológica ao estresse** — que normalmente multiplica a secreção de cortisol várias vezes. Diante de uma doença intercorrente com **febre ≥ 38 °C**, a orientação é:\n\n" +
      "- **Dobrar** a dose habitual de hidrocortisona (febre 38-39 °C) ou **triplicar** (febre > 39 °C), mantendo por 2-3 dias até a melhora;\n" +
      "- **Não é necessário** ajustar a fludrocortisona — em doses de estresse, a própria hidrocortisona já tem efeito mineralocorticoide suficiente;\n" +
      "- Orientar retorno imediato se houver **vômitos, diarreia, hipotensão ou rebaixamento** — nessas situações a via oral não é confiável e entra a **hidrocortisona parenteral**.\n\n" +
      "A \"carta de emergência\" (*steroid emergency card*) esquecida é justamente o instrumento que comunica isso a qualquer equipe — o enunciado a cita para testar se você conhece a conduta sem ela.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Manter as doses:** é o erro mais perigoso — arrisca uma **crise adrenal** (hipotensão, choque, hiponatremia, hipoglicemia), condição potencialmente fatal.\n" +
      "- **(B) e (D) Hospitalização:** desnecessária. Trata-se de uma **infecção viral de vias aéreas superiores** em paciente em **bom estado geral**, sem vômitos, sem instabilidade e com via oral preservada. A internação fica reservada à crise adrenal instalada ou à impossibilidade de usar medicação oral.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q25",
    grandeArea: "Cirurgia Geral",
    tema: "Coloproctologia",
    subtema: "Neoplasias do canal anal / margem anal",
    enunciado:
      "Homem, 30 anos de idade, queixa-se de abaulamento anal associado a dor intensa, contínua e sangramento vivo. A sintomatologia piora em todas as suas evacuações e ficou ainda mais intensa há duas semanas. O hábito evacuatório era de uma evacuação ao dia, fezes endurecidas, e passou a ser de uma vez por semana devido à piora da dor. Relata ter uma “hemorroida/verruga” (sic), na borda anal, que parece ter aumentado com o tempo. Informa relações sexuais com parceiros do mesmo sexo, sem maiores detalhes. Ao exame físico, observou-se a lesão apresentada a seguir.\n\nCom base no relato do paciente e no exame físico apresentado, assinale a alternativa que indica o diagnóstico mais provável.",
    imagens: [IMG + "q25-lesao-anal.jpg"],
    alternativas: [
      { letra: "A", texto: "Adenocarcinoma." },
      { letra: "B", texto: "Carcinoma espinocelular." },
      { letra: "C", texto: "Condiloma acuminado." },
      { letra: "D", texto: "Hemorroida interna grau IV." },
    ],
    gabaritoOficial: "B",
    comentarioGabarito:
      "**Gabarito oficial: B — Carcinoma espinocelular**\n\n" +
      "A imagem mostra uma **lesão vegetante, ulcerada, friável e sangrante na margem anal**, com crescimento progressivo — aspecto típico de neoplasia maligna. O **carcinoma espinocelular (epidermoide)** é o tipo histológico de **~85-90% dos tumores do canal/margem anal**, porque essa região é revestida por **epitélio escamoso**.\n\n" +
      "Todos os fatores de risco estão no enunciado: **infecção por HPV** (a \"verruga\" que \"cresceu com o tempo\" — condiloma que evoluiu para neoplasia), **relações anais receptivas** e **homens que fazem sexo com homens** (nesse grupo é obrigatório investigar **HIV**, que aumenta muito o risco). Clinicamente, o alerta é a **dor contínua e progressiva** — hemorroidas não doem de forma contínua, exceto quando trombosadas.\n\n" +
      "A conduta é **biópsia** para confirmação; o tratamento padrão do carcinoma epidermoide do canal anal é a **quimiorradioterapia (esquema de Nigro)**, preservando o esfíncter — a cirurgia radical (amputação abdominoperineal) fica para falha ou recidiva.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Adenocarcinoma:** ocorre acima da linha pectínea/reto (epitélio **glandular**) e é raro no canal anal; o aspecto vegetante na **margem anal** aponta para linhagem escamosa.\n" +
      "- **(C) Condiloma acuminado:** é a lesão **precursora/benigna** — verrucosa, em \"couve-flor\", geralmente **múltipla e indolor**. Não ulcera, não sangra dessa forma e não causa dor incapacitante.\n" +
      "- **(D) Hemorroida interna grau IV:** é mucosa prolapsada irredutível, com aspecto **liso e recoberto por mucosa normal**, sem ulceração vegetante. Dói quando trombosada (quadro agudo), e não de forma progressiva por meses.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q26",
    grandeArea: "Cirurgia Geral",
    tema: "Abdome agudo obstrutivo",
    subtema: "Pseudo-obstrução cólica (síndrome de Ogilvie)",
    enunciado:
      "Mulher, 72 anos de idade, encontra-se no sexto pós-operatório de troca de valva mitral. Desde a operação não evacuou, e há dois dias não elimina gases. Nas últimas 24 horas, evoluiu com distensão e dor abdominal. Tem diabetes melito controlado e antecedente de apendicectomia por incisão de McBurney. Ao exame físico, encontra-se em regular estado geral, descorada, eupneica em ar ambiente; exame torácico com incisão de esternotomia sem sinais de complicação e dreno de mediastino com baixo débito; abdome distendido, com ruídos diminuídos, timpânico, pouco doloroso à palpação difusa sem sinais de irritação peritoneal.\n\n**Exames laboratoriais:** Hb 8,9 g/dL · Leucócitos 10.461/mm³ · Cr 2,5 mg/dL · Ur 72 mg/dL · PCR 79 mg/L (anterior, de dois dias atrás, 101 mg/L) · K⁺ 3,1 mEq/L · Na⁺ 134 mEq/L\n\nFoi realizada tomografia, conforme imagens a seguir.\n\nAssinale a alternativa que apresenta o diagnóstico mais provável.",
    imagens: [IMG + "q26-tc-abdome.jpg"],
    alternativas: [
      { letra: "A", texto: "Gastroparesia." },
      { letra: "B", texto: "Pseudo-obstrução cólica." },
      { letra: "C", texto: "Obstrução por bridas." },
      { letra: "D", texto: "Isquemia mesentérica." },
    ],
    gabaritoOficial: "B",
    comentarioGabarito:
      "**Gabarito oficial: B — Pseudo-obstrução cólica (síndrome de Ogilvie)**\n\n" +
      "A tomografia mostra **importante distensão gasosa do cólon, do ceco ao sigmoide, sem ponto de transição** — ou seja, dilatação colônica **sem obstrução mecânica**. Esse é o achado que define a síndrome de Ogilvie.\n\n" +
      "O contexto clínico é o do livro-texto: **paciente idosa, no pós-operatório de cirurgia cardíaca**, imobilizada, com **distúrbio hidroeletrolítico (K⁺ de 3,1)**, uso de opioides e comorbidades. O mecanismo é um **desequilíbrio autonômico** — hiperatividade simpática e/ou redução do estímulo parassimpático sacral —, que paralisa a motilidade colônica.\n\n" +
      "Achados a favor e contra infecção/isquemia: abdome **timpânico, pouco doloroso, sem irritação peritoneal**, leucócitos praticamente normais e **PCR em queda** (de 101 para 79).\n\n" +
      "O tratamento inicial é **conservador**: suspender opioides e drogas anticolinérgicas, corrigir eletrólitos (sobretudo **potássio**), sonda nasogástrica/retal e descompressão. Se o **ceco ultrapassar 10-12 cm** ou não houver melhora em 48-72 h, indica-se **neostigmina** (sob monitorização, pelo risco de bradicardia) e, em último caso, descompressão colonoscópica.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Gastroparesia:** cursaria com **vômitos e distensão gástrica**, não com distensão colônica difusa e parada de eliminação de gases.\n" +
      "- **(C) Obstrução por bridas:** a paciente tem cirurgia abdominal prévia (apendicectomia), o que torna a hipótese tentadora — mas bridas causam obstrução de **intestino delgado**, com alças delgadas dilatadas, **nível de transição** e cólon colabado. A tomografia mostra o oposto.\n" +
      "- **(D) Isquemia mesentérica:** exigiria **dor desproporcional ao exame**, acidose metabólica/lactato, leucocitose importante e sinais tomográficos como pneumatose, espessamento parietal ou falha de enchimento vascular. Aqui a PCR está caindo e o abdome é pouco doloroso.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q27",
    grandeArea: "Cirurgia Geral",
    tema: "Trauma",
    subtema: "Trauma abdominal fechado / Lesão de mesentério",
    enunciado:
      "Homem, 23 anos de idade, foi vítima de queda da motocicleta há 1 hora. No atendimento pré-hospitalar estava inconsciente, com PA de 110×80 mmHg e FC de 90 bpm. Foi realizada intubação orotraqueal e encaminhamento para centro de trauma. Na admissão, encontrava-se:\n\n- **A:** SpO2 de 97%;\n- **B:** expansibilidade preservada e ausculta sem alterações;\n- **C:** PA de 120×80 mmHg; FC de 94 bpm; **FAST positivo** no espaço hepatorrenal e esplenorrenal;\n- **D:** Escala de Coma de Glasgow 3T (sedado);\n- **E:** deformidade na perna direita, sem sangramento. Realizada sondagem vesical com diurese clara.\n\nApós o atendimento inicial, foi realizada tomografia de corpo inteiro. Na imagem a seguir, é possível observar a região do abdome com os achados relevantes.\n\nDiante da condição clínica do paciente e dos achados no exame de imagem, assinale a alternativa com a provável lesão e a melhor conduta.",
    imagens: [IMG + "q27-tc-abdome.jpg"],
    alternativas: [
      { letra: "A", texto: "Mesentério e laparotomia." },
      { letra: "B", texto: "Mesentério e tratamento não operatório." },
      { letra: "C", texto: "Fígado e laparotomia." },
      { letra: "D", texto: "Fígado e tratamento não operatório." },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**Gabarito oficial: A — Mesentério e laparotomia**\n\n" +
      "A tomografia mostra **líquido livre abundante, inclusive interalças, com densificação/infiltração da gordura mesentérica**, e **sem lesão de órgão sólido** (fígado e baço com realce homogêneo, sem laceração ou hematoma). Essa combinação — *\"líquido livre sem lesão de órgão sólido\"* — é o sinal de alarme clássico para **lesão de mesentério e/ou de víscera oca**.\n\n" +
      "Por que isso obriga a operar mesmo com o paciente estável? Porque, diferentemente do baço e do fígado, **lesões mesentéricas não param de sangrar sozinhas** e frequentemente cursam com **desvascularização de segmento intestinal** e perfuração tardia — com peritonite e sepse se a conduta for expectante. Some-se a isso um ponto decisivo do caso: o paciente está **sedado e intubado (Glasgow 3T)**, ou seja, **não é possível reavaliar o abdome clinicamente** — o exame seriado, pilar do tratamento não operatório, está indisponível.\n\n" +
      "Outros sinais tomográficos de lesão de víscera oca/mesentério que valem memorizar: espessamento de parede intestinal, pneumoperitônio, extravasamento de contraste oral, hematoma mesentérico e o sinal do *\"mesenteric streaking\"*.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(B) Mesentério e tratamento não operatório:** identifica a lesão certa, mas a conduta errada — lesão mesentérica com hemoperitônio significativo **não** é candidata a observação.\n" +
      "- **(C) e (D) Fígado:** a tomografia **não** mostra laceração hepática. Se houvesse trauma hepático **em paciente estável**, a conduta correta seria justamente **não operatória** (com angioembolização se houvesse blush) — o que torna a alternativa (C) duplamente errada.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q28",
    grandeArea: "Cirurgia Geral",
    tema: "Cirurgia bariátrica",
    subtema: "Complicações do pós-operatório imediato",
    enunciado:
      "Mulher, 49 anos de idade, está no primeiro pós-operatório de cirurgia de bypass gástrico para obesidade por videolaparoscopia. Ao exame físico, encontra-se descorada, com FC de 130 bpm, PA de 100×80 mmHg e FR de 23 irpm, SpO2 de 94%; abdome flácido e indolor à palpação, exceto nos locais das punções.\n\nAssinale a alternativa que apresenta a principal hipótese diagnóstica.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Hérnia interna." },
      { letra: "B", texto: "Atelectasia pulmonar." },
      { letra: "C", texto: "Deiscência da anastomose." },
      { letra: "D", texto: "Sangramento da anastomose." },
    ],
    gabaritoOficial: "D",
    comentarioGabarito:
      "**Gabarito oficial: D — Sangramento da anastomose**\n\n" +
      "Três elementos apontam para hemorragia: **palidez (descorada)**, **taquicardia importante (130 bpm)** com pressão \"convergente\" (100×80 — pinçamento da pressão de pulso, sinal precoce de choque hipovolêmico) e **abdome flácido e indolor**. O tempo também fala alto: **primeiro pós-operatório**. O sangramento é a complicação hemorrágica típica das primeiras **24-48 horas**, originando-se sobretudo das **linhas de grampeamento** (gastrojejunal, jejunojejunal ou do *pouch*), podendo ser intraluminal (com melena/hematêmese) ou intraperitoneal.\n\n" +
      "Conduta: exames seriados (hemoglobina), ressuscitação volêmica, suspender anticoagulação profilática e, se houver instabilidade ou queda progressiva, **reoperação/endoscopia**.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(C) Deiscência da anastomose (fístula):** é a complicação mais temida e deve sempre ser lembrada — **taquicardia persistente no pós-operatório de bariátrica é fístula até prova em contrário**. Mas ela costuma aparecer entre o **3º e o 7º dia**, acompanhada de **febre, dor abdominal e sinais de sepse**. Com apenas 1 dia de pós-operatório, abdome indolor e **palidez** evidente, o sangramento é a hipótese mais provável.\n" +
      "- **(A) Hérnia interna:** complicação **tardia** (meses a anos após a cirurgia, tipicamente após grande perda de peso), manifestando-se com dor abdominal em cólica e obstrução intestinal.\n" +
      "- **(B) Atelectasia pulmonar:** frequente no pós-operatório e pode causar febre e discreta dessaturação, mas **não** explica palidez nem taquicardia de 130 bpm com pinçamento pressórico.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q29",
    grandeArea: "Cirurgia Geral",
    tema: "Cirurgia pediátrica",
    subtema: "Complicações da esofagocoloplastia",
    enunciado:
      "Lactente, 1 ano de idade, foi submetido à esofagocoloplastia devido a atresia de esôfago. Após 24 horas de cirurgia, apresenta-se gemente, com má perfusão periférica, oligúria e **débito vinhoso fétido pela gastrostomia**. Ao exame físico, apresenta FC de 190 bpm e PA de 70×40 mmHg. Saturação de oxigênio não aferível. Murmúrios vesiculares reduzidos em bases.\n\nAssinale a alternativa que apresenta a complicação mais provável.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Deiscência da anastomose." },
      { letra: "B", texto: "Pneumotórax hipertensivo." },
      { letra: "C", texto: "Perfuração de cólon." },
      { letra: "D", texto: "Necrose de cólon." },
    ],
    gabaritoOficial: "D",
    comentarioGabarito:
      "**Gabarito oficial: D — Necrose de cólon**\n\n" +
      "O achado que fecha o diagnóstico é o **débito vinhoso e fétido pela gastrostomia**. Na esofagocoloplastia, um segmento de cólon é transposto para substituir o esôfago, **dependendo inteiramente do pedículo vascular** construído (geralmente a artéria cólica esquerda). Se esse pedículo sofre torção, compressão pelo túnel (retroesternal ou mediastinal) ou trombose, o enxerto **necrosa** — e o conteúdo necrótico drena com esse aspecto característico: escuro (\"vinhoso\", por sangue digerido) e **fétido** (proliferação bacteriana em tecido desvitalizado).\n\n" +
      "O tempo também é típico: a necrose do enxerto se manifesta nas **primeiras 24-72 horas**, com **choque séptico** — exatamente o que a criança apresenta (gemência, má perfusão, oligúria, FC 190, PA 70×40, saturação não aferível).\n\n" +
      "É uma **emergência cirúrgica**: exige reabordagem imediata, ressecção do enxerto necrótico, esofagostomia cervical e suporte intensivo.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Deiscência da anastomose:** é a complicação mais comum desse procedimento, mas costuma ocorrer entre o **5º e o 10º dia**, manifestando-se como **fístula cervical** (saliva pela ferida) ou mediastinite — em geral com evolução menos fulminante. A deiscência aqui seria, na verdade, **consequência** da necrose.\n" +
      "- **(B) Pneumotórax hipertensivo:** explicaria o choque e a redução do murmúrio, mas seria **obstrutivo** (com hipertimpanismo, desvio de traqueia e turgência jugular) e **jamais explicaria o débito vinhoso fétido**. A redução dos murmúrios nas bases aqui é atelectasia/derrame no contexto séptico.\n" +
      "- **(C) Perfuração de cólon:** possível, mas é um evento **localizado**; a apresentação com choque precoce somada ao aspecto do débito indica necrose do enxerto como processo primário.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q30",
    grandeArea: "Cirurgia Geral",
    tema: "Coloproctologia",
    subtema: "Câncer colorretal obstrutivo / Doença metastática",
    enunciado:
      "Homem, 73 anos de idade, refere alteração do hábito intestinal há 4 meses, com constipação e necessidade progressiva de laxativos. Realizou colonoscopia que evidenciou lesão ulcerada no sigmoide **intransponível ao aparelho**. Procura o serviço de emergência devido a dor abdominal em cólica, distensão e parada de evacuação há 5 dias. Ao exame físico, encontra-se em regular estado geral, desidratado, abdome pouco distendido, **fígado palpável até 4 cm abaixo do rebordo costal direito**, doloroso à palpação profunda, sem irritação peritoneal.\n\n**Exames laboratoriais:** Hb 10,8 g/dL · Ht 30% · Ur 43 mg/dL · Cr 1,4 mg/dL · Albumina 3,3 mg/dL\n\nFoi realizada a tomografia, com o resultado apresentado na imagem a seguir.\n\nDiante da condição clínica do paciente e dos achados no exame de imagem, assinale a alternativa que apresenta a melhor conduta neste momento.",
    imagens: [IMG + "q30-tc-abdome.jpg"],
    alternativas: [
      { letra: "A", texto: "Retossigmoidectomia com linfadenectomia com anastomose." },
      { letra: "B", texto: "Retossigmoidectomia com linfadenectomia sem anastomose." },
      { letra: "C", texto: "Laparotomia exploradora com colostomia em alça." },
      { letra: "D", texto: "Laparotomia exploradora com ileostomia em alça." },
    ],
    gabaritoOficial: "C",
    comentarioGabarito:
      "**Gabarito oficial: C — Laparotomia exploradora com colostomia em alça**\n\n" +
      "A tomografia mostra **múltiplas lesões hipodensas no fígado** — metástases hepáticas volumosas (o que explica a hepatomegalia dolorosa) — além de distensão colônica por tumor obstrutivo do sigmoide. Trata-se, portanto, de **câncer colorretal estádio IV, obstruído**.\n\n" +
      "Diante disso, o objetivo da cirurgia de urgência **não é oncológico, é paliativo**: resolver a obstrução com o **menor porte possível** em um paciente desidratado, anêmico (Hb 10,8) e hipoalbuminêmico (3,3), condições que aumentam muito o risco de deiscência. A **colostomia em alça** descomprime, é rápida, pode ser feita até com incisão limitada, e permite iniciar **quimioterapia** precocemente — que é o tratamento que de fato define o prognóstico na doença metastática. (Em serviços com disponibilidade, o **stent colônico autoexpansível** cumpre o mesmo papel de forma ainda menos invasiva.)\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) Retossigmoidectomia com anastomose:** ressecção com anastomose primária em **cólon obstruído, não preparado**, com fezes represadas e paciente desnutrido/desidratado, tem risco proibitivo de **deiscência**.\n" +
      "- **(B) Retossigmoidectomia sem anastomose (Hartmann):** é uma operação de maior porte e mais demorada, com benefício oncológico questionável diante de **doença metastática hepática difusa** — expõe um paciente frágil a risco desnecessário.\n" +
      "- **(D) Ileostomia em alça:** **não resolve** a obstrução colônica. Com a válvula ileocecal competente, o cólon continua fechado entre a válvula e o tumor — uma **alça fechada**, com risco de isquemia e perfuração do ceco.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q31",
    grandeArea: "Cirurgia Geral",
    tema: "Oncologia cirúrgica",
    subtema: "Melanoma cutâneo / Estadiamento",
    enunciado:
      "Mulher, 67 anos de idade, notou lesão pigmentada na face anterior da perna esquerda. Foi realizada biópsia excisional que revelou tratar-se de melanoma com **Breslow de 4,5 mm e ulceração**.\n\nQual é o próximo passo na condução do caso?",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Ampliação de margens de 1 cm e pesquisa de linfonodo sentinela." },
      { letra: "B", texto: "Ampliação de margens de 2 cm e pesquisa de linfonodo sentinela." },
      { letra: "C", texto: "Ultrassom de região inguinal e ressonância de abdome total." },
      { letra: "D", texto: "Tomografia de tórax, abdome superior e pelve com contraste." },
    ],
    gabaritoOficial: "D",
    comentarioGabarito:
      "**Gabarito oficial: D — Tomografia de tórax, abdome superior e pelve com contraste**\n\n" +
      "Breslow **4,5 mm com ulceração** classifica a lesão como **T4b** — a categoria de maior risco do tumor primário, com probabilidade elevada de doença à distância já ao diagnóstico. Nessa situação, o **estadiamento por imagem vem antes** do planejamento cirúrgico definitivo, porque encontrar metástase a distância **muda completamente a conduta**: o paciente passa a ser candidato a **terapia sistêmica** (imunoterapia com anti-PD-1 / terapia-alvo se BRAF mutado), e a pesquisa de linfonodo sentinela perde o sentido (ela é ferramenta de **estadiamento regional**, inútil se já há doença metastática).\n\n" +
      "Por isso, para melanoma **espesso e ulcerado** (estádio IIB/IIC ou superior), as diretrizes recomendam imagem de corpo — **TC de tórax, abdome e pelve com contraste** ou PET-TC, com avaliação do SNC nos casos de alto risco.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(B) Ampliação de 2 cm + linfonodo sentinela:** a **margem está correta** (Breslow > 2 mm exige margem de **2 cm**), e a pesquisa de linfonodo sentinela é de fato indicada em T4 — mas é o passo **seguinte**, após afastar doença metastática.\n" +
      "- **(A) Ampliação de 1 cm:** margem **insuficiente**. A regra: *in situ* 0,5-1 cm; até 1 mm → 1 cm; 1-2 mm → 1-2 cm; **> 2 mm → 2 cm**.\n" +
      "- **(C) Ultrassom inguinal e RM de abdome:** o ultrassom da cadeia de drenagem tem papel no seguimento e em suspeita de linfonodo palpável, e a **ressonância de abdome não é o exame de estadiamento** do melanoma — deixaria o tórax, sítio frequente de metástase, completamente sem avaliação.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q32",
    grandeArea: "Cirurgia Geral",
    tema: "Urologia",
    subtema: "Massa testicular / Tumor de testículo",
    enunciado:
      "Homem, 27 anos de idade, refere dor testicular à direita há cerca de 15 dias, acompanhada de aumento de volume do testículo e disúria leve. Nega trauma. Sem febre ou corrimento uretral. Não tem parceira sexual fixa e usa preservativo ocasionalmente. Foi realizado ultrassom Doppler de escroto que evidenciou **testículo direito aumentado, hipoecoico e heterogêneo com aumento difuso da vascularização**.\n\nAssinale a alternativa que apresenta a melhor conduta.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Ciprofloxacino e azitromicina por 5 dias." },
      { letra: "B", texto: "Ceftriaxona dose única e doxiciclina por 10 dias." },
      { letra: "C", texto: "PET-CT com FDG18, βHCG e alfa feto proteína." },
      { letra: "D", texto: "Tomografia de tórax e abdome, βHCG e alfa feto proteína." },
    ],
    gabaritoOficial: "D",
    comentarioGabarito:
      "**Gabarito oficial: D — Tomografia de tórax e abdome, βHCG e alfa fetoproteína**\n\n" +
      "O ultrassom descreve **lesão intratesticular sólida — testículo aumentado, hipoecoico e heterogêneo, com vascularização aumentada**. Em um homem de **27 anos** (pico de incidência dos tumores germinativos, 15-35 anos), massa **intratesticular sólida é câncer até prova em contrário**, independentemente da dor (cerca de 10% dos tumores se manifestam com dor, por hemorragia ou infarto intratumoral).\n\n" +
      "A conduta correta é, portanto, **estadiar antes da orquiectomia**:\n" +
      "- **Marcadores tumorais (βHCG, alfafetoproteína e DHL) colhidos antes da cirurgia**, pois seus valores pré-operatórios entram na classificação de risco (IGCCCG) e servem de base para acompanhar a resposta;\n" +
      "- **TC de tórax e abdome/pelve**, para avaliar o retroperitônio (primeiro sítio de disseminação, via linfática) e os pulmões.\n" +
      "O tratamento do primário é a **orquiectomia radical por via inguinal** — nunca biópsia ou punção transescrotal, pelo risco de disseminação para linfáticos inguinais.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(A) e (B) Antibióticos:** tratariam **epididimite/orquite**, e o enunciado joga contra: **sem febre, sem corrimento uretral**, evolução de 15 dias e, sobretudo, **massa sólida heterogênea** ao ultrassom — na orquiepididimite o padrão é aumento **difuso e homogêneo** com hiperemia, sem nódulo sólido.\n" +
      "- **(C) PET-CT com FDG:** não faz parte do estadiamento inicial. Seu papel é restrito à avaliação de **massa residual de seminoma após quimioterapia** (e mesmo assim, depois de ≥ 6 semanas); no não seminoma, é inútil por causa dos falso-negativos em teratoma.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q33",
    grandeArea: "Cirurgia Geral",
    tema: "Abdome agudo obstrutivo",
    subtema: "Obstrução de delgado por bridas",
    enunciado:
      "Mulher, 64 anos de idade, procura o serviço de emergência com distensão e dor abdominal em cólica há 24 horas, acompanhada de vômitos em grande quantidade. Nega alteração do hábito intestinal antes do quadro agudo. Tem antecedente de **retossigmoidectomia por diverticulite aguda complicada com peritonite**. Ao exame físico, encontra-se em bom estado geral, ausculta torácica sem alterações, abdome com **ruídos hidroaéreos aumentados**, distendido, doloroso à palpação profunda e sem sinais de irritação peritoneal.\n\nAssinale a alternativa que apresenta a tomografia esperada para esta paciente.",
    imagens: [IMG + "q33-tc-a.jpg", IMG + "q33-tc-b.jpg", IMG + "q33-tc-c.jpg", IMG + "q33-tc-d.jpg"],
    alternativas: [
      { letra: "A", texto: "Tomografia (A) — 1ª imagem acima." },
      { letra: "B", texto: "Tomografia (B) — 2ª imagem acima." },
      { letra: "C", texto: "Tomografia (C) — 3ª imagem acima." },
      { letra: "D", texto: "Tomografia (D) — 4ª imagem acima." },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**Gabarito oficial: A**\n\n" +
      "O quadro é de **obstrução intestinal de delgado por bridas (aderências)** — a causa mais comum de obstrução de delgado no adulto operado, responsável por cerca de **60-75%** dos casos. Tudo aponta para isso: **cirurgia abdominal prévia com peritonite** (o cenário de maior formação de aderências), início agudo com **cólica, vômitos abundantes**, distensão, **ruídos hidroaéreos aumentados** (luta contra o obstáculo) e **hábito intestinal prévio normal** — o que afasta neoplasia como causa.\n\n" +
      "A imagem **A** mostra o padrão esperado: **alças de intestino delgado difusamente dilatadas e repletas de líquido**, com as *valvulae conniventes* estiradas e visíveis (aspecto \"em empilhamento de moedas\"), ocupando o centro do abdome, com o **cólon colabado** a jusante. Em um corte coronal, esse \"emaranhado\" de alças dilatadas com cólon vazio é a assinatura da obstrução de delgado.\n\n" +
      "**Por que as outras estão erradas (o que procurar em cada padrão):**\n" +
      "- Imagens com **cólon dilatado difusamente** e delgado normal correspondem a obstrução **colônica** ou pseudo-obstrução — incompatível com história de vômitos precoces e abundantes.\n" +
      "- Imagens com **alças de calibre normal**, presença de gás distal e ausência de nível de transição afastam obstrução.\n" +
      "- Imagens com **ascite/líquido livre difuso, espessamento parietal ou massa** apontariam para carcinomatose, isquemia ou processo inflamatório, e não para brida — que é uma obstrução **puramente mecânica extrínseca**, sem lesão visível no ponto de transição.\n\n" +
      "**Dica:** na obstrução por brida, a tomografia tipicamente **não mostra a causa** — o diagnóstico se faz pela **transição abrupta de calibre sem massa, sem hérnia e sem inflamação** naquele ponto.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q34",
    grandeArea: "Cirurgia Geral",
    tema: "Pré e pós-operatório",
    subtema: "Antibioticoprofilaxia cirúrgica",
    enunciado:
      "Durante um checklist pré-operatório de retossigmoidectomia para o tratamento de adenocarcinoma de cólon esquerdo, em um paciente de 64 anos de idade com diabetes controlado, o anestesista pergunta ao cirurgião qual é o antibiótico preconizado neste momento.\n\nQual é a melhor opção?",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Cefoxitina." },
      { letra: "B", texto: "Cefuroxima." },
      { letra: "C", texto: "Cefazolina." },
      { letra: "D", texto: "Ceftriaxona." },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**Gabarito oficial: A — Cefoxitina**\n\n" +
      "Em cirurgia **colorretal**, a flora que contamina o sítio cirúrgico é mista: **bacilos Gram-negativos entéricos** (*E. coli*, *Klebsiella*) **e anaeróbios** — sobretudo *Bacteroides fragilis*. A profilaxia precisa cobrir **os dois grupos**.\n\n" +
      "A **cefoxitina** é uma **cefamicina** (agrupada como cefalosporina de 2ª geração) que tem, justamente, **boa atividade contra anaeróbios** além dos Gram-negativos — por isso é o agente clássico de escolha para cirurgia colorretal. A alternativa igualmente aceita é **cefazolina + metronidazol**.\n\n" +
      "Vale revisar os princípios da profilaxia: administrar por via **endovenosa dentro dos 60 minutos anteriores à incisão**, **repetir a dose** em cirurgias longas (a cada ~2 meias-vidas, ou se houver sangramento > 1.500 mL) e **suspender em até 24 horas** do pós-operatório (idealmente ainda no centro cirúrgico).\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(C) Cefazolina:** é a escolha padrão para cirurgias **limpas** (ortopédica, cardíaca, mama, hérnia), mas **sozinha não cobre anaeróbios** — insuficiente para o cólon.\n" +
      "- **(B) Cefuroxima:** cefalosporina de 2ª geração **sem** cobertura anaeróbia adequada; é usada, por exemplo, em cirurgia de vias biliares, mas não isolada em cirurgia colorretal.\n" +
      "- **(D) Ceftriaxona:** cefalosporina de 3ª geração que também **não cobre anaeróbios** e, por seu amplo espectro e meia-vida longa, **não é recomendada como profilaxia** — favorece seleção de resistência e *C. difficile*.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q35",
    grandeArea: "Cirurgia Geral",
    tema: "Pré e pós-operatório",
    subtema: "Terapia nutricional no paciente oncológico",
    enunciado:
      "Homem, 59 anos de idade, foi diagnosticado com adenocarcinoma pancreático com indicação de quimioterapia neoadjuvante. Relata perda de 10% do peso corpóreo. **O peso ideal é de 70 kg.** Não possui comorbidades.\n\nConsiderando o suporte nutricional para tolerar o tratamento sistêmico e, posteriormente, a operação de grande porte, assinale a alternativa que apresenta as metas calórica e proteica preconizadas.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "2.000 calorias; 100 gramas de proteína." },
      { letra: "B", texto: "2.000 calorias; 200 gramas de proteína." },
      { letra: "C", texto: "3.000 calorias; 200 gramas de proteína." },
      { letra: "D", texto: "3.000 calorias; 100 gramas de proteína." },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**Gabarito oficial: A — 2.000 calorias; 100 gramas de proteína**\n\n" +
      "É uma questão de conta, usando as metas consagradas (ESPEN/ASPEN) para o paciente **oncológico/cirúrgico**:\n\n" +
      "- **Energia: 25 a 30 kcal/kg/dia** → 70 kg × 25-30 = **1.750 a 2.100 kcal/dia** ≈ **2.000 kcal**;\n" +
      "- **Proteína: 1,2 a 1,5 g/kg/dia** (pode chegar a 2,0 g/kg/dia em situações de estresse intenso) → 70 kg × 1,2-1,5 = **84 a 105 g/dia** ≈ **100 g**.\n\n" +
      "Repare no detalhe do enunciado: usa-se o **peso ideal (70 kg)**, e não o peso atual reduzido pela perda ponderal — isso evita subestimar a oferta em um paciente já desnutrido. E o contexto reforça a importância do suporte: adenocarcinoma de pâncreas com **perda de 10% do peso** é caquexia neoplásica, fator de risco independente para toxicidade da quimioterapia e complicações pós-operatórias.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(B) 2.000 kcal com 200 g de proteína:** 200 g equivalem a **~2,9 g/kg/dia**, muito acima do recomendado; além disso, proteína em excesso com energia insuficiente é **oxidada como fonte energética**, sem ganho de síntese proteica, e sobrecarrega a função renal.\n" +
      "- **(C) 3.000 kcal com 200 g:** soma os dois excessos. Hiperalimentação em paciente desnutrido aumenta o risco de **síndrome de realimentação**, hiperglicemia e esteatose hepática.\n" +
      "- **(D) 3.000 kcal com 100 g:** a proteína está correta, mas **~43 kcal/kg/dia** é oferta energética excessiva para este paciente.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q36",
    grandeArea: "Cirurgia Geral",
    tema: "Cirurgia do aparelho digestivo",
    subtema: "Coledocolitíase após bypass gástrico",
    enunciado:
      "Homem, 45 anos de idade, submetido a gastroplastia em Y de Roux para tratamento de obesidade há 2 anos, com perda de 40 kg. Em exame de rotina, foi feito o diagnóstico de **colelitíase e coledocolitíase**.\n\nAssinale a alternativa que apresenta a melhor sequência de tratamento.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Colecistectomia e colangiografia transparietohepática." },
      { letra: "B", texto: "Colecistectomia e exploração cirúrgica do colédoco." },
      { letra: "C", texto: "Colangiografia endoscópica e colecistectomia laparoscópica." },
      { letra: "D", texto: "Litotripsia extracorpórea e colecistectomia." },
    ],
    gabaritoOficial: "B",
    comentarioGabarito:
      "**Gabarito oficial: B — Colecistectomia e exploração cirúrgica do colédoco**\n\n" +
      "O detalhe que define tudo é a **anatomia em Y de Roux**. Depois do bypass gástrico, o **estômago excluso e o duodeno ficam inacessíveis** ao endoscópio convencional: para chegar à papila duodenal seria preciso percorrer a alça alimentar, a alça biliopancreática e alcançar o duodeno em sentido retrógrado — trajeto longo demais para o duodenoscópio padrão.\n\n" +
      "Por isso, nesse paciente, a solução mais direta é resolver **tudo no mesmo tempo cirúrgico**: **colecistectomia + exploração do colédoco** (transcística ou por coledocotomia, com retirada dos cálculos sob visão/coledocoscopia).\n\n" +
      "Vale conhecer as alternativas existentes na prática, quando disponíveis: **CPRE transgástrica assistida por laparoscopia** (acesso ao estômago excluso por trocarte, durante a cirurgia) e **CPRE assistida por enteroscopia de duplo balão** — ambas com menor taxa de sucesso e exigindo recursos específicos.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(C) Colangiografia endoscópica (CPRE) e depois colecistectomia:** seria a sequência **correta na anatomia normal** — e é exatamente a armadilha da questão. Após Y de Roux, a CPRE convencional é **tecnicamente inviável** na maioria dos casos.\n" +
      "- **(A) Colangiografia transparieto-hepática:** o acesso percutâneo trans-hepático é uma via de **drenagem de resgate**, para pacientes sem condições cirúrgicas ou com colangite e falha das demais vias — é invasivo e não é o tratamento de escolha aqui.\n" +
      "- **(D) Litotripsia extracorpórea:** não tem papel estabelecido no tratamento de cálculos de via biliar principal (é terapia de cálculos urinários); deixaria os cálculos e a obstrução sem solução definitiva.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q37",
    grandeArea: "Cirurgia Geral",
    tema: "Coloproctologia",
    subtema: "Diverticulite aguda complicada / Classificação de Hinchey",
    enunciado:
      "Homem, 65 anos de idade, procura o serviço de emergência com dor em fossa ilíaca esquerda há 6 dias, associada a constipação, náuseas e hiporexia. Nega febre. Ao exame físico, apresenta-se em bom estado geral, FC de 80 bpm, PA de 130×80 mmHg, com dor à palpação profunda em fossa ilíaca esquerda, sem sinais de irritação peritoneal. Exames laboratoriais apresentaram 15.000/mm³ leucócitos e PCR de 180 mg/L.\n\nFoi realizada uma tomografia contrastada de abdome, que evidenciou divertículos em cólon descendente e sigmoide com densificação da gordura mesentérica e presença de **abscesso pericólico de 2 cm de diâmetro** com focos gasosos de permeio.\n\nAssinale a alternativa que apresenta a melhor conduta neste momento.",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Antibioticoterapia." },
      { letra: "B", texto: "Colostomia em alça." },
      { letra: "C", texto: "Retossigmoidectomia." },
      { letra: "D", texto: "Drenagem percutânea." },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**Gabarito oficial: A — Antibioticoterapia**\n\n" +
      "Trata-se de **diverticulite aguda complicada, Hinchey Ib** (abscesso pericólico). O número que decide a conduta é o **tamanho do abscesso**: coleções **menores que 3-4 cm** costumam responder apenas a **antibioticoterapia** (cobrindo Gram-negativos e anaeróbios — ciprofloxacino + metronidazol ou amoxicilina-clavulanato) com repouso intestinal e reavaliação.\n\n" +
      "O paciente reforça essa escolha: **bom estado geral, afebril, normocárdico, normotenso e sem irritação peritoneal** — ou seja, sem sepse e sem peritonite. É só acompanhar clinicamente e reavaliar com imagem se não houver melhora em 48-72 h.\n\n" +
      "Depois do episódio resolvido, dois pontos importantes: **colonoscopia em 6-8 semanas** (para excluir neoplasia, que pode se apresentar exatamente assim) e discussão de **sigmoidectomia eletiva** caso a caso, considerando recidivas e fatores individuais — não mais de forma automática após o segundo episódio.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(D) Drenagem percutânea:** é a conduta correta para abscessos **≥ 4 cm** (alguns serviços adotam ≥ 3 cm), ou quando não há resposta ao antibiótico. Um abscesso de **2 cm** costuma ser difícil de puncionar e não traz benefício adicional.\n" +
      "- **(C) Retossigmoidectomia** e **(B) Colostomia em alça:** cirurgia de urgência se reserva à **peritonite purulenta ou fecal (Hinchey III e IV)**, à falha do tratamento clínico ou à instabilidade — nada disso presente. Operar um Hinchey Ib estável significa expor o paciente a estoma e morbidade sem necessidade.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q38",
    grandeArea: "Cirurgia Geral",
    tema: "Trauma",
    subtema: "Ferimento descolante / Lesão de Morel-Lavallée",
    enunciado:
      "Homem, 28 anos de idade, vítima de atropelamento com trauma do membro inferior esquerdo. Após 7 dias de internação, observa-se lesão no membro acometido, **sem solução de continuidade com o meio externo**. Ao exame físico, a escara cutânea está **descolada da profundidade** e apresenta **grande hematoma subcutâneo, sem perfusão cutânea adequada**, conforme imagem a seguir.\n\nAssinale a alternativa que apresenta o provável diagnóstico e a conduta cirúrgica mais adequada.",
    imagens: [IMG + "q38-lesao.jpg"],
    alternativas: [
      { letra: "A", texto: "Fasceíte necrotizante; punção diagnóstica para colheita de material para cultura, curativo oclusivo simples." },
      { letra: "B", texto: "Fasceíte necrotizante; incisão, drenagem de hematoma, colheita de material para cultura e instalação de curativo por pressão negativa." },
      { letra: "C", texto: "Ferimento descolante oculto; ressecção da pele desvitalizada, limpeza cirúrgica e realização de curativo por pressão negativa." },
      { letra: "D", texto: "Ferimento descolante oculto; ressecção e enxertamento da pele descolada, enxertia da pele emagrecida sobre o leito cruento." },
    ],
    gabaritoOficial: "C",
    comentarioGabarito:
      "**Gabarito oficial: C — Ferimento descolante oculto; ressecção da pele desvitalizada, limpeza cirúrgica e curativo por pressão negativa**\n\n" +
      "O quadro descreve o **ferimento descolante fechado (degloving fechado)**, também conhecido como **lesão de Morel-Lavallée**: um trauma tangencial (típico de atropelamento e acidente de moto) que **cisalha a pele e o tecido celular subcutâneo do plano da fáscia**, rompendo os vasos perfurantes. O resultado é exatamente o descrito — pele **descolada da profundidade**, com **coleção hemato-linfática** no espaço criado e **pele desvascularizada**, mas **sem ferida aberta** (daí \"oculto\").\n\n" +
      "A imagem mostra a evolução natural quando o diagnóstico demora: áreas de **necrose cutânea (escara enegrecida)**, já no 7º dia. A conduta é cirúrgica: **desbridar toda a pele inviável**, lavar e drenar a coleção, e cobrir o leito com **curativo por pressão negativa (vácuo)** — que controla o exsudato, elimina o espaço morto, reduz o edema e estimula tecido de granulação, preparando o leito para a reconstrução (enxerto) em um segundo tempo.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(D) Ressecção e reenxertia da pele descolada:** essa é a técnica clássica (retirar a pele descolada, desengordurá-la e reaplicá-la como enxerto) — mas ela só funciona **precocemente e com pele viável**. Aqui já são **7 dias** e a pele está **necrótica**: enxertar tecido morto sobre leito contaminado só resultaria em perda do enxerto e infecção.\n" +
      "- **(A) e (B) Fasceíte necrotizante:** o diagnóstico está errado. A fasceíte é uma **infecção fulminante de partes moles**, com toxemia, febre, **dor desproporcional**, crepitação, bolhas e evolução em **horas**, exigindo desbridamento radical de emergência. O enunciado descreve lesão **traumática** com hematoma e descolamento, sem quadro infeccioso sistêmico. Ainda assim, vale notar que a alternativa (A) seria inadequada mesmo para fasceíte — nela, \"curativo oclusivo simples\" é conduta francamente insuficiente.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q39",
    grandeArea: "Medicina Preventiva e Social",
    tema: "Medicina de Família e Comunidade",
    subtema: "Lombalgia / Fatores de cronificação",
    enunciado:
      "Mulher, 40 anos de idade, procura o serviço de emergência com dor lombar há 3 dias e aumento da intensidade nas últimas 12 h. No momento relata **dor 10 em 10 e incapacidade de trabalhar**. Relata múltiplos episódios prévios semelhantes em momentos de aumento da carga de trabalho. Tem obesidade (IMC de 41 kg/m²), insônia e tabagismo de 20 anos-maço. Faz uso de benzodiazepínico para dormir. Nega outras comorbidades. Ao exame físico, após analgesia, apresenta dor localizada na região lombar, com irradiação para o membro inferior direito, força motora e sensibilidade dos membros inferiores sem alterações.\n\nQual das características apresentadas pela paciente representa fator de risco para cronificação do episódio de dor lombar?",
    imagens: [],
    alternativas: [
      { letra: "A", texto: "Dor intensa gerando incapacidade funcional." },
      { letra: "B", texto: "Índice de massa corpórea maior que 35 kg/m²." },
      { letra: "C", texto: "Tabagismo com elevada carga tabágica." },
      { letra: "D", texto: "Insônia com uso de benzodiazepínico." },
    ],
    gabaritoOficial: "A",
    comentarioGabarito:
      "**Gabarito oficial: A — Dor intensa gerando incapacidade funcional**\n\n" +
      "A cronificação da lombalgia é prevista muito mais pelos chamados **\"yellow flags\" (bandeiras amarelas)** — fatores psicossociais e funcionais — do que por fatores estruturais ou metabólicos. Entre os preditores mais consistentes na literatura estão:\n\n" +
      "- **Alta intensidade de dor e incapacidade funcional no episódio inicial** (o mais robusto de todos);\n" +
      "- **Catastrofização** e medo do movimento (cinesiofobia);\n" +
      "- Sintomas depressivos e ansiedade;\n" +
      "- Insatisfação no trabalho e litígio/afastamento prolongado;\n" +
      "- Expectativa negativa de recuperação e comportamento de esquiva.\n\n" +
      "A paciente pontua exatamente nesse item: **dor 10/10 com incapacidade de trabalhar**, em episódios ligados à sobrecarga laboral. Reconhecer isso muda a conduta: além da analgesia, orienta-se **manter atividade** (repouso prolongado piora o prognóstico), retorno precoce ao trabalho e abordagem de aspectos psicossociais.\n\n" +
      "Vale reforçar que o caso **não tem bandeiras vermelhas** (febre, perda de peso, déficit neurológico, retenção urinária, câncer, trauma, idade > 50 com primeiro episódio) — força e sensibilidade estão normais —, portanto **não há indicação de exame de imagem**.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **(B) Obesidade:** associa-se à **ocorrência** de lombalgia (sobrecarga mecânica), mas é um preditor **fraco e inconsistente** de cronificação.\n" +
      "- **(C) Tabagismo:** também tem associação epidemiológica com dor lombar (por comprometimento da microcirculação discal), porém com efeito pequeno e menor peso preditivo.\n" +
      "- **(D) Insônia com benzodiazepínico:** distúrbio do sono e dor têm relação bidirecional, e o benzodiazepínico traz seus próprios riscos, mas entre as opções o fator **validado como preditor de cronificação** é a intensidade da dor com incapacidade.",
  },
  {
    ...BASE,
    id: "usp-sp-2026-ad1-q40",
    grandeArea: "Cirurgia Geral",
    tema: "Abdome agudo perfurativo",
    subtema: "Úlcera péptica perfurada / Pneumoperitônio",
    enunciado:
      "Mulher, 66 anos de idade, apresentou dor abdominal de início súbito e forte intensidade há 4 horas. Tem diabetes melito e tabagismo de 1 maço de cigarro por dia. Ao exame físico, encontra-se em regular estado geral, com FC de 100 bpm e PA de 100×70 mmHg, **abdome tenso, doloroso difusamente à palpação, inclusive à percussão**.\n\n**Exames laboratoriais:** Hb 14,9 g/dL · Ht 41% · Leucócitos 16.126/mm³ · PCR 12 mg/L · Amilase 281 U/L · Lipase 100 U/L\n\nFoi realizada a tomografia apresentada nas imagens a seguir (1ª imagem).\n\nAssinale a alternativa que representa o achado operatório esperado nesta paciente.",
    imagens: [
      IMG + "q40-tc-abdome.jpg",
      IMG + "q40-op-a.jpg",
      IMG + "q40-op-b.jpg",
      IMG + "q40-op-c.jpg",
      IMG + "q40-op-d.jpg",
    ],
    alternativas: [
      { letra: "A", texto: "Achado operatório (A) — 2ª imagem acima." },
      { letra: "B", texto: "Achado operatório (B) — 3ª imagem acima." },
      { letra: "C", texto: "Achado operatório (C) — 4ª imagem acima." },
      { letra: "D", texto: "Achado operatório (D) — 5ª imagem acima." },
    ],
    gabaritoOficial: "B",
    comentarioGabarito:
      "**Gabarito oficial: B**\n\n" +
      "A tomografia mostra o achado decisivo: **pneumoperitônio** — múltiplas bolhas de **ar livre na cavidade, anteriores ao fígado e sob a parede abdominal** (o ar sobe, e por isso se acumula na região mais anterior com o paciente em decúbito dorsal). Ar livre significa **perfuração de víscera oca**.\n\n" +
      "O restante do caso confirma: **dor súbita e intensa**, abdome **tenso e com dor à percussão** (irritação peritoneal difusa, o clássico \"abdome em tábua\"), leucocitose de 16.000 e **PCR ainda baixa (12)** — típico de quadro **hiperagudo**, com apenas 4 horas de evolução (a PCR leva 12-24 h para subir). A **amilase discretamente elevada (281)** com **lipase normal (100)** é uma pegadinha clássica: na perfuração, a amilase sobe pela absorção peritoneal de secreção digestiva, mas **não configura pancreatite** — na pancreatite a lipase é mais sensível e específica, e costuma estar bem mais elevada.\n\n" +
      "O achado operatório esperado é, portanto, a **perfuração da parede anterior gastroduodenal (úlcera péptica perfurada)**, mostrada na imagem (B) — o orifício de perfuração na superfície anterior do estômago/duodeno. O tratamento é **rafia com epiploplastia (patch de Graham)**, lavagem da cavidade e pesquisa/tratamento posterior de *H. pylori*.\n\n" +
      "**Por que as outras estão erradas:**\n" +
      "- **Vesícula biliar necrótica/enegrecida (colecistite gangrenosa):** cursaria com dor em hipocôndrio direito, Murphy positivo, febre e alterações de vesícula na tomografia — não com pneumoperitônio difuso.\n" +
      "- **Apendicite complicada:** a dor migra para a fossa ilíaca direita, a evolução é de 24-48 h e o pneumoperitônio é **incomum**.\n" +
      "- **Alças intestinais isquêmicas/necróticas (isquemia mesentérica):** é o principal diferencial nesta paciente com fatores de risco vasculares, mas cursaria com **dor desproporcional ao exame** no início, **acidose metabólica com lactato elevado** e achados tomográficos como pneumatose intestinal, gás portal ou falha de enchimento arterial — e não com pneumoperitônio maciço logo às 4 horas.",
  },
];
