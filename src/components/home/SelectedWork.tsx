'use client'

import { motion } from 'framer-motion'
import type { ReactElement } from 'react'
import { revealItem } from '@/components/motion/presets'
import { CTAButton } from '@/components/shared/CTAButton'
import { type HomeProjectEntry, type HomeProjectId, homeProjects } from '@/domain/home/projects'
import { OperatingModelBackground } from './OperatingModelBackground'

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

const projectVisuals: Partial<Record<HomeProjectId, () => ReactElement>> = {
  careos: CareOSVisual,
  engineering: EnterpriseBackendVisual,
}

function ProjectCardContent({ project }: { project: HomeProjectEntry }) {
  const Visual = projectVisuals[project.id]
  const isGutBegleitet = project.id === 'gut-begleitet'

  return (
    <article>
      {isGutBegleitet ? <OperatingModelBackground /> : null}
      <div className="project-card__meta">
        <p>{project.category}</p>
        {isGutBegleitet ? <p className="project-card__meta-description">{project.description}</p> : null}
      </div>
      <div className="project-card__body">
        <div className="project-card__content">
          <h3>{project.title}</h3>
          {!isGutBegleitet ? <p>{project.description}</p> : null}
          {project.areas.length > 0 ? (
            <ul aria-label={`${project.title} areas`} className="tag-list">
              {project.areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          ) : null}
          {!isGutBegleitet ? (
            <CTAButton
              href={project.ctaHref ?? project.workHref}
              icon="right"
              label={project.ctaLabel ?? 'View work'}
              variant="secondary"
            />
          ) : null}
        </div>
        {Visual ? <Visual /> : null}
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
