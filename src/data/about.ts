import type { FaqItem, JourneyItem, PrincipleItem, SkillGroup } from "@/types/about";

export const principles: PrincipleItem[] = [
  {
    title: "Start with the workflow",
    description:
      "Before opening the editor, I map the people, roles, actions, and edge cases that make an enterprise product work.",
  },
  {
    title: "Make every state legible",
    description:
      "A clean hierarchy, direct feedback, and clear next steps help people operate complex workflows with confidence.",
  },
  {
    title: "Build beyond the happy path",
    description:
      "I design and test responsive layouts, loading, empty, error, and feedback states - not just the polished first screen.",
  },
  {
    title: "Keep the system ready to grow",
    description:
      "Clear components, data boundaries, and visual tokens keep a growing product consistent and easier to extend.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Product UI systems",
    description: "The tools I use to turn complex workflows into clean, working interfaces.",
    items: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    title: "Interface quality",
    description: "The interaction details that make enterprise software easier to understand and use.",
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
    description: "The logic and integration work behind role-aware product interfaces.",
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
    detail: "Enterprise UI, APIs, and product workflows",
  },
];

export const journeyItems: JourneyItem[] = [
  {
    period: "Jan - May 2026",
    title: "Frontend Developer Trainee",
    organization: "Matik Creative Technology",
    description:
      "Completed a hands-on frontend placement at Matik Creative Technology, building responsive interfaces with Next.js, React, TypeScript, and JavaScript.",
    kind: "work",
  },
  {
    period: "May 2026 - Now",
    title: "Freelance Full-stack Developer",
    organization: "Matik Creative Technology",
    description:
      "Building web apps and APIs with React, Next.js, TypeScript, and Go, with a focus on clean interfaces and product flows people use every day.",
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
    question: "What can I help you build?",
    answer:
      "I help build enterprise web products where the challenge goes beyond a landing page: role-aware dashboards, multi-step forms, reporting, follow-up flows, and interfaces connected to real APIs.",
  },
  {
    question: "How do I turn a rough brief into a usable product?",
    answer:
      "I begin with the people, roles, decisions, and failure points - not the components. From there, I shape a clear flow, build a clean interface, and refine every state around it.",
  },
  {
    question: "Where do I contribute most technically?",
    answer:
      "My strongest work sits in React, Next.js, TypeScript, Vite, Tailwind CSS, and component architecture. I connect the interface to Go services, REST APIs, and MySQL data when the product needs a deeper system.",
  },
  {
    question: "What helps me get useful quickly?",
    answer:
      "A short outline of what you are building, who needs to use it, which workflow is difficult, and any timing you have in mind gives me enough context to start with a focused conversation.",
  },
];
