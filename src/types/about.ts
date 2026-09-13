export type PrincipleItem = {
  title: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export type JourneyKind = "work" | "award" | "mentoring" | "education";

export type JourneyItem = {
  period: string;
  title: string;
  organization: string;
  description: string;
  kind: JourneyKind;
};

export type FaqItem = {
  question: string;
  answer: string;
};
