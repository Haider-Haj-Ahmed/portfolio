import { useEffect, useState } from 'react'
import usePortfolioEffects from './hooks/usePortfolioEffects'

import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Proof from './components/Proof'
import Expertise from './components/Expertise'
import Arsenal from './components/Arsenal'
import Projects from './components/Projects'
import Philosophy from './components/Philosophy'
import Process from './components/Process'
import Terminal from './components/Terminal'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { CONTENT, LANG_DIR } from './i18n/content'

export default function App() {
  const [lang, setLang] = useState('en')
  const content = CONTENT[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = LANG_DIR[lang]
  }, [lang])

  usePortfolioEffects()

  return (
    <>
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      <div id="progress-bar" />

      <Nav content={content.nav} lang={lang} setLang={setLang} />
      <Hero content={content.hero} />
      <Ticker items={content.ticker} />
      <About content={content.about} />
      <Proof labels={content.proof} />
      <Expertise content={content.expertise} />
      <Arsenal content={content.arsenal} />
      <Projects content={content.projects} />
      <Philosophy content={content.philosophy} />
      <Process content={content.process} />
      <Terminal content={content.terminal} />
      <Contact content={content.contact} />
      <Footer content={content.footer} />
    </>
  )
}
