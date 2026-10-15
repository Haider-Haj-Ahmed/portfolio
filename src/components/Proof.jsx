const STATS = [
  { count: 4, suffix: '+' },
  { count: 60, suffix: '+' },
  { count: 5, suffix: '' },
  { count: 100, suffix: '%' },
]

export default function Proof({ labels }) {
  return (
    <section id="proof">
      <div className="container">
        <div className="proof-strip reveal">
          {STATS.map((s, i) => (
            <div className="proof-cell" key={i}>
              <div className="proof-num">
                <span data-count={s.count}>0</span>{s.suffix}
              </div>
              <div className="proof-label">{labels[i]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
