import type { Metadata } from "next";
import { ApplicationForm } from "@/components/apply/ApplicationForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { normalizeApplicationType } from "@/data/applications";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Apply — Capture Success",
  description:
    "Submit a startup, apply to join a team, or start a partnership conversation with Capture Success."
};

type ApplyPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const firstValue = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value[0] : value;

export default async function ApplyPage({ searchParams }: ApplyPageProps) {
  const params = await searchParams;
  const legacyMode = firstValue(params.mode);
  const legacyType =
    legacyMode === "join" ? "builder" : legacyMode === "partner" ? "partner" : "founder";
  const initialType = normalizeApplicationType(firstValue(params.type) ?? legacyType);

  return (
    <>
      <Header showApplyCta={false} />
      <main id="main-content" className={styles.page}>
        <section className={styles.hero} aria-labelledby="apply-heading">
          <Container>
            <p className={styles.eyebrow}>Applications</p>
            <h1 id="apply-heading">Tell us what you want to build.</h1>
            <p className={styles.intro}>
              Complete the form. We open a structured email draft with every answer filled in.
            </p>
          </Container>
        </section>
        <ApplicationForm initialType={initialType} />
      </main>
      <Footer />
    </>
  );
}
