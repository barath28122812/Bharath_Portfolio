import Box from '@mui/material/Box'
import { useEffect, useRef, useState } from 'react'
import type { FramerStyle } from './framer'

function CountUp({ target, suffix = '', duration = 1800 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    let visible = false
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !visible) {
            visible = true
            setVal(0)
            const start = performance.now()
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - p, 3)
              setVal(Math.round(eased * target))
              if (p < 1) raf = requestAnimationFrame(tick)
              else raf = 0
            }
            raf = requestAnimationFrame(tick)
          } else if (!entry.isIntersecting && visible) {
            visible = false
            setVal(0)
            cancelAnimationFrame(raf)
            raf = 0
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target, duration])

  return <span ref={ref}>{val}{suffix}</span>
}

function About() {
  return (
  <Box className="framer-14q0wb" data-framer-name="About" component="section">
    <div className="framer-3hswv" data-border="true" data-framer-name="About me" id="dean-about-me">
      <div className="framer-163ehaw" data-border="true" data-framer-name="Stats 1">
        <div className="framer-73m4c5" data-framer-name="Statistics">
          <div className="ssr-variant hidden-162xyd4 hidden-1ae2x0g">
            <div className="framer-1wm0lbd-container">
              <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-kn771y" data-border="true" data-framer-name="Without corner" style={{ "--1fmlk4z": '64px 24px 64px 24px', "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '0px', "width": '100%' } as FramerStyle}>
                <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
                  <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                    <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '35px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}><CountUp target={45} suffix="+" /></span>
                  </div>
                </div>
                <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Projects Completed"}</p>
                <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}> 
                </div>
                <div className="framer-19qfypj-container">
                  <div className="framer-r1e4h framer-1pf7mrm framer-v-1xhpk68" data-framer-name="Up" style={{ "height": '100%', "width": '100%' } as FramerStyle}>
                    <div className="framer-Gf2HJ framer-m9mvp8" style={{ "--1hmr9s8": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle} />
                    <div className="framer-Gf2HJ framer-1sivco4" style={{ "--1hmr9s8": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-et5t2c hidden-1ae2x0g">
            <div className="framer-1wm0lbd-container">
              <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-kn771y" data-border="true" data-framer-name="Without corner" style={{ "--1fmlk4z": '24px 16px 24px 16px', "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '0px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '0px', "width": '100%' } as FramerStyle}>
                <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
                  <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                    <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '35px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}><CountUp target={45} suffix="+" /></span>
                  </div>
                </div>
                <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Projects Completed"}</p>
                <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>
                </div>
                <div className="framer-19qfypj-container">
                  <div className="framer-r1e4h framer-1pf7mrm framer-v-ar96mo" data-framer-name="None" style={{ "height": '100%', "width": '100%' } as FramerStyle} />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-162xyd4 hidden-et5t2c">
            <div className="framer-1wm0lbd-container">
              <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-bjmu9" data-border="true" data-framer-name="Mobile" style={{ "--1fmlk4z": '24px 16px 24px 16px', "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '0px', "--border-right-width": '0px', "--border-style": 'solid', "--border-top-width": '1px', "width": '100%' } as FramerStyle}>
                <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
                  <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                    <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '25px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}><CountUp target={45} suffix="+" /></span>
                  </div>
                </div>
                <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>
                  <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Projects Completed"}</p>
                </div>
                <div className="framer-19qfypj-container">
                  <div className="framer-r1e4h framer-1pf7mrm framer-v-ar96mo" data-framer-name="None" style={{ "height": '100%', "width": '100%' } as FramerStyle} />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-162xyd4 hidden-1ae2x0g">
            <div className="framer-1q4hfgt-container">
              <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-kn771y" data-border="true" data-framer-name="Without corner" style={{ "--1fmlk4z": '64px 24px 64px 24px', "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '0px', "width": '100%' } as FramerStyle}>
                <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
                  <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                    <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '35px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}><CountUp target={5} suffix="+" /></span>
                  </div>
                </div>
                <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Years of Experience"}</p>
                <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>
                </div>
                <div className="framer-19qfypj-container">
                  <div className="framer-r1e4h framer-1pf7mrm framer-v-ar96mo" data-framer-name="None" style={{ "height": '100%', "width": '100%' } as FramerStyle} />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-et5t2c hidden-1ae2x0g">
            <div className="framer-1q4hfgt-container">
              <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-kn771y" data-border="true" data-framer-name="Without corner" style={{ "--1fmlk4z": '24px 16px 24px 16px', "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '0px', "--border-right-width": '0px', "--border-style": 'solid', "--border-top-width": '0px', "width": '100%' } as FramerStyle}>
                <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
                  <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                    <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '35px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}><CountUp target={5} suffix="+" /></span>
                  </div>
                </div>
                <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Years of Experience"}</p>
                <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>
                </div>
                <div className="framer-19qfypj-container">
                  <div className="framer-r1e4h framer-1pf7mrm framer-v-ar96mo" data-framer-name="None" style={{ "height": '100%', "width": '100%' } as FramerStyle} />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-162xyd4 hidden-et5t2c">
            <div className="framer-1q4hfgt-container">
              <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-bjmu9" data-border="true" data-framer-name="Mobile" style={{ "--1fmlk4z": '24px 16px 24px 16px', "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '1px', "width": '100%' } as FramerStyle}>
                <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
                  <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                    <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '25px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}><CountUp target={5} suffix="+" /></span>
                  </div>
                </div>
                <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Years of Experience"}</p>
                <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>
                </div>
                <div className="framer-19qfypj-container">
                  <div className="framer-r1e4h framer-1pf7mrm framer-v-ar96mo" data-framer-name="None" style={{ "height": '100%', "width": '100%' } as FramerStyle} />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-162xyd4 hidden-1ae2x0g">
            <div className="framer-1w508at-container">
              <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-kn771y" data-border="true" data-framer-name="Without corner" style={{ "--1fmlk4z": '64px 24px 64px 24px', "--border-bottom-width": '0px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '0px', "width": '100%' } as FramerStyle}>
                <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
                  <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                    <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '35px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}>🤩</span>
                  </div>
                </div>
                <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Client Reviews"}</p>
                <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>
                </div>
                <div className="framer-19qfypj-container">
                  <div className="framer-r1e4h framer-1pf7mrm framer-v-hvznph" data-framer-name="Down" style={{ "height": '100%', "width": '100%' } as FramerStyle}>
                    <div className="framer-Gf2HJ framer-2328nn" style={{ "--1hmr9s8": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle} />
                    <div className="framer-Gf2HJ framer-vvrf56" style={{ "--1hmr9s8": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-et5t2c hidden-1ae2x0g">
            <div className="framer-1w508at-container">
              <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-kn771y" data-border="true" data-framer-name="Without corner" style={{ "--1fmlk4z": '24px 16px 24px 16px', "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '0px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '0px', "width": '100%' } as FramerStyle}>
                <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
                  <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                    <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '35px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}>🤩</span>
                  </div>
                </div>
                <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Client Reviews"}</p>
                <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>
                </div>
                <div className="framer-19qfypj-container">
                  <div className="framer-r1e4h framer-1pf7mrm framer-v-ar96mo" data-framer-name="None" style={{ "height": '100%', "width": '100%' } as FramerStyle} />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-162xyd4 hidden-et5t2c">
            <div className="framer-1w508at-container">
              <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-bjmu9" data-border="true" data-framer-name="Mobile" style={{ "--1fmlk4z": '24px 16px 24px 16px', "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '0px', "--border-right-width": '0px', "--border-style": 'solid', "--border-top-width": '0px', "width": '100%' } as FramerStyle}>
                <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
                  <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                    <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '35px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}>🤩</span>
                  </div>
                </div>
                <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Client Reviews"}</p>
                <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>
                </div>
                <div className="framer-19qfypj-container">
                  <div className="framer-r1e4h framer-1pf7mrm framer-v-ar96mo" data-framer-name="None" style={{ "height": '100%', "width": '100%' } as FramerStyle} />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-162xyd4 hidden-1ae2x0g">
            <div className="framer-3gczji-container hidden-et5t2c">
              <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-kn771y" data-border="true" data-framer-name="Without corner" style={{ "--1fmlk4z": '64px 24px 64px 24px', "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '1px', "width": '100%' } as FramerStyle}>
                <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
                  <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                    <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '35px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}><CountUp target={15} suffix="+" /></span>
                  </div>
                </div>
                <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Industry's Served"}</p>
                <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>
                </div>
                <div className="framer-19qfypj-container">
                  <div className="framer-r1e4h framer-1pf7mrm framer-v-hvznph" data-framer-name="Down" style={{ "height": '100%', "width": '100%' } as FramerStyle}>
                    <div className="framer-Gf2HJ framer-2328nn" style={{ "--1hmr9s8": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle} />
                    <div className="framer-Gf2HJ framer-vvrf56" style={{ "--1hmr9s8": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-et5t2c hidden-1ae2x0g">
            <div className="framer-3gczji-container hidden-et5t2c">
              <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-kn771y" data-border="true" data-framer-name="Without corner" style={{ "--1fmlk4z": '24px 16px 24px 16px', "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '1px', "width": '100%' } as FramerStyle}>
                <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
                  <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                    <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '35px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}><CountUp target={15} suffix="+" /></span>
                  </div>
                </div>
                 <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Industry's Served"}</p>
                <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>
                </div>
                <div className="framer-19qfypj-container">
                  <div className="framer-r1e4h framer-1pf7mrm framer-v-ar96mo" data-framer-name="None" style={{ "height": '100%', "width": '100%' } as FramerStyle} />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-162xyd4 hidden-et5t2c">
            <div className="framer-3gczji-container hidden-et5t2c">
              <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-bjmu9" data-border="true" data-framer-name="Mobile" style={{ "--1fmlk4z": '24px 16px 24px 16px', "--border-bottom-width": '0px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '0px', "--border-style": 'solid', "--border-top-width": '0px', "width": '100%' } as FramerStyle}>
                <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
                  <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                    <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '25px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}><CountUp target={15} suffix="+" /></span>
                  </div>
                </div>
                <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Industry's Served"}</p>
                <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>  
                </div>
                <div className="framer-19qfypj-container">
                  <div className="framer-r1e4h framer-1pf7mrm framer-v-ar96mo" data-framer-name="None" style={{ "height": '100%', "width": '100%' } as FramerStyle} />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-162xyd4 hidden-1ae2x0g">
            <div className="framer-noistf-container hidden-et5t2c">
              <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-kn771y" data-border="true" data-framer-name="Without corner" style={{ "--1fmlk4z": '64px 24px 64px 24px', "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '0px', "width": '100%' } as FramerStyle}>
                <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
                  <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                    <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '35px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}><CountUp target={4} /></span>
                  </div>
                </div>
                <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Agentic AI work"}</p>
                <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>
                </div>
                <div className="framer-19qfypj-container">
                  <div className="framer-r1e4h framer-1pf7mrm framer-v-ar96mo" data-framer-name="None" style={{ "height": '100%', "width": '100%' } as FramerStyle} />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-et5t2c hidden-1ae2x0g">
            <div className="framer-noistf-container hidden-et5t2c">
              <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-kn771y" data-border="true" data-framer-name="Without corner" style={{ "--1fmlk4z": '24px 16px 24px 16px', "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '0px', "width": '100%' } as FramerStyle}>
                <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
                  <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                    <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '35px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}><CountUp target={4} /></span>
                  </div>
                </div>
                <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Agentic AI work"}</p>
                <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>
                </div>
                <div className="framer-19qfypj-container">
                  <div className="framer-r1e4h framer-1pf7mrm framer-v-ar96mo" data-framer-name="None" style={{ "height": '100%', "width": '100%' } as FramerStyle} />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-162xyd4 hidden-et5t2c">
            <div className="framer-noistf-container hidden-et5t2c">
              <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-bjmu9" data-border="true" data-framer-name="Mobile" style={{ "--1fmlk4z": '24px 16px 24px 16px', "--border-bottom-width": '0px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '0px', "--border-right-width": '0px', "--border-style": 'solid', "--border-top-width": '0px', "width": '100%' } as FramerStyle}>
                <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
                  <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                    <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '25px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}><CountUp target={4} /></span>
                  </div>
                </div>
                <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Agentic AI work"}</p>
                <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>
                </div>
                <div className="framer-19qfypj-container">
                  <div className="framer-r1e4h framer-1pf7mrm framer-v-ar96mo" data-framer-name="None" style={{ "height": '100%', "width": '100%' } as FramerStyle} />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-162xyd4 hidden-1ae2x0g">
            <div className="framer-1olno0t-container hidden-et5t2c">
              <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-kn771y" data-border="true" data-framer-name="Without corner" style={{ "--1fmlk4z": '64px 24px 64px 24px', "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '0px', "width": '100%' } as FramerStyle}>
                <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
                  <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                    <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '35px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}><CountUp target={101} suffix="%" /></span>
                  </div>
                </div>
                <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Client Retention Rate"}</p>
                <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>
                </div>
                <div className="framer-19qfypj-container">
                  <div className="framer-r1e4h framer-1pf7mrm framer-v-1xhpk68" data-framer-name="Up" style={{ "height": '100%', "width": '100%' } as FramerStyle}>
                    <div className="framer-Gf2HJ framer-m9mvp8" style={{ "--1hmr9s8": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle} />
                    <div className="framer-Gf2HJ framer-1sivco4" style={{ "--1hmr9s8": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-et5t2c hidden-1ae2x0g">
            <div className="framer-1olno0t-container hidden-et5t2c">
              <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-kn771y" data-border="true" data-framer-name="Without corner" style={{ "--1fmlk4z": '24px 16px 24px 16px', "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '0px', "width": '100%' } as FramerStyle}>
                <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
                  <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                    <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '35px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}><CountUp target={101} suffix="%" /></span>
                  </div>
                </div>
                <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Client Retention Rate"}</p>
                <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>
                </div>
                <div className="framer-19qfypj-container">
                  <div className="framer-r1e4h framer-1pf7mrm framer-v-ar96mo" data-framer-name="None" style={{ "height": '100%', "width": '100%' } as FramerStyle} />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-162xyd4 hidden-et5t2c">
            <div className="framer-1olno0t-container hidden-et5t2c">
              <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-bjmu9" data-border="true" data-framer-name="Mobile" style={{ "--1fmlk4z": '24px 16px 24px 16px', "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '1px', "width": '100%' } as FramerStyle}>
                <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
                  <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                    <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '25px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}><CountUp target={101} suffix="%" /></span>
                  </div>
                </div>
                <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Client Retention Rate"}</p>
                <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>
                </div>
                <div className="framer-19qfypj-container">
                  <div className="framer-r1e4h framer-1pf7mrm framer-v-ar96mo" data-framer-name="None" style={{ "height": '100%', "width": '100%' } as FramerStyle} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="framer-uhkwvd" data-framer-name="Video">
        <div className="framer-1jv5lcx" data-border="true" data-framer-name="Title">
          <div className="ssr-variant hidden-162xyd4 hidden-1ae2x0g">
            <div className="framer-xo620" data-framer-component-type="RichTextContainer" style={{ "transform": 'none' } as FramerStyle}>
              <h2 className="framer-text framer-styles-preset-sv70jv" data-styles-preset="A8qgnGVdI" dir="auto" style={{ "--framer-text-alignment": 'center' } as FramerStyle}>{"ABOUT ME"}</h2>
            </div>
          </div>
          <div className="ssr-variant hidden-et5t2c">
            <div className="framer-xo620" data-framer-component-type="RichTextContainer" style={{ "transform": 'none' } as FramerStyle}>
              <h2 className="framer-text framer-styles-preset-sv70jv" data-styles-preset="A8qgnGVdI" dir="auto" style={{ "--framer-text-alignment": 'left' } as FramerStyle}>{"ABOUT ME"}</h2>
            </div>
          </div>
        </div>
        <div className="framer-hrku8u" data-framer-name="Video">
          <div className="framer-jyj42a-container">
            {/* <video autoPlay src="/oTOIH1FK4PBfTPisuj5hfDQldE.mp4" loop preload="none" muted playsInline style={{ "cursor": 'auto', "width": '100%', "height": '100%', "borderRadius": '30px', "display": 'block', "objectFit": 'cover', "backgroundColor": 'var(--token-20f29520-e0af-49d2-8cc2-01444e94a3fe, rgba(0, 0, 0, 0))', "objectPosition": '50% 50%' } as FramerStyle} /> */}
              <img
                src="/about.png"
                alt="Preview"
                style={{
                  cursor: "auto",
                  width: "100%",
                  height: "100%",
                  borderRadius: "30px",
                  display: "block",
                  objectFit: "cover",
                  backgroundColor: "transparent",
                  objectPosition: "50% 50%",
                }}
              />
          </div>
          <div className="framer-1toikl6 font-semibold" data-framer-name="Title">
            <div className="framer-1dfrbc1" data-framer-component-type="RichTextContainer" style={{ "transform": 'none' } as FramerStyle}>
              <h4 className="framer-text framer-styles-preset-fbjwod about-intro-heading" data-styles-preset="xiuBdYlUL" dir="auto" style={{ "--framer-text-alignment": 'center', "--framer-font-size": '18px', "--framer-text-color": '#D4AF37', "fontWeight": 600 } as FramerStyle}>{"Let Me Introduce Myself"}</h4>
            </div>
            <div className="ssr-variant hidden-162xyd4 hidden-1ae2x0g">
              <div className="framer-tHN5A framer-1izd3od" style={{ "transform": 'rotate(248deg)' } as FramerStyle} />
            </div>
            <div className="ssr-variant hidden-et5t2c hidden-1ae2x0g">
              <div className="framer-tHN5A framer-1izd3od" style={{ "transform": 'rotate(271deg)' } as FramerStyle} />
            </div>
            <div className="ssr-variant hidden-162xyd4 hidden-et5t2c">
              <div className="framer-tHN5A framer-1izd3od" style={{ "transform": 'rotate(232deg)' } as FramerStyle} />
            </div>
          </div>
        </div>
      </div>
      <div className="framer-49y84c" data-border="true" data-framer-name="Stats 2">
        <div className="framer-n8fgwk-container hidden-162xyd4 hidden-1ae2x0g">
          <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-kn771y" data-border="true" data-framer-name="Without corner" style={{ "--1fmlk4z": '64px 24px 64px 24px', "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '0px', "width": '100%' } as FramerStyle}>
            <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
              <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '35px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}><CountUp target={101} suffix="%" /></span>
              </div>
            </div>
            <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Client Retention Rate"}</p>
            <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>
            </div>
            <div className="framer-19qfypj-container">
              <div className="framer-r1e4h framer-1pf7mrm framer-v-1xhpk68" data-framer-name="Up" style={{ "height": '100%', "width": '100%' } as FramerStyle}>
                <div className="framer-Gf2HJ framer-m9mvp8" style={{ "--1hmr9s8": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle} />
                <div className="framer-Gf2HJ framer-1sivco4" style={{ "--1hmr9s8": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle} />
              </div>
            </div>
          </div>
        </div>
        <div className="framer-tanycv-container hidden-162xyd4 hidden-1ae2x0g">
          <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-kn771y" data-border="true" data-framer-name="Without corner" style={{ "--1fmlk4z": '64px 24px 64px 24px', "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '0px', "width": '100%' } as FramerStyle}>
            <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
              <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '35px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}><CountUp target={4} /></span>
              </div>
            </div>
            <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Agentic AI work"}</p>
            <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>
            </div>
            <div className="framer-19qfypj-container">
              <div className="framer-r1e4h framer-1pf7mrm framer-v-ar96mo" data-framer-name="None" style={{ "height": '100%', "width": '100%' } as FramerStyle} />
            </div>
          </div>
        </div>
        <div className="framer-1p4f9pn-container hidden-162xyd4 hidden-1ae2x0g">
          <div className="framer-vydmt framer-jlIPi framer-kn771y framer-v-kn771y" data-border="true" data-framer-name="Without corner" style={{ "--1fmlk4z": '64px 24px 64px 24px', "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '1px', "width": '100%' } as FramerStyle}>
            <div className="framer-1rtddwc-container" data-code-component-plugin-id="84d4c1">
              <div style={{ "position": 'relative', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "width": '100%', "minWidth": '100%' } as FramerStyle}>
                <span style={{ "display": 'block', "textAlign": 'center', "color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "width": '100%', "fontFamily": '"Inter", sans-serif', "fontSize": '35px', "fontStyle": 'normal', "fontWeight": '600', "letterSpacing": '0em', "lineHeight": '1.1em' } as FramerStyle}><CountUp target={15} suffix="+" /></span>
              </div>
            </div>
            <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Industry's Served"}</p>
            <div className="framer-5h7okl" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}> 
            </div>
            <div className="framer-19qfypj-container">
              <div className="framer-r1e4h framer-1pf7mrm framer-v-hvznph" data-framer-name="Down" style={{ "height": '100%', "width": '100%' } as FramerStyle}>
                <div className="framer-Gf2HJ framer-2328nn" style={{ "--1hmr9s8": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle} />
                <div className="framer-Gf2HJ framer-vvrf56" style={{ "--1hmr9s8": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Box>
  )
}

export default About
