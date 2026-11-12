import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { MediaPlaceholder } from '@/components/common/media-placeholder'
import { SectionHeading } from '@/components/ui/section-heading'
import { getProjectBySlug } from '@/data/project-details'
import { usePageMeta } from '@/hooks/use-page-meta'
import NotFoundPage from '@/pages/not-found-page'
export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined
  usePageMeta(project ? `${project.name} — Case study` : 'Project not found', project?.summary)
  if (!project) return <NotFoundPage />
  return (
    <div className="editorial-page case-study">
      <header className="folio-page-intro">
        <Link className="folio-text-link" to="/projects">
          <ArrowLeft size={16} aria-hidden="true" />
          All projects
        </Link>
        <p className="folio-label case-category">
          {project.category} /{' '}
          {project.period.isPlaceholder ? 'Timeline not published' : project.period.value}
          {project.status === 'draft' ? ' / Case study in progress' : ''}
        </p>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
        <div className="case-links">
          {project.links.demo && (
            <a
              className="folio-text-link"
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
            >
              View live product <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          )}
          {project.links.repository && (
            <a
              className="folio-text-link"
              href={project.links.repository}
              target="_blank"
              rel="noreferrer"
            >
              Repository <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      </header>
      <section className="folio-section paper-field case-cover">
        <figure className="case-cover-figure">
          <MediaPlaceholder
            src={project.thumbnail?.src}
            alt={project.thumbnail?.alt}
            label={project.thumbnail?.label ?? project.name}
            hint={project.thumbnail?.src ? undefined : 'Project screenshot coming soon'}
            aspect="wide"
            preview
            className="case-cover-visual"
          />
          <figcaption>
            <span>Selected interface</span>
            <span>{project.thumbnail?.label ?? project.name}</span>
          </figcaption>
        </figure>
        <div className="case-facts">
          <div>
            <p className="folio-label">Built with</p>
            <p>{project.stack.join(' / ')}</p>
          </div>
          <div>
            <p className="folio-label">Focus</p>
            <p>{project.focusAreas.join(' / ')}</p>
          </div>
        </div>
      </section>
      <section className="folio-section">
        <SectionHeading
          index="01"
          label="Project details"
          title={
            <>
              Features & technical <em>scope</em>
            </>
          }
        />
        <div className="case-narrative">
          {project.caseStudy.map((block, index) => (
            <article key={block.title}>
              <span className="folio-label">/0{index + 1}</span>
              <h2>{block.title}</h2>
              <p>
                {block.isPlaceholder && <span className="draft-note">Draft · </span>}
                {block.body}
              </p>
            </article>
          ))}
        </div>
      </section>
      {project.capabilities?.length && (
        <section className="folio-section paper-field">
          <SectionHeading
            index="02"
            label="Product features"
            title={
              <>
                Core <em>capabilities</em>
              </>
            }
          />
          <div className="skill-list">
            {project.capabilities.map(item => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}
      {project.technicalStack?.length && (
        <section className="folio-section">
          <SectionHeading
            index="03"
            label="Implementation"
            title={
              <>
                Stack & <em>architecture</em>
              </>
            }
          />
          <div className="skill-list">
            {project.technicalStack.map(group => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <div>
                  <p>{group.description}</p>
                  <p className="skill-items">{group.items.join(' / ')}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
      {project.gallery?.length && (
        <section className="folio-section paper-field">
          <SectionHeading
            index="04"
            label="Product screenshots"
            title={
              <>
                Interface <em>gallery</em>
              </>
            }
          />
          <div className="case-gallery">
            {project.gallery.map((item, index) => (
              <figure key={item.label}>
                <MediaPlaceholder
                  src={item.src}
                  alt={item.alt}
                  label={item.label}
                  hint={item.hint ?? (item.src ? undefined : 'Screenshot coming soon')}
                  preview
                  className="case-gallery-visual"
                />
                <figcaption>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{item.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
