import {
  APPLICATION_EMAIL,
  applicationConfigs,
  type ApplicationType
} from "@/data/applications";

export type ApplicationDraftFields = {
  fullName: string;
  email: string;
  schoolOrOrganization: string;
  location: string;
  currentRole: string;
  relevantLink: string;
  primaryDetail: string;
  focus: string;
  evidence: string;
};

type BuildApplicationMailtoArgs = {
  type: ApplicationType;
  fields: ApplicationDraftFields;
};

export function buildApplicationMailto({ type, fields }: BuildApplicationMailtoArgs) {
  const config = applicationConfigs[type];
  const clean = (value: string) => value.trim();
  const subjectDetail = config.subjectUsesDetail
    ? clean(fields.primaryDetail)
    : clean(fields.fullName);
  const subject = `Capture Success — ${config.subjectPrefix} — ${subjectDetail}`;

  const lines = [
    `Application type: ${config.label}`,
    "",
    `Full name: ${clean(fields.fullName)}`,
    `Email: ${clean(fields.email)}`,
    `School or organization: ${clean(fields.schoolOrOrganization)}`,
    `Location / timezone: ${clean(fields.location)}`,
    `Current role: ${clean(fields.currentRole)}`,
    `Relevant link: ${clean(fields.relevantLink) || "Not provided"}`,
    "",
    `${config.detailLabel}: ${clean(fields.primaryDetail)}`,
    "",
    config.focusLabel,
    clean(fields.focus),
    "",
    config.evidenceLabel,
    clean(fields.evidence)
  ];

  return `mailto:${APPLICATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    lines.join("\r\n")
  )}`;
}
