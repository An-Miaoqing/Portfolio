# CareOS — Six-Slide Introduction Plan

## Presentation purpose

Introduce CareOS as a Business Operating System that connects customer access, operational coordination, service execution, data, and finance. Keep the story understandable to business leaders while showing the depth of the underlying system design.

## Narrative arc

```text
What CareOS is
  → Why the business needs it
  → How work moves through it
  → How the system is structured
  → Who uses each application
  → Which technologies make it work
```

---

## Slide 1 — What is CareOS?

### Slide title

**CareOS — One operating system for care operations**

### Primary message

CareOS is a home-care management platform designed for organisations that provide everyday assistance and companionship services for seniors.

### On-slide content

- Connects customer requests, business operations, service delivery, and finance.
- Creates one structured operational model across clients, households, services, bookings, visits, employees, and payments.
- Supports the full journey from requesting help to completing and settling delivered work.

### Suggested visual

A simple ecosystem diagram with **CareOS** at the centre and four connected areas:

```text
Customer Access     Operations
        \             /
             CareOS
        /             \
Employee Execution   Business & Finance
```

### Speaker note

Position CareOS as a system for running the operation—not as a collection of screens or an isolated booking application.

---

## Slide 2 — What business problem does it solve?

### Slide title

**Turning fragmented care coordination into one operational system**

### Primary message

Everyday-assistance organisations must coordinate people, schedules, service requests, customer information, delivered work, and payment processes without losing operational context.

### On-slide content

- Customer requests must become structured and actionable work.
- Coordinators need visibility across bookings, visits, employees, availability, and service status.
- Employees need the correct assignment and customer context at the right time.
- Actual service delivery must connect reliably to billing, payment, and payroll workflows.
- Business rules must remain consistent across every application.

### Suggested visual

Show two states separated by a directional transition:

```text
Disconnected requests, calendars, records and follow-up
                         ↓
        One governed operational workflow in CareOS
```

Use icons or labelled blocks only. Do not add unsupported performance claims or statistics.

### Speaker note

Emphasise administrative friction, coordination complexity, and fragmented information. Avoid claiming quantified improvements until real evidence is available.

---

## Slide 3 — What is the business workflow?

### Slide title

**From customer request to completed and settled work**

### Primary message

CareOS separates commercial, operational, execution, and financial lifecycles while keeping them connected through one traceable workflow.

### On-slide workflow

```text
1. Customer or staff creates a service request
                    ↓
2. Booking enters review and acceptance
                    ↓
3. One or more Visits are scheduled
                    ↓
4. Qualified, available Employee receives an Assignment
                    ↓
5. Employee accepts → checks in → checks out
                    ↓
6. Service closeout records actual delivered work
                    ↓
7. BillableItem captures the financial charge
                    ↓
8. Cash settlement or monthly invoicing follows
                    ↓
9. Required Visit completion rolls up to Booking completion
```

### Domain distinction callout

```text
Booking ≠ Visit ≠ Assignment ≠ BillableItem ≠ Payment
```

- **Booking:** the service request and company-acceptance lifecycle.
- **Visit:** an individual scheduled service occurrence.
- **Assignment:** one employee's work on a Visit.
- **BillableItem:** a snapshot of chargeable delivered work.
- **Payment / Invoice:** separate financial events.

### Suggested visual

A horizontal swimlane with four rows:

1. Customer
2. Coordination / Admin
3. Employee execution
4. Finance

### Speaker note

This slide should carry the systems-analysis story. Explain that status values are not interchangeable: the backend protects the boundaries between request, delivery, employee work, and finance.

---

## Slide 4 — CareOS system architecture

### Slide title

**Three applications connected to one authoritative system core**

### Primary message

Each application provides a role-specific experience, while the API, service layer, and database preserve shared business truth.

### On-slide architecture

```text
Customer Website        Admin Application        Employee App
React + Vite            React + Vite             Expo + React Native
        \                     |                         /
         +---------------- REST API ------------------+
                               |
                  Express + TypeScript API
                               |
            Route → Controller → Service → Prisma
                               |
                    Supabase PostgreSQL
```

### Architecture principles

- Frontends display, guide, and collect input; they never access the database directly.
- Backend services enforce business rules, lifecycle transitions, authorisation, and transactions.
- Prisma owns typed database access, schema, and migrations.
- Canonical domain values remain stable; applications localise them for users.
- Authentication derives company and employee scope on the server.

### Suggested visual

Use a layered architecture diagram. Add small side labels for cross-cutting concerns:

`Authentication · Localisation · Notifications · Validation · Auditability`

### Speaker note

Focus on boundaries and responsibility rather than code-level detail. The key message is that all interfaces operate on the same governed domain model.

---

## Slide 5 — Applications

### Slide title

**Purpose-built experiences for customers, coordinators, and employees**

### Primary message

CareOS presents the same operating system through three interfaces, each limited to the context and actions its users need.

### Three-column content

#### 1. Customer Website

- Presents the organisation and service catalogue.
- Allows customers or families to submit booking requests.
- Provides a simple, accessible acknowledgement flow.
- Creates `REQUESTED` Bookings through the CareOS API.

**Visual placeholder:** `[ Customer Website Screenshot ]`

#### 2. Admin Application

- Internal workspace for managers, office staff, and dispatchers.
- Manages bookings, visits, scheduling, employees, clients, households, and services.
- Provides calendar planning, notifications, finance, invoices, payroll, and reports workspaces.
- Keeps commercial Booking status separate from Visit execution status.

**Visual placeholder:** `[ Admin Application Screenshot ]`

#### 3. Employee App

- Secure mobile workspace scoped to the authenticated employee.
- Shows assigned, upcoming, active, and historical work.
- Supports assignment response, check-in, check-out, and reviewed service closeout.
- Supports employee notifications and cash-custody visibility.

**Visual placeholder:** `[ Employee App Screenshot ]`

### Speaker note

Explain the applications through user responsibilities. Avoid presenting them as three separate products; they are coordinated access points to one operating system.

---

## Slide 6 — Technologies applied

### Slide title

**A production-minded full-stack technology foundation**

### Primary message

The technology stack supports clear architectural boundaries, shared type safety, transactional business rules, responsive web interfaces, and mobile service execution.

### On-slide technology layers

| Layer | Technologies applied | Purpose |
| --- | --- | --- |
| Public and Admin web | React, TypeScript, Vite, React Router | Responsive customer and operational interfaces |
| Admin data and planning | Axios, TanStack Query, FullCalendar | API state, operational data, scheduling and calendar views |
| Employee mobile | Expo, React Native, Expo Router, SecureStore, TanStack Query | Authenticated mobile workflows and secure session storage |
| Backend | Node.js, TypeScript, Express, Zod | REST APIs, validation, lifecycle rules and business services |
| Data | Prisma 7, PostgreSQL, Supabase | Relational domain model, migrations and persistent storage |
| Authentication and security | JWT, bcrypt, role and company scoping | Protected admin and employee access |
| Verification and delivery | Bruno, TypeScript checks, Prisma validation, Git | API verification, schema checks and controlled development workflow |
| Deployment target | Vercel/static frontend hosting, Node.js API hosting, Supabase PostgreSQL | Intended separation of frontend, API and managed database hosting |

### Suggested visual

A vertical technology stack aligned with the architecture from Slide 4. Highlight the flow:

```text
Experience → API → Business Services → Data → Deployment
```

### Speaker note

Connect each technology to a system responsibility. The point is not the number of tools; it is how they support the business model and operational safeguards.

---

## Presentation design guidance

- Use the portfolio's light, blue–violet gradient system.
- Keep one central message and one primary visual per slide.
- Prefer diagrams, workflows, and application frames over paragraphs.
- Use real CareOS screenshots only after they have been selected and checked for confidential data.
- Do not add metrics, business outcomes, user counts, or performance claims without verified evidence.
- Keep technical identifiers out of the main story unless they clarify a domain boundary.

## Primary documentation sources

- [CareOS Vision](../../CareOS/careos-docs/00%20Vision.md)
- [System Architecture](../../CareOS/careos-docs/01%20Architecture.md)
- [Business Rules](../../CareOS/careos-docs/02%20Business%20Rules.md)
- [Backend](../../CareOS/careos-docs/03%20Backend.md)
- [Frontend](../../CareOS/careos-docs/04%20Frontend.md)
- [Development Workflow](../../CareOS/careos-docs/06%20Development%20Workflow.md)
- [Module Architecture](../../CareOS/careos-docs/07-Module-Architecture.md)
- [Admin App](../../CareOS/careos-docs/09%20Admin%20App.md)
- [Employee App](../../CareOS/careos-docs/10%20Employee%20App.md)
- [Billing and Payments](../../CareOS/careos-docs/12%20Billing%20and%20Payments.md)
