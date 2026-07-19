const contactItems = ['Email', 'LinkedIn', 'GitHub']

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-lead">
          <p className="eyebrow">CONTACT</p>
          <p className="footer-heading">Let’s discuss systems, operations and practical digital solutions.</p>
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

