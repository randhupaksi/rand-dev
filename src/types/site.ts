/** Nilai yang bisa berupa placeholder; UI wajib menandainya sebagai draft. */
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
  /** URL asli; `null` berarti belum tersedia dan UI menampilkan status coming soon. */
  href: string | null;
};

export type ContactChannelKey = "email" | "whatsapp" | "location";

export type ContactChannel = {
  key: ContactChannelKey;
  label: string;
  /** Nilai yang ditampilkan, tetap dirender walau masih placeholder. */
  value: string;
  /** Destinasi klik; `null` berarti channel belum bisa diklik. */
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
  location: PlaceholderValue;
  /** URL CV asli; `null` berarti tombol CV tampil sebagai coming soon. */
  cvHref: string | null;
};
