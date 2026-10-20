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
  padding: '0 24px',
  boxSizing: 'border-box',
}

const pageResponsiveCss = `
  .atbots-page { --ab-pad: 24px; overflow-x: clip; position: relative; }
  .atbots-page .crunch-side-lines { z-index: 5; }
  @media (max-width: 640px) { .atbots-page { --ab-pad: 18px; } }
  @media (max-width: 400px) { .atbots-page { --ab-pad: 14px; } }
  @media (max-width: 700px) {
    .atbots-page main > section { padding-top: 48px !important; padding-bottom: 64px !important; }
  }
  .ab-live { padding: 60px 0 80px; }
  .abl-tag { display: inline-block; background: rgba(124,58,237,0.1); color: #7C3AED; font-family: Inter, sans-serif; font-size: 11px; font-weight: 700; padding: 4px 14px; border-radius: 100px; margin-bottom: 16px; }
  .abl-title { font-family: 'Inter', sans-serif; font-size: clamp(34px, 5vw, 60px); font-weight: 700; color: #111111; margin: 0 0 20px 0; letter-spacing: -0.02em; line-height: 1.1; }
  .ab-main-heading { font-family: 'Inter', sans-serif; font-size: clamp(28px, 5vw, 52px); font-weight: 800; color: #111111; margin: 0 auto 20px; letter-spacing: -0.02em; line-height: 1.12; max-width: 920px; text-align: center; }
  .ab-section p.ab-main-sub { font-family: 'Inter', sans-serif; font-size: clamp(15px, 2.4vw, 18px); line-height: 1.7; color: #666666; max-width: 720px; width: fit-content; margin: 0 auto 24px; text-align: center; }
  .ab-hashtags { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 44px; }
  .ab-hashtag { display: inline-block; background: rgba(124,58,237,0.1); color: #7C3AED; font-family: Inter, sans-serif; font-size: 12px; font-weight: 600; padding: 6px 14px; border-radius: 100px; }
  .ab-section p.abl-desc { font-family: 'Inter', sans-serif; font-size: clamp(14px, 2.2vw, 15px); line-height: 1.7; color: #666666; max-width: 680px; margin: 0 auto 36px; text-align: center; }
  .abl-btn { display: inline-flex; align-items: center; gap: 10px; background: #7C3AED; color: #FFFFFF; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 700; padding: 12px 24px; border-radius: 100px; text-decoration: none; box-shadow: 0 8px 24px rgba(124, 58, 237, 0.3); transition: transform 0.2s ease, box-shadow 0.2s ease; }
  .abl-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(124, 58, 237, 0.4); }

  .ab-section { padding: 60px 0; background: #fff; }
  .ab-section-alt { padding: 60px 0; background: #FAFAFA; }
  .ab-label { display: flex; align-items: center; gap: 10px; margin-bottom: 32px; }
  .ab-label-dot { width: 10px; height: 10px; background: #111; border-radius: 50%; flex-shrink: 0; }
  .ab-label-text { font-family: Inter, sans-serif; font-size: 13px; font-weight: 600; color: #999; text-transform: uppercase; letter-spacing: 0.05em; }
  .ab-section h3 { font-family: Inter, sans-serif; font-size: 36px; font-weight: 800; color: #111; margin: 0 0 20px; line-height: 1.15; }
  .ab-section h3.ab-subhead { font-size: 26px; font-weight: 700; }
  .ab-section h4 { font-family: Inter, sans-serif; font-size: 20px; font-weight: 700; color: #111; margin: 0 0 12px; }
  .ab-section p, .ab-section li { font-family: Inter, sans-serif; font-size: 15px; line-height: 1.75; color: #555; }
  .ab-section p { margin: 0 0 16px; }
  .ab-section ul { margin: 0; padding-left: 20px; }
  .ab-section li { margin-bottom: 8px; }
  .ab-section strong { color: #111; }

  .ab-divider { width: 100%; height: 1px; background: #E5E7EB; margin: 0; border: none; }

  .ab-overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
  .ab-overview-card { background: #F8F9FA; border-radius: 16px; padding: 24px; }
  .ab-overview-card h5 { font-family: Inter, sans-serif; font-size: 13px; font-weight: 600; color: #999; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.05em; }
  .ab-overview-card p, .ab-overview-card div { font-family: Inter, sans-serif; font-size: 15px; color: #333; line-height: 1.6; }
  @media (max-width: 768px) { .ab-overview-grid { grid-template-columns: 1fr; gap: 16px; } }

  .ab-challenge-block { background: #111; border-radius: 24px; padding: 48px; color: #fff; margin: 40px 0; }
  .ab-challenge-block h3 { color: #fff; margin-bottom: 24px; }
  .ab-challenge-block p { color: rgba(255,255,255,0.8); }
  .ab-challenge-flow { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin: 16px 0; }
  .ab-challenge-step { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; padding: 6px 14px; font-family: Inter, sans-serif; font-size: 13px; font-weight: 500; color: #fff; }
  .ab-challenge-arrow { color: rgba(255,255,255,0.4); font-size: 16px; }
  .ab-highlight { color: #A78BFA; font-weight: 700; }
  @media (max-width: 768px) { .ab-challenge-block { padding: 28px 20px; } }

  .ab-problem-card { background: #F8F9FA; border-radius: 16px; padding: 28px; margin-bottom: 16px; border-left: 4px solid #7C3AED; }
  .ab-problem-card h4 { margin-bottom: 8px; }
  .ab-problem-card .ab-opportunity { font-family: Inter, sans-serif; font-size: 14px; color: #7C3AED; font-weight: 600; margin-top: 8px; }

  .ab-principle-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .ab-principle-card { background: #F8F9FA; border-radius: 16px; padding: 24px; }
  .ab-principle-card h4 { font-size: 16px; margin-bottom: 8px; }
  .ab-principle-card p { font-size: 14px; color: #666; margin: 0; }
  @media (max-width: 768px) { .ab-principle-grid { grid-template-columns: 1fr; } }

  .ab-lifecycle-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
  .ab-lifecycle-card { background: #fff; border: 1px solid #E5E7EB; border-radius: 16px; padding: 28px; position: relative; }
  .ab-lifecycle-num { font-family: 'Inter', sans-serif; font-size: 48px; font-weight: 700; color: rgba(124,58,237,0.12); position: absolute; top: 12px; right: 20px; }
  .ab-lifecycle-card h4 { margin-bottom: 8px; }
  .ab-lifecycle-card p { font-size: 14px; color: #666; margin: 0; }

  .ab-ia-list { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px; }
  .ab-ia-item { display: flex; align-items: center; gap: 12px; background: #F8F9FA; border-radius: 12px; padding: 14px 18px; }
  .ab-ia-dot { width: 8px; height: 8px; background: #7C3AED; border-radius: 50%; flex-shrink: 0; }
  .ab-ia-item span { font-family: Inter, sans-serif; font-size: 15px; font-weight: 600; color: #333; }
  @media (max-width: 600px) { .ab-ia-list { grid-template-columns: 1fr; } }

  .ab-flow-steps { display: flex; flex-direction: column; gap: 0; margin-top: 24px; max-width: 500px; }
  .ab-flow-step { display: flex; align-items: center; gap: 16px; padding: 12px 0; border-left: 2px solid #E5E7EB; padding-left: 20px; position: relative; }
  .ab-flow-step::before { content: ''; position: absolute; left: -6px; width: 10px; height: 10px; background: #7C3AED; border-radius: 50%; }
  .ab-flow-step span { font-family: Inter, sans-serif; font-size: 15px; font-weight: 600; color: #333; }

  .ab-agent-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px; }
  .ab-agent-item { background: #F8F9FA; border-radius: 12px; padding: 16px 20px; }
  .ab-agent-item strong { font-family: Inter, sans-serif; font-size: 14px; color: #111; display: block; margin-bottom: 4px; }
  .ab-agent-item span { font-family: Inter, sans-serif; font-size: 13px; color: #666; }
  @media (max-width: 600px) { .ab-agent-grid { grid-template-columns: 1fr; } }

  .ab-decision-block { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0; }
  .ab-decision-card { border-radius: 16px; padding: 28px; }
  .ab-decision-bool { background: #F0FDF4; border: 1px solid #BBF7D0; }
  .ab-decision-fuzzy { background: #FAF5FF; border: 1px solid #DDD6FE; }
  .ab-decision-card h4 { margin-bottom: 12px; }
  .ab-decision-card p { font-size: 14px; margin-bottom: 8px; }
  .ab-decision-example { background: rgba(0,0,0,0.04); border-radius: 8px; padding: 12px 16px; font-family: Inter, sans-serif; font-size: 13px; color: #555; font-style: italic; margin-top: 12px; }
  @media (max-width: 600px) { .ab-decision-block { grid-template-columns: 1fr; } }

  .ab-confidence-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 16px; }
  .ab-conf-card { border-radius: 12px; padding: 16px; text-align: center; }
  .ab-conf-high { background: #DCFCE7; }
  .ab-conf-med { background: #FEF9C3; }
  .ab-conf-low { background: #FEE2E2; }
  .ab-conf-card strong { font-family: Inter, sans-serif; font-size: 13px; display: block; margin-bottom: 4px; }
  .ab-conf-card span { font-family: Inter, sans-serif; font-size: 12px; color: #555; }
  @media (max-width: 600px) { .ab-confidence-row { grid-template-columns: 1fr; } }

  .ab-impact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .ab-impact-item { display: flex; align-items: center; gap: 10px; background: #F8F9FA; border-radius: 10px; padding: 12px 16px; }
  .ab-impact-check { width: 20px; height: 20px; background: #7C3AED; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 11px; flex-shrink: 0; }
  .ab-impact-item span { font-family: Inter, sans-serif; font-size: 14px; font-weight: 500; color: #333; }
  @media (max-width: 600px) { .ab-impact-grid { grid-template-columns: 1fr; } }

  .ab-quote { border-left: 4px solid #7C3AED; padding: 20px 24px; margin: 24px 0; background: #FAFAFA; border-radius: 0 12px 12px 0; }
  .ab-quote p { font-family: Inter, sans-serif; font-size: 16px; font-weight: 600; color: #111; font-style: italic; margin: 0; }

  .ab-img-full { width: 100%; border-radius: 16px; display: block; margin: 24px 0; }
  .ab-img-center { display: block; margin: 0 auto; }

  .ab-footer { padding: 60px 0; background: #111; text-align: center; }
  .ab-footer h3 { font-family: Inter, sans-serif; font-size: clamp(20px, 3vw, 28px); font-weight: 700; color: #fff; margin: 0 0 8px; }
  .ab-footer p { font-family: Inter, sans-serif; font-size: 14px; color: rgba(255,255,255,0.5); margin: 0; }
`

function AtBotsPage() {
  return (
    <div className="atbots-page" style={{ minHeight: '100vh', width: 'auto' } as FramerStyle}>
      <style>{pageResponsiveCss}</style>
      <div className="crunch-side-lines" aria-hidden="true">
        <span className="crunch-side-lines-star crunch-side-lines-star-left" />
        <span className="crunch-side-lines-star crunch-side-lines-star-right" />
      </div>
      <Navbar />

      <Box component="main">
        {/* ═══════ atBots Live ═══════ */}
        <Box component="section" className="ab-section ab-live" style={{ background: '#FFFFFF', textAlign: 'center' } as FramerStyle}>
          <Box style={container}>
            <Box style={contentPad}>
              <div className="abl-tag">@ 2025</div>
              <h1 className="abl-title">atBots®</h1>
              <p className="abl-desc">
                Curious to see this project in action? Explore the live atBots platform and see the conversational flows come to life.
              </p>
              <a href="https://syopingsolutions.com/eats/" target="_blank" rel="noopener noreferrer" className="abl-btn">
                <span>●</span> Take me to atBots →
              </a>
            </Box>
          </Box>
        </Box>

        <div className="ab-divider" />

        {/* ═══════ Overview ═══════ */}
        <Box component="section" className="ab-section ab-section-alt">
          <Box style={container}>
            <Box style={contentPad}>
              <h2 className="ab-main-heading">atBots</h2>
              <p className="ab-main-sub">From Complex AI Configuration to a Simple No-Code Experience</p>
              <div className="ab-hashtags">
                <span className="ab-hashtag">#AgenticAI</span>
                <span className="ab-hashtag">#AIUX</span>
                <span className="ab-hashtag">#ConversationalAI</span>
                <span className="ab-hashtag">#SaaS</span>
                <span className="ab-hashtag">#ProductDesign</span>
              </div>
              <div className="ab-label">
                <span className="ab-label-dot" />
                <span className="ab-label-text">Overview</span>
              </div>
              <div className="ab-overview-grid">
                <div className="ab-overview-card">
                  <h5>Product</h5>
                  <p>atBots</p>
                </div>
                <div className="ab-overview-card">
                  <h5>My Role</h5>
                  <p>Product Designer — End-to-End Product Design</p>
                </div>
                <div className="ab-overview-card">
                  <h5>Platform</h5>
                  <p>B2B SaaS · Web Application · AI Chatbot</p>
                </div>
                <div className="ab-overview-card">
                  <h5>Team</h5>
                  <p>Product Designer, Product / Business Team, AI &amp; Backend Engineers, Frontend Developers, QA</p>
                </div>
              </div>
              <div style={{ marginTop: 20 } as FramerStyle}>
                <div className="ab-overview-card">
                  <h5>Responsibilities</h5>
                  <p>Product Discovery · UX Research · AI Interaction Design · Information Architecture · User Flows · Wireframing · Prototyping · UI Design · Design System · Usability Testing · Developer Handoff</p>
                </div>
              </div>
            </Box>
          </Box>
        </Box>

        {/* ═══════ Context ═══════ */}
        <Box component="section" className="ab-section">
          <Box style={container}>
            <Box style={contentPad}>
              <div className="ab-label">
                <span className="ab-label-dot" />
                <span className="ab-label-text">Context</span>
              </div>
              <h3>What is atBots?</h3>
              <p>atBots is an AI-powered chatbot platform designed to help businesses create, train, customise and deploy intelligent conversational experiences without requiring technical expertise.</p>
              <p>Businesses can create custom conversation flows, train their chatbot using websites, sitemaps or files, customise its personality and appearance, capture leads, integrate it with existing tools and understand chatbot performance through analytics.</p>
              <p>But building an AI product introduced a different UX challenge.</p>
              <div className="ab-quote">
                <p>How do we give users the power of AI without exposing them to the complexity behind it?</p>
              </div>
              <p>That became one of the central design questions throughout the project.</p>
            </Box>
          </Box>
        </Box>

        <div className="ab-divider" />

        {/* ═══════ The Challenge ═══════ */}
        <Box component="section" className="ab-section ab-section-alt">
          <Box style={container}>
            <Box style={contentPad}>
              <div className="ab-label">
                <span className="ab-label-dot" />
                <span className="ab-label-text">The Challenge</span>
              </div>
              <h3>AI was powerful. Configuring it wasn't necessarily simple.</h3>
              <p>Traditional software normally follows predictable interactions:</p>
              <div className="ab-challenge-block">
                <p style={{ marginBottom: 16 } as FramerStyle}>Traditional:</p>
                <div className="ab-challenge-flow">
                  <span className="ab-challenge-step">User Action</span>
                  <span className="ab-challenge-arrow">→</span>
                  <span className="ab-challenge-step">System Response</span>
                </div>
                <p style={{ margin: '24px 0 16px' } as FramerStyle}>AI systems behave differently:</p>
                <div className="ab-challenge-flow">
                  <span className="ab-challenge-step">User Intent</span>
                  <span className="ab-challenge-arrow">→</span>
                  <span className="ab-challenge-step">Context</span>
                  <span className="ab-challenge-arrow">→</span>
                  <span className="ab-challenge-step">AI Interpretation</span>
                  <span className="ab-challenge-arrow">→</span>
                  <span className="ab-challenge-step">Decision</span>
                  <span className="ab-challenge-arrow">→</span>
                  <span className="ab-challenge-step">Confidence</span>
                  <span className="ab-challenge-arrow">→</span>
                  <span className="ab-challenge-step">Action</span>
                  <span className="ab-challenge-arrow">→</span>
                  <span className="ab-challenge-step">Response</span>
                </div>
              </div>
              <p>The product needed to balance two competing requirements:</p>
              <div className="ab-quote">
                <p>Give users enough control to configure intelligent behaviour while keeping the overall experience simple enough for non-technical users.</p>
              </div>
            </Box>
          </Box>
        </Box>

        {/* ═══════ Understanding the Problem ═══════ */}
        <Box component="section" className="ab-section">
          <Box style={container}>
            <Box style={contentPad}>
              <div className="ab-label">
                <span className="ab-label-dot" />
                <span className="ab-label-text">Understanding the Problem</span>
              </div>
              <h3>Before moving into interface design, I broke the product experience into the core jobs users needed to complete.</h3>
              <div className="ab-flow-steps">
                {['Create a chatbot', 'Define its purpose', 'Add knowledge sources', 'Train the AI', 'Configure conversations', 'Define chatbot behaviour', 'Customise appearance', 'Test conversations', 'Deploy the chatbot', 'Monitor its performance', 'Improve it over time'].map((step, i) => (
                  <div key={i} className="ab-flow-step"><span>{step}</span></div>
                ))}
              </div>
              <p style={{ marginTop: 20 }}>Looking at these activities as one continuous journey helped reveal where AI complexity could create unnecessary cognitive load.</p>
            </Box>
          </Box>
        </Box>

        <div className="ab-divider" />

        {/* ═══════ Understanding Our Users ═══════ */}
        <Box component="section" className="ab-section ab-section-alt">
          <Box style={container}>
            <Box style={contentPad}>
              <div className="ab-label">
                <span className="ab-label-dot" />
                <span className="ab-label-text">Understanding Our Users</span>
              </div>
              <h3>The product wasn't being designed only for AI specialists.</h3>
              <div className="ab-overview-grid">
                <div className="ab-overview-card">
                  <h5>Business Owners</h5>
                  <p>Need automation without learning AI technology.</p>
                </div>
                <div className="ab-overview-card">
                  <h5>Customer Support Teams</h5>
                  <p>Need reliable answers and escalation when AI cannot resolve a request.</p>
                </div>
                <div className="ab-overview-card">
                  <h5>Sales &amp; Marketing Teams</h5>
                  <p>Need conversational experiences capable of capturing and qualifying leads.</p>
                </div>
                <div className="ab-overview-card">
                  <h5>Product / Operations Teams</h5>
                  <p>Need visibility into chatbot behaviour, conversations and performance.</p>
                </div>
              </div>
              <div className="ab-quote" style={{ marginTop: 24 }}>
                <p>"I shouldn't need to understand how an AI model works just to create a useful chatbot."</p>
              </div>
            </Box>
          </Box>
        </Box>

        {/* ═══════ Mapping the AI Experience ═══════ */}
        <Box component="section" className="ab-section">
          <Box style={container}>
            <Box style={contentPad}>
              <div className="ab-label">
                <span className="ab-label-dot" />
                <span className="ab-label-text">Mapping the AI Experience</span>
              </div>
              <h3>Instead of designing individual screens immediately, I mapped the relationship between user, interface and AI agent.</h3>
              <h4>Simplified Agent Model</h4>
              <div className="ab-challenge-block">
                <div className="ab-flow-steps" style={{ borderColor: 'rgba(255,255,255,0.2)' } as FramerStyle}>
                  {['User asks something', 'Agent understands intent', 'Relevant knowledge is retrieved', 'Agent evaluates the request', 'Confidence / conditions are checked', 'Agent chooses an action'].map((step, i) => (
                    <div key={i} className="ab-flow-step" style={{ borderColor: 'rgba(255,255,255,0.15)' } as FramerStyle}>
                      <span style={{ color: '#fff' } as FramerStyle}>{step}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' } as FramerStyle}>
                  <span className="ab-challenge-step">Respond automatically</span>
                  <span className="ab-challenge-step">Ask for clarification</span>
                  <span className="ab-challenge-step">Trigger a workflow</span>
                  <span className="ab-challenge-step">Escalate to a human</span>
                </div>
              </div>
              <p>This model helped translate AI behaviour into understandable product interactions.</p>
            </Box>
          </Box>
        </Box>

        <div className="ab-divider" />

        {/* ═══════ Designing for Agentic Behaviour ═══════ */}
        <Box component="section" className="ab-section ab-section-alt">
          <Box style={container}>
            <Box style={contentPad}>
              <div className="ab-label">
                <span className="ab-label-dot" />
                <span className="ab-label-text">Designing for Agentic Behaviour</span>
              </div>
              <h3>A major consideration was defining what the AI should be allowed to do independently.</h3>
              <p>Instead of treating the chatbot purely as a question-and-answer interface, I considered it as an agent capable of making controlled decisions.</p>
              <div className="ab-agent-grid">
                <div className="ab-agent-item"><strong>Intent</strong><span>What is the user trying to achieve?</span></div>
                <div className="ab-agent-item"><strong>Context</strong><span>What information does the agent currently have?</span></div>
                <div className="ab-agent-item"><strong>Knowledge</strong><span>What information can it retrieve?</span></div>
                <div className="ab-agent-item"><strong>Rules</strong><span>What conditions need to be satisfied?</span></div>
                <div className="ab-agent-item"><strong>Confidence</strong><span>How certain is the system about its decision?</span></div>
                <div className="ab-agent-item"><strong>Action</strong><span>What is the agent allowed to do?</span></div>
                <div className="ab-agent-item"><strong>Fallback</strong><span>What happens when the system cannot confidently continue?</span></div>
                <div className="ab-agent-item"><strong>Human Intervention</strong><span>When should control return to a person?</span></div>
              </div>
            </Box>
          </Box>
        </Box>

        {/* ═══════ Boolean + Fuzzy Decision Thinking ═══════ */}
        <Box component="section" className="ab-section">
          <Box style={container}>
            <Box style={contentPad}>
              <div className="ab-label">
                <span className="ab-label-dot" />
                <span className="ab-label-text">Decision Thinking</span>
              </div>
              <h3>Boolean + Fuzzy Decision Thinking</h3>
              <p>Not every AI decision should be treated the same. I explored two types of decision logic when thinking about agent behaviour.</p>
              <div className="ab-decision-block">
                <div className="ab-decision-card ab-decision-bool">
                  <h4>Boolean Decisions</h4>
                  <p>Used when the system needs a clear <strong>Yes / No</strong>, <strong>True / False</strong>, <strong>Allowed / Not Allowed</strong>.</p>
                  <div className="ab-decision-example">Has the user provided the required information? Yes → Continue. No → Ask for the missing information.</div>
                </div>
                <div className="ab-decision-card ab-decision-fuzzy">
                  <h4>Fuzzy Decisions</h4>
                  <p>Some conversations contain uncertainty. Confidence-based behaviour determines what happens next.</p>
                  <div className="ab-confidence-row">
                    <div className="ab-conf-card ab-conf-high"><strong>High Confidence</strong><span>→ Respond automatically</span></div>
                    <div className="ab-conf-card ab-conf-med"><strong>Medium Confidence</strong><span>→ Ask a clarification question</span></div>
                    <div className="ab-conf-card ab-conf-low"><strong>Low Confidence</strong><span>→ Escalate or provide a safe fallback</span></div>
                  </div>
                </div>
              </div>
              <p>This helped me think beyond screens and design the behaviour of the AI itself.</p>
            </Box>
          </Box>
        </Box>

        <div className="ab-divider" />

        {/* ═══════ Core UX Problems ═══════ */}
        <Box component="section" className="ab-section ab-section-alt">
          <Box style={container}>
            <Box style={contentPad}>
              <div className="ab-label">
                <span className="ab-label-dot" />
                <span className="ab-label-text">The Core UX Problems</span>
              </div>
              <h3>After mapping the product and AI interactions, I focused on several major design challenges.</h3>
              <div className="ab-problem-card">
                <h4>UX Problem 01 — AI Configuration Complexity</h4>
                <p>Users could potentially be overwhelmed by technical terminology and configuration.</p>
                <p className="ab-opportunity">Design opportunity → Translate AI configuration into guided, understandable steps.</p>
              </div>
              <div className="ab-problem-card">
                <h4>UX Problem 02 — Training Transparency</h4>
                <p>Uploading information isn't enough. Users need to understand: What has been trained? What is still processing? What failed? When was it last updated? Can I retrain it?</p>
                <p className="ab-opportunity">Design opportunity → Make knowledge training visible and manageable.</p>
              </div>
              <div className="ab-problem-card">
                <h4>UX Problem 03 — Limited Visibility Into AI Behaviour</h4>
                <p>Users need confidence that the chatbot behaves as expected before exposing it to customers.</p>
                <p className="ab-opportunity">Design opportunity → Introduce testing and preview experiences before deployment.</p>
              </div>
              <div className="ab-problem-card">
                <h4>UX Problem 04 — Managing Uncertainty</h4>
                <p>AI will not always know the correct answer. The experience needs predictable behaviour for uncertain situations.</p>
                <p className="ab-opportunity">Design opportunity → Design clarification, fallback and human escalation states.</p>
              </div>
              <div className="ab-problem-card">
                <h4>UX Problem 05 — Moving From Creation to Improvement</h4>
                <p>Launching the chatbot isn't the end. Users need to understand whether it is actually helping customers.</p>
                <p className="ab-opportunity">Design opportunity → Connect conversations, responses and analytics back into an optimisation loop.</p>
              </div>
            </Box>
          </Box>
        </Box>

        {/* ═══════ Product Principles ═══════ */}
        <Box component="section" className="ab-section">
          <Box style={container}>
            <Box style={contentPad}>
              <div className="ab-label">
                <span className="ab-label-dot" />
                <span className="ab-label-text">Product Principles</span>
              </div>
              <h3>I used several principles to guide design decisions.</h3>
              <div className="ab-principle-grid">
                <div className="ab-principle-card"><h4>Simple Before Technical</h4><p>Expose the outcome users want rather than unnecessary AI terminology.</p></div>
                <div className="ab-principle-card"><h4>Progressive Disclosure</h4><p>Show basic controls first and reveal advanced configuration when required.</p></div>
                <div className="ab-principle-card"><h4>Human Control</h4><p>Automation should never mean losing visibility or control.</p></div>
                <div className="ab-principle-card"><h4>Explain System Status</h4><p>Training, processing, errors and agent actions should always have understandable states.</p></div>
                <div className="ab-principle-card"><h4>Design for Failure</h4><p>Fallbacks and escalation are part of the core experience, not edge cases.</p></div>
                <div className="ab-principle-card"><h4>Trust Through Transparency</h4><p>Users should understand what the AI knows, what it is doing and where its limitations are.</p></div>
              </div>
            </Box>
          </Box>
        </Box>

        <div className="ab-divider" />

        {/* ═══════ Proposed Product Experience ═══════ */}
        <Box component="section" className="ab-section ab-section-alt">
          <Box style={container}>
            <Box style={contentPad}>
              <div className="ab-label">
                <span className="ab-label-dot" />
                <span className="ab-label-text">Proposed Product Experience</span>
              </div>
              <h3>I structured the experience around the chatbot lifecycle.</h3>
              <div className="ab-lifecycle-grid">
                <div className="ab-lifecycle-card">
                  <span className="ab-lifecycle-num">01</span>
                  <h4>Create</h4>
                  <p>Start with the chatbot's purpose rather than technical configuration. Create Bot → Define Goal → Configure Basics.</p>
                </div>
                <div className="ab-lifecycle-card">
                  <span className="ab-lifecycle-num">02</span>
                  <h4>Train</h4>
                  <p>Allow users to build the chatbot's knowledge using websites, sitemaps or files. Users can understand the status of each source.</p>
                </div>
                <div className="ab-lifecycle-card">
                  <span className="ab-lifecycle-num">03</span>
                  <h4>Configure</h4>
                  <p>Define how the chatbot communicates — bot identity, welcome message, conversation behaviour, response style, fallback behaviour, lead capture, human escalation.</p>
                </div>
                <div className="ab-lifecycle-card">
                  <span className="ab-lifecycle-num">04</span>
                  <h4>Customise</h4>
                  <p>Allow businesses to make the chatbot feel like part of their own brand — name, avatar, brand colours, conversation appearance.</p>
                </div>
                <div className="ab-lifecycle-card">
                  <span className="ab-lifecycle-num">05</span>
                  <h4>Test</h4>
                  <p>Before publishing, users can interact with the bot in a controlled environment. Ask → Observe → Adjust → Retrain → Test Again.</p>
                </div>
                <div className="ab-lifecycle-card">
                  <span className="ab-lifecycle-num">06</span>
                  <h4>Deploy</h4>
                  <p>Once confident, deployment should feel lightweight. The chatbot can be connected to supported customer touchpoints and business tools.</p>
                </div>
                <div className="ab-lifecycle-card">
                  <span className="ab-lifecycle-num">07</span>
                  <h4>Measure</h4>
                  <p>Analytics help users understand how their chatbot performs — users, conversations, responses, engagement, lead activity, trends.</p>
                </div>
              </div>
            </Box>
          </Box>
        </Box>

        {/* ═══════ Information Architecture ═══════ */}
        <Box component="section" className="ab-section">
          <Box style={container}>
            <Box style={contentPad}>
              <div className="ab-label">
                <span className="ab-label-dot" />
                <span className="ab-label-text">Information Architecture</span>
              </div>
              <h3>I organised the product around the user's mental model rather than the underlying AI architecture.</h3>
              <div className="ab-ia-list">
                {['Dashboard', 'My Bots', 'Knowledge', 'Conversations', 'Leads', 'Analytics', 'Integrations', 'Settings'].map((item, i) => (
                  <div key={i} className="ab-ia-item"><span className="ab-ia-dot" /><span>{item}</span></div>
                ))}
              </div>
              <p style={{ marginTop: 20 }}>This architecture keeps technical AI infrastructure largely invisible while exposing the controls users actually need.</p>
            </Box>
          </Box>
        </Box>

        <div className="ab-divider" />

        {/* ═══════ User Flow ═══════ */}
        <Box component="section" className="ab-section ab-section-alt">
          <Box style={container}>
            <Box style={contentPad}>
              <div className="ab-label">
                <span className="ab-label-dot" />
                <span className="ab-label-text">User Flow</span>
              </div>
              <h3>Creating and Launching an AI Chatbot</h3>
              <div className="ab-flow-steps">
                {['Dashboard', 'Create New Bot', 'Define Bot Purpose', 'Add Knowledge Source', 'Train Bot', 'Configure Behaviour', 'Customise Appearance', 'Test Conversation', 'Resolve Issues', 'Deploy', 'Monitor Analytics', 'Improve'].map((step, i) => (
                  <div key={i} className="ab-flow-step"><span>{step}</span></div>
                ))}
              </div>
              <div className="ab-quote" style={{ marginTop: 24 }}>
                <p>The important design decision was treating deployment as part of a continuous loop rather than the end of the journey.</p>
              </div>
            </Box>
          </Box>
        </Box>

        {/* ═══════ Wireframes ═══════ */}
        <Box component="section" className="ab-section">
          <Box style={container}>
            <Box style={contentPad}>
              <div className="ab-label">
                <span className="ab-label-dot" />
                <span className="ab-label-text">Wireframes</span>
              </div>
              <h3>Wireframes</h3>
              <p>Once the product architecture and agent behaviour were clear, I moved into low-fidelity wireframes.</p>
              <p>Instead of focusing on visual polish, I used this stage to validate: navigation hierarchy, configuration sequence, training states, agent behaviour settings, testing interactions, error and empty states, analytics hierarchy, responsive behaviour.</p>
              <p>This allowed structural problems to be addressed before moving into high-fidelity UI.</p>
            </Box>
          </Box>
        </Box>

        <div className="ab-divider" />

        {/* ═══════ Designing the Final Experience ═══════ */}
        <Box component="section" className="ab-section ab-section-alt">
          <Box style={container}>
            <Box style={contentPad}>
              <div className="ab-label">
                <span className="ab-label-dot" />
                <span className="ab-label-text">Designing the Final Experience</span>
              </div>

              <h3 className="ab-subhead">Dashboard</h3>
              <p>The dashboard provides a high-level understanding of chatbot activity without overwhelming users with raw AI metrics.</p>
              <div className="ab-quote">
                <p>Help users understand what is happening before asking them to analyse why.</p>
              </div>

              <h3 className="ab-subhead" style={{ marginTop: 40 }}>No-Code Chatbot Creation</h3>
              <p>Rather than exposing model settings immediately, chatbot creation is broken into understandable decisions.</p>
              <div className="ab-agent-grid">
                <div className="ab-agent-item"><strong>What are you creating?</strong></div>
                <div className="ab-agent-item"><strong>What should your chatbot know?</strong></div>
                <div className="ab-agent-item"><strong>How should it behave?</strong></div>
                <div className="ab-agent-item"><strong>How should it look?</strong></div>
                <div className="ab-agent-item"><strong>Where should it operate?</strong></div>
              </div>
              <p style={{ marginTop: 16 }}>This turns complex AI configuration into a familiar product setup experience.</p>

              <h3 className="ab-subhead" style={{ marginTop: 40 }}>Knowledge Training</h3>
              <p>Training is designed as a visible process rather than an invisible backend action. Knowledge sources can include websites, sitemaps and uploaded files.</p>
              <p>Each source communicates a clear state: <strong>Ready</strong>, <strong>Training</strong>, <strong>Updated</strong>, <strong>Failed</strong>, <strong>Needs Attention</strong>.</p>

              <h3 className="ab-subhead" style={{ marginTop: 40 }}>AI Behaviour &amp; Human Control</h3>
              <p>One of the most important parts of designing an AI experience is defining what happens when the system isn't confident.</p>
              <div className="ab-challenge-block">
                <div className="ab-challenge-flow">
                  <span className="ab-challenge-step">AI responds confidently</span>
                  <span className="ab-challenge-arrow">→</span>
                  <span className="ab-challenge-step">Continue conversation</span>
                </div>
                <div className="ab-challenge-flow" style={{ marginTop: 12 } as FramerStyle}>
                  <span className="ab-challenge-step">AI needs more context</span>
                  <span className="ab-challenge-arrow">→</span>
                  <span className="ab-challenge-step">Ask clarification</span>
                </div>
                <div className="ab-challenge-flow" style={{ marginTop: 12 } as FramerStyle}>
                  <span className="ab-challenge-step">AI cannot respond</span>
                  <span className="ab-challenge-arrow">→</span>
                  <span className="ab-challenge-step">Fallback or escalate to human</span>
                </div>
              </div>
              <div className="ab-quote" style={{ marginTop: 24 }}>
                <p>The objective wasn't to make the AI appear perfect. The objective was to make its behaviour predictable, understandable and recoverable.</p>
              </div>

              <h3 className="ab-subhead" style={{ marginTop: 40 }}>Conversation Testing</h3>
              <p>Users need to trust their chatbot before customers interact with it. The testing environment allows users to simulate conversations and observe how the bot responds.</p>
              <p>This creates an iterative design loop: <strong>Configure → Test → Observe → Improve → Retest</strong>.</p>

              <h3 className="ab-subhead" style={{ marginTop: 40 }}>Analytics</h3>
              <p>AI analytics shouldn't only tell users how many conversations happened. They should help answer:</p>
              <ul>
                <li><strong>Is my chatbot being used?</strong></li>
                <li><strong>Is it successfully engaging users?</strong></li>
                <li><strong>Where are conversations struggling?</strong></li>
                <li><strong>What should I improve next?</strong></li>
              </ul>
            </Box>
          </Box>
        </Box>

        <div className="ab-divider" />

        {/* ═══════ Designing Beyond Interface ═══════ */}
        <Box component="section" className="ab-section">
          <Box style={container}>
            <Box style={contentPad}>
              <div className="ab-label">
                <span className="ab-label-dot" />
                <span className="ab-label-text">Designing Beyond the Interface</span>
              </div>
              <h3>One of my biggest learnings from atBots was that designing AI products requires thinking beyond screens.</h3>
              <div className="ab-challenge-block">
                <p style={{ marginBottom: 12 } as FramerStyle}>Traditional UX:</p>
                <div className="ab-challenge-flow">
                  <span className="ab-challenge-step">User</span>
                  <span className="ab-challenge-arrow">→</span>
                  <span className="ab-challenge-step">Interface</span>
                  <span className="ab-challenge-arrow">→</span>
                  <span className="ab-challenge-step">Action</span>
                </div>
                <p style={{ margin: '20px 0 12px' } as FramerStyle}>Agentic experiences introduce another layer:</p>
                <div className="ab-challenge-flow">
                  <span className="ab-challenge-step">User</span>
                  <span className="ab-challenge-arrow">→</span>
                  <span className="ab-challenge-step">Interface</span>
                  <span className="ab-challenge-arrow">→</span>
                  <span className="ab-challenge-step">Agent</span>
                  <span className="ab-challenge-arrow">→</span>
                  <span className="ab-challenge-step">Decision</span>
                  <span className="ab-challenge-arrow">→</span>
                  <span className="ab-challenge-step">Action</span>
                  <span className="ab-challenge-arrow">→</span>
                  <span className="ab-challenge-step">Feedback</span>
                  <span className="ab-challenge-arrow">→</span>
                  <span className="ab-challenge-step">Human Control</span>
                </div>
              </div>
              <p>I wasn't only considering "What screen comes next?" I also had to consider: What should the agent do next? How confident should it be? What should happen when it doesn't know? When should the human regain control?</p>
              <div className="ab-quote">
                <p>These questions became as important as the visual interface itself.</p>
              </div>
            </Box>
          </Box>
        </Box>

        {/* ═══════ Impact ═══════ */}
        <Box component="section" className="ab-section ab-section-alt">
          <Box style={container}>
            <Box style={contentPad}>
              <div className="ab-label">
                <span className="ab-label-dot" />
                <span className="ab-label-text">Impact</span>
              </div>
              <h3>The design established a more structured experience for creating, training, configuring, testing and managing AI-powered chatbots.</h3>
              <div className="ab-impact-grid">
                {['Faster chatbot configuration', 'Reduced cognitive load', 'Clearer training visibility', 'Greater control over AI behaviour', 'More predictable fallback experiences', 'Simpler deployment', 'Better visibility through analytics'].map((item, i) => (
                  <div key={i} className="ab-impact-item"><span className="ab-impact-check">✓</span><span>{item}</span></div>
                ))}
              </div>
              <div className="ab-quote" style={{ marginTop: 24 }}>
                <p>Add validated product metrics here once available rather than inventing percentage improvements.</p>
              </div>
            </Box>
          </Box>
        </Box>

        <div className="ab-divider" />

        {/* ═══════ Final Thoughts ═══════ */}
        <Box component="section" className="ab-section">
          <Box style={container}>
            <Box style={contentPad}>
              <div className="ab-label">
                <span className="ab-label-dot" />
                <span className="ab-label-text">Final Thoughts &amp; Learnings</span>
              </div>
              <h3>atBots changed the way I think about Product Design.</h3>
              <p>With traditional products, I mainly design how users interact with interfaces. With AI products, I also have to design how the system thinks, decides, communicates uncertainty and returns control to the user.</p>
              <div className="ab-quote">
                <p>Good AI UX isn't about making AI feel more powerful. It's about making that power understandable, controllable and useful.</p>
              </div>
              <p>Designing atBots pushed me to think simultaneously about human behaviour, system behaviour, business goals and AI decision-making. And that is where I believe the role of Product Design is evolving.</p>
            </Box>
          </Box>
        </Box>

        {/* ═══════ Footer ═══════ */}
        <MoreWorkMarquee currentPath="/atbots" />
        <Box component="section" className="ab-footer">
          <Box style={container}>
            <Box style={contentPad}>
              <h3>Designing AI That Works With Humans, Not Around Them.</h3>
              <p>Bharath Anand — Product Designer · AI UX · Agentic Experiences</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default AtBotsPage
