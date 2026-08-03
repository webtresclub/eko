// Locale-independent facts about the event. Anything translatable lives in src/i18n/ui.ts.
export const event = {
  title: "WebtrES Village",
  edition: "Ekoparty",
  city: "Buenos Aires",
  year: "2026",
};

export const cfp = {
  href: "https://eth-security-explorations.notion.site/c3d21cf92b6849f895e617a05e201fd0?pvs=105",
  /** ISO date — rendered per locale by formatDate(). */
  deadline: "2026-09-01",
};

/** Footer credit. Proper nouns, so the same in every locale. */
export const attribution = {
  webtres: "WebtrES Club",
  trg: { label: "The Red Guild 🪷", href: "https://theredguild.org" },
};

export const socials = [
  { label: "discord", href: "https://discord.gg/eegRCDmwbM" },
  { label: "telegram", href: "https://t.me/webtresclub" },
  { label: "twitter", href: "https://twitter.com/webtresclub" },
  { label: "github", href: "https://github.com/webtresclub" },
];
