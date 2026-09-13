import type { FaqItem, JourneyItem, PrincipleItem, SkillGroup } from "@/types/about";

export const principles: PrincipleItem[] = [
  {
    title: "Start with the problem",
    description:
      "Before opening the editor, I try to understand who will use it, what needs solving, and which information actually matters.",
  },
  {
    title: "Make the important stuff easy to find",
    description:
      "Every page needs a clear order. People should be able to find the important information and actions without having to guess.",
  },
  {
    title: "Make it work everywhere",
    description:
      "I use layout, feedback, and motion to make an interface easier to understand—not just to add more effects.",
  },
  {
    title: "Keep the code easy to pick up",
    description:
      "I keep components, data, and visual tokens organised so the project is easier to extend and work on together.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend foundations",
    description: "The building blocks I use for web interfaces.",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks & tools",
    description: "The tools I reach for most when building websites and apps.",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "Git"],
  },
  {
    title: "UI engineering",
    description: "Turning product needs and designs into interfaces that feel easy to use.",
    items: [
      "Responsive design",
      "Component architecture",
      "Design system & token",
      "Animation (GSAP)",
      "Accessibility awareness",
    ],
  },
  {
    title: "Applications & collaboration",
    description: "The technical pieces and habits behind building things together.",
    items: [
      "Go & REST API",
      "REST API integration",
      "Forms & validation",
      "Mentoring IT Club",
      "Project communication",
    ],
  },
];

/** Informasi perjalanan hanya ditampilkan jika sudah dapat diverifikasi. */
export const journeyItems: JourneyItem[] = [
  {
    period: "Jan 2026 — Sekarang",
    title: "Frontend Developer",
    organization: "Matik Creative Technology",
    description:
      "Building websites and apps with a focus on clear, responsive interfaces using Next.js, React, TypeScript, and JavaScript.",
    kind: "work",
  },
  {
    period: "Mei 2026",
    title: "Student of The Year",
    organization: "Citra Negara Awards 2026 · SMK Citra Negara Depok",
    description:
      "Received the Student of The Year award as part of my growth and contribution during school.",
    kind: "award",
  },
  {
    period: "Mar 2025 — Sekarang",
    title: "Frontend & UI/UX Instructor",
    organization: "IT Club · SMK Citra Negara Depok",
    description:
      "Helping IT Club members learn frontend and UI/UX, from web basics to building clearer, more comfortable interfaces.",
    kind: "mentoring",
  },
  {
    period: "2024 — 2027",
    title: "Software Engineering (PPLG)",
    organization: "SMK Citra Negara Depok",
    description:
      "Studying software engineering while building web and app projects, with a strong interest in frontend and UI/UX.",
    kind: "education",
  },
];

export const contactFaq: FaqItem[] = [
  {
    question: "Kolaborasi seperti apa yang terbuka?",
    answer:
      "I’m open to frontend collaborations, websites, apps, dashboards, or interface experiments that need to feel clearer and easier to use.",
  },
  {
    question: "Bagaimana proses kerjanya?",
    answer:
      "It usually starts with a conversation about the goal and the people using it. From there, I shape the structure, build the interface, and refine the feedback along the way.",
  },
  {
    question: "Tools apa yang biasa dipakai?",
    answer:
      "For frontend work, I mostly use React, Next.js, Vite, TypeScript, JavaScript, and Tailwind CSS. I also work with Go, REST APIs, and Figma when the project calls for it.",
  },
  {
    question: "Berapa lama respon terhadap pesan?",
    answer:
      "I usually reply between school, frontend work, and mentoring. A little context about your project helps us get to the useful part faster.",
  },
];
