'use client'

import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'

type SlideVisualType = 'backend' | 'domains' | 'entities' | 'relationships' | 'services' | 'apis' | 'principles'

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
    id: 'backend',
    label: 'Backend',
    eyebrow: 'BACKEND ARCHITECTURE',
    title: 'One backend platform serves every application.',
    message:
      'Every application relies on the same backend rather than each implementing its own business logic.',
    points: [
      'Website, Management Workspace, and Employee Workspace all connect to one backend.',
      'A single shared database keeps every application consistent.',
      'Adding a new application never means duplicating business rules.',
    ],
    visual: 'backend',
  },
  {
    id: 'domains',
    label: 'Domains',
    eyebrow: 'BUSINESS DOMAINS',
    title: 'Software organised around the business, not the database.',
    message: 'CareOS is structured around five business domains, each owning a clear responsibility.',
    points: [
      'Customer, Operations, Workforce, Finance, and Reporting.',
      'Each domain owns its own data, rules, and workflows.',
      'Business first. Database second.',
    ],
    visual: 'domains',
  },
  {
    id: 'entities',
    label: 'Entities',
    eyebrow: 'BUSINESS ENTITIES',
    title: '26 real entities give the domains their shape.',
    message: 'Rather than designing tables first, CareOS identifies the real entities that make up the organisation.',
    points: [
      'Clients, Bookings, Visits, Invoices, Payments, and more.',
      'Every entity traces back to something that exists in the business.',
      'Still business language — not database language.',
    ],
    visual: 'entities',
  },
  {
    id: 'relationships',
    label: 'Relationships',
    eyebrow: 'ENTITY RELATIONSHIPS',
    title: 'The first ERD — relationships, not SQL.',
    message: 'A database’s real value comes from how entities connect, not the tables themselves.',
    points: [
      'Company → Household → Client → Booking → Visit → Invoice → Payment.',
      'Selecting one entity highlights everything it touches.',
      'No foreign keys or SQL yet — just relationships.',
    ],
    visual: 'relationships',
  },
  {
    id: 'services',
    label: 'Services',
    eyebrow: 'BUSINESS SERVICES',
    title: 'Business logic lives in services, not applications.',
    message: 'Every important operation is coordinated through a shared business service.',
    points: [
      'Booking, Scheduling, Workforce, Visit, Billing, and Reporting services.',
      'Each service reads and updates a defined set of entities.',
      'Centralised rules keep every application consistent.',
    ],
    visual: 'services',
  },
  {
    id: 'apis',
    label: 'APIs',
    eyebrow: 'PLATFORM APIS',
    title: 'A single platform. Multiple applications.',
    message: 'Platform APIs expose business services to every application — the database stays hidden.',
    points: [
      'Applications never talk to services or entities directly.',
      'Website, Management, Employee, and a planned Client Portal share one interface.',
      'APIs expose capabilities, not databases.',
    ],
    visual: 'apis',
  },
  {
    id: 'principles',
    label: 'Principles',
    eyebrow: 'ARCHITECTURE PRINCIPLES',
    title: 'Six principles guide every layer of the platform.',
    message: 'Long-term maintainability mattered more than short-term implementation speed.',
    points: [
      'Business before technology. Single source of truth. Shared business logic.',
      'Separation of responsibilities. Design for evolution. Consistency through reuse.',
      'Architecture is an investment.',
    ],
    visual: 'principles',
  },
]

function BackendVisual() {
  const apps = ['Website', 'Management Workspace', 'Employee Workspace']
  const capabilities = ['Booking', 'Scheduling', 'Workforce', 'Billing']

  return (
    <div className="careos-slide-architecture" aria-label="Four applications served by one backend and one shared database" role="img">
      <div className="careos-slide-architecture__apps">
        {apps.map((app) => (
          <span key={app}>{app}</span>
        ))}
      </div>
      <i aria-hidden="true" />
      <strong>Enterprise Backend</strong>
      <div className="careos-slide-architecture__backend">
        <small>SHARED BUSINESS LOGIC</small>
        <div>
          {capabilities.map((capability) => (
            <span key={capability}>{capability}</span>
          ))}
        </div>
      </div>
      <div className="careos-slide-architecture__data">
        <span>Every application</span>
        <b>↓</b>
        <span>Shared Database</span>
      </div>
    </div>
  )
}

function DomainsVisual() {
  const domains: readonly [string, string][] = [
    ['Customer', 'Clients, households, companies'],
    ['Operations', 'Bookings, visits, schedules'],
    ['Workforce', 'Employees, availability'],
    ['Finance', 'Invoices, payments, payroll'],
    ['Reporting', 'Insight across every domain'],
  ]

  return (
    <div className="careos-slide-lifecycle" aria-label="Five business domains around a shared business model" role="img">
      <div className="careos-slide-lifecycle__core">Business Model</div>
      <ol>
        {domains.map(([domain, description], index) => (
          <li key={domain}>
            <span>0{index + 1}</span>
            <div>
              <strong>{domain}</strong>
              <small>{description}</small>
            </div>
            {index < domains.length - 1 ? <i aria-hidden="true">↓</i> : null}
          </li>
        ))}
      </ol>
    </div>
  )
}

function EntitiesVisual() {
  const stages = ['Domain', 'Entity', 'Purpose', 'Related Entities', 'Lifecycle']

  return (
    <div className="careos-slide-analysis-process" aria-label="From a business domain to a fully understood entity" role="img">
      {stages.map((stage, index) => (
        <div key={stage}>
          <span>0{index + 1}</span>
          <strong>{stage}</strong>
          {index < stages.length - 1 ? <i aria-hidden="true">↓</i> : null}
        </div>
      ))}
    </div>
  )
}

function RelationshipsVisual() {
  const chain = ['Company', 'Household', 'Client', 'Booking', 'Visit', 'Invoice', 'Payment']

  return (
    <div
      className="careos-slide-workflow careos-slide-workflow--lifecycle"
      aria-label="Company connects through household, client, booking, and visit to invoice and payment"
      role="img"
    >
      {chain.map((entity, index) => (
        <div key={entity}>
          <small>0{index + 1}</small>
          <strong>{entity}</strong>
          {index < chain.length - 1 ? <i aria-hidden="true">→</i> : null}
        </div>
      ))}
      <p>Relationships matter more than tables.</p>
    </div>
  )
}

function ServicesVisual() {
  const services: readonly [string, string][] = [
    ['Booking Service', 'Creates and manages bookings'],
    ['Scheduling Service', 'Matches visits to availability'],
    ['Workforce Service', 'Assigns qualified employees'],
    ['Visit Service', 'Coordinates delivery of care'],
    ['Billing Service', 'Turns work into invoices'],
    ['Reporting Service', 'Aggregates business insight'],
  ]

  return (
    <div className="careos-slide-engineering" aria-label="Six business services coordinating the platform" role="img">
      {services.map(([service, detail], index) => (
        <div key={service}>
          <span>0{index + 1}</span>
          <strong>{service}</strong>
          <small>{detail}</small>
        </div>
      ))}
    </div>
  )
}

function ApisVisual() {
  const layers = ['Applications', 'Platform APIs', 'Business Services', 'Business Entities', 'Shared Data']

  return (
    <div
      className="careos-slide-workflow careos-slide-workflow--lifecycle"
      aria-label="Applications reach shared data only through platform APIs and business services"
      role="img"
    >
      {layers.map((layer, index) => (
        <div key={layer}>
          <small>0{index + 1}</small>
          <strong>{layer}</strong>
          {index < layers.length - 1 ? <i aria-hidden="true">→</i> : null}
        </div>
      ))}
      <p>The database stays hidden behind the platform.</p>
    </div>
  )
}

function PrinciplesVisual() {
  const principles: readonly [string, string][] = [
    ['Business before technology', 'Software reflects the organisation'],
    ['Single source of truth', 'One authoritative location'],
    ['Shared business logic', 'Rules live in the platform'],
    ['Separation of responsibilities', 'Each part has one clear role'],
    ['Design for evolution', 'Extend without breaking foundations'],
    ['Consistency through reuse', 'Shared models, less duplication'],
  ]

  return (
    <div className="careos-slide-engineering" aria-label="Six architecture principles guiding the platform" role="img">
      {principles.map(([principle, detail], index) => (
        <div key={principle}>
          <span>0{index + 1}</span>
          <strong>{principle}</strong>
          <small>{detail}</small>
        </div>
      ))}
    </div>
  )
}

function SlideVisual({ type }: { type: SlideVisualType }) {
  const visuals: Record<SlideVisualType, ReactElement> = {
    backend: <BackendVisual />,
    domains: <DomainsVisual />,
    entities: <EntitiesVisual />,
    relationships: <RelationshipsVisual />,
    services: <ServicesVisual />,
    apis: <ApisVisual />,
    principles: <PrinciplesVisual />,
  }

  return <div className="careos-intro-slide__visual">{visuals[type]}</div>
}

export function EngineeringSlideshow() {
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
      className="careos-intro-deck"
      onBlur={handleBlur}
      onFocus={() => setIsInteracting(true)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      tabIndex={0}
      aria-label="Engineering page highlights slideshow. Slides advance every five seconds. Use left and right arrow keys to change slides."
    >
      <div className="careos-intro-deck__topbar">
        <span>ENGINEERING / PLATFORM HIGHLIGHTS</span>
        <div className="careos-intro-deck__status">
          <span>
            {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={() => setIsManuallyPaused((current) => !current)}
            aria-label={isManuallyPaused ? 'Resume automatic slide playback' : 'Pause automatic slide playback'}
          >
            <i aria-hidden="true">{isManuallyPaused ? '▶' : 'Ⅱ'}</i>
            {isManuallyPaused ? 'PLAY' : 'PAUSE'}
          </button>
        </div>
      </div>

      <article
        className="careos-intro-slide"
        id="engineering-intro-slide-panel"
        role="tabpanel"
        aria-live={isAutoplayPaused ? 'polite' : 'off'}
        aria-labelledby={`engineering-slide-title-${activeSlide.id}`}
      >
        <div className="careos-intro-slide__copy">
          <p className="careos-intro-slide__eyebrow">{activeSlide.eyebrow}</p>
          <h3 id={`engineering-slide-title-${activeSlide.id}`}>{activeSlide.title}</h3>
          <p className="careos-intro-slide__message">{activeSlide.message}</p>
          <ul>
            {activeSlide.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <SlideVisual type={activeSlide.visual} />
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
          className="careos-intro-deck__tabs careos-intro-deck__tabs--engineering"
          role="tablist"
          aria-label="Choose highlight slide"
        >
          {slides.map((slide, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls="engineering-intro-slide-panel"
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
