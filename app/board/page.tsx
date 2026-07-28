import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { FounderCard } from "@/components/FounderCard";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { boardMembers, coFounders } from "@/data/board";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Board — Capture Success",
  description:
    "Meet the five co-founders and two board members behind Capture Success."
};

export default function BoardPage() {
  return (
    <>
      <Header currentHref="/board" />
      <main id="main-content" className={styles.page}>
        <section className={styles.hero} aria-labelledby="board-heading">
          <Container size="wide" className={styles.heroLayout}>
            <div className={styles.heroCopy} data-reveal>
              <p className={styles.eyebrow}>
                <span aria-hidden="true" />
                Board
              </p>
              <h1 id="board-heading">The people behind Capture Success.</h1>
              <p className={styles.intro}>Five co-founders. Two board members.</p>
            </div>

            <aside
              className={styles.governanceCard}
              data-reveal
              aria-label="Capture Success has five co-founders and two board members"
            >
              <div className={styles.governanceTop}>
                <span>Capture Success</span>
                <span>Board · 2026</span>
              </div>
              <div className={styles.total}>
                <strong>07</strong>
                <p>People</p>
              </div>
              <dl className={styles.counts}>
                <div>
                  <dt>Co-founders</dt>
                  <dd>05</dd>
                </div>
                <div>
                  <dt>Board members</dt>
                  <dd>02</dd>
                </div>
              </dl>
            </aside>
          </Container>
        </section>

        <section className={styles.cofounders} aria-labelledby="cofounders-heading">
          <Container>
            <div className={styles.sectionRule} aria-hidden="true">
              <span>01</span>
              <i />
              <span>Co-founders</span>
            </div>
            <header className={styles.sectionHeader} data-reveal>
              <h2 id="cofounders-heading">Co-founders</h2>
              <p>Five people started Capture Success.</p>
            </header>
            <ol
              className={styles.founderGrid}
              aria-label="Capture Success co-founders"
              tabIndex={0}
              data-stagger
            >
              {coFounders.map((person, index) => (
                <FounderCard
                  index={index + 1}
                  key={person.name}
                  name={person.name}
                  role={person.role}
                />
              ))}
            </ol>
          </Container>
        </section>

        <section className={styles.board} aria-labelledby="members-heading">
          <Container>
            <div className={styles.sectionRule} aria-hidden="true">
              <span>02</span>
              <i />
              <span>Board members</span>
            </div>
            <header className={styles.sectionHeader} data-reveal>
              <h2 id="members-heading">Board members</h2>
              <p>Two members serve on the board.</p>
            </header>
            <ol
              className={styles.boardGrid}
              aria-label="Capture Success board members"
              tabIndex={0}
              data-stagger
            >
              {boardMembers.map((person, index) => (
                <FounderCard
                  index={coFounders.length + index + 1}
                  key={person.name}
                  name={person.name}
                  role={person.role}
                  tone="dark"
                />
              ))}
            </ol>
          </Container>
        </section>

        <section className={styles.contact} aria-label="Join Capture Success">
          <Container>
            <CTA
              label="Work with us"
              title="Building a company?"
              body="Tell us what you are working on."
              primary={{
                label: "Apply as a founder",
                href: "/apply?type=founder"
              }}
              secondary={{
                label: "View the accelerator",
                href: "/accelerator"
              }}
            />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
