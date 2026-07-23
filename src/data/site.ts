import type {
  ContactChannel,
  SiteIdentity,
  SocialLink,
} from "@/types/site";

/**
 * Satu-satunya sumber informasi personal di seluruh website.
 *
 * Semua nilai placeholder di bawah dibaca dari `.env` (lihat `.env.example`).
 * Untuk mengganti email, WhatsApp, social link, lokasi, atau CV cukup isi
 * environment variable terkait — tidak perlu menyentuh component mana pun.
 */
const env = import.meta.env;

const email = (env.VITE_EMAIL as string | undefined) || "";
const whatsapp = (env.VITE_WHATSAPP_NUMBER as string | undefined) || "";
const location = (env.VITE_LOCATION as string | undefined) || "";
const cvUrl = (env.VITE_CV_URL as string | undefined) || "";

export const siteIdentity: SiteIdentity = {
  name: "Randhu Paksi Membumi",
  brandFirst: "Randhu",
  brandSecond: "Paksi",
  role: "Creative Web Developer",
  tagline:
    "Membangun website modern dengan struktur yang rapi, visual yang refined, dan interaksi yang terkontrol.",
  availability: {
    value: "Terbuka untuk kolaborasi, PKL, dan project latihan",
    isPlaceholder: false,
  },
  location: {
    value: location || "YOUR_LOCATION",
    isPlaceholder: !location,
  },
  cvHref: cvUrl || null,
};

export const socialLinks: SocialLink[] = [
  {
    key: "github",
    label: "GitHub",
    href: (env.VITE_SOCIAL_GITHUB as string | undefined) || null,
  },
  {
    key: "instagram",
    label: "Instagram",
    href: (env.VITE_SOCIAL_INSTAGRAM as string | undefined) || null,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: (env.VITE_SOCIAL_LINKEDIN as string | undefined) || null,
  },
  {
    key: "dribbble",
    label: "Dribbble",
    href: (env.VITE_SOCIAL_DRIBBBLE as string | undefined) || null,
  },
];

export const contactChannels: ContactChannel[] = [
  {
    key: "email",
    label: "Email",
    value: email || "your.email@example.com",
    href: email ? `mailto:${email}` : null,
    isPlaceholder: !email,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: whatsapp || "+62 8xx-xxxx-xxxx",
    href: whatsapp ? `https://wa.me/${whatsapp.replace(/\D/g, "")}` : null,
    isPlaceholder: !whatsapp,
  },
  {
    key: "location",
    label: "Lokasi",
    value: location || "YOUR_LOCATION",
    href: null,
    isPlaceholder: !location,
  },
];

/**
 * Endpoint pengiriman contact form (POST JSON).
 * Selama kosong, form berjalan dalam mode demo dan menjelaskannya ke pengguna.
 */
export const contactEndpoint =
  (env.VITE_CONTACT_ENDPOINT as string | undefined) || null;
