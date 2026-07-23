import { Menu, Settings } from "lucide-react";

import { navigationItems } from "@/data/navigation";

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-40 pt-5">
      <div className="mx-auto flex min-h-[4.8rem] items-center justify-between rounded-[1.8rem] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] px-5 sm:px-7">
        <a
          href="#home"
          className="group inline-flex items-center gap-0.5 text-lg font-semibold tracking-tight text-foreground transition-transform duration-300 hover:scale-[1.015]"
        >
          Randhu <span className="text-[var(--accent)]">Paksi</span>
          <span className="h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-6" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground"
            >
              {item.label}
              <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Settings"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/4 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgb(211_196_255/0.18)] hover:bg-white/7 hover:text-foreground"
          >
            <Settings className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/4 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgb(211_196_255/0.18)] hover:bg-white/7 hover:text-foreground"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
