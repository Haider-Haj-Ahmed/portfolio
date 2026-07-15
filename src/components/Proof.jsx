const STATS = [
  { count: 4,   suffix: '+', label: 'Production systems shipped as sole architect' },
  { count: 60,  suffix: '+', label: 'REST API endpoints following JSON:API conventions' },
  { count: 5,   suffix: '',  label: 'Laravel major versions worked across (8 → 13)' },
  { count: 100, suffix: '%', label: 'Projects with scoped auth and versioned endpoints' },
]

export default function Proof() {
  return (
    <section id="proof">
      <div className="container">
        <div className="proof-strip reveal">
          {STATS.map((s, i) => (
            <div className="proof-cell" key={i}>
              <div className="proof-num">
                <span data-count={s.count}>0</span>{s.suffix}
              </div>
              <div className="proof-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
