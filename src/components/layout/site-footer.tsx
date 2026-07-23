import { Link } from "react-router-dom";

import { DraftBadge } from "@/components/common/draft-badge";
import { SocialLinks } from "@/components/common/social-links";
import { navigationItems } from "@/data/navigation";
import { contactChannels, siteIdentity } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="ds-divider mt-8 border-t pb-10 pt-14">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.6fr)_minmax(0,0.8fr)]">
        <div className="content-stack-sm max-w-sm">
          <p className="text-lg font-semibold tracking-tight text-foreground">
            {siteIdentity.brandFirst}{" "}
            <span className="text-accent">{siteIdentity.brandSecond}</span>
          </p>
          <p className="text-sm leading-7 text-muted-foreground">
            {siteIdentity.tagline}
          </p>
          <SocialLinks className="pt-1" />
        </div>

        <nav aria-label="Navigasi footer" className="content-stack-sm">
          <p className="type-overline">
            Halaman
          </p>
          <ul className="content-stack-xs">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-flex min-h-9 items-center text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="content-stack-sm">
          <p className="type-overline">
            Kontak
          </p>
          <ul className="content-stack-sm">
            {contactChannels.map((channel) => (
              <li key={channel.key} className="content-stack-xs">
                <span className="text-xs text-muted-foreground">{channel.label}</span>
                <span className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-sm text-brand-soft">
                    {channel.value}
                  </span>
                  {channel.isPlaceholder ? <DraftBadge label="Placeholder" /> : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ds-divider mt-12 flex items-center justify-center border-t pt-6 text-xs text-muted-foreground">
        <p>
          © {year} {siteIdentity.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
