export type PrincipleItem = {
  title: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export type JourneyItem = {
  /** Gunakan "20XX — 20XX" selama periode asli belum diverifikasi. */
  period: string;
  title: string;
  organization: string;
  description: string;
  /** `true` berarti entri masih draft dan wajib ditandai di UI. */
  isPlaceholder: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};
