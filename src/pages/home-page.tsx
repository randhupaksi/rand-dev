import { ArrowDownRight, ArrowUpRight, Asterisk } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SocialLinks } from '@/components/common/social-links'
import { WorkIndex } from '@/components/common/work-index'
import { editorial } from '@/data/editorial'
import { expertiseItems, processSteps, toolGroups } from '@/data/home'
import { projects } from '@/data/projects'
import { siteIdentity } from '@/data/site'
import { usePageMeta } from '@/hooks/use-page-meta'

export default function HomePage() {
  usePageMeta('Randhu Paksi Membumi — Frontend Developer', editorial.intro)
  return (
    <div className="creative-home">
      <section id="home" className="home-cover">
        <div className="home-cover-copy">
          <p className="folio-label">
            <span>WEB · PRODUCT UI</span>
          </p>
          <h1>
            <span className="home-cover-greeting">Hi, I’m Randhu Paksi Membumi.</span>
            <span className="home-cover-heading">
              Creative <em>Frontend Developer</em>
            </span>
          </h1>
          <div className="home-cover-bottom">
            <p>{editorial.intro}</p>
            <a href="#portfolio" className="cover-scroll" aria-label="Explore selected work">
              <ArrowDownRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="home-cover-profile">
          <figure className="home-cover-portrait">
            <div className="cover-portrait-image">
              <span className="cover-portrait-marker" aria-hidden="true">
                R
              </span>
              <img
                src="/images/profile/randhu-no-bg.png"
                alt="Randhu Paksi Membumi"
                fetchPriority="high"
              />
              <span className="cover-portrait-side">FRONTEND · UI/UX · PPLG</span>
            </div>
            <figcaption>
              <span>Web / applications</span>
              <span>Product UI / interaction</span>
            </figcaption>
          </figure>
          <SocialLinks
            className="cover-profile-links"
            include={['github', 'instagram', 'linkedin']}
          />
        </div>
        <div className="cover-baseline">
          <span>React / Next.js / TypeScript</span>
          <span>Product UI / School software / Learning tools</span>
        </div>
      </section>

      <section id="portfolio" className="home-work-section">
        <div className="home-work-heading">
          <p className="folio-label">
            <span>01</span> SELECTED WORK
          </p>
          <div>
            <h2>
              Selected <em>projects.</em>
            </h2>
            <p>
              Work across school workflows, an independent studio, ambient SVG motion, learning
              tools, personal finance, and digital storytelling.
            </p>
          </div>
        </div>
        <WorkIndex projects={projects.slice(0, 3)} />
        <Link className="home-index-link" to="/projects">
          <span>See the full project index</span>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </section>

      <section id="about" className="home-manifesto">
        <div className="manifesto-index">
          <span>02 / CURRENT ROLE</span>
          <Asterisk aria-hidden="true" />
        </div>
        <div className="manifesto-content">
          <h2>
            Matik Creative <em>Technology.</em>
          </h2>
          <div>
            <p>
              Frontend Developer since January 2026. I build web and application interfaces with
              React, Next.js, TypeScript, and JavaScript.
            </p>
            <Link className="manifesto-link" to="/about">
              Experience & education <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="skills" className="home-capabilities">
        <header className="capability-heading">
          <p className="folio-label">
            <span>03</span> CURRENT FOCUS
          </p>
          <h2>What I work on</h2>
          <p>
            Frontend development, production school software, and interactive learning products.
          </p>
        </header>
        <div className="capability-list">
          {expertiseItems.map((item, index) => (
            <article key={item.title}>
              <span className="capability-number">0{index + 1}</span>
              <h3>{item.title}</h3>
              <div>
                <p>{item.description}</p>
                <span>{item.bullets.join(' / ')}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-toolkit">
        <header>
          <p className="folio-label">
            <span>04</span> TOOLS & TECHNOLOGIES
          </p>
          <h2>
            Tools I use in <em>projects.</em>
          </h2>
        </header>
        <div className="toolkit-grid">
          {toolGroups.map((group, index) => (
            <article key={group.title}>
              <span className="folio-label">
                0{index + 1} / {group.title}
              </span>
              <p>
                {group.items.map((item, itemIndex) => (
                  <span key={item}>
                    {item}
                    {itemIndex < group.items.length - 1 && <i aria-hidden="true"> · </i>}
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-process">
        <header className="process-heading">
          <p className="folio-label">
            <span>05</span> PROJECT WORKFLOW
          </p>
          <h2>
            How I <em>work.</em>
          </h2>
        </header>
        <ol className="process-list">
          {processSteps.map(step => (
            <li key={step.step}>
              <span className="process-marker">{step.step}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="home-contact">
        <div className="contact-orbit" aria-hidden="true">
          <Asterisk />
        </div>
        <p className="folio-label">06 / AVAILABILITY</p>
        <h2>
          Contact <em>Randhu.</em>
        </h2>
        <div className="home-contact-bottom">
          <p>Frontend roles, product UI work, and web application collaboration.</p>
          <div>
            <Link className="contact-primary" to="/contact">
              Let’s talk <ArrowUpRight aria-hidden="true" />
            </Link>
            {siteIdentity.cvHref && (
              <a
                className="contact-secondary"
                href={siteIdentity.cvHref}
                target="_blank"
                rel="noreferrer"
              >
                Read my CV <ArrowUpRight aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
