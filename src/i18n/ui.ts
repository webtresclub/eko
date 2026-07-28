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
      "WebtrES Village en Ekoparty Buenos Aires {year}. Comunidad global e hispanohablante de desarrollo y seguridad Web3. Próximamente.",
    "meta.ogDescription":
      "La aldea de la comunidad de blockchain hackers llega a Ekoparty {year}. Próximamente.",

    "terminal.aria": "WebtrES Village — próximamente",
    "lang.aria": "Seleccionar idioma",
    "hero.alt": "UwUloscopio — mascota pixel-art de WebtrES Club",

    "tagline.line1": "Comunidad global e hispanohablante de",
    "tagline.line2": "desarrollo y seguridad Web3.",

    "village.status": "COMING SOON",
    "village.note": "la aldea de blockchain hackers aterriza en Ekoparty {year}",

    "cfp.status": "ABIERTO",
    "cfp.note": "proponé tu contenido — deadline {deadline}",
    "cfp.cta": "enviar propuesta",

    "socials.aria": "Redes de WebtrES Club",
    "footer.tagline": "comunidad de blockchain hackers",
  },
  en: {
    "meta.title": "WebtrES Village — Ekoparty Buenos Aires {year}",
    "meta.description":
      "WebtrES Village at Ekoparty Buenos Aires {year}. Global Spanish-speaking community for Web3 development and security. Coming soon.",
    "meta.ogDescription":
      "The blockchain hackers community village lands at Ekoparty {year}. Coming soon.",

    "terminal.aria": "WebtrES Village — coming soon",
    "lang.aria": "Select language",
    "hero.alt": "UwUloscopio — WebtrES Club pixel-art mascot",

    "tagline.line1": "Global, Spanish-speaking community for",
    "tagline.line2": "Web3 development and security.",

    "village.status": "COMING SOON",
    "village.note": "the blockchain hackers village lands at Ekoparty {year}",

    "cfp.status": "OPEN",
    "cfp.note": "submit your talk — deadline {deadline}",
    "cfp.cta": "send proposal",

    "socials.aria": "WebtrES Club social links",
    "footer.tagline": "blockchain hackers community",
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
