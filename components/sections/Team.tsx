import Image from "next/image";
import { Section } from "../ui/Section";

export function Team() {
  return (
    <Section
      id="team"
      index="03"
      label="Team"
      title="Built by students. Proven in the room."
      intro="VisioCourt won second place at DECA States."
      className="team-section"
      tone="soft"
    >
      <div className="team-layout">
        <figure className="team-photo image-reveal" data-reveal>
          <Image
            src="/media/visiocourt-team.webp"
            alt="The VisioCourt team holding its second-place award at DECA States."
            fill
            sizes="(max-width: 720px) 92vw, (max-width: 1100px) 62vw, 760px"
          />
          <figcaption>
            <span>VisioCourt</span>
            <span>DECA States</span>
          </figcaption>
        </figure>

        <aside className="team-result" data-reveal aria-label="VisioCourt DECA result">
          <div>
            <p>Competition result</p>
            <strong>2nd</strong>
            <h3>DECA States</h3>
          </div>
          <dl>
            <div>
              <dt>Company</dt>
              <dd>VisioCourt</dd>
            </div>
            <div>
              <dt>Founders</dt>
              <dd>Vivaan · Ganesh · Sid</dd>
            </div>
          </dl>
        </aside>
      </div>
    </Section>
  );
}
