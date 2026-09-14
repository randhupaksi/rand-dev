import type {
  AboutProfile,
  ExpertiseItem,
  HomeCta,
  ProcessStep,
  ToolGroup,
} from "@/types/home";

export const aboutProfile: AboutProfile = {
  name: "Randhu Paksi Membumi",
  role: "Freelance Full-stack Developer at Matik Creative Technology",
  education: "SMK Citra Negara Depok · PPLG (2024 — 2027)",
  summary:
    "I’m a freelance Full-stack Developer, previously completing my SMK field-work practice as a Frontend Developer at Matik Creative Technology. I also teach frontend and UI/UX at the IT Club of SMK Citra Negara Depok.",
  statement:
    "I like bringing frontend implementation and visual thinking together, so the UI is not only neat, but also comfortable to use.",
  tags: ["Frontend Development", "UI/UX", "Mentoring"],
};

export const expertiseItems: ExpertiseItem[] = [
  {
    title: "Production interfaces",
    description:
      "I build responsive web interfaces that hold up in real use—not just in a mockup. Absensi CN is now live in production and supports more than 2,000 users.",
    bullets: ["React & Next.js", "TypeScript", "Production-ready UI"],
  },
  {
    title: "UI systems & interaction",
    description:
      "I turn rough requirements and visual direction into interfaces with clear hierarchy, responsive behaviour, useful feedback, and reusable components.",
    bullets: ["Visual hierarchy", "Responsive behaviour", "Motion & feedback"],
  },
  {
    title: "Product flows & APIs",
    description:
      "I work with roles, states, permissions, and API responses so complex products still feel understandable. When needed, I also build the backend services behind the interface with Go.",
    bullets: ["Role-aware UI", "Dashboard workflows", "Go & REST APIs"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Define the real workflow",
    description:
      "I start with who needs to do what, which roles are involved, and where the workflow can break—before deciding what the interface needs.",
  },
  {
    step: "02",
    title: "Make roles and states clear",
    description:
      "I turn that context into page structure, role-aware flows, and component states so every user knows what they can do next.",
  },
  {
    step: "03",
    title: "Connect interface to logic",
    description:
      "I build responsive interfaces with React, Next.js, and TypeScript, then connect them to APIs and backend services with Go when the product needs it.",
  },
  {
    step: "04",
    title: "Test the edges",
    description:
      "I refine hierarchy, responsive behaviour, loading, empty, error, and feedback states until the interface feels reliable in everyday use.",
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
