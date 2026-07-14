export type Artigo = {
  slug: string;
  formato: "Artigo" | "Vídeo";
  titulo: string;
  tema: string;
  resumo: string;
  corpo: string[];
  lista?: string[];
  videoPlaceholder?: boolean;
};

// Conteúdo-modelo para demonstrar a estrutura do blog/vlog — cada texto deve
// ser revisado e assinado pelo médico ou pela nutricionista antes de publicar.
// Propositalmente sem citar nomes comerciais de medicamentos (regra CFM/CFN).
export const artigos: Artigo[] = [
  {
    slug: "medicacao-para-emagrecimento-acompanhamento-medico",
    formato: "Artigo",
    titulo: "Medicação para emagrecimento: por que o acompanhamento médico faz diferença",
    tema: "Medicação e acompanhamento médico",
    resumo:
      "Como a avaliação e o acompanhamento médico influenciam a segurança e os ajustes de um tratamento medicamentoso para emagrecimento.",
    corpo: [
      "Medicamentos para emagrecimento vêm ganhando espaço nas conversas sobre saúde metabólica — e, junto com isso, crescem também as dúvidas. Uma das mais importantes não é sobre qual medicamento escolher, mas sobre como ele se encaixa em um plano de cuidado mais amplo.",
      "Nenhum medicamento substitui uma avaliação individual. Histórico de saúde, exames laboratoriais, uso de outros medicamentos e objetivos pessoais influenciam diretamente se — e como — um tratamento medicamentoso faz sentido para cada pessoa.",
      "É por isso que, no Instituto Lamônica, qualquer decisão sobre uso de medicação parte da avaliação médica inicial e passa a ser acompanhada em conjunto com a orientação nutricional — para que o tratamento, quando indicado, esteja alinhado com hábitos, rotina e resposta do corpo ao longo do tempo.",
      "Se você está considerando esse caminho, o primeiro passo é conversar com um médico sobre o seu quadro específico — não sobre um medicamento isoladamente.",
    ],
  },
  {
    slug: "analogos-glp1-o-que-sao",
    formato: "Artigo",
    titulo: "Análogos de GLP-1: o que são e como o médico avalia a indicação",
    tema: "Entendendo os análogos de GLP-1",
    resumo:
      "Uma explicação geral sobre essa classe de medicamentos e os fatores que um médico considera antes de indicar o uso.",
    corpo: [
      "GLP-1 é o nome de um hormônio que o próprio corpo produz naturalmente, envolvido na sensação de saciedade e na regulação do açúcar no sangue. Nos últimos anos, medicamentos que imitam a ação desse hormônio — chamados de análogos de GLP-1 — passaram a fazer parte do tratamento de algumas condições metabólicas, sempre sob prescrição e acompanhamento médico.",
      "Como qualquer classe de medicamento, os análogos de GLP-1 não são indicados da mesma forma para todo mundo. A decisão sobre usar ou não depende de uma avaliação clínica que considera histórico de saúde, outras condições associadas e os objetivos do tratamento.",
      "Este texto tem caráter educativo e não substitui uma consulta médica. Se você tem dúvidas sobre essa classe de medicamentos, o espaço certo para essa conversa é a avaliação inicial com o médico.",
    ],
  },
  {
    slug: "efeitos-colaterais-perguntas-para-consulta",
    formato: "Artigo",
    titulo: "Efeitos colaterais de medicações para emagrecimento: perguntas para levar à consulta",
    tema: "Perguntas para sua consulta",
    resumo:
      "Uma lista de perguntas úteis para conversar com o médico antes de iniciar qualquer tratamento medicamentoso.",
    corpo: [
      "Antes de iniciar qualquer tratamento medicamentoso, vale chegar à consulta com perguntas prontas. Elas ajudam a entender melhor a proposta de tratamento e o que esperar dela.",
      "Algumas perguntas que costumam ajudar nessa conversa:",
    ],
    lista: [
      "Quais são os efeitos colaterais mais comuns desse tipo de medicamento?",
      "Como esse tratamento se encaixa no meu quadro de saúde específico?",
      "Que sinais eu devo observar e relatar durante o acompanhamento?",
      "Como será o acompanhamento entre uma consulta e outra?",
      "Existem alternativas não medicamentosas que fazem sentido para o meu caso?",
    ],
  },
  {
    slug: "equilibrio-hormonal-e-emagrecimento",
    formato: "Artigo",
    titulo: "Equilíbrio hormonal e emagrecimento: qual a relação?",
    tema: "Hormônios e metabolismo",
    resumo:
      "Como fatores hormonais podem influenciar o metabolismo e por que a investigação individualizada importa.",
    corpo: [
      "O metabolismo não depende só do que se come ou de quanto se treina — ele também é influenciado por um conjunto de hormônios que regulam apetite, armazenamento de energia e disposição.",
      "Alterações nesse equilíbrio podem dificultar o emagrecimento mesmo quando a rotina alimentar e a atividade física estão adequadas. É por isso que a investigação hormonal costuma ser parte da avaliação médica em processos de emagrecimento que não evoluem como esperado.",
      "No Instituto Lamônica, essa investigação é feita de forma individualizada, a partir do histórico e dos exames de cada paciente — sem partir de um protocolo único para todos os casos.",
    ],
  },
  {
    slug: "como-funciona-a-primeira-consulta",
    formato: "Vídeo",
    titulo: "Como funciona a avaliação inicial no Instituto Lamônica",
    tema: "Bastidores do Instituto",
    resumo:
      "Um vídeo mostrando o que esperar da primeira consulta médica e nutricional, do que é perguntado ao que é analisado.",
    corpo: [
      "Um dos motivos que mais atrasam a busca por ajuda médica é a insegurança sobre o que esperar da primeira consulta.",
      "Neste vídeo, mostramos como funciona a avaliação inicial no Instituto Lamônica — do que é perguntado ao que é analisado — para que você chegue mais tranquilo ao seu primeiro atendimento.",
    ],
    videoPlaceholder: true,
  },
];
