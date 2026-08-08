export type FinnovateFact = {
  value: string;
  label: string;
};

export type FinnovatePhoto = {
  src: string;
  alt: string;
  label: string;
  detail: string;
};

export const finnovateFacts: readonly FinnovateFact[] = [
  { value: "20+", label: "Teams" },
  { value: "06", label: "Judges" },
  { value: "03", label: "Winning teams" },
  { value: "$2.5K+", label: "Prize money" }
] as const;

export const finnovatePhotos: Record<string, FinnovatePhoto> = {
  hero: {
    src: "/media/finnovate/live-pitch.webp",
    alt: "Student founders presenting their startup to an audience at Startup Spotlight.",
    label: "Startup Spotlight",
    detail: "Live pitch competition"
  },
  judges: {
    src: "/media/finnovate/judging-panel.webp",
    alt: "A student founder pitching to the Startup Spotlight judging panel.",
    label: "Judging panel",
    detail: "Six business professionals"
  },
  award: {
    src: "/media/finnovate/award-presentation.webp",
    alt: "Startup Spotlight organizers presenting an award after the competition.",
    label: "Award presentation",
    detail: "Startup Spotlight"
  },
  winners: {
    src: "/media/finnovate/winning-team.webp",
    alt: "Startup Spotlight participants holding a certificate after the competition.",
    label: "After the pitch",
    detail: "Award presentation"
  },
  group: {
    src: "/media/finnovate/event-group.webp",
    alt: "Startup Spotlight organizers and judges after the competition.",
    label: "Organizers + judges",
    detail: "Built with our school's DECA chapter"
  }
};
