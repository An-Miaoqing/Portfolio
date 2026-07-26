import type { DesignDecision } from '@/components/case-study/KeyDesignDecisionsSection'

export const gutBegleitetDesignDecisions = {
  introduction:
    'The solution developed through a series of connected decisions. Each one responded to an identified business or communication problem, selected a structure appropriate to that problem, and produced a practical benefit that could be supported by the delivered platform.',
  decisions: [
    {
      icon: 'structure',
      challenge:
        'Growing service offerings created an increasingly complex information structure.',
      decision: 'Modular page architecture',
      rationale:
        'A modular structure preserves clear boundaries between services while allowing shared patterns to connect them.',
      outcome:
        'New service areas can be introduced without reorganising the entire public platform.',
    },
    {
      icon: 'organisation',
      challenge:
        'Different audiences needed to find relevant support without understanding the organisation’s internal structure.',
      decision: 'User-oriented content organisation',
      rationale:
        'Organising content around needs and intended actions creates clearer entry points than reproducing internal categories.',
      outcome:
        'Visitors receive a clearer route from an initial need to relevant service information.',
    },
    {
      icon: 'consistency',
      challenge:
        'Distinct service areas needed individual identities while remaining recognisably part of one organisation.',
      decision: 'Consistent hero system',
      rationale:
        'A shared introductory pattern establishes context and purpose without forcing every service to communicate in the same way.',
      outcome:
        'Each service begins with a predictable orientation while retaining its own message.',
    },
    {
      icon: 'modules',
      challenge:
        'Repeated communication needs risked creating duplicated structures and inconsistent experiences.',
      decision: 'Reusable component library',
      rationale:
        'Shared content, card, action, and form patterns reduce structural repetition and preserve consistency as content changes.',
      outcome:
        'Recurring communication patterns remain consistent and require less duplicated structural work.',
    },
    {
      icon: 'navigation',
      challenge:
        'Important service, consultation, and contact pathways were not sufficiently clear.',
      decision: 'Service-oriented navigation',
      rationale:
        'Prioritising services and meaningful next actions reflects how visitors approach the organisation.',
      outcome:
        'Service discovery and contact pathways are easier to understand within the platform structure.',
    },
    {
      icon: 'content',
      challenge:
        'The organisation needed its information to evolve as services and future digital capabilities developed.',
      decision: 'Structured content model',
      rationale:
        'Separating content purpose from individual presentation patterns supports controlled change without fragmenting the wider experience.',
      outcome:
        'Content can expand within an established hierarchy instead of requiring a new structure for each addition.',
    },
  ] satisfies readonly DesignDecision[],
} as const
