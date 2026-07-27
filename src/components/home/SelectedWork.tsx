'use client'

import { motion } from 'framer-motion'
import type { ReactElement } from 'react'
import { revealGroup, revealItem } from '@/components/motion/presets'
import { CTAButton } from '@/components/shared/CTAButton'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { type HomeProjectEntry, type HomeProjectId, homeProjects } from '@/domain/home/projects'

function CareOSVisual() {
  const nodes = ['Client', 'Household', 'Service', 'Booking', 'Employee', 'Visit', 'Payment']

  return (
    <div aria-hidden="true" className="project-visual project-visual--system">
      <p>OPERATIONAL ENTITY MAP</p>
      <div className="entity-map">
        {nodes.map((node) => (
          <span key={node}>{node}</span>
        ))}
        <i className="entity-map__line entity-map__line--one" />
        <i className="entity-map__line entity-map__line--two" />
        <i className="entity-map__line entity-map__line--three" />
      </div>
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

const enterpriseBackendLayers = [
  { label: 'Applications', detail: 'Website, Management, Employee' },
  { label: 'Platform APIs', detail: 'One shared interface' },
  { label: 'Business Services', detail: 'Centralised business logic' },
  { label: 'Shared Database', detail: 'Single source of truth' },
]

const projectVisuals: Record<HomeProjectId, () => ReactElement> = {
  careos: CareOSVisual,
  'gut-begleitet': () => <ServiceFlowVisual label="DIGITAL SERVICE FLOW" steps={gutBegleitetFlow} />,
  engineering: () => (
    <ServiceFlowVisual label="ENTERPRISE BACKEND ARCHITECTURE" steps={enterpriseBackendLayers} />
  ),
}

function ProjectCard({ project }: { project: HomeProjectEntry }) {
  const Visual = projectVisuals[project.id]

  return (
    <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
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
    <SectionWrapper as="section" className="work section" id="work">
      <motion.div
        animate="visible"
        className="project-list"
        initial="hidden"
        variants={revealGroup}
        viewport={{ once: true, amount: 0.15 }}
        whileInView="visible"
      >
        {homeProjects.map((project) => (
          <motion.div key={project.id} variants={revealItem}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
