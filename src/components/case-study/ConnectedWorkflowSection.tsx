import Image from 'next/image'
import styles from './ConnectedWorkflowSection.module.css'

const recordChain = [
  ['Request', 'Submitted'],
  ['Booking', 'Reviewed'],
  ['Assignment', 'Sophie G.'],
  ['Visit', 'Completed'],
  ['Work record', 'Recorded'],
] as const

export function ConnectedWorkflowSection() {
  return (
    <section className={styles.section}>
      <div className={styles.frame}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Connected workflow</p>
            <h2>One booking through CareOS</h2>
          </div>
          <div className={styles.legend} aria-label="Visual source legend">
            <span><i className={styles.liveDot} />Live interface</span>
            <span><i className={styles.modelDot} />Implemented · simplified view</span>
          </div>
        </header>

        <div className={styles.story}>
          <article className={styles.publicScene}>
            <div className={styles.sceneHeading}>
              <div>
                <p>Customer / household</p>
                <h3>Request becomes booking</h3>
              </div>
              <span className={styles.sourceBadge}><i className={styles.liveDot} />Live public website</span>
            </div>

            <figure className={styles.bookingFigure}>
              <Image
                src="/case-studies/gutbegleitet/booking-request-ui.png"
                alt="The implemented Gut Begleitet public booking interface showing appointment selection"
                fill
                sizes="(max-width: 1240px) 100vw, 1240px"
              />
              <figcaption>
                <span>Request</span>
                <i aria-hidden="true">→</i>
                <strong>Structured booking</strong>
              </figcaption>
            </figure>

            <div className={styles.bookingData} aria-label="Booking record created from the request">
              <span>Client <strong>G. Berger</strong></span>
              <span>Household <strong>Berger</strong></span>
              <span>Service <strong>Shopping &amp; errands</strong></span>
              <span>Appointment <strong>5 Aug · 10:30</strong></span>
            </div>
          </article>

          <div className={styles.handoff} aria-hidden="true">
            <span />
            <strong>Same booking</strong>
            <i>↓</i>
          </div>

          <article className={styles.officeScene}>
            <div className={styles.sceneHeading}>
              <div>
                <p>Office / manager</p>
                <h3>Review and assign</h3>
              </div>
              <span className={styles.sourceBadge}><i className={styles.modelDot} />Implemented workflow · simplified view</span>
            </div>

            <div className={styles.operationsWindow} aria-label="Simplified representation of the implemented Operations App booking workflow">
              <div className={styles.appBar}>
                <div className={styles.windowDots} aria-hidden="true"><span /><span /><span /></div>
                <strong>CareOS Operations</strong>
                <span>Office workspace</span>
              </div>

              <div className={styles.operationsBody}>
                <nav aria-label="Operations App modules">
                  <strong>CareOS</strong>
                  <span className={styles.activeNav}>Bookings <i>1</i></span>
                  <span>Visits</span>
                  <span>Calendar</span>
                  <span>Employees</span>
                </nav>

                <div className={styles.bookingReview}>
                  <div className={styles.reviewTopline}>
                    <div>
                      <span>Booking review</span>
                      <h4>Shopping &amp; errands</h4>
                    </div>
                    <strong>Requested</strong>
                  </div>

                  <dl>
                    <div><dt>Client</dt><dd>G. Berger</dd></div>
                    <div><dt>Household</dt><dd>Berger</dd></div>
                    <div><dt>Schedule</dt><dd>5 Aug · 10:30</dd></div>
                  </dl>

                  <div className={styles.assignmentPanel}>
                    <div>
                      <span>Eligible employee</span>
                      <strong>Sophie Gruber</strong>
                    </div>
                    <button type="button" tabIndex={-1}>Assign employee</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.transitionLine}>
              <span>Review</span><i>→</i><strong>Assignment created</strong>
            </div>
          </article>

          <div className={styles.handoff} aria-hidden="true">
            <span />
            <strong>Assigned visit</strong>
            <i>↓</i>
          </div>

          <article className={styles.fieldScene}>
            <div className={styles.fieldCopy}>
              <div className={styles.sceneHeading}>
                <div>
                  <p>Employee</p>
                  <h3>See the visit. Deliver the service.</h3>
                </div>
                <span className={styles.sourceBadge}><i className={styles.modelDot} />Implemented app · simplified view</span>
              </div>

              <div className={styles.employeePhone} aria-label="Simplified representation of the implemented Employee App visit interface">
                <div className={styles.phoneTopbar}><span>CareOS</span><i>●</i></div>
                <p>Today</p>
                <h4>Your assigned visit</h4>
                <div className={styles.visitCard}>
                  <div><strong>10:30</strong><span>Accepted</span></div>
                  <h5>Shopping &amp; errands</h5>
                  <p>G. Berger · 2 hours</p>
                  <dl>
                    <div><dt>Address</dt><dd>Vienna</dd></div>
                    <div><dt>Visit</dt><dd>5 Aug</dd></div>
                  </dl>
                  <div className={styles.visitActions}>
                    <button type="button" tabIndex={-1}>View details</button>
                    <button type="button" tabIndex={-1}>Check in</button>
                  </div>
                </div>
                <div className={styles.phoneStatus}>
                  <span>Visit preparation</span>
                  <strong>Ready to begin</strong>
                  <p>Service details and client context are available for the visit.</p>
                </div>
              </div>
            </div>

            <figure className={styles.servicePhoto}>
              <Image
                src="/case-studies/gutbegleitet/service-shopping.jpeg"
                alt="A Gut Begleitet employee helping an older adult with shopping"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
              <figcaption><span>Physical world</span><strong>Service delivered person to person</strong></figcaption>
            </figure>
          </article>

          <div className={styles.handoff} aria-hidden="true">
            <span />
            <strong>Completed visit</strong>
            <i>↓</i>
          </div>

          <article className={styles.historyScene}>
            <div className={styles.sceneHeading}>
              <div>
                <p>CareOS / office</p>
                <h3>One connected operational history</h3>
              </div>
              <span className={styles.sourceBadge}><i className={styles.modelDot} />Implemented records · simplified view</span>
            </div>

            <div className={styles.historyVisual}>
              <ol>
                {recordChain.map(([record, status], index) => (
                  <li key={record}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{record}</strong>
                    <em>{status}</em>
                    {index < recordChain.length - 1 ? <i aria-hidden="true" /> : null}
                  </li>
                ))}
              </ol>

              <div className={styles.closeout}>
                <span>Work record</span>
                <h4>Visit completed</h4>
                <dl>
                  <div><dt>Employee</dt><dd>Sophie G.</dd></div>
                  <div><dt>Service</dt><dd>Shopping &amp; errands</dd></div>
                  <div><dt>Outcome</dt><dd>Completed</dd></div>
                </dl>
                <p>Request, assignment, visit and completed work remain connected.</p>
              </div>
            </div>

            <div className={styles.transitionLine}>
              <span>Work record</span><i>→</i><strong>Follow-up with full context</strong>
            </div>
          </article>
        </div>

        <p className={styles.closingStatement}>
          <span>The service happens between people.</span>
          <strong>CareOS keeps the operation connected around it.</strong>
        </p>
      </div>
    </section>
  )
}
