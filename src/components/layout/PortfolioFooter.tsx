const contactItems = ['Email', 'LinkedIn', 'GitHub'] as const

type PortfolioFooterProps = {
  variant?: 'default' | 'starry'
}

export function PortfolioFooter({ variant = 'default' }: PortfolioFooterProps) {
  if (variant === 'starry') {
    return (
      <footer className="starry-footer" id="contact">
        <div className="starry-footer__stars" aria-hidden="true" />
        <div className="starry-footer__content">
          <h2>Systems designed to make complex work clearer.</h2>
          <p className="starry-footer__statement">Business understanding. Structured thinking. Practical digital solutions.</p>
          <p className="starry-footer__copy">
            I&apos;m interested in meaningful problems where operations, data and technology come together.
          </p>
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
