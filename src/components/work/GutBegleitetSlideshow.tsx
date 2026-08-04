'use client'

import Image from 'next/image'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'

type SlideVisualType =
  | 'connected'
  | 'daily-customer'
  | 'daily-employee'
  | 'daily-office'
  | 'impact'
  | 'intro'
  | 'work'

type Slide = {
  id: string
  label: string
  eyebrow: string
  title: string
  message: string
  points: readonly string[]
  visual: SlideVisualType
}

const slides: readonly Slide[] = [
  {
    id: 'intro',
    label: 'Intro',
    eyebrow: 'GUT BEGLEITET · CLIENT WORK',
    title: 'From everyday service to connected operations',
    message: 'Business Systems Analysis · Digital Transformation · Implementation',
    points: [],
    visual: 'intro',
  },
  {
    id: 'work',
    label: 'Work',
    eyebrow: 'THE OPERATION',
    title: 'Understanding how the organisation actually works',
    message: 'System design began with the real service journey.',
    points: ['Customer / Family', 'Office / Manager', 'Employee'],
    visual: 'work',
  },
  {
    id: 'daily-customer',
    label: 'Customer',
    eyebrow: '01 / CUSTOMER / FAMILY',
    title: 'Request help',
    message: 'The Gut Begleitet website is used before the physical service begins.',
    points: ['Gut Begleitet Website', 'Discover services', 'Choose a time', 'Submit a request'],
    visual: 'daily-customer',
  },
  {
    id: 'daily-office',
    label: 'Office',
    eyebrow: '02 / OFFICE / MANAGER',
    title: 'Coordinate the service',
    message: 'The office connects customer demand with field delivery.',
    points: ['CareOS Operations', 'Review bookings', 'Schedule visits · Assign employees', 'Follow service delivery'],
    visual: 'daily-office',
  },
  {
    id: 'daily-employee',
    label: 'Employee',
    eyebrow: '03 / EMPLOYEE',
    title: 'Deliver the service',
    message: 'The service happens between people; the application supports it.',
    points: ['CareOS Employee', 'See assigned visits', 'Open visit details', 'Record completed work'],
    visual: 'daily-employee',
  },
  {
    id: 'connected',
    label: 'Connected',
    eyebrow: 'CONNECTED SYSTEM',
    title: 'Interfaces on the surface\nConnected records underneath',
    message: 'Bookings · Services · Assignments · Visits · Employees',
    points: [],
    visual: 'connected',
  },
  {
    id: 'impact',
    label: 'Impact',
    eyebrow: 'GUT BEGLEITET × CAREOS',
    title: 'The service happens between people',
    message: 'CareOS keeps the operation connected around it.',
    points: [],
    visual: 'impact',
  },
]

function HumanTeaserSlide({ slide, variant }: { slide: Slide; variant: 'intro' | 'impact' }) {
  const isImpact = variant === 'impact'

  return (
    <div className={`gut-teaser-human gut-teaser-human--${variant}`}>
      <Image
        alt={isImpact
          ? 'A Gut Begleitet employee helping an older customer with everyday shopping'
          : 'A Gut Begleitet employee and older customer caring for plants together'}
        fill
        priority={!isImpact}
        sizes="(max-width: 900px) 100vw, 1200px"
        src={isImpact
          ? '/case-studies/gutbegleitet/service-shopping.jpeg'
          : '/case-studies/gutbegleitet/service-hero.jpeg'}
      />
      <div className="gut-teaser-human__shade" aria-hidden="true" />
      <div className="gut-teaser-human__copy">
        <p>{slide.eyebrow}</p>
        <h3 id={`gutbegleitet-slide-title-${slide.id}`}>
          {isImpact ? (
            <>The service happens<br />between people</>
          ) : (
            <>From everyday service<br />to connected operations</>
          )}
        </h3>
        <span>{slide.message}</span>
        {isImpact ? (
          <a className="button button--primary gut-teaser-human__cta" href="/case-study/gutbegleitet">
            Explore case study <i aria-hidden="true">→</i>
          </a>
        ) : null}
      </div>
    </div>
  )
}

function WorkVisual() {
  const stages = ['Request', 'Coordinate', 'Assign', 'Deliver', 'Record']

  return (
    <div className="gut-teaser-work" aria-label="Gut Begleitet service work from request to record">
      <figure className="gut-teaser-work__photo gut-teaser-work__photo--main">
        <Image
          alt="A Gut Begleitet employee receiving a delivery with an older customer"
          fill
          sizes="(max-width: 900px) 70vw, 34vw"
          src="/case-studies/gutbegleitet/service-delivery.jpeg"
        />
      </figure>
      <figure className="gut-teaser-work__photo gut-teaser-work__photo--visit">
        <Image
          alt="A Gut Begleitet employee accompanying an older customer to an appointment"
          fill
          sizes="(max-width: 900px) 40vw, 20vw"
          src="/case-studies/gutbegleitet/service-visit.jpeg"
        />
      </figure>
      <figure className="gut-teaser-work__photo gut-teaser-work__photo--team">
        <Image
          alt="The Gut Begleitet team"
          fill
          sizes="(max-width: 900px) 40vw, 20vw"
          src="/case-studies/gutbegleitet/team.jpg"
        />
      </figure>
      <ol className="gut-teaser-work__sequence">
        {stages.map((stage, index) => (
          <li key={stage}>
            <strong>{stage}</strong>
            {index < stages.length - 1 ? <i aria-hidden="true">→</i> : null}
          </li>
        ))}
      </ol>
    </div>
  )
}

function ConnectedVisual() {
  const records = ['Household', 'Client', 'Booking', 'Visit', 'Assignment', 'Employee']

  return (
    <div className="gut-teaser-connected" aria-label="CareOS interface connected to a simplified operational data model">
      <div className="gut-teaser-connected__app">
        <header><i /><i /><i /><strong>CareOS Operations</strong></header>
        <div className="gut-teaser-connected__app-body">
          <nav><strong>CAREOS</strong><span className="is-active">Bookings</span><span>Visits</span><span>Employees</span></nav>
          <section>
            <p className="gut-teaser-connected__kicker">SERVICE COORDINATION</p>
            <h4>Today&apos;s operation</h4>
            <div className="gut-teaser-connected__stats">
              <span><small>Requests</small><strong>03</strong></span>
              <span><small>Visits</small><strong>08</strong></span>
            </div>
            <div className="gut-teaser-connected__booking">
              <span><small>CLIENT</small><strong>G. Berger</strong></span>
              <span><small>VISIT</small><strong>5 Aug · 10:30</strong></span>
              <em>Assigned</em>
            </div>
          </section>
        </div>
      </div>

      <div className="gut-teaser-connected__model">
        <p>CONNECTED RECORDS</p>
        <ol>
          {records.map((record, index) => (
            <li key={record}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{record}</strong>
              {index < records.length - 1 ? <i aria-hidden="true">↓</i> : null}
              {record === 'Booking' ? (
                <small><b>Service</b><b>Booking Item</b></small>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

function DailyCustomerVisual() {
  return (
    <div className="gut-daily-visual gut-daily-visual--customer">
      <div className="gut-daily-browser" aria-label="Gut Begleitet website used to discover services and request a time">
        <div className="gut-daily-browser__bar" aria-hidden="true">
          <span><i /><i /><i /></span>
          <strong>gutbegleitet.org</strong>
          <em>Termin buchen</em>
        </div>
        <Image
          alt="Gut Begleitet public website showing everyday assistance services"
          height={900}
          src="/case-studies/gutbegleitet/alltagshilfe-desktop.png"
          width={1440}
        />
      </div>
      <figure className="gut-daily-photo gut-daily-photo--customer">
        <Image
          alt="A Gut Begleitet employee walking with an older customer"
          height={900}
          src="/case-studies/gutbegleitet/service-walk.jpeg"
          width={1200}
        />
        <figcaption>Help begins with a person asking.</figcaption>
      </figure>
      <div className="gut-daily-step" aria-hidden="true">
        <span>DISCOVER</span><i>→</i><span>CHOOSE</span><i>→</i><strong>REQUEST</strong>
      </div>
    </div>
  )
}

function DailyOfficeVisual() {
  return (
    <div className="gut-daily-visual gut-daily-visual--office">
      <figure className="gut-daily-photo gut-daily-photo--office">
        <Image alt="The Gut Begleitet team" height={900} src="/case-studies/gutbegleitet/team.jpg" width={1200} />
        <figcaption>Coordination connects demand with delivery.</figcaption>
      </figure>
      <div className="gut-daily-operations" aria-label="Simplified CareOS Operations interface">
        <header>
          <span aria-hidden="true"><i /><i /><i /></span>
          <strong>CareOS Operations</strong>
          <em>Office workspace</em>
        </header>
        <div className="gut-daily-operations__body">
          <nav aria-label="Operations modules">
            <strong>CAREOS</strong>
            <span className="is-active">Bookings <i>3</i></span>
            <span>Visits</span>
            <span>Calendar</span>
            <span>Employees</span>
          </nav>
          <section>
            <div className="gut-daily-operations__heading">
              <p><span>Today</span><strong>Service coordination</strong></p>
              <em>Schedule view</em>
            </div>
            <div className="gut-daily-operations__summary">
              <p><span>Requests</span><strong>03</strong></p>
              <p><span>Visits today</span><strong>08</strong></p>
              <p><span>Need assignment</span><strong>02</strong></p>
            </div>
            <div className="gut-daily-operations__queue">
              <p><strong>G. Berger</strong><span>5 Aug · 10:30</span><span>Sophie G.</span><em>Assigned</em></p>
              <p><strong>M. Huber</strong><span>5 Aug · 11:30</span><span>—</span><em className="is-review">Review</em></p>
              <p><strong>E. Wagner</strong><span>5 Aug · 14:00</span><span>Anna K.</span><em>Confirmed</em></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function DailyEmployeeVisual() {
  return (
    <div className="gut-daily-visual gut-daily-visual--employee">
      <figure className="gut-daily-photo gut-daily-photo--employee">
        <Image
          alt="A Gut Begleitet employee spending time with older customers"
          height={900}
          src="/case-studies/gutbegleitet/service-companionship.jpeg"
          width={1400}
        />
        <figcaption>The work happens between people.</figcaption>
      </figure>
      <div className="gut-daily-phone" aria-label="Simplified CareOS Employee visit interface">
        <header><strong>CareOS</strong><span>10:30</span></header>
        <p className="gut-daily-phone__label">YOUR ASSIGNED VISIT</p>
        <div className="gut-daily-phone__visit">
          <p><strong>10:30</strong><em>Assigned</em></p>
          <h4>Shopping &amp; errands</h4>
          <span>G. Berger · Vienna</span>
          <dl>
            <div><dt>Duration</dt><dd>2 hours</dd></div>
            <div><dt>Visit</dt><dd>5 Aug</dd></div>
          </dl>
          <button type="button" tabIndex={-1}>Open visit details</button>
          <button className="gut-daily-phone__checkin" type="button" tabIndex={-1}>Check in</button>
        </div>
      </div>
    </div>
  )
}

function SlideVisual({ type }: { type: SlideVisualType }) {
  const visuals: Record<SlideVisualType, ReactElement> = {
    connected: <ConnectedVisual />,
    'daily-customer': <DailyCustomerVisual />,
    'daily-office': <DailyOfficeVisual />,
    'daily-employee': <DailyEmployeeVisual />,
    impact: <></>,
    intro: <></>,
    work: <WorkVisual />,
  }

  return <div className="careos-intro-slide__visual">{visuals[type]}</div>
}

export function GutBegleitetSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isManuallyPaused, setIsManuallyPaused] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [isInteracting, setIsInteracting] = useState(false)
  const activeSlide = slides[activeIndex]
  const isAutoplayPaused = isManuallyPaused || isInteracting

  useEffect(() => {
    if (isAutoplayPaused) return undefined

    const autoplayTimer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 5000)

    return () => window.clearInterval(autoplayTimer)
  }, [activeIndex, isAutoplayPaused])

  const showPrevious = () => setActiveIndex((current) => (current - 1 + slides.length) % slides.length)
  const showNext = () => setActiveIndex((current) => (current + 1) % slides.length)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showPrevious()
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      showNext()
    }
  }

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsInteracting(false)
    }
  }

  return (
    <div
      className="careos-intro-deck careos-intro-deck--uniform"
      onBlur={handleBlur}
      onFocus={() => setIsInteracting(true)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      tabIndex={0}
      aria-label="Gut Begleitet client project teaser slideshow. Slides advance every five seconds. Use left and right arrow keys to change slides."
    >
      <div className="careos-intro-deck__topbar">
        <span>
          GUT BEGLEITET<span className="careos-intro-deck__topbar-subtitle"> / CASE STUDY HIGHLIGHTS</span>
        </span>
        <div className="careos-intro-deck__status">
          <span>
            {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={() => setIsManuallyPaused((current) => !current)}
            aria-label={isManuallyPaused ? 'Resume automatic slide playback' : 'Pause automatic slide playback'}
          >
            <i aria-hidden="true" className={isManuallyPaused ? 'careos-icon-play' : undefined}>
              {isManuallyPaused ? '▶' : 'Ⅱ'}
            </i>
            {isManuallyPaused ? 'PLAY' : 'PAUSE'}
          </button>
        </div>
      </div>

      <article
        className={`careos-intro-slide careos-intro-slide--gut-${activeSlide.visual}`}
        id="gutbegleitet-intro-slide-panel"
        role="tabpanel"
        aria-live={isAutoplayPaused ? 'polite' : 'off'}
        aria-labelledby={`gutbegleitet-slide-title-${activeSlide.id}`}
      >
        {activeSlide.visual === 'intro' || activeSlide.visual === 'impact' ? (
          <HumanTeaserSlide slide={activeSlide} variant={activeSlide.visual} />
        ) : (
          <>
            <div className="careos-intro-slide__copy">
              <p className="careos-intro-slide__eyebrow">{activeSlide.eyebrow}</p>
              <h3 id={`gutbegleitet-slide-title-${activeSlide.id}`}>{activeSlide.title}</h3>
              <p className="careos-intro-slide__message">{activeSlide.message}</p>
              {activeSlide.points.length ? (
                <ul>
                  {activeSlide.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </div>
            <SlideVisual type={activeSlide.visual} />
          </>
        )}
      </article>

      <div className="careos-intro-deck__controls">
        <div className="careos-intro-deck__arrows">
          <button type="button" onClick={showPrevious} aria-label="Show previous slide">
            ←
          </button>
          <button type="button" onClick={showNext} aria-label="Show next slide">
            →
          </button>
        </div>
        <div
          className="careos-intro-deck__tabs careos-intro-deck__tabs--gutbegleitet"
          role="tablist"
          aria-label="Choose highlight slide"
        >
          {slides.map((slide, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls="gutbegleitet-intro-slide-panel"
              className={index === activeIndex ? 'is-active' : ''}
              key={slide.id}
              onClick={() => setActiveIndex(index)}
            >
              {slide.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
