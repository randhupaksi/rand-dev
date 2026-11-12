import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/use-page-meta'
export default function NotFoundPage() {
  usePageMeta('Page not found — Randhu Paksi Membumi')
  return (
    <section className="folio-section not-found">
      <p className="folio-label">404 / A small detour</p>
      <h1>
        This page took a different <em>turn</em>
      </h1>
      <p>The link may have moved. There’s still plenty to explore.</p>
      <Link className="folio-text-link" to="/">
        Back home <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
      <Link className="folio-text-link" to="/projects">
        Explore the work <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
    </section>
  )
}
