# Rand Dev

Rand Dev is Randhu Paksi Membumi's personal portfolio. It introduces his frontend and product UI work, explains his working approach, presents selected projects, and provides CV, social, and contact links. The portfolio's positioning emphasizes responsive interfaces, enterprise workflows, role-aware screens, and thoughtful interaction.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Hero, profile summary, expertise, selected project, process, tools, and contact CTA |
| `/about` | Working principles, capabilities, profile facts, and experience/journey timeline |
| `/projects` | Project index and honest draft/placeholder slots |
| `/projects/:slug` | Project overview, capabilities, technical stack, case study, and gallery |
| `/contact` | Contact channels, published social profiles, CV link, and contact FAQ; there is no submission form |
| `*` | Not-found page |

The home page is loaded directly. Other routes are lazy-loaded within the shared root layout. Home navigation anchors are `#home`, `#about`, `#skills`, and `#portfolio`; keep their links synchronized with the section IDs.

## Current project content

Project content is centralized in `src/data/projects.ts`. The current verified case study is **Citra Negara Attendance System** (`absensi-cn`), described as a production attendance platform for SMK Citra Negara Depok. Its project entry includes the live demo, stack, capabilities, case study, and local screenshots. Repository access is not published in the project data.

Personal and journey content is maintained in `src/data/site.ts`, `src/data/hero.ts`, `src/data/home.ts`, and `src/data/about.ts`. Keep factual claims, dates, links, and outcomes grounded in information that has been verified. Use the draft/placeholder system for anything that is not ready to publish.

## Contact and environment

Copy `.env.example` to `.env` when local overrides are needed. These values are optional:

| Variable | Behavior |
| --- | --- |
| `VITE_EMAIL` | Publishes an email address and `mailto:` action; otherwise the contact channel remains a placeholder |
| `VITE_CV_URL` | Overrides the CV link; defaults to the CV PDF shipped in `public/files/` |
| `VITE_SOCIAL_GITHUB` | Publishes the GitHub profile link |
| `VITE_SOCIAL_INSTAGRAM` | Overrides the built-in Instagram profile link |
| `VITE_SOCIAL_LINKEDIN` | Overrides the built-in LinkedIn profile link |
| `VITE_SOCIAL_DRIBBBLE` | Publishes the Dribbble profile link |

The Contact page is a directory of direct channels, social profiles, and the CV. It does not submit a form or send data to an API. Never put secrets in `VITE_` variables because Vite exposes them to browser code.

## Stack

- Vite 8, React 19, and TypeScript
- React Router for the SPA routes
- Tailwind CSS 4 with the semantic theme and utility source in `src/styles/design-system.css`
- GSAP for reveal and interaction motion, respecting reduced-motion preferences
- Base UI and Radix Select for accessible primitives; Lucide React for icons
- CVA, `clsx`, and `tailwind-merge` for button variants and class composition
- Oxlint for static checks; npm and the checked-in `package-lock.json`

## Source structure

```text
src/
├── components/
│   ├── common/       Reusable behavior, media placeholders, and social links
│   ├── layout/       Shared navbar, footer, mobile navigation, and root layout
│   ├── sections/     Home and feature sections
│   └── ui/           Shared interface primitives
├── data/             Copy, project content, navigation, and contact values
├── hooks/            Reveal and page metadata behavior
├── lib/              Small shared utilities
├── pages/            Route-level composition
├── styles/           Theme tokens and shared visual utilities
└── types/            Content contracts
```

Content belongs in `src/data/`; update `src/types/` when a content contract changes. Reuse the theme tokens and existing component patterns. Keep project-specific composition near its page or feature.

## Development and checks

Run from this directory:

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

`npm run build` runs TypeScript project checks followed by the Vite production build. `npm run lint` runs Oxlint.
