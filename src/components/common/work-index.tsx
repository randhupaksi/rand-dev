import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ProjectSummary } from '@/types/project'

export function WorkIndex({ projects }: { projects: ProjectSummary[] }) {
  return (
    <ol className="work-index-list">
      {projects.map((project, index) => (
        <li key={project.slug}>
          <span className="work-index-number">{String(index + 1).padStart(2, '0')}</span>
          <div className="work-index-title">
            <span className="folio-label">{project.category}</span>
            <h3>
              <Link to={`/projects/${project.slug}`}>{project.name}</Link>
            </h3>
          </div>
          <p>{project.summary}</p>
          <span className="work-index-stack">{project.stack.slice(0, 3).join(' / ')}</span>
          <Link
            className="work-index-open"
            to={`/projects/${project.slug}`}
            aria-label={`Open ${project.name}`}
          >
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ol>
  )
}
