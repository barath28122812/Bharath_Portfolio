import Box from '@mui/material/Box'
import type { FramerStyle } from '../Components/framer'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SpriteIcons from '../Components/SpriteIcons'
import ProjectCard from '../Components/ProjectCard'
import { ABOUT_STATS_FACTS, BIOSECTION, ABOUT_GOOD_AT, OUTSIDE_WORK, PHOTOGRAPHY, STACKS } from '../data/about'
import { WORKDATASECTION, LATESTINSIGHTS_CARD, LATESTINSIGHTS, PORTFOLIO } from '../data/work'

const HYDRATE =
  '{&quot;routeId&quot;:&quot;dzBndgA20&quot;,&quot;localeId&quot;:&quot;default&quot;,&quot;breakpoints&quot;:[{&quot;hash&quot;:&quot;et5t2c&quot;,&quot;mediaQuery&quot;:&quot;(min-width: 1200px)&quot;},{&quot;hash&quot;:&quot;162xyd4&quot;,&quot;mediaQuery&quot;:&quot;(min-width: 810px) and (max-width: 1199.98px)&quot;},{&quot;hash&quot;:&quot;1ae2x0g&quot;,&quot;mediaQuery&quot;:&quot;(max-width: 809.98px)&quot;},{&quot;hash&quot;:&quot;emw559&quot;,&quot;mediaQuery&quot;:&quot;(min-width: 1200px)&quot;},{&quot;hash&quot;:&quot;1jwitme&quot;,&quot;mediaQuery&quot;:&quot;(min-width: 810px) and (max-width: 1199.98px)&quot;},{&quot;hash&quot;:&quot;1wefnif&quot;,&quot;mediaQuery&quot;:&quot;(max-width: 809.98px)&quot;}]}'

const container: FramerStyle = {
  width: '100%',
  maxWidth: '100%',
  margin: '0 auto',
  padding: 0,
  boxSizing: 'border-box',
}

const fullWidthContainer: FramerStyle = {
  width: '100%',
  margin: '0 auto',
  padding: 0,
  boxSizing: 'border-box',
}

const contentPad: FramerStyle = {
  padding: '0 24px',
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

/* Keep these About sections on the page's light background. */
const lightSection: FramerStyle = {
  width: '100%',
  padding: '40px 0 40px',
  background: '#fff',
}

const headingOnLight = heading

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

const card: FramerStyle = {
  background: '#F5F4F3',
  borderRadius: 12,
  boxShadow: '0 10px 30px -12px rgba(0,0,0,0.15)',
}

function BioSection() {
  return (
    <Box component="section" style={{ width: '100%', padding: '24px 0 24px', background: '#fff' } as FramerStyle}>
      <Box style={fullWidthContainer}>
        <Box
          style={{
            ...contentPad,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 32,
            marginTop: 12,
          } as FramerStyle}
          className="about-bio-grid"
        >
          <Box style={{ display: 'flex', flexDirection: 'column', gap: 12 } as FramerStyle}>
            <Box style={{ width: '100%', borderRadius: 12, overflow: 'hidden' } as FramerStyle}>
              <img
                src={BIOSECTION.PROFILE_IMAGE}
                alt="Bharath A"
                loading="lazy"
                style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' } as FramerStyle}
              />
            </Box>
            <Box style={{ ...card, marginTop: 16, padding: 16, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' } as FramerStyle}>
              <h4 style={{ fontFamily: '"Inter", sans-serif', fontSize: 28, fontWeight: 800, color: 'rgba(103,103,103,1)', margin: 0, marginBottom: 8 } as FramerStyle}>
                {BIOSECTION.AKA}
              </h4>
              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 16, lineHeight: 1.6, color: 'rgba(103,103,103,1)', margin: 0 } as FramerStyle}>
                {BIOSECTION.AKA_PARA_ONE}
                <strong style={{ color: '#FF462E' } as FramerStyle}>{BIOSECTION.JOYBOY}</strong>
                {BIOSECTION.AKA_PARA_TWO}
              </p>
            </Box>
          </Box>

          <Box style={{ display: 'flex', flexDirection: 'column', gap: 12 } as FramerStyle}>
            <Box style={{ ...card, padding: 20, flex: 1, display: 'flex', flexDirection: 'column' } as FramerStyle}>
              <h4 style={{ fontFamily: '"Inter", sans-serif', fontSize: 28, fontWeight: 800, color: 'rgba(103,103,103,1)', margin: 0, marginBottom: 12, lineHeight: 1.2 } as FramerStyle}>
                {BIOSECTION.IAM_BHARATH}
              </h4>
              <div style={{ flex: 1 }} />
              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 16, lineHeight: 1.7, color: 'rgba(103,103,103,1)', margin: 0 } as FramerStyle}>
                {BIOSECTION.JOURNEY}
              </p>
            </Box>

            <Box className="bio-skills-location-row" style={{ display: 'flex', marginTop: 16, flexDirection: 'row', gap: 16, alignItems: 'stretch' } as FramerStyle}>
              <Box className="bio-skills-card" style={{ flex: '1 1 0', minWidth: 0, background: '#FF462E', borderRadius: 12, padding: 16 } as FramerStyle}>
                <h4 className="bio-skills-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, color: '#fff', fontFamily: '"Inter", sans-serif', fontSize: 22, fontWeight: 700, margin: 0, marginBottom: 12 } as FramerStyle}>
                  {BIOSECTION.SKILLS}
                  <img src={BIOSECTION.STAR_ICON} alt="Star Icon" aria-hidden loading="lazy" style={{ width: 20, height: 20, flexShrink: 0, objectFit: 'contain', display: 'block', filter: 'brightness(0) invert(1)' } as FramerStyle} />
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 } as FramerStyle}>
                  {BIOSECTION.SKILL_SET.map(skill => (
                    <li key={skill} className="bio-skills-item" style={{ color: '#fff', fontFamily: '"Inter", sans-serif', fontSize: 15, fontWeight: 500 } as FramerStyle}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Box>
              <Box className="bio-location-card" style={{ flex: '1 1 0', minWidth: 0, ...card, padding: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 100 } as FramerStyle}>
                <h6 style={{ fontFamily: '"Inter", sans-serif', fontSize: 20, fontWeight: 700, color: 'rgba(103,103,103,1)', margin: 0, marginBottom: 8 } as FramerStyle}>
                  {BIOSECTION.LOCATION}
                </h6>
                <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, fontWeight: 500, color: '#4C4C4C', margin: 0 } as FramerStyle}>
                  {BIOSECTION.CURRENT_LOCATION}
                </p>
              </Box>
            </Box>

            <Box className="bio-stack-card" style={{ ...card, marginTop: 28, padding: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 16 } as FramerStyle}>
              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 24, fontWeight: 700, color: 'rgba(103,103,103,1)', margin: 0 } as FramerStyle}>
                {BIOSECTION.STACK}
              </p>
              <img src={BIOSECTION.TECH_STACK} alt="Tech Stack" loading="lazy" style={{ height: 56, width: 'auto', maxWidth: '60%', objectFit: 'contain', display: 'block' } as FramerStyle} />
            </Box>
          </Box>

          <Box className="about-bio-aside" style={{ display: 'flex', flexDirection: 'column', gap: 24 } as FramerStyle}>
            <Box className="about-social-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', alignItems: 'center', justifyContent: 'space-between', width: '100%' } as FramerStyle}>
              {BIOSECTION.SOCIALLINKS.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href || undefined}
                  target={social.href ? '_blank' : undefined}
                  rel={social.href ? 'noopener noreferrer' : undefined}
                  className={`about-social-card${idx === 0 ? ' about-social-card--plain' : ''}`}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 72, height: 72, overflow: 'hidden', boxSizing: 'border-box' } as FramerStyle}
                >
                  <img src={social.icon} alt="social-icon" width={72} height={72} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' } as FramerStyle} />
                </a>
              ))}
            </Box>

            <Box className="recent-works-card" style={{ ...card, padding: '16px 18px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' } as FramerStyle}>
              <h4 style={{ fontFamily: '"Inter", sans-serif', fontSize: 24, fontWeight: 700, color: 'rgba(103,103,103,1)', margin: 0, marginBottom: 20 } as FramerStyle}>
                {BIOSECTION.RECENTWORKS_HEADING}
              </h4>
              <Box className="recent-works-list" style={{ display: 'flex', flexDirection: 'column', gap: 20, flex: 1, justifyContent: 'center' } as FramerStyle}>
                {BIOSECTION.RECENTWORKS.map(work => (
                  <Box className="recent-work-row" key={work.project} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 } as FramerStyle}>
                    <Box style={{ flex: 1, minWidth: 0, overflow: 'hidden' } as FramerStyle}>
                      <h4 className="recent-work-title" style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, fontWeight: 600, color: '#4C4C4C', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', transition: 'color 0.3s ease' } as FramerStyle}>
                        {work.project}
                      </h4>
                      <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 11, fontWeight: 500, color: '#4C4C4C', margin: '3px 0 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } as FramerStyle}>
                        {work.role}
                      </p>
                    </Box>
                    <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 11, fontWeight: 500, color: '#4C4C4C', margin: 0, flexShrink: 0, whiteSpace: 'nowrap' } as FramerStyle}>
                      {work.year}
                    </p>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box className="recent-works-chat-card" style={{ ...card, padding: '16px 18px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 } as FramerStyle}>
              <Box style={{ display: 'flex', alignItems: 'flex-start' } as FramerStyle}>
                <Box style={{ background: '#FFFFFF', color: '#4C4C4C', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: 16, padding: '8px 16px', maxWidth: '85%' } as FramerStyle}>
                  <a
                    href={BIOSECTION.BEHANCE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: '"Inter", sans-serif', fontSize: 13, fontWeight: 500, lineHeight: 1.5, margin: 0, color: 'inherit', textDecoration: 'none', cursor: 'pointer' } as FramerStyle}
                  >
                    {BIOSECTION.CHAT_USER_PROJECTS}
                  </a>
                </Box>
              </Box>

              <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' } as FramerStyle}>
                <Box style={{ background: '#448AF7', color: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: 16, borderBottomRightRadius: 4, padding: '8px 16px', maxWidth: '85%' } as FramerStyle}>
                  <p className="chat-response-text" style={{ fontFamily: '"Inter", sans-serif', fontSize: 13, fontWeight: 500, lineHeight: 1.5, margin: 0, color: '#FFFFFF' } as FramerStyle}>
                    {BIOSECTION.CHAT_RESPONSE_PROJECTS}{' '}
                    <a href={BIOSECTION.BEHANCE_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', textDecoration: 'underline', fontWeight: 600 } as FramerStyle}>
                      Behance
                    </a>
                  </p>
                </Box>
                <p className="chat-timestamp" style={{ fontFamily: '"Inter", sans-serif', fontSize: 10, fontWeight: 500, color: '#FFFFFF', opacity: 0.8, margin: '4px 0 0', textAlign: 'right' } as FramerStyle}>
                  {BIOSECTION.READ}
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function StatsFactsSection() {
  return (
    <Box component="section" style={{ width: '100%', padding: '40px 0 40px', background: '#fff' } as FramerStyle}>
      <Box style={fullWidthContainer}>
        <Box style={{ ...contentPad, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: 12 } as FramerStyle}>
          <span style={{ ...pill, marginTop: 16, color: 'rgb(220, 38, 38)', background: 'rgb(254, 226, 226)' } as FramerStyle}>
            {ABOUT_STATS_FACTS.STATS_FACTS}
          </span>
        </Box>

        <Box style={{ ...contentPad, marginTop: 36, display: 'flex', flexDirection: 'column', gap: 16 } as FramerStyle}>
          {ABOUT_STATS_FACTS.EXPERIENCE.map(exp => (
            <Box key={`${exp.header}-${exp.company}`} className="about-experience-row" data-period={exp.period || undefined}>
              <h2 style={{ fontFamily: '"Inter", sans-serif', fontSize: 26, lineHeight: 1.3, fontWeight: 600, color: '#000', margin: 0, flex: 1, minWidth: 200 } as FramerStyle}>
                {exp.header}
              </h2>
              <Box style={{ flex: '0 1 360px' } as FramerStyle}>
                <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 15, color: '#6B6B6B', margin: 0 } as FramerStyle}>
                  {exp.company}
                </p>
              </Box>
              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 15, lineHeight: 1.6, color: '#4C4C4C', margin: 0, flex: 1, minWidth: 260 } as FramerStyle}>
                {exp.description}
              </p>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

function GoodAtSection() {
  return (
    <Box component="section" className="about-light" style={lightSection}>
      <style>{`
        .goodat-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px 24px;
          margin-top: 40px;
        }
        @media (max-width: 760px) {
          .goodat-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 18px;
          }
        }
        .goodat-card {
          position: relative;
          padding: 36px 34px;
          background: #F5F4F3;
          border-radius: 16px;
          border: 1px solid rgba(224, 224, 224, 0.63);
          overflow: hidden;
          transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1), box-shadow 0.45s cubic-bezier(0.19, 1, 0.22, 1), background 0.45s ease;
        }
        .goodat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: rgb(255, 70, 46);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .goodat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px -18px rgba(255, 70, 46, 0.35);
          background: #fff;
        }
        .goodat-card:hover::before {
          transform: scaleX(1);
        }
        .goodat-card .goodat-id {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 34px;
          height: 34px;
          padding: 0 10px;
          border-radius: 100px;
          background: #000;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          transition: background 0.35s ease, color 0.35s ease;
        }
        .goodat-card:hover .goodat-id {
          background: rgb(255, 70, 46);
        }
        .goodat-card .goodat-title {
          transition: color 0.35s ease;
        }
        .goodat-card:hover .goodat-title {
          color: rgb(255, 70, 46);
        }
      `}</style>
      <Box style={container}>
        <Box style={{ ...contentPad } as FramerStyle}>
          <h2 style={{ ...headingOnLight, fontSize: 'clamp(36px, 5vw, 56px)', textTransform: 'none' } as FramerStyle}>
            {ABOUT_GOOD_AT.WHAT_GOOD_AT}
          </h2>
          <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 16, color: '#6B6B6B', marginTop: 10 } as FramerStyle}>
            {ABOUT_GOOD_AT.NOT_SURE}
          </p>
        </Box>

        <Box style={{ ...contentPad, marginTop: 40 } as FramerStyle}>
          <Box className="goodat-grid">
            {ABOUT_GOOD_AT.SKILLS.map(skill => (
            <Box key={skill.id} className="goodat-card">
              <span className="goodat-id">{skill.id}</span>
              <h3 className="goodat-title" style={{ fontFamily: '"Inter", sans-serif', fontSize: 30, fontWeight: 600, color: '#000', margin: '20px 0 14px', lineHeight: 1.15, letterSpacing: '-0.01em' } as FramerStyle}>
                {skill.title}
              </h3>
              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 16, lineHeight: 1.75, letterSpacing: '0.01em', color: '#4C4C4C', margin: 0, overflowWrap: 'break-word', hyphens: 'auto' } as FramerStyle}>
                {skill.description}
              </p>
            </Box>
          ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function OutsideWorkSection() {
  return (
    <Box component="section" style={{ width: '100%', padding: '40px 0 40px', background: '#fff' } as FramerStyle}>
      <Box style={fullWidthContainer}>
        <Box style={{ ...contentPad, marginTop: 12 } as FramerStyle}>
          <h2 style={{ ...heading, fontSize: 'clamp(30px, 4vw, 48px)', textTransform: 'none' } as FramerStyle}>
            {OUTSIDE_WORK.WHAT_I_DO}
          </h2>
        </Box>

        <Box
          className="about-outside-grid"
          style={{
            ...contentPad,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: 48,
            alignItems: 'start',
            marginTop: 40,
          } as FramerStyle}
        >
          <Box style={{ display: 'flex', flexDirection: 'column', gap: 32 } as FramerStyle}>
            {OUTSIDE_WORK.ACTIVITIES.map(activity => (
              <Box key={activity.title}>
                <h3 style={{ fontFamily: '"Inter", sans-serif', fontSize: 28, fontWeight: 600, color: '#000', margin: '0 0 10px' } as FramerStyle}>
                  {activity.title}
                </h3>
                <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 16, lineHeight: 1.7, color: '#6B6B6B', margin: 0 } as FramerStyle}>
                  {activity.description}
                </p>
              </Box>
            ))}
          </Box>
          <Box style={{ borderRadius: 16, overflow: 'hidden' } as FramerStyle}>
            <img
              src={OUTSIDE_WORK.IMAGE}
              alt="Outside work"
              loading="lazy"
              style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' } as FramerStyle}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function PhotographySection() {
  return (
    <Box component="section" style={{ width: '100%', padding: '40px 0 40px', background: '#fff' } as FramerStyle}>
      <Box style={{ ...contentPad } as FramerStyle}>
        <Box style={{ borderRadius: 16, overflow: 'hidden' } as FramerStyle}>
          <img src={PHOTOGRAPHY.IMAGE} alt="Photography" loading="lazy" style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' } as FramerStyle} />
        </Box>
      </Box>
    </Box>
  )
}

function StacksSection() {
  return (
    <Box component="section" style={{ width: '100%', padding: '40px 0 40px', background: '#fff' } as FramerStyle}>
      <Box style={{ ...contentPad } as FramerStyle}>
        <img src={STACKS.IMAGE} alt="About" loading="lazy" style={{ width: '100%', maxWidth: 1338, height: 'auto', objectFit: 'contain', display: 'block', margin: '0 auto' } as FramerStyle} />
      </Box>
    </Box>
  )
}

function WorkGridSection() {
  return (
    <Box component="section" className="about-light" style={lightSection}>
      <Box style={container}>
        <Box style={{ ...contentPad, marginTop: 24, maxWidth: 720 } as FramerStyle}>
          <h2 style={{ ...headingOnLight, fontSize: 'clamp(42px, 8vw, 110px)' } as FramerStyle}>{PORTFOLIO.title}</h2>
          <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 17, lineHeight: 1.6, color: '#6B6B6B', marginTop: 20, marginBottom: 0 } as FramerStyle}>
            {PORTFOLIO.description}
          </p>
        </Box>

        <Box
          className="about-project-grid"
          style={{
            ...contentPad,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: 28,
            marginTop: 56,
          } as FramerStyle}
        >
          {WORKDATASECTION.map(item => (
            <ProjectCard
              key={item.title}
              title={item.title}
              category={item.tags.join(' · ')}
              image={item.image}
              to={item.path}
              external={/^https?:/.test(item.path)}
              sx={{ width: '100%', p: '0 0 32px' }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

function LatestInsightsSection() {
  return (
    <Box component="section" className="about-light" style={lightSection}>
      <Box style={container}>
        <Box style={{ ...contentPad, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: 32 } as FramerStyle}>
          <span style={{ ...pill, marginTop: 16, color: 'rgb(220, 38, 38)', background: 'rgb(254, 226, 226)' } as FramerStyle}>
            {LATESTINSIGHTS.LATEST_BLOGS}
          </span>
          <h2 style={{ ...headingOnLight, fontSize: 'clamp(36px, 6vw, 72px)', marginTop: 16 } as FramerStyle}>
            {LATESTINSIGHTS.LATEST_INSIGHTS}
          </h2>
          <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 17, lineHeight: 1.6, color: '#6B6B6B', maxWidth: 850, margin: '18px auto 0' } as FramerStyle}>
            {LATESTINSIGHTS.INSIGHTS_PARAGRAPH_ONE}
            {LATESTINSIGHTS.INSIGHTS_PARAGRAPH_TWO}
          </p>
        </Box>

        <Box className="about-insights-grid" style={{ ...contentPad, display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 24, marginTop: 40 } as FramerStyle}>
          {LATESTINSIGHTS_CARD.map(card => (
            <a key={card.id} href={card.URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box component="article" style={{ borderRadius: 16, overflow: 'hidden' } as FramerStyle}>
                <img src={card.img} alt={card.title} loading="lazy" style={{ width: '100%', height: 288, objectFit: 'cover', display: 'block', borderRadius: 16 } as FramerStyle} />
                <Box className="latest-insight-meta" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '14px 2px', flexWrap: 'wrap' } as FramerStyle}>
                  <Box className="latest-insight-text" style={{ minWidth: 0, flex: '1 1 auto' } as FramerStyle}>
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

function AboutPage() {
  return (
    <div
      id="main"
      className="about-page"
      data-framer-hydrate-v2={HYDRATE}
      data-framer-ssr-released-at="2026-07-03T11:31:48.672Z"
      data-framer-page-optimized-at="2026-07-05T00:16:06.700Z"
      data-framer-generated-page
    >
      <Box
        component="div"
        className="framer-hTG3P framer-emw559"
        data-layout-template="true"
        style={{ minHeight: '100vh', width: 'auto', position: 'relative' } as FramerStyle}
      >
        <style>{`
          .about-main {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 auto !important;
            box-sizing: border-box;
          }
          .about-main > section {
            width: 100% !important;
          }
          .about-main > section > div {
            max-width: 100%;
          }
          .recent-work-row {
            cursor: pointer;
          }
          .recent-work-arrow {
            opacity: 0;
            transform: translateX(-6px);
            transition: opacity 0.3s ease, transform 0.3s ease;
          }
          .recent-work-row:hover .recent-work-title {
            color: rgb(255, 70, 46);
          }
          .recent-work-row:hover .recent-work-arrow {
            opacity: 1;
            transform: translateX(0);
          }
        `}</style>
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
          <Box component="main" className="framer-xr6yl about-main" data-framer-name="Main">
            <div className="framer-3uad54-container">
              <div />
            </div>
            <BioSection />
            <StatsFactsSection />
            <GoodAtSection />
            <OutsideWorkSection />
            <PhotographySection />
            <StacksSection />
            <LatestInsightsSection />
            <WorkGridSection />
          </Box>
        </Box>

        <div className="framer-15qpk7a" />
        <Footer />
      </Box>

      <SpriteIcons />
    </div>
  )
}

export default AboutPage

