export type AboutMetric = {
  label: string;
  value: string;
};

export type AboutProfile = {
  name: string;
  role: string;
  education: string;
  summary: string;
  statement: string;
  tags: string[];
};

export type AboutCard = {
  label: string;
  title: string;
  description: string;
};

export type AboutCardIconKey =
  | "graduation-cap"
  | "layout-template"
  | "scan-search";

export type ExpertiseItem = {
  title: string;
  description: string;
  bullets: string[];
};

export type ProjectItem = {
  name: string;
  category: string;
  summary: string;
  stack: string[];
  outcome: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ToolGroup = {
  title: string;
  items: string[];
};

export type HomeCta = {
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
};
