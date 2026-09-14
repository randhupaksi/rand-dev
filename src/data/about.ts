import type { FaqItem, JourneyItem, PrincipleItem, SkillGroup } from "@/types/about";

export const principles: PrincipleItem[] = [
  {
    title: "Start with the workflow",
    description:
      "Before opening the editor, I map the people, roles, actions, and edge cases that make the product work.",
  },
  {
    title: "Make every state legible",
    description:
      "Hierarchy, feedback, and clear next steps help people understand what is happening and what they can do next.",
  },
  {
    title: "Build beyond the happy path",
    description:
      "I check responsive layouts, loading, empty, error, and feedback states—not just the polished first screen.",
  },
  {
    title: "Keep the system ready to grow",
    description:
      "Clear components, data boundaries, and visual tokens make a project easier to extend and hand over.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Product UI systems",
    description: "The tools I use to turn flows into working interfaces.",
    items: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    title: "Interface quality",
    description: "The details that make a product easier to understand and use.",
    items: [
      "Responsive design",
      "Component architecture",
      "Design system & token",
      "Loading & feedback states",
      "Accessibility",
    ],
  },
  {
    title: "Application workflows",
    description: "The logic and integration work behind product interfaces.",
    items: [
      "Go",
      "REST APIs",
      "MySQL",
      "Forms & validation",
      "Role-aware workflows",
    ],
  },
];

export const aboutFacts = [
  {
    label: "Currently",
    value: "Freelance Full-stack Developer",
    detail: "Matik Creative Technology",
  },
  {
    label: "Live product",
    value: "Citra Negara Attendance System",
    detail: "Live in production · 2,000+ users",
    href: "https://absensmk.citranegara.online",
  },
  {
    label: "Working with",
    value: "React · Next.js · TypeScript · Vite",
    detail: "Frontend, APIs, and product workflows",
  },
];

/** Informasi perjalanan hanya ditampilkan jika sudah dapat diverifikasi. */
export const journeyItems: JourneyItem[] = [
  {
    period: "Jan — May 2026",
    title: "Frontend Developer Trainee",
    organization: "Matik Creative Technology",
    description:
      "Completed a hands-on frontend placement at Matik Creative Technology, building responsive website and app interfaces with Next.js, React, TypeScript, and JavaScript.",
    kind: "work",
  },
  {
    period: "May 2026 — Now",
    title: "Freelance Full-stack Developer",
    organization: "Matik Creative Technology",
    description:
      "Building web apps and APIs with React, Next.js, TypeScript, and Go, with a focus on the interface and product flow people use.",
    kind: "work",
  },
  {
    period: "May 2026",
    title: "Student of The Year",
    organization: "Citra Negara Awards 2026 · SMK Citra Negara Depok",
    description:
      "Recognized as the best student of the year through the Citra Negara Awards 2026 at SMK Citra Negara Depok.",
    kind: "award",
  },
  {
    period: "Aug 2026",
    title: "Digital Innovation Award",
    organization: "SMK Citra Negara Depok",
    description:
      "Received an award for creating Citra Negara Attendance System, a digital attendance platform for the SMK Citra Negara Depok community.",
    kind: "award",
  },
];

export const contactFaq: FaqItem[] = [
  {
    question: "What kind of work are you open to?",
    answer:
      "Frontend and full-stack web work where the interface and workflow matter—websites, dashboards, internal tools, and product apps.",
  },
  {
    question: "How do you approach a project?",
    answer:
      "We start with the goal, the people using it, and the workflow that needs to work. Then I map the structure, build the interface, and refine the states around it.",
  },
  {
    question: "What do you usually work with?",
    answer:
      "React, Next.js, TypeScript, Vite, and Tailwind CSS for frontend work; Go and REST APIs when the project needs backend support.",
  },
  {
    question: "When can I expect a reply?",
    answer:
      "I reply as soon as I can around school and project work. A little context about the goal, users, and timeline helps us get useful quickly.",
  },
];
