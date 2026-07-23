import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { SiteFooter } from "@/components/layout/site-footer";
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
          className="size-4 animate-spin rounded-full border-2 border-white/15 border-t-[var(--accent)]"
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
      <main className="flex-1">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}
