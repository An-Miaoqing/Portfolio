import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact/ContactForm'
import { PortfolioFooter } from '@/components/layout/PortfolioFooter'
import { SiteNavigation } from '@/components/layout/SiteNavigation'
import { ContactIcon, type ContactIconName } from '@/components/shared/ContactIcon'

export const metadata: Metadata = {
  title: 'About',
  description:
    'How I approach organisations, business systems, complexity and thoughtful digital design — and how to get in touch.',
}

const experience = [
  'Project development',
  'Stakeholder coordination',
  'Research and information analysis',
  'Data and digital systems',
] as const

const workingPrinciples = [
  {
    title: 'Understand before building',
    description:
      'I begin by understanding the people, processes, and goals before considering technology.',
  },
  {
    title: 'Think in systems',
    description:
      'I look beyond individual features to understand how different parts connect and influence one another.',
  },
  {
    title: 'Design with purpose',
    description:
      'Every process, workflow, and interface should exist for a clear reason.',
  },
  {
    title: 'Build for change',
    description:
      'Good systems should be able to evolve without unnecessary complexity.',
  },
] as const

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

export default function AboutPage() {
  return (
    <div className="portfolio-site about-page">
      <a className="portfolio-site__skip" href="#about-main">Skip to content</a>
      <SiteNavigation />

      <main id="about-main">
        <header className="about-page__header">
          <div className="about-page__reading-column">
            <h1>I See Organisations as Systems</h1>

            <div className="about-page__profile">
              <p className="about-page__profile-name">Anyang Guo</p>
              <p className="about-page__profile-altname">(An Miaoqing)</p>
              <p className="about-page__profile-role">Business Systems Analyst</p>
              <p className="about-page__profile-location">Vienna, Austria</p>
            </div>
          </div>
        </header>

        <article className="about-page__story">
          <div className="about-page__reading-column">
            <p>
              Every organisation is a system of people, information, processes, and decisions. My work is to understand those relationships, model them clearly, and transform them into practical digital solutions.
            </p>
            <p>
              As a Business Systems Analyst, I work across business analysis, process design, data modelling, workflow architecture, and implementation. Whether designing a business operating system, analysing data, or developing a digital platform, my goal is always the same: to reduce complexity through thoughtful system design.
            </p>
            <p>
              I believe every effective digital solution begins with understanding the system it is meant to support. My goal is not simply to build software, but to design systems that help people and organisations work with greater clarity, structure, and purpose.
            </p>
          </div>
        </article>

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

        <section className="about-page__principles" aria-labelledby="how-i-work-title">
          <div className="about-page__wide-column">
            <div className="about-page__section-heading">
              <p>Approach</p>
              <h2 id="how-i-work-title">How I work</h2>
            </div>
            <div className="about-page__approach-grid">
              <div className="about-page__approach-column">
                <ul className="experience-list" aria-label="Background and experience">
                  {experience.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="approach__focus about-page__approach-focus">
                  My current focus is translating business operations into structured processes, data models, workflows and practical digital solutions.
                </p>
              </div>
              <div className="about-page__principle-grid">
                {workingPrinciples.map((principle) => (
                  <article key={principle.title} className="about-page__principle">
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="contact-page__conversation" aria-labelledby="conversation-title">
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
        </footer>
      </main>
      <PortfolioFooter variant="starry" />
    </div>
  )
}
