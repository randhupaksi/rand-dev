# Rand Dev Portfolio — Project Instructions

## Operational context

Before substantial analysis or implementation, read:

1. `C:\Users\MyBook Hype AMD\Documents\DevBrain\runtime\full-context.md`
2. This file in full
3. The files relevant to the active task, including their consumers and shared dependencies

The user's latest explicit request overrides preferences in this document. Platform and safety policy remain highest priority.

## Project identity

`rand-dev` is the personal portfolio of **Randhu Paksi Membumi**, an SMK PPLG class 11 student and Creative Web Developer. The portfolio should communicate a combination of:

- frontend and web-development capability;
- strong visual judgment and UI/UX awareness;
- structured thinking for flows, systems, and dashboards;
- controlled interaction and motion;
- professional potential without overstating experience or inventing achievements.

The primary audience is recruiters, internship or collaboration partners, potential clients, and other developers. The primary user journey is:

1. understand who Randhu is;
2. recognize his positioning and strengths;
3. inspect selected work and process;
4. continue to CV, project details, social profiles, or contact.

This is a personal portfolio, not an admin dashboard. The “enterprise” influence should appear through precision, hierarchy, consistency, and restrained polish—not through dense dashboard chrome.

## Current product structure

The application is a multi-page SPA routed with React Router (`src/App.tsx`):

- `/` — home: hero, about summary, expertise, selected projects, process, tools, final CTA;
- `/about` — editorial intro, working principles, skill areas, journey timeline (draft slots);
- `/projects` — full project list plus an open "next project" slot;
- `/projects/:slug` — per-project case study (overview, challenge, approach, outcome, gallery);
- `/contact` — contact channels, socials, CV, validated contact form, FAQ;
- `*` — 404 page.

Non-home pages are lazy-loaded; `RootLayout` owns navbar, footer, and the Suspense fallback. Home sections still use in-page anchors (`#home`, `#about`, `#skills`, `#portfolio`); keep IDs and links synchronized whenever sections change.

Content is intentionally separated from presentation:

- `src/data/` contains all copy, project, contact, and navigation data — including the centralized placeholder system (personal data reads from `.env`, see `.env.example`);
- `src/types/` contains content contracts;
- `src/pages/` contains page composition;
- `src/components/layout/` contains navbar, footer, and root layout;
- `src/components/sections/` contains home section composition;
- `src/components/common/` contains reusable primitives (`MediaPlaceholder`, `DraftBadge`, `SocialLinks`, `ErrorBoundary`, `ScrollToTop`);
- `src/hooks/` contains `useReveal` and `usePageMeta`;
- `src/components/ui/` contains reusable UI primitives;
- `src/styles/design-system.css` is the visual-token and shared-utility source of truth;
- `src/globals.css` owns global imports and local Geist font declarations;
- `public/` contains static assets such as fonts and the profile portrait.

Placeholder policy: unverified factual claims (experience, periods, outcomes, links) stay as explicit placeholders marked with Draft/Placeholder/Coming Soon treatments; personal contact data is only ever real when supplied through environment variables. Never invent destinations or achievements when filling these in.

Prefer the `@/` alias for imports from `src`.

## Technical stack

- Vite 8
- React 19
- React Router for multi-page routing
- TypeScript with strict unused-code checks
- Tailwind CSS 4 through `@tailwindcss/vite`
- Base UI for accessible primitives
- Class Variance Authority, `clsx`, and `tailwind-merge` for variants/classes
- Lucide React for interface icons
- GSAP and Framer Motion for purposeful motion
- Lenis is available for smooth scrolling if a task genuinely needs it
- React Hook Form and Zod are available for future validated forms
- Oxlint for static linting
- npm with `package-lock.json`; do not switch package managers

Do not add a dependency when the existing stack or a small local implementation solves the requirement cleanly.

## Visual direction

The approved direction is **dark purple editorial portfolio with enterprise-level precision**. The supplied hero and about references are the primary visual evidence.

### Core character

- Dark, near-black plum canvas rather than neutral gray or pure black.
- Purple is the signature accent, used selectively for identity, emphasis, icons, active states, and primary actions.
- Large editorial typography creates personality; supporting UI remains restrained and systematic.
- Surfaces are spacious, quiet, and defined mostly by subtle borders and tonal separation.
- The design should feel refined, intentional, technical, and personal.
- The result must not feel like a generic SaaS landing page, neon gaming site, or template portfolio.

### Color and surfaces

- Use semantic tokens from `src/styles/design-system.css`; do not scatter new hard-coded color systems across components.
- Default theme is `purple-enterprise` and is set on the root HTML element.
- Preserve the near-black purple background, off-white foreground, lavender muted text, and controlled violet accent.
- Use gradients as quiet depth or emphasis, not decoration on every surface.
- Panels should use low-contrast fills, thin translucent borders, and restrained shadows.
- Glows must be localized and soft. Avoid large saturated neon halos.
- Do not introduce unrelated accent colors unless they carry a clear semantic state.

### Typography

- Geist Sans is the primary typeface; Geist Mono is reserved for technical metadata where useful.
- Hero typography may be oversized, tightly tracked, and multi-line, with a clear contrast between introduction, name, role, and body copy.
- Use off-white for primary text and lavender-gray for supporting copy.
- Gradient or purple text is reserved for key identity words and role emphasis.
- Eyebrows and metadata use small uppercase text with deliberate tracking.
- Keep Indonesian body copy natural and direct. Short English labels such as “About Me” or “Creative Web Developer” are acceptable when consistent with the established voice.
- Maintain readable line lengths and avoid shrinking important copy to create space.

### Layout and composition

- Use a centered wide page shell with generous but responsive horizontal padding.
- Desktop hero uses an asymmetric two-column composition: strong textual hierarchy on the left and portrait-led visual storytelling on the right.
- The portrait is a primary brand asset. Keep it crisp, naturally proportioned, and integrated into circular/radial framing without obscuring the face.
- Floating insight cards around the portrait communicate visual sense, interaction, standards, and focus. They should remain secondary to the person and must not become visual clutter.
- Major sections should have generous vertical rhythm and clear boundaries.
- Large rounded containers are appropriate for navigation and featured sections; smaller cards should use a related radius family.
- The About section can use a centered editorial introduction followed by a structured capability row and a clear continuation CTA.
- Avoid repetitive “card grids everywhere.” Vary composition while retaining the same token system and visual language.

### Borders, radius, and depth

- Borders are thin and subtle, typically translucent lavender or white.
- Radius is generous but controlled: large shells and feature panels receive larger radii; buttons, chips, and icon controls use pills or compact rounded forms.
- Depth comes from tonal layers, spacing, overlap, and limited shadow—not heavy glassmorphism.
- Do not add blur indiscriminately. Backdrop blur is appropriate only where layering needs separation.

### Icons and controls

- Use Lucide icons with consistent stroke weight and optical size.
- Icons support meaning and must not replace clear labels for important actions.
- Circular icon controls must have accessible names, visible hover/focus feedback, and adequate touch targets.
- Primary buttons use the violet brand treatment; secondary buttons are quieter outlined or tonal controls.
- Every control that looks interactive must perform a real action or be explicitly implemented as a disabled/non-interactive visual—not a dead button.

### Motion

- Motion should feel controlled, smooth, and premium: short reveal sequences, subtle floating depth, hover lift, and continuity between states.
- Use GSAP or Framer Motion according to existing local patterns; do not mix both inside one interaction without a concrete reason.
- Animate `transform` and `opacity` where possible.
- Respect `prefers-reduced-motion`; important content must never depend on animation to become usable.
- Avoid excessive parallax, looping motion across many elements, dramatic spring effects, or animations that delay reading and navigation.

## Responsive direction

Responsive behavior is a deliberate recomposition, not a uniformly scaled desktop layout.

- Preserve content priority: identity and value proposition first, portrait second, supporting floating cards after that.
- Collapse desktop columns cleanly on tablet/mobile.
- Floating hero cards may be repositioned, simplified, reduced, or hidden when they compete with the portrait or copy.
- Keep headline wrapping intentional and prevent isolated words or clipped text.
- Navigation must remain usable on touch devices; a menu icon must open a working menu when desktop links are hidden.
- Maintain minimum practical touch targets around 44px.
- Prevent horizontal overflow from oversized type, absolute elements, glows, and decorative rings.
- Verify at representative mobile, tablet, laptop, and wide-desktop widths.

## UX and accessibility standards

- Use semantic landmarks and heading order.
- All keyboard-operable elements require a visible focus state.
- Decorative icons should be hidden from assistive technology; meaningful icon-only controls require `aria-label`.
- Images require accurate alt text; decorative images should use empty alt text.
- Preserve readable contrast for muted text, borders, and button labels against dark surfaces.
- Anchor navigation should land on the correct section without content being hidden behind the sticky header.
- Downloads, social links, project links, and contact actions must use real destinations supplied by project data or environment configuration.
- Do not invent CV files, project URLs, social accounts, testimonials, metrics, clients, or work history.
- Loading, error, empty, submit, success, and disabled states must be designed when the related feature requires them.

## Content rules

- Randhu's current positioning is “Creative Web Developer,” with emphasis on web development, UI thinking, interactive presentation, and structured product/dashboard work.
- Keep claims honest and appropriate to a student portfolio.
- Project descriptions should explain the problem, Randhu's contribution, stack, and outcome when real information is available.
- Prefer specific, concise copy over generic claims such as “passionate developer” without evidence.
- Content changes belong in `src/data/` when the component already consumes a content object.
- Update the corresponding type when the content contract genuinely changes.

## Engineering rules

- Inspect existing patterns before creating new helpers, hooks, primitives, or abstractions.
- Keep components focused, but do not fragment simple one-use markup into unnecessary files.
- Preserve content/presentation separation.
- Use semantic tokens and established utilities before adding one-off values. One-off values are acceptable for deliberate art direction, especially hero composition, but should not create a parallel design system.
- Keep TypeScript types explicit at data and component boundaries.
- Remove unused imports, props, and dead branches introduced by changes.
- Do not rewrite stable sections merely to impose a different personal coding style.
- Do not edit `rand-dev-next` while working on this Vite application unless the user explicitly expands scope.
- Do not change environment contracts, deployment configuration, Git history, or remote state without explicit authorization.
- Never expose secrets or real private data. `.env.example` contains names/placeholders only.

## UI implementation workflow

For meaningful UI work:

1. identify the section goal, primary action, and relevant data;
2. inspect the current component, design tokens, neighboring sections, and responsive behavior;
3. define the hierarchy and interaction before styling details;
4. implement using the existing visual language and token system;
5. verify normal, hover, focus, reduced-motion, and responsive states;
6. inspect the real page in a browser when runtime tooling is available;
7. review the final diff for accidental content, behavior, or design-system drift.

The reference screenshot establishes direction, not a requirement for pixel-for-pixel preservation. Improve composition when needed, but retain its defining character and explain material deviations.

## Validation commands

Run commands from the `rand-dev` directory.

```bash
npm run lint
npm run build
npm run dev
npm run preview
```

- `npm run lint` is the baseline static check.
- `npm run build` runs TypeScript project build and the production Vite build.
- For visual changes, lint/build are insufficient: inspect the page at relevant viewport sizes and check the browser console.
- Existing unrelated warnings should be reported separately from regressions introduced by the active task.

## Current implementation notes

- Every visible control performs a real action or shows an honest disabled/coming-soon state; placeholder destinations (CV, socials, demo/repo links) activate automatically once their environment variables or data fields are filled.
- The contact form runs in clearly-labeled demo mode until `VITE_CONTACT_ENDPOINT` is configured (POST JSON `{ name, email, subject, message }`).
- Keep navigation hrefs synchronized with actual section IDs on home. The canonical portfolio section ID is currently `#portfolio`.
- The shared button module currently triggers an Oxlint Fast Refresh warning because it exports both the component and variant constant. Do not describe this existing warning as a new regression unless a task changes it.
- The root README documents the product, routes, and the placeholder replacement workflow.

## Completion report

After implementation, report:

- the user-visible outcome;
- files changed;
- behavior preserved or intentionally changed;
- validation performed and its actual result;
- assumptions, remaining placeholders, and manual checks still needed.

Do not commit or push unless the user explicitly requests it.
