import Box from '@mui/material/Box'
import { Link as RouterLink } from 'react-router-dom'
import { WORKDATASECTION } from '../data/work'
import type { WorkItem } from '../data/work'
import ProjectCard from './ProjectCard'
import { useChat } from './ChatContext'
import type { FramerStyle } from './framer'

const DIVIDER = '1px solid rgba(224, 224, 224, 0.63)'

function isExternal(path: string) {
  return /^https?:/.test(path)
}

function Projects() {
  const { openChat } = useChat()

  const renderCard = (project: WorkItem, index: number) => {
    const external = isExternal(project.path)
    return (
      <Box
        key={`${project.title}-${index}`}
        className="project-card-slide"
        sx={{
          width: { xs: '82vw', sm: 330, lg: 520 },
          minWidth: { xs: '82vw', sm: 330, lg: 520 },
          maxWidth: { xs: '88vw', sm: 330, lg: 520 },
          height: { xs: 290, sm: 280, lg: 475 },
          flexShrink: 0,
          boxSizing: 'border-box',
        }}
      >
        <ProjectCard
          title={project.title}
          category={project.tags.join(' · ')}
          image={project.image}
          to={project.path}
          external={external}
          fillBox
          sx={{
            py: { xs: '32px', lg: '64px' },
            px: { xs: '12px', lg: '24px' },
            borderBottom: 0,
          }}
        />
      </Box>
    )
  }

  return (
    <Box className="framer-si04yb" data-framer-name="Projects" component="section" sx={{ position: 'relative', width: '100%' }}>

      {/* I Want to Chat button */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 10,
          marginTop: '8px',
          marginBottom: '4px',
        }}
      >
        <a
          className="framer-aVBx0 framer-jlIPi framer-gFNsP framer-1ag5vbt framer-v-1ag5vbt framer-76p5jv"
          data-framer-name="Primary"
          data-highlight="true"
          tabIndex={0}
          onClick={openChat}
          style={{
            cursor: 'pointer',
            borderRadius: '100px',
            boxShadow: '0.12px 0.82px 0.58px -0.29px rgba(0,124,130,0.09), 0.3px 2.11px 1.49px -0.58px rgba(0,124,130,0.09), 0.6px 4.23px 2.99px -0.88px rgba(0,124,130,0.1), 1.14px 8.01px 5.66px -1.17px rgba(0,124,130,0.1), 2.27px 15.92px 11.26px -1.46px rgba(0,124,130,0.12), 5px 35px 24.75px -1.75px rgba(0,124,130,0.16)',
          } as FramerStyle}
        >
          <div
            className="framer-vy3l00"
            data-framer-name="Button"
            style={{
              backgroundColor: 'var(--token-6a6d1eb8-2687-4444-ba52-f31754121a4e, rgb(2, 212, 245))',
              borderRadius: '90px',
              transform: 'none',
            } as FramerStyle}
          >
            <div
              className="framer-lebzrb"
              data-framer-component-type="RichTextContainer"
              style={{
                '--extracted-r6o4lv': 'var(--token-0cf62797-c341-4cdd-86b9-49f64afc3f64, rgb(255, 255, 255))',
                '--framer-link-text-color': 'rgb(0, 153, 255)',
                '--framer-link-text-decoration': 'underline',
                transform: 'none',
              } as FramerStyle}
            >
              <p
                className="framer-text framer-styles-preset-1p119cp"
                data-styles-preset="y57_hPufz"
                dir="auto"
                style={{
                  '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-0cf62797-c341-4cdd-86b9-49f64afc3f64, rgb(255, 255, 255)))',
                  color: 'rgb(255, 255, 255)',
                } as FramerStyle}
              >
                {'I Want to Chat'}
              </p>
            </div>
            <div className="framer-1ba82lb" data-framer-name="Dots" style={{ borderRadius: '100px' } as FramerStyle}>
              <div
                className="framer-13sif1n"
                data-framer-name="Bg"
                style={{
                  backgroundColor: 'var(--token-37deb730-75ce-4979-91a3-bdf0765d2aa3, rgb(207, 249, 255))',
                  borderRadius: '1000px',
                } as FramerStyle}
              />
              <div
                className="framer-jb7qng"
                data-framer-name="Icon"
                style={{
                  backgroundColor: 'var(--token-0cf62797-c341-4cdd-86b9-49f64afc3f64, rgb(255, 255, 255))',
                  borderRadius: '100px',
                } as FramerStyle}
              >
                <div
                  className="framer-1rwq289"
                  data-border="true"
                  data-framer-name="Icon"
                  style={{
                    '--border-bottom-width': '2px',
                    '--border-color': 'var(--token-20f29520-e0af-49d2-8cc2-01444e94a3fe, rgba(0,0,0,0))',
                    '--border-left-width': '2px',
                    '--border-right-width': '2px',
                    '--border-style': 'solid',
                    '--border-top-width': '2px',
                    borderRadius: '100px',
                    opacity: 1,
                    transform: 'none',
                  } as FramerStyle}
                />
              </div>
            </div>
          </div>
        </a>
      </div>

      <Box sx={{ width: '100%', px: { xs: '12px', lg: 0 }, boxSizing: 'border-box' }}>
        <Box
          sx={{
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box',
            maxWidth: 1400,
            borderTop: DIVIDER,
            borderLeft: DIVIDER,
            borderRight: DIVIDER,
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: { xs: 'flex-start', lg: 'center' },
            justifyContent: 'space-between',
            gap: { xs: '12px', lg: 0 },
            px: { xs: '12px', lg: '24px' },
            pt: { xs: '24px', sm: '32px', lg: '32px' },
            pb: '12px',
          }}
        >
          <Box
            component="h2"
            sx={{
              m: 0,
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: 34, sm: 44, lg: 64 },
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
            }}
          >
            Projects
          </Box>

          <Box
            component={RouterLink}
            to="/projects"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              px: 2.5,
              py: 1.5,
              borderRadius: 999,
              background: '#0b0b0b',
              color: '#fff',
              textDecoration: 'none',
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: '13px', lg: '14px' },
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              boxShadow: '0 0 0 1px rgba(255,255,255,0.08) inset',
              '&:hover': { opacity: 0.9 },
            }}
          >
            View all projects
            <Box component="span" sx={{ width: 12, height: 12, borderRadius: '50%', background: '#21d4ff', display: 'inline-block' }} />
          </Box>
        </Box>

        <Box
          className="projects-home-marquee-wrap"
          sx={{
            position: 'relative',
            overflowX: { xs: 'hidden', sm: 'visible' },
            overflowY: { xs: 'hidden', sm: 'visible' },
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            borderTop: DIVIDER,
            borderBottom: DIVIDER,
            borderLeft: { xs: DIVIDER, sm: 0 },
            borderRight: { xs: DIVIDER, sm: 0 },
            padding: { xs: '0 0 24px', sm: '24px 0', lg: 0 },
            '&:hover .projects-home-marquee': { animationPlayState: 'paused' },
          }}
        >
          <Box
            className="projects-home-marquee"
            sx={{
              display: 'flex',
              alignItems: 'stretch',
              flexDirection: 'row',
              width: 'max-content',
              gap: { xs: '12px', sm: 0 },
              px: { xs: '12px', sm: 0 },
            }}
          >
            {[0, 1].map(copy => (
              <Box
                key={copy}
                className="projects-home-marquee-copy"
                sx={{
                  display: 'flex',
                  alignItems: 'stretch',
                  flexDirection: 'row',
                  gap: { xs: '12px', sm: 0 },
                  width: 'max-content',
                  flexShrink: 0,
                }}
              >
                {WORKDATASECTION.map(renderCard)}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Projects
