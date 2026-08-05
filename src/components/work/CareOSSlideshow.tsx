'use client'

import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'

type SlideVisualType =
  | 'analysis'
  | 'applications'
  | 'architecture'
  | 'database'
  | 'problem'
  | 'workflow'

type Slide = {
  id: string
  label: string
  eyebrow: string
  title?: string
  message: string
  points: readonly string[]
  visual?: SlideVisualType
}

const slides: readonly Slide[] = [
  {
    id: 'vision',
    label: 'Vision',
    eyebrow: 'BUSINESS OPERATING SYSTEM',
    title: 'Business Operating System for Service Organisations',
    message:
      'One operational model connects customer demand, operations, workforce activity and finance.',
    points: [
      'Customer needs become structured, traceable work.',
      'Teams coordinate through one connected service lifecycle.',
      'Operations, service delivery and financial settlement stay connected.',
    ],
  },
  {
    id: 'business-problem',
    label: 'Problem',
    eyebrow: 'FRAGMENTED SERVICE OPERATIONS',
    title: 'Too many tools\nToo little shared context',
    message: 'Information everywhere. Visibility nowhere.',
    points: [
      'Customer information arrives without one shared context.',
      'Planning and service delivery become difficult to trace.',
      'Operational and financial records separate from the work.',
    ],
    visual: 'problem',
  },
  {
    id: 'business-analysis',
    label: 'Analysis',
    eyebrow: 'BUSINESS ANALYSIS',
    title: 'How business understanding becomes system design',
    message:
      'System design begins with the operating problem, its stakeholders and the rules governing real work.',
    points: [
      'Identify pain points before defining requirements.',
      'Model processes, rules, entities and relationships.',
      'Derive system boundaries from the business domain.',
    ],
    visual: 'analysis',
  },
  {
    id: 'business-workflow',
    label: 'Workflow',
    eyebrow: 'BUSINESS WORKFLOW',
    title: 'One connected business lifecycle',
    message:
      'A customer need moves through coordinated operational stages until the work is commercially settled.',
    points: [
      'Each stage has a defined responsibility and outcome.',
      'Business context moves with the work from stage to stage.',
      'Completion connects delivery with billing and settlement.',
    ],
    visual: 'workflow',
  },
  {
    id: 'system-architecture',
    label: 'Architecture',
    eyebrow: 'SYSTEM ARCHITECTURE',
    title: 'One backend powers every application',
    message:
      'Customers, administrators, and field employees use different applications while sharing the same backend and business rules.',
    points: [
      'The REST API provides one controlled system boundary.',
      'Business capabilities share rules, authorisation and transactions.',
      'One relational domain model preserves operational consistency.',
    ],
    visual: 'architecture',
  },
  {
    id: 'database-design',
    label: 'Database',
    eyebrow: 'DATABASE DESIGN',
    title: 'The data model reflects how the business works',
    message:
      'Business concepts become structured data and relationships.',
    points: [
      'Clear structure keeps different types of business information separate.',
      'Connected records preserve relationships across bookings, visits, employees and services.',
      'Change history makes it possible to understand how operational records evolve over time.',
    ],
    visual: 'database',
  },
  {
    id: 'applications',
    label: 'Applications',
    eyebrow: 'APPLICATIONS',
    title: 'One operating system, shaped around three user groups',
    message: 'Each interface exposes the shared system through the responsibilities of the people using it.',
    points: [
      'Website — customers discover services and submit requests.',
      'Admin Dashboard — operations coordinate and govern the work.',
      'Employee App — field employees deliver and close out services.',
    ],
    visual: 'applications',
  },
]

type ProblemImpactIconName = 'accountability' | 'errors' | 'frustration' | 'silos' | 'time' | 'visibility'

function ProblemImpactIcon({ name }: { name: ProblemImpactIconName }) {
  const common = {
    className: 'careos-slide-problem-impact__icon',
    viewBox: '0 0 24 24',
    'aria-hidden': true,
    focusable: false,
  }

  if (name === 'silos') {
    return (
      <svg {...common}>
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="12" cy="18" r="3" />
        <path d="M8.6 7.4 15.4 4.6M15.4 7.4 8.6 4.6M12 15v-9" strokeOpacity="0.4" />
      </svg>
    )
  }

  if (name === 'time') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3.2 2" />
      </svg>
    )
  }

  if (name === 'errors') {
    return (
      <svg {...common}>
        <path d="M12 3.5 21.5 20h-19L12 3.5Z" />
        <path d="M12 10v4.2" />
        <circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (name === 'accountability') {
    return (
      <svg {...common}>
        <circle cx="8.5" cy="8" r="3" />
        <path d="M2.8 19c.6-3.2 3-5 5.7-5s5.1 1.8 5.7 5" />
        <circle cx="17" cy="8.5" r="2.4" />
        <path d="M14.8 19c.4-2.6 2.1-4 4.2-4 2.2 0 3.9 1.6 4.2 4.2" />
      </svg>
    )
  }

  if (name === 'visibility') {
    return (
      <svg {...common}>
        <path d="M3 20h18M6 20V12M11 20V7M16 20v-9M21 20V4" strokeOpacity="0.35" />
        <path d="m3 9 5-4 4 3 5-4 4 3" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 15.5c1-1.2 2.2-1.8 3.5-1.8s2.5.6 3.5 1.8" />
      <path d="M9 9.5h.01M15 9.5h.01" />
    </svg>
  )
}

function ProblemImpacts() {
  const impacts: readonly { icon: ProblemImpactIconName; label: string }[] = [
    { icon: 'silos', label: 'Information silos' },
    { icon: 'time', label: 'Wasted time & duplicate work' },
    { icon: 'errors', label: 'Errors & missed updates' },
    { icon: 'accountability', label: 'Confusion & low accountability' },
    { icon: 'visibility', label: 'No real-time visibility, no clear overview' },
    { icon: 'frustration', label: 'Overwhelmed staff, frustrated clients' },
  ]

  return (
    <ul className="careos-slide-problem-impact">
      {impacts.map((impact) => (
        <li key={impact.label}>
          <ProblemImpactIcon name={impact.icon} />
          <span>{impact.label}</span>
        </li>
      ))}
    </ul>
  )
}

function ProblemVisual() {
  return (
    <div className="careos-slide-problem-visual">
      <img
        alt="Overwhelmed office staff surrounded by disconnected tools — phone calls, WhatsApp, email, spreadsheets, calendars, paper stacks and warning signs — with tangled arrows showing information flowing between them without a shared system"
        className="careos-slide-problem-image"
        src="/work/problem-overview.png"
      />
      <ProblemImpacts />
    </div>
  )
}

function BusinessAnalysisVisual() {
  return (
    <img
      alt="Business analysis process: from business problem, stakeholders, pain points and business rules to process analysis, domain model and system design"
      className="careos-slide-problem-image"
      src="/work/analysis-overview.png"
    />
  )
}

function WorkflowVisual() {
  return (
    <img
      alt="CareOS end-to-end business lifecycle: customer need, request, planning, assignment, service delivery, completion, billing and settlement"
      className="careos-slide-problem-image"
      src="/work/workflow-overview.png"
    />
  )
}

function ArchitectureVisual() {
  return (
    <img
      alt="CareOS layered system architecture: Customer Website (React + Vite), Admin Application (React + Vite), and Employee App (Expo + React Native) all calling a REST API, which governs Core Business Capabilities (Identity, Customer, Booking, Scheduling, Workforce, Billing, Reporting, Notifications) backed by Prisma and PostgreSQL"
      className="careos-slide-problem-image"
      src="/work/architecture.png"
    />
  )
}

function DatabaseVisual() {
  return (
    <div className="careos-slide-problem-visual">
      <img
        alt="CareOS entity relationship diagram: Company, User, Employee, Household, Client and Service feeding into Booking, Booking Item, Visit and Assignment, through to Time Entry, Visit Closeout and Billable Item, and Invoice, Invoice Line, Payment, Receipt and Cash Handover"
        className="careos-slide-problem-image"
        src="/work/database-overview.png"
      />
      <p className="careos-slide-diagram-caption">Selected operational relationships</p>
    </div>
  )
}

function ApplicationsVisual() {
  return (
    <img
      alt="One system, multiple applications: Customer Website, Admin Application, Employee App and a future Client App all built on the CareOS unified business operating system, backed by Prisma ORM and PostgreSQL"
      className="careos-slide-problem-image"
      src="/work/applications-overview.png"
    />
  )
}

function SlideVisual({ type }: { type: SlideVisualType }) {
  const visuals: Record<SlideVisualType, ReactElement> = {
    problem: <ProblemVisual />,
    analysis: <BusinessAnalysisVisual />,
    workflow: <WorkflowVisual />,
    architecture: <ArchitectureVisual />,
    database: <DatabaseVisual />,
    applications: <ApplicationsVisual />,
  }

  return <div className="careos-intro-slide__visual">{visuals[type]}</div>
}

export function CareOSSlideshow() {
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
      aria-label="CareOS introduction slideshow. Slides advance every five seconds. Use left and right arrow keys to change slides."
    >
      <div className="careos-intro-deck__topbar">
        <span>
          CAREOS<span className="careos-intro-deck__topbar-subtitle"> / SYSTEM INTRODUCTION</span>
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

      {activeSlide.id === 'vision' ? (
        <article
          className="careos-intro-slide careos-intro-slide--vision"
          id="careos-intro-slide-panel"
          role="tabpanel"
          aria-live={isAutoplayPaused ? 'polite' : 'off'}
          aria-labelledby={`careos-slide-title-${activeSlide.id}`}
        >
          <div className="careos-vision-layout">
            <div className="careos-vision-layout__header">
              <img
                alt="CareOS logo"
                className="careos-vision-layout__logo"
                src="/work/careos-logo.png"
              />
              <div className="careos-vision-layout__intro">
                <h3 id={`careos-slide-title-${activeSlide.id}`}>
                  <span className="careos-vision-layout__title-full">Business Operating System</span>
                  <span className="careos-vision-layout__title-short">BOS</span>
                  <br />
                  for Service Organisations
                </h3>
              </div>
            </div>

            <div className="careos-vision-layout__row">
              <div className="careos-vision-layout__image-wrap">
                <img
                  alt="Illustration of the CareOS platform connecting customers, operations, workforce and finance functions"
                  className="careos-vision-layout__image"
                  src="/work/image7.png"
                />
              </div>
              <div className="careos-vision-layout__points-col">
                <p className="careos-vision-layout__intro-note">
                  A system designed to connect clients, households, employees, services, bookings,
                  visits, payments and operational workflows.
                </p>
                <ul className="careos-vision-layout__points">
                  {activeSlide.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      ) : (
        <article
          className="careos-intro-slide careos-intro-slide--problem"
          id="careos-intro-slide-panel"
          role="tabpanel"
          aria-live={isAutoplayPaused ? 'polite' : 'off'}
          aria-labelledby={`careos-slide-title-${activeSlide.id}`}
        >
          <div
            className={`careos-slide-problem-layout careos-slide-problem-layout--mirror${
              activeSlide.id === 'system-architecture' ? ' careos-slide-problem-layout--tall' : ''
            }`}
          >
            <div className="careos-slide-problem-layout__header">
              <p className="careos-intro-slide__eyebrow" id={`careos-slide-title-${activeSlide.id}`}>
                {activeSlide.eyebrow}
              </p>
              <h3>{activeSlide.title}</h3>
            </div>

            <div className="careos-slide-problem-layout__row">
              <div className="careos-intro-slide__copy careos-slide-problem-layout__copy">
                <p className="careos-intro-slide__message">{activeSlide.message}</p>
                <ul>
                  {activeSlide.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <SlideVisual type={activeSlide.visual!} />
            </div>
          </div>
        </article>
      )}

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
          className="careos-intro-deck__tabs careos-intro-deck__tabs--careos"
          role="tablist"
          aria-label="Choose introduction slide"
        >
          {slides.map((slide, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls="careos-intro-slide-panel"
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
