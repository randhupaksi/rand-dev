# Content and publishing

This portfolio represents a real person and real work. Its credibility depends on publishing only verified claims and on making incomplete information visibly incomplete.

## Source of truth

| Content                                                         | Primary location         |
| --------------------------------------------------------------- | ------------------------ |
| Name, role, availability, CV, social links, and contact channel | `src/data/site.ts`       |
| Hero message and supporting presentation                        | `src/data/hero.ts`       |
| Home-section content                                            | `src/data/home.ts`       |
| About-page material                                             | `src/data/about.ts`      |
| Navigation labels and targets                                   | `src/data/navigation.ts` |
| Projects and case studies                                       | `src/data/projects.ts`   |
| Content shape                                                   | `src/types/`             |

Use data objects rather than hard-coded JSX for content the owner may revise, publish, hide, or audit later.

## Claim policy

Only publish a factual achievement, role, customer, metric, date, destination, or outcome when it has been verified. For material that is planned or incomplete, use the established draft, placeholder, or coming-soon treatment.

Do not fabricate:

- work history, client names, testimonials, or project impact;
- GitHub repositories, demos, social profiles, or CV destinations;
- timeline dates, technology usage, screenshots, or implementation ownership.

Project case studies should explain a real problem, Randhu’s actual contribution, the stack where relevant, and an outcome that can be supported. Prefer precise claims over broad self-description.

## Project records

Project data uses a stable `slug` for `/projects/:slug`. Treat the slug as a public URL contract. Rename it only with an explicit decision to change links.

Each published project should keep these parts aligned:

1. Summary, category, period, and status.
2. Thumbnail and gallery media with accurate alt text.
3. Capabilities, technical-stack explanations, and case-study narrative.
4. Demo and repository links that are real, or `null` where they are intentionally unpublished.
5. Placeholder state for unverified dates, outcomes, or future material.

Place media under `public/images/project/<project-slug>/` so its public path and its source record remain easy to trace. Do not add decorative screenshots that imply a feature or ownership claim the portfolio cannot support.

## Public environment values

Copy `.env.example` to `.env` for local overrides. All `VITE_` values are bundled into browser code, so they may contain only intentionally public information.

| Variable                | Published effect                               |
| ----------------------- | ---------------------------------------------- |
| `VITE_EMAIL`            | Enables the email address and `mailto:` action |
| `VITE_CV_URL`           | Replaces the bundled CV path                   |
| `VITE_SOCIAL_GITHUB`    | Enables GitHub link                            |
| `VITE_SOCIAL_INSTAGRAM` | Overrides the Instagram profile link           |
| `VITE_SOCIAL_LINKEDIN`  | Overrides the LinkedIn profile link            |
| `VITE_SOCIAL_DRIBBBLE`  | Enables Dribbble link                          |

Never put passwords, tokens, private contact details, or API keys in these variables. Keep `.env.example`, `src/data/site.ts`, and the README synchronized whenever this contract changes.

## Publishing review

Before publishing a content update, check:

- all links point to their intended public destinations;
- project media has useful alt text and correct public paths;
- placeholders clearly signal unfinished facts rather than looking like completed work;
- mobile line wrapping leaves headings and calls to action legible;
- content changes have not broken a route slug or home anchor;
- the change does not expose nonpublic personal information.
