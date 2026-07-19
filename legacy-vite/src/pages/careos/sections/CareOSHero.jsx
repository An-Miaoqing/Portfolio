const capabilities = [
  'Business Systems Analysis',
  'Requirements Engineering',
  'System Architecture',
  'Database Design',
  'Full-stack Development',
  'Production Deployment',
]

export default function CareOSHero() {
  return (
    <section className="careos-hero" id="careos-top">
      <div className="container">
        <div className="careos-hero__breadcrumb">
          <span>SELECTED WORK</span><i aria-hidden="true" /> <span>CASE STUDY 01</span>
        </div>
        <div className="careos-hero__grid">
          <div className="careos-hero__content">
            <p className="eyebrow">BUSINESS OPERATING SYSTEM</p>
            <h1>Care<span>OS</span></h1>
            <p className="careos-hero__statement">
              A connected operating system for business processes, data and day-to-day operations.
            </p>
          </div>
          <div className="careos-hero__aside">
            <p>Flagship project</p>
            <p>Case-study framework</p>
          </div>
        </div>
        <ul className="careos-capability-list" aria-label="Capabilities demonstrated">
          {capabilities.map((capability, index) => (
            <li key={capability}><span>0{index + 1}</span>{capability}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
