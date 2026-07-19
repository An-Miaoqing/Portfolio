import SectionHeader from '../components/SectionHeader.jsx'

const phases = ['Understand', 'Model', 'Design', 'Build', 'Deploy']

export default function DevelopmentJourney() {
  return (
    <section className="careos-section" id="journey">
      <div className="container">
        <SectionHeader index="09" label="DEVELOPMENT JOURNEY" title="From operational understanding to a working system." intro="Milestones, decisions and learning points will be added later." />
        <ol className="careos-journey">
          {phases.map((phase, index) => (
            <li key={phase}><span>0{index + 1}</span><h3>{phase}</h3><p>[Phase summary]</p></li>
          ))}
        </ol>
      </div>
    </section>
  )
}
