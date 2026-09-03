import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CourtBoard, ThermalView } from "@/components/CompanyVisuals";
import { ResinScan } from "@/components/ResinScan";
import {
  ACCELERATOR_FORM,
  ALSO_BUILDING,
  COMPANY_COLORS,
  FEATURED,
  MORRISVILLE_SITES,
  type Company,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Companies",
  description:
    "The ten student-led companies in the Capture Success network — PyroSight, VisioCourt, Beacon, Resyn, and the teams building alongside them.",
};

function Profile({ c, flip }: { c: Company; flip: boolean }) {
  return (
    <article className="shell border-t py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
        <div className={flip ? "lg:order-2" : "lg:order-1"}>
          <div className="flex items-center gap-3">
            {c.logo ? (
              c.logo.endsWith(".svg") ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  className="h-12 w-12 rounded-xl object-cover"
                />
              ) : (
                <Image
                  src={c.logo}
                  alt={`${c.name} logo`}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-xl object-cover"
                />
              )
            ) : (
              <span
                className="grid h-12 w-12 place-items-center rounded-xl text-[15px] font-extrabold text-white"
                style={{ background: COMPANY_COLORS[c.name] ?? "var(--color-blue)" }}
              >
                {c.name.slice(0, 2).toUpperCase()}
              </span>
            )}
            <div>
              <h2 className="t-h2 text-[26px]">{c.name}</h2>
              <p className="soft text-[14px]">{c.sector}</p>
            </div>
          </div>

          {c.about?.map((para) => (
            <p key={para.slice(0, 24)} className="muted mt-4 max-w-[62ch] text-[15.5px]">
              {para}
            </p>
          ))}

          {c.highlights && (
            <div className="mt-6 grid grid-cols-3 gap-3">
              {c.highlights.map((h) => (
                <div key={h.label} className="tile p-4">
                  <p className="t-num text-[19px] leading-tight">{h.value}</p>
                  <p className="soft mt-1 text-[12.5px] leading-snug">{h.label}</p>
                </div>
              ))}
            </div>
          )}

          {c.name === "VisioCourt" && (
            <div className="card mt-5 p-5">
              <p className="t-kicker">Live deployment</p>
              <p className="mt-1 text-[15px] font-bold">
                Town of Morrisville facilities
              </p>
              <ul className="mt-2 space-y-1">
                {MORRISVILLE_SITES.map((s) => (
                  <li key={s} className="muted flex items-center gap-2 text-[14.5px]">
                    <span className="dot" />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="soft mt-2 text-[13.5px]">
                Live tennis and pickleball status across Morrisville parks. App
                coming soon.
              </p>
            </div>
          )}

          {c.capabilities && (
            <div className="mt-6">
              <p className="t-kicker">What it does</p>
              <ul className="mt-3 space-y-2">
                {c.capabilities.map((cap) => (
                  <li key={cap} className="muted flex gap-3 text-[14.5px]">
                    <span className="dot mt-[9px]" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-7 flex flex-wrap items-center gap-5">
            {c.href && (
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Visit {c.name.replace(/\.$/, "").toLowerCase()} ↗
              </a>
            )}
            {c.founders && (
              <p className="soft text-[14px]">
                Founders · {c.founders.join(", ")}
              </p>
            )}
          </div>
        </div>

        <div className={flip ? "lg:order-1" : "lg:order-2"}>
          {c.name === "PyroSight" && <ThermalView />}
          {c.name === "VisioCourt" && <CourtBoard />}
          {c.name === "Resyn." && <ResinScan />}
          {c.image && (
            <figure
              className={`${c.name === "VisioCourt" ? "mt-5 " : ""}mx-auto`}
              style={c.image.narrow ? { maxWidth: 360 } : undefined}
            >
              <div
                className="relative w-full overflow-hidden rounded-[14px]"
                style={{ aspectRatio: c.image.aspect }}
              >
                <Image
                  src={c.image.src}
                  alt={c.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="soft mt-2 text-[13.5px]">
                {c.image.caption}
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </article>
  );
}

export default function CompaniesPage() {
  return (
    <>
      <section className="shell pt-12 pb-10">
        <Reveal>
          <p className="t-kicker">Portfolio</p>
          <h1 className="t-hero mt-2 max-w-[18ch]">
            Ten companies, built by students.
          </h1>
          <p className="t-lead prose-w mt-5">
            What they are, what they have shipped, and what they have won. Four
            are profiled in full below.
          </p>
        </Reveal>
      </section>

      <section className="shell pb-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[...FEATURED, ...ALSO_BUILDING].map((c) => (
            <div key={c.name} className="card px-4 py-3.5">
              <p className="text-[15px] font-bold tracking-[-0.015em]">{c.name}</p>
              <p className="soft mt-0.5 text-[12.5px]">{c.sector}</p>
            </div>
          ))}
        </div>
      </section>

      {FEATURED.map((c, i) => (
        <Profile key={c.name} c={c} flip={i % 2 === 1} />
      ))}

      <section className="shell border-t py-16">
        <Reveal>
          <p className="t-kicker">Also building</p>
          <h2 className="t-h2 mt-2">Six more teams in the network</h2>
          <p className="t-lead mt-3 max-w-[54ch]">
            Earlier or still heads-down. Profiles go up as they ship.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ALSO_BUILDING.map((c) => (
            <div key={c.name} className="card flex items-center gap-3 p-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.logo}
                alt={`${c.name} logo`}
                className="h-10 w-10 shrink-0 rounded-lg"
              />
              <div>
                <p className="t-h3 text-[16px]">{c.name}</p>
                <p className="soft text-[13px]">{c.sector}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="shell pb-4">
        <div className="on-blue flex flex-wrap items-center justify-between gap-5 rounded-[18px] p-8">
          <div>
            <p className="text-[22px] font-extrabold tracking-[-0.028em]">
              Want your company on this page?
            </p>
            <p className="mt-1 text-[15px]" style={{ color: "rgba(255,255,255,.85)" }}>
              The Fall 2026 accelerator is how most of these teams started.
            </p>
          </div>
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
              href="/apply?type=founder"
              className="btn"
              style={{ border: "1px solid rgba(255,255,255,.35)", color: "#fff" }}
            >
              Submit your startup
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
