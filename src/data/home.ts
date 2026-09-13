import type {
  AboutProfile,
  ExpertiseItem,
  HomeCta,
  ProcessStep,
  ToolGroup,
} from "@/types/home";

export const aboutProfile: AboutProfile = {
  name: "Randhu Paksi Membumi",
  role: "Frontend Developer",
  education: "SMK Citra Negara Depok · PPLG (2024 — 2027)",
  summary:
    "I work as a Frontend Developer at Matik Creative Technology, and also teach frontend and UI/UX at the IT Club of SMK Citra Negara Depok.",
  statement:
    "I like bringing frontend implementation and visual thinking together, so the UI is not only neat, but also comfortable to use.",
  tags: ["Frontend Development", "UI/UX", "Mentoring"],
};

export const expertiseItems: ExpertiseItem[] = [
  {
    title: "Frontend Development",
    description:
      "Mengembangkan website dan aplikasi yang modern, responsive, serta terstruktur untuk kebutuhan produk dan pengguna yang berbeda.",
    bullets: ["React & Next.js", "TypeScript & JavaScript", "Vite & Tailwind CSS"],
  },
  {
    title: "UI Engineering",
    description:
      "Menerjemahkan kebutuhan dan desain menjadi interface yang jelas, nyaman dipakai, dan konsisten dari desktop sampai mobile.",
    bullets: ["Visual hierarchy", "Responsive UI", "Motion & feedback"],
  },
  {
    title: "Product flows",
    description:
      "I map out roles, states, and actions in interfaces with a lot going on, so people always have a clear next step.",
    bullets: ["Dashboard flows", "Role-aware UI", "API integration"],
  },
  {
    title: "Mentoring & collaboration",
    description:
      "As a Frontend & UI/UX Instructor at the IT Club, I help members get comfortable with frontend basics and clearer interface thinking.",
    bullets: ["Frontend basics", "UI/UX mentoring", "Project guidance"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description:
      "I start by understanding the goal, the people using it, and the flow that needs to work.",
  },
  {
    step: "02",
    title: "Shape the flow",
    description:
      "Then I shape the pages and components so the project stays clear as it grows.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Once the direction is clear, I build the interface and logic with care for detail and performance.",
  },
  {
    step: "04",
    title: "Refine",
    description:
      "Finally, I check the hierarchy, spacing, states, and interactions until everything feels right in use.",
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
  title: "Have a frontend idea in mind?",
  description:
    "Tell me what you’re working on—a website, app, dashboard, or anything that needs thoughtful frontend work.",
  primaryLabel: "Let’s talk",
  secondaryLabel: "See all work",
};
