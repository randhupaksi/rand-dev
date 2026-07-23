import { Download, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";

type HeroCtaProps = {
  primaryLabel: string;
  secondaryLabel: string;
};

export function HeroCta({ primaryLabel, secondaryLabel }: HeroCtaProps) {
  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
      <Button
        size="lg"
        className="group h-[3.25rem] w-full rounded-full border border-[rgb(211_196_255/0.18)] bg-[linear-gradient(135deg,#8f63ff_0%,#7c5cfa_60%,#6b49ef_100%)] px-6 text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] sm:h-[var(--button-height-lg)] sm:w-auto"
      >
        <Download className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105" />
        {primaryLabel}
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="group h-[3.25rem] w-full rounded-full border-white/10 bg-white/3 px-6 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/6 sm:h-[var(--button-height-lg)] sm:w-auto"
      >
        <Eye className="size-4 transition-transform duration-300 group-hover:scale-110" />
        {secondaryLabel}
      </Button>
    </div>
  );
}
