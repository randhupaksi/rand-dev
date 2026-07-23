import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  reverse?: boolean;
  /** Durasi satu putaran penuh, dalam detik. */
  duration?: number;
  className?: string;
  itemClassName?: string;
};

function MarqueeContent({
  items,
  itemClassName,
  ariaHidden,
}: {
  items: string[];
  itemClassName?: string;
  ariaHidden?: boolean;
}) {
  return (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-10">
          <span className={cn("whitespace-nowrap", itemClassName)}>{item}</span>
          <span aria-hidden="true" className="text-sm text-accent">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

/**
 * Ticker berjalan dengan konten diduplikasi (salinan kedua aria-hidden).
 * Berhenti saat hover; statis ketika prefers-reduced-motion aktif.
 */
export function Marquee({
  items,
  reverse = false,
  duration = 36,
  className,
  itemClassName,
}: MarqueeProps) {
  return (
    <div
      className={cn("marquee", reverse && "marquee-reverse", className)}
      style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
    >
      <div className="marquee-track">
        <MarqueeContent items={items} itemClassName={itemClassName} />
        <MarqueeContent items={items} itemClassName={itemClassName} ariaHidden />
      </div>
    </div>
  );
}
