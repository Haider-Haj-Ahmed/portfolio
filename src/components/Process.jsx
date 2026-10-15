export default function Process({ content }) {
  return (
    <section id="process">
      <div className="container">
        <div className="process-header reveal">
          <div className="section-eyebrow">{content.eyebrow}</div>
          <h2 className="section-heading">
            {content.heading} <span className="gradient">{content.headingGradient}</span>
          </h2>
        </div>
        <div className="process-grid">
          {content.steps.map(s => (
            <div className={`process-card glass-hover reveal ${s.delay}`} key={s.num}>
              <div className="step-num">{s.num}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
