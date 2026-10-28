import Box from '@mui/material/Box'
import { useEffect, useRef, useState } from 'react'
import type { FramerStyle } from '../Components/framer'
import Navbar from '../Components/Navbar'
import MoreWorkMarquee from '../Components/MoreWorkMarquee'

const container: FramerStyle = {
  width: '100%',
  maxWidth: '100%',
  margin: '0 auto',
  padding: 0,
  boxSizing: 'border-box',
}

const contentPad: FramerStyle = {
  padding: '0 var(--crunch-pad, 24px)',
  boxSizing: 'border-box',
}

const indicator: FramerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}

const pageResponsiveCss = `
  .eas-page {
    --crunch-pad: 16px;
    --eas-accent: #E11D48;
    --eas-dark: #0F172A;
    position: relative;
    overflow-x: hidden;
    max-width: 100vw;
  }
  @media (min-width: 480px) {
    .eas-page { --crunch-pad: 24px; }
  }
  @media (min-width: 810px) {
    .eas-page { --crunch-pad: 40px; }
  }
  @media (min-width: 1200px) {
    .eas-page { --crunch-pad: 60px; }
  }

  /* ── Full-page left & right vertical side lines (shared edge-to-edge frame) ── */
  .eas-page .crunch-side-lines { z-index: 5; }

  * { box-sizing: border-box; }
`


function Label({ text }: { text: string }) {
  return (
    <Box style={indicator}>
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: 2,
          background: 'rgb(255, 70, 46)',
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: '"Inter", sans-serif',
          fontSize: 16,
          fontWeight: 600,
          letterSpacing: '-0.02em',
          color: '#111',
          textTransform: 'none',
        }}
      >
        {text}
      </span>
    </Box>
  )
}

/* â”€â”€â”€ Hero & Problem Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
/* ─── Hero & Problem Section ─────────────────────────────────── */
function EASHeroSection() {
  return (
    <Box component="section" style={{ width: '100%', background: '#fff', padding: '40px 0 60px' } as FramerStyle}>
      <style>{`
        .eas-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
          flex-wrap: wrap;
          gap: 8px;
          min-width: 0;
        }
        .eas-top-bar > * {
          min-width: 0;
          flex-shrink: 1;
        }
        @media (max-width: 480px) {
          .eas-top-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
            margin-bottom: 32px;
          }
        }
        .eas-hero-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 80px;
        }
        .eas-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 16px;
          border-radius: 100px;
          background: #FFF1F2;
          border: 1px solid #FFE4E6;
          color: #E11D48;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .eas-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(48px, 15vw, 120px);
          font-weight: 900;
          color: #0F172A;
          letter-spacing: -0.04em;
          line-height: 1;
          margin: 0 0 20px 0;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .eas-title sup {
          font-size: 0.35em;
          top: -0.8em;
          font-weight: 700;
        }
        .eas-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2vw, 17px);
          line-height: 1.6;
          color: #64748B;
          max-width: 580px;
          margin: 0;
          padding: 0 8px;
        }

        /* Problem statement */
        .eas-prob-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 70px;
        }
        @media (max-width: 768px) {
          .eas-prob-grid { grid-template-columns: 1fr; gap: 16px; }
        }
        .eas-prob-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(20px, 3.2vw, 32px);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.35;
          letter-spacing: -0.02em;
          margin: 0 0 20px 0;
        }
        .eas-prob-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(13.5px, 1.8vw, 15px);
          line-height: 1.75;
          color: #64748B;
          margin: 0;
        }

        /* Lockscreen mockup area */
        /* Problem Visual Container */
.eas-phone-wrap {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Image Size */
.eas-prob-img {
  display: block;
  width: 100%;
  max-width: 380px;
  max-height: 480px;
  height: auto;
  object-fit: contain;
}

/* Tablet */
@media (max-width: 1024px) {
  .eas-prob-img {
    max-width: 300px;
    max-height: 400px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .eas-prob-img {
    max-width: 240px;
    max-height: 320px;
  }
}
        .eas-screen {
          height: 580px;
          background: radial-gradient(circle at top right, #1E293B, #0F172A);
          border-radius: 36px;
          padding: 18px 14px;
          display: flex;
          flex-direction: column;
          position: relative;
          color: #FFF;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }
        .eas-island {
          width: 90px;
          height: 18px;
          background: #000;
          border-radius: 100px;
          margin: 0 auto 20px;
        }
        .eas-time {
          font-size: 54px;
          font-weight: 300;
          text-align: center;
          line-height: 1;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
        }
        .eas-date {
          font-size: 13px;
          font-weight: 500;
          text-align: center;
          color: #94A3B8;
          margin-bottom: 28px;
        }

        /* Overwhelming text popup card */
        .eas-alert-card {
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 18px;
          padding: 14px;
          color: #E2E8F0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          font-size: 9.5px;
          line-height: 1.5;
        }
        .eas-alert-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          color: #FBBF24;
          font-weight: 800;
          font-size: 10.5px;
          letter-spacing: 0.02em;
        }

        /* Aim Section */
        .eas-aim-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin: 60px 0 80px;
        }
        @media (max-width: 768px) {
          .eas-aim-grid { grid-template-columns: 1fr; gap: 16px; }
        }
        .eas-aim-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2vw, 16px);
          line-height: 1.75;
          color: #334155;
          font-weight: 500;
          margin: 0;
          max-width: 820px;
        }
        .eas-aim-img {
          width: 100%;
          max-width: 820px;
          height: auto;
          display: block;
          object-fit: contain;
          border-radius: 16px;
          margin-top: 32px;
        }

        /* Research Foundation Section */
        .eas-research-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
          margin-top: 40px;
        }
        @media (max-width: 850px) {
          .eas-research-grid { grid-template-columns: 1fr; gap: 32px; }
        }
        .eas-research-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.8vw, 15px);
          line-height: 1.75;
          color: #475569;
        }
        .eas-paper-img {
          width: 100%;
          max-width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          border-radius: 12px;
        }
        .eas-paper-card {
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          font-family: 'Times New Roman', Times, serif;
          font-size: 10px;
          line-height: 1.45;
          color: #1E293B;
        }
        .eas-paper-tag {
          font-family: 'Inter', sans-serif;
          font-size: 8px;
          font-weight: 700;
          color: #64748B;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #E2E8F0;
          padding-bottom: 6px;
          margin-bottom: 12px;
        }
        .eas-paper-title {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 800;
          text-align: center;
          color: #0F172A;
          margin: 0 0 6px 0;
        }
        .eas-paper-author {
          font-family: 'Inter', sans-serif;
          font-size: 9px;
          text-align: center;
          color: #64748B;
          margin-bottom: 14px;
        }
        .eas-paper-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          text-align: justify;
        }
        @media (max-width: 700px) {
          .eas-paper-cols { grid-template-columns: 1fr; text-align: left; }
        }
      `}</style>
      <Box style={container}>
        <Box style={{ ...contentPad, paddingTop: 40 } as FramerStyle}>
          {/* Hero Center */}
          <div className="eas-hero-center">
            <div className="eas-pill-badge">Case study</div>
            <h1 className="eas-title">
              EAS<sup>®</sup>
            </h1>
            <p className="eas-subtitle">
              Every second counts. Designed for clarity and speed, our visual emergency alert system helps users.
            </p>
          </div>

          {/* Problem Statement */}
          <div className="eas-prob-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Problem" />
            </Box>
            <div>
              <h2 className="eas-prob-title">
                Visual Emergency Alerts: Transforming Smartphone Notifications for Faster Response and Improved Safety.
              </h2>
              <p className="eas-prob-desc">
                In moments of crisis, traditional text-based emergency alerts on smartphones often fall short. Studies emphasize that these notifications typically lack clarity, present excessive information leading to fatigue, and are prone to being overlooked, thereby increasing response times by wide margins. Addressing these critical shortfalls, this UX research case study investigates the potential of visually driven alerts to revolutionise emergency communication. By strategically integrating intuitive icons, universally understood symbols, and salient colour-coded cues, we aim to amplify comprehension and greatly diminish reaction times. This research explores avenues in which user comprehension can boost overall effectiveness during emergencies.
              </p>
            </div>
          </div>

          {/* Problem Visual */}
<div className="eas-phone-wrap">
  <img
    src="/assets/emergncy%20alert/mobile.png"
    alt="Emergency alert visual"
    className="eas-prob-img"
  />
</div>

          {/* Aim Section */}
          

          {/* Research Foundation Citation */}
          <div className="eas-research-grid">
            <div className="eas-research-text">
              <p style={{ margin: '0 0 16px 0' }}>
                Traditional text-based notifications often overwhelm users with excessive information, causing delayed responses. Individuals with lower reading skills or notification fatigue struggle to process these alerts quickly.
              </p>
              <p style={{ margin: 0 }}>
                Research shows that integrating visual elements like icons, symbols, and colours improves message clarity, comprehension and speeds up reactions <strong style={{ color: '#0284C7' }}>[Campbell &amp; Tarasewich, 2004]</strong>. The alert notifications can also be integrated into visual representations to improve effective ways of conveying alert notifications.
              </p>
            </div>

            {/* Academic Paper Image */}
            <img
              src="/assets/emergncy%20alert/eme.png"
              alt="Academic paper"
              className="eas-paper-img"
            />
          </div>

        </Box>
      </Box>
    </Box>
  )
}

/* â”€â”€â”€ Aim Target Board Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function EASTargetBoardSection() {
  return (
    <Box
      component="section"
      className="eas-target-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 80px' } as FramerStyle}
    >
      <style>{`
        .etb-header-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 50px;
        }
        @media (max-width: 768px) {
          .etb-header-grid { grid-template-columns: 1fr; gap: 16px; }
        }
        .etb-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2vw, 15px);
          line-height: 1.75;
          color: #475569;
          margin: 0;
          max-width: 820px;
        }

        /* Target Board Area */
        .etb-board-wrap {
          width: 100%;
          max-width: 850px;
          margin: 0 auto;
          position: relative;
          min-height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px 10px;
        }

        /* Callout nodes floating around target */
        .etb-node {
          position: absolute;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 8px 14px;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: #334155;
          box-shadow: 0 6px 20px rgba(0,0,0,0.06);
          max-width: 200px;
          line-height: 1.4;
          text-align: center;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .etb-board-wrap {
            flex-direction: column;
            gap: 20px;
            min-height: auto;
          }
          .etb-node {
            position: static;
            max-width: 100%;
            width: 100%;
          }
        }

        .eas-aim-board-img-wrap {
          width: 100%;
          max-width: 850px;
          margin: 0 auto;
          overflow-x: auto;
          padding: 10px;
        }
        .eas-aim-board-img {
          width: 100%;
          max-width: 820px;
          height: auto;
          display: block;
          object-fit: contain;
          margin: 0 auto;
          border-radius: 16px;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="etb-header-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Aim" />
            </Box>
            <p className="etb-desc">
              The aim is to address the ineffectiveness of text-based emergency alerts by developing visually driven notifications. This will combat alert fatigue, improve understanding, and accelerate response times, leading to a more effective and safer public alert system.
            </p>
          </div>

          <div className="eas-aim-board-img-wrap">
            <img
              src="/assets/emergncy%20alert/emergency2.png"
              alt="Aim process board"
              className="eas-aim-board-img"
            />
          </div>

        </Box>
      </Box>
    </Box>
  )
}

/* â”€â”€â”€ Process & Double Diamond Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function EASProcessSection() {
  const steps = [
    {
      img: '/assets/research%201.png',
      title: 'User interview',
      desc: 'Conducted interviews with 7 participants aged 20-32 from diverse backgrounds to gather insights on their experiences and pain points with traditional emergency notifications, focusing on clarity, comprehension, and emotional impact.',
    },
    {
      img: '/assets/research%202.png',
      title: 'Persona',
      desc: 'Created 2 personas representing user groups with distinct nationalities and demographics based on interview data, emphasizing common needs for clarity and visual cues in emergency notifications to improve response times.',
    },
    {
      img: '/assets/research%203.png',
      title: 'Journey mapping',
      desc: 'Mapped the existing user journey for text-based emergency alerts and compared it with a visually enhanced journey, highlighting stages where visual cues improved comprehension, decision-making, and engagement.',
    },
  ]

  return (
    <Box
      component="section"
      className="eas-process-section"
      style={{ width: '100%', background: '#fff', padding: '40px 0 100px' } as FramerStyle}
    >
      <style>{`
        .ep-header-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 50px;
        }
        @media (max-width: 768px) {
          .ep-header-grid { grid-template-columns: 1fr; gap: 16px; }
        }
        .ep-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2vw, 15px);
          line-height: 1.75;
          color: #475569;
          margin: 0;
          max-width: 820px;
        }

        /* Double Diamond Diagram Container */
        .ep-diamond-wrap {
          width: 100%;
          max-width: 880px;
          margin: 0 auto 60px;
          padding: 20px 10px;
          overflow-x: auto;
        }
        .ep-diamond-img {
          width: 100%;
          max-width: 880px;
          height: auto;
          display: block;
          object-fit: contain;
          margin: 0 auto;
        }

        /* 3 Bottom Cards Grid */
        .ep-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 800px) {
          .ep-cards-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 700px) {
          .ep-cards-grid {
            width: min(390px, calc(100vw - 32px));
            margin-left: auto;
            margin-right: auto;
            gap: 16px;
          }
        }
        @media (max-width: 380px) {
          .ep-cards-grid {
            width: min(320px, calc(100vw - 24px));
            gap: 14px;
          }
        }
        .ep-card {
          background: #FAFAFA;
          border: 1px solid #F1F5F9;
          border-radius: 20px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.02);
        }
        .ep-card-icon {
          width: 44px;
          height: 44px;
          background: #FFFFFF;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          overflow: hidden;
        }
        .ep-card-icon img {
          width: 28px;
          height: 28px;
          display: block;
          object-fit: contain;
        }
        @media (min-width: 1024px) {
          .ep-cards-grid {
            gap: 28px;
          }
          .ep-card {
            padding: 28px;
          }
          .ep-card-icon {
            width: 52px;
            height: 52px;
            border-radius: 14px;
          }
          .ep-card-icon img {
            width: 32px;
            height: 32px;
          }
        }
        .ep-card-title {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 800;
          color: #0F172A;
          margin: 0;
        }
        .ep-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          line-height: 1.65;
          color: #64748B;
          margin: 0;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="ep-header-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Process" />
            </Box>
            <p className="ep-desc">
              The aim is to address the ineffectiveness of text-based emergency alerts by developing visually driven notifications. This will combat alert fatigue, improve understanding, and accelerate response times, leading to a more effective and safer public alert system.
            </p>
          </div>

          {/* â•â•â•â•â•â•â• Double Diamond Diagram (SVG) â•â•â•â•â•â•â• */}
          <div className="ep-diamond-wrap">
            <img
              src="/assets/emergncy%20alert/emergency3.png"
              alt="Process double diamond"
              className="ep-diamond-img"
            />
          </div>

          {/* â•â•â•â•â•â•â• 3 Bottom Cards â•â•â•â•â•â•â• */}
          <div className="ep-cards-grid">
            {steps.map((s: any, idx) => (
              <div key={idx} className="ep-card">
                <div className="ep-card-icon">
                  {s.img ? <img src={s.img} alt={s.title} loading="lazy" /> : s.emoji}
                </div>
                <h4 className="ep-card-title">{s.title}</h4>
                <p className="ep-card-desc">{s.desc}</p>
              </div>
            ))}
          </div>

        </Box>
      </Box>
    </Box>
  )
}

/* â”€â”€â”€ Concept Mapping Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function EASConceptMappingSection() {
  return (
    <Box
      component="section"
      className="eas-concept-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 80px' } as FramerStyle}
    >
      <style>{`
        .ecm-header-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 60px;
        }
        @media (max-width: 768px) {
          .ecm-header-grid { grid-template-columns: 1fr; gap: 16px; }
        }
        .ecm-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2vw, 15px);
          line-height: 1.75;
          color: #475569;
          margin: 0;
          max-width: 820px;
        }

        /* Concept Tree Wrap */
        .ecm-tree-wrap {
          width: 100%;
          max-width: 960px;
          margin: 0 auto;
          overflow-x: auto;
          padding: 10px;
        }
        .ecm-tree-img {
          width: 100%;
          max-width: 960px;
          height: auto;
          display: block;
          object-fit: contain;
          margin: 0 auto;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="ecm-header-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Concept mapping" />
            </Box>
            <p className="ecm-desc">
              Concept mapping allowed me to explore the complex relationships within the emergency notification system. This resulted in a clearer understanding of key factors influencing design decisions.
            </p>
          </div>

          {/* â•â•â•â•â•â•â• Concept Tree Diagram (SVG) â•â•â•â•â•â•â• */}
          <div className="ecm-tree-wrap">
            <img
              src="/assets/emergncy%20alert/emergency4.png"
              alt="Concept map"
              className="ecm-tree-img"
            />
          </div>

        </Box>
      </Box>
    </Box>
  )
}

/* â”€â”€â”€ Key Sketching Section (Earthquake & Missing Person) â”€â”€â”€â”€â”€ */
function EASKeySketchingSection() {
  return (
    <Box
      component="section"
      className="eas-sketch-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 100px' } as FramerStyle}
    >
      <style>{`
        .eks-header-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 50px;
        }
        @media (max-width: 768px) {
          .eks-header-grid { grid-template-columns: 1fr; gap: 16px; }
        }
        .eks-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2vw, 15px);
          line-height: 1.75;
          color: #475569;
          margin: 0;
          max-width: 820px;
        }

        /* Sketch Annotation Canvas */
        .eks-canvas-wrap {
          width: 100%;
          max-width: 880px;
          margin: 0 auto 80px;
          position: relative;
          display: flex;
          justify-content: center;
          padding: 30px 10px;
        }
        .eks-img {
          width: 100%;
          max-width: 860px;
          height: auto;
          display: block;
          object-fit: contain;
          border-radius: 16px;
        }

        /* Wireframe hand-drawn phone card */
        .eks-card {
          width: min(340px, 100%);
          box-sizing: border-box;
          background: #FFFFFF;
          border: 2.5px solid #334155;
          border-radius: 28px;
          padding: 20px 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.06);
          position: relative;
          z-index: 2;
        }

        .eks-box {
          border: 2px solid #334155;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #334155;
        }

        .eks-line {
          height: 2px;
          background: #334155;
          border-radius: 2px;
        }

        /* Handwritten annotation texts */
        .eks-anno {
          position: absolute;
          font-family: 'Caveat', 'Comic Sans MS', cursive, sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #DC2626;
          line-height: 1.2;
          z-index: 3;
          pointer-events: none;
        }

        @media (max-width: 850px) {
          .eks-anno { display: none; }
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="eks-header-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Key sketching" />
            </Box>
            <p className="eks-desc">
              Concept mapping allowed me to explore the complex relationships within the emergency notification system. This resulted in a clearer understanding of key factors influencing design decisions.
            </p>
          </div>

          <div className="eks-canvas-wrap">
            <img
              src="/assets/emergncy%20alert/emergency5.jpg"
              alt="Key sketching"
              className="eks-img"
            />
          </div>

          <div className="eks-canvas-wrap">
            <img
              src="/assets/emergncy%20alert/emergency6.jpg"
              alt="Key sketching"
              className="eks-img"
            />
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* â”€â”€â”€ High-Fidelity UI Design Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function EASDesignSection() {
  return (
    <Box
      component="section"
      className="eas-design-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 100px' } as FramerStyle}
    >
      <style>{`
        .eas-design-header-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 50px;
        }
        @media (max-width: 768px) {
          .eas-design-header-grid { grid-template-columns: 1fr; gap: 16px; }
        }
        .eas-design-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2vw, 15px);
          line-height: 1.75;
          color: #475569;
          margin: 0;
          max-width: 820px;
        }

        .eas-design-img-wrap {
          width: 100%;
          max-width: 960px;
          margin: 0 auto;
          overflow-x: auto;
          padding: 10px;
        }
        .eas-design-img {
          width: 100%;
          max-width: 960px;
          height: auto;
          display: block;
          object-fit: contain;
          margin: 0 auto;
          border-radius: 16px;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="eas-design-header-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Design" />
            </Box>
            <p className="eas-design-desc">
              The high-fidelity screens were crucial for usability testing and stakeholder feedback, providing a clear representation of the final product.
            </p>
          </div>

          <div className="eas-design-img-wrap">
            <img
              src="/assets/emergncy%20alert/emergency7.png"
              alt="High-fidelity UI designs"
              className="eas-design-img"
            />
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* â”€â”€â”€ Analysis Part Section (Likert Scale & NPS) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function EASAnalysisSection() {
  const [npsVisible, setNpsVisible] = useState(false)
  const npsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = npsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setNpsVisible(true)
          else setNpsVisible(false)
        })
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Box
      ref={npsRef as any}
      component="section"
      className="eas-analysis-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 120px' } as FramerStyle}
    >
      <style>{`
        .eap-header-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 60px;
        }
        @media (max-width: 768px) {
          .eap-header-grid { grid-template-columns: 1fr; gap: 16px; }
        }
        .eap-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2vw, 15px);
          line-height: 1.75;
          color: #475569;
          margin: 0;
          max-width: 820px;
        }

        /* Chart Image styles */
        .eap-chart-img-wrap {
          width: 100%;
          max-width: 960px;
          margin: 0 auto 70px;
          overflow-x: auto;
          padding: 10px;
        }
        .eap-chart-img {
          width: 100%;
          max-width: 960px;
          height: auto;
          display: block;
          object-fit: contain;
          margin: 0 auto;
          border-radius: 16px;
        }

        /* NPS Section */
        .eap-nps-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 700;
          color: #0E4B75;
          margin: 0 0 40px 0;
        }

        .eap-nps-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 50px;
        }
        @media (max-width: 768px) {
          .eap-nps-grid { grid-template-columns: 1fr; gap: 40px; }
        }

        .eap-nps-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .eap-nps-label {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 800;
          color: #0E4B75;
          margin: 20px 0 10px;
        }
        .eap-nps-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          line-height: 1.65;
          color: #64748B;
          max-width: 360px;
          margin: 0;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="eap-header-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Analysis part" />
            </Box>
            <p className="eap-desc">
              To validate design assumptions and identify areas for improvement, the project moved into a rigorous testing phase. This involved A/B testing key design elements, measuring overall usability with the System Usability Scale (SUS), and employing heatmap analysis to understand user behavior.
            </p>
          </div>

          {/* ── 7-Point Likert Scale Bar Chart ── */}
          <div className="eap-chart-img-wrap">
            <img
              src="/assets/emergncy%20alert/emergency8.png"
              alt="7-point Likert Scale Analysis Chart"
              className="eap-chart-img"
            />
          </div>

          {/* â•â•â•â•â•â•â• Net Promoter Score (NPS) â•â•â•â•â•â•â• */}
          <div>
            <h2 className="eap-nps-title">Net Promoter Score (NPS)</h2>

            <div className="eap-nps-grid">
              {/* Donut 1: Visually aided notification */}
              <div className="eap-nps-card">
                <svg width="200" height="200" viewBox="0 0 200 200">
                  {/* Outer circle for 22% (Gold) */}
                  <circle
                    cx="100"
                    cy="100"
                    r="68"
                    fill="none"
                    stroke="#FBBF24"
                    strokeWidth="28"
                    strokeDasharray="427"
                    strokeDashoffset="0"
                  />
                  {/* Segment for 78% (Orange) */}
                  <circle
                    cx="100"
                    cy="100"
                    r="68"
                    fill="none"
                    stroke="#EA580C"
                    strokeWidth="28"
                    strokeDasharray="427"
                    strokeDashoffset={npsVisible ? 427 * 0.22 : 427}
                    strokeLinecap="butt"
                    transform="rotate(-90 100 100)"
                    style={{ transition: 'stroke-dashoffset 0.9s ease' }}
                  />
                  {/* Center Text */}
                  <text x="100" y="106" textAnchor="middle" fill="#0F172A" fontSize="22" fontWeight="800" fontFamily="Inter, sans-serif">
                    78
                  </text>
                  {/* Percent badges */}
                  <text x="160" y="38" fill="#64748B" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">22%</text>
                  <text x="25" y="175" fill="#64748B" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">78%</text>
                </svg>
                <h3 className="eap-nps-label">Visually aided notification</h3>
                <p className="eap-nps-desc">
                  Visually-aided alerts achieved an impressive NPS of 78, showing strong user satisfaction from the participants.
                </p>
              </div>

              {/* Donut 2: Text based notification */}
              <div className="eap-nps-card">
                <svg width="200" height="200" viewBox="0 0 200 200">
                  {/* Outer circle for 7% (Gold) */}
                  <circle
                    cx="100"
                    cy="100"
                    r="68"
                    fill="none"
                    stroke="#FBBF24"
                    strokeWidth="28"
                    strokeDasharray="427"
                    strokeDashoffset="0"
                  />
                  {/* Segment for 93% (Crimson Red) */}
                  <circle
                    cx="100"
                    cy="100"
                    r="68"
                    fill="none"
                    stroke="#B91C1C"
                    strokeWidth="28"
                    strokeDasharray="427"
                    strokeDashoffset={npsVisible ? 427 * 0.07 : 427}
                    strokeLinecap="butt"
                    transform="rotate(-90 100 100)"
                    style={{ transition: 'stroke-dashoffset 0.9s ease' }}
                  />
                  {/* Center Text */}
                  <text x="100" y="106" textAnchor="middle" fill="#0F172A" fontSize="22" fontWeight="800" fontFamily="Inter, sans-serif">
                    -93
                  </text>
                  {/* Percent badges */}
                  <text x="35" y="35" fill="#64748B" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">7%</text>
                  <text x="165" y="180" fill="#64748B" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">93%</text>
                </svg>
                <h3 className="eap-nps-label">Text based notification</h3>
                <p className="eap-nps-desc">
                  A significantly lower NPS of -93, highlighting the inefficiency in driving user satisfaction and recommendation for text based alert from the participants.
                </p>
              </div>
            </div>
          </div>

        </Box>
      </Box>
    </Box>
  )
}

/* â”€â”€â”€ Thematic Analysis Dendrogram Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function EASThematicAnalysisSection() {
  return (
    <Box
      component="section"
      className="eas-thematic-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 100px' } as FramerStyle}
    >
      <style>{`
        .eta-header-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 60px;
        }
        @media (max-width: 768px) {
          .eta-header-grid { grid-template-columns: 1fr; gap: 16px; }
        }
        .eta-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2vw, 15px);
          line-height: 1.75;
          color: #475569;
          margin: 0;
          max-width: 820px;
        }

        /* Dendrogram SVG container */
        .eta-map-wrap {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          overflow-x: auto;
          padding: 10px;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="eta-header-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Thematic Analysis" />
            </Box>
            <p className="eta-desc">
              After concept mapping, Based on the qualitative data gathered, a thematic analysis was conducted to identify recurring patterns and design options which improve the user's reach.
            </p>
          </div>

          {/* â•â•â•â•â•â•â• Thematic Mind Map Dendrogram (SVG) â•â•â•â•â•â•â• */}
          <div className="eta-map-wrap">
            <svg width="100%" height="680" viewBox="0 0 1080 680" style={{ minWidth: 900, fontFamily: 'Inter, sans-serif' }}>
              {/* Central Root Node */}
              <rect x="330" y="320" width="130" height="42" rx="21" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
              <text x="395" y="337" textAnchor="middle" fill="#0F172A" fontSize="10" fontWeight="700">Emergency alert</text>
              <text x="395" y="351" textAnchor="middle" fill="#0F172A" fontSize="10" fontWeight="700">notification</text>

              {/* â•â•â•â•â•â•â• LEFT SIDE BRANCHES â•â•â•â•â•â•â• */}
              {/* Branch 1: Alert Credibility */}
              <path d="M 330 335 C 270 335, 260 275, 230 275" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
              <text x="225" y="278" textAnchor="end" fill="#0F172A" fontSize="9.5" fontWeight="700">Alert credibility</text>

              {/* Alert Credibility Children */}
              {[
                { label: 'Informing alert type', y: 235 },
                { label: 'Geographic information', y: 255 },
                { label: 'Peer Information', y: 275 },
                { label: 'Helpline information', y: 295 },
                { label: 'Alert Latency', y: 315 },
              ].map((c, i) => (
                <g key={i}>
                  <path d={`M 150 275 C 130 275, 130 ${c.y}, 110 ${c.y}`} fill="none" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="105" y={c.y + 3} textAnchor="end" fill="#64748B" fontSize="9" fontWeight="500">{c.label}</text>
                </g>
              ))}

              {/* Branch 2: Recipient Expectations */}
              <path d="M 330 345 C 270 345, 260 415, 230 415" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
              <text x="225" y="418" textAnchor="end" fill="#0F172A" fontSize="9.5" fontWeight="700">Recipient expectations</text>

              {/* Recipient Expectations Children */}
              {[
                { label: 'Classification of incident', y: 385 },
                { label: 'Location familiarity', y: 405 },
                { label: 'Actionable', y: 425 },
                { label: 'Call for assistance', y: 445 },
              ].map((c, i) => (
                <g key={i}>
                  <path d={`M 130 415 C 110 415, 110 ${c.y}, 95 ${c.y}`} fill="none" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="90" y={c.y + 3} textAnchor="end" fill="#64748B" fontSize="9" fontWeight="500">{c.label}</text>
                </g>
              ))}

              {/* â•â•â•â•â•â•â• RIGHT SIDE BRANCHES â•â•â•â•â•â•â• */}
              {/* Main Hub: Issues (Top Right) */}
              <path d="M 460 335 C 500 335, 500 200, 520 200" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
              <text x="525" y="203" fill="#0F172A" fontSize="10" fontWeight="700">Issues</text>

              {/* Sub-branch: Delayed Understanding */}
              <path d="M 560 200 C 580 200, 580 135, 600 135" fill="none" stroke="#CBD5E1" strokeWidth="1.2" />
              <text x="605" y="138" fill="#334155" fontSize="9.5" fontWeight="600">Delayed Understanding</text>
              {[
                { label: 'Lengthy text', y: 115 },
                { label: 'Interpretation Issues', y: 135 },
                { label: 'Technical jargon (Complex vocabulary)', y: 155 },
              ].map((c, i) => (
                <g key={i}>
                  <path d={`M 720 135 C 740 135, 740 ${c.y}, 760 ${c.y}`} fill="none" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="765" y={c.y + 3} fill="#64748B" fontSize="9" fontWeight="500">{c.label}</text>
                </g>
              ))}

              {/* Sub-branch: Lower involvement */}
              <path d="M 560 200 L 600 200" fill="none" stroke="#CBD5E1" strokeWidth="1.2" />
              <text x="605" y="203" fill="#334155" fontSize="9.5" fontWeight="600">Lower involvement</text>
              {[
                { label: 'Translation challenges', y: 185 },
                { label: 'Desensitised to text form', y: 205 },
                { label: 'Lack of urgency communication', y: 225 },
              ].map((c, i) => (
                <g key={i}>
                  <path d={`M 700 200 C 720 200, 720 ${c.y}, 740 ${c.y}`} fill="none" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="745" y={c.y + 3} fill="#64748B" fontSize="9" fontWeight="500">{c.label}</text>
                </g>
              ))}

              {/* Sub-branch: Response lag */}
              <path d="M 560 200 C 580 200, 580 275, 600 275" fill="none" stroke="#CBD5E1" strokeWidth="1.2" />
              <text x="605" y="278" fill="#334155" fontSize="9.5" fontWeight="600">Response lag</text>
              {[
                { label: 'No Actionable elements', y: 245 },
                { label: 'Unknown proximity of location', y: 265 },
                { label: 'Lack of visual cues', y: 285 },
                { label: 'Inaccuracy of information', y: 305 },
              ].map((c, i) => (
                <g key={i}>
                  <path d={`M 680 275 C 700 275, 700 ${c.y}, 720 ${c.y}`} fill="none" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="725" y={c.y + 3} fill="#64748B" fontSize="9" fontWeight="500">{c.label}</text>
                </g>
              ))}

              {/* Main Hub: Solutions (Bottom Right) */}
              <path d="M 460 345 C 500 345, 500 460, 520 460" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
              <text x="525" y="463" fill="#0F172A" fontSize="10" fontWeight="700">Solutions</text>

              {/* Sub-branch: Sensitive Information */}
              <path d="M 570 460 C 590 460, 590 420, 610 420" fill="none" stroke="#CBD5E1" strokeWidth="1.2" />
              <text x="615" y="423" fill="#334155" fontSize="9.5" fontWeight="600">Sensitive Information</text>

              {/* Sub-sub-branch: Increase comprehension */}
              <path d="M 720 420 C 740 420, 740 375, 760 375" fill="none" stroke="#CBD5E1" strokeWidth="1" />
              <text x="765" y="378" fill="#334155" fontSize="9" fontWeight="600">Increase comprehension</text>
              {[
                { label: 'Icons/Symbols', y: 335 },
                { label: 'Severity indications using colours', y: 355 },
                { label: 'Text Emphasis', y: 375 },
                { label: 'Image', y: 395 },
                { label: 'Live maps', y: 415 },
              ].map((c, i) => (
                <g key={i}>
                  <path d={`M 880 375 C 900 375, 900 ${c.y}, 920 ${c.y}`} fill="none" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="925" y={c.y + 3} fill="#64748B" fontSize="8.5" fontWeight="500">{c.label}</text>
                </g>
              ))}

              {/* Sub-sub-branch: Timely Reaction */}
              <path d="M 720 420 C 740 420, 740 455, 760 455" fill="none" stroke="#CBD5E1" strokeWidth="1" />
              <text x="765" y="458" fill="#334155" fontSize="9" fontWeight="600">Timely Reaction</text>
              {[
                { label: 'Actionable elements', y: 445 },
                { label: 'Illustrations of safety protocols', y: 465 },
              ].map((c, i) => (
                <g key={i}>
                  <path d={`M 850 455 C 870 455, 870 ${c.y}, 890 ${c.y}`} fill="none" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="895" y={c.y + 3} fill="#64748B" fontSize="8.5" fontWeight="500">{c.label}</text>
                </g>
              ))}

              {/* Sub-branch: Anticipated Engagement */}
              <path d="M 570 460 C 590 460, 590 530, 610 530" fill="none" stroke="#CBD5E1" strokeWidth="1.2" />
              <text x="615" y="533" fill="#334155" fontSize="9.5" fontWeight="600">Anticipated Engagement</text>
              {[
                { label: 'Audible signals', y: 510 },
                { label: 'Live donation', y: 530 },
                { label: 'Vibration signals', y: 550 },
              ].map((c, i) => (
                <g key={i}>
                  <path d={`M 740 530 C 760 530, 760 ${c.y}, 780 ${c.y}`} fill="none" stroke="#E2E8F0" strokeWidth="1" />
                  <text x="785" y={c.y + 3} fill="#64748B" fontSize="9" fontWeight="500">{c.label}</text>
                </g>
              ))}
            </svg>
          </div>

        </Box>
      </Box>
    </Box>
  )
}

/* â”€â”€â”€ Hypothesis Test Statistical Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function EASHypothesisTestSection() {
  const statsRows = [
    { metric: 'Clarity of information communication', u: '0.000', w: '820.000', z: '-7.958', p: '<0.001' },
    { metric: 'Understanding', u: '27.000', w: '847.000', z: '-7.641', p: '<0.001' },
    { metric: 'Confidence in taking action', u: '33.500', w: '853.500', z: '-7.549', p: '<0.001' },
    { metric: 'Faster information processing', u: '14.500', w: '834.500', z: '-7.769', p: '<0.001' },
    { metric: 'Improved memory retention', u: '11.500', w: '831.500', z: '-7.799', p: '<0.001' },
    { metric: 'Quicker response times', u: '1.000', w: '821.000', z: '-7.886', p: '<0.001' },
    { metric: 'Higher likelihood of recommendation', u: '27.000', w: '847.000', z: '-7.699', p: '<0.001' },
    { metric: 'Ease of interpretation', u: '34.500', w: '854.500', z: '-7.352', p: '<0.001' },
    { metric: 'Helpfulness in decision-making', u: '1.000', w: '821.000', z: '-7.884', p: '<0.001' },
    { metric: 'Positive emotional impact', u: '5.000', w: '825.000', z: '-7.861', p: '<0.001' },
  ]

  return (
    <Box
      component="section"
      className="eas-hypothesis-section"
      style={{ width: '100%', background: '#F4F9FD', padding: '80px 0 120px' } as FramerStyle}
    >
      <style>{`
        .eh-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 700;
          color: #0E4B75;
          margin: 0 0 40px 0;
        }

        .eh-layout-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .eh-layout-grid { grid-template-columns: 1fr; }
        }

        /* Statistical Table */
        .eh-table-wrap {
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          border-radius: 12px;
          overflow-x: auto;
          box-shadow: 0 6px 20px rgba(0,0,0,0.03);
        }
        .eh-table {
          width: 100%;
          border-collapse: collapse;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
        }
        .eh-table th {
          background: #F1F5F9;
          color: #0F172A;
          font-weight: 800;
          padding: 8px 10px;
          border: 1px solid #CBD5E1;
          text-align: center;
        }
        .eh-table td {
          padding: 7px 10px;
          border: 1px solid #CBD5E1;
          color: #334155;
        }
        .eh-table tr:nth-of-type(even) {
          background: #F8FAFC;
        }

        /* Findings column */
        .eh-findings-wrap {
          display: flex;
          flex-direction: column;
          gap: 24px;
          font-family: 'Inter', sans-serif;
        }
        .eh-bullet-text {
          font-size: 15px;
          line-height: 1.7;
          color: #334155;
          font-weight: 500;
          margin: 0;
        }

        .eh-hypothesis-box {
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          border-radius: 12px;
          padding: 18px 20px;
          font-size: 11.5px;
          line-height: 1.6;
          color: #475569;
          margin-top: 10px;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <h2 className="eh-title">Hypothesis test</h2>

          <div className="eh-layout-grid">
            {/* Left: Test Statistics Table */}
            <div>
              <div className="eh-table-wrap">
                <table className="eh-table">
                  <thead>
                    <tr>
                      <th colSpan={5} style={{ background: '#E2E8F0', fontSize: 11.5, letterSpacing: '0.02em' }}>
                        Test statistics<sup>a</sup>
                      </th>
                    </tr>
                    <tr>
                      <th style={{ textAlign: 'left' }}>Metric</th>
                      <th>Mann-Whitney U</th>
                      <th>Wilcoxon W</th>
                      <th>Z</th>
                      <th>Asymp. Sig. (2-tailed)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statsRows.map((r, i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: 600 }}>{r.metric}</td>
                        <td style={{ textAlign: 'center' }}>{r.u}</td>
                        <td style={{ textAlign: 'center' }}>{r.w}</td>
                        <td style={{ textAlign: 'center' }}>{r.z}</td>
                        <td style={{ textAlign: 'center', color: '#047857', fontWeight: 700 }}>{r.p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10.5, color: '#64748B', marginTop: 10, lineHeight: 1.4 }}>
                Statistical comparison for quantitative data responses using Mann-Whitney U test.
              </p>
            </div>

            {/* Right: Findings & Hypotheses */}
            <div className="eh-findings-wrap">
              <p className="eh-bullet-text">
                 Statistical evidence supports <strong>rejecting the null hypothesis</strong>, confirming a significant difference between text-based and visually presented alert notifications.
              </p>
              <p className="eh-bullet-text">
                Visually-aided notifications significantly improved user perception of usability and engagement, supporting the <strong>alternative hypothesis (H1)</strong>.
              </p>

              <div className="eh-hypothesis-box">
                <p style={{ margin: '0 0 10px 0' }}>
                  <strong>H0 (null hypothesis)</strong> There is no significant difference between visually conveyed emergency alert notifications and text-based alert notifications.
                </p>
                <p style={{ margin: 0 }}>
                  <strong>H1 (alternative hypothesis)</strong> There is a significant difference between visually conveyed emergency alert notifications and text-based alert notifications.
                </p>
              </div>
            </div>
          </div>

        </Box>
      </Box>
    </Box>
  )
}

function EASFutureConsiderationSection() {
  const considerations = [
    {
      title: 'Accessibility: Designing for All Users',
      desc: 'To ensure inclusivity, future development will prioritise accessibility for visually impaired users. This includes adhering to Web Content Accessibility Guidelines (WCAG) to implement high-contrast colour schemes, screen reader compatibility, and alternative text descriptions for all visual elements to ensure all users will benefit.',
    },
    {
      title: 'Visual Element Effectiveness: Cross-Cultural & Contextual Considerations',
      desc: 'Future research will focus on evaluating the effectiveness of specific icons, symbols, and images across diverse cultural contexts and emergency scenarios. This will involve qualitative and quantitative studies to determine which visuals are most universally understood and elicit the desired response, avoiding cultural bias or misinterpretation.',
    },
    {
      title: 'Cross-Device Compatibility: Seamless Integration Across Platforms',
      desc: 'To maximise reach and effectiveness, future development will focus on ensuring seamless compatibility and optimal performance of visual notifications across a wide range of devices. This includes smartphones (iOS and Android), tablets, and wearable devices and an electronic devices, optimizing the display to increase user\'s reach.',
    },
    {
      title: 'Long-Term Impact: Building Trust and Shaping Behavior',
      desc: 'Longitudinal studies will be conducted to assess the long-term impact of repeated exposure to visual emergency alerts on user trust, behavior, and overall preparedness. The data will be explored with the users, allowing users to explain their overall feelings about them.',
    },
  ]

  return (
    <Box
      component="section"
      className="eas-future-section"
      style={{ width: '100%', background: '#fff', padding: '80px 0 100px' } as FramerStyle}
    >
      <style>{`
        .efc-header-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 50px;
        }
        @media (max-width: 768px) {
          .efc-header-grid { grid-template-columns: 1fr; gap: 16px; }
        }

        .efc-list {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .efc-item {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 24px;
          align-items: flex-start;
        }
        @media (max-width: 600px) {
          .efc-item { grid-template-columns: 1fr; gap: 12px; }
        }

        .efc-icon-badge {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FF5722 0%, #EA580C 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(234, 88, 12, 0.28);
          color: #FFF;
          flex-shrink: 0;
        }

        .efc-item-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(16px, 2.2vw, 20px);
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 8px 0;
          letter-spacing: -0.01em;
        }

        .efc-item-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(13.5px, 1.8vw, 15px);
          line-height: 1.75;
          color: #64748B;
          margin: 0;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="efc-header-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Future Consideration" />
            </Box>
            <div className="efc-list">
              {considerations.map((item, idx) => (
                <div key={idx} className="efc-item">
                  <div className="efc-icon-badge">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="8" y="2" width="13" height="13" rx="2" />
                      <path d="M5 8v11a2 2 0 0 0 2 2h11" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="efc-item-title">{item.title}</h3>
                    <p className="efc-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* â”€â”€â”€ Main Page Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function EmergencyAlertPage() {
  return (
    <div id="main" className="crunch-page emergency-alert-page eas-page" style={{ overflowX: 'hidden', position: 'relative' }}>
      <style>{pageResponsiveCss}</style>
      <div className="crunch-side-lines" aria-hidden="true">
        <span className="crunch-side-lines-star crunch-side-lines-star-left" />
        <span className="crunch-side-lines-star crunch-side-lines-star-right" />
      </div>
      <Box component="div" style={{ minHeight: '100vh', width: '100%', position: 'relative', overflowX: 'hidden' } as FramerStyle}>
        <Navbar />
        <Box component="main">
          <EASHeroSection />
          <EASTargetBoardSection />
          <EASProcessSection />
          <EASConceptMappingSection />
          <EASKeySketchingSection />
          <EASDesignSection />
          <EASAnalysisSection />
          <EASThematicAnalysisSection />
          <EASHypothesisTestSection />
          <EASFutureConsiderationSection />
          <MoreWorkMarquee currentPath="/emergency-alert" />
        </Box>
      </Box>
    </div>
  )
}

export default EmergencyAlertPage








