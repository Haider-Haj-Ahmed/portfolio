const GH_ICON = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.72-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

export default function About({ content }) {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="reveal">
            <div className="section-eyebrow">{content.eyebrow}</div>
            <h2 className="section-heading" style={{ marginBottom: '28px' }}>
              {content.heading}<br />{content.headingTail} <span className="gradient">{content.headingGradient}</span>
            </h2>
            <p className="about-body">{content.body[0]}</p>
            <p className="about-body">{content.body[1]}</p>
            <p className="about-body"><strong>{content.body[2]}</strong></p>
            <div className="about-links">
              <a href="https://github.com/Haider-Haj-Ahmed" target="_blank" rel="noreferrer" className="about-link">{GH_ICON} {content.links[0]}</a>
              <a href="https://t.me/haider_cz" target="_blank" rel="noreferrer" className="about-link">{content.links[1]}</a>
              <a href="https://instagram.com/haider_cz" target="_blank" rel="noreferrer" className="about-link">{content.links[2]}</a>
              <a href="mailto:haideralhajahmed2@gmail.com" className="about-link">{content.links[3]}</a>
            </div>
          </div>

          <div className="reveal d2">
            <div className="glass" style={{ padding: '32px' }}>
              <div className="section-eyebrow" style={{ marginBottom: '20px' }}>{content.journey}</div>
              <div className="timeline">
                {content.timeline.map((item, i) => (
                  <div className="tl-item" key={i}>
                    <div className={`tl-dot${item.active ? '' : ' dim'}`} />
                    <div className="tl-year">{item.year}</div>
                    <div className="tl-title">{item.title}</div>
                    <div className="tl-desc">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
