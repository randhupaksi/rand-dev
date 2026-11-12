import { ArrowUpRight, BriefcaseBusiness, House, Mail, UserRound } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { SocialLinks } from '@/components/common/social-links'
import { navigationItems } from '@/data/navigation'
import { contactChannels, siteIdentity } from '@/data/site'

const navigationIcons = {
  '/': House,
  '/about': UserRound,
  '/projects': BriefcaseBusiness,
  '/contact': Mail,
} as const

export function SiteFooter() {
  const email = contactChannels.find(channel => channel.key === 'email')

  return (
    <footer className="folio-footer">
      <div className="footer-top">
        <div className="footer-intro">
          <Link to="/" className="footer-brand">
            Randhu <span>Paksi</span>
          </Link>
          <p>{siteIdentity.tagline}</p>
          {email?.href ? (
            <a className="footer-email" href={email.href}>
              {email.value}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ) : null}
          <SocialLinks className="footer-socials" />
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <p className="footer-eyebrow">Explore</p>
          <ul>
            {navigationItems.map(item => {
              const Icon = navigationIcons[item.to as keyof typeof navigationIcons]

              return (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'}>
                    <Icon size={17} aria-hidden="true" />
                    {item.label}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>

        <section className="footer-focus" aria-labelledby="footer-focus-title">
          <p className="footer-eyebrow">Current focus</p>
          <h2 id="footer-focus-title">Frontend &amp; product UI</h2>
          <p>Web applications, responsive interfaces, and interactive experiences.</p>
          <Link to="/contact">
            Discuss a collaboration <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </section>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {siteIdentity.name}
        </span>
      </div>
    </footer>
  )
}
