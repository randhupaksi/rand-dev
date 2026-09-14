import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { SiteFooter } from "@/components/layout/site-footer";
import { MobileBottomNavigation } from "@/components/layout/mobile-bottom-navigation";
import { SiteNavbar } from "@/components/layout/site-navbar";

function PageFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[55vh] items-center justify-center"
    >
      <span className="inline-flex items-center gap-3 text-sm text-muted-foreground">
        <span
          aria-hidden="true"
          className="size-4 animate-spin rounded-full border-2 border-border border-t-accent"
        />
        Memuat halaman…
      </span>
    </div>
  );
}

export function RootLayout() {
  return (
    <div className="page-shell flex min-h-screen flex-col">
      <SiteNavbar />
      <main className="flex-1 pb-24 lg:pb-0">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <SiteFooter />
      <MobileBottomNavigation />
    </div>
  );
}
