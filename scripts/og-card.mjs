// Generates the 1200x630 Open Graph card at public/assets/og-card.png.
//
// Run with `pnpm og`. The output PNG is committed — the deploy build does not run this,
// so no renderer or font needs to exist on the deploy machine. Re-run after editing the
// card, or the committed PNG goes stale.
//
// Rendering is deterministic: system fonts are disabled and the two JetBrains Mono files
// in src/og/ are passed explicitly, so any machine produces a byte-identical PNG.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const from = (rel) => fileURLToPath(new URL(rel, import.meta.url));

const WIDTH = 1200;
const HEIGHT = 630;

// DESIGN.md tokens, matching src/layouts/VillageLayout.astro.
const PRIMARY = "#94d1ad";
const SECONDARY = "#222a26";
const NEUTRAL = "#0d0d0d";
const SURFACE = "#111111";
const ACCENT = "#ffffff";
const ERROR = "#ff6b6b";
const YELLOW = "#e5c07b";

// Card copy. One Spanish card serves both locales. The year is
// duplicated from src/data/village.ts — see docs/superpowers/specs/2026-07-28-og-card-design.md.
const YEAR = "2026";
const TERM_TITLE = "webtres@ekoparty:~";
const PROMPT_LINE = "$ ./village --status";
const STATUS = "EN VIVO";
const EVENT_LINE = `Ekoparty · Buenos Aires · ${YEAR}`;

// Pixel art, drawn at an integer 1.5x with nearest-neighbour sampling. Smooth
// interpolation would blur it.
const MASCOT_W = 288;
const MASCOT_H = 240;
const MASCOT_SCALE = 1.5;
const mascotDataUri = `data:image/png;base64,${readFileSync(from("../src/og/mascot.png")).toString("base64")}`;

// Terminal panel geometry.
const PANEL = { x: 40, y: 40, w: 1120, h: 550, r: 12 };
const BAR_H = 46;
const bodyTop = PANEL.y + BAR_H;
const bodyMid = (bodyTop + (PANEL.y + PANEL.h)) / 2;

const mascot = {
  w: MASCOT_W * MASCOT_SCALE,
  h: MASCOT_H * MASCOT_SCALE,
  x: 78,
};
mascot.y = bodyMid - mascot.h / 2;

const textX = mascot.x + mascot.w + 52;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <clipPath id="panel">
      <rect x="${PANEL.x}" y="${PANEL.y}" width="${PANEL.w}" height="${PANEL.h}" rx="${PANEL.r}" />
    </clipPath>
    <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect x="0" y="2" width="4" height="1" fill="rgba(0,0,0,0.18)" />
    </pattern>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="${NEUTRAL}" />

  <g clip-path="url(#panel)">
    <rect x="${PANEL.x}" y="${PANEL.y}" width="${PANEL.w}" height="${PANEL.h}" fill="${SURFACE}" />

    <rect x="${PANEL.x}" y="${PANEL.y}" width="${PANEL.w}" height="${BAR_H}" fill="${SECONDARY}" />
    <rect x="${PANEL.x}" y="${PANEL.y + BAR_H - 1}" width="${PANEL.w}" height="1" fill="rgba(148,209,173,0.15)" />
    <circle cx="72" cy="${PANEL.y + BAR_H / 2}" r="5.5" fill="${ERROR}" />
    <circle cx="94" cy="${PANEL.y + BAR_H / 2}" r="5.5" fill="${YELLOW}" />
    <circle cx="116" cy="${PANEL.y + BAR_H / 2}" r="5.5" fill="${PRIMARY}" />
    <text x="142" y="${PANEL.y + BAR_H / 2}" dominant-baseline="central" font-family="JetBrains Mono" font-size="17" fill="${PRIMARY}" fill-opacity="0.75">${TERM_TITLE}</text>

    <image xlink:href="${mascotDataUri}" x="${mascot.x}" y="${mascot.y}" width="${mascot.w}" height="${mascot.h}" image-rendering="optimizeSpeed" />

    <text x="${textX}" y="268" font-family="JetBrains Mono" font-weight="700" font-size="58" letter-spacing="-0.5">
      <tspan fill="${PRIMARY}">WebtrES </tspan><tspan fill="${ACCENT}">Village</tspan>
    </text>

    <text x="${textX}" y="330" font-family="JetBrains Mono" font-size="22" fill="${PRIMARY}" fill-opacity="0.55">${PROMPT_LINE}</text>

    <text x="${textX}" y="398" font-family="JetBrains Mono" font-weight="700" font-size="36">
      <tspan fill="${PRIMARY}">[ </tspan><tspan fill="${ACCENT}">${STATUS}</tspan><tspan fill="${PRIMARY}"> ]</tspan>
    </text>

    <text x="${textX}" y="456" font-family="JetBrains Mono" font-size="23" fill="${PRIMARY}" fill-opacity="0.7">${EVENT_LINE}</text>
  </g>

  <rect x="${PANEL.x}" y="${PANEL.y}" width="${PANEL.w}" height="${PANEL.h}" rx="${PANEL.r}" fill="none" stroke="rgba(148,209,173,0.3)" stroke-width="1" />

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#scanlines)" />
</svg>`;

const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: WIDTH },
  font: {
    loadSystemFonts: false,
    fontFiles: [from("../src/og/JetBrainsMono-Regular.ttf"), from("../src/og/JetBrainsMono-Bold.ttf")],
    defaultFontFamily: "JetBrains Mono",
  },
});

const out = from("../public/assets/og-card.png");
writeFileSync(out, resvg.render().asPng());
console.log(`og-card.png written (${WIDTH}x${HEIGHT})`);
