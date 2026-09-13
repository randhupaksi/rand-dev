export type AboutProfile = {
  name: string;
  role: string;
  education: string;
  summary: string;
  statement: string;
  tags: string[];
};

export type ExpertiseItem = {
  title: string;
  description: string;
  bullets: string[];
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
