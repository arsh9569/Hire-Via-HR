export default function SectionTitle({ eyebrow, title, accent, subtitle, light = false }) {
  return <div className={`section-title ${light ? 'light' : ''}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title} {accent && <span>{accent}</span>}</h2>
    {subtitle && <p>{subtitle}</p>}
  </div>
}