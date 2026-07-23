import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { DraftBadge } from "@/components/common/draft-badge";
import { SectionIndex } from "@/components/common/section-index";
import { buttonVariants } from "@/components/ui/button-variants";
import { homeCta } from "@/data/home";
import { contactChannels, siteIdentity } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function HomeCtaSection() {
  const scopeRef = useReveal<HTMLElement>();
  const email = contactChannels.find((channel) => channel.key === "email");

  return (
    <section ref={scopeRef} className="section-shell">
      <div className="content-stack-lg">
        <div data-reveal>
          <SectionIndex index="05" label="Contact" />
        </div>

        <h2
          data-reveal
          className="type-display max-w-4xl"
        >
          Punya ide yang ingin dibuat{" "}
          <span className="text-gradient-brand">
            lebih hidup
          </span>
          ?
        </h2>

        <p data-reveal className="section-copy max-w-2xl">
          {homeCta.description}
        </p>

        <div data-reveal className="flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className={cn(buttonVariants({ variant: "primary", size: "lg" }), "group")}
          >
            {homeCta.primaryLabel}
            <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/projects"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "group")}
          >
            {homeCta.secondaryLabel}
            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div
          data-reveal
          className="ds-divider flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="type-overline">
              Email
            </span>
            <span className="font-mono text-sm text-brand-soft">
              {email?.value}
            </span>
            {email?.isPlaceholder ? <DraftBadge label="Placeholder" /> : null}
          </div>

          <div className="flex items-center gap-3">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            <span className="type-overline text-brand-soft">
              {siteIdentity.availability.value}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
