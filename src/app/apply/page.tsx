import type { Metadata } from "next";
import { Suspense } from "react";
import ApplyForm from "@/components/ApplyForm";
import Reveal from "@/components/Reveal";
import { ACCELERATOR, ACCELERATOR_FORM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to Capture Success as a founder, a builder, or a partner — or apply to the Fall 2026 student accelerator.",
};

export default function ApplyPage() {
  return (
    <>
      <section className="shell pt-12 pb-10">
        <Reveal>
          <p className="t-kicker">Applications</p>
          <h1 className="t-hero mt-2 max-w-[16ch]">
            Tell us what you want to build.
          </h1>
          <p className="t-lead prose-w mt-5">
            Pick the track that fits. Fill in the form and we open a structured
            email draft with every answer already in it.
          </p>
        </Reveal>
      </section>

      <section className="shell pb-12">
        <Reveal>
          <a
            href={ACCELERATOR_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="on-blue flex flex-wrap items-center justify-between gap-5 rounded-[18px] p-7 transition-transform hover:-translate-y-0.5"
          >
            <div>
              <p className="text-[13px] font-bold" style={{ color: "rgba(255,255,255,.75)" }}>
                Applying to the {ACCELERATOR.cohort} accelerator?
              </p>
              <p className="mt-1 text-[19px] font-extrabold tracking-[-0.022em]">
                That has its own two-minute application.
              </p>
              <p className="mt-1 text-[14px]" style={{ color: "rgba(255,255,255,.75)" }}>
                {ACCELERATOR.rangeLabel} · Mondays {ACCELERATOR.time} ·{" "}
                {ACCELERATOR.venue.name} · Free
              </p>
            </div>
            <span className="btn btn-white">Open the cohort application ↗</span>
          </a>
        </Reveal>
      </section>

      <section className="shell pb-4">
        <Suspense fallback={<div className="h-[480px]" aria-hidden />}>
          <ApplyForm />
        </Suspense>
      </section>
    </>
  );
}
