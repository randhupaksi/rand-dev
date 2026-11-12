import { WorkIndex } from '@/components/common/work-index'
import { projects } from '@/data/projects'
import { usePageMeta } from '@/hooks/use-page-meta'
export default function ProjectsPage() {
  usePageMeta(
    'Selected projects — Randhu Paksi Membumi',
    'Production school software, an independent digital studio, ambient SVG scenes, learning products, personal finance tools, and digital storytelling.',
  )
  return (
    <div className="project-index">
      <header className="folio-page-intro">
        <p className="folio-label">
          The work / {String(projects.length).padStart(2, '0')} projects
        </p>
        <h1>
          Selected <em>projects</em>
        </h1>
        <p>
          Work spans a production attendance platform, an independent studio site, an ambient SVG
          collection, browser-based learning tools, local-first finance software, and a digital
          letter. Each project page documents its scope, interface, and implementation details.
        </p>
      </header>
      <section className="folio-section project-work">
        <WorkIndex projects={projects} />
      </section>
    </div>
  )
}
