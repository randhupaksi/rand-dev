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
            className="section-title text-[clamp(2rem,3.6vw,3rem)]"
          >
            Cara project dibentuk, dari ide sampai matang.
          </h2>
          <p data-reveal className="section-copy max-w-[26rem]">
            Bukan cuma soal mengerjakan — tapi bagaimana struktur, visual, dan
            interaksi dibangun dengan urutan yang disengaja.
          </p>
        </div>

        <ol>
          {processSteps.map((step) => (
            <li
              key={step.step}
              data-reveal
              className="group grid grid-cols-[minmax(4.5rem,auto)_1fr] items-start gap-6 border-t border-white/8 py-8 transition-colors duration-300 last:border-b hover:border-[rgb(211_196_255/0.25)] sm:grid-cols-[minmax(6.5rem,auto)_1fr] sm:gap-10"
            >
              <span
                aria-hidden="true"
                className="text-ghost select-none font-mono text-[clamp(2.6rem,6vw,4.2rem)] font-semibold leading-none transition-all duration-300 group-hover:[-webkit-text-stroke-color:rgb(155_140_255/0.5)]"
              >
                {step.step}
              </span>
              <div className="content-stack-xs pt-1.5">
                <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {step.title}
                </h3>
                <p className="max-w-[32rem] text-sm leading-7 text-muted-foreground">
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
