import MediaPlaceholder from '../components/MediaPlaceholder.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

const layers = ['Experience layer', 'Application layer', 'Business logic', 'Data layer']

export default function SystemArchitecture() {
  return (
    <section className="careos-section" id="architecture">
      <div className="container">
        <SectionHeader index="05" label="SYSTEM ARCHITECTURE" title="A modular structure with clear system boundaries." intro="Architecture decisions and responsibilities will be documented concisely." />
        <MediaPlaceholder label="Architecture Diagram" format="panorama" />
        <ol className="careos-layer-list">
          {layers.map((layer, index) => <li key={layer}><span>0{index + 1}</span><p>{layer}</p><small>[Layer summary]</small></li>)}
        </ol>
      </div>
    </section>
  )
}
