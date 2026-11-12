import { projects } from '@/data/projects'
import type { Project, ProjectDetails } from '@/types/project'

const detailsBySlug: Partial<Record<string, ProjectDetails>> = {
  'absensi-cn': {
    capabilities: [
      {
        title: 'Attendance with evidence',
        description:
          'Photo, location, time windows, and separate morning or class-session records give each attendance event the context it needs.',
      },
      {
        title: 'Role-aware workspaces',
        description:
          'Student, teacher, homeroom, BK, and admin work is shaped by assignments and scope instead of one generic dashboard.',
      },
      {
        title: 'Review and follow-up',
        description:
          'Corrections keep the original record intact, while requests, unusual attendance, and notifications make the next action clear.',
      },
      {
        title: 'School operations',
        description:
          'Academic setup, holidays, session recaps, imports, analytics, and PDF or Excel reports keep daily attendance connected to the wider school workflow.',
      },
    ],
    technicalStack: [
      {
        title: 'Frontend application',
        description:
          'The Vite single-page app that handles the clean interface, server state, forms, reporting views, and interaction details across role-based workflows.',
        items: [
          'React 19',
          'TypeScript 5.9',
          'Vite 8',
          'React Router 7',
          'Tailwind CSS 4',
          'TanStack Query 5',
          'TanStack Table 8',
          'Axios',
          'React Hook Form 7',
          'Zod 4',
          'Base UI',
          'Radix Select',
          'Motion 12',
          'Recharts 3',
          'Sonner',
          'jsPDF + AutoTable',
          'react-day-picker',
        ],
      },
      {
        title: 'API, data, and operations',
        description:
          'The Go REST API that owns business rules, access control, persistence, private evidence, and the safeguards behind a dependable enterprise workflow.',
        items: [
          'Go 1.25',
          'Gin',
          'GORM',
          'MySQL',
          'JWT (HS256)',
          'bcrypt',
          'go-playground/validator',
          'Excelize',
          'Cloudinary',
          'Web Push',
          'Redis',
          'Gzip + request tracing',
          'Rate and admission controls',
        ],
      },
    ],
    caseStudy: [
      {
        title: 'Overview & adoption',
        body: 'Citra Negara Attendance System is a production platform for SMK Citra Negara Depok, used by more than 2,000 people. It supports student, teacher, homeroom, BK, and admin workflows for attendance, follow-up, and reporting.',
        isPlaceholder: false,
      },
      {
        title: 'Student attendance capture',
        body: 'Students check in with a photo and device location. The API enforces attendance windows and location rules and prevents duplicate submissions.',
        isPlaceholder: false,
      },
      {
        title: 'Role-based school workflows',
        body: 'Teacher capabilities depend on subject, homeroom, or BK assignments and scope. The interface includes class sessions, student monitoring, attendance review, counselling notes, and permission or sick requests.',
        isPlaceholder: false,
      },
      {
        title: 'Attendance correction history',
        body: 'The original check-in time stays separate from the review time. Status corrections preserve the original event, record changes in history, and can notify students about the update.',
        isPlaceholder: false,
      },
      {
        title: 'School operations & reporting',
        body: 'Additional modules cover subject sessions and recaps, homeroom attendance, school holidays, academic setup, Excel imports, analytics, and PDF or Excel reports.',
        isPlaceholder: false,
      },
      {
        title: 'Frontend & API architecture',
        body: 'The frontend uses TanStack Query for server state and lazy-loads charting and reporting tools. The Go API handles authentication, role and scope checks, validation, private uploads, request tracing, and bounded traffic handling.',
        isPlaceholder: false,
      },
    ],
    gallery: [
      {
        src: '/images/project/absensi-cn/hero-overview.png',
        alt: 'Citra Negara Attendance System landing page introducing the school attendance service.',
        label: 'Product overview',
      },
      {
        src: '/images/project/absensi-cn/attendance-flow.png',
        alt: 'Attendance guidance showing the sign-in, photo evidence, location, and review steps.',
        label: 'Attendance flow',
      },
      {
        src: '/images/project/absensi-cn/student-login.png',
        alt: 'Citra Negara student sign-in screen with empty NIS and password fields.',
        label: 'Student login',
      },
    ],
    gallerySlots: 3,
  },
  ranmotion: {
    capabilities: [
      {
        title: 'A guided path into motion',
        description:
          'Forty-two lessons across nine sections start with two visual introductions, then move into forty guided practices covering tweens, timelines, interaction, scroll motion, SVG, MotionPath, responsive setup, cleanup, and small projects.',
      },
      {
        title: 'Code that connects to what learners see',
        description:
          'A JavaScript editor runs real GSAP examples against the same HTML and CSS shown in read-only tabs. Learners can change motion controls, run the preview, inspect playback, and compare their code with the result.',
      },
      {
        title: 'Feedback tied to the animation',
        description:
          'Syntax and runtime issues are shown beside the relevant code. Challenges evaluate executed animation values or a real preview interaction, while search and filters help learners find the next practice.',
      },
      {
        title: 'Progress that stays in the learner’s browser',
        description:
          'Lesson completion, challenge progress, language, motion preference, and example drafts persist locally. Reduced-motion settings offer static results and manual inspection; no account or cloud sync is required.',
      },
    ],
    technicalStack: [
      {
        title: 'Learning interface',
        description:
          'A responsive React application presents the bilingual curriculum, lesson routes, playground, challenge board, reference, and learner progress.',
        items: ['React 19', 'TypeScript', 'Vite', 'React Router', 'Tailwind CSS 4'],
      },
      {
        title: 'Animation practice lab',
        description:
          'CodeMirror edits examples that run in a constrained preview frame. The frame loads locally bundled GSAP and reports validated animation diagnostics back to the app.',
        items: ['CodeMirror 6', 'GSAP', 'Sandboxed iframe', 'Zod', 'Browser storage'],
      },
    ],
    caseStudy: [
      {
        title: 'Product overview',
        body: 'RanMotion is a bilingual, browser-based workshop for learning web animation with GSAP. Indonesian is the default language; lessons and controls are also available in English.',
        isPlaceholder: false,
      },
      {
        title: 'Curriculum',
        body: 'The course includes two visual introductions and forty practices across nine sections. Topics cover transforms and easing, timelines and stagger, interface interaction, ScrollTrigger, SVG, MotionPath, responsive setup, cleanup, and small projects.',
        isPlaceholder: false,
      },
      {
        title: 'Code lab & playback controls',
        body: 'Each lab shows example HTML and CSS beside editable JavaScript. Controls support pause, replay, reset, and manual progress inspection. Scroll examples use a separate scroller with keyboard- and touch-friendly progress controls.',
        isPlaceholder: false,
      },
      {
        title: 'Runtime diagnostics & challenges',
        body: 'Diagnostics link to a code line when the runtime can identify it, and reset restores the working example. Challenges check values from executed GSAP animations; interaction exercises also require testing the preview.',
        isPlaceholder: false,
      },
      {
        title: 'Execution & local data',
        body: 'Learner code runs in a sandboxed iframe with a restrictive policy and locally bundled GSAP. Progress and drafts stay in the current browser, with an in-memory fallback if storage is unavailable. The product has no account, application backend, analytics, or code-upload service.',
        isPlaceholder: false,
      },
    ],
    gallery: [
      {
        src: '/images/project/ranmotion/overview.jpg',
        alt: 'RanMotion overview of the GSAP learning path',
        label: 'Motion workshop',
      },
      {
        src: '/images/project/ranmotion/curriculum.jpg',
        alt: 'RanMotion curriculum with 42 lessons grouped into nine sections.',
        label: 'Nine-part learning path',
      },
      {
        src: '/images/project/ranmotion/lesson-lab.jpg',
        alt: 'RanMotion introductory lesson with a guided explanation and lesson navigation.',
        label: 'Guided lesson',
      },
    ],
    gallerySlots: 3,
  },
  'rancode-lab': {
    capabilities: [
      {
        title: 'A complete frontend learning journey',
        description:
          'The main path moves through nine stages, 272 lessons, nine readiness checkpoints, and nine self-reviewed projects - from logic and developer tools to HTML, CSS, JavaScript, browser work, React, TypeScript, and Next.js.',
      },
      {
        title: 'Optional paths for focused practice',
        description:
          'Tailwind CSS adds forty-five lessons across nine modules, while Vibe Coding adds twenty-four lessons across six modules. These companion paths extend the catalog without becoming mandatory stages.',
      },
      {
        title: 'A consistent learn-by-doing rhythm',
        description:
          'Lessons connect explanation, visualization, a small experiment, a challenge, and a recap. Checkpoints explain answers, and project criteria support learner self-review rather than presenting themselves as automated certification.',
      },
      {
        title: 'Different tools for different concepts',
        description:
          'The browser includes focused labs for HTML/CSS, JavaScript, TypeScript, React, Tailwind, and project work. The Next.js capstone is an explicit route and data-state simulator, so its behavior is clear without pretending to run a Next.js server.',
      },
      {
        title: 'Learner-owned work',
        description:
          'Progress, checkpoint results, project drafts, review notes, and language preference stay in the current browser. Project work can be downloaded, and an unavailable browser store falls back to session-only work.',
      },
    ],
    technicalStack: [
      {
        title: 'Curriculum and application',
        description:
          'The Vite React app keeps authored lesson material separate from generated runtime data, localizes learning content, and lazy-loads heavier route tools.',
        items: ['React 19', 'TypeScript', 'Vite', 'React Router', 'MDX', 'Tailwind CSS 4'],
      },
      {
        title: 'Interactive learning tools',
        description:
          'CodeMirror editors, a browser TypeScript checker, workers, and sandboxed previews let each lesson use an appropriate local practice surface.',
        items: [
          'CodeMirror 6',
          'TypeScript browser compiler',
          'Web Workers',
          'Sandboxed iframe',
          'Zod',
        ],
      },
    ],
    caseStudy: [
      {
        title: 'Course placement',
        body: 'Rancode Lab is a bilingual programming platform. Learners can start with logic and web fundamentals or use readiness checks to begin at a later stage without completing every earlier lesson.',
        isPlaceholder: false,
      },
      {
        title: 'Course catalog',
        body: 'The core frontend path has nine stages and 272 lessons. Optional Tailwind CSS and Vibe Coding paths add 45 and 24 lessons, for 341 lessons across the published catalog.',
        isPlaceholder: false,
      },
      {
        title: 'Lesson format & assessment',
        body: 'Lessons use Explain, Visualize, Play, Challenge, and Recap sections. Checkpoints are readiness samples, not certifications. Learners review projects against criteria and can reopen, revise, and download their work.',
        isPlaceholder: false,
      },
      {
        title: 'Interactive practice environments',
        body: 'Practice tools include a three-file web workspace and DOM inspector, JavaScript console, TypeScript type inspector, React preview, local Tailwind compiler, and Vibe Coding prompt builder. The Next.js capstone simulates routes and loading, empty, success, and error states rather than running a Next.js server.',
        isPlaceholder: false,
      },
      {
        title: 'Languages & progress storage',
        body: 'English and Indonesian share the same lesson and answer contracts. Lesson progress, challenge and checkpoint results, onboarding choice, drafts, and project reviews are validated and stored in the current browser; there is no account or cloud sync.',
        isPlaceholder: false,
      },
    ],
    gallery: [
      {
        src: '/images/project/rancode-lab/overview.jpg',
        alt: 'Rancode Lab homepage with an editable coding example and browser preview.',
        label: 'Learning platform',
      },
      {
        src: '/images/project/rancode-lab/curriculum.jpg',
        alt: 'Rancode Lab frontend curriculum with nine stages and learner starting-point guidance.',
        label: 'Frontend curriculum',
      },
      {
        src: '/images/project/rancode-lab/lab.jpg',
        alt: 'Rancode Lab browser playground with a coding example, instructions, and run control.',
        label: 'Browser coding lab',
      },
    ],
    gallerySlots: 3,
  },
  ranledger: {
    capabilities: [
      {
        title: 'Local finance first, cloud by choice',
        description:
          'The app can be used with browser-local data and offline support. Accounts and cross-device sync are optional; creating an account does not silently upload a local ledger. Shared spaces use owner, editor, and reader roles.',
      },
      {
        title: 'A ledger that accounts for assets and obligations',
        description:
          'Cash, bank, e-wallet, savings, credit card, PayLater, and loan accounts contribute to a net position. Transfers preserve the combined balance, and credit purchases and their later payments are modeled separately so the same expense is not counted twice.',
      },
      {
        title: 'Plan ahead without silently posting transactions',
        description:
          'Budgets, recurring entries, savings goals, future events, debt payments, and 30- or 90-day projections appear alongside daily transactions. A forecast simulation becomes a recorded transaction only after the user confirms it.',
      },
      {
        title: 'Reconcile and report with a reviewable trail',
        description:
          'CSV imports provide column mapping, duplicate checks, preview, and an atomic write. Reconciliation matches statement rows to existing records, keeps batch history, and can undo an untouched batch. Reports can be filtered and exported to Excel.',
      },
      {
        title: 'Recover financial data deliberately',
        description:
          'JSON and Excel backups support preview, merge or replacement, validation, and restore checks. A passphrase-encrypted .rledger backup is available for users who need an encrypted export; ordinary JSON and Excel backups are not encrypted.',
      },
    ],
    technicalStack: [
      {
        title: 'Offline-capable application',
        description:
          'The React client stores the local ledger in IndexedDB and prepares the production app for offline use. Feature routes and heavier Excel tooling load as needed.',
        items: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'Dexie / IndexedDB', 'PWA'],
      },
      {
        title: 'Optional cloud service and data tools',
        description:
          'When cloud is configured and chosen, a Hono API uses PostgreSQL; PGlite supports local development. Zod validates data while SheetJS supports workbook import and export.',
        items: ['Hono', 'PostgreSQL', 'PGlite for local development', 'Zod', 'SheetJS'],
      },
    ],
    caseStudy: [
      {
        title: 'Data ownership & offline use',
        body: 'Ranledger is an Indonesian personal finance app that stores the default ledger in the current browser and supports offline use. Accounts and cloud sync are optional; creating an account does not automatically upload a local ledger.',
        isPlaceholder: false,
      },
      {
        title: 'Accounts, assets & obligations',
        body: 'Accounts cover cash, banks, e-wallets, and savings; credit cards, PayLater, and loans are tracked as obligations. Transfers preserve the combined balance. Credit purchases and later payments are modeled separately to avoid counting an expense twice.',
        isPlaceholder: false,
      },
      {
        title: 'Budgets & cash-flow forecasts',
        body: 'Monthly budgets, recurring schedules, savings goals, future-dated entries, debt plans, and due dates feed a calendar and 30- or 90-day projection. A what-if simulation remains a preview until confirmed as a transaction.',
        isPlaceholder: false,
      },
      {
        title: 'CSV import & reconciliation',
        body: 'CSV import supports saved column mappings, format-aware amounts and dates, duplicate flags, category rules, preview, and atomic writes. Reconciliation records batch history and allows undo only while imported records remain untouched.',
        isPlaceholder: false,
      },
      {
        title: 'Reports, backup & restore',
        body: 'Reports connect period summaries with wallets, categories, budgets, and source transactions, with Excel export. JSON and Excel backup flows support merge or replace previews and validation. A separate .rledger format encrypts a backup with a passphrase.',
        isPlaceholder: false,
      },
    ],
    gallery: [
      {
        src: '/images/project/ranledger/overview.jpg',
        alt: 'Ranledger dashboard in a fresh workspace, with local storage and a zero-balance summary.',
        label: 'Finance overview',
      },
      {
        src: '/images/project/ranledger/wallets.jpg',
        alt: 'Ranledger wallet page showing local accounts and the combined balance.',
        label: 'Wallets and transfers',
      },
      {
        src: '/images/project/ranledger/reports.jpg',
        alt: 'Ranledger financial report page with period, asset, obligation, and cash-flow summaries.',
        label: 'Financial reports',
      },
    ],
    gallerySlots: 3,
  },
  ranfession: {
    capabilities: [
      {
        title: 'A letter with a clear beginning and end',
        description:
          'The recipient first sees a single-screen invitation. After choosing Begin, the experience becomes a native scrolling story with varied chapter layouts, a confession reveal, and a closing with a read-again action.',
      },
      {
        title: 'One deliberate reveal action',
        description:
          'The main confession remains visually unrevealed until the reader chooses Reveal. The closing becomes available after that action and does not ask the recipient to reply or make a yes-or-no choice.',
      },
      {
        title: 'Motion and sound stay optional',
        description:
          'GSAP adds light entrance motion as chapters enter view. Reduced-motion settings shorten or remove that motion, while optional procedural ambience is generated in the browser and starts off by default.',
      },
      {
        title: 'A small, explicit content model',
        description:
          'The story is authored from typed scene data for invitation, narrative, confession, and closing sections. Runtime validation keeps the required scene order intact and provides a safe fallback for invalid content.',
      },
    ],
    technicalStack: [
      {
        title: 'Story interface',
        description:
          'A static React application renders the configurable story and keeps the reading flow in the browser without a router-backed service or account system.',
        items: ['React 19', 'TypeScript', 'Vite'],
      },
      {
        title: 'Motion and content safeguards',
        description:
          'GSAP and ScrollTrigger support chapter entrances, Zod validates scene configuration, and Web Audio API creates optional ambient sound locally.',
        items: ['GSAP', 'ScrollTrigger', 'Zod', 'Web Audio API', 'Reduced motion'],
      },
    ],
    caseStudy: [
      {
        title: 'Product format',
        body: 'Ranfession is a static digital letter shared by URL. The experience is built from authored copy, typography, chapter layouts, and reader-controlled interaction; it has no inbox or account system.',
        isPlaceholder: false,
      },
      {
        title: 'Reader-controlled interaction',
        body: 'Begin moves from the invitation into the scroll-based chapters. The main confession stays hidden until the reader chooses Reveal; the closing appears after that action and does not ask for a reply.',
        isPlaceholder: false,
      },
      {
        title: 'Motion & reduced motion',
        body: 'Editorial, fragment, quotation, realization, and quiet layouts give chapters different reading rhythms. GSAP animates chapter entrances; reduced-motion settings keep the experience readable without long animation.',
        isPlaceholder: false,
      },
      {
        title: 'Optional browser audio',
        body: 'Ambient sound is generated locally through the Web Audio API and is off by default. The experience does not depend on downloaded music, video, or photography, and remains complete when audio is unavailable.',
        isPlaceholder: false,
      },
      {
        title: 'Privacy & access model',
        body: 'Anyone with the URL can open the public static site. It has no login, database, reply form, chat, recipient analytics, or read receipt.',
        isPlaceholder: false,
      },
    ],
    gallery: [
      {
        src: '/images/project/ranfession/overview.jpg',
        alt: 'Ranfession opening invitation screen',
        label: 'Opening invitation',
      },
    ],
    gallerySlots: 1,
  },
  ranbience: {
    capabilities: [
      {
        title: 'A catalog built around small scenes',
        description:
          'The 50-scene collection spans botanical, creature, weather, water, and light studies. Search, category filters, and scale, mood, or motion controls help visitors find a scene by feel.',
      },
      {
        title: 'Live motion with a few useful controls',
        description:
          'Each SVG scene has its own preview and supports playback, replay, reduced motion, speed, and intensity controls without turning the page into a general animation editor.',
      },
      {
        title: 'Source that can leave the catalog',
        description:
          'Visitors can copy or download a complete single-file HTML scene or the split HTML, CSS, and JavaScript version. The exported scene uses the same generator and runtime as its preview.',
      },
      {
        title: 'A separate 3D collection',
        description:
          'The 3D catalog presents the same scene collection through interactive Three.js views. It is a live viewing experience; source export is available for the SVG collection.',
      },
    ],
    technicalStack: [
      {
        title: 'Catalog and scene rendering',
        description:
          'A static React app renders authored SVG scenes, filterable collections, and route-level previews. Scene metadata and rendered output use a shared schema and generator.',
        items: ['React', 'TypeScript', 'Vite', 'SVG', 'GSAP'],
      },
      {
        title: 'Preview, controls, and export',
        description:
          'Preview stages mount near the viewport, pause when hidden, and expose validated playback and parameter controls. Code viewing and formatting load only when needed.',
        items: [
          'GSAP 3',
          'Three.js collection',
          'Zod',
          'CodeMirror',
          'Clipboard and download APIs',
        ],
      },
    ],
    caseStudy: [
      {
        title: 'A collection with a clear use',
        body: 'Ranbience is a browser-based collection of 50 ambient SVG scenes for the web. Its catalog groups botanical, creature, weather, water, and light studies so visitors can browse by subject and motion feel.',
        isPlaceholder: false,
      },
      {
        title: 'Preview before taking the source',
        body: 'A scene page shows the animation alongside speed and intensity controls. Visitors can pause or adjust the motion before copying or downloading a single HTML file or the split source files.',
        isPlaceholder: false,
      },
      {
        title: 'The preview and export share one source',
        body: 'The app generates both its live preview and exported scene from the same drawing and runtime logic. This keeps the reusable output aligned with what visitors tested in the browser.',
        isPlaceholder: false,
      },
      {
        title: 'A second, 3D viewing mode',
        body: 'A separate catalog lets visitors look around interactive Three.js versions of the scenes. The 3D edition is a live experience; downloadable source remains part of the SVG collection.',
        isPlaceholder: false,
      },
    ],
    gallery: [
      {
        src: '/images/project/ranbience/overview.jpg',
        alt: 'Ranbience home page showing its ambient scene preview and navigation to the 2D and 3D collections.',
        label: 'Scene preview',
      },
      {
        src: '/images/project/ranbience/collection.jpg',
        alt: 'Ranbience 2D collection with search, categories, filters, and scene cards.',
        label: '50-scene catalog',
      },
      {
        src: '/images/project/ranbience/scene.jpg',
        alt: 'Ranbience Butterfly Pause scene with a live SVG preview and speed and intensity controls.',
        label: 'Adjustable SVG scene',
      },
      {
        src: '/images/project/ranbience/spatial.jpg',
        alt: 'Ranbience 3D collection with interactive scene cards and category filters.',
        label: '3D scene collection',
      },
    ],
    gallerySlots: 4,
  },
  'rand-studio': {
    capabilities: [
      {
        title: 'Services defined by their scope',
        description:
          'The site explains website production, UI/UX design, visual materials, and project guidance, then routes visitors to service details instead of promising vague, one-size-fits-all outcomes.',
      },
      {
        title: 'A brief that helps both sides get specific',
        description:
          'The project brief asks about the visitor’s context and needs, then prepares a readable summary in the browser. It can be copied or opened as an email draft when a contact address is configured; it never submits automatically.',
      },
      {
        title: 'Proof without invented client results',
        description:
          'The site explains process and working principles directly. It does not present fabricated client metrics, testimonials, pricing, or delivery guarantees as proof.',
      },
    ],
    technicalStack: [
      {
        title: 'Studio site and service pages',
        description:
          'A React SPA composes the studio home page, service index and details, founder profile, FAQs, and brief flow from centralized data and shared sections.',
        items: ['React 19', 'TypeScript', 'Vite 8', 'React Router', 'Tailwind CSS 4'],
      },
      {
        title: 'Motion and page behavior',
        description:
          'GSAP supports reveal behavior while Lenis handles smooth scrolling. The brief remains client-side and creates a copy or email-draft handoff only after the visitor chooses it.',
        items: ['GSAP', 'Lenis', 'Lucide React'],
      },
    ],
    caseStudy: [
      {
        title: 'An independent digital studio',
        body: 'RandStudio is Randhu’s independent studio site. It frames website and design work around clear direction and delivery, with separate service pages for visitors comparing what kind of help fits their project.',
        isPlaceholder: false,
      },
      {
        title: 'Scope before a proposal',
        body: 'Visitors can prepare a project brief from the site. The flow stays in the browser, produces a readable summary, and lets the visitor copy it or open an email draft when the public contact address is configured.',
        isPlaceholder: false,
      },
      {
        title: 'The studio site is its own proof',
        body: 'The pages explain the working approach, services, and next step without substituting fictional case studies or client outcomes for evidence.',
        isPlaceholder: false,
      },
    ],
    gallery: [
      {
        src: '/images/project/rand-studio/overview.jpg',
        alt: 'RandStudio homepage with its independent-studio introduction and website mockup.',
        label: 'Studio homepage',
      },
      {
        src: '/images/project/rand-studio/services.jpg',
        alt: 'RandStudio service index listing website, UI/UX, visual design, and project guidance offers.',
        label: 'Service index',
      },
      {
        src: '/images/project/rand-studio/brief.jpg',
        alt: 'RandStudio project brief introduction explaining its browser-based fit-check flow.',
        label: 'Project brief',
      },
    ],
    gallerySlots: 3,
  },
  'rand-signature-template': {
    capabilities: [
      {
        title: 'Project context before implementation',
        description:
          'A project brief and local guides identify the product’s audience, identity, architecture, and quality requirements before a starter becomes a separate product.',
      },
      {
        title: 'Ownership stays close to the code',
        description:
          'Source-area guides and a modular page structure show where routes, layout, UI primitives, features, and styles belong without imposing empty folders on every derived project.',
      },
      {
        title: 'A small, repeatable quality gate',
        description:
          'The repository check combines formatting, documentation links, lint, TypeScript, and a production build. It does not claim to verify a derived product’s runtime behavior or deployment.',
      },
    ],
    technicalStack: [
      {
        title: 'Starter application',
        description:
          'A lightweight React SPA provides the shared shell, sample home page, a setup checklist, semantic tokens, and a not-found route.',
        items: ['React', 'TypeScript', 'Vite', 'React Router', 'Tailwind CSS 4'],
      },
      {
        title: 'Repository workflow',
        description:
          'Local instructions, source-area guides, project recipes, and CI support setup. The starter does not include a backend, account, database, or product test runner.',
        items: ['Oxlint', 'Prettier', 'TypeScript', 'Node test runner', 'GitHub Actions'],
      },
    ],
    caseStudy: [
      {
        title: 'A starting point for separate products',
        body: 'Randhu Project Signature is a reusable starter for Randhu’s React web projects and AI-assisted engineering workflow. Each project derived from it defines its own audience, product identity, domain, and runtime boundaries.',
        isPlaceholder: false,
      },
      {
        title: 'Guidance next to the source',
        body: 'The repository pairs a small sample application with local guides, a real project brief, setup recipes, and workflow notes. The home checklist makes the first identity and structure changes visible.',
        isPlaceholder: false,
      },
      {
        title: 'The starter keeps its scope small',
        body: 'It provides a shared application shell and quality checks, but no account, database, analytics, or application test runner. Deployment settings and template-repository configuration are not implied by the source files.',
        isPlaceholder: false,
      },
    ],
    gallery: [
      {
        src: '/images/project/rand-signature-template/overview.jpg',
        alt: 'Randhu Project Signature starter home page with the product setup checklist.',
        label: 'Starter and setup checklist',
      },
    ],
    gallerySlots: 1,
  },
}

export function getProjectDetails(slug: string): ProjectDetails | undefined {
  return detailsBySlug[slug]
}

export function getProjectBySlug(slug: string): Project | undefined {
  const summary = projects.find(project => project.slug === slug)
  const details = getProjectDetails(slug)

  return summary && details ? { ...summary, ...details } : undefined
}
