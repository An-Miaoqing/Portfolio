# **v0.1 Foundation Prompt**

You are helping me build my professional portfolio website from scratch.

This is a real, long-term project that will evolve incrementally over time. The goal is not to build the entire website in one pass. Start with a small, coherent, working version, review it, and expand it through later iterations.

## **Working Context**

The project should be created in the existing **`Portfolio`** folder.

Before making any changes:
1. Inspect the current working directory and repository structure.
2. Confirm whether the `Portfolio` folder is already the intended project root.
3. Inspect any existing files before modifying or deleting them.
4. If useful, study the CareOS project we built earlier to understand my existing development patterns and project structure.
5. This portfolio has its own purpose, information architecture, and visual identity.

Do not create a nested duplicate project directory such as:

```
Portfolio/
└── portfolio/
```

if `Portfolio` is already the intended project root.

---

# **1. Project Goal**

Build a modern professional portfolio website for a:

**Business Systems Analyst**

My core professional strength is:

Understanding a business → analysing its processes → modelling entities and workflows → designing databases and systems → implementing practical digital solutions.

The website should communicate the connection between:

- business processes
- systems thinking
- requirements
- entities and relationships
- workflows
- data
- technology
- practical implementation

The portfolio should demonstrate that my strength is not simply knowing individual tools such as Python, SQL, React, or PostgreSQL.

The central message is that I can:

understand complex real-world operations, structure them, model them, and turn them into working digital systems.

The website itself should demonstrate:

- clear information architecture
- structured thinking
- strong hierarchy
- system-oriented design
- thoughtful technical implementation
- modern AI-assisted development practices

---

# **2. Long-Term Brand and Information Architecture**

The website may eventually grow into a broader professional platform.

The long-term conceptual structure is:

```
AMQ SYSTEMS
│
├── Home
│
├── Work
│   │
│   ├── Business Systems
│   │   ├── CareOS
│   │   └── Future Business Systems Projects
│   │
│   ├── Data & AI
│   │   ├── Data Analytics Projects
│   │   ├── SQL Projects
│   │   ├── Python Projects
│   │   └── AI-Assisted Development
│   │
│   └── Digital Solutions
│       ├── Gut Begleitet Website
│       └── Future Digital Projects
│
├── Products
│   └── CareOS
│
├── Q Lab
│   ├── Systems Research
│   ├── Cognitive Models
│   ├── MSAF
│   ├── Consciousness Research
│   └── Publications
│
├── About
│   ├── Profile
│   ├── Experience
│   ├── Skills
│   └── Professional Journey
│
├── Resume
│
└── Contact
```

This represents the **long-term information architecture only**.

## **Important**

Do **not** build all of these pages or sections now.

Do not create empty pages merely because they may exist in the future.

Do not make the current website look like a large established company with multiple mature divisions if the current content does not support that.

The architecture should be expandable, but the current implementation should reflect the content that actually exists.

---

# **3. Current Scope — Portfolio v0.1**

For this first milestone, build only:

**The project foundation and homepage.**

The homepage should contain:

1. Navigation
2. Hero
3. Selected Work
4. Short About / Approach section
5. Footer / Contact links

The initial navigation should contain only:

- Work
- About
- Resume
- Contact

Do **not** add the following to the main navigation yet:

- Products
- Q Lab
- Data & AI
- Business Systems
- Digital Solutions

These belong to the long-term architecture and can be introduced when their content is developed.

The underlying structure should remain easy to expand later.

---

# **4. Technology**

Use:

- React
- Vite
- JavaScript
- CSS
- Git / GitHub
- a Vercel-compatible project structure

Do not add unnecessary technology.

For v0.1, do **not** add:

- TypeScript
- Tailwind CSS
- Next.js
- a CMS
- a database
- authentication
- a backend
- a UI component library
- an animation library
- unnecessary npm packages

Use:

- clean React components
- semantic HTML
- well-structured CSS
- CSS variables for the design system

Before making changes, inspect the existing repository and project structure.

If the repository is empty or React/Vite has not yet been initialized, create the appropriate Vite React foundation in the current project root.

Do not create a nested duplicate project directory if the current directory is already the `Portfolio` project root.

---

# **5. Design Philosophy**

The website should feel like it was designed by someone who thinks in systems.

The visual direction should be:

- modern
- intelligent
- high-tech
- structured
- precise
- technical
- professional
- high-quality
- system-oriented

The design should communicate confidence.

## **Avoid**

- generic developer portfolio templates
- “Hello, I am…” layouts
- generic personal portfolio clichés
- skill progress bars
- fake statistics
- fake client logos
- exaggerated claims
- excessive gradients
- overly colourful design
- visual clutter
- generic AI-generated SaaS aesthetics
- decorative elements without a clear function

Every major visual element should have a reason to exist.

## **Rely on**

- strong typography
- generous whitespace
- a clear grid
- strong information hierarchy
- deliberate alignment
- subtle borders
- high-quality spacing
- clear grouping
- responsive composition

Start with a **light-first visual system**:

- warm or neutral off-white background
- near-black primary text
- muted secondary text
- subtle neutral borders

Do not over-design v0.1.

The goal is:

a strong visual and structural foundation that can be refined after I review it in the browser.

---

# **6. Homepage Structure**

## **6.1 Navigation**

Create a clean, minimal, responsive navigation.

### **Left side**

Use a simple temporary identity treatment.

The professional name and final brand identity may change in the future, so do not make the entire visual system dependent on a permanent personal name or complex logo.

The identity treatment should be easy to replace later.

Do not spend time creating a complex logo in v0.1.

### **Right side**

Include:

- Work
- About
- Resume
- Contact

For the homepage-only version, these may link to corresponding page sections where appropriate.

Do not create unnecessary empty routes solely to make the navigation appear complete.

The navigation must work well on:

- desktop
- tablet
- mobile

---

# **6.2 Hero**

Use the following content direction.

### **Eyebrow**

**BUSINESS SYSTEMS ANALYST**

### **Main heading**

**I analyse how businesses work and design digital systems that connect processes, data and technology.**

### **Supporting text**

**I translate business needs into structured processes, data models, workflows and practical digital solutions.**

### **Primary action**

**View selected work**

### **Secondary action**

**About me**

The wording may be structured typographically for visual impact, but do not rewrite it into exaggerated marketing language.

Do not use generic wording such as:

- “I build amazing digital experiences”
- “Passionate developer”
- “Turning dreams into reality”
- “Innovative solutions for the future”

The language should remain precise and credible.

---

# **6.3 Selected Work**

Create a section titled:

**Selected Work**

For v0.1, show only two projects.

The purpose of this section is not simply to display project cards. It should begin communicating the difference between the types of systems and solutions I build.

---

## **Project 1 — CareOS**

### **Category**

**BUSINESS SYSTEMS · SYSTEM DESIGN**

### **Title**

**CareOS**

### **Description**

**A business operating system designed to connect clients, households, employees, services, bookings, visits, payments and operational workflows.**

This is the flagship project and should have greater visual emphasis than the second project.

Relevant areas may be shown subtly:

- Business Analysis
- Process Design
- Data Modelling
- Workflow Design
- System Architecture
- Implementation

Do not invent:

- metrics
- user counts
- revenue
- business results
- technical claims
- features that do not exist

Do not expose:

- confidential information
- private client information
- credentials
- secrets
- internal sensitive data

If the CareOS case-study page does not yet exist, do not build it in this milestone.

Use either:

- a clearly non-breaking placeholder interaction, or
- a structure that can easily receive a real route later

Do not create an empty or fake case-study page.

---

## **Project 2 — Gut Begleitet**

### **Category**

**DIGITAL SOLUTION · WEB**

### **Title**

**Gut Begleitet**

### **Description**

**A public-facing website and booking experience for an everyday-assistance organisation, designed as part of a broader digital operations ecosystem.**

Relevant areas may include:

- Responsive Web Design
- Booking Flow
- Digital Service Experience
- Deployment

Again:

- do not invent metrics
- do not exaggerate the project
- do not create fake results

The visual treatment should distinguish this project from CareOS while keeping both within one coherent design system.

---

# **6.4 About / Approach**

Create a concise section communicating the following ideas:

I work at the intersection of business, systems and technology.

My interdisciplinary background includes:

- international project development
- stakeholder coordination
- research
- information analysis
- data
- digital systems

My current focus is:

understanding business operations and translating them into structured processes, data models, workflows and practical digital solutions.

Keep this section concise.

Do not create a full biography yet.

Do not simply repeat the hero text.

The section should add another layer of understanding about **how I approach problems**.

---

# **6.5 Footer / Contact**

Create a minimal footer.

Include placeholders for:

- Email
- LinkedIn
- GitHub

Do not invent actual:

- email addresses
- profile URLs
- social links

If real links are not already available in the repository, use clearly identifiable placeholders or non-navigating elements that can be replaced later.

Include:

**© 2026**

Do not overbuild the footer.

---

# **7. Code Architecture**

Keep the project clean, readable, and easy to expand.

A possible structure is:

```
src/
├── components/
├── layout/
├── sections/
├── pages/
├── data/
├── styles/
├── App.jsx
└── main.jsx
```

A `ui/` directory may be added only if there are genuinely reusable low-level UI components.

However:

Inspect the repository first and adapt intelligently.

Do not force this structure if the existing project already has a clean and reasonable organisation.

Do not create abstraction for abstraction’s sake.

Examples:

- If a component is used once and is simple, it may not need a reusable abstraction.
- Do not build a design-system component library for five homepage sections.
- Do not create unnecessary configuration layers.
- Do not split every small element into a separate file.

The architecture should be:

simple enough for the current version, structured enough to grow later.

Use semantic HTML and accessible structure.

Use CSS variables for core design tokens such as:

- background colours
- text colours
- muted colours
- border colours
- accent colour
- spacing
- content width
- typography
- border radius, if used

Ensure the homepage works well on:

- desktop
- tablet
- mobile

---

# **8. Development Approach**

Work in this order:

```
Inspect
   ↓
Understand
   ↓
Plan
   ↓
Implement
   ↓
Run
   ↓
Verify
   ↓
Report
   ↓
Stop
```

Do not jump directly into large-scale implementation before understanding the repository.

When encountering an error:

1. Read the actual error.
2. Identify the cause.
3. Fix the cause.
4. Re-run the relevant command.
5. Verify that the fix works.

Do not work around errors by introducing unnecessary dependencies or replacing the architecture unless there is a real reason.

---

# **9. Important Working Rules**

1. Inspect the repository before making changes.
2. Understand the existing project structure before deciding how to modify it.
3. Do not delete useful existing files without understanding their purpose.
4. Keep the implementation strictly focused on v0.1.
5. Do not build the entire long-term architecture.
6. Do not create empty future pages just to represent the sitemap.
7. Do not add dependencies unless genuinely necessary.
8. Do not invent personal information.
9. Do not invent project metrics.
10. Do not invent links, credentials, clients, users, business results, or technical achievements.
11. Do not expose secrets or environment variables.
12. Keep the code readable and maintainable.
13. Prefer a strong, simple implementation over premature abstraction.
14. Preserve a clear path for future expansion.
15. Make the site visually polished enough for browser review.
16. Treat this as the first iteration, not the final design.
17. If something is ambiguous but not blocking, make the simplest reversible decision.
18. Do not continue into additional milestones without my review.

---

# **10. Current Task**

Please complete the following:

## **Step 1 — Inspect**

Inspect:

- the current working directory
- the `Portfolio` folder
- the Git repository state
- existing files
- package configuration, if present
- any existing React/Vite setup

If the earlier website project is locally available and useful as a reference, inspect its structure and implementation patterns, but do not modify it.

---

## **Step 2 — Brief Plan**

Before major implementation, briefly report:

- what currently exists
- whether the current folder is already the correct project root
- whether React/Vite is already initialized
- what you plan to create or change

Keep this brief and practical.

---

## **Step 3 — Foundation**

Create or clean up the React/Vite foundation as needed.

Do not create a nested duplicate project.

Keep dependencies minimal.

---

## **Step 4 — Implement Portfolio v0.1**

Implement only the homepage foundation:

- Navigation
- Hero
- Selected Work
- About / Approach
- Footer / Contact links

Do not build:

- CareOS case-study pages
- Gut Begleitet case-study pages
- Products
- Q Lab
- the full About page
- a full Resume page
- a backend
- a CMS

---

## **Step 5 — Verify**

Run the appropriate checks.

At minimum:

- ensure the project starts successfully
- ensure the production build succeeds
- check for obvious errors
- run lint if linting is already configured

Do not claim that something works unless you have actually verified it.

---

## **Step 6 — Final Report**

When v0.1 is complete, summarise:

### **What you created**

A concise description of the implemented homepage.

### **Files changed**

List the important files created or modified.

### **Verification**

State which commands were run and whether they succeeded.

### **How to run locally**

Provide the exact command needed to start the project.

### **Remaining placeholders**

List any information that still needs real values, such as:

- identity / brand name
- email
- LinkedIn
- GitHub
- Resume PDF
- project links

### **Suggested next review**

Briefly identify what I should visually inspect in the browser.

---

# **Stop Condition**

After the **Portfolio v0.1 homepage foundation** is complete, verified, and summarised:

**STOP.**

Do not proceed automatically to:

- CareOS case studies
- Products
- Q Lab
- additional pages
- major animation
- further design iterations
- deployment
- branding decisions

I will review the first version visually before deciding the next iteration.