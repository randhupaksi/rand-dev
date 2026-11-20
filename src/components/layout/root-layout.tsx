import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { PageSkeleton } from '@/components/common/page-skeleton'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteNavbar } from '@/components/layout/site-navbar'

export function RootLayout() {
  return (
    <>
      <div className="folio-app flex min-h-screen flex-col">
        <a className="folio-skip" href="#main-content">
          Skip to content
        </a>
        <SiteNavbar />
        <div className="folio-navbar-spacer" aria-hidden="true" />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <Suspense fallback={<PageSkeleton />}>
            <Outlet />
          </Suspense>
        </main>
        <SiteFooter />
      </div>
    </>
  )
}
