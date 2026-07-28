// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Required for absolute og:image / og:url — social scrapers do not resolve relative URLs.
  site: 'https://eko.webtres.club',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      // Spanish stays at the root (`/`), English lives under `/en/`.
      prefixDefaultLocale: false,
    },
  },
});
