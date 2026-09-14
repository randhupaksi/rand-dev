import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ limitCallbacks: true });

const revealSelector = "[data-reveal]";
export function useReveal<T extends HTMLElement>(dependencyKey?: string) {
  const scopeRef = useRef<T>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const isCompactViewport = window.matchMedia("(max-width: 767px)").matches;
      const motion = isCompactViewport
        ? {
            distance: 16,
            resetDistance: 12,
            duration: 0.52,
            stagger: 0.055,
            resetDuration: 0.26,
            batchInterval: 0.06,
            batchMax: 3,
            start: "top 92%",
          }
        : {
            distance: 24,
            resetDistance: 16,
            duration: 0.72,
            stagger: 0.09,
            resetDuration: 0.34,
            batchInterval: 0.12,
            batchMax: 6,
            start: "top 86%",
          };

      const elements = (self.selector?.(revealSelector) ?? []) as HTMLElement[];

      if (!elements.length) {
        return;
      }

      gsap.set(elements, { autoAlpha: 0, y: motion.distance });

      ScrollTrigger.batch(elements, {
        start: motion.start,
        interval: motion.batchInterval,
        batchMax: motion.batchMax,
        onEnter: (batch) => {
          gsap.set(batch, { willChange: "transform,opacity" });
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: motion.duration,
            ease: "power3.out",
            stagger: motion.stagger,
            overwrite: "auto",
            onComplete: () => gsap.set(batch, { clearProps: "willChange" }),
          });
        },
        onLeaveBack: (batch) => {
          const resetBatch = batch.filter(
            (element) => !element.hasAttribute("data-reveal-once"),
          );

          if (!resetBatch.length) {
            return;
          }

          gsap.set(resetBatch, { willChange: "transform,opacity" });
          gsap.to(resetBatch, {
            autoAlpha: 0,
            y: motion.resetDistance,
            duration: motion.resetDuration,
            ease: "power2.out",
            stagger: 0.035,
            overwrite: "auto",
            onComplete: () => gsap.set(resetBatch, { clearProps: "willChange" }),
          });
        },
      });
    }, scopeRef);

    const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      window.cancelAnimationFrame(refreshFrame);
      ctx.revert();
    };
  }, [dependencyKey]);

  return scopeRef;
}
