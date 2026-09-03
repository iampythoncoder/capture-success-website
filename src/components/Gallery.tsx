"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FINNOVATE } from "@/lib/site";

const PHOTOS = FINNOVATE.photos;

/** Photo grid with a keyboard-navigable lightbox. */
export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const move = useCallback((dir: number) => {
    setOpen((i) => (i === null ? null : (i + dir + PHOTOS.length) % PHOTOS.length));
  }, []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, move]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PHOTOS.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setOpen(i)}
            className={`group text-left ${i === 0 ? "sm:col-span-2" : ""}`}
            aria-label={`View photo: ${p.title}`}
          >
            <span
              className={`relative block w-full overflow-hidden  border ${
                i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={p.src}
                alt={p.title}
                fill
                sizes={
                  i === 0
                    ? "(max-width: 640px) 100vw, 62vw"
                    : "(max-width: 640px) 100vw, 31vw"
                }
                className="object-cover transition-transform duration-[1s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]"
              />
            </span>
            <span className="mt-2.5 block">
              <span className="block text-[14.5px] font-semibold">{p.title}</span>
              <span className="soft mt-0.5 block text-[13px]">
                {p.caption}
              </span>
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          style={{ background: "rgba(8,20,40,.95)" }}
          role="dialog"
          aria-modal="true"
          aria-label={PHOTOS[open].title}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute right-5 top-5 text-[13px] font-semibold text-white"
          >
            Close
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/40 text-white transition-colors hover:bg-white hover:text-[#0b5bd3] md:left-8"
          >
            ←
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/40 text-white transition-colors hover:bg-white hover:text-[#0b5bd3] md:right-8"
          >
            →
          </button>

          <figure
            className="relative max-h-full w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden">
              <Image
                src={PHOTOS[open].src}
                alt={PHOTOS[open].title}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="text-[15px] font-semibold">{PHOTOS[open].title}</p>
                <p className="mt-0.5 text-[13.5px] text-white/70">
                  {PHOTOS[open].caption}
                </p>
              </div>
              <p className="num text-[13px] text-white/70">
                {String(open + 1).padStart(2, "0")} /{" "}
                {String(PHOTOS.length).padStart(2, "0")}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
