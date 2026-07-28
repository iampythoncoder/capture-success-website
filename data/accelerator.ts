export const ACCELERATOR_ATTENDANCE_URL = "https://tally.so/r/RG10VJ";

export type AcceleratorProgram = {
  name: string;
  format: "In person";
  durationWeeks: number;
  meetingDay: "Monday";
  startDate: string;
  endDate: string;
  time: {
    start: string;
    end: string;
    label: string;
  };
  location: {
    venue: string;
    building: string;
  };
};

export type AcceleratorSession = {
  week: number;
  date: string;
  dateLabel: string;
  title: string;
  topics: readonly string[];
};

export type AcceleratorBenefit = {
  title: string;
  description: string;
};

export const acceleratorProgram = {
  name: "Capture Success Student Accelerator",
  format: "In person",
  durationWeeks: 6,
  meetingDay: "Monday",
  startDate: "2026-08-31",
  endDate: "2026-10-05",
  time: {
    start: "6:00 PM",
    end: "8:00 PM",
    label: "6:00–8:00 PM"
  },
  location: {
    venue: "Frontier RTP",
    building: "Building 600"
  }
} as const satisfies AcceleratorProgram;

export const acceleratorSessions = [
  {
    week: 1,
    date: "2026-08-31",
    dateLabel: "Aug 31",
    title: "Set the direction",
    topics: [
      "Founder introductions",
      "Six-week goals",
      "Problem definition",
      "Customer identification"
    ]
  },
  {
    week: 2,
    date: "2026-09-07",
    dateLabel: "Sep 7",
    title: "Validate the problem",
    topics: [
      "Customer discovery",
      "Customer interviews",
      "Evidence that the problem is real"
    ]
  },
  {
    week: 3,
    date: "2026-09-14",
    dateLabel: "Sep 14",
    title: "Build and test",
    topics: [
      "Product development",
      "MVP planning",
      "Solution testing"
    ]
  },
  {
    week: 4,
    date: "2026-09-21",
    dateLabel: "Sep 21",
    title: "Make the business work",
    topics: [
      "Business models",
      "Pricing",
      "Marketing and sales",
      "Financial fundamentals"
    ]
  },
  {
    week: 5,
    date: "2026-09-28",
    dateLabel: "Sep 28",
    title: "Prepare the pitch",
    topics: [
      "Company storytelling",
      "Pitch development",
      "Investor-style feedback",
      "Final presentation preparation"
    ]
  },
  {
    week: 6,
    date: "2026-10-05",
    dateLabel: "Oct 5",
    title: "Final pitch showcase",
    topics: [
      "Presentations to mentors and judges",
      "Feedback from founders",
      "Connections with startup-community partners"
    ]
  }
] as const satisfies readonly AcceleratorSession[];

export const acceleratorBenefits = [
  {
    title: "Weekly working sessions",
    description: "Six structured workshops tied to a clear stage of building."
  },
  {
    title: "Direct mentorship",
    description: "One-on-one and team guidance throughout the program."
  },
  {
    title: "Experienced feedback",
    description:
      "Practical input from entrepreneurs and business-support organizations."
  },
  {
    title: "Triangle connections",
    description: "Meet startup leaders, founders, and other student teams."
  },
  {
    title: "Product and pitch coaching",
    description:
      "Refine the product, business model, company story, and final presentation."
  },
  {
    title: "Relevant introductions",
    description: "Potential connections to partners, programs, and resources."
  },
  {
    title: "A public finish",
    description:
      "Team apparel and a professional showcase for six weeks of progress."
  }
] as const satisfies readonly AcceleratorBenefit[];
