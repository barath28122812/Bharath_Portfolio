import { useState } from 'react'
import Box from '@mui/material/Box'
import type { FramerStyle } from './framer'

const SERVICE_ITEMS = [
  {
    num: '01',
    title: 'Product design',
    tag: 'Design for Impact',
    desc: 'End-to-end product design, from research and strategy to polished UI — focused on solving real user problems.',
    points: [
      'UX research & strategy',
      'Wireframes & flows',
      'UI design & design systems',
      'Prototyping & usability testing',
    ],
    image: '/assets/ProductDesign.png',
    imageAlt: 'Product design work',
  },

  {
    num: '02',
    title: 'Web design',
    tag: 'Design That Converts',
    desc: 'Conversion-focused, modern web design that gives brands a clear, memorable and easy-to-navigate online presence.',
    points: [
      'Landing pages & portfolios',
      'Responsive web layouts',
      'Interaction & motion',
      'Clean developer handoff',
    ],
    image: '/assets/WebDesign.png',
    imageAlt: 'Web design work',
  },

  {
    num: '03',
    title: 'Agentic AI',
    tag: 'Design for Intelligent Systems',
    desc: 'Human-centred AI experiences that make autonomous systems understandable, trustworthy and easy to control.',
    points: [
      'Agent orchestration flows',
      'Human-in-the-loop experiences',
      'AI interaction patterns',
      'Trust, fallback & escalation states',
    ],
    image: '/assets/Robot.png',
    imageAlt: 'Agentic AI design work',
  },

  {
    num: '04',
    title: 'Branding',
    tag: 'Build a Visual Voice',
    desc: 'Brand identity systems that make your business instantly recognisable and memorable.',
    points: [
      'Logo & identity systems',
      'Brand guidelines',
      'Visual language & colour',
      'Brand application & assets',
    ],
    image: '/assets/Branding.png',
    imageAlt: 'Branding work',
  },

  {
    num: '05',
    title: 'Graphic design',
    tag: 'Designs That Communicate',
    desc: 'Clear, engaging visuals for campaigns, social and print that speak directly to your audience.',
    points: [
      'Social media creatives',
      'Campaign visuals',
      'Print & posters',
      'Illustration & iconography',
    ],
    image: '/assets/GraphicDesign.png',
    imageAlt: 'Graphic design work',
  },
]

function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
  <Box className="framer-hhz42d" data-framer-name="Services" component="section">
    <div className="framer-15t7is9" data-framer-name="Services" id="dean-services">
      <div className="framer-16wkbmu" data-border="true" data-framer-name="Title">
        <div className="framer-1d2h9jk" data-framer-name="Ticker" style={{ "display": 'flex', "position": 'relative' } as FramerStyle}>
          <div className="framer-1232xio" data-framer-cursor="1g55rex" data-framer-name="Text" data-highlight="true" tabIndex={0} style={{ "overflowX": 'clip', "display": 'flex', "position": 'relative' } as FramerStyle}>
            <ul style={{ "display": 'flex', "position": 'relative', "listStyleType": 'none', "padding": '0', "margin": '0', "justifyContent": 'flex-start', "flexDirection": 'row', "gap": '64px', "opacity": '1', "alignItems": 'center', "width": '100%', "height": '100%', "maxHeight": '100%', "maxWidth": '100%', "transform": 'translateX(-64px)' } as FramerStyle}>
            <li className="ticker-item" aria-hidden="false" aria-posinset={1} aria-setsize={4} style={{ "flexGrow": '0', "flexShrink": '0', "position": 'relative', "height": 'fit-content', "width": 'fit-content', "transform": 'none' } as FramerStyle}>
              <div className="framer-1e1i0w2" data-framer-component-type="RichTextContainer" style={{ "transform": 'none' } as FramerStyle}>
                <h2 className="framer-text framer-styles-preset-sv70jv" data-styles-preset="A8qgnGVdI" dir="auto" style={{ "--framer-text-alignment": 'left' } as FramerStyle}>{"SERVICES"}</h2>
              </div>
            </li>
            <li className="ticker-item" aria-hidden="false" aria-posinset={2} aria-setsize={4} style={{ "flexGrow": '0', "flexShrink": '0', "position": 'relative', "height": 'fit-content', "width": 'fit-content', "transform": 'none' } as FramerStyle}>
              <div className="framer-l6i1fd" data-framer-component-type="RichTextContainer" style={{ "transform": 'none' } as FramerStyle}>
                <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto" style={{ "--framer-text-alignment": 'center', "--framer-text-color": 'var(--token-2c4d0fad-06de-414f-b048-811f13183390, rgb(87, 87, 87))' } as FramerStyle}>{"what i offer"}</p>
              </div>
            </li>
            <li className="ticker-item" aria-hidden="false" aria-posinset={3} aria-setsize={4} style={{ "flexGrow": '0', "flexShrink": '0', "position": 'relative', "height": 'fit-content', "width": 'fit-content', "transform": 'none' } as FramerStyle}>
              <div className="framer-1osgx2q" data-framer-component-type="RichTextContainer" style={{ "transform": 'none' } as FramerStyle}>
                <h2 className="framer-text framer-styles-preset-sv70jv" data-styles-preset="A8qgnGVdI" dir="auto" style={{ "--framer-text-alignment": 'left' } as FramerStyle}>{"SERVICES"}</h2>
              </div>
            </li>
            <li className="ticker-item" aria-hidden="false" aria-posinset={4} aria-setsize={4} style={{ "flexGrow": '0', "flexShrink": '0', "position": 'relative', "height": 'fit-content', "width": 'fit-content', "transform": 'none' } as FramerStyle}>
              <div className="framer-y2aepi" data-framer-component-type="RichTextContainer" style={{ "transform": 'none' } as FramerStyle}>
                <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto" style={{ "--framer-text-alignment": 'center', "--framer-text-color": 'var(--token-2c4d0fad-06de-414f-b048-811f13183390, rgb(87, 87, 87))' } as FramerStyle}>{"what i offer"}</p>
              </div>
            </li>
          </ul>
          </div>
        </div>
      </div>
      <div className="framer-scfz0e services-section-container" data-framer-name="Services">
        <div className="framer-1g5799e services-list-wrapper" data-framer-name="Services">
          {SERVICE_ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={item.num}
                className="services-accordion-item"
              >
                <div
                  role="button"
                  tabIndex={0}
                  className="services-accordion-header"
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggle(i)
                    }
                  }}
                  aria-expanded={isOpen}
                >
                  <div className="services-header-left">
                    <div className="services-title-wrap">
                      <h4 className="framer-text framer-styles-preset-fbjwod services-num" data-styles-preset="xiuBdYlUL" dir="auto">{item.num}</h4>
                      <h3 className="framer-text framer-styles-preset-1k71nux services-title" data-styles-preset="efEdqGxKU" dir="auto">{item.title.toUpperCase()}</h3>
                    </div>
                    <span className="services-tag services-tag--mobile">
                      {item.tag}
                    </span>
                  </div>
                  <div className="services-header-right">
                    <span className="services-tag services-tag--desktop">
                      {item.tag}
                    </span>
                    <div
                      className={`services-toggle-btn ${isOpen ? 'is-open' : ''}`}
                      aria-hidden="true"
                    >
                      <span className="services-toggle-icon-h" />
                      <span className="services-toggle-icon-v" />
                    </div>
                  </div>
                </div>
                <div className={`services-accordion-collapse ${isOpen ? 'is-open' : ''}`}>
                  <div className="services-collapse-inner">
                    <div className="services-expanded-content">
                      <div className="services-expanded-info">
                        <p className="services-desc">
                          {item.desc}
                        </p>
                        <div className="services-points-list">
                          {item.points.map((p) => (
                            <span key={p} className="services-point-badge">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        loading="lazy"
                        className="services-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </Box>
  )
}

export default Services