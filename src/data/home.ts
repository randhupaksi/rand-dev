import type {
  AboutCard,
  AboutMetric,
  AboutProfile,
  ExpertiseItem,
  HomeCta,
  ProcessStep,
  ToolGroup,
} from "@/types/home";

export const aboutMetrics: AboutMetric[] = [
  { value: "Class 11", label: "SMK PPLG Student" },
  { value: "Code + Visual", label: "Main working approach" },
  { value: "Enterprise UI", label: "Preferred design direction" },
];

export const aboutProfile: AboutProfile = {
  name: "Randhu Paksi Membumi",
  role: "Creative Web Developer",
  education: "SMK PPLG · Class 11",
  summary:
    "Saya fokus membangun website yang rapi secara struktur, enak dilihat, dan tetap terasa matang saat digunakan.",
  statement:
    "Buat saya, interface yang baik harus jelas, punya ritme visual, dan tidak terasa template.",
  tags: ["Web Development", "UI Thinking", "Interactive Flow"],
};

export const aboutCards: AboutCard[] = [
  {
    label: "Core",
    title: "Structured build",
    description: "Membangun dengan logika dan susunan yang rapi.",
  },
  {
    label: "Visual",
    title: "Clean interface",
    description: "Fokus pada hierarchy, spacing, dan UI yang enak dilihat.",
  },
  {
    label: "Focus",
    title: "Interactive web",
    description: "Branding website, dashboard UI, dan presentasi digital.",
  },
];

export const expertiseItems: ExpertiseItem[] = [
  {
    title: "Web Development",
    description:
      "Saya menerjemahkan kebutuhan menjadi halaman dan komponen yang jelas tanggung jawabnya, supaya website tetap enak dikembangkan saat isinya bertambah.",
    bullets: ["React & TypeScript", "Responsive sejak awal", "Komponen reusable"],
  },
  {
    title: "UI / UX & Frontend",
    description:
      "Sebelum menambah dekorasi, saya merapikan urutan baca, jarak, kontras, dan feedback. Detail visual dipakai untuk membantu orang memahami interface.",
    bullets: ["Hierarchy lebih dulu", "State & feedback", "Motion yang terarah"],
  },
  {
    title: "System & Dashboard Building",
    description:
      "Untuk interface dengan banyak aksi dan data, saya memetakan role, status, dan jalur utama agar pengguna tidak perlu menebak langkah berikutnya.",
    bullets: ["Role-aware flow", "CRUD states", "Information architecture"],
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
    title: "System",
    items: ["PHP", "MySQL", "Role-based flow", "CRUD", "Dashboard UI"],
  },
  {
    title: "Design",
    items: ["Figma", "UI / UX planning", "Visual hierarchy", "Design references"],
  },
  {
    title: "Creative",
    items: ["DaVinci Resolve", "Blender", "Interactive media", "Digital editing"],
  },
];

export const homeCta: HomeCta = {
  title: "Punya ide project yang ingin dibuat lebih rapi, premium, dan interaktif?",
  description:
    "Saya terbuka untuk diskusi website branding, dashboard, dan kebutuhan digital yang butuh perpaduan visual dan struktur yang kuat.",
  primaryLabel: "Diskusi Project",
  secondaryLabel: "Lihat Semua Project",
};
