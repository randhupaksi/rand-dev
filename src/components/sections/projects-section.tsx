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
            <h2 className="section-title max-w-[40rem] text-[clamp(2.2rem,4.4vw,3.6rem)]">
              Karya yang mewakili cara saya berpikir.
            </h2>
            <Link
              to="/projects"
              className="group inline-flex min-h-[2.75rem] items-center gap-2 text-sm font-medium text-[var(--accent)] transition-colors duration-300 hover:text-[var(--highlight)]"
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
            className="surface-panel interactive-ring group block overflow-hidden"
          >
            <div className="grid gap-6 p-[var(--card-padding)] lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.75fr)] lg:items-center lg:gap-10">
              <div className="content-stack-md">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                    Featured
                  </span>
                  <span className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-[var(--brand-muted)]">
                    {featured.category} · {featured.period}
                  </span>
                  {featured.status === "draft" ? (
                    <DraftBadge label="Draft case study" />
                  ) : null}
                </div>

                <h3 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight text-foreground">
                  {featured.name}
                </h3>
                <p className="max-w-[38rem] text-sm leading-7 text-muted-foreground">
                  {featured.summary}
                </p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs uppercase tracking-[0.14em] text-[var(--brand-soft)]">
                  {featured.stack.map((item, index) => (
                    <span key={item} className="flex items-center gap-3">
                      {index > 0 ? (
                        <span aria-hidden="true" className="text-[var(--brand-muted)]">
                          ·
                        </span>
                      ) : null}
                      {item}
                    </span>
                  ))}
                </div>

                <span className="group/link inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] transition-colors duration-300 group-hover:text-[var(--highlight)]">
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
              className="group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-4 border-t border-white/8 py-6 transition-all duration-300 last:border-b hover:border-[rgb(211_196_255/0.25)] hover:bg-white/[0.015] hover:pl-2 sm:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,0.45fr)_auto] sm:py-7"
            >
              <span className="font-mono text-sm text-[var(--brand-muted)]">
                0{index + 2}
              </span>
              <div className="min-w-0 content-stack-xs">
                <h3 className="truncate text-[clamp(1.25rem,2.6vw,1.85rem)] font-semibold tracking-tight text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {project.name}
                </h3>
                <p className="truncate text-sm text-muted-foreground/70 sm:hidden">
                  {project.category}
                </p>
              </div>
              <div className="hidden min-w-0 items-center gap-3 sm:flex">
                <span className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-[var(--brand-muted)]">
                  {project.category}
                </span>
                {project.status === "draft" ? <DraftBadge label="Draft" /> : null}
              </div>
              <span
                aria-hidden="true"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/3 text-muted-foreground transition-all duration-300 group-hover:border-[rgb(211_196_255/0.3)] group-hover:bg-[rgb(124_92_250/0.14)] group-hover:text-[var(--accent)] sm:size-11"
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
