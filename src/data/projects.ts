import type { Project } from "@/types/project";

/**
 * Seluruh karya yang ditampilkan pada portfolio dikelola dari file ini.
 * Detail Absensi CN berasal dari informasi proyek yang diberikan pemilik portfolio.
 */
export const projects: Project[] = [
  {
    slug: "absensi-cn",
    name: "Absensi CN",
    category: "Education Management System",
    period: "Tahun belum dipublikasikan",
    summary:
      "Platform manajemen kehadiran dan pembinaan siswa untuk Sekolah Citra Negara, yang menyatukan absensi harian, sesi mata pelajaran, pengajuan, monitoring BK, dan laporan.",
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
      "Attendance workflow",
      "Student risk monitoring",
      "Reporting system",
    ],
    status: "verified",
    links: { demo: null, repository: null },
    caseStudy: [
      {
        title: "Overview",
        body: "Absensi CN adalah platform manajemen kehadiran dan pembinaan siswa untuk Sekolah Citra Negara. Sistem ini membantu sekolah mengelola absensi harian, kehadiran pada sesi mata pelajaran, pengajuan izin atau sakit, monitoring siswa berisiko, catatan konseling, laporan, serta kalender hari libur dalam satu ekosistem terintegrasi.",
        isPlaceholder: false,
      },
      {
        title: "Masalah yang diselesaikan",
        body: "Pencatatan kehadiran tidak berhenti pada status hadir atau tidak hadir. Sistem dirancang untuk mengurangi proses manual yang tersebar, memisahkan absensi pagi dari kehadiran sesi mapel, menyediakan histori yang mudah ditelusuri, dan membantu sekolah membaca pola alfa atau pengajuan yang membutuhkan tindak lanjut.",
        isPlaceholder: false,
      },
      {
        title: "Alur dan peran pengguna",
        body: "Siswa dapat mengirim absensi harian dengan status, foto bukti, dan lokasi bila diperlukan, sekaligus mengajukan izin atau sakit. Guru dan wali kelas memantau kelas serta melakukan review atau koreksi ketika ada anomali. Guru mapel mengelola kehadiran per sesi pembelajaran. Guru BK memantau risiko lintas kelas dan menyimpan catatan pembinaan, sementara admin mengelola data akademik, role, import data, dan kalender hari libur.",
        isPlaceholder: false,
      },
      {
        title: "Nilai sistem",
        body: "Absensi CN mengubah data kehadiran menjadi informasi yang dapat ditindaklanjuti. Status otomatis yang sudah sesuai tidak perlu direview, sedangkan anomali dapat dikoreksi dengan catatan yang meninggalkan jejak konteks. Kalender hari libur juga memastikan Sabtu, Minggu, dan libur sekolah tidak dihitung sebagai hari efektif atau menghasilkan status alfa.",
        isPlaceholder: false,
      },
    ],
    gallery: [
      {
        src: "/images/project/absensi-cn/login-form.png",
        alt: "Form login platform Absensi CN",
        label: "Login form",
      },
      {
        src: "/images/project/absensi-cn/dashboard.png",
        alt: "Dashboard utama platform Absensi CN",
        label: "Dashboard",
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
