import { Code2, PanelsTopLeft, ScanLine } from "lucide-react";

import { SectionIndex } from "@/components/common/section-index";
import { expertiseItems } from "@/data/home";
import { useReveal } from "@/hooks/use-reveal";

const expertiseMeta = [
  {
    label: "Build",
    note: "Struktur yang bisa tumbuh",
    icon: Code2,
  },
  {
    label: "Shape",
    note: "Visual yang punya alasan",
    icon: ScanLine,
  },
  {
    label: "Connect",
    note: "Flow yang mudah diikuti",
    icon: PanelsTopLeft,
  },
] as const;

export function ExpertiseSection() {
  const scopeRef = useReveal<HTMLElement>();

  return (
    <section ref={scopeRef} id="skills" className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.46fr)_minmax(0,1fr)] lg:gap-16 xl:gap-24">
        <div className="content-stack-lg lg:sticky lg:top-32 lg:self-start">
          <div data-reveal>
            <SectionIndex index="02" label="Expertise" />
          </div>

          <div data-reveal className="content-stack-md">
            <h2 className="max-w-[24rem] text-[clamp(2.25rem,4.4vw,4rem)] font-semibold leading-[1.04] tracking-[-0.055em] text-foreground">
              Bukan sekadar daftar{" "}
              <span className="text-[var(--accent)]">tools.</span>
            </h2>
            <p className="max-w-[25rem] text-base leading-8 text-muted-foreground">
              Saya melihat interface sebagai satu rangkaian: strukturnya harus
              kuat, tampilannya harus jelas, dan alurnya harus terasa masuk
              akal ketika dipakai.
            </p>
          </div>

          <div data-reveal className="flex items-center gap-3">
            {expertiseMeta.map((item, index) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[var(--brand-soft)]">
                  {item.label}
                </span>
                {index < expertiseMeta.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="h-px w-5 bg-[rgb(211_196_255/0.18)]"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="border-b border-white/8">
          {expertiseItems.map((item, index) => {
            const meta = expertiseMeta[index];
            const Icon = meta.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden border-t border-white/8 py-8 transition-colors duration-300 hover:border-[rgb(211_196_255/0.22)] sm:py-10"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-y-4 left-0 w-px origin-top scale-y-0 bg-[linear-gradient(180deg,var(--accent),transparent)] transition-transform duration-500 ease-[var(--ease-standard)] group-hover:scale-y-100"
                />

                <div className="grid gap-6 transition-transform duration-500 ease-[var(--ease-standard)] group-hover:translate-x-2 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[4.5rem_minmax(0,1fr)]">
                  <div className="flex items-start justify-between sm:block">
                    <span className="font-mono text-[0.7rem] text-[var(--brand-muted)]">
                      / 0{index + 1}
                    </span>
                    <div className="mt-5 hidden size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-[var(--accent)] transition-all duration-300 group-hover:border-[rgb(211_196_255/0.28)] group-hover:bg-[rgb(124_92_250/0.1)] sm:flex">
                      <Icon aria-hidden="true" className="size-4" />
                    </div>
                    <Icon
                      aria-hidden="true"
                      className="size-4 text-[var(--accent)] sm:hidden"
                    />
                  </div>

                  <div className="content-stack-md">
                    <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-start xl:gap-8">
                      <h3 className="max-w-[34rem] text-[clamp(1.65rem,3.1vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-foreground">
                        {item.title}
                      </h3>
                      <div className="xl:text-right">
                        <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                          {meta.label}
                        </p>
                        <p className="mt-1 text-xs text-[var(--brand-muted)]">
                          {meta.note}
                        </p>
                      </div>
                    </div>

                    <p className="max-w-[42rem] text-[0.98rem] leading-7 text-muted-foreground sm:text-base sm:leading-8">
                      {item.description}
                    </p>

                    <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-center gap-2.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[var(--brand-soft)]"
                        >
                          <span
                            aria-hidden="true"
                            className="size-1 rounded-full bg-[var(--accent)]"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
