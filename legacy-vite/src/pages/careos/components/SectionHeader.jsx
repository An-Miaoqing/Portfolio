export default function SectionHeader({ index, label, title, intro }) {
  return (
    <header className="careos-section-heading">
      <div className="careos-section-heading__index">
        <span>{index}</span>
        <p>{label}</p>
      </div>
      <div>
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </header>
  )
}
