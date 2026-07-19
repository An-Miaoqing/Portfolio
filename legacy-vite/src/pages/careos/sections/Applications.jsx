import MediaPlaceholder from '../components/MediaPlaceholder.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

const applications = [
  ['01', 'Customer Website', 'Public service and booking experience', 'Customer Website Screenshot'],
  ['02', 'Admin Application', 'Operational management workspace', 'Admin Dashboard Screenshot'],
  ['03', 'Employee App', 'Mobile operational experience', 'Employee App Screenshot'],
]

export default function Applications() {
  return (
    <section className="careos-section careos-section--tinted" id="applications">
      <div className="container">
        <SectionHeader index="06" label="APPLICATIONS" title="Three interfaces. One operating system." intro="Each application will later receive its own focused subpage." />
        <div className="careos-application-list">
          {applications.map(([index, title, summary, placeholder]) => (
            <article className="careos-application" key={title}>
              <div className="careos-application__heading"><span>{index}</span><div><h3>{title}</h3><p>{summary}</p></div></div>
              <MediaPlaceholder label={placeholder} format="application" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
