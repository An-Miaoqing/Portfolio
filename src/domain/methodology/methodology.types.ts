export type MethodologyStep = {
  id: string
  name: string
  purpose: string
  deliverables: readonly string[]
  questions: readonly string[]
}

export type AnalysisPractice = {
  id: string
  name: string
  outcome: string
}

export type SystemDesignStage = {
  id: string
  name: string
  explanation: string
}

export type MethodologyPrinciple = {
  id: string
  name: string
  connection: string
}

export type SkillGroup = {
  id: string
  name: string
  capabilities: readonly string[]
}

export type CaseStudyEvidence = {
  id: string
  name: string
  chapter: string
}

export type ContactItem = {
  id: string
  label: string
  value: string
  href?: string
  placeholder?: boolean
}
