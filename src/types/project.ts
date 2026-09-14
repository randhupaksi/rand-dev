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

export type ProductCapability = {
  title: string;
  description: string;
};

export type TechnicalStackGroup = {
  title: string;
  description: string;
  items: string[];
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  /** Show the period as a fact only once it has been verified. */
  period: PlaceholderValue;
  summary: string;
  thumbnail?: {
    src: string;
    alt: string;
  };
  stack: string[];
  focusAreas: string[];
  capabilities?: ProductCapability[];
  technicalStack?: TechnicalStackGroup[];
  status: ProjectStatus;
  links: ProjectLinks;
  caseStudy: CaseStudyBlock[];
  gallery?: {
    src: string;
    alt: string;
    label: string;
  }[];
  /** Number of gallery screenshot slots; placeholder frames fill missing assets. */
  gallerySlots: number;
};
