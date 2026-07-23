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
        "type-overline flex items-center gap-3",
        className,
      )}
    >
      <span className="text-accent">{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
      {label}
    </div>
  );
}
