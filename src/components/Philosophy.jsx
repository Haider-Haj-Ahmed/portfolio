const PRINCIPLES = [
  {
    num: '01',
    title: 'An API is a contract, not a convenience.',
    desc: "Every endpoint I ship is a promise to the clients consuming it. Versioning, consistent error shapes, and predictable resource structures aren't optional extras — they're the baseline for systems that scale without breaking everything downstream.",
  },
  {
    num: '02',
    title: 'Business logic belongs in the domain, not the controller.',
    desc: 'Controllers that do too much are technical debt in disguise. Keep them thin: validate input, delegate to a service or action class, return a resource. The domain model handles the decisions. This makes testing, refactoring, and onboarding dramatically cheaper.',
  },
  {
    num: '03',
    title: "The database is not a detail — it's the foundation.",
    desc: 'Schema decisions made early compound forever. I think carefully about normalization, index strategy, soft-delete implications, and constraint placement before writing the first migration. A clean schema is a gift to every query that follows.',
  },
  {
    num: '04',
    title: 'Security is a first-class feature, not a final checklist.',
    desc: "Scoped token abilities, policy-based authorization, and pessimistic locking on critical paths aren't security theatre. They reflect a genuine model of who is allowed to do what, designed in from the start — not bolted on after a breach.",
  },
  {
    num: '05',
    title: 'Code you can read is code you can maintain.',
    desc: "Clever code that's impossible to understand is a liability. I write for the next developer (often myself, six months later): meaningful names, small focused methods, and comments that explain why — not what.",
  },
]

const ARCH_NODES = [
  { label: 'Mobile / Web Client', blue: false },
  { label: '→', arrow: true },
  { label: 'API Gateway (Sanctum)', blue: true },
  { label: '→', arrow: true },
  { label: 'Controller', blue: false },
  { label: '→', arrow: true },
  { label: 'Service / Action', blue: true },
  { label: '→', arrow: true },
  { label: 'Eloquent + MySQL', blue: false },
]

export default function Philosophy() {
  return (
    <section id="philosophy">
      <div className="container">
        <div className="phi-box reveal">
          <div className="phi-header">
            <div className="section-eyebrow">05 / ENGINEERING PHILOSOPHY</div>
            <h2 className="section-heading" style={{ marginTop: '12px' }}>
              How I approach<br />backend <span className="gradient">engineering.</span>
            </h2>
          </div>
          <div className="phi-list">
            {PRINCIPLES.map(p => (
              <div className="phi-item" key={p.num}>
                <div className="phi-num">{p.num}</div>
                <div className="phi-title">{p.title}</div>
                <div className="phi-desc">{p.desc}</div>
              </div>
            ))}
          </div>
          <div className="phi-arch">
            <div className="arch-label">TYPICAL SYSTEM ARCHITECTURE</div>
            <div className="arch-nodes">
              {ARCH_NODES.map((n, i) =>
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
