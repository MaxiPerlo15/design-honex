"use client";

import { useEffect } from "react";

export function AnimationEffects() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cursor: HTMLDivElement | null = null;
    let ring: HTMLDivElement | null = null;
    let ringFrame = 0;
    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;

    const interactiveSelector = "[data-magnetic], a, button, .service-card, .step-card, .logo-card, .bk-box";
    const interactiveElements = Array.from(document.querySelectorAll<HTMLElement>(interactiveSelector));

    const grow = () => {
      cursor?.classList.add("grow");
      ring?.classList.add("grow");
    };

    const shrink = () => {
      cursor?.classList.remove("grow");
      ring?.classList.remove("grow");
    };

    if (finePointer && !reduceMotion) {
      document.body.classList.add("has-custom-cursor");
      cursor = document.createElement("div");
      ring = document.createElement("div");
      cursor.className = "cursor-dot";
      ring.className = "cursor-ring";
      document.body.append(cursor, ring);

      const onMouseMove = (event: MouseEvent) => {
        mx = event.clientX;
        my = event.clientY;
        if (cursor) {
          cursor.style.left = `${mx}px`;
          cursor.style.top = `${my}px`;
        }
      };

      const animateRing = () => {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        if (ring) {
          ring.style.left = `${rx}px`;
          ring.style.top = `${ry}px`;
        }
        ringFrame = requestAnimationFrame(animateRing);
      };

      document.addEventListener("mousemove", onMouseMove, { passive: true });
      ringFrame = requestAnimationFrame(animateRing);
      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", grow);
        element.addEventListener("mouseleave", shrink);
      });

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
        cancelAnimationFrame(ringFrame);
        interactiveElements.forEach((element) => {
          element.removeEventListener("mouseenter", grow);
          element.removeEventListener("mouseleave", shrink);
        });
        document.body.classList.remove("has-custom-cursor");
        cursor?.remove();
        ring?.remove();
      };
    }

    return undefined;
  }, []);

  useEffect(() => {
    const nav = document.querySelector<HTMLElement>("[data-nav]");
    const onScroll = () => {
      nav?.classList.toggle("nav-scrolled", window.scrollY > 60);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08 },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const statElements = Array.from(document.querySelectorAll<HTMLElement>("[data-stat]"));

    const countUp = (element: HTMLElement) => {
      const raw = element.dataset.countTo ?? "";
      const numeric = Number.parseInt(raw, 10);
      if (Number.isNaN(numeric)) {
        element.textContent = raw;
        return;
      }

      const prefix = raw.trim().startsWith("+") ? "+" : "";
      const suffix = raw.trim().endsWith("+") && !prefix ? "+" : "";
      const duration = 1200;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - progress) ** 4;
        element.textContent = `${prefix}${Math.round(eased * numeric)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          countUp(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.5 },
    );

    statElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reduceMotion || !finePointer) return undefined;

    const buttons = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));

    const cleanups = buttons.map((button) => {
      const onMouseMove = (event: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const dx = event.clientX - (rect.left + rect.width / 2);
        const dy = event.clientY - (rect.top + rect.height / 2);
        button.style.transform = `translate(${dx * 0.18}px, ${dy * 0.18 - 3}px)`;
      };

      const onMouseLeave = () => {
        button.style.transform = "";
      };

      button.addEventListener("mousemove", onMouseMove);
      button.addEventListener("mouseleave", onMouseLeave);

      return () => {
        button.removeEventListener("mousemove", onMouseMove);
        button.removeEventListener("mouseleave", onMouseLeave);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
