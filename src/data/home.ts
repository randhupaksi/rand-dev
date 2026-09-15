import type {
  AboutProfile,
  ExpertiseItem,
  HomeCta,
  ProcessStep,
  ToolGroup,
} from "@/types/home";

export const aboutProfile: AboutProfile = {
  name: "Randhu Paksi Membumi",
  role: "Freelance Frontend Developer",
  education: "SMK Citra Negara Depok · PPLG (2024 - 2027)",
  summary:
    "I’m a freelance frontend developer focused on building clean and interactive interfaces for products with real operational workflows. I also enjoy sharing what I learn through frontend and UI/UX mentoring.",
  statement:
    "I bring frontend implementation and visual thinking together, so enterprise UI stays minimal on the surface while still making complex work easier to operate.",
  tags: ["Enterprise UI/UX", "Frontend Development", "Interactive Systems"],
};

export const expertiseItems: ExpertiseItem[] = [
  {
    title: "Production interfaces",
    description:
      "I build clean, responsive interfaces for products that have to work beyond the demo. Absensi CN is live in production and supports more than 2,000 users.",
    bullets: ["Enterprise-ready UI", "React & Next.js", "Production-ready frontend"],
  },
  {
    title: "UI systems & interaction",
    description:
      "I shape minimal UI systems with clear hierarchy, responsive behaviour, useful feedback, and interaction details that help people move through demanding workflows.",
    bullets: ["Clean visual systems", "Responsive behaviour", "Motion & feedback"],
  },
  {
    title: "Product flows & APIs",
    description:
      "I connect roles, states, permissions, and API responses so enterprise products stay understandable. When needed, I also build the Go services behind the interface.",
    bullets: ["Role-aware UI", "Operational workflows", "Go & REST APIs"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand the operating workflow",
    description:
      "I start with the people, roles, decisions, and edge cases that shape the work - before deciding what the interface needs.",
  },
  {
    step: "02",
    title: "Make roles and states legible",
    description:
      "I turn that context into page structure, role-aware flows, and component states so every user can see what is happening and what to do next.",
  },
  {
    step: "03",
    title: "Connect interface to product logic",
    description:
      "I build responsive interfaces with React, Next.js, and TypeScript, then connect them to APIs and Go services when the product needs a deeper system.",
  },
  {
    step: "04",
    title: "Refine every state",
    description:
      "I refine hierarchy, responsive behaviour, loading, empty, error, and feedback states until the interface feels calm and reliable in everyday use.",
  },
];

export const toolGroups: ToolGroup[] = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"],
  },
  {
    title: "Applications",
    items: ["Go", "REST API", "MySQL", "Role-based flow", "Dashboard UI"],
  },
  {
    title: "Design",
    items: ["Figma", "UI / UX planning", "Visual hierarchy", "Design references"],
  },
  {
    title: "Collaboration",
    items: ["IT Club mentoring", "Figma handoff", "Git workflow", "Project communication"],
  },
];

export const homeCta: HomeCta = {
  title: "Have a complex product workflow in mind?",
  description:
    "Tell me what you’re working on - an enterprise interface, dashboard, internal tool, or product flow that needs thoughtful frontend work.",
  primaryLabel: "Let’s talk",
  secondaryLabel: "See all projects",
};
