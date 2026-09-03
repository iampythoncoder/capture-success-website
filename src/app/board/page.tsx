import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ACCELERATOR_FORM, BOARD, COFOUNDERS, type Person } from "@/lib/site";

export const metadata: Metadata = {
  title: "Board",
  description: "The people behind Capture Success.",
};

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();
}

function Grid({ people }: { people: Person[] }) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((p) => (
        <div key={p.name} className="card flex items-center gap-3.5 p-5">
          <span
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-[14px] font-extrabold"
            style={{ background: "var(--color-surface-2)", color: "var(--color-blue)" }}
          >
            {initials(p.name)}
          </span>
          <p className="t-h3 text-[16px]">{p.name}</p>
        </div>
      ))}
    </div>
  );
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

      <section className="shell pb-10">
        <h2 className="t-h2">Co-founders</h2>
        <Grid people={COFOUNDERS} />
      </section>

      <section className="shell pb-14">
        <h2 className="t-h2">Board members</h2>
        <Grid people={BOARD} />
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
