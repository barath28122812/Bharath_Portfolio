import Box from '@mui/material/Box'
import { useEffect, useRef, useState } from 'react'
import {
  FaBell,
  FaCalculator,
  FaChartLine,
  FaFlask,
  FaHandshake,
  FaShoppingCart,
  FaSlidersH,
  FaUsers,
} from 'react-icons/fa'
import {
  MdChecklist,
  MdDiamond,
  MdEmojiEvents,
  MdGppGood,
  MdLightbulb,
  MdLink,
  MdSettings,
  MdSwapVert,
} from 'react-icons/md'
import type { FramerStyle } from '../Components/framer'
import Navbar from '../Components/Navbar'
import MoreWorkMarquee from '../Components/MoreWorkMarquee'
import SpriteIcons from '../Components/SpriteIcons'

const container: FramerStyle = { width: '100%', maxWidth: '100%', margin: '0 auto', padding: 0, boxSizing: 'border-box' }
const contentPad: FramerStyle = { padding: '0 24px', boxSizing: 'border-box' }

/* ─── atBooks Live Section ──────────────────────────────────── */
function AtBooksLiveSection() {
  return (
    <Box
      component="section"
      className="atbooks-live-section"
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
          <h2 className="al-title">atBooks Live®</h2>
          <p className="al-desc">
            Curious to see this project in action? Explore the live ERP dashboard built to turn fragmented data into operational clarity.
          </p>
          <a href="https://aaludra.com/products/atbooks/" target="_blank" rel="noopener noreferrer" className="al-btn">
            <span>●</span> Take me to atBooks →
          </a>
        </Box>
      </Box>
    </Box>
  )
}

function AtBooksHero() {
  return (
    <Box component="section" style={{ width: '100%', background: '#fff' } as FramerStyle}>
      <style>{`
        .ab-topbar { display:flex; width:100%; max-width:1400px; margin:0 auto 60px; box-sizing:border-box; justify-content:space-between; align-items:center; padding:16px 24px; border-bottom:1px solid rgba(224,224,224,0.6); font-family:'Inter',sans-serif; font-size:13px; color:#555; }
        .ab-pill { display:inline-flex; align-items:center; gap:8px; padding:6px 16px; border-radius:100px; background:rgba(255,70,46,0.10); color:rgb(255,70,46); font-family:'Inter',sans-serif; font-size:13px; font-weight:600; margin-bottom:24px; }
        .ab-title { font-family:'Inter',sans-serif; font-size:clamp(36px,7vw,80px); font-weight:700; letter-spacing:-0.02em; line-height:1; color:#111; margin:0 0 20px 0; }
        .ab-desc { font-family:'Inter',sans-serif; font-size:15px; line-height:1.65; color:#888; max-width:560px; margin:0 auto; }
      `}</style>
      <Box style={{ ...container, textAlign: 'center' } as FramerStyle}>
        <Box style={{ ...contentPad, paddingTop: 40, paddingBottom: 60 } as FramerStyle}>
          <div className="ab-pill">
            <span style={{ width: 6, height: 6, background: 'rgb(255,70,46)', borderRadius: '50%', display: 'inline-block' }} />
            Case study
          </div>
          <h1 className="ab-title">ERP(atBooks)®</h1>
          <p className="ab-desc">
            Unlock the true potential of your data with a customized ERP system. We design solutions tailored to your unique business needs, transforming fragmented information into strategic assets that drive growth and efficiency.
          </p>
        </Box>
      </Box>
    </Box>
  )
}

function ProblemSection() {
  return (
    <Box component="section" style={{ width: '100%', padding: '0 0 60px', background: '#fff' } as FramerStyle}>
      <style>{`
        .ab-problem-grid { margin-top: 20px; display:grid; grid-template-columns:180px 1fr; gap:48px; align-items:start; margin-bottom:60px; font-family:'Inter',sans-serif; }
        @media(max-width:700px){ .ab-problem-grid{grid-template-columns:1fr;gap:20px;} }
        .ab-problem-label { display:flex; align-items:center; gap:10px; padding-top:4px; }
        .ab-problem-dot { width:12px; height:12px; background:rgb(255,70,46); border-radius:2px; flex-shrink:0; }
        .ab-problem-tag { font-size:14px; font-weight:700; color:#555; }
        .ab-problem-heading { font-family:'Inter',sans-serif; font-size:clamp(20px,2.4vw,28px); font-weight:700; color:#111; margin:0 0 20px 0; line-height:1.35; letter-spacing:-0.01em; word-spacing:0.04em; overflow-wrap:break-word; word-break:normal; hyphens:auto; text-wrap:pretty; -webkit-text-wrap:pretty; }
        .ab-problem-body { font-size:15px; line-height:1.75; color:#666; margin:0; text-wrap:pretty; -webkit-text-wrap:pretty; }
        .ab-logo-wrap { display:flex; justify-content:center; align-items:center; padding:70px 0 60px; }
        .ab-logo-inner { display:flex; align-items:center; gap:20px; }
        .ab-logo-icon { width:72px; height:72px; border-radius:18px; background:linear-gradient(135deg,#2DB87E 0%,#1A9A66 100%); display:flex; align-items:center; justify-content:center; }
        .ab-logo-text { font-family:'Inter',sans-serif; font-size:clamp(40px,7vw,80px); font-weight:700; color:#111; letter-spacing:-0.02em; }
        .ab-macbook-wrap { width:100%; max-width:880px; margin:0 auto; padding:0 24px; }
        .ab-macbook-img { width:100%; height:auto; display:block; }
      `}</style>
      <Box style={{ ...container } as FramerStyle}>
        <Box style={contentPad}>
          <div className="ab-problem-grid">
            <div className="ab-problem-label">
              <span className="ab-problem-dot" />
              <span className="ab-problem-tag">Problem</span>
            </div>
            <div>
              <h2 className="ab-problem-heading">
                From Data Silos to Strategic Assets: Designing and Implementing Customized ERP Solutions for a Data-Driven Organization.
              </h2>
              <p className="ab-problem-body">
                One-size-fits-all ERP systems rarely deliver the promised benefits. Businesses often struggle to adapt their established business models and finely-tuned internal procedures to the constraints of standardized software packages. This can lead to inefficiencies, frustrated employees, and a failure to realise the full potential of the ERP investment. Therefore, effective ERP development demands a deep understanding of the organisation's unique operational needs, its strategic goals, and its existing workflows. A commitment to highly customised solutions, designed to seamlessly integrate with the company's specific requirements, is crucial for success.
              </p>
            </div>
          </div>
        </Box>
        <div className="ab-logo-wrap">
          <div className="ab-logo-inner">
            <div className="ab-logo-icon">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                <rect x="4" y="4" width="16" height="16" rx="4" fill="white" opacity="0.9" />
                <rect x="22" y="4" width="16" height="16" rx="4" fill="white" opacity="0.6" />
                <rect x="4" y="22" width="16" height="16" rx="4" fill="white" opacity="0.6" />
                <rect x="22" y="22" width="16" height="16" rx="4" fill="white" opacity="0.9" />
              </svg>
            </div>
            <span className="ab-logo-text">atBooks</span>
          </div>
        </div>
        <div className="ab-macbook-wrap">
          <img src="/assets/atBook/atbook1.png" alt="atBooks ERP dashboard" className="ab-macbook-img" />
        </div>
      </Box>
    </Box>
  )
}

/* ─── Bento Stats Section ───────────────────────────────────── */
function BentoStatsSection() {
  return (
    <Box component="section" style={{ width: '100%', padding: '60px 0', background: '#fff' } as FramerStyle}>
      <style>{`
        .ab-bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }
        @media (max-width: 900px) {
          .ab-bento-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        .ab-bento-card {
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .ab-bento-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.06);
        }
        .ab-bento-card.stat-purple {
          background: #7E74F4;
          color: #fff;
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 280px;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }
        .ab-bento-card.stat-red {
          background: #D34E62;
          color: #fff;
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 280px;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }
        .ab-bento-card.image-small {
          height: 280px;
        }
        .ab-bento-card.image-large {
          height: 280px;
          grid-column: span 2;
        }
        @media (max-width: 900px) {
          .ab-bento-card.image-large {
            grid-column: span 1;
          }
        }
        .ab-bento-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .ab-bento-label {
          font-size: 15px;
          font-weight: 500;
          opacity: 0.9;
        }
        .ab-bento-stat {
          font-size: 72px;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .ab-bento-sub {
          font-size: 15px;
          font-weight: 600;
        }
      `}</style>
      <Box style={{ ...container } as FramerStyle}>
        <Box style={contentPad}>
          <div className="ab-bento-grid">
            {/* Purple stat */}
            <div className="ab-bento-card stat-purple">
              <span className="ab-bento-label">Support</span>
              <span className="ab-bento-stat">6K+</span>
              <span className="ab-bento-sub">Active Users</span>
            </div>

            {/* Warehouse woman */}
            <div className="ab-bento-card image-small">
              <img src="/atbooks_warehouse_woman.jpg" alt="Warehouse woman using tablet" className="ab-bento-img" />
            </div>

            {/* Warehouse shelves */}
            <div className="ab-bento-card image-small">
              <img src="/atbooks_warehouse_shelves.jpg" alt="Warehouse shelving racks" className="ab-bento-img" />
            </div>

            {/* Workers team */}
            <div className="ab-bento-card image-large">
              <img src="/atbooks_workers_team.jpg" alt="Team of logistics workers" className="ab-bento-img" />
            </div>

            {/* Red stat */}
            <div className="ab-bento-card stat-red">
              <span className="ab-bento-label">Covers</span>
              <span className="ab-bento-stat">50+</span>
              <span className="ab-bento-sub">Business Modules</span>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Research & Empathy Map Section ────────────────────────── */
function ResearchSection() {
  return (
    <Box component="section" style={{ width: '100%', padding: '40px 0 80px', background: '#fff' } as FramerStyle}>
      <style>{`
        .ab-res-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 60px;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 700px) {
          .ab-res-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        .ab-res-label {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-top: 4px;
        }
        .ab-res-dot {
          width: 12px;
          height: 12px;
          background: rgb(255, 70, 46);
          border-radius: 2px;
          flex-shrink: 0;
        }
        .ab-res-tag {
          font-size: 14px;
          font-weight: 700;
          color: #555;
        }
        .ab-res-desc {
          font-size: 15px;
          line-height: 1.75;
          color: #666;
          margin: 0;
          font-weight: 400;
        }

        /* Empathy Map */
        .ab-empathy-wrapper {
          position: relative;
          margin-top: 60px;
        }
        .ab-empathy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 768px) {
          .ab-empathy-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        .ab-empathy-card {
          background: #F8F9FA;
          border-radius: 36px;
          padding: 40px;
          box-sizing: border-box;
          min-height: 220px;
          display: flex;
          flex-direction: column;
        }
        .ab-empathy-card.left-card {
          text-align: left;
          align-items: flex-start;
        }
        .ab-empathy-card.right-card {
          text-align: right;
          align-items: flex-end;
        }
        @media (max-width: 768px) {
          .ab-empathy-card.right-card {
            text-align: left;
            align-items: flex-start;
          }
        }
        .ab-empathy-card-title {
          font-size: 20px;
          font-weight: 800;
          color: #111;
          margin: 0 0 16px 0;
        }
        .ab-empathy-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ab-empathy-list-item {
          font-size: 13px;
          line-height: 1.6;
          color: #777;
          position: relative;
          font-weight: 500;
        }
        .ab-empathy-card.left-card .ab-empathy-list-item {
          padding-left: 16px;
        }
        .ab-empathy-card.left-card .ab-empathy-list-item::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #FF462E;
          font-size: 14px;
        }
        .ab-empathy-card.right-card .ab-empathy-list-item {
          padding-right: 16px;
        }
        .ab-empathy-card.right-card .ab-empathy-list-item::after {
          content: "•";
          position: absolute;
          right: 0;
          color: #FF462E;
          font-size: 14px;
        }
        @media (max-width: 768px) {
          .ab-empathy-card.right-card .ab-empathy-list-item {
            padding-left: 16px;
            padding-right: 0;
          }
          .ab-empathy-card.right-card .ab-empathy-list-item::after {
            display: none;
          }
          .ab-empathy-card.right-card .ab-empathy-list-item::before {
            content: "•";
            position: absolute;
            left: 0;
            color: #FF462E;
            font-size: 14px;
          }
        }

        /* Center Circle */
        .ab-empathy-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 190px;
          height: 190px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          z-index: 10;
        }
        @media (max-width: 768px) {
          .ab-empathy-center {
            display: none;
          }
        }
        .ab-empathy-circle-outer {
          width: 170px;
          height: 170px;
          border-radius: 50%;
          background: #E5E7EB;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ab-empathy-circle-mid {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: #9CA3AF;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .ab-empathy-avatar {
          width: 105px;
          height: 105px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #fff;
          display: block;
        }
      `}</style>
      <Box style={{ ...container } as FramerStyle}>
        <Box style={contentPad}>
          {/* Header */}
          <div className="ab-res-grid">
            <div className="ab-res-label">
              <span className="ab-res-dot" />
              <span className="ab-res-tag">Research</span>
            </div>
            <p className="ab-res-desc">
              My research, involving user interviews and surveys, revealed that a systematic integration of idea generation processes is essential to explore, develop, and refine innovative solutions for the challenges faced by restaurant employees and owners
            </p>
          </div>
        </Box>
      </Box>

      {/* Empathy Map Wrapper (100% width, full bleed with padding) */}
      <div className="ab-empathy-wrapper" style={{ width: '100%', maxWidth: '100%', margin: '0 auto', padding: '0 40px', boxSizing: 'border-box' }}>
        <div className="ab-empathy-grid">
          {/* Says */}
          <div className="ab-empathy-card left-card">
            <h3 className="ab-empathy-card-title">Says</h3>
            <ul className="ab-empathy-list">
              <li className="ab-empathy-list-item">It takes too long to get purchase request approved.</li>
              <li className="ab-empathy-list-item">I wish I could come for vendor price in one place.</li>
              <li className="ab-empathy-list-item">Tracking multiple material shortage is frustrating.</li>
            </ul>
          </div>

          {/* Thinks */}
          <div className="ab-empathy-card right-card">
            <h3 className="ab-empathy-card-title">Thinks</h3>
            <ul className="ab-empathy-list">
              <li className="ab-empathy-list-item">Approval should be faster and less stressful</li>
              <li className="ab-empathy-list-item">I need a clear view of budget before placing POS</li>
              <li className="ab-empathy-list-item">The system should help me reduce cost not create extra work</li>
            </ul>
          </div>

          {/* Feels */}
          <div className="ab-empathy-card left-card" style={{ marginTop: '24px' }}>
            <h3 className="ab-empathy-card-title">Feels</h3>
            <ul className="ab-empathy-list">
              <li className="ab-empathy-list-item">Frustrated by repetitive data entry</li>
              <li className="ab-empathy-list-item">Overwhelmed by juggling multiple papers and documents</li>
              <li className="ab-empathy-list-item">Motivated to save cost and steam line vendor communication</li>
            </ul>
          </div>

          {/* Does */}
          <div className="ab-empathy-card right-card" style={{ marginTop: '24px' }}>
            <h3 className="ab-empathy-card-title">Does</h3>
            <ul className="ab-empathy-list">
              <li className="ab-empathy-list-item">Manually check stock before racing requisition</li>
              <li className="ab-empathy-list-item">Constantly follows up with finance and approval team</li>
              <li className="ab-empathy-list-item">Print report for audit and management reviews</li>
            </ul>
          </div>
        </div>

        {/* Centered User Persona Avatar */}
        <div className="ab-empathy-center">
          <div className="ab-empathy-circle-outer">
            <div className="ab-empathy-circle-mid">
              <img src="/atbooks_user_persona.jpg" alt="User persona avatar" className="ab-empathy-avatar" />
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}

/* ─── User Persona Section ───────────────────────────────────── */
function UserPersonaSection() {
  return (
    <Box component="section" style={{ width: '100%', padding: '40px 0 80px', background: '#fff' } as FramerStyle}>
      <style>{`
        .ab-persona-top {
          display: flex;
          align-items: center;
          gap: 40px;
          margin-bottom: 60px;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 768px) {
          .ab-persona-top {
            flex-direction: column;
            gap: 24px;
            text-align: center;
          }
        }
        .ab-persona-top-avatar {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: #F3F4F6;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
        }
        .ab-persona-top-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .ab-persona-top-text {
          font-size: 14px;
          line-height: 1.75;
          color: #666;
          margin: 0;
          font-weight: 400;
          flex: 1;
        }

        /* Bottom Bento Grid */
        .ab-persona-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 24px;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 768px) {
          .ab-persona-layout {
            grid-template-columns: 1fr;
          }
        }
        .ab-persona-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .ab-persona-photo-card {
          width: 100%;
          height: 280px;
          border-radius: 24px;
          overflow: hidden;
          background: #F3F4F6;
        }
        .ab-persona-photo-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .ab-persona-info-card {
          background: #F8F9FA;
          border-radius: 20px;
          padding: 24px;
        }
        .ab-persona-info-row {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          margin-bottom: 12px;
        }
        .ab-persona-info-row:last-child {
          margin-bottom: 0;
        }
        .ab-persona-info-label {
          color: #888;
          font-weight: 500;
        }
        .ab-persona-info-value {
          color: #222;
          font-weight: 700;
          text-align: right;
        }
        .ab-persona-personality-card {
          background: #F8F9FA;
          border-radius: 20px;
          padding: 24px;
        }
        .ab-persona-card-title {
          font-size: 14px;
          font-weight: 800;
          color: #111;
          margin: 0 0 16px 0;
        }
        .ab-persona-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .ab-persona-tag {
          font-size: 12px;
          color: #666;
          background: #E5E7EB;
          padding: 6px 14px;
          border-radius: 20px;
          font-weight: 600;
        }

        /* Right stack */
        .ab-persona-right {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .ab-persona-right-card {
          background: #F8F9FA;
          border-radius: 24px;
          padding: 32px;
          box-sizing: border-box;
        }
        .ab-persona-right-title {
          font-size: 15px;
          font-weight: 800;
          color: #111;
          margin: 0 0 16px 0;
        }
        .ab-persona-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ab-persona-list-item {
          font-size: 13px;
          line-height: 1.6;
          color: #666;
          position: relative;
          padding-left: 16px;
          font-weight: 500;
        }
        .ab-persona-list-item::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #999;
          font-size: 14px;
        }
      `}</style>
      <Box style={{ ...container } as FramerStyle}>
        <Box style={contentPad}>
          {/* Top Row with 2 Avatars & Paragraph */}
          <div className="ab-persona-top">
            <div className="ab-persona-top-avatar">
              <img src="/atbooks_user_1.jpg" alt="Interviewee Female" />
            </div>
            <p className="ab-persona-top-text">
              During my interview, the employess emphasised feeling overwhelmed by the sheer number of appointments, making it hard to prioritise and follow up with clients effectively. This is compounded by the fact that managers may lack key details about the services, hindering their ability to answer inquiries. She also stressed that automated follow-up reminders and notifications are absolutely crucial for providing consistent client support.
            </p>
            <div className="ab-persona-top-avatar">
              <img src="/atbooks_user_2.jpg" alt="Interviewee Male" />
            </div>
          </div>

          {/* Bottom Bento Grid */}
          <div className="ab-persona-layout">
            {/* Left Column */}
            <div className="ab-persona-left">
              <div className="ab-persona-photo-card">
                <img src="/atbooks_ria_kanna.jpg" alt="Ria Kanna User Persona" />
              </div>
              <div className="ab-persona-info-card">
                <div className="ab-persona-info-row">
                  <span className="ab-persona-info-label">Name :</span>
                  <span className="ab-persona-info-value">Ria Kanna</span>
                </div>
                <div className="ab-persona-info-row">
                  <span className="ab-persona-info-label">Gender:</span>
                  <span className="ab-persona-info-value">Female</span>
                </div>
                <div className="ab-persona-info-row">
                  <span className="ab-persona-info-label">Age:</span>
                  <span className="ab-persona-info-value">37</span>
                </div>
                <div className="ab-persona-info-row">
                  <span className="ab-persona-info-label">Occupation:</span>
                  <span className="ab-persona-info-value">Manager</span>
                </div>
              </div>
              <div className="ab-persona-personality-card">
                <h4 className="ab-persona-card-title">Personality</h4>
                <div className="ab-persona-tags">
                  <span className="ab-persona-tag">Creative</span>
                  <span className="ab-persona-tag">Thinker</span>
                  <span className="ab-persona-tag">Prone to distraction</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="ab-persona-right">
              {/* Bio */}
              <div className="ab-persona-right-card">
                <h4 className="ab-persona-right-title">Bio</h4>
                <ul className="ab-persona-list">
                  <li className="ab-persona-list-item">Martin overseas daily factory operations including production planning, workforce management, machine utilisation, and vendor coordination.</li>
                  <li className="ab-persona-list-item">She manages a team of 950 employees and frequently works with multiple department simultaneously.</li>
                </ul>
              </div>

              {/* Goals */}
              <div className="ab-persona-right-card">
                <h4 className="ab-persona-right-title">Goals</h4>
                <ul className="ab-persona-list">
                  <li className="ab-persona-list-item">Centralised ERP to connect sales , HRMS , production , procurement , finance and inventory.</li>
                  <li className="ab-persona-list-item">Role-based dashboard for real time KPI'S (Production, cost and sales</li>
                  <li className="ab-persona-list-item">Improved efficiency and decision-making with data driven insights.</li>
                  <li className="ab-persona-list-item">Ensure smooth workflow automation across departments.</li>
                </ul>
              </div>

              {/* Challenges */}
              <div className="ab-persona-right-card">
                <h4 className="ab-persona-right-title">Challenges</h4>
                <ul className="ab-persona-list">
                  <li className="ab-persona-list-item">Struggles with lack of real time visibility into production and inventory</li>
                  <li className="ab-persona-list-item">Manual data entry across system leads to delays and errors.</li>
                  <li className="ab-persona-list-item">Difficulty in tracking performance KPIs like downtime production and cost.</li>
                  <li className="ab-persona-list-item">Need to frequently follow up with multiple departments for updates</li>
                </ul>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── User Data & Statistics Section ─────────────────────────── */
function StatCounter({ value, visible }: { value: number; visible: boolean }) {
  const [display, setDisplay] = useState(0)
  useEffect(() => {
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
  return <span className="ab-stat-num">{display}%</span>
}

function UserDataSection() {
  const [userDataVisible, setUserDataVisible] = useState(false)
  const userDataRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = userDataRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            setUserDataVisible(true)
            obs.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const progressItems = [
    { fill: 75, text: '75% wants this feature', category: 'Accounting', icon: FaCalculator },
    { fill: 85, text: '85% of the users want this', category: 'Procurements', icon: FaShoppingCart },
    { fill: 50, text: '50% users want realtime notification', category: 'Realtime notification', icon: FaBell },
    { fill: 100, text: '100% all want this', category: 'Product setup', icon: FaSlidersH },
    { fill: 78, text: '78% of the owners want this', category: 'Customer management', icon: FaUsers },
    { fill: 100, text: '100% of the mangers needed', category: 'Sales report', icon: FaChartLine },
    { fill: 70, text: '70% of the faces this', category: 'CRM', icon: FaHandshake },
    { fill: 100, text: '100% of the users need it user friendly', category: 'Testing', icon: FaFlask },
  ]

  return (
    <Box ref={userDataRef as any} component="section" style={{ width: '100%', padding: '60px 0 80px', background: '#fff' } as FramerStyle}>
      <style>{`
        .ab-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-bottom: 40px;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 768px) {
          .ab-stats-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
        .ab-stats-row2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          max-width: 700px;
          margin: 0 auto 80px;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 768px) {
          .ab-stats-row2 {
            grid-template-columns: 1fr;
            gap: 30px;
            margin-bottom: 50px;
          }
        }
        .ab-stat-item {
          text-align: center;
        }
        .ab-stat-num {
          font-size: 56px;
          font-weight: 800;
          color: #0F8A5F;
          margin-bottom: 12px;
          display: block;
          letter-spacing: -0.02em;
        }
        .ab-stat-text {
          font-size: 12px;
          line-height: 1.6;
          color: #888;
          font-weight: 500;
          max-width: 260px;
          margin: 0 auto;
        }

        /* Progress List */
        .ab-data-title {
          font-size: 38px;
          font-weight: 800;
          color: #111;
          margin: 0 0 40px 0;
          font-family: 'Inter', sans-serif;
        }
        .ab-progress-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 800px;
          margin: 0 auto;
          font-family: 'Inter', sans-serif;
        }
        .ab-progress-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .ab-bar-container {
          flex: 1;
          height: 38px;
          background: #F4F5F7;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
        }
        .ab-bar-fill {
          height: 100%;
          min-width: 0;
          overflow: hidden;
          background: #0F8A5F;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 18px;
          box-sizing: border-box;
          transition: width 0.9s ease;
        }
        .ab-bar-text {
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          white-space: nowrap;
        }
        .ab-icon-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #F3F4F6;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
        }
        .ab-category-label {
          width: 160px;
          font-size: 13px;
          font-weight: 700;
          color: #222;
          text-align: left;
          flex-shrink: 0;
        }
        @media (max-width: 600px) {
          .ab-progress-row {
            flex-wrap: wrap;
            gap: 8px 12px;
          }
          .ab-icon-circle {
            order: 1;
          }
          .ab-category-label {
            order: 2;
            width: auto;
            flex: 1;
            font-size: 11px;
            line-height: 1.3;
            white-space: normal;
          }
          .ab-bar-container {
            order: 3;
            flex-basis: 100%;
            height: 36px;
          }
          .ab-bar-fill {
            padding-right: 12px;
          }
          .ab-bar-text {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 11px;
          }
        }

        /* 320px - 390px mobile fixes for the "Data from the user" section */
        @media (min-width: 320px) and (max-width: 390px) {
          .ab-stat-num {
            font-size: clamp(40px, 13vw, 52px);
          }
          .ab-stat-text {
            font-size: 12px;
          }
          .ab-data-title {
            font-size: clamp(24px, 8vw, 30px);
            letter-spacing: -0.01em;
          }
          .ab-stats-grid,
          .ab-stats-row2 {
            gap: 28px;
          }
          .ab-progress-list {
            gap: 12px;
          }
          .ab-progress-row {
            gap: 6px 10px;
          }
          .ab-bar-container {
            height: 34px;
          }
          .ab-bar-fill {
            padding-right: 8px;
          }
          .ab-bar-text {
            font-size: 10px;
            right: 8px;
          }
          .ab-icon-circle {
            width: 28px;
            height: 28px;
            font-size: 12px;
          }
          .ab-category-label {
            font-size: 11px;
          }
        }
      `}</style>
      <Box style={{ ...container } as FramerStyle}>
        <Box style={contentPad}>
          {/* Top Row Stats */}
          <div className="ab-stats-grid">
            <div className="ab-stat-item">
              <StatCounter value={91} visible={userDataVisible} />
              <p className="ab-stat-text">
                of employee said they faced delays in assessing cross departments data due to lack of centralised information
              </p>
            </div>
            <div className="ab-stat-item">
              <StatCounter value={85} visible={userDataVisible} />
              <p className="ab-stat-text">
                of respondent reported that manual approvals and paperwork increase turnaround time for client orders
              </p>
            </div>
            <div className="ab-stat-item">
              <StatCounter value={89} visible={userDataVisible} />
              <p className="ab-stat-text">
                of staff indicated they would be more satisfied with an ERP platform that Real time insights and smoother collaboration across the departments.
              </p>
            </div>
          </div>

          {/* Second Row Stats */}
          <div className="ab-stats-row2">
            <div className="ab-stat-item">
              <StatCounter value={77} visible={userDataVisible} />
              <p className="ab-stat-text">
                of use expressed difficulty in adapting the ERP systems to changing business workflow and customers requirements.
              </p>
            </div>
            <div className="ab-stat-item">
              <StatCounter value={70} visible={userDataVisible} />
              <p className="ab-stat-text">
                of manager said high dependency on human interest intervention leads to frequent errors and duplication of effort.
              </p>
            </div>
          </div>

          {/* Heading */}
          <h2 className="ab-data-title">Data from the user</h2>

          {/* Progress Bars */}
          <div className="ab-progress-list">
            {progressItems.map((item, idx) => (
              <div className="ab-progress-row" key={idx}>
                <div className="ab-bar-container">
                  <div className="ab-bar-fill" style={{ width: userDataVisible ? `${item.fill}%` : '0%' }}>
                    <span className="ab-bar-text">{item.text}</span>
                  </div>
                </div>
                <div className="ab-icon-circle">
                  <item.icon />
                </div>
                <span className="ab-category-label">{item.category}</span>
              </div>
            ))}
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Challenge & Solution Section ──────────────────────────── */
function ChallengeAndSolutionSection() {
  const challenges = [
    { title: 'Demonstrate Strategic Vision', desc: 'Invest in custom software to optimize processes, achieve unique goals, and showcase a proactive business strategy.', icon: '/ateats 2/icon1.png' },
    { title: 'Seamless Integration, and Flow', desc: 'Eliminate data silos and streamline workflows with custom software that seamlessly integrates all your systems.', icon: '/ateats 2/icon2.png' },
    { title: 'Maximize ROI with Tailored Solutions', desc: 'Align your IT investment with precise business needs, maximising ROI and delivering lasting value.', icon: '/ateats 2/icon3.png' },
    { title: 'Build Unwavering Reliability', desc: 'Rigorous testing ensures your custom software delivers a stable and secure IT foundation for critical operations.', icon: '/ateats 2/icon4.png' },
    { title: 'Future-Proof Your Business', desc: 'Ensure your business can adapt and innovate in the evolving landscape with custom software agility.', icon: '/ateats 2/icon5.png' },
    { title: 'Stand Out From the Competition', desc: 'Reinforce your distinct market position and attract loyal customers with a tailored brand experience.', icon: '/ateats 2/icon6.png' },
  ]

  const findings = [
    { title: 'Tailored Functionality', desc: 'Get precisely the features you need, without paying for unnecessary extras, ensuring maximum efficiency', icon: MdSettings },
    { title: 'Seamless Integration', desc: 'Connect all your systems for a unified view of your business, eliminating data silos and streamlining workflows.', icon: MdLink },
    { title: 'Enhanced Scalability', desc: 'Adapt to changing business needs, scaling your software without limitations.', icon: MdSwapVert },
    { title: 'Unique Brand Experience', desc: 'Deliver a customized experience that reflects your brand identity, strengthening customer loyalty.', icon: MdDiamond },
    { title: 'Competitive Advantage', desc: 'Differentiate yourself from the competition with innovative features that set you apart in the market.', icon: MdEmojiEvents },
    { title: 'Improved Data Security', desc: 'Protect sensitive information with robust security measures tailored to your specific industry and business needs.', icon: MdGppGood },
  ]

  const findingsRow3 = [
    { title: 'Streamlined Workflows', desc: 'Automate repetitive tasks and optimise processes, freeing up your team to focus on strategic initiatives', icon: MdChecklist },
    { title: 'Actionable Insights', desc: 'Gain real-time visibility into key performance indicators, enabling data-driven decision-making and improved business outcomes', icon: MdLightbulb },
  ]

  return (
    <Box component="section" style={{ width: '100%', padding: '60px 0 80px', background: '#fff' } as FramerStyle}>
      <style>{`
        /* Challenges */
        .ab-chall-container {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 60px;
          margin-bottom: 100px;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 900px) {
          .ab-chall-container {
            grid-template-columns: 1fr;
            gap: 30px;
            margin-bottom: 60px;
          }
        }
        .ab-chall-left-title {
          font-size: clamp(32px, 5vw, 64px);
          font-weight: 800;
          color: #111;
          margin: 0;
          line-height: 1;
        }
        .ab-chall-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px 40px;
          margin-left: 100px;
          padding-top: 90px;
        }
        @media (max-width: 600px) {
          .ab-chall-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-left: 0;
            padding-top: 24px;
          }
        }
        @media (min-width: 320px) and (max-width: 390px) {
          .ab-chall-container {
            gap: 20px;
            margin-bottom: 48px;
          }
          .ab-chall-left-title {
            font-size: clamp(30px, 9.5vw, 36px);
          }
          .ab-chall-item {
            gap: 12px;
          }
          .ab-chall-item-title {
            font-size: 14px;
          }
          .ab-chall-item-desc {
            font-size: 12px;
          }
        }
        .ab-chall-item {
          display: flex;
          gap: 16px;
          align-items: start;
        }
        .ab-chall-icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #FF462E;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }
        .ab-chall-item-title {
          font-size: 15px;
          font-weight: 800;
          color: #111;
          margin: 0 0 6px 0;
          line-height: 1.3;
        }
        .ab-chall-item-desc {
          font-size: 11px;
          line-height: 1.6;
          color: #777;
          margin: 0;
        }

        /* Solution Header */
        .ab-sol-header-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 100px;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 700px) {
          .ab-sol-header-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 60px;
          }
        }
        .ab-sol-label {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-top: 4px;
        }
        .ab-sol-dot {
          width: 12px;
          height: 12px;
          background: rgb(255, 70, 46);
          border-radius: 2px;
          flex-shrink: 0;
        }
        .ab-sol-tag {
          font-size: 14px;
          font-weight: 700;
          color: #555;
        }
        .ab-sol-desc {
          font-size: 15px;
          line-height: 1.75;
          color: #666;
          margin: 0;
          font-weight: 400;
        }

        /* What was found (Full bleed) */
        .ab-found-title-wrap {
          text-align: center;
          margin-bottom: 50px;
          font-family: 'Inter', sans-serif;
        }
        .ab-found-title {
          font-size: clamp(36px, 6vw, 68px);
          font-weight: 800;
          color: #111;
          margin: 0 0 12px 0;
          letter-spacing: -0.02em;
        }
        .ab-found-sub {
          font-size: 13px;
          color: #777;
          font-weight: 500;
          margin: 0;
        }
        .ab-found-grid-wrapper {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 40px;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }
        @media (min-width: 320px) and (max-width: 390px) {
          .ab-found-grid-wrapper {
            padding: 0 16px;
          }
          .ab-found-grid,
          .ab-found-row3 {
            gap: 16px;
          }
          .ab-found-card {
            padding: 20px;
            gap: 12px;
          }
          .ab-found-card-title {
            font-size: 14px;
          }
          .ab-found-card-desc {
            font-size: 12px;
          }
        }
        .ab-found-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 24px;
        }
        @media (max-width: 900px) {
          .ab-found-grid {
            grid-template-columns: 1fr;
          }
        }
        .ab-found-row3 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 820px;
          margin: 0 auto 40px;
        }
        @media (max-width: 600px) {
          .ab-found-row3 {
            grid-template-columns: 1fr;
          }
        }
        .ab-found-card {
          background: #F8F9FA;
          border-radius: 24px;
          padding: 28px;
          display: flex;
          gap: 16px;
          box-sizing: border-box;
          align-items: start;
        }
        .ab-found-card-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #FF462E;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }
        .ab-found-card-title {
          font-size: 15px;
          font-weight: 800;
          color: #111;
          margin: 0 0 6px 0;
        }
        .ab-found-card-desc {
          font-size: 11px;
          line-height: 1.6;
          color: #777;
          margin: 0;
        }
        .ab-found-footer-text {
          text-align: center;
          font-size: 12px;
          color: #0F8A5F;
          font-weight: 600;
          margin-top: 40px;
        }
      `}</style>

      {/* 1. Challenges Grid (100% Width) */}
      <div style={{ width: '100%', maxWidth: '100%', margin: '0 auto', padding: '0 clamp(16px, 5vw, 40px)', boxSizing: 'border-box' }}>
        <div className="ab-chall-container">
          <h2 className="ab-chall-left-title">Challenge</h2>
          <div className="ab-chall-grid">
            {challenges.map((c, idx) => (
              <div className="ab-chall-item" key={idx}>
                {typeof c.icon === 'string' && c.icon.startsWith('/') ? (
                  <img src={c.icon} alt={c.title} style={{ width: '44px', height: '44px', objectFit: 'contain', flexShrink: 0 }} />
                ) : (
                  <div className="ab-chall-icon-circle">
                    <span>{c.icon}</span>
                  </div>
                )}
                <div>
                  <h3 className="ab-chall-item-title">{c.title}</h3>
                  <p className="ab-chall-item-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Solution Header (100% Width) */}
      <div style={{ width: '100%', maxWidth: '100%', margin: '0 auto', padding: '0 clamp(16px, 5vw, 40px)', boxSizing: 'border-box' }}>
        <div className="ab-sol-header-grid">
          <div className="ab-sol-label">
            <span className="ab-sol-dot" />
            <span className="ab-sol-tag">Solution</span>
          </div>
          <p className="ab-sol-desc">
            Tackling Custom software delivers maximum efficiency through tailored functionality, seamless integration, enhanced scalability, a unique brand experience, and a competitive advantage, all while improving data security, streamlining workflows, and providing actionable insights for data-driven decisions that optimises a business.
          </p>
        </div>
      </div>

      {/* Title before the grid (100% Width) */}
      <div style={{ width: '100%', maxWidth: '100%', margin: '0 auto', padding: '0 clamp(16px, 5vw, 40px)', boxSizing: 'border-box' }}>
        <div className="ab-found-title-wrap">
          <h2 className="ab-found-title">What was found</h2>
          <p className="ab-found-sub">Aligning with user preferences and needs, the revised decision include</p>
        </div>
      </div>

      {/* 3. What Was Found Grid (Full Bleed - 100% Width) */}
      <div className="ab-found-grid-wrapper">
        {/* Rows 1 & 2: 3-column layout */}
        <div className="ab-found-grid">
          {findings.map((f, idx) => (
            <div className="ab-found-card" key={idx}>
              <div className="ab-found-card-icon">
                <f.icon />
              </div>
              <div>
                <h3 className="ab-found-card-title">{f.title}</h3>
                <p className="ab-found-card-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 3: 2-column centered layout */}
        <div className="ab-found-row3">
          {findingsRow3.map((f, idx) => (
            <div className="ab-found-card" key={idx}>
              <div className="ab-found-card-icon">
                <f.icon />
              </div>
              <div>
                <h3 className="ab-found-card-title">{f.title}</h3>
                <p className="ab-found-card-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="ab-found-footer-text">
          These decisions collectively enrich atBooks, catering to user preferences while optimising smooth operation experience.
        </p>
      </div>
    </Box>
  )
}

/* ─── Key Features Section ──────────────────────────────────── */
function KeyFeaturesSection() {
  

  return (
    <Box component="section" style={{ width: '100%', padding: '60px 0 80px', background: '#fff' } as FramerStyle}>
      <style>{`
        .ab-key-grid {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 40px;
          align-items: start;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 768px) {
          .ab-key-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
        
        /* Key Features Sidebar */
        .ab-key-sidebar {
          width: 54px;
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          background: #fff;
          padding: 24px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          box-sizing: border-box;
          margin: 0 auto;
        }
        .ab-key-sidebar-icon {
          font-size: 16px;
          cursor: pointer;
          opacity: 0.5;
          transition: opacity 0.2s ease, transform 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
        }
        .ab-key-sidebar-icon:hover {
          opacity: 0.9;
        }
        .ab-key-sidebar-icon.active {
          opacity: 1;
          background: #E0F2F1;
          color: #00897B;
        }

        /* Features content */
        .ab-key-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .ab-key-logo-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 50px;
        }
        .ab-key-logo-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #2DB87E 0%, #1A9A66 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ab-key-logo-text {
          font-family: 'Inter', sans-serif;
          font-size: 48px;
          font-weight: 700;
          color: #111;
          letter-spacing: -0.02em;
        }
        
        /* Inner Grid */
        .ab-features-inner-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          width: 100%;
          max-width: 720px;
        }
        @media (max-width: 600px) {
          .ab-features-inner-grid {
            grid-template-columns: 1fr;
          }
        }
        .ab-feature-tag-card {
          border-radius: 12px;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-sizing: border-box;
          font-size: 13px;
          font-weight: 700;
        }
        @media (max-width: 600px) {
          .ab-feature-tag-card {
            grid-column: span 1 !important;
          }
        }
        .ab-feature-tag-icon {
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      <div style={{ width: '100%', maxWidth: '100%', margin: '0 auto', padding: '0 40px', boxSizing: 'border-box' }}>
        {/* Header */}
        <Box style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 50 } as FramerStyle}>
          <span style={{ width: 12, height: 12, background: 'rgb(255,70,46)', display: 'inline-block', borderRadius: 2 }} />
          <span style={{ fontFamily: '"Inter",sans-serif', fontSize: 14, fontWeight: 700, color: '#555' }}>Key features</span>
        </Box>

        <div className="ab-key-grid" style={{ gridTemplateColumns: '1fr' } as FramerStyle}>
          {/* Content */}
          <div className="ab-key-content" style={{ alignItems: 'center' } as FramerStyle}>
            <img
              src="/assets/atBook/atb1.png"
              alt="Key features atBooks"
              loading="lazy"
              style={{ width: '100%', height: 'auto', borderRadius: 16, display: 'block' } as FramerStyle}
            />
          </div>
        </div>
      </div>
    </Box>
  )
}

/* ─── Design Section ────────────────────────────────────────── */
function DesignSection() {
  return (
    <Box component="section" style={{ width: '100%', padding: '40px 0 80px', background: '#fff' } as FramerStyle}>
      <style>{`
        .ab-design-header {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 60px;
          font-family: 'Inter', sans-serif;
        }
        @media (max-width: 700px) {
          .ab-design-header {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 40px;
          }
        }
        .ab-design-label {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-top: 4px;
        }
        .ab-design-dot {
          width: 12px;
          height: 12px;
          background: rgb(255, 70, 46);
          border-radius: 2px;
          flex-shrink: 0;
        }
        .ab-design-tag {
          font-size: 14px;
          font-weight: 700;
          color: #555;
        }
        .ab-design-desc {
          font-size: 15px;
          line-height: 1.75;
          color: #666;
          margin: 0;
          font-weight: 400;
        }

        /* Mockup full width wrap */
        .ab-design-mockup-wrapper {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 40px;
          box-sizing: border-box;
        }
        .ab-design-mockup-frame {
          background: #1A9A66;
          border-radius: 24px;
          padding: 30px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
          box-sizing: border-box;
          max-width: 100%;
          margin: 0 auto;
        }
        .ab-design-mockup-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
      `}</style>
      <div style={{ width: '100%', maxWidth: '100%', margin: '0 auto', padding: '0 40px', boxSizing: 'border-box' }}>
        <div className="ab-design-header">
          <div className="ab-design-label">
            <span className="ab-design-dot" />
            <span className="ab-design-tag">Design</span>
          </div>
          <p className="ab-design-desc">
            The design was brought to life through the creation of detailed high-fidelity screens, closely mimicking the final user experience.
          </p>
        </div>
      </div>

      {/* High fidelity image in a container mockup */}
      <div className="ab-design-mockup-wrapper">
        <div className="ab-design-mockup-frame">
          <img src="/atbook1.png" alt="atBooks High Fidelity Screen Dashboard" className="ab-design-mockup-img" />
        </div>
      </div>
    </Box>
  )
}

/* ─── More Work Section removed ─────────────────────────────── */

function AtBooksPage() {
  return (
    <div id="main" data-framer-generated-page>
      <Box
        component="div"
        className="framer-hTG3P framer-emw559 atbooks-page"
        data-layout-template="true"
        style={{ minHeight: '100vh', width: 'auto', position: 'relative' } as FramerStyle}
      >
        <style>{`
          .atbooks-page { overflow-x: clip; position: relative; }
          /* atBooks uses the shared 1140px content frame. The shared
             .crunch-side-lines rule in index.css already wraps the content, so
             we only need to cap the main column to the same 1140px frame. */
          .atbooks-page main {
            width: 100%;
            max-width: 100%;
            margin: 0 auto;
            overflow: clip;
            position: relative;
            box-sizing: border-box;
          }
          /* The shared "More work" marquee is set wider; keep it inside the
             100% frame on the atBooks page. */
          .atbooks-page main section [style*="max-width: 1140px"],
          .atbooks-page [style*="max-width: 1140px"] {
            max-width: 100% !important;
          }
          .atbooks-page main * { min-width: 0; }
          .atbooks-page img,
          .atbooks-page video,
          .atbooks-page svg { max-width: 100%; }
          .atbooks-page .crunch-side-lines { z-index: 5; }
          @media (max-width: 768px) {
            .ab-empathy-wrapper { padding-left: 16px !important; padding-right: 16px !important; }
          }
        `}</style>
        <div className="crunch-side-lines" aria-hidden="true">
          <span className="crunch-side-lines-star crunch-side-lines-star-left crunch-side-lines-star-bottom" />
          <span className="crunch-side-lines-star crunch-side-lines-star-right crunch-side-lines-star-bottom" />
        </div>
        <Navbar />
        <Box
          component="div"
          data-framer-root
          className="framer-LRfZ0 framer-3jfDI framer-et5t2c"
          style={{ minHeight: '100vh', width: 'auto', display: 'contents' } as FramerStyle}
        >
          <Box component="main" className="framer-xr6yl" data-framer-name="Main">
            <AtBooksLiveSection />
            <AtBooksHero />
            <ProblemSection />
            <BentoStatsSection />
            <ResearchSection />
            <UserPersonaSection />
            <UserDataSection />
            <ChallengeAndSolutionSection />
            <KeyFeaturesSection />
            <DesignSection />
            <MoreWorkMarquee currentPath="/atbooks" />
          </Box>
        </Box>
        <div className="framer-15qpk7a" />
      </Box>
      <SpriteIcons />
    </div>
  )
}

export default AtBooksPage
