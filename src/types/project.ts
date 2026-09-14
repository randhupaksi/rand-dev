import type { PlaceholderValue } from "@/types/site";

export type ProjectStatus = "draft" | "verified";

export type ProjectLinks = {
  demo: string | null;
  repository: string | null;
};

export type CaseStudyBlock = {
  title: string;
  body: string;
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
  gallerySlots: number;
};
