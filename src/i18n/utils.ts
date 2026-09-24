import type { TalkId } from "../data/schedule";
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

/** Weekday + day + short month for an ISO date, read in UTC so the calendar day doesn't shift. */
export function formatDay(isoDate: string, lang: Lang): string {
  const locale = lang === "es" ? "es-AR" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    weekday: "short",
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

/** Compact span. Same month collapses to "7–9 oct" / "Oct 7–9". */
export function formatDateSpan(startIso: string, endIso: string, lang: Lang): string {
  const locale = lang === "es" ? "es-AR" : "en-US";
  const start = new Date(`${startIso}T00:00:00Z`);
  const end = new Date(`${endIso}T00:00:00Z`);
  const day = new Intl.DateTimeFormat(locale, { day: "numeric", timeZone: "UTC" });
  const month = new Intl.DateTimeFormat(locale, { month: "short", timeZone: "UTC" });
  const sameMonth = start.getUTCMonth() === end.getUTCMonth();
  if (lang === "es") {
    return sameMonth
      ? `${day.format(start)}–${day.format(end)} ${month.format(end)}`
      : `${day.format(start)} ${month.format(start)}–${day.format(end)} ${month.format(end)}`;
  }
  return sameMonth
    ? `${month.format(start)} ${day.format(start)}–${day.format(end)}`
    : `${month.format(start)} ${day.format(start)}–${month.format(end)} ${day.format(end)}`;
}

/** `talk.<id>.title|description` — fails typecheck if a slot has no copy. */
export function talkKey(id: TalkId, field: "title" | "description"): UIKey {
  return `talk.${id}.${field}`;
}
