const experience = [
  'International project development',
  'Stakeholder coordination',
  'Research and information analysis',
  'Data and digital systems',
]

export default function Approach() {
  return (
    <section className="approach section" id="about">
      <div className="container approach__grid">
        <div className="approach__intro">
          <p className="eyebrow">02 / APPROACH</p>
          <h2>I work at the intersection of business, systems and technology.</h2>
        </div>
        <div className="approach__detail">
          <p>
            My interdisciplinary background helps me see operations from more than one angle—from the people and decisions involved to the information, relationships and workflows that support them.
          </p>
          <ul className="experience-list">
            {experience.map((item, index) => (
              <li key={item}><span>0{index + 1}</span>{item}</li>
            ))}
          </ul>
          <p className="approach__focus">
            My current focus is translating business operations into structured processes, data models, workflows and practical digital solutions.
          </p>
        </div>
      </div>
    </section>
  )
}

