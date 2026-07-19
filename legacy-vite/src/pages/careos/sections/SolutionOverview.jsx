import MediaPlaceholder from '../components/MediaPlaceholder.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

export default function SolutionOverview() {
  return (
    <section className="careos-section" id="solution">
      <div className="container">
        <SectionHeader index="03" label="SOLUTION OVERVIEW" title="One connected system, viewed from multiple operational perspectives." intro="The final solution narrative will be developed here." />
        <div className="careos-split-layout">
          <MediaPlaceholder label="Solution Ecosystem Diagram" />
          <div className="careos-copy-stack">
            <div><span>01</span><h3>Operational core</h3><p>[Core system summary]</p></div>
            <div><span>02</span><h3>Connected workflows</h3><p>[Workflow summary]</p></div>
            <div><span>03</span><h3>Role-specific experiences</h3><p>[Application summary]</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
