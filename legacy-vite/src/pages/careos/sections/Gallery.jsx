import MediaPlaceholder from '../components/MediaPlaceholder.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

const galleryItems = [
  ['Admin Workspace', 'wide'],
  ['Employee Mobile Flow', 'portrait'],
  ['Customer Experience', 'portrait'],
  ['System Detail', 'wide'],
]

export default function Gallery() {
  return (
    <section className="careos-section careos-gallery" id="gallery">
      <div className="container">
        <SectionHeader index="10" label="GALLERY" title="The system in context." intro="Verified project visuals will replace these placeholders." />
        <div className="careos-gallery__grid">
          {galleryItems.map(([label, format]) => <MediaPlaceholder label={label} format={format} key={label} />)}
        </div>
      </div>
    </section>
  )
}
