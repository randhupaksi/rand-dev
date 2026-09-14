import { Link, NavLink } from "react-router-dom";

import { navigationItems } from "@/data/navigation";
import { siteIdentity } from "@/data/site";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-40 hidden pt-5 lg:block">
      <div className="relative">
        <div className="mx-auto flex min-h-(--header-height) items-center justify-between rounded-(--card-radius) border border-border bg-background/85 px-5 backdrop-blur-md sm:px-7">
          <Link
            to="/"
            className="ds-text-link group inline-flex items-center gap-0.5 text-lg font-semibold tracking-tight text-foreground"
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
                    "ds-text-link group relative text-sm font-medium",
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
              Let’s talk
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
}
