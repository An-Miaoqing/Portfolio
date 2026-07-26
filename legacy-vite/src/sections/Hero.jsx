import { Headline } from '@/components/shared/Headline'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__content">
          <Headline as="h1" eyebrow="Business Systems Analyst" size="display">
            <span className="hero__heading-line hero__dark-text">Understanding businesses.</span>
            <span className="hero__heading-line gradient-text">Designing systems.</span>
            <span className="hero__heading-line gradient-text">Delivering practical solutions.</span>
          </Headline>
          <p className="mt-8 max-w-[var(--container-copy)] text-body-lg text-pretty text-muted sm:mt-10">
            Business Systems Analysis · Process Design · Data Modelling · Digital Solutions
          </p>
          <div className="hero__actions mt-10 sm:mt-12">
            <a className="button button--primary" href="#work">View selected work <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="system-model" aria-label="A visual model connecting business, processes, data and technology">
          <div className="system-model__node system-model__node--business">
            <svg className="system-model__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 8.5h16a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 18v-8A1.5 1.5 0 0 1 4 8.5Z" />
              <path d="M9 8.5V6.8A1.8 1.8 0 0 1 10.8 5h2.4A1.8 1.8 0 0 1 15 6.8v1.7" />
              <path d="M2.5 13.5h19" />
            </svg>
            <span>Business</span>
          </div>
          <div className="system-model__node system-model__node--process">
            <svg className="system-model__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 12a8 8 0 0 1 13.66-5.66M20 12a8 8 0 0 1-13.66 5.66" />
              <path d="M17.5 3.5v3.5H14" />
              <path d="M6.5 20.5V17H10" />
            </svg>
            <span>Processes</span>
          </div>
          <div className="system-model__node system-model__node--data">
            <svg className="system-model__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <ellipse cx="12" cy="6" rx="7.5" ry="3" />
              <path d="M4.5 6v5.5c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" />
              <path d="M4.5 11.5V17c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-5.5" />
            </svg>
            <span>Data</span>
          </div>
          <div className="system-model__node system-model__node--technology">
            <svg className="system-model__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="7" y="7" width="10" height="10" rx="1.6" />
              <rect x="10" y="10" width="4" height="4" rx="0.6" />
              <path d="M9.5 3.5v3M12 3.5v3M14.5 3.5v3M9.5 17.5v3M12 17.5v3M14.5 17.5v3M3.5 9.5h3M3.5 12h3M3.5 14.5h3M17.5 9.5h3M17.5 12h3M17.5 14.5h3" />
            </svg>
            <span>Technology</span>
          </div>
          <div className="system-model__core">SYSTEM</div>
          <span className="system-model__line system-model__line--vertical" aria-hidden="true" />
          <span className="system-model__line system-model__line--horizontal" aria-hidden="true" />
          <span className="system-model__connection system-model__connection--business" aria-hidden="true" />
          <span className="system-model__connection system-model__connection--process" aria-hidden="true" />
          <span className="system-model__connection system-model__connection--data" aria-hidden="true" />
          <span className="system-model__connection system-model__connection--technology" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
