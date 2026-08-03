import Image from 'next/image'
import { CaseStudySwitcher } from '@/components/shared/CaseStudySwitcher'
import styles from './GutBegleitetOpening.module.css'

const metadata = [
  {
    label: 'Role',
    value:
      'Business Systems Analysis · Process Design · Data Modelling · Product Development',
  },
  { label: 'Platform', value: 'Gut Begleitet + CareOS' },
  { label: 'Context', value: 'Community care · Vienna' },
] as const

type JourneyStep = {
  role: string
  action: string
  image?: string
  alt?: string
}

const journey: readonly JourneyStep[] = [
  {
    role: 'Customer / family',
    action: 'Request assistance',
    image: '/case-studies/gutbegleitet/casestudy1.png',
    alt: 'An older couple using a phone together to request assistance',
  },
  {
    role: 'Office / coordination',
    action: 'Review and organise',
  },
  {
    role: 'Employee',
    action: 'Receive assignment',
    image: '/case-studies/gutbegleitet/casestudy2.png',
    alt: 'A Gut Begleitet employee receiving a service assignment',
  },
  {
    role: 'Service visit',
    action: 'Deliver assistance',
    image: '/case-studies/gutbegleitet/casestudy3.jpeg',
    alt: 'A Gut Begleitet service visit with an older customer',
  },
  {
    role: 'Operational record',
    action: 'Record what happened',
  },
]

const lifecycle = [
  { number: '01', name: 'Request', actor: 'Client / household' },
  { number: '02', name: 'Booking', actor: 'Client / household' },
  { number: '03', name: 'Review', actor: 'Office / manager' },
  { number: '04', name: 'Assignment', actor: 'Office / manager' },
  { number: '05', name: 'Visit', actor: 'Employee' },
  { number: '06', name: 'Service Delivery', actor: 'Employee' },
  { number: '07', name: 'Work Record', actor: 'Employee' },
  { number: '08', name: 'Follow-up', actor: 'Office / manager' },
] as const

export function GutBegleitetOpening() {
  return (
    <>
      <section className={styles.introduction} id="top">
        <Image
          className={styles.heroBackground}
          src="/case-studies/gutbegleitet/service-hero.jpeg"
          alt="A Gut Begleitet employee and an older adult caring for plants together"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.frame}>
          <div className={styles.introHeader}>
            <div className={styles.caseStudySwitcher}>
              <CaseStudySwitcher current="gutbegleitet" />
            </div>
            <Image
              className={styles.brandLogo}
              src="/case-studies/gutbegleitet/gutbegleitet-logo.png"
              alt="Gut Begleitet"
              width={96}
              height={96}
              priority
            />
            <h1>From everyday service to connected operations</h1>
            <p className={styles.introCopy}>
              Gut Begleitet provides everyday assistance and community services
              for older adults in Vienna. The project began with understanding
              how this work actually happens — and how digital systems could
              support it.
            </p>
          </div>

          <p className={styles.heroCaption}>Everyday assistance, delivered person to person.</p>

          <dl className={styles.metadata}>
            {metadata.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.journeySection}>
        <div className={styles.frame}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Operating model</p>
            <h2>How Gut Begleitet Works</h2>
            <p>
              A service request moves through several people, decisions and
              records before assistance is actually delivered.
            </p>
          </div>

          <div className={styles.journey}>
            {journey.map((step, index) => (
              <article
                className={`${styles.journeyStep} ${step.image ? styles.journeyStepPhoto : styles.journeyStepText}`}
                key={step.role}
              >
                {step.image ? (
                  <Image
                    src={step.image}
                    alt={step.alt ?? ''}
                    fill
                    sizes="(max-width: 720px) 100vw, 34vw"
                  />
                ) : null}
                <div className={styles.stepCaption}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{step.role}</p>
                  <strong>{step.action}</strong>
                </div>
                {index < journey.length - 1 ? (
                  <span className={styles.journeyArrow} aria-hidden="true">→</span>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.lifecycleSection}>
        <div className={styles.frame}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Service lifecycle</p>
            <h2>From Request to Delivered Service</h2>
          </div>

          <div className={styles.lifecycleLayout}>
            <div className={styles.lifecycleDiagram}>
              <div className={styles.actorKey} aria-label="Primary actors">
                <span className={styles.client}>Client / household</span>
                <span className={styles.office}>Office / manager</span>
                <span className={styles.employee}>Employee</span>
              </div>

              <ol>
                {lifecycle.map((step, index) => {
                  const actorClass = step.actor.startsWith('Client')
                    ? styles.client
                    : step.actor.startsWith('Office')
                      ? styles.office
                      : styles.employee

                  return (
                    <li key={step.number}>
                      <span className={styles.lifecycleNumber}>{step.number}</span>
                      <strong>{step.name}</strong>
                      <span className={`${styles.actor} ${actorClass}`}>
                        {step.actor}
                      </span>
                      {index < lifecycle.length - 1 ? (
                        <span className={styles.downArrow} aria-hidden="true">↓</span>
                      ) : null}
                    </li>
                  )
                })}
              </ol>
            </div>

            <aside className={styles.systemQuestion}>
              <span>System question</span>
              <p>
                “How can one information structure support the complete journey
                from a customer&apos;s request to the employee delivering the
                service?”
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
