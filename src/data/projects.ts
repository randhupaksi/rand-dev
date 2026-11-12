import type { ProjectSummary } from '@/types/project'

export const projects: ProjectSummary[] = [
  {
    slug: 'absensi-cn',
    name: 'Citra Negara Attendance System',
    category: 'School attendance system · in production',
    period: {
      value: 'Live in production · 2026',
      isPlaceholder: false,
    },
    summary:
      'An attendance platform for SMK Citra Negara Depok, used by more than 2,000 people. Students submit attendance with photo and location evidence; teachers and staff review requests and manage school-wide reporting.',
    thumbnail: {
      src: '/images/project/absensi-cn/hero-overview.png',
      alt: 'Citra Negara Attendance System landing page introducing the school attendance service.',
    },
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Go', 'MySQL'],
    focusAreas: [
      'Multi-role school workflows',
      'Attendance evidence and review',
      'School operations and reporting',
    ],
    status: 'verified',
    links: {
      demo: 'https://absensmk.citranegara.online',
      repository: null,
    },
  },
  {
    slug: 'rand-studio',
    name: 'RandStudio',
    category: 'Independent digital studio',
    period: {
      value: 'Project timeline not published',
      isPlaceholder: true,
    },
    summary:
      'The public site for Randhu’s independent digital studio. It explains website and design services, sets expectations around project scope, and turns a browser-only brief into a copyable summary or an email draft when contact is configured.',
    thumbnail: {
      src: '/images/project/rand-studio/overview.jpg',
      alt: 'RandStudio homepage with its studio introduction, project call to action, and website mockup.',
    },
    stack: ['React 19', 'TypeScript', 'Vite 8', 'Tailwind CSS 4', 'GSAP', 'Lenis'],
    focusAreas: ['Service positioning and fit', 'Clear project scope', 'Client-side project brief'],
    status: 'verified',
    links: {
      demo: null,
      repository: null,
    },
  },
  {
    slug: 'ranbience',
    name: 'Ranbience',
    category: 'Ambient SVG animation collection',
    period: {
      value: 'Project timeline not published',
      isPlaceholder: true,
    },
    summary:
      'A collection of 50 ambient scenes across plants, creatures, weather, water, and light. Visitors tune a live preview, then copy or download the reusable SVG animation source.',
    thumbnail: {
      src: '/images/project/ranbience/overview.jpg',
      alt: 'Ranbience homepage with an ambient wildflower scene and motion preview.',
    },
    stack: ['React', 'TypeScript', 'Vite', 'SVG', 'GSAP'],
    focusAreas: [
      'Authored animated SVG scenes',
      'Adjustable motion previews',
      'Reusable source export',
    ],
    status: 'verified',
    links: {
      demo: 'https://ranbience.my.id',
      repository: null,
    },
  },
  {
    slug: 'ranmotion',
    name: 'RanMotion',
    category: 'Interactive GSAP learning platform',
    period: {
      value: 'Project timeline not published',
      isPlaceholder: true,
    },
    summary:
      'A bilingual path with 42 lessons across nine sections: two visual introductions without code, followed by 40 guided animation practices with editable examples and live previews.',
    thumbnail: {
      src: '/images/project/ranmotion/overview.jpg',
      alt: 'RanMotion homepage with a GSAP motion study, code sample, and live preview controls.',
    },
    stack: ['React 19', 'TypeScript', 'Vite', 'GSAP', 'CodeMirror', 'Zod'],
    focusAreas: [
      'Visual learning before code',
      'Editable animation practice',
      'Bilingual learning experience',
    ],
    status: 'verified',
    links: {
      demo: 'https://ranmotion.vercel.app',
      repository: null,
    },
  },
  {
    slug: 'rancode-lab',
    name: 'Rancode Lab',
    category: 'Bilingual programming curriculum',
    period: {
      value: 'Project timeline not published',
      isPlaceholder: true,
    },
    summary:
      'A bilingual path from logic and web fundamentals through Next.js: 272 core lessons, nine checkpoints, and nine self-reviewed projects. Optional Tailwind CSS and Vibe Coding paths bring the full catalog to 341 lessons.',
    thumbnail: {
      src: '/images/project/rancode-lab/overview.jpg',
      alt: 'Rancode Lab homepage with a coding lesson, editable example, and rendered browser preview.',
    },
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'CodeMirror', 'MDX', 'Zod'],
    focusAreas: [
      'Structured frontend curriculum',
      'Browser-based coding practice',
      'Learner-owned progress and projects',
    ],
    status: 'verified',
    links: {
      demo: 'https://rancodelab.vercel.app',
      repository: null,
    },
  },
  {
    slug: 'ranledger',
    name: 'Ranledger',
    category: 'Local-first personal finance app',
    period: {
      value: 'Project timeline not published',
      isPlaceholder: true,
    },
    summary:
      'An Indonesian finance app that keeps its default ledger in the browser and works offline. It connects wallets and obligations with budgets, recurring plans, CSV reconciliation, reports, and recovery; cloud sync is optional.',
    thumbnail: {
      src: '/images/project/ranledger/overview.jpg',
      alt: 'Ranledger finance overview in a fresh workspace, with local storage and wallet summaries visible.',
    },
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS 4',
      'Dexie',
      'Hono',
      'PostgreSQL',
      'Zod',
      'PWA',
    ],
    focusAreas: [
      'Local-first financial records',
      'Assets, debts, and cash-flow plans',
      'Reconciliation and data recovery',
    ],
    status: 'verified',
    links: {
      demo: 'https://ranledger.vercel.app',
      repository: null,
    },
  },
  {
    slug: 'ranfession',
    name: 'Ranfession',
    category: 'Interactive digital letter',
    period: {
      value: 'Project timeline not published',
      isPlaceholder: true,
    },
    summary:
      'A digital letter that starts with a single-screen invitation, moves into scroll-led chapters, and keeps its main confession behind the reader’s deliberate Reveal action. Optional ambience is generated locally and starts off.',
    thumbnail: {
      src: '/images/project/ranfession/overview.jpg',
      alt: 'Ranfession opening invitation with an unopened envelope and a Begin action.',
    },
    stack: ['React 19', 'TypeScript', 'Vite', 'GSAP', 'ScrollTrigger', 'Zod', 'Web Audio API'],
    focusAreas: [
      'Reader-led narrative pacing',
      'Explicit reveal interaction',
      'Reduced-motion and optional audio',
    ],
    status: 'verified',
    links: {
      demo: 'https://ranfession.vercel.app',
      repository: null,
    },
  },
  {
    slug: 'rand-signature-template',
    name: 'Randhu Project Signature',
    category: 'Reusable React project starter',
    period: {
      value: 'Project timeline not published',
      isPlaceholder: true,
    },
    summary:
      'A reusable starting point for Randhu’s React projects: it establishes source ownership, modular page structure, semantic UI foundations, and a shared quality gate while leaving each product’s identity and domain rules to the derived project.',
    thumbnail: {
      src: '/images/project/rand-signature-template/overview.jpg',
      alt: 'Randhu Project Signature starter page with its first-use checklist.',
    },
    stack: ['React', 'TypeScript', 'Vite', 'React Router', 'Tailwind CSS 4', 'Oxlint', 'Prettier'],
    focusAreas: [
      'Clear source ownership',
      'Modular project structure',
      'Repeatable quality checks',
    ],
    status: 'verified',
    links: {
      demo: null,
      repository: null,
    },
  },
]

export function getAdjacentProjects(slug: string): {
  previous: ProjectSummary | null
  next: ProjectSummary | null
} {
  const index = projects.findIndex(project => project.slug === slug)

  if (index === -1) {
    return { previous: null, next: null }
  }

  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}
