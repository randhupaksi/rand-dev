import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowRight,
  Code2,
  LayoutPanelTop,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { expertiseItems } from "@/data/home";

const icons = [Code2, LayoutPanelTop, ShieldCheck];

export function ExpertiseSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

      if (reduceMotion.matches) {
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      timeline
        .fromTo(
          "[data-expertise-panel]",
          { y: 24, opacity: 0, scale: 0.985 },
          { y: 0, opacity: 1, scale: 1, duration: 0.72 },
        )
        .fromTo(
          "[data-expertise-copy]",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.56, stagger: 0.08 },
          "-=0.4",
        )
        .fromTo(
          "[data-expertise-card]",
          { y: 22, opacity: 0, scale: 0.985 },
          { y: 0, opacity: 1, scale: 1, duration: 0.54, stagger: 0.09 },
          "-=0.2",
        )
        .fromTo(
          "[data-expertise-cta]",
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.46 },
          "-=0.14",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section-shell-compact">
      <div className="relative z-10 content-stack-lg">
        <div data-expertise-panel className="relative flex justify-center">
          <div className="pointer-events-none absolute -top-6 h-20 w-64 bg-[radial-gradient(circle_at_center,rgba(124,92,250,0.28),transparent_72%)] blur-2xl" />
          <div className="relative z-10 flex flex-col items-center gap-3 text-center">
            <div
              data-expertise-copy
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/4 px-3.5 py-1.5 text-xs font-medium text-[var(--brand-soft)]"
            >
              <Sparkles className="size-3.5 text-[var(--accent)]" />
              Expertise Focus
            </div>
            <h2
              data-expertise-copy
              className="text-center text-[clamp(2rem,3.3vw,2.95rem)] font-semibold tracking-tight text-foreground"
            >
              Core{" "}
              <span className="bg-gradient-to-r from-[#f1d3ff] via-[var(--accent)] to-[#c24aff] bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
          </div>
        </div>

        <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(211,196,255,0.18),transparent)]" />

        <div className="grid gap-4 lg:grid-cols-3">
          {expertiseItems.map((item, index) => {
            const Icon = icons[index];

            return (
              <article
                key={item.title}
                data-expertise-card
                className="group h-full rounded-[1.4rem] border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.03),rgba(0,0,0,0.18))] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(211_196_255/0.22)] hover:bg-[linear-gradient(170deg,rgba(255,255,255,0.05),rgba(0,0,0,0.2))]"
              >
                <div className="content-stack-sm">
                  <div className="flex items-center justify-between">
                    <div className="rounded-[0.9rem] border border-white/10 bg-white/5 p-2.5 text-[var(--accent)] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="size-4" />
                    </div>
                    <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-[var(--brand-muted)]">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="content-stack-xs">
                    <h3 className="text-xl font-semibold leading-7 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-[var(--brand-soft)]"
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div data-expertise-cta className="flex justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-[rgb(211_196_255/0.16)] bg-white/4 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgb(211_196_255/0.28)] hover:bg-white/8"
          >
            Lihat Selected Projects
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
