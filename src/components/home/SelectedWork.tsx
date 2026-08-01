'use client'

import { motion } from 'framer-motion'
import type { ReactElement } from 'react'
import { revealItem } from '@/components/motion/presets'
import { CTAButton } from '@/components/shared/CTAButton'
import { type HomeProjectEntry, type HomeProjectId, homeProjects } from '@/domain/home/projects'

function CareOSVisual() {
  return (
    <div className="project-visual project-visual--system">
      <img
        alt="CareOS platform diagram: Authentication, CRM, Service Catalog, and HR in the top row, Operations, Notifications, Service Scheduling, and Platform Services in the middle row, and Finance and Reports & Analytics in the bottom row, all emerging from the central CareOS box"
        className="project-visual__image"
        src="/home/image4.png"
      />
    </div>
  )
}

function EnterpriseBackendVisual() {
  return (
    <div className="project-visual project-visual--system">
      <img
        alt="Enterprise backend architecture diagram: Website, Management Workspace, Employee Workspace, and Client Portal all connect to an API Layer, which sits above an Application Layer, a Persistence Layer, and PostgreSQL — with a Cross-Cutting Concerns ribbon (Authentication, Authorization, Validation, Tenant Isolation) running alongside the API, Application, and Persistence layers"
        className="project-visual__image"
        src="/home/image26.png"
      />
    </div>
  )
}

function ServiceFlowVisual({
  label,
  steps,
}: {
  label: string
  steps: readonly { label: string; detail: string }[]
}) {
  return (
    <div aria-hidden="true" className="project-visual project-visual--flow">
      <p>{label}</p>
      <ol className="service-flow-diagram">
        {steps.map((step, index) => (
          <li key={step.label}>
            <div className="service-flow-diagram__node">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <strong>{step.label}</strong>
                <small>{step.detail}</small>
              </div>
            </div>
            {index < steps.length - 1 ? <i /> : null}
          </li>
        ))}
      </ol>
    </div>
  )
}

const gutBegleitetFlow = [
  { label: 'Visitor', detail: 'Discovers services online' },
  { label: 'Booking Form', detail: 'Selects service & appointment' },
  { label: 'REST API', detail: 'Validates the request' },
  { label: 'Requested', detail: 'Ready for internal review' },
]

const projectVisuals: Record<HomeProjectId, () => ReactElement> = {
  careos: CareOSVisual,
  'gut-begleitet': () => <ServiceFlowVisual label="DIGITAL SERVICE FLOW" steps={gutBegleitetFlow} />,
  engineering: EnterpriseBackendVisual,
}

function ProjectCardContent({ project }: { project: HomeProjectEntry }) {
  const Visual = projectVisuals[project.id]

  return (
    <article>
      <div className="project-card__meta">
        <p>{project.category}</p>
      </div>
      <div className="project-card__body">
        <div className="project-card__content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul aria-label={`${project.title} areas`} className="tag-list">
            {project.areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          {project.announcement ? (
            <p className="project-announcement">
              <strong>Coming next —</strong> {project.announcement}
            </p>
          ) : null}
          <CTAButton
            href={project.ctaHref ?? project.workHref}
            icon="right"
            label={project.ctaLabel ?? 'View work'}
            variant="secondary"
          />
        </div>
        <Visual />
      </div>
    </article>
  )
}

export function SelectedWork() {
  return (
    <section aria-label="Selected work" id="work">
      {homeProjects.map((project) => (
        <motion.div
          animate="visible"
          className={`project-card project-card--${project.id}`}
          initial="hidden"
          key={project.id}
          variants={revealItem}
          viewport={{ once: true, amount: 0.15 }}
          whileInView="visible"
        >
          <div className="container">
            <ProjectCardContent project={project} />
          </div>
        </motion.div>
      ))}
    </section>
  )
}
