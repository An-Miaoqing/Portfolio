'use client'

import { useState } from 'react'
import { type ApplicationId, applicationModel, platformApiModel } from '@/domain/engineering/api-model'
import { serviceModel } from '@/domain/engineering/service-model'
import { ApiGatewayDiagram } from './ApiGatewayDiagram'
import { ApplicationDetail } from './ApplicationDetail'

export function ApplicationApiExplorer() {
  const [selectedId, setSelectedId] = useState<ApplicationId>('website')

  const activeApp = applicationModel.find((app) => app.id === selectedId)!
  const usesApis = activeApp.usesApis.map((id) => {
    const api = platformApiModel.find((candidate) => candidate.id === id)
    return { id, name: api?.name ?? id }
  })

  return (
    <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-start">
      <div className="rounded-panel border border-line bg-surface p-5 shadow-card sm:p-8">
        <h3 className="sr-only">Interactive platform communication diagram</h3>
        <ApiGatewayDiagram onSelect={setSelectedId} selectedId={selectedId} />
      </div>

      <ApplicationDetail
        businessServices={activeApp.businessServices.map((id) => {
          const service = serviceModel.find((candidate) => candidate.id === id)
          return { id, name: service?.name ?? id }
        })}
        exampleInteraction={activeApp.exampleInteraction}
        id={activeApp.id}
        isPlanned={activeApp.isPlanned}
        name={activeApp.name}
        responsibilities={activeApp.responsibilities}
        usesApis={usesApis}
      />
    </div>
  )
}
