"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const numberFromDataset = (element: HTMLElement, key: string, fallback = 0) => {
  const value = Number(element.dataset[key]);
  return Number.isFinite(value) ? value : fallback;
};

export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanup: Array<() => void> = [];

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
      );

      revealElements.forEach((element) => revealObserver.observe(element));
      cleanup.push(() => revealObserver.disconnect());
    }

    const counterElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-counter]")
    );

    const setCounter = (element: HTMLElement, value: number) => {
      const prefix = element.dataset.prefix ?? "";
      const suffix = element.dataset.suffix ?? "";
      const pad = numberFromDataset(element, "pad");
      element.textContent = `${prefix}${String(Math.round(value)).padStart(pad, "0")}${suffix}`;
    };

    const animateCounter = (element: HTMLElement) => {
      const target = numberFromDataset(element, "countTo");

      if (reduceMotion) {
        setCounter(element, target);
        return;
      }

      const duration = 900;
      const startedAt = performance.now();

      const frame = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCounter(element, target * eased);
        if (progress < 1) requestAnimationFrame(frame);
      };

      requestAnimationFrame(frame);
    };

    if (reduceMotion) {
      counterElements.forEach(animateCounter);
    } else if ("IntersectionObserver" in window) {
      const counterObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animateCounter(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.45 }
      );

      counterElements.forEach((element) => counterObserver.observe(element));
      cleanup.push(() => counterObserver.disconnect());
    } else {
      counterElements.forEach(animateCounter);
    }

    let scrollFrame = 0;
    const updateScroll = () => {
      scrollFrame = 0;
      const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(window.scrollY / scrollable, 0), 1);
      root.style.setProperty("--scroll-progress", String(progress));
      root.style.setProperty("--parallax-y", `${Math.min(window.scrollY * 0.025, 22)}px`);
    };

    const onScroll = () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanup.push(() => {
      window.removeEventListener("scroll", onScroll);
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
    });

    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"));
    const currentPageLink = navLinks.find(
      (link) => link.getAttribute("aria-current") === "page"
    );

    if (currentPageLink?.parentElement) {
      const tabList = currentPageLink.parentElement;
      const centerCurrentPage = requestAnimationFrame(() => {
        if (tabList.scrollWidth <= tabList.clientWidth) return;

        const linkLeft = currentPageLink.offsetLeft - tabList.offsetLeft;
        const targetLeft =
          linkLeft - (tabList.clientWidth - currentPageLink.offsetWidth) / 2;
        tabList.scrollLeft = Math.max(0, targetLeft);
      });

      cleanup.push(() => cancelAnimationFrame(centerCurrentPage));
    }

    if ("IntersectionObserver" in window && sections.length && navLinks.length) {
      const setActiveLink = (id: string) => {
        navLinks.forEach((link) => {
          const active = link.hash === `#${id}`;
          link.toggleAttribute("data-active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      };

      const sectionObserver = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible?.target.id) setActiveLink(visible.target.id);
        },
        { rootMargin: "-24% 0px -62% 0px", threshold: [0, 0.1, 0.25] }
      );

      sections.forEach((section) => sectionObserver.observe(section));
      cleanup.push(() => sectionObserver.disconnect());
    }

    if (finePointer && !reduceMotion) {
      const magneticElements = Array.from(
        document.querySelectorAll<HTMLElement>("[data-magnetic]")
      );
      const tiltElements = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));

      magneticElements.forEach((element) => {
        const inner = element.querySelector<HTMLElement>(".button-inner");
        if (!inner) return;

        const move = (event: PointerEvent) => {
          const rect = element.getBoundingClientRect();
          const x = (event.clientX - rect.left - rect.width / 2) * 0.16;
          const y = (event.clientY - rect.top - rect.height / 2) * 0.16;
          inner.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        };
        const leave = () => {
          inner.style.transform = "translate3d(0, 0, 0)";
        };

        element.addEventListener("pointermove", move);
        element.addEventListener("pointerleave", leave);
        cleanup.push(() => {
          element.removeEventListener("pointermove", move);
          element.removeEventListener("pointerleave", leave);
        });
      });

      tiltElements.forEach((element) => {
        let tiltFrame = 0;
        const move = (event: PointerEvent) => {
          if (tiltFrame) cancelAnimationFrame(tiltFrame);
          tiltFrame = requestAnimationFrame(() => {
            const rect = element.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            element.style.transform = `perspective(1200px) rotateX(${-y * 2.5}deg) rotateY(${x * 3.5}deg) translate3d(0,-3px,0)`;
          });
        };
        const leave = () => {
          if (tiltFrame) cancelAnimationFrame(tiltFrame);
          element.style.transform =
            "perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0)";
        };

        element.addEventListener("pointermove", move);
        element.addEventListener("pointerleave", leave);
        cleanup.push(() => {
          element.removeEventListener("pointermove", move);
          element.removeEventListener("pointerleave", leave);
          if (tiltFrame) cancelAnimationFrame(tiltFrame);
        });
      });
    }

    root.dataset.motionReady = "true";

    return () => {
      cleanup.forEach((dispose) => dispose());
      delete root.dataset.motionReady;
    };
  }, [pathname]);

  return null;
}
