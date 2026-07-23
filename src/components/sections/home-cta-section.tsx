import { ArrowUpRight, Mail } from "lucide-react";

import { homeCta } from "@/data/home";
import { Button } from "@/components/ui/button";

export function HomeCtaSection() {
  return (
    <section id="contact" className="section-shell">
      <div className="surface-elevated overflow-hidden p-[var(--card-padding)]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.96fr)_minmax(18rem,0.64fr)] lg:items-end">
          <div className="content-stack-md">
            <div className="section-eyebrow">Final CTA</div>
            <h2 className="section-title text-[clamp(2.2rem,4.8vw,4rem)]">
              {homeCta.title}
            </h2>
            <p className="section-copy max-w-[40rem]">{homeCta.description}</p>
          </div>

          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Button
              size="lg"
              className="h-[var(--button-height-lg)] rounded-full border border-[rgb(211_196_255/0.18)] bg-[linear-gradient(135deg,#8f63ff_0%,#7c5cfa_60%,#6b49ef_100%)] px-6 text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
            >
              {homeCta.primaryLabel}
              <ArrowUpRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-[var(--button-height-lg)] rounded-full border-white/10 bg-white/4 px-6 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/6"
            >
              <Mail className="size-4" />
              {homeCta.secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
