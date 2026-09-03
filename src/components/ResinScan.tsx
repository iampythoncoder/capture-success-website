"use client";

import { useEffect, useState } from "react";

const CODES = [
  { n: 1, code: "PET", name: "Polyethylene Terephthalate" },
  { n: 2, code: "HDPE", name: "High-Density Polyethylene" },
  { n: 3, code: "PVC", name: "Polyvinyl Chloride" },
  { n: 4, code: "LDPE", name: "Low-Density Polyethylene" },
  { n: 5, code: "PP", name: "Polypropylene" },
  { n: 6, code: "PS", name: "Polystyrene" },
  { n: 7, code: "OTHER", name: "Mixed & Unmarked" },
];

/** Resyn — a 3-second scan settling on one of the seven resin codes. */
export function ResinScan() {
  const [active, setActive] = useState(0);
  const [confidence, setConfidence] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Settle on a static, already-identified state.
      const t = setTimeout(() => setConfidence(92), 0);
      return () => clearTimeout(t);
    }

    // Stepped scanner: ~8 updates a second is plenty and keeps React out of
    // the frame loop, which otherwise re-rendered this subtree 60x a second.
    const TICK = 120;
    const STEPS = 28;
    let i = 0;

    const id = setInterval(() => {
      i = (i + 1) % STEPS;
      const p = i / STEPS;
      if (p < 0.65) {
        setActive(Math.floor((p / 0.65) * CODES.length * 2) % CODES.length);
        setConfidence(Math.round((p / 0.65) * 70));
      } else {
        setActive(0);
        setConfidence(Math.min(94, 70 + Math.round(((p - 0.65) / 0.35) * 24)));
      }
    }, TICK);

    return () => clearInterval(id);
  }, []);

  const locked = confidence > 70;

  return (
    <figure
      className="flex aspect-[4/3] w-full flex-col rounded-[14px] border p-4"
      style={{
        borderColor: "var(--color-line)",
        background: "var(--color-surface)",
      }}
    >
      <figcaption className="flex items-center justify-between">
        <span className="soft text-[12px] font-bold">Live scan</span>
        <span className="soft text-[12px] font-bold">{locked ? "Resin identified" : "Sampling"}</span>
      </figcaption>

      {/* Result readout */}
      <div
        className="mt-3 flex items-center justify-between  px-4 py-3 transition-colors duration-300"
        style={{
          background: locked ? "var(--color-blue)" : "#fff",
          color: locked ? "#fff" : "var(--color-ink)",
          border: "1px solid var(--color-line)",
        }}
      >
        <div>
          <p className="text-[20px] font-semibold tracking-[-0.02em]">
            {CODES[active].code}
          </p>
          <p
            className="text-[11.5px]"
            style={{ color: locked ? "#9ecbff" : "var(--color-soft)" }}
          >
            #{CODES[active].n} — {CODES[active].name}
          </p>
        </div>
        <div className="text-right">
          <p className="num text-[19px] font-medium">{confidence}%</p>
          <p
            className="text-[11px]"
            style={{ color: locked ? "#9ecbff" : "var(--color-soft)" }}
          >
            confidence
          </p>
        </div>
      </div>

      {/* Seven codes */}
      <div className="mt-3 grid flex-1 grid-cols-7 gap-1.5">
        {CODES.map((c, i) => {
          const on = i === active;
          return (
            <div
              key={c.code}
              className="flex flex-col items-center justify-center  transition-colors duration-200"
              style={{
                background: on ? "var(--color-brand)" : "#fff",
                border: "1px solid var(--color-line)",
                color: on ? "var(--color-blue-ink)" : "var(--color-soft)",
              }}
            >
              <span className="num text-[13px] font-medium">{c.n}</span>
              <span className="mt-0.5 text-[10px] font-medium">{c.code}</span>
            </div>
          );
        })}
      </div>

      <p className="soft mt-3 text-[11.5px]">
        Below 20% confidence, Resyn says it is unsure instead of guessing.
      </p>
    </figure>
  );
}
