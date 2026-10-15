export default function Nav() {
  return (
    <>
      <header id="nav">
        <div className="nav-pill">
          <span className="nav-brand">H.AHA</span>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#expertise">Build</a>
          <a href="#arsenal">Stack</a>
          <a href="#projects">Projects</a>
          <a href="#philosophy">Philosophy</a>
          <a href="#contact">Contact</a>
          <a
            href="mailto:haideralhajahmed2@gmail.com?subject=Freelance%20Inquiry%20%E2%80%94%20From%20Portfolio&body=Hi%20Haider%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I'm%20interested%20in%20working%20with%20you.%0A%0A"
            className="nav-cta"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Hire me
          </a>
          <button className="nav-ham" id="ham-btn" aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div id="mob-menu">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#expertise">What I Build</a>
        <a href="#arsenal">Tech Stack</a>
        <a href="#projects">Projects</a>
        <a href="#philosophy">Philosophy</a>
        <a href="#contact">Contact</a>
      </div>
    </>
  )
}
