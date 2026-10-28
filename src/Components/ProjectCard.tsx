import Box from '@mui/material/Box'
import { Link as RouterLink } from 'react-router-dom'
import type { SxProps, Theme } from '@mui/material/styles'

export const PROJECT_ORANGE = 'rgb(255, 70, 46)'

const DIVIDER = '1px solid rgba(224, 224, 224, 0.63)'

interface ProjectCardProps {
  title: string
  category: string
  image: string
  to: string
  external?: boolean
  fillBox?: boolean
  sx?: SxProps<Theme>
}

function ProjectCard({ title, category, image, to, external, fillBox, sx }: ProjectCardProps) {
  const linkProps = external
    ? { component: 'a', href: to, target: '_blank', rel: 'noopener noreferrer' } as const
    : { component: RouterLink, to } as const

  return (
    <Box
      {...linkProps}
      sx={{
        display: fillBox ? 'flex' : 'block',
        flexDirection: fillBox ? 'column' : undefined,
        position: 'relative',
        boxSizing: 'border-box',
        height: fillBox ? '100%' : undefined,
        py: { xs: '40px', md: '64px' },
        px: { xs: '8px', md: '24px' },
        borderBottom: DIVIDER,
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'pointer',
        '&:hover .project-card-image': { transform: 'scale(1.05)' },
        '&:hover .project-card-title': { color: PROJECT_ORANGE },
        '&:hover .project-card-arrow': { backgroundColor: PROJECT_ORANGE },
        '&:hover .project-card-arrow-out': { left: '160%', opacity: 0 },
        '&:hover .project-card-arrow-in': { left: '50%', opacity: 1 },
        '&:focus-visible': { outline: `3px solid ${PROJECT_ORANGE}`, outlineOffset: 4 },
        ...sx,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: { xs: '20px', md: '30px' },
          aspectRatio: fillBox ? undefined : '1.33256',
          flex: fillBox ? '1 1 0%' : undefined,
          minWidth: fillBox ? 0 : undefined,
          minHeight: fillBox ? 0 : undefined,
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)',
        }}
      >
        <Box
          component="img"
          className="project-card-image"
          src={image}
          alt={`${title} project preview`}
          loading="lazy"
          sx={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          justifyContent: 'space-between',
          pt: { xs: '18px', md: '24px' },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '6px', sm: '12px' }, minWidth: 0, overflow: 'hidden' }}>
          <Box
            component="h3"
            className="project-card-title"
            sx={{
              m: 0,
              color: 'rgb(0, 0, 0)',
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: 14, sm: 22, md: 28 },
              fontWeight: 600,
              letterSpacing: '-0.01em',
              lineHeight: 1.2,
              whiteSpace: { xs: 'normal', sm: 'nowrap' },
              overflow: { xs: 'hidden', sm: 'hidden' },
              textOverflow: { xs: 'ellipsis', sm: 'ellipsis' },
              display: { xs: '-webkit-box', sm: 'block' },
              WebkitLineClamp: { xs: 2, sm: 'unset' },
              WebkitBoxOrient: { xs: 'vertical', sm: 'unset' },
              wordBreak: { xs: 'break-word', sm: 'normal' },
              minWidth: 0,
              flex: '1 1 auto',
              transition: 'color 300ms ease',
              '&:hover': {
                color: '#ff6b00',
              },
            }}
          >
            {title}
          </Box>
          <Box
            className="project-card-dot"
            sx={{
              width: 6,
              height: 6,
              borderRadius: '5px',
              background: 'rgb(87, 87, 87)',
              flexShrink: 0,
            }}
          />
          <Box
            className="project-card-category"
            component="span"
            sx={{
              color: 'rgb(87, 87, 87)',
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: 10, sm: 12, md: 14 },
              fontWeight: 500,
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {category}
          </Box>
        </Box>

        <Box
          className="project-card-arrow"
          sx={{
            position: 'relative',
            overflow: 'hidden',
            width: { xs: 32, md: 49 },
            height: { xs: 32, md: 49 },
            borderRadius: '90px',
            background: 'rgb(242, 242, 242)',
            flexShrink: 0,
            transition: 'background-color 300ms ease',
            alignSelf: { xs: 'flex-start', sm: 'center' },
            mt: { xs: 0.5, sm: 0 },
          }}
        >
          <Box
            className="project-card-arrow-out"
            component="span"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'rgb(0, 0, 0)',
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: 15, md: 18 },
              fontWeight: 500,
              lineHeight: 1,
              opacity: 1,
              transition: 'left 300ms cubic-bezier(0.16, 1, 0.3, 1), opacity 300ms ease',
            }}
          >
            →
          </Box>
          <Box
            className="project-card-arrow-in"
            component="span"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '-50%',
              transform: 'translate(-50%, -50%)',
              color: 'rgb(255, 255, 255)',
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: 15, md: 18 },
              fontWeight: 500,
              lineHeight: 1,
              opacity: 0,
              transition: 'left 300ms cubic-bezier(0.16, 1, 0.3, 1), opacity 300ms ease',
            }}
          >
            →
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProjectCard