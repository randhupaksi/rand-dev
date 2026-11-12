import type { FaqItem, JourneyItem, ProfileHighlight, SkillGroup } from '@/types/about'

export const profileHighlights: ProfileHighlight[] = [
  {
    title: 'Citra Negara Attendance System · 2,000+ users',
    description:
      'Built for SMK Citra Negara Depok and used by more than 2,000 people for school attendance.',
  },
  {
    title: 'Rancode Lab · 341 lessons',
    description:
      'A bilingual programming platform with a nine-stage core path and optional Tailwind CSS and Vibe Coding tracks.',
  },
  {
    title: 'RanMotion · 40 GSAP exercises',
    description:
      'A bilingual browser workshop with editable animation examples and practice across nine sections.',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description:
      'Core web technologies used in the attendance platform and browser-based learning projects.',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'UI/UX implementation',
    description: 'Interface skills used to build responsive, accessible product experiences.',
    items: [
      'Responsive design',
      'Visual hierarchy',
      'Interaction states',
      'Component architecture',
      'Design tokens',
      'Accessibility',
    ],
  },
  {
    title: 'APIs & data',
    description: 'Backend and data tools used in selected application projects.',
    items: ['Go', 'REST APIs', 'MySQL', 'TanStack Query', 'Forms & validation'],
  },
  {
    title: 'IT Club mentoring',
    description: 'Frontend and UI/UX instruction for members of the SMK Citra Negara IT Club.',
    items: ['Frontend fundamentals', 'UI/UX', 'Project guidance'],
    isAdditional: true,
  },
]

export const aboutFacts: { label: string; value: string; detail: string; href?: string }[] = [
  {
    label: 'Current role',
    value: 'Frontend Developer',
    detail: 'Matik Creative Technology · Jan 2026–Present',
  },
  {
    label: 'Education',
    value: 'Software Engineering (PPLG)',
    detail: 'SMK Citra Negara Depok · 2024–2027',
  },
  {
    label: 'Recognition',
    value: 'Student of the Year',
    detail: 'Citra Negara Awards 2026 · May 2026',
  },
]

export const journeyItems: JourneyItem[] = [
  {
    period: 'Jan 2026–Present',
    title: 'Frontend Developer',
    organization: 'Matik Creative Technology',
    organizationHref: 'https://www.matik.id/',
    description:
      'Developing web and application interfaces with Next.js, React, TypeScript, and JavaScript, applying responsive design and UI/UX principles.',
    kind: 'work',
  },
  {
    period: 'May 2026',
    title: 'Student of The Year',
    organization: 'Citra Negara Awards 2026 · SMK Citra Negara Depok',
    description: 'Recognized through the Citra Negara Awards 2026.',
    kind: 'award',
    evidence: {
      label: 'View LinkedIn post',
      href: 'https://www.linkedin.com/posts/randhu-paksi-membumi_still-cant-believe-this-really-grateful-activity-7459593873065947136-eX6t',
    },
  },
  {
    period: 'Aug 2026',
    title: 'Digital Innovation Award',
    organization: 'SMK Citra Negara Depok',
    description:
      'Received an award for creating Citra Negara Attendance System, a digital attendance platform for the SMK Citra Negara Depok community.',
    kind: 'award',
    evidence: {
      label: 'View school announcement',
      href: 'https://www.instagram.com/p/DcxmlwZBPpP/?stkn=OTdqZDNudjMxZnZn',
    },
  },
  {
    period: '2024–2027',
    title: 'Software Engineering (PPLG)',
    organization: 'SMK Citra Negara Depok',
    description: 'Vocational study in software and application development.',
    kind: 'education',
  },
]

export const contactFaq: FaqItem[] = [
  {
    question: 'What work are you open to?',
    answer: 'Frontend roles, product UI implementation, and web application collaboration.',
  },
  {
    question: 'Which technologies do you use?',
    answer:
      'React, Next.js, TypeScript, JavaScript, Vite, and Tailwind CSS. Selected projects also use Go, REST APIs, and MySQL.',
  },
  {
    question: 'Where can I review your work?',
    answer:
      'The Projects page covers the school attendance platform, programming learning tools, personal finance app, and interactive letter.',
  },
]
