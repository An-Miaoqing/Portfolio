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
