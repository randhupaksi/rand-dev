import { SectionIndex } from "@/components/common/section-index";
import { processSteps } from "@/data/home";
import { useReveal } from "@/hooks/use-reveal";

export function ProcessSection() {
  const scopeRef = useReveal<HTMLElement>();

  return (
    <section ref={scopeRef} className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-16">
        <div className="content-stack-md lg:sticky lg:top-32 lg:self-start">
          <div data-reveal>
            <SectionIndex index="04" label="Process" />
          </div>
          <h2
            data-reveal
            className="type-h2"
          >
            Cara project dibentuk, dari ide sampai matang.
          </h2>
          <p data-reveal className="section-copy max-w-lg">
            Bukan cuma soal mengerjakan — tapi bagaimana struktur, visual, dan
            interaksi dibangun dengan urutan yang disengaja.
          </p>
        </div>

        <ol>
          {processSteps.map((step) => (
            <li
              key={step.step}
              data-reveal
              className="ds-divider group grid grid-cols-[minmax(4.5rem,auto)_1fr] items-start gap-6 border-t py-8 transition-colors duration-300 last:border-b hover:border-border-strong sm:grid-cols-[minmax(6.5rem,auto)_1fr] sm:gap-10"
            >
              <span
                aria-hidden="true"
                className="text-ghost select-none font-mono text-5xl font-semibold leading-none transition-all duration-300 group-hover:[-webkit-text-stroke-color:var(--accent)] sm:text-6xl"
              >
                {step.step}
              </span>
              <div className="content-stack-xs pt-1.5">
                <h3 className="type-h4 sm:text-2xl">
                  {step.title}
                </h3>
                <p className="type-body-sm max-w-2xl">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
