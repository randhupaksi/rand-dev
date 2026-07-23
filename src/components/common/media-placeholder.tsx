import { Image as ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type MediaPlaceholderProps = {
  label?: string;
  hint?: string;
  aspect?: "video" | "wide" | "square";
  className?: string;
};

const aspectClassMap = {
  video: "aspect-video",
  wide: "aspect-[16/10]",
  square: "aspect-square",
} as const;

/**
 * Frame media kosong yang disengaja: menjaga komposisi layout tetap utuh
 * selama screenshot/foto asli belum tersedia, tanpa berpura-pura menjadi
 * gambar nyata.
 */
export function MediaPlaceholder({
  label = "Visual Coming Soon",
  hint,
  aspect = "wide",
  className,
}: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-[var(--card-radius)] border border-border bg-card",
        aspectClassMap[aspect],
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="media-placeholder-grid absolute inset-0 opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-32 w-3/4 -translate-x-1/2 bg-primary-surface blur-2xl"
      />

      <div className="relative z-10 flex flex-col items-center gap-3 px-6 py-8 text-center">
        <span className="ds-icon-control">
          <ImageIcon className="size-4" aria-hidden="true" />
        </span>
        <div className="content-stack-xs items-center">
          <p className="type-overline">
            {label}
          </p>
          {hint ? (
            <p className="type-caption max-w-64">
              {hint}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
