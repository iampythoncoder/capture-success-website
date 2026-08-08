"use client";

import Image from "next/image";
import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent
} from "react";
import type { FinnovatePhoto } from "@/data/finnovate";
import styles from "./FinnovateCarousel.module.css";

type FinnovateCarouselProps = {
  photos: readonly FinnovatePhoto[];
};

type CarouselSlide = {
  key: string;
  photo: FinnovatePhoto;
  realIndex: number;
  clone: boolean;
};

export function FinnovateCarousel({ photos }: FinnovateCarouselProps) {
  const total = photos.length;
  const [physicalIndex, setPhysicalIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const transitionLock = useRef(false);
  const pointerStart = useRef<number | null>(null);

  const slides = useMemo<CarouselSlide[]>(() => {
    if (!total) return [];

    return [
      {
        key: "clone-last",
        photo: photos[total - 1],
        realIndex: total - 1,
        clone: true
      },
      ...photos.map((photo, index) => ({
        key: `photo-${index}`,
        photo,
        realIndex: index,
        clone: false
      })),
      {
        key: "clone-first",
        photo: photos[0],
        realIndex: 0,
        clone: true
      }
    ];
  }, [photos, total]);

  const activeIndex = total ? (physicalIndex - 1 + total) % total : 0;

  const move = useCallback(
    (direction: -1 | 1) => {
      if (total < 2 || transitionLock.current) return;
      transitionLock.current = true;
      setAnimate(true);
      setPhysicalIndex((current) => current + direction);
    },
    [total]
  );

  const jumpTo = useCallback(
    (index: number) => {
      if (total < 2 || transitionLock.current || index === activeIndex) return;
      transitionLock.current = true;
      setAnimate(true);
      setPhysicalIndex(index + 1);
    },
    [activeIndex, total]
  );

  const handleTransitionEnd = () => {
    if (physicalIndex === 0 || physicalIndex === total + 1) {
      setAnimate(false);
      setPhysicalIndex(physicalIndex === 0 ? total : 1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
          transitionLock.current = false;
        });
      });
      return;
    }

    transitionLock.current = false;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    } else if (event.key === "Home") {
      event.preventDefault();
      jumpTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      jumpTo(total - 1);
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerStart.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: PointerEvent<HTMLElement>) => {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (Math.abs(distance) < 45) return;
    move(distance > 0 ? -1 : 1);
  };

  if (!total) return null;

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-roledescription="carousel"
      aria-label="Startup Spotlight event photos"
      tabIndex={0}
      data-finnovate-carousel
      data-active-index={activeIndex}
      onKeyDown={handleKeyDown}
    >
      <div
        className={styles.viewport}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          pointerStart.current = null;
        }}
      >
        <div
          className={`${styles.track} ${animate ? styles.animate : ""}`}
          style={{ transform: `translate3d(-${physicalIndex * 100}%, 0, 0)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map(({ key, photo, realIndex, clone }) => {
            const current = !clone && realIndex === activeIndex;

            return (
              <div
                className={styles.slide}
                key={key}
                role={clone ? undefined : "group"}
                aria-roledescription={clone ? undefined : "slide"}
                aria-label={clone ? undefined : `${realIndex + 1} of ${total}`}
                aria-hidden={clone || !current}
                data-carousel-slide={clone ? undefined : true}
              >
                <figure className={styles.photoCard}>
                  <Image
                    src={photo.src}
                    alt={clone ? "" : photo.alt}
                    width={1560}
                    height={1040}
                    sizes="(max-width: 720px) 92vw, (max-width: 1200px) 88vw, 1120px"
                  />
                  <figcaption>
                    <span>{photo.label}</span>
                    <span>{photo.detail}</span>
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.controls}>
        <p aria-hidden="true">
          <strong data-carousel-current>{String(activeIndex + 1).padStart(2, "0")}</strong>
          <span>/</span>
          <span>{String(total).padStart(2, "0")}</span>
        </p>
        <div>
          <button type="button" onClick={() => move(-1)} aria-label="Previous event photo">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Next event photo">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Photo {activeIndex + 1} of {total}: {photos[activeIndex].label}
      </p>
    </div>
  );
}
