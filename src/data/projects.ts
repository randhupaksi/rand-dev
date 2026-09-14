import type { Project } from "@/types/project";

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
      "A production school operations platform used by 2,000+ people at SMK Citra Negara Depok, showing how clean interfaces, role-aware workflows, and reliable product logic work together.",
    thumbnail: {
      src: "/images/project/absensi-cn/hero-overview.png",
      alt: "Hero landing page Citra Negara Attendance System",
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
      "Multi-role school workflows",
      "Attendance evidence and review",
      "Academic operations and reporting",
    ],
    capabilities: [
      {
        title: "Attendance with evidence",
        description:
          "Photo, location, time windows, and separate morning or class-session records give each attendance event the context it needs.",
      },
      {
        title: "Role-aware workspaces",
        description:
          "Student, teacher, homeroom, BK, and admin work is shaped by assignments and scope instead of one generic dashboard.",
      },
      {
        title: "Review and follow-up",
        description:
          "Corrections keep the original record intact, while requests, unusual attendance, and notifications make the next action clear.",
      },
      {
        title: "School operations",
        description:
          "Academic setup, holidays, session recaps, imports, analytics, and PDF or Excel reports keep daily attendance connected to the wider school workflow.",
      },
    ],
    technicalStack: [
      {
        title: "Frontend application",
        description:
          "The Vite single-page app that handles the clean interface, server state, forms, reporting views, and interaction details across role-based workflows.",
        items: [
          "React 19",
          "TypeScript 5.9",
          "Vite 8",
          "React Router 7",
          "Tailwind CSS 4",
          "TanStack Query 5",
          "TanStack Table 8",
          "Axios",
          "React Hook Form 7",
          "Zod 4",
          "Base UI",
          "Radix Select",
          "Motion 12",
          "Recharts 3",
          "Sonner",
          "jsPDF + AutoTable",
          "react-day-picker",
        ],
      },
      {
        title: "API, data, and operations",
        description:
          "The Go REST API that owns business rules, access control, persistence, private evidence, and the safeguards behind a dependable enterprise workflow.",
        items: [
          "Go 1.25",
          "Gin",
          "GORM",
          "MySQL",
          "JWT (HS256)",
          "bcrypt",
          "go-playground/validator",
          "Excelize",
          "Cloudinary",
          "Web Push",
          "Redis",
          "Gzip + request tracing",
          "Rate and admission controls",
        ],
      },
    ],
    status: "verified",
    links: {
      demo: "https://absensmk.citranegara.online",
      repository: null,
    },
    caseStudy: [
      {
        title: "An operating workflow, not a single check-in screen",
        body: "Citra Negara Attendance System is a production platform for SMK Citra Negara Depok, used by more than 2,000 people. Students, teachers, homeroom teachers, BK staff, and admins each work from the context they need, while one clean system keeps attendance, follow-up, and reporting connected.",
        isPlaceholder: false,
      },
      {
        title: "Capturing attendance with useful evidence",
        body: "Students check in with a photo and device location. The interface keeps the action direct, while the API considers the attendance window, validates the evidence and location policy, and protects submissions from duplicate retries.",
        isPlaceholder: false,
      },
      {
        title: "Roles are shaped by school context",
        body: "A teacher can receive subject, homeroom, or BK capabilities through assignments and scope - not a one-size-fits-all dashboard. The result is a more focused UI for sessions, student monitoring, attendance review, counselling notes, and permission or sick submissions.",
        isPlaceholder: false,
      },
      {
        title: "Review without losing the original record",
        body: "The original check-in time and the review time stay separate. When a status is corrected, the first attendance event remains intact, meaningful changes are kept in history, and students can receive a notification about what changed.",
        isPlaceholder: false,
      },
      {
        title: "From daily attendance to school operations",
        body: "The platform also covers subject sessions and recaps, manual homeroom attendance, school holidays, academic setup, Excel imports, analytics, and PDF or Excel reporting. It is designed for the chain of work around attendance, not just the first tap of the day.",
        isPlaceholder: false,
      },
      {
        title: "Built for an operating product",
        body: "The frontend keeps server data in sync with TanStack Query and lazy-loads heavier chart and reporting tools. The Go API handles authentication, role and scope checks, business validation, private uploads, request tracing, and bounded traffic handling so the interface stays useful as the workflow grows.",
        isPlaceholder: false,
      },
    ],
    gallery: [
      {
        src: "/images/project/absensi-cn/hero-overview.png",
        alt: "Hero landing page Citra Negara Attendance System",
        label: "Product overview",
      },
      {
        src: "/images/project/absensi-cn/attendance-flow.png",
        alt: "Student attendance flow with evidence and location steps",
        label: "Attendance flow",
      },
      {
        src: "/images/project/absensi-cn/student-login.png",
        alt: "Student login screen for Citra Negara Attendance System",
        label: "Student login",
      },
      {
        src: "/images/project/absensi-cn/student-dashboard-desktop.png",
        alt: "Desktop student dashboard for Citra Negara Attendance System",
        label: "Student dashboard - desktop",
      },
    ],
    gallerySlots: 4,
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
