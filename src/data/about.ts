import type { FaqItem, JourneyItem, PrincipleItem, SkillGroup } from "@/types/about";

export const principles: PrincipleItem[] = [
  {
    title: "Struktur dulu, baru styling",
    description:
      "Layout, hierarchy, dan alur konten dipikirkan sebelum detail visual. Styling yang bagus tidak bisa menyelamatkan struktur yang salah.",
  },
  {
    title: "Hierarchy yang bisa discan",
    description:
      "Setiap halaman punya focal point dan urutan baca yang jelas. Pengguna harus tahu apa yang penting tanpa harus berpikir.",
  },
  {
    title: "Interaksi yang terkontrol",
    description:
      "Motion dipakai untuk feedback dan continuity, bukan dekorasi. Animasi tidak boleh menghalangi membaca atau navigasi.",
  },
  {
    title: "Kode yang bisa dirawat",
    description:
      "Komponen dipecah berdasarkan tanggung jawab nyata, konten dipisah dari presentasi, dan token dipakai konsisten agar project mudah dikembangkan.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Core Web",
    description: "Fondasi utama dalam membangun interface web.",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Framework & Tooling",
    description: "Stack yang paling sering dipakai dalam workflow saya.",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "Git"],
  },
  {
    title: "UI Engineering",
    description: "Menerjemahkan desain menjadi interface yang hidup.",
    items: [
      "Responsive design",
      "Component architecture",
      "Design system & token",
      "Animation (GSAP)",
      "Accessibility awareness",
    ],
  },
  {
    title: "Workflow",
    description: "Cara kerja dari desain sampai integrasi.",
    items: [
      "Figma handoff",
      "REST API integration",
      "Form handling & validation",
      "State management",
      "Clean project structure",
    ],
  },
];

/**
 * Entri pertama adalah informasi pendidikan yang memang diketahui.
 * Entri `isPlaceholder: true` adalah slot draft — ganti dengan pengalaman
 * nyata (magang, lomba, project client) ketika sudah tersedia.
 */
export const journeyItems: JourneyItem[] = [
  {
    period: "Sekarang",
    title: "SMK PPLG — Kelas 11",
    organization: "Pengembangan Perangkat Lunak dan Gim",
    description:
      "Fokus pada web development: membangun interface yang rapi, memahami alur data, dan melatih kepekaan visual lewat project sekolah dan eksperimen pribadi.",
    isPlaceholder: false,
  },
  {
    period: "20XX — 20XX",
    title: "Placeholder experience title",
    organization: "Placeholder company",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace with verified experience information.",
    isPlaceholder: true,
  },
  {
    period: "20XX — 20XX",
    title: "Placeholder achievement",
    organization: "Placeholder organization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Add real achievement or competition history here.",
    isPlaceholder: true,
  },
];

export const contactFaq: FaqItem[] = [
  {
    question: "Kolaborasi seperti apa yang terbuka?",
    answer:
      "Project website branding, landing page, dashboard UI, atau eksperimen interface — baik sebagai project latihan, PKL, maupun kolaborasi dengan developer dan designer lain.",
  },
  {
    question: "Bagaimana proses kerjanya?",
    answer:
      "Dimulai dari memahami tujuan dan pengguna, lalu menyusun struktur halaman, baru masuk ke visual dan interaksi. Progress dikomunikasikan bertahap supaya arah tetap sejalan.",
  },
  {
    question: "Tools apa yang biasa dipakai?",
    answer:
      "React/Next.js dengan TypeScript dan Tailwind CSS untuk pengembangan, Figma untuk desain dan handoff, serta GSAP untuk motion yang terkontrol.",
  },
  {
    question: "Berapa lama respon terhadap pesan?",
    answer:
      "Karena masih bersekolah, pesan biasanya dibalas di luar jam sekolah. Sertakan konteks project yang jelas supaya diskusinya langsung produktif.",
  },
];
