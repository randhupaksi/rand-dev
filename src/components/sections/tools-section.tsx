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
            className="type-h2 max-w-2xl"
          >
            Teknologi yang paling mewakili workflow saya.
          </h2>
        </div>

        {/* Ticker dua arah */}
        <div data-reveal className="ds-divider content-stack-sm border-y py-6">
          <Marquee
            items={firstHalf}
            duration={30}
            itemClassName="type-h3"
          />
          <Marquee
            items={secondHalf}
            reverse
            duration={34}
            itemClassName="text-ghost type-h3"
          />
        </div>

        {/* Spec sheet */}
        <div data-reveal>
          {toolGroups.map((group) => (
            <div
              key={group.title}
              className="ds-divider grid gap-2 border-t py-5 transition-colors duration-300 last:border-b hover:border-border-strong sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-6"
            >
              <h3 className="type-overline">
                {group.title}
              </h3>
              <p className="type-body-sm flex flex-wrap items-baseline gap-x-3 gap-y-1 text-brand-soft">
                {group.items.map((item, index) => (
                  <span key={item} className="flex items-baseline gap-3">
                    {index > 0 ? (
                      <span aria-hidden="true" className="text-brand-muted">
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
