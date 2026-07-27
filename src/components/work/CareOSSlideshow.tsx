'use client'

import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'

type SlideVisualType =
  | 'analysis'
  | 'applications'
  | 'architecture'
  | 'database'
  | 'engineering'
  | 'lifecycle'
  | 'problem'
  | 'workflow'

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
    id: 'vision',
    label: 'Vision',
    eyebrow: 'BUSINESS OPERATING SYSTEM',
    title: 'Business Operating System for Service Organisations.',
    message:
      'One operational model connects customer demand, operations, workforce activity and finance.',
    points: [
      'Customer needs become structured, traceable work.',
      'Operational teams coordinate one shared service lifecycle.',
      'Service delivery remains connected to commercial settlement.',
    ],
    visual: 'lifecycle',
  },
  {
    id: 'business-problem',
    label: 'Problem',
    eyebrow: 'THE BUSINESS PROBLEM',
    title: 'From fragmented tools to one source of operational truth.',
    message: 'Disconnected channels fragment context, ownership and operational visibility.',
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
    title: 'How business understanding becomes system design.',
    message:
      'Architecture begins with the operating problem, its stakeholders and the rules governing real work.',
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
    title: 'One connected business lifecycle.',
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
    title: 'One backend governs every operating interface.',
    message:
      'Customers, operations and field employees use different interfaces governed by the same business rules.',
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
    title: 'The data model is derived from the business domain.',
    message:
      'Business concepts become entities, relationships and constraints—not tables designed around screens.',
    points: [
      'Normalization separates distinct business responsibilities.',
      'Referential integrity protects lifecycle relationships.',
      'Auditability preserves how operational records evolve.',
    ],
    visual: 'database',
  },
  {
    id: 'applications',
    label: 'Applications',
    eyebrow: 'APPLICATIONS',
    title: 'One operating system, shaped around three business roles.',
    message: 'Each interface exposes the shared system through the responsibilities of the people using it.',
    points: [
      'Website — customers discover services and submit requests.',
      'Admin Dashboard — operations coordinate and govern the work.',
      'Employee App — field employees deliver and close out services.',
    ],
    visual: 'applications',
  },
  {
    id: 'engineering',
    label: 'Engineering',
    eyebrow: 'ENGINEERING PRINCIPLES',
    title: 'Engineering decisions follow the business model.',
    message:
      'Technology supports the domain, architectural boundaries and need for maintainable production delivery.',
    points: [
      'Business thinking determines the system boundaries.',
      'Contracts and validation protect shared behaviour.',
      'Deployment choices preserve clear application ownership.',
    ],
    visual: 'engineering',
  },
]

function LifecycleVisual() {
  const lifecycle: readonly [string, string][] = [
    ['Customer Need', 'Demand'],
    ['Service Request', 'Intent'],
    ['Planning', 'Operational Design'],
    ['Scheduling', 'Resource Allocation'],
    ['Service Delivery', 'Work Execution'],
    ['Billing', 'Commercial Record'],
    ['Payment', 'Financial Settlement'],
  ]

  return (
    <div
      className="careos-slide-lifecycle"
      aria-label="Business lifecycle connected through the CareOS core"
      role="img"
    >
      <div className="careos-slide-lifecycle__core">CareOS Core</div>
      <ol>
        {lifecycle.map(([stage, description], index) => (
          <li key={stage}>
            <span>0{index + 1}</span>
            <div>
              <strong>{stage}</strong>
              <small>{description}</small>
            </div>
            {index < lifecycle.length - 1 ? <i aria-hidden="true">↓</i> : null}
          </li>
        ))}
      </ol>
    </div>
  )
}

function ProblemVisual() {
  const fragments = ['Phone Calls', 'WhatsApp', 'Email', 'Excel', 'Paper Forms', 'Accounting']

  return (
    <div
      className="careos-slide-problem"
      aria-label="Fragmented operational inputs becoming one governed CareOS workflow"
      role="img"
    >
      <div className="careos-slide-problem__fragments">
        {fragments.map((fragment) => (
          <span key={fragment}>{fragment}</span>
        ))}
      </div>
      <div className="careos-slide-problem__flow" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>CONVERGE</span>
        <i />
        <i />
        <i />
      </div>
      <strong>
        Connected Operational Platform
        <small>One source of operational truth</small>
      </strong>
    </div>
  )
}

function BusinessAnalysisVisual() {
  const stages = [
    'Business Problem',
    'Stakeholders',
    'Pain Points',
    'Business Rules',
    'Process Analysis',
    'Domain Model',
    'System Design',
  ]

  return (
    <div
      className="careos-slide-analysis-process"
      aria-label="Business analysis process from stakeholders to implementation"
      role="img"
    >
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

function WorkflowVisual() {
  const workflow = [
    'Customer Need',
    'Request',
    'Planning',
    'Assignment',
    'Service Delivery',
    'Completion',
    'Billing',
    'Settlement',
  ]

  return (
    <div
      className="careos-slide-workflow careos-slide-workflow--lifecycle"
      aria-label="CareOS end-to-end business lifecycle"
      role="img"
    >
      {workflow.map((stage, index) => (
        <div key={stage}>
          <small>0{index + 1}</small>
          <strong>{stage}</strong>
          {index < workflow.length - 1 ? <i aria-hidden="true">→</i> : null}
        </div>
      ))}
      <p>Customer need → operational delivery → financial settlement</p>
    </div>
  )
}

function ArchitectureVisual() {
  const capabilities = ['Authentication', 'Clients', 'Scheduling', 'Finance', 'Notifications']

  return (
    <div className="careos-slide-architecture" aria-label="CareOS layered system architecture" role="img">
      <div className="careos-slide-architecture__apps">
        <span>
          Customer Website<small>React + Vite</small>
        </span>
        <span>
          Admin Application<small>React + Vite</small>
        </span>
        <span>
          Employee App<small>Expo + React Native</small>
        </span>
      </div>
      <i aria-hidden="true" />
      <strong>REST API</strong>
      <div className="careos-slide-architecture__backend">
        <small>SHARED BUSINESS CAPABILITIES</small>
        <div>
          {capabilities.map((capability) => (
            <span key={capability}>{capability}</span>
          ))}
        </div>
      </div>
      <div className="careos-slide-architecture__data">
        <span>Prisma</span>
        <b>↓</b>
        <span>PostgreSQL</span>
      </div>
    </div>
  )
}

function DatabaseVisual() {
  const stages = ['Business Concepts', 'Entities', 'Relationships', 'Constraints', 'Relational Database']

  return (
    <div
      className="careos-slide-database"
      aria-label="Database design process and future ER diagram placeholder"
      role="img"
    >
      <div className="careos-slide-database__process">
        {stages.map((stage, index) => (
          <div key={stage}>
            <span>0{index + 1}</span>
            <strong>{stage}</strong>
            {index < stages.length - 1 ? <i aria-hidden="true">↓</i> : null}
          </div>
        ))}
      </div>
      <div className="careos-slide-database__placeholder">
        <span>[ Database ER Diagram ]</span>
        <small>VERIFIED PROJECT ASSET TO BE ADDED</small>
      </div>
    </div>
  )
}

function MediaPlaceholder({ label }: { label: string }) {
  return (
    <div className="careos-media careos-media--slide" role="img" aria-label={`${label} placeholder`}>
      <span className="careos-media__marker" aria-hidden="true" />
      <span>[ {label} ]</span>
      <small>ASSET PLACEHOLDER</small>
    </div>
  )
}

function ApplicationMockup({
  label,
  role,
  type,
}: {
  label: string
  role: string
  type: 'desktop' | 'laptop' | 'mobile'
}) {
  return (
    <div className={`careos-device-mockup careos-device-mockup--${type}`}>
      <div className="careos-device-mockup__chrome" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <MediaPlaceholder label={`${label} Screenshot`} />
      <p>
        <strong>{label}</strong>
        <small>→ {role}</small>
      </p>
    </div>
  )
}

function ApplicationsVisual() {
  return (
    <div className="careos-slide-applications">
      <ApplicationMockup label="Website" role="Customers" type="laptop" />
      <ApplicationMockup label="Admin Dashboard" role="Operations" type="desktop" />
      <ApplicationMockup label="Employee App" role="Field Workforce" type="mobile" />
    </div>
  )
}

function EngineeringVisual() {
  const principles: readonly [string, string][] = [
    ['Business-first Thinking', 'Process analysis · Requirements engineering'],
    ['Domain-driven Design', 'Business rules · Entities · Service boundaries'],
    ['API-first Architecture', 'REST · Express · Zod'],
    ['Relational Data Model', 'PostgreSQL · Prisma · Migrations'],
    ['Production-ready Deployment', 'Vercel · Node.js hosting · Supabase'],
  ]

  return (
    <div
      className="careos-slide-engineering"
      aria-label="CareOS engineering principles and supporting technologies"
      role="img"
    >
      {principles.map(([principle, technologies], index) => (
        <div key={principle}>
          <span>0{index + 1}</span>
          <strong>{principle}</strong>
          <small>{technologies}</small>
        </div>
      ))}
    </div>
  )
}

function SlideVisual({ type }: { type: SlideVisualType }) {
  const visuals: Record<SlideVisualType, ReactElement> = {
    lifecycle: <LifecycleVisual />,
    problem: <ProblemVisual />,
    analysis: <BusinessAnalysisVisual />,
    workflow: <WorkflowVisual />,
    architecture: <ArchitectureVisual />,
    database: <DatabaseVisual />,
    applications: <ApplicationsVisual />,
    engineering: <EngineeringVisual />,
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
      className="careos-intro-deck"
      onBlur={handleBlur}
      onFocus={() => setIsInteracting(true)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      tabIndex={0}
      aria-label="CareOS introduction slideshow. Slides advance every five seconds. Use left and right arrow keys to change slides."
    >
      <div className="careos-intro-deck__topbar">
        <span>CAREOS / SYSTEM INTRODUCTION</span>
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
        id="careos-intro-slide-panel"
        role="tabpanel"
        aria-live={isAutoplayPaused ? 'polite' : 'off'}
        aria-labelledby={`careos-slide-title-${activeSlide.id}`}
      >
        <div className="careos-intro-slide__copy">
          <p className="careos-intro-slide__eyebrow">{activeSlide.eyebrow}</p>
          <h3 id={`careos-slide-title-${activeSlide.id}`}>{activeSlide.title}</h3>
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
        <div className="careos-intro-deck__tabs" role="tablist" aria-label="Choose introduction slide">
          {slides.map((slide, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls="careos-intro-slide-panel"
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
