export type StartupVisual = "thermal" | "court";

export type Startup = {
  slug: string;
  name: string;
  sector: string;
  oneLiner: string;
  detail: string;
  founders: readonly string[];
  website: string;
  logo: string;
  visual: StartupVisual;
  milestone?: {
    displayResult: string;
    result: string;
    event: string;
    image: string;
    imageAlt: string;
  };
};

export const navItems = [
  { href: "/#mission", label: "Mission" },
  { href: "/#portfolio", label: "Companies" },
  { href: "/finnovate", label: "Finnovate" },
  { href: "/board", label: "Board" },
  { href: "/#metrics", label: "Metrics" },
  { href: "/accelerator", label: "Accelerator" },
  { href: "/#contact", label: "Apply" }
] as const;

export const startups: readonly Startup[] = [
  {
    slug: "pyrosight",
    name: "PyroSight",
    sector: "Firefighter safety",
    oneLiner:
      "Helmet-mounted thermal vision for finding people, exits, and hazards in dense smoke.",
    detail:
      "Thermal imaging, on-device detection, and in-helmet navigation.",
    founders: ["Sheehan", "Milind", "Aarush", "Atharv"],
    website: "https://pyrosight-website.vercel.app/",
    logo: "/portfolio/pyrosight-mark.svg",
    visual: "thermal"
  },
  {
    slug: "visiocourt",
    name: "VisioCourt",
    sector: "Sports operations",
    oneLiner:
      "Live court availability and wait-time data for players and facility operators.",
    detail:
      "Tracks court occupancy with existing cameras, without facial recognition.",
    founders: ["Vivaan", "Ganesh", "Sid"],
    website: "https://visiocourt.com/",
    logo: "/portfolio/visiocourt-mark.webp",
    visual: "court",
    milestone: {
      displayResult: "2nd",
      result: "Second place",
      event: "DECA States",
      image: "/media/visiocourt-team.webp",
      imageAlt: "The VisioCourt founders holding their second-place award at DECA States."
    }
  }
] as const;

export const additionalStartups = [
  "PathLight",
  "Beacon",
  "Palm",
  "Knowledge Vault",
  "Hemma",
  "Revivo",
  "RoboGripper",
  "Resyn."
] as const;

export const contactRoutes = [
  {
    label: "Founder",
    title: "Submit your startup",
    action: "Start founder application",
    href: "/apply?type=founder"
  },
  {
    label: "Builder",
    title: "Join a startup team",
    action: "Start builder application",
    href: "/apply?type=builder"
  },
  {
    label: "Partner",
    title: "Support a team",
    action: "Start partner inquiry",
    href: "/apply?type=partner"
  }
] as const;
