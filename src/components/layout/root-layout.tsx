import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { PortfolioLoader } from "@/components/common/portfolio-loader";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileBottomNavigation } from "@/components/layout/mobile-bottom-navigation";
import { SiteNavbar } from "@/components/layout/site-navbar";

function DismissInitialLoader() {
  useEffect(() => {
    const loader = document.getElementById("initial-loader");

    if (!loader) {
      return;
    }

    loader.classList.add("is-ready");
    const timeoutId = window.setTimeout(() => loader.remove(), 260);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return null;
}

export function RootLayout() {
  return (
    <>
      <DismissInitialLoader />
      <div className="page-shell flex min-h-screen flex-col">
        <SiteNavbar />
        <main className="flex-1">
          <Suspense fallback={<PortfolioLoader />}>
            <Outlet />
          </Suspense>
        </main>
        <SiteFooter />
        <MobileBottomNavigation />
      </div>
    </>
  );
}
