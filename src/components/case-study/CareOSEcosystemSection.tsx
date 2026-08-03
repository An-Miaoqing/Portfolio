import Image from 'next/image'
import styles from './CareOSEcosystemSection.module.css'

const lifecycle = [
  'Request',
  'Booking',
  'Review',
  'Assignment',
  'Visit',
  'Work Record',
  'Follow-up',
] as const

const surfaces = [
  {
    id: 'website',
    number: '01',
    title: 'Public Website',
    actor: 'Customer / Household',
    actions: ['Discover services', 'Book', 'Submit request'],
  },
  {
    id: 'operations',
    number: '02',
    title: 'Operations App',
    actor: 'Office / Manager',
    actions: [
      'Review bookings',
      'Schedule',
      'Assign employees',
      'Monitor service delivery',
    ],
  },
  {
    id: 'employee',
    number: '03',
    title: 'Employee App',
    actor: 'Employee',
    actions: ['View assignments', 'View visits', 'Record completed work'],
  },
] as const

const records = [
  'Users',
  'Companies',
  'Households',
  'Clients',
  'Bookings',
  'Booking Items',
  'Assignments',
  'Visits',
  'Services',
  'Documents',
  'Notifications',
] as const

export function CareOSEcosystemSection() {
  return (
    <section className={styles.section}>
      <div className={styles.frame}>
        <header className={styles.header}>
          <div className={styles.headerTitle}>
            <p className={styles.eyebrow}>The operating system</p>
            <Image
              className={styles.careosLogo}
              src="/case-studies/gutbegleitet/careos-logo.png"
              alt="CareOS"
              width={314}
              height={312}
            />
            <h2>CareOS</h2>
          </div>
          <p>
            A shared operational system connecting customers, office
            coordination, employees and service delivery.
          </p>
        </header>

        <div className={styles.systemVisual}>
          <div className={styles.lifecycle} aria-label="Service lifecycle carried into CareOS">
            <span className={styles.lifecycleLabel}>Service lifecycle</span>
            <ol>
              {lifecycle.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step}</strong>
                  {index < lifecycle.length - 1 ? (
                    <i aria-hidden="true">→</i>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.ecosystem}>
            <p className={styles.surfacesLabel}>Three experiences</p>

            <div className={styles.surfaces}>
              {surfaces.map((surface) => (
                <article
                  className={`${styles.surface} ${styles[surface.id]}`}
                  key={surface.title}
                >
                  <div className={styles.windowBar} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <i>{surface.number}</i>
                  </div>

                  <div className={styles.surfaceBody}>
                    <span className={styles.actor}>{surface.actor}</span>
                    <h3>{surface.title}</h3>
                    <ul>
                      {surface.actions.map((action) => (
                        <li key={action}>
                          <span aria-hidden="true">✓</span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <svg
              className={styles.connectors}
              viewBox="0 0 1000 180"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M166 0 V76 Q166 96 186 96 H480 Q500 96 500 116 V180" />
              <path d="M500 0 V180" />
              <path d="M834 0 V76 Q834 96 814 96 H520 Q500 96 500 116 V180" />
              <circle cx="166" cy="14" r="5" />
              <circle cx="500" cy="14" r="5" />
              <circle cx="834" cy="14" r="5" />
              <circle cx="500" cy="159" r="7" />
            </svg>

            <div className={styles.sharedSignal}>
              <span />
              <p>Connected to the same operational records</p>
              <span />
            </div>

            <article className={styles.core}>
              <div className={styles.coreHeading}>
                <Image
                  className={styles.coreLogo}
                  src="/case-studies/gutbegleitet/careos-logo.png"
                  alt="CareOS"
                  width={314}
                  height={312}
                />
                <div>
                  <span>Shared operational data</span>
                  <h3>CareOS Core</h3>
                </div>
                <p>One foundation.<br />One operational picture.</p>
              </div>

              <ul className={styles.records} aria-label="CareOS shared records">
                {records.map((record, index) => (
                  <li key={record}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {record}
                  </li>
                ))}
              </ul>
            </article>

            <div className={styles.operationalOutcome}>
              <span>Customer request</span>
              <i aria-hidden="true">→</i>
              <strong>One connected operational journey</strong>
              <i aria-hidden="true">→</i>
              <span>Delivered service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
