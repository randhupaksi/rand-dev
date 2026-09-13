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
    "Saya adalah Frontend Developer di Matik Creative Technology, sekaligus Frontend & UI/UX Instructor di IT Club SMK Citra Negara Depok.",
  statement:
    "Saya menggabungkan implementasi frontend dengan visual hierarchy, responsive behavior, dan UI yang tetap nyaman dipakai dalam konteks nyata.",
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
    title: "Product Workflow",
    description:
      "Memetakan role, status, dan alur kerja pada interface dengan banyak aksi maupun data agar pengguna tidak perlu menebak langkah berikutnya.",
    bullets: ["Dashboard workflow", "Role-aware UI", "API integration"],
  },
  {
    title: "Mentoring & Collaboration",
    description:
      "Sebagai Frontend & UI/UX Instructor di IT Club, saya membimbing anggota memahami fondasi frontend dan menyusun interface yang lebih terarah.",
    bullets: ["Frontend fundamentals", "UI/UX mentoring", "Project guidance"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description:
      "Memahami tujuan project, user flow, dan kebutuhan visual sebelum mulai membangun.",
  },
  {
    step: "02",
    title: "Structure",
    description:
      "Menyusun layout, section, dan komponen agar project tetap rapi saat berkembang.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Mengimplementasikan interface dan logic dengan perhatian pada detail dan performa.",
  },
  {
    step: "04",
    title: "Refine",
    description:
      "Memoles hierarchy, spacing, dan interaksi sampai hasil akhirnya terasa matang.",
  },
];

export const toolGroups: ToolGroup[] = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"],
  },
  {
    title: "Application",
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
  title: "Punya kebutuhan frontend atau interface yang ingin dibangun?",
  description:
    "Saya terbuka untuk berdiskusi tentang website, aplikasi, dashboard, dan kolaborasi yang membutuhkan implementasi frontend serta perhatian pada UI/UX.",
  primaryLabel: "Mulai Diskusi",
  secondaryLabel: "Lihat Semua Project",
};
