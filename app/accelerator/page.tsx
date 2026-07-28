import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import {
  ACCELERATOR_ATTENDANCE_URL,
  acceleratorBenefits,
  acceleratorProgram,
  acceleratorSessions,
  type AcceleratorBenefit,
  type AcceleratorSession
} from "@/data/accelerator";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Student Accelerator — Capture Success",
  description:
    "A six-week, in-person accelerator for Duke student-led startups, meeting Mondays from August 31 through October 5, 2026, at Frontier RTP."
};

type ProgramFactProps = {
  label: string;
  children: ReactNode;
};

function ProgramFact({ label, children }: ProgramFactProps) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function WeekCard({ session }: { session: AcceleratorSession }) {
  const week = String(session.week).padStart(2, "0");

  return (
    <li className={styles.weekCard} data-reveal>
      <div className={styles.weekTop}>
        <span>Week {week}</span>
        <time dateTime={session.date}>{session.dateLabel}</time>
      </div>
      <h3>{session.title}</h3>
      <ul className={styles.topicList}>
        {session.topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </li>
  );
}

function BenefitRow({
  benefit,
  index
}: {
  benefit: AcceleratorBenefit;
  index: number;
}) {
  return (
    <li className={styles.benefitRow} data-reveal>
      <span>{String(index + 1).padStart(2, "0")}</span>
      <h3>{benefit.title}</h3>
      <p>{benefit.description}</p>
    </li>
  );
}

export default function AcceleratorPage() {
  return (
    <>
      <Header currentHref="/accelerator" />
      <main id="main-content" className={styles.page}>
        <section className={styles.hero} aria-labelledby="accelerator-heading">
          <Container className={styles.heroLayout}>
            <div className={styles.heroCopy} data-reveal>
              <div className={styles.dukeContext} aria-label="Duke student accelerator">
                <span>Duke</span>
                <p>Student Accelerator · Fall 2026</p>
              </div>
              <h1 id="accelerator-heading">Six weeks to move your startup forward.</h1>
              <p className={styles.intro}>
                An in-person program for Duke student-led startups. Meet every Monday from
                August 31 through October 5 at Frontier RTP.
              </p>
              <div className={styles.heroActions}>
                <Button
                  href={ACCELERATOR_ATTENDANCE_URL}
                  external
                  ariaLabel="Apply for the 2026 Capture Success Student Accelerator"
                >
                  Apply for the cohort
                </Button>
                <Button href="#program" variant="text">
                  See the six weeks
                </Button>
              </div>
            </div>

            <aside
              className={styles.cohortCard}
              data-reveal
              aria-label="Fall 2026 accelerator schedule"
            >
              <div className={styles.cohortBrand}>
                <strong>Duke</strong>
                <span>Fall 2026</span>
              </div>
              <div className={styles.cohortCount}>
                <strong>{acceleratorProgram.durationWeeks}</strong>
                <div>
                  <span>Weeks</span>
                  <p>One focused stage each Monday.</p>
                </div>
              </div>
              <dl className={styles.cohortDetails}>
                <ProgramFact label="Dates">
                  <time dateTime={acceleratorProgram.startDate}>Aug 31</time>
                  <span aria-hidden="true">—</span>
                  <time dateTime={acceleratorProgram.endDate}>Oct 5, 2026</time>
                </ProgramFact>
                <ProgramFact label="Time">{acceleratorProgram.time.label}</ProgramFact>
                <ProgramFact label="Venue">
                  {acceleratorProgram.location.venue}
                  <span> · {acceleratorProgram.location.building}</span>
                </ProgramFact>
              </dl>
              <div className={styles.cohortFooter}>
                <span aria-hidden="true" />
                <p>{acceleratorProgram.format}</p>
              </div>
            </aside>
          </Container>
        </section>

        <section className={styles.overview} aria-labelledby="overview-heading">
          <Container>
            <header className={styles.overviewHeader} data-reveal>
              <p className={styles.eyebrow}>The program</p>
              <div>
                <h2 id="overview-heading">From problem to pitch.</h2>
                <p>
                  The work moves from customer evidence to an MVP, a business model, and a
                  presentation that shows measurable progress.
                </p>
              </div>
            </header>

            <dl
              className={styles.programFacts}
              data-stagger
              aria-label="Program schedule summary"
              tabIndex={0}
            >
              <ProgramFact label="Length">6 weeks</ProgramFact>
              <ProgramFact label="Cadence">Every Monday</ProgramFact>
              <ProgramFact label="Hours">6:00–8:00 PM</ProgramFact>
              <ProgramFact label="Location">Frontier RTP · Building 600</ProgramFact>
            </dl>
          </Container>
        </section>

        <section
          className={styles.schedule}
          id="program"
          aria-labelledby="schedule-heading"
        >
          <Container>
            <header className={styles.sectionHeader} data-reveal>
              <p className={styles.eyebrow}>The six weeks</p>
              <div>
                <h2 id="schedule-heading">Every Monday has a job.</h2>
                <p>
                  Define the problem. Test the demand. Build the product. Make the business
                  work. Tell the story.
                </p>
              </div>
            </header>

            <ol
              className={styles.weekGrid}
              data-stagger
              aria-label="Six-week curriculum"
              tabIndex={0}
            >
              {acceleratorSessions.map((session) => (
                <WeekCard session={session} key={session.week} />
              ))}
            </ol>
          </Container>
        </section>

        <section className={styles.benefits} aria-labelledby="benefits-heading">
          <Container className={styles.benefitsLayout}>
            <header className={styles.benefitsHeader} data-reveal>
              <p className={styles.eyebrow}>What participants get</p>
              <h2 id="benefits-heading">Support tied to the work.</h2>
              <p>
                Workshops, direct feedback, and the people who can help a student venture
                take its next real step.
              </p>
            </header>

            <ol className={styles.benefitList} data-stagger>
              {acceleratorBenefits.map((benefit, index) => (
                <BenefitRow benefit={benefit} index={index} key={benefit.title} />
              ))}
            </ol>
          </Container>
        </section>

        <section className={styles.showcase} aria-labelledby="showcase-heading">
          <Container className={styles.showcaseLayout}>
            <div className={styles.showcaseCopy} data-reveal>
              <p className={styles.eyebrow}>Week 06 · Final showcase</p>
              <h2 id="showcase-heading">Present what changed.</h2>
              <p>
                Teams close the program by presenting their ventures to mentors, judges,
                founders, and startup-community partners.
              </p>
            </div>

            <div
              className={styles.showcaseDiagram}
              data-reveal
              role="img"
              aria-label="Final showcase with a presenting team and an audience of mentors, judges, founders, and startup partners"
            >
              <div className={styles.stage}>
                <span>Team presentation</span>
                <strong>06</strong>
              </div>
              <div className={styles.audience}>
                {["Mentors", "Judges", "Founders", "Startup partners"].map((group) => (
                  <span key={group}>{group}</span>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.registration} aria-label="Accelerator application">
          <Container>
            <CTA
              label="Fall 2026 cohort"
              title="Build with us this fall."
              body="Tell us what you are building and what you want to accomplish across six Mondays."
              primary={{
                label: "Open the application",
                href: ACCELERATOR_ATTENDANCE_URL,
                external: true
              }}
            />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
