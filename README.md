# CareOS Portfolio

Production Sprints 1–8 present CareOS as an enterprise platform for service organisations, explain how work moves through it, map collaboration across its business domains, show how role-specific applications share one platform, reveal the authoritative architecture behind them, connect that architecture to concrete engineering decisions, demonstrate how the platform can evolve without replacing its operational foundation, and conclude with the methodology behind its design. The active application uses Next.js App Router, React, TypeScript, Tailwind CSS and Framer Motion.

## Routes

- `/` — Violet AMQ Systems portfolio homepage
- `/work` — Expandable selected-work page with the CareOS project introduction and slideshow
- `/case-study` — Complete Sprint-based CareOS case study
- `/about` — Personal editorial About page
- `/contact` — Dedicated portfolio contact page

Current production scope:

- Full-viewport CareOS hero
- Interactive Platform Vision connecting Customer Management, Operations, Workforce, Finance and Reporting
- Data-driven Operational Lifecycle from booking sources through reporting
- Reusable lifecycle model and interaction components for future portfolio chapters
- Business Domains chapter driven by the shared workflow engine
- Public workflow commands for stage, domain, application and architecture perspectives
- Ownership badges, reporting references and guided navigation between chapters
- Platform Applications chapter with shared workflow and business-domain connections
- Platform Architecture chapter covering authoritative backend rules, shared entities and operational data flow
- Engineering Decisions chapter covering principles, request handling, technology choices, API design, type safety, project structure, deployment and scalability
- Product Evolution chapter covering phased growth, platform maturity, architectural reuse, expansion and future integrations
- About & Methodology chapter connecting business analysis, system design, capabilities and the completed CareOS case study

The original React/Vite source remains preserved in `legacy-vite/`. Its portfolio components and CareOS slideshow are now consumed by the unified Next.js application, while Next.js owns routing and production delivery.

## Local development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Production

```bash
npm run build
npm start
```
