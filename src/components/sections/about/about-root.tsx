import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowRight,
  Blend,
  Boxes,
  LayoutTemplate,
  MonitorSmartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

import type { AboutProfile } from "@/types/home";

type AboutRootProps = {
  profile: AboutProfile;
};

const aboutFeatureItems = [
  { title: "UI Konsisten", icon: LayoutTemplate },
  { title: "Struktur Rapi", icon: Boxes },
  { title: "Interaksi Halus", icon: Sparkles },
  { title: "Responsive", icon: MonitorSmartphone },
  { title: "Logic Flow", icon: Workflow },
  { title: "Code + Visual", icon: Blend },
];

export function AboutRoot({ profile: _profile }: AboutRootProps) {
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
          "[data-about-panel]",
          { y: 24, opacity: 0, scale: 0.985 },
          { y: 0, opacity: 1, scale: 1, duration: 0.72 },
        )
        .fromTo(
          "[data-about-copy]",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.62, stagger: 0.08 },
          "-=0.38",
        )
        .fromTo(
          "[data-about-meta]",
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, stagger: 0.06 },
          "-=0.36",
        )
        .fromTo(
          "[data-about-item]",
          { y: 18, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.52, stagger: 0.06 },
          "-=0.3",
        )
        .fromTo(
          "[data-about-cta]",
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.2",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-shell-compact">
      <div
        data-about-panel
        className="relative overflow-hidden rounded-[2rem] border border-[rgb(211_196_255/0.16)] bg-[linear-gradient(165deg,rgba(255,255,255,0.04),rgba(8,6,16,0.58))] px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-12"
      >
        <div className="pointer-events-none absolute inset-x-24 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(124,92,250,0.2),transparent_72%)] blur-xl" />

        <div className="relative z-10 content-stack-lg">
          <div className="mx-auto max-w-[58rem] text-center content-stack-sm">
            <div
              data-about-copy
              className="mx-auto section-eyebrow border-white/12 bg-white/3"
            >
              About Me
            </div>
            <h2
              data-about-copy
              className="text-[clamp(2.5rem,4.6vw,4rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-foreground"
            >
              Tentang <span className="text-[var(--accent)]">Randhu</span> Paksi
              Membumi
            </h2>
            <p
              data-about-copy
              className="mx-auto max-w-[52rem] text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9 lg:text-[1.35rem] lg:leading-10"
            >
              Saya siswa SMK PPLG kelas 11 yang fokus membangun website dengan
              struktur yang rapi, visual yang clean, dan pengalaman pengguna
              yang terasa matang.
            </p>

            <div className="flex flex-wrap justify-center gap-2.5">
              <span
                data-about-meta
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-[var(--brand-soft)]"
              >
                SMK PPLG - Class 11
              </span>
              <span
                data-about-meta
                className="rounded-full border border-[rgb(211_196_255/0.18)] bg-[rgb(124,92,250,0.1)] px-3.5 py-1.5 text-xs text-[var(--accent)]"
              >
                Creative Web Developer
              </span>
            </div>
          </div>

          <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(211,196,255,0.18),transparent)]" />

          <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 md:grid-cols-6 md:gap-y-3">
            {aboutFeatureItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  data-about-item
                  className="group flex flex-col items-center gap-4 rounded-[1rem] px-2 py-3 text-center transition-all duration-300 hover:-translate-y-1 sm:px-3"
                >
                  <div className="flex size-[3.8rem] items-center justify-center rounded-[1.15rem] border border-white/12 bg-white/[0.03] text-[var(--accent)] shadow-[0_8px_26px_rgba(0,0,0,0.16)] transition-all duration-300 group-hover:scale-105 group-hover:border-[rgb(211_196_255/0.28)] group-hover:bg-white/[0.055]">
                    <Icon className="size-5" />
                  </div>

                  <p className="text-sm font-semibold leading-5 text-foreground lg:text-[0.97rem] lg:leading-6">
                    {item.title}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(211,196,255,0.18),transparent)]" />

          <div data-about-cta className="flex justify-center">
            <a
              href="#skills"
              className="inline-flex items-center gap-2 rounded-full border border-[rgb(211_196_255/0.16)] bg-[linear-gradient(120deg,rgba(124,92,250,0.22),rgba(255,255,255,0.05))] px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgb(211_196_255/0.28)] hover:bg-[linear-gradient(120deg,rgba(124,92,250,0.3),rgba(255,255,255,0.08))]"
            >
              Lihat Fokus Keahlian
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
