// Fonte única de verdade para todo o texto e dados de contato do site.
// Nenhum componente deve ter texto hardcoded — tudo vem daqui.
//
// Estrutura da página segue o modelo de referência (Header > Hero+selo >
// Especialidades > Sobre mim > Consultório+Depoimentos > Como funciona >
// Benefícios > FAQ > Mapa > Footer).
export const site = {
  name: "Andreza Costa",
  fullName: "Andreza Costa",
  role: "Psicóloga Clínica e Social",
  crp: "Psicóloga Clínica — CRP a confirmar",
  city: "Sarzedo",
  state: "MG",
  address: {
    street: "Atendimento presencial - R. José Batista Filho, 418 - Sala 203 - Centro, Sarzedo - MG, 32450-000",
    mapsUrl: "https://maps.app.goo.gl/x18DS2f4Fw1bNFuw6",
    embedQuery: "Atendimento presencial - R. José Batista Filho, 418 - Sala 203 - Centro, Sarzedo - MG, 32450-000",
  },
  phoneDisplay: "(31) 996905773",
  whatsappNumber: "5531996905773",
  whatsappMessage:
    "Olá, Andreza! Encontrei seu site e gostaria de saber mais sobre o acompanhamento psicológico.",
  email: "psiandrezacostamq@gmail.com",
  instagramHandle: "@andrezacosta.psi",
  instagramUrl: "https://www.instagram.com/andrezacosta.psi",
  hours: "8h às 18h, segunda a sexta",
  hoursNote: "As consultas precisam ser previamente agendadas.",
  modality: "Atendimento presencial em Sarzedo (MG) e online para todo o Brasil",
  metaDescription:
    "Andreza Costa é psicóloga clínica e social em Sarzedo (MG), com atendimento presencial e online para todo o Brasil. Acompanhamento psicológico para mulheres, adolescentes, jovens e para a comunidade LGBTQIAPN+.",
} as const;
export function whatsappLink(customMessage?: string) {
  const message = encodeURIComponent(customMessage ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${message}`;
}
export const nav = [
  { label: "Início", href: "/#hero" },
  { label: "Especialidades", href: "/#especialidades" },
  { label: "Sobre mim", href: "/#sobre" },
  { label: "Consultório", href: "/#consultorio" },
  { label: "Como funciona", href: "/#processo" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
] as const;
export const header = {
  ctaLabel: "Vamos conversar?",
} as const;
export const hero = {
  eyebrow: site.crp,
  greeting: "Olá, sou",
  name: "Andreza Costa",
  subtitle:
    "Disponibilizo um espaço de escuta sem julgamento, com cuidado ético, afeto e compromisso com a sua singularidade.",
  checklist: [
    "Mulheres, adolescentes, jovens e comunidade LGBTQIAPN+",
    "Abordagem ética, sigilosa e sem julgamento",
    "Atendimento presencial em Sarzedo (MG) e online para todo o Brasil",
  ],
  ctaLabel: "Vamos conversar?",
  ctaSecondaryLabel: "Conhecer as especialidades",
  ctaSecondaryHref: "#especialidades",
  image: {
    src: "/images/jadi-hero-full.png",
    alt: "Andreza Costa, psicóloga clínica e social, sorrindo sentada em um ambiente acolhedor",
  },
} as const;
export const heroStat = {
  value: "+200",
  label: "pessoas acompanhadas",
} as const;
export const heroMobile = {
  eyebrow: "PSICÓLOGA CLÍNICA",
  title: "Andreza Costa",
  description:
    "A terapia é um convite para olhar para si com mais cuidado, compreender seus conflitos e descobrir novas possibilidades para a sua vida.",
  ctaLabel: "Mais informações",
  image: {
    src: "/images/jadi-hero-mobile-2.png",
    alt: "Andreza Costa, psicóloga clínica, sentada em uma poltrona em um ambiente acolhedor",
  },
} as const;
export const specialties = {
  items: [
    {
      icon: "Flower2",
      title: "Terapia para mulheres em sobrecarga",
      description:
        "Se você sente uma sobrecarga constante, dificuldade em dizer não, culpa ao priorizar suas próprias necessidades, ansiedade no dia a dia ou desgaste em relações que já não fazem sentido, a terapia pode te ajudar. Por meio de sessões semanais, presenciais ou online, com cerca de 50 minutos de duração, meu trabalho é pautado na teoria psicanalítica e também na psicoterapia breve — que atua sobre demandas específicas, buscando a resolução mais rápida das questões, sempre respeitando o seu tempo em um processo de redescoberta de si mesma.",
    },
    {
      icon: "Sparkle",
      title: "Terapia para adolescentes e jovens",
      description:
        "Adolescentes e jovens podem enfrentar dificuldades próprias dessa fase da vida, como ansiedade, insegurança e conflitos nas relações. Meu trabalho com essa faixa etária é pautado na abordagem cognitivo-comportamental, Análise do Comportamento (ABA) e treinamento parental, com a família integrada ao processo — seja participando de sessões, seja em encontros individuais com os responsáveis.",
    },
    {
      icon: "Rainbow",
      title: "Terapia para comunidade LGBTQIAPN+",
      description:
        "Adolescentes, adultos e idosos da comunidade LGBTQIAPN+ contam com um espaço de escuta ética, sigilosa e livre de julgamentos, presencial ou online. O acompanhamento psicológico caminha ao lado de cada pessoa na busca por autonomia, identidade e autoconhecimento, respeitando o tempo e a singularidade de cada processo.",
    },
  ],
} as const;
export const about = {
  eyebrow: "SOBRE MIM",
  greeting: "Olá, sou",
  title: "Andreza Costa",
  paragraphs: [
    "Sou psicóloga clínica e escolar, pós-graduada em Análise do Comportamento Aplicada ao Autismo (ABA) e em Psicologia Escolar e Educacional. Atendo de forma presencial e online.",
    "Além da clínica, também sou palestrante, pesquisadora e especialista em elaboração de projetos. Sou idealizadora de projetos sociais e movimentos na cidade de Sarzedo e região, voltados ao acolhimento e atendimento de mulheres vítimas de violência doméstica e de pessoas em situação de vulnerabilidade.",
    "Atendo mulheres em momentos de sobrecarga, ansiedade, relações difíceis ou redescoberta de si; acompanho adolescentes e jovens com sensibilidade às fases de transição e aos desafios emocionais da juventude; e caminho ao lado de adolescentes, adultos e idosos da comunidade LGBTQIAPN+ em busca de autonomia, identidade e autoconhecimento.",
  ],
  formationCard: {
    label: "Formação",
    text: "Psicóloga Clínica e Escolar, Pós-Graduada em ABA e em Psicologia Escolar e Educacional.",
  },
  image: {
    src: "/images/jadi-sobre.png",
    alt: "Retrato de Andreza Costa, psicóloga clínica e social",
  },
} as const;
export const gallery = {
  id: "consultorio",
  eyebrow: "AMBIENTE SEGURO E DE FÁCIL ACESSO",
  title: "Um espaço pensado para você se sentir acolhida(o) e confortável",
  images: [
    {
      src: "/images/jadi-consultorio-01.png",
      alt: "Sala de espera do consultório, com sofá, poltrona e ambiente aconchegante",
    },
    {
      src: "/images/jadi-consultorio-02.png",
      alt: "Ambiente do consultório com iluminação natural e decoração acolhedora",
    },
    {
      src: "/images/jadi-consultorio-03.png",
      alt: "Cantinho de leitura do consultório com estante de livros e poltrona",
    },
  ],
} as const;
export const testimonials = {
  eyebrow: "DEPOIMENTOS",
  title: "O que dizem sobre o meu trabalho",
  isPlaceholder: true,
  items: [
    {
      name: "Paciente em acompanhamento",
      rating: 5,
      text: "Cheguei sem saber nem por onde começar a falar do que sentia. Encontrei um espaço de escuta que me ajudou a organizar minha cabeça sem nenhum julgamento.",
    },
    {
      name: "Paciente em acompanhamento",
      rating: 5,
      text: "O acolhimento no primeiro atendimento já fez toda diferença. Hoje entendo muito mais sobre mim mesma e sobre como lidar com a ansiedade do dia a dia.",
    },
    {
      name: "Paciente em acompanhamento",
      rating: 5,
      text: "Um acompanhamento sensível e respeitoso com a minha história. Me senti segura para falar de assuntos que nunca tinha conseguido colocar em palavras.",
    },
  ],
} as const;
export const process = {
  eyebrow: "COMO FUNCIONA MEU TRABALHO",
  title: "Um processo claro para sua evolução",
  paragraphs: [
    "Meu trabalho começa com um primeiro contato acolhedor, onde você tira suas dúvidas e escolhe o melhor horário para a sua primeira sessão, presencial ou online. A partir daí, seguimos com uma escuta atenta e sem julgamento sobre a sua história e o que te trouxe até aqui.",
    "Com base nesse acolhimento inicial, construímos juntas um direcionamento terapêutico alinhado às suas necessidades. O acompanhamento segue com sessões regulares e devolutivas ao longo do processo, sempre respeitando o seu tempo e a sua singularidade.",
  ],
  progressBars: [
    { label: "Ambiente acolhedor", value: 100 },
    { label: "Compromisso com o processo", value: 97 },
  ],
  ctaLabel: "Vamos conversar?",
  stat: {
    value: "+500",
    label: "Atendimentos realizados",
  },
  image: {
    src: "/images/jadi-processo.png",
    alt: "Andreza Costa sentada, anotando durante uma sessão de atendimento",
  },
} as const;
export const reasons = {
  eyebrow: "ALGUNS BENEFÍCIOS DA TERAPIA",
  title: "Benefícios do acompanhamento psicológico",
  subtitle:
    "O acompanhamento psicológico traz benefícios reais para o dia a dia, como maior controle emocional, relações mais saudáveis e mais qualidade de vida.",
  items: [
    {
      number: "01",
      title: "Controle das emoções",
      description:
        "Uma pessoa com mais controle emocional consegue lidar com os desafios do dia a dia de forma mais equilibrada e positiva.",
    },
    {
      number: "02",
      title: "Melhora nas relações",
      description:
        "As relações que vivemos influenciam diretamente nossa motivação, produtividade e satisfação com a vida.",
    },
    {
      number: "03",
      title: "Diminuição da agressividade",
      description:
        "Compreender melhor o que sente ajuda a construir formas mais leves e saudáveis de se relacionar com os outros.",
    },
    {
      number: "04",
      title: "Diminuição da insônia",
      description:
        "Dormir melhor faz diferença em tudo — no humor, na disposição e na forma como encaramos o dia a dia.",
    },
  ],
} as const;
export const faq = {
  eyebrow: "DÚVIDAS FREQUENTES",
  title: "Ainda tem dúvidas?",
  featured: {
    eyebrow: "DÚVIDAS FREQUENTES",
    title: "Por que buscar acompanhamento psicológico?",
    paragraphs: [
      "A terapia é um espaço para encontrar mais clareza diante dos seus conflitos e dificuldades, com o apoio de uma profissional. No acompanhamento psicológico, existem técnicas que ajudam cada pessoa a reconhecer o que a tem incomodado no dia a dia.",
      "Esse processo acontece a partir da relação de confiança entre psicóloga e paciente — por isso, é importante encontrar uma profissional qualificada, ética e responsável, com quem você se sinta à vontade.",
    ],
    ctaLabel: "Mais informações",
  },
  items: [
    {
      question: "Como funciona o atendimento online?",
      answer:
        "As sessões online acontecem por videochamada, no mesmo formato e com a mesma qualidade do atendimento presencial. Você só precisa de um lugar tranquilo e conexão com a internet — posso atender qualquer pessoa em qualquer lugar do Brasil.",
    },
    {
      question: "Quanto tempo dura cada sessão?",
      answer:
        "As sessões de acompanhamento psicológico costumam durar cerca de 50 minutos, com frequência combinada de acordo com a sua necessidade.",
    },
    {
      question: "Vocês fazem diagnóstico ou passam medicação?",
      answer:
        "Não. Como psicóloga, meu trabalho é de acompanhamento psicológico, escuta clínica e avaliação psicológica — não realizo diagnóstico médico nem prescrevo medicação. Quando necessário, oriento o encaminhamento para acompanhamento psiquiátrico em conjunto.",
    },
    {
      question: "Como sei se preciso de acompanhamento psicológico?",
      answer:
        "Não é preciso esperar uma crise. Se você sente sobrecarga, ansiedade, dificuldade nas relações ou vontade de se entender melhor, esse já é um bom motivo para buscar apoio.",
    },
    {
      question: "Como faço para agendar minha primeira sessão?",
      answer:
        "É só me chamar no WhatsApp. Vamos conversar sobre o que te trouxe até aqui e encontrar o melhor horário para começar.",
    },
  ],
} as const;
export const footer = {
  about:
    "Espaço de escuta psicológica com ética, afeto e compromisso com a sua singularidade.",
  quickLinksTitle: "Links rápidos",
  hoursTitle: "Horário de atendimento",
  ctaLabel: "Agendar consulta",
  rightsText: `© ${new Date().getFullYear()} ${site.name} — ${site.role}. Todos os direitos reservados.`,
} as const;