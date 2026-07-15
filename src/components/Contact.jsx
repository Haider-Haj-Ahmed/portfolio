const CHANNELS = [
  {
    href: 'mailto:haideralhajahmed2@gmail.com',
    label: 'EMAIL',
    value: 'haideralhajahmed2@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    href: 'https://github.com/Haider-Haj-Ahmed',
    label: 'GITHUB',
    value: 'Haider-Haj-Ahmed',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.72-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    href: 'https://t.me/haider_cz',
    label: 'TELEGRAM',
    value: '@haider_cz',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.18-.357.295-.6.295l.213-3.053 5.56-5.023c.24-.213-.054-.333-.373-.12l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.537-.194 1.006.131.833.94z"/>
      </svg>
    ),
  },
  {
    href: 'https://wa.me/963932938041',
    label: 'WHATSAPP',
    value: '+963 932 938 041',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .06 5.435.058 12.002a11.9 11.9 0 001.591 5.947L0 24l6.336-1.663a11.93 11.93 0 005.709 1.455h.005c6.554 0 11.89-5.435 11.893-12.003a11.82 11.82 0 00-3.487-8.412z"/>
      </svg>
    ),
  },
  {
    href: 'https://instagram.com/haider_cz',
    label: 'INSTAGRAM',
    value: '@haider_cz',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
]

const SPEC_TAGS = ['Laravel APIs','Backend Architecture','PHP Systems','MySQL Design','Livewire']

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-wrap reveal">
          <div className="contact-glow" aria-hidden="true" />
          <div className="contact-inner">

            {/* ── Left ── */}
            <div className="contact-left">
              <div className="section-eyebrow">08 / CONTACT</div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--text3)', letterSpacing: '.1em', marginTop: '12px', marginBottom: '6px' }}>
                HAIDER AL-HAJ AHMED
              </p>
              <h2 className="contact-heading">
                Let's build<br /><span className="gradient">something real.</span>
              </h2>
              <p className="contact-sub">
                Open to freelance backend projects, API consulting, and technical collaboration.
                If you have a system that needs to scale cleanly, let's talk.
              </p>
              <div className="contact-channels">
                {CHANNELS.map(ch => (
                  <a key={ch.label} href={ch.href} target={ch.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className="cch">
                    <div className="cch-icon">{ch.icon}</div>
                    <div>
                      <div className="cch-lbl">{ch.label}</div>
                      <div className="cch-val">{ch.value}</div>
                    </div>
                    <span className="cch-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right panel ── */}
            <div className="contact-right">
              <div className="cpanel-block">
                <div className="cp-lbl">CURRENT STATUS</div>
                <div className="avail-badge">
                  <span className="avail-dot" style={{ width: '8px', height: '8px' }} /> Available for work
                </div>
              </div>
              <hr className="cpanel-divider" />
              <div className="cpanel-block">
                <div className="cp-lbl">LOCATION</div>
                <div className="cp-val">Homs, Syria / GMT+3</div>
              </div>
              <hr className="cpanel-divider" />
              <div className="cpanel-block">
                <div className="cp-lbl">SPECIALIZATION</div>
                <div className="cp-tags">
                  {SPEC_TAGS.map((t, i) => (
                    <span key={t} className={`stag ${i < 2 ? 'accent' : ''}`}>{t}</span>
                  ))}
                </div>
              </div>
              <hr className="cpanel-divider" />
              <div className="cpanel-block">
                <div className="cp-lbl">RESPONSE TIME</div>
                <div className="cp-val" style={{ fontSize: '14px' }}>Usually within 24 hours</div>
              </div>
              <hr className="cpanel-divider" />
              <div className="cpanel-block">
                <div className="cp-lbl">IDEAL PROJECTS</div>
                <div style={{ fontSize: '13px', color: 'var(--text2)', lineHeight: '1.75', marginTop: '6px' }}>
                  REST API builds, Laravel system architecture, domain modeling, backend consulting — anything where clean code and scalable design are the priority.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
