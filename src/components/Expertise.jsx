const CARDS = [
  {
    num: '01', title: 'REST API Architecture',
    icon: <path d="M4 6h16M4 12h16M4 18h7"/>,
    desc: 'Versioned, resource-oriented APIs with Sanctum auth, throttling, scoped token abilities, and JSON:API-compliant response shapes. Built to be consumed by mobile, web, and third-party clients without surprises.',
    delay: '',
  },
  {
    num: '02', title: 'Domain Modeling & ORM',
    icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>,
    desc: 'Eloquent schema design reflecting the real domain. Normalized tables, soft deletes, polymorphic relationships, scoped queries, and observer patterns that keep business logic where it belongs.',
    delay: 'd1',
  },
  {
    num: '03', title: 'Auth & Authorization',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    desc: 'Sanctum token management, OTP verification flows, policy-based authorization, and role-gated endpoints. Secure by design — not an afterthought bolted on at the end.',
    delay: 'd2',
  },
  {
    num: '04', title: 'Background Jobs & Queues',
    icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></>,
    desc: 'Queued jobs, events, and scheduled tasks that keep request cycles lean. Reminders, notifications, and heavy processing happen asynchronously — reliably, without blocking responses.',
    delay: 'd1',
  },
  {
    num: '05', title: 'Livewire Interfaces',
    icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>,
    desc: 'Dynamic server-side components with real-time feedback, inline validation, and zero JavaScript complexity. Full-stack Laravel without leaving PHP — fast to build, easy to maintain.',
    delay: 'd2',
  },
  {
    num: '06', title: 'Clean Architecture',
    icon: <><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></>,
    desc: 'SOLID principles, service layers, repository patterns, and strict separation of concerns. Code that a junior can navigate and a senior can respect — because the next person matters.',
    delay: 'd3',
  },
]

export default function Expertise() {
  return (
    <section id="expertise">
      <div className="container">
        <div className="expertise-header reveal">
          <div className="section-eyebrow">02 / WHAT I BUILD</div>
          <h2 className="section-heading">The systems I <span className="gradient">specialize in.</span></h2>
        </div>
        <div className="exp-grid">
          {CARDS.map((c, i) => (
            <div className={`exp-card glass-hover reveal ${c.delay}`} key={i}>
              <div className="exp-glow" />
              <div className="exp-num">{c.num}</div>
              <div className="exp-icon">
                <svg viewBox="0 0 24 24">{c.icon}</svg>
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
