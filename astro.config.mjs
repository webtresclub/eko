// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      // Spanish stays at the root (`/`), English lives under `/en/`.
      prefixDefaultLocale: false,
    },
  },
});
