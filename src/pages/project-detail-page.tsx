import { ArrowLeft, ArrowRight, ExternalLink, FolderGit2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { DraftBadge } from "@/components/common/draft-badge";
import { MediaPlaceholder } from "@/components/common/media-placeholder";
import { getAdjacentProjects, getProjectBySlug } from "@/data/projects";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useReveal } from "@/hooks/use-reveal";

import NotFoundPage from "@/pages/not-found-page";

function ComingSoonLink({
  icon: Icon,
  label,
}: {
  icon: typeof ExternalLink;
  label: string;
}) {
  return (
    <span
      title={`${label} — belum tersedia`}
      className="inline-flex h-11 cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-white/14 bg-white/[0.02] px-5 text-sm text-muted-foreground/70"
    >
      <Icon className="size-4" aria-hidden="true" />
      {label}
      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[var(--brand-muted)]">
        Coming soon
      </span>
    </span>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  usePageMeta(
    project
      ? `${project.name} — Case Study — Randhu Paksi Membumi`
      : "Project tidak ditemukan — Randhu Paksi Membumi",
    project?.summary,
  );

  const scopeRef = useReveal<HTMLDivElement>(slug);

  if (!project) {
    return <NotFoundPage />;
  }

  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <div ref={scopeRef}>
      <section className="section-shell-compact">
        <div className="content-stack-md">
          <div data-reveal>
            <Link
              to="/projects"
              className="group inline-flex min-h-[2.75rem] items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              Semua project
            </Link>
          </div>

          <div data-reveal className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-[var(--brand-soft)]">
              {project.category}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--brand-muted)]">
              {project.period}
            </span>
            {project.status === "draft" ? <DraftBadge label="Draft case study" /> : null}
          </div>

          <h1
            data-reveal
            className="section-title max-w-[46rem] text-[clamp(2.4rem,4.8vw,4rem)]"
          >
            {project.name}
          </h1>
          <p data-reveal className="section-copy max-w-[44rem]">
            {project.summary}
          </p>
        </div>
      </section>

      <section className="section-shell-compact">
        <div data-reveal>
          <MediaPlaceholder
            label="Project Cover Placeholder"
            hint="Tambahkan cover asli project ini melalui src/data/projects.ts"
            aspect="video"
          />
        </div>
      </section>

      <section className="section-shell-compact">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)]">
          {/* Meta rail */}
          <aside
            data-reveal
            className="content-stack-lg lg:sticky lg:top-32 lg:self-start"
          >
            <div className="content-stack-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-muted)]">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-[var(--brand-soft)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="content-stack-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-muted)]">
                Focus
              </p>
              <ul className="content-stack-xs">
                {project.focusAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="size-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                    />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="content-stack-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-muted)]">
                Links
              </p>
              <div className="flex flex-wrap gap-3">
                {project.links.demo ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-[rgb(211_196_255/0.18)] bg-white/4 px-5 text-sm text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/7"
                  >
                    <ExternalLink className="size-4" aria-hidden="true" />
                    Live demo
                  </a>
                ) : (
                  <ComingSoonLink icon={ExternalLink} label="Live demo" />
                )}
                {project.links.repository ? (
                  <a
                    href={project.links.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-[rgb(211_196_255/0.18)] bg-white/4 px-5 text-sm text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/7"
                  >
                    <FolderGit2 className="size-4" aria-hidden="true" />
                    Repository
                  </a>
                ) : (
                  <ComingSoonLink icon={FolderGit2} label="Repository" />
                )}
              </div>
            </div>
          </aside>

          {/* Case study body */}
          <div className="content-stack-xl">
            {project.caseStudy.map((block) => (
              <div key={block.title} data-reveal className="content-stack-sm">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    {block.title}
                  </h2>
                  {block.isPlaceholder ? <DraftBadge /> : null}
                </div>
                <p
                  className={`max-w-[40rem] text-base leading-8 ${
                    block.isPlaceholder
                      ? "italic text-muted-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {block.body}
                </p>
                {block.isPlaceholder ? (
                  <p className="text-xs text-[var(--brand-muted)]">
                    Add real case-study content here — edit di src/data/projects.ts.
                  </p>
                ) : null}
              </div>
            ))}

            <div data-reveal className="content-stack-sm">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  Gallery
                </h2>
                <DraftBadge label="Coming Soon" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {Array.from({ length: project.gallerySlots }, (_, slotIndex) => (
                  <MediaPlaceholder
                    key={slotIndex}
                    label={`Screenshot 0${slotIndex + 1}`}
                    hint="Add screenshot"
                    aspect="wide"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / next */}
      <section className="section-shell-compact">
        <nav
          aria-label="Navigasi antarproject"
          className="grid gap-4 sm:grid-cols-2"
        >
          {previous ? (
            <Link
              to={`/projects/${previous.slug}`}
              className="surface-panel interactive-ring group flex items-center gap-4 p-[var(--panel-padding)]"
            >
              <ArrowLeft className="size-4 shrink-0 text-[var(--accent)] transition-transform duration-300 group-hover:-translate-x-0.5" />
              <span className="content-stack-xs min-w-0">
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--brand-muted)]">
                  Sebelumnya
                </span>
                <span className="truncate text-base font-semibold text-foreground">
                  {previous.name}
                </span>
              </span>
            </Link>
          ) : (
            <span aria-hidden="true" className="hidden sm:block" />
          )}

          {next ? (
            <Link
              to={`/projects/${next.slug}`}
              className="surface-panel interactive-ring group flex items-center justify-end gap-4 p-[var(--panel-padding)] text-right"
            >
              <span className="content-stack-xs min-w-0">
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--brand-muted)]">
                  Selanjutnya
                </span>
                <span className="truncate text-base font-semibold text-foreground">
                  {next.name}
                </span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          ) : null}
        </nav>
      </section>
    </div>
  );
}
