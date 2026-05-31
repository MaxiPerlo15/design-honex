export type NavLink = {
  label: string;
  href: string;
  emphasis?: boolean;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type HeroContent = {
  eyebrow: string;
  titleLines: [string, string, string];
  body: string;
  ctas: [
    { label: string; href: string; primary?: boolean },
    { label: string; href: string; primary?: boolean },
  ];
  stats: HeroStat[];
  logoSrc: string;
  logoAlt: string;
};

export type ServiceItem = {
  number: string;
  title: string;
  description: string;
};

export type ClientItem = {
  name: string;
  href?: string;
  label?: string;
  featured?: boolean;
};

export type PortfolioItem = {
  name: string;
  category: string;
  mark?: string;
  image?: string;
  href?: string;
  featured?: boolean;
};

export type ProofSnapshot = {
  name: string;
  label: string;
  category: string;
  href?: string;
  image?: string;
  featured?: boolean;
};

export type ProofClaim = {
  eyebrow: string;
  titleLines: [string, string, string];
  body: string;
  snapshots: [ProofSnapshot, ProofSnapshot];
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export type BusinessDiagnosticQ1Id = "nuevo" | "creciendo" | "establecido" | "escalar";

export type BusinessDiagnosticResultId =
  | "nuevo_brand"
  | "nuevo_rrss"
  | "crec_visibilidad"
  | "crec_ventas"
  | "est_contenido"
  | "est_alcance"
  | "esc_ads"
  | "esc_todo";

export type ResultIconName =
  | "paintbrush"
  | "sprout"
  | "eye"
  | "dollarSign"
  | "megaphone"
  | "target"
  | "rocket"
  | "workflow";

export type DiagnosticIconName =
  | "sprout"
  | "trendingUp"
  | "trophy"
  | "flame"
  | "paintbrush"
  | "smartphone"
  | "eye"
  | "dollarSign"
  | "megaphone"
  | "target"
  | "rocket"
  | "workflow";

export type QuizOption<Value extends string = string> = {
  icon: DiagnosticIconName;
  label: string;
  sub: string;
  value: Value;
};

export type QuizQuestion<Value extends string = string> = {
  question: string;
  options: QuizOption<Value>[];
};

export type QuizResult = {
  icon: ResultIconName;
  tag: string;
  title: string;
  desc: string;
  services: [string, string, string, ...string[]];
};

export type BusinessDiagnosticContent = {
  eyebrow: string;
  titleLines: [string, string, string];
  body: string;
  q1: QuizQuestion<BusinessDiagnosticQ1Id>;
  q2: Record<BusinessDiagnosticQ1Id, QuizQuestion<BusinessDiagnosticResultId>>;
  results: Record<BusinessDiagnosticResultId, QuizResult>;
  ctaLabel: string;
  restartLabel: string;
  whatsappNumber: string;
  whatsappCountryCode: string;
  sectionId: string;
};

export const navLinks: NavLink[] = [
  { label: "Servicios", href: "#servicios" },
  { label: "Tu Negocio", href: "#diagnostico" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Proceso", href: "#proceso" },
  { label: "Hablemos", href: "#contacto", emphasis: true },
];


export const hero: HeroContent = {
  eyebrow: "",
  titleLines: ["Tu marca", "no es", "invisible."],
  body: "Está mal comunicada. Yo me encargo de eso.",
  ctas: [
    { label: "Trabajemos juntos", href: "#contacto", primary: true },
    { label: "Ver trabajos →", href: "#portfolio" },
  ],
  stats: [
    { value: "+2", label: "Años" },
    { value: "10+", label: "Clientes" },
    { value: "∞", label: "Contenido" },
  ],
  logoSrc: "/logo-designhonex.webp",
  logoAlt: "Honex Design",
};

export const services: ServiceItem[] = [
  {
    number: "01",
    title: "Gestión de redes",
    description:
      "Manejo completo de tu cuenta: planificación, publicación, comunidad y crecimiento orgánico real.",
  },
  {
    number: "02",
    title: "Creación de contenido",
    description:
      "Posts, reels, stories y carruseles con estrategia. Que se vea bien no alcanza: tiene que decir algo.",
  },
  {
    number: "03",
    title: "Diseño & branding",
    description:
      "Logos, identidad visual, piezas comerciales y sistemas gráficos para que tu marca se vea profesional.",
  },
  {
    number: "04",
    title: "Estrategia digital",
    description:
      "Plan mensual con métricas, análisis y ajustes. Menos opinión suelta, más decisiones con datos.",
  },
  {
    number: "05",
    title: "Community management",
    description:
      "Interacciones, DMs y comentarios con criterio. Tu comunidad, activa y comprometida.",
  },
  {
    number: "06",
    title: "Juegos & dinámicas",
    description:
      "Activaciones para stories, recursos virales y mecánicas que convierten atención en movimiento real.",
  },
];

export const clients: ClientItem[] = [
  { name: "Mr. Spock" },
  { name: "Apple del Sur" },
  { name: "Ra·me" },
  { name: "Sandra Almaraz" },
  { name: "Bisted House" },
  { name: "DIA" },
  { name: "Brigada Fucsia" },
  { name: "Jean's Burgers" },
  { name: "Lodosa" },
];

export const proofClaim: ProofClaim = {
  eyebrow: "",
  titleLines: ["Burger King", "copió mi diseño.", "Dos veces."],
  body: "Si las grandes marcas miran lo que hago, imaginate lo que puedo hacer por la tuya.",
  snapshots: [
    {
      name: "Honex Design",
      label: "HONEX DESIGN",
      category: "Prueba visual",
      image: "/publicacion-honex.webp",
      href: "https://www.instagram.com/p/DXkZb2PllEv/?img_index=1",
      featured: true,
    },
    {
      name: "Burger King",
      label: "Burger King",
      category: "Contraste",
      image: "/publicacion-burgerking.webp",
      href: "https://www.instagram.com/p/DXkZb2PllEv/?img_index=1",
      featured: false,
    },
  ],
};

export const portfolioItems: PortfolioItem[] = [
  {
    name: "CJM Digitales",
    category: "Portfolio",
    image: "/juegos-digitales-chile-cjmdigitales.webp",
    featured: true,
    href: "https://www.instagram.com/cjmdigitalescl/",
  },
  {
    name: "Popes Burguers",
    category: "Portfolio",
    image: "/popes.webp",
    href: "https://www.instagram.com/popes.burguers/",
  },
  {
    name: "Ruggeri Automotores",
    category: "Portfolio",
    image: "/ruggeri.webp",
    href: "https://www.instagram.com/ruggeri_automotores/",
  },
  {
    name: "Atomic Burger",
    category: "Portfolio",
    image: "/atomic.webp",
    href: "https://www.instagram.com/atomicburgerok/",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Te entiendo",
    description:
      "Antes de tocar nada, aprendo tu negocio, tu audiencia y tus objetivos. Nada genérico.",
  },
  {
    number: "02",
    title: "Estrategia",
    description:
      "Plan de contenidos mensual con fechas, formatos y temas. Vos aprobás, yo ejecuto.",
  },
  {
    number: "03",
    title: "Producción",
    description:
      "Diseño, copy y publicación. Me encargo de todo para que vos te enfoques en tu negocio.",
  },
  {
    number: "04",
    title: "Resultados",
    description:
      "Reportes reales, métricas claras y ajustes continuos. Sin excusas, con datos.",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Instagram — El lugar",
    value: "@designhonex",
    href: "https://www.instagram.com/designhonex",
    external: true,
  },
  {
    label: "WhatsApp — Más rápido",
    value: "+54 353 343 2075",
    href: "https://wa.me/543533432075",
    external: true,
  },
  {
    label: "Email",
    value: "designhonex@gmail.com",
    href: "mailto:designhonex@gmail.com",
    external: false,
  },
];

export const businessDiagnostic: BusinessDiagnosticContent = {
  eyebrow: "Diagnostico rapido",
  titleLines: ["¿QUÉ NECESITA", "TU NEGOCIO?", ""],
  body: "Respondé 2 preguntas y te digo exactamente qué servicio te conviene.",
  q1: {
  question: "¿En qué etapa está tu negocio?",
  options: [
      { icon: "sprout", label: "Recién arrancando", sub: "Menos de 1 año, o estoy lanzando algo nuevo", value: "nuevo" },
      { icon: "trendingUp", label: "Ya estoy rodando", sub: "Tengo clientes pero quiero crecer más", value: "creciendo" },
      { icon: "trophy", label: "Negocio establecido", sub: "Tengo presencia pero no estoy llegando a más gente", value: "establecido" },
      { icon: "flame", label: "Quiero escalar", sub: "El negocio funciona y busco multiplicar resultados", value: "escalar" },
    ],
  },
  q2: {
    nuevo: {
      question: "¿Qué te falta primero?",
      options: [
        { icon: "paintbrush", label: "Identidad visual", sub: "Logo, colores, que mi marca se vea profesional", value: "nuevo_brand" },
        { icon: "smartphone", label: "Presencia en redes", sub: "Que la gente me conozca y empiece a seguirme", value: "nuevo_rrss" },
      ],
    },
    creciendo: {
      question: "¿Cuál es tu mayor problema ahora?",
      options: [
        { icon: "eye", label: "Poca visibilidad", sub: "Tengo buenos productos pero nadie me ve", value: "crec_visibilidad" },
        { icon: "dollarSign", label: "Quiero vender más", sub: "Necesito convertir seguidores en clientes", value: "crec_ventas" },
      ],
    },
    establecido: {
      question: "¿Dónde está el cuello de botella?",
      options: [
        { icon: "megaphone", label: "Contenido sin impacto", sub: "Publico pero no genera nada", value: "est_contenido" },
        { icon: "target", label: "No llego a nuevos clientes", sub: "Los de siempre me compran pero no crezco", value: "est_alcance" },
      ],
    },
    escalar: {
      question: "¿Cómo querés escalar?",
      options: [
        { icon: "rocket", label: "Publicidad paga", sub: "Invertir en Meta Ads o Google Ads para crecer rápido", value: "esc_ads" },
        { icon: "workflow", label: "Todo en uno", sub: "Redes + diseño + ads + estrategia integrada", value: "esc_todo" },
      ],
    },
  },
  results: {
    nuevo_brand: {
      icon: "paintbrush",
      tag: "Arrancar con buen pie",
      title: "PRIMERO LA IDENTIDAD",
      desc:
        "Si tu marca no se ve profesional, la gente no confía. Antes de publicar contenido, necesitás un logo, colores y una línea visual coherente que comunique quién sos desde el primer vistazo. Después de eso, armamos la estrategia de redes.",
      services: ["Branding & Logo", "Identidad Visual", "Gestión de Redes"],
    },
    nuevo_rrss: {
      icon: "sprout",
      tag: "Empezando desde cero",
      title: "PRESENCIA + COMUNIDAD",
      desc:
        "Al principio lo más importante es existir y que te conozcan. Te armo una estrategia de contenido para construir audiencia real desde el día uno: contenido que conecte, que cuente quién sos y que haga que la gente quiera seguirte.",
      services: ["Gestión de Redes", "Creación de Contenido", "Community Management"],
    },
    crec_visibilidad: {
      icon: "eye",
      tag: "Más ojos en tu negocio",
      title: "CONTENIDO QUE SE VE",
      desc:
        "El problema no es el producto, es la comunicación. Con una estrategia de contenido bien armada — reels, carruseles, stories — tu negocio empieza a aparecer donde está tu cliente ideal. Lo hacemos orgánico primero y después sumamos pauta si hace falta.",
      services: ["Estrategia Digital", "Creación de Contenido", "Meta Ads"],
    },
    crec_ventas: {
      icon: "dollarSign",
      tag: "Convertir seguidores en clientes",
      title: "CONTENIDO + PAUTA",
      desc:
        "Tener seguidores está bien. Vender es mejor. Combinamos contenido que genera confianza con campañas de Meta Ads o Google Ads apuntadas a personas que ya tienen intención de compra. Cada peso invertido tiene que volver multiplicado.",
      services: ["Meta Ads", "Google Ads", "Estrategia Digital", "Creación de Contenido"],
    },
    est_contenido: {
      icon: "megaphone",
      tag: "Contenido que sí funciona",
      title: "ESTRATEGIA DE RAÍZ",
      desc:
        "Publicar por publicar no sirve. El problema suele ser que el contenido no tiene una estrategia detrás: no habla a nadie en particular, no tiene un objetivo claro, no genera acción. Lo rediseñamos desde cero con propósito y consistencia.",
      services: ["Estrategia Digital", "Creación de Contenido", "Community Management"],
    },
    est_alcance: {
      icon: "target",
      tag: "Nuevos clientes, nuevo alcance",
      title: "PAUTA + ORGÁNICO",
      desc:
        "Para llegar a gente nueva que todavía no te conoce, la combinación ganadora es contenido orgánico sólido más inversión en publicidad paga bien segmentada. Te armo las dos ruedas girando al mismo tiempo.",
      services: ["Meta Ads", "Google Ads", "Gestión de Redes", "Estrategia Digital"],
    },
    esc_ads: {
      icon: "rocket",
      tag: "Escalar con publicidad",
      title: "META ADS + GOOGLE ADS",
      desc:
        "Cuando el negocio ya funciona, la pauta es el acelerador. Con campañas bien configuradas en Meta y Google, cada peso invertido trabaja para vos las 24 horas. Gestiono todo: creatividades, segmentación, optimización y reportes semanales.",
      services: ["Meta Ads", "Google Ads", "Creatividades para Ads"],
    },
    esc_todo: {
      icon: "workflow",
      tag: "Estrategia 360°",
      title: "TODO INTEGRADO",
      desc:
        "El máximo nivel: redes orgánicas + diseño de marca + publicidad paga + estrategia digital funcionando como un sistema. No es una lista de servicios sueltos — es todo trabajando junto con un objetivo claro: que tu negocio crezca.",
      services: ["Gestión de Redes", "Meta Ads", "Google Ads", "Branding", "Estrategia Digital"],
    },
  },
  ctaLabel: "HABLEMOS DE ESTO",
  restartLabel: "Volver a empezar",
  whatsappNumber: "3533432075",
  whatsappCountryCode: "54",
  sectionId: "diagnostico",
};
