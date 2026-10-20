import Box from '@mui/material/Box'
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
  .beuta-page { --crunch-pad: 24px; overflow-x: clip; position: relative; font-family: 'Inter', sans-serif; }
  /* Full-page side lines use the shared .crunch-side-lines rule in index.css */
  .beuta-page .crunch-side-lines { z-index: 5; }
  @media (max-width: 640px) { .beuta-page { --crunch-pad: 18px; } }
  @media (max-width: 400px) { .beuta-page { --crunch-pad: 14px; } }
  @media (max-width: 700px) {
    .beuta-page main > section { padding-top: 36px !important; padding-bottom: 48px !important; }
  }
`

/* ─── Section Label ─────────────────────────────────────────── */
function Label({ text }: { text: string }) {
  return (
    <Box style={indicator as FramerStyle}>
      <span style={{ width: 10, height: 10, background: 'rgb(255, 70, 46)', display: 'inline-block', flex: 'none', borderRadius: 2 } as FramerStyle} />
      <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, fontWeight: 700, color: '#333' } as FramerStyle}>
        {text}
      </span>
    </Box>
  )
}

/* ─── Beuta Hero Section ────────────────────────────────────── */
function BeutaHeroSection() {
  const challengesLeft = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      ),
      title: 'Data Silos',
      desc: 'Centralizing data for comprehensive performance reporting proves difficult, hindering effective decision-making and strategic planning across the salon.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <line x1="1" y1="14" x2="7" y2="14" />
          <line x1="9" y1="8" x2="15" y2="8" />
          <line x1="17" y1="16" x2="23" y2="16" />
        </svg>
      ),
      title: 'Customisation Complexity',
      desc: 'Creating truly customisable reports tailored to individual salon needs demands flexible design and extensive data integration capabilities.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: 'Real-time Hurdles',
      desc: 'Implementing genuinely real-time availability updates requires robust technology and seamless integration with existing booking systems.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.31M14 9.3V1.99M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0" />
        </svg>
      ),
      title: 'Usability Testing is key',
      desc: 'Clients are having issues with easy service selection; this is because service menus design cannot be difficult to navigate, leading to booking errors.',
    },
  ]

  const challengesRight = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      ),
      title: 'Notification Delays',
      desc: 'Ensuring prompt notifications for rescheduling/cancellations requires reliable communication channels and robust error handling to prevent missed messages.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      title: 'Rescheduling Complexity',
      desc: 'Managing rescheduling efficiently demands an intuitive interface and automated conflict resolution to avoid double bookings and staff scheduling chaos.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      ),
      title: 'Cancellation Chaos',
      desc: 'Handling cancellations effectively demands automated workflows for refund processing and re-booking opportunities to minimise lost revenue.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: 'Confirmation Clarity',
      desc: 'Creating clear booking confirmations requires concise messaging and easily accessible details to avoid any confusion and frustration among customers.',
    },
  ]

  return (
    <Box
      component="section"
      className="beuta-hero-section"
      style={{ width: '100%', background: '#fff', padding: '40px 0 80px' } as FramerStyle}
    >
      <style>{`
        .b-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #333;
        }
        .b-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 80px;
        }
        .b-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 16px;
          border-radius: 100px;
          background: #EEF2FF;
          color: #6366F1;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .b-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(52px, 8.5vw, 100px);
          font-weight: 800;
          color: #111;
          letter-spacing: -0.03em;
          margin: 0 0 16px 0;
        }
        .b-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2vw, 16px);
          line-height: 1.7;
          color: #666666;
          max-width: 680px;
          margin: 0 auto;
        }

        /* Problem Grid */
        .b-problem-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 90px;
        }
        @media (max-width: 700px) {
          .b-problem-grid { grid-template-columns: 1fr; gap: 20px; margin-bottom: 50px; }
        }
        .b-problem-heading {
          font-family: 'Inter', sans-serif;
          font-size: clamp(20px, 3.2vw, 28px);
          font-weight: 700;
          color: #111;
          line-height: 1.35;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }
        .b-problem-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(13px, 1.8vw, 14.5px);
          line-height: 1.75;
          color: #666666;
          margin: 0;
        }

        /* Challenge Section */
        .b-challenge-wrap {
          margin-bottom: 80px;
        }
        .b-challenge-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 800;
          color: #111;
          margin: 0 0 40px 0;
          letter-spacing: -0.02em;
        }
        .b-challenge-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px 48px;
        }
        @media (max-width: 768px) {
          .b-challenge-grid { grid-template-columns: 1fr; gap: 28px; }
        }
        .b-challenge-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        .b-challenge-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #A78BFA;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 20px rgba(167, 139, 250, 0.3);
        }
        .b-challenge-content h4 {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #111;
          margin: 0 0 6px 0;
        }
        .b-challenge-content p {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          line-height: 1.65;
          color: #666666;
          margin: 0;
        }

        /* Mockup showcase */
        .b-mockups-container {
          width: 100%;
          border-radius: 24px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          padding: 40px 24px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 20px 60px rgba(0,0,0,0.06);
        }
        .b-mockups-row {
          display: grid;
          grid-template-columns: 0.9fr 1.4fr 0.9fr;
          gap: 20px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .b-mockups-row { grid-template-columns: 1fr; }
        }
        .b-mock-left, .b-mock-right {
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px solid #E2E8F0;
          padding: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.04);
        }
        .b-mock-center {
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px solid #CBD5E1;
          box-shadow: 0 25px 60px rgba(0,0,0,0.12);
          overflow: hidden;
          display: grid;
          grid-template-columns: 140px 1fr;
          min-height: 380px;
        }
        @media (max-width: 560px) {
          .b-mock-center { grid-template-columns: 84px 1fr; min-height: 300px; }
        }
        .b-dark-sidebar {
          background: #18181B;
          padding: 16px 12px;
          color: #FFF;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .b-dash-content {
          padding: 16px;
          background: #FFFFFF;
        }
      `}</style>
      <Box style={container}>
        <Box style={{ ...contentPad, paddingTop: 40 } as FramerStyle}>
          {/* Hero Header */}
          <div className="b-hero">
            <div className="b-badge">
              <span>●</span> Case Study
            </div>
            <h1 className="b-title">Beuta®</h1>
            <p className="b-subtitle">
              Managing a multi-branch Salon business comes with complexities from streamlining online and in-appointment to ensuring efficient salon.
            </p>
          </div>

          {/* Problem Section */}
          <div className="b-problem-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Problem" />
            </Box>
            <div>
              <h2 className="b-problem-heading">
                Hairdressing Salons Face Complex Challenges: Streamlining Operations for Consistent Service and Growth with Beuta.
              </h2>
              <p className="b-problem-body">
                A complex web of challenges: inefficient inventory management leading to lost revenue, inadequate reporting hindering data-driven decisions, and a cumbersome booking process frustrating clients and staff. These issues combine to limit profitability and growth. Beuta CRM offers an integrated solution to streamline operations, improve customer communication, and unlock salons&apos; full potential.
              </p>
            </div>
          </div>

          {/* Challenge Section */}
          <div className="b-challenge-wrap">
            <h3 className="b-challenge-title">Challenge</h3>
            <div className="b-challenge-grid">
              {/* Left Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {challengesLeft.map((item, idx) => (
                  <div key={idx} className="b-challenge-item">
                    <div className="b-challenge-icon-box">{item.icon}</div>
                    <div className="b-challenge-content">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {challengesRight.map((item, idx) => (
                  <div key={idx} className="b-challenge-item">
                    <div className="b-challenge-icon-box">{item.icon}</div>
                    <div className="b-challenge-content">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Mockup Dashboard */}
          <img
            src="/assets/beuta/beuta3.png"
            alt="Beuta dashboard"
            style={{ width: '100%', height: 'auto', display: 'block' } as FramerStyle}
          />
          <div style={{ display: 'none' }}>
          <div className="b-mockups-container">
            <div className="b-mockups-row">
              {/* Left Card: Salon Services & Stylists */}
              <div className="b-mock-left">
                <div style={{ fontSize: 12, fontWeight: 700, color: '#0F172A', marginBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
                  <span>Stylists &amp; Services</span>
                  <span style={{ color: '#8B5CF6', fontSize: 10 }}>View All</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 10 }}>
                  <div style={{ background: '#FAF5FF', borderRadius: 8, padding: 8, textAlign: 'center' }}>
                    <div style={{ fontSize: 24, marginBottom: 4 }}>💇‍♀️</div>
                    <div style={{ fontSize: 9, fontWeight: 700 }}>Hair Styling</div>
                    <div style={{ fontSize: 8, color: '#8B5CF6', fontWeight: 600 }}>$65.00</div>
                  </div>
                  <div style={{ background: '#F5F3FF', borderRadius: 8, padding: 8, textAlign: 'center' }}>
                    <div style={{ fontSize: 24, marginBottom: 4 }}>💆‍♂️</div>
                    <div style={{ fontSize: 9, fontWeight: 700 }}>Scalp Treatment</div>
                    <div style={{ fontSize: 8, color: '#8B5CF6', fontWeight: 600 }}>$80.00</div>
                  </div>
                </div>
                <div style={{ background: '#F8FAFC', borderRadius: 8, padding: 8, border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#0F172A', marginBottom: 2 }}>Next Appointment</div>
                  <div style={{ fontSize: 9, color: '#64748B' }}>Sarah Jenkins • 2:30 PM</div>
                </div>
              </div>

              {/* Center Prominent Dashboard: Beuta CRM */}
              <div className="b-mock-center">
                <div className="b-dark-sidebar">
                  <div style={{ fontSize: 13, fontWeight: 800, color: '#A78BFA', marginBottom: 16 }}>BEUTA</div>
                  <div style={{ fontSize: 9, background: '#27272A', padding: '6px 8px', borderRadius: 6, color: '#A78BFA', fontWeight: 700 }}>📊 Dashboard</div>
                  <div style={{ fontSize: 9, padding: '6px 8px', color: '#A1A1AA' }}>📅 Bookings</div>
                  <div style={{ fontSize: 9, padding: '6px 8px', color: '#A1A1AA' }}>👥 Clients</div>
                  <div style={{ fontSize: 9, padding: '6px 8px', color: '#A1A1AA' }}>💇 Stylists</div>
                  <div style={{ fontSize: 9, padding: '6px 8px', color: '#A1A1AA' }}>📈 Reports</div>
                </div>

                <div className="b-dash-content">
                  {/* Top Stats */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
                    <div style={{ background: '#FAF5FF', border: '1px solid #F3E8FF', borderRadius: 8, padding: 8 }}>
                      <div style={{ fontSize: 8, color: '#7C3AED' }}>Total Revenue</div>
                      <div style={{ fontSize: 13, fontWeight: 800, color: '#18181B' }}>$4,850.00</div>
                    </div>
                    <div style={{ background: '#F0FDF4', border: '1px solid #DCFCE7', borderRadius: 8, padding: 8 }}>
                      <div style={{ fontSize: 8, color: '#16A34A' }}>Appointments</div>
                      <div style={{ fontSize: 13, fontWeight: 800, color: '#18181B' }}>128 Today</div>
                    </div>
                  </div>

                  {/* Donut & Wave Graphic */}
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
                    <svg width="60" height="60" viewBox="0 0 60 60">
                      <circle cx="30" cy="30" r="22" fill="none" stroke="#E2E8F0" strokeWidth="8" />
                      <circle cx="30" cy="30" r="22" fill="none" stroke="#8B5CF6" strokeWidth="8" strokeDasharray="60 100" />
                      <circle cx="30" cy="30" r="22" fill="none" stroke="#34D399" strokeWidth="8" strokeDasharray="40 100" strokeDashoffset="-60" />
                    </svg>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 9, fontWeight: 700, color: '#18181B', marginBottom: 2 }}>Service Distribution</div>
                      <div style={{ fontSize: 8, color: '#64748B' }}>Hair: 55% • Spa: 30% • Color: 15%</div>
                    </div>
                  </div>

                  {/* Revenue Wave Chart */}
                  <svg width="100%" height="45" viewBox="0 0 200 45" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="beutaWave" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,35 Q30,10 60,25 T120,15 T180,5 L200,10 L200,45 L0,45 Z" fill="url(#beutaWave)" />
                    <path d="M0,35 Q30,10 60,25 T120,15 T180,5 L200,10" fill="none" stroke="#8B5CF6" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Right Card: Appointments Data Table */}
              <div className="b-mock-right">
                <div style={{ fontSize: 12, fontWeight: 700, color: '#0F172A', marginBottom: 10 }}>Recent Bookings</div>
                {[
                  { name: 'Emma Watson', service: 'Cut & Blowdry', time: '11:00 AM', status: 'Confirmed' },
                  { name: 'David Miller', service: 'Beard Trim', time: '12:15 PM', status: 'In Progress' },
                  { name: 'Jessica Alba', service: 'Balayage Color', time: '01:30 PM', status: 'Pending' },
                ].map((b, idx) => (
                  <div key={idx} style={{ padding: '6px 0', borderBottom: idx < 2 ? '1px solid #F1F5F9' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, color: '#0F172A' }}>{b.name}</div>
                      <div style={{ fontSize: 8, color: '#64748B' }}>{b.service} • {b.time}</div>
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Process Section (Design Thinking Wave) ───────────────── */
function BeutaProcessSection() {
  const steps = ['EMPATHISE', 'DEFINE', 'IDEATE', 'PROTOTYPE']

  return (
    <Box
      component="section"
      className="beuta-process-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 80px' } as FramerStyle}
    >
      <style>{`
        .bp-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 60px;
        }
        @media (max-width: 700px) {
          .bp-grid { grid-template-columns: 1fr; gap: 20px; margin-bottom: 36px; }
        }
        .bp-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2vw, 15px);
          line-height: 1.75;
          color: #666666;
          margin: 0;
          max-width: 820px;
        }
        .bp-flow-wrap {
          position: relative;
          width: 100%;
          padding: 60px 0 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .bp-cards-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 960px;
          position: relative;
          z-index: 2;
          gap: 20px;
        }
        @media (max-width: 768px) {
          .bp-cards-row {
            flex-direction: column;
            gap: 24px;
          }
          .bp-wave-svg {
            display: none;
          }
        }
        .bp-card {
          flex: 1;
          min-width: 140px;
          background: #A78BFA;
          color: #FFFFFF;
          border-radius: 16px;
          padding: 24px 16px;
          text-align: center;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 0.04em;
          box-shadow: 0 12px 28px rgba(167, 139, 250, 0.35);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .bp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(167, 139, 250, 0.45);
        }
        .bp-wave-svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          max-width: 960px;
          height: 140px;
          z-index: 1;
          pointer-events: none;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="bp-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Process" />
            </Box>
            <p className="bp-body">
              Began with empathising with salon staff and clients to understand their needs. We then defined the core problems, ideated creative solutions, and rapidly prototyped and tested iterations to ensure usability and effectiveness.
            </p>
          </div>

          {/* Connected Curved Wave Process Diagram */}
          <div className="bp-flow-wrap">
            <svg className="bp-wave-svg" viewBox="0 0 960 140" fill="none" preserveAspectRatio="none">
              <path
                d="M 120 70 C 240 10, 240 10, 360 70 C 480 130, 480 130, 600 70 C 720 10, 720 10, 840 70"
                stroke="#C4B5FD"
                strokeWidth="3"
                strokeDasharray="8 8"
                fill="none"
              />
            </svg>

            <div className="bp-cards-row">
              {steps.map((step, idx) => (
                <div key={idx} className="bp-card">
                  {step}
                </div>
              ))}
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── User Research Section ─────────────────────────────────── */
function BeutaUserResearchSection() {
  return (
    <Box
      component="section"
      className="beuta-research-section"
      style={{ width: '100%', background: '#fff', padding: '40px 0 80px' } as FramerStyle}
    >
      <style>{`
        .br-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 700px) {
          .br-grid { grid-template-columns: 1fr; gap: 20px; }
        }
        .br-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2vw, 15px);
          line-height: 1.75;
          color: #666666;
          margin: 0;
          max-width: 820px;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="br-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="User Research" />
            </Box>
            <p className="br-body">
              Recognising the importance of understanding user needs, I conducted a phone interview with a counsellor. This conversation focused on the challenges they face daily, including difficulty managing appointments, accessing client information, and prioritizing their workload. They also shared frustrations with their current CRM. This deep-dive session gave me a solid first step for identifying major setbacks. This initial exploration emphasised the urgent requirement to improve service accessibility, streamline booking processes, and reduce administrative overhead, driving the design and evolution of new functionalities.
            </p>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Insights & User Personas Section ──────────────────────── */
function BeutaInsightsAndPersonasSection() {
  return (
    <Box
      component="section"
      className="beuta-insights-section"
      style={{ width: '100%', background: '#fff', padding: '40px 0 100px' } as FramerStyle}
    >
      <style>{`
        .bi-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 800;
          color: #111;
          margin: 0 0 40px 0;
          letter-spacing: -0.02em;
        }

        /* Top Interview Callout */
        .bi-interview-wrap {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-bottom: 70px;
          background: #FAFAFA;
          border-radius: 24px;
          padding: 28px 32px;
          border: 1px solid #F1F5F9;
        }
        @media (max-width: 700px) {
          .bi-interview-wrap {
            flex-direction: column;
            text-align: center;
            padding: 24px;
            gap: 16px;
          }
        }
        .bi-avatar-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          background: #E2E8F0;
          flex-shrink: 0;
          border: 3px solid #FFFFFF;
          box-shadow: 0 4px 14px rgba(0,0,0,0.08);
        }
        .bi-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .bi-quote-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(13px, 1.8vw, 14.5px);
          line-height: 1.75;
          color: #555555;
          margin: 0;
          flex: 1;
        }

        /* Persona Card Layout */
        .bi-persona-card {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 28px;
          margin-bottom: 50px;
          align-items: start;
        }
        @media (max-width: 850px) {
          .bi-persona-card {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        .bi-left-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .bi-image-box {
          width: 100%;
          height: 280px;
          border-radius: 20px;
          overflow: hidden;
          background: #F1F5F9;
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }
        .bi-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .bi-info-box {
          background: #F8FAFC;
          border-radius: 16px;
          padding: 16px 20px;
          border: 1px solid #F1F5F9;
        }
        .bi-info-row {
          display: flex;
          justify-content: space-between;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          padding: 4px 0;
          color: #475569;
        }
        .bi-info-label {
          color: #64748B;
          font-weight: 500;
        }
        .bi-info-value {
          color: #0F172A;
          font-weight: 600;
        }
        .bi-pill-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 10px;
        }
        .bi-pill {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 6px 12px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #475569;
          text-align: center;
        }

        /* Right Content Boxes */
        .bi-right-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .bi-section-box {
          background: #F8FAFC;
          border-radius: 16px;
          padding: 20px 24px;
          border: 1px solid #F1F5F9;
        }
        .bi-section-box h4 {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 8px 0;
        }
        .bi-section-box p {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          line-height: 1.7;
          color: #64748B;
          margin: 0;
        }
        .bi-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .bi-list li {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          line-height: 1.65;
          color: #64748B;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <h2 className="bi-title">Insights</h2>

          {/* Top Interview Summary Banner */}
          <div className="bi-interview-wrap">
            <div className="bi-avatar-circle">
              <img src="/user_research_avatar.png" alt="Counsellor Interview" className="bi-avatar-img" />
            </div>
            <p className="bi-quote-text">
              During my interview, the counsellor emphasised feeling overwhelmed by the sheer number of appointments, making it hard to prioritise and follow up with clients effectively. This is compounded by the fact that managers may lack key details about the services, hindering their ability to answer inquiries. She also stressed that automated follow-up reminders and notifications are absolutely crucial for providing consistent client support.
            </p>
            <div className="bi-avatar-circle">
              <img src="/user_research_avatar.png" alt="Counsellor Interview" className="bi-avatar-img" />
            </div>
          </div>

          {/* ═══════ Persona 1: Gautam Rathore ═══════ */}
          <div className="bi-persona-card">
            {/* Left Column */}
            <div className="bi-left-col">
              <div className="bi-image-box">
                <img src="./assets/beuta/beuta23.jpg" alt="Gautam Rathore" />
              </div>
              <div className="bi-info-box">
                <div className="bi-info-row">
                  <span className="bi-info-label">Name :</span>
                  <span className="bi-info-value">Gautam</span>
                </div>
                <div className="bi-info-row">
                  <span className="bi-info-label">Gender:</span>
                  <span className="bi-info-value">Male</span>
                </div>
                <div className="bi-info-row">
                  <span className="bi-info-label">Age:</span>
                  <span className="bi-info-value">29</span>
                </div>
                <div className="bi-info-row">
                  <span className="bi-info-label">Occupation:</span>
                  <span className="bi-info-value">Overall manager</span>
                </div>
              </div>

              <div className="bi-info-box">
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', marginBottom: 6 }}>Personality</div>
                <div className="bi-pill-grid">
                  <span className="bi-pill">Extrovert</span>
                  <span className="bi-pill">Dancer</span>
                  <span className="bi-pill">Swimmer</span>
                  <span className="bi-pill">Traveler</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bi-right-col">
              <div className="bi-section-box">
                <h4>Bio</h4>
                <p>
                  Gautam Rathore have done bachelors degree in psychology. He is expert understanding people mind.
                </p>
              </div>

              <div className="bi-section-box">
                <h4>Goals</h4>
                <ul className="bi-list">
                  <li>1. Managing a large number of leads simultaneously</li>
                  <li>2. Keeping track of lead assigned to hear and their current status</li>
                  <li>3. Prioritising workload effectively to meet their target</li>
                </ul>
              </div>

              <div className="bi-section-box">
                <h4>Challenges</h4>
                <ul className="bi-list">
                  <li>1. Effectively manage and convert deeds assigned to him.</li>
                  <li>2. Provide a positive and helpful experience to potential customers.</li>
                  <li>3. Meet or exceed target</li>
                  <li>4. Collaborate effectively with other counsellors and admin staff</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ═══════ Persona 2: Ria Kanna ═══════ */}
          <div className="bi-persona-card" style={{ marginBottom: 0 }}>
            {/* Left Column */}
            <div className="bi-left-col">
              <div className="bi-image-box">
                <img src="./assets/beuta/beuta24.jpg" alt="Ria Kanna" />
              </div>
              <div className="bi-info-box">
                <div className="bi-info-row">
                  <span className="bi-info-label">Name :</span>
                  <span className="bi-info-value">Ria Kanna</span>
                </div>
                <div className="bi-info-row">
                  <span className="bi-info-label">Gender:</span>
                  <span className="bi-info-value">Female</span>
                </div>
                <div className="bi-info-row">
                  <span className="bi-info-label">Age:</span>
                  <span className="bi-info-value">24</span>
                </div>
                <div className="bi-info-row">
                  <span className="bi-info-label">Occupation:</span>
                  <span className="bi-info-value">Assistant manager</span>
                </div>
              </div>

              <div className="bi-info-box">
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', marginBottom: 6 }}>Personality</div>
                <div className="bi-pill-grid">
                  <span className="bi-pill">Creative</span>
                  <span className="bi-pill">Thinker</span>
                  <span className="bi-pill" style={{ gridColumn: 'span 2' }}>Prone to distraction</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bi-right-col">
              <div className="bi-section-box">
                <h4>Bio</h4>
                <p>
                  Ria Kanna has done bachelors degree in fashion technology . She is an onsite working profession.
                </p>
              </div>

              <div className="bi-section-box">
                <h4>Goals</h4>
                <ul className="bi-list">
                  <li>1. Customised service within the CRM system to increase customer retention and loyalty.</li>
                  <li>2. Data analytics to track customer preferences and behavior, enabling more targeted and effective service</li>
                </ul>
              </div>

              <div className="bi-section-box">
                <h4>Challenges</h4>
                <ul className="bi-list">
                  <li>1. Existing appointment scheduling and payment systems may pose technical difficulties and require significant coordination</li>
                  <li>2. Communication efforts to cater to diverse client preferences while respecting privacy regulations demands a delicate balance and sophisticated CRM capabilities.</li>
                </ul>
              </div>
            </div>
          </div>

        </Box>
      </Box>
    </Box>
  )
}

/* ─── Information Architecture Section ──────────────────────── */
function BeutaInformationArchitectureSection() {
  return (
    <Box
      component="section"
      className="beuta-ia-section"
      style={{ width: '100%', background: '#fff', padding: '40px 0 100px' } as FramerStyle}
    >
      <style>{`
        .bia-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 800;
          color: #111;
          margin: 0 0 50px 0;
          letter-spacing: -0.02em;
        }

        .bia-tree-wrap {
          width: 100%;
          max-width: 850px;
          margin: 0 auto;
          font-family: 'Inter', sans-serif;
          padding: 20px 10px;
        }

        /* Common Node Styles */
        .bia-node-root {
          background: #A78BFA;
          color: #FFFFFF;
          font-weight: 800;
          font-size: 14px;
          padding: 8px 32px;
          border-radius: 10px;
          display: inline-block;
          box-shadow: 0 4px 14px rgba(167, 139, 250, 0.35);
          text-align: center;
        }

        .bia-node-primary {
          background: #A78BFA;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 13px;
          padding: 7px 24px;
          border-radius: 8px;
          display: inline-block;
          box-shadow: 0 4px 12px rgba(167, 139, 250, 0.25);
          text-align: center;
          min-width: 110px;
        }

        .bia-node-sub {
          background: #FFFFFF;
          border: 1px dashed #CBD5E1;
          color: #475569;
          font-size: 11px;
          font-weight: 600;
          padding: 6px 16px;
          border-radius: 8px;
          display: inline-block;
          text-align: center;
          min-width: 120px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.02);
        }

        .bia-node-leaf {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          color: #64748B;
          font-size: 10px;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: 6px;
          display: inline-block;
          text-align: center;
          min-width: 90px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.02);
        }

        /* Tree structure with CSS lines */
        .bia-root-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .bia-spine-line {
          position: absolute;
          top: 36px;
          bottom: 25px;
          left: 50px;
          width: 2px;
          background: #C4B5FD;
        }

        .bia-root-connector {
          width: 2px;
          height: 30px;
          background: #C4B5FD;
          margin: 0 auto;
        }

        .bia-branch-container {
          position: relative;
          padding-left: 50px;
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-top: 10px;
        }

        .bia-branch-item {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* Horizontal branch connector from spine */
        .bia-branch-item::before {
          content: '';
          position: absolute;
          top: 17px;
          left: -50px;
          width: 50px;
          height: 2px;
          background: #C4B5FD;
        }

        .bia-subgroup {
          position: relative;
          padding-left: 36px;
          margin-left: 40px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-left: 2px solid #C4B5FD;
        }

        .bia-subitem {
          position: relative;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .bia-subitem::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -36px;
          width: 36px;
          height: 2px;
          background: #C4B5FD;
        }

        /* Leaf branch lines */
        .bia-leaf-group {
          position: relative;
          padding-left: 24px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          border-left: 1px solid #CBD5E1;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <h2 className="bia-title">Information Architecture</h2>

          <img
            src="/assets/beuta/beau1.png"
            alt="Information Architecture"
            loading="lazy"
            style={{ width: '60%', maxWidth: 700, height: 'auto', display: 'block', margin: '0 auto', borderRadius: 16 } as FramerStyle}
          />

        </Box>
      </Box>
    </Box>
  )
}

/* ─── Need of Improvement Section ──────────────────────────── */
function BeutaNeedOfImprovementSection() {
  const items = [
    {
      title: 'Visual Hierarchy',
      desc: 'The alignment, component height/font size and box shadows can be adjusted to make the screens more appealing. The buttons in the selection sections can be arranged in a manner such that it does not create clutter.',
    },
    {
      title: 'Content Hierarchy',
      desc: 'The symbols of categories can be reduced. The ongoing and latest offers must be placed on top, making the app less boring for the users leading to a boost in the conversion rate. This will lead to frequent fresh activities.',
    },
    {
      title: 'Placement of Pages',
      desc: 'The search shall be in the home page, making the user to search simple things. Some icons and options are less visible. The home page features can be changed, giving valuable amount of space.',
    },
    {
      title: 'Redundant Elements',
      desc: 'The categories at the bottom of the app are not redundant. The search page has to just feel a little version of home page. The elements in the search page shall be reduced.',
    },
  ]

  return (
    <Box
      component="section"
      className="beuta-improvement-section"
      style={{ width: '100%', background: '#fff', padding: '40px 0 60px' } as FramerStyle}
    >
      <style>{`
        .bni-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(32px, 5.5vw, 56px);
          font-weight: 800;
          color: #111;
          margin: 0 0 40px 0;
          letter-spacing: -0.02em;
        }
        .bni-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px 48px;
        }
        @media (max-width: 768px) {
          .bni-grid { grid-template-columns: 1fr; gap: 24px; }
        }
        .bni-card {
          background: #FAFAFA;
          border-radius: 16px;
          padding: 24px 28px;
          border: 1px solid #F1F5F9;
        }
        .bni-card h4 {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 8px 0;
        }
        .bni-card p {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          line-height: 1.7;
          color: #64748B;
          margin: 0;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <h2 className="bni-title">Need of Improvement</h2>
          <div className="bni-grid">
            {items.map((item, idx) => (
              <div key={idx} className="bni-card">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Assets / Design System Section ───────────────────────── */
function BeutaAssetsSection() {
  const colors = [
    { name: 'Title-Active', desc: 'Used for dark titles and titles.', color: '#0A091A' },
    { name: 'Primary', desc: 'Used as the primary color.', color: '#6366F1' },
    { name: 'Error', desc: 'Used for error states.', color: '#EF4444' },

    { name: 'Body', desc: 'Used for body copy/text.', color: '#71717A' },
    { name: 'complementary', desc: 'Used for accents & actions.', color: '#3B82F6' },
    { name: 'Success', desc: 'Used for success status.', color: '#22C55E' },

    { name: 'Label', desc: 'Used for the label text.', color: '#A1A1AA' },
    { name: 'ANALOGOUS', desc: 'The primary gradient.', color: '#D4FF37' },
    { name: 'Warning', desc: 'Used to represent caution.', color: '#FBBF24' },

    { name: 'Input Background', desc: 'Used for input bg/accessibility.', color: '#E2E8F0' },
    { name: 'TRIADIC', desc: 'An accent gradient.', color: '#C026D3' },
    { name: 'Background', desc: 'Used for element backgrounds.', color: '#F8FAFC', border: true },
  ]

  return (
    <Box
      component="section"
      className="beuta-assets-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 80px' } as FramerStyle}
    >
      <style>{`
        .ba-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .ba-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 800;
          color: #111;
          margin: 0 0 40px 0;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        @keyframes baBellRing {
          0% { transform: rotate(0); }
          10% { transform: rotate(15deg); }
          20% { transform: rotate(-10deg); }
          30% { transform: rotate(5deg); }
          40% { transform: rotate(-5deg); }
          50% { transform: rotate(0); }
          100% { transform: rotate(0); }
        }
        .ba-bell {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          transform-origin: top center;
          animation: baBellRing 3s infinite ease-in-out;
        }
        .ba-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px 28px;
          margin-bottom: 60px;
        }
        @media (max-width: 800px) {
          .ba-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .ba-grid { grid-template-columns: 1fr; }
        }
        .ba-color-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ba-swatch {
          width: 100%;
          height: 100px;
          border-radius: 16px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.06);
        }
        .ba-color-name {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #0F172A;
          margin: 0;
        }
        .ba-color-desc {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: #94A3B8;
          margin: 0;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="ba-header">
            <Label text="Design system" />
          </div>
          <h2 className="ba-title">
            <span className="ba-bell">🔔</span> Assets
          </h2>

          <div className="ba-grid">
            {colors.map((c, idx) => (
              <div key={idx} className="ba-color-card">
                <div
                  className="ba-swatch"
                  style={{
                    background: c.color,
                    border: c.border ? '1px solid #E2E8F0' : 'none',
                  }}
                />
                <div>
                  <h4 className="ba-color-name">{c.name}</h4>
                  <p className="ba-color-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Typography Section ────────────────────────────────────── */
function BeutaTypographySection() {
  return (
    <Box
      component="section"
      className="beuta-typography-section"
      style={{ width: '100%', background: '#fff', padding: '20px 0 100px' } as FramerStyle}
    >
      <style>{`
        .bt-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          color: #111;
          margin: 0 0 40px 0;
          letter-spacing: -0.02em;
        }
        .bt-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 36px 28px;
        }
        @media (max-width: 800px) {
          .bt-grid { grid-template-columns: 1fr; gap: 28px; }
        }
        .bt-card {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .bt-label {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: #7C3AED;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .bt-sample {
          font-family: 'Inter', sans-serif;
          color: #0F172A;
          margin: 0;
          line-height: 1.3;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <h2 className="bt-title">Typography</h2>

          <div className="bt-grid">
            {/* Row 1 */}
            <div className="bt-card">
              <span className="bt-label">TEXT LARGE (32 / 44 PTS)</span>
              <p className="bt-sample" style={{ fontSize: 32, fontWeight: 700 }}>Back</p>
            </div>
            <div className="bt-card">
              <span className="bt-label">TEXT LARGE (24 / 34 PTS)</span>
              <p className="bt-sample" style={{ fontSize: 18, color: '#64748B' }}>The future is in our hands to shape.</p>
            </div>
            <div className="bt-card">
              <span className="bt-label">TEXT SMALL (12 / 16 PTS)</span>
              <p className="bt-sample" style={{ fontSize: 12, color: '#94A3B8' }}>All sizes<br />12 pt / 16 pt Regular</p>
            </div>

            {/* Row 2 (Bold specimens) */}
            <div className="bt-card">
              <span className="bt-label">DISPLAY LARGE BOLD</span>
              <p className="bt-sample" style={{ fontSize: 24, fontWeight: 800 }}>The future is in our hands to shape.</p>
            </div>
            <div className="bt-card">
              <span className="bt-label">DISPLAY MEDIUM BOLD</span>
              <p className="bt-sample" style={{ fontSize: 18, fontWeight: 700 }}>The future is in our hands to shape.</p>
            </div>
            <div className="bt-card">
              <span className="bt-label">DISPLAY SMALL BOLD</span>
              <p className="bt-sample" style={{ fontSize: 14, fontWeight: 700 }}>The future is in our hands to shape.</p>
            </div>

            {/* Row 3 (Regular specimens) */}
            <div className="bt-card">
              <span className="bt-label">DISPLAY LARGE</span>
              <p className="bt-sample" style={{ fontSize: 24, fontWeight: 400, color: '#475569' }}>The future is in our hands to shape.</p>
            </div>
            <div className="bt-card">
              <span className="bt-label">DISPLAY MEDIUM</span>
              <p className="bt-sample" style={{ fontSize: 18, fontWeight: 400, color: '#475569' }}>The future is in our hands to shape.</p>
            </div>
            <div className="bt-card">
              <span className="bt-label">DISPLAY SMALL</span>
              <p className="bt-sample" style={{ fontSize: 14, fontWeight: 400, color: '#475569' }}>The future is in our hands to shape.</p>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Button System Section ─────────────────────────────────── */
function BeutaButtonSystemSection() {
  const buttonRows = [
    { label: 'Default', isHover: false, isActive: false, isSmall: false, isIcon: false, isDisabled: false },
    { label: 'Hover', isHover: true, isActive: false, isSmall: false, isIcon: false, isDisabled: false },
    { label: 'Active', isHover: false, isActive: true, isSmall: false, isIcon: false, isDisabled: false },
    { label: 'Small', isHover: false, isActive: false, isSmall: true, isIcon: false, isDisabled: false },
    { label: 'Icon', isHover: false, isActive: false, isSmall: false, isIcon: true, isDisabled: false },
    { label: 'Disabled', isHover: false, isActive: false, isSmall: false, isIcon: false, isDisabled: true },
  ]

  const iconTypes = ['+', '✓', '→', '⚙', '★', '●']

  return (
    <Box
      component="section"
      className="beuta-button-system-section"
      style={{ width: '100%', background: '#fff', padding: '20px 0 100px' } as FramerStyle}
    >
      <style>{`
        .bbs-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(32px, 5.5vw, 56px);
          font-weight: 800;
          color: #111;
          margin: 0 0 50px 0;
          letter-spacing: -0.02em;
        }

        .bbs-matrix {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 70px;
          overflow-x: auto;
          padding-bottom: 10px;
        }

        .bbs-row {
          display: grid;
          grid-template-columns: repeat(5, minmax(140px, 1fr));
          gap: 20px;
          align-items: center;
        }

        .bbs-pair {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        /* 1. Solid Primary Buttons */
        .bbs-btn-solid {
          background: #7C3AED;
          color: #FFFFFF;
          border: 1px solid #7C3AED;
          border-radius: 8px;
          padding: 8px 16px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          justify-content: center;
          cursor: default;
          box-shadow: 0 2px 8px rgba(124, 58, 237, 0.2);
        }
        .bbs-btn-solid.hover { background: #6D28D9; border-color: #6D28D9; }
        .bbs-btn-solid.active { background: #5B21B6; border-color: #5B21B6; }
        .bbs-btn-solid.small { padding: 5px 12px; font-size: 11px; }
        .bbs-btn-solid.disabled { background: #DDD6FE; border-color: #DDD6FE; color: #FFFFFF; box-shadow: none; }

        /* 2. Outlined Secondary Buttons */
        .bbs-btn-outline {
          background: #FFFFFF;
          color: #7C3AED;
          border: 1px solid #C4B5FD;
          border-radius: 8px;
          padding: 8px 16px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          justify-content: center;
          cursor: default;
        }
        .bbs-btn-outline.hover { background: #F5F3FF; border-color: #7C3AED; }
        .bbs-btn-outline.active { background: #EDE9FE; border-color: #6D28D9; }
        .bbs-btn-outline.small { padding: 5px 12px; font-size: 11px; }
        .bbs-btn-outline.disabled { border-color: #F1F5F9; color: #CBD5E1; }

        /* 3. Text / Ghost Buttons */
        .bbs-btn-text {
          background: transparent;
          color: #7C3AED;
          border: 1px solid transparent;
          border-radius: 8px;
          padding: 8px 16px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          justify-content: center;
          cursor: default;
        }
        .bbs-btn-text.hover { background: #F5F3FF; }
        .bbs-btn-text.active { background: #EDE9FE; }
        .bbs-btn-text.small { padding: 5px 12px; font-size: 11px; }
        .bbs-btn-text.disabled { color: #CBD5E1; }

        /* 4. Neutral Gray Buttons */
        .bbs-btn-gray {
          background: #F8FAFC;
          color: #64748B;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 8px 16px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          justify-content: center;
          cursor: default;
        }
        .bbs-btn-gray.hover { background: #F1F5F9; color: #334155; }
        .bbs-btn-gray.active { background: #E2E8F0; color: #0F172A; }
        .bbs-btn-gray.small { padding: 5px 12px; font-size: 11px; }
        .bbs-btn-gray.disabled { background: #FAFAFA; border-color: #F8FAFC; color: #E2E8F0; }

        /* 5. Minimal Link Buttons */
        .bbs-btn-link {
          background: transparent;
          color: #64748B;
          border: 1px solid transparent;
          border-radius: 8px;
          padding: 8px 16px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          justify-content: center;
          cursor: default;
        }
        .bbs-btn-link.hover { color: #7C3AED; }
        .bbs-btn-link.active { color: #5B21B6; }
        .bbs-btn-link.small { padding: 5px 12px; font-size: 11px; }
        .bbs-btn-link.disabled { color: #E2E8F0; }

        /* ── Bottom Icon Buttons Matrix ── */
        .bbs-icons-matrix {
          display: flex;
          flex-direction: column;
          gap: 16px;
          overflow-x: auto;
          padding-bottom: 10px;
        }

        .bbs-icons-row {
          display: grid;
          grid-template-columns: repeat(4, minmax(80px, 160px));
          gap: 32px;
          align-items: center;
        }

        .bbs-icon-btn-solid {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: #7C3AED;
          color: #FFFFFF;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(124, 58, 237, 0.2);
        }
        .bbs-icon-btn-solid.disabled { background: #DDD6FE; box-shadow: none; }

        .bbs-icon-btn-outline {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: #FFFFFF;
          border: 1px solid #C4B5FD;
          color: #7C3AED;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
        }
        .bbs-icon-btn-outline.disabled { border-color: #F1F5F9; color: #CBD5E1; }

        .bbs-icon-btn-subtle {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: #F5F3FF;
          color: #7C3AED;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
        }
        .bbs-icon-btn-subtle.disabled { background: #FAFAFA; color: #E2E8F0; }

        .bbs-icon-btn-ghost {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: transparent;
          color: #64748B;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
        }
        .bbs-icon-btn-ghost.disabled { color: #E2E8F0; }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <h2 className="bbs-title">Button system</h2>

          {/* ═══ Top Button Matrix ═══ */}
          <div className="bbs-matrix">
            {buttonRows.map((r, idx) => {
              const stateClass = r.isHover ? 'hover' : r.isActive ? 'active' : r.isSmall ? 'small' : r.isDisabled ? 'disabled' : ''
              return (
                <div key={idx} className="bbs-row">
                  {/* Col 1: Solid */}
                  <div className="bbs-pair">
                    <button className={`bbs-btn-solid ${stateClass}`}>
                      {r.isIcon && <span>+</span>} Button
                    </button>
                    <button className={`bbs-btn-solid ${stateClass}`}>
                      Button {r.isIcon && <span>→</span>}
                    </button>
                  </div>

                  {/* Col 2: Outlined */}
                  <div className="bbs-pair">
                    <button className={`bbs-btn-outline ${stateClass}`}>
                      {r.isIcon && <span>+</span>} Button
                    </button>
                    <button className={`bbs-btn-outline ${stateClass}`}>
                      Button {r.isIcon && <span>→</span>}
                    </button>
                  </div>

                  {/* Col 3: Text */}
                  <div className="bbs-pair">
                    <button className={`bbs-btn-text ${stateClass}`}>
                      {r.isIcon && <span>+</span>} Button
                    </button>
                    <button className={`bbs-btn-text ${stateClass}`}>
                      Button {r.isIcon && <span>→</span>}
                    </button>
                  </div>

                  {/* Col 4: Gray */}
                  <div className="bbs-pair">
                    <button className={`bbs-btn-gray ${stateClass}`}>
                      {r.isIcon && <span>+</span>} Button
                    </button>
                    <button className={`bbs-btn-gray ${stateClass}`}>
                      Button {r.isIcon && <span>→</span>}
                    </button>
                  </div>

                  {/* Col 5: Link */}
                  <div className="bbs-pair">
                    <button className={`bbs-btn-link ${stateClass}`}>
                      {r.isIcon && <span>+</span>} Button
                    </button>
                    <button className={`bbs-btn-link ${stateClass}`}>
                      Button {r.isIcon && <span>→</span>}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ═══ Bottom Icon Buttons Matrix ═══ */}
          <div className="bbs-icons-matrix">
            {iconTypes.map((icon, idx) => {
              const isDisabled = idx === 5
              return (
                <div key={idx} className="bbs-icons-row">
                  {/* Col 1: Solid Icon */}
                  <div>
                    <span className={`bbs-icon-btn-solid ${isDisabled ? 'disabled' : ''}`}>
                      {icon}
                    </span>
                  </div>

                  {/* Col 2: Outlined Icon */}
                  <div>
                    <span className={`bbs-icon-btn-outline ${isDisabled ? 'disabled' : ''}`}>
                      {icon}
                    </span>
                  </div>

                  {/* Col 3: Subtle Icon */}
                  <div>
                    <span className={`bbs-icon-btn-subtle ${isDisabled ? 'disabled' : ''}`}>
                      {icon}
                    </span>
                  </div>

                  {/* Col 4: Ghost Icon */}
                  <div>
                    <span className={`bbs-icon-btn-ghost ${isDisabled ? 'disabled' : ''}`}>
                      {icon}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

        </Box>
      </Box>
    </Box>
  )
}

/* ─── Wireframes Section ────────────────────────────────────── */
function BeutaWireframesSection() {
  return (
    <Box
      component="section"
      className="beuta-wireframes-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 100px' } as FramerStyle}
    >
      <style>{`
        .bw-header-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 50px;
        }
        @media (max-width: 700px) {
          .bw-header-grid { grid-template-columns: 1fr; gap: 16px; }
        }
        .bw-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2vw, 15px);
          line-height: 1.75;
          color: #666666;
          margin: 0;
          max-width: 820px;
        }

        /* 3-Column Wireframes Container */
        .bw-flow-container {
          background: #FAFAFA;
          border-radius: 24px;
          border: 1px solid #F1F5F9;
          padding: 40px 28px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.03);
        }
        .bw-cols-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 28px;
        }
        @media (max-width: 900px) {
          .bw-cols-grid { grid-template-columns: 1fr; gap: 36px; }
        }

        .bw-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Wireframe Screen Card */
        .bw-screen {
          background: #FFFFFF;
          border-radius: 20px;
          border: 1px solid #E2E8F0;
          padding: 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* Common Wireframe Skeletons */
        .bw-bar {
          height: 14px;
          background: #71717A;
          border-radius: 6px;
          width: 100%;
        }
        .bw-bar-light {
          height: 10px;
          background: #A1A1AA;
          border-radius: 4px;
          width: 60%;
        }
        .bw-box {
          background: #71717A;
          border-radius: 10px;
        }
        .bw-box-light {
          background: #A1A1AA;
          border-radius: 8px;
        }
        .bw-box-subtle {
          background: #E4E4E7;
          border-radius: 8px;
        }

        /* Custom Wireframe Card Styles */
        .bw-list-item {
          display: flex;
          gap: 10px;
          align-items: center;
          background: #F4F4F5;
          padding: 8px 10px;
          border-radius: 10px;
        }
        .bw-list-thumb {
          width: 32px;
          height: 32px;
          background: #71717A;
          border-radius: 6px;
          flex-shrink: 0;
        }
        .bw-badge-sm {
          width: 24px;
          height: 8px;
          background: #A1A1AA;
          border-radius: 4px;
          margin-left: auto;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="bw-header-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Wireframes" />
            </Box>
            <p className="bw-desc">
              Before developing the high-fidelity screens, I designed low-fidelity wireframes to establish the core layout, user flows, and interaction hierarchy for the salon application.
            </p>
          </div>

          {/* Wireframes Gallery */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 40 }}>
            <img
              src="/assets/beuta/beuta12.png"
              alt="Wireframes"
              style={{ width: '100%', maxWidth: '100%', height: 'auto', display: 'block', borderRadius: 16 } as FramerStyle}
            />
          </div>

        </Box>
      </Box>
    </Box>
  )
}

/* ─── Prototype & Annotations Section ───────────────────────── */
function BeutaPrototypeSection() {
  return (
    <Box
      component="section"
      className="beuta-prototype-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 120px' } as FramerStyle}
    >
      <style>{`
        .bp-anno-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 50px;
        }

        /* ── Part 1: Annotated Phone Layout ── */
        .bp-anno-container {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 100px;
          position: relative;
        }
        @media (max-width: 900px) {
          .bp-anno-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .bp-phone-frame {
          width: 100%;
          max-width: 320px;
          margin: 0 auto;
          background: #000000;
          border-radius: 40px;
          padding: 10px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.18);
          font-family: 'Inter', sans-serif;
        }
        .bp-phone-screen {
          background: #FFFFFF;
          border-radius: 32px;
          padding: 14px 12px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          overflow: hidden;
        }
        .bp-notch {
          width: 80px;
          height: 14px;
          background: #000;
          border-radius: 100px;
          margin: 0 auto 4px;
        }

        /* Callouts list on the right */
        .bp-callouts-list {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .bp-callout-card {
          position: relative;
          background: #FAFAFA;
          border-radius: 16px;
          padding: 16px 20px;
          border-left: 4px solid #7C3AED;
          border-top: 1px solid #F1F5F9;
          border-right: 1px solid #F1F5F9;
          border-bottom: 1px solid #F1F5F9;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          line-height: 1.65;
          color: #475569;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .bp-callout-card:hover {
          transform: translateX(4px);
          box-shadow: 0 8px 20px rgba(124, 58, 237, 0.08);
        }

        /* ── Part 2: Dual 3D Phones on Pedestal ── */
        .bp-pedestal-wrap {
          width: 100%;
          position: relative;
          padding: 40px 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .bp-phones-row {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 30px;
          position: relative;
          z-index: 2;
          margin-bottom: -40px;
        }
        @media (max-width: 650px) {
          .bp-phones-row { flex-direction: column; align-items: center; gap: 20px; margin-bottom: 0; }
        }

        .bp-pedestal-3d {
          width: 100%;
          max-width: 600px;
          height: 100px;
          background: linear-gradient(180deg, #27272A 0%, #18181B 100%);
          border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.3);
          transform: perspective(600px) rotateX(12deg);
          z-index: 1;
        }
        @media (max-width: 650px) {
          .bp-pedestal-3d { display: none; }
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="bp-anno-header">
            <Label text="Prototype" />
          </div>

          <div className="bp-anno-container">
            <div className="bp-home-image-wrap">
              <img
                src="/assets/beuta/Home.png"
                alt="Beuta home screen prototype"
                style={{ width: '100%', height: 'auto', display: 'block' } as FramerStyle}
              />
            </div>

            <div className="bp-callouts-list">
              <div className="bp-callout-card">
                <strong>Top Search Navigation:</strong> Search is now at the top, enabling users to quickly find the products and services they need.
              </div>
              <div className="bp-callout-card">
                <strong>Quick Action Categories:</strong> Users can quickly access haircut, facial, color, spa, massage, and other salon services.
              </div>
              <div className="bp-callout-card">
                <strong>Offers and Flash Sales:</strong> The offer section highlights current promotions and changes with the promotion timer to encourage faster checkout.
              </div>
              <div className="bp-callout-card">
                <strong>Trending and Popular Selection:</strong> Popular services are highlighted based on the most searched products and treatments.
              </div>
              <div className="bp-callout-card">
                <strong>Doctor and Trichologist Check-up:</strong> Users can find dermatologists and trichologists for professional consultations.
              </div>
              <div className="bp-callout-card">
                <strong>Integrated Beauty Stores:</strong> Customers can purchase useful aftercare products such as shampoo, face packs, and nail polish.
              </div>
            </div>
          </div>
           <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/assets/beuta/iPhone14.png"
              alt="Beuta home screen prototype with annotations"
              style={{ width: '100%', maxWidth: 900, height: 'auto', display: 'block' } as FramerStyle}
            />
          </div>

        </Box>
      </Box>
    </Box>
  )
}

/* ─── Web Admin Dashboard Showcase Section ─────────────────── */
function BeutaWebAdminShowcaseSection() {
  const serviceCategories = ['Hair Cut', 'Hair Spa', 'Facial', 'Massage', 'Hair Color', 'Beard Trim', 'Grooming']

  const hairServices = [
    { title: 'Haircut', price: '$25.00', duration: '30 mins', emoji: '💇‍♂️', bg: '#FAF5FF', stylist: 'Alex' },
    { title: 'Hairwash & Blowdry', price: '$15.00', duration: '20 mins', emoji: '💆‍♀️', bg: '#F5F3FF', stylist: 'Elena' },
    { title: 'Hair Color & Highlights', price: '$45.00', duration: '60 mins', emoji: '🎨', bg: '#EEF2FF', stylist: 'Sarah' },
    { title: 'Beard Grooming', price: '$18.00', duration: '25 mins', emoji: '🧔', bg: '#FAF5FF', stylist: 'David' },
    { title: 'Scalp Massage Spa', price: '$35.00', duration: '40 mins', emoji: '🧖‍♂️', bg: '#F5F3FF', stylist: 'Elena' },
    { title: 'Deluxe Hair Styling', price: '$50.00', duration: '50 mins', emoji: '✨', bg: '#EEF2FF', stylist: 'Sarah' },
  ]

  const liveAppointments = [
    { id: '#1042', customer: 'Emma Watson', service: 'Haircut & Styling', status: 'Completed', time: '10:00 AM', stylist: 'Alex' },
    { id: '#1043', customer: 'David Miller', service: 'Beard Trim', status: 'In-Progress', time: '11:15 AM', stylist: 'David' },
    { id: '#1044', customer: 'Jessica Alba', service: 'Coloring & Spa', status: 'Scheduled', time: '12:30 PM', stylist: 'Sarah' },
  ]

  const bookingRequests = [
    { id: '#B201', customer: 'Sophia Turner', service: 'Bridal Hair & Makeup', price: '$180.00', date: 'Jan 24, 2025', time: '02:00 PM' },
    { id: '#B202', customer: 'Lucas Bennett', service: 'Classic Cut & Shave', price: '$35.00', date: 'Jan 24, 2025', time: '02:30 PM' },
    { id: '#B203', customer: 'Chloe Davis', service: 'Keratin Smoothing', price: '$120.00', date: 'Jan 24, 2025', time: '03:15 PM' },
    { id: '#B204', customer: 'Oliver White', service: 'Beard Reshape', price: '$22.00', date: 'Jan 24, 2025', time: '04:00 PM' },
  ]

  const assignedServices = [
    { id: '#A301', customer: 'Mia Robinson', service: 'Balayage Color', price: '$140.00', staff: 'Sarah Jenkins', time: 'Jan 24, 01:00 PM' },
    { id: '#A302', customer: 'Ethan Hunt', service: 'Skin Cleanse & Facial', price: '$65.00', staff: 'Elena Rostova', time: 'Jan 24, 01:30 PM' },
    { id: '#A303', customer: 'Grace Kelly', service: 'Full Pedicure Spa', price: '$50.00', staff: 'Alex Rivera', time: 'Jan 24, 02:45 PM' },
  ]

  const upcomingLive = [
    { id: '#L401', customer: 'Liam Neeson', service: 'Hair Styling', status: 'Completed', staff: 'David Miller', time: 'Jan 24, 10:00 AM' },
    { id: '#L402', customer: 'Ava Gardner', service: 'Spa Treatment', status: 'In-Salon', staff: 'Elena Rostova', time: 'Jan 24, 11:30 AM' },
    { id: '#L403', customer: 'Noah Centineo', service: 'Beard Trim', status: 'En-Route', staff: 'David Miller', time: 'Jan 24, 01:00 PM' },
  ]

  return (
    <Box
      component="section"
      className="beuta-webadmin-section"
      style={{ width: '100%', background: '#F8FAFC', padding: '60px 0 100px' } as FramerStyle}
    >
      <style>{`
        .bwa-container {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .bwa-dash-card {
          background: #FFFFFF;
          border-radius: 20px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .bwa-grid-layout {
          display: grid;
          grid-template-columns: 200px 1fr;
          min-height: 520px;
        }
        @media (max-width: 900px) {
          .bwa-grid-layout { grid-template-columns: 1fr; }
          .bwa-sidebar { display: none; }
        }

        /* ── Left Sidebar ── */
        .bwa-sidebar {
          background: #18181B;
          color: #A1A1AA;
          padding: 20px 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .bwa-logo {
          font-size: 16px;
          font-weight: 800;
          color: #A78BFA;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
          letter-spacing: 0.05em;
        }
        .bwa-nav-group {
          font-size: 10px;
          font-weight: 700;
          color: #71717A;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 14px 8px 6px;
        }
        .bwa-nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 11.5px;
          font-weight: 500;
          cursor: default;
          color: #A1A1AA;
        }
        .bwa-nav-item.active {
          background: #7C3AED;
          color: #FFFFFF;
          font-weight: 700;
        }
        .bwa-logout {
          margin-top: auto;
          padding: 10px 12px;
          border-top: 1px solid #27272A;
          font-size: 11px;
          color: #EF4444;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* ── Main Dashboard Content ── */
        .bwa-content {
          padding: 24px 30px;
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .bwa-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .bwa-search-bar {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 6px 14px;
          font-size: 11px;
          color: #94A3B8;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* Tables & Widgets */
        .bwa-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 11px;
        }
        .bwa-table th {
          text-align: left;
          padding: 8px 10px;
          color: #94A3B8;
          font-weight: 600;
          font-size: 9.5px;
          text-transform: uppercase;
          border-bottom: 1px solid #F1F5F9;
        }
        .bwa-table td {
          padding: 10px 10px;
          color: #334155;
          border-bottom: 1px solid #F8FAFC;
        }
        .bwa-pill-btn {
          background: #7C3AED;
          color: #FFF;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 10px;
          font-weight: 700;
          border: none;
          cursor: pointer;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 32,
              alignItems: 'start',
            } as FramerStyle}
          >
            {Array.from({ length: 7 }, (_, index) => (
              <img
                key={index}
                src={`/assets/beuta/d${index + 1}.png`}
                alt={`Beuta admin dashboard screen ${index + 1}`}
                style={{ width: '100%', height: 'auto', display: 'block' } as FramerStyle}
              />
            ))}
          </div>

          <div className="bwa-container" style={{ display: 'none' }}>

            {/* ═══════════════ Screen 1: Dashboard Overview ═══════════════ */}
            <div className="bwa-dash-card">
              <div className="bwa-grid-layout">
                {/* Sidebar */}
                <div className="bwa-sidebar">
                  <div className="bwa-logo">
                    <span>✂️</span> BEUTA
                  </div>
                  <div className="bwa-nav-item active"><span>📊</span> Dashboard</div>
                  <div className="bwa-nav-item"><span>💇</span> Services</div>
                  <div className="bwa-nav-item"><span>📅</span> Bookings</div>
                  <div className="bwa-nav-item"><span>🔔</span> Notifications</div>
                  <div className="bwa-nav-item"><span>⚙️</span> Settings</div>

                  <div className="bwa-nav-group">Pages</div>
                  <div className="bwa-nav-item"><span>💳</span> Payment Order</div>
                  <div className="bwa-nav-item"><span>💸</span> Transaction</div>
                  <div className="bwa-nav-item"><span>📈</span> Report</div>

                  <div className="bwa-logout"><span>🚪</span> Log out</div>
                </div>

                {/* Dashboard Main Area */}
                <div className="bwa-content">
                  {/* Top Bar */}
                  <div className="bwa-topbar">
                    <div>
                      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: '#0F172A' }}>Today&apos;s Bookings</h3>
                      <span style={{ fontSize: 10, color: '#94A3B8' }}>Salon Multi-branch Analytics</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div className="bwa-search-bar">🔍 Search anything...</div>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#7C3AED', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700 }}>
                        SR
                      </div>
                    </div>
                  </div>

                  {/* 2-Column Dashboard Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 20 }}>
                    {/* Left Column: Stat Cards & Donut */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                      <div style={{ background: '#FAF5FF', border: '1px solid #F3E8FF', borderRadius: 12, padding: 14 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#7C3AED', fontWeight: 600, marginBottom: 4 }}>
                          <span>Total Revenue</span>
                          <span style={{ color: '#16A34A', background: '#DCFCE7', padding: '1px 6px', borderRadius: 4 }}>+12%</span>
                        </div>
                        <div style={{ fontSize: 20, fontWeight: 800, color: '#0F172A' }}>₹ 9466.00</div>
                        <div style={{ fontSize: 9, color: '#94A3B8', marginTop: 2 }}>vs last month ₹ 8300.00</div>
                      </div>

                      <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 12, padding: 14 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#64748B', fontWeight: 600, marginBottom: 4 }}>
                          <span>Expenses</span>
                          <span style={{ color: '#DC2626', background: '#FEE2E2', padding: '1px 6px', borderRadius: 4 }}>+8%</span>
                        </div>
                        <div style={{ fontSize: 20, fontWeight: 800, color: '#0F172A' }}>₹ 5866.00</div>
                        <div style={{ fontSize: 9, color: '#94A3B8', marginTop: 2 }}>vs last month ₹ 5400.00</div>
                      </div>

                      {/* Donut Chart Widget */}
                      <div style={{ background: '#FFFFFF', border: '1px solid #F1F5F9', borderRadius: 12, padding: 14 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: '#0F172A', marginBottom: 8 }}>Status of Services</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                          <svg width="70" height="70" viewBox="0 0 70 70">
                            <circle cx="35" cy="35" r="26" fill="none" stroke="#E2E8F0" strokeWidth="9" />
                            <circle cx="35" cy="35" r="26" fill="none" stroke="#7C3AED" strokeWidth="9" strokeDasharray="90 160" />
                            <circle cx="35" cy="35" r="26" fill="none" stroke="#34D399" strokeWidth="9" strokeDasharray="45 160" strokeDashoffset="-90" />
                            <circle cx="35" cy="35" r="26" fill="none" stroke="#F59E0B" strokeWidth="9" strokeDasharray="25 160" strokeDashoffset="-135" />
                          </svg>
                          <div style={{ fontSize: 9, display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <div style={{ color: '#7C3AED', fontWeight: 600 }}>● Hair Care (55%)</div>
                            <div style={{ color: '#34D399', fontWeight: 600 }}>● Skin Treat (30%)</div>
                            <div style={{ color: '#F59E0B', fontWeight: 600 }}>● Nail &amp; Spa (15%)</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Availability Bar + Live Status + Wave */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {/* Availability Selector */}
                      <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10, padding: '10px 14px', display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 11, fontWeight: 600, color: '#475569' }}>Availability:</span>
                        <select style={{ fontSize: 10, border: '1px solid #CBD5E1', borderRadius: 6, padding: '4px 8px', background: '#FFF' }}>
                          <option>Select Stylist ▾</option>
                          <option>Sarah Jenkins</option>
                          <option>David Miller</option>
                        </select>
                        <span style={{ fontSize: 10, background: '#FFF', border: '1px solid #CBD5E1', padding: '4px 8px', borderRadius: 6 }}>📅 Jan 24, 2025</span>
                        <span style={{ fontSize: 10, background: '#FFF', border: '1px solid #CBD5E1', padding: '4px 8px', borderRadius: 6 }}>⏰ 10:00 AM</span>
                        <button className="bwa-pill-btn" style={{ marginLeft: 'auto' }}>Search</button>
                      </div>

                      {/* Live Service Status Table */}
                      <div style={{ background: '#FFFFFF', border: '1px solid #F1F5F9', borderRadius: 12, padding: 12 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: '#0F172A', marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
                          <span>Live Service Status</span>
                          <span style={{ color: '#7C3AED', fontSize: 10, fontWeight: 600 }}>View All →</span>
                        </div>
                        <table className="bwa-table">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Customer</th>
                              <th>Service</th>
                              <th>Status</th>
                              <th>Start Time</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {liveAppointments.map((row, idx) => (
                              <tr key={idx}>
                                <td style={{ fontWeight: 700 }}>{row.id}</td>
                                <td style={{ fontWeight: 600, color: '#0F172A' }}>{row.customer}</td>
                                <td>{row.service}</td>
                                <td>
                                  <span style={{ fontSize: 9, padding: '2px 8px', borderRadius: 100, fontWeight: 700, background: row.status === 'Completed' ? '#DCFCE7' : row.status === 'In-Progress' ? '#FEF3C7' : '#EDE9FE', color: row.status === 'Completed' ? '#16A34A' : row.status === 'In-Progress' ? '#D97706' : '#7C3AED' }}>
                                    {row.status}
                                  </span>
                                </td>
                                <td>{row.time}</td>
                                <td>
                                  <button className="bwa-pill-btn">Action</button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Earning Summary Wave Chart */}
                      <div style={{ background: '#FFFFFF', border: '1px solid #F1F5F9', borderRadius: 12, padding: 12 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: '#0F172A', marginBottom: 4 }}>Earning Summary (Last 7 Months)</div>
                        <svg width="100%" height="70" viewBox="0 0 500 70" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="earnGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          <path d="M0,50 Q60,10 120,35 T240,15 T360,40 T480,10 L500,20 L500,70 L0,70 Z" fill="url(#earnGrad)" />
                          <path d="M0,50 Q60,10 120,35 T240,15 T360,40 T480,10 L500,20" fill="none" stroke="#7C3AED" strokeWidth="2.5" />
                        </svg>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 8, color: '#94A3B8', marginTop: 4 }}>
                          <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ═══════════════ Screen 2: Services Management ═══════════════ */}
            <div className="bwa-dash-card">
              <div className="bwa-grid-layout">
                {/* Sidebar */}
                <div className="bwa-sidebar">
                  <div className="bwa-logo">
                    <span>✂️</span> BEUTA
                  </div>
                  <div className="bwa-nav-item"><span>📊</span> Dashboard</div>
                  <div className="bwa-nav-item active"><span>💇</span> Services</div>
                  <div className="bwa-nav-item"><span>📅</span> Bookings</div>
                  <div className="bwa-nav-item"><span>🔔</span> Notifications</div>
                  <div className="bwa-nav-item"><span>⚙️</span> Settings</div>

                  <div className="bwa-nav-group">Pages</div>
                  <div className="bwa-nav-item"><span>💳</span> Payment Order</div>
                  <div className="bwa-nav-item"><span>💸</span> Transaction</div>
                  <div className="bwa-nav-item"><span>📈</span> Report</div>

                  <div className="bwa-logout"><span>🚪</span> Log out</div>
                </div>

                {/* Main Area */}
                <div className="bwa-content">
                  <div className="bwa-topbar">
                    <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: '#0F172A' }}>Services Catalog</h3>
                    <div className="bwa-search-bar">🔍 Search services...</div>
                  </div>

                  {/* Category Filter Chips */}
                  <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
                    {serviceCategories.map((cat, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          padding: '6px 14px',
                          borderRadius: 100,
                          background: idx === 0 ? '#7C3AED' : '#F1F5F9',
                          color: idx === 0 ? '#FFF' : '#64748B',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* 6 Hair Service Cards Grid */}
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#0F172A', marginBottom: 12 }}>Hair services</div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
                      {hairServices.map((s, idx) => (
                        <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                          <div style={{ height: 80, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32 }}>
                            {s.emoji}
                          </div>
                          <div style={{ padding: '10px 12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                              <span style={{ fontSize: 11, fontWeight: 800, color: '#0F172A' }}>{s.title}</span>
                              <span style={{ fontSize: 11, fontWeight: 800, color: '#7C3AED' }}>{s.price}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 9, color: '#94A3B8' }}>
                              <span>⏱ {s.duration}</span>
                              <span>Stylist: {s.stylist}</span>
                            </div>
                            <button className="bwa-pill-btn" style={{ width: '100%', marginTop: 8 }}>
                              Book Appointment
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ═══════════════ Screen 3: Multi-table Bookings ═══════════════ */}
            <div className="bwa-dash-card">
              <div className="bwa-grid-layout">
                {/* Sidebar */}
                <div className="bwa-sidebar">
                  <div className="bwa-logo">
                    <span>✂️</span> BEUTA
                  </div>
                  <div className="bwa-nav-item"><span>📊</span> Dashboard</div>
                  <div className="bwa-nav-item"><span>💇</span> Services</div>
                  <div className="bwa-nav-item active"><span>📅</span> Bookings</div>
                  <div className="bwa-nav-item"><span>🔔</span> Notifications</div>
                  <div className="bwa-nav-item"><span>⚙️</span> Settings</div>

                  <div className="bwa-nav-group">Pages</div>
                  <div className="bwa-nav-item"><span>💳</span> Payment Order</div>
                  <div className="bwa-nav-item"><span>💸</span> Transaction</div>
                  <div className="bwa-nav-item"><span>📈</span> Report</div>

                  <div className="bwa-logout"><span>🚪</span> Log out</div>
                </div>

                {/* Main Multi-table Area */}
                <div className="bwa-content">
                  {/* Table 1: Service Booking Requests */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                      <span style={{ fontSize: 12, fontWeight: 800, color: '#0F172A' }}>Service Booking Requests</span>
                      <span style={{ fontSize: 10, color: '#7C3AED', fontWeight: 600 }}>Filter / Sort ▾</span>
                    </div>
                    <table className="bwa-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Customer Name</th>
                          <th>Services</th>
                          <th>Price</th>
                          <th>Date</th>
                          <th>Time/Slot</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookingRequests.map((b, idx) => (
                          <tr key={idx}>
                            <td style={{ fontWeight: 700 }}>{b.id}</td>
                            <td style={{ fontWeight: 600, color: '#0F172A' }}>{b.customer}</td>
                            <td>{b.service}</td>
                            <td style={{ fontWeight: 700, color: '#7C3AED' }}>{b.price}</td>
                            <td>{b.date}</td>
                            <td>{b.time}</td>
                            <td><button className="bwa-pill-btn">Confirm</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Auto-assign Stylist Toggle Banner */}
                  <div style={{ background: '#F5F3FF', border: '1px solid #DDD6FE', borderRadius: 10, padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 16 }}>⚡</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: '#5B21B6' }}>Automatically assign available stylists for incoming online appointments</span>
                    </div>
                    <div style={{ width: 34, height: 18, background: '#7C3AED', borderRadius: 100, position: 'relative' }}>
                      <div style={{ width: 14, height: 14, background: '#FFF', borderRadius: '50%', position: 'absolute', top: 2, right: 2 }} />
                    </div>
                  </div>

                  {/* Table 2: Assigned Services */}
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 800, color: '#0F172A', marginBottom: 8 }}>Assigned Services</div>
                    <table className="bwa-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Customer Name</th>
                          <th>Services</th>
                          <th>Price</th>
                          <th>Assigned Staff</th>
                          <th>Date / Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {assignedServices.map((b, idx) => (
                          <tr key={idx}>
                            <td style={{ fontWeight: 700 }}>{b.id}</td>
                            <td style={{ fontWeight: 600, color: '#0F172A' }}>{b.customer}</td>
                            <td>{b.service}</td>
                            <td style={{ fontWeight: 700 }}>{b.price}</td>
                            <td style={{ color: '#7C3AED', fontWeight: 600 }}>{b.staff}</td>
                            <td>{b.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Table 3: Upcoming / Live Services */}
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 800, color: '#0F172A', marginBottom: 8 }}>Upcoming / Live Services</div>
                    <table className="bwa-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Customer Name</th>
                          <th>Services</th>
                          <th>Status</th>
                          <th>Assigned Staff</th>
                          <th>Date / Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {upcomingLive.map((b, idx) => (
                          <tr key={idx}>
                            <td style={{ fontWeight: 700 }}>{b.id}</td>
                            <td style={{ fontWeight: 600, color: '#0F172A' }}>{b.customer}</td>
                            <td>{b.service}</td>
                            <td>
                              <span style={{ fontSize: 9, padding: '2px 8px', borderRadius: 100, fontWeight: 700, background: b.status === 'Completed' ? '#DCFCE7' : b.status === 'In-Salon' ? '#FEF3C7' : '#EDE9FE', color: b.status === 'Completed' ? '#16A34A' : b.status === 'In-Salon' ? '#D97706' : '#7C3AED' }}>
                                {b.status}
                              </span>
                            </td>
                            <td style={{ color: '#7C3AED', fontWeight: 600 }}>{b.staff}</td>
                            <td>{b.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

/* ─── Admin Notifications & Settings Showcase Section ───────── */
function BeutaAdminSettingsShowcaseSection() {
  return (
    <Box
      component="section"
      className="beuta-admin-settings-section"
      style={{ width: '100%', background: '#F8FAFC', padding: '40px 0 120px' } as FramerStyle}
    >
      <style>{`
        .bas-container {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .bas-dash-card {
          background: #FFFFFF;
          border-radius: 20px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .bas-grid-layout {
          display: grid;
          grid-template-columns: 200px 1fr;
          min-height: 540px;
        }
        @media (max-width: 900px) {
          .bas-grid-layout { grid-template-columns: 1fr; }
          .bas-sidebar { display: none; }
        }

        .bas-sidebar {
          background: #18181B;
          color: #A1A1AA;
          padding: 20px 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .bas-logo {
          font-size: 16px;
          font-weight: 800;
          color: #A78BFA;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .bas-nav-group {
          font-size: 10px;
          font-weight: 700;
          color: #71717A;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 14px 8px 6px;
        }
        .bas-nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 11.5px;
          font-weight: 500;
          cursor: default;
          color: #A1A1AA;
        }
        .bas-nav-item.active {
          background: #7C3AED;
          color: #FFFFFF;
          font-weight: 700;
        }
        .bas-logout {
          margin-top: auto;
          padding: 10px 12px;
          border-top: 1px solid #27272A;
          font-size: 11px;
          color: #EF4444;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .bas-content {
          padding: 24px 30px;
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .bas-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 11px;
        }
        .bas-table th {
          text-align: left;
          padding: 8px 10px;
          color: #94A3B8;
          font-weight: 600;
          font-size: 9.5px;
          text-transform: uppercase;
          border-bottom: 1px solid #F1F5F9;
        }
        .bas-table td {
          padding: 10px 10px;
          color: #334155;
          border-bottom: 1px solid #F8FAFC;
        }
        .bas-pill-btn {
          background: #7C3AED;
          color: #FFF;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 10px;
          font-weight: 700;
          border: none;
          cursor: pointer;
        }

        /* Toggle switch component */
        .bas-switch {
          width: 32px;
          height: 18px;
          background: #7C3AED;
          border-radius: 100px;
          position: relative;
          display: inline-block;
          flex-shrink: 0;
        }
        .bas-switch::after {
          content: '';
          position: absolute;
          top: 2px;
          right: 2px;
          width: 14px;
          height: 14px;
          background: #FFF;
          border-radius: 50%;
        }

        /* Settings Card Box */
        .bas-setting-box {
          background: #FAFAFA;
          border-radius: 14px;
          border: 1px solid #F1F5F9;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
      `}</style>
      <Box style={container}>
        
      </Box>
    </Box>
  )
}

/* ─── Payment Order, Captain Forum & More Work Section ──────── */
// function BeutaPaymentAndMoreWorkSection() {
//   return (
//     <Box
//       component="section"
//       className="beuta-payment-morework-section"
//       style={{ width: '100%', background: '#F8FAFC', padding: '20px 0 100px' } as FramerStyle}
//     >
      
      
//     </Box>
//   )
// }

/* ─── Main Page Component ───────────────────────────────────── */
function BeutaPage() {
  return (
    <div id="main" className="crunch-page beuta-page">
      <style>{pageResponsiveCss}</style>
      <div className="crunch-side-lines" aria-hidden="true">
        <span className="crunch-side-lines-star crunch-side-lines-star-left" />
        <span className="crunch-side-lines-star crunch-side-lines-star-right" />
      </div>
      <Box component="div" style={{ minHeight: '100vh', width: 'auto' } as FramerStyle}>
        <Navbar />
        <Box component="main">
          <BeutaHeroSection />
          <BeutaProcessSection />
          <BeutaUserResearchSection />
          <BeutaInsightsAndPersonasSection />
          <BeutaInformationArchitectureSection />
          <BeutaNeedOfImprovementSection />
          <BeutaAssetsSection />
          <BeutaTypographySection />
          <BeutaButtonSystemSection />
          <BeutaWireframesSection />
          <BeutaPrototypeSection />
          <BeutaWebAdminShowcaseSection />
          <BeutaAdminSettingsShowcaseSection />
          {/* <BeutaPaymentAndMoreWorkSection /> */}
          <MoreWorkMarquee currentPath="/beuta" />
        </Box>
      </Box>
    </div>
  )
}

export default BeutaPage
