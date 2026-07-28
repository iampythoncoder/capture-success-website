export const APPLICATION_EMAIL = "capturesuccessinc@gmail.com";

export type ApplicationType = "founder" | "builder" | "partner";

export type ApplicationConfig = {
  label: string;
  title: string;
  summary: string;
  subjectPrefix: string;
  detailLabel: string;
  detailPlaceholder: string;
  focusLabel: string;
  focusPlaceholder: string;
  evidenceLabel: string;
  evidencePlaceholder: string;
  subjectUsesDetail: boolean;
};

export const applicationTypeOrder: readonly ApplicationType[] = [
  "founder",
  "builder",
  "partner"
];

export const applicationConfigs: Record<ApplicationType, ApplicationConfig> = {
  founder: {
    label: "Founder",
    title: "Submit your startup",
    summary: "Tell us what you are building, what you have tested, and where the team needs help.",
    subjectPrefix: "Founder application",
    detailLabel: "Startup name",
    detailPlaceholder: "Company or working title",
    focusLabel: "What problem are you solving?",
    focusPlaceholder: "Who has the problem, and what is broken today?",
    evidenceLabel: "What have you built or tested?",
    evidencePlaceholder: "Prototype, interviews, users, pilots, or other evidence",
    subjectUsesDetail: true
  },
  builder: {
    label: "Builder",
    title: "Join a startup team",
    summary: "Show us what you can own, what you have shipped, and where you want to contribute.",
    subjectPrefix: "Builder application",
    detailLabel: "Preferred role",
    detailPlaceholder: "Engineering, design, research, operations…",
    focusLabel: "What can you own?",
    focusPlaceholder: "Describe the work you can take from idea to finished",
    evidenceLabel: "What have you shipped?",
    evidencePlaceholder: "Share a project, result, or example of completed work",
    subjectUsesDetail: false
  },
  partner: {
    label: "Partner",
    title: "Support a team",
    summary: "Tell us who you represent and how you can help a startup move faster.",
    subjectPrefix: "Partnership inquiry",
    detailLabel: "Organization",
    detailPlaceholder: "Company, school, lab, or community",
    focusLabel: "What can you offer?",
    focusPlaceholder: "Pilot access, mentorship, introductions, funding, or another resource",
    evidenceLabel: "Relevant context",
    evidencePlaceholder: "Tell us why this partnership makes sense",
    subjectUsesDetail: true
  }
};

export function normalizeApplicationType(value?: string): ApplicationType {
  return applicationTypeOrder.includes(value as ApplicationType)
    ? (value as ApplicationType)
    : "founder";
}
