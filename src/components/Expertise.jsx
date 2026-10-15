const ICONS = [
  <path key="1" d="M4 6h16M4 12h16M4 18h7"/>,
  <path key="2" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>,
  <path key="3" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
  <>
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <line x1="3" y1="9" x2="21" y2="9"/>
    <line x1="3" y1="15" x2="21" y2="15"/>
    <line x1="9" y1="3" x2="9" y2="21"/>
  </>,
  <polyline key="5" points="22 12 18 12 15 21 9 3 6 12 2 12"/>,
  <>
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
  </>,
]

export default function Expertise({ content }) {
  return (
    <section id="expertise">
      <div className="container">
        <div className="expertise-header reveal">
          <div className="section-eyebrow">{content.eyebrow}</div>
          <h2 className="section-heading">{content.heading} <span className="gradient">{content.headingGradient}</span></h2>
        </div>
        <div className="exp-grid">
          {content.cards.map((c, i) => (
            <div className={`exp-card glass-hover reveal ${c.delay}`} key={i}>
              <div className="exp-glow" />
              <div className="exp-num">{c.num}</div>
              <div className="exp-icon">
                <svg viewBox="0 0 24 24">{ICONS[i]}</svg>
              </div>
              <div className="exp-title">{c.title}</div>
              <div className="exp-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
