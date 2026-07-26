export type EngineeringPrinciple = {
  id: string
  title: string
  statement: string
  impact: string
}

export type EngineeringFlowStep = {
  id: string
  name: string
  description?: string
}

export type TechnologyDecision = {
  id: string
  category: string
  technology: string
  reason: string
  benefits: readonly string[]
}

export type ApiDefinition = {
  id: string
  name: string
  purpose: string
  sharedRule: string
}

export type ProjectLayer = {
  id: string
  name: string
  purpose: string
}

export type ScalabilityCapability = {
  id: string
  name: string
  explanation: string
}
