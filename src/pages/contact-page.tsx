import { ArrowUpRight } from 'lucide-react'
import { contactFaq } from '@/data/about'
import { contactChannels, siteIdentity, socialLinks } from '@/data/site'
import { usePageMeta } from '@/hooks/use-page-meta'
import { SectionHeading } from '@/components/ui/section-heading'
export default function ContactPage() {
  usePageMeta(
    'Contact Randhu Paksi Membumi',
    'Frontend Developer at Matik Creative Technology, open to frontend roles and product UI or web app collaboration.',
  )
  const channels = contactChannels.filter(channel => channel.href)
  return (
    <div className="editorial-page">
      <header className="folio-page-intro contact-intro">
        <p className="folio-label">Contact / Randhu Paksi Membumi</p>
        <h1>
          Contact <em>Randhu.</em>
        </h1>
        <p>
          Frontend Developer at Matik Creative Technology. Open to frontend roles, product UI work,
          and web application collaboration.
        </p>
      </header>
      <section className="folio-section paper-field">
        <SectionHeading
          index="01"
          label="Contact channels"
          title={
            <>
              Professional <em>profiles.</em>
            </>
          }
        />
        <div className="contact-links">
          {channels.map(channel => (
            <a key={channel.key} href={channel.href!}>
              <span className="folio-label">{channel.label}</span>
              <span>{channel.value}</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
          {socialLinks
            .filter(link => link.href)
            .map(link => (
              <a key={link.key} href={link.href!} target="_blank" rel="noreferrer">
                <span className="folio-label">Profile</span>
                <span>{link.label}</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          {siteIdentity.cvHref && (
            <a href={siteIdentity.cvHref} target="_blank" rel="noreferrer">
              <span className="folio-label">Background</span>
              <span>Read my CV</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
        {!channels.length && (
          <p className="contact-note">
            Email isn’t published here yet. You can reach me through the profiles above.
          </p>
        )}
      </section>
      <section className="folio-section">
        <SectionHeading
          index="02"
          label="Work & technologies"
          title={
            <>
              Availability & <em>stack.</em>
            </>
          }
        />
        <div className="editorial-faq">
          {contactFaq.map((faq, index) => (
            <details key={faq.question} name="contact-faq">
              <summary>
                <span className="folio-label">0{index + 1}</span>
                {faq.question}
                <span className="faq-sign" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
