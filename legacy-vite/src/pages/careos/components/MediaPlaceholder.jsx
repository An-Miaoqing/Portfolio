export default function MediaPlaceholder({ label, format = 'wide', className = '' }) {
  return (
    <div className={`careos-media careos-media--${format} ${className}`.trim()} role="img" aria-label={`${label} placeholder`}>
      <span className="careos-media__marker" aria-hidden="true" />
      <span>[ {label} ]</span>
      <small>ASSET PLACEHOLDER</small>
    </div>
  )
}
