// ---------------------------------------------------------------------------
// Single source of truth for every fact on the site.
// Change a date, a link, or a company here and it updates everywhere.
// ---------------------------------------------------------------------------

export const SITE = {
  name: "Capture Success",
  legal: "Capture Success Inc.",
  domain: "capturesuccess.org",
  url: "https://www.capturesuccess.org",
  tagline: "A student startup network.",
  description:
    "Capture Success is a student startup network. 10+ student-led companies, a free six-week accelerator, and the people who help student founders ship.",
  email: "capturesuccess.inc@gmail.com",
  instagram: "https://www.instagram.com/capturesuccessinc/",
  discord: "https://discord.gg/YM564Y9vKS",
} as const;

/** The Fall 2026 accelerator application. */
export const ACCELERATOR_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSd1Az2n2Y8jTB8rWiD5C_pKia7twh7s865IL9Af_bR9j-bN8Q/viewform";

// ---------------------------------------------------------------------------
// Accelerator — Fall 2026
// ---------------------------------------------------------------------------

export const ACCELERATOR = {
  cohort: "Fall 2026",
  weeks: 6,
  cadence: "Every Monday",
  time: "6:00 – 8:00 PM",
  cost: "Free",
  grades: "Grades 9 and up",
  rangeLabel: "Sept 14 — Oct 19, 2026",
  pitch: "Oct 19 — Final Pitch Night",
  pitch_short: "Final Pitch Night",
  /** ISO of the first session, used for the countdown. */
  startsAt: "2026-09-14T18:00:00-04:00",
  venue: {
    name: "Frontier RTP",
    building: "Building 600",
    street: "600 Park Offices Drive",
    city: "RTP, NC 27713",
    maps:
      "https://www.google.com/maps/search/?api=1&query=600+Park+Offices+Drive+RTP+NC+27713",
  },
} as const;

export type Week = {
  n: number;
  date: string;
  iso: string;
  title: string;
  summary: string;
  items: string[];
};

export const WEEKS: Week[] = [
  {
    n: 1,
    date: "Sept 14",
    iso: "2026-09-14",
    title: "Foundations",
    summary:
      "Lock your problem, your customer, and your six-week goal.",
    items: [
      "Founder introductions",
      "Six-week goals",
      "Problem definition",
      "Customer identification",
    ],
  },
  {
    n: 2,
    date: "Sept 21",
    iso: "2026-09-21",
    title: "Customer discovery",
    summary: "Real interviews with real users. Evidence over guessing.",
    items: [
      "Customer discovery",
      "Customer interviews",
      "Evidence that the problem is real",
    ],
  },
  {
    n: 3,
    date: "Sept 28",
    iso: "2026-09-28",
    title: "Build the MVP",
    summary: "Cut features, prototype, and get it tested.",
    items: ["Product development", "MVP planning", "Solution testing"],
  },
  {
    n: 4,
    date: "Oct 5",
    iso: "2026-10-05",
    title: "Business model",
    summary: "Pricing, costs, marketing, and how you grow.",
    items: [
      "Business models",
      "Pricing",
      "Marketing and sales",
      "Financial fundamentals",
    ],
  },
  {
    n: 5,
    date: "Oct 12",
    iso: "2026-10-12",
    title: "Pitch prep",
    summary: "Story, slides, rehearsal, and direct feedback.",
    items: [
      "Company storytelling",
      "Pitch development",
      "Investor-style feedback",
      "Final presentation preparation",
    ],
  },
  {
    n: 6,
    date: "Oct 19",
    iso: "2026-10-19",
    title: "Final pitch night",
    summary:
      "Pitch live to judges and the Triangle startup community.",
    items: [
      "Presentations to mentors and judges",
      "Feedback from founders",
      "Connections with startup-community partners",
    ],
  },
];

export const BENEFITS = [
  {
    n: "01",
    title: "Weekly working sessions",
    body: "Six structured workshops, each tied to a clear stage of building.",
  },
  {
    n: "02",
    title: "Direct mentorship",
    body: "One-on-one and team guidance throughout the program.",
  },
  {
    n: "03",
    title: "Experienced feedback",
    body: "Practical input from entrepreneurs and business-support organizations.",
  },
  {
    n: "04",
    title: "Triangle connections",
    body: "Meet startup leaders, founders, and other student teams.",
  },
  {
    n: "05",
    title: "Product and pitch coaching",
    body: "Refine the product, the business model, the story, and the final presentation.",
  },
  {
    n: "06",
    title: "Relevant introductions",
    body: "Connections to partners, programs, and resources that fit your venture.",
  },
  {
    n: "07",
    title: "Dinner every session",
    body: "Food is served at all six Mondays. Tell us about allergies on the application.",
  },
  {
    n: "08",
    title: "A public finish",
    body: "Team apparel and a professional showcase for six weeks of progress.",
  },
];

export const FAQ = [
  {
    q: "Who can apply?",
    a: "Any student founder in grades 9 and up. Come solo and we will match you with a team, or bring your own — every member fills out their own application.",
  },
  {
    q: "How much does it cost?",
    a: "Nothing. The program is free, and dinner is served at every session.",
  },
  {
    q: "Do I need an idea already?",
    a: "You need something to work on, but it can be early. Applications range from 'just an idea' to 'making revenue' — week one exists to sharpen the direction.",
  },
  {
    q: "What if I miss a Monday?",
    a: "The program is built as a sequence, so we ask you to commit to all six. If you know about a conflict, say so on the application and we will work with you.",
  },
  {
    q: "Can my whole team join?",
    a: "Yes. Teams of two, three, four, or more are welcome, and every member fills out their own application so we know who is coming. Applying solo is fine too — we will match you with a team.",
  },
  {
    q: "What happens at the end?",
    a: "Week six on October 19 is Final Pitch Night. Teams pitch live to judges and the Triangle startup community — including our ecosystem partners.",
  },
];

export const HOW_TO_JOIN = [
  {
    n: "01",
    title: "Grab your team",
    body: "Or come solo — we will match you with people building something similar.",
  },
  {
    n: "02",
    title: "Grades 9 and up",
    body: "Every member fills out their own application so we know who is coming.",
  },
  {
    n: "03",
    title: "Show up Sept 14",
    body: "6:00 PM at Frontier RTP, Building 600 — 600 Park Offices Drive, RTP.",
  },
];

// ---------------------------------------------------------------------------
// Companies
// ---------------------------------------------------------------------------

export type Company = {
  n: string;
  name: string;
  sector: string;
  /** One line for cards and lists. */
  blurb: string;
  /** Longer profile for the companies page. */
  about?: string[];
  founders?: string[];
  href?: string;
  logo?: string;
  /** Verified facts — awards, partnerships, traction. */
  highlights?: { label: string; value: string }[];
  /** What the product actually does. */
  capabilities?: string[];
  image?: { src: string; alt: string; caption: string; aspect: string; narrow?: boolean };
  featured?: boolean;
};

export const FEATURED: Company[] = [
  {
    n: "01",
    name: "PyroSight",
    sector: "Firefighter safety",
    blurb:
      "Helmet-mounted thermal vision that finds people, exits, and hazards in dense smoke.",
    about: [
      "PyroSight is a helmet-mounted vision system for structural firefighting. It fuses thermal imaging, computer vision, and on-device AI to locate people, exits, and hazards when visibility drops to zero.",
      "Everything runs locally on a helmet-mounted accelerator, so the system keeps working deep inside concrete structures with no connectivity — no cloud, no lag. Detection models are trained on live-burn scenarios rather than generic image sets, so they recognise what off-the-shelf vision has never seen.",
    ],
    founders: ["Sheehan", "Milind", "Aarush", "Atharv"],
    href: "https://pyrosight-website.vercel.app/",
    logo: "/portfolio/pyrosight.svg",
    highlights: [
      { label: "Sensor-to-display latency", value: "39 ms" },
      { label: "Continuous edge runtime", value: "12 hrs" },
      { label: "Systems working in real time", value: "16" },
    ],
    capabilities: [
      "Thermal imaging AI that resolves human signatures through zero-visibility smoke",
      "On-device edge processing — works with no connectivity",
      "Human detection for partial, occluded, and prone bodies",
      "Intelligent navigation that re-plans egress routes many times a second",
      "Exit recognition — doors, windows, and stairwells mapped on entry",
      "Structural risk analysis with live collapse probability",
      "Real-time hazard detection for gas plumes, arcing, and backdraft",
    ],
    featured: true,
  },
  {
    n: "02",
    name: "VisioCourt",
    sector: "Sports operations",
    blurb:
      "Live court availability and wait-time data for players and facility operators. No facial recognition.",
    about: [
      "VisioCourt turns existing facility cameras into live court-occupancy data. Operators see which courts are active, open, or idle across a whole site without walking it, and players check open courts and wait times from their phone before leaving home.",
      "The system is privacy-first by design — it uses no facial recognition — and runs on a facility's existing IP cameras, with a ten-day risk-free pilot to get started.",
    ],
    founders: ["Vivaan", "Ganesh", "Sid"],
    href: "https://visiocourt.com/",
    logo: "/portfolio/visiocourt.png",
    highlights: [
      { label: "Town of Morrisville", value: "Live at 3 facilities" },
      { label: "DECA States", value: "2nd place" },
      { label: "Presented at", value: "MIT" },
    ],
    capabilities: [
      "Real-time occupancy across every court in a facility",
      "Predictive forecasting of peak congestion and player wait times",
      "Utilization data to justify budgets, grants, and court expansion",
      "Works with existing IP cameras — or turnkey hardware",
      "Privacy first: no facial recognition anywhere in the system",
    ],
    image: {
      src: "/media/visiocourt-team.webp",
      alt: "The VisioCourt team holding their trophy at DECA States",
      caption: "VisioCourt placed second at DECA States",
      aspect: "3 / 4",
      narrow: true,
    },
    featured: true,
  },
  {
    n: "03",
    name: "Beacon",
    sector: "Safety",
    logo: "/portfolio/beacon.svg",
    blurb:
      "The first team out of our inaugural cohort — and the first to win a regional pitch competition.",
    about: [
      "Beacon came out of the first Capture Success cohort and became the network's first competition win. The team took TiE Young Entrepreneurs (TYE) Regionals in April 2026, earning $1,000 and a place at nationals in Seattle.",
      "The project was guided start to finish by Capture Success members Saatvik Santosh and Ketav Karthikeyan.",
    ],
    highlights: [
      { label: "TYE Regionals", value: "1st — $1,000" },
      { label: "Qualified for", value: "Nationals, Seattle" },
      { label: "Cohort", value: "Inaugural" },
    ],
    image: {
      src: "/media/beacon-tye-regionals.jpg",
      alt: "The Beacon team holding a $1,000 check after winning TYE Regionals",
      caption:
        "Beacon winning TYE Regionals with TiE Raleigh Durham, April 2026",
      aspect: "4 / 3",
    },
    featured: true,
  },
  {
    n: "04",
    name: "Resyn.",
    sector: "Recycling technology",
    logo: "/portfolio/resyn.svg",
    blurb:
      "Point your camera at a container and know what plastic it is made of — instantly, on-device.",
    about: [
      "Recycling mostly fails at the bin, in the three seconds someone spends guessing whether something belongs there. Resyn removes the guess: point a camera at a bottle, tub, or container and it identifies the plastic resin type straight from a live feed.",
      "It is built resin-first rather than bolted onto a generic object detector — purpose-made around the seven resin codes from day one. The team is early-stage and building in public, with a working scanner shipped and a custom-trained model in progress.",
    ],
    href: "https://resyn.netlify.app/",
    highlights: [
      { label: "Resin codes recognised", value: "All 7" },
      { label: "Multi-frame scan", value: "3 sec" },
      { label: "Stage", value: "Building in public" },
    ],
    capabilities: [
      "Live camera feed with YOLO object detection that locks onto the container",
      "Three-second scan sampling brightness, colour, texture, and transparency",
      "Confidence-weighted voting across frames, with alternative guesses shown",
      "Low-confidence scans flagged rather than forced into a wrong answer",
      "Identifies PET, HDPE, PVC, LDPE, PP, PS, and Other",
      "Next up: a custom-trained YOLO model on a labelled resin dataset",
    ],
    featured: true,
  },
];

export const ALSO_BUILDING: Company[] = [
  { n: "05", name: "PathLight", sector: "Navigation", blurb: "", logo: "/portfolio/pathlight.svg" },
  { n: "06", name: "Palm", sector: "Consumer", blurb: "", logo: "/portfolio/palm.svg" },
  { n: "07", name: "Knowledge Vault", sector: "Education", blurb: "", logo: "/portfolio/knowledge-vault.svg" },
  { n: "08", name: "Hemma", sector: "Health", blurb: "", logo: "/portfolio/hemma.svg" },
  { n: "09", name: "Revivo", sector: "Sustainability", blurb: "", logo: "/portfolio/revivo.svg" },
  { n: "10", name: "RoboGripper", sector: "Robotics", blurb: "", logo: "/portfolio/robogripper.svg" },
];

/** Facilities where VisioCourt is live. */
export const MORRISVILLE_SITES = [
  "Church Street Park",
  "Morrisville Community Park",
  "Morrisville Aquatics & Fitness Center",
];

export const METRICS = [
  { value: 10, suffix: "+", label: "Companies in the network" },
  { value: 20, prefix: "$", suffix: "K+", label: "Raised across the network" },
  { value: 2, suffix: "nd", label: "VisioCourt at DECA States" },
  { value: 6, suffix: " wks", label: "Fall 2026 accelerator" },
];

// ---------------------------------------------------------------------------
// People
// ---------------------------------------------------------------------------

export type Person = { n: string; name: string; role: string };

export const COFOUNDERS: Person[] = [
  { n: "01", name: "Saatvik Santosh", role: "Technology Director" },
  { n: "02", name: "Dhruva Valluru", role: "Operations Director" },
  { n: "03", name: "Amogh Gotaparthy", role: "Outreach Director" },
  { n: "04", name: "Dhruv Mishra", role: "Partnerships Director" },
  { n: "05", name: "Ketav Karthikeyan", role: "Summer Camp Director" },
];

export const BOARD: Person[] = [
  { n: "06", name: "Rohit Gunturi", role: "Social Media Manager" },
  { n: "07", name: "Neeraj Sivasankar", role: "Board Member" },
  { n: "08", name: "Aryan Mahalingam", role: "Strategic Initiatives Director" },
  { n: "09", name: "Vihaan Kommireddy", role: "Board Member" },
];

// ---------------------------------------------------------------------------
// Finnovate
// ---------------------------------------------------------------------------

export const FINNOVATE = {
  stats: [
    { value: "20+", label: "Teams presented" },
    { value: "06", label: "Judges" },
    { value: "03", label: "Winning teams" },
    { value: "$2.5K+", label: "Prize money" },
  ],
  photos: [
    {
      src: "/media/finnovate/judging-panel.webp",
      title: "Judging panel",
      caption: "Six business professionals",
    },
    {
      src: "/media/finnovate/live-pitch.webp",
      title: "Live pitch",
      caption: "Teams presenting Startup Spotlight",
    },
    {
      src: "/media/finnovate/award-presentation.webp",
      title: "Award presentation",
      caption: "After the pitch",
    },
    {
      src: "/media/finnovate/winning-team.webp",
      title: "Winning team",
      caption: "Top three shared $2,500+",
    },
    {
      src: "/media/finnovate/event-group.webp",
      title: "Organizers and judges",
      caption: "Built with our school's DECA chapter",
    },
  ],
} as const;

// ---------------------------------------------------------------------------
// Partners  — placeholder until the new partner list lands.
// ---------------------------------------------------------------------------

export type Partner = {
  name: string;
  short: string;
  logo?: string;
  href?: string;
  role: string;
};

/** Ecosystem partners for the Fall 2026 accelerator. */
export const PARTNERS: Partner[] = [
  {
    name: "Hub RTP — Research Triangle Park's downtown",
    short: "Hub RTP",
    logo: "/partners/hub-rtp.png",
    href: "https://hub.rtp.org/",
    role: "Venue sponsor",
  },
  {
    name: "Frontier RTP — Building 600",
    short: "Frontier RTP",
    logo: "/partners/frontier-rtp.png",
    href: "https://frontier.rtp.org/",
    role: "Venue partner",
  },
  {
    name: "Jason's Deli",
    short: "Jason's Deli",
    logo: "/partners/jasons-deli.png",
    href: "https://www.jasonsdeli.com/",
    role: "Catering partner",
  },
  {
    name: "The University of North Carolina at Chapel Hill",
    short: "UNC-Chapel Hill",
    logo: "/partners/unc.png",
    href: "https://www.unc.edu/",
    role: "Ecosystem partner",
  },
  {
    name: "Launch Chapel Hill",
    short: "Launch Chapel Hill",
    logo: "/partners/launch-chapel-hill.webp",
    href: "https://www.launchchapelhill.com/",
    role: "Startup accelerator",
  },
  {
    name: "CED — Council for Entrepreneurial Development",
    short: "CED",
    logo: "/partners/ced.svg",
    href: "https://cednc.org/",
    role: "Entrepreneur network",
  },
  {
    name: "Wake Tech Entrepreneurship Center",
    short: "Wake Tech",
    logo: "/partners/wake-tech.svg",
    href: "https://www.waketech.edu/",
    role: "Entrepreneurship center",
  },
  {
    name: "Raleigh–Durham Startup Co.",
    short: "RD Startup Co.",
    logo: "/partners/rdsco.png",
    href: "https://www.raleighdurhamstartup.co/",
    role: "Startup community",
  },
  {
    name: "Place4Needs",
    short: "Place4Needs",
    role: "Community partner",
  },
  {
    name: "SKEMA Business School — Raleigh campus",
    short: "SKEMA",
    logo: "/partners/skema.svg",
    href: "https://www.skema.edu/",
    role: "Business school partner",
  },
  {
    name: "Jack Rabbit Signs — Raleigh, NC",
    short: "Jack Rabbit Signs",
    logo: "/partners/jack-rabbit-signs.jpg",
    href: "https://www.jackrabbitsigns.net/",
    role: "Signage partner",
  },
  {
    name: "NC State Entrepreneurship",
    short: "NC State",
    logo: "/partners/nc-state.png",
    href: "https://entrepreneurship.ncsu.edu/",
    role: "Ecosystem partner",
  },
];

/** What partners actually do in the program. */
export const PARTNER_ROLES = ["Mentors", "Speakers", "Judges", "Sponsors"];

/** Real, dated wins — shown as the timeline on the home page. */
export const MILESTONES = [
  {
    date: "Apr 2026",
    title: "Beacon wins TYE Regionals",
    body: "Our first cohort team took first at TiE Young Entrepreneurs Regionals — $1,000 and a place at nationals in Seattle.",
  },
  {
    date: "Spring 2026",
    title: "VisioCourt places 2nd at DECA States",
    body: "Sports-ops team VisioCourt medaled at the state conference and presented their research at MIT.",
  },
  {
    date: "2026",
    title: "Finnovate Startup Spotlight",
    body: "20+ teams pitched to six business professionals; the top three shared $2,500+ in prizes.",
  },
  {
    date: "Aug 2026",
    title: "VisioCourt goes live in Morrisville",
    body: "Live tennis and pickleball status across three Town of Morrisville facilities.",
  },
  {
    date: "Sept 2026",
    title: "Fall 2026 accelerator opens",
    body: "Six Mondays at Frontier RTP with UNC, Launch Chapel Hill, CED, Wake Tech, and more in the room.",
  },
];

/** Tile colors for companies without logo files. */
export const COMPANY_COLORS: Record<string, string> = {
  PathLight: "#7C3AED",
  Palm: "#0F9D58",
  "Knowledge Vault": "#B45309",
  Hemma: "#DB2777",
  Revivo: "#0D9488",
  RoboGripper: "#EA580C",
  Beacon: "#D97706",
};

export const NAV = [
  { href: "/accelerator", label: "Accelerator" },
  { href: "/companies", label: "Companies" },
  { href: "/finnovate", label: "Finnovate" },
  { href: "/apply", label: "Apply" },
] as const;
