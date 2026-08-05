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
    points: ['Connected records: Client → Booking → Visit → Assignment → Employee → Follow-up'],
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
          alt="A Gut Begleitet employee in branded uniform cleaning a window at a customer's home"
          fill
          sizes="(max-width: 900px) 70vw, 34vw"
          src="/case-studies/gutbegleitet/service-delivery-worker.png"
        />
      </figure>
      <figure className="gut-teaser-work__photo gut-teaser-work__photo--visit">
        <Image
          alt="An older customer at home on the phone, requesting a service"
          fill
          sizes="(max-width: 900px) 40vw, 20vw"
          src="/case-studies/gutbegleitet/service-request-call.png"
        />
      </figure>
      <figure className="gut-teaser-work__photo gut-teaser-work__photo--team">
        <Image
          alt="A Gut Begleitet office coordinator on the phone, assigning an employee to a booking"
          fill
          sizes="(max-width: 900px) 40vw, 20vw"
          src="/case-studies/gutbegleitet/office-coordination.png"
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
  return (
    <div className="gut-daily-visual gut-teaser-connected__visual" aria-label="CareOS interface connected to a simplified operational data model">
      <figure className="gut-daily-photo gut-daily-photo--connected">
        <Image
          alt="The Gut Begleitet public website homepage"
          height={900}
          src="/case-studies/gutbegleitet/website-homepage-ui.png"
          width={1400}
        />
      </figure>
      <figure className="gut-daily-photo gut-daily-photo--connected-card">
        <Image
          alt="The CareOS admin dashboard showing booking and employee statistics"
          height={900}
          src="/case-studies/gutbegleitet/admin-dashboard-ui.png"
          width={1200}
        />
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
          alt="The Gut Begleitet booking calendar showing an available date and time being selected"
          height={900}
          src="/case-studies/gutbegleitet/booking-calendar-ui.png"
          width={1200}
        />
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
        <Image alt="A Gut Begleitet office coordinator working at a desktop computer" height={900} src="/case-studies/gutbegleitet/office-team-desk.png" width={1200} />
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
            <span className="gut-daily-operations__logo">
              <Image alt="" aria-hidden="true" height={40} src="/home/careos-icon.png" width={40} />
              CareOS
            </span>
            <span className="is-active">Bookings <i>3</i></span>
            <span>Visits</span>
            <span>Calendar</span>
            <span>Clients</span>
            <span>Households</span>
            <span>Employees</span>
            <span>Services</span>
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
          alt="A Gut Begleitet employee shopping for groceries, checking items off a shopping list on her phone"
          height={900}
          src="/case-studies/gutbegleitet/service-shopping-list.png"
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
              className={
                index === activeIndex
                  ? 'is-active'
                  : index === activeIndex - 1
                    ? 'is-prev'
                    : index === activeIndex + 1
                      ? 'is-next'
                      : ''
              }
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
