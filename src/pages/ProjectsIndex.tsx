import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Link as RouterLink } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from '../Components/ProjectCard'

const referenceProjects = projects.filter(project => project.slug !== 'crunch')
const loopingProjects = [...referenceProjects, ...referenceProjects]

function ProjectsIndex() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        fontFamily: '"Inter", sans-serif',
        background: 'var(--token-8f8b32ea-2243-4c94-90d7-9dbc1e52ffc2, rgb(255, 255, 255))',
        color: 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))',
        py: { xs: 4, sm: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="crunch-side-lines" aria-hidden="true">
        <span className="crunch-side-lines-star crunch-side-lines-star-left" />
        <span className="crunch-side-lines-star crunch-side-lines-star-right" />
      </div>

      <Container maxWidth={false} sx={{ width: '100%', px: { xs: 2, sm: 3, md: 4 } }}>
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
          }}
        >
          <span aria-hidden>←</span>
          Home
        </Box>

        <Box sx={{ maxWidth: 820, mb: { xs: 6, md: 8 } }}>
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
              fontSize: 'clamp(64px, 11vw, 125px)',
              fontWeight: 600,
              letterSpacing: '0em',
              lineHeight: 0.9,
              textTransform: 'uppercase',
            }}
          >
            Projects
          </Box>
        </Box>

        <Box
          sx={{
            overflow: 'hidden',
            borderTop: '1px solid rgba(224,224,224,0.63)',
            borderBottom: '1px solid rgba(224,224,224,0.63)',
            mb: { xs: 7, md: 10 },
          }}
        >
          <Box
            className="project-list-marquee"
            sx={{
              display: 'flex',
              alignItems: 'stretch',
              gap: { xs: 2, sm: 3, md: 4 },
              width: 'max-content',
              py: { xs: 2, sm: 3 },
            }}
          >
            {loopingProjects.map((project, index) => (
              <Box key={`${project.slug}-${index}`} sx={{ flexShrink: 0 }}>
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  to={`/projects/${project.slug}`}
                  sx={{
                    width: { xs: 'min(82vw, 320px)', sm: 360, md: 420 },
                    minWidth: { xs: 'min(82vw, 320px)', sm: 360, md: 420 },
                    maxWidth: { xs: 320, sm: 360, md: 420 },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          component="p"
          sx={{
            mb: 0,
            color: '#888',
            fontFamily: '"Inter", sans-serif',
            fontSize: 12,
            lineHeight: 1.5,
          }}
        >
          {referenceProjects.length} selected works
        </Box>
      </Container>
    </Box>
  )
}

export default ProjectsIndex
