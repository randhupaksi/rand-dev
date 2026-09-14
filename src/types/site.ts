export type PlaceholderValue = {
  value: string;
  isPlaceholder: boolean;
};

export type NavItem = {
  label: string;
  to: string;
};

export type SocialKey = "github" | "instagram" | "linkedin" | "dribbble";

export type SocialLink = {
  key: SocialKey;
  label: string;
  href: string | null;
};

export type ContactChannelKey = "email";

export type ContactChannel = {
  key: ContactChannelKey;
  label: string;
  value: string;
  href: string | null;
  isPlaceholder: boolean;
};

export type SiteIdentity = {
  name: string;
  brandFirst: string;
  brandSecond: string;
  role: string;
  tagline: string;
  availability: PlaceholderValue;
  cvHref: string | null;
};
