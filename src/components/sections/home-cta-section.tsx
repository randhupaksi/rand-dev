import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { DraftBadge } from "@/components/common/draft-badge";
import { SectionIndex } from "@/components/common/section-index";
import { homeCta } from "@/data/home";
import { contactChannels, siteIdentity } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";

export function HomeCtaSection() {
  const scopeRef = useReveal<HTMLElement>();
  const email = contactChannels.find((channel) => channel.key === "email");

  return (
    <section ref={scopeRef} className="section-shell">
      <div className="content-stack-lg">
        <div data-reveal>
          <SectionIndex index="06" label="Contact" />
        </div>

        <h2
          data-reveal
          className="max-w-[56rem] text-[clamp(2.6rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[var(--tracking-title)] text-foreground"
        >
          Punya ide yang ingin dibuat{" "}
          <span className="bg-gradient-to-r from-[#f1d3ff] via-[var(--accent)] to-[#c24aff] bg-clip-text text-transparent">
            lebih hidup
          </span>
          ?
        </h2>

        <p data-reveal className="section-copy max-w-[38rem]">
          {homeCta.description}
        </p>

        <div data-reveal className="flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex h-14 items-center gap-3 rounded-full border border-[rgb(211_196_255/0.18)] bg-[linear-gradient(135deg,#8f63ff_0%,#7c5cfa_60%,#6b49ef_100%)] px-8 text-base font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
          >
            {homeCta.primaryLabel}
            <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/projects"
            className="group inline-flex h-14 items-center gap-3 rounded-full border border-white/10 bg-white/3 px-8 text-base font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/6"
          >
            {homeCta.secondaryLabel}
            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div
          data-reveal
          className="flex flex-col gap-4 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-[var(--brand-muted)]">
              Email
            </span>
            <span className="font-mono text-sm text-[var(--brand-soft)]">
              {email?.value}
            </span>
            {email?.isPlaceholder ? <DraftBadge label="Placeholder" /> : null}
          </div>

          <div className="flex items-center gap-3">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-[var(--success)]" />
            </span>
            <span className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-[var(--brand-soft)]">
              {siteIdentity.availability.value}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
