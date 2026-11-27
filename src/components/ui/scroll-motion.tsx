"use client";

import { useEffect } from "react";

export function ScrollMotion() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    let observer: IntersectionObserver | undefined;

    function show(element: HTMLElement) {
      element.dataset.motionState = "visible";
      observer?.unobserve(element);
    }

    function configure() {
      observer?.disconnect();

      if (preference.matches) {
        elements.forEach((element) =>
          element.removeAttribute("data-motion-state"),
        );
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) show(entry.target as HTMLElement);
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -3% 0px" },
      );

      elements.forEach((element) => {
        // Keep restored scroll positions and content already on screen visible.
        if (element.getBoundingClientRect().top < window.innerHeight * 0.98) {
          show(element);
        } else {
          element.dataset.motionState = "pending";
          observer?.observe(element);
        }
      });
    }

    function revealFocusedContent(event: FocusEvent) {
      if (!(event.target instanceof HTMLElement)) return;
      const element = event.target.closest<HTMLElement>("[data-reveal]");
      if (element) show(element);
    }

    configure();
    preference.addEventListener("change", configure);
    document.addEventListener("focusin", revealFocusedContent);

    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", configure);
      document.removeEventListener("focusin", revealFocusedContent);
      elements.forEach((element) =>
        element.removeAttribute("data-motion-state"),
      );
    };
  }, []);

  return null;
}
