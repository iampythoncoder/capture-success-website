import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import { ACCELERATOR_FORM, FINNOVATE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Finnovate",
  description:
    "Finnovate ran Startup Spotlight — 20+ teams pitching to six business professionals for $2,500+ in prizes.",
};

export default function FinnovatePage() {
  return (
    <>
      <section className="shell pt-12 pb-10">
        <Reveal>
          <p className="t-kicker">Finnovate · Live pitch competition</p>
          <h1 className="t-hero mt-2 max-w-[14ch]">Startup Spotlight.</h1>
          <p className="t-lead prose-w mt-5">
            More than 20 teams presented their ventures to six business
            professionals. The top three shared more than $2,500 in prize money.
          </p>
        </Reveal>
      </section>

      <section className="shell pb-14">
        <div className="tile grid gap-8 p-8 sm:grid-cols-2 lg:grid-cols-4 lg:p-10">
          {FINNOVATE.stats.map((s) => (
            <div key={s.label}>
              <p className="t-num text-[2.25rem] leading-none">{s.value}</p>
              <p className="muted mt-2 text-[14.5px]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell pb-16">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="t-kicker">The event</p>
              <h2 className="t-h2 mt-2">Built with our DECA chapter</h2>
            </div>
            <p className="soft max-w-[30ch] text-[14px]">
              Click any photo to open it. Arrow keys move through the set.
            </p>
          </div>
        </Reveal>
        <div className="mt-8">
          <Gallery />
        </div>
      </section>

      <section className="shell pb-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="t-kicker">Finnovate on Substack</p>
            <h2 className="t-h2 mt-2">Eight months of writing</h2>
            <p className="t-lead mt-4">
              Student-focused explanations of current fintech topics, published
              about once a week — turning the news into something a high
              schooler could actually use.
            </p>
          </Reveal>
          <Reveal delay={70}>
            <dl className="card rows p-6">
              {[
                ["Months published", "8"],
                ["Cadence", "About weekly"],
                ["Audience", "Students"],
                ["Focus", "Current fintech topics"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-6 py-3"
                >
                  <dt className="soft text-[14px]">{k}</dt>
                  <dd className="text-[15px] font-bold">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="shell pb-4">
        <div className="on-blue flex flex-wrap items-center justify-between gap-5 rounded-[18px] p-8">
          <p className="max-w-[26ch] text-[20px] font-extrabold tracking-[-0.025em]">
            The Fall 2026 cohort ends in a pitch night too.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={ACCELERATOR_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white"
            >
              Apply to the cohort
            </a>
            <Link
              href="/accelerator"
              className="btn"
              style={{ border: "1px solid rgba(255,255,255,.35)", color: "#fff" }}
            >
              View the accelerator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
