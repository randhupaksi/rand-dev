import type {
  ContactChannel,
  SiteIdentity,
  SocialLink,
} from "@/types/site";

/**
 * Satu-satunya sumber informasi personal di seluruh website.
 *
 * Email, WhatsApp, lokasi, dan CV dibaca dari `.env` (lihat `.env.example`).
 * LinkedIn memakai profil publik yang sudah diverifikasi; environment variable
 * tetap dapat digunakan bila profil tersebut perlu diganti.
 */
const env = import.meta.env;

const email = (env.VITE_EMAIL as string | undefined) || "";
const whatsapp = (env.VITE_WHATSAPP_NUMBER as string | undefined) || "";
const location = (env.VITE_LOCATION as string | undefined) || "";
const cvUrl = (env.VITE_CV_URL as string | undefined) || "";
const linkedInUrl =
  (env.VITE_SOCIAL_LINKEDIN as string | undefined) ||
  "https://id.linkedin.com/in/randhu-paksi-membumi";

export const siteIdentity: SiteIdentity = {
  name: "Randhu Paksi Membumi",
  brandFirst: "Randhu",
  brandSecond: "Paksi",
  role: "Frontend Developer",
  tagline:
    "Frontend Developer who turns rough ideas into websites and apps that feel good to use.",
  availability: {
    value: "Open to frontend and UI/UX conversations",
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
    href: linkedInUrl,
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
 * Selama kosong, UI menampilkan state bahwa form belum dibuka untuk pengiriman.
 */
export const contactEndpoint =
  (env.VITE_CONTACT_ENDPOINT as string | undefined) || null;
