'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useWorkflowEngine } from '@/components/lifecycle'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import {
  careOSArchitectureLayers,
  getArchitectureLayer,
} from '@/domain/architecture/careos-architecture'
import type { ArchitectureLayerId } from '@/domain/architecture/architecture.types'
import { careOSLifecycle } from '@/domain/lifecycle/careos-lifecycle'
import { ArchitectureLayers } from './ArchitectureLayers'
import { ArchitecturePrinciples } from './ArchitecturePrinciples'
import { AuthoritativeBackend } from './AuthoritativeBackend'
import { DataFlow } from './DataFlow'
import { DomainModel } from './DomainModel'
import { LayerExplorer } from './LayerExplorer'

const initialLayer = careOSArchitectureLayers[0]

export function PlatformArchitecture() {
  const [activeLayerId, setActiveLayerId] = useState<ArchitectureLayerId>(initialLayer.id)
  const engine = useWorkflowEngine(careOSLifecycle, {
    initialHighlightedStageIds: initialLayer.relatedWorkflowStages,
    initialContext: { architectureLayer: initialLayer.id },
  })
  const activeLayer = getArchitectureLayer(activeLayerId)

  const selectLayer = (layerId: ArchitectureLayerId) => {
    const layer = getArchitectureLayer(layerId)
    setActiveLayerId(layer.id)
    engine.animateArchitecture(layer.id, layer.relatedWorkflowStages)
  }

  return (
    <>
      <SectionWrapper
        id="platform-architecture"
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
            <Headline eyebrow="06 / Platform Architecture">
              Many interfaces.<br />One authoritative platform.
            </Headline>
          </div>
          <p className="max-w-[var(--container-copy)] text-body-lg text-pretty text-muted lg:pb-1">
            Every application interacts with the same operational engine. Business rules, workflows and organisational data are managed centrally so every user works from one trusted source of truth.
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-6">
          <LayerExplorer
            activeLayerId={activeLayerId}
            layers={careOSArchitectureLayers}
            onSelect={selectLayer}
          />
          <ArchitectureLayers
            activeLayer={activeLayer}
            activeLayerId={activeLayerId}
            layers={careOSArchitectureLayers}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="authoritative-backend"
        className="bg-canvas py-14 sm:py-16"
      >
        <AuthoritativeBackend />
      </SectionWrapper>

      <SectionWrapper
        id="shared-domain-model"
        className="bg-canvas py-14 sm:py-16"
      >
        <DomainModel onFocusEntity={(entityId) => engine.focusEntity(entityId)} />
        <ArchitecturePrinciples />
      </SectionWrapper>

      <SectionWrapper
        id="architecture-data-flow"
        className="bg-canvas py-14 sm:py-16"
      >
        <DataFlow onFocusDataFlow={(stepId) => engine.focusDataFlow(stepId)} />
      </SectionWrapper>

    </>
  )
}
