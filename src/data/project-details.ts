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
        title: 'Frontend routes & feature boundaries',
        description:
          'React Router composes lazy-loaded pages, role redirects, and route-level recovery. Shared authentication, query, theme, and notification providers sit above role-specific page groups; feature services keep API calls out of the views.',
        items: [
          'React 19',
          'TypeScript 5.9',
          'Vite 8',
          'React Router 7',
          'Tailwind CSS 4',
          'Base UI + Radix Select',
          'Motion + Sonner',
          'Shared app providers',
          'Feature-based pages and services',
        ],
      },
      {
        title: 'API state, forms & reporting',
        description:
          'A shared Axios client handles transport while TanStack Query owns remote state and targeted mutation invalidation. React Hook Form and Zod validate submissions; table, chart, and PDF tools present roster and reporting data.',
        items: [
          'Axios service client',
          'TanStack Query 5',
          'React Hook Form 7',
          'Zod 4',
          'TanStack Table 8',
          'Recharts 3',
          'jsPDF + AutoTable',
        ],
      },
      {
        title: 'Go API & authorization layers',
        description:
          'Gin routes pass through middleware into domain modules. Handlers validate HTTP input; services own school rules and role scope; GORM persists the result in MySQL. Protected requests recheck the current role and session version against the database.',
        items: [
          'Go 1.26.8',
          'Gin',
          'Handlers, services, and domain modules',
          'GORM',
          'MySQL',
          'JWT session checks',
          'bcrypt',
          'go-playground/validator',
        ],
      },
      {
        title: 'Files, live support & operations',
        description:
          'Redis shares login gates, throttles, and support events across API instances. Attendance evidence uses private local storage or Cloudinary; authenticated SSE refreshes support tickets, Web Push sends notifications, and request tracing plus bounded rate controls protect API traffic.',
        items: [
          'Redis',
          'Private uploads / Cloudinary',
          'Authenticated SSE',
          'Web Push',
          'Excelize',
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
      {
        src: '/images/project/absensi-cn/staff-login.jpg',
        alt: 'Citra Negara staff portal sign-in for homeroom, subject teachers, and counselling staff.',
        label: 'Staff portal',
      },
      {
        src: '/images/project/absensi-cn/student-help-ticket.jpg',
        alt: 'Student account support form with identity and issue details for an administrator review.',
        label: 'Student account support',
      },
      {
        src: '/images/project/absensi-cn/staff-help-ticket.jpg',
        alt: 'Staff account support form with a username field and issue details for an administrator review.',
        label: 'Staff account support',
      },
      {
        src: '/images/project/absensi-cn/ticket-status-search.jpg',
        alt: 'Support ticket lookup using the access code saved when the ticket was created.',
        label: 'Ticket follow-up',
      },
      {
        src: '/images/project/absensi-cn/attendance-feature-map.jpg',
        alt: 'Attendance feature overview with photo check-in, validation, monitoring, recaps, live history, and connected data.',
        label: 'Attendance workflow',
      },
    ],
    gallerySlots: 8,
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
        title: 'App shell & learning routes',
        description:
          'React Router separates the home, lesson, playground, challenge, progress, and reference experiences. Shared layout and providers supply bilingual copy and preferences; the editor and lab runtime load only on routes that need them.',
        items: [
          'React 19',
          'TypeScript',
          'Vite',
          'React Router 7',
          'Tailwind CSS 4',
          'Route-level code splitting',
        ],
      },
      {
        title: 'Curriculum & learner state',
        description:
          'Typed lesson data drives the bilingual curriculum, examples, and challenge checks. Zod validates saved progress and settings in localStorage; when browser storage is unavailable, the app keeps the session usable with in-memory progress.',
        items: [
          'Typed curriculum and examples',
          'Zod schemas',
          'localStorage progress and drafts',
          'In-memory storage fallback',
          'Reduced-motion preference',
        ],
      },
      {
        title: 'Isolated GSAP practice lab',
        description:
          'CodeMirror edits focused JavaScript examples inside an opaque-origin iframe. Locally bundled GSAP plugins run the preview; a per-frame message token and Zod report schema return bounded diagnostics without exposing the app DOM or browser storage.',
        items: [
          'CodeMirror 6',
          'GSAP + ScrollTrigger + MotionPath',
          'Sandboxed iframe + CSP',
          'Validated postMessage protocol',
          'Runtime diagnostics and challenges',
        ],
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
      {
        src: '/images/project/ranmotion/playground.jpg',
        alt: 'RanMotion playground with a JavaScript editor beside a sandboxed live GSAP preview.',
        label: 'Live motion playground',
      },
      {
        src: '/images/project/ranmotion/challenge-board.jpg',
        alt: 'RanMotion challenge board with practice progress, module filters, and a selected animation task.',
        label: 'Animation challenges',
      },
      {
        src: '/images/project/ranmotion/learner-progress.jpg',
        alt: 'RanMotion progress view connecting lesson completion, challenge practice, and a suggested next step.',
        label: 'Learner progress',
      },
      {
        src: '/images/project/ranmotion/quick-reference.jpg',
        alt: 'RanMotion searchable reference with concise animation concepts and links to guided lessons.',
        label: 'Quick reference',
      },
      {
        src: '/images/project/ranmotion/timeline-lesson.jpg',
        alt: 'RanMotion timeline lesson with a learning outline, lesson objective, and guided explanation.',
        label: 'Timeline lesson',
      },
    ],
    gallerySlots: 8,
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
        title: 'Typed curriculum & route assembly',
        description:
          'Course content is authored as TypeScript modules across foundation, framework, and expansion paths. A build-time generator creates runtime navigation data; React Router composes lesson, course, and project routes around that catalog.',
        items: [
          'React 19',
          'TypeScript',
          'Vite',
          'React Router 7',
          'Generated course catalog',
          'Tailwind CSS 4',
        ],
      },
      {
        title: 'Browser labs & code execution',
        description:
          'Each practice surface uses a bounded runtime: JavaScript and web previews run in isolated frames, TypeScript checks in a Web Worker, and the Tailwind lab compiles utilities separately. The Next.js capstone simulates routes and data states instead of starting a Next.js server.',
        items: [
          'CodeMirror 6',
          'TypeScript browser compiler in a worker',
          'Sandboxed HTML / CSS / React previews',
          'Tailwind compiler worker',
          'Zod',
        ],
      },
      {
        title: 'Progress, search & project work',
        description:
          'Progress, drafts, checkpoint results, and language preference are validated and stored in the learner’s browser. Search indexes the local catalog, filters remain linkable in the URL, and project labs provide downloadable work plus self-review criteria without a learner account or cloud service.',
        items: [
          'Zod-validated browser storage',
          'MiniSearch',
          'URL-backed filters',
          'Downloadable project artifacts',
          'No application backend',
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
        src: '/images/project/rancode-lab/logic-learning-path.jpg',
        alt: 'Logic and Problem Solving learning path with guided concepts, stages, and progress details.',
        label: 'Logic learning path',
      },
      {
        src: '/images/project/rancode-lab/concept-library.jpg',
        alt: 'Rancode Lab concept explorer with searchable topics and a guided concept explanation.',
        label: 'Concept explorer',
      },
      {
        src: '/images/project/rancode-lab/lab.jpg',
        alt: 'Rancode Lab browser playground with a coding example, instructions, and run control.',
        label: 'Browser coding lab',
      },
      {
        src: '/images/project/rancode-lab/challenge-board.jpg',
        alt: 'Rancode Lab challenge board with a challenge list, progress, and a selected coding prompt.',
        label: 'Challenge board',
      },
      {
        src: '/images/project/rancode-lab/stage-projects.jpg',
        alt: 'Rancode Lab project index with self-reviewed projects across the learning stages.',
        label: 'Stage projects',
      },
      {
        src: '/images/project/rancode-lab/quick-reference.jpg',
        alt: 'Rancode Lab quick reference with searchable programming examples and topic filters.',
        label: 'Quick reference',
      },
    ],
    gallerySlots: 8,
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
        title: 'Application shell & feature routes',
        description:
          'The React SPA composes dashboard, wallets, transactions, budgets, planning, calendar, reports, reconciliation, backup, and settings as feature-owned screens. Shared providers expose ledger and cloud state; route and heavier workbook code load on demand.',
        items: [
          'React 19',
          'TypeScript',
          'Vite',
          'React Router 8',
          'Tailwind CSS 4',
          'Feature-oriented routes',
        ],
      },
      {
        title: 'Local ledger domain & persistence',
        description:
          'Finance rules are kept in domain modules for ledger math, planning, forecasting, validation, and sync. Dexie stores records in IndexedDB and exposes live queries; multi-record imports and restores use transactions so invalid or partial writes can be rolled back.',
        items: [
          'Dexie + IndexedDB',
          'Dexie React hooks',
          'Zod ledger schemas',
          'Domain-owned calculations',
          'Transactional restore and import',
        ],
      },
      {
        title: 'Offline use & file workflows',
        description:
          'A Vite PWA service worker prepares the application shell for offline use. CSV parsing runs in a worker; SheetJS handles workbook import and export, while JSON and encrypted .rledger backups share a validation and restore pipeline.',
        items: [
          'vite-plugin-pwa + Workbox',
          'CSV Web Worker',
          'SheetJS',
          'Web Crypto AES-GCM backup',
          'Lazy-loaded reporting tools',
        ],
      },
      {
        title: 'Optional cloud sync service',
        description:
          'The ledger remains usable without an account or server. When a user opts into cloud spaces, a Hono API syncs queued local changes with PostgreSQL, tracks access roles, and surfaces conflicts for review; PGlite supplies the local development database.',
        items: [
          'Hono API + Node adapter',
          'PostgreSQL',
          'PGlite for local development',
          'Persistent sync queue',
          'Conflict-aware merge',
        ],
      },
    ],
    caseStudy: [
      {
        title: 'Data ownership & offline use',
        body: 'RanLedger is an Indonesian personal finance app that stores the default ledger in the current browser and supports offline use. Accounts and cloud sync are optional; creating an account does not automatically upload a local ledger.',
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
        alt: 'RanLedger dashboard in a fresh workspace, with local storage and a zero-balance summary.',
        label: 'Finance overview',
      },
      {
        src: '/images/project/ranledger/wallets.jpg',
        alt: 'RanLedger wallet page showing local accounts and the combined balance.',
        label: 'Wallets and transfers',
      },
      {
        src: '/images/project/ranledger/reports.jpg',
        alt: 'RanLedger financial report page with period, asset, obligation, and cash-flow summaries.',
        label: 'Financial reports',
      },
      {
        src: '/images/project/ranledger/transactions.jpg',
        alt: 'RanLedger transaction workspace with search, filters, totals, and a clear first-entry prompt.',
        label: 'Transactions',
      },
      {
        src: '/images/project/ranledger/budget-overview.jpg',
        alt: 'RanLedger monthly budget view with period and wallet filters and a setup prompt.',
        label: 'Monthly budgets',
      },
      {
        src: '/images/project/ranledger/cashflow-calendar.jpg',
        alt: 'RanLedger 30-day cash-flow projection showing asset balance and scheduled events.',
        label: 'Cash-flow projection',
      },
      {
        src: '/images/project/ranledger/recurring-schedule.jpg',
        alt: 'RanLedger recurring transaction planner with active and paused schedules and reminder guidance.',
        label: 'Recurring schedules',
      },
      {
        src: '/images/project/ranledger/backup-restore.jpg',
        alt: 'RanLedger backup workspace with encrypted, JSON, and Excel options for local financial data.',
        label: 'Backup and restore',
      },
    ],
    gallerySlots: 8,
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
        title: 'Typed story model & reader state',
        description:
          'The story is authored as ordered, typed scene data and parsed by a Zod discriminated union before rendering. App state controls only the opening and confession reveal; chapter navigation uses browser anchors rather than a router.',
        items: [
          'React 19',
          'TypeScript',
          'Vite',
          'Zod scene validation',
          'React state + browser hash',
        ],
      },
      {
        title: 'Scroll choreography & accessibility',
        description:
          'A dedicated motion hook owns GSAP timelines and ScrollTrigger lifecycle for chapter entrances and reveal moments. A system-aware reduced-motion hook and CSS fallback keep the letter readable without animation.',
        items: ['GSAP', 'ScrollTrigger', 'Reduced-motion hook', 'Scoped animation cleanup'],
      },
      {
        title: 'Audio & browser-only boundaries',
        description:
          'Optional ambience is synthesized with Web Audio only after the reader enables it. The theme preference is the only persisted product setting; story progress is in-memory, with no account, API, database, analytics, or cross-device sync.',
        items: [
          'Web Audio API',
          'User-controlled audio',
          'localStorage for theme only',
          'No backend or persistent story state',
        ],
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
      {
        src: '/images/project/ranfession/story-opening.jpg',
        alt: 'Ranfession opening chapter introducing the letter in a split editorial reading layout.',
        label: 'Letter opening',
      },
      {
        src: '/images/project/ranfession/chapter-03.jpg',
        alt: 'Ranfession chapter presenting expandable prompts about personal interests and attention.',
        label: 'Personal details',
      },
      {
        src: '/images/project/ranfession/chapter-04.jpg',
        alt: 'Ranfession chapter inviting the reader to share their perspective in a quiet centered composition.',
        label: 'Reader perspective',
      },
      {
        src: '/images/project/ranfession/chapter-05.jpg',
        alt: 'Ranfession chapter shifting the letter from curiosity toward a more thoughtful connection.',
        label: 'A change of tone',
      },
      {
        src: '/images/project/ranfession/chapter-06.jpg',
        alt: 'Ranfession chapter using three expandable everyday scenarios to shape a possible shared future.',
        label: 'Everyday possibilities',
      },
      {
        src: '/images/project/ranfession/chapter-07.jpg',
        alt: 'Ranfession keepsake-style letter page with a reflective chapter and warm paper surface.',
        label: 'A page worth keeping',
      },
      {
        src: '/images/project/ranfession/light-reading-mode.jpg',
        alt: 'Ranfession reading experience in its alternate light theme with the same chapter layout.',
        label: 'Light reading mode',
      },
    ],
    gallerySlots: 8,
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
        title: 'Route shell & scene catalog',
        description:
          'React Router composes the home, filterable library, 3D collection, scene detail, and guide routes. Zod-backed catalog metadata keeps scene descriptions, filters, and renderer registration aligned while all page modules remain statically hosted and route-loaded.',
        items: [
          'React 19 + TypeScript',
          'Vite',
          'React Router 7',
          'Zod catalog schema',
          'URL-backed collection filters',
        ],
      },
      {
        title: 'Shared SVG renderer & motion lifecycle',
        description:
          'Scene templates share drawing helpers, metadata, and a generator used by both live previews and exported source. GSAP powers playback; preview stages mount near the viewport and pause offscreen or when the document is hidden, with reduced-motion fallbacks.',
        items: [
          'Authored SVG scenes',
          'GSAP 3.15',
          'Shared preview / export generator',
          'IntersectionObserver lifecycle',
          'Reduced-motion rendering',
        ],
      },
      {
        title: '3D studies, sandbox & source export',
        description:
          'The separate spatial collection uses Three.js for interactive 3D studies. Live scene previews run inside opaque-origin sandboxed frames with a generated CSP and token-checked, Zod-validated messages; the read-only CodeMirror viewer and formatter worker load only when requested.',
        items: [
          'Three.js',
          'Sandboxed iframe + CSP',
          'Validated postMessage protocol',
          'CodeMirror 6',
          'Web Worker formatting',
          'Clipboard + download APIs',
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
        src: '/images/project/ranbience/firefly-pocket.jpg',
        alt: 'Ranbience A Pocket of Fireflies scene page with a live animated firefly field and motion controls.',
        label: 'A Pocket of Fireflies',
      },
      {
        src: '/images/project/ranbience/rain-on-glass.jpg',
        alt: 'Ranbience Rain on Glass detail page with an animated rain scene and adjustable motion controls.',
        label: 'Rain on Glass',
      },
      {
        src: '/images/project/ranbience/moonlit-shore.jpg',
        alt: 'Ranbience Moonlit Shore scene page showing a moonlit water animation and preview controls.',
        label: 'Moonlit Shore',
      },
      {
        src: '/images/project/ranbience/spatial.jpg',
        alt: 'Ranbience 3D collection with interactive scene cards and category filters.',
        label: '3D scene collection',
      },
      {
        src: '/images/project/ranbience/midnight-meadow-3d.jpg',
        alt: 'Ranbience Midnight Meadow in the 3D collection with interactive flowers and fireflies.',
        label: 'Midnight Meadow · 3D',
      },
    ],
    gallerySlots: 8,
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
        title: 'Routes & shared page composition',
        description:
          'React Router maps the studio home, service index and detail pages, founder profile, FAQs, and project brief. Route components compose focused sections from centralized typed data, with shared layout, navigation, and UI modules above them.',
        items: [
          'React 19',
          'TypeScript',
          'Vite 8',
          'React Router 7',
          'Tailwind CSS 4',
          'Shared layout and section components',
        ],
      },
      {
        title: 'Design system & page behavior',
        description:
          'Semantic CSS tokens and shared controls define the site’s visual system. A scoped GSAP/ScrollTrigger hook handles reveal motion, Lenis coordinates smooth scrolling, and Base UI with Radix Select supplies focused accessible primitives.',
        items: [
          'Tailwind CSS 4 + CSS tokens',
          'Base UI + Radix Select',
          'GSAP + ScrollTrigger',
          'Lenis',
          'Lucide React',
        ],
      },
      {
        title: 'Client-side project brief',
        description:
          'The brief is controlled by local React state and never posts to an application API. After review, the visitor can copy a formatted summary or open a prefilled email draft when VITE_CONTACT_EMAIL is configured; neither action sends automatically.',
        items: [
          'React local state',
          'Clipboard API',
          'mailto handoff',
          'VITE_CONTACT_EMAIL',
          'No server submission',
        ],
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
        title: 'Starter runtime & source ownership',
        description:
          'The starter mounts a small React SPA with route registration, a shared shell, home setup checklist, and not-found route. Its source areas separate app wiring, pages, reusable layout/UI, optional features, and semantic styling without shipping a sample product backend.',
        items: [
          'React 19',
          'TypeScript',
          'Vite',
          'React Router 7',
          'Tailwind CSS 4',
          'Semantic CSS tokens',
        ],
      },
      {
        title: 'Documentation & quality workflow',
        description:
          'Area-level READMEs and project recipes guide extension only where a real owner exists. The quality command checks formatting, documentation links, lint, TypeScript, a focused Node test for repository tooling, and a production build; it does not test a derived product’s behavior.',
        items: [
          'Oxlint',
          'Prettier',
          'TypeScript build checks',
          'Node.js test runner for docs tooling',
          'GitHub Actions CI',
        ],
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
