import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { DraftBadge } from "@/components/common/draft-badge";
import { MediaPlaceholder } from "@/components/common/media-placeholder";
import { SectionIndex } from "@/components/common/section-index";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { useReveal } from "@/hooks/use-reveal";

export function ProjectsSection() {
  const scopeRef = useReveal<HTMLElement>();
  const [featured, ...others] = projects;

  return (
    <section ref={scopeRef} id="portfolio" className="section-shell">
      <div className="content-stack-lg">
        <div
          data-reveal
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.34fr)] lg:items-stretch lg:gap-16"
        >
          <div className="flex flex-col gap-6">
            <SectionIndex
              index="03"
              label={projects.length === 1 ? "Selected product" : "Selected work"}
            />
            <h2 className="type-h2 max-w-3xl">
              {projects.length === 1
                ? "Here’s what clean enterprise UI looks like in production"
                : "Projects shaped around real product workflows"}
            </h2>
          </div>
            <aside className="content-stack-sm border-t border-border-subtle pt-5 lg:border-l lg:border-t-0 lg:pb-1 lg:pl-6 lg:pt-0">
              <p className="type-overline text-accent">Live product</p>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-3xl font-semibold tracking-tight text-foreground">2,000+</span>
                <span className="type-body-sm">users</span>
              </div>
              <p className="type-body-sm">
                A role-aware attendance workflow built for SMK Citra Negara Depok.
              </p>
              <Link
                to={
                  projects.length === 1 && featured
                    ? `/projects/${featured.slug}`
                    : "/projects"
                }
                className="ds-text-link group inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-accent hover:text-highlight"
              >
                {projects.length === 1 ? "Read the case study" : "See all projects"}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </aside>
        </div>

        {featured ? (
          <Card
            as="article"
            data-reveal
            interactive
            className="group block overflow-hidden"
          >
            <div className="grid gap-8 p-(--card-padding) lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,1.05fr)] lg:items-center lg:gap-10">
              <div className="content-stack-md">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="type-overline text-accent">
                    Featured product
                  </span>
                  {featured.period.isPlaceholder ? (
                    <DraftBadge label="Timeline not published" />
                  ) : (
                    <span className="type-overline">{featured.period.value}</span>
                  )}
                  {featured.status === "draft" ? (
                    <DraftBadge label="Draft case study" />
                  ) : null}
                </div>

                <h3 className="type-h3">
                  {featured.name}
                </h3>
                <MediaPlaceholder
                  src={featured.thumbnail?.src}
                  alt={featured.thumbnail?.alt}
                  label="Project image placeholder"
                  hint="Add the real screenshots in src/data/projects.ts"
                  aspect="wide"
                  cropBottom
                  className="lg:hidden"
                />
                <p className="type-overline text-brand-soft">{featured.category}</p>
                <p className="type-body-sm max-w-2xl">{featured.summary}</p>

                <div className="type-body-sm flex flex-col gap-1.5 text-muted-foreground">
                  {featured.focusAreas.map((item) => (
                    <span key={item} className="flex items-center gap-3 font-sans normal-case tracking-normal">
                      <span aria-hidden="true" className="text-brand-muted">
                        ·
                      </span>
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/projects/${featured.slug}`}
                  className="ds-text-link group/link inline-flex items-center gap-2 text-sm font-medium text-accent transition-[transform,color,opacity] duration-200 ease-standard hover:-translate-y-px hover:text-highlight active:translate-y-0 active:scale-[0.995] active:opacity-85"
                >
                  Read the case study
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </Link>
              </div>

              <MediaPlaceholder
                src={featured.thumbnail?.src}
                alt={featured.thumbnail?.alt}
                label="Project image placeholder"
                hint="Add the real screenshots in src/data/projects.ts"
                aspect="wide"
                cropBottom
                className="hidden lg:flex"
              />
            </div>
          </Card>
        ) : null}

        {others.length > 0 ? <div data-reveal>
          {others.map((project, index) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="ds-divider group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-4 border-t py-6 transition-[background-color,border-color,padding,opacity] duration-300 last:border-b hover:border-border-strong hover:bg-surface-subtle hover:pl-2 active:bg-surface-hover active:opacity-80 sm:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,0.45fr)_auto] sm:py-7"
            >
              <span className="font-mono text-sm text-brand-muted">
                0{index + 2}
              </span>
              <div className="min-w-0 content-stack-xs">
                <h3 className="truncate text-xl font-semibold tracking-tight text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-2xl">
                  {project.name}
                </h3>
                <p className="truncate text-sm text-muted-foreground/70 sm:hidden">
                  {project.category}
                </p>
              </div>
              <div className="hidden min-w-0 items-center gap-3 sm:flex">
                <span className="type-overline">
                  {project.category}
                </span>
                {project.status === "draft" ? <DraftBadge label="Draft" /> : null}
              </div>
              <span
                aria-hidden="true"
                className="ds-icon-control size-10 group-hover:border-border-strong group-hover:bg-primary-surface group-hover:text-accent sm:size-11"
              >
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div> : null}
      </div>
    </section>
  );
}
