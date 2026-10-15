const STEPS = [
  {
    num: '01 — DISCOVERY',
    title: 'Understand the domain',
    desc: 'Map business entities, their relationships, and key operations before writing a single line. A domain model on paper prevents a broken schema in production.',
    delay: '',
  },
  {
    num: '02 — DESIGN',
    title: 'API contract first',
    desc: 'Draft endpoint list, response shapes, and auth model before implementation. Surfaces misunderstandings early and gives mobile/web teams something to mock against immediately.',
    delay: 'd1',
  },
  {
    num: '03 — BUILD',
    title: 'Ship in working slices',
    desc: 'Features built vertically: migration to endpoint, testable in isolation. No partially-built modules waiting on other modules — every commit leaves the system in a shippable state.',
    delay: 'd2',
  },
  {
    num: '04 — HARDEN',
    title: 'Validate, secure, document',
    desc: 'Request validation, authorization policies, throttling, and Postman collections. Production-grade means someone else can pick this up and run it — not just me.',
    delay: 'd3',
  },
]

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <div className="process-header reveal">
          <div className="section-eyebrow">06 / PROCESS</div>
          <h2 className="section-heading">
            How a project actually <span className="gradient">gets built.</span>
          </h2>
        </div>
        <div className="process-grid">
          {STEPS.map(s => (
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
