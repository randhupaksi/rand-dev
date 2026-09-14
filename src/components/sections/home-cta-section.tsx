import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { SectionIndex } from "@/components/common/section-index";
import { buttonVariants } from "@/components/ui/button-variants";
import { homeCta } from "@/data/home";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function HomeCtaSection() {
  const scopeRef = useReveal<HTMLElement>();

  return (
    <section ref={scopeRef} className="section-shell">
      <div className="content-stack-lg">
        <div data-reveal>
          <SectionIndex index="06" label="Say hello" />
        </div>

        <h2
          data-reveal
          className="type-display max-w-4xl"
        >
          Have an idea you want to make{" "}
          <span className="text-gradient-brand">
            feel real
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

      </div>
    </section>
  );
}
