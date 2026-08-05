'use client'

import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { curvedPath, ENTITY_EDGES, ENTITY_POSITIONS } from '@/domain/engineering/entity-graph-layout'
import { type BusinessEntityId, businessEntityModel } from '@/domain/engineering/entity-model'

type SlideVisualType =
  | 'backend'
  | 'domains'
  | 'relationships'
  | 'database'
  | 'services'
  | 'service-layer'
  | 'apis'

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
    label: 'Introduction',
    eyebrow: 'BACKEND ARCHITECTURE',
    title: 'The Backend Is the Platform',
    message:
      'The backend is organised into distinct layers, each with one clear responsibility, from the API boundary down to the database.',
    points: [
      'API Layer (routes/ + controllers/) — the HTTP boundary, wrapped by JWT authentication and Zod validation.',
      'Application Services (services/) — business rules, orchestration, and transactions.',
      'Data Access (prisma/) and Database (PostgreSQL) — tenant isolation and the single source of truth.',
    ],
    visual: 'backend',
  },
  {
    id: 'domains',
    label: 'Model',
    eyebrow: 'BUSINESS ANALYSIS',
    title: 'From business concepts to data models',
    message:
      'Before designing the database, CareOS groups business concepts into conceptual capability areas to understand the organisation and communicate the architecture. These are analytical groupings used during system design. They are not implemented as separate modules in the backend, where the Prisma schema contains a flat set of 37 models.',
    points: [],
    visual: 'domains',
  },
  {
    id: 'relationships',
    label: 'Relationships',
    eyebrow: 'ENTITY RELATIONSHIPS',
    title: 'Relationships shape the data model',
    message: 'A database’s structure comes from how business entities relate—not from isolated tables.',
    points: [
      'Company → Household → Client → Booking → Visit → Invoice → Payment…',
      'Relationships are modelled before implementation details.',
    ],
    visual: 'relationships',
  },
  {
    id: 'database',
    label: 'Persistence',
    eyebrow: 'DATABASE ARCHITECTURE',
    title: 'A data model built for operations',
    message:
      'Built on PostgreSQL and accessed through Prisma ORM, the backend stores business data in a relational model while keeping validation, transactions, and business rules inside the application layer.',
    points: [],
    visual: 'database',
  },
  {
    id: 'service-layer',
    label: 'Flow',
    eyebrow: 'REQUEST PROCESSING',
    title: 'Every request follows the same pipeline',
    message:
      'Every request—whether it comes from the website, the Admin workspace, or the Employee app—follows the same processing pipeline. Requests are authenticated and validated before services execute business logic and transactions; Prisma persists changes to PostgreSQL.',
    points: [],
    visual: 'service-layer',
  },
  {
    id: 'services',
    label: 'Services',
    eyebrow: 'APPLICATION SERVICES',
    title: 'Shared services power every application',
    message:
      'The backend centralises business logic into 21 service modules. Controllers delegate requests to these services, where validation, business rules, transactions, and orchestration are implemented before data is persisted through Prisma.',
    points: [
      "21 service modules implement the platform's business logic.",
      'Controllers remain thin and delegate work to services.',
      'All applications share the same service layer and operational rules.',
    ],
    visual: 'services',
  },
  {
    id: 'apis',
    label: 'API',
    eyebrow: 'REST API',
    title: 'One API\nMany applications',
    message:
      'Every application communicates through the same REST API. Controllers delegate requests to shared application services, ensuring every client follows identical business rules without accessing the database directly.',
    points: [
      '82 endpoints organised into 16 route groups.',
      'The database is never accessed directly by applications.',
    ],
    visual: 'apis',
  },
]

function BackendVisual() {
  return (
    <img
      alt="Backend layers: API Layer (REST API, routes, controllers), Application Layer (business services, transactions, business rules), Persistence Layer (Prisma ORM, query execution), and PostgreSQL (relational model, indexes) — with a Cross-Cutting Concerns ribbon (Authentication, Authorization, Validation, Tenant Isolation) running alongside the API, Application, and Persistence layers"
      className="careos-slide-architecture-image"
      src="/work/image25.png"
    />
  )
}

function DomainsVisual() {
  return (
    <img
      alt="Conceptual capability areas, an analytical view of the business: Identity (User, Role, UserRole), Customer (Clients, Households, Companies, PreferredEmployee), Operations (Bookings, Assignments, Visits, BookingItem), Workforce (Employees, Availability, EmployeeSkill, TimeEntry), Finance (Invoices, Payments, PayrollPeriod, Receipts), Reporting (reads from every area — no dedicated table), and Platform Services (Documents, Notifications, Audit Logs, Sequences). Summary: 7 conceptual areas organise the business by capability, 37 Prisma models make up the flat data model in schema.prisma, and 17 enums as native PostgreSQL enum types"
      className="careos-slide-architecture-image"
      src="/work/model.png"
    />
  )
}

const LABEL_OFFSETS: Partial<Record<BusinessEntityId, { x: number; y: number }>> = {}

function RelationshipsVisual() {
  const LIT_FILL = '#176b4d'
  const LIT_BORDER = 'rgba(23, 107, 77, 0.55)'
  const EDGE_COLOR = '#d7dbd8'

  return (
    <div
      aria-label="Full entity relationship diagram: all 37 Prisma models and how they connect to one another"
      className="careos-relationship-diagram relative h-full w-full"
      role="img"
    >
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
        {ENTITY_EDGES.map((edge) => (
          <path
            d={curvedPath(ENTITY_POSITIONS[edge.a], ENTITY_POSITIONS[edge.b])}
            fill="none"
            key={`${edge.a}-${edge.b}`}
            stroke={EDGE_COLOR}
            strokeLinecap="round"
            strokeWidth={0.25}
          />
        ))}
      </svg>

      {businessEntityModel.map((entity) => {
        const base = ENTITY_POSITIONS[entity.id]
        const offset = LABEL_OFFSETS[entity.id]
        const position = offset ? { x: base.x + offset.x, y: base.y + offset.y } : base
        return (
          <div
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 p-1"
            key={entity.id}
            style={{ left: `${position.x}%`, top: `${position.y}%` }}
          >
            <span
              className="block size-3 rounded-full border"
              style={{ backgroundColor: LIT_FILL, borderColor: LIT_BORDER }}
            />
            <span className="careos-relationship-diagram__label max-w-[5rem] text-center text-[0.72rem] leading-tight font-medium text-balance text-ink">
              {entity.name}
            </span>
          </div>
        )
      })}
    </div>
  )
}

function ServicesVisual() {
  return (
    <img
      alt="21 service modules implementing core business logic, across 24 TypeScript files (including 3 utility helper modules), making up about 75% of the codebase, shared by all APIs, with centralised business rules and transactions. Modules grouped by area: Authentication (auth.service.ts, credential.service.ts, me.service.ts, admin-auth.service.ts, admin-bootstrap.service.ts), Customer (client.service.ts, household.service.ts), Booking (booking.service.ts), Employee (employee.service.ts, employee-assignment.service.ts), Visit (visit.service.ts, visit-completion.service.ts, employee-visit.service.ts), Billing (billing.service.ts, employee-cash.service.ts, employee-closeout.service.ts), Payroll (payroll.service.ts), Notification (notification.service.ts), Reports (reports.service.ts), Service Catalog (service.service.ts), and Utilities/Helpers (assignment-lifecycle.ts, operational-time.ts, visit-status.ts)"
      className="careos-slide-architecture-image"
      src="/work/services.png"
    />
  )
}

function ServiceLayerVisual() {
  return (
    <img
      alt="Request flow architecture: Cross-Cutting Concerns (JWT Authentication, Authorization, Zod Validation, Tenant Context via AsyncLocalStorage) wrap the REST API Layer (Routes to Controllers), which calls the Application Services Layer (21 service modules handling business rules, orchestration, transactions, and domain logic), which calls the Prisma ORM Layer (type-safe client, tenant-aware queries, serializable transactions, automatic retry), which reaches the Database Layer (PostgreSQL on Supabase, 37 models). Example booking flow: Client submits booking form, POST /bookings hits the API, JWT and role are checked, the Zod-validated payload is passed to the Booking Service which checks availability and calculates pricing, a serializable transaction creates the Household, Client, Booking, Booking Items, and Status History, the transaction commits, and a success response is returned. Outcomes: consistent and reliable, tenant-isolated data, atomic operations (ACID), unified logic across all applications"
      className="careos-slide-architecture-image"
      src="/work/flow.png"
    />
  )
}

function ApisVisual() {
  return (
    <img
      alt="API surface diagram: the Website, Admin management workspace, and Employee application all connect to a single REST API. Route groups include Authentication, Users, Companies, Clients, Households, Employees, Services, Bookings, Visits, Billing, Payroll, Reports, Notifications, Dashboard, and Admin, totaling 82 endpoints across 16 route groups that are consistent, secure, and centralised. One API, one contract, all applications — every client uses the same API to access the platform, and the database stays hidden."
      className="careos-slide-architecture-image"
      src="/work/rest-api.png"
    />
  )
}

function DatabaseVisual() {
  return (
    <img
      alt="Architecture diagram: Applications (Web, Admin, Mobile, Integrations) call the REST API, which calls Application Services (business logic and rules), which use Prisma ORM for type-safe database access to PostgreSQL, hosted on Supabase. Architecture summary: Database is PostgreSQL hosted on Supabase, ORM is Prisma 7, Data Model has 37 models, 17 enums, and 25 migrations, Indexing has 144 database indexes, 13 compound unique constraints, and 20 field unique constraints, Concurrency uses serializable transactions with automatic retry, Reliable with strong transactional consistency, tenant isolation, and strict typing. Engineering principles: multi-tenant by design, business logic in the service layer, no database triggers, no stored procedures, application-managed business sequences, Prisma-first architecture"
      className="careos-slide-architecture-image"
      src="/work/image6.png"
    />
  )
}

function SlideVisual({ type }: { type: SlideVisualType }) {
  const visuals: Record<SlideVisualType, ReactElement> = {
    backend: <BackendVisual />,
    domains: <DomainsVisual />,
    relationships: <RelationshipsVisual />,
    database: <DatabaseVisual />,
    services: <ServicesVisual />,
    'service-layer': <ServiceLayerVisual />,
    apis: <ApisVisual />,
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
      className="careos-intro-deck careos-intro-deck--uniform"
      onBlur={handleBlur}
      onFocus={() => setIsInteracting(true)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      tabIndex={0}
      aria-label="Engineering page highlights slideshow. Slides advance every five seconds. Use left and right arrow keys to change slides."
    >
      <div className="careos-intro-deck__topbar">
        <span>
          ENGINEERING<span className="careos-intro-deck__topbar-subtitle"> / PLATFORM HIGHLIGHTS</span>
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
        className={`careos-intro-slide ${activeSlide.id === 'backend' ? 'careos-intro-slide--cover' : ''}`}
        id="engineering-intro-slide-panel"
        role="tabpanel"
        aria-live={isAutoplayPaused ? 'polite' : 'off'}
        aria-labelledby={`engineering-slide-title-${activeSlide.id}`}
      >
        <div className="careos-intro-slide__copy">
          <p className="careos-intro-slide__eyebrow">{activeSlide.eyebrow}</p>
          <h3 id={`engineering-slide-title-${activeSlide.id}`}>{activeSlide.title}</h3>
          <p className="careos-intro-slide__message">{activeSlide.message}</p>
          {activeSlide.points.length > 0 ? (
            <ul>
              {activeSlide.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
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
