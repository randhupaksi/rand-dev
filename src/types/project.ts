import type { PlaceholderValue } from "@/types/site";

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
  /** `true` berarti isi masih draft dan wajib ditandai di UI. */
  isPlaceholder: boolean;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  /** Periode hanya ditampilkan sebagai fakta jika sudah diverifikasi. */
  period: PlaceholderValue;
  summary: string;
  thumbnail?: {
    src: string;
    alt: string;
  };
  stack: string[];
  focusAreas: string[];
  status: ProjectStatus;
  links: ProjectLinks;
  caseStudy: CaseStudyBlock[];
  gallery?: {
    src: string;
    alt: string;
    label: string;
  }[];
  /** Jumlah slot screenshot pada gallery; diisi frame placeholder selama asset belum ada. */
  gallerySlots: number;
};
