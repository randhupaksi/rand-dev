import { cn } from "@/lib/utils";

type SectionIndexProps = {
  index: string;
  label: string;
  className?: string;
};

/** Label section editorial: `01 ── ABOUT` dalam monospace. */
export function SectionIndex({ index, label, className }: SectionIndexProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[var(--brand-muted)]",
        className,
      )}
    >
      <span className="text-[var(--accent)]">{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-[rgb(211_196_255/0.28)]" />
      {label}
    </div>
  );
}
