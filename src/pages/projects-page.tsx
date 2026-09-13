import { ArrowUpRight } from "lucide-react";
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
    "Projects - Randhu Paksi Membumi",
    "Case study Absensi CN, platform manajemen kehadiran dan pembinaan siswa untuk Sekolah Citra Negara.",
  );

  const scopeRef = useReveal<HTMLDivElement>();
  const isSingleCaseStudy = projects.length === 1;

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
            {isSingleCaseStudy ? "Case study utama yang sedang saya " : "Karya yang menunjukkan cara saya "}
            <span className="text-gradient-brand">
              {isSingleCaseStudy ? "dokumentasikan" : "berpikir"}
            </span>
            .
          </h1>
          <p data-reveal className="section-copy max-w-3xl">
            {isSingleCaseStudy
              ? "Dokumentasi Absensi CN: konteks sistem, kebutuhan pengguna, dan area implementasi yang sedang saya pelajari."
              : "Case study yang menjelaskan konteks, alur kerja, dan nilai sistem dari karya yang saya bangun."}
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
                    {project.period.isPlaceholder ? (
                      <DraftBadge label="Periode belum dipublikasikan" />
                    ) : (
                      <span className="type-overline">{project.period.value}</span>
                    )}
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
                      className={`${buttonVariants({ variant: "ghost", size: "md" })} group`}
                    >
                      Buka case study
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>

                <MediaPlaceholder
                  src={project.thumbnail?.src}
                  alt={project.thumbnail?.alt}
                  label="Project Image Placeholder"
                  hint="Tambahkan screenshot asli melalui src/data/projects.ts"
                  aspect="wide"
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                />
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
