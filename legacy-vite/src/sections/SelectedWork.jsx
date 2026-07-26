import { projects } from '../data/projects.js'

function CareOSVisual() {
  const nodes = ['Client', 'Household', 'Service', 'Booking', 'Employee', 'Visit', 'Payment']

  return (
    <div className="project-visual project-visual--system" aria-hidden="true">
      <p>OPERATIONAL ENTITY MAP</p>
      <div className="entity-map">
        {nodes.map((node) => <span key={node}>{node}</span>)}
        <i className="entity-map__line entity-map__line--one" />
        <i className="entity-map__line entity-map__line--two" />
        <i className="entity-map__line entity-map__line--three" />
      </div>
    </div>
  )
}

function GutBegleitetVisual() {
  const flow = [
    { label: 'Visitor', detail: 'Discovers services online' },
    { label: 'Booking Form', detail: 'Selects service & appointment' },
    { label: 'REST API', detail: 'Validates the request' },
    { label: 'Requested', detail: 'Ready for internal review' },
  ]

  return (
    <div className="project-visual project-visual--flow" aria-hidden="true">
      <p>DIGITAL SERVICE FLOW</p>
      <ol className="service-flow-diagram">
        {flow.map((step, index) => (
          <li key={step.label}>
            <div className="service-flow-diagram__node">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <strong>{step.label}</strong>
                <small>{step.detail}</small>
              </div>
            </div>
            {index < flow.length - 1 ? <i /> : null}
          </li>
        ))}
      </ol>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
      <div className="project-card__meta">
        <p>{project.category}</p>
      </div>
      <div className="project-card__body">
        <div className="project-card__content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul className="tag-list" aria-label={`${project.title} areas`}>
            {project.areas.map((area) => <li key={area}>{area}</li>)}
          </ul>
          {project.announcement ? (
            <p className="project-announcement">
              <strong>Coming next —</strong> {project.announcement}
            </p>
          ) : null}
          <a className="button button--secondary" href={project.workHref}>
            View work <span aria-hidden="true">→</span>
          </a>
        </div>
        {project.id === 'careos' ? <CareOSVisual /> : <GutBegleitetVisual />}
      </div>
    </article>
  )
}

export default function SelectedWork() {
  return (
    <section className="work section" id="work">
      <div className="container">
        <div className="project-list">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  )
}

