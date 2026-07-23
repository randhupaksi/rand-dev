import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

import { DraftBadge } from "@/components/common/draft-badge";
import { MediaPlaceholder } from "@/components/common/media-placeholder";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { projects } from "@/data/projects";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useReveal } from "@/hooks/use-reveal";

export default function ProjectsPage() {
  usePageMeta(
    "Projects — Randhu Paksi Membumi",
    "Kumpulan project Randhu Paksi Membumi: dashboard, website layanan digital, dan sistem konten dengan fokus pada struktur dan visual.",
  );

  const scopeRef = useReveal<HTMLDivElement>();

  return (
    <div ref={scopeRef}>
      <section className="section-shell-compact">
        <div className="content-stack-md max-w-4xl">
          <div data-reveal className="section-eyebrow">
            Projects
          </div>
          <h1
            data-reveal
            className="type-h1"
          >
            Karya yang menunjukkan cara saya{" "}
            <span className="text-gradient-brand">
              berpikir
            </span>
            .
          </h1>
          <p data-reveal className="section-copy max-w-3xl">
            Setiap project punya halaman case study yang menjelaskan konteks,
            pendekatan, dan keputusan desainnya. Detail faktual yang bertanda
            draft akan diisi seiring datanya diverifikasi.
          </p>
        </div>
      </section>

      <section className="section-shell-compact">
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card
              as="article"
              key={project.slug}
              data-reveal
              interactive
              className="overflow-hidden"
            >
              <div
                className={`grid gap-6 p-[var(--card-padding)] lg:items-center ${
                  index % 2 === 1
                    ? "lg:grid-cols-[minmax(18rem,0.68fr)_minmax(0,0.82fr)]"
                    : "lg:grid-cols-[minmax(0,0.82fr)_minmax(18rem,0.68fr)]"
                }`}
              >
                <div
                  className={`content-stack-md ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge>
                      {project.category}
                    </Badge>
                    <span className="type-overline">
                      {project.period}
                    </span>
                    {project.status === "draft" ? (
                      <DraftBadge label="Draft case study" />
                    ) : null}
                  </div>

                  <div className="content-stack-sm">
                    <h2 className="type-h3">
                      {project.name}
                    </h2>
                    <p className="type-body-sm max-w-3xl">
                      {project.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item}>
                        {item}
                      </Badge>
                    ))}
                  </div>

                  <div>
                    <Link
                      to={`/projects/${project.slug}`}
                      className={buttonVariants({ variant: "ghost", size: "md" })}
                    >
                      Buka case study
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>

                <MediaPlaceholder
                  label="Project Image Placeholder"
                  hint="Tambahkan screenshot asli melalui src/data/projects.ts"
                  aspect="wide"
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                />
              </div>
            </Card>
          ))}

          {/* Slot project berikutnya */}
          <div
            data-reveal
            className="ds-card-subtle flex flex-col items-center gap-5 border-dashed px-6 py-12 text-center"
          >
            <div className="content-stack-xs items-center">
              <h2 className="type-h4">
                Project berikutnya bisa jadi milik kamu
              </h2>
              <p className="type-body-sm max-w-2xl">
                Slot ini sengaja kosong — saya terbuka untuk project website
                branding, dashboard, atau eksperimen interface.
              </p>
            </div>
            <Link
              to="/contact"
              className={buttonVariants({ variant: "primary", size: "md" })}
            >
              <MessageCircle className="size-4" />
              Mulai Diskusi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
