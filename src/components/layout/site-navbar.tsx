import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { navigationItems } from "@/data/navigation";
import { siteIdentity } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 pt-5">
      <div className="relative">
        <div className="mx-auto flex min-h-[4.8rem] items-center justify-between rounded-[1.8rem] border border-border bg-[rgb(15_11_20/0.82)] px-5 backdrop-blur-md sm:px-7">
          <Link
            to="/"
            className="group inline-flex items-center gap-0.5 text-lg font-semibold tracking-tight text-foreground transition-transform duration-300 hover:scale-[1.015]"
          >
            {siteIdentity.brandFirst}{" "}
            <span className="text-[var(--accent)]">{siteIdentity.brandSecond}</span>
            <span className="h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-6" />
          </Link>

          <nav aria-label="Navigasi utama" className="hidden items-center gap-7 lg:flex">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "group relative text-sm font-medium transition-all duration-300",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-2 left-1/2 h-px -translate-x-1/2 bg-[var(--accent)] transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full",
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link
              to="/contact"
              className="hidden h-11 items-center rounded-full border border-[rgb(211_196_255/0.18)] bg-[linear-gradient(135deg,#8f63ff_0%,#7c5cfa_60%,#6b49ef_100%)] px-5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              Hubungi Saya
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/4 text-muted-foreground transition-all duration-300 hover:border-[rgb(211_196_255/0.18)] hover:bg-white/7 hover:text-foreground lg:hidden"
            >
              {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-[1.6rem] border border-border bg-[rgb(18_14_26/0.97)] p-3 shadow-[0_24px_56px_rgba(4,2,10,0.5)] backdrop-blur-lg lg:hidden"
          >
            <nav aria-label="Navigasi mobile" className="content-stack-xs">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "flex min-h-[3rem] items-center justify-between rounded-[1.1rem] px-4 text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "bg-white/6 text-foreground"
                        : "text-muted-foreground hover:bg-white/4 hover:text-foreground",
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive ? (
                        <span
                          aria-hidden="true"
                          className="size-1.5 rounded-full bg-[var(--accent)]"
                        />
                      ) : null}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="mt-3 border-t border-white/6 pt-3 sm:hidden">
              <Link
                to="/contact"
                className="flex min-h-[3rem] items-center justify-center rounded-[1.1rem] border border-[rgb(211_196_255/0.18)] bg-[linear-gradient(135deg,#8f63ff_0%,#7c5cfa_60%,#6b49ef_100%)] text-sm font-medium text-primary-foreground"
              >
                Hubungi Saya
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
