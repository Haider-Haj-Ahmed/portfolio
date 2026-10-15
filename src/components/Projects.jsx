import { useState } from 'react'

const GH_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.72-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const PROJECT_META = [
  {
    tags: [
      { label: 'Laravel 12', v: true },
      { label: 'Sanctum', v: true },
      { label: 'MySQL' },
      { label: 'OTP Auth' },
      { label: 'Feed Algorithm' },
    ],
    gh: 'https://github.com/Haider-Haj-Ahmed/laravel-blog-api',
  },
  {
    tags: [
      { label: 'Laravel', v: true },
      { label: 'REST API', v: true },
      { label: 'MySQL' },
      { label: 'Notifications' },
      { label: 'Applications' },
    ],
    gh: 'https://github.com/Haider-Haj-Ahmed/worknetsyr-api',
  },
  {
    tags: [
      { label: 'Laravel 13', v: true },
      { label: 'Sanctum', v: true },
      { label: 'MySQL' },
      { label: 'Queues' },
      { label: 'Soft Deletes' },
      { label: 'Locking' },
    ],
    gh: 'https://github.com/Haider-Haj-Ahmed/dental-clinic',
  },
  {
    tags: [
      { label: 'Laravel', v: true },
      { label: 'Livewire', v: true },
      { label: 'Blade' },
      { label: 'MySQL' },
      { label: 'Full-Stack' },
    ],
    gh: 'https://github.com/Haider-Haj-Ahmed/syriana',
  },
]

function ProjectCard({ proj, meta, index, labels }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="proj-card reveal" style={{ '--delay': `${index * 0.1}s` }}>
      <div className="proj-top-bar">
        <div className="cc-dots"><span /><span /><span /></div>
        <span className="proj-top-file">{proj.file}</span>
      </div>
      <div className="proj-body">
        <div>
          <div className="proj-index">{proj.index}</div>
          <div className="proj-title">{proj.title}</div>
          <div className="proj-desc">{proj.desc}</div>
          <div className="proj-tags">
            {meta.tags.map((t, i) => (
              <span key={i} className={`ptag ${t.v ? 'ptag-v' : 'ptag-g'}`}>{t.label}</span>
            ))}
          </div>
          <button className="expand-btn" onClick={() => setOpen(o => !o)}>
            {labels.caseStudy} {open ? '▴' : '▾'}
          </button>
        </div>
        <div className="proj-actions">
          <a href={meta.gh} target="_blank" rel="noreferrer" className="proj-gh-btn">
            {GH_SVG} GitHub ↗
          </a>
        </div>
      </div>
      <div className={`proj-case${open ? ' open' : ''}`}>
        <div className="case-inner">
          <div className="case-col"><div className="case-lbl">{labels.challenge}</div><div className="case-txt">{proj.case.challenge}</div></div>
          <div className="case-col"><div className="case-lbl">{labels.approach}</div><div className="case-txt">{proj.case.approach}</div></div>
          <div className="case-col"><div className="case-lbl">{labels.outcome}</div><div className="case-txt">{proj.case.outcome}</div></div>
        </div>
      </div>
    </div>
  )
}

export default function Projects({ content }) {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects-header">
          <div className="reveal">
            <div className="section-eyebrow">{content.eyebrow}</div>
            <h2 className="section-heading">{content.heading}<br /><span className="gradient">{content.headingGradient}</span></h2>
          </div>
          <a href="https://github.com/Haider-Haj-Ahmed" target="_blank" rel="noreferrer" className="btn-ghost reveal">
            {content.viewAll}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
        <div className="projects-list">
          {content.list.map((p, i) => (
            <ProjectCard proj={p} meta={PROJECT_META[i]} index={i} key={i} labels={content} />
          ))}
        </div>
      </div>
    </section>
  )
}
