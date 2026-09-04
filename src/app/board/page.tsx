import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ACCELERATOR_FORM, PEOPLE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Board",
  description: "The people who run Capture Success.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function BoardPage() {
  return (
    <>
      <section className="shell pt-12 pb-10">
        <Reveal>
          <p className="t-kicker">Board · 2026</p>
          <h1 className="t-hero mt-2 max-w-[16ch]">The people behind it.</h1>
        </Reveal>
      </section>

      <section className="shell pb-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PEOPLE.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 60}>
              <div className="card flex items-center gap-4 p-5">
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-full text-[15px] font-extrabold"
                  style={{
                    background: "var(--color-surface-2)",
                    color: "var(--color-blue)",
                  }}
                >
                  {initials(p.name)}
                </span>
                <div className="min-w-0">
                  <p className="t-h3 truncate text-[17px]">{p.name}</p>
                  <p className="soft text-[13.5px]">{p.role}</p>
                  {p.founder && (
                    <p
                      className="mt-0.5 text-[12px] font-bold"
                      style={{ color: "var(--color-blue)" }}
                    >
                      Co-founder
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell pb-4">
        <div className="tile flex flex-wrap items-center justify-between gap-5 p-8">
          <p className="t-h2 max-w-[22ch] text-[24px]">
            Building something? Tell us about it.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={ACCELERATOR_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Apply to the cohort
            </a>
            <Link href="/apply?type=founder" className="btn btn-outline">
              Apply as a founder
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
