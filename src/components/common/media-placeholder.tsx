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
        "relative flex items-center justify-center overflow-hidden rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(6,3,12,0.35))]",
        aspectClassMap[aspect],
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(211,196,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(211,196,255,0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-32 w-3/4 -translate-x-1/2 bg-[radial-gradient(circle_at_top,rgba(124,92,250,0.14),transparent_72%)] blur-2xl"
      />

      <div className="relative z-10 flex flex-col items-center gap-3 px-6 py-8 text-center">
        <span className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/4 text-[var(--brand-muted)]">
          <ImageIcon className="size-4" aria-hidden="true" />
        </span>
        <div className="content-stack-xs items-center">
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[var(--brand-muted)]">
            {label}
          </p>
          {hint ? (
            <p className="max-w-[16rem] text-xs leading-5 text-muted-foreground/80">
              {hint}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
