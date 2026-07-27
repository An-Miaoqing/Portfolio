export function WorkHero() {
  return (
    <header className="work-index__hero">
      <div className="container">
        <h1>
          <span>From business challenges</span>
          <span className="gradient-text">to working systems.</span>
        </h1>
        <p>Every project begins with understanding how an organisation works.</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#careos">
            Explore Projects <span aria-hidden="true">↓</span>
          </a>
          <a className="button button--secondary" href="/case-study">
            View Case Studies
          </a>
        </div>
      </div>
    </header>
  )
}
