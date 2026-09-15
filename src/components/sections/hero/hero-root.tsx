import { useLayoutEffect, useRef } from "react";
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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

      if (reduceMotion.matches) {
        sectionRef.current?.removeAttribute("data-hero-motion");
        return;
      }

      const isCompactViewport = window.matchMedia("(max-width: 767px)").matches;
      const motion = isCompactViewport
        ? { nameOffset: 30, roleOffset: 18, copyOffset: 14, ctaOffset: 16, socialOffset: 10 }
        : { nameOffset: 42, roleOffset: 24, copyOffset: 18, ctaOffset: 20, socialOffset: 14 };

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      timeline
        .set(
          "[data-hero-eyebrow], [data-hero-name-line], [data-hero-role], [data-hero-description], [data-hero-mobile-badge], [data-hero-cta], [data-hero-socials], [data-hero-social-link], [data-hero-ring], [data-hero-callout], [data-hero-glow]",
          {
          willChange: "transform,opacity",
          },
        )
        .fromTo(
          "[data-hero-eyebrow]",
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.48,
          },
        )
        .fromTo(
          "[data-hero-name-line]",
          { y: motion.nameOffset, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.72, stagger: 0.1 },
          "-=0.2",
        )
        .fromTo(
          "[data-hero-role]",
          { y: motion.roleOffset, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.58 },
          "-=0.34",
        );

      if (isCompactViewport) {
        timeline.fromTo(
          "[data-hero-social-link]",
          { y: motion.socialOffset, opacity: 0, scale: 0.92 },
          { y: 0, opacity: 1, scale: 1, duration: 0.46, stagger: 0.08 },
          "-=0.18",
        );
      }

      timeline
        .fromTo(
          "[data-hero-description]",
          { y: motion.copyOffset, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.62 },
          isCompactViewport ? "-=0.22" : "-=0.3",
        )
        .fromTo(
          "[data-hero-ring]",
          { scale: 0.84, opacity: 0, rotate: -8 },
          {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 0.92,
            ease: "power2.out",
          },
          "-=0.74",
        )
        .fromTo(
          "[data-hero-glow]",
          { opacity: 0, scale: 0.82 },
          { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out", stagger: 0.08 },
          "-=0.72",
        )
        .fromTo(
          "[data-hero-mobile-badge]",
          { y: 12, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 0.42 },
          "-=0.44",
        )
        .fromTo(
          "[data-hero-cta]",
          { y: motion.ctaOffset, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.58, stagger: 0.08 },
          "-=0.52",
        );

      if (!isCompactViewport) {
        timeline.fromTo(
          "[data-hero-social-link]",
          { y: motion.socialOffset, opacity: 0, scale: 0.92 },
          { y: 0, opacity: 1, scale: 1, duration: 0.46, stagger: 0.08 },
          "-=0.34",
        );
      }

      timeline
        .fromTo(
          "[data-hero-callout]",
          { x: 18, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.56 },
          "-=0.26",
        )
        .set(
          "[data-hero-eyebrow], [data-hero-name-line], [data-hero-role], [data-hero-description], [data-hero-mobile-badge], [data-hero-cta], [data-hero-socials], [data-hero-social-link], [data-hero-ring], [data-hero-callout], [data-hero-glow]",
          { clearProps: "willChange" },
        );

      if (isCompactViewport) {
        timeline.timeScale(1.16);
      }

      sectionRef.current?.removeAttribute("data-hero-motion");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-hero-motion="pending"
      className="hero-shell relative flex items-center overflow-hidden pt-4 sm:pt-6 lg:pt-0"
    >
      <HeroSpotlight />

      <div
        id="home"
        className="relative z-10 grid w-full gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(22rem,0.98fr)] lg:items-center lg:gap-10"
      >
        <div className="order-2 flex max-w-[39rem] flex-col gap-4 sm:gap-5 lg:order-1 lg:gap-8">
          <div className="content-stack-sm lg:content-stack-md">
            <p className="type-overline hidden lg:block">Frontend Developer · Matik Creative Technology</p>

            <HeroIntro
              eyebrow={content.eyebrow}
              name={content.name}
              rolePrefix={content.rolePrefix}
              roleHighlight={content.roleHighlight}
              description={content.description}
              mobileSocials={<HeroSocials />}
              mobileVisual={<HeroVisual />}
              mobileBadge={<p className="type-overline">Frontend Developer</p>}
            />
          </div>

          <div>
            <HeroCta
              primaryLabel={content.primaryAction}
              secondaryLabel={content.secondaryAction}
            />
          </div>

          <div className="hidden lg:block">
            <HeroSocials />
          </div>
        </div>

        <div
          className="order-1 mt-2 hidden sm:mt-4 lg:order-2 lg:mt-0 lg:block"
        >
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
