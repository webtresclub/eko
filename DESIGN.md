---
version: alpha
name: WebtrES Club
description: A dark, retro-terminal community brand with soft mint accents and pixel-art charm.
colors:
  primary: "#94d1ad"
  secondary: "#222a26"
  tertiary: "#374151"
  neutral: "#0d0d0d"
  surface: "#111111"
  on-surface: "#94d1ad"
  accent: "#ffffff"
  error: "#ff6b6b"
typography:
  headline-display:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 60px
    letterSpacing: 0px
  headline-lg:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: 30px
    fontWeight: 700
    lineHeight: 36px
    letterSpacing: 0px
  headline-md:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 24px
    letterSpacing: 0px
  headline-sm:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 22px
    letterSpacing: 0px
  body-lg:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 26px
    letterSpacing: 0px
  body-sm:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0px
  label-lg:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0px
  label-md:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 18px
    letterSpacing: 0px
  label-sm:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0px
rounded:
  none: 0px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  2xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 8px 16px
    height: 36px
  button-primary-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.accent}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 8px 16px
    height: 36px
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 8px 16px
    height: 36px
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: 0px
    height: 0px
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 16px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 8px 12px
  chip:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 8px
---

# WebtrES Club

## Overview
WebtrES Club feels like a playful, hacker-friendly community landing page with a strong retro terminal personality. It is intentionally minimal, dark, and dense in meaning rather than in layout, using mint-green type and pixel-art imagery to create a nostalgic Web3/security vibe. The tone is approachable and slightly quirky, but still technical and community-oriented.

## Colors
- **Primary (#94D1AD):** The signature mint green used for most text, links, and button labels. It carries the brand voice and gives the interface its soft neon-on-black glow.
- **Secondary (#222A26):** A deep charcoal-green used for filled controls and subtle UI blocks. It reads as an understated terminal panel color rather than a bright surface.
- **Tertiary (#374151):** A muted border and divider tone that provides structure without introducing visual noise. Use it sparingly for outlines, separations, and hover contrast.
- **Neutral (#0D0D0D):** The main background color, nearly black and highly immersive. It helps the mint accents and pixel graphics feel luminous.
- **Surface (#111111):** A slightly lifted dark surface for cards or containers that need distinction from the page background. Keep the difference subtle to preserve the flat, atmospheric feel.
- **On-surface (#94D1AD):** Text and icon color for content on dark panels. This reinforces the monocolor terminal aesthetic.
- **Accent (#FFFFFF):** Reserved for tiny highlights and the most emphatic contrast moments. It should remain rare so the interface doesn’t lose its moody character.
- **Error (#FF6B6B):** A clear but restrained danger color for destructive or failed states. It should stand apart from the mint system without becoming overly saturated.

## Typography
The system combines monospace and sans-serif stacks to create a retro-tech hierarchy. Headline levels use `ui-monospace` with strong weight and tight line-height, which makes the brand title feel like a terminal command or arcade banner. Supporting headings switch to `ui-sans-serif` for a more readable, modern contrast, while body and label text return to monospace for a consistent developer-community voice.

Use the display and headline levels for short, high-impact statements only. `body-md` is the main reading size for descriptive copy, and `body-sm` or `label-md` should handle button text, captions, and small interface hints. Letter spacing stays neutral and uppercase treatment is not a dominant pattern; the style relies more on spacing, weight, and the monospace rhythm than on aggressive casing.

## Layout & Spacing
The page uses a centered, fixed-width hero container with generous outer negative space, making the content feel like a small control panel floating in darkness. Vertical spacing is balanced and deliberate: large gaps around the hero image and title, tighter spacing between subtitle and call-to-action, and compact internal padding inside controls. The rhythm follows a simple step scale using 4px, 12px, 16px, 20px, 24px, and 64px increments.

Section content should stay narrow and centered rather than spanning the full viewport. Cards and hero blocks should use restrained internal padding, with clear whitespace around them to preserve the sparse, atmospheric composition. Avoid dense multi-column layouts unless absolutely necessary.

## Elevation & Depth
The interface is intentionally flat. Hierarchy comes from contrast, outlines, and tonal separation rather than from shadow stacks or layered depth effects. Thin borders and slight surface shifts are enough to define cards and buttons, while the background remains uninterrupted and immersive.

If depth is needed, keep it subtle and technical: a minimal border, a slight fill change, or a small icon accent is preferable to soft shadows. This keeps the design feeling crisp, retro, and pixel-friendly.

## Shapes
The shape language is modestly rounded and utilitarian. Buttons use a small 6px radius, cards use 8px, and larger containers can gently step up to 12px when needed. Circles and pill shapes should be reserved for tiny controls, icons, or status chips.

Overall, the system feels more mechanical than soft. Corners are softened just enough to keep the interface friendly, but not enough to lose the terminal-inspired sharpness.

## Components
Buttons are compact and code-like. Primary buttons use the secondary fill with mint text, 8px vertical and 16px horizontal padding, and a 36px minimum height. Secondary buttons can match the same treatment when used for less important actions. Tertiary buttons and links should be visually quiet, with transparent backgrounds and no border chrome. Hover states may shift from `button-primary` to `button-primary-hover`, introducing a slightly different dark fill and higher-contrast text.

Cards should use the `card` treatment: dark surface, 1px border, 8px radius, and 16px padding. Keep card contents centered or tightly aligned, and avoid heavy shadowing or decorative framing. Cards are more like terminal panels than marketing surfaces.

Inputs should feel consistent with the same compact system: dark fill, mint text, small radius, and modest padding. Borders should remain subtle and functional. Placeholder and helper text should not overpower the primary mint palette.

Chips and tags should be pill-shaped, small, and low-noise, using `chip` when status or category labels are needed. They should inherit the same tonal palette as buttons but at a smaller scale.

Illustration and icon usage is part of the component language here: pixel art, tiny glyphs, and simple thematic icons are preferred over polished vector gradients. Keep list items, tooltips, checkboxes, and radios minimal and structural if they appear; they should match the same dark, mint, and border-first treatment.

## Do's and Don'ts
- Do keep the interface dark, sparse, and centered with lots of breathing room.
- Do use mint green as the dominant UI and text accent.
- Do prefer monospace for core brand content, labels, and controls.
- Do preserve the flat look with borders and tonal changes instead of heavy shadows.
- Do keep rounded corners small and consistent across components.
- Don't introduce bright gradients, glossy effects, or neon overload.
- Don't use large-radius modern SaaS styling that conflicts with the retro-terminal feel.
- Don't crowd the layout with too many columns, cards, or competing accents.
