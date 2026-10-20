import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'

const heading: React.CSSProperties = {
  fontFamily: '"Inter", sans-serif',
  letterSpacing: '-0.02em',
  lineHeight: 1,
  fontWeight: 700,
  textTransform: 'uppercase',
}

function NotFound() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background:
          'var(--token-8f8b32ea-2243-4c94-90d7-9dbc1e52ffc2, rgb(255, 255, 255))',
        color: 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))',
      }}
    >
      <Container maxWidth="sm" sx={{ px: 2 }}>
        <Typography
          component="p"
          sx={{
            ...heading,
            fontSize: 'clamp(72px, 14vw, 160px)',
            color: 'rgb(255, 70, 46)',
            mb: 2,
          }}
        >
          404
        </Typography>

        <Typography
          component="h1"
          sx={{
            ...heading,
            fontSize: 'clamp(24px, 4vw, 40px)',
            mb: 2,
          }}
        >
          Page not found
        </Typography>

        <Typography
          component="p"
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: 'clamp(14px, 1.6vw, 18px)',
            lineHeight: 1.6,
            color: 'rgb(103, 103, 103)',
            mb: 4,
          }}
        >
          The page you are looking for has moved or no longer exists.
        </Typography>

        <Button
          component={RouterLink}
          to="/"
          disableElevation
          sx={{
            fontFamily: '"Inter", sans-serif',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '15px',
            px: 3,
            py: 1.25,
            borderRadius: '100px',
            backgroundColor: 'rgb(0, 0, 0)',
            color: 'rgb(255, 255, 255)',
            '&:hover': { backgroundColor: 'rgb(255, 70, 46)' },
          }}
        >
          Back to home
        </Button>
      </Container>
    </Box>
  )
}

export default NotFound
