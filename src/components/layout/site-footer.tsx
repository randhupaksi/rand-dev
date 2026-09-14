import {
  ArrowUpRight,
  BriefcaseBusiness,
  House,
  Mail,
  UserRound,
} from "lucide-react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import { SocialLinks } from "@/components/common/social-links";
import { buttonVariants } from "@/components/ui/button-variants";
import { navigationItems } from "@/data/navigation";
import { projects } from "@/data/projects";
import { contactChannels, siteIdentity, socialLinks } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const navigationIcons = {
  "/": House,
  "/about": UserRound,
  "/projects": BriefcaseBusiness,
  "/contact": Mail,
} as const;

export function SiteFooter() {
  const footerRef = useReveal<HTMLElement>();
  const year = new Date().getFullYear();
  const email = contactChannels.find((channel) => channel.key === "email");
  const featuredProject = projects[0];

  useLayoutEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return;
    }

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        footer.removeAttribute("data-footer-container-motion");
        return;
      }

      const entrance = gsap.fromTo(
        footer,
        { y: 36 },
        {
          y: 0,
          duration: 0.64,
          ease: "power3.out",
          paused: true,
          force3D: true,
          clearProps: "willChange",
        },
      );

      ScrollTrigger.create({
        trigger: footer,
        start: "top 92%",
        animation: entrance,
        toggleActions: "play none none reverse",
        invalidateOnRefresh: true,
      });

      footer.removeAttribute("data-footer-container-motion");
    }, footerRef);

    const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      window.cancelAnimationFrame(refreshFrame);
      ctx.revert();
    };
  }, [footerRef]);

  return (
    <footer
      ref={footerRef}
      data-footer-container-motion="pending"
      className="ds-divider relative left-1/2 mt-4 w-screen -translate-x-1/2 rounded-t-(--card-radius) border border-b-0 bg-surface-1 pb-28 pt-14 lg:mt-8 lg:pb-6"
    >
      <div className="page-shell grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.6fr)_minmax(0,0.8fr)] lg:gap-16">
        <div data-reveal className="content-stack-sm max-w-sm">
          <p className="text-lg font-semibold tracking-tight text-foreground">
            {siteIdentity.brandFirst}{" "}
            <span className="text-accent">{siteIdentity.brandSecond}</span>
          </p>
          <p className="text-sm leading-7 text-muted-foreground">
            {siteIdentity.tagline}
          </p>
          {email?.href ? (
            <a
              href={email.href}
              className={cn(
                buttonVariants({ variant: "outline", size: "md" }),
                "group w-fit max-w-full",
              )}
            >
              {email.value}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ) : null}
          {socialLinks.some((link) => link.href) ? <SocialLinks className="pt-1" /> : null}
        </div>

        <nav data-reveal aria-label="Navigasi footer" className="content-stack-sm">
          <p className="type-overline">
            Explore
          </p>
          <ul className="content-stack-xs">
            {navigationItems.map((item) => {
              const Icon = navigationIcons[item.to as keyof typeof navigationIcons];

              return (
                <li key={item.to}>
                <Link
                  to={item.to}
                  className="ds-text-link group inline-flex min-h-9 items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-4 text-accent transition-transform duration-200 group-hover:-translate-y-0.5"
                  />
                  {item.label}
                </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {featuredProject ? (
          <div data-reveal className="content-stack-sm">
            <p className="type-overline">Featured product</p>
            <p className="text-base font-semibold tracking-tight text-foreground">
              {featuredProject.name}
            </p>
            <p className="text-sm leading-6 text-muted-foreground">
              Live in production · 2,000+ users
            </p>
            <a
              href={featuredProject.links.demo ?? undefined}
              target="_blank"
              rel="noreferrer"
              className="ds-text-link group inline-flex min-h-9 w-fit items-center gap-2 text-sm font-medium text-accent hover:text-highlight"
            >
              View live product
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        ) : null}
      </div>

      <div className="page-shell ds-divider mt-10 flex items-center justify-center border-t pt-5 text-xs text-muted-foreground">
        <p>
          © {year} {siteIdentity.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
