import Box from '@mui/material/Box'
import type { FramerStyle } from '../Components/framer'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SpriteIcons from '../Components/SpriteIcons'
import MoreWorkMarquee from '../Components/MoreWorkMarquee'
import ProjectCard from '../Components/ProjectCard'
import { WORKDATASECTION, LATESTINSIGHTS_CARD, PORTFOLIO, LATESTINSIGHTS, FREELANCE_DESIGN_ITEMS } from '../data/work'

const HYDRATE =
  '{&quot;routeId&quot;:&quot;dzBndgA20&quot;,&quot;localeId&quot;:&quot;default&quot;,&quot;breakpoints&quot;:[{&quot;hash&quot;:&quot;et5t2c&quot;,&quot;mediaQuery&quot;:&quot;(min-width: 1200px)&quot;},{&quot;hash&quot;:&quot;162xyd4&quot;,&quot;mediaQuery&quot;:&quot;(min-width: 810px) and (max-width: 1199.98px)&quot;},{&quot;hash&quot;:&quot;1ae2x0g&quot;,&quot;mediaQuery&quot;:&quot;(max-width: 809.98px)&quot;},{&quot;hash&quot;:&quot;emw559&quot;,&quot;mediaQuery&quot;:&quot;(min-width: 1200px)&quot;},{&quot;hash&quot;:&quot;1jwitme&quot;,&quot;mediaQuery&quot;:&quot;(min-width: 810px) and (max-width: 1199.98px)&quot;},{&quot;hash&quot;:&quot;1wefnif&quot;,&quot;mediaQuery&quot;:&quot;(max-width: 809.98px)&quot;}]}'

const container: FramerStyle = {
  width: '100%',
  maxWidth: '100%',
  margin: '0 auto',
  padding: 0,
  boxSizing: 'border-box',
}

const contentPad: FramerStyle = {
  padding: '0 16px',
  boxSizing: 'border-box',
}

const heading: FramerStyle = {
  fontFamily: '"Inter", sans-serif',
  fontWeight: 600,
  letterSpacing: '-0.02em',
  lineHeight: 1.05,
  textTransform: 'uppercase',
  color: 'rgb(0, 0, 0)',
  margin: 0,
}

const pill: FramerStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 18px',
  borderRadius: '100px',
  fontFamily: '"Inter", sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  textTransform: 'none',
}

const heroFeatures = [
  ['♟', 'Reliable partner'],
  ['★', 'Senior level quality'],
  ['↯', 'Fast execution'],
  ['▰', 'System thinking'],
  ['●', 'Clear process'],
  ['◉', 'On-brand, every time'],
  ['↗', 'Smooth handoff'],
  ['◌', 'Thoughtful feedback'],
]

function WorkHero() {
  return (
    <Box component="section" aria-labelledby="work-page-title" style={{ width: '100%', background: '#fff', padding: '12px 16px 0', boxSizing: 'border-box' } as FramerStyle}>
      <Box style={{ width: '100%', maxWidth: '100%', margin: '0 auto', boxSizing: 'border-box', position: 'relative', boxShadow: 'none' } as FramerStyle}>
        <div className="star-join-point" style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)' }} />
        <div className="star-join-point" style={{ right: 0, top: 0, transform: 'translate(50%, -50%)' }} />
        <Box className="work-hero-inner">
          <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 24, minWidth: 0 } as FramerStyle}>
            <h1 id="work-page-title" style={{ ...heading, fontSize: 'clamp(64px, 11vw, 125px)', fontWeight: 600, letterSpacing: '0em', lineHeight: 0.9 } as FramerStyle}>
              Projects
            </h1>
            <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 17, lineHeight: 1.6, color: '#6B6B6B', margin: 0, maxWidth: 540 } as FramerStyle}>
              {PORTFOLIO.description}
            </p>
          </Box>

  <Box
    className="work-hero-visual"
    style={
      {
        position: 'relative',
        width: 'clamp(300px, 34vw, 430px)',
        height: 'clamp(180px, 22vw, 240px)',
        flex: '0 1 430px',
        overflow: 'visible',
      } as FramerStyle
    }
  >
  {/* Character Image */}
  <Box
    component="img"
    src="/work_s.png"
    alt="Portfolio introduction"
    style={
      {
        position: 'absolute',
        right: '0',
        bottom: '0',
        width: '68%',
        height: 'auto',
        maxHeight: '100%',
        objectFit: 'contain',
        objectPosition: 'right bottom',
        display: 'block',
      } as FramerStyle
    }
  />

  {/* Portfolio Text Bubble */}
  <Box
    className="work-hero-bubble"
    style={
      {
        position: 'absolute',
        top: '18px',
        left: '0',
        zIndex: 2,

        padding: '14px 24px',
        minWidth: '200px',

        borderRadius: '18px',
        background: '#f2f2f2',
        color: '#111',

        fontFamily: '"Inter", sans-serif',
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: 1.2,
        textAlign: 'center',
      } as FramerStyle
    }
  >
    Take a Look at My Portfolio

    {/* Speech Bubble Tail */}
    <svg
      style={
        {
          position: 'absolute',
          bottom: '-8px',
          right: '20px',
          width: '16px',
          height: '10px',
          zIndex: 1,
        } as FramerStyle
      }
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0L8 10L16 0H0Z" fill="#f2f2f2" />
    </svg>
  </Box>
</Box>
        </Box>

        <Box className="work-marquee" style={{ minHeight: 68, borderTop: '1px solid #ededed', borderBottom: '1px solid #ededed', overflow: 'hidden', boxSizing: 'border-box', position: 'relative' } as FramerStyle}>
          <div className="star-join-point" style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)' }} />
          <div className="star-join-point" style={{ right: 0, top: 0, transform: 'translate(50%, -50%)' }} />
          <div className="star-join-point" style={{ left: 0, bottom: 0, transform: 'translate(-50%, 50%)' }} />
          <div className="star-join-point" style={{ right: 0, bottom: 0, transform: 'translate(50%, 50%)' }} />
          <Box className="work-marquee-track">
            {[...heroFeatures, ...heroFeatures].map(([icon, label], index) => (
              <span key={`${label}-${index}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 9, flex: 'none', color: '#626262', fontFamily: '"Inter", sans-serif', fontSize: 14, whiteSpace: 'nowrap' } as FramerStyle}>
                <b style={{ color: '#595959', fontSize: 15, lineHeight: 1 } as FramerStyle}>{icon}</b>
                {label}
              </span>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function isExternal(path: string) {
  return /^https?:/.test(path)
}

function PortfolioCard({ item }: { item: (typeof WORKDATASECTION)[number] }) {
  return (
    <ProjectCard
      title={item.title}
      category={item.tags.join(' · ')}
      image={item.image}
      to={item.path}
      external={isExternal(item.path)}
      sx={{ width: '100%', p: '0 0 32px' }}
    />
  )
}

function WorksGrid() {
  return (
    <Box component="section" id="work-grid" style={{ width: '100%', padding: '32px 0 0', background: '#fff' } as FramerStyle}>
      <Box style={container}>
        <Box className="work-grid-layout">
          {WORKDATASECTION.map(item => <PortfolioCard key={item.title} item={item} />)}
        </Box>
      </Box>
    </Box>
  )
}

function LatestInsights() {
  return (
    <Box component="section" style={{ width: '100%', padding: '24px 0 24px', background: '#fff' } as FramerStyle}>
      <Box style={container}>
        <Box style={{ ...contentPad, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: 16 } as FramerStyle}>
          <span style={{ ...pill, marginTop: 16, color: 'rgb(220, 38, 38)', background: 'rgb(254, 226, 226)' } as FramerStyle}>
            {LATESTINSIGHTS.LATEST_BLOGS}
          </span>
          <h2 style={{ ...heading, fontSize: 'clamp(36px, 6vw, 72px)', marginTop: 16 } as FramerStyle}>
            {LATESTINSIGHTS.LATEST_INSIGHTS}
          </h2>
          <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 17, lineHeight: 1.6, color: '#6B6B6B', maxWidth: 850, margin: '18px auto 0' } as FramerStyle}>
            {LATESTINSIGHTS.INSIGHTS_PARAGRAPH_ONE}
            {LATESTINSIGHTS.INSIGHTS_PARAGRAPH_TWO}
          </p>
        </Box>

        <Box className="latest-insights-grid">
          {LATESTINSIGHTS_CARD.map(card => (
            <a key={card.id} href={card.URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box component="article" style={{ borderRadius: 16, overflow: 'hidden' } as FramerStyle}>
                <img className="latest-insight-image" src={card.img} alt={card.title} loading="lazy" style={{ width: '100%', height: 288, objectFit: 'cover', display: 'block', borderRadius: 16 } as FramerStyle} />
                <Box className="latest-insight-meta" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 2px' } as FramerStyle}>
                  <Box className="latest-insight-text">
                    <h5 style={{ fontFamily: '"Inter", sans-serif', fontSize: 20, fontWeight: 600, margin: 0, color: '#000' } as FramerStyle}>
                      {card.title}
                    </h5>
                    <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, color: '#6B6B6B', margin: '4px 0 0' } as FramerStyle}>
                      {card.date}
                    </p>
                  </Box>
                  <span className="latest-insight-cta" style={{ ...pill, color: '#fff', background: '#000', fontSize: 13, padding: '6px 14px', flexShrink: 0 } as FramerStyle}>
                    {card.button}
                  </span>
                </Box>
              </Box>
            </a>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

function SomeFreelanceDesignSection() {
  const featuredItems = FREELANCE_DESIGN_ITEMS.filter(i => i.size === 'featured')
  const halves = FREELANCE_DESIGN_ITEMS.filter(i => i.size === 'half')
  const referenceCards = halves.filter(i => i.id >= 6)

  return (
    <Box component="section" style={{ width: '100%', padding: '32px 0 24px', background: '#fff' } as FramerStyle}>
      <Box style={container}>
        <Box style={{ ...contentPad, display: 'flex', flexDirection: 'column', gap: 12 } as FramerStyle}>
          {/* Featured cards */}
          {featuredItems.map(featured => (
            <Box
              key={featured.id}
              component={featured.path && featured.path !== '#' ? 'a' : 'div'}
              {...(featured.path && featured.path !== '#'
                ? {
                    href: featured.path,
                    ...(featured.path.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
                  }
                : {})}
              className="freelance-featured-card"
              style={{
                background: featured.bgColor,
                color: featured.textColor,
                order: featured.id === 5 ? 3 : 1,
              } as FramerStyle}
            >
              {/* Left: text */}
              <Box style={{ flex: '1 1 0', minWidth: 0 } as FramerStyle}>
                {/* Tag pills */}
                <Box style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 } as FramerStyle}>
                  {featured.tag.split('  •  ').map((t, i) => (
                    <span
                      key={i}
                      style={{
                        display: 'inline-block',
                        padding: '4px 14px',
                        borderRadius: 999,
                        border: `1px solid ${featured.textColor === '#fff' ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.12)'}`,
                        fontFamily: '"Inter", sans-serif',
                        fontSize: 12,
                        fontWeight: 600,
                        color: featured.textColor,
                        background: 'rgba(255,255,255,0.4)',
                        backdropFilter: 'blur(4px)',
                      } as FramerStyle}
                    >
                      {t.trim()}
                    </span>
                  ))}
                </Box>
                <h2
                  className="freelance-card-title"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: 'clamp(40px, 6vw, 72px)',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    lineHeight: 0.95,
                    margin: '0 0 16px',
                    color: featured.textColor,
                  } as FramerStyle}
                >
                  {featured.title}
                </h2>
                {featured.description && (
                  <p
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: featured.textColor,
                      margin: 0,
                      maxWidth: 440,
                      opacity: 0.85,
                    } as FramerStyle}
                  >
                    {featured.description}
                  </p>
                )}
              </Box>

              {/* Right: image */}
              {featured.image && (
                <Box
                  className="freelance-featured-image"
                  style={{
                    flex: '0 0 clamp(200px, 32vw, 360px)',
                    height: 'clamp(140px, 20vw, 220px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  } as FramerStyle}
                >
                  <img
                    src={featured.image}
                    alt={featured.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' } as FramerStyle}
                  />
                </Box>
              )}
            </Box>
          ))}

          {/* Half cards row */}
          <Box className="freelance-halves-grid" style={{ order: 2 } as FramerStyle}>
            {halves.filter(item => item.id < 6).map(item => (
              <Box
                key={item.id}
                component={item.path && item.path !== '#' ? 'a' : 'div'}
                {...(item.path && item.path !== '#' ? { href: item.path, target: '_blank', rel: 'noopener noreferrer' } : {})}
                style={{
                  background: item.bgColor,
                  borderRadius: 24,
                  padding: 'clamp(24px, 3vw, 36px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  color: item.textColor,
                  overflow: 'hidden',
                  boxSizing: 'border-box',
                } as FramerStyle}
              >
                <Box>
                  {/* Tag pill */}
                  <span
                    style={{
                      display: 'inline-block',
                      alignSelf: 'flex-start',
                      padding: '4px 14px',
                      borderRadius: 999,
                      border: `1px solid ${item.textColor === '#ffffff' ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.12)'}`,
                      fontFamily: '"Inter", sans-serif',
                      fontSize: 12,
                      fontWeight: 600,
                      color: item.textColor,
                      background: item.textColor === '#ffffff' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.4)',
                      marginBottom: 16,
                    } as FramerStyle}
                  >
                    {item.tag}
                  </span>
                  <h3
                    className="freelance-card-title"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: 'clamp(32px, 4vw, 54px)',
                      fontWeight: 700,
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      margin: '0 0 16px',
                      color: item.textColor,
                    } as FramerStyle}
                  >
                    {item.title}
                  </h3>
                </Box>

                {item.image && (
                  <Box className="freelance-card-mockup-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="freelance-card-mockup-img"
                    />
                  </Box>
                )}
              </Box>
            ))}
          </Box>

          {/* Reference design cards below onboarding */}
          <Box className="freelance-halves-grid" style={{ order: 4 } as FramerStyle}>
            {referenceCards.map(item => (
              <Box key={item.id} component="article" style={{ overflow: 'hidden', borderRadius: 24 } as FramerStyle}>
                <img
                  src={item.image}
                  alt={`${item.tag.replace('  •  ', ' ')}: ${item.title}`}
                  loading="lazy"
                  style={{ display: 'block', width: '100%', height: 'auto' } as FramerStyle}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function WorkPage() {
  return (
    <div
      id="main"
      data-framer-hydrate-v2={HYDRATE}
      data-framer-ssr-released-at="2026-07-03T11:31:48.672Z"
      data-framer-page-optimized-at="2026-07-05T00:16:06.700Z"
      data-framer-generated-page
    >
      <Box
        component="div"
        className="framer-hTG3P framer-emw559 work-page-shell"
        data-layout-template="true"
        style={{ minHeight: '100vh', width: 'auto', position: 'relative' } as FramerStyle}
      >
        <div className="crunch-side-lines" aria-hidden="true">
          <span className="crunch-side-lines-star crunch-side-lines-star-left" />
          <span className="crunch-side-lines-star crunch-side-lines-star-right" />
        </div>
        <Navbar />

        <Box
          component="div"
          data-framer-root
          className="framer-LRfZ0 framer-3jfDI framer-jlIPi framer-RYqUR framer-merrA framer-VGfb4 framer-EIDUe framer-et5t2c"
          style={{ minHeight: '100vh', width: 'auto', display: 'contents' } as FramerStyle}
        >
          <Box component="main" className="framer-xr6yl" data-framer-name="Main">
            <div className="framer-3uad54-container">
              <div />
            </div>
            <WorkHero />
            <WorksGrid />
            <SomeFreelanceDesignSection />
            <LatestInsights />
            <MoreWorkMarquee currentPath="/work" />
          </Box>
        </Box>

        <div className="framer-15qpk7a" />
        <Footer />
      </Box>

      <SpriteIcons />
    </div>
  )
}

export default WorkPage
