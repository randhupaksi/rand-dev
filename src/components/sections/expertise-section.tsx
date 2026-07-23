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
            <h2 className="type-h2 max-w-md">
              Bukan sekadar daftar{" "}
              <span className="text-accent">tools.</span>
            </h2>
            <p className="type-body max-w-md">
              Saya melihat interface sebagai satu rangkaian: strukturnya harus
              kuat, tampilannya harus jelas, dan alurnya harus terasa masuk
              akal ketika dipakai.
            </p>
          </div>

          <div data-reveal className="flex items-center gap-3">
            {expertiseMeta.map((item, index) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="type-overline text-brand-soft">
                  {item.label}
                </span>
                {index < expertiseMeta.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="h-px w-5 bg-border-default"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="ds-divider border-b">
          {expertiseItems.map((item, index) => {
            const meta = expertiseMeta[index];
            const Icon = meta.icon;

            return (
              <article
                key={item.title}
                className="expertise-row ds-divider group overflow-hidden border-t py-8 sm:py-10"
              >
                <div className="grid gap-6 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[5rem_minmax(0,1fr)]">
                  <div className="expertise-marker">
                    <div className="expertise-icon hidden sm:inline-flex">
                      <Icon aria-hidden="true" className="size-4" />
                    </div>
                    <Icon
                      aria-hidden="true"
                      className="size-4 text-accent sm:hidden"
                    />
                  </div>

                  <div className="content-stack-md">
                    <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(11rem,auto)] xl:items-start xl:gap-10">
                      <h3 className="type-h3 max-w-2xl">
                        {item.title}
                      </h3>
                      <div className="expertise-meta xl:text-right">
                        <p className="type-overline text-accent">
                          {meta.label}
                        </p>
                        <p className="type-caption text-brand-muted">
                          {meta.note}
                        </p>
                      </div>
                    </div>

                    <p className="type-body max-w-3xl">
                      {item.description}
                    </p>

                    <ul className="expertise-bullets">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="expertise-bullet"
                        >
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
