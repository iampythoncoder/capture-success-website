"use client";

import { useEffect, useState } from "react";

const UNITS = [
  { key: "days", label: "days" },
  { key: "hours", label: "hrs" },
  { key: "minutes", label: "min" },
  { key: "seconds", label: "sec" },
] as const;

function remaining(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor(ms / 3_600_000) % 24,
    minutes: Math.floor(ms / 60_000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
    over: ms === 0,
  };
}

/** Counts down to the first session, then says the cohort is under way. Owns
 *  its own kicker so the label never contradicts the state it is describing.
 *  Placeholder until mounted so server and client markup agree. */
export default function Countdown({
  iso,
  label = "First session begins in",
  overLabel = "The cohort",
}: {
  iso: string;
  label?: string;
  overLabel?: string;
}) {
  const target = new Date(iso).getTime();
  const [t, setT] = useState<ReturnType<typeof remaining> | null>(null);

  useEffect(() => {
    const first = setTimeout(() => setT(remaining(target)), 0);
    const id = setInterval(() => setT(remaining(target)), 1000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, [target]);

  if (!t)
    return (
      <>
        <p className="t-kicker">{label}</p>
        <div className="mt-3 h-[46px]" aria-hidden />
      </>
    );

  if (t.over) {
    return (
      <>
        <p className="t-kicker">{overLabel}</p>
        <p className="t-h3 mt-3" style={{ color: "var(--color-blue)" }}>
          In session — week one done
        </p>
      </>
    );
  }

  return (
    <>
      <p className="t-kicker">{label}</p>
      <div className="mt-3 flex items-baseline gap-5">
      {UNITS.map((u) => (
        <div key={u.key} className="flex items-baseline gap-1">
          <span className="t-num text-[2rem] leading-none">
            {String(t[u.key]).padStart(2, "0")}
          </span>
          <span className="soft text-[13px] font-semibold">{u.label}</span>
        </div>
      ))}
      </div>
    </>
  );
}
