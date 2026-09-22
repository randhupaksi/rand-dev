import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { DraftBadge } from "@/components/common/draft-badge";
import { MediaPlaceholder } from "@/components/common/media-placeholder";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { projects } from "@/data/projects";
import { usePageMeta } from "@/hooks/use-page-meta";
import { usePageHeroReveal } from "@/hooks/use-page-hero-reveal";
import { useReveal } from "@/hooks/use-reveal";

export default function ProjectsPage() {
  usePageMeta(
    "Projects - Randhu Paksi Membumi",
    "A case study of Citra Negara Attendance System, a production enterprise workflow designed around clear UI, role-aware access, and reliable product logic.",
  );

  const scopeRef = useReveal<HTMLDivElement>();
  const heroRef = usePageHeroReveal<HTMLDivElement>(true);
  const isSingleCaseStudy = projects.length === 1;
  const featuredProject = projects[0];

  return (
    <div ref={scopeRef}>
      <div ref={heroRef}>
        <section className="section-shell-compact">
        <div className={isSingleCaseStudy ? "grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(15rem,0.42fr)] lg:items-end lg:gap-20" : "content-stack-md max-w-4xl"}>
          <div className="content-stack-md min-w-0">
            <div data-page-hero-reveal className="section-eyebrow">
              Projects
            </div>
            <h1
              data-page-hero-reveal
              className="type-h1 max-w-full min-w-0 wrap-break-word wrap-anywhere lg:whitespace-nowrap"
            >
              {isSingleCaseStudy ? "Built for real " : "Projects shaped by real "}
              <span className="text-gradient-brand block max-w-full lg:inline">
                {isSingleCaseStudy ? "operations" : "workflows"}
              </span>
            </h1>
            <p data-page-hero-reveal className="section-copy max-w-3xl">
              {isSingleCaseStudy
                ? "Citra Negara Attendance System is a live enterprise workflow for SMK Citra Negara Depok, used by more than 2,000 users and shaped around clear, role-aware product use."
                : "Case studies about the context, interface decisions, and product workflows behind my work."}
            </p>
          </div>

          {isSingleCaseStudy && featuredProject ? (
            <aside
              aria-label="Project facts"
              className="border-t border-border-strong pt-6 lg:border-l lg:border-t-0 lg:pb-1 lg:pl-6 lg:pt-0"
            >
              <p data-page-hero-reveal className="type-overline text-accent">At a glance</p>
              <dl className="mt-5 divide-y divide-border-subtle">
                <div data-page-hero-reveal className="py-4 first:pt-0">
                  <dt className="type-overline text-brand-muted">Status</dt>
                  <dd className="mt-2 text-base font-semibold tracking-tight text-foreground">
                    Live in production
                  </dd>
                </div>
                <div data-page-hero-reveal className="py-4">
                  <dt className="type-overline text-brand-muted">Reach</dt>
                  <dd className="mt-2 text-base font-semibold tracking-tight text-foreground">
                    2,000+ users
                  </dd>
                </div>
                <div data-page-hero-reveal className="pb-0 pt-4">
                  <dt className="type-overline text-brand-muted">Context</dt>
                  <dd className="mt-2 text-base font-semibold tracking-tight text-foreground">
                    SMK Citra Negara Depok
                  </dd>
                </div>
              </dl>
            </aside>
          ) : null}
        </div>
      </section>

      <section className="section-shell-compact">
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card
              as="article"
              key={project.slug}
              data-project-flow-reveal
              interactive
              className="overflow-hidden"
            >
              <div
                className={`grid gap-6 p-(--card-padding) lg:items-center ${
                  index % 2 === 1
                    ? "lg:grid-cols-[minmax(18rem,0.68fr)_minmax(0,0.82fr)]"
                    : "lg:grid-cols-[minmax(0,0.82fr)_minmax(18rem,0.68fr)]"
                }`}
              >
                <div
                  className={`content-stack-md ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div data-project-flow-reveal className="flex flex-wrap items-center gap-3">
                    <Badge>
                      {project.category}
                    </Badge>
                    {project.period.isPlaceholder ? (
                      <DraftBadge label="Timeline not published" />
                    ) : (
                      <span className="type-overline">{project.period.value}</span>
                    )}
                    {project.status === "draft" ? (
                      <DraftBadge label="Case study in progress" />
                    ) : null}
                  </div>

                  <div className="content-stack-sm">
                    <h2 data-project-flow-reveal className="type-h3">
                      {project.name}
                    </h2>
                    <div data-project-flow-reveal className="lg:hidden">
                      <MediaPlaceholder
                        src={project.thumbnail?.src}
                        alt={project.thumbnail?.alt}
                        label="Project image placeholder"
                        hint="Add the real screenshots in src/data/projects.ts"
                        aspect="wide"
                        cropBottom
                      />
                    </div>
                    <p data-project-flow-reveal className="type-body-sm max-w-3xl">
                      {project.summary}
                    </p>
                  </div>

                  <div data-project-flow-reveal className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item}>
                        {item}
                      </Badge>
                    ))}
                  </div>

                  <div data-project-flow-reveal className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                    <Link
                      to={`/projects/${project.slug}`}
                      className={`${buttonVariants({ variant: "primary", size: "md" })} group w-full min-w-0 px-2 text-xs sm:w-auto sm:px-5 sm:text-sm`}
                    >
                      Read
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                    {project.links.demo ? (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className={`${buttonVariants({ variant: "outline", size: "md" })} group w-full min-w-0 px-2 text-xs sm:w-auto sm:px-5 sm:text-sm`}
                      >
                        View live product
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ) : null}
                  </div>
                </div>

                <div
                  data-project-flow-reveal
                  className={`hidden lg:block ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <MediaPlaceholder
                    src={project.thumbnail?.src}
                    alt={project.thumbnail?.alt}
                    label="Project image placeholder"
                    hint="Add the real screenshots in src/data/projects.ts"
                    aspect="wide"
                    cropBottom
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
        </section>
      </div>

      {isSingleCaseStudy && featuredProject?.capabilities?.length ? (
        <section className="section-shell-compact">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,1fr)] lg:gap-20">
            <div data-reveal className="content-stack-sm lg:sticky lg:top-32 lg:self-start">
              <div className="section-eyebrow">Product scope</div>
              <h2 className="type-h3">What the product handles</h2>
              <p className="section-copy">
                One school workflow, shaped around the moments people need to record, review, and follow up.
              </p>
            </div>

            <ol className="ds-divider border-y">
              {featuredProject.capabilities.map((capability, index) => (
                <li
                  key={capability.title}
                  data-reveal
                  className="grid gap-4 border-t border-border-subtle py-6 first:border-t-0 sm:grid-cols-[3.5rem_minmax(0,1fr)]"
                >
                  <span className="font-mono text-sm text-brand-muted">0{index + 1}</span>
                  <div className="content-stack-xs">
                    <h3 className="type-h4">{capability.title}</h3>
                    <p className="type-body-sm max-w-2xl">{capability.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {isSingleCaseStudy && featuredProject?.gallery?.length ? (
        <section className="section-shell-compact">
          <div className="content-stack-lg">
            <div data-reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="content-stack-sm max-w-2xl">
                <div className="section-eyebrow">Inside the product</div>
                <h2 className="type-h3">A look at the working interface</h2>
                <p className="section-copy">
                  A focused look at the entry point and the dashboard people use to keep the workflow moving.
                </p>
              </div>
              <Link
                to={`/projects/${featuredProject.slug}`}
                className="ds-text-link group inline-flex min-h-9 w-fit items-center gap-2 text-sm font-medium text-accent hover:text-highlight"
              >
                Read the full case study
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {featuredProject.gallery.map((item) => (
                <figure key={item.src} data-reveal className="content-stack-sm">
                  <MediaPlaceholder
                    src={item.src}
                    alt={item.alt}
                    label={item.label}
                    aspect="wide"
                    cropBottom
                    preview
                  />
                  <figcaption className="type-caption text-brand-soft">
                    {item.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {isSingleCaseStudy && featuredProject ? (
        <section className="section-shell-compact page-end-cta">
          <div data-reveal className="surface-elevated flex flex-col gap-6 p-(--card-padding) sm:flex-row sm:items-center sm:justify-between">
            <div className="content-stack-xs max-w-2xl">
              <p className="type-overline text-accent">Go deeper</p>
              <h2 className="type-h4">See the workflow in more detail</h2>
              <p className="type-body-sm">
                Explore the roles, decisions, and real screens behind Citra Negara Attendance System.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <Link
                to={`/projects/${featuredProject.slug}`}
                className={`${buttonVariants({ variant: "primary", size: "md" })} w-full min-w-0 px-2 text-xs sm:w-auto sm:px-5 sm:text-sm`}
              >
                Read case study
                <ArrowUpRight className="size-4" />
              </Link>
              {featuredProject.links.demo ? (
                <a
                  href={featuredProject.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className={`${buttonVariants({ variant: "outline", size: "md" })} w-full min-w-0 px-2 text-xs sm:w-auto sm:px-5 sm:text-sm`}
                >
                  View live product
                  <ArrowUpRight className="size-4" />
                </a>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
