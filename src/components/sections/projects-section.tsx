import { ArrowUpRight } from "lucide-react";

import { featuredProjects } from "@/data/home";

import { SectionHeading } from "@/components/sections/home/section-heading";

export function ProjectsSection() {
  return (
    <section id="portfolio" className="section-shell">
      <SectionHeading
        eyebrow="Selected Projects"
        title="Beberapa karya yang paling kuat untuk menunjukkan arah skill saya."
        description="Project di bawah ini dipilih bukan hanya karena teknis, tapi juga karena mewakili cara saya menyusun interface, sistem, dan presentasi digital."
      />

      <div className="mt-10 grid gap-6">
        {featuredProjects.map((project, index) => (
          <article
            key={project.name}
            className="surface-panel interactive-ring overflow-hidden"
          >
            <div className="grid gap-6 p-[var(--card-padding)] lg:grid-cols-[minmax(0,0.82fr)_minmax(18rem,0.68fr)] lg:items-center">
              <div className="content-stack-md">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-[var(--brand-soft)]">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--brand-muted)]">
                    Featured 0{index + 1}
                  </span>
                </div>

                <div className="content-stack-sm">
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    {project.name}
                  </h3>
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
              </div>

              <div className="surface-elevated p-[var(--panel-padding)]">
                <div className="content-stack-md">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-muted)]">
                      Outcome
                    </p>
                    <ArrowUpRight className="size-4 text-[var(--accent)]" />
                  </div>
                  <p className="text-base font-medium leading-7 text-foreground">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
