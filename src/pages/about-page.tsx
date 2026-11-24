import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/ui/section-heading'
import { aboutFacts, journeyItems, profileHighlights, skillGroups } from '@/data/about'
import { editorial } from '@/data/editorial'
import { projects } from '@/data/projects'
import { usePageMeta } from '@/hooks/use-page-meta'
export default function AboutPage() {
  const primarySkillGroups = skillGroups.filter(group => !group.isAdditional)
  const additionalSkillGroups = skillGroups.filter(group => group.isAdditional)

  usePageMeta('Randhu Paksi Membumi — Frontend Developer', editorial.aboutIntro)
  return (
    <div className="about-page editorial-page">
      <header className="folio-page-intro">
        <p className="folio-label">Profile / Randhu Paksi Membumi</p>
        <h1>
          Frontend <em>Developer</em>
        </h1>
        <div className="about-profile">
          <div className="about-profile-portrait">
            <img src="/images/profile/randhu-no-bg-clean.png" alt="Randhu Paksi Membumi" />
          </div>
          <div>
            <p>{editorial.aboutIntro}</p>
            <dl>
              {aboutFacts.map(fact => (
                <div key={fact.label}>
                  <dt className="folio-label">{fact.label}</dt>
                  <dd>{fact.value}</dd>
                  <dd className="fact-detail">{fact.detail}</dd>
                  {fact.href && (
                    <dd>
                      <a
                        className="folio-text-link"
                        href={fact.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Explore product <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </header>
      <section className="folio-section paper-field">
        <SectionHeading
          index="01"
          label="Selected work"
          title={
            <>
              Projects in <em>context</em>
            </>
          }
        />
        <div className="principle-grid">
          {profileHighlights.map((item, index) => {
            const project = projects.find(({ slug }) => slug === item.projectSlug)

            if (!project) {
              return null
            }

            return (
              <article key={project.slug}>
                <p className="folio-label">/0{index + 1}</p>
                <h3>{project.name}</h3>
                <p className="highlight-fact">{item.fact}</p>
                <p className="highlight-description">{item.description}</p>
                {project.links.demo ? (
                  <a
                    className="highlight-project-link"
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Open {project.name}</span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ) : null}
              </article>
            )
          })}
        </div>
      </section>
      <section className="folio-section">
        <SectionHeading
          index="02"
          label="Skills & additional experience"
          title={
            <>
              Frontend, API & <em>UI/UX</em>
            </>
          }
        />
        <div className="skill-list">
          {primarySkillGroups.map(group => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <div>
                <p>{group.description}</p>
                <p className="skill-items">{group.items.join(' / ')}</p>
              </div>
            </article>
          ))}
        </div>
        {additionalSkillGroups.map(group => (
          <aside key={group.title} className="additional-skill">
            <p className="folio-label">Additional skill</p>
            <div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <p className="skill-items">{group.items.join(' / ')}</p>
            </div>
          </aside>
        ))}
      </section>
      <section className="folio-section paper-field">
        <SectionHeading
          index="03"
          label="Experience & education"
          title={
            <>
              Roles & <em>recognition</em>
            </>
          }
        />
        <ol className="journey-list">
          {journeyItems.map(item => (
            <li key={item.title}>
              <span className="folio-label">{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.organization}</p>
              </div>
              <div>
                <p>{item.description}</p>
                {item.organizationHref && (
                  <a
                    className="folio-text-link"
                    href={item.organizationHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit organization <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
                {item.evidence && (
                  <a
                    className="folio-text-link"
                    href={item.evidence.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.evidence.label} <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="about-project-cta" aria-labelledby="about-project-cta-title">
        <div className="about-project-cta-copy">
          <p className="folio-label">
            <span>04</span>
            Project index
          </p>
          <h2 id="about-project-cta-title">
            The work beyond the <em>highlights</em>
          </h2>
          <p>Browse project details, implementation choices, and product context.</p>
        </div>
        <Link to="/projects" className="about-project-cta-link">
          View all projects <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </div>
  )
}
