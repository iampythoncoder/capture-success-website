import Image from "next/image";
import type { CSSProperties } from "react";
import type { Startup } from "@/data/site";
import { PlusIcon } from "./Icons";
import { ProductVisual } from "./ProductVisual";
import { Button } from "./ui/Button";

type StartupCardProps = {
  startup: Startup;
  index: number;
};

export function StartupCard({ startup, index }: StartupCardProps) {
  return (
    <div
      className="startup-card-wrap"
      data-reveal
      style={{ "--delay": `${index * 90}ms` } as CSSProperties}
    >
      <article className={`startup-card startup-${startup.visual}`} data-tilt>
        <header className="startup-header">
          <div className="startup-identity">
            <span className="startup-logo">
              <Image
                src={startup.logo}
                alt=""
                width={48}
                height={48}
                sizes="48px"
              />
            </span>
            <div>
              <p>{startup.sector}</p>
              <h3>{startup.name}</h3>
            </div>
          </div>
          <span className="startup-index" aria-label={`Portfolio company ${index + 1}`}>
            0{index + 1}
          </span>
        </header>

        <ProductVisual type={startup.visual} />

        <p className="startup-one-liner">{startup.oneLiner}</p>

        <div className="founder-line">
          <span>Founders</span>
          <ul aria-label={`${startup.name} founders`}>
            {startup.founders.map((founder) => (
              <li key={founder}>{founder}</li>
            ))}
          </ul>
        </div>

        <div className="startup-actions">
          <details className="startup-details">
            <summary>
              <span>Details</span>
              <PlusIcon />
            </summary>
            <div className="startup-details-grid">
              <div>
                <p>{startup.detail}</p>
              </div>
            </div>
          </details>
          <Button
            href={startup.website}
            external
            variant="secondary"
            ariaLabel={`Visit ${startup.name} website (opens in a new tab)`}
          >
            Visit {startup.name}
          </Button>
        </div>
      </article>
    </div>
  );
}
