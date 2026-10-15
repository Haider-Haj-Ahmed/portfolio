export default function Hero({ content }) {
  return (
    <section id="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-ring" aria-hidden="true" />
      <div className="hero-ring hero-ring2" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-avail">
            <span className="avail-dot" />
            {content.availability}
          </div>

          <h1 className="hero-title">
            <span className="line-grad" style={{ fontSize: 'clamp(26px,3.5vw,48px)', letterSpacing: '-.02em', marginBottom: '2px' }}>
              Haider Al-Haj Ahmed
            </span>
            <span className="line-white">{content.titleLines[0]}</span>
            <span className="line-white">{content.titleLines[1]}</span>
            <span className="line-white">{content.titleTail} <span className="gradient">{content.titleGradient}</span></span>
          </h1>

          <p className="hero-sub">{content.sub}</p>

          <div className="hero-btns">
            <a href="#projects" className="btn-purple">
              {content.viewProjects}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="mailto:haideralhajahmed2@gmail.com" className="btn-ghost">{content.getInTouch}</a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num"><span data-count="4">0</span>+</div>
              <div className="hero-stat-label">{content.stats[0]}</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num"><span data-count="60">0</span>+</div>
              <div className="hero-stat-label">{content.stats[1]}</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num"><span data-count="5">0</span></div>
              <div className="hero-stat-label">{content.stats[2]}</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="code-card-wrap">
            <div className="float-badge fb-1">⚡ Laravel 13</div>
            <div className="float-badge fb-2">🔐 Sanctum Auth</div>
            <div className="float-badge fb-3">✦ PHP 8+</div>

            <div className="code-card">
              <div className="code-card-bar">
                <div className="cc-dots"><span /><span /><span /></div>
                <span className="cc-filename">AppointmentController.php</span>
              </div>
              <div className="code-body">
                <span className="cm">{content.codeComment}</span>{'\n'}
                <span className="ck">public function</span>{' '}<span className="cf">store</span>(StoreRequest <span className="cv">$request</span>){'\n'}
                {'{'}{'\n'}
                {'    '}<span className="cv">$this</span>-&gt;<span className="cf">authorize</span>(<span className="cs">'create'</span>, Appointment::<span className="ck">class</span>);{'\n\n'}
                {'    '}<span className="ck">return</span> DB::<span className="cf">transaction</span>(<span className="ck">function</span> () <span className="ck">use</span> (<span className="cv">$request</span>) {'{'}{'\n'}
                {'        '}<span className="cv">$slot</span>{'  '} = TimeSlot::<span className="cf">lockForUpdate</span>(){'\n'}
                {'            '}-&gt;<span className="cf">findOrFail</span>(<span className="cv">$request</span>-&gt;<span className="cf">integer</span>(<span className="cs">'slot_id'</span>));{'\n\n'}
                {'        '}<span className="cf">throw_if</span>(<span className="cv">$slot</span>-&gt;is_booked, ConflictException::<span className="ck">class</span>);{'\n\n'}
                {'        '}<span className="cv">$appt</span> = Appointment::<span className="cf">create</span>(<span className="cv">$request</span>-&gt;<span className="cf">validated</span>());{'\n'}
                {'        '}<span className="cv">$slot</span>-&gt;<span className="cf">markBooked</span>();{'\n\n'}
                {'        '}<span className="cf">dispatch</span>(<span className="ck">new</span> <span className="cn">SendReminderJob</span>(<span className="cv">$appt</span>));{'\n\n'}
                {'        '}<span className="ck">return</span> AppointmentResource::<span className="cf">make</span>(<span className="cv">$appt</span>){'\n'}
                {'            '}-&gt;<span className="cf">response</span>()-&gt;<span className="cf">setStatusCode</span>(<span className="cs">201</span>);{'\n'}
                {'    }'});{'\n'}
                {'}'}
              </div>
              <div className="code-footer">
                <span className="badge-green">{content.testsPassing}</span>
                <span className="badge-purple">Laravel 13</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-line" aria-hidden="true">
        <div className="scroll-line-bar" />
        <span>{content.scroll}</span>
      </div>
    </section>
  )
}
