import type { FaqGroup, JourneyItem, ProfileHighlight, SkillGroup } from '@/types/about'

export const profileHighlights: ProfileHighlight[] = [
  {
    projectSlug: 'ranbience',
    fact: '50 ambient SVG scenes',
    description: 'An ambient scene library with adjustable previews and reusable SVG exports.',
  },
  {
    projectSlug: 'ranledger',
    fact: 'Local-first · works offline',
    description:
      'A personal finance app for wallets, budgets, recurring plans, CSV reconciliation, and reports, with optional cloud sync.',
  },
  {
    projectSlug: 'ranmotion',
    fact: '42 lessons · 40 GSAP practices',
    description:
      'A bilingual GSAP workshop with visual lessons, editable animation practice, and live previews.',
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

export const contactFaqGroups: FaqGroup[] = [
  {
    title: 'Working together',
    eyebrow: 'FRONTEND · PRODUCT UI · MENTORING',
    description: 'Role fit, current product work, and the teaching I do on the side.',
    items: [
      {
        question: 'What kind of work am I open to?',
        answer: 'Frontend roles, product UI implementation, and web application collaboration.',
      },
      {
        question: 'What do I build at Matik Creative Technology?',
        answer:
          'I build responsive web and application interfaces with React, Next.js, TypeScript, and JavaScript.',
      },
      {
        question: 'Do I also mentor other developers?',
        answer:
          'Yes. Mentoring is a side skill: I support IT Club members with frontend fundamentals, UI/UX, and project guidance.',
      },
    ],
  },
  {
    title: 'How I build',
    eyebrow: 'WORKFLOW · API · QUALITY CHECKS',
    description: 'The steps and technical choices behind the interfaces I make.',
    items: [
      {
        question: 'How do I move from a brief to an interface?',
        answer:
          'I map user roles, decisions, and required actions to the screens and states a product needs, then build reusable, responsive UI.',
      },
      {
        question: 'What do I check before an interface is ready?',
        answer:
          'I review responsive behavior, validation, loading and error feedback, permissions, and keyboard interaction.',
      },
      {
        question: 'Can I work with APIs and backend data?',
        answer:
          'Yes. I connect forms and interface states to REST APIs, and work with Go services and MySQL when a project includes backend scope.',
      },
      {
        question: 'Which technologies show up in my work?',
        answer:
          'React, Next.js, TypeScript, JavaScript, Vite, and Tailwind CSS. Selected projects also use Go, MySQL, GSAP, SVG, CodeMirror, Dexie, and PostgreSQL.',
      },
    ],
  },
  {
    title: 'Selected work',
    eyebrow: 'PROJECTS · CASE STUDIES · DEMOS',
    description: 'A useful route through the products, project details, and live demos.',
    items: [
      {
        question: 'What kinds of products have I built?',
        answer:
          'My work spans a production school attendance platform, a 50-scene animated SVG collection, bilingual learning tools, a local-first finance app, and an interactive digital letter.',
      },
      {
        question: 'What does the Citra Negara Attendance System handle?',
        answer:
          'Students submit attendance with photo and location evidence; teachers and staff review requests and manage school-wide reporting. The production platform is used by more than 2,000 people.',
      },
      {
        question: 'Can I try the projects online?',
        answer:
          'Live demos are available for the Attendance System, Ranbience, RanMotion, Rancode Lab, RanLedger, and Ranfession. The other project pages include their available screenshots and implementation details.',
      },
    ],
  },
]
