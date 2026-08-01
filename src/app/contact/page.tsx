import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact/ContactForm'
import { PortfolioFooter } from '@/components/layout/PortfolioFooter'
import { SiteNavigation } from '@/components/layout/SiteNavigation'
import { ContactIcon, type ContactIconName } from '@/components/shared/ContactIcon'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch to discuss business systems, process design, data modelling and practical digital solutions.',
}

const contactInfo = [
  {
    icon: 'email' as ContactIconName,
    label: 'Email',
    value: 'an.miaoqing@gmail.com',
    href: 'mailto:an.miaoqing@gmail.com',
  },
  {
    icon: 'linkedin' as ContactIconName,
    label: 'LinkedIn',
    value: 'linkedin.com/in/an-miaoqing',
    href: 'https://www.linkedin.com/in/an-miaoqing',
    external: true,
  },
  {
    icon: 'github' as ContactIconName,
    label: 'GitHub',
    value: 'github.com/An-Miaoqing',
    href: 'https://github.com/An-Miaoqing',
    external: true,
  },
  {
    icon: 'location' as ContactIconName,
    label: 'Location',
    value: 'Vienna, Austria',
  },
] as const

const availability = ['Full-time', 'Freelance', 'Collaboration'] as const

const conversationAreas = [
  'Business Systems Analysis',
  'Digital Transformation',
  'Product Design',
  'Process Optimisation',
  'Data & AI Solutions',
  'Technical Collaboration',
] as const

export default function ContactPage() {
  return (
    <div className="portfolio-site contact-page">
      <a className="portfolio-site__skip" href="#contact-main">Skip to content</a>
      <SiteNavigation />

      <main id="contact-main">
        <header className="contact-page__hero">
          <div className="contact-page__container">
            <h1>Let&apos;s build something meaningful together</h1>
            <p>
              Whether you&apos;re looking for a Business Systems Analyst, discussing a product idea, or
              exploring collaboration, I&apos;d be happy to hear from you.
            </p>
          </div>
        </header>

        <section className="contact-page__content" aria-labelledby="contact-methods-title">
          <div className="contact-page__container contact-page__form-grid">
            <div className="contact-page__form-column">
              <p className="contact-page__eyebrow" id="contact-methods-title">Let&apos;s Connect</p>
              <ContactForm />
              <p className="contact-page__response-note">
                I typically respond within one to two business days. For urgent enquiries, feel free to
                contact me directly by email.
              </p>
            </div>

            <div className="contact-page__info-column">
              <p className="contact-page__eyebrow">Get in touch directly</p>
              <ul className="contact-page__info-list">
                {contactInfo.map((item) => (
                  <li key={item.label}>
                    <span className="contact-page__info-icon">
                      <ContactIcon name={item.icon} />
                    </span>
                    {'href' in item ? (
                      <a
                        href={item.href}
                        rel={'external' in item && item.external ? 'noreferrer' : undefined}
                        target={'external' in item && item.external ? '_blank' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="contact-page__available">
                <p className="contact-page__eyebrow">Available for</p>
                <ul className="contact-page__available-list">
                  {availability.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="contact-page__available-note">
                  Every great system starts with a conversation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-page__conversation" aria-labelledby="conversation-title">
          <div className="contact-page__container contact-page__conversation-grid">
            <div>
              <p className="contact-page__eyebrow">Good starting points</p>
              <h2 id="conversation-title">Areas of Collaboration</h2>
            </div>
            <ul className="contact-page__bullet-list">
              {conversationAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </section>

      </main>
      <PortfolioFooter variant="starry" />
    </div>
  )
}
