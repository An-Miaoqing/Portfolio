import type { Metadata } from 'next'
import Link from 'next/link'
import { PortfolioFooter } from '@/components/layout/PortfolioFooter'
import { SiteNavigation } from '@/components/layout/SiteNavigation'

export const metadata: Metadata = {
  title: 'About',
  description:
    'How I approach organisations, business systems, complexity and thoughtful digital design.',
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

export default function AboutPage() {
  return (
    <div className="portfolio-site about-page">
      <a className="portfolio-site__skip" href="#about-main">Skip to content</a>
      <SiteNavigation />

      <main id="about-main">
        <header className="about-page__header">
          <div className="about-page__reading-column">
            <h1>
              <span>I See</span>
              <span>Organisations</span>
              <span>as</span>
              <span>Systems</span>
            </h1>
            <p className="about-page__header-support">
              Business Systems Analysis · Process Design · Data Modelling · Digital Solutions
            </p>
          </div>
        </header>

        <article className="about-page__story">
          <div className="about-page__reading-column">
            <p>I See Organisations as Systems.</p>
            <p>
              Every business is built on relationships between people, information, processes, and decisions. My work is to understand those relationships, model them clearly, and transform them into practical digital solutions.
            </p>
            <p>
              As a Business Systems Analyst, I work across business analysis, process design, data modelling, workflow architecture, and implementation. Whether designing a business operating system, analysing data, or developing a digital platform, my goal is always the same: to reduce complexity through thoughtful system design.
            </p>
            <p>
              I believe every effective digital solution begins with understanding the system it is meant to support. My goal is not simply to build software, but to design systems that help people and organisations work with greater clarity, structure, and purpose.
            </p>
          </div>
        </article>

        <section className="about-page__principles" aria-labelledby="how-i-work-title">
          <div className="about-page__wide-column">
            <div className="about-page__section-heading">
              <p>Approach</p>
              <h2 id="how-i-work-title">How I work</h2>
            </div>
            <ul className="experience-list" aria-label="Background and experience">
              {experience.map((item, index) => (
                <li key={item}><span>0{index + 1}</span>{item}</li>
              ))}
            </ul>
            <div className="about-page__principle-grid">
              {workingPrinciples.map((principle, index) => (
                <article key={principle.title} className="about-page__principle">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
            <p className="approach__focus about-page__approach-focus">
              My current focus is translating business operations into structured processes, data models, workflows and practical digital solutions.
            </p>
          </div>
        </section>

        <footer className="about-page__closing">
          <div className="about-page__reading-column">
            <p>
              I&apos;m always interested in opportunities to work on meaningful problems where business understanding, systems thinking, and technology come together.
            </p>
            <Link href={{ pathname: '/contact' }}>Contact <span aria-hidden="true">→</span></Link>
          </div>
        </footer>
      </main>
      <PortfolioFooter variant="starry" />
    </div>
  )
}
