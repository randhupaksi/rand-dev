import { toolGroups } from "@/data/home";

import { SectionHeading } from "@/components/sections/home/section-heading";

export function ToolsSection() {
  return (
    <section className="section-shell-compact">
      <SectionHeading
        eyebrow="Tools & Stack"
        title="Teknologi yang paling relevan dengan cara saya membangun project."
        description="Saya tidak menampilkan semua tools sekaligus. Yang ditaruh di sini adalah stack yang paling mewakili workflow dan output saya saat ini."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {toolGroups.map((group) => (
          <article
            key={group.title}
            className="surface-panel interactive-ring p-[var(--card-padding)]"
          >
            <div className="content-stack-md">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">
                  {group.title}
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--brand-muted)]">
                  {group.items.length} items
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-sm text-[var(--brand-soft)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
