import Box from '@mui/material/Box'
import type { FramerStyle } from './framer'
import { WORKDATASECTION } from '../data/work'
import ProjectCard from './ProjectCard'

interface MoreWorkMarqueeProps {
  currentPath?: string
  title?: string
}

function isExternal(path: string) {
  return /^https?:/.test(path)
}

function MoreWorkMarquee({ currentPath, title = 'My works' }: MoreWorkMarqueeProps) {
  const items = WORKDATASECTION.filter(item => (item.path ? item.path !== currentPath : false))

  return (
    <Box
      component="section"
      aria-label={title}
      style={{ width: '100%', background: '#fff', padding: '64px 0 32px', overflow: 'hidden' } as FramerStyle}
    >
      <Box style={{ width: '100%', maxWidth: '100%', margin: '0 auto', boxSizing: 'border-box', padding: '0 0 20px' } as FramerStyle}>
        <Box className="more-work-title" style={{ ...{ fontFamily: '"Inter", sans-serif', fontWeight: 600, letterSpacing: '0em', lineHeight: 1.1, textTransform: 'uppercase', color: 'rgb(0,0,0)', margin: 0 } as FramerStyle, padding: '0 24px' } as FramerStyle}>
          {title}
        </Box>
      </Box>

      <Box className="projects-home-marquee-wrap more-work-marquee-wrap" style={{ maxWidth: '100%', margin: '0 auto', overflow: 'hidden', position: 'relative', borderTop: '1px solid rgba(224,224,224,0.63)', borderBottom: '1px solid rgba(224,224,224,0.63)' } as FramerStyle}>
        <Box
          className="projects-home-marquee more-work-marquee"
          style={{ display: 'flex', alignItems: 'stretch', width: 'max-content', padding: '20px 0' } as FramerStyle}
        >
          {[0, 1].map(copy => (
            <Box className="more-work-copy" key={copy} style={{ display: 'flex', alignItems: 'stretch', gap: 24, padding: '0 clamp(24px, 4vw, 48px)' } as FramerStyle}>
              {items.map((item, index) => (
                <Box className="more-work-item" key={`${item.title}-${index}`} sx={{ flexShrink: 0 }}>
                  <ProjectCard
                    title={item.title}
                    category={item.tags.join(' · ')}
                    image={item.image}
                    to={item.path}
                    external={isExternal(item.path)}
                    sx={{
                      width: { xs: 'min(78vw, 430px)', sm: 'clamp(300px, 34vw, 430px)' },
                      minWidth: { xs: 'min(78vw, 430px)', sm: 'clamp(300px, 34vw, 430px)' },
                      px: 0,
                    }}
                  />
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default MoreWorkMarquee
