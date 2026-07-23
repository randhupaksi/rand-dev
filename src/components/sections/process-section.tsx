import { processSteps } from "@/data/home";

import { SectionHeading } from "@/components/sections/home/section-heading";

export function ProcessSection() {
  return (
    <section className="section-shell-compact">
      <SectionHeading
        eyebrow="How I Work"
        title="Pendekatan kerja yang membuat hasil visual tetap rapi dan sistem tetap terkontrol."
        description="Bukan cuma soal mengerjakan, tapi juga soal bagaimana project dibentuk dari ide sampai tampil matang."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {processSteps.map((step) => (
          <article
            key={step.step}
            className="surface-panel interactive-ring p-[var(--panel-padding)]"
          >
            <div className="content-stack-sm">
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--brand-muted)]">
                {step.step}
              </span>
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
