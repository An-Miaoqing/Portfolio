import Image from 'next/image'
import styles from './CareOSDailyWorkSection.module.css'

const customerActions = ['Discover services', 'Choose a time', 'Submit a request']
const officeActions = ['Review bookings', 'Schedule visits', 'Assign employees', 'Follow service delivery']
const employeeActions = ['See assigned visits', 'Open visit details', 'Record completed work']

function ActionList({ actions }: { actions: readonly string[] }) {
  return (
    <ul className={styles.actionList}>
      {actions.map((action) => <li key={action}>{action}</li>)}
    </ul>
  )
}

export function CareOSDailyWorkSection() {
  return (
    <section className={styles.section}>
      <div className={styles.frame}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>CareOS in daily work</p>
          <h2>Different roles.<br />One connected operation.</h2>
          <p>
            Each person sees the part of the operation they need — while CareOS
            keeps the underlying records connected.
          </p>
        </header>

        <div className={styles.scenes}>
          <article className={styles.customerScene}>
            <div className={styles.sceneIntro}>
              <span>01 / Customer / family</span>
              <h3>Request help.</h3>
              <div className={styles.applicationLabel}>
                <span>Application</span>
                <strong>Gut Begleitet Website</strong>
              </div>
              <ActionList actions={customerActions} />
            </div>

            <div className={styles.websiteWindow} aria-label="Simplified browser view of the existing Gut Begleitet website">
              <div className={styles.browserBar}>
                <div aria-hidden="true"><i /><i /><i /></div>
                <span>gutbegleitet.org</span>
                <strong>Termin buchen</strong>
              </div>
              <div className={styles.websiteImage}>
                <Image
                  src="/case-studies/gutbegleitet/alltagshilfe-desktop.png"
                  alt="The Gut Begleitet public website showing its everyday assistance services"
                  fill
                  sizes="(max-width: 800px) 100vw, 78vw"
                />
              </div>
              <div className={styles.requestPrompt}>
                <span>Before the visit</span>
                <strong>Choose a service and request a suitable time.</strong>
              </div>
            </div>

            <figure className={styles.customerPhoto}>
              <Image
                src="/case-studies/gutbegleitet/service-walk.jpeg"
                alt="A Gut Begleitet employee walking with an older customer"
                fill
                sizes="(max-width: 800px) 100vw, 32vw"
              />
              <figcaption>Help begins with a person asking.</figcaption>
            </figure>
          </article>

          <article className={styles.officeScene}>
            <div className={styles.officeContext}>
              <div className={styles.sceneIntro}>
                <span>02 / Office / manager</span>
                <h3>Coordinate the service.</h3>
                <div className={styles.applicationLabel}>
                  <span>Application</span>
                  <strong>CareOS Operations</strong>
                </div>
                <ActionList actions={officeActions} />
              </div>
              <figure>
                <Image
                  src="/case-studies/gutbegleitet/team.jpg"
                  alt="The Gut Begleitet team"
                  fill
                  sizes="(max-width: 800px) 100vw, 32vw"
                />
                <figcaption>Coordination connects demand with delivery.</figcaption>
              </figure>
            </div>

            <div className={styles.operationsWindow} aria-label="Simplified CareOS Operations interface">
              <div className={styles.operationsTopbar}>
                <div aria-hidden="true"><i /><i /><i /></div>
                <strong>CareOS Operations</strong>
                <span>Office workspace</span>
              </div>
              <div className={styles.operationsBody}>
                <nav aria-label="Operations modules">
                  <strong>CAREOS</strong>
                  <span className={styles.activeModule}>Bookings <i>3</i></span>
                  <span>Visits</span>
                  <span>Calendar</span>
                  <span>Employees</span>
                </nav>
                <div className={styles.operationsContent}>
                  <div className={styles.operationsHeading}>
                    <div><span>Today</span><h4>Service coordination</h4></div>
                    <button type="button" tabIndex={-1}>Schedule view</button>
                  </div>
                  <div className={styles.operationsSummary}>
                    <div><span>Requests</span><strong>03</strong></div>
                    <div><span>Visits today</span><strong>08</strong></div>
                    <div><span>Need assignment</span><strong>02</strong></div>
                  </div>
                  <div className={styles.bookingQueue}>
                    <div className={styles.queueHeader}><span>Booking</span><span>Visit</span><span>Employee</span><span>Status</span></div>
                    <div><strong>G. Berger</strong><span>12 Aug · 09:00</span><span>Sophie G.</span><em>Assigned</em></div>
                    <div><strong>M. Huber</strong><span>12 Aug · 11:30</span><span>—</span><em className={styles.openStatus}>Review</em></div>
                    <div><strong>E. Wagner</strong><span>12 Aug · 14:00</span><span>Anna K.</span><em>Confirmed</em></div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className={styles.employeeScene}>
            <figure className={styles.employeePhoto}>
              <Image
                src="/case-studies/gutbegleitet/service-companionship.jpeg"
                alt="A Gut Begleitet employee spending time with two older customers"
                fill
                sizes="(max-width: 800px) 100vw, 100vw"
              />
              <figcaption>The service happens between people.</figcaption>
            </figure>

            <div className={styles.employeeIntro}>
              <div className={styles.sceneIntro}>
                <span>03 / Employee</span>
                <h3>Deliver the service.</h3>
                <div className={styles.applicationLabel}>
                  <span>Application</span>
                  <strong>CareOS Employee</strong>
                </div>
                <ActionList actions={employeeActions} />
              </div>
            </div>

            <div className={styles.employeePhone} aria-label="Simplified CareOS Employee visit interface">
              <div className={styles.phoneHeader}><strong>CareOS</strong><span>09:00</span></div>
              <div className={styles.phoneGreeting}><span>Good morning, Sophie</span><h4>Today&apos;s visits</h4></div>
              <div className={styles.phoneVisit}>
                <div><strong>09:00</strong><em>Assigned</em></div>
                <h5>Shopping &amp; errands</h5>
                <p>G. Berger · Vienna</p>
                <dl>
                  <div><dt>Duration</dt><dd>2 hours</dd></div>
                  <div><dt>Visit</dt><dd>12 Aug</dd></div>
                </dl>
                <button type="button" tabIndex={-1}>Open visit details</button>
              </div>
              <div className={styles.phoneRecord}><i />Record work after the visit</div>
              <nav aria-hidden="true"><span>Today</span><span>Visits</span><span>Profile</span></nav>
            </div>
          </article>
        </div>

        <p className={styles.closingStatement}>
          <span>The work happens between people.</span>
          <strong>CareOS keeps everyone working from the same operational context.</strong>
        </p>
      </div>
    </section>
  )
}
