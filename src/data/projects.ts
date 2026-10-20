export interface Project {
  slug: string
  title: string
  category: string
  year: string
  role: string
  client: string
  stack: string
  image: string
  link: string
  description: string
}

export const projects: Project[] = [
  {
    slug: 'crunch',
    title: 'Crunch',
    category: 'Mobile App Design',
    year: '2025',
    role: 'Product Designer',
    client: 'Crunch',
    stack: 'Figma, React Native',
    image: 'https://www.bharathanand.co.uk/assets/images/work/crunch-image.png',
    link: 'https://www.bharathanand.co.uk',
    description:
      'Crunch is a mindful eating app designed to help people slow down and build healthier habits around food. From gentle nudges to glanceable meal tracking, every screen is built for calm and consistency.',
  },
  {
    slug: 'habitate',
    title: 'Habitate',
    category: 'Web Design & Development',
    year: '2025',
    role: 'Lead Designer & Developer',
    client: 'Habitate Inc.',
    stack: 'React, TypeScript, Framer, Node.js',
    image: 'https://framerusercontent.com/images/RsTnHvfNRK76yx5K3cW06cQitqg.jpg',
    link: 'https://base.supply/template',
    description:
      'Habitate is a full product design and build for a modern workspace-suite platform. From the first wireframe to the shipped interface, every screen is tuned for clarity, speed and calm.',
  },
  {
    slug: 'pixel-store',
    title: 'Pixel Store',
    category: 'E-commerce Design',
    year: '2024',
    role: 'Product Designer',
    client: 'Pixel Studio',
    stack: 'Next.js, Stripe, Vercel',
    image: 'https://framerusercontent.com/images/hY8kTkRIlzMaAB7HLM79kW0IhQ.jpg',
    link: 'https://base.supply/template',
    description:
      'Pixel Store is a high-converting commerce experience for a digital-goods label. We streamlined the browsing and checkout flow while keeping the brand front and center.',
  },
  {
    slug: 'shipit',
    title: 'Shipit',
    category: 'Mobile App Design',
    year: '2024',
    role: 'Mobile Designer',
    client: 'Shipit Co.',
    stack: 'React Native, Figma',
    image: 'https://framerusercontent.com/images/OVRscnaD3RFU0f29QfVQ3HMB8.jpg',
    link: 'https://base.supply/template',
    description:
      'Shipit is a logistics companion app that turns tracking into a delight. The interface focuses on glanceable status, quick actions and a friendly tone at every step.',
  },
  {
    slug: 'hifi-store',
    title: 'Hifi Store',
    category: 'Branding & E-commerce',
    year: '2023',
    role: 'Brand & Web Designer',
    client: 'Hifi Audio',
    stack: 'Figma, Webflow',
    image: 'https://framerusercontent.com/images/0Tsd2w5kFi3BRRMjNlfSdUybSDs.jpg',
    link: 'https://base.supply/template',
    description:
      'Hifi Store pairs a warm analog brand identity with a sharp storefront. Product pages are built around rich imagery and effortless comparison.',
  },
]

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find(p => p.slug === slug)
}
