import * as React from 'react'
import Box from '@mui/material/Box'
import type { FramerStyle } from '../Components/framer'

import Navbar from '../Components/Navbar'
import MoreWorkMarquee from '../Components/MoreWorkMarquee'
import SpriteIcons from '../Components/SpriteIcons'

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
  width: '100%',
  padding: '0 clamp(12px, 4vw, 24px)',
  boxSizing: 'border-box',
}

const indicator: FramerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}

/* ─── Hero ─────────────────────────────────────────────────── */
function PetpediaHero() {
  return (
    <Box
      component="section"
      className="petpedia-hero-section"
      style={{
        width: '100%',
        background: '#fff',
        textAlign: 'center',
      } as FramerStyle}
    >
      <style>{`
        .petpedia-hero-section { padding: 80px 0 60px; }
        @media (max-width: 768px) { .petpedia-hero-section { padding: 40px 0 30px; } }
        .petpedia-hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 100px;
          background: rgba(255,70,46,0.10);
          color: rgb(255,70,46);
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 28px;
        }
        .petpedia-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(48px, 9vw, 108px);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1;
          color: #111;
          margin: 0 0 20px 0;
        }
        .petpedia-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: #7A7A7A;
          max-width: 520px;
          margin: 0 auto;
        }
      `}</style>

      <Box style={container}>
        <Box style={{ ...contentPad, display: 'flex', flexDirection: 'column', alignItems: 'center' } as FramerStyle}>
          <span className="petpedia-hero-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="8" height="8" rx="1" fill="rgb(255,70,46)" opacity="0.7" />
              <rect x="14" y="4" width="8" height="8" rx="1" fill="rgb(255,70,46)" />
              <rect x="2" y="14" width="8" height="8" rx="1" fill="rgb(255,70,46)" />
              <rect x="14" y="14" width="8" height="8" rx="1" fill="rgb(255,70,46)" opacity="0.5" />
            </svg>
            SaaS Product
          </span>

          <h1 className="petpedia-title">Petpedia</h1>

          <p className="petpedia-subtitle">
            A comprehensive pet care platform connecting pet owners with veterinary services,
            grooming, boarding, and everything your furry friends need.
          </p>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Problem Section ───────────────────────────────────────── */
function ProblemSection() {
  return (
    <Box
      component="section"
      style={{ width: '100%', padding: '60px 0', background: '#fff' } as FramerStyle}
    >
      <style>{`
        .petproblem-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 700px) {
          .petproblem-grid { grid-template-columns: 1fr; gap: 24px; }
        }
        .petproblem-heading {
          font-family: 'Inter', sans-serif;
          font-size: clamp(18px, 2.5vw, 22px);
          font-weight: 700;
          color: #111;
          margin: 0 0 20px;
          line-height: 1.35;
        }
        .petproblem-body {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.75;
          color: #5A5A5A;
          margin: 0;
        }
      `}</style>

      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          <div className="petproblem-grid">
            <Box style={{ ...indicator, paddingTop: 4 } as FramerStyle}>
              <span style={{ width: 12, height: 12, background: 'rgb(255, 70, 46)', display: 'inline-block', flex: 'none', borderRadius: 2 } as FramerStyle} />
              <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, fontWeight: 600, color: '#6B6B6B' } as FramerStyle}>
                Problem
              </span>
            </Box>
            <Box>
              <h2 className="petproblem-heading">
                The Pet Owner{'\u2019'}s Dilemma: Simplified Pet Care for a Healthier Life with Petpedia
              </h2>
              <p className="petproblem-body">
                Juggling work, social life, and pet responsibilities, busy pet owners often find it challenging to manage their pet{'\u2019'}s healthcare. Petpedia offers a solution by consolidating veterinary services, grooming, boarding, and wellness tracking into one intuitive platform. Making pet care accessible and stress-free, Petpedia removes the obstacles to promote lasting well-being for both pets and their owners.
              </p>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Design Process Section ──────────────────────────────────── */
function DesignProcessSection() {
  return (
    <Box
      component="section"
      style={{
        width: '100%',
        padding: '60px 0',
        background: '#fff',
      } as FramerStyle}
    >
      <style>{`
        .petdesign-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 60px;
          gap: 60px;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 768px) {
          .petdesign-header {
            flex-direction: column;
            gap: 16px;
            margin-bottom: 40px;
          }
        }
        .petdesign-header-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          width: 240px;
        }
        @media (max-width: 768px) {
          .petdesign-header-left {
            width: auto;
          }
        }
        .petdesign-dot {
          width: 12px;
          height: 12px;
          background: #FF462E;
          border-radius: 2px;
        }
        .petdesign-heading {
          font-size: 20px;
          font-weight: 700;
          color: #111;
          margin: 0;
        }
        .petdesign-description {
          font-size: 15px;
          line-height: 1.6;
          color: #6B6B6B;
          margin: 0;
          flex: 1;
        }
        .petdesign-image-container {
          position: relative;
          width: 100%;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
        }
        .petdesign-image-container img {
          width: 100%;
          height: auto;
          display: block;
        }
        @media (max-width: 767px) {
          .petdesign-image-container { border-radius: 20px; }
        }
      `}</style>
      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          <div className="petdesign-header">
            <div className="petdesign-header-left">
              <span className="petdesign-dot"></span>
              <h2 className="petdesign-heading">Design process</h2>
            </div>
            <p className="petdesign-description">
              This application followed a user centred approach starting with research problem discovery followed by wire framing prototyping and final UI design.
            </p>
          </div>

          <div className="petdesign-image-container">
            <img src="./assets/petpedia/man.png" alt="Design process" />
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── User Journey Section ────────────────────────────────────── */
function UserJourneySection() {
  return (
    <Box
      component="section"
      style={{
        width: '100%',
        padding: '60px 0',
        background: '#fff',
      } as FramerStyle}
    >
      <style>{`
        .petjourney-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 60px;
          gap: 60px;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 768px) {
          .petjourney-header {
            flex-direction: column;
            gap: 16px;
            margin-bottom: 40px;
          }
        }
        .petjourney-header-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          width: 240px;
        }
        @media (max-width: 768px) {
          .petjourney-header-left {
            width: auto;
          }
        }
        .petjourney-dot {
          width: 12px;
          height: 12px;
          background: #FF462E;
          border-radius: 2px;
        }
        .petjourney-heading {
          font-size: 20px;
          font-weight: 700;
          color: #111;
          margin: 0;
        }
        .petjourney-description {
          font-size: 15px;
          line-height: 1.6;
          color: #6B6B6B;
          margin: 0;
          flex: 1;
        }
        .petjourney-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          width: 100%;
        }
        @media (max-width: 900px) {
          .petjourney-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
        }
        @media (max-width: 600px) {
          .petjourney-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }
        .petjourney-block-horizontal {
          background: #e9ecef;
          border-radius: 12px;
          height: 52px;
          width: 100%;
        }
        .petjourney-block-vertical {
          background: #e9ecef;
          border-radius: 16px;
          height: 180px;
          width: 100%;
        }
        .petjourney-image-wrap {
          display: flex;
          justify-content: center;
          margin-top: 48px;
        }
        .petjourney-image {
          width: 100%;
          max-width: 1000px;
          height: auto;
          display: block;
          border-radius: 16px;
        }
        @media (max-width: 700px) {
          .petjourney-image-wrap { margin-top: 32px; }
          .petjourney-image { border-radius: 12px; }
        }
      `}</style>
      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          <div className="petjourney-header">
            <div className="petjourney-header-left">
              <span className="petjourney-dot"></span>
              <h2 className="petjourney-heading">User journey</h2>
            </div>
            <p className="petjourney-description">
              This user map will highlight the painful broken journey users go through without a proper application so that we can later contrast it with the improved experience that has been developed.
            </p>
          </div>

          <div className="petjourney-image-wrap">
            <img
              src="/assets/petpedia/pb1.png"
              alt="Petpedia User Journey 1"
              className="petjourney-image"
              loading="lazy"
            />
          </div>
          <div className="petjourney-image-wrap">
            <img
              src="/assets/petpedia/pb2.png"
              alt="Petpedia User Journey 2"
              className="petjourney-image"
              loading="lazy"
            />
          </div>
          <div className="petjourney-image-wrap">
            <img
              src="/assets/petpedia/pb3.png"
              alt="Petpedia User Journey 3"
              className="petjourney-image"
              loading="lazy"
            />
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── User Persona Section ───────────────────────────────────────── */
function CompetitorAnalysisSection() {
  return (
    <Box
      component="section"
      style={{ width: '100%', padding: '60px 0', background: '#fff' } as FramerStyle}
    >
      <style>{`
        .petpersona-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 60px;
          gap: 60px;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 768px) {
          .petpersona-header { flex-direction: column; gap: 16px; margin-bottom: 40px; }
          .petpersona-header-left { width: auto; }
        }
        .petpersona-header-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          width: 240px;
        }
        .petpersona-dot { width: 12px; height: 12px; background: #FF462E; border-radius: 2px; }
        .petpersona-heading { font-size: 20px; font-weight: 700; color: #111; margin: 0; font-family: 'Inter', sans-serif; }
        .petpersona-description { font-size: 15px; line-height: 1.6; color: #6B6B6B; margin: 0; flex: 1; font-family: 'Inter', sans-serif; }
        .petpersona-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 900px) {
          .petpersona-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .petpersona-grid { grid-template-columns: 1fr; }
          .petpersona-card { padding: 20px; }
        }
        .petpersona-card {
          background: #f5f6f8;
          border-radius: 24px;
          padding: 28px;
          box-sizing: border-box;
        }
        .petpersona-card.blue {
          background: #1a35e0;
          color: #fff;
        }
        .petpersona-card-title {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 16px;
          color: inherit;
        }
        .petpersona-card ul {
          margin: 0;
          padding: 0 0 0 18px;
          color: inherit;
          font-size: 14px;
          line-height: 1.8;
        }
        .petpersona-card.blue ul { opacity: 0.92; }
        .petpersona-card p { font-size: 14px; line-height: 1.7; color: #555; margin: 0; }
        /* donut chart */
        .petpersona-donut-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 16px 0;
        }
        .petpersona-legend { display: flex; flex-direction: column; gap: 8px; margin-top: 16px; }
        .petpersona-legend-item { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #555; }
        .petpersona-legend-dot { width: 12px; height: 12px; border-radius: 50%; flex-shrink: 0; }
        /* apps row */
        .petpersona-apps-row {
          display: flex;
          gap: 16px;
          align-items: center;
          margin-top: 16px;
          flex-wrap: wrap;
        }
        .petpersona-app-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
        }
      `}</style>
      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          {/* Header */}
          <div className="petpersona-header">
            <div className="petpersona-header-left">
              <span className="petpersona-dot" />
              <h2 className="petpersona-heading">User persona</h2>
            </div>
            <p className="petpersona-description">
              A deep understanding of target audience is fundamental to creating exceptional products. User persona helps us find the answer to one of their most important question "who are we designing for?". By understanding the exceptions, concerns and motivation of target uses it is possible to design a product that will satisfy user needs and therefore be successful based on the generator user research I gathered.
            </p>
          </div>

          {/* Grid */}
          <div className="petpersona-grid">
            {/* Card 1 – Behaviour (blue) */}
            <div className="petpersona-card blue">
              <p className="petpersona-card-title">Behaviour</p>
              <ul>
                <li>Researchers heavily before making any addition</li>
                <li>Comfortable using digital tools and mobile apps</li>
                <li>Follow animal rescue page on Instagram</li>
              </ul>
            </div>

            {/* Card 2 – Goals */}
            <div className="petpersona-card">
              <p className="petpersona-card-title" style={{ color: '#111' }}>Goals</p>
              <ul style={{ color: '#555' }}>
                <li>Adopt a pet ethically and safely</li>
                <li>Learn how to care for the pet properly</li>
                <li>Connect with a community of pet lovers</li>
              </ul>
            </div>

            {/* Card 3 – Behaviour donut chart */}
            <div className="petpersona-card">
              <p className="petpersona-card-title" style={{ color: '#111' }}>Behaviour</p>
              <div className="petpersona-donut-wrap">
                <svg width="120" height="120" viewBox="0 0 120 120">
                  {/* Shopping for pets – blue ~40% */}
                  <circle cx="60" cy="60" r="46" fill="none" stroke="#3B5BDB" strokeWidth="22"
                    strokeDasharray="115 174" strokeDashoffset="0" />
                  {/* Pet care blogs – yellow ~25% */}
                  <circle cx="60" cy="60" r="46" fill="none" stroke="#FAB005" strokeWidth="22"
                    strokeDasharray="72 217" strokeDashoffset="-115" />
                  {/* Watching rescue reels – green ~35% */}
                  <circle cx="60" cy="60" r="46" fill="none" stroke="#40C057" strokeWidth="22"
                    strokeDasharray="102 187" strokeDashoffset="-187" />
                  <circle cx="60" cy="60" r="34" fill="#f5f6f8" />
                </svg>
              </div>
              <div className="petpersona-legend">
                <div className="petpersona-legend-item">
                  <span className="petpersona-legend-dot" style={{ background: '#3B5BDB' }} />
                  Shopping for pets
                </div>
                <div className="petpersona-legend-item">
                  <span className="petpersona-legend-dot" style={{ background: '#FAB005' }} />
                  Pet care blogs
                </div>
                <div className="petpersona-legend-item">
                  <span className="petpersona-legend-dot" style={{ background: '#40C057' }} />
                  Watching rescue reels and saving stories
                </div>
              </div>
            </div>

            {/* Card 4 – User Needs */}
            <div className="petpersona-card">
              <p className="petpersona-card-title" style={{ color: '#111' }}>User Needs</p>
              <ul style={{ color: '#555' }}>
                <li>Trustworthy platform for pet adoption.</li>
                <li>Easy access to verify clinics and groomers.</li>
                <li>Clear pet health records before adoption</li>
              </ul>
            </div>

            {/* Card 5 – Frustrations */}
            <div className="petpersona-card">
              <p className="petpersona-card-title" style={{ color: '#111' }}>Frustrations</p>
              <ul style={{ color: '#555' }}>
                <li>Too many scammer pet listings online and cannot believe which one is authentic</li>
                <li>No single platform that has adoption with grooming and pet care</li>
                <li>Unsure about post adoption support and insurance</li>
              </ul>
            </div>

            {/* Card 6 – Apps */}
            <div className="petpersona-card">
              <p className="petpersona-card-title" style={{ color: '#111' }}>Apps</p>
              <div className="petpersona-apps-row">
                {/* Instagram */}
                <div className="petpersona-app-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig)" />
                    <circle cx="12" cy="12" r="4.5" stroke="#fff" strokeWidth="1.8" fill="none" />
                    <circle cx="17.2" cy="6.8" r="1.1" fill="#fff" />
                    <defs>
                      <linearGradient id="ig" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9CE34" />
                        <stop offset="0.4" stopColor="#EE2A7B" />
                        <stop offset="1" stopColor="#6228D7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                {/* Google */}
                <div className="petpersona-app-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21.8 12.2c0-.7-.1-1.3-.2-2H12v3.8h5.5a4.7 4.7 0 0 1-2 3.1v2.5h3.3c1.9-1.8 3-4.4 3-7.4z" fill="#4285F4" />
                    <path d="M12 22c2.7 0 5-1 6.7-2.4l-3.3-2.5a6 6 0 0 1-9-3.2H3v2.6A10 10 0 0 0 12 22z" fill="#34A853" />
                    <path d="M6.4 13.9a6 6 0 0 1 0-3.8V7.5H3a10 10 0 0 0 0 9l3.4-2.6z" fill="#FBBC05" />
                    <path d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3 7.5l3.4 2.6C7.3 7.7 9.4 5.9 12 5.9z" fill="#EA4335" />
                  </svg>
                </div>
                {/* Facebook */}
                <div className="petpersona-app-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="6" fill="#1877F2" />
                    <path d="M16 8h-2a1 1 0 0 0-1 1v2h3l-.5 3H13v7h-3v-7H8v-3h2V9a4 4 0 0 1 4-4h2v3z" fill="#fff" />
                  </svg>
                </div>
                {/* WhatsApp */}
                <div className="petpersona-app-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="6" fill="#25D366" />
                    <path d="M12 4a8 8 0 0 0-6.9 12L4 20l4.2-1.1A8 8 0 1 0 12 4zm4.1 11.4c-.2.5-1 1-1.4 1-.4.1-.9.1-2.8-.6-2.3-.9-3.7-3.2-3.8-3.4-.2-.2-1-1.3-1-2.5s.6-1.7.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .3 0 .5.4l.7 1.7c.1.2 0 .4-.1.6l-.4.4c-.1.2-.3.3-.1.6.5.9 1.1 1.6 1.8 2.1.5.3 1.1.6 1.3.4l.4-.5c.2-.2.4-.2.6-.1l1.7.8c.2.1.3.2.3.4s-.1.9-.3 1.4z" fill="#fff" />
                  </svg>
                </div>
                {/* YouTube */}
                <div className="petpersona-app-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="6" fill="#FF0000" />
                    <path d="M19.6 8.2a2 2 0 0 0-1.4-1.4C16.9 6.5 12 6.5 12 6.5s-4.9 0-6.2.3a2 2 0 0 0-1.4 1.4C4.2 9.5 4.2 12 4.2 12s0 2.5.3 3.8a2 2 0 0 0 1.4 1.4c1.3.3 6.1.3 6.1.3s4.9 0 6.2-.3a2 2 0 0 0 1.4-1.4c.3-1.3.3-3.8.3-3.8s0-2.5-.3-3.8z" fill="#FF0000" stroke="#fff" strokeWidth="0" />
                    <path d="M19.6 8.2a2 2 0 0 0-1.4-1.4C16.9 6.5 12 6.5 12 6.5s-4.9 0-6.2.3a2 2 0 0 0-1.4 1.4C4.2 9.5 4.2 12 4.2 12s0 2.5.3 3.8a2 2 0 0 0 1.4 1.4c1.3.3 6.1.3 6.1.3s4.9 0 6.2-.3a2 2 0 0 0 1.4-1.4c.3-1.3.3-3.8.3-3.8s0-2.5-.3-3.8z" fill="#FF0000" />
                    <polygon points="10,9 10,15 15,12" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Product Thinking Section ────────────────────────────────── */
function ProductThinkingSection() {
  const CardIcon = ({ isBlueBg = false }: { isBlueBg?: boolean }) => {
    const iconColor = isBlueBg ? '#FBBF24' : '#F59E0B';
    return (
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        border: isBlueBg ? 'none' : '1px solid #E5E7EB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isBlueBg ? 'transparent' : '#fff',
        flexShrink: 0
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill={iconColor} xmlns="http://www.w3.org/2000/svg">
          <circle cx="7.5" cy="8.5" r="2.2" />
          <circle cx="12" cy="6" r="2.2" />
          <circle cx="16.5" cy="8.5" r="2.2" />
          <path d="M12 12c-2.5 0-4.5 1.8-4.5 4.5 0 2.2 2 3.5 4.5 3.5s4.5-1.3 4.5-3.5c0-2.7-2-4.5-4.5-4.5z" />
        </svg>
      </div>
    )
  }

  return (
    <Box
      component="section"
      style={{
        width: '100%',
        padding: '60px 0',
        background: '#fff',
      } as FramerStyle}
    >
      <style>{`
        .petproduct-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 60px;
          gap: 60px;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 768px) {
          .petproduct-header {
            flex-direction: column;
            gap: 16px;
            margin-bottom: 40px;
          }
        }
        .petproduct-header-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          width: 240px;
        }
        @media (max-width: 768px) {
          .petproduct-header-left {
            width: auto;
          }
        }
        .petproduct-dot {
          width: 12px;
          height: 12px;
          background: #FF462E;
          border-radius: 2px;
        }
        .petproduct-heading {
          font-size: 20px;
          font-weight: 700;
          color: #111;
          margin: 0;
        }
        .petproduct-description {
          font-size: 15px;
          line-height: 1.6;
          color: #6B6B6B;
          margin: 0;
          flex: 1;
        }
        .petproduct-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 1024px) {
          .petproduct-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .petproduct-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
        .petproduct-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        @media (max-width: 640px) {
          .petproduct-col { gap: 16px; }
          .petproduct-card { padding: 24px 20px; border-radius: 20px; }
        }
        .petproduct-card {
          border-radius: 32px;
          padding: 36px;
          position: relative;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        .petproduct-card.blue {
          background: #0f3ee3;
          color: #fff;
        }
        .petproduct-card.light {
          background: #f5f6f8;
          color: #333;
        }
        .petproduct-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .petproduct-card-title {
          font-size: 22px;
          font-weight: 700;
          margin: 0;
        }
        .petproduct-card-body {
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }
        .petproduct-card.blue .petproduct-card-body {
          color: rgba(255, 255, 255, 0.9);
        }
        .petproduct-card.light .petproduct-card-body {
          color: #555;
        }
        .petproduct-image-card {
          border-radius: 32px;
          overflow: hidden;
          width: 100%;
          height: 240px;
          display: block;
        }
        .petproduct-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .petproduct-image-card:hover img {
          transform: scale(1.05);
        }
      `}</style>
      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          <div className="petproduct-header">
            <div className="petproduct-header-left">
              <span className="petproduct-dot"></span>
              <h2 className="petproduct-heading">Product Thinking</h2>
            </div>
            <p className="petproduct-description">
              Thinking is a problem solution methodology for developing valuable solutions for user problems. Effective product thinking begins by identifying an audience problem.
            </p>
          </div>

          <div className="petproduct-grid">
            {/* Column 1 */}
            <div className="petproduct-col">
              <div className="petproduct-card blue">
                <div className="petproduct-card-header">
                  <h3 className="petproduct-card-title">Who ?</h3>
                  <CardIcon isBlueBg={true} />
                </div>
                <p className="petproduct-card-body">
                  Petpedia is built for pet lovers, animal rescuers, and pet care service providers (like clinics, groomers, pet shops, breeders, and engineers).
                </p>
              </div>
              <div className="petproduct-image-card">
                <img src="./assets/petpedia/petpedia17.png" alt="Cute kitten looking up" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="petproduct-col">
              <div className="petproduct-image-card">
                <img src="./assets/petpedia/petpedia19.png" alt="Cute smiling puppy" />
              </div>
              <div className="petproduct-card light">
                <div className="petproduct-card-header">
                  <h3 className="petproduct-card-title">What ?</h3>
                  <CardIcon isBlueBg={false} />
                </div>
                <p className="petproduct-card-body">
                  The pet care system in the United Kingdom is very unorganized. People use too many apps or WhatsApp groups for pet-related things. It's also hard to know who is real and who is fake. There is no single app that brings rescue, pet products, grooming, vet booking, donations, and insurance altogether.
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="petproduct-col">
              <div className="petproduct-card light">
                <div className="petproduct-card-header">
                  <h3 className="petproduct-card-title">When?</h3>
                  <CardIcon isBlueBg={false} />
                </div>
                <p className="petproduct-card-body">
                  When their pet needs grooming or vet care. When they need to post or support a rescue case. When they want to get pet insurance or make claims. Any time they need verified, pet-related help in one place.
                </p>
              </div>
              <div className="petproduct-card light">
                <div className="petproduct-card-header">
                  <h3 className="petproduct-card-title">Where?</h3>
                  <CardIcon isBlueBg={false} />
                </div>
                <p className="petproduct-card-body">
                  People will use it on their mobile phones while sitting at home or on the go, especially during emergencies, or while shopping and planning for their pets.
                </p>
              </div>
            </div>

            {/* Column 4 */}
            <div className="petproduct-col">
              <div className="petproduct-image-card">
                <img src="./assets/petpedia/petpedia18.png" alt="Dog and cat portrait selfie" />
              </div>
              <div className="petproduct-card light">
                <div className="petproduct-card-header">
                  <h3 className="petproduct-card-title">How ?</h3>
                  <CardIcon isBlueBg={false} />
                </div>
                <p className="petproduct-card-body">
                  Brings everything related to pets into one app. Allows users to adopt, shop, book, donate, and insure in one platform. Uses a verification process to avoid fake sellers or breeders. Offers healthy pet rewards and insurance discounts if users regularly take care of their pets.
                </p>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── User Research Section ────────────────────────────────────── */
function WaveCounter({ value, visible }: { value: number; visible: boolean }) {
  const [display, setDisplay] = React.useState(0)
  React.useEffect(() => {
    if (!visible) {
      setDisplay(0)
      return
    }
    const duration = 900
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      setDisplay(Math.round(value * t))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [value, visible])
  return <>{display}%</>
}

function WireframeSection() {
  const [waveVisible, setWaveVisible] = React.useState(false)
  const waveRef = React.useRef<HTMLDivElement>(null)
  const hasAnimated = React.useRef(false)

  React.useEffect(() => {
    const el = waveRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            setWaveVisible(true)
            obs.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const stats = [
    { label: 'App', pct: 75, desc: 'No single app for all\npet needs', color1: '#b5e04a', color2: '#f5c400' },
    { label: 'Age', pct: 65, desc: '18 – 25 age group', color1: '#c8e64a', color2: '#f5c400' },
    { label: 'Adoption', pct: 55, desc: 'Prefer adoption', color1: '#f5c400', color2: '#f59a00' },
    { label: 'Community', pct: 80, desc: 'Would use pet\ncommunity', color1: '#7ed436', color2: '#b5e04a' },
    { label: 'Trust', pct: 70, desc: 'Clinic appointment\nconfusion', color1: '#b5e04a', color2: '#f5c400' },
    { label: 'Verification', pct: 52, desc: 'Lack of online\nconsultation support', color1: '#f5c400', color2: '#f59a00' },
    { label: 'Uploading', pct: 64, desc: 'Managing multiple\nservices', color1: '#d4e03a', color2: '#f5c400' },
    { label: 'Payment', pct: 48, desc: 'No central record for\npet history', color1: '#f59a00', color2: '#f04e23' },
  ]

  return (
    <Box
      ref={waveRef as any}
      component="section"
      style={{ width: '100%', padding: '60px 0', background: '#fff' } as FramerStyle}
    >
      <style>{`
        @keyframes petliquid-rise {
          from { transform: translateY(100%); }
          to   { transform: translateY(0%); }
        }
        .petresearch-wrap {
          width: 100%;
          font-family: 'Inter', sans-serif;
        }
        .petresearch-top {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 56px;
          gap: 60px;
        }
        @media (max-width: 768px) {
          .petresearch-top { flex-direction: column; gap: 16px; margin-bottom: 36px; }
          .petresearch-top-left { width: auto; }
        }
        .petresearch-top-left {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          width: 240px;
        }
        .petresearch-top-dot {
          width: 12px; height: 12px;
          background: #FF462E;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .petresearch-top-label {
          font-size: 20px; font-weight: 700; color: #111; margin: 0;
        }
        .petresearch-top-desc {
          font-size: 14px; line-height: 1.65; color: #6b6b6b; margin: 0; flex: 1;
        }
        .petresearch-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px 24px;
        }
        @media (max-width: 900px) {
          .petresearch-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .petresearch-grid { grid-template-columns: repeat(2, 1fr); gap: 28px 16px; }
          .petresearch-circle-outer { width: 110px; height: 110px; }
        }
        @media (min-width: 320px) and (max-width: 390px) {
          .petresearch-top { margin-bottom: 28px; gap: 12px; }
          .petresearch-top-label { font-size: 18px; }
          .petresearch-top-desc { font-size: 13px; }
          .petresearch-grid { grid-template-columns: 1fr; gap: 28px; }
          .petresearch-item { gap: 12px; }
          .petresearch-item-label { font-size: 14px; }
          .petresearch-circle-outer { width: 120px; height: 120px; }
          .petresearch-pct-text { font-size: 24px; }
          .petresearch-item-desc { font-size: 12px; }
        }
        .petresearch-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .petresearch-item-label {
          font-size: 15px; font-weight: 600; color: #222; text-align: center;
        }
        .petresearch-circle-outer {
          position: relative;
          width: 140px; height: 140px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 0 3px #e8f5c0;
          overflow: hidden;
          flex-shrink: 0;
        }
        .petresearch-liquid {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          transform-origin: bottom;
        }
        .petresearch-pct-text {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          font-weight: 800;
          color: #1a1a1a;
          z-index: 2;
          font-family: 'Inter', sans-serif;
        }
        .petresearch-item-desc {
          font-size: 13px; color: #555; text-align: center;
          line-height: 1.5; white-space: pre-line;
        }
      `}</style>

      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          <div className="petresearch-wrap">
            {/* Header */}
            <div className="petresearch-top">
              <div className="petresearch-top-left">
                <span className="petresearch-top-dot" />
                <h2 className="petresearch-top-label">User Research</h2>
              </div>
              <p className="petresearch-top-desc">
                A set of quantitative and quantitative research was done by receiving insights from 80+ pet owners and service providers. From the response keep paying point were discovered but need immediate attention and focused on solving them with simple user-friendly solution.
              </p>
            </div>

            {/* Grid */}
            <div className="petresearch-grid">
              {stats.map(({ label, pct, desc, color1, color2 }) => {
                const svgH = 140
                const waveAmp = 10
                // wave path: start left, wave across, drop to bottom, close
                const wavePath = `M0,${waveAmp} Q35,${-waveAmp} 70,${waveAmp} Q105,${3 * waveAmp} 140,${waveAmp} L140,${svgH} L0,${svgH} Z`
                return (
                  <div key={label} className="petresearch-item">
                    <div className="petresearch-item-label">{label}</div>
                    <div className="petresearch-circle-outer">
                      {/* Liquid fill */}
                      <div
                        className="petresearch-liquid"
                        style={{
                          height: `${pct}%`,
                          transform: waveVisible ? 'translateY(0%)' : 'translateY(100%)',
                          transition: 'transform 0.9s ease',
                        }}
                      >
                        <svg
                          width="100%"
                          height="100%"
                          viewBox={`0 0 140 ${svgH}`}
                          preserveAspectRatio="none"
                          style={{ display: 'block', width: '100%', height: '100%' }}
                        >
                          <defs>
                            <linearGradient id={`grad-${label}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor={color1} />
                              <stop offset="100%" stopColor={color2} />
                            </linearGradient>
                          </defs>
                          {/* wave top + filled body */}
                          <path
                            d={wavePath}
                            fill={`url(#grad-${label})`}
                            opacity="0.9"
                          />
                        </svg>
                      </div>
                      {/* Percentage text on top */}
                      <span className="petresearch-pct-text"><WaveCounter value={pct} visible={waveVisible} /></span>
                    </div>
                    <div className="petresearch-item-desc">{desc}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Competitive Analysis Section ─────────────────────────────── */
function DesignSystemSection() {
  return (
    <Box
      component="section"
      style={{ width: '100%', padding: '60px 0', background: '#fff' } as FramerStyle}
    >
      <style>{`
        .petca-header-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 40px;
        }
        .petca-dot {
          width: 12px; height: 12px;
          background: #FF462E;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .petca-label {
          font-family: 'Inter', sans-serif;
          font-size: 14px; font-weight: 700; color: #555;
        }
      `}</style>

      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          {/* Header badge */}
          <div className="petca-header-row">
            <span className="petca-dot" />
            <span className="petca-label">Competitive analysis</span>
          </div>

          <img src="../petbox1.png" alt="" />
        </Box>
      </Box>
    </Box>
  )
}
/* ─── Empathy Mapping Section ───────────────────────────────────── */
function DesignsSection() {
  const quadrants = [
    {
      title: 'Think',
      items: [
        'Is this adoption real or a scam?',
        'When I get proper support after adopting?',
        'I want a pet but I am scared to trust unknown sources?',
      ],
    },
    {
      title: 'Feel',
      items: [
        'Excited to adapt a pet.',
        'Worried about scams and fake sellers.',
        'Confused about what to do after adoption.',
      ],
    },
    {
      title: 'Say',
      items: [
        "I wish I could but I don't know where to look.",
        'Most platforms seem shady or incomplete.',
        "If it's verified and simple I'll go for it.",
      ],
    },
    {
      title: 'Does',
      items: [
        'Search on Google, Instagram, gumtree and Facebook marketplace.',
        'Join WhatsApp or Facebook groups.',
        'Ask friends or family for help.',
      ],
    },
  ]

  return (
    <Box
      component="section"
      style={{ width: '100%', padding: '60px 0 100px', background: '#fff' } as FramerStyle}
    >
      <style>{`
        .petempathy-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 50px;
        }
        .petempathy-dot {
          width: 12px;
          height: 12px;
          background: #FF462E;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .petempathy-label {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #555;
        }
        .petempathy-container {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          font-family: 'Inter', sans-serif;
        }
        .petempathy-card {
    z-index: 10;
    width: 60%;
    background: #f8f9fa;
    border-radius: 36px;
    padding: 48px;
    box-sizing: border-box;
    min-height: 280px;
    display: flex;
    flex-direction: column;
    margin: 0 auto; /* Center horizontally */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.petempathy-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
}
        .petempathy-title {
          font-size: clamp(24px, 5vw, 32px);
          font-weight: 800;
          color: #111;
          margin: 0 0 24px 0;
        }
        .petempathy-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .petempathy-item {
          font-size: 15px;
          line-height: 1.65;
          color: #555;
          margin: 0;
        }
        .petempathy-center-img-wrap {
          border: 2px solid #d21313;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 390px;
          height: 340px;
          border-radius: 64px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
          
          pointer-events: none;
          background: #fff;
        }
        .petempathy-center-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        @media (max-width: 992px) {
          .petempathy-container {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .petempathy-center-img-wrap {
            position: relative;
            top: auto;
            left: auto;
            transform: none;
            width: 100%;
            max-width: 320px;
            height: 320px;
            margin: 16px auto;
            border-radius: 32px;
          }
          .petempathy-card {
            width: 100%;
            padding: 32px;
            min-height: auto;
          }
          .petempathy-card-bottom {
            margin-top: 240px;
          }
        }
        @media (max-width: 480px) {
          .petempathy-card { padding: 20px; }
          .petempathy-card-bottom { margin-top: 0; }
        }
        @media (max-width: 992px) {
          .petempathy-card-bottom {
            margin-top: 0;
          }
        }
      `}</style>
      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          <div className="petempathy-header">
            <span className="petempathy-dot" />
            <span className="petempathy-label">Empathy mapping</span>
          </div>

          <div className="petempathy-container">
            {/* Top Left: Think */}
            <div className="petempathy-card">
              <h3 className="petempathy-title">{quadrants[0].title}</h3>
              <div className="petempathy-list">
                {quadrants[0].items.map((text, idx) => (
                  <p key={idx} className="petempathy-item">{text}</p>
                ))}
              </div>
            </div>

            {/* Top Right: Feel */}
            <div className="petempathy-card">
              <h3 className="petempathy-title">{quadrants[1].title}</h3>
              <div className="petempathy-list">
                {quadrants[1].items.map((text, idx) => (
                  <p key={idx} className="petempathy-item">{text}</p>
                ))}
              </div>
            </div>

            {/* Center Image */}
            <div className="petempathy-center-img-wrap">
              <img
                src="./assets/petpedia/petpedia15.jpg"
                alt="Empathy target audience holding puppy"
                className="petempathy-center-img"
              />
            </div>

            {/* Bottom Left: Say */}
            <div className="petempathy-card petempathy-card-bottom">
              <h3 className="petempathy-title">{quadrants[2].title}</h3>
              <div className="petempathy-list">
                {quadrants[2].items.map((text, idx) => (
                  <p key={idx} className="petempathy-item">{text}</p>
                ))}
              </div>
            </div>

            {/* Bottom Right: Does */}
            <div className="petempathy-card petempathy-card-bottom">
              <h3 className="petempathy-title">{quadrants[3].title}</h3>
              <div className="petempathy-list">
                {quadrants[3].items.map((text, idx) => (
                  <p key={idx} className="petempathy-item">{text}</p>
                ))}
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Business Insights Section ────────────────────────────────── */
function LearningSection() {
  return (
    <Box
      component="section"
      style={{ width: '100%', padding: '40px 0 100px', background: '#fff' } as FramerStyle}
    >
      <style>{`
        .petbiz-banner-wrap {
          position: relative;
          width: 100%;
          border-radius: 32px;
          overflow: hidden;
          margin-bottom: 60px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.08);
          background: #111;
        }
        .petbiz-banner-img {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
          opacity: 0.88;
        }
        .petbiz-overlay-card {
          position: absolute;
          background: rgba(30, 35, 45, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 24px;
          padding: 24px 28px;
          color: #fff;
          font-family: 'Inter', sans-serif;
          box-sizing: border-box;
          z-index: 5;
        }
        .petbiz-overlay-card h4 {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 14px 0;
          color: #fff;
        }
        .petbiz-overlay-card p {
          font-size: 12px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
          margin: 0 0 10px 0;
        }
        .petbiz-overlay-card p:last-child {
          margin-bottom: 0;
        }
        .petbiz-overlay-card strong {
          color: #fff;
          font-weight: 700;
        }
        /* Positions */
        .petbiz-card-left {
          top: 36px;
          left: 36px;
          width: 320px;
        }
        .petbiz-card-center {
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          width: 380px;
        }
        .petbiz-card-right {
          top: 70px;
          right: 36px;
          width: 320px;
        }
        /* Mobile stacked version of banner cards */
        .petbiz-mobile-cards {
          display: none;
        }

        @media (max-width: 1024px) {
          .petbiz-banner-img { aspect-ratio: 16/9; height: auto; }
          .petbiz-banner-wrap { border-radius: 16px; }
          .petbiz-overlay-card { display: none; }
          .petbiz-mobile-cards {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 20px;
          }
          .petbiz-mobile-card {
            background: #1e293b;
            border-radius: 20px;
            padding: 24px;
            color: #fff;
            font-family: 'Inter', sans-serif;
          }
          .petbiz-mobile-card h4 {
            font-size: 17px;
            font-weight: 700;
            margin: 0 0 12px 0;
            color: #fff;
          }
          .petbiz-mobile-card p {
            font-size: 13px;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.85);
            margin: 0 0 10px 0;
          }
          .petbiz-mobile-card strong {
            color: #fff;
          }
        }

        /* Bottom Insights Header & Grid */
        .petbiz-insights-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 50px;
          gap: 60px;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 768px) {
          .petbiz-insights-header {
            flex-direction: column;
            gap: 16px;
            margin-bottom: 36px;
          }
          .petbiz-insights-title-row { width: auto; }
        }
        .petbiz-insights-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          width: 240px;
        }
        .petbiz-dot {
          width: 12px;
          height: 12px;
          background: #FF462E;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .petbiz-title {
          font-size: 20px;
          font-weight: 700;
          color: #111;
          margin: 0;
        }
        .petbiz-desc {
          font-size: 14px;
          line-height: 1.65;
          color: #6B6B6B;
          margin: 0;
          flex: 1;
        }
        .petbiz-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 992px) {
          .petbiz-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .petbiz-grid { grid-template-columns: 1fr; }
          .petbiz-card { padding: 24px 18px; min-height: auto; }
        }
        .petbiz-card {
          background: #f8f9fa;
          border-radius: 24px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 240px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
          box-sizing: border-box;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .petbiz-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.05);
        }
        .petbiz-card-heading {
          font-size: 17px;
          font-weight: 700;
          color: #111;
          line-height: 1.4;
          margin: 0 0 20px 0;
        }
        .petbiz-card-text {
          font-size: 13px;
          line-height: 1.65;
          color: #6B6B6B;
          margin: 0;
        }
      `}</style>
      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          {/* Top Banner with Overlay Cards */}
          <div className="petbiz-banner-wrap">
            <img
              src="./assets/petpedia/petpedia14.png"
              alt="Petpedia Target Audience Collaboration"
              className="petbiz-banner-img"
            />


          </div>

          {/* Mobile Stacked Cards */}
          <div className="petbiz-mobile-cards">
            <div className="petbiz-mobile-card">
              <h4>Target Audience</h4>
              <p>People who want to <strong>adopt pets or get pet services</strong> (vet, grooming, food).</p>
              <p>Age group: <strong>20–55</strong>, mostly in <strong>urban & semi-urban</strong> areas.</p>
              <p><strong>Verified breeders</strong> or <strong>pet shop owners</strong> who sell pets, food, and accessories.</p>
              <p><strong>Individuals</strong> or <strong>organizations</strong> who rescue and rehome animals.</p>
              <p><strong>Professionals</strong> offering pet <strong>care, grooming, treatment, or training services</strong>.</p>
            </div>
            <div className="petbiz-mobile-card">
              <h4>Critical Success Factors</h4>
              <p><strong>Verified sellers, rescuers, and clinics</strong> (no fake listings).</p>
              <p><strong>Easy-to-use interface</strong> for all age groups.</p>
              <p><strong>Reels, posts, reviews, adoption</strong> stories.</p>
              <p><strong>App covers adoption, selling, rescue, vet booking, donation, shopping</strong>.</p>
              <p><strong>Strong Admin Control</strong> Proper backend for verification, approvals, commission tracking.</p>
            </div>
            <div className="petbiz-mobile-card">
              <h4>Technology Constraints</h4>
              <p>Must support <strong>low-end Android phones</strong>.</p>
              <p>Should work on <strong>low internet speed / patchy network</strong>.</p>
              <p><strong>Real-time updates and push notifications</strong> may be limited on older devices.</p>
              <p><strong>Smart Phones</strong></p>
            </div>
          </div>

          {/* Bottom Insights Section */}
          <div className="petbiz-insights-header">
            <div className="petbiz-insights-title-row">
              <span className="petbiz-dot" />
              <h2 className="petbiz-title">Business insights</h2>
            </div>
            <p className="petbiz-desc">
              To create a safe trust and all in one digital platform for everything related to pets around the world. The goal is to solve real problem faced by pet owners animal rescuers clinic and ethical pet sellers buy bringing them together on app. Today, the pet ecosystem in different region is scattered and organised and full of fake listings or unsafe practices. So Petpedia to change that.
            </p>
          </div>

          {/* 4 Cards */}
          <div className="petbiz-grid">
            <div className="petbiz-card">
              <h3 className="petbiz-card-heading">Help people adopt pets safely</h3>
              <p className="petbiz-card-text">
                We want to make pet adoption simple, transparent and scam free by connecting adopters with verified rescues and shelters.
              </p>
            </div>

            <div className="petbiz-card">
              <h3 className="petbiz-card-heading">Provide a platform for ethical sellers</h3>
              <p className="petbiz-card-text">
                Verified breeds and sellers need a legal, trusted platform to sell pets, food and accessories. We support only those who follow pet welfare rule.
              </p>
            </div>

            <div className="petbiz-card">
              <h3 className="petbiz-card-heading">Make Pet sellers easy to access</h3>
              <p className="petbiz-card-text">
                Vet clinic, grooming services and training should be easy to book. Let users find and book these services nearby with just a few taps.
              </p>
            </div>

            <div className="petbiz-card">
              <h3 className="petbiz-card-heading">Build a pet first community</h3>
              <p className="petbiz-card-text">
                Through stories feel post and verified reviews we aim to build an emotional connect between people and pets creating loyal engaged community
              </p>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Strategy Section ─────────────────────────────────────────── */
function StrategySection() {
  const DownArrowIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
      <circle cx="12" cy="12" r="11" fill="#111" />
      <path d="M12 7v10M8 13l4 4 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  return (
    <Box
      component="section"
      style={{ width: '100%', padding: '40px 0 80px', background: '#fff' } as FramerStyle}
    >
      <style>{`
        .petstrat-heading {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          color: #111;
          margin: 0 0 36px 0;
          letter-spacing: -0.02em;
        }
        .petstrat-top-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 50px;
        }
        @media (max-width: 900px) {
          .petstrat-top-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .petstrat-top-grid { grid-template-columns: 1fr; }
        }
        .petstrat-top-card {
          background: #f8f9fa;
          border-radius: 24px;
          height: 190px;
          width: 100%;
          box-sizing: border-box;
        }
        .petstrat-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 28px;
          font-family: 'Inter', sans-serif;
          align-items: start;
        }
        @media (max-width: 992px) {
          .petstrat-bottom-grid { grid-template-columns: 1fr; }
        }
        .petstrat-left-col {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .petstrat-box {
          background: #f8f9fa;
          border-radius: 32px;
          padding: 40px 36px;
          box-sizing: border-box;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }
        .petstrat-box-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }
        .petstrat-box-title {
          font-size: 24px;
          font-weight: 800;
          color: #111;
          margin: 0;
          line-height: 1.25;
        }
        .petstrat-list {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .petstrat-list-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .petstrat-list-text {
          font-size: 14px;
          line-height: 1.6;
          color: #555;
          margin: 0;
          font-weight: 500;
        }
        .petstrat-banner-card {
          overflow: hidden;
          background: #99d5f9;
          position: relative;
        }
        .petstrat-banner-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          display: block;
        }
        @media (max-width: 600px) {
          .petstrat-heading { margin-bottom: 24px; }
          .petstrat-box { padding: 28px 20px; }
          .petstrat-banner-img { height: 140px; }
        }
      `}</style>
      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          {/* Main Title */}
          <h2 className="petstrat-heading">Strategy</h2>

          {/* Top 4 placeholder cards */}
          <div>
            <div >
              <span />
            </div>
            <div className="petstrat-banner-card">
              <img
                src="/assets/petpedia/pt4.png"
                alt="Petpedia Strategy"
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block' } as FramerStyle}
              />
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="petstrat-bottom-grid">
            {/* Left Column: Findings + Pet Banner */}
            <div className="petstrat-left-col">
              <div className="petstrat-box">
                <div className="petstrat-box-header">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="10" fill="#F59E0B" />
                    <path d="M12 8v4M12 16h.01" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  <h3 className="petstrat-box-title">FINDINGS</h3>
                </div>

                <div className="petstrat-list">
                  {[
                    "Pet owner sellers clinic and pet service providers are currently scattered across multiple apps and website there's no one stop app that connects them.",
                    "Many users to buy or adopt pets online due to fake listening unverified readers and lack of health guarantees",
                    "Pet parents don't have a centralised place to manage health records appointments or insurance for their pets",
                    "There is no platform for parents to share experience, Post updates or in bed based communities with trusted filters",
                  ].map((text, i) => (
                    <div key={i} className="petstrat-list-item">
                      <DownArrowIcon />
                      <p className="petstrat-list-text">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Banner below findings */}

            </div>

            {/* Right Column: Recommendation & Solution */}
            <div className="petstrat-box">
              <div className="petstrat-box-header">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#10B981" />
                  <path d="M8 12l2.5 2.5L16 9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="petstrat-box-title">Recommendation &amp;<br />Solution</h3>
              </div>

              <div className="petstrat-list">
                {[
                  'Highlight activity stories and rescue videos in the home feed with personalisation via "for you" section',
                  'Add timely reminders for vaccination grooming insurance renewal and wellness tips',
                  'Use location base recommendations to connect users with nearby services like vet groomers and emergency rescue.',
                  'Verified sellers only with health records certification and adult categories.',
                  'In app donation system with trust signals for rescue pet adoption request',
                  'Pet insurance module claim history vet appointment booking',
                  'Super admin managers listing approved donations tracks orders and verify users',
                ].map((text, i) => (
                  <div key={i} className="petstrat-list-item">
                    <DownArrowIcon />
                    <p className="petstrat-list-text">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Assets Design System Section ────────────────────────────── */
function AssetsDesignSystemSection() {
  const swatchColumns = [
    [
      { name: 'Title-Active', hex: '#0B0A26', desc: 'Used for both links and titles.' },
      { name: 'Body', hex: '#777986', desc: 'Used for body copy text.' },
      { name: 'Label', hex: '#B2B5BC', desc: 'Used for the label text.' },
      { name: 'Input Background', hex: '#EBECEE', desc: 'Used for input bg accessibility.' },
    ],
    [
      { name: 'Primary', hex: '#F5A623', desc: 'Used as the primary color.' },
      { name: 'complementary', hex: '#4285F4', desc: 'Used for accents & actions.' },
      { name: 'ANALOGOUS', hex: '#D8F735', desc: 'The primary gradient.' },
      { name: 'TRIADIC', hex: '#BF40F5', desc: 'An accent gradient.' },
    ],
    [
      { name: 'Error', hex: '#FF3B30', desc: 'Used for error states.' },
      { name: 'Success', hex: '#28CD56', desc: 'Used for success states.' },
      { name: 'Warning', hex: '#F5B823', desc: 'Used to represent caution.' },
      { name: 'Background', hex: '#FFFFFF', desc: 'Used for element backgrounds.', border: true },
    ],
  ]

  return (
    <Box
      component="section"
      style={{ width: '100%', padding: '60px 0 100px', background: '#fff' } as FramerStyle}
    >
      <style>{`
        .petassets-header-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .petassets-dot {
          width: 12px;
          height: 12px;
          background: #FF462E;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .petassets-badge-text {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #555;
        }
        .petassets-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 800;
          color: #111;
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 0 0 50px 0;
          letter-spacing: -0.02em;
        }
        .petassets-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 900px) {
          .petassets-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
        }
        @media (max-width: 600px) {
          .petassets-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
        .petassets-col {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }
        .petassets-card {
          display: flex;
          flex-direction: column;
        }
        .petassets-swatch {
          width: 100%;
          height: 145px;
          border-radius: 24px;
          box-sizing: border-box;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .petassets-swatch:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
        }
        .petassets-card-name {
          font-size: 16px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 16px 0 6px 0;
        }
        .petassets-card-desc {
          font-size: 13px;
          color: #888;
          margin: 0;
          font-weight: 500;
        }
      `}</style>
      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          {/* Header */}
          <div className="petassets-header-badge">
            <span className="petassets-dot" />
            <span className="petassets-badge-text">Design system</span>
          </div>

          <h1 className="petassets-title">
            <span>🔔</span>
            <span>Assets</span>
          </h1>

          {/* 3 Columns Swatch Grid */}
          <div className="petassets-grid">
            {swatchColumns.map((col, cIdx) => (
              <div key={cIdx} className="petassets-col">
                {col.map((item, iIdx) => (
                  <div key={iIdx} className="petassets-card">
                    <div
                      className="petassets-swatch"
                      style={{
                        backgroundColor: item.hex,
                        border: item.border ? '1.5px solid #E5E7EB' : 'none',
                      }}
                    />
                    <h4 className="petassets-card-name">{item.name}</h4>
                    <p className="petassets-card-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Typography & Button System Section ──────────────────────── */
function TypographyButtonSystemSection() {
  const typoItems = [
    // Row 1
    { label: 'TEXT LARGE  (24-36PTS)', text: 'Back', size: 28, weight: 700 },
    { label: 'TEXT LARGE  (16-24 PTS)', text: 'The future is in our hands to shape.', size: 16, weight: 500 },
    { label: 'TEXT SMALL  (12-16PTS)', text: 'The future\nis in our\nhands to\nshape.', size: 12, weight: 400 },

    // Row 2
    { label: 'DISPLAY LARGE BOLD', text: 'The future is in our hands to shape.', size: 26, weight: 800 },
    { label: 'DISPLAY MEDIUM BOLD', text: 'The future is in our hands to shape.', size: 17, weight: 800 },
    { label: 'DISPLAY SMALL BOLD', text: 'The future is in our hands to shape.', size: 13, weight: 800 },

    // Row 3
    { label: 'DISPLAY LARGE', text: 'The future is in our hands to shape.', size: 26, weight: 400 },
    { label: 'DISPLAY MEDIUM', text: 'The future is in our hands to shape.', size: 17, weight: 400 },
    { label: 'DISPLAY SMALL', text: 'The future is in our hands to shape.', size: 13, weight: 400 },
  ]


  return (
    <Box
      component="section"
      style={{ width: '100%', padding: '60px 0 100px', background: '#fff' } as FramerStyle}
    >
      <style>{`
        .pettypo-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          color: #111;
          margin: 0 0 48px 0;
          letter-spacing: -0.02em;
        }
        .pettypo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px 36px;
          margin-bottom: 90px;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 900px) {
          .pettypo-grid { grid-template-columns: 1fr; gap: 32px; margin-bottom: 60px; }
        }
        .pettypo-card {
          display: flex;
          flex-direction: column;
        }
        .pettypo-label {
          font-size: 11px;
          font-weight: 800;
          color: #9333ea;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin: 0 0 14px 0;
        }
        .pettypo-sample {
          color: #222;
          line-height: 1.35;
          margin: 0;
          white-space: pre-line;
        }

        /* Button System */
        .petbtn-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(32px, 4.5vw, 48px);
          font-weight: 800;
          color: #111;
          margin: 0 0 40px 0;
          letter-spacing: -0.02em;
        }
        .petbtn-table-wrap {
          width: 100%;
          overflow-x: auto;
          margin-bottom: 60px;
        }
      `}</style>

      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          {/* Typography Scale */}
          <h2 className="pettypo-title">Typography</h2>

          <div className="pettypo-grid">
            {typoItems.map((item, idx) => (
              <div key={idx} className="pettypo-card">
                <span className="pettypo-label">{item.label}</span>
                <p
                  className="pettypo-sample"
                  style={{
                    fontSize: `${item.size}px`,
                    fontWeight: item.weight,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Button System */}
          <h2 className="petbtn-title">Button system</h2>

          <div className="petbtn-table-wrap">
            <img
              src="/ateats 2/button1.png"
              alt="Button system"
              style={{ width: '100%', maxWidth: '1000px', height: 'auto', display: 'block' }}
            />
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Screens Showcase Section ─────────────────────────────────── */
function ScreensShowcaseSection() {
  return (
    <Box
      component="section"
      style={{ width: '100%', padding: '60px 0 100px', background: '#fff', overflow: 'hidden' } as FramerStyle}
    >
      <style>{`
        .petscreens-header {
          margin-bottom: 50px;
          font-family: 'Inter', sans-serif;
        }
        .petscreens-label {
          font-size: 14px;
          font-weight: 700;
          color: #333;
        }
        .petscreens-stage {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
          position: relative;
          padding: 40px 0;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 900px) {
          .petscreens-stage {
            flex-direction: column;
            gap: 40px;
          }
        }
        .petscreen-phone {
          width: 310px;
          height: 620px;
          border-radius: 44px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.14);
          position: relative;
          overflow: hidden;
          background: #fff;
          border: 7px solid #222;
          box-sizing: border-box;
          flex-shrink: 0;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .petscreen-phone.left {
          transform: rotate(-7deg) translateY(20px);
          z-index: 2;
        }
        .petscreen-phone.center {
          transform: scale(1.05);
          z-index: 5;
          box-shadow: 0 35px 80px rgba(0, 0, 0, 0.2);
        }
        .petscreen-phone.right {
          transform: rotate(7deg) translateY(20px);
          z-index: 2;
        }
        @media (max-width: 900px) {
          .petscreen-phone.left,
          .petscreen-phone.center,
          .petscreen-phone.right {
            transform: none;
            width: 100%;
            max-width: 320px;
          }
        }

        /* Screen 1 (Left) */
        .petscreen-bg-1 {
          width: 100%;
          height: 55%;
          object-fit: cover;
          display: block;
        }
        .petscreen-card-1 {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: #fff;
          border-radius: 36px 36px 0 0;
          padding: 24px 20px 28px;
          text-align: center;
          box-shadow: 0 -10px 30px rgba(0,0,0,0.05);
        }
        .petscreen-dots {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-bottom: 12px;
        }
        .petscreen-dot-pill {
          width: 20px;
          height: 4px;
          background: #F5A623;
          border-radius: 2px;
        }
        .petscreen-dot-circle {
          width: 6px;
          height: 4px;
          background: #E5E7EB;
          border-radius: 2px;
        }
        .petscreen-title-1 {
          font-size: 17px;
          font-weight: 800;
          color: #111;
          margin: 0 0 8px 0;
          line-height: 1.3;
        }
        .petscreen-desc-1 {
          font-size: 11px;
          line-height: 1.5;
          color: #888;
          margin: 0 0 20px 0;
        }
        .petscreen-btn-1 {
          width: 100%;
          background: #F5A623;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          padding: 12px;
          border-radius: 24px;
          border: none;
          cursor: pointer;
        }

        /* Screen 2 (Center) */
        .petscreen-map-wrap {
          width: 100%;
          height: 100%;
          background: #f4f6f8;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .petscreen-map-header {
          padding: 16px 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          font-weight: 700;
          color: #111;
          z-index: 10;
        }
        .petscreen-map-pin {
          position: absolute;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid #fff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          overflow: hidden;
          background: #ffb703;
        }
        .petscreen-caregiver-card {
          position: absolute;
          bottom: 24px;
          left: 16px;
          right: 16px;
          background: #fff;
          border-radius: 20px;
          padding: 16px;
          box-shadow: 0 10px 28px rgba(0,0,0,0.12);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Screen 3 (Right) */
        .petscreen-bg-3 {
          width: 100%;
          height: 52%;
          object-fit: cover;
          display: block;
        }
        .petscreen-card-3 {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          border-radius: 36px 36px 0 0;
          padding: 22px 18px 26px;
          box-shadow: 0 -10px 30px rgba(0,0,0,0.06);
        }
        .petscreen-metric-pills {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          margin: 10px 0 12px;
        }
        .petscreen-metric-pill {
          background: #FFFBEB;
          border-radius: 10px;
          padding: 8px 4px;
          text-align: center;
        }
        .petscreen-behavior-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 10px;
        }
        .petscreen-tag {
          font-size: 9px;
          color: #666;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 4px 10px;
          background: #fff;
        }
      `}</style>
      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          <img
            src="/assets/petpedia/petpedia11.png"
            alt="Petpedia app screens"
            style={{ width: '100%', height: 'auto', display: 'block' } as FramerStyle}
          />
          <div style={{ display: 'none' }}>
            <div className="petscreens-header">
              <span className="petscreens-label">Screens</span>
            </div>

            <div className="petscreens-stage">
              {/* Phone 1 (Left) */}
              <div className="petscreen-phone left">
                <img
                  src="/frenchie_yellow_left.jpg"
                  alt="Pet care onboarding screen"
                  className="petscreen-bg-1"
                />
                <div className="petscreen-card-1">
                  <div className="petscreen-dots">
                    <div className="petscreen-dot-pill" />
                    <div className="petscreen-dot-circle" />
                  </div>
                  <h3 className="petscreen-title-1">
                    Pet Care in Your<br />Neighbourhood
                  </h3>
                  <p className="petscreen-desc-1">
                    Connect with 5-star pet caregivers near you who offer boarding, walking, house sitting or day care.
                  </p>
                  <button className="petscreen-btn-1">Get Started</button>
                </div>
              </div>

              {/* Phone 2 (Center) */}
              <div className="petscreen-phone center">
                <div className="petscreen-map-wrap">
                  <div className="petscreen-map-header">
                    <span>‹</span>
                    <span>Pet caregivers</span>
                    <span>⊞</span>
                  </div>

                  {/* SVG City Map background representation */}
                  <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.6 }}>
                    <pattern id="city-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <rect width="40" height="40" fill="#f8fafc" />
                      <line x1="0" y1="20" x2="40" y2="20" stroke="#e2e8f0" strokeWidth="3" />
                      <line x1="20" y1="0" x2="20" y2="40" stroke="#e2e8f0" strokeWidth="3" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#city-grid)" />
                  </svg>

                  {/* Map Avatars */}
                  <div className="petscreen-map-pin" style={{ top: '22%', left: '20%', background: '#fbbf24' }}>
                    <img src="/puppy.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="petscreen-map-pin" style={{ top: '35%', right: '22%', background: '#f87171' }}>
                    <img src="/kitten.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="petscreen-map-pin" style={{ top: '50%', left: '44%', width: '44px', height: '44px', border: '3px solid #F5A623' }}>
                    <img src="/pet_selfie.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  {/* Floating Caregiver Card */}
                  <div className="petscreen-caregiver-card">
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ fontSize: '13px', fontWeight: 800, color: '#111' }}>Lina Amane</span>
                        <span style={{ color: '#10B981', fontSize: '12px' }}>✔</span>
                      </div>
                      <p style={{ fontSize: '10px', color: '#888', margin: '3px 0 4px' }}>📍 1.2 km away from you</p>
                      <p style={{ fontSize: '10px', color: '#F5A623', fontWeight: 700, margin: 0 }}>★ 4.9 <span style={{ color: '#aaa', fontWeight: 400 }}>(20 reviews)</span></p>
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: '#111' }}>
                      $ 20
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 3 (Right) */}
              <div className="petscreen-phone right">
                <img
                  src="/frenchie_yellow_right.jpg"
                  alt="Pet details profile screen"
                  className="petscreen-bg-3"
                />
                <div className="petscreen-card-3">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h3 style={{ fontSize: '16px', fontWeight: 800, margin: '0 0 2px', color: '#111' }}>Itachi</h3>
                      <p style={{ fontSize: '10px', color: '#888', margin: 0 }}>French Bulldog · 1y 4m</p>
                    </div>
                    <div style={{ width: '24px', height: '24px', background: '#FEF3C7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#F59E0B' }}>💡</div>
                  </div>

                  <div style={{ margin: '10px 0 4px', fontSize: '11px', fontWeight: 700, color: '#222' }}>
                    🐶 About Itachi
                  </div>

                  <div className="petscreen-metric-pills">
                    <div className="petscreen-metric-pill">
                      <div style={{ fontSize: '7px', color: '#999' }}>Weight</div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: '#F59E0B' }}>5.5 kg</div>
                    </div>
                    <div className="petscreen-metric-pill">
                      <div style={{ fontSize: '7px', color: '#999' }}>Height</div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: '#F59E0B' }}>42 cm</div>
                    </div>
                    <div className="petscreen-metric-pill">
                      <div style={{ fontSize: '7px', color: '#999' }}>Color</div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: '#F59E0B' }}>Brown</div>
                    </div>
                  </div>

                  <p style={{ fontSize: '9px', color: '#777', lineHeight: 1.4, margin: '0 0 10px' }}>
                    My dog is incredibly and unconditionally loyal to me. He loves me as much as I love him or sometimes more.
                  </p>

                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#222', marginBottom: '6px' }}>
                    🐾 Itachi behavior
                  </div>
                  <div className="petscreen-behavior-tags">
                    <span className="petscreen-tag">Leash trained</span>
                    <span className="petscreen-tag">Friendly with cats</span>
                    <span className="petscreen-tag">Active</span>
                    <span className="petscreen-tag">Tries to eat things</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Testing & Final Learning Section ──────────────────────────── */
function TestingAndLearningSection() {
  return (
    <Box
      component="section"
      style={{ width: '100%', padding: '40px 0 60px', background: '#fff' } as FramerStyle}
    >
      <style>{`
        .pet-testing-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .pet-testing-grid { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>
      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          {/* Testing row */}
          <div className="pet-testing-grid" style={{ marginBottom: '48px', fontFamily: 'Inter, sans-serif' }}>
            <Box style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 4 } as FramerStyle}>
              <span style={{ width: 12, height: 12, background: 'rgb(255, 70, 46)', display: 'inline-block', flex: 'none', borderRadius: 2 } as FramerStyle} />
              <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, fontWeight: 700, color: '#555' } as FramerStyle}>Testing</span>
            </Box>
            <Box>
              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, lineHeight: 1.75, color: '#666', margin: 0, fontWeight: 500 } as FramerStyle}>
                Conducted a heuristic evaluation based on Don Norman's usability principles of interaction to assess usability and gather actionable feedback. Based on the feedback, design iterations were implemented, including adding a "Proceed to Cart" pop-up for a smoother user flow and increasing button sizes to comply with WCAG guidelines, enhancing both usability and accessibility.
              </p>
            </Box>
          </div>

          {/* Learning row */}
          <div className="pet-testing-grid" style={{ marginBottom: '60px', fontFamily: 'Inter, sans-serif' }}>
            <Box style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 4 } as FramerStyle}>
              <span style={{ width: 12, height: 12, background: 'rgb(255, 70, 46)', display: 'inline-block', flex: 'none', borderRadius: 2 } as FramerStyle} />
              <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, fontWeight: 700, color: '#555' } as FramerStyle}>Learning</span>
            </Box>
            <Box>
              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, lineHeight: 1.75, color: '#666', margin: 0, fontWeight: 500 } as FramerStyle}>
                Recorded a 40% increase in client satisfaction scores post-deployment, reflecting enhanced usability and functionality. This project taught me the importance of designing for inclusivity by applying WCAG guidelines and gathering feedback from users with disabilities. It highlighted how user-centered design and accessibility standards are essential for creating equitable and seamless digital experiences for everyone.
              </p>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>
  )
}


/* ─── Page ─────────────────── */
function PetpediaPage() {
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
        className="framer-hTG3P framer-emw559 petpedia-page"
        data-layout-template="true"
        style={{ minHeight: '100vh', width: 'auto', position: 'relative' } as FramerStyle}
      >
        <div className="crunch-side-lines" aria-hidden="true">
          <span className="crunch-side-lines-star crunch-side-lines-star-left" />
          <span className="crunch-side-lines-star crunch-side-lines-star-right" />
        </div>
        <style>{`
          .petpedia-page { overflow-x: clip; }
          .petpedia-page .crunch-side-lines { z-index: 5; }
          @media (max-width: 480px) {
            .petpedia-page-frame > section,
            .petpedia-page-frame > div > section {
              padding-left: clamp(12px, 4vw, 16px) !important;
              padding-right: clamp(12px, 4vw, 16px) !important;
            }
          }
        `}</style>
        <Navbar />

        <Box
          component="div"
          data-framer-root
          className="framer-LRfZ0 framer-3jfDI framer-jlIPi framer-RYqUR framer-merrA framer-VGfb4 framer-EIDUe framer-et5t2c"
          style={{ minHeight: '100vh', width: 'auto', display: 'contents' } as FramerStyle}
        >
          <Box component="main" className="framer-xr6yl petpedia-page-frame" data-framer-name="Main">
            <PetpediaHero />
            <ProblemSection />

            <Box component="section" style={{ width: '100%', padding: '0', background: '#fff' } as FramerStyle}>
              <img
                src="/assets/petpedia/petpedia1.png"
                alt="Petpedia"
                style={{ width: '500px', height: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block', margin: '0 auto' } as FramerStyle}
              />
            </Box>

            <Box component="section" style={{ width: '100%', padding: '80px 0 100px', background: '#fff' } as FramerStyle}>
              <style>{`
                .pet-design-grid {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 60px;
                  align-items: center;
                }
                @media (max-width: 768px) {
                  .pet-design-grid { grid-template-columns: 1fr; gap: 40px; }
                }
                .pet-design-text-box {
                  border: 2px dashed rgba(255, 70, 46, 0.3);
                  border-radius: 24px;
                  padding: 40px;
                }
                .pet-design-text-box h2 {
                  font-family: 'Inter', sans-serif;
                  font-size: 28px;
                  font-weight: 800;
                  color: #111;
                  margin: 0 0 16px;
                  line-height: 1.3;
                }
                .pet-design-text-box p {
                  font-family: 'Inter', sans-serif;
                  font-size: 15px;
                  line-height: 1.75;
                  color: #5A5A5A;
                  margin: 0;
                }
                .pet-design-image-wrap {
                  position: relative;
                  width: 100%;
                  border-radius: 20px;
                  overflow: hidden;
                  background: linear-gradient(135deg, #FFF0EC, #FFE0D6);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  min-height: 400px;
                }
                .pet-design-image-label {
                  position: absolute;
                  top: 20px;
                  left: 20px;
                  background: rgba(255, 70, 46, 0.9);
                  color: #fff;
                  font-family: 'Inter', sans-serif;
                  font-size: 14px;
                  font-weight: 700;
                  padding: 8px 20px;
                  border-radius: 100px;
                }
              `}</style>
              <Box style={container}>
                <Box style={contentPad}>
                  <div className="pet-design-grid">
                    <div className="pet-design-text-box">
                      <h2>Problem</h2>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: 0 } as FramerStyle}>
                        {[
                          {
                            icon: (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L1 21h22L12 2z" stroke="#FF462E" strokeWidth="2" fill="none" /><line x1="12" y1="9" x2="12" y2="15" stroke="#FF462E" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="18" r="1" fill="#FF462E" /></svg>
                            ), text: 'Adoption is full of scams or fake sellers.'
                          },
                          {
                            icon: (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="14" rx="2" stroke="#FF462E" strokeWidth="2" /><path d="M3 10h18" stroke="#FF462E" strokeWidth="2" /><circle cx="12" cy="16" r="2" stroke="#FF462E" strokeWidth="2" /></svg>
                            ), text: 'Pet food, grooming and medical services are not easily available in one place.'
                          },
                          {
                            icon: (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#FF462E" strokeWidth="2" /><path d="M8 2v4M16 2v4M3 10h18" stroke="#FF462E" strokeWidth="2" strokeLinecap="round" /></svg>
                            ), text: 'Clinics and small businesses do not have tools to manage bookings.'
                          },
                          {
                            icon: (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#FF462E" strokeWidth="2" /><path d="M9 9c0-1.5 1.3-3 3-3s3 1.5 3 3c0 2-3 2.5-3 4.5" stroke="#FF462E" strokeWidth="2" strokeLinecap="round" fill="none" /><circle cx="12" cy="17" r="1" fill="#FF462E" /></svg>
                            ), text: 'Pet insurance is still new and confusing for most people.'
                          },
                          {
                            icon: (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="#FF462E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="#FF462E" strokeWidth="2" /></svg>
                            ), text: 'Insurance is hard to understand and people feel such a waste of time if they don\'t claim it.'
                          },
                          {
                            icon: (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#FF462E" strokeWidth="2" /><path d="M12 8v4l3 3" stroke="#FF462E" strokeWidth="2" strokeLinecap="round" /></svg>
                            ), text: "Pet owners forget regular checkups and there's no motivation to stay consistent."
                          },
                        ].map((item, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' } as FramerStyle}>
                            <span style={{ flexShrink: 0, marginTop: 3 } as FramerStyle}>{item.icon}</span>
                            <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 15, lineHeight: 1.7, color: '#5A5A5A' } as FramerStyle}>{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pet-design-image-wrap1">
                      <img
                        src="/assets/petpedia/petpedia13.png"
                        alt="Petpedia Design"
                        style={{ width: '100%', height: 'auto', display: 'block', padding: '40px 20px', borderRadius: 30 } as FramerStyle}
                      />
                    </div>
                  </div>
                </Box>
                <Box style={{ ...contentPad, marginTop: '80px', width: '100%' } as FramerStyle}>
                  <div className="pet-design-grid">
                    <div className="pet-design-image-wrap1">
                      <img
                        src="/assets/petpedia/petpedia20.png"
                        alt="Petpedia Design"
                        style={{ width: '100%', height: 'auto', display: 'block', padding: '40px 20px', borderRadius: 30 } as FramerStyle}
                      />
                    </div>

                    <div className="pet-design-text-box">
                      <h2>Solution</h2>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: 0 } as FramerStyle}>
                        {[
                          {
                            icon: (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L1 21h22L12 2z" stroke="#FF462E" strokeWidth="2" fill="none" /><line x1="12" y1="9" x2="12" y2="15" stroke="#FF462E" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="18" r="1" fill="#FF462E" /></svg>
                            ), text: 'Adoption is full of scams or fake sellers.'
                          },
                          {
                            icon: (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="14" rx="2" stroke="#FF462E" strokeWidth="2" /><path d="M3 10h18" stroke="#FF462E" strokeWidth="2" /><circle cx="12" cy="16" r="2" stroke="#FF462E" strokeWidth="2" /></svg>
                            ), text: 'Pet food, grooming and medical services are not easily available in one place.'
                          },
                          {
                            icon: (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#FF462E" strokeWidth="2" /><path d="M8 2v4M16 2v4M3 10h18" stroke="#FF462E" strokeWidth="2" strokeLinecap="round" /></svg>
                            ), text: 'Clinics and small businesses do not have tools to manage bookings.'
                          },
                          {
                            icon: (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#FF462E" strokeWidth="2" /><path d="M9 9c0-1.5 1.3-3 3-3s3 1.5 3 3c0 2-3 2.5-3 4.5" stroke="#FF462E" strokeWidth="2" strokeLinecap="round" fill="none" /><circle cx="12" cy="17" r="1" fill="#FF462E" /></svg>
                            ), text: 'Pet insurance is still new and confusing for most people.'
                          },
                          {
                            icon: (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="#FF462E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="#FF462E" strokeWidth="2" /></svg>
                            ), text: 'Insurance is hard to understand and people feel such a waste of time if they don\'t claim it.'
                          },
                          {
                            icon: (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#FF462E" strokeWidth="2" /><path d="M12 8v4l3 3" stroke="#FF462E" strokeWidth="2" strokeLinecap="round" /></svg>
                            ), text: "Pet owners forget regular checkups and there's no motivation to stay consistent."
                          },
                        ].map((item, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' } as FramerStyle}>
                            <span style={{ flexShrink: 0, marginTop: 3 } as FramerStyle}>{item.icon}</span>
                            <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 15, lineHeight: 1.7, color: '#5A5A5A' } as FramerStyle}>{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>

            <ProductThinkingSection />
            <DesignProcessSection />
            <UserJourneySection />
            <CompetitorAnalysisSection />
            <WireframeSection />
            <DesignSystemSection />
            <DesignsSection />
            <LearningSection />
            <StrategySection />
            <AssetsDesignSystemSection />
            <TypographyButtonSystemSection />
            <ScreensShowcaseSection />
            <TestingAndLearningSection />
            <MoreWorkMarquee currentPath="/petpedia" />
          </Box>
        </Box>
      </Box>

      <SpriteIcons />
    </div>
  )
}

export default PetpediaPage
