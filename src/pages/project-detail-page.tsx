import { ArrowLeft, ArrowRight } from "lucide-react";
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

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  usePageMeta(
    project
      ? `${project.name} - Case Study - Randhu Paksi Membumi`
              : "Project not found - Randhu Paksi Membumi",
    project?.summary,
  );

  const scopeRef = useReveal<HTMLDivElement>(slug);

  if (!project) {
    return <NotFoundPage />;
  }

  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <div ref={scopeRef}>
      <section className="section-shell-compact pb-6 lg:pb-8">
        <div className="content-stack-md">
          <div data-reveal>
            <Link
              to="/projects"
              className={cn(buttonVariants({ variant: "ghost", size: "md" }), "group")}
            >
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              Back to projects
            </Link>
          </div>

          <div data-reveal className="flex flex-wrap items-center gap-3">
            <Badge>
              {project.category}
            </Badge>
            {project.period.isPlaceholder ? (
              <DraftBadge label="Timeline not published" />
            ) : (
              <span className="type-overline">{project.period.value}</span>
            )}
            {project.status === "draft" ? <DraftBadge label="Case study in progress" /> : null}
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

      <section className="section-shell-compact py-6 lg:py-8">
        <div data-reveal>
          <MediaPlaceholder
            src={project.thumbnail?.src}
            alt={project.thumbnail?.alt}
            label="Project cover placeholder"
            hint="Add the real cover in src/data/projects.ts"
            aspect="video"
            className="mx-auto max-w-4xl"
          />
        </div>
      </section>

      <section className="section-shell-compact pt-6 lg:pt-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)]">
          <aside
            data-reveal
            className="content-stack-lg lg:sticky lg:top-32 lg:self-start"
          >
            <div className="content-stack-sm">
              <p className="type-overline">
                Core stack
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

            {project.links.demo || project.links.repository ? (
              <div className="content-stack-sm">
                <p className="type-overline">Links</p>
                <div className="flex flex-wrap gap-3">
                  {project.links.demo ? (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonVariants({ variant: "outline", size: "md" })}
                    >
                      Live demo
                    </a>
                  ) : null}
                  {project.links.repository ? (
                    <a
                      href={project.links.repository}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonVariants({ variant: "outline", size: "md" })}
                    >
                      Repository
                    </a>
                  ) : null}
                </div>
              </div>
            ) : null}
          </aside>

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
                    Add the real case-study content in src/data/projects.ts.
                  </p>
                ) : null}
              </div>
            ))}

            {project.technicalStack?.length ? (
              <section data-reveal className="content-stack-md pt-3">
                <div className="content-stack-xs max-w-2xl">
                  <p className="type-overline text-accent">Technical foundation</p>
                  <h2 className="type-h4">Clean frontend and API layers, working together.</h2>
                  <p className="type-body-sm text-muted-foreground">
                    The interface and service are deliberately separated: the frontend focuses on clean product use, while the API owns the data and rules behind the workflow.
                  </p>
                </div>

                <div className="grid gap-8 border-y border-border-subtle py-7 lg:grid-cols-2 lg:gap-10">
                  {project.technicalStack.map((group) => (
                    <section key={group.title} className="content-stack-sm">
                      <div className="content-stack-xs">
                        <h3 className="text-lg font-semibold tracking-tight text-foreground">
                          {group.title}
                        </h3>
                        <p className="type-body-sm text-muted-foreground">
                          {group.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <Badge key={item}>{item}</Badge>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </section>
            ) : null}

            <div data-reveal className="content-stack-sm">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="type-h4">
                  Gallery
                </h2>
                {project.gallery?.length ? null : <DraftBadge label="More images coming soon" />}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.gallery?.length
                  ? project.gallery.map((item) => (
                      <MediaPlaceholder
                        key={item.src}
                        src={item.src}
                        alt={item.alt}
                        label={item.label}
                        aspect="wide"
                      />
                    ))
                  : Array.from({ length: project.gallerySlots }, (_, slotIndex) => (
                      <MediaPlaceholder
                        key={slotIndex}
                        label={`Screenshot 0${slotIndex + 1}`}
                        hint="Add a real screenshot"
                        aspect="wide"
                      />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {previous || next ? (
        <section className="section-shell-compact">
          <nav
            aria-label="Navigasi antarproject"
            className="grid gap-4 sm:grid-cols-2"
          >
          {previous ? (
            <Link
              to={`/projects/${previous.slug}`}
              className="ds-card ds-card-interactive group flex items-center gap-4 p-(--panel-padding)"
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
              className="ds-card ds-card-interactive group flex items-center justify-end gap-4 p-(--panel-padding) text-right"
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
      ) : null}
    </div>
  );
}
