# Architecture

Rand Dev is a Vite-powered React single-page application. It presents one portfolio with multiple client routes, a shared application shell, static content modules, and public assets. There is no application API, database, form endpoint, or user account.

## Runtime shape

```text
Browser
  React Router
    RootLayout ── navigation, footer, page loading boundary, scroll behavior
      route page ── home, about, projects, project detail, contact, or 404
        sections and common components
          static typed data + public media
```

`src/App.tsx` registers the route tree. The home page loads directly; non-home pages are lazy loaded and rendered within `RootLayout`. Keep that split when adding a substantial route so the first portfolio view stays lean.

| Route             | Purpose                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------- |
| `/`               | Hero, about summary, expertise, selected work, process, tools, and contact call to action |
| `/about`          | Working principles, capabilities, profile facts, and journey timeline                     |
| `/projects`       | Project index and transparent upcoming-work slots                                         |
| `/projects/:slug` | Individual project case study, capabilities, technical stack, and gallery                 |
| `/contact`        | Direct contact channels, public social links, CV, and FAQ                                 |
| `*`               | Not-found state                                                                           |

The home route also uses in-page anchors: `#home`, `#about`, `#skills`, and `#portfolio`. Navigation data and section IDs must change together.

## Source boundaries

| Area                           | Responsibility                                                                                            |
| ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `src/data/`                    | Typed copy, portfolio records, navigation, contact configuration, and explicit placeholders               |
| `src/types/`                   | Contracts for content modules and page consumers                                                          |
| `src/pages/`                   | Route-level composition and route-specific behavior                                                       |
| `src/components/layout/`       | Shared navbar, mobile navigation, footer, and root layout                                                 |
| `src/components/sections/`     | Home and feature-section composition                                                                      |
| `src/components/common/`       | Reusable nonvisual or cross-page behavior such as placeholders, social links, errors, and scroll handling |
| `src/components/ui/`           | Reusable primitives and variants                                                                          |
| `src/hooks/`                   | Focused interaction and page metadata behavior                                                            |
| `src/styles/design-system.css` | Theme tokens, shared utilities, responsive foundations, and motion defaults                               |
| `public/`                      | Public fonts, profile media, project screenshots, and the CV asset                                        |

Use the `@/` alias for `src` imports. Keep content in a data module when a component already expects data; do not bury publishable facts in presentation markup.

## Data flow

The application reads compile-time content and optional public environment values:

```text
data modules + optional VITE_ values
              ↓
     typed page/section props
              ↓
         rendered route
              ↓
       public browser output
```

`src/data/site.ts` is the central boundary for public contact and social configuration. It uses harmless placeholders or `null` when a public destination is missing. Components must preserve that behavior: a missing value is an honest placeholder, not a reason to invent a URL.

## Extension guidance

| Change                          | Preferred location                                                                                        |
| ------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Add a project case study        | `src/data/projects.ts`, its contract in `src/types/project.ts`, and assets under `public/images/project/` |
| Add a home section              | A section component plus the home page and synchronized navigation/anchor data                            |
| Add a portfolio route           | `src/App.tsx`, a lazy page module, and navigation/data only when the route is public                      |
| Add reusable interface behavior | Existing `components/common`, `components/ui`, or a focused hook after checking current patterns          |
| Change visual foundations       | `src/styles/design-system.css`, then consumers                                                            |

Avoid duplicating portfolio facts across pages, coupling page layout to environment parsing, or making an interactive-looking placeholder behave like a live action.
