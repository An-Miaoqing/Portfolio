import { Link } from 'react-router-dom'

const sectionLinks = [
  ['Overview', '#overview'],
  ['Analysis', '#business-analysis'],
  ['Architecture', '#architecture'],
  ['Applications', '#applications'],
  ['Database', '#database'],
]

export default function CareOSHeader() {
  return (
    <header className="careos-header">
      <div className="container careos-header__main">
        <Link className="identity" to="/" aria-label="Return to portfolio homepage">
          <span className="identity__mark" aria-hidden="true">A</span>
          <span className="identity__text">AMQ / SYSTEMS</span>
        </Link>
        <Link className="careos-back-link" to="/">← Portfolio</Link>
      </div>
      <nav className="careos-section-nav" aria-label="CareOS case study sections">
        <div className="container">
          <ul>
            {sectionLinks.map(([label, href]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
