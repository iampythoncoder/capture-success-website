import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ACCELERATOR_FORM, PEOPLE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "How Capture Success started, and the students who run it.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const STORY = [
  {
    title: "It started with watching friends build alone",
    body: "Capture Success was started in 2026 by a group of high school students in the Triangle. The problem we kept seeing wasn't a lack of ideas — classmates had real ones — it was that everyone was building solo: no teammates, no feedback, nobody who had shipped anything before. So we made the room we wished existed.",
    img: {
      src: "/media/finnovate/event-group.webp",
      alt: "Capture Success organizers and judges at Startup Spotlight",
      caption: "Organizers and judges at Startup Spotlight, built with our DECA chapter",
    },
  },
  {
    title: "First we proved students would show up",
    body: "Before the accelerator existed, we ran Finnovate — months of weekly student-focused fintech writing, then Startup Spotlight: a live pitch competition where more than twenty teams presented to six business professionals. The room was full. That was the proof.",
    img: {
      src: "/media/finnovate/live-pitch.webp",
      alt: "A student pitching live at Startup Spotlight",
      caption: "Startup Spotlight — 20+ teams pitched live",
    },
  },
  {
    title: "Then our first cohort started winning",
    body: "Beacon, a team guided start to finish inside our first cohort, took first place at TiE Young Entrepreneurs Regionals and qualified for nationals in Seattle. Around them a network formed — today it's ten student-led companies, including VisioCourt, which runs live court tracking for the Town of Morrisville and presented at MIT.",
    img: {
      src: "/media/beacon-tye-regionals.jpg",
      alt: "The Beacon team celebrating their TYE Regionals win",
      caption: "Beacon after winning TYE Regionals — first place and a spot at nationals",
    },
  },
  {
    title: "Now we're building the room for everyone",
    body: "This fall we're running a free six-week accelerator at Frontier RTP, open to any student in grades nine and up — with twelve partners we recruited ourselves, from UNC and NC State to Launch Chapel Hill, CED, Wake Tech, and Hub RTP. It ends on a stage, at Final Pitch Night, in front of the Triangle startup community.",
    img: {
      src: "/media/finnovate/award-presentation.webp",
      alt: "An award presentation at a Capture Success event",
      caption: "Where every cohort ends — awards, judges, and a full room",
    },
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="shell pt-12 pb-10">
        <Reveal>
          <p className="t-kicker">About us</p>
          <h1 className="t-hero mt-2 max-w-[18ch]">
            Built by students who got tired of building alone.
          </h1>
          <p className="t-lead prose-w mt-5">
            Capture Success is a student-run startup network in the Triangle.
            Here&apos;s how it started — and who runs it.
          </p>
        </Reveal>
      </section>

      {/* The story */}
      {STORY.map((s, i) => (
        <section key={s.title} className="shell py-10">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
              <div className={i % 2 ? "lg:order-2" : "lg:order-1"}>
                <p className="t-kicker">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="t-h2 mt-2 max-w-[20ch]">{s.title}</h2>
                <p className="t-lead mt-4 text-[16.5px]">{s.body}</p>
              </div>
              <figure className={i % 2 ? "lg:order-1" : "lg:order-2"}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px]">
                  <Image
                    src={s.img.src}
                    alt={s.img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="soft mt-2 text-[13.5px]">
                  {s.img.caption}
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </section>
      ))}

      {/* The team */}
      <section className="shell border-t py-14">
        <Reveal>
          <p className="t-kicker">The team</p>
          <h2 className="t-h2 mt-2">Who runs it</h2>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                  {p.role && (
                    <p
                      className="text-[13px] font-bold"
                      style={{ color: "var(--color-blue)" }}
                    >
                      {p.role}
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
