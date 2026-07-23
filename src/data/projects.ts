import type { Project } from "@/types/project";

/**
 * Data project bersifat draft: nama, kategori, dan stack berasal dari data
 * repository, sedangkan seluruh klaim faktual (challenge, outcome, periode,
 * link demo/repo) masih placeholder eksplisit sampai data asli tersedia.
 *
 * Cara mengganti: isi `period`, `links`, dan body case study, lalu ubah
 * `status` menjadi "verified" dan `isPlaceholder` menjadi `false`.
 */
export const projects: Project[] = [
  {
    slug: "sewa-kos-dashboard",
    name: "Sewa Kos Dashboard",
    category: "Dashboard System",
    period: "20XX",
    summary:
      "Panel management untuk pengelolaan kamar, pembayaran, dan verifikasi dengan struktur UI yang rapi dan alur role yang jelas.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    focusAreas: ["Dashboard UI", "CRUD flow", "Role-based layout"],
    status: "draft",
    links: { demo: null, repository: null },
    caseStudy: [
      {
        title: "Overview",
        body: "Project ini adalah dashboard pengelolaan kos: kamar, penghuni, pembayaran, dan proses verifikasi dikelola dari satu panel dengan hierarchy informasi yang terstruktur.",
        isPlaceholder: false,
      },
      {
        title: "Challenge",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isPlaceholder: true,
      },
      {
        title: "Approach",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        isPlaceholder: true,
      },
      {
        title: "Outcome",
        body: "Placeholder project outcome — replace with verified project information.",
        isPlaceholder: true,
      },
    ],
    gallerySlots: 2,
  },
  {
    slug: "digital-service-platform",
    name: "Digital Service Platform",
    category: "Service Website",
    period: "20XX",
    summary:
      "Website layanan digital dengan penekanan pada hierarchy visual, CTA yang jelas, dan presentasi yang terasa premium.",
    stack: ["React", "GSAP", "Figma"],
    focusAreas: ["Visual hierarchy", "Interactive presentation", "Conversion-aware layout"],
    status: "draft",
    links: { demo: null, repository: null },
    caseStudy: [
      {
        title: "Overview",
        body: "Project ini adalah website presentasi layanan digital: fokusnya pada storytelling visual, ritme section, dan CTA yang mudah ditemukan tanpa membuat halaman terasa ramai.",
        isPlaceholder: false,
      },
      {
        title: "Challenge",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isPlaceholder: true,
      },
      {
        title: "Approach",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        isPlaceholder: true,
      },
      {
        title: "Outcome",
        body: "Placeholder project outcome — replace with verified project information.",
        isPlaceholder: true,
      },
    ],
    gallerySlots: 2,
  },
  {
    slug: "gallery-content-app",
    name: "Gallery & Content App",
    category: "Content System",
    period: "20XX",
    summary:
      "Aplikasi galeri dengan pengelolaan data, struktur modul yang rapi, dan tampilan yang konsisten antar halaman.",
    stack: ["PHP", "MySQL", "JavaScript"],
    focusAreas: ["Content management", "Module structure", "Consistent UI"],
    status: "draft",
    links: { demo: null, repository: null },
    caseStudy: [
      {
        title: "Overview",
        body: "Project ini adalah aplikasi galeri dan konten: pengelolaan data dilakukan melalui modul yang terpisah rapi sehingga tampilan tetap konsisten saat konten bertambah.",
        isPlaceholder: false,
      },
      {
        title: "Challenge",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isPlaceholder: true,
      },
      {
        title: "Approach",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
        isPlaceholder: true,
      },
      {
        title: "Outcome",
        body: "Placeholder project outcome — replace with verified project information.",
        isPlaceholder: true,
      },
    ],
    gallerySlots: 2,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  previous: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
