import Image from "next/image";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

function NetworkSnapshot() {
  return (
    <aside
      className="network-snapshot"
      data-reveal
      aria-label="Capture Success network snapshot"
    >
      <div className="snapshot-header">
        <span>Capture Success</span>
        <span>Network index</span>
      </div>
      <div className="snapshot-count">
        <strong>10+</strong>
        <span>student-led startups</span>
      </div>
      <div className="snapshot-featured">
        <p>Featured</p>
        <ol>
          <li>
            <span>01</span>
            <Image src="/portfolio/pyrosight-mark.svg" alt="" width={34} height={34} />
            <div>
              <strong>PyroSight</strong>
              <small>Firefighter safety</small>
            </div>
          </li>
          <li>
            <span>02</span>
            <Image src="/portfolio/visiocourt-mark.webp" alt="" width={34} height={34} />
            <div>
              <strong>VisioCourt</strong>
              <small>Sports operations</small>
            </div>
          </li>
          <li>
            <span>03</span>
            <i aria-hidden="true">$</i>
            <div>
              <strong>$20K+ raised</strong>
              <small>Across the network</small>
            </div>
          </li>
        </ol>
      </div>
    </aside>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <Container size="wide" className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true" />
            Student startup network
          </p>
          <h1 id="hero-heading">
            10+ startups.
            <br />
            Built by <em>students.</em>
          </h1>
          <p className="hero-intro">
            Capture Success brings founders and builders together to turn specific problems into
            products people can test.
          </p>
          <div className="hero-actions">
            <Button href="#portfolio">Explore companies</Button>
            <Button href="/apply?type=builder" variant="text" newTab>
              Apply to build
            </Button>
          </div>
        </div>
        <NetworkSnapshot />
      </Container>
    </section>
  );
}
