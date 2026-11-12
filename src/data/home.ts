import type { AboutProfile, ExpertiseItem, HomeCta, ProcessStep, ToolGroup } from '@/types/home'

export const aboutProfile: AboutProfile = {
  name: 'Randhu Paksi Membumi',
  role: 'Frontend Developer',
  education: 'Software Engineering (PPLG) · SMK Citra Negara Depok · 2024–2027',
  summary:
    'I work as a Frontend Developer at Matik Creative Technology, building web interfaces with React, Next.js, TypeScript, and JavaScript.',
  statement:
    'My selected work includes a school attendance system used by 2,000+ people, two browser-based programming learning tools, and a local-first finance app.',
  tags: ['React & Next.js', 'Product UI', 'Go & REST APIs'],
}

export const expertiseItems: ExpertiseItem[] = [
  {
    title: 'Frontend development',
    description:
      'At Matik Creative Technology, I build responsive web and application interfaces with React, Next.js, TypeScript, and JavaScript.',
    bullets: ['React', 'Next.js', 'TypeScript & JavaScript'],
  },
  {
    title: 'Production school software',
    description:
      'I built the Citra Negara Attendance System for SMK Citra Negara Depok. The live platform serves more than 2,000 people.',
    bullets: ['2,000+ users', 'Attendance workflows', 'Go & MySQL'],
  },
  {
    title: 'Interactive learning products',
    description:
      'I built RanMotion and Rancode Lab, two bilingual learning tools with browser-based lessons and coding practice.',
    bullets: [
      'Rancode Lab · 341 lessons',
      'RanMotion · 40 GSAP exercises',
      'Interactive browser labs',
    ],
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Map roles and requirements',
    description:
      'I use the brief, user roles, and required actions to identify the screens and states a product needs.',
  },
  {
    step: '02',
    title: 'Build the interface',
    description:
      'I implement responsive page layouts and reusable components with React or Next.js, TypeScript, and the project design system.',
  },
  {
    step: '03',
    title: 'Connect product data',
    description:
      'I connect forms and interface states to REST APIs, and work with Go services and MySQL when the project includes backend scope.',
  },
  {
    step: '04',
    title: 'Review interaction states',
    description:
      'I check responsive layouts, validation, loading and error feedback, permissions, and keyboard interaction.',
  },
]

export const toolGroups: ToolGroup[] = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'APIs & data',
    items: ['Go', 'REST APIs', 'MySQL', 'TanStack Query', 'Zod'],
  },
  {
    title: 'UI/UX',
    items: ['Figma', 'Responsive UI', 'Visual hierarchy', 'Interaction states'],
  },
  {
    title: 'Additional',
    items: ['IT Club mentoring', 'UI/UX instruction', 'Git', 'Figma handoff'],
  },
]

export const homeCta: HomeCta = {
  title: 'Frontend & product UI opportunities',
  description:
    'I’m open to frontend roles and product UI or web application collaboration. Contact me through LinkedIn or the profile links below.',
  primaryLabel: 'Let’s talk',
  secondaryLabel: 'See all projects',
}
