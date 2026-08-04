import Link from 'next/link'

const navigation = [
  { label: 'Home', href: { pathname: '/' } },
  { label: 'Work', href: { pathname: '/work' } },
  { label: 'Case Studies', href: { pathname: '/case-study/gutbegleitet' } },
  { label: 'Products', href: { pathname: '/products' } },
  { label: 'Engineering', href: { pathname: '/engineering' } },
  { label: 'About', href: { pathname: '/about' } },
] as const

type AMQLogoMarkProps = {
  variant?: 'dark' | 'light'
}

export function AMQLogoMark({ variant = 'dark' }: AMQLogoMarkProps) {
  const src = variant === 'light' ? '/AMQlogocrop-white.png' : '/AMQlogocrop.png'
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt="" className="unified-nav__mark" height={52} src={src} width={52} />
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
