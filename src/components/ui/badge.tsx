import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "neutral" | "primary" | "warning";
};

export function Badge({ variant = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "ds-badge",
        variant === "primary" && "ds-badge-primary",
        variant === "warning" && "ds-badge-warning",
        className,
      )}
      {...props}
    />
  );
}
