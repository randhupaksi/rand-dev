import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useReveal } from "@/hooks/use-reveal";
import type { AboutProfile } from "@/types/home";
import { buttonVariants } from "@/components/ui/button-variants";

type AboutRootProps = {
  profile: AboutProfile;
};

export function AboutRoot({ profile }: AboutRootProps) {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} id="about" className="section-shell-compact">
      <div className="grid gap-10 border-y border-border-subtle py-10 lg:grid-cols-[minmax(0,1.16fr)_minmax(18rem,0.68fr)] lg:items-start lg:gap-20 lg:py-14">
        <div className="content-stack-md">
          <p data-reveal className="type-overline">A little about me</p>
          <div data-reveal className="content-stack-sm max-w-3xl">
            <h2 className="type-h2">I make complex enterprise workflows feel easier to use</h2>
            <p className="type-body">{profile.summary}</p>
          </div>
          <p data-reveal className="max-w-2xl border-l border-accent pl-4 text-sm leading-7 text-brand-soft">
            {profile.statement}
          </p>
        </div>

        <div className="content-stack-md border-l border-border-subtle pl-5 lg:mt-32 lg:pl-6">
          <p data-reveal className="type-overline text-muted-foreground">At a glance</p>

          <dl data-reveal className="grid gap-5">
            <div className="space-y-1.5">
              <dt className="type-overline">Currently</dt>
              <dd className="text-sm leading-6 text-foreground">{profile.role}</dd>
            </div>

            <div className="space-y-1.5">
              <dt className="type-overline">Learning at</dt>
              <dd className="text-sm leading-6 text-foreground">{profile.education}</dd>
            </div>
          </dl>

          <Link
            data-reveal
            to="/about"
            className={buttonVariants({ variant: "ghost", size: "md" })}
          >
            More about my approach
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
