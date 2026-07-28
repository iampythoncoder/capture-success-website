import Image from "next/image";
import { Section } from "../ui/Section";

export function Mission() {
  return (
    <Section
      id="mission"
      index="01"
      label="Mission"
      title="Student founders should not have to build alone."
      intro="Capture Success is where student-led companies find teammates, product feedback, and a path to early funding."
      className="mission-section"
    >
      <div className="mission-layout">
        <figure className="mission-image image-reveal" data-reveal>
          <Image
            src="/media/community-crowd.webp"
            alt="Student founders and collaborators gathered at a Capture Success community event."
            fill
            sizes="(max-width: 767px) 92vw, (max-width: 1100px) 56vw, 700px"
          />
          <figcaption>
            <span>Capture Success network</span>
            <span>10+ companies</span>
          </figcaption>
        </figure>

        <aside className="mission-note" data-reveal>
          <p className="eyebrow">Why it exists</p>
          <h3>A real company is hard enough. Finding the right people should not be.</h3>
          <p>
            The network brings founders and builders into the same room, around work that already
            needs to get done.
          </p>
        </aside>
      </div>
    </Section>
  );
}
