import type { ReactNode, SVGProps } from "react";

import { socialLinks } from "@/data/site";
import type { SocialKey } from "@/types/site";
import { cn } from "@/lib/utils";

type BrandIconProps = SVGProps<SVGSVGElement>;

function InstagramIcon(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.35" cy="6.65" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GithubIcon(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.25a9.75 9.75 0 0 0-3.08 19c.49.09.67-.21.67-.47v-1.67c-2.73.59-3.3-1.16-3.3-1.16-.44-1.13-1.08-1.43-1.08-1.43-.89-.61.07-.6.07-.6.98.07 1.5 1.01 1.5 1.01.88 1.5 2.31 1.07 2.87.82.09-.64.34-1.07.62-1.31-2.18-.25-4.47-1.09-4.47-4.84 0-1.07.38-1.94 1.01-2.63-.1-.25-.44-1.25.1-2.6 0 0 .82-.26 2.68 1a9.3 9.3 0 0 1 4.88 0c1.86-1.26 2.68-1 2.68-1 .54 1.35.2 2.35.1 2.6.63.69 1.01 1.56 1.01 2.63 0 3.76-2.3 4.59-4.49 4.83.35.3.66.87.66 1.76v2.61c0 .26.18.56.68.47A9.75 9.75 0 0 0 12 2.25Z" />
    </svg>
  );
}

function LinkedinIcon(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5.1 7.15a1.85 1.85 0 1 1 0-3.7 1.85 1.85 0 0 1 0 3.7ZM3.5 8.6h3.2v10.3H3.5V8.6Zm5.2 0h3.07v1.41h.04c.43-.81 1.47-1.67 3.03-1.67 3.24 0 3.84 2.13 3.84 4.9v5.66h-3.2v-5.02c0-1.2-.02-2.75-1.68-2.75-1.68 0-1.94 1.31-1.94 2.66v5.11H8.7V8.6Z" />
    </svg>
  );
}

function DribbbleIcon(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...props}>
      <circle cx="12" cy="12" r="9.25" />
      <path d="M4.3 7.15c5.05.28 9.43 2.02 12.76 5.21 1.03 1 1.78 2.02 2.31 3.03" />
      <path d="M6.55 18.8c1.9-3.4 4.83-5.58 8.77-6.55 1.22-.3 2.53-.44 3.95-.4" />
      <path d="M9.1 3.15c1.64 2.2 2.9 4.47 3.78 6.82.88 2.36 1.42 4.84 1.61 7.45" />
      <path d="M4.3 14.55c2.43-.35 4.76-.28 6.99.2 2.23.48 4.36 1.4 6.4 2.76" />
    </svg>
  );
}

const iconMap: Record<SocialKey, (props: BrandIconProps) => ReactNode> = {
  instagram: InstagramIcon,
  github: GithubIcon,
  dribbble: DribbbleIcon,
  linkedin: LinkedinIcon,
};

type SocialLinksProps = {
  className?: string;
};

/**
 * Hanya menampilkan profil sosial dengan URL nyata agar tidak menciptakan
 * kontrol dekoratif atau destinasi palsu.
 */
export function SocialLinks({ className }: SocialLinksProps) {
  const availableLinks = socialLinks.filter((item) => item.href);

  if (availableLinks.length === 0) {
    return null;
  }

  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {availableLinks.map((item) => {
        const Icon = iconMap[item.key];
        const baseClass = "ds-icon-control size-11 text-accent";

        return (
          <li key={item.key}>
            <a
              href={item.href!}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className={cn(baseClass, "hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring")}
            >
              <Icon className="size-4" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
