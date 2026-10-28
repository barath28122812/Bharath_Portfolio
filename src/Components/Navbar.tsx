import Box from '@mui/material/Box'
import type { FramerStyle } from './framer'
import { Link, useLocation } from 'react-router-dom'
import { FaLinkedinIn, FaBehance } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'

// Center button icon changes based on the active page: home / about / projects.
function NavCenterIcon({ type }: { type: 'home' | 'about' | 'projects' }) {

if (type === 'home') {
  return (
    <img
      src="/t/home.png"
      alt="Home"
      style={{
        width: '64%',
        height: '64%',
        objectFit: 'contain',
      }}
      aria-hidden="true"
    />
  )
}
  if (type === 'about') {
    return (
      <svg viewBox="0 0 15.1 16.7" fill="#000000" xmlns="http://www.w3.org/2000/svg" style={{ width: '52%', height: '52%', display: 'block', margin: 'auto' }} aria-hidden="true">
        <path d="M 2.838 4.674 C 2.409 4.659 2.315 4.656 2.341 4.164 C 2.346 4.076 2.272 3.984 2.23 3.883 C 1.772 4.043 1.534 3.8 1.357 3.441 C 1.432 3.263 1.561 3.321 1.725 3.44 C 1.734 3.349 1.761 3.259 1.74 3.248 C 1.407 3.072 1.456 2.853 1.684 2.598 C 1.554 2.551 1.454 2.515 1.353 2.48 C 1.221 2.434 1.185 2.364 1.261 2.242 C 1.327 2.137 1.361 2.011 1.438 1.915 C 1.472 1.872 1.599 1.844 1.646 1.869 C 1.801 1.952 1.853 1.869 1.911 1.769 C 1.644 1.48 1.631 1.255 1.858 0.935 C 1.922 0.844 2.155 0.83 2.248 0.928 C 2.323 1.008 2.38 1.108 2.426 1.206 C 2.489 1.339 2.771 1.469 2.983 1.448 C 3.177 1.429 3.372 1.41 3.639 1.383 C 3.558 1.239 3.459 1.124 3.431 0.996 C 3.401 0.858 3.414 0.702 3.452 0.565 C 3.484 0.453 3.591 0.38 3.739 0.446 C 3.756 0.454 3.792 0.456 3.802 0.446 C 3.978 0.269 4.327 0.298 4.388 0 C 4.492 0.04 4.577 0.079 4.667 0.106 C 4.831 0.156 4.962 0.224 5.029 0.394 C 5.065 0.485 5.18 0.548 5.252 0.628 C 5.338 0.724 5.416 0.826 5.526 0.959 C 5.557 0.84 5.586 0.73 5.619 0.607 C 5.904 0.553 6.029 0.6 6.162 0.841 C 6.183 0.878 6.159 0.935 6.175 0.976 C 6.197 1.034 6.238 1.085 6.27 1.139 C 6.307 1.096 6.35 1.057 6.377 1.009 C 6.393 0.98 6.395 0.933 6.381 0.904 C 6.268 0.673 6.36 0.505 6.534 0.332 C 6.613 0.252 6.638 0.165 6.773 0.242 C 6.792 0.253 6.848 0.207 6.886 0.187 C 6.926 0.36 7.003 0.395 7.153 0.307 C 7.205 0.276 7.683 0.384 7.713 0.447 C 7.78 0.592 7.829 0.743 7.898 0.923 C 7.93 0.946 8.001 0.998 8.035 1.023 C 8.205 1.045 8.348 1.046 8.479 1.084 C 8.771 1.167 8.922 0.973 9.121 0.832 C 9.14 0.844 9.19 0.856 9.199 0.881 C 9.282 1.126 9.522 1.11 9.721 1.168 C 9.772 1.182 9.851 1.254 9.843 1.283 C 9.788 1.501 9.961 1.612 10.05 1.739 C 10.201 1.711 10.329 1.675 10.46 1.666 C 10.626 1.654 10.71 1.905 10.913 1.798 C 10.929 1.828 10.936 1.865 10.96 1.886 C 11.091 2.005 11.214 2.137 11.364 2.231 C 11.46 2.29 11.612 2.289 11.597 2.117 C 11.578 1.905 11.69 1.851 11.888 1.856 C 12.075 1.861 12.23 1.989 12.246 2.116 C 12.377 2.215 12.473 2.287 12.566 2.357 C 12.413 2.61 12.267 2.851 12.128 3.081 C 12.285 3.339 12.461 3.545 12.814 3.488 C 12.887 3.476 12.967 3.481 13.039 3.496 C 13.104 3.51 13.162 3.548 13.22 3.574 C 13.212 3.637 13.206 3.69 13.199 3.743 C 13.213 3.756 13.227 3.769 13.241 3.782 C 13.321 3.723 13.404 3.667 13.481 3.605 C 13.595 3.513 13.649 3.312 13.879 3.465 C 14.029 3.565 14.06 3.644 13.955 3.798 C 13.864 3.931 13.789 4.074 13.72 4.191 C 13.931 4.318 14.107 4.496 14.309 4.527 C 14.563 4.567 14.502 4.648 14.441 4.782 C 14.431 4.805 14.441 4.838 14.445 4.865 C 14.449 4.885 14.459 4.904 14.465 4.919 C 14.349 4.998 14.236 5.076 14.122 5.154 C 14.235 5.279 14.326 5.379 14.445 5.509 C 14.534 5.496 14.678 5.473 14.827 5.451 C 14.835 5.469 14.849 5.487 14.851 5.507 C 14.873 5.718 14.788 5.93 14.951 6.139 C 15.091 6.317 14.899 6.502 14.772 6.577 C 14.645 6.652 14.621 6.727 14.636 6.819 C 14.697 7.194 14.359 7.314 14.137 7.5 C 14.086 7.544 13.945 7.484 13.847 7.492 C 13.768 7.5 13.694 7.539 13.599 7.571 C 13.768 7.683 13.985 7.754 14.039 7.883 C 14.094 8.018 13.991 8.209 13.955 8.389 C 14.009 8.454 14.085 8.545 14.209 8.693 C 14.014 8.738 13.861 8.768 13.711 8.81 C 13.623 8.835 13.464 8.884 13.467 8.911 C 13.481 9.048 13.287 9.215 13.53 9.323 C 13.341 9.463 13.173 9.62 12.973 9.727 C 12.74 9.851 12.635 10.108 12.352 10.189 C 12.249 10.218 12.168 10.4 12.133 10.526 C 12.083 10.706 11.993 10.815 11.793 10.841 C 11.751 10.846 11.703 10.855 11.669 10.877 C 11.474 11.005 11.282 11.138 11.09 11.271 C 11.073 11.283 11.054 11.3 11.048 11.318 C 10.978 11.541 10.728 11.589 10.58 11.735 C 10.57 11.745 10.557 11.766 10.552 11.764 C 10.214 11.643 10.141 11.974 9.952 12.091 C 9.735 12.225 9.534 12.421 9.532 12.708 C 9.532 12.725 9.508 12.743 9.492 12.758 C 9.155 13.074 9.207 13.441 9.341 13.811 C 9.558 14.407 9.962 14.899 10.371 15.387 C 10.416 15.441 10.463 15.493 10.502 15.56 C 10.05 15.262 9.555 15.28 9.079 15.434 C 8.526 15.611 7.998 15.854 7.455 16.059 C 6.87 16.279 6.291 16.523 5.689 16.691 C 5.036 16.874 4.702 16.719 4.351 16.178 C 4.052 15.717 3.804 15.235 3.564 14.743 C 3.3 14.2 3.128 13.691 3.21 13.095 C 3.248 12.817 3.071 12.661 2.768 12.618 C 2.285 12.551 1.8 12.501 1.315 12.448 C 1.268 12.443 1.214 12.463 1.168 12.482 C 0.728 12.659 0.474 12.499 0.231 12.245 C -0.086 11.912 -0.069 11.586 0.234 11.241 C 0.407 11.044 0.341 10.837 0.219 10.666 C 0.043 10.417 -0.053 10.194 0.178 9.93 C 0.211 9.893 0.178 9.795 0.157 9.731 C 0.072 9.474 0.119 9.265 0.348 9.081 C 0.614 8.867 0.607 8.763 0.37 8.521 C 0.097 8.242 0.127 7.929 0.466 7.724 C 0.676 7.598 0.908 7.502 1.13 7.392 C 1.271 7.321 1.412 7.252 1.552 7.18 C 1.76 7.074 1.875 6.962 1.727 6.712 C 1.591 6.483 1.695 6.237 1.843 6.027 C 2.125 5.63 2.415 5.238 2.702 4.844 C 2.743 4.789 2.79 4.734 2.838 4.674 Z" fill="#000000" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '56%', height: '56%', display: 'block', margin: 'auto' }} aria-hidden="true">
      <path
        d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
        fill="#000000"
      />
    </svg>
  )
}

// Reusable text component for animated nav link letters
function AnimatedNavLinkText({ text, active = false, activeColor }: { text: string; active?: boolean; activeColor?: string }) {
  const letters = text.split('')
  return (
    <div className="framer-1kbmhjr-container" data-code-component-plugin-id="84d4c1">
      <div style={{ "position": 'relative', "width": '100%', "height": '100%', "backgroundColor": 'var(--token-20f29520-e0af-49d2-8cc2-01444e94a3fe, rgba(0, 0, 0, 0))', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "overflow": 'hidden', "cursor": 'pointer', "userSelect": 'none', "paddingTop": '0px', "paddingRight": '0px', "paddingBottom": '0px', "paddingLeft": '0px' } as FramerStyle}>
        <div style={{ "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "gap": '0.05em', "fontFamily": '"Inter", sans-serif', "fontSize": '16px', "fontStyle": 'normal', "fontWeight": '500', "letterSpacing": '-0.02em', "lineHeight": '1.2em', "width": '100%' } as FramerStyle}>
          {letters.map((char, index) => {
            const isShifted = index % 2 === 1
            const charColor = active
              ? (activeColor || '#FE2026')
              : 'var(--token-2c4d0fad-06de-414f-b048-811f13183390, rgb(97, 97, 97))'
            return (
              <div key={index} style={{ "position": 'relative', "height": '19.2px', "overflow": 'hidden', "display": 'flex', "alignItems": 'flex-start', "justifyContent": 'center' } as FramerStyle}>
                <div
                  className="nav-letter-track"
                  style={{
                    "display": 'flex',
                    "flexDirection": 'column',
                    "alignItems": 'center',
                    "--base": isShifted ? '-134.4px' : '0px',
                    "--dir": isShifted ? '1' : '-1',
                    "--index": index,
                  } as FramerStyle}
                >
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} style={{ "color": charColor, "height": '19.2px', "display": 'flex', "alignItems": 'center', "justifyContent": 'center', "fontFamily": '"Inter", sans-serif', "fontSize": '16px', "fontStyle": 'normal', "fontWeight": '500', "letterSpacing": '-0.02em', "lineHeight": '1.2em', "filter": 'blur(0px)' } as FramerStyle}>
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function Navbar() {
  const { pathname } = useLocation()

  return (
    <Box className="framer-4zw9d1" data-framer-name="Nav" component="div">
      <div className="framer-1p4xbhj-container">
        {/* Desktop Navigation */}
        <div className="ssr-variant hidden-1jwitme hidden-1wefnif">
          <nav className="framer-G6c65 framer-v6lusn framer-v-v6lusn" data-framer-name="Navigation" data-highlight="true" tabIndex={0} style={{ "width": '100%' } as FramerStyle}>
            <div className="framer-1mea593" data-border="true" data-framer-name="Nav" style={{ "--border-bottom-width": '0px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgb(255, 255, 255))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '0px', "position": 'relative' } as FramerStyle}>
               <div className="framer-1d01ydm" data-border="true" data-framer-name="Button &amp; Socials" style={{ "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgb(255, 255, 255))', "--border-left-width": '0px', "--border-right-width": '0px', "--border-style": 'solid', "--border-top-width": '0px' } as FramerStyle}>
                <div className="framer-l22s7n" data-framer-name="Socials" />


                <div className="framer-kpq8s6-container">
                  <Link className="framer-LUjGG framer-6zcho9 framer-v-6zcho9 framer-m8q0v6" data-framer-name="Inactive" data-reset="button" to="/work" tabIndex={0}>
                    <div className="framer-Luw1d framer-1b9w5yf" style={{ "--1hmr9s8": "var(--token-2755f934-118b-4dbc-93a1-f2eb80d42f93, rgb(0, 0, 0))", "transform": 'none', "transformOrigin": '50% 50% 0px' } as FramerStyle} />
                    <AnimatedNavLinkText text="Projects" active={pathname === '/work' || pathname === '/projects'} />
                  </Link>
                </div>
              </div>

              {/* Logo and Nav Image (Center) */}
              <div className="framer-o9kej6" data-framer-name="Logo and nav image">
                <Link className="framer-qjfp2z framer-1mo1464" data-border="true" data-framer-name="Nav" to="/" data-framer-page-link-current="true" style={{ "--border-bottom-width": '0px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '0px', "--border-right-width": '0px', "--border-style": 'solid', "--border-top-width": '0px' } as FramerStyle}>
                  <div className="framer-1g52r2d-container">
                    <div className="framer-JPaLj framer-1om9dy5 framer-v-wmn63s nav-center-mark" data-framer-name="About">
                      <div className="framer-1id1qzj" data-framer-name="Nav" style={{ "borderBottomLeftRadius": '27px', "borderBottomRightRadius": '27px', "borderTopLeftRadius": '27px', "borderTopRightRadius": '27px' } as FramerStyle}>
                        <div className="framer-1i96c6o" data-framer-name="Image" style={{ "backgroundColor": pathname === '/' ? 'rgba(29, 139, 241, 0.13)' : pathname === '/about' ? 'rgb(34, 197, 94)' : '#FE2026', "borderBottomLeftRadius": '27px', "borderBottomRightRadius": '27px', "borderTopLeftRadius": '27px', "borderTopRightRadius": '27px', "display": 'flex', "alignItems": 'center', "justifyContent": 'center' } as FramerStyle}>
                          <NavCenterIcon type={pathname === '/about' ? 'about' : (pathname === '/work' || pathname === '/projects' || pathname === '/xr-design' || pathname === '/atbots' || pathname === '/beuta' || pathname === '/ateats' || pathname === '/emergency-alert' || pathname === '/crunch' || pathname === '/cyos' ? 'projects' : 'home')} />
                        </div>
                       
                      </div>
                      <div className="framer-1f4mxxz" data-framer-name="Dot" style={{ "opacity": '1', "transform": 'rotate(-90deg)' } as FramerStyle}>
                        <div className="framer-wy9hx" data-framer-name="Dot" style={{ "backgroundColor": 'var(--token-6a6d1eb8-2687-4444-ba52-f31754121a4e, rgb(209, 78, 18))', "borderBottomLeftRadius": '3px', "borderBottomRightRadius": '3px', "borderTopLeftRadius": '3px', "borderTopRightRadius": '3px' } as FramerStyle} />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="framer-18wnfum-container">
                  <Link className="framer-LUjGG framer-6zcho9 framer-v-x0lgeu framer-m8q0v6" data-framer-name="Active" data-reset="button" to="/" data-framer-page-link-current="true" style={{ marginTop: "-10px" }}>
                    <AnimatedNavLinkText text="Home" active={pathname === '/'} activeColor="#1D8BF1" />
                  </Link>
                </div>
              </div>

              <div className="framer-1mfvgyc" data-border="true" data-framer-name="Button &amp; Text" style={{ "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '0px', "--border-right-width": '0px', "--border-style": 'solid', "--border-top-width": '0px' } as FramerStyle}>
                <div className="framer-r31ivx-container">
                  <Link className="framer-LUjGG framer-6zcho9 framer-v-6zcho9 framer-m8q0v6" data-framer-name="Inactive" data-reset="button" to="/about" tabIndex={0}>
                    <AnimatedNavLinkText text="About" active={pathname === '/about'} activeColor="rgb(34, 197, 94)" />
                  </Link>
                </div>
                <div className="framer-l22s7n" data-framer-name="Socials" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/bharath-anan/" target="_blank" rel="noopener noreferrer" className="nav-social-icon-btn" aria-label="LinkedIn" style={{ background: '#fff', padding: '5px', border: '1px solid rgba(224, 224, 224, 0.63)', color: '#0A66C2', width: '28px', height: '28px', minWidth: '28px', minHeight: '28px' }}>
                    <FaLinkedinIn size={14} />
                  </a>
                  {/* Behance */}
                  <a href="https://www.behance.net/bharathanand2812" target="_blank" rel="noopener noreferrer" className="nav-social-icon-btn" aria-label="Behance" style={{ background: '#fff', padding: '5px', border: '1px solid rgba(224, 224, 224, 0.63)', color: '#1769FF', width: '28px', height: '28px', minWidth: '28px', minHeight: '28px' }}>
                    <FaBehance size={14} />
                  </a>
                  {/* Upwork */}
                  <a href="https://www.upwork.com/freelancers/~0120b4affdbbb36df1" target="_blank" rel="noopener noreferrer" className="nav-social-icon-btn" aria-label="Upwork" style={{ background: '#fff', padding: '5px', border: '1px solid rgba(224, 224, 224, 0.63)', color: '#14A800', width: '28px', height: '28px', minWidth: '28px', minHeight: '28px' }}>
                    <SiUpwork size={14} />
                  </a>
                  {/* Figma */}
                  <a href="https://www.figma.com/community/file/1686072251787180492" target="_blank" rel="noopener noreferrer" className="nav-social-icon-btn" aria-label="Figma" style={{ background: '#fff', padding: '5px', border: '1px solid rgba(224, 224, 224, 0.63)', color: '#F24E1E', width: '28px', height: '28px', minWidth: '28px', minHeight: '28px' }}>
                    <svg className="framer-3Ej2z framer-1hlss9v" role="presentation" viewBox="0 0 17 17" style={{ width: '14px', height: '14px', display: 'block' }}><use href="#figma-icon" /></svg>
                  </a>
                </div>

                
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="ssr-variant hidden-emw559">
          <nav className="framer-G6c65 framer-v6lusn framer-v-1v126tf" data-framer-name="Mobile" data-highlight="true" tabIndex={0} style={{ "width": '100%' } as FramerStyle}>
            <div className="framer-1mea593" data-border="true" data-framer-name="Nav" style={{ "--border-bottom-width": '0px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '0px', "position": 'relative' } as FramerStyle}>
              <div className="framer-1d01ydm" data-border="true" data-framer-name="Button &amp; Socials" style={{ "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '0px', "--border-right-width": '0px', "--border-style": 'solid', "--border-top-width": '0px' } as FramerStyle}>
                <div className="framer-kpq8s6-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                  <Link className="framer-LUjGG framer-6zcho9 framer-v-qlknud framer-m8q0v6" data-framer-name="Mobile inactive" data-reset="button" to="/work" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <AnimatedNavLinkText text="Projects" active={pathname === '/work' || pathname === '/projects'} />
                  </Link>
                </div>
                <div className="framer-1vviajj" role="button" aria-label="Open menu" tabIndex={0} data-border="true" data-framer-name="Handburger" data-highlight="true" style={{ "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '1px', "--border-right-width": '1px', "--border-style": 'solid', "--border-top-width": '1px', "borderBottomLeftRadius": '5px', "borderBottomRightRadius": '5px', "borderTopLeftRadius": '5px', "borderTopRightRadius": '5px', "display": 'flex', "flexDirection": 'column', "alignItems": 'center', "justifyContent": 'center', "gap": '3px', "background": 'transparent', "padding": 0, "cursor": 'pointer', "boxSizing": 'border-box' } as FramerStyle}>
                  <span className="framer-alep18" data-framer-name="Line" style={{ "backgroundColor": 'var(--token-2c4d0fad-06de-414f-b048-811f13183390, rgb(97, 97, 97))', "borderBottomLeftRadius": '67px', "borderBottomRightRadius": '67px', "borderTopLeftRadius": '67px', "borderTopRightRadius": '67px', "width": '14px', "height": '1.5px', "display": 'block' } as FramerStyle} />
                  <span className="framer-1tyfc8z" data-framer-name="Line" style={{ "backgroundColor": 'var(--token-2c4d0fad-06de-414f-b048-811f13183390, rgb(97, 97, 97))', "borderBottomLeftRadius": '67px', "borderBottomRightRadius": '67px', "borderTopLeftRadius": '67px', "borderTopRightRadius": '67px', "width": '14px', "height": '1.5px', "display": 'block' } as FramerStyle} />
                  <span className="framer-alep18" data-framer-name="Line" style={{ "backgroundColor": 'var(--token-2c4d0fad-06de-414f-b048-811f13183390, rgb(97, 97, 97))', "borderBottomLeftRadius": '67px', "borderBottomRightRadius": '67px', "borderTopLeftRadius": '67px', "borderTopRightRadius": '67px', "width": '14px', "height": '1.5px', "display": 'block' } as FramerStyle} />
                </div>
              </div>

              <div className="framer-o9kej6" data-framer-name="Logo and nav image">
                <Link className="framer-qjfp2z framer-1mo1464" data-border="true" data-framer-name="Nav" to="/" data-framer-page-link-current="true" style={{ "--border-bottom-width": '0px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '0px', "--border-right-width": '0px', "--border-style": 'solid', "--border-top-width": '0px' } as FramerStyle}>
                  <div className="framer-1g52r2d-container">
                    <div className="framer-JPaLj framer-1om9dy5 framer-v-wmn63s nav-center-mark" data-framer-name="About">
                      <div className="framer-1id1qzj" data-framer-name="Nav" style={{ "borderBottomLeftRadius": '27px', "borderBottomRightRadius": '27px', "borderTopLeftRadius": '27px', "borderTopRightRadius": '27px' } as FramerStyle}>
                        <div className="framer-1i96c6o" data-framer-name="Image" style={{ "backgroundColor": pathname === '/' ? 'rgba(29, 139, 241, 0.13)' : pathname === '/about' ? 'rgb(34, 197, 94)' : '#FE2026', "borderBottomLeftRadius": '27px', "borderBottomRightRadius": '27px', "borderTopLeftRadius": '27px', "borderTopRightRadius": '27px', "display": 'flex', "alignItems": 'center', "justifyContent": 'center' } as FramerStyle}>
                          <NavCenterIcon type={pathname === '/about' ? 'about' : (pathname === '/work' || pathname === '/projects' || pathname === '/xr-design' || pathname === '/atbots' || pathname === '/beuta' || pathname === '/ateats' || pathname === '/emergency-alert' || pathname === '/crunch' || pathname === '/cyos' ? 'projects' : 'home')} />
                        </div>
                       
                      </div>
                      <div className="framer-1f4mxxz" data-framer-name="Dot" style={{ "opacity": '1', "transform": 'rotate(-90deg)' } as FramerStyle}>
                        <div className="framer-wy9hx" data-framer-name="Dot" style={{ "backgroundColor": 'var(--token-6a6d1eb8-2687-4444-ba52-f31754121a4e, rgb(209, 78, 18))', "borderBottomLeftRadius": '3px', "borderBottomRightRadius": '3px', "borderTopLeftRadius": '3px', "borderTopRightRadius": '3px' } as FramerStyle} />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="framer-18wnfum-container">
                  <Link className="framer-LUjGG framer-6zcho9 framer-v-x0lgeu framer-m8q0v6" data-framer-name="Active" data-reset="button" to="/" data-framer-page-link-current="true">
                    <AnimatedNavLinkText text="Home" active={pathname === '/'} activeColor="#1D8BF1" />
                  </Link>
                </div>
              </div>

              <div className="framer-1mfvgyc" data-border="true" data-framer-name="Button &amp; Text" style={{ "--border-bottom-width": '1px', "--border-color": 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))', "--border-left-width": '0px', "--border-right-width": '0px', "--border-style": 'solid', "--border-top-width": '0px' } as FramerStyle}>
                <div className="framer-r31ivx-container">
                  <Link className="framer-LUjGG framer-6zcho9 framer-v-qlknud framer-m8q0v6" data-framer-name="Mobile inactive" data-reset="button" to="/about">
                    <AnimatedNavLinkText text="About" active={pathname === '/about'} activeColor="rgb(34, 197, 94)" />
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </Box>
  )
}

export default Navbar
