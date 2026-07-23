import { Marquee } from "@/components/common/marquee";
import { SectionIndex } from "@/components/common/section-index";
import { toolGroups } from "@/data/home";
import { useReveal } from "@/hooks/use-reveal";

export function ToolsSection() {
  const scopeRef = useReveal<HTMLElement>();

  const [firstHalf, secondHalf] = [
    toolGroups.slice(0, 2).flatMap((group) => group.items),
    toolGroups.slice(2).flatMap((group) => group.items),
  ];

  return (
    <section ref={scopeRef} className="section-shell">
      <div className="content-stack-lg">
        <div className="content-stack-md">
          <div data-reveal>
            <SectionIndex index="05" label="Stack" />
          </div>
          <h2
            data-reveal
            className="section-title max-w-[40rem] text-[clamp(2.2rem,4.4vw,3.6rem)]"
          >
            Teknologi yang paling mewakili workflow saya.
          </h2>
        </div>

        {/* Ticker dua arah */}
        <div data-reveal className="content-stack-sm border-y border-white/6 py-6">
          <Marquee
            items={firstHalf}
            duration={30}
            itemClassName="text-[clamp(1.3rem,2.6vw,2rem)] font-semibold tracking-tight text-foreground"
          />
          <Marquee
            items={secondHalf}
            reverse
            duration={34}
            itemClassName="text-ghost text-[clamp(1.3rem,2.6vw,2rem)] font-semibold tracking-tight"
          />
        </div>

        {/* Spec sheet */}
        <div data-reveal>
          {toolGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-2 border-t border-white/8 py-5 transition-colors duration-300 last:border-b hover:border-[rgb(211_196_255/0.25)] sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-6"
            >
              <h3 className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--brand-muted)]">
                {group.title}
              </h3>
              <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-[var(--brand-soft)]">
                {group.items.map((item, index) => (
                  <span key={item} className="flex items-baseline gap-3">
                    {index > 0 ? (
                      <span aria-hidden="true" className="text-[var(--brand-muted)]">
                        ·
                      </span>
                    ) : null}
                    {item}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
