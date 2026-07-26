'use client'

import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'

type SlideVisualType =
  | 'analysis'
  | 'applications'
  | 'architecture'
  | 'lifecycle'
  | 'problem'
  | 'workflow'
  | 'engineering'

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
    id: 'overview',
    label: 'Overview',
    eyebrow: 'DIGITAL SERVICE PLATFORM',
    title: 'A digital front door for everyday community care.',
    message:
      'One connected platform turns individual care needs into structured, trackable requests for a real Austrian community-care association.',
    points: [
      'Services, membership and community activities in one place.',
      'A structured path from browsing to a confirmed booking.',
      'Built for older adults, family members, and staff alike.',
    ],
    visual: 'lifecycle',
  },
  {
    id: 'business-problem',
    label: 'Problem',
    eyebrow: 'THE BUSINESS PROBLEM',
    title: 'From phone calls and word of mouth to one shared record.',
    message:
      'Service requests arrived through disconnected, informal channels with no consistent structure for staff to act on.',
    points: [
      'No single source of truth for incoming requests.',
      'Manual reconstruction of service, household and contact details.',
      'Limited visibility into demand across services.',
    ],
    visual: 'problem',
  },
  {
    id: 'business-analysis',
    label: 'Analysis',
    eyebrow: 'BUSINESS ANALYSIS',
    title: 'Real stakeholders and services shaped the structure.',
    message:
      'Analysis started with who actually uses the platform and what they need, before any interface was designed.',
    points: [
      'Stakeholders: seniors, family members, staff, and visitors.',
      'Service catalogue: Alltagshilfe, Salon & Club, Gut Friend, Membership.',
      'Information architecture derived from real service relationships.',
    ],
    visual: 'analysis',
  },
  {
    id: 'booking-workflow',
    label: 'Booking',
    eyebrow: 'BOOKING & SERVICE WORKFLOW',
    title: 'A guided path from service need to operational record.',
    message:
      'The booking flow turns a visitor’s request into a structured, validated record ready for internal handling.',
    points: [
      'Guided form collects appointment, service, and household details.',
      'Validated twice — once in the browser, once at the API boundary.',
      'Every request starts life with a Requested status.',
    ],
    visual: 'workflow',
  },
  {
    id: 'system-architecture',
    label: 'Architecture',
    eyebrow: 'SYSTEM ARCHITECTURE',
    title: 'One backend governs the public booking boundary.',
    message:
      'A dedicated REST API keeps the public website fully decoupled from the operational database.',
    points: [
      'Express REST API validates every booking request.',
      'Business capabilities share consistent rules and structure.',
      'Prisma persists connected records in Supabase PostgreSQL.',
    ],
    visual: 'architecture',
  },
  {
    id: 'responsive-experience',
    label: 'Responsive',
    eyebrow: 'RESPONSIVE EXPERIENCE',
    title: 'One experience, three screen sizes.',
    message:
      'Layouts adapt from full navigation on desktop to a stacked, thumb-friendly flow on mobile.',
    points: [
      'Desktop keeps full navigation and side-by-side content.',
      'Tablet narrows into a single reading column.',
      'Mobile collapses navigation and stacks every section.',
    ],
    visual: 'applications',
  },
  {
    id: 'outcomes',
    label: 'Outcomes',
    eyebrow: 'PROJECT OUTCOMES',
    title: 'From business analysis to a live production platform.',
    message: 'The work shipped as a real, running system rather than a design exercise.',
    points: [
      'Structured requests replace informal, hard-to-track enquiries.',
      'One platform serves services, membership, and community content.',
      'A foundation ready for scheduling, CRM, and further growth.',
    ],
    visual: 'engineering',
  },
]

type VisionIconName =
  | 'calendar'
  | 'clipboard'
  | 'cloud'
  | 'database'
  | 'globe'
  | 'growth'
  | 'heart'
  | 'lock'
  | 'person'
  | 'puzzle'
  | 'rocket'
  | 'shield'
  | 'sitemap'
  | 'users'

function VisionIcon({ name }: { name: VisionIconName }) {
  const common = {
    'aria-hidden': true,
    className: 'size-4',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.75,
    viewBox: '0 0 24 24',
  }

  switch (name) {
    case 'users':
      return (
        <svg {...common}>
          <circle cx="8.5" cy="8" r="3" />
          <path d="M2.5 20c0-3.5 2.5-6 6-6s6 2.5 6 6" />
          <circle cx="17.5" cy="9" r="2.3" />
          <path d="M15 20c.3-2.7 2-4.7 4.8-4.7" />
        </svg>
      )
    case 'sitemap':
      return (
        <svg {...common}>
          <circle cx="12" cy="4.2" r="1.6" />
          <path d="M12 5.8V9" />
          <path d="M6 13v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
          <circle cx="6" cy="16.8" r="1.6" />
          <circle cx="12" cy="16.8" r="1.6" />
          <circle cx="18" cy="16.8" r="1.6" />
          <path d="M6 15.2V13M12 15.2v-2M18 15.2V13" />
        </svg>
      )
    case 'clipboard':
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="17" rx="2" />
          <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
          <path d="M8.5 10h7M8.5 14h7M8.5 18h4.5" />
        </svg>
      )
    case 'growth':
      return (
        <svg {...common}>
          <path d="M4 20v-6M10 20V8M16 20v-10" />
          <path d="M2.5 20h19" />
        </svg>
      )
    case 'person':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5 20c0-4 3-6.5 7-6.5s7 2.5 7 6.5" />
        </svg>
      )
    case 'calendar':
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M3.5 10h17" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    case 'heart':
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.3-9.5-8.4C.7 8.1 2.2 4.7 5.6 4.7c2 0 3.4 1.2 4.4 2.6 1-1.4 2.4-2.6 4.4-2.6 3.4 0 4.9 3.4 3.1 6.9C19 15.7 12 20 12 20Z" />
        </svg>
      )
    case 'globe':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17M12 3.5c2.5 2.5 3.8 5.5 3.8 8.5s-1.3 6-3.8 8.5c-2.5-2.5-3.8-5.5-3.8-8.5S9.5 6 12 3.5Z" />
        </svg>
      )
    case 'cloud':
      return (
        <svg {...common}>
          <path d="M7 18a4.3 4.3 0 0 1-.6-8.55A5.3 5.3 0 0 1 16.9 8a3.8 3.8 0 0 1-.4 10H7Z" />
        </svg>
      )
    case 'puzzle':
      return (
        <svg {...common}>
          <path d="M9 4.5h3.5a1 1 0 0 1 1 1v1.6a1.6 1.6 0 1 0 0 3.2v1.7a1 1 0 0 1-1 1h-1.7a1.6 1.6 0 1 1-3.2 0H6a1 1 0 0 1-1-1V9.3a1.6 1.6 0 1 0 0-3.2V4.5a1 1 0 0 1 1-1h1.5a1.6 1.6 0 1 0 3.2 0Z" />
        </svg>
      )
    case 'database':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6" rx="7.5" ry="3" />
          <path d="M4.5 6v5.5c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" />
          <path d="M4.5 11.5V17c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-5.5" />
        </svg>
      )
    case 'lock':
      return (
        <svg {...common}>
          <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
          <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
        </svg>
      )
    case 'rocket':
      return (
        <svg {...common}>
          <path d="M12 2.5c3 2 5 6 5 9.5 0 2-1 4-2 5l-.7 1.6-2.3-1-2.3 1L9 17c-1-1-2-3-2-5 0-3.5 2-7.5 5-9.5Z" />
          <circle cx="12" cy="9.5" r="1.5" />
          <path d="M9 16.5l-2 3.5M15 16.5l2 3.5" />
        </svg>
      )
  }
}

const overviewHighlights: readonly {
  icon: VisionIconName
  title: string
  detail: string
}[] = [
  {
    icon: 'users',
    title: 'Built for real people',
    detail: 'Designed for seniors, family members and staff alike.',
  },
  {
    icon: 'sitemap',
    title: 'All services in one place',
    detail: 'Everyday help, community activities, and membership.',
  },
  {
    icon: 'clipboard',
    title: 'Structured booking workflow',
    detail: 'From request to operational record.',
  },
  {
    icon: 'growth',
    title: 'Ready for future growth',
    detail: 'A foundation for scheduling, CRM, and analytics.',
  },
]

const journeySteps: readonly {
  icon: VisionIconName
  title: string
  subtitle: string
}[] = [
  { icon: 'person', title: 'Everyday Need', subtitle: 'Discovery' },
  { icon: 'clipboard', title: 'Service Page', subtitle: 'Information' },
  { icon: 'calendar', title: 'Booking Request', subtitle: 'Structured Intent' },
  { icon: 'shield', title: 'Internal Review', subtitle: 'Operational Handling' },
  { icon: 'heart', title: 'Care Delivered', subtitle: 'Community Support' },
]

const architectureSteps: readonly {
  icon: VisionIconName
  title: string
  subtitle: string
}[] = [
  { icon: 'globe', title: 'Public Website', subtitle: 'React + Vite' },
  { icon: 'cloud', title: 'REST API', subtitle: 'Express' },
  { icon: 'puzzle', title: 'Shared Business Capabilities', subtitle: 'Validation · Services · Notifications' },
  { icon: 'database', title: 'Supabase', subtitle: 'PostgreSQL' },
]

const futureOpportunities = [
  'Staff Dashboard',
  'CRM Integration',
  'Online Scheduling',
  'Analytics & Reporting',
]

function OverviewSlideCopy({ slide }: { slide: Slide }) {
  return (
    <div className="careos-intro-slide__copy">
      <p className="careos-intro-slide__eyebrow">{slide.eyebrow}</p>
      <h3 id={`gutbegleitet-slide-title-${slide.id}`}>{slide.title}</h3>
      <p className="careos-intro-slide__message">{slide.message}</p>

      <div className="border-t border-line">
        {overviewHighlights.map((item) => (
          <div key={item.title} className="flex items-start gap-3.5 border-b border-line py-3.5 last:border-b-0">
            <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-control bg-accent-soft text-accent">
              <VisionIcon name={item.icon} />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-ink">{item.title}</p>
              <p className="mt-0.5 text-xs text-muted">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function OverviewPanelLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center rounded-full bg-ink px-3.5 py-1.5 font-mono text-[0.65rem] font-medium tracking-[0.1em] text-white uppercase">
      {children}
    </p>
  )
}

function OverviewSlideVisual() {
  return (
    <div className="careos-intro-slide__visual careos-intro-slide__visual--overview">
      <div className="flex w-full flex-col gap-5">
        <div>
          <OverviewPanelLabel>The Journey at a Glance</OverviewPanelLabel>
          <div className="mt-3 flex items-stretch gap-1.5">
            {journeySteps.map((step, index) => (
              <div key={step.title} className="flex flex-1 items-stretch gap-1.5">
                <div className="flex-1 rounded-card border border-line bg-surface p-2.5 shadow-control">
                  <span className="grid size-7 place-items-center rounded-full bg-accent-soft text-accent">
                    <VisionIcon name={step.icon} />
                  </span>
                  <p className="mt-2 font-mono text-[0.6rem] text-muted">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <p className="text-[0.72rem] leading-tight font-semibold text-ink">{step.title}</p>
                  <p className="text-[0.65rem] leading-tight text-muted">{step.subtitle}</p>
                </div>
                {index < journeySteps.length - 1 ? (
                  <span aria-hidden="true" className="flex items-center text-line-strong">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div>
          <OverviewPanelLabel>System Architecture Overview</OverviewPanelLabel>
          <div className="mt-3 flex items-stretch gap-1.5">
            {architectureSteps.map((step, index) => (
              <div key={step.title} className="flex flex-1 items-stretch gap-1.5">
                <div className="flex-1 rounded-card border border-line bg-surface p-2.5 shadow-control">
                  <span className="grid size-7 place-items-center rounded-full bg-accent-soft text-accent">
                    <VisionIcon name={step.icon} />
                  </span>
                  <p className="mt-2 text-[0.72rem] leading-tight font-semibold text-ink">{step.title}</p>
                  <p className="text-[0.65rem] leading-tight text-muted">{step.subtitle}</p>
                </div>
                {index < architectureSteps.length - 1 ? (
                  <span aria-hidden="true" className="flex items-center text-line-strong">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-[1.4fr_1fr] gap-2.5">
            <div className="rounded-card border border-line bg-surface-subtle p-3">
              <div className="flex items-center gap-2 text-ink">
                <VisionIcon name="lock" />
                <p className="text-xs font-semibold">Secure &amp; Decoupled</p>
              </div>
              <p className="mt-1.5 text-[0.68rem] leading-relaxed text-muted">
                The public website is fully separated from the operational database. The API validates every request before data is stored.
              </p>
            </div>
            <div className="rounded-card border border-dashed border-line-strong bg-surface p-3">
              <div className="flex items-center gap-2 text-accent">
                <VisionIcon name="rocket" />
                <p className="text-xs font-semibold text-ink">Future Opportunities</p>
              </div>
              <ul className="mt-1.5 space-y-0.5 text-[0.68rem] text-muted">
                {futureOpportunities.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LifecycleVisual() {
  const lifecycle: readonly [string, string][] = [
    ['Everyday Need', 'Discovery'],
    ['Service Page', 'Information'],
    ['Booking Request', 'Structured Intent'],
    ['Internal Review', 'Operational Handling'],
    ['Care Delivered', 'Community Support'],
  ]

  return (
    <div
      className="careos-slide-lifecycle"
      aria-label="Everyday care needs connected through the Gut Begleitet platform"
      role="img"
    >
      <div className="careos-slide-lifecycle__core">Gut Begleitet</div>
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
  const fragments = ['Phone Calls', 'Word of Mouth', 'Paper Notes', 'Ad-hoc Messages']

  return (
    <div
      className="careos-slide-problem"
      aria-label="Fragmented service requests converging into one structured booking platform"
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
        Structured Booking Platform
        <small>One consistent way to request and track care</small>
      </strong>
    </div>
  )
}

function AnalysisVisual() {
  const stages = [
    'Stakeholders',
    'Service Catalogue',
    'Pain Points',
    'Information Architecture',
    'Content Model',
    'Interface Design',
  ]

  return (
    <div
      className="careos-slide-analysis-process"
      aria-label="Business analysis process from stakeholders to interface design"
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
    'Visitor',
    'Explore Services',
    'Booking Form',
    'Validation',
    'REST API',
    'Requested',
  ]

  return (
    <div
      className="careos-slide-workflow careos-slide-workflow--lifecycle"
      aria-label="Gut Begleitet booking workflow from visitor to structured request"
      role="img"
    >
      {workflow.map((stage, index) => (
        <div key={stage}>
          <small>0{index + 1}</small>
          <strong>{stage}</strong>
          {index < workflow.length - 1 ? <i aria-hidden="true">→</i> : null}
        </div>
      ))}
      <p>Website request → validated submission → structured operational record</p>
    </div>
  )
}

function ArchitectureVisual() {
  const capabilities = ['Booking Intake', 'Service Catalog', 'Validation', 'Notifications']

  return (
    <div
      className="careos-slide-architecture"
      aria-label="Gut Begleitet layered system architecture"
      role="img"
    >
      <div className="careos-slide-architecture__apps">
        <span>
          Public Website<small>React + Vite</small>
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
        <span>Supabase PostgreSQL</span>
      </div>
    </div>
  )
}

function ResponsiveMockup({
  label,
  role,
  src,
  type,
}: {
  label: string
  role: string
  src: string
  type: 'desktop' | 'laptop' | 'mobile'
}) {
  return (
    <div className={`careos-device-mockup careos-device-mockup--${type}`}>
      <div className="careos-device-mockup__chrome" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="careos-media careos-media--slide" style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          alt={`${label} viewport screenshot`}
          loading="lazy"
          src={src}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
          }}
        />
      </div>
      <p>
        <strong>{label}</strong>
        <small>→ {role}</small>
      </p>
    </div>
  )
}

function ResponsiveVisual() {
  const IMAGE_BASE = '/case-studies/gutbegleitet'

  return (
    <div className="careos-slide-applications">
      <ResponsiveMockup
        label="Desktop"
        role="1440px"
        src={`${IMAGE_BASE}/mitgliedschaft-desktop.png`}
        type="laptop"
      />
      <ResponsiveMockup
        label="Tablet"
        role="768px"
        src={`${IMAGE_BASE}/mitgliedschaft-tablet.png`}
        type="desktop"
      />
      <ResponsiveMockup
        label="Mobile"
        role="375px"
        src={`${IMAGE_BASE}/mitgliedschaft-mobile.png`}
        type="mobile"
      />
    </div>
  )
}

function EngineeringVisual() {
  const principles: readonly [string, string][] = [
    ['Live Production Platform', 'Deployed on Vercel'],
    ['Structured Booking Data', 'Express · Prisma · Supabase'],
    ['Consistent Experience', 'Shared components · Design tokens'],
    ['Room to Grow', 'Extensible booking & content model'],
  ]

  return (
    <div
      className="careos-slide-engineering"
      aria-label="Gut Begleitet project outcomes"
      role="img"
    >
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
    lifecycle: <LifecycleVisual />,
    problem: <ProblemVisual />,
    analysis: <AnalysisVisual />,
    workflow: <WorkflowVisual />,
    architecture: <ArchitectureVisual />,
    applications: <ResponsiveVisual />,
    engineering: <EngineeringVisual />,
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
      className="careos-intro-deck"
      onBlur={handleBlur}
      onFocus={() => setIsInteracting(true)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      tabIndex={0}
      aria-label="Gut Begleitet case study highlights slideshow. Slides advance every five seconds. Use left and right arrow keys to change slides."
    >
      <div className="careos-intro-deck__topbar">
        <span>GUT BEGLEITET / CASE STUDY HIGHLIGHTS</span>
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
        id="gutbegleitet-intro-slide-panel"
        role="tabpanel"
        aria-live={isAutoplayPaused ? 'polite' : 'off'}
        aria-labelledby={`gutbegleitet-slide-title-${activeSlide.id}`}
      >
        {activeSlide.id === 'overview' ? (
          <>
            <OverviewSlideCopy slide={activeSlide} />
            <OverviewSlideVisual />
          </>
        ) : (
          <>
            <div className="careos-intro-slide__copy">
              <p className="careos-intro-slide__eyebrow">{activeSlide.eyebrow}</p>
              <h3 id={`gutbegleitet-slide-title-${activeSlide.id}`}>{activeSlide.title}</h3>
              <p className="careos-intro-slide__message">{activeSlide.message}</p>
              <ul>
                {activeSlide.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
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
