// Confirmed WebtrES Village slots. Titles and descriptions are translated in
// src/i18n/ui.ts (`talk.<id>.title`, `talk.<id>.description`).
//
// Día 1–3 are the Ekoparty Buenos Aires 2026 conference days: 7, 8 and 9
// October, at the CEC. Times are America/Argentina/Buenos_Aires (UTC−3, no DST).

export const venue = "CEC";

export const timezone = "America/Argentina/Buenos_Aires";

export const days = [
  { n: 1, date: "2026-10-07" },
  { n: 2, date: "2026-10-08" },
  { n: 3, date: "2026-10-09" },
] as const;

export const talks = [
  {
    id: "defi-hack",
    day: 1,
    room: "C3",
    start: "10:30",
    end: "11:15",
    speaker: "Nobel Arteaga",
  },
  {
    id: "doxx",
    day: 1,
    room: "A3",
    start: "14:45",
    end: "15:30",
    speaker: "Daffy",
  },
  {
    id: "zk",
    day: 2,
    room: "A2",
    start: "11:15",
    end: "12:00",
    speaker: "BengalaQ",
  },
  {
    id: "cbu",
    day: 2,
    room: "C2",
    start: "15:30",
    end: "16:15",
    speaker: "Thalía Gaona",
  },
  {
    id: "ethereum",
    day: 3,
    room: "C1",
    start: "09:00",
    end: "09:45",
    speaker: "Lengo",
  },
  {
    id: "open-book",
    day: 3,
    room: "A1",
    start: "14:00",
    end: "14:45",
    speaker: "moebius",
  },
] as const;

export type TalkId = (typeof talks)[number]["id"];
