// RFC 5545 text/calendar. Argentina has not observed DST since 2009, so a
// single STANDARD block is the whole zone.

const TZID = "America/Argentina/Buenos_Aires";
const DOMAIN = "eko.webtres.club";
const DTSTAMP = "20260924T150000Z";

const encoder = new TextEncoder();

export type CalendarEvent = {
  id: string;
  title: string;
  description: string;
  location: string;
  /** `YYYY-MM-DD` in `TZID`. */
  date: string;
  /** `HH:MM` in `TZID`. */
  start: string;
  /** `HH:MM` in `TZID`. */
  end: string;
  url: string;
};

/** Escape a TEXT value. Order matters: backslash first. */
export function escapeText(value: string): string {
  return value
    .replaceAll("\\", "\\\\")
    .replaceAll("\r\n", "\n")
    .replaceAll("\r", "\n")
    .replaceAll("\n", "\\n")
    .replaceAll(";", "\\;")
    .replaceAll(",", "\\,");
}

/**
 * Fold a content line at 75 octets. Continuation lines start with a space,
 * which counts toward that limit. Splits only on code-point boundaries.
 */
export function foldLine(line: string): string {
  const parts: string[] = [];
  let current = "";
  let bytes = 0;

  for (const char of line) {
    const size = encoder.encode(char).length;
    if (bytes + size > 75) {
      parts.push(current);
      current = ` ${char}`;
      bytes = 1 + size;
    } else {
      current += char;
      bytes += size;
    }
  }
  if (current) parts.push(current);
  return parts.join("\r\n");
}

function localStamp(date: string, hm: string): string {
  const [hour, minute] = hm.split(":");
  if (!hour || !minute || hour.length !== 2 || minute.length !== 2) {
    throw new Error(`Bad clock time: ${hm}`);
  }
  return `${date.replaceAll("-", "")}T${hour}${minute}00`;
}

export function buildIcs(event: CalendarEvent): string {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//WebtrES Club//WebtrES Village//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VTIMEZONE",
    `TZID:${TZID}`,
    `X-LIC-LOCATION:${TZID}`,
    "BEGIN:STANDARD",
    "DTSTART:19700101T000000",
    "TZOFFSETFROM:-0300",
    "TZOFFSETTO:-0300",
    "TZNAME:ART",
    "END:STANDARD",
    "END:VTIMEZONE",
    "BEGIN:VEVENT",
    `UID:${event.id}@${DOMAIN}`,
    `DTSTAMP:${DTSTAMP}`,
    `DTSTART;TZID=${TZID}:${localStamp(event.date, event.start)}`,
    `DTEND;TZID=${TZID}:${localStamp(event.date, event.end)}`,
    `SUMMARY:${escapeText(event.title)}`,
    `DESCRIPTION:${escapeText(event.description)}`,
    `LOCATION:${escapeText(event.location)}`,
    `URL:${event.url}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return `${lines.map(foldLine).join("\r\n")}\r\n`;
}
