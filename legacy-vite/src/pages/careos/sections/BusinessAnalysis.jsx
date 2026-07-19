import MediaPlaceholder from '../components/MediaPlaceholder.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

const analysisAreas = ['Process analysis', 'Requirements', 'Business rules', 'Entity modelling']

export default function BusinessAnalysis() {
  return (
    <section className="careos-section careos-section--dark" id="business-analysis">
      <div className="container">
        <SectionHeader index="04" label="BUSINESS ANALYSIS" title="Turning real operations into a structured system model." intro="Analysis artefacts and concise decisions will be added later." />
        <div className="careos-analysis-grid">
          <ul>
            {analysisAreas.map((area, index) => <li key={area}><span>0{index + 1}</span>{area}</li>)}
          </ul>
          <MediaPlaceholder label="Business Process Model" />
        </div>
      </div>
    </section>
  )
}
