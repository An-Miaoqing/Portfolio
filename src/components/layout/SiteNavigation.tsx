import Link from 'next/link'

const navigation = [
  { label: 'Home', href: { pathname: '/' } },
  { label: 'Work', href: { pathname: '/work' } },
  { label: 'Case Study', href: { pathname: '/case-study' } },
  { label: 'Engineering', href: { pathname: '/engineering' } },
  { label: 'About', href: { pathname: '/about' } },
  { label: 'Contact', href: { pathname: '/contact' } },
] as const

function AMQLogoMark() {
  return (
    <span className="unified-nav__mark" aria-hidden="true">
      <svg viewBox="0 0 60 32" focusable="false">
        <path d="M3.5 25 10.5 7 17.5 25M6.8 17.5h7.4" />
        <path d="M21.5 25V7l7 10 7-10v18" />
        <circle cx="47" cy="16" r="9" />
        <path d="m51.5 21.5 5 5" />
      </svg>
    </span>
  )
}

export function SiteNavigation() {
  return (
    <header className="unified-nav">
      <div className="unified-nav__inner">
        <Link className="unified-nav__identity" href="/" aria-label="AMQ Systems homepage">
          <AMQLogoMark />
          <span>AMQ / SYSTEMS</span>
        </Link>
        <nav className="unified-nav__links-wrap" aria-label="Primary navigation">
          <ul className="unified-nav__links">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
