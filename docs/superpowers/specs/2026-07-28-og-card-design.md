# Social OG card + metadata — design

**Date:** 2026-07-28
**Status:** approved, not yet implemented

## Problem

`src/layouts/VillageLayout.astro` already emits `<title>`, `description`, `og:title`,
`og:description`, `og:type`, `og:locale`, and `twitter:card`, all bilingual through the
`meta.*` keys in `src/i18n/ui.ts`. That part is sound and needs no change.

The card itself is broken. `og:image` points at `/assets/UwUloscopio_big.gif`, which fails
three separate requirements:

1. **Relative URL.** Open Graph scrapers do not resolve relative paths. `astro.config.mjs`
   sets no `site`, so Astro cannot emit an absolute one either.
2. **Animated GIF.** Twitter/X ignores animated GIFs for `summary_large_image`; several
   other scrapers render only the first frame or nothing.
3. **288×240.** `summary_large_image` expects 1200×630 (1.91:1). At the current size the
   card degrades to a small square thumbnail.

Also missing: `og:url`, `og:site_name`, `twitter:image`, `og:image:alt`, `og:image:width`,
`og:image:height`.

Net effect: links to the site currently unfurl with no usable preview image.

## Decisions

| Decision | Choice | Why |
| :-- | :-- | :-- |
| Card source | Hand-authored SVG, rasterized to PNG | No React or headless Chromium in a site that ships zero JS |
| When it renders | On demand via `pnpm og`; PNG is committed | Deploy runners need no fonts and no renderer; build stays untouched |
| Renderer | `@resvg/resvg-js` (devDependency) | Accepts explicit font files, so output is reproducible |
| Font | JetBrains Mono, Regular + Bold, committed, OFL | Redistributable; `loadSystemFonts: false` makes rendering deterministic |
| Locales | One bilingual-neutral card | "COMING SOON" and "Ekoparty · Buenos Aires · 2026" read the same in both languages |
| Site URL | `https://eko.webtres.club` | Supplied by the user |

Remotion was considered and rejected: it renders stills, but pulls React and a headless
Chromium pipeline in to produce one static PNG. Revisit only if animated social assets are
wanted later.

## Architecture

Three isolated pieces. Each can be understood and changed without reading the others.

### `scripts/og-card.mjs` — the generator

Standalone Node script. Not imported by Astro; not part of `pnpm build`.

- **Input:** `src/og/mascot.png` (first frame of `UwUloscopio_big.gif`, extracted once and
  committed), `src/og/JetBrainsMono-{Regular,Bold}.ttf`, and an SVG template literal inline
  in the script. Bold carries the wordmark and `COMING SOON`; Regular carries the terminal
  bar and the event line.
- **Output:** `public/assets/og-card.png`, exactly 1200×630.
- **Contract:** deterministic — same inputs produce a byte-identical PNG on any machine.
  Achieved with `loadSystemFonts: false` plus explicit `fontFiles`.
- Mascot is scaled with nearest-neighbour sampling; smooth interpolation would blur the
  pixel art.
- Run with `pnpm og`.

### The card

Mirrors the live page so a shared link and the site look like one thing:

```
┌─ webtres@ekoparty:~ ──────────────────┐
│                                       │
│        [UwUloscopio pixel art]        │
│                                       │
│           WebtrES Village             │
│             COMING SOON               │
│    Ekoparty · Buenos Aires · 2026     │
└───────────────────────────────────────┘
```

Mint `#94d1ad` on near-black `#0d0d0d`, scanline overlay, three-dot terminal bar — the
`DESIGN.md` tokens already used by `VillageLayout.astro`.

### `VillageLayout.astro` — the tags

- `astro.config.mjs` gains `site: 'https://eko.webtres.club'`.
- `og:image` and `og:url` are built with `new URL(path, Astro.site)`, yielding absolute URLs.
- New tags: `og:site_name`, `twitter:image`, `og:image:width` (1200), `og:image:height` (630),
  `og:image:alt`.
- `og:image` now points at `og-card.png`; the mascot GIF stays as on-page art.

`meta.ogImageAlt` is added to **both** locale objects in `ui.ts` — the `satisfies` constraint
makes a missing locale a type error.

## Known cost

The year `2026` will exist in both `src/data/village.ts` and the card script. Bridging a
TS/JS boundary to share three static strings costs more than it saves, so the duplication is
accepted deliberately. Rolling the site to 2027 means editing both and re-running `pnpm og`.
Noted in `AGENTS.md`.

The other standing cost: after editing the card, `pnpm og` must be re-run or the committed
PNG goes stale. Verification (below) makes a stale PNG visible rather than silent.

## Verification

1. `pnpm og` produces `public/assets/og-card.png`; assert dimensions are exactly 1200×630.
2. Run `pnpm og` twice; assert the two PNGs are byte-identical (proves determinism).
3. `pnpm build` succeeds and still emits two pages.
4. Assert `dist/index.html` and `dist/en/index.html` each contain
   `https://eko.webtres.club/assets/og-card.png` — absolute, not relative.
5. Assert `og:image:alt` differs between the two pages (proves the i18n path is wired).
6. Eyeball the rendered PNG before committing.

## Out of scope

- Per-locale card variants
- Animated or video social assets
- Deploy configuration and CI
