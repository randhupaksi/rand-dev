import type { Project } from "@/types/project";

/**
 * Seluruh karya yang ditampilkan pada portfolio dikelola dari file ini.
 * Detail Absensi CN berasal dari informasi proyek yang diberikan pemilik portfolio.
 */
export const projects: Project[] = [
  {
    slug: "absensi-cn",
    name: "Absensi CN",
    category: "School management system",
    period: {
      value: "Timeline not published",
      isPlaceholder: true,
    },
    summary:
      "A platform that helps Sekolah Citra Negara manage student attendance and follow-up—from daily check-ins to reports and counselling support.",
    thumbnail: {
      src: "/images/project/absensi-cn/hero-absensi-cn.png",
      alt: "Tampilan utama platform Absensi CN",
    },
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Go",
      "MySQL",
    ],
    focusAreas: [
      "Role-based access",
      "Attendance flow",
      "Student follow-up",
      "Reporting system",
    ],
    status: "verified",
    links: { demo: null, repository: null },
    caseStudy: [
      {
        title: "A quick overview",
        body: "Absensi CN is a platform for managing attendance and student follow-up at Sekolah Citra Negara. It brings together daily check-ins, attendance by class session, leave or sick requests, student risk monitoring, counselling notes, reports, and a school holiday calendar.",
        isPlaceholder: false,
      },
      {
        title: "What needed untangling",
        body: "Attendance is more than a simple present-or-absent status. The system brings scattered processes together, separates morning check-ins from class-session attendance, keeps a traceable history, and highlights records that need follow-up.",
        isPlaceholder: false,
      },
      {
        title: "Who does what",
        body: "Students can submit a daily check-in with a status, photo proof, and location when needed, then send leave or sick requests. Teachers and homeroom teachers monitor their classes and correct unusual records. Subject teachers manage session attendance, counsellors monitor students who need attention, and admins manage academic data, roles, imports, and school holidays.",
        isPlaceholder: false,
      },
      {
        title: "What the system helps with",
        body: "Absensi CN turns attendance data into something easier to follow up. Records that already match do not need another review, while unusual records can be corrected with a note. The holiday calendar also helps prevent non-school days from being counted as absences.",
        isPlaceholder: false,
      },
    ],
    gallery: [
      {
        src: "/images/project/absensi-cn/login-form.png",
        alt: "Form login platform Absensi CN",
        label: "Login screen",
      },
      {
        src: "/images/project/absensi-cn/dashboard.png",
        alt: "Dashboard utama platform Absensi CN",
        label: "Main dashboard",
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
