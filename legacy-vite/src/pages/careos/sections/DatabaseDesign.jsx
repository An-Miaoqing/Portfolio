import MediaPlaceholder from '../components/MediaPlaceholder.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

export default function DatabaseDesign() {
  return (
    <section className="careos-section" id="database">
      <div className="container">
        <SectionHeader index="07" label="DATABASE DESIGN" title="The business model expressed through data relationships." intro="Entity decisions, constraints and modelling rationale will be added here." />
        <div className="careos-split-layout careos-split-layout--reverse">
          <div className="careos-copy-stack">
            <div><span>01</span><h3>Entities</h3><p>[Core entity overview]</p></div>
            <div><span>02</span><h3>Relationships</h3><p>[Relationship overview]</p></div>
            <div><span>03</span><h3>Integrity</h3><p>[Data integrity overview]</p></div>
          </div>
          <MediaPlaceholder label="Database ER Diagram" />
        </div>
      </div>
    </section>
  )
}
