'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useWorkflowEngine } from '@/components/lifecycle'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import {
  careOSApplications,
  getApplicationStages,
  getCareOSApplication,
} from '@/domain/applications/careos-applications'
import type { CareOSApplicationId } from '@/domain/applications/application.types'
import { careOSLifecycle } from '@/domain/lifecycle/careos-lifecycle'
import { ApplicationNavigator } from './ApplicationNavigator'
import { ApplicationPanel } from './ApplicationPanel'
import { ApplicationWorkflow } from './ApplicationWorkflow'
import { PlatformModel } from './PlatformModel'
import { SharedRealityCard } from './SharedRealityCard'

const initialApplication = careOSApplications[0]

export function PlatformApplications() {
  const [activeApplicationId, setActiveApplicationId] = useState<CareOSApplicationId>(
    initialApplication.id,
  )
  const engine = useWorkflowEngine(careOSLifecycle, {
    initialHighlightedStageIds: initialApplication.workflowStageIds,
    initialContext: { application: initialApplication.id },
  })
  const activeApplication = getCareOSApplication(activeApplicationId)

  const selectApplication = (applicationId: CareOSApplicationId) => {
    const application = getCareOSApplication(applicationId)
    setActiveApplicationId(application.id)
    engine.highlightApplication(application.id, getApplicationStages(application.id))
  }

  return (
      <SectionWrapper
        id="applications"
        className="bg-canvas py-14 sm:py-16"
      >
        <motion.div
          variants={revealItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="mb-12 grid gap-8 lg:mb-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end"
        >
          <div>
            <Headline eyebrow="04 / Platform Applications">
              One platform<br />Different interfaces for different responsibilities
            </Headline>
          </div>
          <p className="max-w-[var(--container-copy)] text-body-lg text-pretty text-muted lg:pb-1">
            Every user interacts with CareOS through an interface designed for their role. Although each application has a different experience, they all operate on the same operational workflow, business rules and shared data.
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-6">
          <ApplicationNavigator
            activeApplicationId={activeApplicationId}
            applications={careOSApplications}
            onSelect={selectApplication}
          />
          <ApplicationPanel application={activeApplication} />
        </div>

        <div className="mt-8 lg:mt-6">
          <ApplicationWorkflow application={activeApplication} engine={engine} />
        </div>

        <div className="mt-8 grid gap-6 lg:mt-6 lg:grid-cols-[0.8fr_1.2fr]">
          <PlatformModel />
          <SharedRealityCard />
        </div>
      </SectionWrapper>
  )
}
