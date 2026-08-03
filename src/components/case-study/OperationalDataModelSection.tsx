import styles from './OperationalDataModelSection.module.css'

type RecordNodeProps = {
  className?: string
  category: 'people' | 'transaction' | 'execution' | 'support'
  eyebrow: string
  title: string
  example?: string
  detail?: string
}

function RecordNode({
  category,
  className = '',
  detail,
  example,
  eyebrow,
  title,
}: RecordNodeProps) {
  return (
    <article className={`${styles.recordNode} ${styles[category]} ${className}`}>
      <span className={styles.nodeEyebrow}>{eyebrow}</span>
      <h3>{title}</h3>
      {example ? <strong>{example}</strong> : null}
      {detail ? <p>{detail}</p> : null}
    </article>
  )
}

const transformation = ['Request', 'Booking', 'Assignment', 'Visit', 'Operational history']

export function OperationalDataModelSection() {
  return (
    <section className={styles.section}>
      <div className={styles.frame}>
        <div className={styles.model} aria-label="Simplified CareOS operational data model">
          <div className={styles.modelTopline}>
            <span>One booking · two connected views</span>
            <div className={styles.key} aria-label="Record categories">
              <span><i className={styles.peopleKey} />People / organisation</span>
              <span><i className={styles.transactionKey} />Service / transaction</span>
              <span><i className={styles.executionKey} />Execution</span>
              <span><i className={styles.supportKey} />Supporting</span>
            </div>
          </div>

          <div className={styles.landscape}>
            <svg className={styles.relationships} viewBox="0 0 1200 720" preserveAspectRatio="none" aria-hidden="true">
              <path className={styles.primaryLine} d="M 175 330 H 225" />
              <path className={styles.primaryLine} d="M 385 330 H 435" />
              <path className={styles.primaryLine} d="M 595 330 C 635 330 620 205 665 205" />
              <path className={styles.primaryLine} d="M 595 330 C 635 330 620 475 665 475" />
              <path className={styles.primaryLine} d="M 825 475 H 875" />
              <path className={styles.secondaryLine} d="M 745 110 V 150" />
              <path className={styles.secondaryLine} d="M 1035 205 V 410" />
              <path className={styles.secondaryLine} d="M 1035 475 H 1085" />
              <path className={styles.supportLine} d="M 305 585 C 400 585 465 535 515 405" />
              <path className={styles.supportLine} d="M 955 585 C 875 585 810 555 745 540" />
              <circle cx="200" cy="330" r="4" />
              <circle cx="410" cy="330" r="4" />
              <circle cx="635" cy="330" r="4" />
              <circle cx="850" cy="475" r="4" />
            </svg>

            <span className={`${styles.relationshipLabel} ${styles.householdLabel}`}>contains</span>
            <span className={`${styles.relationshipLabel} ${styles.clientLabel}`}>requests</span>
            <span className={`${styles.relationshipLabel} ${styles.itemLabel}`}>service lines</span>
            <span className={`${styles.relationshipLabel} ${styles.visitLabel}`}>scheduled visits</span>
            <span className={`${styles.relationshipLabel} ${styles.assignmentLabel}`}>staffed by</span>

            <RecordNode
              category="people"
              className={styles.household}
              eyebrow="Organisation record"
              title="Household"
              example="Berger Household"
            />
            <RecordNode
              category="people"
              className={styles.client}
              eyebrow="Person record"
              title="Client"
              example="G. Berger"
            />
            <RecordNode
              category="transaction"
              className={styles.booking}
              eyebrow="Request record"
              title="Booking"
              example="12 Aug · 09:00"
            />
            <RecordNode
              category="transaction"
              className={styles.bookingItem}
              eyebrow="Requested service"
              title="Booking Item"
              example="Shopping & errands"
            />
            <RecordNode
              category="transaction"
              className={styles.service}
              eyebrow="Service catalogue"
              title="Service"
              detail="Defines the service requested"
            />
            <RecordNode
              category="execution"
              className={styles.visit}
              eyebrow="Delivery record"
              title="Visit"
              example="Visit completed"
            />
            <RecordNode
              category="execution"
              className={styles.assignment}
              eyebrow="Responsibility record"
              title="Assignment"
              example="Sophie Gruber"
            />
            <RecordNode
              category="people"
              className={styles.employee}
              eyebrow="Worker profile"
              title="Employee"
              example="Sophie Gruber"
            />
            <RecordNode
              category="people"
              className={styles.user}
              eyebrow="Authenticated identity"
              title="User"
              detail="Connects access to the employee"
            />
            <RecordNode
              category="support"
              className={styles.document}
              eyebrow="Supporting record"
              title="Document"
              detail="Can attach to a business record"
            />
            <RecordNode
              category="support"
              className={styles.notification}
              eyebrow="Supporting record"
              title="Notification"
              detail="Can reference a booking, visit or assignment"
            />

            <div className={styles.bookingFork}>
              <span>Booking context continues as</span>
              <strong>what was requested</strong>
              <i>+</i>
              <strong>what was delivered</strong>
            </div>
          </div>

          <div className={styles.mobileModel}>
            <RecordNode category="people" eyebrow="Organisation record" title="Household" example="Berger Household" />
            <span className={styles.mobileLink}>contains</span>
            <RecordNode category="people" eyebrow="Person record" title="Client" example="G. Berger" />
            <span className={styles.mobileLink}>requests</span>
            <RecordNode category="transaction" eyebrow="Request record" title="Booking" example="12 Aug · 09:00" />

            <div className={styles.mobileBranch}>
              <span>Same booking context</span>
              <div>
                <RecordNode category="transaction" eyebrow="Service catalogue" title="Service" detail="Defines the service" />
                <span className={styles.mobileLink}>selected as</span>
                <RecordNode category="transaction" eyebrow="Requested service" title="Booking Item" example="Shopping & errands" />
              </div>
              <div>
                <RecordNode category="execution" eyebrow="Delivery record" title="Visit" example="Visit completed" />
                <span className={styles.mobileLink}>staffed by</span>
                <RecordNode category="execution" eyebrow="Responsibility record" title="Assignment" example="Sophie Gruber" />
                <span className={styles.mobileLink}>assigned to</span>
                <RecordNode category="people" eyebrow="User / employee" title="Employee" example="Sophie Gruber" />
              </div>
            </div>

            <div className={styles.mobileSupport}>
              <RecordNode category="support" eyebrow="Supporting record" title="Document" detail="Attached where needed" />
              <RecordNode category="support" eyebrow="Supporting record" title="Notification" detail="Booking, visit or assignment" />
            </div>
          </div>

          <p className={styles.modelTruth}>
            A booking holds the requested service lines and scheduled visits; each visit carries its employee assignment.
          </p>
        </div>

        <div className={styles.transformation} aria-label="Request becomes connected operational history">
          <ol>
            {transformation.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
                {index < transformation.length - 1 ? <i aria-hidden="true">→</i> : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
