export interface WorkItem {
  image: string
  title: string
  year: string
  activeDots: number
  tags: string[]
  path: string
}

const IMG = 'https://www.bharathanand.co.uk/assets/images/work'
const INSIGHTS = '/assets/images/home/latestinsights'

export const WORKDATASECTION: WorkItem[] = [
  { image: 'https://erepublic.brightspotcdn.com/dims4/default/b0f92ed/2147483647/strip/true/crop/5824x3037+0+0/resize/840x438!/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.us-west-2.amazonaws.com%2F87%2F92%2F94429af140178513138d2aae52b4%2Fadobestock-1284427313.jpeg', title: 'atBots', year: '2025', activeDots: 3, tags: ['AI', 'Chatbot'], path: '/atbots' },
  { image: `${IMG}/atEats-work-image.svg`, title: 'Eats (SaaS)', year: '2025', activeDots: 1, tags: ['SaaS'], path: '/ateats' },
  { image: '/atbooks-cover.png', title: 'atBooks (ERP)', year: '2025', activeDots: 4, tags: ['ERP'], path: '/atbooks' },
  { image: `${IMG}/petPedia.svg`, title: 'Petpedia', year: '2025', activeDots: 1, tags: ['Saas'], path: '/petpedia' },
  { image: '/assets/beuta/cyos.png', title: 'CYOS', year: '2025', activeDots: 2, tags: ['Marketplace',], path: '/cyos' },
  { image: `${IMG}/crunch-image.png`, title: 'Crunch', year: '2025', activeDots: 5, tags: ['Mindful Eating app'], path: '/crunch' },
  {
    image: `${IMG}/beauta-image.svg`,
    title: 'Beuta (Accessibility design)',
    year: '2025',
    activeDots: 6,
    tags: ['Service App'],
    path: 'https://drive.google.com/file/d/1sjGd2IsnQORbR5yuk_OPEoGw-9e5e6Zr/view',
  },
  { image: `${IMG}/sail_safe-image.svg`, title: 'Sail Safe (UX)', year: '2025', activeDots: 6, tags: ['Ship', 'VR Navigation'], path: '/xr-design' },
  { image: `${IMG}/emergency_image.svg`, title: 'Emergency Alert (UX research)', year: '2025', activeDots: 6, tags: ['Business', 'Pitch website'], path: '/emergency-alert' },
]

export interface InsightCard {
  id: number
  img: string
  title: string
  date: string
  button: string
  URL: string
}

export const LATESTINSIGHTS_CARD: InsightCard[] = [
  { id: 1, img: `${INSIGHTS}/insights-img-01.jpeg`, title: 'Reciprocity Important', date: 'Mar 12, 2024', button: 'View Post', URL: 'https://lnkd.in/p/eaw2x-ps' },
  { id: 2, img: `${INSIGHTS}/insights-img-02.jpeg`, title: 'AI', date: 'Sep 18, 2025', button: 'View Post', URL: 'https://www.linkedin.com/posts/bharath-anan_opentowork-productdesign-agenticai-activity-7495041789725368320-xMjc?utm_source=share&utm_medium=member_ios&rcm=ACoAAD456EgBMJ0ABd4b428lrMgJPHZzZftfh7A' },
  { id: 3, img: `${INSIGHTS}/insights-img-03.jpeg`, title: 'UI is a part UX', date: 'Oct 12, 2025', button: 'View Post', URL: 'https://www.linkedin.com/posts/bharath-anan_uxdesign-productdesign-userexperience-activity-7490360960105263105-7mdl?utm_source=share&utm_medium=member_ios&rcm=ACoAAD456EgBMJ0ABd4b428lrMgJPHZzZftfh7A' },
]

export const PORTFOLIO = {
  SectionTitle: 'Portfolio Works',
  year: '©2025',
  title: 'My works®',
  description:
    'Explore a collection of high-quality, innovative designs crafted to elevate brands and captivate audiences. Each project reflects our commitment to creativity and excellence.',
  button: 'View portfolio',
}

export const SomeFreelanceDesign = {
  LATEST_UPDATE: 'Latest Updates',
  LATEST_BLOGS: 'Latest Blogs',
  LATEST_INSIGHTS: 'Latest Insights',
  INSIGHTS_PARAGRAPH_ONE: 'Explore my blog for design tips, industry insights, and creative inspiration. From ',
  INSIGHTS_PARAGRAPH_TWO: 'tutorials to thought pieces, there\u2019s something for every curious mind.',
}

export interface FreelanceItem {
  id: number
  tag: string
  title: string
  description: string
  bgColor: string
  textColor: string
  image?: string
  size: 'featured' | 'half'
  path?: string
}

export const FREELANCE_DESIGN_ITEMS: FreelanceItem[] = [
  {
    id: 1,
    tag: '#SaaS  •  Business Management (2025)',
    title: 'Syoping Solutions',
    description:
      'A smart business management platform that helps restaurants, retail stores, and growing businesses streamline operations, manage workflows, and make faster, data-driven decisions.',
    bgColor: '#E0F2FE',
    textColor: '#0f172a',
    size: 'featured',
    path: 'https://syopingsolutions.com/',
  },
  {
    id: 2,
    tag: '#0 to 1  •  WCAG (2023)',
    title: 'Beuta',
    description:
      'An app allows users to easily organise appointments, and services to keep track of action items, ensuring efficient and productive experience.',
    bgColor: '#EDE9FE',
    textColor: '#1e1e2d',
    image: '/assets/Beuta.png',
    size: 'featured',
    path: '/beuta',
  },
  {
    id: 3,
    tag: '#Pitch',
title: 'Take A Simple Idea',
    description: '',
    bgColor: '#7C6BFB',
    textColor: '#ffffff',
    size: 'half',
    path: 'https://takeasimpleidea.com/',
    image: '/assets/beuta/betasec3.avif',
  },
  {
    id: 4,
    tag: '#LMS product design',
title: 'LMS Redesign',
    description: '',
    bgColor: '#A0E6DA',
    textColor: '#ffffff',
    size: 'half',
    path: 'https://myigetit.com/',
    image: '/assets/beuta/betasec__2.avif',
  },
  {
    id: 5,
    tag: '#UX Redesign',
    title: 'Redesigning onboarding',
    description: '',
    bgColor: '#EDE9FE',
    textColor: '#1e1e2d',
    size: 'featured',
    image: '/assets/Link.png',
  },
  {
    id: 6,
    tag: '#General product design',
    title: 'Dashboard redesign',
    description: '',
    bgColor: '#A0E6DA',
    textColor: '#ffffff',
    size: 'half',
    image: '/Dashboard.png',
  },
  {
    id: 7,
    tag: '#AI  •  READOLOGY (2025)',
    title: 'AI for proofreaders',
    description: '',
    bgColor: '#D28AE4',
    textColor: '#333333',
    size: 'half',
    image: '/AI.png',
  },
]

export const LATESTINSIGHTS = {
  LATEST_UPDATE: 'Latest Updates',
  LATEST_BLOGS: 'Latest Blogs',
  LATEST_INSIGHTS: 'Latest Insights',
  INSIGHTS_PARAGRAPH_ONE: 'Explore my blog for design tips, industry insights, and creative inspiration. From ',
  INSIGHTS_PARAGRAPH_TWO: 'tutorials to thought pieces, there\u2019s something for every curious mind.',
}
