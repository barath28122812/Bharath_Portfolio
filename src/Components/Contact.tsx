import type { FramerStyle } from './framer'
import { useChat } from './ChatContext'
import { useEffect, useRef } from 'react'

function Contact() {
  const { openChat } = useChat()
  const contactRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const section = contactRef.current
    if (!section) return

    let frame = 0
    const updateProgress = () => {
      frame = 0
      const rect = section.getBoundingClientRect()
      const range = window.innerHeight + rect.height
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / Math.max(range, 1)))
      section.style.setProperty('--contact-scroll-progress', String(progress))
    }
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
  {/* <div className="framer-1leaztu" data-border="true" data-framer-name="Title" style={{"backgroundColor": "rgb(224, 224, 224)", "borderRadius":"5px"} as React.CSSProperties}>
    <div className="framer-13fn7c2" data-framer-component-type="RichTextContainer" style={{ "transform": 'none' } as FramerStyle}>
      <h2 className="framer-text framer-styles-preset-sv70jv" data-styles-preset="A8qgnGVdI" dir="auto" style={{ "--framer-text-alignment": 'left' } as FramerStyle}>{"CONTACT ME"}</h2>
    </div>
  </div> */}
  <section ref={contactRef} className="framer-otgn3n contact-scroll-stack" data-border="true" data-framer-name="Contact" style={{"backgroundColor": "rgb(224, 224, 224)"} as React.CSSProperties}>
    <div className="framer-7113hc" data-framer-name="Contact">
      <div className="framer-ibz03m contact-title-card" data-framer-name="Title">
        <div className="framer-n38l6h" data-framer-component-type="RichTextContainer" style={{ "transform": 'none' } as FramerStyle}>
          <h3 className="framer-text framer-styles-preset-1k71nux" data-styles-preset="efEdqGxKU" dir="auto">{"Let's Work Together"}</h3>
        </div>
        <div className="framer-1l4xro1" data-framer-component-type="RichTextContainer" style={{ "transform": 'none' } as FramerStyle}>
          <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">{"Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you within 24 hours."}</p>
        </div>
      </div>
      <div className="framer-1k6owpl" data-framer-name="Email &amp; Phone">
        <div className="framer-1v14guq" data-border="true" data-framer-name="Email">
          <div className="framer-ndyWq framer-yffjv4" />
          <div className="framer-1ka64nx" data-framer-component-type="RichTextContainer" style={{ "transform": 'none' } as FramerStyle}>
            <p className="framer-text framer-styles-preset-19lub4s" data-styles-preset="f_sKMPKpM" dir="auto" style={{ "--framer-text-color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle}>
              <strong className="framer-text">{"Email"}</strong>
            </p>
          </div>
          <div className="framer-19o4z9i" data-framer-component-type="RichTextContainer" style={{ "transform": 'none' } as FramerStyle}>
            <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">
              <a className="framer-text framer-styles-preset-1oxauih" data-styles-preset="ky6ZsbAS7" href="mailto: bharathanand.mail@gmail.com" target="_blank" rel="noopener">{" bharathanand.mail@gmail.com"}</a>
            </p>
          </div>
        </div>
        <div className="framer-1v1kcp4" data-border="true" data-framer-name="Phone">
          <div className="framer-IVALC framer-1afcflm" />
          <div className="framer-sb2jdj" data-framer-component-type="RichTextContainer" style={{ "transform": 'none' } as FramerStyle}>
            <p className="framer-text framer-styles-preset-19lub4s" data-styles-preset="f_sKMPKpM" dir="auto" style={{ "--framer-text-color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle}>
              <strong className="framer-text">{"Phone"}</strong>
            </p>
          </div>
          <div className="framer-bfom5b" data-framer-component-type="RichTextContainer" style={{ "transform": 'none' } as FramerStyle}>
            <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto">
              <a className="framer-text framer-styles-preset-1oxauih" data-styles-preset="ky6ZsbAS7" href="tel:+44 7768273952" target="_blank" rel="noopener">{"+44 7768273952"}</a>
            </p>
          </div>
        </div>
        <div className="framer-j9hz7f" data-border="true" data-framer-name="Social icons">
          <div className="framer-14yhmcr" data-framer-component-type="RichTextContainer" style={{ "transform": 'none' } as FramerStyle}>
            <p className="framer-text framer-styles-preset-19lub4s" data-styles-preset="f_sKMPKpM" dir="auto" style={{ "--framer-text-color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle}>
              <strong className="framer-text">{"Socials"}</strong>
            </p>
          </div>
          <div className="framer-1vjfql4" data-framer-name="Socials">
            <div className="framer-1772z85-container">
              <a className="framer-r8ZIl framer-jlIPi framer-12qvkyh framer-v-uo3c7n framer-13suufa" data-border="true" data-framer-name="Button 3" href="https://www.linkedin.com/in/bharath-anan/" target="_blank" rel="noopener" tabIndex={0} style={{ "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '1px', "backgroundColor": 'var(--token-fb315f8f-abaa-4742-a977-7745bac80b10, rgb(242, 242, 242))', "borderBottomLeftRadius": '90px', "borderBottomRightRadius": '90px', "borderTopLeftRadius": '90px', "borderTopRightRadius": '90px' } as FramerStyle}>
                <div className="framer-ifbq4t" data-framer-name="Icon" style={{ "transform": 'none' } as FramerStyle}>
                  <svg className="framer-3Ej2z framer-1hlss9v" role="presentation" viewBox="0 0 17 17" style={{ "--1hmr9s8": 'var(--token-2c4d0fad-06de-414f-b048-811f13183390, rgb(97, 97, 97))', "transform": 'none' } as FramerStyle}>
                    <use href="#4094060096" />
                  </svg>
                </div>
                <div className="framer-aoltl4" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "--extracted-r6o4lv": 'var(--token-2c4d0fad-06de-414f-b048-811f13183390, rgb(87, 87, 87))', "transform": 'none' } as FramerStyle}>
                  <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto" style={{ "--framer-text-color": 'var(--extracted-r6o4lv, var(--token-2c4d0fad-06de-414f-b048-811f13183390, rgb(87, 87, 87)))' } as FramerStyle}>{"Linkedin"}</p>
                </div>
              </a>
            </div>
            <div className="framer-1ne1drm-container">
              <a className="framer-r8ZIl framer-jlIPi framer-12qvkyh framer-v-uo3c7n framer-13suufa" data-border="true" data-framer-name="Button 3" href="https://www.behance.net/bharathanand2812" target="_blank" rel="noopener" tabIndex={0} style={{ "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '1px', "backgroundColor": 'var(--token-fb315f8f-abaa-4742-a977-7745bac80b10, rgb(242, 242, 242))', "borderBottomLeftRadius": '90px', "borderBottomRightRadius": '90px', "borderTopLeftRadius": '90px', "borderTopRightRadius": '90px' } as FramerStyle}>
                <div className="framer-ifbq4t" data-framer-name="Icon" style={{ "transform": 'none' } as FramerStyle}>
                  <svg className="framer-3Ej2z framer-1hlss9v" role="presentation" viewBox="0 0 17 17" style={{ "--1hmr9s8": 'var(--token-2c4d0fad-06de-414f-b048-811f13183390, rgb(97, 97, 97))', "transform": 'none' } as FramerStyle}>
                    <use href="#behance-icon" />
                  </svg>
                </div>
                <div className="framer-aoltl4" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "--extracted-r6o4lv": 'var(--token-2c4d0fad-06de-414f-b048-811f13183390, rgb(87, 87, 87))', "transform": 'none' } as FramerStyle}>
                  <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto" style={{ "--framer-text-color": 'var(--extracted-r6o4lv, var(--token-2c4d0fad-06de-414f-b048-811f13183390, rgb(87, 87, 87)))' } as FramerStyle}>{"Behance"}</p>
                </div>
              </a>
            </div>
            <div className="framer-s83apd-container">
              <a className="framer-r8ZIl framer-jlIPi framer-12qvkyh framer-v-uo3c7n framer-13suufa" data-border="true" data-framer-name="Button 3" href="https://www.upwork.com/freelancers/~0120b4affdbbb36df1?mp_source=share" target="_blank" rel="noopener" tabIndex={0} style={{ "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '1px', "backgroundColor": 'var(--token-fb315f8f-abaa-4742-a977-7745bac80b10, rgb(242, 242, 242))', "borderBottomLeftRadius": '90px', "borderBottomRightRadius": '90px', "borderTopLeftRadius": '90px', "borderTopRightRadius": '90px' } as FramerStyle}>
                <div className="framer-ifbq4t" data-framer-name="Icon" style={{ "transform": 'none' } as FramerStyle}>
                  <svg className="framer-lkHrW framer-1hlss9v" role="presentation" viewBox="0 0 17 17" style={{ "--1hmr9s8": 'var(--token-2c4d0fad-06de-414f-b048-811f13183390, rgb(97, 97, 97))', "transform": 'none' } as FramerStyle}>
                    <use href="#upwork-icon" />
                  </svg>
                </div>
                <div className="framer-aoltl4" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "--extracted-r6o4lv": 'var(--token-2c4d0fad-06de-414f-b048-811f13183390, rgb(87, 87, 87))', "transform": 'none' } as FramerStyle}>
                  <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto" style={{ "--framer-text-color": 'var(--extracted-r6o4lv, var(--token-2c4d0fad-06de-414f-b048-811f13183390, rgb(87, 87, 87)))' } as FramerStyle}>{"Upwork"}</p>
                </div>
              </a>
            </div>
            <div className="framer-ms22rn-container">
              <a className="framer-r8ZIl framer-jlIPi framer-12qvkyh framer-v-uo3c7n framer-13suufa" data-border="true" data-framer-name="Button 3" href="https://www.figma.com/community/file/1686072251787180492" target="_blank" rel="noopener" tabIndex={0} style={{ "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '1px', "backgroundColor": 'var(--token-fb315f8f-abaa-4742-a977-7745bac80b10, rgb(242, 242, 242))', "borderBottomLeftRadius": '90px', "borderBottomRightRadius": '90px', "borderTopLeftRadius": '90px', "borderTopRightRadius": '90px' } as FramerStyle}>
                <div className="framer-ifbq4t" data-framer-name="Icon" style={{ "transform": 'none' } as FramerStyle}>
                  <svg className="framer-3Ej2z framer-1hlss9v" role="presentation" viewBox="0 0 17 17" style={{ "--1hmr9s8": 'var(--token-2c4d0fad-06de-414f-b048-811f13183390, rgb(97, 97, 97))', "transform": 'none' } as FramerStyle}>
                    <use href="#figma-icon" />
                  </svg>
                </div>
                <div className="framer-aoltl4" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "--extracted-r6o4lv": 'var(--token-2c4d0fad-06de-414f-b048-811f13183390, rgb(87, 87, 87))', "transform": 'none' } as FramerStyle}>
                  <p className="framer-text framer-styles-preset-1p119cp" data-styles-preset="y57_hPufz" dir="auto" style={{ "--framer-text-color": 'var(--extracted-r6o4lv, var(--token-2c4d0fad-06de-414f-b048-811f13183390, rgb(87, 87, 87)))' } as FramerStyle}>{"Figma"}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="framer-1qrxjjb" data-framer-name="Call to action">
      <div className="framer-jkvety" data-framer-component-type="RichTextContainer" style={{ "transform": 'none' } as FramerStyle}>
        <h4 className="framer-text framer-styles-preset-fbjwod" data-styles-preset="xiuBdYlUL" dir="auto" style={{ "--framer-text-alignment": 'left', "--framer-text-color": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle}>{"Prefer to schedule a call instead? Book a free 30-minute consultation and let's discuss your project."}</h4>
      </div>
      <div className="framer-b2loms-container" id="dean-b2loms">
        <a
          className="framer-aVBx0 framer-jlIPi framer-gFNsP framer-1ag5vbt framer-v-rtiqap framer-76p5jv"
          data-framer-name="Blue"
          data-highlight="true"
          role="button"
          tabIndex={0}
          onClick={openChat}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              openChat()
            }
          }}
          style={{ "height": '100%', "cursor": 'pointer', "borderBottomLeftRadius": '100px', "borderBottomRightRadius": '100px', "borderTopLeftRadius": '100px', "borderTopRightRadius": '100px', "boxShadow": '0.11776533306547207px 0.683038931779738px 0.48518173856754465px -0.29166666666666663px rgba(0, 124, 130, 0.07), 0.3010936508871964px 1.7463431751457392px 1.2404766089175219px -0.5833333333333333px rgba(0, 124, 130, 0.07), 0.6036265357761295px 3.501033907501551px 2.4868827221890957px -0.875px rgba(0, 124, 130, 0.08), 1.1442666516217286px 6.636746579406026px 4.714267509522861px -1.1666666666666665px rgba(0, 124, 130, 0.08), 2.2744602352540824px 13.191869364473677px 9.370555345262876px -1.4583333333333335px rgba(0, 124, 130, 0.1), 5px 29px 20.599514557387025px -1.75px rgba(0, 124, 130, 0.13)' } as FramerStyle}>
          <div className="framer-vy3l00" data-framer-name="Button" style={{ "backgroundColor": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))', "borderBottomLeftRadius": '90px', "borderBottomRightRadius": '90px', "borderTopLeftRadius": '90px', "borderTopRightRadius": '90px', "transform": 'none' } as FramerStyle}>
            <div className="framer-lebzrb" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": 'var(--token-8f8b32ea-2243-4c94-90d7-9dbc1e52ffc2, rgb(255, 255, 255))', "--framer-link-text-color": 'rgb(0, 153, 255)', "--framer-link-text-decoration": 'underline', "transform": 'none' } as FramerStyle}>
              <p className="framer-text framer-styles-preset-ewt1ml" data-styles-preset="H8qt65VUW" dir="auto" style={{ "--framer-text-color": 'var(--extracted-r6o4lv, var(--token-8f8b32ea-2243-4c94-90d7-9dbc1e52ffc2, rgb(255, 255, 255)))' } as FramerStyle}>{"Let's Set Up a Time"}</p>
            </div>
            <div className="framer-1ba82lb" data-framer-name="Dots" style={{ "borderBottomLeftRadius": '100px', "borderBottomRightRadius": '100px', "borderTopLeftRadius": '100px', "borderTopRightRadius": '100px' } as FramerStyle}>
              <div className="framer-13sif1n" data-framer-name="Bg" style={{ "backgroundColor": 'rgb(99, 99, 99)', "borderBottomLeftRadius": '1000px', "borderBottomRightRadius": '1000px', "borderTopLeftRadius": '1000px', "borderTopRightRadius": '1000px' } as FramerStyle} />
              <div className="framer-jb7qng" data-framer-name="Icon" style={{ "backgroundColor": 'var(--token-6a6d1eb8-2687-4444-ba52-f31754121a4e, rgb(2, 212, 245))', "borderBottomLeftRadius": '100px', "borderBottomRightRadius": '100px', "borderTopLeftRadius": '100px', "borderTopRightRadius": '100px', "transform": 'translate(-50%, -50%)' } as FramerStyle}>
                <div className="framer-1rwq289" data-border="true" data-framer-name="Icon" style={{ "--border-bottom-width": '2px', "--border-color": 'var(--token-20f29520-e0af-49d2-8cc2-01444e94a3fe, rgba(0, 0, 0, 0))', "--border-left-width": '2px', "--border-right-width": '2px', "--border-style": 'solid', "--border-top-width": '2px', "willChange": 'transform', "borderBottomLeftRadius": '100px', "borderBottomRightRadius": '100px', "borderTopLeftRadius": '100px', "borderTopRightRadius": '100px', "opacity": '1', "transform": 'none' } as FramerStyle} />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div className="ssr-variant">
      <div className="framer-3wqeix-container">
        <div className="framer-r1e4h framer-1pf7mrm framer-v-1pf7mrm" data-framer-name="Full" style={{ "height": '100%', "width": '100%' } as FramerStyle}>
          <div className="framer-Gf2HJ framer-m9mvp8" style={{ "--1hmr9s8": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle} />
          <div className="framer-Gf2HJ framer-2328nn" style={{ "--1hmr9s8": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle} />
          <div className="framer-Gf2HJ framer-vvrf56" style={{ "--1hmr9s8": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle} />
          <div className="framer-Gf2HJ framer-1sivco4" style={{ "--1hmr9s8": 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))' } as FramerStyle} />
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Contact
