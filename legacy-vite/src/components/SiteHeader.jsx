import AMQLogoMark from './AMQLogoMark.jsx'

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Resume', disabled: true },
  { label: 'Contact', href: '#contact' },
]

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <a className="identity" href="#top" aria-label="Back to top">
          <AMQLogoMark />
          <span className="identity__text">AMQ / SYSTEMS</span>
        </a>

        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.label}>
                {item.disabled ? (
                  <span className="nav-link is-disabled" aria-disabled="true" title="Resume coming soon">
                    {item.label}
                  </span>
                ) : (
                  <a className="nav-link" href={item.href}>{item.label}</a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
