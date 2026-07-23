import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { navigationItems } from "@/data/navigation";
import { siteIdentity } from "@/data/site";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
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
        <div className="mx-auto flex min-h-[var(--header-height)] items-center justify-between rounded-[var(--card-radius)] border border-border bg-background/85 px-5 backdrop-blur-md sm:px-7">
          <Link
            to="/"
            className="group inline-flex items-center gap-0.5 text-lg font-semibold tracking-tight text-foreground transition-transform duration-300 hover:scale-[1.015]"
          >
            {siteIdentity.brandFirst}{" "}
            <span className="text-accent">{siteIdentity.brandSecond}</span>
            <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-6" />
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
                        "absolute -bottom-2 left-1/2 h-px -translate-x-1/2 bg-accent transition-all duration-300",
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
              className={cn(buttonVariants({ variant: "primary", size: "md" }), "hidden sm:inline-flex")}
            >
              Hubungi Saya
            </Link>

            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="lg:hidden"
            >
              {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </Button>
          </div>
        </div>

        {menuOpen ? (
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-[calc(100%+var(--space-2))] z-50 overflow-hidden rounded-[var(--card-radius)] border border-border bg-popover/95 p-3 shadow-[var(--shadow-dropdown)] backdrop-blur-lg lg:hidden"
          >
            <nav aria-label="Navigasi mobile" className="content-stack-xs">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "flex min-h-[var(--button-height-md)] items-center justify-between rounded-[var(--control-radius)] px-4 text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "bg-surface-hover text-foreground"
                        : "text-muted-foreground hover:bg-surface-subtle hover:text-foreground",
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive ? (
                        <span
                          aria-hidden="true"
                          className="size-1.5 rounded-full bg-accent"
                        />
                      ) : null}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="ds-divider mt-3 border-t pt-3 sm:hidden">
              <Link
                to="/contact"
                className={cn(buttonVariants({ variant: "primary", size: "md" }), "flex w-full")}
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
