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
  .ateats-page { --crunch-pad: 24px; overflow-x: clip; position: relative; }
  /* Full-page side lines use the shared .crunch-side-lines rule in index.css */
  .ateats-page .crunch-side-lines { z-index: 5; }
  @media (max-width: 640px) { .ateats-page { --crunch-pad: 18px; } }
  @media (max-width: 400px) { .ateats-page { --crunch-pad: 14px; } }
  @media (max-width: 700px) {
    .ateats-page main > section { padding-top: 36px !important; padding-bottom: 48px !important; }
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

/* ─── Hero & Problem & Challenge Section ────────────────────── */
function AteatsHeroSection() {
  const challengesLeft = [
    {
      title: 'Fragmented Sales Channels',
      desc: 'Managing orders across multiple sales channels, can be chaotic. Centralised system, will lessen operational complexity.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M6 21V9a9 9 0 0 0 9 9" />
        </svg>
      ),
    },
    {
      title: 'Inconsistent Delivery Operations',
      desc: 'Inconsistent coordination between delivery person and kitchen staff results in delayed preparation and dispatch.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      title: 'Customer retention',
      desc: 'Many restaurants lack a structured loyalty program, & engagement strategies to encourage repeat business.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
    {
      title: 'Lack of centralised control',
      desc: 'Without a common dashboard, owners and managers struggle with monitoring sales, inventory, staff performance, and customer feedback in real-time.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
    },
  ]

  const challengesRight = [
    {
      title: 'Limited Data-Driven Decision Making',
      desc: 'Without real-time insights, restaurant owners rely on guesswork for operations.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      title: 'Manual Promotions & Marketing',
      desc: 'Running promotions and marketing campaigns manually is time-consuming, inefficient, and lacks personalisation.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
      ),
    },
    {
      title: 'Employee & Kitchen Mismanagement',
      desc: 'Coordinating staff schedules, managing kitchen workflows, and handling order can be chaotic without a structured system.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: 'Overall Management',
      desc: 'Without an integrated system to streamline procurement, inventory, staffing, and financial management, scaling up becomes a logistical nightmare.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
  ]

  return (
    <Box
      component="section"
      className="ateats-hero-section"
      style={{ width: '100%', maxWidth: '100%', margin: '0 auto', background: '#fff', padding: '40px 0 60px' } as FramerStyle}
    >
      <style>{`
        .at-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #333;
        }
        .at-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 70px;
        }
        .at-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 100px;
          background: #FDF2F2;
          color: #EF4444;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
        }
        .at-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(48px, 9vw, 108px);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1;
          color: #111;
          margin: 0 0 20px 0;
        }
        .at-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2.2vw, 16px);
          line-height: 1.6;
          color: #888888;
          max-width: 680px;
          margin: 0 auto;
        }
        .at-problem-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 80px;
        }
        @media (max-width: 700px) {
          .at-problem-grid { grid-template-columns: 1fr; gap: 20px; margin-bottom: 48px; }
        }
        .at-problem-heading {
          font-family: 'Inter', sans-serif;
          font-size: clamp(20px, 3.2vw, 28px);
          font-weight: 700;
          color: #111;
          margin: 0 0 24px 0;
          line-height: 1.35;
          letter-spacing: -0.01em;
        }
        .at-problem-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2.2vw, 15px);
          line-height: 1.75;
          color: #666;
          margin: 0;
        }
        .at-challenge-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 700;
          color: #111;
          margin: 0 0 48px 0;
          letter-spacing: -0.02em;
        }
        .at-challenge-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          margin-bottom: 80px;
        }
        @media (max-width: 850px) {
          .at-challenge-grid { grid-template-columns: 1fr; gap: 32px; }
        }
        .at-challenge-col {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        /* Icons Rows (Raw vector glyphs matching uploaded reference image) */
        .ads-icons-title {
          font-family: 'Inter', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 24px 0;
          letter-spacing: -0.01em;
        }
        .ads-icons-rows {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 60px;
        }
        .ads-icons-row {
          display: flex;
          flex-wrap: nowrap !important;
          gap: 10px;
          align-items: center;
          width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 4px;
        }
        .ads-icons-row::-webkit-scrollbar {
          display: none;
        }
        .ads-icon-box {
          width: 15px;
          height: 15px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
          flex-shrink: 0;
          cursor: pointer;
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }
        .ads-icon-box:hover {
          transform: translateY(-2px);
        }
        .ads-icon-box.outline-box {
          color: #1E293B;
        }
        .ads-icon-box.red-fill-box {
          color: #E11D48;
        }
        .ads-icon-box.teal-fill-box {
          color: #0D8370;
        }
        .at-challenge-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }
        .at-challenge-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #FF462E;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 6px 16px rgba(255, 70, 46, 0.3);
        }
        .at-challenge-item-title {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 6px 0;
        }
        .at-challenge-item-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          line-height: 1.65;
          color: #6B7280;
          margin: 0;
        }
        .at-intro {
          text-align: center;
          margin: 60px auto 0;
        }
        .at-intro h3 {
          font-family: 'Inter', sans-serif;
          font-size: clamp(26px, 4vw, 44px);
          font-weight: 700;
          color: #111;
          margin: 0 0 8px 0;
          letter-spacing: -0.02em;
        }
        .at-intro p {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2vw, 16px);
          color: #6B7280;
          margin: 0;
        }
        .at-mockup-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
        }
        .at-mockup-img {
          width: 100%;
          max-width: 950px;
          height: auto;
          display: block;
          object-fit: contain;
        }
        @media (min-width: 1200px) {
          .at-mockup-img {
            width: 700px;
            height: 700px;
            max-width: 700px;
          }
        }
      `}</style>

      <Box style={{ ...container, maxWidth: '100%' }}>
        <Box style={{ ...contentPad, paddingTop: 40 } as FramerStyle}>
          {/* Hero Content */}
          <div className="at-hero">
            <div className="at-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
              Case study
            </div>
            <h1 className="at-title">Eats®</h1>
            <p className="at-subtitle">
              Managing a multi-branch restaurant business comes with complexities from streamlining online and dine-in orders to ensuring efficient deliveries.
            </p>
          </div>

          {/* Problem Section */}
          <div className="at-problem-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Problem" />
            </Box>
            <div>
              <h2 className="at-problem-heading">
                Multi-branch restaurant businesses face significant challenges in effectively managing operations across locations to maintain consistency and profitability.
              </h2>
              <p className="at-problem-body">
                The need to streamline online, dine-in, and delivery operations across multiple restaurant branches presents a complex challenge for maintaining efficiency, customer satisfaction, and profitability. Inefficient communication and coordination between branches in a multi-branch restaurant business negatively impacts order fulfillment, delivery times, and overall customer experience, hindering potential revenue growth. Maintaining consistent service quality and operational efficiency across multiple restaurant branches is a critical challenge that directly impacts brand reputation and customer loyalty. Current operational inefficiencies across multiple restaurant branches lead to an estimated 50% loss in revenue due to order errors, delayed deliveries, and customer dissatisfaction. (Would need data to back this up?)
              </p>
            </div>
          </div>

          {/* Challenge Section */}
          <h2 className="at-challenge-title">Challenge</h2>
          <div className="at-challenge-grid">
            <div className="at-challenge-col">
              {challengesLeft.map((c, i) => (
                <div key={i} className="at-challenge-item">
                  <div className="at-challenge-icon">{c.icon}</div>
                  <div>
                    <h3 className="at-challenge-item-title">{c.title}</h3>
                    <p className="at-challenge-item-desc">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="at-challenge-col">
              {challengesRight.map((c, i) => (
                <div key={i} className="at-challenge-item">
                  <div className="at-challenge-icon">{c.icon}</div>
                  <div>
                    <h3 className="at-challenge-item-title">{c.title}</h3>
                    <p className="at-challenge-item-desc">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet & Web App Mockup */}
          <div className="at-intro">
            <h3>Introducing atEats</h3>
            <p>latest mobile app version</p>
          </div>
          <div className="at-mockup-wrap">
            <img
              src="/assets/ateats/ateats3.png"
              alt="atEats Multi-branch Restaurant Management Software on iPad"
              className="at-mockup-img"
            />
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Solution & What Was Found Section ──────────────────────── */
function SolutionSection() {
  const [dfuVisible, setDfuVisible] = useState(false)
  const dfuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = dfuRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setDfuVisible(true)
          else setDfuVisible(false)
        })
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const features = [
    {
      title: 'Smart Dashboard',
      desc: 'Engaging interface for real-time insights of orders, sales, and overall restaurant performance.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: 'Order Tracking Hub',
      desc: 'Streamlined system to monitor and manage orders from placement to fulfillment.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M9 15l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Mobile application',
      desc: 'Application for restaurant staff and customers, streamlining ordering and communication.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      title: 'Customer insights',
      desc: 'Detailed analytics on customer behavior, preferences, and order history to tailor marketing.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: 'Menu management',
      desc: 'Add, update, and organise menu items, pricing, and availability across all branches.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
      ),
    },
    {
      title: 'Campaign Setup',
      desc: 'Campaign setup tool for promotions, discounts, and personalised marketing strategies.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: 'Instant Alert',
      desc: 'Real-time notifications for new orders, delivery updates, and customer interactions to keep staff informed.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      ),
    },
    {
      title: 'Revenue Analytics',
      desc: 'Reports on sales trends, order history, and performance metrics for data-driven decision making.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      ),
    },
  ]

  return (
    <Box
      component="section"
      className="solution-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 80px' } as FramerStyle}
    >
      <style>{`
        .sol-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 70px;
        }
        @media (max-width: 700px) {
          .sol-grid { grid-template-columns: 1fr; gap: 20px; margin-bottom: 48px; }
        }
        .sol-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2.2vw, 15px);
          line-height: 1.75;
          color: #888888;
          margin: 0;
          max-width: 820px;
        }
        .wwf-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 700;
          color: #111;
          margin: 0 0 12px 0;
          letter-spacing: -0.02em;
          text-align: center;
        }
        .wwf-subtext {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #666;
          text-align: center;
          margin: 0 0 48px 0;
        }
        .wwf-card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }
        @media (max-width: 900px) {
          .wwf-card-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .wwf-card-grid { grid-template-columns: 1fr; }
        }
        .wwf-card {
          background: #F8FAFC;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          border: 1px solid #F1F5F9;
        }
        .wwf-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #FF462E;
          color: #FFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .wwf-card-title {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #1E293B;
          margin: 0 0 6px 0;
        }
        .wwf-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          line-height: 1.6;
          color: #64748B;
          margin: 0;
        }
        .wwf-footer-note {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          line-height: 1.6;
          color: #888888;
          text-align: center;
          max-width: 640px;
          margin: 0 auto;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          {/* Solution Paragraph */}
          <div className="sol-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Solution" />
            </Box>
            <p className="sol-body">
              Tackling multi-branch restaurant inefficiencies with an integrated platform offering real-time notifications, simplified campaign setup, and a user-friendly interface. Integrated delivery management, sales reporting, and pre-order/scheduled order capabilities empower managers to optimize operations and enhance customer experience. By streamlining processes and leveraging data-driven insights, our platform drives efficiency, boosts sales, and strengthens customer loyalty across all locations.
            </p>
          </div>

          {/* Data from the user Section */}
          <div ref={dfuRef} style={{ marginBottom: '64px' }}>
            <style>{`
              .dfu-title {
                font-family: 'Inter', sans-serif;
                font-size: clamp(22px, 4vw, 32px);
                font-weight: 700;
                color: #111;
                margin: 0 0 32px 0;
                letter-spacing: -0.02em;
                text-align: center;
              }
              .dfu-layout {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 40px;
                align-items: center;
                max-width: 720px;
                margin: 0 auto;
              }
              @media (max-width: 700px) {
                .dfu-layout { grid-template-columns: 1fr; gap: 28px; }
              }
              .dfu-bar-row {
                display: flex;
                flex-direction: column;
                gap: 10px;
              }
              .dfu-bar-item {
                display: flex;
                align-items: center;
                gap: 10px;
              }
              .dfu-bar-track {
                flex: 1;
                height: 28px;
                background: #F1F5F9;
                border-radius: 6px;
                overflow: hidden;
              }
              .dfu-bar-fill {
                height: 100%;
                min-width: 0;
                overflow: hidden;
                background: #FF462E;
                border-radius: 6px;
                display: flex;
                align-items: center;
                transition: width 0.9s ease;
                padding: 0 10px;
              }
              .dfu-bar-label {
                font-family: 'Inter', sans-serif;
                font-size: 11px;
                font-weight: 500;
                color: #fff;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              .dfu-feature-list {
                display: flex;
                flex-direction: column;
                gap: 14px;
              }
              .dfu-feature-item {
                display: flex;
                align-items: center;
                gap: 12px;
              }
              .dfu-feature-dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #FF462E;
                flex-shrink: 0;
              }
              .dfu-feature-text {
                font-family: 'Inter', sans-serif;
                font-size: 13.5px;
                color: #444;
                font-weight: 500;
              }
            `}</style>
            <h2 className="dfu-title">Data from the user</h2>
            <div className="dfu-layout">
              {/* Bar Chart */}
              <div className="dfu-bar-row">
                {[
                  { label: '79% wants live feature', pct: 79 },
                  { label: '86% of the users want this', pct: 86 },
                  { label: '66% users want realtime notification', pct: 66 },
                  { label: '100% all want this', pct: 100 },
                  { label: '79% of the owners want this', pct: 79 },
                  { label: '100% of the managers needed', pct: 100 },
                  { label: '9% of the heavy this', pct: 9 },
                  { label: '100% of the users want it user friendly', pct: 100 },
                ].map((row, i) => (
                  <div key={i} className="dfu-bar-item">
                    <div className="dfu-bar-track">
                      <div className="dfu-bar-fill" style={{ width: dfuVisible ? `${row.pct}%` : '0%' }}>
                        <span className="dfu-bar-label">{row.label}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Feature List */}
              <div className="dfu-feature-list">
                {[
                  'Graphical dashboard',
                  'Orders followup',
                  'Realtime notification',
                  'Product setup',
                  'Customer management',
                  'Sales report',
                  'Campaign setup',
                  'Dedicated mobile app',
                ].map((feat, i) => (
                  <div key={i} className="dfu-feature-item">
                    <div className="dfu-feature-dot" />
                    <span className="dfu-feature-text">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* User Photo Section */}
          <div style={{ width: '100%', marginBottom: '64px' }}>
            <img
              src="/assets/ateats/ateats5.png"
              alt="atEats user research"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }}
            />
          </div>

          {/* What was found Header */}
          <h2 className="wwf-title">What was found</h2>
          <p className="wwf-subtext">
            Aligning with user preferences and needs, the revised decision include
          </p>

          {/* Features Grid */}
          <div className="wwf-card-grid">
            {features.map((f, i) => (
              <div key={i} className="wwf-card">
                <div className="wwf-icon">{f.icon}</div>
                <div>
                  <h3 className="wwf-card-title">{f.title}</h3>
                  <p className="wwf-card-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="wwf-footer-note">
            These decisions collectively enrich atEats, catering to user preferences while optimizing smooth restaurant operation experience.
          </p>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Design System / Assets Section (Coded UI) ──────────────── */
function AteatsDesignSystemSection() {
  const brandColors = [
    { label: 'Primary', sub: 'used for business operations', hex: '#0D8370' },
    { label: 'Secondary', sub: 'used for analytics & system', hex: '#18A0FB' },
    { label: 'Primary', sub: 'used for customer applications', hex: '#E60049' },
    { label: 'Secondary', sub: 'used for promotional items', hex: '#FF6600' },
    { label: 'Warning', sub: 'alerts & warning states', hex: '#E6A100' },
    { label: 'Hot Content', sub: 'promotions & hot content', hex: '#FF0000' },
    { label: 'Success', sub: 'for successful actions', hex: '#00A859' },
    { label: 'In progress', sub: 'for in-progress tasks', hex: '#8E44AD' },
  ]

  const neutralColors = [
    { label: 'Title Active', sub: 'used for main heading text', hex: '#1F2937' },
    { label: 'Body', sub: 'used for main body text', hex: '#4B5563' },
    { label: 'Label', sub: 'used for sub-label text', hex: '#6B7280' },
    { label: 'Placeholder', sub: 'used for placeholder text', hex: '#9CA3AF' },
    { label: 'Line', sub: 'used for line border elements', hex: '#D1D5DB' },
    { label: 'Input Background', sub: 'used for input bg containers', hex: '#F3F4F6' },
    { label: 'Background', sub: 'used for page backgrounds', hex: '#F9FAFB' },
    { label: 'Off-white', sub: 'used for card & module container', hex: '#FFFFFF' },
  ]

  const spacingValues = [2, 4, 8, 12, 16, 24, 32, 48, 56, 64, 96, 128, 160]

  const typographyData = [
    { size: '12px', rem: '3rem', lh: '1.4', lead: '16.8pt', track: '-0.01pt' },
    { size: '14px', rem: '3rem', lh: '1.4', lead: '19.6pt', track: '-0.01pt' },
    { size: '16px', rem: '3rem', lh: '1.5', lead: '24pt', track: '0pt' },
    { size: '18px', rem: '3rem', lh: '1.5', lead: '27pt', track: '0pt' },
    { size: '20px', rem: '3rem', lh: '1.4', lead: '28pt', track: '-0.01pt' },
    { size: '24px', rem: '3rem', lh: '1.3', lead: '31.2pt', track: '-0.02pt' },
    { size: '32px', rem: '3rem', lh: '1.25', lead: '40pt', track: '-0.02pt' },
    { size: '40px', rem: '3rem', lh: '1.2', lead: '48pt', track: '-0.02pt' },
    { size: '48px', rem: '3rem', lh: '1.15', lead: '55.2pt', track: '-0.03pt' },
    { size: '64px', rem: '3rem', lh: '1.1', lead: '70.4pt', track: '-0.03pt' },
  ]

  const designSystemIconItems = [
    { name: 'home', stroke: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />, fill: <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /> },
    { name: 'wallet', stroke: <><rect x="2" y="4" width="20" height="16" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></>, fill: <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V12h16v6zm0-10H4V6h16v2z" /> },
    { name: 'store', stroke: <path d="M3 9l2-5h14l2 5M3 9v10a2 2 0 002 2h14a2 2 0 002-2V9M3 9h18" />, fill: <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4L3 12v2h1v6h12v-6h4v6h2v-6h1zm-10 4H7v-4h4v4z" /> },
    { name: 'map-pin', stroke: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>, fill: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /> },
    { name: 'cart', stroke: <><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" /></>, fill: <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /> },
    { name: 'info', stroke: <><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></>, fill: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /> },
    { name: 'user', stroke: <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></>, fill: <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /> },
    { name: 'package', stroke: <><path d="M12.89 1.45l8 4A2 2 0 0122 7.24v9.53a2 2 0 01-1.11 1.79l-8 4a2 2 0 01-1.79 0l-8-4a2 2 0 01-1.1-1.8V7.24a2 2 0 011.11-1.79l8-4a2 2 0 011.78 0z" /><polyline points="2.32 6.16 12 11 21.68 6.16" /><line x1="12" y1="22.76" x2="12" y2="11" /></>, fill: <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L18.8 8 12 11.2 5.2 8 12 4.8zM4 9.4l7 3.3v7.3l-7-3.5V9.4zm16 7.1l-7 3.5v-7.3l7-3.3v7.1z" /> },
    { name: 'list', stroke: <><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><circle cx="4" cy="6" r="1" /><circle cx="4" cy="12" r="1" /><circle cx="4" cy="18" r="1" /></>, fill: <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" /> },
    { name: 'clock', stroke: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>, fill: <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /> },
    { name: 'filter', stroke: <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />, fill: <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" /> },
    { name: 'building', stroke: <><path d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 9h6M9 13h6M9 17h6" /></>, fill: <path d="M12 7V3H2v18h20V7H12zm-2 12H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V9h6v2zm0-4H4V5h6v2zm10 12h-8V9h8v10zm-2-8h-4v2h4v-2zm0 4h-4v2h4v-2z" /> },
    { name: 'heart', stroke: <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />, fill: <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /> },
    { name: 'bell', stroke: <><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" /></>, fill: <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /> },
    { name: 'briefcase', stroke: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></>, fill: <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" /> },
    { name: 'tag', stroke: <><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></>, fill: <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" /> },
    { name: 'ticket', stroke: <path d="M3 9a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 000 4v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 000-4V9z" />, fill: <path d="M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z" /> },
    { name: 'chat', stroke: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />, fill: <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" /> },
    { name: 'settings', stroke: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" /></>, fill: <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" /> },
    { name: 'credit-card', stroke: <><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></>, fill: <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" /> },
    { name: 'navigation', stroke: <polygon points="3 11 22 2 13 21 11 13 3 11" />, fill: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-3.5h3.5l-6.5-6.5v3.5H6.5l6.5 6.5z" /> },
    { name: 'home-alt', stroke: <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />, fill: <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /> },
    { name: 'briefcase-alt', stroke: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></>, fill: <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" /> },
    { name: 'map-pin-alt', stroke: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>, fill: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /> },
    { name: 'gift', stroke: <><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" /></>, fill: <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1h-2.12l1.43-1.71c.19-.23.43-.29.69-.29zM9 4c.26 0 .5.06.69.29L11.12 6H9c-.55 0-1-.45-1-1s.45-1 1-1zm11 15H4V8h16v11z" /> },
    { name: 'help', stroke: <><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></>, fill: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" /> },
    { name: 'users', stroke: <><path d="M17 21v-2a4 4 0 00-3-3.87" /><path d="M9 21v-2a4 4 0 00-4-4H3a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></>, fill: <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /> },
    { name: 'shield-check', stroke: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></>, fill: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" /> },
    { name: 'file-text', stroke: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></>, fill: <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" /> },
    { name: 'file-plus', stroke: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" /></>, fill: <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm0 9h-2v-3H8v-2h3v-3h2v3h3v2h-3v3z" /> },
    { name: 'dollar', stroke: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></>, fill: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 12v1c0 1.1.9 2 2 2v1.93zm4.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2 .9 2 2v1.5c0 1.1-.9 2-2 2h-1v2h1.9c1.07 0 1.95.83 2 1.9.03.3.01.6-.07.9-.11.41-.33.78-.63 1.09z" /> },
    { name: 'file-check', stroke: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><polyline points="9 15 11 17 15 13" /></>, fill: <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-2.5 9L6.5 15l1.41-1.41L10.5 15.17l5.59-5.59L17.5 11l-7 7z" /> },
  ]

  return (
    <Box
      component="section"
      className="ateats-ds-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 60px' } as FramerStyle}
    >
      <style>{`
        .ads-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 24px;
        }
        @media (max-width: 700px) {
          .ads-grid { grid-template-columns: 1fr; gap: 20px; margin-bottom: 16px; }
        }
        .ads-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 700;
          color: #111;
          margin: 0 0 48px 0;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        @keyframes adsBellRing {
          0% { transform: rotate(0); }
          10% { transform: rotate(15deg); }
          20% { transform: rotate(-10deg); }
          30% { transform: rotate(5deg); }
          40% { transform: rotate(-5deg); }
          50% { transform: rotate(0); }
          100% { transform: rotate(0); }
        }
        .ads-bell {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          transform-origin: top center;
          animation: adsBellRing 3s infinite ease-in-out;
        }
        .ads-content-row {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 48px;
          align-items: start;
          margin-bottom: 60px;
        }
        @media (max-width: 950px) {
          .ads-content-row { grid-template-columns: 1fr; gap: 40px; }
        }
        .ads-swatch-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }
        @media (max-width: 600px) {
          .ads-swatch-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .ads-swatch-card {
          background: #FFF;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        }
        .ads-swatch-color {
          height: 70px;
          width: 100%;
          display: flex;
          align-items: flex-end;
          padding: 8px 12px;
          box-sizing: border-box;
        }
        .ads-swatch-circles {
          display: flex;
          gap: 6px;
        }
        .ads-circle {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
        }
        .ads-swatch-info {
          padding: 10px 12px;
          font-family: 'Inter', sans-serif;
        }
        .ads-swatch-label {
          font-size: 13px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 2px 0;
        }
        .ads-swatch-sub {
          font-size: 10px;
          color: #9CA3AF;
          margin: 0;
          line-height: 1.3;
        }

        /* Sidebar Preview Component */
        .ads-sidebar-preview {
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.04);
          font-family: 'Inter', sans-serif;
        }
        .ads-search-box {
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: #9CA3AF;
          font-size: 13px;
          margin-bottom: 24px;
        }
        .ads-menu-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 6px;
        }
        .ads-menu-item.active {
          background: #0D8370;
          color: #FFFFFF;
        }
        .ads-menu-item.active-light {
          background: #E6F4F1;
          color: #0D8370;
        }
        .ads-menu-header {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #9CA3AF;
          text-transform: uppercase;
          margin: 20px 0 10px 12px;
        }
        .ads-sub-menu {
          padding-left: 32px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 12px;
          font-size: 12.5px;
          color: #6B7280;
        }
        .ads-sub-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4px 0;
        }
        .ads-badge {
          background: #E5E7EB;
          color: #4B5563;
          font-size: 10px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 100px;
        }

        /* Icons Grid */
        .ads-icons-title {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 20px 0;
        }
        .ads-icons-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          align-items: center;
          margin-bottom: 60px;
        }
        .ads-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0D8370;
          transition: transform 0.2s ease;
        }
        .ads-icon-box.red-bg {
          background: #FF462E;
          border-color: #FF462E;
          color: #FFFFFF;
        }

        /* Spacing System (100% Matching Reference Image) */
        .ads-spacing-section {
          margin-bottom: 80px;
          font-family: 'Inter', sans-serif;
        }
        .ads-spacing-title {
          font-size: 26px;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 40px 0;
          letter-spacing: -0.02em;
        }
        .ads-sp-wrap {
          display: flex;
          flex-direction: column;
          gap: 54px;
          width: 100%;
        }
        
        /* Row 1: Top Dashed Line + Items 2..96 (100% Full Width Spread) */
        .ads-sp-row-top {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          padding-top: 2px;
        }
        .ads-sp-dashed-line-top {
          position: absolute;
          top: 28px;
          left: 0;
          right: 0;
          height: 1px;
          border-top: 1.5px dashed #CBD5E1;
          z-index: 1;
        }
        .ads-sp-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          z-index: 2;
        }
        .ads-sp-col:last-child {
          align-items: flex-end;
        }
        .ads-sp-num {
          font-size: 13px;
          font-weight: 600;
          color: #475569;
          margin-bottom: 12px;
          height: 16px;
          line-height: 16px;
          display: block;
        }
        .ads-sp-block {
          background: #BEB7AD;
          border-radius: 1px;
        }

        /* Row 2: Items 128 & 160 + Bottom Dashed Line */
        .ads-sp-row-bottom {
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .ads-sp-row-bottom-items {
          display: flex;
          gap: 80px;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        .ads-sp-dashed-line-bottom {
          width: 100%;
          height: 1px;
          border-top: 1.5px dashed #CBD5E1;
        }

        /* Typography (OUTFIT) */
        .ads-typo-section {
          margin-bottom: 40px;
        }
        .ads-typo-title {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 20px 0;
        }
        .ads-typo-card {
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          overflow-x: auto;
          background: #FFF;
          box-shadow: 0 4px 16px rgba(0,0,0,0.02);
        }
        .ads-typo-table {
          width: 100%;
          min-width: 960px;
          border-collapse: collapse;
          text-align: left;
          font-family: 'Inter', sans-serif;
        }
        .ads-typo-table th {
          background: #F8FAFC;
          padding: 16px 20px;
          font-size: 13px;
          font-weight: 700;
          color: #1E293B;
          border-bottom: 1px solid #E5E7EB;
        }
        .ads-typo-table td {
          padding: 14px 20px;
          font-size: 13px;
          color: #4B5563;
          border-bottom: 1px solid #F1F5F9;
        }
        .ads-typo-table tr:last-child td {
          border-bottom: none;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="ads-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Design system" />
            </Box>
          </div>

          <h2 className="ads-title">
            <span className="ads-bell">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" style={{ flexShrink: 0 }} aria-hidden="true">
                <path fill="#F59E0B" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
              </svg>
            </span> Assets
          </h2>

          <div className="ads-content-row">
            {/* Color Palettes Grid */}
            <div>
              {/* Brand Swatches */}
              <div className="ads-swatch-grid">
                {brandColors.map((c, i) => (
                  <div key={i} className="ads-swatch-card">
                    <div className="ads-swatch-color" style={{ background: c.hex }}>
                      <div className="ads-swatch-circles">
                        <span className="ads-circle" />
                        <span className="ads-circle" />
                      </div>
                    </div>
                    <div className="ads-swatch-info">
                      <h4 className="ads-swatch-label">{c.label}</h4>
                      <p className="ads-swatch-sub">{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Neutral Swatches */}
              <div className="ads-swatch-grid">
                {neutralColors.map((c, i) => (
                  <div key={i} className="ads-swatch-card">
                    <div
                      className="ads-swatch-color"
                      style={{
                        background: c.hex,
                        borderBottom: c.hex === '#FFFFFF' ? '1px solid #E5E7EB' : 'none',
                      }}
                    >
                      <div className="ads-swatch-circles">
                        <span className="ads-circle" style={{ background: c.hex === '#FFFFFF' ? '#D1D5DB' : 'rgba(255,255,255,0.4)' }} />
                        <span className="ads-circle" style={{ background: c.hex === '#FFFFFF' ? '#D1D5DB' : 'rgba(255,255,255,0.4)' }} />
                      </div>
                    </div>
                    <div className="ads-swatch-info">
                      <h4 className="ads-swatch-label">{c.label}</h4>
                      <p className="ads-swatch-sub">{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* POS Sidebar Preview */}
            <div className="ads-sidebar-preview">
              <div className="ads-search-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                <span>Search your favorites</span>
              </div>

              <div className="ads-menu-item">
                <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                  Dashboard
                </span>
              </div>

              <div className="ads-menu-header">POS MANAGEMENT</div>

              <div className="ads-menu-item active">
                <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                  POS
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15" /></svg>
              </div>

              <div className="ads-sub-menu">
                <span>New Sale</span>
                <span>POS Orders</span>
              </div>

              <div className="ads-menu-header">ORDER MANAGEMENT</div>

              <div className="ads-menu-item">
                <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                  Verify Offline Payment
                </span>
              </div>

              <div className="ads-menu-item active-light">
                <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                  Order
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15" /></svg>
              </div>

              <div className="ads-sub-menu">
                <div className="ads-sub-item"><span>All</span><span className="ads-badge">100</span></div>
                <div className="ads-sub-item"><span>Pending</span><span className="ads-badge">100</span></div>
                <div className="ads-sub-item"><span>Confirmed</span><span className="ads-badge">100</span></div>
                <div className="ads-sub-item"><span>Processing</span><span className="ads-badge">100</span></div>
                <div className="ads-sub-item"><span>Out For Delivery</span><span className="ads-badge">100</span></div>
              </div>
            </div>
          </div>

          {/* Icons Sets - 3 Style Rows matching reference image */}
          <div className="ads-icons-section">
            <h3 className="ads-icons-title">Icons</h3>
            <div className="ads-icons-rows">
              {/* Row 1: Outline Dark Icons */}
              <div className="ads-icons-row">
                {designSystemIconItems.map((item, idx) => (
                  <div key={`outline-${idx}`} className="ads-icon-box outline-box" title={item.name}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      {item.stroke}
                    </svg>
                  </div>
                ))}
              </div>

              {/* Row 2: Filled Red / Crimson Icons */}
              <div className="ads-icons-row">
                {designSystemIconItems.map((item, idx) => (
                  <div key={`red-${idx}`} className="ads-icon-box red-fill-box" title={item.name}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      {item.fill}
                    </svg>
                  </div>
                ))}
              </div>

              {/* Row 3: Filled Teal Icons */}
              <div className="ads-icons-row">
                {designSystemIconItems.map((item, idx) => (
                  <div key={`teal-${idx}`} className="ads-icon-box teal-fill-box" title={item.name}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      {item.fill}
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Spacing System — 100% Coded UI Matching Reference Image */}
          <div className="ads-spacing-section">
            <h3 className="ads-spacing-title">Spacing system</h3>
            <div className="ads-sp-wrap">
              {/* Row 1: Items 2 to 96 + Top Dashed Line */}
              <div className="ads-sp-row-top">
                <div className="ads-sp-dashed-line-top" />
                {spacingValues.slice(0, 11).map((val) => {
                  let size = 2
                  if (val === 2) size = 2
                  else if (val === 4) size = 4
                  else if (val === 8) size = 7
                  else if (val === 12) size = 11
                  else if (val === 16) size = 15
                  else if (val === 24) size = 22
                  else if (val === 32) size = 30
                  else if (val === 48) size = 44
                  else if (val === 56) size = 52
                  else if (val === 64) size = 60
                  else if (val === 96) size = 86

                  return (
                    <div key={val} className="ads-sp-col">
                      <span className="ads-sp-num">{val}</span>
                      <div
                        className="ads-sp-block"
                        style={{ width: size, height: size }}
                      />
                    </div>
                  )
                })}
              </div>

              {/* Row 2: Items 128 & 160 + Bottom Dashed Line */}
              <div className="ads-sp-row-bottom">
                <div className="ads-sp-row-bottom-items">
                  {spacingValues.slice(11).map((val) => {
                    const size = val === 128 ? 112 : 138
                    return (
                      <div key={val} className="ads-sp-col">
                        <span className="ads-sp-num">{val}</span>
                        <div
                          className="ads-sp-block"
                          style={{ width: size, height: size }}
                        />
                      </div>
                    )
                  })}
                </div>
                <div className="ads-sp-dashed-line-bottom" />
              </div>
            </div>
          </div>

          {/* Typography (OUTFIT) */}
          <div className="ads-typo-section">
            <h3 className="ads-typo-title">Typography (OUTFIT)</h3>
            <div className="ads-typo-card">
              <table className="ads-typo-table">
                <thead>
                  <tr>
                    <th>Regular</th>
                    <th>SemiBold</th>
                    <th>Bold</th>
                    <th>Line height</th>
                    <th>Size in rem</th>
                    <th>Size in px</th>
                    <th>Leading (points)</th>
                    <th>Tracking (points)</th>
                  </tr>
                </thead>
                <tbody>
                  {typographyData.map((t, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 400 }}>Sample Text</td>
                      <td style={{ fontWeight: 600 }}>Sample Text</td>
                      <td style={{ fontWeight: 700 }}>Sample Text</td>
                      <td>{t.lh}</td>
                      <td>{t.rem}</td>
                      <td style={{ fontWeight: 700, color: '#0D8370' }}>{t.size}</td>
                      <td>{t.lead}</td>
                      <td>{t.track}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Mobile Showcase Section (with atstart1.png, atstart2.png, atstart3.png) ───── */
function AteatsMobileShowcaseSection() {
  return (
    <Box
      component="section"
      className="ateats-mobile-section"
      style={{ padding: '80px 0 100px', overflow: 'hidden' } as FramerStyle}
    >
      <style>{`
        .ateats-mobile-section {
          width: 100%;
          margin: 0 auto;
        }
        .ams-banner {
          position: relative;
          background: #000000;
          border-radius: 0;
          padding: 20px 24px 80px;
          overflow: hidden;
          min-height: 680px;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
        }
        .ams-header {
          text-align: center;
          margin-bottom: 54px;
          width: 100%;
        }
        .ams-logo {
          font-family: 'Inter', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #EF4444;
          margin: 0 auto 12px auto;
          text-align: center;
          letter-spacing: -0.02em;
        }
        .ams-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(28px, 4.5vw, 44px);
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 auto;
          line-height: 1.25;
          text-align: center;
          letter-spacing: -0.02em;
        }
        .ams-middle-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .ams-devices-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.3fr;
          gap: 48px;
          align-items: flex-start;
          position: relative;
          z-index: 2;
          max-width: 100%;
          margin: 0 auto;
        }
        @media (max-width: 1000px) {
          .ams-devices-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        /* Web / Tablet Mockup Frame (atstart1.png) */
        .ams-tablet-frame {
          width: 100%;
          max-width: 560px;
          border-radius: 20px;
          transition: transform 0.3s ease;
          margin-top: 10px;
        }
        .ams-tablet-frame:hover {
          transform: translateY(-4px);
        }
        .ams-tablet-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 14px;
        }

        /* Right Column: Title + 2 Phone Frames */
        .ams-right-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .ams-phones-wrap {
          display: flex;
          gap: 32px;
          align-items: flex-start;
        }
        @media (max-width: 650px) {
          .ams-phones-wrap {
            flex-direction: column;
            gap: 24px;
          }
        }

        /* Phone Frame (260px width matching reference) */
        .ams-phone-frame {
          width: 260px;
          border-radius: 36px;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }
        .ams-phone-frame:hover {
          transform: translateY(-6px);
        }
        .ams-phone-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 30px;
        }

        /* Decorative Plant Accent (Bottom Left) */
        .ams-plant {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 260px;
          height: auto;
          z-index: 1;
          pointer-events: none;
          opacity: 1;
        }
      `}</style>
      <Box style={container}>
        <div className="ams-banner">
          {/* Centered Header Text */}
          <div className="ams-header">
            <h2 className="ams-logo">atEats</h2>
            <h3 className="ams-title">
              Introducing atEats<br />latest mobile app version
            </h3>
          </div>

          <div className="ams-devices-grid">
            {/* Left Column: Web App Screen (atstart1.png) */}
            <div className="ams-tablet-frame">
              <img
                src="/assets/ateats/atstart1.png"
                alt="atEats Web & POS Dashboard"
                className="ams-tablet-img"
              />
            </div>

            {/* Right Column: "Let's Start!" Title + 2 iPhone Screens (atstart2.png & atstart3.png) */}
            <div className="ams-right-content">
              <h2 className="ams-middle-title">Let's Start!</h2>

              <div className="ams-phones-wrap">
                {/* Phone 1: atstart2.png (260px wide) */}
                <div className="ams-phone-frame">
                  <img
                    src="/assets/ateats/atstart2.png"
                    alt="atEats Mobile Home Screen"
                    className="ams-phone-img"
                  />
                </div>

                {/* Phone 2: atstart3.png (260px wide) */}
                <div className="ams-phone-frame">
                  <img
                    src="/assets/ateats/atstart3.png"
                    alt="atEats Mobile Item Detail Screen"
                    className="ams-phone-img"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Plant Graphic (plant.png) */}
          <img
            src="/assets/ateats/plant.png"
            alt="Decorative Plant"
            className="ams-plant"
          />
        </div>
      </Box>
    </Box>
  )
}
function RealtimeTrackingSection() {
  return (
    <Box
      component="section"
      className="realtime-tracking-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 80px' } as FramerStyle}
    >
      <style>{`
        .rt-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 6vw, 56px);
          font-weight: 700;
          color: #111;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
          text-align: center;
        }
        .rt-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2.2vw, 15px);
          line-height: 1.7;
          color: #666666;
          text-align: center;
          max-width: 680px;
          margin: 0 auto 60px;
        }
        .rt-images-wrap {
          display: flex;
          gap: 32px;
          justify-content: center;
          align-items: stretch;
          flex-wrap: wrap;
        }
        .rt-image-card {
          width: 48%;
          min-width: 260px;
          max-width: 420px;
          background: #FFFFFF;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #E2E8F0;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          transition: box-shadow 0.3s ease;
          padding: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rt-image-card:first-child {
          background: #000000;
          padding: 50px 28px;
          height: 600px;
          position: relative;
        }
        .rt-image-card:first-child img {
          position: absolute;
          top: 84px;
          left: 28px;
          width: calc(100% - 56px);
          height: auto;
        }
        .rt-image-card:last-child {
          position: relative;
          width: 100%;
          height: auto;
          padding: 0;
          overflow: hidden;
          border-radius: 34px;
        }

        .rt-image-card:last-child img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .rt-image-card:hover {
          box-shadow: 0 24px 64px rgba(0,0,0,0.12);
        }
        .rt-image-card img {
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 10px;
          display: block;
        }
        @media (max-width: 700px) {
          .rt-images-wrap { flex-direction: column; align-items: center; }
          .rt-image-card {
            width: 100%;
            min-width: 0;
            border-radius: 12px;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
            height: auto;
            padding: 14px;
          }
          .rt-image-card:first-child img,
          .rt-image-card:last-child img {
            position: static;
            width: 100%;
            height: auto;
            top: auto;
            bottom: auto;
          }
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <h2 className="rt-title">Realtime tracking</h2>
          <p className="rt-subtitle">
            Customers track their orders every stage, from placement to delivery, ensuring transparency and reducing anxiety. The real-time updates improved customer engagement and decreased support queries related to order status.
          </p>

          <div className="rt-images-wrap">
            <div className="rt-image-card">
              <img src="/ateats%202/phone1.png" alt="atEats order tracking — order list view" loading="lazy" />
            </div>
            <div className="rt-image-card">
              <img src="/ateats%202/phone2.png" alt="atEats order tracking — order detail view" loading="lazy" />
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Dynamic Menu Optimisation Section (Fully Coded UI) ─────── */
function DynamicMenuOptimisationSection() {
  return (
    <Box
      component="section"
      className="dynamic-menu-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 100px' } as FramerStyle}
    >
      <style>{`
        .dmo-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          color: #0F172A;
          line-height: 1.2;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
          text-align: center;
        }
        .dmo-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2vw, 15px);
          line-height: 1.7;
          color: #64748B;
          margin: 0 auto 48px;
          max-width: 680px;
          text-align: center;
        }
        .dmo-images-wrap {
          display: flex;
          gap: 32px;
          justify-content: center;
          align-items: stretch;
          flex-wrap: wrap;
        }
        .dmo-image-card {
          width: 48%;
          min-width: 300px;
          max-width: 500px;
          border-radius: 16px;
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }
        .dmo-image-card:first-child {
          margin-top: 40px;
        }
        .dmo-image-card:last-child {
          margin-top: auto;
          margin-bottom: 40px;
        }
        .dmo-image-card img {
          width: auto;
          height: auto;
          object-fit: cover;
          display: block;
        }
        @media (max-width: 700px) {
          .dmo-images-wrap { flex-direction: column; align-items: center; }
          .dmo-image-card { width: 100%; min-width: 0; border-radius: 12px; margin-top: 0 !important; margin-bottom: 0 !important; }
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <h2 className="dmo-title">Dynamic Menu Optimisation</h2>
          <p className="dmo-desc">
            Real-time menu optimization system that dynamically updates offerings based on customer reviews and feedback, ensuring a more personalized and responsive dining experience.
          </p>

          <div className="dmo-images-wrap">
            <div className="dmo-image-card">
              <img src="/ateats%202/Item view screen 1.png" alt="atEats dynamic menu — optimized menu display" loading="lazy" />
            </div>
            <div className="dmo-image-card">
              <img src="/ateats%202/Item view screen 1.png" alt="atEats dynamic menu — optimized and ratings panel" loading="lazy" />
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Seamless Switching Section (Fully Coded UI) ──────────────── */
function SeamlessSwitchingSection() {
  return (
    <Box
      component="section"
      className="seamless-switching-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 80px' } as FramerStyle}
    >
      <style>{`
        .ss-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 6vw, 56px);
          font-weight: 700;
          color: #111;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
          text-align: center;
        }
        .ss-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2.2vw, 15px);
          line-height: 1.7;
          color: #666666;
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }
        .ss-devices-row {
          display: flex;
          gap: 32px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .ss-phone {
          width: 260px;
          background: #000;
          border-radius: 36px;
          padding: 10px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          font-family: 'Inter', sans-serif;
        }
        .ss-phone-screen {
          background: #FFFFFF;
          border-radius: 28px;
          padding: 14px 12px;
          min-height: 480px;
          display: flex;
          flex-direction: column;
        }
        .ss-notch {
          width: 70px;
          height: 14px;
          background: #000;
          border-radius: 100px;
          margin: 0 auto 12px;
        }
        .ss-branch-card {
          background: #FFFFFF;
          border: 1px solid #F1F5F9;
          border-radius: 12px;
          padding: 12px;
          margin-bottom: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        }
        .ss-branch-active {
          border-color: #EF4444;
          background: #FEF2F2;
        }
        .ss-stat-row {
          display: flex;
          gap: 8px;
          margin-top: 6px;
        }
        .ss-stat {
          background: #F8FAFC;
          border-radius: 6px;
          padding: 4px 8px;
          font-size: 9px;
          font-weight: 600;
          color: #475569;
        }
        .ss-stat.green { color: #059669; background: #F0FDF4; }
        .ss-stat.red { color: #EF4444; background: #FEF2F2; }
        .ss-phone-right {
          width: 240px;
          background: #FFFFFF;
          border-radius: 28px;
          padding: 14px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
          border: 1px solid #E2E8F0;
          font-family: 'Inter', sans-serif;
        }
        .ss-image-card {
          width: 48%;
          min-width: 240px;
          max-width: 360px;
          border-radius: 16px;
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }
        .ss-image-card:hover {
          box-shadow: 0 24px 64px rgba(0,0,0,0.12);
        }
        .ss-image-card img {
          width: 100%;
          height: auto;
          display: block;
        }
        @media (max-width: 700px) {
          .ss-devices-row { flex-direction: column; align-items: center; }
          .ss-image-card { width: 100%; min-width: 0; }
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <h2 className="ss-title">Seamless Switching</h2>
          <p className="ss-subtitle">
            Built-in multi-branch management system that allows users to switch between different branches within the same application, ensuring a unified experience across all locations and operations.
          </p>

          <div className="ss-devices-row">
            <div className="ss-image-card">
              <img src="/ateats%202/phone4.png" alt="atEats seamless switching — branch switcher" loading="lazy" />
            </div>
            <div className="ss-image-card">
              <img src="/ateats%202/Home%201.png" alt="atEats seamless switching — branch detail preview" loading="lazy" />
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}


/* ─── Testing Section ─────────────────────────── */
function AteatsTestingSection() {
  return (
    <Box
      component="section"
      className="ateats-testing-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 100px' } as FramerStyle}
    >
      <style>{`
        .atest-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 60px;
        }
        @media (max-width: 700px) {
          .atest-grid { grid-template-columns: 1fr; gap: 20px; margin-bottom: 36px; }
        }
        .atest-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2.2vw, 15px);
          line-height: 1.75;
          color: #666666;
          margin: 0;
          max-width: 820px;
        }
        .atest-highlight {
          font-weight: 400;
          color: #666666;
        }
        
/* Testing Section Image */
.atest-image-wrap {
  width: 100%;
  max-width: 650px;
  margin: 32px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.atest-image {
  display: block;
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
}

/* Tablet */
@media (max-width: 1024px) {
  .atest-image-wrap {
    max-width: 500px;
    margin: 24px auto;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .atest-image-wrap {
    max-width: 100%;
    padding: 0 16px;
    margin: 20px auto;
    box-sizing: border-box;
  }
}

        .atest-image {
          width: 100%;
          max-width: 820px;
          height: auto;
          display: block;
          object-fit: contain;
          border-radius: 12px;
        }
        @media (max-width: 700px) {
          .atest-body { margin-bottom: 8px; }
          .atest-image-wrap { padding: 0; }
          .atest-image { border-radius: 10px; }
        }
        @media (max-width: 400px) {
          .atest-image { border-radius: 8px; }
          .atest-highlight { font-size: 14px; }
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="atest-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Testing" />
            </Box>
            <p className="atest-body">
              <span className="atest-highlight">Participants for the atEats usability testing phase were selected randomly. Before participating, they signed a consent form after being briefed on the project and testing exercise. The briefing covered task duration, participation risks, withdrawal options, and data collection methods. Participants were guided by a User Testing form, presenting scenarios as stories. They read each scenario and task aloud, imagining themselves as restaurant staff or managers using the atEats system.

                Participants performed tasks on the atEats prototype while thinking aloud, and the entire process (audio/video/screen recording) was recorded. Tasks mirrored real-world scenarios for atEats users. To avoid overload, each participant completed 3-4 tasks. Afterwards, they completed a SUS questionnaire to provide feedback. Interesting comments from the &quot;think aloud&quot; process were explored further to understand the reasoning behind user actions.
              </span>
            </p>
          </div>


          <div className="atest-image-wrap">
            <img
              src="/assets/ateats/ateats-frame.jpg"
              alt="atEats usability testing participants"
              className="atest-image"
              loading="lazy"
              decoding="async"
            />
          </div>

        </Box>
      </Box>
    </Box>
  )
}


/* ─── Results Section (Fully Coded UI) ─────────────────────────── */
function AteatsResultsSection() {
  return (
    <Box
      component="section"
      className="ateats-results-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 100px' } as FramerStyle}
    >
      <style>{`
        .ares-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 60px;
        }
        @media (max-width: 700px) {
          .ares-grid { grid-template-columns: 1fr; gap: 20px; margin-bottom: 36px; }
        }
        .ares-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2.2vw, 15px);
          line-height: 1.75;
          color: #666666;
          margin: 0;
          max-width: 820px;
        }
        .ares-highlight {
          font-weight: 700;
          color: #0F172A;
        }
        .ares-laptop-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .ares-laptop {
          width: 100%;
          max-width: 900px;
          font-family: 'Inter', sans-serif;
        }
        .ares-lid {
          background: #1E293B;
          border-radius: 16px 16px 0 0;
          padding: 10px 10px 0;
          box-shadow: 0 -8px 30px rgba(0,0,0,0.08);
        }
        .ares-screen {
          background: #FFFFFF;
          border-radius: 8px 8px 0 0;
          padding: 16px;
          min-height: 320px;
        }
        .ares-base {
          background: #CBD5E1;
          height: 16px;
          border-radius: 0 0 8px 8px;
          width: 60%;
          margin: 0 auto;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }
        .ares-dash-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid #E2E8F0;
        }
        .ares-stat-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 16px;
        }
        @media (max-width: 600px) {
          .ares-stat-cards { grid-template-columns: repeat(2, 1fr); }
        }
        .ares-stat-card {
          background: #F8FAFC;
          border-radius: 10px;
          padding: 12px;
          border: 1px solid #F1F5F9;
        }
        .ares-charts-row {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 16px;
        }
        @media (max-width: 700px) {
          .ares-charts-row { grid-template-columns: 1fr; }
        }
        .ares-chart-card {
          background: #F8FAFC;
          border: 1px solid #F1F5F9;
          border-radius: 12px;
          padding: 14px;
        }
        .ares-bar {
          background: #E2E8F0;
          border-radius: 4px;
          overflow: hidden;
          height: 14px;
          margin-bottom: 6px;
        }
        .ares-bar-fill {
          height: 100%;
          border-radius: 4px;
        }
        .ares-dashboard-image {
          width: 100%;
          max-width: 8z00px;
          height: auto;
          display: block;
          object-fit: contain;
          border-radius: 12px;
        }
        @media (max-width: 700px) {
          .ares-body { margin-bottom: 8px; }
          .ares-laptop-wrap { padding: 0; }
          .ares-dashboard-image { border-radius: 10px; box-shadow: 0 12px 30px rgba(0,0,0,0.08); }
        }
        @media (max-width: 400px) {
          .ares-dashboard-image { border-radius: 8px; }
          .ares-highlight { font-size: 14px; }
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="ares-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Results" />
            </Box>
            <p className="ares-body">
              <span className="ares-highlight">The atEats platform achieved a SUS score of 82.7%.</span> User testing confirmed that the multi-branch model was intuitively built with Real Measure. Restaurant
              and customers confirmed the delivery experience significantly improved with live tracking, enabling rapid order updates, and strengthened customer trust across all branches.
            </p>
          </div>

          {/* Laptop Mockup with Dashboard */}
          <div className="ares-laptop-wrap">
            <img
              src="/ateats%202/lap.png"
              alt="atEats Dashboard"
              className="ares-dashboard-image"
            />
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Web Dashboard Showcase Section (Fully Coded UI) ──────────── */
function AteatsWebShowcaseSection() {
  return (
    <Box
      component="section"
      className="ateats-web-showcase-section"
      style={{ width: '100%', background: '#F8FAFC', padding: '80px 0 100px' } as FramerStyle}
    >
      <style>{`
        .aws-wrap {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .aws-image-card {
          background: #FFFFFF;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #E2E8F0;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
        }
        .aws-project-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }
        @media (max-width: 700px) {
          .aws-wrap { gap: 24px; }
          .aws-image-card { border-radius: 12px; box-shadow: 0 12px 30px rgba(0,0,0,0.08); }
        }
        @media (max-width: 400px) {
          .aws-image-card { border-radius: 10px; }
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="aws-wrap">

            <div className="aws-image-card">
              <img
                src="/assets/ateats/ateats10.png"
                alt="atEats Admin Dashboard"
                className="aws-project-image"
              />
            </div>

            <div className="aws-image-card">
              <img
                src="/assets/ateats/ateats11.png"
                alt="atEats Customer Website"
                className="aws-project-image"
              />
            </div>

          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── App Screens Showcase Section (Fully Coded UI) ────────────── */
/* --- App Screens Showcase Section ------------------------------ */
function AteatsAppScreensSection() {
  const screens = [
    { src: '/assets/ateats/ateats12.png', alt: 'atEats App Screen 1' },
    { src: '/assets/ateats/ateats13.png', alt: 'atEats App Screen 2' },
    { src: '/assets/ateats/ateats14.png', alt: 'atEats App Screen 3' },
    { src: '/assets/ateats/ateats15.png', alt: 'atEats App Screen 4' },
    { src: '/assets/ateats/ateats16.png', alt: 'atEats App Screen 5' },
    { src: '/assets/ateats/ateats17.png', alt: 'atEats App Screen 6' },
  ]

  return (
    <Box
      component="section"
      className="ateats-app-screens-section"
      style={{ width: '100%', background: '#fff', padding: '40px 0 100px' } as FramerStyle}
    >
      <style>{`
        .aas-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .aas-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (max-width: 560px) {
          .aas-grid { grid-template-columns: 1fr; }
        }
        .aas-image-card {
          background: #FFFFFF;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #E2E8F0;
          box-shadow: 0 12px 32px rgba(0,0,0,0.07);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .aas-image-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 44px rgba(0,0,0,0.1);
        }
        .aas-image-card img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }
        @media (max-width: 700px) {
          .aas-image-card { border-radius: 12px; box-shadow: 0 8px 22px rgba(0,0,0,0.07); }
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="aas-grid">
            {screens.map((s, i) => (
              <div key={i} className="aas-image-card">
                <img src={s.src} alt={s.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* --- Theme & Appearance Showcase Section ----------------------- */
function ThemeAndAppearanceSection() {
  const shots = [
    { src: '/assets/ateats/ateats18.png', alt: 'atEats Theme and Appearance Admin' },
    { src: '/assets/ateats/ateats19.png', alt: 'atEats Theme Preview' },
  ]

  return (
    <Box
      component="section"
      className="ateats-theme-section"
      style={{ width: '100%', background: '#F8FAFC', padding: '40px 0 100px' } as FramerStyle}
    >
      <style>{`
        .ata-wrap {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .ata-image-card {
          background: #FFFFFF;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #E2E8F0;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
        }
        .ata-image-card img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }
        @media (max-width: 700px) {
          .ata-wrap { gap: 24px; }
          .ata-image-card { border-radius: 12px; box-shadow: 0 12px 30px rgba(0,0,0,0.08); }
        }
        @media (max-width: 400px) {
          .ata-image-card { border-radius: 10px; }
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="ata-wrap">
            {shots.map((s, i) => (
              <div key={i} className="ata-image-card">
                <img src={s.src} alt={s.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Responsive Design Section ─────────────────────────────── */
function ResponsiveDesignSection() {
  return (
    <Box
      component="section"
      className="responsive-design-section"
      style={{ width: '100%', background: '#FFFFFF', padding: '80px 0 100px' } as FramerStyle}
    >
      <style>{`
        .rd-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .rd-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        .rd-mockups-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          gap: 20px;
        }
        .rd-image-card {
          width: auto;
          max-width: 220px;
          margin: 0 auto;
          border-radius: 16px;
          overflow: hidden;
        }
        .rd-image-card img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }
        @media (max-width: 700px) {
          .rd-image-card { border-radius: 12px; box-shadow: 0 12px 30px rgba(0,0,0,0.08); }
        }
        .rd-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 5.5vw, 56px);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.1;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
        }
        .rd-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2vw, 15px);
          line-height: 1.75;
          color: #64748B;
          margin: 0;
          max-width: 500px;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="rd-grid">
            {/* Responsive Device Screenshots */}
            <div className="rd-mockups-wrap">
              <div className="rd-image-card">
                <img src="/ateats%202/phone3.png" alt="atEats responsive design on desktop, tablet, and mobile" loading="lazy" width={220} height={220} />
              </div>
            </div>

            {/* Right Text */}
            <div>
              <h2 className="rd-title">Responsive<br />Design</h2>
              <p className="rd-desc">
                Participants tested the solution on a range of devices (desktops, tablets, and smartphones) to evaluate the responsive design. Each viewport was well-received for atEats users.
              </p>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}


/* ─── atEats Live Section ───────────────────────────────────── */
function AteatsLiveSection() {
  return (
    <Box
      component="section"
      className="ateats-live-section"
      style={{ width: '100%', background: '#FFFFFF', padding: '60px 0 80px', textAlign: 'center' } as FramerStyle}
    >
      <style>{`
        .al-tag {
          display: inline-block;
          background: #FFE8EC;
          color: #FF2E55;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 14px;
          border-radius: 100px;
          margin-bottom: 16px;
        }
        .al-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(38px, 6vw, 64px);
          font-weight: 800;
          color: #111111;
          margin: 0 0 16px 0;
          letter-spacing: -0.03em;
        }
        .al-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2.2vw, 15px);
          line-height: 1.7;
          color: #666666;
          max-width: 680px;
          margin: 0 auto 36px;
        }
        .al-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FF462E;
          color: #FFFFFF;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 100px;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(255, 70, 46, 0.3);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .al-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(255, 70, 46, 0.4);
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="al-tag">@ 2025</div>
          <h2 className="al-title">Eats Live®</h2>
          <p className="al-desc">
            Curious to see this project in action? Start your 14-day free trial today at eats.io and will wish to see the designs fictitious.
          </p>
          <a href="https://syopingsolutions.com/eats/" target="_blank" rel="noopener noreferrer" className="al-btn">
            <span>●</span> Take me to Eats →
          </a>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── More Work Section ─────────────────────────────────────── */
/* ─── Main Page Component ───────────────────────────────────── */
function AteatsPage() {
  return (
    <div id="main" className="crunch-page ateats-page">
      <style>{pageResponsiveCss}</style>
      <div className="crunch-side-lines" aria-hidden="true">
        <span className="crunch-side-lines-star crunch-side-lines-star-left" />
        <span className="crunch-side-lines-star crunch-side-lines-star-right" />
      </div>
      <Box component="div" style={{ minHeight: '100vh', width: 'auto' } as FramerStyle}>
        <Navbar />
        <Box component="main">
          <AteatsLiveSection />
          <AteatsHeroSection />
          <SolutionSection />
          <AteatsDesignSystemSection />
          <AteatsMobileShowcaseSection />
          <RealtimeTrackingSection />
          <DynamicMenuOptimisationSection />
          <SeamlessSwitchingSection />
          <AteatsTestingSection />
          <AteatsResultsSection />
          <AteatsWebShowcaseSection />
          <AteatsAppScreensSection />
          <ThemeAndAppearanceSection />
          <ResponsiveDesignSection />
          <MoreWorkMarquee currentPath="/ateats" />
        </Box>
      </Box>
    </div>
  )
}

export default AteatsPage
