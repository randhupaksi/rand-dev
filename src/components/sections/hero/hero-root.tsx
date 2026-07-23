import { useEffect, useRef } from "react";
import gsap from "gsap";

import { HeroCta } from "@/components/sections/hero/hero-cta";
import { HeroIntro } from "@/components/sections/hero/hero-intro";
import { HeroSpotlight } from "@/components/sections/hero/hero-spotlight";
import { HeroSocials } from "@/components/sections/hero/hero-socials";
import { HeroVisual } from "@/components/sections/hero/hero-visual";
import type { HeroContent } from "@/types/hero";

type HeroRootProps = {
  content: HeroContent;
};

export function HeroRoot({ content }: HeroRootProps) {
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
          "[data-hero-reveal]",
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.82,
            stagger: 0.08,
          },
        )
        .fromTo(
          "[data-hero-card]",
          { y: 34, opacity: 0, rotate: 4, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            scale: 1,
            duration: 0.9,
          },
          "-=0.52",
        )
        .fromTo(
          "[data-hero-ring]",
          { scale: 0.88, opacity: 0, rotate: -8 },
          {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 1.05,
            ease: "power2.out",
          },
          "-=0.84",
        );

      gsap.to("[data-hero-float]", {
        y: -10,
        duration: 3.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-hero-card]", {
        y: 8,
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-hero-orb]", {
        scale: 1.08,
        opacity: 0.82,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-shell relative flex items-center overflow-hidden pt-4 sm:pt-6 lg:pt-0"
    >
      <HeroSpotlight />

      <div
        id="home"
        className="relative z-10 grid w-full gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(22rem,0.98fr)] lg:items-center lg:gap-10"
      >
        <div className="order-2 flex max-w-[39rem] flex-col gap-4 sm:gap-5 lg:order-1 lg:gap-8">
          <div data-hero-reveal className="content-stack-sm lg:content-stack-md">
            <div className="ds-badge type-overline hidden lg:inline-flex">
              Creative Web Developer
            </div>

            <HeroIntro
              eyebrow={content.eyebrow}
              name={content.name}
              rolePrefix={content.rolePrefix}
              roleHighlight={content.roleHighlight}
              description={content.description}
              mobileVisual={<HeroVisual />}
              mobileBadge={
                <div className="ds-badge type-overline">
                  Creative Web Developer
                </div>
              }
            />
          </div>

          <div data-hero-reveal>
            <HeroCta
              primaryLabel={content.primaryAction}
              secondaryLabel={content.secondaryAction}
            />
          </div>

          <div data-hero-reveal>
            <HeroSocials />
          </div>
        </div>

        <div
          data-hero-reveal
          className="order-1 mt-2 hidden sm:mt-4 lg:order-2 lg:mt-0 lg:block"
        >
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
