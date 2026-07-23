import { Link } from "react-router-dom";

import { DraftBadge } from "@/components/common/draft-badge";
import { SocialLinks } from "@/components/common/social-links";
import { navigationItems } from "@/data/navigation";
import { contactChannels, siteIdentity } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-white/6 pb-10 pt-14">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.6fr)_minmax(0,0.8fr)]">
        <div className="content-stack-sm max-w-sm">
          <p className="text-lg font-semibold tracking-tight text-foreground">
            {siteIdentity.brandFirst}{" "}
            <span className="text-[var(--accent)]">{siteIdentity.brandSecond}</span>
          </p>
          <p className="text-sm leading-7 text-muted-foreground">
            {siteIdentity.tagline}
          </p>
          <SocialLinks className="pt-1" />
        </div>

        <nav aria-label="Navigasi footer" className="content-stack-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-muted)]">
            Halaman
          </p>
          <ul className="content-stack-xs">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-flex min-h-[2.25rem] items-center text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="content-stack-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-muted)]">
            Kontak
          </p>
          <ul className="content-stack-sm">
            {contactChannels.map((channel) => (
              <li key={channel.key} className="content-stack-xs">
                <span className="text-xs text-muted-foreground">{channel.label}</span>
                <span className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-sm text-[var(--brand-soft)]">
                    {channel.value}
                  </span>
                  {channel.isPlaceholder ? <DraftBadge label="Placeholder" /> : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-white/6 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteIdentity.name}. Dibangun dengan React, Vite, dan Tailwind CSS.
        </p>
        <p className="text-muted-foreground/70">
          Sebagian konten masih placeholder — lihat README untuk cara menggantinya.
        </p>
      </div>
    </footer>
  );
}
