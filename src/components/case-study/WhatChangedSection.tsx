import Image from 'next/image'
import styles from './WhatChangedSection.module.css'

const outcomes = [
  {
    number: '01',
    title: 'Structured requests',
    description: 'Customer requests become structured operational records instead of isolated messages.',
  },
  {
    number: '02',
    title: 'Connected coordination',
    description: 'Bookings, assignments, visits and completed work remain connected throughout the service lifecycle.',
  },
  {
    number: '03',
    title: 'Role-specific tools',
    description: 'Customers, office staff and employees interact with interfaces designed around their part of the work.',
  },
  {
    number: '04',
    title: 'Shared operational context',
    description: 'CareOS provides one underlying information structure across the organisation.',
  },
] as const

const closingSequence = [
  ['Customer', 'The person asking for help'],
  ['Gut Begleitet Website', 'The public point of entry'],
  ['CareOS', 'The connected operational center'],
  ['Operations + Employee', 'The tools used to coordinate and deliver'],
  ['Service delivery', 'The work that happens between people'],
] as const

export function WhatChangedSection() {
  return (
    <section className={styles.section}>
      <div className={styles.frame}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>What changed</p>
          <h2>From fragmented coordination<br />to a connected operation.</h2>
          <p>
            The project created a shared operational foundation for coordinating
            customers, bookings, employees and service delivery.
          </p>
        </header>

        <ol className={styles.outcomes}>
          {outcomes.map((outcome) => (
            <li key={outcome.number}>
              <span>{outcome.number}</span>
              <div>
                <h3>{outcome.title}</h3>
                <p>{outcome.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.closingVisual}>
          <div className={styles.sequence}>
            <p className={styles.sequenceLabel}>One connected operation</p>
            <ol>
              {closingSequence.map(([title, caption], index) => (
                <li className={title === 'CareOS' ? styles.careosStep : undefined} key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><strong>{title}</strong><small>{caption}</small></div>
                  {index < closingSequence.length - 1 ? <i aria-hidden="true">↓</i> : null}
                </li>
              ))}
            </ol>
          </div>

          <figure className={styles.closingPhoto}>
            <Image
              src="/case-studies/gutbegleitet/815938ca-c2a2-4ebd-bbd1-e3f134110863.jpeg"
              alt="A Gut Begleitet employee walking two dogs in Vienna"
              fill
              sizes="(max-width: 760px) 100vw, 56vw"
            />
            <figcaption>
              <span>Service delivery</span>
              <strong>Connected systems support a human service.</strong>
            </figcaption>
          </figure>
        </div>

        <footer className={styles.finalStatement}>
          <p>
            <span>Understanding the work came first</span>
            <strong>The system followed</strong>
          </p>
          <small>Business Systems Analysis · Process Design · Data Modelling · Product Development</small>
        </footer>
      </div>
    </section>
  )
}
