export const languages = {
  es: "español",
  en: "english",
} as const;

export const defaultLang = "es";

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    "meta.title": "WebtrES Village — Ekoparty Buenos Aires {year}",
    "meta.description":
      "WebtrES Village en Ekoparty Buenos Aires {year}. Agenda confirmada de la comunidad de blockchain hackers. 7 al 9 de octubre, CEC.",
    "meta.ogDescription":
      "Agenda confirmada de WebtrES Village en Ekoparty {year}. Charlas de la comunidad de blockchain hackers.",
    "meta.ogImageAlt":
      "Terminal retro con el UwUloscopio: WebtrES Village — COMING SOON — Ekoparty · Buenos Aires · {year}",

    "terminal.aria": "WebtrES Village, agenda confirmada",
    "lang.aria": "Seleccionar idioma",
    "hero.alt": "UwUloscopio — mascota pixel-art de WebtrES Club",

    "tagline.line1": "Comunidad global e hispanohablante de",
    "tagline.line2": "desarrollo y seguridad Web3.",

    "schedule.status": "CONFIRMADA",
    "schedule.note": "charlas del village · {when} · {venue}",
    "schedule.aria": "Agenda confirmada",
    "schedule.day": "día {n}",
    "schedule.room": "sala {room}",
    "schedule.kind": "charla",
    "schedule.add": "agregar al calendario",
    "schedule.addAria": "Agregar «{title}» al calendario",
    "schedule.addAll": "agregar todas las charlas al calendario",
    "schedule.location": "Sala {room}, CEC, Buenos Aires",
    "schedule.langNote": "",
    "schedule.icsSpoken": "",

    "talk.defi-hack.title": "Como hackearía un protocolo DeFi",
    "talk.defi-hack.description":
      "Introducción a vulnerabilidades en protocolos DeFi",
    "talk.doxx.title": "Mover plata en cripto sin doxxearte",
    "talk.doxx.description":
      "Distintas formas de mover plata usando crypto manteniendo el anonimato",
    "talk.zk.title":
      "Zero Knowledge, Zero Privacy: Cómo de-anonimizar a alguien sin saber matemáticas",
    "talk.zk.description":
      "¿Qué son las ZK Proofs y por qué muchos las consideran el arma principal para una privacidad a gran escala?",
    "talk.cbu.title":
      "Del CBU a la DeFi: Anatomía de un fraude híbrido y su rastro on-chain",
    "talk.cbu.description":
      "Fraudes híbridos que combinan ingeniería social con cripto. Casos reales siguiendo el dinero por exchanges, blockchain y DeFi, y herramientas para detectarlos y mitigarlos.",
    "talk.ethereum.title": "Ethereum: el futuro que estamos construyendo juntos",
    "talk.ethereum.description":
      "¿Cómo funcionan los sistemas donde no necesitamos confiar en nadie porque el código manda? Vení a entender las bases de la descentralización a través de casos reales en Web3.",
    "talk.open-book.title": "Escondiéndose en un libro abierto",
    "talk.open-book.description":
      "Cómo se construye privacidad financiera sobre blockchains públicas. Las primitivas que lo hacen posible, los protocolos que las usan hoy, y las decisiones de diseño que los diferencian.",

    "socials.aria": "Redes de WebtrES Club",
    "footer.tagline": "comunidad de blockchain hackers",
  },
  en: {
    "meta.title": "WebtrES Village — Ekoparty Buenos Aires {year}",
    "meta.description":
      "WebtrES Village at Ekoparty Buenos Aires {year}. Confirmed schedule from the blockchain hackers community. October 7–9, CEC.",
    "meta.ogDescription":
      "Confirmed WebtrES Village schedule at Ekoparty {year}. Talks from the blockchain hackers community.",
    "meta.ogImageAlt":
      "Retro terminal with the UwUloscopio mascot: WebtrES Village — COMING SOON — Ekoparty · Buenos Aires · {year}",

    "terminal.aria": "WebtrES Village, confirmed schedule",
    "lang.aria": "Select language",
    "hero.alt": "UwUloscopio — WebtrES Club pixel-art mascot",

    "tagline.line1": "Global, Spanish-speaking community for",
    "tagline.line2": "Web3 development and security.",

    "schedule.status": "CONFIRMED",
    "schedule.note": "village talks · {when} · {venue}",
    "schedule.aria": "Confirmed schedule",
    "schedule.day": "day {n}",
    "schedule.room": "room {room}",
    "schedule.kind": "talk",
    "schedule.add": "add to calendar",
    "schedule.addAria": "Add “{title}” to calendar",
    "schedule.addAll": "add all talks to calendar",
    "schedule.location": "Room {room}, CEC, Buenos Aires",
    "schedule.langNote": "talks are in spanish",
    "schedule.icsSpoken": "Talk in Spanish.",

    "talk.defi-hack.title": "How I would hack a DeFi protocol",
    "talk.defi-hack.description":
      "An introduction to vulnerabilities in DeFi protocols.",
    "talk.doxx.title": "Moving money in crypto without doxxing yourself",
    "talk.doxx.description":
      "Different ways to move money with crypto while staying anonymous.",
    "talk.zk.title":
      "Zero Knowledge, Zero Privacy: How to de-anonymize someone without knowing math",
    "talk.zk.description":
      "What are ZK proofs, and why do so many people consider them the main tool for privacy at scale?",
    "talk.cbu.title":
      "From the CBU to DeFi: Anatomy of a hybrid fraud and its on-chain trail",
    "talk.cbu.description":
      "Hybrid frauds that combine social engineering with crypto. Real cases following the money through exchanges, the blockchain, and DeFi, plus tools to detect and mitigate them.",
    "talk.ethereum.title": "Ethereum: the future we are building together",
    "talk.ethereum.description":
      "How do systems work where we don't have to trust anyone because the code is in charge? Come understand the foundations of decentralization through real Web3 cases.",
    "talk.open-book.title": "Hiding in an open book",
    "talk.open-book.description":
      "How financial privacy is built on public blockchains. The primitives that make it possible, the protocols that use them today, and the design decisions that set them apart.",

    "socials.aria": "WebtrES Club social links",
    "footer.tagline": "blockchain hackers community",
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
