import { defaultLang, ui, type Lang, type UIKey } from "./ui";

type Params = Record<string, string | number>;

/**
 * Returns a `t(key, params)` for the given locale. Placeholders are written as
 * `{name}` in `ui.ts` and replaced with `params.name`.
 */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey, params: Params = {}): string {
    const template: string = ui[lang][key] ?? ui[defaultLang][key];
    return template.replace(/\{(\w+)\}/g, (match, name: string) =>
      name in params ? String(params[name]) : match,
    );
  };
}

const dateFormats: Record<Lang, Intl.DateTimeFormatOptions> = {
  es: { day: "2-digit", month: "2-digit", year: "2-digit", timeZone: "UTC" },
  en: { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" },
};

/** Formats an ISO date (`YYYY-MM-DD`) the way each locale expects to read it. */
export function formatDate(isoDate: string, lang: Lang): string {
  const locale = lang === "es" ? "es-AR" : "en-US";
  return new Intl.DateTimeFormat(locale, dateFormats[lang]).format(
    new Date(`${isoDate}T00:00:00Z`),
  );
}
