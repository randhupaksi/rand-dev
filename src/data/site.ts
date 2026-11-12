import type { ContactChannel, SiteIdentity, SocialLink } from '@/types/site'

const env = import.meta.env

const email = (env.VITE_EMAIL as string | undefined) || ''
const cvUrl =
  (env.VITE_CV_URL as string | undefined) || '/files/Randhu_Paksi_Membumi_Frontend_Developer_CV.pdf'
const linkedInUrl =
  (env.VITE_SOCIAL_LINKEDIN as string | undefined) ||
  'https://id.linkedin.com/in/randhu-paksi-membumi'
const instagramUrl =
  (env.VITE_SOCIAL_INSTAGRAM as string | undefined) || 'https://www.instagram.com/randdddh___/'

export const siteIdentity: SiteIdentity = {
  name: 'Randhu Paksi Membumi',
  brandFirst: 'Randhu',
  brandSecond: 'Paksi',
  role: 'Frontend Developer',
  tagline:
    'Frontend Developer at Matik Creative Technology, building web interfaces with React, Next.js, and TypeScript.',
  availability: {
    value: 'Open to frontend roles and product UI or web-app collaboration',
    isPlaceholder: false,
  },
  cvHref: cvUrl || null,
}

export const socialLinks: SocialLink[] = [
  {
    key: 'github',
    label: 'GitHub',
    href: (env.VITE_SOCIAL_GITHUB as string | undefined) || null,
  },
  {
    key: 'instagram',
    label: 'Instagram',
    href: instagramUrl,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: linkedInUrl,
  },
  {
    key: 'dribbble',
    label: 'Dribbble',
    href: (env.VITE_SOCIAL_DRIBBBLE as string | undefined) || null,
  },
]

export const contactChannels: ContactChannel[] = [
  {
    key: 'email',
    label: 'Email',
    value: email || 'your.email@example.com',
    href: email ? `mailto:${email}` : null,
    isPlaceholder: !email,
  },
]
