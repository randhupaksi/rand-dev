import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const heroRevealSelector = "[data-page-hero-reveal]";

export function usePageHeroReveal<T extends HTMLElement>(includeDesktopFlow = false) {
  const scopeRef = useRef<T>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const isCompactViewport = window.matchMedia("(max-width: 767px)").matches;
      const selector = includeDesktopFlow && !isCompactViewport
        ? `${heroRevealSelector}, [data-project-flow-reveal]`
        : heroRevealSelector;
      const targets = (self.selector?.(selector) ?? []) as HTMLElement[];

      if (!targets.length) {
        return;
      }

      gsap.fromTo(
        targets,
        { autoAlpha: 0, y: isCompactViewport ? 20 : 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: isCompactViewport ? 0.62 : 0.72,
          ease: "power3.out",
          stagger: isCompactViewport ? 0.08 : 0.1,
          clearProps: "transform,visibility",
        },
      );
    }, scopeRef);

    return () => ctx.revert();
  }, [includeDesktopFlow]);

  return scopeRef;
}
