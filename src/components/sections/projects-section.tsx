import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { DraftBadge } from "@/components/common/draft-badge";
import { MediaPlaceholder } from "@/components/common/media-placeholder";
import { SectionIndex } from "@/components/common/section-index";
import { projects } from "@/data/projects";
import { useReveal } from "@/hooks/use-reveal";

export function ProjectsSection() {
  const scopeRef = useReveal<HTMLElement>();
  const [featured, ...others] = projects;

  return (
    <section ref={scopeRef} id="portfolio" className="section-shell">
      <div className="content-stack-lg">
        <div className="content-stack-md">
          <div data-reveal>
            <SectionIndex index="03" label="Selected Work" />
          </div>
          <div
            data-reveal
            className="flex flex-wrap items-end justify-between gap-4"
          >
            <h2 className="type-h2 max-w-2xl">
              Karya yang mewakili cara saya berpikir.
            </h2>
            <Link
              to="/projects"
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent transition-colors duration-300 hover:text-highlight"
            >
              Semua project
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Featured */}
        {featured ? (
          <Link
            data-reveal
            to={`/projects/${featured.slug}`}
            className="ds-card ds-card-interactive group block overflow-hidden"
          >
            <div className="grid gap-6 p-[var(--card-padding)] lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.75fr)] lg:items-center lg:gap-10">
              <div className="content-stack-md">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="type-overline text-accent">
                    Featured
                  </span>
                  <span className="type-overline">
                    {featured.category} · {featured.period}
                  </span>
                  {featured.status === "draft" ? (
                    <DraftBadge label="Draft case study" />
                  ) : null}
                </div>

                <h3 className="type-h3">
                  {featured.name}
                </h3>
                <p className="type-body-sm max-w-2xl">
                  {featured.summary}
                </p>

                <div className="type-overline flex flex-wrap items-center gap-x-3 gap-y-1.5 text-brand-soft">
                  {featured.stack.map((item, index) => (
                    <span key={item} className="flex items-center gap-3">
                      {index > 0 ? (
                        <span aria-hidden="true" className="text-brand-muted">
                          ·
                        </span>
                      ) : null}
                      {item}
                    </span>
                  ))}
                </div>

                <span className="group/link inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors duration-300 group-hover:text-highlight">
                  Buka case study
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>

              <MediaPlaceholder
                label="Project Image Placeholder"
                hint="Tambahkan screenshot asli melalui src/data/projects.ts"
                aspect="wide"
              />
            </div>
          </Link>
        ) : null}

        {/* Index rows */}
        <div data-reveal>
          {others.map((project, index) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="ds-divider group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-4 border-t py-6 transition-all duration-300 last:border-b hover:border-border-strong hover:bg-surface-subtle hover:pl-2 sm:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,0.45fr)_auto] sm:py-7"
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
        </div>
      </div>
    </section>
  );
}
