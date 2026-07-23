import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: "article" | "div" | "section" | "li";
  variant?: "default" | "elevated" | "subtle";
  interactive?: boolean;
};

export function Card({
  as: Component = "div",
  variant = "default",
  interactive = false,
  className,
  ...props
}: CardProps) {
  return (
    <Component
      data-slot="card"
      className={cn(
        variant === "default" && "ds-card",
        variant === "elevated" && "surface-elevated",
        variant === "subtle" && "ds-card-subtle",
        interactive && "ds-card-interactive",
        className,
      )}
      {...props}
    />
  );
}
