# eko — WebtrES Village

Landing page for the **WebtrES Village** at Ekoparty, Buenos Aires 2026 — the
blockchain hackers community village. A static, bilingual "coming soon" page
built with [Astro](https://astro.build), styled as a retro terminal.

## Stack

- Astro 7, static output (no framework integrations, no client-side JS bundle)
- pnpm (Node >= 22.12)
- Styles are inline in `src/layouts/VillageLayout.astro`, driven by the design
  tokens in [`DESIGN.md`](./DESIGN.md)

## Commands

| Command        | Action                               |
| :------------- | :----------------------------------- |
| `pnpm install` | Install dependencies                 |
| `pnpm dev`     | Dev server at `localhost:4321`       |
| `pnpm build`   | Build the static site to `./dist/`   |
| `pnpm preview` | Preview the production build locally |

## Structure

```text
src/
├── data/village.ts          # locale-independent facts (CFP URL, deadline, socials)
├── i18n/
│   ├── ui.ts                # every translatable string, keyed per locale
│   └── utils.ts             # useTranslations(lang), formatDate(iso, lang)
├── layouts/
│   └── VillageLayout.astro  # the page itself; takes a `lang` prop
└── pages/
    ├── index.astro          # es — served at /
    └── en/index.astro       # en — served at /en/
public/assets/               # pixel-art mascot + favicon
```

## Internationalization

Spanish is the default locale and is served at `/`; English lives under `/en/`.
Locales are declared in `astro.config.mjs` with `prefixDefaultLocale: false`.

To add a string, add the key to **both** locale objects in `src/i18n/ui.ts` —
the `satisfies` constraint and the `UIKey` type will flag a locale that is
missing one. To add a locale, add it to `locales` in `astro.config.mjs`, to
`languages`/`ui` in `ui.ts`, to `dateFormats` in `utils.ts`, and create
`src/pages/<code>/index.astro`.

See [`AGENTS.md`](./AGENTS.md) for the working notes used by coding agents.
