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
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";

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
        className="ds-card ds-card-solid relative overflow-hidden px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-12"
      >
        <div className="relative z-10 content-stack-lg">
          <div className="mx-auto max-w-5xl text-center content-stack-sm">
            <div
              data-about-copy
              className="mx-auto section-eyebrow"
            >
              About Me
            </div>
            <h2
              data-about-copy
              className="type-h2"
            >
              Tentang <span className="text-accent">Randhu</span> Paksi
              Membumi
            </h2>
            <p
              data-about-copy
              className="type-body mx-auto max-w-4xl sm:text-lg"
            >
              Saya siswa SMK PPLG kelas 11 yang fokus membangun website dengan
              struktur yang rapi, visual yang clean, dan pengalaman pengguna
              yang terasa matang.
            </p>

            <div className="flex flex-wrap justify-center gap-2.5">
              <Badge
                data-about-meta
              >
                SMK PPLG - Class 11
              </Badge>
              <Badge
                variant="primary"
                data-about-meta
              >
                Creative Web Developer
              </Badge>
            </div>
          </div>

          <div className="rule-gradient" />

          <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 md:grid-cols-6 md:gap-y-3">
            {aboutFeatureItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  data-about-item
                  className="group flex flex-col items-center gap-4 rounded-[var(--control-radius)] px-2 py-3 text-center transition-all duration-300 hover:-translate-y-1 sm:px-3"
                >
                  <div className="ds-icon-control size-14 rounded-[var(--control-radius)] text-accent shadow-sm group-hover:scale-105 group-hover:border-border-strong">
                    <Icon className="size-5" />
                  </div>

                  <p className="type-body-medium text-foreground">
                    {item.title}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="rule-gradient" />

          <div data-about-cta className="flex justify-center">
            <a
              href="#skills"
              className={buttonVariants({ variant: "secondary", size: "md" })}
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
