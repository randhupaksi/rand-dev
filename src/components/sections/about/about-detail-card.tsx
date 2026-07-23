import {
  GraduationCap,
  LayoutTemplate,
  ScanSearch,
} from "lucide-react";

import type { AboutCard, AboutCardIconKey } from "@/types/home";

type AboutDetailCardProps = {
  card: AboutCard;
  iconKey: AboutCardIconKey;
};

const iconMap = {
  "graduation-cap": GraduationCap,
  "layout-template": LayoutTemplate,
  "scan-search": ScanSearch,
} satisfies Record<AboutCardIconKey, typeof GraduationCap>;

export function AboutDetailCard({
  card,
  iconKey,
}: AboutDetailCardProps) {
  const Icon = iconMap[iconKey];

  return (
    <article className="interactive-ring group h-full rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),rgba(0,0,0,0.18))] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(211_196_255/0.22)] hover:bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(0,0,0,0.2))]">
      <div className="flex items-start gap-3">
        <div className="rounded-full border border-white/10 bg-white/5 p-2.5 text-[var(--accent)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
          <Icon className="size-4" />
        </div>

        <div className="min-w-0 content-stack-xs">
          <p className="text-[0.64rem] uppercase tracking-[0.24em] text-[var(--brand-muted)]">
            {card.label}
          </p>
          <h3 className="text-base font-semibold leading-6 text-foreground transition-colors duration-300 group-hover:text-white">
            {card.title}
          </h3>
          <p className="text-sm leading-6 text-muted-foreground">
            {card.description}
          </p>
        </div>
      </div>
    </article>
  );
}
