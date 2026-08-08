import Image from "next/image";
import type { Metadata } from "next";
import { FinnovateCarousel } from "@/components/FinnovateCarousel";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import {
  finnovateFacts,
  finnovatePhotos,
  type FinnovatePhoto
} from "@/data/finnovate";
import styles from "./page.module.css";

const carouselPhotos = [
  finnovatePhotos.judges,
  finnovatePhotos.award,
  finnovatePhotos.winners,
  finnovatePhotos.group
] as const;

export const metadata: Metadata = {
  title: "Finnovate — Capture Success",
  description:
    "Finnovate combined Startup Spotlight, a live pitch competition for 20+ student teams, with eight months of fintech publishing."
};

type EventImageProps = FinnovatePhoto & {
  className?: string;
  priority?: boolean;
  sizes: string;
};

function EventImage({
  src,
  alt,
  label,
  detail,
  className = "",
  priority = false,
  sizes
}: EventImageProps) {
  return (
    <figure
      className={`${styles.eventImage} ${className} image-reveal`}
      data-finnovate-photo
      data-reveal
    >
      <Image
        src={src}
        alt={alt}
        width={1560}
        height={1040}
        priority={priority}
        sizes={sizes}
      />
      <figcaption>
        <span>{label}</span>
        <span>{detail}</span>
      </figcaption>
    </figure>
  );
}

function FactStrip() {
  return (
    <dl className={styles.factStrip} aria-label="Startup Spotlight results">
      {finnovateFacts.map((fact) => (
        <div key={fact.label}>
          <dt>{fact.label}</dt>
          <dd>{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function FinnovatePage() {
  return (
    <>
      <Header currentHref="/finnovate" />
      <main id="main-content" className={styles.page}>
        <section className={styles.hero} aria-labelledby="finnovate-heading">
          <Container size="wide" className={styles.heroLayout}>
            <h1 id="finnovate-heading" data-reveal>
              FINNOVATE
            </h1>

            <div className={styles.heroMedia}>
              <EventImage
                {...finnovatePhotos.hero}
                priority
                sizes="(max-width: 720px) 92vw, (max-width: 1024px) 88vw, 720px"
              />
              <FactStrip />
            </div>
          </Container>
        </section>

        <section className={styles.spotlight} aria-labelledby="spotlight-heading">
          <Container>
            <header className={styles.sectionIntro} data-reveal>
              <h2 id="spotlight-heading" className="sr-only">
                Startup Spotlight
              </h2>
              <p>
                More than 20 teams presented their ventures to six business professionals.
                The top three shared more than $2,500 in prize money.
              </p>
            </header>

            <FinnovateCarousel photos={carouselPhotos} />
          </Container>
        </section>

        <section className={styles.publication} aria-labelledby="publication-heading">
          <Container className={styles.publicationGrid}>
            <div className={styles.publicationCopy} data-reveal>
              <p className={styles.eyebrow}>Finnovate on Substack</p>
              <h2 id="publication-heading">Eight months on Substack.</h2>
              <p>
                Finnovate published student-focused explanations of current fintech topics
                about once a week.
              </p>
            </div>

            <div className={styles.publicationSummary} data-reveal>
              <div className={styles.monthCount}>
                <strong>08</strong>
                <span>Months published</span>
              </div>
              <dl>
                <div>
                  <dt>Cadence</dt>
                  <dd>About weekly</dd>
                </div>
              </dl>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
