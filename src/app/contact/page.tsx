import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact/ContactForm'
import { PortfolioFooter } from '@/components/layout/PortfolioFooter'
import { SiteNavigation } from '@/components/layout/SiteNavigation'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch to discuss business systems, process design, data modelling and practical digital solutions.',
}

type ContactIconName = 'email' | 'github' | 'linkedin' | 'location'

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

function ContactIcon({ name }: { name: ContactIconName }) {
  if (name === 'linkedin') {
    return (
      <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  }

  if (name === 'github') {
    return (
      <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    )
  }

  const common = {
    'aria-hidden': true,
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.75,
    viewBox: '0 0 24 24',
  }

  if (name === 'email') {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m4.5 6.5 7.5 6 7.5-6" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M12 21s-6.5-5.4-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.4" r="2.3" />
    </svg>
  )
}

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
            <h1>Let&apos;s build something meaningful together.</h1>
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
