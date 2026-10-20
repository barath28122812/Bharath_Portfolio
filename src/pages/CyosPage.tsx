import Box from '@mui/material/Box'
import type { ReactNode } from 'react'
import type { FramerStyle } from '../Components/framer'
import Navbar from '../Components/Navbar'
import MoreWorkMarquee from '../Components/MoreWorkMarquee'
import SpriteIcons from '../Components/SpriteIcons'
import cyosHeroImg from '../assets/cyos.png'

const container: FramerStyle = { width: '100%', maxWidth: '100%', margin: '0 auto', padding: 0, boxSizing: 'border-box' }
const contentPad: FramerStyle = { padding: '0 24px', boxSizing: 'border-box' }

const CYOS_LIVE_URL = 'https://cyos.co.uk/'

function CyosLiveSection() {
  return (
    <Box
      component="section"
      className="cyos-live-section"
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
          <h2 className="al-title">CYOS Live®</h2>
          <p className="al-desc">
            Curious to see this project in action? Explore the custom commerce platform where people design, customise and sell their own products.
          </p>
          <a href={CYOS_LIVE_URL} target="_blank" rel="noopener noreferrer" className="al-btn">
            <span>●</span> Take me to CYOS →
          </a>
        </Box>
      </Box>
    </Box>
  )
}

function CyosHero() {
  return (
    <Box component="section" style={{ width: '100%', background: '#fff' } as FramerStyle}>
      <style>{`
        .cyos-topbar { display:flex; width:100%; max-width:1400px; margin:0 auto 60px; box-sizing:border-box; justify-content:space-between; align-items:center; padding:16px 24px; border-bottom:1px solid rgba(224,224,224,0.6); font-family:'Inter',sans-serif; font-size:13px; color:#555; }
        .cyos-pill { display:inline-flex; align-items:center; gap:8px; padding:6px 16px; border-radius:100px; background:rgba(255,70,46,0.10); color:rgb(255,70,46); font-family:'Inter',sans-serif; font-size:13px; font-weight:600; margin-bottom:24px; }
        .cyos-eyebrow { font-family:'Inter',sans-serif; font-size:13px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:#999; margin:0 0 16px 0; }
        .cyos-title { font-family:'Inter',sans-serif; font-size:clamp(48px,9vw,108px); font-weight:700; letter-spacing:-0.02em; line-height:1; color:#111; margin:0 0 20px 0; }
        .cyos-subtitle { font-family:'Inter',sans-serif; font-size:clamp(15px,2vw,18px); line-height:1.6; color:#555; max-width:640px; margin:0 auto; }
        .cyos-tags { display:flex; flex-wrap:wrap; justify-content:center; gap:10px; margin-top:28px; }
        .cyos-tag { padding:7px 16px; border-radius:100px; background:#f3f3f3; color:#333; font-family:'Inter',sans-serif; font-size:13px; font-weight:600; }
        .cyos-hero-visual { margin-top:48px; border-radius:26px; overflow:hidden; border:1px solid #ededed; box-shadow:0 24px 64px rgba(0,0,0,0.10); }
        .cyos-hero-img { width:100%; height:auto; display:block; }
        .cyos-hero-float { position:absolute; display:flex; flex-direction:column; gap:8px; background:#fff; border:1px solid #ededed; border-radius:16px; padding:14px 18px; box-shadow:0 16px 40px rgba(0,0,0,0.10); font-family:'Inter',sans-serif; }
      `}</style>
      <Box style={{ ...container, textAlign: 'center' } as FramerStyle}>
        <Box style={{ ...contentPad, paddingTop: 120, paddingBottom: 60 } as FramerStyle}>
          <div className="cyos-pill">
            <span style={{ width: 6, height: 6, background: 'rgb(255,70,46)', borderRadius: '50%', display: 'inline-block' }} />
            Case study
          </div>
          <p className="cyos-eyebrow">From an Idea to a Product · Designing a Creator-Led Custom Commerce Experience</p>
          <h1 className="cyos-title">CYOS®</h1>
          <p className="cyos-subtitle">
            Simplifying Customisation, Buying & Selling across a multi-sided E-commerce platform. CYOS — meaning <b>Create Your Own Style</b> — lets people turn ideas into personalised products.
          </p>
          <div className="cyos-tags">
            <span className="cyos-tag">#Ecommerce</span>
            <span className="cyos-tag">#Marketplace</span>
            <span className="cyos-tag">#ProductDesign</span>
            <span className="cyos-tag">#SaaS</span>
            <span className="cyos-tag">#CreatorEconomy</span>
          </div>
           <Box style={{ position: 'relative', marginTop: 48 } as FramerStyle}>
            <div className="cyos-hero-visual">
              <img src={cyosHeroImg} alt="CYOS product customiser" loading="lazy" className="cyos-hero-img" />
            </div>
            <div className="cyos-hero-float" style={{ left: 20, top: 60 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', display: 'inline-block', background: '#22c55e' }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#333' }}>Live Preview</span>
            </div>
            <div className="cyos-hero-float" style={{ right: 20, bottom: 40 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#333' }}>Choose → Create → Make it yours</span>
              <span style={{ fontSize: 12, color: '#888' }}>Product Configurator</span>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: '"Inter", sans-serif',
        fontSize: 'clamp(28px,4vw,44px)',
        fontWeight: 700,
        letterSpacing: '-0.01em',
        lineHeight: 1.1,
        color: '#111',
        margin: '0 0 16px 0',
      } as FramerStyle}
    >
      {children}
    </h2>
  )
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 } as FramerStyle}>
      <span style={{ width: 12, height: 12, background: 'rgb(255,70,46)', display: 'inline-block', flex: 'none' } as FramerStyle} />
      <span style={{ fontFamily: '"Inter",sans-serif', fontSize: 14, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999' } as FramerStyle}>
        {children}
      </span>
    </div>
  )
}

function ContextSection() {
  return (
    <Box component="section" style={{ width: '100%', padding: '64px 0 40px', background: '#fff', borderTop: '1px solid #ededed' } as FramerStyle}>
      <style>{`
        .cyos-block { font-family:'Inter',sans-serif; font-size:15px; line-height:1.75; color:#555; margin:0 0 16px 0; }
        .cyos-actor-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin-top:24px; }
        @media(max-width:800px){ .cyos-actor-grid{grid-template-columns:repeat(2,1fr);} }
        @media(max-width:520px){ .cyos-actor-grid{grid-template-columns:1fr;} }
        .cyos-actor { background:#f8f8f8; border-radius:18px; padding:20px; border:1px solid #ededed; }
        .cyos-actor b { display:block; font-family:'Inter',sans-serif; font-size:15px; color:#111; margin-bottom:6px; }
        .cyos-actor p { font-family:'Inter',sans-serif; font-size:13.5px; line-height:1.55; color:#666; margin:0; }
        .cyos-quote { border-left:3px solid rgb(255,70,46); padding:8px 0 8px 20px; margin:20px 0; font-family:'Inter',sans-serif; font-size:16px; font-style:italic; color:#333; }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <SectionLabel>Context</SectionLabel>
          <SectionHeading>An ecosystem behind every single purchase</SectionHeading>
          <p className="cyos-block">
            CYOS, meaning <b>Create Your Own Style</b>, is a custom-commerce platform that allows people to turn their ideas into personalised products.
          </p>
          <p className="cyos-block">
            Users can design and customise products, purchase existing designs, sell their own creations and send personalised products as gifts. But CYOS isn't simply another online store — behind a single purchase sits an ecosystem connecting customers, creators, sellers, brands, printing partners, fulfilment and shipping.
          </p>
          <div className="cyos-quote">My design challenge was to make this ecosystem feel simple from the user's side.</div>

          <SectionLabel>About CYOS</SectionLabel>
          <div className="cyos-quote">Give people the ability to create, wear and sell something that feels like their own.</div>
          <p className="cyos-block">
            The platform enables users to customise products by selecting products, colours and designs or by uploading their own artwork. Creators can also publish designs and turn their creativity into products that other users can purchase. CYOS then supports the production and fulfilment process behind the experience.
          </p>

          <SectionLabel>Understanding the CYOS Ecosystem</SectionLabel>
          <p className="cyos-block">Before designing individual screens, I mapped the different actors interacting with the platform.</p>
          <div className="cyos-actor-grid">
            <div className="cyos-actor"><b>Customer</b><p>Wants to discover, customise and purchase products.</p></div>
            <div className="cyos-actor"><b>Creator / Artist</b><p>Wants to upload artwork, create products and monetise designs.</p></div>
            <div className="cyos-actor"><b>Seller</b><p>Wants to build products and sell them through an online storefront.</p></div>
            <div className="cyos-actor"><b>Printing Partner</b><p>Receives production requirements and fulfils customised orders.</p></div>
            <div className="cyos-actor"><b>Platform / Admin</b><p>Needs visibility across users, products, orders, designs and fulfilment.</p></div>
          </div>
          <div className="cyos-quote">CYOS wasn't one user journey. It was several connected journeys operating inside the same product ecosystem.</div>
        </Box>
      </Box>
    </Box>
  )
}

function ChallengeSection() {
  return (
    <Box component="section" style={{ width: '100%', padding: '40px 0', background: '#fff' } as FramerStyle}>
      <style>{`
        .cyos-chal { font-family:'Inter',sans-serif; font-size:15px; line-height:1.75; color:#555; margin-bottom:14px; }
        .cyos-chal-head { font-family:'Inter',sans-serif; font-size:clamp(22px,3vw,30px); font-weight:700; color:#111; margin:0 0 6px 0; }
        .cyos-chal-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:18px; margin-top:20px; }
        @media(max-width:700px){ .cyos-chal-grid{grid-template-columns:1fr;} }
        .cyos-chal-card { border:1px solid #ededed; border-radius:18px; padding:20px; background:#fafafa; }
        .cyos-chal-num { font-family:'Inter',sans-serif; font-size:26px; font-weight:800; color:rgb(255,70,46); }
        .cyos-chal-card p { font-family:'Inter',sans-serif; font-size:14px; line-height:1.6; color:#666; margin:10px 0 0 0; }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <SectionLabel>The Challenge</SectionLabel>
          <SectionHeading>Freedoms that must never feel complicated</SectionHeading>
          <p className="cyos-chal">
            Customisation gives users freedom, but every additional choice can also create complexity. Users may need to decide which product to choose, which colour to use, whether to upload their own design or select an existing one, where their artwork should appear, how large it should be, what the finished product will look like, how much it will cost, and what happens after ordering.
          </p>
          <p className="cyos-chal">
            For creators another set of questions appears — how do I publish a design, how do customers discover it, and how do I sell my work?
          </p>
          <div className="cyos-quote">How might we give users creative freedom without making the experience feel complicated?</div>

          <SectionLabel>Business Challenges</SectionLabel>
          <div className="cyos-chal-grid">
            <div className="cyos-chal-card">
              <div className="cyos-chal-num">01</div>
              <p>Users needed to move naturally between discovering products and creating personalised ones.</p>
            </div>
            <div className="cyos-chal-card">
              <div className="cyos-chal-num">02</div>
              <p>The customisation journey needed to remain understandable despite multiple product, colour and design decisions.</p>
            </div>
            <div className="cyos-chal-card">
              <div className="cyos-chal-num">03</div>
              <p>Creators needed a clear path from uploading an idea to offering it commercially.</p>
            </div>
            <div className="cyos-chal-card">
              <div className="cyos-chal-num">04</div>
              <p>The platform needed to connect commerce, production and fulfilment without exposing operational complexity to customers.</p>
            </div>
            <div className="cyos-chal-card">
              <div className="cyos-chal-num">05</div>
              <p>The experience needed to remain consistent across an expanding range of products and user journeys.</p>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

function UsersSection() {
  const users = [
    { name: 'The Shopper', quote: 'I already know what I want. I just need an easy way to buy it.', needs: ['Fast discovery', 'Clear product information', 'Simple checkout', 'Order confidence'] },
    { name: 'The Customiser', quote: 'I want something that feels unique to me.', needs: ['Simple customisation', 'Visual feedback', 'Easy artwork placement', 'Product preview', 'Pricing clarity'] },
    { name: 'The Creator', quote: 'I want other people to discover and buy what I create.', needs: ['Design upload', 'Product creation', 'Publishing', 'Store visibility', 'Order / sales visibility'] },
    { name: 'The Gift Buyer', quote: 'I want something personal rather than another generic gift.', needs: ['Easy product discovery', 'Customisation', 'Preview', 'Simple gifting journey'] },
  ]
  return (
    <Box component="section" style={{ width: '100%', padding: '40px 0', background: '#fff' } as FramerStyle}>
      <style>{`
        .cyos-user-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:18px; margin-top:20px; }
        @media(max-width:700px){ .cyos-user-grid{grid-template-columns:1fr;} }
        .cyos-user { border:1px solid #ededed; border-radius:18px; padding:22px; background:#fafafa; display:flex; flex-direction:column; gap:12px; }
        .cyos-user-avatar { width:46px; height:46px; border-radius:'100%'; background:rgb(255,70,46); color:#fff; display:flex; align-items:center; justify-content:center; font-family:'Inter',sans-serif; font-weight:700; font-size:20px; }
        .cyos-user b { font-family:'Inter',sans-serif; font-size:16px; color:#111; }
        .cyos-user .q { font-family:'Inter',sans-serif; font-size:14.5px; font-style:italic; color:#444; margin:0; }
        .cyos-user .needs { font-family:'Inter',sans-serif; font-size:13px; color:#666; display:flex; flex-wrap:wrap; gap:6px; }
        .cyos-user .need { background:#fff; border:1px solid #ededed; border-radius:100px; padding:5px 12px; }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <SectionLabel>Understanding the Users</SectionLabel>
          <SectionHeading>Four different motivations, one ecosystem</SectionHeading>
          <p className="cyos-block">I approached the product from the perspective of different user motivations rather than treating everyone as a generic e-commerce customer.</p>
          <div className="cyos-user-grid">
            {users.map(u => (
              <div className="cyos-user" key={u.name}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 } as FramerStyle}>
                  <div style={{ width: 46, height: 46, borderRadius: '100%', background: 'rgb(255,70,46)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Inter",sans-serif', fontWeight: 700, fontSize: 20 } as FramerStyle}>{u.name[0]}</div>
                  <b>{u.name}</b>
                </div>
                <p className="q">"{u.quote}"</p>
                <div className="needs">
                  {u.needs.map(n => <span className="need" key={n}>{n}</span>)}
                </div>
              </div>
            ))}
          </div>

          <Box style={{ marginTop: 40 } as FramerStyle}>
            <SectionLabel>Mapping the Core Journeys</SectionLabel>
            <div className="cyos-chal-grid">
              <div className="cyos-chal-card"><div className="cyos-chal-head">Journey 01 — Buy</div><p>Discover → Product → Select Options → Cart → Checkout → Order</p></div>
              <div className="cyos-chal-card"><div className="cyos-chal-head">Journey 02 — Design</div><p>Choose Product → Customise → Preview → Confirm → Purchase</p></div>
              <div className="cyos-chal-card"><div className="cyos-chal-head">Journey 03 — Sell</div><p>Create / Upload Design → Configure Product → Publish → Store → Customer Purchase</p></div>
              <div className="cyos-chal-card"><div className="cyos-chal-head">Journey 04 — Gift</div><p>Choose Product → Personalise → Add Recipient Details → Purchase → Delivery</p></div>
            </div>
            <p className="cyos-block" style={{ marginTop: 20 } as FramerStyle}>
              Creating these flows separately helped identify where they should remain independent and where shared components could reduce complexity.
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function ProblemsSection() {
  const problems = [
    { title: 'UX Problem 01 — Competing User Intentions', body: 'CYOS supports buying, designing and selling. If these actions receive the same visual priority everywhere, users may struggle to understand where to begin.' },
    { title: 'UX Problem 02 — Customisation Can Create Cognitive Load', body: 'Traditional e-commerce normally asks for size, colour and quantity. Custom products introduce product, colour, artwork, position, scale, preview and variant — presented together that is overwhelming.' },
    { title: 'UX Problem 03 — Limited Confidence Before Purchase', body: 'Personalised products raise the question: "Is this actually what I am going to receive?"' },
    { title: 'UX Problem 04 — Marketplace Discovery', body: 'A platform with standard products, creator designs and personalised products needs strong information architecture to separate products, designs, creators and stores.' },
    { title: 'UX Problem 05 — Creator Complexity', body: 'Selling a design can involve several operational steps, but creators should not need to understand fulfilment infrastructure before publishing their first product.' },
  ]
  return (
    <Box component="section" style={{ width: '100%', padding: '40px 0', background: '#fff' } as FramerStyle}>
      <Box style={container}>
        <Box style={contentPad}>
          <SectionLabel>Dissecting the UX Problems</SectionLabel>
          <SectionHeading>Where users were being asked to think unnecessarily</SectionHeading>
          {problems.map((p, i) => (
            <Box key={p.title} style={{ borderBottom: '1px solid #ededed', padding: '18px 0' } as FramerStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 } as FramerStyle}>
                <span style={{ width: 34, height: 34, borderRadius: '100%', background: '#fff', border: '1px solid #ededed', color: 'rgb(255,70,46)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Inter",sans-serif', fontWeight: 800, fontSize: 14, flex: 'none' } as FramerStyle}>{i + 1}</span>
                <b style={{ fontFamily: '"Inter",sans-serif', fontSize: 16, color: '#111' } as FramerStyle}>{p.title}</b>
              </div>
              <p className="cyos-block" style={{ margin: '10px 0 0' } as FramerStyle}>{p.body}</p>
              <div className="cyos-quote" style={{ marginBottom: 0 } as FramerStyle}>Design Opportunity — {p.title.replace(/UX Problem \d+ — /, '').split('Can ')[0]}</div>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

function GoalsSection() {
  const goals = [
    ['01', 'Make Entry Points Obvious', 'Users should immediately understand whether they want to shop, design or sell.'],
    ['02', 'Make Customisation Visual', 'Users should see the consequences of their decisions instead of imagining them.'],
    ['03', 'Reduce Cognitive Load', 'Complex configuration should be broken into manageable steps.'],
    ['04', 'Support Multiple User Types', 'Customers and creators should share one ecosystem without sharing unnecessary complexity.'],
    ['05', 'Build for Scale', 'The design needed reusable patterns that work across additional products, categories and creator stores.'],
  ]
  return (
    <Box component="section" style={{ width: '100%', padding: '40px 0', background: '#fff' } as FramerStyle}>
      <Box style={container}>
        <Box style={contentPad}>
          <SectionLabel>Design Goals</SectionLabel>
          <SectionHeading>Five principles to guide the redesign</SectionHeading>
          <div className="cyos-chal-grid">
            {goals.map(g => (
              <div className="cyos-chal-card" key={g[0]}>
                <div className="cyos-chal-num">{g[0]}</div>
                <div className="cyos-chal-head" style={{ fontSize: 'clamp(18px,2.4vw,24px)', marginTop: 8 } as FramerStyle}>{g[1]}</div>
                <p>{g[2]}</p>
              </div>
            ))}
          </div>
        </Box>
      </Box>
    </Box>
  )
}

function SolutionsSection() {
  return (
    <Box component="section" style={{ width: '100%', padding: '40px 0', background: '#fff' } as FramerStyle}>
      <style>{`
        .cyos-sol-card { display:grid; grid-template-columns:1fr 1fr; gap:28px; align-items:center; padding:28px 0; border-bottom:1px solid #ededed; }
        @media(max-width:700px){ .cyos-sol-card{grid-template-columns:1fr;} }
        .cyos-sol-rev { direction:rtl; }
        @media(max-width:700px){ .cyos-sol-rev{direction:ltr;} }
        .cyos-sol-head { font-family:'Inter',sans-serif; font-size:clamp(22px,3vw,30px); font-weight:700; color:#111; margin:0 0 10px 0; }
        .cyos-sol-body { font-family:'Inter',sans-serif; font-size:14.5px; line-height:1.7; color:#666; margin:0; }
        .cyos-sol-visual { background:#f5f5f5; border-radius:18px; padding:28px; border:1px solid #ededed; display:flex; align-items:center; justify-content:center; min-height:180px; }
        .cyos-sol-chip { display:inline-flex; align-items:center; gap:10px; background:#fff; border:1px solid #ededed; border-radius:14px; padding:12px 18px; font-family:'Inter',sans-serif; font-size:13px; font-weight:600; color:#333; }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <SectionLabel>Proposed Solutions</SectionLabel>
          <SectionHeading>Making the right option obvious at the right moment</SectionHeading>

          <div className="cyos-sol-card">
            <div>
              <div className="cyos-sol-head">Intent-Based Navigation</div>
              <p className="cyos-sol-body">Created clearer routes into CYOS around the activities users actually want to perform, with three primary entry points: Shop, Create and Sell.</p>
            </div>
            <div className="cyos-sol-visual">
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' } as FramerStyle}>
                <span className="cyos-sol-chip">🛍️ Shop</span>
                <span className="cyos-sol-chip">🎨 Create</span>
                <span className="cyos-sol-chip">💰 Sell</span>
              </div>
            </div>
          </div>

          <div className="cyos-sol-card cyos-sol-rev">
            <div>
              <div className="cyos-sol-head">Visual Product Customisation</div>
              <p className="cyos-sol-body">Customisation became one of the most important experiences in the product. Instead of exposing all available controls simultaneously, the experience guides users through a clear step-by-step flow.</p>
              <p className="cyos-sol-body" style={{ marginTop: 10 } as FramerStyle}>Choose Product → Colours/Variant → Artwork → Position &amp; Adjust → Preview → Size &amp; Quantity → Add to Cart. The preview remains the visual anchor throughout.</p>
            </div>
            <div className="cyos-sol-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' } as FramerStyle}>
                {['Choose Product', 'Select Colour', 'Upload Design', 'Preview', 'Add to Cart'].map((s, i) => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 10 } as FramerStyle}>
                    <span style={{ width: 26, height: 26, borderRadius: '100%', background: i === 3 ? 'rgb(255,70,46)' : '#fff', border: '1px solid #ddd', color: i === 3 ? '#fff' : '#888', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Inter",sans-serif', fontWeight: 700, fontSize: 12 } as FramerStyle}>{i + 1}</span>
                    <span style={{ fontFamily: '"Inter",sans-serif', fontSize: 13.5, color: '#333' } as FramerStyle}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="cyos-sol-card">
            <div>
              <div className="cyos-sol-head">Making the Preview the Hero</div>
              <p className="cyos-sol-body" style={{ fontStyle: 'italic' } as FramerStyle}>The interface controls the product, but the product should remain the hero.</p>
              <p className="cyos-sol-body" style={{ marginTop: 10 } as FramerStyle}>Changes to artwork, colour, placement, scale and product variants are reflected directly and instantly in the preview, creating confidence before purchase.</p>
            </div>
            <div className="cyos-sol-visual">
              <img src={cyosHeroImg} alt="Product preview hero" loading="lazy" style={{ width: '100%', borderRadius: 12, display: 'block' } as FramerStyle} />
            </div>
          </div>

          <div className="cyos-sol-card cyos-sol-rev">
            <div>
              <div className="cyos-sol-head">Creator Experience</div>
              <p className="cyos-sol-body">The creator journey used a different mental model — simplified around creation rather than marketplace infrastructure: Upload Design → Choose Product → Position Artwork → Preview → Configure → Publish → Sell.</p>
              <p className="cyos-sol-body" style={{ marginTop: 10 } as FramerStyle}>The product handles complexity behind the scenes while the creator stays focused on what they care about: their design.</p>
            </div>
            <div className="cyos-sol-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', alignItems: 'center' } as FramerStyle}>
                {['Upload Design', 'Choose Product', 'Position Artwork', 'Publish', 'Sell'].map((s, i) => (
                  <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 } as FramerStyle}>
                    <span style={{ fontFamily: '"Inter",sans-serif', fontSize: 13, fontWeight: 600, color: '#333' } as FramerStyle}>{s}</span>
                    {i < 4 && <span style={{ color: '#bbb', fontSize: 12 } as FramerStyle}>↓</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="cyos-sol-card">
            <div>
              <div className="cyos-sol-head">Product Discovery &amp; Marketplace</div>
              <p className="cyos-sol-body">The shopping experience was structured for visual scanning — users explore through categories such as Men, Women, Kids, Gifts, Top Designs and Creator Stores. The goal was to reduce the distance between "I'm looking for something" and "this is what I want".</p>
            </div>
            <div className="cyos-sol-visual">
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' } as FramerStyle}>
                {['Men', 'Women', 'Kids', 'Gifts', 'Top Designs', 'Creator Stores'].map(c => <span className="cyos-sol-chip" key={c}>{c}</span>)}
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

function ArchitectureSection() {
  const arch = [
    { name: 'Home', items: ['Discovery and primary actions'] },
    { name: 'Shop', items: ['Products and categories'] },
    { name: 'Design', items: ['Custom product creation'] },
    { name: 'Marketplace', items: ['Creator designs and stores'] },
    { name: 'Gifts', items: ['Personalised gifting'] },
    { name: 'Creator / Seller Area', items: ['Designs', 'Products', 'Store', 'Orders', 'Performance'] },
  ]
  return (
    <Box component="section" style={{ width: '100%', padding: '40px 0', background: '#fff' } as FramerStyle}>
      <Box style={container}>
        <Box style={contentPad}>
          <SectionLabel>Information Architecture</SectionLabel>
          <SectionHeading>Preventing operational architecture from becoming customer-facing</SectionHeading>
          <p className="cyos-block">I organised the platform around major user intentions rather than internal system structure.</p>
          <div className="cyos-actor-grid">
            {arch.map(a => (
              <div className="cyos-actor" key={a.name}>
                <b>{a.name}</b>
                {a.items.map(i => <p key={i} style={{ margin: '2px 0' } as FramerStyle}>{i}</p>)}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 } as FramerStyle}>
            <SectionLabel>User Flow — Custom Product Purchase</SectionLabel>
            <div style={{ background: '#f8f8f8', border: '1px solid #ededed', borderRadius: 18, padding: '24px', display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' } as FramerStyle}>
              {['Homepage', 'Design Your Own', 'Choose Product', 'Select Variant', 'Upload / Choose Artwork', 'Customise', 'Preview', 'Select Size', 'Add to Cart', 'Checkout', 'Order Confirmation', 'Production & Fulfilment'].map((s, i) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 10 } as FramerStyle}>
                  <span style={{ background: '#fff', border: '1px solid #ededed', borderRadius: 10, padding: '9px 14px', fontFamily: '"Inter",sans-serif', fontSize: 13, fontWeight: 600, color: '#333' } as FramerStyle}>{s}</span>
                  {i < 11 && <span style={{ color: '#ccc' } as FramerStyle}>→</span>}
                </div>
              ))}
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

function DesignSystemSection() {
  return (
    <Box component="section" style={{ width: '100%', padding: '40px 0', background: '#fff' } as FramerStyle}>
      <style>{`
        .cyos-ds { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin-top:20px; }
        @media(max-width:700px){ .cyos-ds{grid-template-columns:1fr;} }
        .cyos-ds-card { border:1px solid #ededed; border-radius:18px; padding:22px; background:#fafafa; }
        .cyos-ds-card b { font-family:'Inter',sans-serif; font-size:15px; color:#111; display:block; margin-bottom:12px; }
        .cyos-swatches { display:flex; gap:8px; }
        .cyos-swatch { width:34px; height:34px; border-radius:10px; }
        .cyos-btn { display:inline-block; border-radius:100px; padding:9px 20px; font-family:'Inter',sans-serif; font-size:13px; font-weight:600; }
      `}</style>
      <Box style={container}>
        <Box style={contentPad}>
          <SectionLabel>Design System</SectionLabel>
          <SectionHeading>Consistency across shopping, customisation and creator experiences</SectionHeading>
          <p className="cyos-block">As the product expanded, reusable components helped maintain a coherent experience across navigation, buttons, form controls, product cards, filters, modals, tabs, status indicators, pricing components and responsive layouts.</p>
          <div className="cyos-ds">
            <div className="cyos-ds-card">
              <b>Typography</b>
              <div style={{ fontFamily: '"Inter",sans-serif', fontWeight: 700, fontSize: 40, lineHeight: 1, color: '#111' } as FramerStyle}>Aa</div>
              <div style={{ fontFamily: '"Inter",sans-serif', fontSize: 12, color: '#666', marginTop: 8 } as FramerStyle}>Big Shoulders + Inter</div>
            </div>
            <div className="cyos-ds-card">
              <b>Colour</b>
              <div className="cyos-swatches">
                <span className="cyos-swatch" style={{ background: '#111' }} />
                <span className="cyos-swatch" style={{ background: 'rgb(255,70,46)' }} />
                <span className="cyos-swatch" style={{ background: '#22c55e' }} />
                <span className="cyos-swatch" style={{ background: '#f5f5f5', border: '1px solid #eee' }} />
              </div>
            </div>
            <div className="cyos-ds-card">
              <b>Buttons &amp; Inputs</b>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' } as FramerStyle}>
                <span className="cyos-btn" style={{ background: '#111', color: '#fff' }}>Shop</span>
                <span className="cyos-btn" style={{ background: 'rgb(255,70,46)', color: '#fff' }}>Create</span>
                <span className="cyos-btn" style={{ background: '#fff', border: '1px solid #ddd', color: '#333' }}>Sell</span>
              </div>
              <div style={{ border: '1px solid #ddd', borderRadius: 10, padding: '9px 12px', marginTop: 12, fontFamily: '"Inter",sans-serif', fontSize: 13, color: '#888' } as FramerStyle}>Search products…</div>
            </div>
          </div>

          <Box style={{ marginTop: 36 } as FramerStyle}>
            <SectionLabel>Responsive Experience</SectionLabel>
            <SectionHeading>Designed across devices, not compressed</SectionHeading>
            <p className="cyos-block">CYOS needed to work across desktop and mobile without simply compressing the desktop experience. On desktop, controls and preview appear simultaneously; on mobile the experience required stronger prioritisation of what the user needs right now.</p>
            <div style={{ display: 'flex', gap: 18, alignItems: 'flex-end', justifyContent: 'center', flexWrap: 'wrap' } as FramerStyle}>
              <div style={{ width: '100%', maxWidth: 420, height: 200, borderRadius: 18, background: '#f5f5f5', border: '1px solid #ededed', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Inter",sans-serif', fontSize: 13, color: '#888' } as FramerStyle}>Desktop</div>
              <div style={{ width: 160, height: 260, borderRadius: 18, background: '#f5f5f5', border: '1px solid #ededed', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Inter",sans-serif', fontSize: 13, color: '#888' } as FramerStyle}>Tablet</div>
              <div style={{ width: 110, height: 220, borderRadius: 18, background: '#f5f5f5', border: '1px solid #ededed', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Inter",sans-serif', fontSize: 13, color: '#888' } as FramerStyle}>Mobile</div>
            </div>
          </Box>

          <Box style={{ marginTop: 36 } as FramerStyle}>
            <SectionLabel>Validation &amp; Iteration</SectionLabel>
            <SectionHeading>Continuously reviewed against core journeys</SectionHeading>
            <p className="cyos-block">
              The design was validated against whether users could understand where to start, how to select products, how to customise, how to preview, how to purchase, and how to create and sell. Feedback was then used to refine hierarchy, interactions and workflow clarity before implementation.
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function ImpactSection() {
  return (
    <Box component="section" style={{ width: '100%', padding: '40px 0 20px', background: '#fff' } as FramerStyle}>
      <Box style={container}>
        <Box style={contentPad}>
          <SectionLabel>Impact</SectionLabel>
          <SectionHeading>Clearer journeys. Simpler customisation.</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginTop: 20 } as FramerStyle}>
            <div style={{ textAlign: 'center', border: '1px solid #ededed', borderRadius: 18, padding: '32px 20px', background: '#fafafa' } as FramerStyle}>
              <div style={{ fontFamily: '"Inter",sans-serif', fontSize: 'clamp(44px,7vw,72px)', fontWeight: 700, color: 'rgb(255,70,46)', lineHeight: 1 } as FramerStyle}>+15%</div>
              <div style={{ fontFamily: '"Inter",sans-serif', fontSize: 14, fontWeight: 600, color: '#555', marginTop: 8 } as FramerStyle}>Conversion</div>
            </div>
            <div style={{ textAlign: 'center', border: '1px solid #ededed', borderRadius: 18, padding: '32px 20px', background: '#fafafa' } as FramerStyle}>
              <div style={{ fontFamily: '"Inter",sans-serif', fontSize: 'clamp(44px,7vw,72px)', fontWeight: 700, color: '#111', lineHeight: 1 } as FramerStyle}>−20%</div>
              <div style={{ fontFamily: '"Inter",sans-serif', fontSize: 14, fontWeight: 600, color: '#555', marginTop: 8 } as FramerStyle}>Task Completion Time</div>
            </div>
          </div>
          <p className="cyos-block" style={{ marginTop: 20 } as FramerStyle}>
            The work contributed towards clearer user journeys, simpler customisation, improved product discoverability, reduced friction across key tasks, stronger consistency across the platform, and a scalable foundation for marketplace growth.
          </p>
        </Box>
      </Box>
    </Box>
  )
}

function LearningsSection() {
  return (
    <Box component="section" style={{ width: '100%', padding: '40px 0 80px', background: '#fff' } as FramerStyle}>
      <Box style={container}>
        <Box style={contentPad}>
          <SectionLabel>Final Thoughts &amp; Learnings</SectionLabel>
          <div className="cyos-quote" style={{ fontSize: 'clamp(20px,3.4vw,30px)', fontFamily: '"Inter",sans-serif', fontWeight: 600, lineHeight: 1.3, borderLeftWidth: 4 }}>
            “Great marketplace UX doesn't make every option visible. It makes the right option obvious at the right moment.”
          </div>
          <p className="cyos-block" style={{ marginTop: 24 } as FramerStyle}>
            CYOS taught me that simplifying a product doesn't always mean removing functionality. Sometimes the challenge is hiding complexity at the right moment. Behind CYOS sits an ecosystem involving customers, creators, products, designs, production, fulfilment and delivery — but users shouldn't need to understand that ecosystem to create a T-shirt.
          </p>
          <p className="cyos-block">
            My responsibility as a Product Designer was to make the system do the complicated work while allowing the user to experience something simple: <b>Choose it. Create it. Make it yours.</b>
          </p>
          <div style={{ marginTop: 32, textAlign: 'center', padding: '40px 24px', borderRadius: 18, background: '#111', color: '#fff' } as FramerStyle}>
            <div style={{ fontFamily: '"Inter",sans-serif', fontSize: 14, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' } as FramerStyle}>Let's Create Experiences People Want to Use.</div>
            <div style={{ fontFamily: '"Inter",sans-serif', fontSize: 'clamp(32px,5vw,52px)', fontWeight: 700, marginTop: 12 } as FramerStyle}>Bharath Anand</div>
            <div style={{ fontFamily: '"Inter",sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.75)', marginTop: 6 } as FramerStyle}>
              Product Designer · UX · Product Strategy · E-commerce · Marketplace Experiences
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

function CyosPage() {
  return (
    <div
      id="main"
      data-framer-hydrate-v2=""
      data-framer-generated-page
      style={{ background: '#fff' }}
    >
      <Box
        component="div"
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
          className="framer-LRfZ0 framer-3jfDI framer-et5t2c"
          style={{ minHeight: '100vh', width: 'auto', display: 'contents' } as FramerStyle}
        >
          <Box component="main" className="framer-xr6yl" data-framer-name="Main">
            <CyosLiveSection />
            <CyosHero />
            <ContextSection />
            <ChallengeSection />
            <UsersSection />
            <ProblemsSection />
            <GoalsSection />
            <SolutionsSection />
            <ArchitectureSection />
            <DesignSystemSection />
            <ImpactSection />
            <LearningsSection />
            <MoreWorkMarquee currentPath="/cyos" />
          </Box>
        </Box>
        <div className="framer-15qpk7a" />
      </Box>
      <SpriteIcons />
    </div>
  )
}

export default CyosPage
