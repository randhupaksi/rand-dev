import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { AboutProfile } from "@/types/home";
import { buttonVariants } from "@/components/ui/button-variants";

type AboutRootProps = {
  profile: AboutProfile;
};

export function AboutRoot({ profile }: AboutRootProps) {
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
          "[data-about-copy]",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.62, stagger: 0.08 },
          "-=0.38",
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
      <div className="grid gap-10 border-y border-border-subtle py-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.62fr)] lg:items-end lg:gap-16 lg:py-14">
        <div className="content-stack-md">
          <p data-about-copy className="type-overline">A little about me</p>
          <div data-about-copy className="content-stack-sm max-w-3xl">
            <h2 className="type-h2">I like making complex things feel a little easier to use.</h2>
            <p className="type-body">{profile.summary}</p>
          </div>
          <p data-about-copy className="max-w-2xl border-l border-accent pl-4 text-sm leading-7 text-brand-soft">
            {profile.statement}
          </p>
        </div>

        <div className="content-stack-md lg:pb-1">
          <dl data-about-copy className="content-stack-sm border-t border-border-subtle pt-5">
            <div className="flex items-baseline justify-between gap-5">
              <dt className="type-overline">Currently</dt>
              <dd className="text-right text-sm text-foreground">{profile.role}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-5">
              <dt className="type-overline">Learning at</dt>
              <dd className="text-right text-sm text-foreground">{profile.education}</dd>
            </div>
          </dl>

          <Link
            data-about-cta
            to="/about"
            className={buttonVariants({ variant: "ghost", size: "md" })}
          >
            More about how I work
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
