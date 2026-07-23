export type ProjectStatus = "draft" | "verified";

export type ProjectLinks = {
  /** URL live demo asli; `null` berarti UI menampilkan coming soon. */
  demo: string | null;
  /** URL repository asli; `null` berarti UI menampilkan coming soon. */
  repository: string | null;
};

export type CaseStudyBlock = {
  title: string;
  body: string;
  /** `true` berarti isi masih Lorem Ipsum / draft dan wajib ditandai di UI. */
  isPlaceholder: boolean;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  /** Gunakan "20XX" selama tahun asli belum diverifikasi. */
  period: string;
  summary: string;
  stack: string[];
  focusAreas: string[];
  status: ProjectStatus;
  links: ProjectLinks;
  caseStudy: CaseStudyBlock[];
  /** Jumlah slot screenshot pada gallery; diisi frame placeholder selama asset belum ada. */
  gallerySlots: number;
};
