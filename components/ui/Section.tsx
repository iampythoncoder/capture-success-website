import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  headingClassName?: string;
  index: string;
  tone?: "light" | "dark" | "soft";
};

export function Section({
  id,
  label,
  title,
  intro,
  children,
  className = "",
  headingClassName = "",
  index,
  tone = "light"
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      className={`section section-${tone} ${className}`.trim()}
      aria-labelledby={headingId}
      data-section
    >
      <Container>
        <div className="section-rule" aria-hidden="true">
          <span>{index}</span>
          <i />
          <span>{label}</span>
        </div>
        <div
          className={`section-heading ${intro ? "" : "section-heading-simple"} ${headingClassName}`.trim()}
          data-reveal
        >
          <h2 id={headingId}>{title}</h2>
          {intro ? <p className="section-intro">{intro}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
