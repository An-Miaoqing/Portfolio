import SectionHeader from '../components/SectionHeader.jsx'

const stack = [
  ['Frontend', 'React · Vite'],
  ['Backend', 'Node.js · Express'],
  ['Data', 'PostgreSQL · Prisma'],
  ['Delivery', '[Deployment stack]'],
]

export default function TechnologyStack() {
  return (
    <section className="careos-section careos-section--dark" id="technology">
      <div className="container">
        <SectionHeader index="08" label="TECHNOLOGY STACK" title="Technology selected to support the system." intro="Implementation details will remain secondary to the business and architecture story." />
        <div className="careos-stack-grid">
          {stack.map(([category, technologies], index) => (
            <div key={category}><span>0{index + 1}</span><p>{category}</p><h3>{technologies}</h3></div>
          ))}
        </div>
      </div>
    </section>
  )
}
