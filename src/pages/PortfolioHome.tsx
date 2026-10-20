import Box from '@mui/material/Box'
import type { FramerStyle } from '../Components/framer'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Projects from '../Components/Projects'
import About from '../Components/About'
import Services from '../Components/Services'
import Process from '../Components/Process'
import Videos from '../Components/Videos'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'
import SpriteIcons from '../Components/SpriteIcons'

const HYDRATE =
  '{&quot;routeId&quot;:&quot;dzBndgA20&quot;,&quot;localeId&quot;:&quot;default&quot;,&quot;breakpoints&quot;:[{&quot;hash&quot;:&quot;et5t2c&quot;,&quot;mediaQuery&quot;:&quot;(min-width: 1200px)&quot;},{&quot;hash&quot;:&quot;162xyd4&quot;,&quot;mediaQuery&quot;:&quot;(min-width: 810px) and (max-width: 1199.98px)&quot;},{&quot;hash&quot;:&quot;1ae2x0g&quot;,&quot;mediaQuery&quot;:&quot;(max-width: 809.98px)&quot;},{&quot;hash&quot;:&quot;emw559&quot;,&quot;mediaQuery&quot;:&quot;(min-width: 1200px)&quot;},{&quot;hash&quot;:&quot;1jwitme&quot;,&quot;mediaQuery&quot;:&quot;(min-width: 810px) and (max-width: 1199.98px)&quot;},{&quot;hash&quot;:&quot;1wefnif&quot;,&quot;mediaQuery&quot;:&quot;(max-width: 809.98px)&quot;}]}'

function PortfolioHome() {
  return (
    <div
      id="main"
      className="home-page"
      data-framer-hydrate-v2={HYDRATE}
      data-framer-ssr-released-at="2026-07-03T11:31:48.672Z"
      data-framer-page-optimized-at="2026-07-05T00:16:06.700Z"
      data-framer-generated-page
    >
      <Box
        component="div"
        className="framer-hTG3P framer-emw559"
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
          className="framer-LRfZ0 framer-3jfDI framer-jlIPi framer-RYqUR framer-merrA framer-VGfb4 framer-EIDUe framer-et5t2c"
          style={{ minHeight: '100vh', width: 'auto', display: 'contents' } as FramerStyle}
        >
          <Box component="main" className="framer-xr6yl" data-framer-name="Main">
            <div className="framer-3uad54-container">
              <div />
            </div>
            <Hero />
            <Projects />
            <About />
            <Services />
            <Process />
          </Box>

          <Box component="main" className="framer-159qakh" data-framer-name="Main">
            <Box component="div" className="framer-rlfafm" data-framer-name="Main">
              <Videos />
              <Box component="div" className="framer-g725wh" data-framer-name="Main">
                <Testimonials/>
              </Box>
            </Box>
          </Box>
        </Box>

        <div className="framer-15qpk7a" />
        <Footer />
      </Box>

      <SpriteIcons />
    </div>
  )
}

export default PortfolioHome
