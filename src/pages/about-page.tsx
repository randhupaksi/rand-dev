import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button-variants";
import { aboutFacts, journeyItems, principles, skillGroups } from "@/data/about";
import { siteIdentity } from "@/data/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useReveal } from "@/hooks/use-reveal";

export default function AboutPage() {
  usePageMeta(
    "About - Randhu Paksi Membumi",
    "How Randhu Paksi Membumi approaches product interfaces, workflows, and frontend implementation.",
  );

  const scopeRef = useReveal<HTMLDivElement>();

  return (
    <div ref={scopeRef}>
      {/* Intro editorial */}
      <section className="section-shell-compact">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(16rem,0.48fr)] lg:items-end lg:gap-20">
          <div className="content-stack-md">
            <div data-reveal className="section-eyebrow">
              About
            </div>
            <h1
              data-reveal
              className="type-h1"
            >
              I build interfaces that make{" "}
              <span className="text-gradient-brand">
                complex work easier to follow
              </span>
              .
            </h1>
            <p data-reveal className="section-copy max-w-3xl">
              I’m {siteIdentity.name}, a freelance Full-stack Developer at Matik Creative
              Technology. I work across interface, product flow, and the code that connects
              them—then keep refining the details until the product feels clear in use.
            </p>
            <p data-reveal className="type-overline text-brand-soft">
              Freelance full-stack developer
            </p>
          </div>

          <aside
            data-reveal
            aria-label="Professional highlights"
            className="border-t border-border-strong pt-6 lg:border-l lg:border-t-0 lg:pb-1 lg:pl-6 lg:pt-0"
          >
            <p className="type-overline text-accent">In practice</p>
            <dl className="mt-5 divide-y divide-border-subtle">
              {aboutFacts.map((fact) => (
                <div key={fact.label} className="py-5 first:pt-0 last:pb-0">
                  <dt className="type-overline text-brand-muted">{fact.label}</dt>
                  <dd className="mt-2 flex items-center justify-between gap-3 text-base font-semibold tracking-tight text-foreground">
                    <span>{fact.value}</span>
                    {fact.href ? (
                      <a
                        href={fact.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${fact.value}`}
                        className="ds-icon-control size-9 shrink-0 text-accent transition-colors hover:border-border-strong hover:bg-primary-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                      >
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </a>
                    ) : null}
                  </dd>
                  <dd className="mt-1 text-sm leading-6 text-muted-foreground">
                    {fact.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* Prinsip kerja - editorial rows, bukan card grid */}
      <section className="section-shell-compact">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div data-reveal className="content-stack-sm lg:sticky lg:top-32 lg:self-start">
            <div className="section-eyebrow">Working Philosophy</div>
            <h2 className="type-h3">
            The decisions I keep coming back to
            </h2>
            <p className="section-copy">
              The principles I use when a product has more going on than a single screen.
            </p>
          </div>

          <ol className="content-stack-lg">
            {principles.map((principle, index) => (
              <li
                key={principle.title}
                data-reveal
                className="ds-divider grid gap-4 border-t pt-6 sm:grid-cols-[3.5rem_minmax(0,1fr)]"
              >
                <span className="font-mono text-sm text-brand-muted">
                  0{index + 1}
                </span>
                <div className="content-stack-xs">
                  <h3 className="type-h4">
                    {principle.title}
                  </h3>
                  <p className="type-body-sm">
                    {principle.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Skills */}
      <section className="section-shell-compact">
        <div className="content-stack-lg">
          <div data-reveal className="content-stack-sm max-w-3xl">
            <div className="section-eyebrow">Skills & tools</div>
            <h2 className="type-h3">
              The stack behind the work
            </h2>
            <p className="section-copy">
              Tools and practices I use to turn product flows into responsive interfaces and working logic.
            </p>
          </div>

          <div className="ds-divider border-y">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                data-reveal
                className="grid gap-4 border-t border-border-subtle py-6 first:border-t-0 sm:grid-cols-[minmax(10rem,0.35fr)_minmax(0,1fr)] sm:gap-8"
              >
                <div className="content-stack-xs">
                  <h3 className="type-h4">{group.title}</h3>
                  <p className="type-caption">{group.description}</p>
                </div>
                <p className="type-body-sm text-brand-soft">
                  {group.items.join(" · ")}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="section-shell-compact">
        <div className="content-stack-lg">
          <div data-reveal className="content-stack-sm max-w-3xl">
            <div className="section-eyebrow">A bit of history</div>
            <h2 className="type-h3">
              Work, recognition, and momentum
            </h2>
            <p className="section-copy">
              The experience behind how I work today—from hands-on placement to freelance product work.
            </p>
          </div>

          <ol className="ds-divider relative content-stack-lg border-l pl-8">
            {journeyItems.map((item) => {
              const Icon = item.kind === "award" ? Trophy : BriefcaseBusiness;

              return (
                <li key={item.title} data-reveal className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-9 top-1.5 inline-flex size-3 items-center justify-center rounded-full border border-border-strong bg-background"
                  >
                    <span className="size-1.5 rounded-full bg-accent" />
                  </span>

                  <div className="content-stack-xs lg:grid lg:grid-cols-[9rem_minmax(15rem,0.85fr)_minmax(18rem,1fr)] lg:items-start lg:gap-8">
                    <div className="flex flex-wrap items-center gap-3 lg:col-start-1 lg:pt-1">
                      <span className="type-overline">{item.period}</span>
                    </div>

                    <div className="content-stack-xs lg:col-start-2">
                      <h3 className="type-h4 flex flex-wrap items-center gap-2.5">
                        <Icon
                          aria-hidden="true"
                          className="size-4 text-accent"
                        />
                        {item.title}
                      </h3>
                      <p className="type-body-medium text-brand-soft">
                        {item.organization}
                      </p>
                    </div>

                    <p className="type-body-sm max-w-2xl lg:col-start-3 lg:max-w-none">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell-compact">
        <div
          data-reveal
          className="surface-elevated flex flex-col gap-6 p-[var(--card-padding)] sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="content-stack-xs">
            <h2 className="type-h4">
              See the thinking in a live product.
            </h2>
            <p className="type-body-sm">
              Citra Negara Attendance System shows how interface, workflow, and supporting logic come together.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className={buttonVariants({ variant: "primary", size: "md" })}
            >
              See the work
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className={buttonVariants({ variant: "outline", size: "md" })}
            >
              Get in touch
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
