import { useLocation } from 'react-router-dom'

const projectCount = 8
const projectGalleryCount = 8
const lineWidths = [
  'page-skeleton-line--full',
  'page-skeleton-line--wide',
  'page-skeleton-line--short',
]

function Shape({ className = '' }: { className?: string }) {
  return <span className={`page-skeleton-shape ${className}`} />
}

function Lines({ count = 3, className = '' }: { count?: number; className?: string }) {
  return (
    <div className={`page-skeleton-lines ${className}`}>
      {Array.from({ length: count }, (_, index) => (
        <Shape
          key={index}
          className={`page-skeleton-line ${lineWidths[index % lineWidths.length]}`}
        />
      ))}
    </div>
  )
}

function SectionHeading({ description = false }: { description?: boolean }) {
  return (
    <div className="page-skeleton-section-heading">
      <Shape className="page-skeleton-eyebrow" />
      <div className="page-skeleton-title-lines">
        <Shape className="page-skeleton-title" />
        <Shape className="page-skeleton-title page-skeleton-title--short" />
      </div>
      {description && <Lines count={2} className="page-skeleton-heading-copy" />}
    </div>
  )
}

function HomeSkeleton() {
  return (
    <div className="page-skeleton-home">
      <section className="home-cover page-skeleton-home-cover">
        <div className="home-cover-copy page-skeleton-home-copy">
          <Shape className="page-skeleton-eyebrow" />
          <Shape className="page-skeleton-greeting" />
          <div className="page-skeleton-home-title">
            <Shape className="page-skeleton-title" />
            <Shape className="page-skeleton-title page-skeleton-title--wide" />
          </div>
          <div className="home-cover-bottom page-skeleton-home-bottom">
            <Lines count={3} />
            <Shape className="page-skeleton-arrow" />
          </div>
        </div>

        <div className="home-cover-profile page-skeleton-home-profile">
          <figure className="home-cover-portrait">
            <div className="cover-portrait-image page-skeleton-portrait">
              <span className="page-skeleton-monogram">R</span>
              <div className="page-skeleton-person" aria-hidden="true">
                <span className="page-skeleton-person-head" />
                <span className="page-skeleton-person-body" />
              </div>
              <Shape className="page-skeleton-portrait-side" />
            </div>
            <figcaption>
              <Shape className="page-skeleton-caption" />
              <Shape className="page-skeleton-caption page-skeleton-caption--short" />
            </figcaption>
          </figure>
          <div className="cover-profile-links page-skeleton-socials">
            {Array.from({ length: 3 }, (_, index) => (
              <Shape key={index} className="page-skeleton-social" />
            ))}
          </div>
        </div>

        <div className="cover-baseline page-skeleton-baseline">
          <Shape className="page-skeleton-baseline-copy" />
          <Shape className="page-skeleton-baseline-copy page-skeleton-baseline-copy--short" />
        </div>
      </section>

      <section className="home-work-section page-skeleton-home-work">
        <div className="home-work-heading">
          <Shape className="page-skeleton-eyebrow" />
          <div>
            <div className="page-skeleton-title-lines">
              <Shape className="page-skeleton-title" />
              <Shape className="page-skeleton-title page-skeleton-title--short" />
            </div>
            <Lines count={3} />
          </div>
        </div>
        <ProjectRows count={3} compact />
        <div className="page-skeleton-index-link">
          <Shape className="page-skeleton-link-copy" />
          <Shape className="page-skeleton-arrow page-skeleton-arrow--small" />
        </div>
      </section>

      <section className="home-manifesto page-skeleton-manifesto">
        <div className="manifesto-index">
          <Shape className="page-skeleton-eyebrow" />
          <Shape className="page-skeleton-manifesto-mark" />
        </div>
        <div className="manifesto-content">
          <div className="page-skeleton-title-lines">
            <Shape className="page-skeleton-title page-skeleton-title--manifesto" />
            <Shape className="page-skeleton-title page-skeleton-title--manifesto-short" />
          </div>
          <div className="manifesto-details">
            <div className="manifesto-position">
              <Shape className="page-skeleton-subheading" />
              <Shape className="page-skeleton-eyebrow" />
            </div>
            <Lines count={3} />
            <Shape className="page-skeleton-action" />
          </div>
        </div>
      </section>

      <section className="home-capabilities page-skeleton-capabilities">
        <header className="capability-heading">
          <Shape className="page-skeleton-eyebrow" />
          <Shape className="page-skeleton-title page-skeleton-section-title" />
          <Lines count={2} />
        </header>
        <div className="capability-list">
          {Array.from({ length: 3 }, (_, index) => (
            <article key={index}>
              <Shape className="page-skeleton-number" />
              <Shape className="page-skeleton-subheading" />
              <div>
                <Lines count={2} />
                <Shape className="page-skeleton-tagline" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-toolkit page-skeleton-toolkit">
        <header>
          <Shape className="page-skeleton-eyebrow" />
          <div className="page-skeleton-title-lines">
            <Shape className="page-skeleton-title" />
            <Shape className="page-skeleton-title page-skeleton-title--short" />
          </div>
        </header>
        <div className="toolkit-grid">
          {Array.from({ length: 4 }, (_, index) => (
            <article key={index}>
              <Shape className="page-skeleton-eyebrow" />
              <Lines count={2} />
            </article>
          ))}
        </div>
      </section>

      <section className="home-process page-skeleton-process">
        <header className="process-heading">
          <Shape className="page-skeleton-eyebrow" />
          <div className="page-skeleton-title-lines">
            <Shape className="page-skeleton-title" />
            <Shape className="page-skeleton-title page-skeleton-title--short" />
          </div>
        </header>
        <ol className="process-list">
          {Array.from({ length: 4 }, (_, index) => (
            <li key={index}>
              <Shape className="page-skeleton-process-marker" />
              <div>
                <Shape className="page-skeleton-subheading" />
                <Lines count={2} />
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="home-contact page-skeleton-home-contact">
        <div className="contact-orbit" aria-hidden="true">
          <Shape className="page-skeleton-contact-mark" />
        </div>
        <Shape className="page-skeleton-eyebrow" />
        <div className="page-skeleton-title-lines">
          <Shape className="page-skeleton-title page-skeleton-title--contact" />
          <Shape className="page-skeleton-title page-skeleton-title--contact-short" />
        </div>
        <div className="home-contact-bottom">
          <Lines count={2} />
          <div className="page-skeleton-contact-actions">
            <Shape className="page-skeleton-button" />
            <Shape className="page-skeleton-button page-skeleton-button--secondary" />
          </div>
        </div>
      </section>
    </div>
  )
}

function ProjectRows({
  count = projectCount,
  compact = false,
}: {
  count?: number
  compact?: boolean
}) {
  return (
    <ol className={`work-index-list page-skeleton-project-list ${compact ? 'is-compact' : ''}`}>
      {Array.from({ length: count }, (_, index) => (
        <li key={index} className="has-image">
          <span className="work-index-number">
            <Shape className="page-skeleton-number" />
          </span>
          <div className="work-index-title">
            <Shape className="page-skeleton-eyebrow" />
            <h3>
              <Shape className="page-skeleton-project-title" />
            </h3>
          </div>
          <div className="page-skeleton-summary">
            <Lines count={2} />
          </div>
          <span className="work-index-stack">
            <Shape className="page-skeleton-stack" />
          </span>
          <figure className="work-index-image">
            <Shape className="page-skeleton-media" />
          </figure>
          <Shape className="work-index-open page-skeleton-open" />
        </li>
      ))}
    </ol>
  )
}

function ProjectsSkeleton() {
  return (
    <div className="project-index page-skeleton-projects">
      <header className="folio-page-intro">
        <Shape className="page-skeleton-eyebrow" />
        <div className="page-skeleton-title-lines page-skeleton-page-title">
          <Shape className="page-skeleton-title" />
          <Shape className="page-skeleton-title page-skeleton-title--short" />
        </div>
        <Lines count={3} className="page-skeleton-intro-copy" />
      </header>
      <section className="folio-section project-work">
        <ProjectRows />
      </section>
    </div>
  )
}

function AboutSkeleton() {
  return (
    <div className="editorial-page about-page page-skeleton-about">
      <header className="folio-page-intro">
        <Shape className="page-skeleton-eyebrow" />
        <div className="page-skeleton-title-lines page-skeleton-page-title">
          <Shape className="page-skeleton-title" />
          <Shape className="page-skeleton-title page-skeleton-title--short" />
        </div>
        <div className="about-profile">
          <div className="about-profile-portrait page-skeleton-about-portrait">
            <div className="page-skeleton-person" aria-hidden="true">
              <span className="page-skeleton-person-head" />
              <span className="page-skeleton-person-body" />
            </div>
          </div>
          <div>
            <Lines count={4} />
            <dl>
              {Array.from({ length: 3 }, (_, index) => (
                <div key={index}>
                  <Shape className="page-skeleton-eyebrow" />
                  <Shape className="page-skeleton-subheading" />
                  <Lines count={1} />
                </div>
              ))}
            </dl>
          </div>
        </div>
      </header>

      <section className="folio-section paper-field">
        <SectionHeading />
        <div className="principle-grid page-skeleton-highlight-grid">
          {Array.from({ length: 3 }, (_, index) => (
            <article key={index}>
              <Shape className="page-skeleton-eyebrow" />
              <Shape className="page-skeleton-subheading" />
              <Shape className="page-skeleton-tagline" />
              <Lines count={3} />
              <Shape className="page-skeleton-action" />
            </article>
          ))}
        </div>
      </section>

      <section className="folio-section">
        <SectionHeading />
        <div className="skill-list">
          {Array.from({ length: 3 }, (_, index) => (
            <article key={index}>
              <Shape className="page-skeleton-subheading" />
              <div>
                <Lines count={2} />
                <Shape className="page-skeleton-tagline" />
              </div>
            </article>
          ))}
        </div>
        <aside className="additional-skill page-skeleton-additional-skill">
          <Shape className="page-skeleton-eyebrow" />
          <div>
            <Shape className="page-skeleton-subheading" />
            <Lines count={2} />
            <Shape className="page-skeleton-tagline" />
          </div>
        </aside>
      </section>

      <section className="folio-section paper-field">
        <SectionHeading />
        <ol className="journey-list">
          {Array.from({ length: 4 }, (_, index) => (
            <li key={index}>
              <Shape className="page-skeleton-eyebrow" />
              <div>
                <Shape className="page-skeleton-subheading" />
                <Lines count={1} />
              </div>
              <div>
                <Lines count={2} />
                <Shape className="page-skeleton-action" />
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-project-cta page-skeleton-about-cta">
        <div className="about-project-cta-copy">
          <Shape className="page-skeleton-eyebrow" />
          <div className="page-skeleton-title-lines">
            <Shape className="page-skeleton-title" />
            <Shape className="page-skeleton-title page-skeleton-title--short" />
          </div>
          <Lines count={2} />
        </div>
        <Shape className="page-skeleton-button" />
      </section>
    </div>
  )
}

function ProjectDetailSkeleton() {
  return (
    <div className="editorial-page case-study page-skeleton-detail">
      <header className="folio-page-intro case-hero">
        <div className="case-hero-copy">
          <Shape className="page-skeleton-back-link" />
          <Shape className="page-skeleton-eyebrow page-skeleton-case-category" />
          <div className="page-skeleton-title-lines page-skeleton-case-title">
            <Shape className="page-skeleton-title" />
            <Shape className="page-skeleton-title page-skeleton-title--short" />
          </div>
          <Lines count={3} />
          <div className="page-skeleton-case-links">
            <Shape className="page-skeleton-action" />
            <Shape className="page-skeleton-action page-skeleton-action--short" />
          </div>
        </div>
        <figure className="case-hero-cover">
          <Shape className="case-cover-visual page-skeleton-media" />
        </figure>
      </header>

      <section className="folio-section paper-field">
        <SectionHeading />
        <div className="case-narrative">
          {Array.from({ length: 4 }, (_, index) => (
            <article key={index} className="page-skeleton-case-row">
              <Shape className="page-skeleton-number" />
              <Shape className="page-skeleton-subheading" />
              <Lines count={2} />
            </article>
          ))}
        </div>
      </section>

      <section className="folio-section">
        <SectionHeading />
        <div className="skill-list">
          {Array.from({ length: 4 }, (_, index) => (
            <article key={index}>
              <Shape className="page-skeleton-subheading" />
              <Lines count={2} />
            </article>
          ))}
        </div>
      </section>

      <section className="folio-section paper-field technical-stack-section">
        <SectionHeading />
        <div className="skill-list technical-stack-list">
          {Array.from({ length: 3 }, (_, index) => (
            <article key={index}>
              <Shape className="page-skeleton-subheading" />
              <div>
                <Lines count={2} />
                <div className="page-skeleton-chips">
                  {Array.from({ length: 4 }, (_, chipIndex) => (
                    <Shape key={chipIndex} className="page-skeleton-chip" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="folio-section">
        <SectionHeading />
        <div className="case-gallery">
          {Array.from({ length: projectGalleryCount }, (_, index) => (
            <figure key={index}>
              <Shape className="case-gallery-visual page-skeleton-media" />
              <figcaption>
                <Shape className="page-skeleton-gallery-index" />
                <Shape className="page-skeleton-gallery-caption" />
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="folio-section paper-field project-recommendations">
        <div className="project-recommendations-heading">
          <Shape className="page-skeleton-eyebrow" />
          <div className="page-skeleton-title-lines">
            <Shape className="page-skeleton-title" />
            <Shape className="page-skeleton-title page-skeleton-title--short" />
          </div>
        </div>
        <div className="project-recommendation-grid">
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className="project-recommendation-card">
              <Shape className="project-recommendation-image page-skeleton-media" />
              <div className="project-recommendation-copy">
                <Shape className="page-skeleton-eyebrow" />
                <Shape className="page-skeleton-project-title" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function ContactSkeleton() {
  return (
    <div className="editorial-page page-skeleton-contact">
      <header className="folio-page-intro contact-intro">
        <Shape className="page-skeleton-eyebrow" />
        <div className="page-skeleton-title-lines page-skeleton-page-title">
          <Shape className="page-skeleton-title" />
          <Shape className="page-skeleton-title page-skeleton-title--short" />
        </div>
        <Lines count={3} className="page-skeleton-intro-copy" />
      </header>
      <section className="folio-section paper-field">
        <SectionHeading />
        <div className="contact-links page-skeleton-contact-list">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className="page-skeleton-contact-row">
              <Shape className="page-skeleton-eyebrow" />
              <Shape className="page-skeleton-contact-value" />
              <Shape className="page-skeleton-open" />
            </div>
          ))}
        </div>
      </section>
      <section className="folio-section">
        <SectionHeading />
        <div className="editorial-faq page-skeleton-faq">
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="page-skeleton-faq-row">
              <Shape className="page-skeleton-number" />
              <Shape className="page-skeleton-subheading" />
              <Shape className="page-skeleton-faq-sign" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function NotFoundSkeleton() {
  return (
    <section className="folio-section not-found page-skeleton-not-found">
      <Shape className="page-skeleton-eyebrow" />
      <div className="page-skeleton-title-lines page-skeleton-not-found-title">
        <Shape className="page-skeleton-title" />
        <Shape className="page-skeleton-title page-skeleton-title--short" />
      </div>
      <Lines count={2} />
      <div className="page-skeleton-not-found-actions">
        <Shape className="page-skeleton-action" />
        <Shape className="page-skeleton-action" />
      </div>
    </section>
  )
}

export function PageSkeleton() {
  const { pathname } = useLocation()
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  const isProjectDetail = /^\/projects\/[^/]+$/.test(normalizedPath)
  const page =
    normalizedPath === '/'
      ? 'home'
      : normalizedPath === '/about'
        ? 'about'
        : normalizedPath === '/projects'
          ? 'projects'
          : isProjectDetail
            ? 'project-detail'
            : normalizedPath === '/contact'
              ? 'contact'
              : 'not-found'
  const label = page === 'project-detail' ? 'project details' : page.replace('-', ' ')

  return (
    <div
      className={`page-skeleton page-skeleton--${page}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={`Loading ${label}`}
    >
      <div className="page-skeleton-art" aria-hidden="true">
        {page === 'home' ? (
          <HomeSkeleton />
        ) : page === 'about' ? (
          <AboutSkeleton />
        ) : page === 'projects' ? (
          <ProjectsSkeleton />
        ) : page === 'project-detail' ? (
          <ProjectDetailSkeleton />
        ) : page === 'contact' ? (
          <ContactSkeleton />
        ) : (
          <NotFoundSkeleton />
        )}
      </div>
    </div>
  )
}
