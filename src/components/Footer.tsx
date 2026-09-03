import Image from "next/image";
import Link from "next/link";
import { ACCELERATOR, ACCELERATOR_FORM, NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="on-navy mt-24">
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/brand/capture-mark.png"
                alt=""
                width={30}
                height={30}
                className="rounded-lg"
              />
              <span className="text-[16px] font-extrabold tracking-[-0.028em]">
                Capture Success
              </span>
            </Link>
            <p className="mt-4 max-w-[36ch] text-[15px]" style={{ color: "rgba(255,255,255,.72)" }}>
              A student startup network in the Triangle. Founders, builders, and
              the people who help them ship.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="lnk mt-4 text-[15px]" style={{ color: "var(--color-brand)" }}
            >
              {SITE.email}
            </a>
          </div>

          <div>
            <p className="t-h3 mb-3 text-[15px]">Pages</p>
            <ul className="space-y-2">
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[15px] transition-colors hover:text-[var(--color-brand)]" style={{ color: "rgba(255,255,255,.72)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="t-h3 mb-3 text-[15px]">Elsewhere</p>
            <ul className="space-y-2">
              <li>
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="text-[15px] transition-colors hover:text-[var(--color-brand)]" style={{ color: "rgba(255,255,255,.72)" }}>
                  Instagram
                </a>
              </li>
              <li>
                <a href={SITE.discord} target="_blank" rel="noopener noreferrer" className="text-[15px] transition-colors hover:text-[var(--color-brand)]" style={{ color: "rgba(255,255,255,.72)" }}>
                  Discord
                </a>
              </li>
              <li>
                <a href={ACCELERATOR_FORM} target="_blank" rel="noopener noreferrer" className="text-[15px] transition-colors hover:text-[var(--color-brand)]" style={{ color: "rgba(255,255,255,.72)" }}>
                  Apply to the cohort
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-6">
          <p className="text-[14px]" style={{ color: "rgba(255,255,255,.5)" }}>
            © {new Date().getFullYear()} {SITE.legal}
          </p>
          <p className="text-[14px]" style={{ color: "rgba(255,255,255,.5)" }}>
            Fall 2026 · {ACCELERATOR.rangeLabel} · {ACCELERATOR.venue.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
