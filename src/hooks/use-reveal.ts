import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ limitCallbacks: true });

const revealSelector = "[data-reveal], [data-project-flow-reveal]";
const getRevealDuration = (element: HTMLElement, defaultDuration: number) =>
  element.hasAttribute("data-reveal-fast") ? defaultDuration * 0.8 : defaultDuration;

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
            distance: 22,
            resetDistance: 16,
            duration: 0.68,
            stagger: 0.085,
            resetDuration: 0.32,
            batchInterval: 0.1,
            batchMax: 4,
            start: "top 70%",
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

      const elements = ((self.selector?.(revealSelector) ?? []) as HTMLElement[]).filter(
        (element) => isCompactViewport || !element.hasAttribute("data-project-flow-reveal"),
      );

      if (!elements.length) {
        return;
      }

      gsap.set(elements, { autoAlpha: 0, y: motion.distance });

      if (isCompactViewport) {
        let queuedUntil = 0;

        elements.forEach((element) => {
          ScrollTrigger.create({
            trigger: element,
            start: motion.start,
            onEnter: () => {
              const currentTime = gsap.globalTimeline.time();
              const delay = Math.max(0, queuedUntil - currentTime);

              queuedUntil = currentTime + delay + motion.duration * 0.72;
              gsap.set(element, { willChange: "transform,opacity" });
              gsap.to(element, {
                autoAlpha: 1,
                y: 0,
                delay,
                duration: getRevealDuration(element, motion.duration),
                ease: "power3.out",
                overwrite: "auto",
                onComplete: () => gsap.set(element, { clearProps: "willChange" }),
              });
            },
            onLeaveBack: () => {
              if (element.hasAttribute("data-reveal-once")) {
                return;
              }

              gsap.set(element, { willChange: "transform,opacity" });
              gsap.to(element, {
                autoAlpha: 0,
                y: motion.resetDistance,
                duration: motion.resetDuration,
                ease: "power2.out",
                overwrite: "auto",
                onComplete: () => gsap.set(element, { clearProps: "willChange" }),
              });
            },
          });
        });

        return;
      }

      ScrollTrigger.batch(elements, {
        start: motion.start,
        interval: motion.batchInterval,
        batchMax: motion.batchMax,
        onEnter: (batch) => {
          gsap.set(batch, { willChange: "transform,opacity" });
          const fastBatch = batch.filter((element) => element.hasAttribute("data-reveal-fast"));
          const regularBatch = batch.filter((element) => !element.hasAttribute("data-reveal-fast"));

          [
            { elements: regularBatch, duration: motion.duration },
            { elements: fastBatch, duration: motion.duration * 0.8 },
          ].forEach(({ elements, duration }) => {
            if (!elements.length) {
              return;
            }

            gsap.to(elements, {
              autoAlpha: 1,
              y: 0,
              duration,
              ease: "power3.out",
              stagger: motion.stagger,
              overwrite: "auto",
              onComplete: () => gsap.set(elements, { clearProps: "willChange" }),
            });
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
