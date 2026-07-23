import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

import { DraftBadge } from "@/components/common/draft-badge";
import { MediaPlaceholder } from "@/components/common/media-placeholder";
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
        <div className="content-stack-md max-w-[52rem]">
          <div data-reveal className="section-eyebrow">
            Projects
          </div>
          <h1
            data-reveal
            className="section-title text-[clamp(2.6rem,5.2vw,4.5rem)]"
          >
            Karya yang menunjukkan cara saya{" "}
            <span className="bg-gradient-to-r from-[#f1d3ff] via-[var(--accent)] to-[#c24aff] bg-clip-text text-transparent">
              berpikir
            </span>
            .
          </h1>
          <p data-reveal className="section-copy max-w-[44rem]">
            Setiap project punya halaman case study yang menjelaskan konteks,
            pendekatan, dan keputusan desainnya. Detail faktual yang bertanda
            draft akan diisi seiring datanya diverifikasi.
          </p>
        </div>
      </section>

      <section className="section-shell-compact">
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              data-reveal
              className="surface-panel interactive-ring overflow-hidden"
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
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-[var(--brand-soft)]">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--brand-muted)]">
                      {project.period}
                    </span>
                    {project.status === "draft" ? (
                      <DraftBadge label="Draft case study" />
                    ) : null}
                  </div>

                  <div className="content-stack-sm">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                      {project.name}
                    </h2>
                    <p className="max-w-[42rem] text-sm leading-7 text-muted-foreground">
                      {project.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/12 px-3 py-1.5 text-xs text-[var(--brand-soft)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="group inline-flex min-h-[2.75rem] items-center gap-2 text-sm font-medium text-[var(--accent)] transition-colors duration-300 hover:text-[var(--highlight)]"
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
            </article>
          ))}

          {/* Slot project berikutnya */}
          <div
            data-reveal
            className="flex flex-col items-center gap-5 rounded-[2rem] border border-dashed border-[rgb(211_196_255/0.22)] bg-white/[0.02] px-6 py-12 text-center"
          >
            <div className="content-stack-xs items-center">
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                Project berikutnya bisa jadi milik kamu
              </h2>
              <p className="max-w-[30rem] text-sm leading-7 text-muted-foreground">
                Slot ini sengaja kosong — saya terbuka untuk project website
                branding, dashboard, atau eksperimen interface.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[rgb(211_196_255/0.18)] bg-[linear-gradient(135deg,#8f63ff_0%,#7c5cfa_60%,#6b49ef_100%)] px-6 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
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
