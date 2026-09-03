"use client";

import { useState } from "react";
import { WEEKS } from "@/lib/site";

/** The six Mondays. Selecting a week expands its detail inline. */
export default function WeekRail() {
  const [active, setActive] = useState(0);

  return (
    <div
      className="overflow-hidden rounded-[16px]"
      style={{ background: "rgba(255,255,255,.06)" }}
    >
      {WEEKS.map((w, i) => {
        const on = i === active;
        return (
          <div
            key={w.n}
            style={{
              borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,.1)",
            }}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-expanded={on}
              className="flex w-full items-baseline gap-4 px-5 py-4 text-left transition-colors"
              style={{ background: on ? "rgba(255,255,255,.06)" : "transparent" }}
            >
              <span
                className="t-num w-6 shrink-0 text-[14px]"
                style={{ color: "var(--color-brand)" }}
              >
                {String(w.n).padStart(2, "0")}
              </span>
              <span
                className="w-[4.75rem] shrink-0 text-[13.5px]"
                style={{ color: "rgba(255,255,255,.6)" }}
              >
                {w.date}
              </span>
              <span className="flex-1 text-[16px] font-bold tracking-[-0.015em]">
                {w.title}
              </span>
              <span
                aria-hidden
                className="shrink-0 transition-transform duration-200"
                style={{
                  color: "rgba(255,255,255,.5)",
                  transform: on ? "rotate(45deg)" : "none",
                }}
              >
                +
              </span>
            </button>

            {on && (
              <div className="px-5 pb-5 pl-[7.5rem]">
                <p
                  className="max-w-[52ch] text-[15px]"
                  style={{ color: "rgba(255,255,255,.78)" }}
                >
                  {w.summary}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {w.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md px-2.5 py-1 text-[13px]"
                      style={{
                        background: "rgba(255,255,255,.1)",
                        color: "rgba(255,255,255,.85)",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                {w.n === WEEKS.length && (
                  <p
                    className="mt-3 inline-block rounded-md px-2.5 py-1 text-[13px] font-bold"
                    style={{ background: "var(--color-brand)", color: "var(--color-navy)" }}
                  >
                    Pitch competition
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
