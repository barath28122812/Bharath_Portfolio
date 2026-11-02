import Box from '@mui/material/Box'
import { Link as RouterLink } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProjectCard from '../Components/ProjectCard'
import { WORKDATASECTION } from '../data/work'

const isExternal = (path: string) => /^https?:/.test(path)

function ProjectsIndex() {
  return (
    <div id="main" className="projects-page">
      <Box
        component="div"
        className="framer-hTG3P framer-emw559 projects-page-shell"
        data-layout-template="true"
        sx={{ minHeight: '100vh', width: 'auto', position: 'relative' }}
      >
        <Navbar />
        <Box
          component="main"
          className="projects-index-main"
          sx={{
            minHeight: '100vh',
            fontFamily: '"Inter", sans-serif',
            background: 'var(--token-8f8b32ea-2243-4c94-90d7-9dbc1e52ffc2, rgb(255, 255, 255))',
            color: 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))',
            pt: { xs: 4, sm: 6, md: 8 },
            pb: { xs: 6, md: 8 },
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div className="crunch-side-lines" aria-hidden="true">
            <span className="crunch-side-lines-star crunch-side-lines-star-left" />
            <span className="crunch-side-lines-star crunch-side-lines-star-right" />
          </div>

          <Box
            sx={{
              width: '100%',
              maxWidth: 1400,
              mx: 'auto',
              px: { xs: 2, sm: 3, md: 4 },
              boxSizing: 'border-box',
            }}
          >
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                mb: { xs: 5, md: 8 },
                color: 'inherit',
                fontFamily: '"Inter", sans-serif',
                fontSize: 13,
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': { opacity: 0.6 },
                '&:focus-visible': { outline: '2px solid currentColor', outlineOffset: 4 },
              }}
            >
              <span aria-hidden>←</span>
              Home
            </Box>

            <Box sx={{ maxWidth: 820, mb: { xs: 4, md: 6 } }}>
              <Box
                component="span"
                sx={{
                  display: 'block',
                  mb: 2,
                  color: '#666',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: { xs: 12, sm: 13 },
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                Selected work
              </Box>
              <Box
                component="h1"
                sx={{
                  m: 0,
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 'clamp(56px, 11vw, 125px)',
                  fontWeight: 600,
                  letterSpacing: '0em',
                  lineHeight: 0.9,
                  textTransform: 'uppercase',
                }}
              >
                Projects
              </Box>
            </Box>
          </Box>

          <Box className="work-grid-layout projects-index-grid">
            {WORKDATASECTION.map((item) => (
              <ProjectCard
                key={item.title}
                title={item.title}
                category={item.tags.join(' · ')}
                image={item.image}
                to={item.path}
                external={isExternal(item.path)}
                sx={{ width: '100%', p: '0 0 32px' }}
              />
            ))}
          </Box>
        </Box>
        <Footer />
      </Box>
    </div>
  )
}

export default ProjectsIndex
