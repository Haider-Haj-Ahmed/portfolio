const CORE = [
  { name: 'Laravel',   w: 95 },
  { name: 'PHP 8+',    w: 90 },
  { name: 'REST APIs', w: 88 },
  { name: 'Livewire',  w: 82 },
]
const DATA = [
  { name: 'MySQL',        w: 80 },
  { name: 'Eloquent ORM', w: 88 },
  { name: 'Schema Design',w: 84 },
  { name: 'Clean Code',   w: 87 },
]
const ACCENT_TAGS = ['OOP','MVC','SOLID','Clean Code']
const TAGS = ['DRY','SoC','Repository Pattern','Service Layer','Event-Driven','Queues','Sanctum','Horizon','Postman','Git / GitHub','Railway','Blade Templates','Soft Deletes','Pessimistic Locking','JSON:API','Throttling']

function SkillGroup({ label, skills }) {
  return (
    <div className="skill-group-card glass">
      <div className="skg-label">{label}</div>
      {skills.map(s => (
        <div className="skill-row" key={s.name}>
          <span className="sk-name">{s.name}</span>
          <div className="sk-track">
            <div className="sk-fill" data-w={s.w} />
          </div>
          <span className="sk-pct">{s.w}%</span>
        </div>
      ))}
    </div>
  )
}

export default function Arsenal() {
  return (
    <section id="arsenal">
      <div className="container">
        <div className="arsenal-header reveal">
          <div className="section-eyebrow">03 / TECH STACK</div>
          <h2 className="section-heading">Tools I trust <span className="gradient">in production.</span></h2>
        </div>
        <div className="skill-groups reveal d1">
          <SkillGroup label="Core Backend" skills={CORE} />
          <SkillGroup label="Data & Storage" skills={DATA} />
        </div>
        <div className="reveal d2" style={{ marginTop: '16px' }}>
          <div className="glass" style={{ padding: '28px' }}>
            <div className="skg-label" style={{ marginBottom: '16px' }}>Architecture, Principles & Tools</div>
            <div className="tag-cloud">
              {ACCENT_TAGS.map(t => <span className="stag accent" key={t}>{t}</span>)}
              {TAGS.map(t => <span className="stag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
