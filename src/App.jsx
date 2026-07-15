import usePortfolioEffects from './hooks/usePortfolioEffects'

import Nav        from './components/Nav'
import Hero       from './components/Hero'
import Ticker     from './components/Ticker'
import About      from './components/About'
import Proof      from './components/Proof'
import Expertise  from './components/Expertise'
import Arsenal    from './components/Arsenal'
import Projects   from './components/Projects'
import Philosophy from './components/Philosophy'
import Process    from './components/Process'
import Terminal   from './components/Terminal'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  usePortfolioEffects()

  return (
    <>
      {/* Background atmosphere */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      <div id="progress-bar" />

      <Nav />
      <Hero />
      <Ticker />
      <About />
      <Proof />
      <Expertise />
      <Arsenal />
      <Projects />
      <Philosophy />
      <Process />
      <Terminal />
      <Contact />
      <Footer />
    </>
  )
}
