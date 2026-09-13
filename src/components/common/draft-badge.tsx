import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type DraftBadgeProps = {
  label?: string;
  className?: string;
};

/** Visual marker for content that is still a draft or placeholder. */
export function DraftBadge({ label = "Draft Content", className }: DraftBadgeProps) {
  return (
    <Badge
      variant="warning"
      className={cn(
        "type-overline min-h-7 gap-1.5 text-warning",
        className,
      )}
    >
      <span aria-hidden="true" className="size-1 rounded-full bg-warning" />
      {label}
    </Badge>
  );
}
