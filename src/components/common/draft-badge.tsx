import { cn } from "@/lib/utils";

type DraftBadgeProps = {
  label?: string;
  className?: string;
};

/** Penanda visual bahwa sebuah konten masih draft/placeholder. */
export function DraftBadge({ label = "Draft Content", className }: DraftBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-[rgb(245_191_93/0.26)] bg-[rgb(245_191_93/0.07)] px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[var(--warning)]",
        className,
      )}
    >
      <span aria-hidden="true" className="size-1 rounded-full bg-[var(--warning)]" />
      {label}
    </span>
  );
}
