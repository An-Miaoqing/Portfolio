export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">BUSINESS SYSTEMS ANALYST</p>
          <h1>
            I analyse how businesses work and design digital systems that{' '}
            <span className="gradient-text">connect processes, data and technology.</span>
          </h1>
          <p className="hero__summary">
            I translate business needs into structured processes, data models, workflows and practical digital solutions.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#work">View selected work <span aria-hidden="true">↓</span></a>
            <a className="button button--secondary" href="#about">About me</a>
          </div>
        </div>

        <div className="system-model" aria-label="A visual model connecting business, processes, data and technology">
          <span className="system-model__label">OPERATING MODEL / 01</span>
          <div className="system-model__node system-model__node--business">Business</div>
          <div className="system-model__node system-model__node--process">Processes</div>
          <div className="system-model__node system-model__node--data">Data</div>
          <div className="system-model__node system-model__node--technology">Technology</div>
          <div className="system-model__core">SYSTEM</div>
          <span className="system-model__line system-model__line--vertical" aria-hidden="true" />
          <span className="system-model__line system-model__line--horizontal" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
