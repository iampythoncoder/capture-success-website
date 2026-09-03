import Image from "next/image";
import { PARTNERS, PARTNER_ROLES, SIGNAGE_PARTNER, type Partner } from "@/lib/site";

/** Square-format logos render as squares instead of being squeezed wide. */
const SQUARE_LOGOS = new Set(["/partners/rdsco.png"]);

/** Next/Image refuses SVG unless SVG optimization is enabled globally, so
 *  vector logos render as plain <img>. Place4Needs has no published logo
 *  anywhere, so it gets a typographic lockup rather than an invented mark. */
function Logo({ p }: { p: Partner }) {
  if (!p.logo) {
    return (
      <span
        className="text-[19px] font-extrabold tracking-[-0.02em]"
        style={{ fontFamily: "var(--font-display)", color: "#3D4450" }}
      >
        Place
        <span style={{ color: "#F4590D" }}>4</span>
        Needs
      </span>
    );
  }
  if (SQUARE_LOGOS.has(p.logo)) {
    return (
      <Image
        src={p.logo}
        alt={p.name}
        width={52}
        height={52}
        className="h-[48px] w-[48px] rounded-lg object-contain"
      />
    );
  }
  if (p.logo.endsWith(".svg")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={p.logo} alt={p.name} className="max-h-[42px] w-auto max-w-[80%] object-contain" />
    );
  }
  return (
    <Image
      src={p.logo}
      alt={p.name}
      width={220}
      height={70}
      className="max-h-[42px] w-auto max-w-[80%] object-contain"
    />
  );
}

export default function PartnerWall({
  heading = "Backed by the Triangle",
  blurb = "Our partners show up as mentors, speakers, judges, and sponsors — the people who actually build here.",
}: {
  heading?: string;
  blurb?: string;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="t-kicker">Partners</p>
          <h2 className="t-h2 mt-2">{heading}</h2>
        </div>
        <p className="soft max-w-[36ch] text-[14.5px]">
          {PARTNER_ROLES.join(" · ")}
        </p>
      </div>

      <p className="t-lead prose-w mt-4">{blurb}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PARTNERS.map((p) => {
          const inner = (
            <>
              <span className="flex h-[52px] items-center justify-center">
                <Logo p={p} />
              </span>
              <span className="mt-3 block text-center text-[14.5px] font-bold">
                {p.short}
              </span>
              <span className="soft mt-0.5 block text-center text-[12.5px]">
                {p.role}
              </span>
            </>
          );
          return p.href ? (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-lift px-4 py-6"
              title={p.name}
            >
              {inner}
            </a>
          ) : (
            <div key={p.name} className="card px-4 py-6" title={p.name}>
              {inner}
            </div>
          );
        })}
      </div>

      <p className="soft mt-4 text-[14px]">
        Signage partner — {SIGNAGE_PARTNER.name}, {SIGNAGE_PARTNER.location}
      </p>
    </div>
  );
}
