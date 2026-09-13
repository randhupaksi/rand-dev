import type { FaqItem, JourneyItem, PrincipleItem, SkillGroup } from "@/types/about";

export const principles: PrincipleItem[] = [
  {
    title: "Konteks dulu, baru implementasi",
    description:
      "Sebelum menulis interface, saya memahami pengguna, alur kerja, dan informasi yang benar-benar perlu terlihat. Visual baru menyusul setelah fondasinya jelas.",
  },
  {
    title: "Hierarchy yang bisa dipakai",
    description:
      "Setiap halaman perlu memiliki prioritas informasi dan action yang jelas, supaya pengguna tahu apa yang penting tanpa harus menebak langkah berikutnya.",
  },
  {
    title: "Interface yang responsive",
    description:
      "Responsive behavior, state feedback, dan motion dipakai untuk membantu penggunaan—bukan sekadar dekorasi atau efek visual.",
  },
  {
    title: "Kode yang bisa berkembang",
    description:
      "Komponen, data, dan visual token dijaga tetap terstruktur agar project bisa dikembangkan dan dikolaborasikan dengan lebih nyaman.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Core Frontend",
    description: "Fondasi yang dipakai untuk membangun interface web modern.",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Framework & Tooling",
    description: "Stack yang digunakan dalam pengembangan web dan aplikasi.",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "Git"],
  },
  {
    title: "UI Engineering",
    description: "Menerjemahkan kebutuhan dan desain menjadi interface yang usable.",
    items: [
      "Responsive design",
      "Component architecture",
      "Design system & token",
      "Animation (GSAP)",
      "Accessibility awareness",
    ],
  },
  {
    title: "Application & Collaboration",
    description: "Pengembangan aplikasi dan proses kerja bersama tim maupun komunitas.",
    items: [
      "Go & REST API",
      "REST API integration",
      "Form handling & validation",
      "IT Club mentoring",
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
      "Mengembangkan website dan aplikasi dengan fokus pada interface modern, responsive, dan terstruktur menggunakan Next.js, React, TypeScript, serta JavaScript.",
    kind: "work",
  },
  {
    period: "Mei 2026",
    title: "Student of The Year",
    organization: "Citra Negara Awards 2026 · SMK Citra Negara Depok",
    description:
      "Menerima penghargaan Student of The Year sebagai pengakuan atas pertumbuhan, dedikasi, kreativitas, dan kontribusi dalam perjalanan akademik.",
    kind: "award",
  },
  {
    period: "Mar 2025 — Sekarang",
    title: "Frontend & UI/UX Instructor",
    organization: "IT Club · SMK Citra Negara Depok",
    description:
      "Membimbing anggota IT Club mempelajari frontend development dan UI/UX, termasuk fondasi web modern serta penyusunan interface yang clean dan user-friendly.",
    kind: "mentoring",
  },
  {
    period: "2024 — 2027",
    title: "Software Engineering (PPLG)",
    organization: "SMK Citra Negara Depok",
    description:
      "Menempuh pendidikan PPLG sambil mengembangkan project web dan aplikasi, dengan fokus pada frontend development, UI/UX, visual hierarchy, dan user experience.",
    kind: "education",
  },
];

export const contactFaq: FaqItem[] = [
  {
    question: "Kolaborasi seperti apa yang terbuka?",
    answer:
      "Kolaborasi frontend, website, aplikasi, dashboard UI, atau eksperimen interface yang membutuhkan implementasi modern dan perhatian pada pengalaman pengguna.",
  },
  {
    question: "Bagaimana proses kerjanya?",
    answer:
      "Dimulai dari memahami tujuan dan pengguna, menyusun struktur serta flow, lalu mengimplementasikan interface dan feedback. Progress dikomunikasikan bertahap agar arah tetap sejalan.",
  },
  {
    question: "Tools apa yang biasa dipakai?",
    answer:
      "React, Next.js, Vite, TypeScript, JavaScript, dan Tailwind CSS untuk frontend. Saya juga menggunakan Go dan REST API pada workflow aplikasi, serta Figma untuk desain dan handoff.",
  },
  {
    question: "Berapa lama respon terhadap pesan?",
    answer:
      "Pesan biasanya dibalas di sela kegiatan sekolah, pekerjaan frontend, dan mentoring. Sertakan konteks project yang jelas supaya diskusinya langsung produktif.",
  },
];
