# CareOS Portfolio

Production Sprints 1–3.5 present CareOS as an enterprise platform for service organisations, explain how work moves through it, and map collaboration across its business domains. The active application uses Next.js App Router, React, TypeScript, Tailwind CSS and Framer Motion.

Current production scope:

- Full-viewport CareOS hero
- Interactive Platform Vision connecting Customer Management, Operations, Workforce, Finance and Reporting
- Data-driven Operational Lifecycle from booking sources through reporting
- Reusable lifecycle model and interaction components for future portfolio chapters
- Business Domains chapter driven by the shared workflow engine
- Public workflow commands for stage, domain, application and architecture perspectives
- Ownership badges, reporting references and guided navigation between chapters

The previous React/Vite iteration is preserved in `legacy-vite/` and is excluded from the production build.

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
