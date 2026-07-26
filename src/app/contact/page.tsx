import type { Metadata } from 'next'
import { PortfolioFooter } from '@/components/layout/PortfolioFooter'
import { SiteNavigation } from '@/components/layout/SiteNavigation'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch to discuss business systems, process design, data modelling and practical digital solutions.',
}

const contactMethods = [
  {
    label: 'Email',
    value: 'Email address to be added',
    note: 'For project, role, and collaboration enquiries.',
  },
  {
    label: 'LinkedIn',
    value: 'LinkedIn profile to be added',
    note: 'For professional connections and conversations.',
  },
  {
    label: 'GitHub',
    value: 'GitHub profile to be added',
    note: 'For repositories and technical work.',
  },
] as const

const conversationAreas = [
  'Business Systems Analysis',
  'Process and workflow design',
  'Data modelling and reporting',
  'Digital platform design',
] as const

export default function ContactPage() {
  return (
    <div className="portfolio-site contact-page">
      <a className="portfolio-site__skip" href="#contact-main">Skip to content</a>
      <SiteNavigation />

      <main id="contact-main">
        <header className="contact-page__hero">
          <div className="contact-page__container">
            <p className="contact-page__eyebrow">Contact</p>
            <h1>Systems designed to make complex work clearer.</h1>
            <p className="contact-page__statement">
              Business understanding. Structured thinking. Practical digital solutions.
            </p>
            <p>
              I&apos;m interested in meaningful problems where operations, data and technology come together.
            </p>
          </div>
        </header>

        <section className="contact-page__content" aria-labelledby="contact-methods-title">
          <div className="contact-page__container">
            <div className="contact-page__section-heading">
              <p>Get in touch</p>
              <h2 id="contact-methods-title">Choose the channel that works for you.</h2>
            </div>

            <div className="contact-page__methods">
              {contactMethods.map((method, index) => (
                <article key={method.label} className="contact-page__method">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{method.label}</h3>
                  <p className="contact-page__placeholder">{method.value}</p>
                  <p>{method.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-page__conversation" aria-labelledby="conversation-title">
          <div className="contact-page__container contact-page__conversation-grid">
            <div>
              <p className="contact-page__eyebrow">Good starting points</p>
              <h2 id="conversation-title">What we could discuss</h2>
            </div>
            <ul>
              {conversationAreas.map((area, index) => (
                <li key={area}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>
      <PortfolioFooter variant="starry" />
    </div>
  )
}
