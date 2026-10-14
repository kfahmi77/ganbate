export interface ReminderCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  detail?: string;
}

export const siteConfig = {
  name: "Ica",
  interviewDate: "2026-10-14T09:00:00+07:00",
  timeZone: "Asia/Jakarta",

  seo: {
    title: "For Ica — Before Tomorrow",
    description: "A little something before tomorrow. A quiet space, reminding you of how far you've come.",
    author: "Someone who believes in you",
  },

  hero: {
    subtitle: "For Ica.",
    tagline: "Before tomorrow.",
    dateLabel: "14 · 10 · 2026",
    scrollHint: "Scroll down slowly",
  },

  intro: {
    greeting: "Hey, Ica.",
    lines: [
      "Besok mungkin cuma satu hari dari sekian banyak hari.",
      "Tapi kamu sudah berjalan cukup jauh untuk sampai di sana.",
      "Setiap persiapan, lelah, dan doa yang kamu kumpulkan—semuanya nyata dan berharga.",
    ],
  },

  reminders: [
    {
      id: "breathe",
      number: "01",
      title: "Breathe.",
      subtitle: "Tarik napas. Pelan-pelan.",
      detail: "Ruangan interview itu bukan tempat untuk dihakimi, tapi panggung untuk berbagi ceritamu.",
    },
    {
      id: "trust",
      number: "02",
      title: "Trust Yourself.",
      subtitle: "Kamu sudah sampai sejauh ini.",
      detail: "Semua proses panjang yang sudah kamu lewati bukan sebuah kebetulan.",
    },
    {
      id: "story",
      number: "03",
      title: "Tell Your Story.",
      subtitle: "Nggak harus sempurna. Cukup jadi Ica.",
      detail: "Keaslian dan ketulusanmu akan selalu lebih bersinar daripada jawaban yang dibuat-buat.",
    },
  ] as ReminderCard[],

  countdown: {
    beforeHeading: "Until your interview",
    afterHeading: "You did it.",
    postInterviewLines: [
      "Whatever the result, you showed up.",
      "And that's something worth being deeply proud of.",
      "You fought with your whole heart, and that's what truly counts.",
    ],
  },

  remember: {
    mainQuote: "Whatever happens tomorrow,",
    subQuote: "I hope you remember that",
    highlight: "you've already done something brave.",
    closure: "Getting this far wasn't an accident.",
  },

  oneLastThing: {
    prompt: "One last thing, Ica.",
    buttonLabel: "Open",
    line1: "I'm rooting for you.",
    line2: "Maybe a little more than I should. :)",
    footnote: "Now take a deep breath. You're ready.",
  },

  final: {
    message: "Good luck tomorrow, Ica.",
    punchline: "Go get it.",
    signoff: "I'll be rooting for you. ❤️",
  },

  easterEgg: {
    message: "Psst... You were always the main character here.",
    clickCountRequired: 3,
  },

  audio: {
    src: "/audio/background.mp3",
    title: "Quiet Solitude — Soft Ambient Piano",
  },
};
