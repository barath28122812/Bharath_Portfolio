import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { getProject } from '../data/projects'
import NotFound from './NotFound'

const heading: React.CSSProperties = {
  fontFamily: '"Inter", sans-serif',
  letterSpacing: '-0.02em',
  lineHeight: 1.05,
  fontWeight: 700,
  textTransform: 'uppercase',
}

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProject(slug)
  if (!project) return <NotFound />

  const rows: Array<[string, string | React.ReactNode]> = [
    ['Category', project.category],
    ['Year', project.year],
    ['Role', project.role],
    ['Client', project.client],
    ['Stack', project.stack],
    [
      'Live link',
      <a key="link" href={project.link} target="_blank" rel="noopener noreferrer">
        {project.link}
      </a>,
    ],
  ]

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        background:
          'var(--token-8f8b32ea-2243-4c94-90d7-9dbc1e52ffc2, rgb(255, 255, 255))',
        color: 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))',
        position: 'relative',
      }}
    >
      <div className="crunch-side-lines" aria-hidden="true">
        <span className="crunch-side-lines-star crunch-side-lines-star-left" />
        <span className="crunch-side-lines-star crunch-side-lines-star-right" />
      </div>
      <Container maxWidth={false} sx={{ width: '100%', py: 6 }}>
        <Button
          component={RouterLink}
          to="/projects"
          sx={{ mb: { xs: 5, md: 8 }, textTransform: 'none' }}
          startIcon={<span aria-hidden>←</span>}
        >
          All projects
        </Button>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: { xs: 2, md: 3 },
            mb: { xs: 5, md: 8 },
          }}
        >
          <Typography variant="h2" component="h1" sx={{ ...heading, m: 0 }}>
            {project.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ m: 0, opacity: 0.7 }}>
            {project.category} · {project.year}
          </Typography>
        </Box>

        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: '100%',
            height: 'auto',
            aspectRatio: '4 / 3',
            objectFit: 'cover',
            borderRadius: 4,
            display: 'block',
            mb: 4,
          }}
        />

        <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
          {project.description}
        </Typography>

        <Typography variant="h5" component="h2" sx={{ ...heading, mb: 2 }}>
          Project details
        </Typography>
        <TableContainer component={Paper} elevation={1} sx={{ borderRadius: 3 }}>
          <Table aria-label="Project details">
            <TableBody>
              {rows.map(([label, value]) => (
                <TableRow
                  key={label}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: 600, width: '35%', color: 'inherit' }}
                  >
                    {label}
                  </TableCell>
                  <TableCell sx={{ color: 'inherit' }}>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  )
}

export default ProjectDetail
