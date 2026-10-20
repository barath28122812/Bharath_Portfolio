import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import type { FramerStyle } from './framer'
import { useChat } from './ChatContext'
import { TESTIMONIALS } from '../data/about'

const VISIBLE_TESTIMONIALS = TESTIMONIALS

const STAR_CLASSES = [
  'framer-18f9yxt',
  'framer-iam0qq',
  'framer-iu3v45',
  'framer-7f6wti',
  'framer-f6ch9e',
]

const AVATAR_SHADOW =
  '0px 0px 0px 4px var(--token-8f8b32ea-2243-4c94-90d7-9dbc1e52ffc2, rgb(255, 255, 255)), 0.39809593676181976px 0.39809593676181976px 1.0133868112095374px -0.25px rgba(0, 0, 0, 0.06), 1.207253071552259px 1.207253071552259px 3.073164600610406px -0.5px rgba(0, 0, 0, 0.07), 3.1913267607422307px 3.1913267607422307px 8.123791656610548px -0.75px rgba(0, 0, 0, 0.1), 10px 10px 25.45584412271571px -1px rgba(0, 0, 0, 0.2)'

const ARROW_BORDER = {
  '--border-bottom-width': '0px',
  '--border-color': 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))',
  '--border-left-width': '1px',
  '--border-right-width': '1px',
  '--border-style': 'solid',
  '--border-top-width': '0px',
} as FramerStyle

function Testimonials() {
  const [index, setIndex] = useState(0)
  const testimonialCardRef = useRef<HTMLElement>(null)
  const contactCardRef = useRef<HTMLElement>(null)
  const { openChat } = useChat()

  useEffect(() => {
    const updateStack = () => {
      const testimonialCard = testimonialCardRef.current
      const contactCard = contactCardRef.current
      if (!testimonialCard || !contactCard) return

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        testimonialCard.style.transform = 'none'
        contactCard.style.transform = 'none'
        contactCard.style.opacity = '1'
        return
      }

      const contactTop = contactCard.getBoundingClientRect().top
      const start = window.innerHeight * 0.95
      const end = window.innerHeight * 0.12
      const progress = Math.max(0, Math.min(1, (start - contactTop) / (start - end)))

      const isMobile = window.innerWidth <= 809.98
      const maxTranslate = isMobile ? -20 : -32
      const maxScale = isMobile ? 0.05 : 0.075
      const contactOffset = isMobile ? 36 : 48

      testimonialCard.style.transform = `translate3d(0, ${progress * maxTranslate}px, 0) scale(${1 - progress * maxScale})`
      contactCard.style.transform = `translate3d(0, ${(1 - progress) * contactOffset}px, 0)`
      contactCard.style.opacity = String(0.75 + progress * 0.25)
    }

    let frame = 0
    const scheduleUpdate = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        updateStack()
      })
    }

    updateStack()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  const goTo = (requestedIndex: number) => {
    const nextIndex = (requestedIndex + VISIBLE_TESTIMONIALS.length) % VISIBLE_TESTIMONIALS.length
    setIndex(nextIndex)
  }

  const step = (delta: number) => {
    goTo(index + delta)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      step(-1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      step(1)
    }
  }

  const activeSlide = VISIBLE_TESTIMONIALS[index]
  const renderSlide = (padding: string, slide: (typeof VISIBLE_TESTIMONIALS)[number]) => {
    return (
      <div className="framer-oe3n1z-container testimonial-single-slide" key={slide.name}>
      <div
        className="framer-0b0XY framer-VGfb4 framer-merrA framer-JNRlU framer-1h6ytom framer-v-1h6ytom testimonial-card"
        data-framer-name="1"
        style={{ height: 'auto', width: '100%' } as FramerStyle}
      >
        <div className="framer-54v01o" data-framer-name="Content &amp; profile">
          <div className="framer-1f026m8" data-framer-name="Content &amp; profile" style={{ '--19vziij': padding } as FramerStyle}>
            <div className="framer-1flurk4-container">
              <div
                className="framer-gPwg1 framer-1iz23gn framer-v-1iz23gn"
                data-framer-name="Star "
                data-highlight="true"
                style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' } as FramerStyle}
              >
                {STAR_CLASSES.slice(0, slide.stars).map(starClass => (
                  <div key={starClass} data-framer-component-type="SVG" data-framer-name="Star 1" className={starClass} aria-hidden="true" style={{ imageRendering: 'pixelated', flexShrink: '0' } as FramerStyle}>
                    <div className="svgContainer" style={{ width: '100%', height: '100%', aspectRatio: 'inherit' } as FramerStyle}>
                      <svg style={{ width: '100%', height: '100%' } as FramerStyle}>
                        <use href="#svg12248085982" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="framer-ghobsa" data-framer-component-type="RichTextContainer" style={{ '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none' } as FramerStyle}>
              <h3 className="framer-text framer-styles-preset-1k71nux" data-styles-preset="efEdqGxKU" dir="auto" style={{ '--framer-text-alignment': 'center', '--framer-font-size': 'clamp(18px, 2.4vw, 28px)' } as FramerStyle}>{`"${slide.quote}"`}</h3>
            </div>
          </div>
        </div>
        <div className="framer-765p44" data-framer-name="Content &amp; profile">
          <div
            className="framer-jsw4xu"
            data-border="true"
            data-framer-name="Profile &amp; button"
            style={{ '--border-bottom-width': '1px', '--border-color': 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', '--border-left-width': '0px', '--border-right-width': '0px', '--border-style': 'solid', '--border-top-width': '1px' } as FramerStyle}
          >
            <div className="framer-qjom22 testimonial-profile-wrapper" data-framer-name="Profile">
              <div className="testimonial-avatar-controls-row">
                <div className="framer-1as0ovt" data-framer-name="Arrow 1">
                  <div className="framer-1vb24d8-container">
                    <button
                      type="button"
                      className="framer-cw4tT framer-1xyidr7 framer-v-s6myfi testimonial-arrow"
                      data-border="true"
                      data-framer-name="Left"
                      data-highlight="true"
                      aria-label="Previous testimonial"
                      onClick={() => step(-1)}
                      style={{ ...ARROW_BORDER, backgroundColor: 'var(--token-8f8b32ea-2243-4c94-90d7-9dbc1e52ffc2, rgb(255, 255, 255))', border: 'none', font: 'inherit', color: 'inherit' } as FramerStyle}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: 'auto' }}>
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div
                  className="framer-1bbzk8l"
                  data-framer-name="2"
                  style={{ borderBottomLeftRadius: '90px', borderBottomRightRadius: '90px', borderTopLeftRadius: '90px', borderTopRightRadius: '90px', boxShadow: AVATAR_SHADOW } as FramerStyle}
                >
                  <div style={{ position: 'absolute', borderRadius: 'inherit', cornerShape: 'inherit', top: '0', right: '0', bottom: '0', left: '0' } as FramerStyle} data-framer-background-image-wrapper="true">
                    <img
                      decoding="async"
                      width="609"
                      height="609"
                      sizes="(min-width: 1200px) 50px, (min-width: 810px) and (max-width: 1199.98px) 50px, (max-width: 809.98px) 50px"
                      src={slide.image}
                      alt={`${slide.name} client photo`}
                      style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', cornerShape: 'inherit', objectPosition: slide.objectPosition ?? '55.5% 35.3%', objectFit: 'cover' } as FramerStyle}
                    />
                  </div>
                </div>

                <div className="framer-1mdx4d2" data-framer-name="Arrow 2">
                  <div className="framer-15g7vf7-container">
                    <button
                      type="button"
                      className="framer-cw4tT framer-1xyidr7 framer-v-t6thi2 testimonial-arrow"
                      data-border="true"
                      data-framer-name="Right"
                      data-highlight="true"
                      aria-label="Next testimonial"
                      onClick={() => step(1)}
                      style={{ ...ARROW_BORDER, backgroundColor: 'var(--token-8f8b32ea-2243-4c94-90d7-9dbc1e52ffc2, rgb(255, 255, 255))', border: 'none', font: 'inherit', color: 'inherit' } as FramerStyle}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: 'auto' }}>
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="framer-1ndt4tr" data-framer-name="Name &amp; description">
                <div className="framer-12ijio0" data-framer-component-type="RichTextContainer" style={{ '--extracted-1eung3n': 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none' } as FramerStyle}>
                  <h4 className="framer-text framer-styles-preset-fbjwod" data-styles-preset="xiuBdYlUL" dir="auto" style={{ '--framer-text-color': 'var(--extracted-1eung3n, var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0)))' } as FramerStyle}>{slide.name}</h4>
                </div>
                <div className="framer-13y9t31" data-framer-component-type="RichTextContainer" style={{ '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none' } as FramerStyle}>
                  <p className="framer-text framer-styles-preset-mtjcdx" data-styles-preset="vhFZzKR_Q" dir="auto">{slide.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="framer-mddw0t-container" aria-hidden="true">
          <div className="framer-r1e4h framer-1pf7mrm framer-v-1xhpk68" data-framer-name="Up" style={{ height: '100%', width: '100%' } as FramerStyle}>
            <div className="framer-Gf2HJ framer-m9mvp8" style={{ '--1hmr9s8': 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle} />
            <div className="framer-Gf2HJ framer-1sivco4" style={{ '--1hmr9s8': 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle} />
          </div>
        </div>
      </div>
      </div>
    )
  }

  return (
    <>
  <div className="testimonial-scroll-layout">
    <div className="framer-1yc1p7v" data-border="true" data-framer-name="Title">
      <div className="framer-11m0pnm" data-framer-component-type="RichTextContainer" style={{ transform: 'none', whiteSpace: 'nowrap' } as FramerStyle}>
        <h2
          className="framer-text framer-styles-preset-sv70jv testimonial-heading"
          data-styles-preset="A8qgnGVdI"
          dir="auto"
          style={{
            "--framer-text-alignment": 'left',
            whiteSpace: 'nowrap',
            wordBreak: 'keep-all',
            overflowWrap: 'normal',
          } as FramerStyle}
        >
          {"TESTIMONIAL"}
        </h2>
      </div>
    </div>
    <div className="testimonial-panels">
      <div className="testimonial-scroll-step testimonial-carousel-step">
        <section
          className="framer-1f8dsmc"
          data-border="true"
          data-framer-name="Testimonial"
          id="dean-testimonial"
          role="group"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          tabIndex={0}
          onKeyDown={onKeyDown}
          ref={testimonialCardRef}
        >
          <div className="ssr-variant hidden-162xyd4 hidden-1ae2x0g">
            {renderSlide('32px 32px 32px 32px', activeSlide)}
          </div>
          <div className="ssr-variant hidden-et5t2c">
            {renderSlide('16px 16px 16px 16px', activeSlide)}
          </div>
          <p aria-live="polite" className="testimonial-sr-only">{`Testimonial ${index + 1} of ${VISIBLE_TESTIMONIALS.length}: ${activeSlide.name}`}</p>
        </section>
      </div>

      <div className="testimonial-scroll-step">
        <aside ref={contactCardRef} className="testimonial-contact-card" aria-labelledby="testimonial-contact-heading">
        <div>
          <h3 id="testimonial-contact-heading">Let's Work Together</h3>
          <p>Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you within 24 hours.</p>
        </div>
        <div className="testimonial-contact-details">
          <div><strong>Email</strong><a href="mailto:bharathanand.mail@gmail.com">bharathanand.mail@gmail.com</a></div>
          <div><strong>Phone</strong><a href="tel:+447768273952">+44 7768273952</a></div>
          <div className="testimonial-contact-socials">
            <strong>Socials</strong>
            <div>
              <a href="https://www.linkedin.com/in/bharath-anan/" target="_blank" rel="noopener noreferrer">Linkedin</a>
              <a href="https://www.behance.net/bharathanand2812" target="_blank" rel="noopener noreferrer">Behance</a>
              <a href="https://www.upwork.com/freelancers/~0120b4affdbbb36df1?mp_source=share" target="_blank" rel="noopener noreferrer">Upwork</a>
              <a href="https://www.figma.com/community/file/1686072251787180492" target="_blank" rel="noopener noreferrer">Figma</a>
            </div>
          </div>
        </div>
        <div className="testimonial-contact-booking">
          <p>Prefer to schedule a call instead? Book a free 30-minute consultation and let's discuss your project.</p>
          <button type="button" onClick={openChat}>Let's Set Up a Time</button>
        </div>
        </aside>
      </div>
    </div>
  </div>
    </>
  )
}

export default Testimonials
