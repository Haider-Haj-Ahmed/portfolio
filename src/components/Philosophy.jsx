export default function Philosophy({ content }) {
  return (
    <section id="philosophy">
      <div className="container">
        <div className="phi-box reveal">
          <div className="phi-header">
            <div className="section-eyebrow">{content.eyebrow}</div>
            <h2 className="section-heading" style={{ marginTop: '12px' }}>
              {content.heading}<br /><span className="gradient">{content.headingGradient}</span>
            </h2>
          </div>
          <div className="phi-list">
            {content.principles.map(p => (
              <div className="phi-item" key={p.num}>
                <div className="phi-num">{p.num}</div>
                <div className="phi-title">{p.title}</div>
                <div className="phi-desc">{p.desc}</div>
              </div>
            ))}
          </div>
          <div className="phi-arch">
            <div className="arch-label">{content.arch}</div>
            <div className="arch-nodes">
              {content.archNodes.map((n, i) =>
                n.arrow
                  ? <div className="aarrow" key={i}>→</div>
                  : <div className={`anode ${n.blue ? 'blue' : 'light'}`} key={i}>{n.label}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
