## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Internationalization

The site ships in Spanish (default, served at `/`) and English (`/en/`). Locales are
declared in `astro.config.mjs` with `prefixDefaultLocale: false`.

- `src/i18n/ui.ts` — every translatable string, keyed per locale. `{placeholders}` are
  filled by `t(key, params)`.
- `src/i18n/utils.ts` — `useTranslations(lang)` and `formatDate(isoDate, lang)`.
- `src/data/village.ts` — locale-independent facts (URLs, dates, event details).
- `src/layouts/VillageLayout.astro` — the page; takes a `lang` prop.
- `src/pages/index.astro` (es) and `src/pages/en/index.astro` (en) are thin wrappers.

To add a string, add the key to **both** locale objects in `ui.ts` — the `satisfies`
constraint and `UIKey` type will flag a locale that's missing one. To add a locale, add
it to `locales` in `astro.config.mjs`, to `languages`/`ui` in `ui.ts`, to `dateFormats`
in `utils.ts`, and create `src/pages/<code>/index.astro`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
