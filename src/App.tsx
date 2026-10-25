import { Fragment, Suspense, lazy, useEffect, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { usePortfolioAnimations } from './hooks/usePortfolioAnimations'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

import ChatWidget from './Components/ChatWidget'
import { ChatProvider } from './Components/ChatContext'
import SpriteIcons from './Components/SpriteIcons'

// Route-level code splitting: each page ships in its own chunk and
// is only downloaded when the user visits it.
const PortfolioHome = lazy(() => import('./pages/PortfolioHome'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ProjectsIndex = lazy(() => import('./pages/ProjectsIndex'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const WorkPage = lazy(() => import('./pages/WorkPage'))
const CrunchPage = lazy(() => import('./pages/CrunchPage'))
const XrDesignPage = lazy(() => import('./pages/XrDesignPage'))
const PetpediaPage = lazy(() => import('./pages/PetpediaPage'))
const AtBooksPage = lazy(() => import('./pages/AtBooksPage'))
const AteatsPage = lazy(() => import('./pages/AteatsPage'))
const BeutaPage = lazy(() => import('./pages/BeutaPage'))
const EmergencyAlertPage = lazy(() => import('./pages/EmergencyAlertPage'))
const AtBotsPage = lazy(() => import('./pages/AtBotsPage'))
const CyosPage = lazy(() => import('./pages/CyosPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

// After the first page is interactive, quietly fetch the remaining
// route chunks during idle time so later navigation feels instant.
// Skipped for users with Data Saver enabled.
function prefetchRouteChunks() {
  ;[
    () => import('./pages/PortfolioHome'),
    () => import('./pages/AboutPage'),
    () => import('./pages/ProjectsIndex'),
    () => import('./pages/ProjectDetail'),
    () => import('./pages/WorkPage'),
    () => import('./pages/CrunchPage'),
    () => import('./pages/XrDesignPage'),
    () => import('./pages/PetpediaPage'),
    () => import('./pages/AtBooksPage'),
    () => import('./pages/AteatsPage'),
    () => import('./pages/BeutaPage'),
    () => import('./pages/EmergencyAlertPage'),
    () => import('./pages/CyosPage'),
    () => import('./pages/NotFound'),
  ].forEach(load => {
    load().catch(() => {})
  })
}

function PageFallback() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
      }}
      aria-busy="true"
    >
      <span
        style={{
          width: 32,
          height: 32,
          border: '3px solid #EAEAEA',
          borderTopColor: '#222',
          borderRadius: '50%',
          animation: 'vp-page-spin 0.7s linear infinite',
        }}
      />
      <style>{`@keyframes vp-page-spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  )
}

function FrameJunctionStars() {
  const { pathname } = useLocation()
  const layerRef = useRef<HTMLDivElement | null>(null)
  const [points, setPoints] = useState<number[]>([])

  useEffect(() => {
    let cancelled = false

    const measure = () => {
      if (cancelled) return
      const frame = document.querySelector('.site-frame')
      if (!frame || !layerRef.current) return
      const frameRect = frame.getBoundingClientRect()
      const tops: number[] = []
      frame.querySelectorAll<HTMLElement>('main > *').forEach(sec => {
        const r = sec.getBoundingClientRect()
        const t = r.top - frameRect.top
        if (t > 2 && r.height > 10) tops.push(t)
      })
      setPoints(tops)
    }

    let tries = 0
    const initialPoll = () => {
      if (cancelled || tries > 15) return
      const frame = document.querySelector('.site-frame')
      const count = frame ? frame.querySelectorAll('main > *').length : 0
      if (count > 0) measure()
      else { tries++; setTimeout(initialPoll, 200) }
    }
    initialPoll()

    const timeout = window.setTimeout(measure, 600)

    const mo = new MutationObserver(() => measure())
    const ro = new ResizeObserver(() => measure())
    const frame = document.querySelector('.site-frame')
    if (frame) {
      mo.observe(frame, { subtree: true, childList: true, attributes: true })
      ro.observe(frame)
    }
    const onScroll = () => measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelled = true
      clearTimeout(timeout)
      mo.disconnect()
      ro.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pathname])

  return (
    <div ref={layerRef} className="frame-junction-layer" aria-hidden="true">
      {points.map((y, i) => (
        <Fragment key={`${pathname}-${i}`}>
          <span className="frame-junction-star frame-junction-star-left" style={{ top: y - 6 }} />
          <span className="frame-junction-star frame-junction-star-right" style={{ top: y - 6 }} />
        </Fragment>
      ))}
    </div>
  )
}

function App() {
  usePortfolioAnimations()

  useEffect(() => {
    const setScrollbar = () => {
      const half = (window.innerWidth - document.documentElement.clientWidth) / 2
      document.documentElement.style.setProperty('--scrollbar-offset', `${half}px`)
    }
    setScrollbar()
    window.addEventListener('resize', setScrollbar)
    return () => window.removeEventListener('resize', setScrollbar)
  }, [])

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    if (conn?.saveData) return

    const start = () => window.setTimeout(prefetchRouteChunks, 2000)
    if (document.readyState === 'complete') start()
    else window.addEventListener('load', start, { once: true })
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ChatProvider>
        <SpriteIcons />
        <div className="site-frame">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<PortfolioHome />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/projects" element={<ProjectsIndex />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/crunch" element={<CrunchPage />} />
              <Route path="/xr-design" element={<XrDesignPage />} />
              <Route path="/petpedia" element={<PetpediaPage />} />
              <Route path="/atbooks" element={<AtBooksPage />} />
              <Route path="/ateats" element={<AteatsPage />} />
              <Route path="/beuta" element={<BeutaPage />} />
              <Route path="/emergency-alert" element={<EmergencyAlertPage />} />
              <Route path="/atbots" element={<AtBotsPage />} />
              <Route path="/cyos" element={<CyosPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <FrameJunctionStars />
          <span className="frame-star frame-star-tl" aria-hidden="true" />
          <span className="frame-star frame-star-tr" aria-hidden="true" />
          <span className="frame-star frame-star-bl" aria-hidden="true" />
          <span className="frame-star frame-star-br" aria-hidden="true" />
        </div>
        <ChatWidget />
      </ChatProvider>
    </BrowserRouter>
  )
}

export default App
