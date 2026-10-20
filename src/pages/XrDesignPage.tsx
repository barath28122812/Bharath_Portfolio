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
  .xr-page { --crunch-pad: 24px; overflow-x: clip; position: relative; }
  /* Full-page side lines use the shared .crunch-side-lines rule in index.css */
  .xr-page .crunch-side-lines { z-index: 5; }
  @media (max-width: 640px) { .xr-page { --crunch-pad: 18px; } }
  @media (max-width: 400px) { .xr-page { --crunch-pad: 14px; } }
  @media (max-width: 700px) {
    .xr-page main > section { padding-top: 36px !important; padding-bottom: 48px !important; }
  }
`

/* â”€â”€â”€ Section Label â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€â”€ Sail Safe Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function SailSafeSection() {
  return (
    <Box
      component="section"
      id="sail-safe-case-study"
      className="sailsafe-section"
      style={{ width: '100%', background: '#fff', padding: '40px 0 60px' } as FramerStyle}
    >
      <style>{`
        .ss-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #333;
        }
        .ss-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 70px;
        }
        .ss-badge {
          display: inline-block;
          background: #EBF4F6;
          color: #3D8699;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.02em;
          padding: 4px 14px;
          border-radius: 100px;
          margin-bottom: 16px;
        }
        .ss-badge svg {
          vertical-align: -2px;
          margin-right: 6px;
        }
        .ss-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(38px, 6vw, 64px);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.05;
          color: #111;
          margin: 0 0 16px 0;
        }
        .ss-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2.2vw, 15px);
          line-height: 1.7;
          color: #666;
          max-width: 680px;
          margin: 0 auto;
        }
        .ss-problem-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 48px;
        }
        @media (max-width: 700px) {
          .ss-problem-grid { grid-template-columns: 1fr; gap: 20px; }
        }
        .ss-problem-heading {
          font-family: 'Inter', sans-serif;
          font-size: clamp(20px, 3.2vw, 30px);
          font-weight: 700;
          color: #111;
          margin: 0 0 24px 0;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }
        .ss-problem-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2.2vw, 15px);
          line-height: 1.75;
          color: #666;
          margin: 0;
        }
        .ss-image-card {
          width: 100%;
          background: #f2f2f2;
          border-radius: 24px;
          padding: 48px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }
        .ss-image-card img {
          max-width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }
        @media (max-width: 600px) {
          .ss-image-card {
            padding: 24px 16px;
            border-radius: 16px;
          }
        }
      `}</style>
      <Box style={container}>
        <Box style={{ ...contentPad, paddingTop: 40 } as FramerStyle}>
          {/* Hero Content */}
          <div className="ss-hero">
            <div className="ss-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3D8699" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
              Case study
            </div>
            <h1 className="ss-title">Sail safe®</h1>
            <p className="ss-subtitle">
              Safely maneuvering large vessels through complex waterways places immense pressure on maritime crews, requiring exceptional skill and constant vigilance to avoid potential hazards
            </p>
          </div>

          {/* Problem Section */}
          <div className="ss-problem-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Problem" />
            </Box>
            <div>
              <h2 className="ss-problem-heading">
                Enhancing Maritime Navigation: Safer, More Efficient Shipping for a Globalised World.
              </h2>
              <p className="ss-problem-body">
                The increasing number of ships navigating through congested and hazardous waters highlights the urgent need for innovative solutions that will upgrade tech , improve safety, reduce risk, and ensure the efficient delivery of goods across the globe, boosting economic gain and profit gain.
              </p>
            </div>
          </div>

          {/* Image Card Section */}
          <div className="ss-image-card">
            <img src="/sail_safe_headset.png" alt="Sail safe HoloLens Headset" />
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* â”€â”€â”€ Ideation Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function IdeationSection() {
  return (
    <Box
      component="section"
      className="ideation-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 40px' } as FramerStyle}
    >
      <style>{`
        .id-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 700;
          color: #111;
          margin: 0 0 32px 0;
          letter-spacing: -0.02em;
        }
        .id-diagram-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
        }
        .id-diagram-img {
          width: 100%;
          max-width: 950px;
          height: auto;
          display: block;
          object-fit: contain;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <h2 className="id-title">Ideation</h2>
          <div className="id-diagram-wrap">
            <img
              src="/assets/XR%20design/img2.png"
              alt="Ideation Mind Map"
              className="id-diagram-img"
            />
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* â”€â”€â”€ Process Wave Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function ProcessWaveSection() {
  return (
    <Box
      component="section"
      className="process-wave-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 60px' } as FramerStyle}
    >
      <style>{`
        .pw-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 40px;
        }
        @media (max-width: 700px) {
          .pw-grid { grid-template-columns: 1fr; gap: 20px; margin-bottom: 30px; }
        }
        .pw-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2.2vw, 15px);
          line-height: 1.75;
          color: #888888;
          margin: 0;
          max-width: 820px;
        }
        .pw-diagram-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
        }
        .pw-diagram-img {
          width: 100%;
          max-width: 950px;
          height: auto;
          display: block;
          object-fit: contain;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="pw-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Process" />
            </Box>
            <p className="pw-body">
              Began with empathising with salon staff and clients to understand their needs. We then defined the core problems, ideated creative solutions, and rapidly prototyped and tested iterations to ensure usability and effectiveness.
            </p>
          </div>

          <div className="pw-diagram-wrap">
            <img
              src="/assets/XR%20design/xr3.png"
              alt="Process Flow: Empathise, Define, Ideate, Prototype"
              className="pw-diagram-img"
            />
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* â”€â”€â”€ User Research Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function UserResearchSection() {
  return (
    <Box
      component="section"
      className="user-research-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 40px' } as FramerStyle}
    >
      <style>{`
        .ur-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 700px) {
          .ur-grid { grid-template-columns: 1fr; gap: 20px; }
        }
        .ur-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2.2vw, 15px);
          line-height: 1.75;
          color: #888888;
          margin: 0;
          max-width: 820px;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="ur-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="User Research" />
            </Box>
            <p className="ur-body">
              Recognising the importance of understanding user needs, I conducted a phone interview with a counsellor. This conversation focused on the challenges they face daily, including difficulty managing appointments, accessing client information, and prioritising their workload. They also shared frustrations with their current CRM. This deep-dive session gave me a solid first step for identifying major setbacks. This initial exploration emphasised the urgent requirement to improve service accessibility, streamline booking processes, and reduce administrative overhead, driving the design and evolution of new functionalities.
            </p>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* â”€â”€â”€ Insights Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function InsightsSection() {
  return (
    <Box
      component="section"
      className="insights-section"
      style={{ width: '100%', background: '#fff', padding: '40px 0 60px' } as FramerStyle}
    >
      <style>{`
        .ins-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 700;
          color: #111;
          margin: 0 0 48px 0;
          letter-spacing: -0.02em;
        }
        .ins-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          max-width: 950px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .ins-row {
            flex-direction: column;
            text-align: center;
            gap: 24px;
          }
        }
        .ins-avatar-wrap {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: #EAEAEA;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
          padding: 8px;
          box-sizing: border-box;
        }
        .ins-avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
        .ins-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(13.5px, 2vw, 15px);
          line-height: 1.75;
          color: #666;
          margin: 0;
          flex: 1;
          max-width: 540px;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <h2 className="ins-title">Insights</h2>
          <div className="ins-row">
            <div className="ins-avatar-wrap">
              <img
                src="/user_research_avatar.png"
                alt="User Interview Counsellor Avatar"
                className="ins-avatar-img"
              />
            </div>
            <p className="ins-text">
              During my interview, they emphasised feeling overwhelmed by the sheer number of appointments, making it hard to prioritise and follow up with clients effectively. This is compounded by the fact that managers may lack key details about the services, hindering their ability to answer inquiries. She also stressed that automated follow-up reminders and notifications are absolutely crucial for providing consistent client support.
            </p>
            <div className="ins-avatar-wrap">
              <img
                src="/user_research_avatar.png"
                alt="User Interview Counsellor Avatar"
                className="ins-avatar-img"
              />
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* â”€â”€â”€ User Personas Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function UserPersonasSection() {
  const joeGoals = [
    'Continuous updates on maritime conditions to prevent disasters.',
    'Access real-time information on underwater obstacles such as wrecks, reefs, and shoals to mitigate accidents.',
    'Attaining a journey free from accidents or incidents.',
    'User-friendly technology facilitating the transfer of manual expertise.',
  ]

  const joeFrustrations = [
    'Unanticipated weather conditions causing disruptions.',
    'Undetected disasters such as wrecks, reefs, and shoals leading to accidents.',
    'During harsh weather conditions, visibility is reduced, making it challenging to accurately assess and calculate the distance between vessels.',
  ]

  const ameliaGoals = [
    'Monitor the distance between her ship and others in the vicinity.',
    'Navigate her course to the destination while dynamically assessing alternative ports.',
    'Ensure the safe navigation of her ship through challenging waters, prioritizing crew safety and cargo security.',
    'Streamline operations to meet delivery deadlines and enhance fuel efficiency.',
    'Stay abreast of the latest navigation technology advancements for continual improvement in the ship\'s capabilities.',
  ]

  const ameliaFrustrations = [
    'Unforeseen weather conditions that disrupt her carefully planned routes.',
    'Equipment malfunctions that require immediate attention and repair.',
    'Outdated navigation systems that hinder efficiency and increase the risk of errors.',
    'Regulatory changes and compliance issues that demand constant adaptation.',
  ]

  return (
    <Box
      component="section"
      className="personas-section"
      style={{ width: '100%', background: '#fff', padding: '40px 0 60px' } as FramerStyle}
    >
      <style>{`
        .pers-card {
          width: 100%;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          background: #fff;
          overflow: hidden;
          margin-bottom: 40px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          display: flex;
        }
        @media (max-width: 900px) {
          .pers-card { flex-direction: column; }
        }
        .pers-photo-col {
          width: 260px;
          flex-shrink: 0;
          background: #F8FAFC;
          display: flex;
        }
        @media (max-width: 900px) {
          .pers-photo-col { width: 100%; height: 320px; }
        }
        .pers-photo-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pers-content-col {
          flex: 1;
          padding: 32px 40px;
          box-sizing: border-box;
        }
        @media (max-width: 600px) {
          .pers-content-col { padding: 24px 18px; }
        }
        .pers-header {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          flex-direction: column;
          margin-bottom: 24px;
          border-bottom: 1px solid #EDF2F7;
          padding-bottom: 16px;
        }
        .pers-tag {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #718096;
          text-transform: uppercase;
        }
        .pers-name {
          font-family: 'Inter', sans-serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          color: #25346A;
          margin: 0;
          line-height: 1;
        }
        .pers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        @media (max-width: 768px) {
          .pers-grid { grid-template-columns: 1fr; gap: 24px; }
        }
        .pers-section-title {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #25346A;
          margin: 0 0 8px 0;
        }
        .pers-text {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          line-height: 1.6;
          color: #4A5568;
          margin: 0 0 16px 0;
        }
        .pers-list {
          margin: 0 0 16px 0;
          padding-left: 0;
          list-style: none;
        }
        .pers-list li {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          line-height: 1.6;
          color: #4A5568;
          margin-bottom: 6px;
          position: relative;
          padding-left: 14px;
        }
        .pers-list li::before {
          position: absolute;
          left: 0;
          color: #25346A;
          font-weight: bold;
        }
        .pers-demo-list {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          line-height: 1.6;
          color: #4A5568;
          margin-bottom: 16px;
        }
        .pers-demo-list strong {
          color: #2D3748;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          {/* Persona 1: Joe */}
          <div className="pers-card">
            <div className="pers-photo-col">
              <img src="/persona_joe_photo.png" alt="User Persona Joe" />
            </div>
            <div className="pers-content-col">
              <div className="pers-header">
                <span className="pers-tag">USER PERSONA</span>
                <h3 className="pers-name">Joe</h3>
              </div>
              <div className="pers-grid">
                <div>
                  <h4 className="pers-section-title">Demographics</h4>
                  <div className="pers-demo-list">
                    <strong>Joe Reynold</strong><br />
                    Age: 65<br />
                    Gender: Male<br />
                    Nationality: American<br />
                    Education: Naval Academy<br />
                    Occupation: Second mate in a cargo ship<br />
                    Years of Experience: 45 years in maritime navigation
                  </div>

                  <h4 className="pers-section-title">Bio</h4>
                  <p className="pers-text">
                    A veteran with a deep love for the sea, Joe enlisted in the Marines straight out of high school. After a distinguished 35-year career, he returned to his true passion - the ocean. Now, Joe leverages his experience and discipline as a seasoned second mate, navigating vast oceans on a cargo ship.
                  </p>

                  <h4 className="pers-section-title">Goals</h4>
                  <ul className="pers-list">
                    {joeGoals.map((g, i) => (
                      <li key={i}>{g}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="pers-section-title">Motivation</h4>
                  <p className="pers-text">
                    Joe traded his military discipline for the ocean's embrace after 35 years as a Marine. Now a seasoned second mate, modern tech fuels his passion for safety, providing real-time updates on weather and underwater hazards. User-friendly tools bridge the gap between his experience and the digital age, keeping him a step ahead of danger.
                  </p>

                  <h4 className="pers-section-title">Frustrations</h4>
                  <ul className="pers-list">
                    {joeFrustrations.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>

                  <h4 className="pers-section-title">Emotion Target</h4>
                  <p className="pers-text">
                    Augmented Reality (AR) integration should enhance current technology. It ought to simplify the translation of manual expertise. It should also avoid inducing user fatigue. This is particularly important because sea travels already take a toll on a person.
                  </p>

                  <h4 className="pers-section-title">Device and technology</h4>
                  <div className="pers-text">
                    <strong>Navigation Systems:</strong> GPS, radar, sonar.<br />
                    <strong>Communication Devices:</strong> VHF radio, satellite phone, email.<br />
                    <strong>Safety Equipment:</strong> Lifeboats, life jackets, emergency beacons.<br />
                    <strong>Shipboard Sensors:</strong> Monitoring systems for engine performance, fuel levels, and environmental conditions.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Persona 2: Amelia */}
          <div className="pers-card">
            <div className="pers-photo-col">
              <img src="/persona_amelia_photo.png" alt="User Persona Amelia" />
            </div>
            <div className="pers-content-col">
              <div className="pers-header">
                <span className="pers-tag">USER PERSONA</span>
                <h3 className="pers-name">Amelia</h3>
              </div>
              <div className="pers-grid">
                <div>
                  <h4 className="pers-section-title">Demographics</h4>
                  <div className="pers-demo-list">
                    <strong>Captain Amelia Rodriguez</strong><br />
                    Age: 38<br />
                    Gender: Female<br />
                    Nationality: Spanish<br />
                    Education: Bachelor's degree in Maritime Navigation<br />
                    Occupation: Captain of a medium-sized cargo ship<br />
                    Years of Experience: 15 years in maritime navigation
                  </div>

                  <h4 className="pers-section-title">Bio</h4>
                  <p className="pers-text">
                    Captain Amelia Rodriguez hails from a family with a rich maritime history. Growing up in a coastal town in Spain, she developed a passion for the sea early on. Following in her father's footsteps, she pursued a degree in Maritime Navigation and steadily climbed the ranks to become the captain of her own cargo ship.
                  </p>

                  <h4 className="pers-section-title">Goals</h4>
                  <ul className="pers-list">
                    {ameliaGoals.map((g, i) => (
                      <li key={i}>{g}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="pers-section-title">Motivation</h4>
                  <p className="pers-text">
                    Captain Amelia Rodriguez is motivated by a deep sense of adventure and a commitment to mastering the ever-changing challenges of the open sea. Her love for the maritime profession, coupled with a desire to leave a lasting legacy, drives her to continuously improve her ship's navigation capabilities.
                  </p>

                  <h4 className="pers-section-title">Frustrations</h4>
                  <ul className="pers-list">
                    {ameliaFrustrations.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>

                  <h4 className="pers-section-title">Emotion Target</h4>
                  <p className="pers-text">
                    The AR project should evoke feelings of adventure, competence, and camaraderie. AR elements should be seamlessly integrated without obstructing the user's ability to see their surroundings for safety and ease of use.
                  </p>

                  <h4 className="pers-section-title">Device and technology</h4>
                  <div className="pers-text">
                    <strong>Navigation Systems:</strong> GPS, radar, sonar.<br />
                    <strong>Communication Devices:</strong> VHF radio, satellite phone, email.<br />
                    <strong>Safety Equipment:</strong> Lifeboats, life jackets, emergency beacons.<br />
                    <strong>Shipboard Sensors:</strong> Monitoring systems for engine performance, fuel levels, and environmental conditions.
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

/* â”€â”€â”€ Scenario Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function ScenarioSection() {
  return (
    <Box
      component="section"
      className="scenario-section"
      style={{ width: '100%', background: '#fff', padding: '40px 0 60px' } as FramerStyle}
    >
      <style>{`
        .sc-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 48px;
        }
        @media (max-width: 700px) {
          .sc-grid { grid-template-columns: 1fr; gap: 20px; margin-bottom: 32px; }
        }
        .sc-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2.2vw, 15px);
          line-height: 1.75;
          color: #888888;
          margin: 0;
          max-width: 820px;
        }
        .sc-card {
          width: 100%;
          border: 1px solid #E2E8F0;
          border-radius: 24px;
          background: #fff;
          padding: 40px clamp(20px, 4vw, 48px);
          box-sizing: border-box;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          display: flex;
          gap: 40px;
        }
        @media (max-width: 850px) {
          .sc-card { flex-direction: column; gap: 32px; }
        }
        .sc-col {
          flex: 1;
        }
        .sc-divider {
          width: 1px;
          background: #E2E8F0;
          align-self: stretch;
        }
        @media (max-width: 850px) {
          .sc-divider { width: 100%; height: 1px; }
        }
        .sc-tag {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #718096;
          display: block;
          margin-bottom: 6px;
        }
        .sc-name {
          font-family: 'Inter', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #25346A;
          margin: 0 0 16px 0;
        }
        .sc-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          line-height: 1.7;
          color: #4A5568;
          margin: 0 0 16px 0;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="sc-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Scenario" />
            </Box>
            <p className="sc-body">
              To understand user needs within a transportation VR experience, I employed scenarios. These immerse participants in realistic situations, allowing me to observe natural behaviors and gather valuable insights on usability, comfort, and the overall effectiveness of the XR design in a practical context.
            </p>
          </div>

          <div className="sc-card">
            <div className="sc-col">
              <span className="sc-tag">Scenario 1</span>
              <h3 className="sc-name">Captain Rodriguez</h3>
              <p className="sc-desc">
                The ocean held a constant threat for Amelia's crew. No matter how meticulously they planned, sudden storms or hidden reefs could erupt. A terrifying near-miss with a shipwreck on their last voyage was a wake-up call.
              </p>
              <p className="sc-desc">
                Determined to prevent such close calls, Amelia pushed for AR navigation, aptly named "Sail Safe." This system transformed their vision. Previously unseen dangers, like submerged wrecks, were now readily identifiable, granting them precious time to react. Live-updating navigation and weather maps streamed onto Amelia's console, giving her a constant edge. With this invaluable information, she could navigate the unpredictable seas with newfound confidence.
              </p>
            </div>

            <div className="sc-divider" />

            <div className="sc-col">
              <span className="sc-tag">Scenario 2</span>
              <h3 className="sc-name">Second Officer Reynolds</h3>
              <p className="sc-desc">
                Despite his 40 years navigating by hand, Second Officer Reynolds felt the strain. Traditional methods were limited, demanding constant vigilance to ensure crew safety. Unpredictable weather, a recent consequence of global warming, had become a growing concern for Joe.
              </p>
              <p className="sc-desc">
                Thankfully, his company adopted "Sail Safe," an AR navigation system. This game-changer eliminated Joe's constant worry about his crew's wellbeing. Sail Safe not only alerts him to shifting weather patterns but also overlays detailed maps directly onto his view of the sea, promoting a clear understanding and effortless navigation. With this cutting-edge technology, Joe could finally navigate with newfound confidence.
              </p>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* â”€â”€â”€ Information Architecture Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function InformationArchitectureSection() {
  return (
    <Box
      component="section"
      className="ia-section"
      style={{ width: '100%', background: '#fff', padding: '40px 0 60px' } as FramerStyle}
    >
      <style>{`
        .ia-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 700;
          color: #111;
          margin: 0 0 40px 0;
          letter-spacing: -0.02em;
        }
        .ia-diagram-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .ia-diagram-img {
          width: 100%;
          max-width: 950px;
          height: auto;
          display: block;
          object-fit: contain;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <h2 className="ia-title">Information Architecture</h2>
          <div className="ia-diagram-wrap">
            <img
              src="/assets/XR%20design/Frame%201000001724%201.png"
              alt="Information Architecture Diagram"
              className="ia-diagram-img"
            />
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* â”€â”€â”€ Wireframes Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function WireframesSection() {
  return (
    <Box
      component="section"
      className="wireframes-section"
      style={{ width: '100%', background: '#fff', padding: '40px 0 60px' } as FramerStyle}
    >
      <style>{`
        .wf-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 24px;
        }
        @media (max-width: 700px) {
          .wf-grid { grid-template-columns: 1fr; gap: 20px; margin-bottom: 16px; }
        }
        .wf-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 700;
          color: #111;
          margin: 0 0 40px 0;
          letter-spacing: -0.02em;
        }
        .wf-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .wf-img {
          width: 100%;
          max-width: 950px;
          height: auto;
          display: block;
          object-fit: contain;
          border-radius: 16px;
        }
        .wf-grid-images {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 700px) {
          .wf-grid-images { grid-template-columns: 1fr; gap: 16px; }
        }
        .wf-grid-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          border-radius: 16px;
          background: #F8F9FA;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>

          <div className="wf-grid-images">
            {['sec1', 'sec2', 'sec3', 'sec4', 'sec5', 'sec6'].map((s) => (
              <img
                key={s}
                src={`/assets/XR%20design/${s}.png`}
                alt={`Wireframe ${s}`}
                className="wf-grid-img"
              />
            ))}
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* Design System / Assets Section */
function DesignSystemSection() {
  return (
    <Box
      component="section"
      className="design-system-section"
      style={{ width: '100%', background: '#fff', padding: '40px 0 60px' } as FramerStyle}
    >
      <Box style={container}>
        <Box style={contentPad}>
          <img
            src="/assets/XR%20design/xr.png"
            alt="Design system assets"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 16 } as FramerStyle}
          />
        </Box>
      </Box>
    </Box>
  )
}

/* â”€â”€â”€ High-Fidelity Design Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function HighFidelityDesignSection() {
  return (
    <Box
      component="section"
      className="hifi-design-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 60px' } as FramerStyle}
    >
      <style>{`
        .hfd-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 48px;
        }
        @media (max-width: 700px) {
          .hfd-grid { grid-template-columns: 1fr; gap: 20px; margin-bottom: 32px; }
        }
        .hfd-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2.2vw, 15px);
          line-height: 1.75;
          color: #888888;
          margin: 0;
          max-width: 820px;
        }
        .hfd-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hfd-img-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;
          gap: 24px;
          margin-top: 12px;
        }
        .hfd-img-item {
          width: 300px;
          max-width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          border-radius: 16px;
        }
        @media (max-width: 600px) {
          .hfd-img-item { width: 100%; }
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="hfd-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Design" />
            </Box>
            <p className="hfd-body">
              The high-fidelity screens were crucial for usability testing and stakeholder feedback, providing a clear representation of the final product.
            </p>
          </div>

          <div className="hfd-img-row">
            <img src="/assets/XR%20design/image%2012.png" alt="High-Fidelity UI Screen" className="hfd-img-item" />
            <img src="/assets/XR%20design/image%2013.png" alt="High-Fidelity UI Screen" className="hfd-img-item" />
            <img src="/assets/XR%20design/image%2014.png" alt="High-Fidelity UI Screen" className="hfd-img-item" />
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* â”€â”€â”€ Testing Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function TestingSection() {
  return (
    <Box
      component="section"
      className="testing-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 60px' } as FramerStyle}
    >
      <style>{`
        .test-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 48px;
        }
        @media (max-width: 700px) {
          .test-grid { grid-template-columns: 1fr; gap: 20px; margin-bottom: 32px; }
        }
        .test-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2.2vw, 15px);
          line-height: 1.75;
          color: #888888;
          margin: 0;
          max-width: 820px;
        }
        .test-table-card {
          width: 100%;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }
        .test-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-family: 'Inter', sans-serif;
        }
        .test-table th {
          background: #F8FAFC;
          padding: 20px 28px;
          font-size: 16px;
          font-weight: 700;
          color: #1E293B;
          border-bottom: 1px solid #E2E8F0;
        }
        .test-table td {
          padding: 24px 28px;
          font-size: 14.5px;
          line-height: 1.6;
          color: #475569;
          border-bottom: 1px solid #E2E8F0;
          vertical-align: top;
        }
        .test-table tr:last-child td {
          border-bottom: none;
        }
        .test-category {
          font-weight: 700;
          color: #0F172A;
        }
        .test-img-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          margin-bottom: 24px;
        }
        .test-img-item {
          width: 100%;
          max-width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          border-radius: 12px;
        }
        @media (max-width: 600px) {
          .test-img-item { max-width: 100%; }
        }
        @media (max-width: 640px) {
          .test-table th, .test-table td { padding: 16px 14px; font-size: 13px; }
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="test-img-row">
            <img src="/assets/XR%20design/image%2016.png" alt="Usability testing" className="test-img-item" />
            <img src="/assets/XR%20design/image%2018.png" alt="Usability testing" className="test-img-item" />
            <img src="/assets/XR%20design/image%2019.png" alt="Usability testing" className="test-img-item" />
            <img src="/assets/XR%20design/camera0%201.png" alt="Usability testing" className="test-img-item" />
            <img src="/assets/XR%20design/Main%20Seq0%201.png" alt="Usability testing" className="test-img-item" />
          </div>
          <div className="test-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Testing" />
            </Box>
            <p className="test-body">
              Participants performed tasks on the VR prototype while thinking aloud, and the entire process (audio/video/screen recording) was recorded. Tasks mirrored real-world scenarios for atEats users. To avoid overload, each participant completed 3â€“4 tasks. Afterwards, they completed a SUS questionnaire to provide feedback. Interesting comments from the "think aloud" process were explored further to understand the reasoning behind user actions.
            </p>
          </div>

          <div className="test-table-card">
            <table className="test-table">
              <thead>
                <tr>
                  <th style={{ width: '25%' }}>Category</th>
                  <th style={{ width: '40%' }}>Suggested Improvements</th>
                  <th style={{ width: '35%' }}>Positive Insights</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="test-category">Learning &amp; Awareness</td>
                  <td>Overlays with estimated time &amp; distance, Compass outside radar display, Contextual learning aids (pop-up info cards)</td>
                  <td>Highly immersive experience, Strong potential for AR in ship navigation training</td>
                </tr>
                <tr>
                  <td className="test-category">Overall Usability</td>
                  <td>Customization options, Interactive tutorials</td>
                  <td>Clear communication</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

/* â”€â”€â”€ Iterations Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function IterationsSection() {
  return (
    <Box
      component="section"
      className="iterations-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 60px' } as FramerStyle}
    >
      <style>{`
        .iter-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 700px) {
          .iter-grid { grid-template-columns: 1fr; gap: 20px; }
        }
        .iter-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 850px) {
          .iter-row { grid-template-columns: 1fr; gap: 24px; }
        }
        .iter-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2.2vw, 15px);
          line-height: 1.7;
          color: #475569;
          margin: 0;
        }
        .iter-img {
          width: 100%;
          max-width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          border-radius: 16px;
        }
        .iter-full-wrap {
          width: 100%;
          max-width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
        }
        .iter-img-full {
          width: 100%;
          max-width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          border-radius: 16px;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="iter-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Iterations" />
            </Box>

            <div className="iter-row">
              <p className="iter-desc">
                Incorporated estimated time of arrival (ETA) in the destination features as per user suggestion
              </p>
              <img
                src="/assets/XR%20design/Frame%201000001775.png"
                alt="Iteration before and after"
                className="iter-img"
              />
            </div>

            
          </div>
          <div className="iter-grid" style={{ marginTop: 40 }}>
            <Box style={{ paddingTop: 4 } as FramerStyle} />
            <div className="iter-row">
              <p className="iter-desc">
                Incorporated estimated time of arrival (ETA) in the destination features as per user suggestion
              </p>
              <img
                src="/assets/XR%20design/Frame%201000001778.png"
                alt="Iteration"
                className="iter-img"
              />
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

function FutureConsiderationSection() {
  const items = [
    {
      title: 'Real-Time Maintenance Data Overlays',
      desc: 'In the future, AR could transform maintenance by overlaying real-time diagnostic data directly onto equipment, enabling faster and more efficient troubleshooting and repair processes.',
    },
    {
      title: 'Enhanced Remote Collaboration',
      desc: 'Looking ahead, AR could foster seamless remote collaboration, empowering crew members to share critical information and insights visually, regardless of their physical location.',
    },
    {
      title: 'Extending AR Experiences Beyond the Headset',
      desc: 'We envision AR experiences expanding beyond individual headsets, projecting interactive navigation and training onto larger displays for collaborative learning and improved situational awareness.',
    },
    {
      title: 'On-Demand Learning and Skill Development',
      desc: 'For future training, AR offers the exciting possibility of integrating interactive, on-demand tutorials directly within the user\'s field of view, revolutionizing how crew acquire new skills and knowledge.',
    },
  ]

  return (
    <Box
      component="section"
      className="future-section"
      style={{ width: '100%', background: '#fff', padding: '60px 0 60px' } as FramerStyle}
    >
      <style>{`
        .fc-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 700px) {
          .fc-grid { grid-template-columns: 1fr; gap: 20px; }
        }
        .fc-list {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }
        .fc-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }
        .fc-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #FF462E;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #FFF;
          box-shadow: 0 4px 12px rgba(255, 70, 46, 0.3);
        }
        .fc-title {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 6px 0;
        }
        .fc-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          line-height: 1.65;
          color: #6B7280;
          margin: 0;
          max-width: 720px;
        }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <div className="fc-grid">
            <Box style={{ paddingTop: 4 } as FramerStyle}>
              <Label text="Future Consideration" />
            </Box>

            <div className="fc-list">
              {items.map((item, idx) => (
                <div key={idx} className="fc-item">
                  <img src="/ateats 2/XR.png" alt="" style={{ width: '48px', height: '48px', objectFit: 'contain', flexShrink: 0 }} />
                  <div>
                    <h3 className="fc-title">{item.title}</h3>
                    <p className="fc-desc">{item.desc}</p>
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

function XrDesignPage() {
  return (
    <div id="main" className="crunch-page xr-page">
      <style>{pageResponsiveCss}</style>
      <div className="crunch-side-lines" aria-hidden="true">
        <span className="crunch-side-lines-star crunch-side-lines-star-left" />
        <span className="crunch-side-lines-star crunch-side-lines-star-right" />
      </div>
      <Box component="div" style={{ minHeight: '100vh', width: 'auto' } as FramerStyle}>
        <Navbar />
        <Box component="main">
          <SailSafeSection />
          <IdeationSection />
          <ProcessWaveSection />
          <UserResearchSection />
          <InsightsSection />
          <UserPersonasSection />
          <ScenarioSection />
          <InformationArchitectureSection />
          <WireframesSection />
          <DesignSystemSection />
          <HighFidelityDesignSection />
          <TestingSection />
          <IterationsSection />
          <FutureConsiderationSection />
          <MoreWorkMarquee currentPath="/xr-design" />
        </Box>
      </Box>
    </div>
  )
}

export default XrDesignPage
