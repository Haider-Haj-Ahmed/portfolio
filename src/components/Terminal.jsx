import { useState, useRef, useEffect } from 'react'

const PILLS = ['whois', 'projects', 'skills', 'contact', 'philosophy', 'laravel', 'process', 'help', 'clear']

export default function Terminal({ content }) {
  const INITIAL = content.initial.map(html => ({ html }))
  const [lines, setLines] = useState(INITIAL)
  const [input, setInput] = useState('')
  const bodyRef = useRef(null)

  useEffect(() => {
    setLines(INITIAL)
    setInput('')
  }, [content])

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [lines])

  function runCmd(cmd) {
    const c = cmd.trim().toLowerCase()
    if (!c) return
    if (c === 'clear') {
      setLines([])
      return
    }

    const output = content.cmds[c]
    const next = [
      { html: `<span class="tg">❯</span> <span class="tw">${c}</span>` },
      output
        ? { html: output }
        : { html: `<span class="tr">${content.unknown}: ${c}</span> ${content.typeHelp} <span class="tp">help</span>` },
    ]
    setLines(prev => [...prev, ...next])
  }

  return (
    <section id="terminal-section">
      <div className="container">
        <div className="term-layout">
          <div className="term-intro reveal">
            <div className="section-eyebrow">{content.eyebrow}</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(26px,3vw,40px)', marginTop: '12px' }}>
              {content.heading} <span className="gradient">{content.headingGradient}</span>
            </h2>
            <p>{content.intro}</p>
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
                <span className="term-title">{content.termTitle}</span>
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
                    placeholder={content.placeholder}
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
