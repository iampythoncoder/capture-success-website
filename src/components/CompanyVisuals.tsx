"use client";

import { useEffect, useState } from "react";

/* -------------------------------------------------------------------------
   PyroSight — helmet thermal view. Stays dark: it is a camera feed, so it
   reads as a product screenshot inset into the page.
   ------------------------------------------------------------------------- */

export function ThermalView() {
  return (
    <figure
      className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px]"
      style={{
        borderColor: "var(--color-line)",
        background:
          "radial-gradient(120% 90% at 30% 20%, #2a1206 0%, #160a06 42%, #0a0608 100%)",
      }}
    >
      <div
        className="absolute h-[42%] w-[26%] rounded-full"
        style={{
          left: "24%",
          top: "34%",
          background:
            "radial-gradient(circle, rgba(255,214,120,.95) 0%, rgba(255,122,40,.6) 38%, rgba(190,50,20,.18) 66%, transparent 76%)",
          filter: "blur(3px)",
        }}
      />
      <div
        className="absolute h-[30%] w-[18%] rounded-full"
        style={{
          right: "16%",
          bottom: "16%",
          background:
            "radial-gradient(circle, rgba(120,220,255,.75) 0%, rgba(60,150,220,.32) 46%, transparent 72%)",
          filter: "blur(4px)",
        }}
      />

      <div
        className="thermal-sweep absolute inset-y-0 left-[-36%] w-[36%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,.07) 48%, rgba(255,255,255,.13) 50%, rgba(255,255,255,.07) 52%, transparent)",
        }}
      />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,.14) 0 1px, transparent 1px 4px)",
        }}
      />

      <Marker label="PERSON" x="26%" y="34%" tone="#FFD27A" />
      <Marker label="EXIT" x="66%" y="62%" tone="#7ADCFF" />

      <figcaption className="absolute inset-x-0 top-0 flex items-center justify-between px-3.5 py-3">
        <span className="text-[11px] font-medium text-white/70">
          Thermal · live
        </span>
        <span className="text-[11px] font-medium text-white/70">
          On-device
        </span>
      </figcaption>
      <div className="absolute inset-x-0 bottom-0 flex justify-between px-3.5 py-3">
        <span className="text-[11px] font-medium text-white/45">
          In-helmet navigation
        </span>
        <span className="text-[11px] font-medium text-white/45">
          2 targets
        </span>
      </div>
    </figure>
  );
}

function Marker({
  label,
  x,
  y,
  tone,
}: {
  label: string;
  x: string;
  y: string;
  tone: string;
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: x, top: y }}
      aria-hidden
    >
      <div
        className="grid h-9 w-9 place-items-center rounded-full border"
        style={{ borderColor: tone }}
      >
        <span className="h-1 w-1 rounded-full" style={{ background: tone }} />
      </div>
      <span
        className="absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium"
        style={{ color: tone }}
      >
        {label}
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------
   VisioCourt — live court availability board, set on paper.
   ------------------------------------------------------------------------- */

const PATTERN = [
  [true, false, false, true],
  [true, false, true, true],
  [false, false, true, true],
  [true, true, false, true],
];

export function CourtBoard() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setStep((s) => (s + 1) % PATTERN.length), 2600);
    return () => clearInterval(id);
  }, []);

  const state = PATTERN[step];
  const open = state.filter(Boolean).length;

  return (
    <figure
      className="flex aspect-[4/3] w-full flex-col rounded-[14px] border p-4"
      style={{
        borderColor: "var(--color-line)",
        background: "var(--color-surface)",
      }}
    >
      <figcaption className="flex items-center justify-between">
        <span className="soft text-[12px] font-bold">Court status</span>
        <span className="soft text-[12px] font-bold">Live</span>
      </figcaption>

      <div className="mt-3 grid flex-1 grid-cols-2 gap-px" style={{ background: "var(--color-rule)" }}>
        {state.map((isOpen, i) => (
          <div
            key={i}
            className="relative flex flex-col justify-between p-3 transition-colors duration-700"
            style={{
              background: isOpen ? "var(--color-blue)" : "#fff",
              color: isOpen ? "#fff" : "var(--color-soft)",
            }}
          >
            <span className="num text-[12px] font-medium">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[13px] font-semibold">
              {isOpen ? "Open" : "Occupied"}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="soft text-[12px] font-bold">No facial recognition</span>
        <span className="num text-[12px] font-medium">{open}/4 open</span>
      </div>
    </figure>
  );
}
