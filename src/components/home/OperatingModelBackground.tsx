type OperatingModelStep = {
  action: string
  alt?: string
  image?: string
  role: string
}

const operatingModelSteps: readonly OperatingModelStep[] = [
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

export function OperatingModelBackground() {
  return (
    <div aria-hidden="true" className="operating-model-bg">
      <ol className="operating-model-bg__journey">
        {operatingModelSteps.map((step, index) => (
          <li
            className={`operating-model-bg__step ${
              step.image ? 'operating-model-bg__step--photo' : 'operating-model-bg__step--text'
            } ${index === operatingModelSteps.length - 1 ? 'operating-model-bg__step--last' : ''}`}
            key={step.role}
          >
            {step.image ? <img alt="" className="operating-model-bg__image" src={step.image} /> : null}
            <div className="operating-model-bg__caption">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step.role}</p>
              <strong>{step.action}</strong>
            </div>
            {index < operatingModelSteps.length - 1 ? <i className="operating-model-bg__arrow">→</i> : null}
          </li>
        ))}
      </ol>
    </div>
  )
}
