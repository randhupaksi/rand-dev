import { Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { PortfolioLoader } from '@/components/common/portfolio-loader'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteNavbar } from '@/components/layout/site-navbar'

function DismissInitialLoader() {
  useEffect(() => {
    const loader = document.getElementById('initial-loader')

    if (!loader) {
      return
    }

    loader.classList.add('is-ready')
    const timeoutId = window.setTimeout(() => loader.remove(), 260)

    return () => window.clearTimeout(timeoutId)
  }, [])

  return null
}

function RouteLoadingFallback() {
  if (document.getElementById('initial-loader')) {
    return null
  }

  return <PortfolioLoader />
}

export function RootLayout() {
  return (
    <>
      <div className="folio-app flex min-h-screen flex-col">
        <a className="folio-skip" href="#main-content">
          Skip to content
        </a>
        <SiteNavbar />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <Suspense fallback={<RouteLoadingFallback />}>
            <Outlet />
            <DismissInitialLoader />
          </Suspense>
        </main>
        <SiteFooter />
      </div>
    </>
  )
}
