import { ArrowLeft, ArrowRight, ExternalLink, FolderGit2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { DraftBadge } from "@/components/common/draft-badge";
import { MediaPlaceholder } from "@/components/common/media-placeholder";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { getAdjacentProjects, getProjectBySlug } from "@/data/projects";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

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
      className={cn(buttonVariants({ variant: "outline", size: "md" }), "cursor-not-allowed border-dashed opacity-50")}
    >
      <Icon className="size-4" aria-hidden="true" />
      {label}
      <span className="type-overline">
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
              className={cn(buttonVariants({ variant: "ghost", size: "md" }), "group")}
            >
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              Semua project
            </Link>
          </div>

          <div data-reveal className="flex flex-wrap items-center gap-3">
            <Badge>
              {project.category}
            </Badge>
            <span className="type-overline">
              {project.period}
            </span>
            {project.status === "draft" ? <DraftBadge label="Draft case study" /> : null}
          </div>

          <h1
            data-reveal
            className="type-h1 max-w-3xl"
          >
            {project.name}
          </h1>
          <p data-reveal className="section-copy max-w-3xl">
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
              <p className="type-overline">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item}>
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="content-stack-sm">
              <p className="type-overline">
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
                    className="size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="content-stack-sm">
              <p className="type-overline">
                Links
              </p>
              <div className="flex flex-wrap gap-3">
                {project.links.demo ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({ variant: "outline", size: "md" })}
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
                    className={buttonVariants({ variant: "outline", size: "md" })}
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
                  <h2 className="type-h4">
                    {block.title}
                  </h2>
                  {block.isPlaceholder ? <DraftBadge /> : null}
                </div>
                <p
                  className={`type-body max-w-2xl ${
                    block.isPlaceholder
                      ? "italic text-muted-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {block.body}
                </p>
                {block.isPlaceholder ? (
                  <p className="type-caption text-brand-muted">
                    Add real case-study content here — edit di src/data/projects.ts.
                  </p>
                ) : null}
              </div>
            ))}

            <div data-reveal className="content-stack-sm">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="type-h4">
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
              className="ds-card ds-card-interactive group flex items-center gap-4 p-[var(--panel-padding)]"
            >
              <ArrowLeft className="size-4 shrink-0 text-accent transition-transform duration-300 group-hover:-translate-x-0.5" />
              <span className="content-stack-xs min-w-0">
                <span className="type-overline">
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
              className="ds-card ds-card-interactive group flex items-center justify-end gap-4 p-[var(--panel-padding)] text-right"
            >
              <span className="content-stack-xs min-w-0">
                <span className="type-overline">
                  Selanjutnya
                </span>
                <span className="truncate text-base font-semibold text-foreground">
                  {next.name}
                </span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          ) : null}
        </nav>
      </section>
    </div>
  );
}
