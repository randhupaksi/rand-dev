import { Briefcase, Camera, Code2, Palette } from "lucide-react";

import { socialLinks } from "@/data/site";
import type { SocialKey } from "@/types/site";
import { cn } from "@/lib/utils";

const iconMap: Record<SocialKey, typeof Camera> = {
  instagram: Camera,
  github: Code2,
  dribbble: Palette,
  linkedin: Briefcase,
};

type SocialLinksProps = {
  className?: string;
};

/**
 * Social link dengan honest placeholder state: selama URL asli belum diisi
 * (lihat `.env.example`), item tampil non-interaktif dengan status jelas —
 * tidak pernah mengarah ke akun acak.
 */
export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {socialLinks.map((item) => {
        const Icon = iconMap[item.key];
        const baseClass =
          "inline-flex size-10 items-center justify-center rounded-full border border-[rgb(211_196_255/0.14)] bg-white/4 text-[var(--accent)] transition-all duration-300 sm:size-11";

        return (
          <li key={item.key}>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className={cn(
                  baseClass,
                  "hover:-translate-y-0.5 hover:border-[rgb(211_196_255/0.22)] hover:bg-white/6",
                )}
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ) : (
              <span
                className={cn(baseClass, "cursor-not-allowed opacity-40")}
                title={`${item.label} — link belum tersedia`}
              >
                <Icon className="size-4" aria-hidden="true" />
                <span className="sr-only">
                  {item.label} — link belum tersedia (placeholder)
                </span>
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
