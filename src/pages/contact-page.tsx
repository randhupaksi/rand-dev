import { useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

import { FaviconMark } from '@/components/common/favicon-mark'
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
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <div className="editorial-page">
      <header className="folio-page-intro contact-intro">
        <FaviconMark className="folio-intro-brand-mark" />
        <p className="folio-label">Contact / Randhu Paksi Membumi</p>
        <h1>
          Contact <em>Randhu</em>
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
              Professional <em>profiles</em>
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
              Availability & <em>stack</em>
            </>
          }
        />
        <div className="editorial-faq">
          {contactFaq.map((faq, index) => (
            <div key={faq.question} className="faq-item" data-open={openFaq === index}>
              <h3 className="faq-heading">
                <button
                  id={`availability-faq-trigger-${index + 1}`}
                  className="faq-trigger"
                  type="button"
                  aria-expanded={openFaq === index}
                  aria-controls={`availability-faq-answer-${index + 1}`}
                  onClick={() => setOpenFaq(current => (current === index ? null : index))}
                >
                  <span className="folio-label">0{index + 1}</span>
                  <span className="faq-question">{faq.question}</span>
                  <span className="faq-sign" aria-hidden="true">
                    <ChevronDown />
                  </span>
                </button>
              </h3>
              <div
                id={`availability-faq-answer-${index + 1}`}
                className="faq-answer"
                role="region"
                aria-labelledby={`availability-faq-trigger-${index + 1}`}
                aria-hidden={openFaq !== index}
                inert={openFaq !== index}
              >
                <div className="faq-answer-inner">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
