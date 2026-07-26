import Link from 'next/link'
import { AMQLogoMark } from './SiteNavigation'

const contactItems = ['Email', 'LinkedIn', 'GitHub'] as const

const activities = 'Business analysis · Process design · Data modelling · Digital platforms'

const pageLinks = [
  { label: 'Home', href: { pathname: '/' } },
  { label: 'Work', href: { pathname: '/work' } },
  { label: 'About', href: { pathname: '/about' } },
  { label: 'Contact', href: { pathname: '/contact' } },
] as const

const caseStudyLinks = [
  { label: 'CareOS Case Study', href: { pathname: '/case-study' } },
  { label: 'Gut Begleitet Case Study', href: { pathname: '/case-study/gutbegleitet' } },
  { label: 'Engineering', href: { pathname: '/engineering' } },
] as const

type PortfolioFooterProps = {
  variant?: 'default' | 'starry'
}

export function PortfolioFooter({ variant = 'default' }: PortfolioFooterProps) {
  if (variant === 'starry') {
    return (
      <footer className="starry-footer" id="contact">
        <div className="starry-footer__stars" aria-hidden="true" />
        <div className="starry-footer__content">
          <div className="starry-footer__grid">
            <div className="starry-footer__brand">
              <Link className="unified-nav__identity" href="/" aria-label="AMQ Systems homepage">
                <AMQLogoMark />
                <span>AMQ / SYSTEMS</span>
              </Link>
              <p className="starry-footer__slogan">Systems designed to make complex work clearer.</p>
              <p className="starry-footer__activities">{activities}</p>
            </div>

            <nav aria-label="Quick access" className="starry-footer__nav">
              <p className="starry-footer__eyebrow">Quick Access</p>
              <div className="starry-footer__nav-columns">
                <ul>
                  {pageLinks.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
                <ul>
                  {caseStudyLinks.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <div className="starry-footer__contact">
              <p className="starry-footer__eyebrow">Contact</p>
              <ul>
                {contactItems.map((item) => (
                  <li key={item}>
                    <span className="starry-footer__placeholder" title={`${item} link to be added`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="starry-footer__meta">
          <span>© 2026 AMQ / SYSTEMS</span>
          <span>Business Systems Analyst</span>
        </div>
      </footer>
    )
  }

  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-lead">
          <p className="eyebrow">CONTACT</p>
          <p className="footer-heading">Let&apos;s discuss systems, operations and practical digital solutions.</p>
        </div>

        <div className="footer-meta">
          <p>© 2026</p>
          <ul className="contact-list" aria-label="Contact links">
            {contactItems.map((item) => (
              <li key={item}>
                <span className="placeholder-link" title={`${item} link to be added`}>
                  {item}<span aria-hidden="true"> ↗</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
