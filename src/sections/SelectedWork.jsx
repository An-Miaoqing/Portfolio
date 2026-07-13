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
  return (
    <div className="project-visual project-visual--flow" aria-hidden="true">
      <p>DIGITAL SERVICE FLOW</p>
      <div className="service-flow">
        <span>Discover</span><i>→</i><span>Understand</span><i>→</i><span>Request</span>
      </div>
      <div className="browser-frame">
        <span /><span /><span />
        <div className="browser-frame__content">
          <i /><i /><i />
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
      <div className="project-card__meta">
        <span>{project.index}</span>
        <p>{project.category}</p>
      </div>
      <div className="project-card__body">
        <div className="project-card__content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul className="tag-list" aria-label={`${project.title} areas`}>
            {project.areas.map((area) => <li key={area}>{area}</li>)}
          </ul>
          <span className="project-status">Case study in development</span>
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
        <div className="section-heading">
          <p className="eyebrow">01 / WORK</p>
          <h2>Selected Work</h2>
          <p>Systems and digital solutions shaped around real operations.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  )
}

