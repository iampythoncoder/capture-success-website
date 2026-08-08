import { additionalStartups, startups } from "@/data/site";
import { CompanyTile } from "../CompanyTile";
import { CompanyMilestone } from "../CompanyMilestone";
import { StartupCard } from "../StartupCard";
import { Section } from "../ui/Section";

export function Portfolio() {
  return (
    <Section
      id="portfolio"
      index="02"
      label="Companies"
      title="Companies in the network."
      intro="PyroSight and VisioCourt in focus. More teams are building."
      className="portfolio-section"
      tone="soft"
    >
      <div
        className="portfolio-grid"
        data-stagger
        role="region"
        aria-label="Portfolio companies"
        tabIndex={0}
      >
        {startups.map((startup, index) => (
          <StartupCard startup={startup} index={index} key={startup.slug} />
        ))}
      </div>

      <div className="portfolio-milestones">
        {startups.map((startup) =>
          startup.milestone ? (
            <CompanyMilestone
              startup={{ ...startup, milestone: startup.milestone }}
              key={`${startup.slug}-milestone`}
            />
          ) : null
        )}
      </div>

      <div className="portfolio-more">
        <div className="portfolio-more-header">
          <p>Also building</p>
          <span>{String(additionalStartups.length).padStart(2, "0")} companies</span>
        </div>
        <div
          className="company-grid"
          data-stagger
          role="region"
          aria-label="More companies in the Capture Success network"
          tabIndex={0}
        >
          {additionalStartups.map((company, index) => (
            <CompanyTile
              name={company}
              index={startups.length + index}
              key={company}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
