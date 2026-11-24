import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { FaviconMark } from '@/components/common/favicon-mark'
import { usePageMeta } from '@/hooks/use-page-meta'

export default function NotFoundPage() {
  usePageMeta('Page not found — Randhu Paksi Membumi')

  return (
    <section className="folio-section not-found" aria-labelledby="not-found-title">
      <article className="not-found-panel">
        <div className="not-found-mark" aria-hidden="true">
          <span className="not-found-mark-label">ROUTE / 404</span>
          <strong className="not-found-mark-code">404</strong>
          <FaviconMark className="not-found-brand-mark" />
          <span className="not-found-mark-caption">PAGE NOT IN INDEX</span>
        </div>

        <div className="not-found-copy">
          <p className="folio-label">404 / A small detour</p>
          <h1 id="not-found-title">
            This page took a different <em>turn</em>
          </h1>
          <p>The link may have moved. There’s still plenty to explore.</p>
          <div className="not-found-actions">
            <Link className="not-found-primary" to="/">
              Back home <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>
    </section>
  )
}
