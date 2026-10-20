import { useEffect } from 'react'

/**
 * Portfolio page animations & behaviour:
 * hero entrance, projects ticker, smooth scroll and custom cursor.
 * These were previously glued to the raw HTML; they now run on the
 * component tree (identical class names / structure).
 */
export function usePortfolioAnimations() {
  useEffect(() => {
    const cleanups: Array<() => void> = []

    // --- 1. Hero entrance animation: "Hi, I'm Bharath" name + letter reveal + masked text ---
    const setupHero = () => {
      const ease = 'cubic-bezier(0.16, 1, 0.3, 1)'

      const name = document.querySelector('[data-framer-name="Name"]') as HTMLElement | null
      if (name) {
        name.style.transition = `transform 1.1s ${ease} 0.1s`
        name.style.transform = 'translateX(-50%) scale(1)'
      }

      const para = document.querySelector('.framer-b25uum') as HTMLElement | null
      if (para) {
        const letters = para.querySelectorAll<HTMLElement>('span[style*="blur"]')
        letters.forEach((span, i) => {
          const delay = 0.15 + i * 0.035
          span.style.transition = `filter 0.7s ${ease} ${delay}s, transform 0.7s ${ease} ${delay}s`
          span.style.filter = 'blur(0px)'
          span.style.transform =
            'translateX(0px) translateY(0px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)'
        })
      }

      document.querySelectorAll<HTMLElement>('.framer-1ud93i0').forEach(el => {
        const opaque = 'linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)'
        el.style.transition = 'opacity 0.9s ease 0.35s'
        el.style.webkitMaskImage = opaque
        el.style.maskImage = opaque
      })

      // Boy face: un-hide the frozen mask, keep it static (no float/bob)
      const boyFace = document.querySelector<HTMLElement>('.framer-1kx9kf5')
      if (boyFace) {
        const opaque = 'linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)'
        boyFace.style.transition = 'opacity 0.9s ease 0.35s'
        boyFace.style.webkitMaskImage = opaque
        boyFace.style.maskImage = opaque
        boyFace.classList.add('vp-boy-face')
      }
    }

    // --- 2. Tickers: seamless auto-scrolling marquees ---
    // The footer "START A PROJECT" bar and framer "SERVICES" tickers
    // (`[data-framer-name="Ticker"]`) are auto-scrolling tickers. React ships
    // the static frames and re-creates the DOM on navigation, so the ticker
    // re-scans the live DOM every frame instead of capturing elements once.
    const setupTicker = (selector: string, trackSelector: string, speed = 34) => {
      const states = new Map<HTMLElement, { x: number; advance: number; paused: boolean }>()

      const ensureSet = () => {
        document.querySelectorAll<HTMLElement>(selector).forEach(section => {
          const track = section.querySelector<HTMLElement>(trackSelector)
          if (!track) return
          const ul = track.querySelector<HTMLElement>(':scope > ul')
          if (!ul) return

          let st = states.get(ul)
          if (!st) {
            const m = /translateX\((-?[\d.]+)px\)/.exec(ul.style.transform ?? '')
            st = { x: m ? parseFloat(m[1]) : 0, advance: 1, paused: false }
            states.set(ul, st)
            if (!ul.dataset.vpTicker) {
              ul.dataset.vpTicker = '1'
              ul.addEventListener('mouseenter', () => { st!.paused = true })
              ul.addEventListener('mouseleave', () => { st!.paused = false })
            }
          }

          // Originals are never guessed from child counts — clones carry
          // `vpClone` so the real set is always identifiable (React can
          // re-render the list and drop the imperative clones; re-add them).
          const all = Array.from(ul.children) as HTMLElement[]
          if (all.length === 0) return
          const originals = all.filter(el => !el.dataset.vpClone)
          if (originals.length === 0) return

          const gap = parseFloat(getComputedStyle(ul).gap) || 0
          const setWidth = originals.reduce((sum, el) => sum + el.getBoundingClientRect().width, 0)
          if (setWidth <= 0) return
          const advance = setWidth + gap * Math.max(0, originals.length - 1)
          const haveClones = all.length - originals.length
          const sets = 1 + Math.floor(haveClones / originals.length)
          const need = Math.max(2, Math.ceil((track.clientWidth + advance) / advance) + 1)
          for (let s = sets; s < need; s++) {
            for (const el of originals) {
              const clone = el.cloneNode(true) as HTMLElement
              clone.dataset.vpClone = '1'
              ul.appendChild(clone)
            }
          }
          track.style.overflow = 'hidden'
          st.advance = advance
        })

        // Drop state for ticker elements that were removed (route change).
        for (const key of states.keys()) {
          if (!document.contains(key)) states.delete(key)
        }
      }

      let rafId = 0
      let prev = performance.now()
      const step = (now: number) => {
        const dt = Math.min(50, now - prev) / 1000
        prev = now
        ensureSet()
        document.querySelectorAll<HTMLElement>(selector).forEach(section => {
          const track = section.querySelector<HTMLElement>(trackSelector)
          if (!track) return
          const ul = track.querySelector<HTMLElement>(':scope > ul')
          if (!ul) return
          const st = states.get(ul)
          if (!st || st.paused || st.advance <= 1) return
          st.x -= speed * dt
          if (st.x <= -st.advance) st.x += st.advance
          ul.style.transform = `translateX(${st.x}px)`
        })
        rafId = requestAnimationFrame(step)
      }
      rafId = requestAnimationFrame(step)
      cleanups.push(() => cancelAnimationFrame(rafId))
    }

    // Footer "START A PROJECT" bar + framer "SERVICES / what i offer" tickers.
    setupTicker('[data-framer-name="Ticker"]', '.framer-1232xio', 50)

    // --- 3. Full-page smooth scroll (Lenis-like wheel smoothing) ---
    const setupSmoothScroll = (): (() => void) => {
      let current = window.scrollY
      let target = window.scrollY
      let rafId = 0
      let running = false
      let lastTime = 0

      const isScrollableAncestor = (el: HTMLElement): boolean => {
        let node: HTMLElement | null = el
        while (node && node !== document.body) {
          const ov = getComputedStyle(node).overflowY
          if ((ov === 'auto' || ov === 'scroll') && node.scrollHeight > node.clientHeight + 1) return true
          node = node.parentElement
        }
        return false
      }

      const onWheel = (e: WheelEvent) => {
        if (e.ctrlKey || e.metaKey) return
        const el = e.target as HTMLElement | null
        if (!el) return
        const tag = el.tagName
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
        if (isScrollableAncestor(el)) return
        e.preventDefault()
        const delta =
          Math.abs(e.deltaY) >= Math.abs(e.deltaX)
            ? e.deltaY
            : e.deltaX * 0.6
        const max = document.documentElement.scrollHeight - window.innerHeight
        target = Math.min(max, Math.max(0, target + delta))
        if (!running) {
          current = window.scrollY
          lastTime = performance.now()
          running = true
          rafId = requestAnimationFrame(loop)
        }
      }

      const loop = (now: number) => {
        const dt = Math.min(50, now - lastTime)
        lastTime = now
        const k = Math.min(1, 0.16 * (dt / 16.67))
        current += (target - current) * k
        if (Math.abs(target - current) < 0.5) {
          current = target
          window.scrollTo(0, current)
          running = false
          return
        }
        window.scrollTo(0, current)
        rafId = requestAnimationFrame(loop)
      }

      const onScroll = () => {
        if (running && Math.abs(window.scrollY - current) > 2) {
          current = window.scrollY
          target = current
          running = false
        }
      }

      window.addEventListener('wheel', onWheel, { passive: false })
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => {
        window.removeEventListener('wheel', onWheel)
        window.removeEventListener('scroll', onScroll)
        if (rafId) cancelAnimationFrame(rafId)
      }
    }

    // --- 4. Custom cursor: instant dot + trailing ring (grows over links/buttons) ---
    const setupCustomCursor = (): (() => void) => {
      const fine =
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(hover: hover) and (pointer: fine)').matches
      if (!fine) return () => {}

      const dot = document.createElement('div')
      dot.className = 'vp-cursor-dot'
      dot.style.cssText =
        'position:fixed;left:0;top:0;width:6px;height:6px;border-radius:50%;' +
        'background:rgb(255,255,255);mix-blend-mode:difference;pointer-events:none;' +
        'z-index:99998;opacity:0;transform:translate(-50%,-50%);will-change:transform;'

      const ringOuter = document.createElement('div')
      ringOuter.style.cssText =
        'position:fixed;left:0;top:0;pointer-events:none;z-index:99999;' +
        'opacity:0;transform:translate(-50%,-50%);will-change:transform;'

      const ring = document.createElement('div')
      ring.className = 'vp-cursor-ring'
      ring.style.cssText =
        'width:36px;height:36px;border:1px solid rgb(255,255,255);border-radius:50%;' +
        'mix-blend-mode:difference;' +
        'transition:transform .35s cubic-bezier(.16,1,.3,1),background-color .35s ease,border-color .35s ease,opacity .35s ease;'

      ringOuter.appendChild(ring)
      document.body.appendChild(dot)
      document.body.appendChild(ringOuter)

      let mx = window.innerWidth / 2
      let my = window.innerHeight / 2
      let rx = mx
      let ry = my
      let rafId = 0
      let visible = false

      const onMove = (e: MouseEvent) => {
        mx = e.clientX
        my = e.clientY
        dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`
        if (!visible) {
          visible = true
          dot.style.opacity = '1'
          ringOuter.style.opacity = '1'
          rx = mx
          ry = my
        }
        if (!rafId) rafId = requestAnimationFrame(loop)
      }

      const loop = () => {
        rafId = 0
        rx += (mx - rx) * 0.16
        ry += (my - ry) * 0.16
        ringOuter.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`
        if (Math.abs(mx - rx) > 0.5 || Math.abs(my - ry) > 0.5) {
          rafId = requestAnimationFrame(loop)
        }
      }

      const HOVER_SELECTOR =
        'a, button, [role="button"], [data-highlight="true"], [data-framer-cursor], input[type="submit"]'

      const isViewText = (el: HTMLElement | null): boolean => {
        let node: HTMLElement | null = el
        for (let depth = 0; node && depth < 4; depth++, node = node.parentElement) {
          const text = (node.textContent ?? '').trim()
          if (text.length > 0 && text.length <= 60 && /\bview\b/i.test(text)) return true
        }
        return false
      }

      const onOver = (e: MouseEvent) => {
        const t = e.target as HTMLElement | null
        if (!t) return
        if (t.closest(HOVER_SELECTOR)) ring.classList.add('vp-cursor-hover')
        if (isViewText(t)) ring.classList.add('vp-cursor-view')
      }
      const onOut = (e: MouseEvent) => {
        const t = e.target as HTMLElement | null
        if (!t) return
        if (t.closest(HOVER_SELECTOR)) ring.classList.remove('vp-cursor-hover')
        if (isViewText(t)) ring.classList.remove('vp-cursor-view')
      }
      const onLeave = () => {
        visible = false
        dot.style.opacity = '0'
        ringOuter.style.opacity = '0'
      }

      document.body.classList.add('vp-custom-cursor')
      window.addEventListener('mousemove', onMove)
      document.addEventListener('mouseover', onOver)
      document.addEventListener('mouseout', onOut)
      document.documentElement.addEventListener('mouseleave', onLeave)

      return () => {
        window.removeEventListener('mousemove', onMove)
        document.removeEventListener('mouseover', onOver)
        document.removeEventListener('mouseout', onOut)
        document.documentElement.removeEventListener('mouseleave', onLeave)
        cancelAnimationFrame(rafId)
        document.body.classList.remove('vp-custom-cursor')
        dot.remove()
        ringOuter.remove()
      }
    }

    setupHero()
    cleanups.push(setupSmoothScroll())
    cleanups.push(setupCustomCursor())

    return () => {
      cleanups.forEach(fn => fn())
    }
  }, [])
}
