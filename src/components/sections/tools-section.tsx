import { SectionIndex } from "@/components/common/section-index";
import { toolGroups } from "@/data/home";
import { useReveal } from "@/hooks/use-reveal";

export function ToolsSection() {
  const scopeRef = useReveal<HTMLElement>();

  return (
    <section ref={scopeRef} className="section-shell">
      <div className="content-stack-lg">
        <div className="content-stack-md">
          <div data-reveal>
            <SectionIndex index="05" label="Toolkit" />
          </div>
          <h2
            data-reveal
            className="type-h2 max-w-2xl"
          >
            The tools I reach for most often.
          </h2>
        </div>

        <div data-reveal>
          {toolGroups.map((group) => (
            <div
              key={group.title}
              className="ds-divider grid gap-2 border-t py-5 last:border-b sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-6"
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
