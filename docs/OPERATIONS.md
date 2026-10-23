# Development, delivery, and verification

## Local development

Use npm with the committed lockfile.

```sh
npm install
npm run dev
npm run lint
npm run format:check
npm run build
npm run preview
```

`npm run build` runs the TypeScript project build followed by the production Vite build. `npm run format` writes formatting changes; `npm run format:check` only checks them. `npm run check` combines lint, formatting, and build.

## Validation guidance

| Change                               | Evidence to collect                                                                        |
| ------------------------------------ | ------------------------------------------------------------------------------------------ |
| Copy, static data, or media          | Check the affected public route, links, image paths, and responsive wrapping               |
| Content contract or page composition | Run lint and build; verify expected route and fallback state                               |
| Shared UI, navigation, or motion     | Run lint and build; inspect keyboard, reduced-motion, and representative viewport behavior |
| Environment contract                 | Confirm `.env.example`, `site.ts`, README, and honest placeholder behavior agree           |
| Design-token or layout changes       | Inspect mobile, tablet, laptop, and wide desktop; check console and horizontal overflow    |

Report existing unrelated warnings separately from regressions caused by a change.

## Continuous integration

GitHub Actions runs on pull requests to `main`, pushes to `main`, and manual dispatch. The workflow uses Node 24, runs `npm ci`, then runs Oxlint, Prettier verification, and the production build. It has read-only repository contents permission and no secret requirement.

Keep the package lockfile in sync with dependency changes. Do not switch package managers as incidental maintenance.

## Static hosting

`npm run build` generates `dist/`. The portfolio uses client-side routing, so a host must serve `index.html` for routes such as `/about` and `/projects/<slug>`. `vercel.json` describes the Vercel build/output configuration and SPA fallback.

Deployment configuration, Git history, and remote state are separate from ordinary documentation or UI work. Change them only with explicit authorization.

## Public-data safety

The application has no backend, form API, or secret runtime. Any value prefixed `VITE_` is public to visitors. Verify that an environment or deployment change cannot expose private data, then update [CONTENT.md](CONTENT.md) and the root README if the public contract changes.
