import type { ImplementationHighlightsContent } from '@/components/case-study/ImplementationHighlightsSection'

export const gutBegleitetImplementationHighlights = {
  introduction:
    'The following examples show how business analysis translated into working parts of the Gut Begleitet platform. Each highlight traces a single decision from the operational problem it addressed, through the implementation delivered, to the value it created for the organisation. Together they illustrate a consistent approach: understanding real service needs first, then shaping structure, content, and interface decisions around them rather than building isolated features without a clear operational purpose.',
  highlights: [
    {
      title: 'End-to-End Booking Workflow',
      businessProblem:
        'The organisation needed a structured way to receive and manage service requests instead of relying on phone calls and informal messages, which made it difficult to track service needs consistently across households and staff.',
      implementedSolution:
        'A guided booking journey collects the appointment, service, and household details, validates the input, and submits it through a single REST API boundary into Supabase PostgreSQL, where it becomes a structured booking record inside a protected internal workflow.',
      businessValue:
        'Every request follows the same structure, giving staff consistent, centralised information the moment it arrives and a reliable operational foundation for scheduling and coordination.',
      visual: {
        type: 'flow',
        label: 'Simplified booking workflow diagram',
        steps: [
          'Booking Form',
          'Validation',
          'REST API',
          'Supabase PostgreSQL',
          'Internal Booking Management',
        ],
      },
    },
    {
      title: 'Reusable Component System',
      businessProblem:
        'Multiple service pages, the booking flow, and organisational content all needed a consistent look and interaction pattern, without duplicating layout and styling work for every new page the organisation might need.',
      implementedSolution:
        'Shared building blocks — hero sections, cards, call-to-action panels, timelines, and forms — were built once and reused across every service, informational, and booking page, assembled through a common layout system.',
      businessValue:
        'New pages and services can be assembled from existing, tested building blocks rather than rebuilt from scratch, reducing design drift and the effort required to expand the platform.',
      visual: {
        type: 'component-system',
        components: ['Hero', 'Card', 'CTA Panel', 'Timeline', 'Form', 'Layout'],
        outputs: ['Service Pages', 'About & Contact', 'Booking Flow'],
      },
    },
    {
      title: 'Content Architecture',
      businessProblem:
        'Service descriptions, pricing information, and organisational messaging change more often than the interface itself, and rebuilding pages for every content update was not a sustainable way to keep the site current.',
      implementedSolution:
        'Content is defined separately from presentation, structured by purpose in dedicated content files, and passed into presentation components that render it consistently — so editing information never requires touching layout code.',
      businessValue:
        'Content can evolve independently of design, letting the organisation update service details or messaging without a developer reworking the interface each time — and the same pattern is reusable for future case studies.',
      visual: {
        type: 'flow',
        label: 'Content to components to pages diagram',
        steps: ['Structured Content', 'Presentation Components', 'Public Pages'],
      },
    },
    {
      title: 'Responsive User Experience',
      businessProblem:
        'The platform serves older adults, family members arranging care on their behalf, and internal staff, who access it from a wide range of devices — from desktop browsers to phones — each requiring the same clarity.',
      implementedSolution:
        'Layouts adapt through a shared responsive grid, with typography, spacing, and navigation adjusting predictably from desktop to tablet to mobile, so every screen size presents the same information in a readable, accessible order.',
      businessValue:
        'Visitors get a consistent, usable experience regardless of device or familiarity with technology, without the organisation needing to design or maintain separate mobile and desktop experiences.',
      visual: {
        type: 'responsive',
        breakpoints: [
          { label: 'Desktop', width: '1440px' },
          { label: 'Tablet', width: '768px' },
          { label: 'Mobile', width: '375px' },
        ],
      },
    },
    {
      title: 'Production Delivery',
      businessProblem:
        'The organisation needed the platform to be reliably updatable after launch, without an ad-hoc release process that risked downtime or inconsistent versions between the live site, the booking API, and its data.',
      implementedSolution:
        "Changes are pushed to GitHub, built, and deployed to Vercel through a repeatable pipeline, running alongside the booking system's backend API and Supabase database — so the public website and its operational data stay in sync.",
      businessValue:
        'A predictable deployment path reduces the risk of manual release errors and gives the organisation confidence that updates can be delivered without disrupting the live booking service.',
      visual: {
        type: 'flow',
        label: 'Production delivery pipeline diagram',
        steps: ['GitHub Repository', 'Vercel Build & Deploy', 'Live Public Website'],
      },
    },
  ],
} as const satisfies ImplementationHighlightsContent
