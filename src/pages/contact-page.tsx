import { useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

import { FaviconMark } from '@/components/common/favicon-mark'
import { contactFaqGroups } from '@/data/about'
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
  const faqCount = contactFaqGroups.reduce((total, group) => total + group.items.length, 0)
  let faqIndex = 0
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
      <section className="folio-section contact-faq-section">
        <div className="contact-faq-topline">
          <SectionHeading
            index="02"
            label="Work & technologies"
            title={
              <>
                Availability & <em>stack</em>
              </>
            }
          >
            Ten useful answers about the work I take on, how I build, and where to explore my work.
          </SectionHeading>
          <div
            className="contact-faq-count"
            aria-label={`${faqCount} answers across ${contactFaqGroups.length} topics`}
          >
            <strong>{String(faqCount).padStart(2, '0')}</strong>
            <span className="folio-label">
              answers
              <br />
              {String(contactFaqGroups.length).padStart(2, '0')} topics
            </span>
          </div>
        </div>
        <div className="contact-faq-groups">
          {contactFaqGroups.map((group, groupIndex) => (
            <section
              key={group.title}
              className="contact-faq-group"
              aria-labelledby={`contact-faq-group-${groupIndex + 1}`}
            >
              <header className="contact-faq-group-heading">
                <p className="folio-label">
                  {String(groupIndex + 1).padStart(2, '0')} / {group.eyebrow}
                </p>
                <h3 id={`contact-faq-group-${groupIndex + 1}`}>{group.title}</h3>
                <p>{group.description}</p>
              </header>
              <div className="editorial-faq">
                {group.items.map(faq => {
                  const index = faqIndex++
                  const itemNumber = String(index + 1).padStart(2, '0')
                  const isOpen = openFaq === index

                  return (
                    <div key={faq.question} className="faq-item" data-open={isOpen}>
                      <h4 className="faq-heading">
                        <button
                          id={`contact-faq-trigger-${itemNumber}`}
                          className="faq-trigger"
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={`contact-faq-answer-${itemNumber}`}
                          onClick={() => setOpenFaq(current => (current === index ? null : index))}
                        >
                          <span className="folio-label">{itemNumber}</span>
                          <span className="faq-question">{faq.question}</span>
                          <span className="faq-sign" aria-hidden="true">
                            <ChevronDown />
                          </span>
                        </button>
                      </h4>
                      <div
                        id={`contact-faq-answer-${itemNumber}`}
                        className="faq-answer"
                        role="region"
                        aria-labelledby={`contact-faq-trigger-${itemNumber}`}
                        aria-hidden={!isOpen}
                        inert={!isOpen}
                      >
                        <div className="faq-answer-inner">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  )
}
