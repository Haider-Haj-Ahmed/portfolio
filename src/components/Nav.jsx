export default function Nav({ content, lang, setLang }) {
  return (
    <>
      <header id="nav">
        <div className="nav-pill">
          <span className="nav-brand">{content.brand}</span>
          {content.links.map(link => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
          <a
            href="mailto:haideralhajahmed2@gmail.com?subject=Freelance%20Inquiry%20%E2%80%94%20From%20Portfolio&body=Hi%20Haider%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I'm%20interested%20in%20working%20with%20you.%0A%0A"
            className="nav-cta"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            {content.hireMe}
          </a>
          <button className="lang-switch" onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}>
            {content.langButton}
          </button>
          <button className="nav-ham" id="ham-btn" aria-label={content.menuAria}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div id="mob-menu">
        {content.mobileLinks.map(link => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
        <button className="mob-lang-switch" onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}>
          {content.langButton}
        </button>
      </div>
    </>
  )
}
