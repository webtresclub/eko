import type { APIRoute } from "astro";
import { days, talks, type TalkId } from "../../../data/schedule";
import { event } from "../../../data/village";
import { languages, type Lang } from "../../../i18n/ui";
import { talkKey, useTranslations } from "../../../i18n/utils";
import { buildIcs } from "../../../lib/ics";

export const prerender = true;

function isLang(value: string | undefined): value is Lang {
  return value === "es" || value === "en";
}

function isTalkId(value: string | undefined): value is TalkId {
  return talks.some((talk) => talk.id === value);
}

export function getStaticPaths() {
  return (Object.keys(languages) as Lang[]).flatMap((lang) =>
    talks.map((talk) => ({
      params: { lang, slug: talk.id },
    })),
  );
}

export const GET: APIRoute = ({ params, site }) => {
  if (!isLang(params.lang) || !isTalkId(params.slug)) {
    return new Response("Not found", { status: 404 });
  }

  const talk = talks.find((item) => item.id === params.slug);
  const day = talk && days.find((item) => item.n === talk.day);
  if (!talk || !day || !site) {
    return new Response("Not found", { status: 404 });
  }

  const t = useTranslations(params.lang);
  const title = t(talkKey(talk.id, "title"));
  const location = t("schedule.location", { room: talk.room });
  const spoken = t("schedule.icsSpoken");
  const description = [
    talk.speaker,
    location,
    "",
    t(talkKey(talk.id, "description")),
    "",
    `WebtrES Village · Ekoparty ${event.year}`,
    ...(spoken ? ["", spoken] : []),
  ].join("\n");

  const page = new URL(params.lang === "en" ? "/en/" : "/", site);
  page.hash = talk.id;

  const body = buildIcs({
    id: talk.id,
    title: `${title} — ${talk.speaker}`,
    description,
    location,
    date: day.date,
    start: talk.start,
    end: talk.end,
    url: page.href,
  });

  return new Response(body, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="webtres-${talk.id}.ics"`,
    },
  });
};
