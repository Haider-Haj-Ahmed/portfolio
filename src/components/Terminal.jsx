import { useState, useRef, useEffect } from 'react'

const CMDS = {
  help:       () => `<span class="tc">Commands:</span> <span class="tp">whois · skills · projects · contact · laravel · php · mysql · philosophy · process · clear</span>`,
  whois:      () => `<span class="tw">Haider Al-Haj Ahmed</span> <span class="td">—</span> Backend Engineer & Laravel Specialist<br/><span class="td">Student @ Homs University · Former translator turned systems architect</span>`,
  skills:     () => `<span class="tc">Core:</span> <span class="tp">Laravel 95% · PHP 90% · REST APIs 88% · Livewire 82% · MySQL 80%</span><br/><span class="tc">Principles:</span> SOLID · OOP · MVC · Clean Code · SoC · DRY`,
  projects:   () => `<span class="tp">01</span> TechTalk API       <span class="td">→</span> Social platform · OTP auth · feed algorithm<br/><span class="tp">02</span> WorkNetSYR API     <span class="td">→</span> Job market · Forsa mobile app backbone<br/><span class="tp">03</span> Dental Clinic API  <span class="td">→</span> ~60 endpoints · charting · billing · queues<br/><span class="tp">04</span> Syriana Platform   <span class="td">→</span> Laravel + Livewire tourism full-stack`,
  contact:    () => `<span class="tc">Email:</span>    <span class="tp">haideralhajahmed2@gmail.com</span><br/><span class="tc">GitHub:</span>   <span class="tp">github.com/Haider-Haj-Ahmed</span><br/><span class="tc">Telegram:</span> <span class="tp">@haider_cz</span><br/><span class="tc">WhatsApp:</span> <span class="tp">+963 932 938 041</span>`,
  laravel:    () => `<span class="tp">Laravel</span> — PHP's most elegant framework.<br/>Routing, Eloquent ORM, Sanctum auth, Queues, Horizon, Events.<br/>Used from v8 through v13 in production systems.`,
  php:        () => `<span class="tp">PHP 8+</span> — Typed properties, enums, fibers, match, readonly.<br/>Modern OOP throughout. No cowboy code.`,
  mysql:      () => `<span class="tp">MySQL</span> — Schema design, normalized tables, index strategy, pessimistic locking.<br/>Eloquent ORM on top, raw queries when precision demands it.`,
  philosophy: () => `<span class="tc">1.</span> An API is a contract, not a convenience.<br/><span class="tc">2.</span> Business logic in the domain, not the controller.<br/><span class="tc">3.</span> The database is not a detail — it's the foundation.<br/><span class="tc">4.</span> Security is a first-class feature.<br/><span class="tc">5.</span> Code you can read is code you can maintain.`,
  process:    () => `<span class="tp">01 DISCOVER</span> <span class="td">→</span> Understand the domain before touching code<br/><span class="tp">02 DESIGN</span>   <span class="td">→</span> API contract before implementation<br/><span class="tp">03 BUILD</span>    <span class="td">→</span> Vertical slices, always shippable<br/><span class="tp">04 HARDEN</span>  <span class="td">→</span> Validation, auth, throttling, docs`,
}

const PILLS = ['whois','projects','skills','contact','philosophy','laravel','process','help','clear']

const INITIAL = [
  { html: `<span class="tg">haider@portfolio</span> <span class="td">~</span>` },
  { html: `<span class="tc">Welcome to Haider Al-Haj Ahmed's portfolio.</span>` },
  { html: `<span class="td">Type </span><span class="tp">help</span><span class="td"> to see available commands.</span>` },
]

export default function Terminal() {
  const [lines, setLines] = useState(INITIAL)
  const [input, setInput] = useState('')
  const bodyRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [lines])

  function runCmd(cmd) {
    const c = cmd.trim().toLowerCase()
    if (!c) return
    if (c === 'clear') { setLines([]); return }
    const fn = CMDS[c]
    const next = [
      { html: `<span class="tg">❯</span> <span class="tw">${c}</span>` },
      fn
        ? { html: fn() }
        : { html: `<span class="tr">command not found: ${c}</span> — type <span class="tp">help</span>` },
    ]
    setLines(prev => [...prev, ...next])
  }

  return (
    <section id="terminal-section">
      <div className="container">
        <div className="term-layout">
          <div className="term-intro reveal">
            <div className="section-eyebrow">07 / INTERACTIVE CLI</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(26px,3vw,40px)', marginTop: '12px' }}>
              Ask the <span className="gradient">terminal.</span>
            </h2>
            <p>Not a fan of scrolling? Type a command and get straight to the information you need.</p>
            <div className="cmd-pills">
              {PILLS.map(p => (
                <button key={p} className="cpill" onClick={() => runCmd(p)}>{p}</button>
              ))}
            </div>
          </div>

          <div className="reveal d2">
            <div className="terminal">
              <div className="term-bar">
                <div className="cc-dots"><span /><span /><span /></div>
                <span className="term-title">haider@portfolio — zsh</span>
              </div>
              <div className="term-body" ref={bodyRef}>
                <div id="term-out">
                  {lines.map((l, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: l.html }} />
                  ))}
                </div>
                <div className="term-ps">
                  <span className="ps1">❯</span>
                  <input
                    id="term-in"
                    type="text"
                    placeholder="Type a command..."
                    spellCheck="false"
                    autoComplete="off"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        runCmd(input)
                        setInput('')
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
