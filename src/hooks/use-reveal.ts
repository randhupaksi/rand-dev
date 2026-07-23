import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-based reveal: elemen bertanda `data-reveal` di dalam scope muncul
 * saat masuk viewport (sekali saja), sehingga halaman terasa hidup ketika
 * discroll — bukan animasi mount yang selesai sebelum terlihat.
 * Menghormati prefers-reduced-motion.
 */
export function useReveal<T extends HTMLElement>(dependencyKey?: string) {
  const scopeRef = useRef<T>(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

      if (reduceMotion.matches) {
        return;
      }

      const elements = (self.selector?.("[data-reveal]") ?? []) as HTMLElement[];

      elements.forEach((element) => {
        gsap.fromTo(
          element,
          { y: 26, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });
    }, scopeRef);

    return () => ctx.revert();
  }, [dependencyKey]);

  return scopeRef;
}
