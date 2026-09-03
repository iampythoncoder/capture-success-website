"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Delay in ms before this element animates in. */
  delay?: number;
  /** Travel distance in px. */
  y?: number;
  as?: ElementType;
  className?: string;
  /** Fire once the top of the element is this far into the viewport. */
  margin?: string;
};

/**
 * Fades + lifts a block into view the first time it is scrolled to.
 * Falls back to "always visible" when IntersectionObserver is unavailable
 * or the user prefers reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 22,
  as: Tag = "div",
  className = "",
  margin = "0px 0px -12% 0px",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    // Already on screen at mount (deep link, refresh mid-page, restored scroll):
    // show it straight away rather than waiting for the observer.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: margin, threshold: 0.05 },
    );

    io.observe(el);

    // Safety net: observer callbacks are throttled in background tabs, so never
    // leave content stranded at opacity 0.
    const failsafe = window.setTimeout(() => setShown(true), 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [margin]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : `translate3d(0, ${y}px, 0)`,
        transition: `opacity .85s cubic-bezier(.16,1,.3,1) ${delay}ms, transform .85s cubic-bezier(.16,1,.3,1) ${delay}ms`,
        willChange: shown ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
