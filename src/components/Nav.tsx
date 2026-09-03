"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ACCELERATOR_FORM, NAV } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a
        href={ACCELERATOR_FORM}
        target="_blank"
        rel="noopener noreferrer"
        className="block py-2 text-center text-[13px] font-bold text-white transition-colors"
        style={{ background: "var(--color-navy)" }}
      >
        Fall 2026 applications are open — first session Sept 14 at Frontier RTP{" "}
        <span style={{ color: "var(--color-brand)" }}>Apply free →</span>
      </a>
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: "rgba(255,255,255,.85)",
          backdropFilter: "saturate(180%) blur(12px)",
          WebkitBackdropFilter: "saturate(180%) blur(12px)",
          borderBottom: `1px solid ${solid ? "var(--color-line)" : "transparent"}`,
        }}
      >
        <nav className="shell flex h-[68px] items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/brand/capture-mark.png"
              alt=""
              width={30}
              height={30}
              className="rounded-lg"
              priority
            />
            <span className="text-[16px] font-extrabold tracking-[-0.028em]">
              Capture Success
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-semibold transition-colors"
                style={{
                  color:
                    pathname === item.href
                      ? "var(--color-blue)"
                      : "var(--color-body)",
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={ACCELERATOR_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Apply now
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-50 grid h-10 w-10 place-items-center md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className="absolute left-0 block h-[2px] w-5 rounded-full transition-all duration-300"
                style={{
                  background: "var(--color-ink)",
                  top: open ? 6 : 1,
                  transform: open ? "rotate(45deg)" : "none",
                }}
              />
              <span
                className="absolute left-0 block h-[2px] w-5 rounded-full transition-all duration-300"
                style={{
                  background: "var(--color-ink)",
                  top: open ? 6 : 12,
                  transform: open ? "rotate(-45deg)" : "none",
                }}
              />
            </span>
          </button>
        </nav>
      </header>

      <div
        className="fixed inset-0 z-40 bg-white md:hidden"
        style={{
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
          transition: "opacity .2s ease",
          paddingTop: 68,
        }}
      >
        <div className="shell flex flex-col pt-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="t-h3 border-b py-5"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={ACCELERATOR_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-7 w-full"
          >
            Apply now
          </a>
        </div>
      </div>
    </>
  );
}
