import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import PartnerWall from "@/components/PartnerWall";
import Reveal from "@/components/Reveal";
import WeekRail from "@/components/WeekRail";
import {
  ACCELERATOR,
  ACCELERATOR_FORM,
  BENEFITS,
  FAQ,
  HOW_TO_JOIN,
  SITE,
  WEEKS,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Student Accelerator",
  description: `A free six-week accelerator for student founders in grades 9 and up. ${ACCELERATOR.rangeLabel}, Mondays ${ACCELERATOR.time} at ${ACCELERATOR.venue.name}, ${ACCELERATOR.venue.building}.`,
};

const FACTS = [
  ["Dates", ACCELERATOR.rangeLabel],
  ["Sessions", `Six Mondays · ${ACCELERATOR.time}`],
  ["Eligibility", ACCELERATOR.grades],
  ["Venue", `${ACCELERATOR.venue.name}, ${ACCELERATOR.venue.building}`],
  ["Cost", "Free — dinner every session"],
  ["Closing night", ACCELERATOR.pitch],
];

export default function AcceleratorPage() {
  return (
    <>
      <section className="shell grid items-center gap-12 pt-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal>
          <span className="pill">
            <span className="dot" />
            Applications open · {ACCELERATOR.cohort}
          </span>
          <h1 className="t-hero mt-5 max-w-[15ch]">
            Six weeks to turn your idea into a real startup.
          </h1>
          <p className="t-lead prose-w mt-5">
            A free, in-person program for student founders in grades 9 and up.
            Come solo and we will match you with a team, or bring your own. From
            Chapel Hill to RTP, we plug student teams straight into the Triangle
            startup scene.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={ACCELERATOR_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Apply for the cohort
            </a>
            <Link href="#weeks" className="btn btn-outline">
              See the six weeks
            </Link>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="card p-6">
            <p className="t-kicker">First session begins in</p>
            <div className="mt-3">
              <Countdown iso={ACCELERATOR.startsAt} />
            </div>
            <dl className="rows mt-6">
              {FACTS.map(([k, v]) => (
                <div
                  key={k}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3"
                >
                  <dt className="soft text-[14px]">{k}</dt>
                  <dd className="text-right text-[14.5px] font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
            <a
              href={ACCELERATOR.venue.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="lnk mt-4 text-[14.5px]"
            >
              {ACCELERATOR.venue.street}, {ACCELERATOR.venue.city}{" "}
              <span aria-hidden>↗</span>
            </a>
          </div>
        </Reveal>
      </section>

      <section className="shell pb-20">
        <Reveal>
          <PartnerWall
            heading="The room we put you in"
            blurb="Six weeks inside the Triangle startup scene, with the organizations that actually build here."
          />
        </Reveal>
      </section>

      <section id="weeks" className="on-navy scroll-mt-24">
        <div className="shell py-20">
          <Reveal>
            <p className="t-kicker" style={{ color: "var(--color-brand)" }}>
              The programme
            </p>
            <h2 className="t-h2 mt-2">Six weeks. Real deadlines.</h2>
            <p
              className="mt-3 max-w-[54ch] text-[17px]"
              style={{ color: "rgba(255,255,255,.75)" }}
            >
              Define the problem, test the demand, build the product, make the
              business work, tell the story.
            </p>
          </Reveal>
          <div className="mt-8">
            <WeekRail />
          </div>
        </div>
      </section>

      <section className="shell py-20">
        <Reveal>
          <p className="t-kicker">What participants get</p>
          <h2 className="t-h2 mt-2">Support tied to the work</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.n} delay={(i % 4) * 60}>
              <div className="card h-full p-5">
                <p className="t-num text-[15px]" style={{ color: "var(--color-blue)" }}>
                  {b.n}
                </p>
                <p className="t-h3 mt-3 text-[16px]">{b.title}</p>
                <p className="muted mt-2 text-[14.5px]">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell pb-20">
        <div className="tile grid gap-10 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <Reveal>
            <p className="t-kicker">How to join</p>
            <h2 className="t-h2 mt-2 max-w-[14ch]">Bring your team. Sign up.</h2>
            <a
              href={ACCELERATOR_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-6"
            >
              Open the application
            </a>
            <p className="soft mt-3 text-[14px]">
              About two minutes — we care about the idea, not the essay.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="rows">
              {HOW_TO_JOIN.map((h) => (
                <div key={h.n} className="flex gap-4 py-4 first:pt-0">
                  <span
                    className="t-num shrink-0 text-[15px]"
                    style={{ color: "var(--color-blue)" }}
                  >
                    {h.n}
                  </span>
                  <div>
                    <p className="t-h3 text-[16px]">{h.title}</p>
                    <p className="muted mt-1 text-[14.5px]">{h.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell pb-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="t-kicker">Questions</p>
            <h2 className="t-h2 mt-2">Before you apply</h2>
            <p className="muted mt-4 max-w-[30ch] text-[15px]">
              Still unsure? Email{" "}
              <a href={`mailto:${SITE.email}`} className="lnk">
                {SITE.email}
              </a>
            </p>
          </Reveal>
          <Reveal delay={70}>
            <div className="card divide-y overflow-hidden">
              {FAQ.map((f) => (
                <details key={f.q} className="group px-5 py-4">
                  <summary className="t-h3 flex cursor-pointer list-none items-start justify-between gap-6 text-[16px]">
                    {f.q}
                    <span
                      aria-hidden
                      className="mt-0.5 shrink-0 transition-transform duration-200 group-open:rotate-45"
                      style={{ color: "var(--color-blue)" }}
                    >
                      +
                    </span>
                  </summary>
                  <p className="muted mt-2 max-w-[62ch] text-[15px]">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell pb-4">
        <Reveal>
          <div className="on-blue grid items-center gap-8 rounded-[18px] p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div>
              <p className="text-[26px] font-extrabold leading-tight tracking-[-0.03em]">
                Build with us this fall.
              </p>
              <p className="mt-3 text-[16px]" style={{ color: "rgba(255,255,255,.85)" }}>
                {ACCELERATOR.rangeLabel} · Mondays {ACCELERATOR.time} ·{" "}
                {ACCELERATOR.venue.name} · Free. {WEEKS[5].title} on{" "}
                {WEEKS[5].date}.
              </p>
              <a
                href={ACCELERATOR_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white mt-6"
              >
                Open the application
              </a>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px]">
              <Image
                src="/media/finnovate/award-presentation.webp"
                alt="Award presentation at a Capture Success event"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
