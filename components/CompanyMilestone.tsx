import Image from "next/image";
import type { Startup } from "@/data/site";

type CompanyMilestoneProps = {
  startup: Startup & { milestone: NonNullable<Startup["milestone"]> };
};

export function CompanyMilestone({ startup }: CompanyMilestoneProps) {
  const headingId = `${startup.slug}-milestone-heading`;

  return (
    <article className="company-milestone" aria-labelledby={headingId} data-reveal>
      <figure className="company-milestone-photo image-reveal" data-reveal>
        <Image
          src={startup.milestone.image}
          alt={startup.milestone.imageAlt}
          fill
          sizes="(max-width: 720px) 92vw, (max-width: 1100px) 62vw, 760px"
        />
        <figcaption>
          <span>{startup.name}</span>
          <span>{startup.milestone.event}</span>
        </figcaption>
      </figure>

      <div className="company-milestone-result">
        <div>
          <p>Company milestone</p>
          <strong>
            <span aria-hidden="true">{startup.milestone.displayResult}</span>
            <span className="sr-only">{startup.milestone.result}</span>
          </strong>
          <h3 id={headingId}>{startup.name} at {startup.milestone.event}.</h3>
        </div>
        <dl>
          <div>
            <dt>Result</dt>
            <dd>{startup.milestone.result}</dd>
          </div>
          <div>
            <dt>Founders</dt>
            <dd>{startup.founders.join(" · ")}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
