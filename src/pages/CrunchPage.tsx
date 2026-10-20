import * as React from 'react'
import Box from '@mui/material/Box'
import type { FramerStyle } from '../Components/framer'

import Navbar from '../Components/Navbar'
import SpriteIcons from '../Components/SpriteIcons'
import MoreWorkMarquee from '../Components/MoreWorkMarquee'
import { getProject } from '../data/projects'

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
  padding: '0 var(--crunch-pad, 24px)',
  boxSizing: 'border-box',
}

/* Global responsive helpers for the whole Crunch page */
const pageResponsiveCss = `
  .crunch-page { --crunch-pad: 24px; overflow-x: clip; position: relative; }
  /* Full-page side lines use the shared .crunch-side-lines rule in index.css */
  .crunch-page .crunch-side-lines { z-index: 5; }
  @media (max-width: 640px) { .crunch-page { --crunch-pad: 18px; } }
  @media (max-width: 400px) { .crunch-page { --crunch-pad: 14px; } }
  /* Tighten huge vertical section paddings on tablets/phones */
  @media (max-width: 700px) {
    .crunch-page main > section { padding-top: 48px !important; padding-bottom: 64px !important; }
  }
  @media (max-width: 420px) {
    .crunch-page main > section { padding-top: 40px !important; padding-bottom: 52px !important; }
  }
`

const indicator: FramerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}

/* ─── Hero ─────────────────────────────────────────────────── */
function CrunchHero() {
  const project = getProject('crunch')
  return (
    <Box
      component="section"
      className="crunch-hero"
      id="crunch-case-study"
      style={{
        width: '100%',
        padding: '88px 0 40px',
        background: '#fff',
        textAlign: 'center',
      } as FramerStyle}
    >
      <style>{`
        .crunch-hero { padding-top: 88px; padding-bottom: 40px; }
        @media (max-width: 700px) {
          .crunch-hero { padding-top: 80px; padding-bottom: 28px; }
          .crunch-hero-pill { margin-bottom: 14px; font-size: 13px; gap: 12px; padding: 8px 20px; }
        }
        .crunch-hero-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 10px 26px;
          border-radius: 100px;
          background: rgba(255,70,46,0.10);
          color: rgb(255,70,46);
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-align: center;
          margin: 0 auto 32px;
        }
        .crunch-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(48px, 9vw, 108px);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1;
          color: #111;
          margin: 0 0 20px 0;
          width: 100%;
          text-align: center;
        }
        .crunch-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2.4vw, 16px);
          line-height: 1.7;
          color: #7A7A7A;
          max-width: 520px;
          margin: 0 auto;
          padding: 0 4px;
          text-align: center;
        }
      `}</style>

      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={{ ...contentPad, display: 'flex', flexDirection: 'column', alignItems: 'center' } as FramerStyle}>
          {/* Pill badge */}
          <span className="crunch-hero-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="8" height="8" rx="1" fill="rgb(255,70,46)" opacity="0.7"/>
              <rect x="14" y="4" width="8" height="8" rx="1" fill="rgb(255,70,46)"/>
              <rect x="2" y="14" width="8" height="8" rx="1" fill="rgb(255,70,46)"/>
              <rect x="14" y="14" width="8" height="8" rx="1" fill="rgb(255,70,46)" opacity="0.5"/>
            </svg>
            {project?.category ?? 'Case study'}
          </span>

          {/* Title */}
          <h1 className="crunch-title">Crunch®</h1>

          {/* Subtitle */}
          <p className="crunch-subtitle">
            Poor dietary choices can lead to chronic health, while a balanced and nutritious
            diet is crucial for prevention and management.
          </p>
        </Box>
      </Box>
    </Box>
  );
}

/* ─── Problem Section ───────────────────────────────────────── */
function ProblemSection() {
  return (
    <Box
      component="section"
      style={{ width: '100%', padding: '60px 0 40px', background: '#fff' } as FramerStyle}
    >
      <style>{`
        .problem-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 700px) {
          .problem-grid { grid-template-columns: 1fr; gap: 24px; }
        }
        .problem-heading {
          font-family: 'Inter', sans-serif;
          font-size: clamp(18px, 2.5vw, 22px);
          font-weight: 700;
          color: #111;
          margin: 0 0 20px;
          line-height: 1.35;
        }
        .problem-body {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.75;
          color: #5A5A5A;
          margin: 0;
        }
      `}</style>

      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          <div className="problem-grid">
            {/* Left label */}
            <Box style={{ ...indicator, paddingTop: 4 } as FramerStyle}>
              <span style={{ width: 12, height: 12, background: 'rgb(255, 70, 46)', display: 'inline-block', flex: 'none', borderRadius: 2 } as FramerStyle} />
              <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, fontWeight: 600, color: '#6B6B6B' } as FramerStyle}>
                Problem
              </span>
            </Box>

            {/* Right content */}
            <Box>
              <h2 className="problem-heading">
                The Busy Professional's Dilemma: Simplified Nutrition for a Healthier Life with Crunch
              </h2>
              <p className="problem-body">
                Juggling work, social life, and personal well-being, busy young professionals often find it challenging to prioritize healthy eating. Crunch offers a solution by simplifying nutrition tracking and promoting mindful eating habits through an engaging and user-friendly app. Making healthier choices accessible and sustainable, Crunch removes the obstacles to promote lasting well-bring.
              </p>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Mind Map Section ──────────────────────────────────────── */
function MindMapSection() {
  return (
    <Box
      component="section"
      style={{
        width: '100%',
        padding: '60px 0 100px',
        background: '#fff',
        position: 'relative',
        overflow: 'hidden',
      } as FramerStyle}
    >
      <style>{`
        .mindmap-wrap {
          position: relative;
          width: 100%;
          max-width: 100%;
          aspect-ratio: 1100 / 700;
          margin: 0 auto;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
          container-type: inline-size;
        }
        @supports not (aspect-ratio: 1 / 1) {
          .mindmap-wrap { min-height: 700px; }
        }
        .mm-text {
          position: absolute;
          white-space: nowrap;
          z-index: 10;
        }

        /* Text styles — sizes in cqw so everything scales proportionally
           (base design width = 1100px → 1cqw = 11px) */
        .txt-mental   { top: 12%; left: 8%;  color: #9B9CA8; font-size: 24px; font-size: 2.18cqw; font-weight: 700; letter-spacing: 0.15em; }
        .txt-diabetics{ top: 15%; left: 52%; color: #B0B0B0; font-size: 20px; font-size: 1.82cqw; font-weight: 700; letter-spacing: 0.15em; }

        .txt-track    { top: 15%; right: 5%; display: flex; flex-direction: column; gap: 12px; gap: 1.1cqw; color: #8A8276; font-size: 14px; font-size: 1.27cqw; font-weight: 700; letter-spacing: 0.15em; text-align: right; }

        .txt-stress   { top: 31%; left: 6%;  color: #8A8276; font-size: 16px; font-size: 1.45cqw; font-weight: 700; letter-spacing: 0.15em; }
        .txt-sleep    { top: 41%; left: 4%;  color: #8A8276; font-size: 14px; font-size: 1.27cqw; font-weight: 700; letter-spacing: 0.15em; }

        .txt-clinical { top: 37%; left: 34%; color: #4A4A68; font-size: 24px; font-size: 2.18cqw; font-weight: 700; letter-spacing: 0.15em; }

        .txt-intl     { top: 51%; left: 14%; color: #F8964C; font-size: 24px; font-size: 2.18cqw; font-weight: 700; letter-spacing: 0.15em; }

        .txt-meal     { top: 62%; left: 20%; color: #8A8276; font-size: 15px; font-size: 1.36cqw; font-weight: 700; letter-spacing: 0.15em; }

        .txt-food     { top: 67%; right: 18%; color: #F8964C; font-size: 28px; font-size: 2.55cqw; font-weight: 800; letter-spacing: 0.1em; }

        .txt-mindful  { top: 82%; left: 50%; transform: translateX(-50%); color: #F87D17; font-size: 42px; font-size: 3.82cqw; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; text-align: center; }

        /* SVG layer */
        .mm-svg-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
      `}</style>

      <div className="mindmap-wrap">
        
        {/* Background Blobs and Central Icon Layer */}
        <svg className="mm-svg-layer" viewBox="0 0 1100 700" preserveAspectRatio="xMidYMid meet">
          {/* Left light gray blob */}
          <path d="M-50,0 C150,50 250,200 200,400 C150,600 50,700 -50,700 Z" fill="#F8F8F8" />
          
          {/* Right light gray shape */}
          <path d="M1000,200 L1150,200 L1150,500 C1050,450 900,450 920,350 C940,250 1000,200 1000,200 Z" fill="#F8F8F8" />
          <rect x="920" y="220" width="200" height="250" rx="40" fill="#F8F8F8" transform="rotate(-30 920 220)" />

          {/* Central Logo (Apple/Fork silhouette) */}
          <g transform="translate(340, 150) scale(1.1)" opacity="0.3" fill="#F5F2EE">
            <path d="M200,0 C300,0 350,100 350,200 C350,300 250,350 200,350 C150,350 50,300 50,200 C50,100 100,0 200,0 Z" />
            {/* Bite mark */}
            <circle cx="340" cy="120" r="40" fill="#fff" />
            <circle cx="350" cy="180" r="30" fill="#fff" />
            {/* Leaves */}
            <path d="M220,30 C200,60 210,90 230,80 C250,70 240,40 220,30 Z" fill="#F5F2EE" stroke="#fff" strokeWidth="4"/>
            <path d="M250,50 C240,70 250,90 260,80 C270,70 260,50 250,50 Z" fill="#F5F2EE" stroke="#fff" strokeWidth="4"/>
            {/* Fork cutouts (making the shape look like a fork inside) */}
            <rect x="150" y="100" width="15" height="150" rx="7" fill="#fff" />
            <rect x="190" y="100" width="15" height="150" rx="7" fill="#fff" />
            <rect x="230" y="100" width="15" height="150" rx="7" fill="#fff" />
            <rect x="130" y="240" width="135" height="150" rx="20" fill="#fff" />
          </g>
        </svg>

        {/* Text Elements */}
        <div className="mm-text txt-mental">Mental Health?</div>
        <div className="mm-text txt-diabetics">Diabetics?</div>
        
        <div className="mm-text txt-track">
          <span>Track Nutrition Intake</span>
          <span>Grocery Shopping Tips</span>
          <span>Reminders</span>
        </div>
        
        <div className="mm-text txt-stress">Stress</div>
        <div className="mm-text txt-sleep">Lacking Sleep</div>
        
        <div className="mm-text txt-clinical">Clinical Health psychology?</div>
        
        <div className="mm-text txt-intl">International Students Problems?</div>
        
        <div className="mm-text txt-meal">Meal Skipping</div>
        <div className="mm-text txt-food">Food?</div>
        
        <div className="mm-text txt-mindful">Mindful Eating</div>

        {/* Hand-drawn Lines and Arrows SVG Layer */}
        <svg className="mm-svg-layer" viewBox="0 0 1100 700" preserveAspectRatio="xMidYMid meet">
          <defs>
            <marker id="arrowhead-brown" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6" stroke="#BCAAA4" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </marker>
            <marker id="arrowhead-solid-brown" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M 0 0 L 8 4 L 0 8 Z" fill="#C5B5A5"/>
            </marker>
          </defs>

          {/* 1. Left winding arrow (Lacking Sleep -> Mental Health) */}
          <path 
            d="M 210 330 C 230 310, 240 280, 200 270 C 150 260, 140 220, 200 200 C 250 180, 220 150, 180 150 C 140 150, 130 180, 100 200 M 130 150 C 120 170, 110 180, 100 200" 
            stroke="#C5B5A5" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"
          />
          {/* Manual arrowhead for left winding arrow */}
          <path d="M 125 155 L 140 155 L 132 175" stroke="#C5B5A5" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

          {/* 2. Top left curly arrow -> Clinical Health */}
          <path 
            d="M 310 150 C 270 170, 280 200, 300 200 C 320 200, 310 230, 290 230 C 270 230, 280 260, 300 260 C 320 260, 310 310, 330 290" 
            stroke="#C5B5A5" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
          />
          <path d="M 320 280 L 340 290 L 325 300 Z" fill="#C5B5A5"/>

          {/* 3. Top right arrow (Diabetics -> Clinical Health) */}
          <path 
            d="M 720 180 C 740 220, 730 260, 680 265" 
            stroke="#C5B5A5" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"
          />
          <path d="M 690 250 L 675 265 L 695 275" stroke="#C5B5A5" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

          {/* 4. Bottom dashed arrow */}
          <path 
            d="M 610 435 C 615 460, 625 480, 650 490 C 670 495, 690 500, 705 500" 
            stroke="#8A8276" strokeWidth="2.5" fill="none" strokeDasharray="8 8" strokeLinecap="round"
          />
          <path d="M 690 490 L 710 500 L 695 515" stroke="#8A8276" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

          {/* 5. Food thick hand-drawn arrow */}
          <g transform="translate(840, 340) rotate(10) scale(0.9)">
            <path d="M0,0 C20,-10 40,-5 50,20 C45,50 30,70 20,80 L40,80 L10,110 L-10,70 L10,75 C0,60 -10,40 0,0 Z" fill="#fff" stroke="#8A8276" strokeWidth="2" strokeLinejoin="round"/>
            {/* Hatches inside the arrow */}
            <path d="M10,15 L40,25 M8,25 L35,35 M5,35 L30,45 M3,45 L25,55 M2,55 L20,65 M0,65 L15,75 M15,80 L25,95 M5,80 L15,95" stroke="#8A8276" strokeWidth="1.5" strokeLinecap="round"/>
          </g>

          {/* 6. Oval around Mindful Eating */}
          <path 
            d="M 550 520 C 680 510, 740 540, 700 580 C 640 620, 420 620, 320 590 C 250 560, 350 530, 550 520 Z" 
            stroke="#EAEAEA" strokeWidth="3" fill="none"
          />

          {/* 7. Thick curved arrow pointing left to Mindful Eating */}
          <g transform="translate(800, 560) scale(0.9)">
            <path d="M50,0 C70,10 80,30 70,60 C60,90 30,100 -10,95 L0,115 L-30,85 L0,55 L-5,75 C20,80 40,70 50,50 C55,35 50,20 40,10 Z" fill="#fff" stroke="#8A8276" strokeWidth="3" strokeLinejoin="round"/>
          </g>
          
        </svg>

      </div>
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
        padding: '60px 0 100px',
        background: '#fff',
      } as FramerStyle}
    >
      <style>{`
        .problem-statement-box {
          border: 2px dashed rgba(248, 150, 76, 0.4);
          border-radius: 24px;
          padding: 48px;
          text-align: center;
          margin-bottom: 80px;
        }
        .problem-title {
          color: #F87D17;
          font-family: 'Inter', sans-serif;
          font-size: clamp(22px, 6vw, 32px);
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0 0 40px 0;
        }
        .problem-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 60px;
        }
        .problem-scale-img {
          width: 220px;
          height: auto;
          flex-shrink: 0;
          border-radius: 8px;
          object-fit: contain;
        }
        .problem-text {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.6;
          color: #5A5A5A;
          text-align: left;
          max-width: 500px;
          margin: 0;
        }
        .process-steps {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
        }
        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .step-icon-box {
          width: 100px;
          height: 100px;
          border: 5px solid #F8B37A;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
        }
        .step-label {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #888;
        }
        .step-arrow {
          color: #E0E0E0;
          margin-top: -30px;
        }
        @media (max-width: 900px) {
          .problem-content { flex-direction: column; text-align: center; gap: 30px; }
          .problem-text { text-align: center; }
          .process-steps { flex-wrap: wrap; justify-content: center; gap: 30px; }
          .step-arrow { display: none; }
        }
        @media (max-width: 600px) {
          .problem-statement-box { padding: 28px 18px; margin-bottom: 48px; border-radius: 18px; }
          .problem-title { margin-bottom: 24px; }
        }
        @media (max-width: 500px) {
          .process-steps { gap: 20px; }
          .step-item { gap: 10px; }
          .step-icon-box { width: 72px; height: 72px; border-width: 4px; border-radius: 18px; }
          .step-icon-box svg { width: 30px; height: 30px; }
          .step-label { font-size: 14px; }
        }
      `}</style>
      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          {/* Problem Statement Box */}
          <div className="problem-statement-box">
            <h2 className="problem-title">Problem statement</h2>
            <div className="problem-content">
              <img src="/assets/crunch/C-food.png" alt="Scale comparison of healthy vs junk food" className="problem-scale-img" />

              <p className="problem-text">
                Poor dietary choices can lead to chronic health issues such as obesity, 
                diabetes, and cardiovascular diseases, while a balanced and nutritious 
                diet is crucial for prevention and management.
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="process-steps">
            {/* Step 1: Empathize */}
            <div className="step-item">
              <div className="step-icon-box">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F87D17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <span className="step-label">Empathize</span>
            </div>

            <div className="step-arrow">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="13 17 18 12 13 7"></polyline>
                <polyline points="6 17 11 12 6 7"></polyline>
              </svg>
            </div>

            {/* Step 2: Define */}
            <div className="step-item">
              <div className="step-icon-box">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F87D17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <span className="step-label">Define</span>
            </div>

            <div className="step-arrow">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="13 17 18 12 13 7"></polyline>
                <polyline points="6 17 11 12 6 7"></polyline>
              </svg>
            </div>

            {/* Step 3: Ideate */}
            <div className="step-item">
              <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
                <Box style={contentPad}>
                  <img
                    src="/ateats%202/crunch2/Frame%201000001506.png"
                    alt=""
                    style={{
                      width: '60%',
                      height: 'auto',
                      margin: '0 auto',
                      display: 'block',
                    }}
                  />
                </Box>
              </Box>
              <span className="step-label">Ideate</span>
            </div>

            <div className="step-arrow">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="13 17 18 12 13 7"></polyline>
                <polyline points="6 17 11 12 6 7"></polyline>
              </svg>
            </div>

            {/* Step 4: Design */}
            <div className="step-item">
              <div className="step-icon-box">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F87D17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </div>
              <span className="step-label">Design</span>
            </div>

            <div className="step-arrow">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="13 17 18 12 13 7"></polyline>
                <polyline points="6 17 11 12 6 7"></polyline>
              </svg>
            </div>

            {/* Step 5: Test */}
            <div className="step-item">
              <div className="step-icon-box">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F87D17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(45deg)' }}>
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  <path d="M8 2 L16 2" />
                  <path d="M2 12 L5 12" />
                  <path d="M19 12 L22 12" />
                </svg>
              </div>
              <span className="step-label">Test</span>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Research Section ───────────────────────────────────────── */
function ResearchSection() {
  return (
    <Box
      component="section"
      style={{
        width: '100%',
        padding: '80px 0 100px',
        background: '#fff',
      } as FramerStyle}
    >
      <style>{`
        .research-header-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 80px;
        }
        @media (max-width: 700px) {
          .research-header-grid { grid-template-columns: 1fr; gap: 24px; }
        }
        .research-text {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.75;
          color: #888;
          margin: 0;
          font-weight: 500;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .stat-item h3 {
          color: #F87D17;
          font-family: 'Inter', sans-serif;
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 800;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }
        .stat-item p {
          color: #6B6B6B;
          font-family: 'Inter', sans-serif;
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.5;
          margin: 0;
          font-weight: 500;
        }
        .stats-mid-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          gap: 20px;
        }
        .stats-mid-item {
          flex: 1;
        }
        .stats-bottom-row {
          display: flex;
          justify-content: space-around;
          width: 100%;
          margin-top: 0;
        }
        @media (max-width: 900px) {
          .stats-mid-row { flex-direction: column; gap: 60px; }
          .stats-bottom-row { flex-direction: column; gap: 60px; margin-top: 60px; }
        }
        @media (max-width: 500px) {
          .stats-mid-row { gap: 40px; }
          .stats-bottom-row { gap: 40px; margin-top: 40px; }
          .stat-item h3 { font-size: clamp(36px, 11vw, 48px); margin-bottom: 8px; }
        }
      `}</style>
      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          
          <div className="research-header-grid">
            <Box style={{ ...indicator, paddingTop: 4 } as FramerStyle}>
              <span style={{ width: 12, height: 12, background: 'rgb(255, 70, 46)', display: 'inline-block', flex: 'none', borderRadius: 2 } as FramerStyle} />
              <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, fontWeight: 700, color: '#555' } as FramerStyle}>
                Research
              </span>
            </Box>
            <Box>
              <p className="research-text">
                My research, involving user interviews and surveys, revealed that a systematic integration of idea generation processes is
                essential to explore, develop, and refine innovative solutions for the challenges faced by restaurant employees and owners
              </p>
            </Box>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', alignItems: 'center', maxWidth: 1000, margin: '0 auto' }}>
            {/* Top Stat */}
            <div className="stat-item">
              <h3>65%</h3>
              <p>Think they eat<br/>healthy</p>
            </div>
            
            {/* Middle Row */}
            <div className="stats-mid-row">
              <div className="stat-item stats-mid-item">
                <h3>87%</h3>
                <p>People think its<br/>important to eat healthy<br/>diet.</p>
              </div>
              
              <div className="stats-mid-item" style={{ display: 'flex', justifyContent: 'center' }}>
                <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background Clipboard */}
                  <rect x="90" y="30" width="100" height="130" rx="12" fill="#5D529B"/>
                  <rect x="85" y="40" width="100" height="130" rx="12" fill="#6A5ACD"/>
                  
                  {/* Clipboard Lines */}
                  <rect x="100" y="60" width="70" height="6" rx="3" fill="#4B9FE3"/>
                  <rect x="100" y="75" width="50" height="6" rx="3" fill="#4B9FE3"/>
                  
                  {/* Bar Chart inside clipboard */}
                  <rect x="105" y="130" width="12" height="25" rx="4" fill="#887BCE"/>
                  <rect x="125" y="110" width="12" height="45" rx="4" fill="#887BCE"/>
                  <rect x="145" y="125" width="12" height="30" rx="4" fill="#887BCE"/>
                  <rect x="165" y="140" width="12" height="15" rx="4" fill="#887BCE"/>

                  {/* Pie Chart (Left side) */}
                  <g transform="translate(50, 100)">
                    {/* Shadow/Thickness base */}
                    <path d="M25 45 C 5 45, 5 25, 25 25 C 45 25, 65 35, 65 45 C 65 55, 45 65, 25 65 Z" fill="#2E488C"/>
                    
                    {/* Slices */}
                    <path d="M35 35 L5 25 A 30 30 0 0 1 35 5 Z" fill="#FFC107"/>
                    <path d="M35 35 L35 5 A 30 30 0 0 1 65 35 Z" fill="#4B9FE3"/>
                    <path d="M35 35 L65 35 A 30 30 0 1 1 5 25 Z" fill="#2E75B6"/>
                    
                    {/* Small cycle arrows */}
                    <path d="M15 0 C 25 -10, 45 -10, 55 0" stroke="#5D529B" strokeWidth="2" fill="none"/>
                    <polygon points="57,-2 50,-5 50,5" fill="#5D529B"/>
                  </g>

                  {/* Magnifying Glass (Right side) */}
                  <g transform="translate(130, 70)">
                    <circle cx="45" cy="45" r="26" stroke="#4B9FE3" strokeWidth="6" fill="#887BCE" fillOpacity="0.5"/>
                    <circle cx="45" cy="45" r="18" stroke="#fff" strokeWidth="2" fill="none" opacity="0.8"/>
                    {/* Handle */}
                    <path d="M60 65 L95 95" stroke="#7B61FF" strokeWidth="16" strokeLinecap="round"/>
                    <path d="M60 65 L95 95" stroke="#9B81FF" strokeWidth="8" strokeLinecap="round"/>
                    <path d="M60 65 L95 95" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
                  </g>
                </svg>
              </div>
              
              <div className="stat-item stats-mid-item">
                <h3>3/4</h3>
                <p>User want to<br/>change their diet<br/>plan.</p>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="stats-bottom-row">
              <div className="stat-item">
                <h3>75%</h3>
                <p>What To Cook Based On The<br/><b>Ingredients</b> Available.</p>
              </div>
              <div className="stat-item">
                <h3>60%</h3>
                <p>Forget To Drink Enough <b>Water</b>,<br/>And Lacks Adequate <b>Sleep</b>.</p>
              </div>
            </div>
            
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Market Research Section ──────────────────────────────────── */
function MarketResearchSection() {
  return (
    <Box
      component="section"
      style={{
        width: '100%',
        padding: '60px 0 100px',
        background: '#fff',
      } as FramerStyle}
    >
      <style>{`
        .market-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 60px;
        }
        .empathy-map-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 80px 100px;
          padding: 40px 0;
        }
        .empathy-quadrant {
          text-align: center;
          padding: 20px 40px;
        }
        .empathy-quadrant h3 {
          color: #F87D17;
          font-family: 'Inter', sans-serif;
          font-size: clamp(26px, 6vw, 36px);
          font-weight: 800;
          margin: 0 0 20px;
        }
        .empathy-quadrant p {
          color: #5A5A5A;
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2.2vw, 15px);
          line-height: 1.6;
          margin: 0;
          font-weight: 500;
        }
        
        /* The broken cross lines */
        .empathy-line-h-left {
          position: absolute;
          top: 50%;
          left: 0;
          right: 56%;
          height: 6px;
          background: #EAEAEA;
          transform: translateY(-50%);
          border-radius: 3px;
        }
        .empathy-line-h-right {
          position: absolute;
          top: 50%;
          left: 56%;
          right: 0;
          height: 6px;
          background: #EAEAEA;
          transform: translateY(-50%);
          border-radius: 3px;
        }
        .empathy-line-v-top {
          position: absolute;
          top: 0;
          bottom: 56%;
          left: 50%;
          width: 6px;
          background: #EAEAEA;
          transform: translateX(-50%);
          border-radius: 3px;
        }
        .empathy-line-v-bottom {
          position: absolute;
          top: 56%;
          bottom: 0;
          left: 50%;
          width: 6px;
          background: #EAEAEA;
          transform: translateX(-50%);
          border-radius: 3px;
        }
        
        .empathy-avatar {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
        }

        @media (max-width: 900px) {
          .empathy-map-container {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            gap: 60px;
          }
          .empathy-line-h-left, .empathy-line-h-right, .empathy-line-v-top, .empathy-line-v-bottom, .empathy-avatar {
            display: none;
          }
          .empathy-quadrant { padding: 0; }
        }
        @media (max-width: 500px) {
          .market-header { margin-bottom: 36px; }
          .empathy-map-container { gap: 40px; padding: 20px 0; }
        }
      `}</style>

      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          {/* Header */}
          <div className="market-header">
            <span style={{ width: 12, height: 12, background: 'rgb(255, 70, 46)', display: 'inline-block', borderRadius: 2 } as FramerStyle} />
            <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, fontWeight: 700, color: '#555' } as FramerStyle}>
              Market Research
            </span>
          </div>

          {/* Empathy Map */}
          <div className="empathy-map-container">
            {/* Background Lines */}
            <div className="empathy-line-h-left"></div>
            <div className="empathy-line-h-right"></div>
            <div className="empathy-line-v-top"></div>
            <div className="empathy-line-v-bottom"></div>

            {/* Central Avatar */}
            <div className="empathy-avatar">
              <img
                src="/MM.png"
                alt="User research avatar"
                loading="lazy"
                style={{ width: 200, height: 260, objectFit: 'cover' }}
              />
            </div>

            {/* Quadrant 1: Says */}
            <div className="empathy-quadrant">
              <h3>Says</h3>
              <p>Users praise the health meter for tracking nutrition and appreciate the supportive community's motivation for healthy eating.</p>
            </div>

            {/* Quadrant 2: Thinks */}
            <div className="empathy-quadrant">
              <h3>Thinks</h3>
              <p>Users believe the health meter guides better food choices, while the community fosters commitment to mindful eating.</p>
            </div>

            {/* Quadrant 3: Does */}
            <div className="empathy-quadrant">
              <h3>Does</h3>
              <p>They regularly use the health meter, engage in community interactions, and spend time preparing mindful meals.</p>
            </div>

            {/* Quadrant 4: Feels */}
            <div className="empathy-quadrant">
              <h3>Feels</h3>
              <p>They feel empowered by the health meter's control and a sense of belonging in the supportive community.</p>
            </div>

          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Competitor Analysis Section ──────────────────────────────── */
function CompetitorAnalysisSection() {
  return (
    <Box
      component="section"
      style={{
        width: '100%',
        padding: '80px 0',
      } as FramerStyle}
    >
      <style>{`
        .competitor-wrap {
          background: linear-gradient(180deg, #FFAB00 0%, #FAD776 100%);
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
          padding: 60px 40px 100px;
          text-align: center;
          font-family: 'Inter', sans-serif;
        }
        .competitor-title {
          color: #fff;
          font-size: clamp(26px, 7vw, 40px);
          font-weight: 800;
          margin: 0 0 80px;
        }
        
        /* Logos Row */
        .logos-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 120px;
          margin-bottom: 100px;
        }
        .logo-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .logo-item svg {
          width: clamp(84px, 16vw, 120px);
          height: auto;
        }
        .logo-text {
          color: #fff;
          font-weight: 700;
          font-size: 16px;
        }
        
        /* SWOT Row */
        .swot-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
        }
        .swot-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 200px;
          position: relative;
        }
        /* Swap order for W and T so text is above */
        .swot-item.reverse {
          flex-direction: column-reverse;
        }
        
        .swot-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 48px;
          font-weight: 700;
          position: relative;
          z-index: 2;
        }
        
        .swot-text {
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.6;
          margin: 24px 0;
          z-index: 2;
        }

        /* Dashed connectors */
        .connector-down {
          width: 2px;
          height: 30px;
          border-left: 2px dashed #fff;
          margin: -10px 0 10px;
          position: relative;
        }
        .connector-down::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: -4px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fff;
        }
        
        .connector-up {
          width: 2px;
          height: 30px;
          border-left: 2px dashed #fff;
          margin: 10px 0 -10px;
          position: relative;
        }
        .connector-up::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fff;
        }

        @media (max-width: 900px) {
          .logos-row { gap: 40px; flex-wrap: wrap; }
          .swot-row { flex-wrap: wrap; gap: 60px; justify-content: center; }
        }
        @media (max-width: 700px) {
          .competitor-wrap { padding-left: 20px; padding-right: 20px; }
          .competitor-title { margin-bottom: 56px; }
        }
        @media (max-width: 500px) {
          .competitor-wrap { padding: 40px 16px 64px; }
          .logos-row { gap: 24px; row-gap: 32px; margin-bottom: 60px; }
          .swot-row { gap: 36px; }
          .swot-item { width: 132px; }
          .swot-circle { width: 88px; height: 88px; font-size: 36px; }
          .swot-text { font-size: 12.5px; margin: 16px 0; }
        }
      `}</style>
      
      <div className="competitor-wrap">
        <h2 className="competitor-title">Competitor analysis</h2>

        {/* Competitor Logos */}
        <div className="logos-row">
          <div className="logo-item">
            {/* Healthifyme SVG */}
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <rect width="120" height="120" rx="30" fill="#DE232E"/>
              <circle cx="60" cy="60" r="40" stroke="#fff" strokeWidth="8"/>
              <path d="M 45 35 L 45 85 M 75 35 L 75 85 M 35 60 L 85 60" stroke="#fff" strokeWidth="8" strokeLinecap="round"/>
            </svg>
            <span className="logo-text">Healthifyme</span>
          </div>

          <div className="logo-item">
            {/* Nutra Check SVG */}
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <rect width="120" height="120" rx="30" fill="#1DA1C4"/>
              <path d="M 60 25 C 40 25 30 40 30 65 C 30 90 45 105 60 105 C 75 105 90 90 90 65 C 90 40 80 25 60 25 Z" fill="#fff"/>
              {/* Apple stem */}
              <path d="M 60 25 Q 65 15 75 15" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none"/>
              {/* Inner purple oval */}
              <ellipse cx="50" cy="65" rx="18" ry="14" fill="#9C52A1"/>
              {/* Inner cyan oval */}
              <ellipse cx="70" cy="65" rx="18" ry="14" fill="#1DA1C4"/>
              {/* Tiny text approximation inside */}
              <text x="50" y="68" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">nutra</text>
              <text x="70" y="68" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">check</text>
            </svg>
            <span className="logo-text">Nutra Check</span>
          </div>

          <div className="logo-item">
            {/* My Fitness Pal SVG */}
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <rect width="120" height="120" rx="30" fill="#0066FF"/>
              {/* Abstract jumping figure */}
              <path d="M 60 40 L 70 55 L 95 45 L 85 60 L 95 80 Q 75 70 65 60 L 50 75 L 30 85 Q 45 70 55 60 L 35 45 L 50 40 L 60 40 Z" fill="#fff"/>
              <circle cx="70" cy="25" r="5" fill="#fff"/>
            </svg>
            <span className="logo-text">My Fitness Pal</span>
          </div>
        </div>

        {/* SWOT Analysis */}
        <div className="swot-row">
          {/* S */}
          <div className="swot-item">
            <div className="swot-circle" style={{ background: '#1DA1F2' }}>S</div>
            <div className="connector-down"></div>
            <div className="swot-text">
              Personalisation<br/>
              Friendly Interface<br/>
              Community<br/>
              Wearables
            </div>
          </div>

          {/* W (Reverse) */}
          <div className="swot-item reverse">
            <div className="swot-circle" style={{ background: '#D32F2F' }}>W</div>
            <div className="connector-up"></div>
            <div className="swot-text">
              Manual Input<br/>
              Less Interaction<br/>
              Bad Market
            </div>
          </div>

          {/* O */}
          <div className="swot-item">
            <div className="swot-circle" style={{ background: '#F57C00' }}>O</div>
            <div className="connector-down"></div>
            <div className="swot-text">
              Global Expansion<br/>
              Advanced Tech<br/>
              Welness Programs
            </div>
          </div>

          {/* T (Reverse) */}
          <div className="swot-item reverse">
            <div className="swot-circle" style={{ background: '#00A88F' }}>T</div>
            <div className="connector-up"></div>
            <div className="swot-text">
              Data Concerns<br/>
              Changing Trends<br/>
              Regular Challenges
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}

/* ─── Wireframe Section ────────────────────────────────────────── */
function WireframeSection() {
  const wireframes = [
    { id: 1, src: '/assets/crunch/crunch6.png', alt: 'Wireframe 1' },
    { id: 2, src: '/assets/crunch/crunch7.png', alt: 'Wireframe 2' },
    { id: 3, src: '/assets/crunch/crunch8.png', alt: 'Wireframe 3' },
    { id: 4, src: '/assets/crunch/crunch9.png', alt: 'Wireframe 4' },
  ]

  return (
    <Box
      component="section"
      style={{
        width: '100%',
        padding: '60px 0 100px',
        background: '#fff',
      } as FramerStyle}
    >
      <style>{`
        .wireframe-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 60px;
        }
        .wireframe-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }
        .wireframe-card {
          width: 100%;
          overflow: hidden;
          display: block;
        }
        .wireframe-card img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }
      `}</style>

      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          <div className="wireframe-header">
            <span style={{ width: 12, height: 12, background: 'rgb(255, 70, 46)', display: 'inline-block', borderRadius: 2 } as FramerStyle} />
            <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, fontWeight: 700, color: '#555' } as FramerStyle}>
              Wireframe
            </span>
          </div>

          <div className="wireframe-grid">
            {wireframes.map(w => (
              <div key={w.id} className="wireframe-card">
                <img src={w.src} alt={w.alt}  />
              </div>
            ))}
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Design System Section ────────────────────────────────────── */
function DesignSystemSection() {
  const grayscale = [
    { name: 'Title-Active', hex: '#0B0A26', desc: 'Used for both links and titles.' },
    { name: 'Body', hex: '#F9F9F9', desc: 'Used for body copy text.', border: true },
    { name: 'Label', hex: '#878787', desc: 'Used for the label text.' },
    { name: 'Line', hex: '#BDBDBD', desc: 'Used for line based elements.' },
    { name: 'Input Background', hex: '#EBEBEB', desc: 'Used for input bg accessibility.' }
  ];

  const colors = [
    { name: 'Primary', hex: '#F87D17', desc: 'Used as the primary color.' },
    { name: 'ANALOGOUS', hex: '#4EC4D6', desc: 'The primary gradient.' },
    { name: 'TRIADIC', hex: '#8224FF', desc: 'An accent gradient.' }
  ];

  const defaultCol = [
    { name: 'Error', hex: '#FA4032', desc: 'Used for error states.' },
    { name: 'Success', hex: '#37C256', desc: 'Used for success states.' },
    { name: 'Warning', hex: '#F2C11D', desc: 'Used to represent caution.' },
    { name: 'White', hex: '#FFFFFF', desc: 'Used for element backgrounds.', border: true }
  ];

  const SwatchCard = ({ color, index }: { color: any, index: number }) => (
    <div className="swatch-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div 
        className="swatch-color" 
        style={{ 
          backgroundColor: color.hex, 
          border: color.border ? '1px solid #EAEAEA' : 'none' 
        }}
      ></div>
      <div className="swatch-info">
        <h4>{color.name}</h4>
        <p>{color.desc}</p>
      </div>
    </div>
  );

  return (
    <Box
      component="section"
      style={{
        width: '100%',
        padding: '80px 0 100px',
        background: '#fff',
      } as FramerStyle}
    >
      <style>{`
        .ds-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 40px;
        }
        
        .ds-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(30px, 8vw, 56px);
          font-weight: 800;
          color: #111;
          display: flex;
          align-items: center;
          gap: clamp(12px, 3vw, 24px);
          margin: 0 0 60px;
        }

        @keyframes bellRing {
          0% { transform: rotate(0); }
          10% { transform: rotate(15deg); }
          20% { transform: rotate(-10deg); }
          30% { transform: rotate(5deg); }
          40% { transform: rotate(-5deg); }
          50% { transform: rotate(0); }
          100% { transform: rotate(0); }
        }
        
        .ds-bell-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          animation: bellRing 3s infinite ease-in-out;
          transform-origin: top center;
        }
        .ds-bell-emoji {
          font-size: 60px;
          line-height: 1;
        }
        .ds-bell-badge {
          position: absolute;
          top: 0;
          right: 0;
          background: #FA4032;
          color: white;
          font-size: 14px;
          font-weight: bold;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #fff;
        }

        .ds-system-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 80px;
          gap: 40px;
        }

        .ds-text-side {
          flex: 1;
          max-width: 450px;
        }
        .ds-text-side h2 {
          font-family: 'Inter', sans-serif;
          font-size: 28px;
          color: #333;
          margin: 0 0 12px 0;
          font-weight: 700;
        }
        .ds-orange-line {
          width: 60px;
          height: 4px;
          background: #F87D17;
          border-radius: 2px;
          margin-bottom: 20px;
        }
        .ds-text-side p {
          font-family: 'Inter', sans-serif;
          color: #6B6B6B;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        .ds-palette-side {
          flex: 1;
          max-width: 500px;
        }
        .ds-palette-title {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #888;
          margin: 0 0 12px 0;
        }
        .ds-palette-bars {
          display: flex;
          height: 40px;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 8px;
        }
        .ds-palette-bars > div {
          flex: 1;
        }
        .ds-palette-hexes {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          row-gap: 4px;
        }
        .ds-hex {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          color: #A0A0A0;
          flex: 1;
          text-align: center;
        }

        .ds-columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .ds-col-title {
          font-family: 'Inter', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #4A4A68;
          margin: 0 0 30px 0;
        }

        @keyframes cardFadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .swatch-card {
          background: #fff;
          border-radius: 16px;
          padding: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          margin-bottom: 24px;
          animation: cardFadeInUp 0.6s ease-out backwards;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
          border: 1px solid #F0F0F0;
        }
        .swatch-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 16px 32px rgba(0,0,0,0.1);
        }
        
        .swatch-color {
          height: 120px;
          border-radius: 12px;
          margin-bottom: 16px;
          transition: transform 0.3s ease;
        }
        .swatch-card:hover .swatch-color {
          transform: scale(0.98);
        }
        
        .swatch-info h4 {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 800;
          color: #111;
          margin: 0 0 8px 0;
        }
        .swatch-info p {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #888;
          margin: 0;
        }

        @media (max-width: 900px) {
          .ds-system-header { flex-direction: column; }
          .ds-columns { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .ds-columns { grid-template-columns: 1fr; gap: 28px; }
          .ds-system-header { gap: 28px; margin-bottom: 48px; }
          .ds-col-title { font-size: 22px; margin-bottom: 18px; }
          .ds-bell-wrapper { width: 52px; height: 52px; }
          .ds-bell-emoji { font-size: 44px; }
          .ds-bell-badge { width: 18px; height: 18px; font-size: 11px; }
          .ds-hex { flex: 1 0 22%; font-size: 9px; }
        }
      `}</style>

      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          {/* Section Label */}
          <div className="ds-header">
            <span style={{ width: 12, height: 12, background: 'rgb(255, 70, 46)', display: 'inline-block', borderRadius: 2 } as FramerStyle} />
            <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, fontWeight: 700, color: '#555' } as FramerStyle}>
              Design system
            </span>
          </div>

          {/* Title */}
          <h1 className="ds-title">
            <span className="ds-bell-wrapper">
              <span className="ds-bell-emoji">🔔</span>
              <span className="ds-bell-badge">1</span>
            </span>
            Assets
          </h1>

          {/* Sub header: Colour System */}
          <div className="ds-system-header">
            <div className="ds-text-side">
              <h2>Colour system</h2>
              <div className="ds-orange-line"></div>
              <p>
                Orange stimulates the appetite, has an exhilarating effect, and indicates informality. 
                This is why some fast-food chains use orange in their restaurants, along with yellow, 
                to encourage people to eat.
              </p>
            </div>
            <div className="ds-palette-side">
              <p className="ds-palette-title">Monochromatic Colors of #fc8019</p>
              <div className="ds-palette-bars">
                <div style={{background: '#c45b03'}}></div>
                <div style={{background: '#d66703'}}></div>
                <div style={{background: '#e07203'}}></div>
                <div style={{background: '#fc8019'}}></div>
                <div style={{background: '#fc9e32'}}></div>
                <div style={{background: '#fd9c4b'}}></div>
                <div style={{background: '#fdaa65'}}></div>
              </div>
              <div className="ds-palette-hexes">
                <span className="ds-hex">#c45b03</span>
                <span className="ds-hex">#d66703</span>
                <span className="ds-hex">#e07203</span>
                <span className="ds-hex">#fc8019</span>
                <span className="ds-hex">#fc9e32</span>
                <span className="ds-hex">#fd9c4b</span>
                <span className="ds-hex">#fdaa65</span>
              </div>
            </div>
          </div>

          {/* Columns */}
          <div className="ds-columns">
            <div className="ds-column">
              <h3 className="ds-col-title">Grayscale</h3>
              {grayscale.map((c, i) => <SwatchCard key={c.name} color={c} index={i} />)}
            </div>
            
            <div className="ds-column">
              <h3 className="ds-col-title">Colors</h3>
              {colors.map((c, i) => <SwatchCard key={c.name} color={c} index={i} />)}
            </div>
            
            <div className="ds-column">
              <h3 className="ds-col-title">Default</h3>
              {defaultCol.map((c, i) => <SwatchCard key={c.name} color={c} index={i} />)}
            </div>
          </div>

        </Box>
      </Box>
    </Box>
  )
}

/* ─── Iconography & Grid System Section ─────────────────────────── */
function IconographyGridSection() {
  return (
    <Box
      component="section"
      style={{
        width: '100%',
        padding: '80px 0 100px',
        background: '#fff',
      } as FramerStyle}
    >
      <style>{`
        /* ── Iconography ── */
        .ico-title {
          font-family: 'Inter', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #333;
          margin: 0 0 12px;
        }
        .ico-orange-line {
          width: 50px; height: 4px;
          background: #F87D17; border-radius: 2px;
          margin-bottom: 40px;
        }
        .ico-row {
          display: flex;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .ico-box {
          border: 2px dashed #F87D17;
          border-radius: 12px;
          padding: 28px 36px;
          display: flex;
          align-items: center;
          gap: 28px;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .ico-box:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(248,125,23,0.15);
        }

        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .ico-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ico-icon-wrap:hover svg {
          animation: iconBounce 0.6s ease infinite;
        }

        .ico-label {
          font-family: 'Inter', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #4A4A68;
          white-space: nowrap;
        }
        .ico-caption {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #A0A0A0;
          text-align: center;
          margin-top: 16px;
        }

        /* ── Grid System ── */
        .grid-section-title {
          font-family: 'Inter', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #333;
          margin: 80px 0 12px;
        }
        .grid-orange-line {
          width: 50px; height: 4px;
          background: #F87D17; border-radius: 2px;
          margin-bottom: 50px;
        }

        /* Grid diagram */
        .grid-diagram-outer {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 80px 200px;
          min-height: 680px;
        }
        .grid-rect {
          position: relative;
          width: 300px;
          height: 520px;
          background: rgba(248, 125, 23, 0.10);
          border-radius: 28px;
          overflow: hidden;
          flex-shrink: 0;
        }
        /* 3 darker gutter strips inside the rectangle */
        .grid-gutter-strip {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 16px;
          background: rgba(248, 125, 23, 0.28);
          border-radius: 2px;
        }

        /* annotation shared */
        .ga {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Inter', sans-serif;
          white-space: nowrap;
        }
        .ga-label { font-weight: 800; color: #F87D17; font-size: 17px; display: block; }
        .ga-num   { font-weight: 600; color: #333;    font-size: 15px; display: block; text-align: center; }
        .ga-dash  { border-top: 1.5px dashed #7A7A9A; flex: 1; min-width: 28px; }
        .ga-dot   { width: 9px; height: 9px; border-radius: 50%; background: #4A4A68; flex-shrink: 0; }

        @keyframes annotationFadeIn {
          from { opacity: 0; transform: translateX(-16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .ga { animation: annotationFadeIn 0.7s ease-out backwards; }

        @media (max-width: 700px) {
          .ico-row { flex-direction: column; align-items: flex-start; }
          .grid-diagram-outer { padding: 40px 20px; }
        }
        /* Phones: stack diagram + annotations vertically so nothing overflows */
        @media (max-width: 700px) {
          .grid-diagram-outer {
            flex-direction: column;
            gap: 28px;
            padding: 16px 0;
            min-height: 0;
          }
          .ga {
            position: static !important;
            inset: auto !important;
            transform: none !important;
            justify-content: center;
            animation-name: none;
          }
          .ga .ga-dash { max-width: 64px; }
          .grid-rect { width: min(300px, 82vw); height: auto; aspect-ratio: 300 / 520; }
        }
        @media (max-width: 480px) {
          .ico-box { padding: 18px 20px; gap: 18px; border-radius: 10px; }
          .ico-box svg { width: 38px; height: 38px; }
          .ico-label { white-space: normal; font-size: 22px; }
          .grid-section-title { margin-top: 56px; }
        }
      `}</style>

      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>

          {/* ── Iconography ── */}
          <h2 className="ico-title">Iconography</h2>
          <div className="ico-orange-line" />

          <img src='./assets/crunch/crunch11.png' alt='Iconography' style={{ width: '100%', height: 'auto' }} />


          {/* ── Grid System ── */}
          <h2 className="grid-section-title">Grid system</h2>
          <div className="grid-orange-line" />

          <img src="/assets/crunch/cr1.png" alt="Grid system" style={{ width: '100%', height: 'auto', display: 'block' }} />

        </Box>
      </Box>
    </Box>
  )
}

/* ─── Typography Section ───────────────────────────────────────── */
function TypographySection() {
  const rows = [
    { size: 8,  leading: 10,  leadNote: '(not sure)', tracking: 0.21 },
    { size: 9,  leading: 11,  leadNote: '(not sure)', tracking: 0.17 },
    { size: 10, leading: 12,  leadNote: '(not sure)', tracking: 0.12 },
    { size: 11, leading: 13,  leadNote: '',           tracking: 0.06 },
    { size: 12, leading: 16,  leadNote: '',           tracking: 0 },
    { size: 13, leading: 16,  leadNote: '(website says 16)', tracking: -0.08 },
    { size: 14, leading: 19,  leadNote: '',           tracking: -0.15 },
    { size: 15, leading: 20,  leadNote: '',           tracking: -0.23 },
    { size: 16, leading: 21,  leadNote: '',           tracking: -0.31 },
    { size: 17, leading: 22,  leadNote: '',           tracking: -0.43 },
    { size: 18, leading: 23,  leadNote: '',           tracking: -0.44 },
    { size: 19, leading: 24,  leadNote: '',           tracking: -0.45 },
    { size: 20, leading: 25,  leadNote: '',           tracking: -0.45 },
    { size: 21, leading: 27,  leadNote: '(not sure)', tracking: -0.36 },
    { size: 22, leading: 28,  leadNote: '',           tracking: -0.26 },
    { size: 23, leading: 29,  leadNote: '',           tracking: -0.10 },
    { size: 25, leading: 31,  leadNote: '',           tracking: 0.15 },
    { size: 27, leading: 33,  leadNote: '',           tracking: 0.29 },
    { size: 28, leading: 34,  leadNote: '',           tracking: 0.38 },
    { size: 30, leading: 37,  leadNote: '',           tracking: 0.40 },
    { size: 34, leading: 41,  leadNote: '',           tracking: 0.40 },
    { size: 40, leading: 48,  leadNote: '',           tracking: 0.37 },
    { size: 48, leading: 57,  leadNote: '',           tracking: 0.35 },
  ];

  return (
    <Box
      component="section"
      style={{ width: '100%', padding: '80px 0 100px', background: '#fff' } as FramerStyle}
    >
      <style>{`
        .typo-header {
          display: flex; align-items: center; gap: 10px; margin-bottom: 48px;
        }
        .typo-section-title {
          font-family: 'Inter', sans-serif;
          font-size: 28px; font-weight: 700; color: #333;
          margin: 0 0 12px;
        }
        .typo-orange-line {
          width: 50px; height: 4px;
          background: #F87D17; border-radius: 2px;
          margin-bottom: 48px;
        }
        .typo-sub-title {
          font-family: 'Inter', sans-serif;
          font-size: 22px; font-weight: 700; color: #111;
          margin: 0 0 32px;
        }

        /* Table */
        .typo-table-scroll {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        .typo-table {
          width: 100%;
          min-width: 760px;
          border-collapse: collapse;
          font-family: 'Inter', sans-serif;
        }
        .typo-table th {
          font-size: 12px; font-weight: 700; color: #999;
          text-align: left;
          padding: 8px 12px 16px;
          border-bottom: 1.5px solid #F0F0F0;
          white-space: nowrap;
        }
        .typo-table td {
          padding: 6px 12px;
          border-bottom: 1px solid #F7F7F7;
          color: #222;
          vertical-align: middle;
          transition: background 0.2s;
        }
        .typo-table tr {
          transition: background 0.2s;
        }
        .typo-table tbody tr:hover td {
          background: rgba(248, 125, 23, 0.04);
        }

        /* per-column style variants */
        .typo-regular    { font-weight: 400; }
        .typo-semibold   { font-weight: 600; }
        .typo-bold       { font-weight: 800; }
        .typo-underlined { font-weight: 400; text-decoration: underline; }
        .typo-uppercase  { font-weight: 400; text-transform: uppercase; letter-spacing: 0.04em; }
        .typo-upperfill  { font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; }

        .typo-meta {
          font-size: 12px !important; color: #888 !important;
        }
        .typo-lead-note {
          font-size: 11px; color: #BBB; display: block;
        }

        @keyframes typoRowIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .typo-table tbody tr {
          animation: typoRowIn 0.4s ease-out backwards;
        }
      `}</style>

      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          {/* Label */}
          <div className="typo-header">
            <span style={{ width: 12, height: 12, background: 'rgb(255,70,46)', display: 'inline-block', borderRadius: 2 } as FramerStyle} />
            <span style={{ fontFamily: '"Inter",sans-serif', fontSize: 14, fontWeight: 700, color: '#555' } as FramerStyle}>
              Typography
            </span>
          </div>

          <h2 className="typo-section-title">Typography</h2>
          <div className="typo-orange-line" />
          <p className="typo-sub-title">Typography</p>

          <div className="typo-table-scroll">
            <table className="typo-table">
            <thead>
              <tr>
                <th>Regular</th>
                <th>Semibold</th>
                <th>Bold</th>
                <th>Underlined</th>
                <th>Uppercase</th>
                <th>Uppercase fill</th>
                <th>Leading (points)</th>
                <th>Tracking (points)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ size, leading, leadNote, tracking }, i) => (
                <tr key={size} style={{ animationDelay: `${i * 0.03}s` }}>
                  <td style={{ fontSize: size }} className="typo-regular">{size}</td>
                  <td style={{ fontSize: size }} className="typo-semibold">{size}</td>
                  <td style={{ fontSize: size }} className="typo-bold">{size}</td>
                  <td style={{ fontSize: size }} className="typo-underlined">{size}</td>
                  <td style={{ fontSize: size }} className="typo-uppercase">{size}</td>
                  <td style={{ fontSize: size }} className="typo-upperfill">{size}</td>
                  <td className="typo-meta">
                    {leading}
                    {leadNote && <span className="typo-lead-note">{leadNote}</span>}
                  </td>
                  <td className="typo-meta">
                    {tracking > 0 ? `+${tracking.toFixed(2)}` : tracking === 0 ? '0' : tracking.toFixed(2)}
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Designs Section ───────────────────────────────────────────── */
function DesignsSection() {
  const [activeTab, setActiveTab] = React.useState('All');

  const screens = [
    { id: 1, category: 'Onboarding', title: 'Welcome Screen', src: '/assets/crunch/crunch15.png' },
    { id: 2, category: 'Onboarding', title: 'Splash Screen', src: '/assets/crunch/crunch16.png' },
    { id: 3, category: 'Onboarding', title: 'Sign Up', src: '/assets/crunch/crunch17.png' },
    { id: 4, category: 'Onboarding', title: 'Login', src: '/assets/crunch/crunch18.png' },
    { id: 5, category: 'Onboarding', title: 'Permissions', src: '/assets/crunch/crunch19.png' },
    { id: 6, category: 'Onboarding', title: 'Profile Setup', src: '/assets/crunch/crunch20.png' },
    { id: 7, category: 'Trackers', title: 'Hydration Tracker', src: '/assets/crunch/crunch21.png' },
    { id: 8, category: 'Trackers', title: 'BMI Tracker', src: '/assets/crunch/crunch22.png' },
    { id: 9, category: 'Trackers', title: 'Calorie Tracker', src: '/assets/crunch/crunch23.png' },
    { id: 10, category: 'Trackers', title: 'Progress Chart', src: '/assets/crunch/crunch24.png' },
    { id: 11, category: 'Trackers', title: 'Goals', src: '/assets/crunch/crunch25.png' },
    { id: 12, category: 'Trackers', title: 'Weekly Report', src: '/assets/crunch/crunch26.png' },
    { id: 13, category: 'Recipes', title: 'Recipe List', src: '/assets/crunch/crunch27.png' },
    { id: 14, category: 'Recipes', title: 'Recipe Detail', src: '/assets/crunch/crunch28.png' },
    { id: 15, category: 'Recipes', title: 'Ingredients', src: '/assets/crunch/crunch29.png' },
    { id: 16, category: 'Recipes', title: 'Cooking Steps', src: '/assets/crunch/crunch30.png' },
    { id: 17, category: 'Recipes', title: 'Nutrition Info', src: '/assets/crunch/crunch31.png' },
    { id: 18, category: 'Recipes', title: 'Favorites', src: '/assets/crunch/crunch32.png' },
    { id: 19, category: 'Core', title: 'Dashboard', src: '/assets/crunch/crunch33.png' },
    { id: 20, category: 'Core', title: 'Meal Plan', src: '/assets/crunch/crunch34.png' },
    { id: 21, category: 'Core', title: 'Scan Ingredient', src: '/assets/crunch/crunch35.png' },
    { id: 22, category: 'Core', title: 'Shopping List', src: '/assets/crunch/crunch36.png' },
    { id: 23, category: 'Core', title: 'Notifications', src: '/assets/crunch/crunch37.png' },
    { id: 24, category: 'Core', title: 'Settings', src: '/assets/crunch/crunch38.png' },
    { id: 25, category: 'Core', title: 'Profile', src: '/assets/crunch/crunch39.png' },
    { id: 26, category: 'Core', title: 'Help Center', src: '/assets/crunch/crunch40.png' },
  ];

  const filteredScreens = activeTab === 'All' 
    ? screens 
    : screens.filter(s => s.category === activeTab);

  return (
    <Box
      component="section"
      style={{
        width: '100%',
        padding: '80px 0 100px',
        background: '#fff',
      } as FramerStyle}
    >
      <style>{`
        .designs-header-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 60px;
        }
        @media (max-width: 700px) {
          .designs-header-grid { grid-template-columns: 1fr; gap: 24px; }
        }
        .designs-text {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.75;
          color: #888;
          margin: 0;
          font-weight: 500;
        }
        .tab-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 48px;
          justify-content: center;
        }
        .tab-btn {
          border: none;
          background: #F5F5F7;
          color: #555;
          padding: 8px 20px;
          border-radius: 20px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .tab-btn.active {
          background: #FA8C16;
          color: #fff;
          box-shadow: 0 4px 12px rgba(250,140,22,0.25);
        }
        .tab-btn:hover {
          transform: translateY(-2px);
        }

        .phone-mockups-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          width: 100%;
        }
        @media (max-width: 900px) {
          .phone-mockups-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .phone-mockups-grid { grid-template-columns: 1fr; }
          .tab-bar { margin-bottom: 36px; }
        }

        /* Image Card styling */
        .phone-frame {
          width: 100%;
          border-radius: 0;
          background: #fff;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          margin: 0;
          box-sizing: border-box;
        }
        .phone-frame img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }
        .phone-screen-title {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #999;
          font-weight: 600;
          text-align: center;
          margin-top: 16px;
        }
      `}</style>
      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          {/* Label Header */}
          <div className="designs-header-grid">
            <Box style={{ ...indicator, paddingTop: 4 } as FramerStyle}>
              <span style={{ width: 12, height: 12, background: 'rgb(255, 70, 46)', display: 'inline-block', flex: 'none', borderRadius: 2 } as FramerStyle} />
              <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, fontWeight: 700, color: '#555' } as FramerStyle}>
                Designs
              </span>
            </Box>
            <Box>
              <p className="designs-text">
                These high-fidelity designs were created to establish user-friendly and modern interfaces based on the visual design principles.
              </p>
            </Box>
          </div>

          {/* Category tabs */}
          <div className="tab-bar">
            {['All', 'Onboarding', 'Trackers', 'Recipes', 'Core'].map(tab => (
              <button 
                key={tab} 
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid of screens */}
          <div className="phone-mockups-grid">
            {filteredScreens.map(s => (
              <div key={s.id} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div className="phone-frame">
                  <img src={s.src} alt={s.title} />
                </div>
                <div className="phone-screen-title">{s.title}</div>
              </div>
            ))}
          </div>

        </Box>
      </Box>
    </Box>
  )
}

/* ─── Testing Results Section ───────────────────────────────────── */
function TestingResultsSection() {
  return (
    <Box
      component="section"
      style={{
        width: '100%',
        padding: '80px 0 100px',
        background: '#fff',
      } as FramerStyle}
    >
      <style>{`
        .testing-header-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 60px;
        }
        @media (max-width: 700px) {
          .testing-header-grid { grid-template-columns: 1fr; gap: 24px; }
        }
        .testing-text {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.75;
          color: #888;
          margin: 0;
          font-weight: 500;
        }

        /* Heatmap layout */
        .heatmap-container {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 40px;
          margin-bottom: 80px;
        }
        @media (max-width: 800px) {
          .heatmap-container { flex-direction: column; text-align: center; }
        }

        @keyframes heatPulse {
          0% { transform: scale(0.95); opacity: 0.75; }
          50% { transform: scale(1.15); opacity: 0.95; }
          100% { transform: scale(0.95); opacity: 0.75; }
        }
        .heatmap-spot {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 99;
          background: radial-gradient(circle, rgba(255,77,79,1) 0%, rgba(255,229,143,0.8) 35%, rgba(82,196,26,0.4) 65%, rgba(0,0,0,0) 85%);
          animation: heatPulse 2.5s infinite ease-in-out;
        }

        /* SUS Layout */
        .sus-container {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 40px;
        }
        @media (max-width: 800px) {
          .sus-container { flex-direction: column; text-align: center; }
        }
        
        .sus-score-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(80px, 12vw, 130px);
          font-weight: 900;
          color: #FA8C16;
          line-height: 1;
          letter-spacing: -0.05em;
        }
        .sus-container svg { max-width: 100%; height: auto; }
        @media (max-width: 500px) {
          .sus-container { gap: 24px; }
        }
      `}</style>
      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          {/* Label Header */}
          <div className="testing-header-grid">
            <Box style={{ ...indicator, paddingTop: 4 } as FramerStyle}>
              <span style={{ width: 12, height: 12, background: 'rgb(255, 70, 46)', display: 'inline-block', flex: 'none', borderRadius: 2 } as FramerStyle} />
              <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, fontWeight: 700, color: '#555' } as FramerStyle}>
                Testing Result
              </span>
            </Box>
            <Box>
              <p className="testing-text">
                To validate design assumptions and identify areas for improvement, the project moved into a rigorous testing phase. This involved A/B testing key design elements, measuring overall usability with the System Usability Scale (SUS), and employing heatmap analysis to understand user behavior.
              </p>
            </Box>
          </div>

          {/* Heat map block */}
          <div className="testing-header-grid" style={{ marginBottom: '48px' }}>
            <Box style={{ ...indicator, paddingTop: 4 } as FramerStyle}>
              <span style={{ width: 12, height: 12, background: 'rgb(255, 70, 46)', display: 'inline-block', flex: 'none', borderRadius: 2 } as FramerStyle} />
              <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, fontWeight: 700, color: '#555' } as FramerStyle}>
                Heat map
              </span>
            </Box>
            <Box>
              <p className="testing-text">
                A significant 75% of testers left the expected path. Help bring them back by analysing off-path, exit and misclick rates to improve your future flow.
              </p>
            </Box>
          </div>

          {/* Heat map image */}
          <div style={{ width: '100%', overflow: 'hidden', marginBottom: '80px', display: 'flex', justifyContent: 'center' }}>
            <img src="/assets/crunch/crunch.png" alt="Heat map analysis" style={{ width: 'auto', height: 'auto', display: 'block', maxWidth: '100%' }}  />
          </div>

          {/* SUS rating scale block */}
          <div className="testing-header-grid" style={{ marginBottom: '48px' }}>
            <Box style={{ ...indicator, paddingTop: 4 } as FramerStyle}>
              <span style={{ width: 12, height: 12, background: 'rgb(255, 70, 46)', display: 'inline-block', flex: 'none', borderRadius: 2 } as FramerStyle} />
              <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, fontWeight: 700, color: '#555' } as FramerStyle}>
                SUS
              </span>
            </Box>
            <Box>
              <p className="testing-text">
                Participants provided an SUS rating, which served as a key indicator of the product's perceived usability. The below score reflects the users collective assessment of the system's effectiveness, efficiency, and satisfaction during interaction, offering valuable insights into the overall user experience.
              </p>
            </Box>
          </div>

          {/* Score & Gauge indicator illustration */}
          <div className="sus-container">
            <div className="sus-score-text">89</div>
            
            <img src="/assets/crunch/crunch41.png" alt="SUS score gauge" style={{ maxWidth: 320, width: '100%', height: 'auto', display: 'block' }}  />
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── Learning Section ──────────────────────────────────────────── */
function LearningSection() {
  return (
    <Box
      component="section"
      style={{ width: '100%', padding: '80px 0 100px', background: '#fff' } as FramerStyle}
    >
      <style>{`
        .learning-banner {
          width: 100%;
          height: 340px;
          background: linear-gradient(135deg, #FA8C16, #FF6B00);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          overflow: hidden;
          position: relative;
          margin-top: 48px;
        }
        .learning-banner-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(48px, 6vw, 72px);
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.03em;
          display: flex;
          align-items: center;
          gap: 0;
        }
        .learning-logo-circle {
          width: clamp(70px, 9vw, 110px);
          height: clamp(70px, 9vw, 110px);
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 -4px;
          flex-shrink: 0;
        }
        @media (max-width: 600px) {
          .learning-banner { height: 220px; border-radius: 12px; }
        }
        @media (max-width: 480px) {
          .learning-banner { height: 170px; }
          .learning-banner-text { font-size: 34px; }
          .learning-logo-circle { width: 54px; height: 54px; }
          .learning-logo-circle svg { max-width: 70%; max-height: 70%; }
        }
      `}</style>
      <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
        <Box style={contentPad}>
          {/* Header */}
          <div className="testing-header-grid" style={{ marginBottom: 0 }}>
            <Box style={{ ...indicator, paddingTop: 4 } as FramerStyle}>
              <span style={{ width: 12, height: 12, background: 'rgb(255, 70, 46)', display: 'inline-block', flex: 'none', borderRadius: 2 } as FramerStyle} />
              <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, fontWeight: 700, color: '#555' } as FramerStyle}>
                Learning
              </span>
            </Box>
            <Box>
              <p className="testing-text">
                By focusing on the core principles of user-centered design, I gained a deeper understanding of how to create truly engaging products. This project reinforced the value of iterative testing as a means to continuously refine and improve the user experience. Integrating user feedback to ensure the design resonated with their expectations. The strategic implementation of gamification promoted user motivation and sustained engagement. I learned how to balance user needs with business objectives, ensuring the final design not only met user expectations but also aligned with overarching business goals, with key usability principles and UX laws at heart.
              </p>
            </Box>
          </div>

          {/* Orange Crunch Banner */}
          <div className="learning-banner">
            <Box style={{ ...container, maxWidth: '100%' } as FramerStyle}>
              <Box style={contentPad}>
                <img
                  src="/ateats%202/crunch2/Frame%201000001483.png"
                  alt=""
                />
              </Box>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* ─── MoreWorkSection removed ────────────────────────────────── */

/* ─── Page ─────────────────── */
/* ─── Crunch Live Section ───────────────────────────────────── */
function CrunchLiveSection() {
  return (
    <Box
      component="section"
      className="crunch-live-section"
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
          <h2 className="al-title">Crunch® Live</h2>
          <p className="al-desc">
            Curious to see this project in action? Step through the full Crunch case study to see how the mindful eating app was researched, designed, tested and shipped.
          </p>
          <a
            href="https://www.figma.com/proto/PuWyfn3NqGrfGdIvTQtVnt/Crunch-Application?node-id=311-9398&viewport=662%2C283%2C0.17&t=Cm2yRqiYKDsAQ07F-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=311%3A9398&page-id=2%3A15128"
            target="_blank"
            rel="noopener noreferrer"
            className="al-btn"
          >
            <span>●</span> Take me to Crunch →
          </a>
        </Box>
      </Box>
    </Box>
  )
}

function CrunchPage() {
  return (
    <div
      id="main"
      className="crunch-page"
      data-framer-hydrate-v2={HYDRATE}
      data-framer-ssr-released-at="2026-07-03T11:31:48.672Z"
      data-framer-page-optimized-at="2026-07-05T00:16:06.700Z"
      data-framer-generated-page
    >
      <style>{pageResponsiveCss}</style>
      <div className="crunch-side-lines" aria-hidden="true">
        <span className="crunch-side-lines-star crunch-side-lines-star-left crunch-side-lines-star-bottom" />
        <span className="crunch-side-lines-star crunch-side-lines-star-right crunch-side-lines-star-bottom" />
      </div>
      <Box
        component="div"
        className="framer-hTG3P framer-emw559"
        data-layout-template="true"
        style={{ minHeight: '100vh', width: 'auto' } as FramerStyle}
      >
        <Navbar />

        <Box
          component="div"
          data-framer-root
          className="framer-LRfZ0 framer-3jfDI framer-jlIPi framer-RYqUR framer-merrA framer-VGfb4 framer-EIDUe framer-et5t2c"
          style={{ minHeight: '100vh', width: 'auto', display: 'contents' } as FramerStyle}
        >
          <Box component="main" className="framer-xr6yl" data-framer-name="Main">
            <CrunchLiveSection />
            <CrunchHero />
            <ProblemSection />
            <MindMapSection />
            <DesignProcessSection />
            <ResearchSection />
            <MarketResearchSection />
            <CompetitorAnalysisSection />
            <WireframeSection />
            <DesignSystemSection />
            <IconographyGridSection />
            <TypographySection />
            <DesignsSection />
            <TestingResultsSection />
            <LearningSection />
            <MoreWorkMarquee currentPath="/crunch" />
          </Box>
        </Box>
      </Box>

      <SpriteIcons />
    </div>
  )
}

export default CrunchPage
