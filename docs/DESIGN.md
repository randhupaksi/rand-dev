# Design system and interaction

Rand Dev is a personal editorial portfolio with enterprise-level precision. It should communicate thoughtful frontend work, visual judgement, and structured product thinking without becoming a generic dashboard or exaggerating professional experience.

## Visual character

The foundation is a dark, near-black plum canvas with controlled violet identity accents. Large editorial type gives the portfolio personality; quiet surfaces, thin translucent borders, and disciplined spacing keep the interface credible and readable.

| Foundation                   | Intended use                                                        |
| ---------------------------- | ------------------------------------------------------------------- |
| `purple-enterprise` theme    | The default root theme and semantic color source                    |
| Violet accent                | Identity, selected emphasis, primary action, and meaningful icons   |
| Lavender-muted copy          | Supporting explanation and metadata with readable contrast          |
| Soft tonal surfaces          | Panels, grouped content, and navigation separation                  |
| Geist Sans / Mono            | Editorial content and compact technical metadata respectively       |
| Localized gradients and glow | Gentle depth around important composition, never blanket decoration |

`src/styles/design-system.css` owns tokens and shared utilities. Start with its semantic variables and existing primitives before adding new arbitrary color, spacing, or radius values.

## Layout and composition

- Use a centered wide page shell with generous responsive padding.
- Treat the home hero as an asymmetric editorial composition: identity and message lead, portrait-led visual storytelling supports it.
- Keep the profile portrait crisp and recognizable. Floating insight cards reinforce skills but must not compete with the portrait or primary message.
- Build clear section rhythm. Vary composition instead of repeating cards for every content block.
- Use large rounded shells for navigation and feature panels; retain a related radius family for smaller controls.
- Preserve the product journey: understand the person, assess strengths, inspect work/process, then continue to a real contact or CV destination.

## Components and states

Use `components/ui` and established common components before inventing similar controls. Every interactive-looking element must work, link to a supplied real destination, or clearly communicate that it is unavailable or a placeholder.

| Pattern                    | Required behavior                                                                                               |
| -------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Buttons and links          | Clear primary/secondary hierarchy, hover and focus feedback, honest destination                                 |
| Icon controls              | Consistent Lucide size/stroke, accessible name, visible focus, practical touch target                           |
| Draft/placeholder content  | Explicit draft or coming-soon treatment; never resembles an active published claim                              |
| Project cards/case studies | Preserve a readable connection between context, contribution, stack, and outcome                                |
| Navigation                 | Desktop and touch navigation remain coherent; hidden desktop links need a functioning menu or alternate control |

## Motion

Motion is a refinement, not content delivery. Use the existing GSAP or Framer Motion pattern intentionally; do not mix animation systems in one interaction without a clear reason.

- Favor `transform` and `opacity`.
- Use short reveal, hover lift, and continuity effects that do not delay reading.
- Respect `prefers-reduced-motion`; important content must stay available without animation.
- Keep glows and floating movement localized. Repeated, dramatic, or decorative motion makes a portfolio harder to read.

## Accessibility and responsive review

- Use semantic landmarks, logical headings, accurate image alt text, and native interactive elements.
- Every keyboard-operable control needs a visible focus state. Icon-only actions need an accessible name.
- Keep foreground, muted text, borders, and action labels readable against dark surfaces.
- Ensure in-page anchor targets remain visible below the sticky header.
- Recompose for small screens: identity and message first, portrait second, supporting hero ornaments simplified or repositioned.
- Maintain touch targets around 44px where practical and eliminate accidental horizontal overflow from type, absolute decoration, or effects.

For a visual change, inspect at mobile, tablet, laptop, and wide-desktop widths. Check normal, hover, focus, and reduced-motion states; static linting alone cannot validate the portfolio experience.
