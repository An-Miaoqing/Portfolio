import SectionHeader from '../components/SectionHeader.jsx'

const challengeAreas = ['Business context', 'Operational friction', 'Information flow']

export default function BusinessChallenge() {
  return (
    <section className="careos-section careos-section--tinted" id="challenge">
      <div className="container">
        <SectionHeader index="02" label="BUSINESS CHALLENGE" title="Understanding the operation before designing the system." intro="Detailed problem framing will be added after content review." />
        <div className="careos-card-grid careos-card-grid--three">
          {challengeAreas.map((area, index) => (
            <article className="careos-content-card" key={area}>
              <span>0{index + 1}</span>
              <h3>{area}</h3>
              <p>[Concise challenge summary]</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
