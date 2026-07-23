import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

type HeroCtaProps = {
  primaryLabel: string;
  secondaryLabel: string;
};

export function HeroCta({ primaryLabel, secondaryLabel }: HeroCtaProps) {
  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
      <Link
        to="/projects"
        className={cn(
          buttonVariants({ variant: "primary", size: "lg" }),
          "group w-full sm:w-auto",
        )}
      >
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105" />
        {primaryLabel}
      </Link>

      <Link
        to="/contact"
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "group w-full sm:w-auto",
        )}
      >
        <MessageCircle className="size-4 transition-transform duration-300 group-hover:scale-110" />
        {secondaryLabel}
      </Link>
    </div>
  );
}
