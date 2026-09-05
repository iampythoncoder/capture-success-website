import Image from "next/image";
import Link from "next/link";
import PartnerWall from "@/components/PartnerWall";
import { IconArrow, IconHandshake, IconRocket, IconWrench } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import {
  ACCELERATOR,
  ACCELERATOR_FORM,
  ALSO_BUILDING,
  FEATURED,
  MILESTONES,
  SITE,
  WEEKS,
} from "@/lib/site";

const STATS = [
  { v: 10, suffix: "", l: "Student-led companies" },
  { v: 3, suffix: "", l: "Town facilities running our tech" },
  { v: 6, suffix: "", l: "Weeks, free, in person" },
  { v: 12, suffix: "", l: "Triangle partners" },
];

const WAYS = [
  {
    icon: IconRocket,
    kind: "Founder",
    body: "You are building something and want teammates, feedback, and a path to early funding.",
    href: "/apply?type=founder",
  },
  {
    icon: IconWrench,
    kind: "Builder",
    body: "You can design, code, sell, or research — and want real work on a real company.",
    href: "/apply?type=builder",
  },
  {
    icon: IconHandshake,
    kind: "Partner",
    body: "You can offer mentorship, space, resources, or funding to student ventures.",
    href: "/apply?type=partner",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="shell grid items-center gap-12 pt-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-16">
        <Reveal>
          <span className="pill">
            <span className="dot" />
            Applications open · Fall 2026
          </span>

          <h1 className="t-hero mt-5 max-w-[16ch]">
            Where students build real companies.
          </h1>

          <p className="t-lead prose-w mt-5">
            Capture Success is a student startup network in the Triangle. We run
            a free six-week accelerator and back ten student-led companies with
            teammates, mentorship, and the people who actually build here.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={ACCELERATOR_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Apply to the Fall 2026 cohort
            </a>
            <Link href="/accelerator" className="btn btn-outline">
              How it works
            </Link>
          </div>

          <p className="soft mt-5 text-[14.5px]">
            {ACCELERATOR.rangeLabel} · Mondays {ACCELERATOR.time} ·{" "}
            {ACCELERATOR.venue.name} · Free
          </p>
        </Reveal>

        <Reveal delay={90}>
          <div className="photo-pop relative mr-3.5 mb-3.5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px]">
              <Image
                src="/media/beacon-tye-regionals.jpg"
                alt="The Beacon team after winning TYE Regionals"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
            <div className="card absolute -bottom-6 -left-4 max-w-[16rem] p-4 sm:-left-8">
              <p className="t-kicker">Beacon · TYE Regionals</p>
              <p className="mt-1 text-[15px] font-semibold leading-snug">
                Our first cohort team won $1,000 and a place at nationals.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Ticker ────────────────────────────────────────────────────── */}
      <section aria-hidden className="overflow-hidden border-y py-3.5">
        <div className="marquee-track flex w-max items-center whitespace-nowrap">
          {[...Array(2)].flatMap((_, r) =>
            [...FEATURED, ...ALSO_BUILDING].map((c, i) => (
              <span
                key={`${r}-${c.name}`}
                className="flex items-center text-[14px] font-semibold"
                style={{
                  color: "var(--color-body)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {c.name}
                <span
                  className="mx-5 h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--color-brand)" }}
                />
              </span>
            )),
          )}
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────── */}
      <section className="shell">
        <div className="tile grid gap-8 p-8 sm:grid-cols-2 lg:grid-cols-4 lg:p-10">
          {STATS.map((s) => (
            <div key={s.l}>
              <p className="t-num text-[2.5rem] leading-none">
                <CountUp to={s.v} suffix={s.suffix} />
              </p>
              <p className="muted mt-2 text-[14.5px]">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Partners ──────────────────────────────────────────────────── */}
      <section className="shell py-20">
        <Reveal>
          <PartnerWall />
        </Reveal>
      </section>

      {/* ── Companies ─────────────────────────────────────────────────── */}
      <section id="companies" className="shell scroll-mt-24 pb-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="t-kicker">Portfolio</p>
              <h2 className="t-h2 mt-2">Ten companies, built by students</h2>
            </div>
            <Link href="/companies" className="lnk">
              See all companies <IconArrow size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((c, i) => (
            <Reveal key={c.name} delay={i * 70}>
              <Link
                href="/companies"
                className="card card-lift flex h-full flex-col p-5"
              >
                {c.logo ? (
                  c.logo.endsWith(".svg") ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={c.logo}
                      alt={`${c.name} logo`}
                      className="h-10 w-10 rounded-lg object-cover"
                    />
                  ) : (
                    <Image
                      src={c.logo}
                      alt={`${c.name} logo`}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-lg object-cover"
                    />
                  )
                ) : (
                  <span
                    className="grid h-10 w-10 place-items-center rounded-lg text-[13px] font-extrabold"
                    style={{
                      background: "var(--color-surface-2)",
                      color: "var(--color-blue)",
                    }}
                  >
                    {c.name.slice(0, 2).toUpperCase()}
                  </span>
                )}
                <p className="t-h3 mt-4">{c.name}</p>
                <p className="soft mt-0.5 text-[13.5px]">{c.sector}</p>
                <p className="muted mt-3 flex-1 text-[14.5px]">{c.blurb}</p>
                {c.highlights?.[0] && (
                  <p className="t-kicker mt-4 border-t pt-3 text-[13px]">
                    {c.highlights[0].value} · {c.highlights[0].label}
                  </p>
                )}
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {ALSO_BUILDING.map((c) => (
            <span
              key={c.name}
              className="flex items-center gap-2.5 rounded-lg border py-2 pl-2.5 pr-3.5 text-[14px] font-semibold"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.logo} alt="" className="h-6 w-6 rounded-md" />
              {c.name}
              <span className="soft font-normal text-[13px]">{c.sector}</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── Accelerator ───────────────────────────────────────────────── */}
      <section className="on-navy">
        <div className="shell grid gap-12 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="t-kicker" style={{ color: "var(--color-brand)" }}>
              The accelerator
            </p>
            <h2 className="t-h2 mt-2 max-w-[18ch]">
              Six Mondays that move your startup forward.
            </h2>
            <p
              className="mt-4 max-w-[46ch] text-[17px] leading-relaxed"
              style={{ color: "rgba(255,255,255,.75)" }}
            >
              Free, in person at Frontier RTP, open to any student founder in
              grades 9 and up. Come solo and we will match you with a team.
              Dinner every session. It ends in a live pitch night.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={ACCELERATOR_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white"
              >
                Apply now
              </a>
              <Link
                href="/accelerator"
                className="btn"
                style={{
                  border: "1px solid rgba(255,255,255,.28)",
                  color: "#fff",
                }}
              >
                Full programme
              </Link>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div
              className="rounded-[16px] p-2"
              style={{ background: "rgba(255,255,255,.06)" }}
            >
              {WEEKS.map((w, i) => (
                <div
                  key={w.n}
                  className="flex items-baseline gap-4 px-4 py-3"
                  style={{
                    borderTop:
                      i === 0 ? "none" : "1px solid rgba(255,255,255,.1)",
                  }}
                >
                  <span
                    className="t-num w-6 shrink-0 text-[14px]"
                    style={{ color: "var(--color-brand)" }}
                  >
                    {String(w.n).padStart(2, "0")}
                  </span>
                  <span
                    className="w-[4.5rem] shrink-0 text-[13.5px]"
                    style={{ color: "rgba(255,255,255,.6)" }}
                  >
                    {w.date}
                  </span>
                  <span className="text-[15px] font-semibold">{w.title}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Milestones ────────────────────────────────────────────────── */}
      <section className="shell py-20">
        <Reveal>
          <p className="t-kicker">The track record</p>
          <h2 className="t-h2 mt-2">Real wins, real dates</h2>
        </Reveal>

        <div className="relative mt-10">
          <span
            aria-hidden
            className="absolute left-[7px] top-1 bottom-1 w-[2px] rounded-full md:left-1/2 md:-translate-x-1/2"
            style={{ background: "var(--color-surface-2)" }}
          />
          <div className="space-y-8">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.title} delay={i * 60}>
                <div
                  className={`relative flex gap-6 pl-8 md:w-1/2 md:pl-0 ${
                    i % 2 === 0
                      ? "md:pr-10 md:text-right"
                      : "md:ml-auto md:pl-10"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute top-1.5 h-4 w-4 rounded-full border-4 border-white ${
                      i % 2 === 0
                        ? "left-0 md:left-auto md:-right-2"
                        : "left-0 md:-left-2"
                    }`}
                    style={{
                      background: "var(--color-blue)",
                      boxShadow: "0 0 0 2px var(--color-surface-2)",
                    }}
                  />
                  <div>
                    <p className="t-kicker t-kicker-bare">{m.date}</p>
                    <p className="t-h3 mt-1">{m.title}</p>
                    <p className="muted mt-1.5 text-[14.5px]">{m.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filmstrip ─────────────────────────────────────────────────── */}
      <section aria-label="The network in person" className="overflow-hidden pb-4">
        <div className="marquee-track flex w-max gap-4">
          {[...Array(2)].flatMap((_, r) =>
            [
              "/media/beacon-tye-regionals.jpg",
              "/media/finnovate/live-pitch.webp",
              "/media/finnovate/winning-team.webp",
              "/media/visiocourt-team.webp",
              "/media/finnovate/award-presentation.webp",
              "/media/finnovate/event-group.webp",
            ].map((src, i) => (
              <div
                key={`${r}-${i}`}
                className="relative h-[190px] w-[280px] shrink-0 overflow-hidden rounded-[14px]"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
            )),
          )}
        </div>
      </section>

      {/* ── Finnovate ─────────────────────────────────────────────────── */}
      <section className="shell py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px]">
              <Image
                src="/media/finnovate/judging-panel.webp"
                alt="The judging panel at Finnovate Startup Spotlight"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="t-kicker">Finnovate</p>
            <h2 className="t-h2 mt-2 max-w-[20ch]">
              We run the events too.
            </h2>
            <p className="t-lead mt-4">
              Startup Spotlight brought more than 20 teams in front of six
              business professionals, with the top three sharing over $2,500 in
              prizes. We built it with our school&apos;s DECA chapter.
            </p>
            <Link href="/finnovate" className="lnk mt-6">
              See the event <IconArrow size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Ways in ───────────────────────────────────────────────────── */}
      <section id="contact" className="shell scroll-mt-24 pb-4">
        <Reveal>
          <p className="t-kicker">Get involved</p>
          <h2 className="t-h2 mt-2">Three ways in</h2>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {WAYS.map((p, i) => (
            <Reveal key={p.kind} delay={i * 70}>
              <Link
                href={p.href}
                className="card card-lift flex h-full flex-col p-6"
              >
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl"
                  style={{ background: "var(--color-surface-2)", color: "var(--color-blue)" }}
                >
                  <p.icon />
                </span>
                <p className="t-h3 mt-4">{p.kind}</p>
                <p className="muted mt-2 flex-1 text-[15px]">{p.body}</p>
                <span className="lnk mt-5 text-[15px]">
                  Start application <IconArrow size={16} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="on-blue mt-6 flex flex-wrap items-center justify-between gap-5 rounded-[16px] p-7">
            <div>
              <p className="text-[20px] font-extrabold tracking-[-0.025em]">
                Want to be in the room this fall?
              </p>
              <p className="mt-1 text-[15px]" style={{ color: "rgba(255,255,255,.82)" }}>
                The application takes about two minutes.
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
              <a
                href={SITE.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ border: "1px solid rgba(255,255,255,.35)", color: "#fff" }}
              >
                Join the community
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
