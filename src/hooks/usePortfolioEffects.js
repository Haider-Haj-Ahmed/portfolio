import { useEffect } from 'react'

export default function usePortfolioEffects() {
  useEffect(() => {
    const IS_TOUCH = window.matchMedia('(pointer: coarse)').matches
    const IS_REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = () => window.innerWidth <= 768

    /* ── Progress bar ── */
    const pb = document.getElementById('progress-bar')
    const onScroll = () => {
      if (!pb) return
      const p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      pb.style.width = (p * 100) + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    /* ── Nav: hamburger ── */
    const navEl = document.getElementById('nav')
    const ham = document.getElementById('ham-btn')
    const mob = document.getElementById('mob-menu')

    const handleHam = () => {
      const open = mob.classList.toggle('open')
      const spans = ham.querySelectorAll('span')
      spans[0].style.transform = open ? 'rotate(45deg) translate(4px,5px)' : ''
      spans[1].style.opacity = open ? '0' : '1'
      spans[2].style.transform = open ? 'rotate(-45deg) translate(4px,-5px)' : ''
    }
    ham?.addEventListener('click', handleHam)
    mob?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mob.classList.remove('open')
      ham.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1' })
    }))

    /* ── Nav: active section highlight ── */
    const navLinks = document.querySelectorAll('.nav-pill > a:not(.nav-cta)')
    const secObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(a => {
            a.classList.remove('active')
            if (a.getAttribute('href') === '#' + e.target.id) a.classList.add('active')
          })
        }
      })
    }, { threshold: 0.3 })
    document.querySelectorAll('section[id]').forEach(s => secObs.observe(s))

    /* ── Nav: fade on scroll down ── */
    let lastY = 0
    const onNavScroll = () => {
      const sy = window.scrollY
      const base = isMobile() ? '' : 'translateX(-50%)'
      if (sy > lastY && sy > 120) {
        navEl.style.opacity = '0.65'
        navEl.style.transform = isMobile() ? 'translateY(-4px) scale(0.97)' : 'translateX(-50%) translateY(-4px) scale(0.97)'
      } else {
        navEl.style.opacity = '1'
        navEl.style.transform = base
      }
      lastY = sy <= 0 ? 0 : sy
    }
    window.addEventListener('scroll', onNavScroll, { passive: true })

    /* ── Scroll reveal ── */
    const ro = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target) }
      })
    }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' })
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => ro.observe(el))

    /* ── Stagger grid children ── */
    let stObs
    if (!IS_REDUCED) {
      stObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return
          e.target.querySelectorAll(':scope > *').forEach((child, i) => {
            setTimeout(() => {
              child.style.opacity = '1'
              child.style.transform = 'none'
            }, i * 100)
          })
          stObs.unobserve(e.target)
        })
      }, { threshold: 0.08 })

      document.querySelectorAll('.exp-grid, .process-grid, .projects-list, .proof-strip, .skill-groups').forEach(grid => {
        grid.querySelectorAll(':scope > *').forEach(child => {
          child.style.opacity = '0'
          child.style.transform = 'translateY(28px)'
          child.style.transition = 'opacity .65s cubic-bezier(.22,.61,.36,1), transform .65s cubic-bezier(.22,.61,.36,1)'
        })
        stObs.observe(grid)
      })
    }

    /* ── Parallax ── */
    const parallaxTick = () => {
      if (IS_TOUCH || IS_REDUCED) return
      const sy = window.scrollY
      const heroCard = document.querySelector('.code-card-wrap')
      const heroGlow = document.querySelector('.hero-glow')
      if (heroCard) heroCard.style.transform = `translateY(${sy * .07}px)`
      if (heroGlow) heroGlow.style.transform = `translate(-50%, calc(-60% + ${sy * .12}px))`
      const orb1 = document.querySelector('.orb-1')
      const orb2 = document.querySelector('.orb-2')
      const orb3 = document.querySelector('.orb-3')
      if (orb1) orb1.style.transform = `translateY(${sy * .04}px)`
      if (orb2) orb2.style.transform = `translateY(${-sy * .03}px)`
      if (orb3) orb3.style.transform = `translate(-50%, calc(-50% + ${sy * .025}px))`
    }
    window.addEventListener('scroll', parallaxTick, { passive: true })

    /* ── 3D Card tilt ── */
    function initTilt(selector, cfg = {}) {
      if (IS_TOUCH || IS_REDUCED) return
      const { tilt = 10, lift = 14, useInner = true } = cfg
      document.querySelectorAll(selector).forEach(card => {
        let inner = null
        if (useInner) {
          if (!card.querySelector('.tilt-inner')) {
            inner = document.createElement('div')
            inner.className = 'tilt-inner'
            while (card.firstChild) inner.appendChild(card.firstChild)
            card.appendChild(inner)
          } else {
            inner = card.querySelector('.tilt-inner')
          }
          card.style.transformStyle = 'preserve-3d'
        }
        card.style.willChange = 'transform'

        const onMove = e => {
          const r = card.getBoundingClientRect()
          const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2)
          const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2)
          const rx = -dy * tilt, ry = dx * tilt
          card.style.transition = 'box-shadow .15s, border-color .15s'
          card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(${lift}px)`
          if (inner) {
            inner.style.transition = 'transform .08s linear'
            inner.style.transform = `translateZ(${lift + 6}px) translate(${dx * -7}px, ${dy * -7}px)`
          }
          card.style.boxShadow = `${-ry * 2.5}px ${rx * 2.5}px 50px rgba(0,0,0,.55), 0 0 50px rgba(139,92,246,${0.07 + Math.abs(dx * dy) * 0.18}), inset 0 1px 0 rgba(255,255,255,.07)`
          card.style.borderColor = `rgba(139,92,246,${0.22 + Math.abs(dx * dy) * 0.32})`
          card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%')
          card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%')
        }
        const onLeave = () => {
          card.style.transition = 'transform .5s cubic-bezier(.22,.61,.36,1), box-shadow .4s, border-color .35s'
          card.style.transform = ''
          card.style.boxShadow = ''
          card.style.borderColor = ''
          if (inner) {
            inner.style.transition = 'transform .5s cubic-bezier(.22,.61,.36,1)'
            inner.style.transform = 'translateZ(0px) translate(0,0)'
          }
        }
        card.addEventListener('mousemove', onMove)
        card.addEventListener('mouseleave', onLeave)
      })
    }

    initTilt('.exp-card', { tilt: 9, lift: 16, useInner: true })
    initTilt('.process-card', { tilt: 8, lift: 12, useInner: true })
    initTilt('.skill-group-card', { tilt: 4, lift: 7, useInner: true })
    initTilt('.code-card', { tilt: 5, lift: 10, useInner: false })

    if (!IS_TOUCH && !IS_REDUCED) {
      document.querySelectorAll('.proj-card').forEach(card => {
        const onMove = e => {
          const r = card.getBoundingClientRect()
          const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2)
          const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2)
          const rx = -dy * 4, ry = dx * 4
          card.style.transition = 'box-shadow .15s, border-color .15s'
          card.style.transform = `perspective(1400px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`
          card.style.borderColor = `rgba(139,92,246,${0.18 + Math.abs(dx * dy) * 0.25})`
          card.style.boxShadow = `0 ${10 + Math.abs(rx) * 2}px 60px rgba(0,0,0,.45), 0 0 40px rgba(139,92,246,${0.05 + Math.abs(dx * dy) * .1})`
        }
        const onLeave = () => {
          card.style.transition = 'transform .5s cubic-bezier(.22,.61,.36,1), box-shadow .4s, border-color .35s'
          card.style.transform = ''
          card.style.borderColor = ''
          card.style.boxShadow = ''
        }
        card.addEventListener('mousemove', onMove)
        card.addEventListener('mouseleave', onLeave)
      })
    }

    /* ── Glass shine ── */
    if (!IS_TOUCH) {
      document.querySelectorAll('.glass:not(.code-card)').forEach(el => {
        const onMove = e => {
          const r = el.getBoundingClientRect()
          const mx = ((e.clientX - r.left) / r.width * 100).toFixed(1)
          const my = ((e.clientY - r.top) / r.height * 100).toFixed(1)
          el.style.background = `radial-gradient(circle at ${mx}% ${my}%, rgba(255,255,255,.075), rgba(255,255,255,.03) 55%)`
        }
        const onLeave = () => { el.style.background = '' }
        el.addEventListener('mousemove', onMove)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    /* ── Magnetic buttons ── */
    if (!IS_TOUCH && !IS_REDUCED) {
      document.querySelectorAll('.btn-purple, .btn-ghost, .nav-cta').forEach(btn => {
        const onMove = e => {
          const r = btn.getBoundingClientRect()
          btn.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.22}px, ${(e.clientY - (r.top + r.height / 2)) * 0.22}px)`
        }
        const onLeave = () => {
          btn.style.transition = 'transform .4s cubic-bezier(.22,.61,.36,1)'
          btn.style.transform = ''
          setTimeout(() => { btn.style.transition = '' }, 400)
        }
        btn.addEventListener('mousemove', onMove)
        btn.addEventListener('mouseleave', onLeave)
      })
    }

    /* ── Ripple ── */
    function addRipple(el) {
      if (el.dataset.ripple) return
      el.dataset.ripple = '1'
      if (!el.style.position || el.style.position === 'static') el.style.position = 'relative'
      el.style.overflow = 'hidden'
      el.addEventListener('click', e => {
        const r = el.getBoundingClientRect()
        const size = Math.max(r.width, r.height) * 2.4
        const rip = document.createElement('span')
        rip.style.cssText = `position:absolute;border-radius:50%;pointer-events:none;width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px;background:rgba(139,92,246,.22);transform:scale(0);animation:rippleAnim .65s cubic-bezier(.22,.61,.36,1) forwards;z-index:9;`
        el.appendChild(rip)
        setTimeout(() => rip.remove(), 700)
      })
    }
    document.querySelectorAll('.btn-purple, .btn-ghost, .nav-cta, .cch, .about-link, .proj-gh-btn, .cpill, .anode').forEach(addRipple)

    /* ── Skill bars ── */
    const skObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        e.target.querySelectorAll('.sk-fill[data-w]').forEach((b, i) => {
          setTimeout(() => {
            b.style.width = b.dataset.w + '%'
            b.classList.add('shimmer')
            setTimeout(() => b.classList.remove('shimmer'), 2200)
          }, i * 140)
        })
        skObs.unobserve(e.target)
      })
    }, { threshold: 0.25 })
    document.querySelectorAll('.skill-group-card').forEach(g => skObs.observe(g))

    /* ── Count-up ── */
    const coObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const el = e.target, target = +el.dataset.count
        let start = null
        const step = ts => {
          if (!start) start = ts
          const p = Math.min((ts - start) / 1400, 1)
          el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target)
          if (p < 1) requestAnimationFrame(step)
          else el.textContent = target
        }
        requestAnimationFrame(step)
        coObs.unobserve(el)
      })
    }, { threshold: 0.5 })
    document.querySelectorAll('[data-count]').forEach(el => coObs.observe(el))

    /* ── Section headings word cascade ── */
    if (!IS_REDUCED) {
      document.querySelectorAll('.section-heading').forEach(h => {
        if (h.dataset.split) return
        h.dataset.split = '1'
        const walker = document.createTreeWalker(h, NodeFilter.SHOW_TEXT)
        const nodes = []
        let node
        while ((node = walker.nextNode())) nodes.push(node)
        nodes.forEach(tn => {
          const words = tn.textContent.split(/(\s+)/)
          const frag = document.createDocumentFragment()
          let wi = 0
          words.forEach(w => {
            if (/^\s+$/.test(w)) {
              frag.appendChild(document.createTextNode(w))
            } else {
              const span = document.createElement('span')
              span.style.cssText = `display:inline-block;opacity:0;transform:translateY(16px);transition:opacity .5s ${wi * 55}ms ease,transform .5s ${wi * 55}ms cubic-bezier(.22,.61,.36,1)`
              span.textContent = w
              frag.appendChild(span)
              wi++
            }
          })
          tn.parentNode.replaceChild(frag, tn)
        })
        const wObs = new IntersectionObserver(entries => {
          entries.forEach(e => {
            if (!e.isIntersecting) return
            e.target.querySelectorAll('span').forEach(s => {
              s.style.opacity = '1'
              s.style.transform = 'none'
            })
            wObs.unobserve(e.target)
          })
        }, { threshold: 0.4 })
        wObs.observe(h)
      })
    }

    /* ── Hero name glow on load ── */
    const heroName = document.querySelector('.hero-title .line-grad')
    if (heroName && !IS_REDUCED) {
      setTimeout(() => {
        heroName.style.transition = 'filter .6s ease'
        heroName.style.filter = 'drop-shadow(0 0 40px rgba(139,92,246,.85))'
        setTimeout(() => { heroName.style.filter = 'drop-shadow(0 0 16px rgba(139,92,246,.35))' }, 1100)
      }, 700)
    }

    /* ── Ticker pause on hover ── */
    const tickerEl = document.getElementById('ticker')
    if (tickerEl) {
      const track = tickerEl.querySelector('.ticker-track')
      tickerEl.addEventListener('mouseenter', () => { if (track) track.style.animationPlayState = 'paused' })
      tickerEl.addEventListener('mouseleave', () => { if (track) track.style.animationPlayState = 'running' })
    }

    /* ── Contact channel icon glow ── */
    document.querySelectorAll('.cch').forEach(ch => {
      const icon = ch.querySelector('.cch-icon')
      ch.addEventListener('mouseenter', () => {
        if (icon) { icon.style.background = 'rgba(139,92,246,.28)'; icon.style.borderColor = 'rgba(139,92,246,.4)' }
      })
      ch.addEventListener('mouseleave', () => {
        if (icon) { icon.style.background = ''; icon.style.borderColor = '' }
      })
    })

    /* ── Timeline dot pulse ── */
    const tlObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        e.target.querySelectorAll('.tl-dot').forEach((dot, i) => {
          setTimeout(() => {
            dot.style.transition = 'transform .3s ease, box-shadow .3s ease'
            dot.style.transform = 'scale(1.6)'
            setTimeout(() => { dot.style.transform = '' }, 320)
          }, i * 220)
        })
        tlObs.unobserve(e.target)
      })
    }, { threshold: 0.3 })
    document.querySelectorAll('.timeline').forEach(tl => tlObs.observe(tl))

    /* ── Tag hover glow ── */
    document.querySelectorAll('.stag, .ptag').forEach(tag => {
      tag.addEventListener('mouseenter', () => { tag.style.boxShadow = '0 0 16px rgba(139,92,246,.38)' })
      tag.addEventListener('mouseleave', () => { tag.style.boxShadow = '' })
    })

    /* ── Orb color on section ── */
    if (!IS_REDUCED) {
      const sections = [...document.querySelectorAll('section[id]')]
      const palette = [[109,40,217],[99,102,241],[139,92,246],[76,29,149],[109,40,217],[124,58,237],[79,70,229],[139,92,246],[109,40,217],[124,58,237]]
      const colorObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return
          const c = palette[sections.indexOf(e.target)] || palette[0]
          const orb1 = document.querySelector('.orb-1')
          if (orb1) {
            orb1.style.transition = 'background 1.6s ease'
            orb1.style.background = `radial-gradient(circle,rgba(${c[0]},${c[1]},${c[2]},.24),transparent 70%)`
          }
        })
      }, { threshold: 0.4 })
      sections.forEach(s => colorObs.observe(s))
    }

    /* ── Resize handler ── */
    const onResize = () => {
      if (navEl) navEl.style.transform = isMobile() ? '' : 'translateX(-50%)'
    }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', onNavScroll)
      window.removeEventListener('scroll', parallaxTick)
      window.removeEventListener('resize', onResize)
      secObs.disconnect()
      ro.disconnect()
      skObs.disconnect()
      coObs.disconnect()
      tlObs.disconnect()
      stObs?.disconnect()
    }
  }, [])
}
