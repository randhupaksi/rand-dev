import type { Project } from "@/types/project";

/**
 * Seluruh karya yang ditampilkan pada portfolio dikelola dari file ini.
 * Detail Citra Negara Attendance System berasal dari informasi proyek yang diberikan pemilik portfolio.
 */
export const projects: Project[] = [
  {
    slug: "absensi-cn",
    name: "Citra Negara Attendance System",
    category: "Live attendance platform",
    period: {
      value: "Live in production · 2026",
      isPlaceholder: false,
    },
    summary:
      "A live school attendance platform used by 2,000+ users at SMK Citra Negara Depok, bringing daily check-ins, follow-up, and reporting into one workflow.",
    thumbnail: {
      src: "/images/project/absensi-cn/hero-absensi-cn.png",
      alt: "Tampilan utama Citra Negara Attendance System",
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
      "Attendance",
      "Follow-up",
      "Reporting",
    ],
    status: "verified",
    links: {
      demo: "https://absensmk.citranegara.online",
      repository: null,
    },
    caseStudy: [
      {
        title: "The product in use",
        body: "Citra Negara Attendance System is a live platform for attendance and student follow-up at SMK Citra Negara Depok. Used by more than 2,000 users, it brings daily check-ins, class attendance, requests, student follow-up, reports, and school holidays into one workflow.",
        isPlaceholder: false,
      },
      {
        title: "Where the workflow gets complex",
        body: "Attendance is more than present or absent. The system separates morning check-ins from class-session attendance, keeps a traceable history, and makes unusual records easier to follow up.",
        isPlaceholder: false,
      },
      {
        title: "Roles behind the workflow",
        body: "Students submit daily check-ins and leave or sick requests. Teachers and homeroom teachers review class records, subject teachers manage session attendance, counsellors follow up on students who need attention, and admins manage the academic data, roles, imports, and school holidays behind it.",
        isPlaceholder: false,
      },
      {
        title: "What changes in daily operations",
        body: "Routine records can move forward without another review, while unusual ones can be corrected with a note. The holiday calendar also stops non-school days from being counted as absences.",
        isPlaceholder: false,
      },
    ],
    gallery: [
      {
        src: "/images/project/absensi-cn/login-form.png",
        alt: "Login screen for Citra Negara Attendance System",
        label: "Login screen",
      },
      {
        src: "/images/project/absensi-cn/dashboard.png",
        alt: "Main dashboard of Citra Negara Attendance System",
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
