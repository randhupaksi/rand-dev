# Rand Dev - Portfolio Randhu Paksi Membumi

Website portfolio pribadi Randhu Paksi Membumi, Frontend Developer di Matik Creative Technology serta Frontend & UI/UX Instructor di IT Club SMK Citra Negara Depok. Multi-page SPA dengan arah visual **dark purple editorial dengan presisi enterprise**.

## Stack

- Vite 8 + React 19 + TypeScript (strict unused checks)
- React Router untuk multi-page routing
- Tailwind CSS 4 (`@tailwindcss/vite`) dengan design token di `src/styles/design-system.css`
- GSAP untuk motion (reveal, floating) dengan dukungan `prefers-reduced-motion`
- React Hook Form untuk contact form
- Lucide React untuk icon, CVA + `tailwind-merge` untuk variant/class
- Oxlint untuk static linting; npm sebagai package manager

## Menjalankan

```bash
npm install
npm run dev       # development server
npm run lint      # static check
npm run build     # typecheck + production build
npm run preview   # preview hasil build
```

## Struktur halaman

| Route | Isi |
| --- | --- |
| `/` | Hero, about ringkas, expertise, selected projects, proses kerja, tools, CTA |
| `/about` | Intro editorial, prinsip kerja, skill area, dan journey timeline |
| `/projects` | Semua project + slot "project berikutnya" |
| `/projects/:slug` | Case study per project (overview, challenge, approach, outcome, gallery) |
| `/contact` | Channel kontak, social, CV, contact form, FAQ |
| `*` | Halaman 404 |

## Struktur kode

- `src/data/` - **semua konten** (copy, project, kontak, navigasi). Ganti konten di sini, bukan di komponen.
- `src/types/` - kontrak konten.
- `src/pages/` - komposisi per halaman (lazy-loaded kecuali home).
- `src/components/layout/` - navbar, footer, root layout.
- `src/components/sections/` - section home.
- `src/components/common/` - primitif reusable: `MediaPlaceholder`, `DraftBadge`, `SocialLinks`, `ErrorBoundary`, `ScrollToTop`.
- `src/hooks/` - `useReveal` (animasi masuk), `usePageMeta` (title/description per halaman).
- `src/styles/design-system.css` - sumber kebenaran token visual.

## Design system

Seluruh styling lintas halaman memakai fondasi yang sama:

- `src/styles/design-system.css` menyimpan primitive color scale, semantic color,
  typography role, spacing, radius, shadow, surface, dan state token.
- `src/components/ui/button.tsx` menyediakan variant `primary`, `secondary`,
  `outline`, dan `ghost` dengan ukuran `sm`, `md`, dan `lg`.
- `src/components/ui/` menyediakan primitive reusable untuk badge, card,
  input/textarea, modal, dan table.
- Class typography `type-display`, `type-h1` sampai `type-h4`, `type-body`,
  `type-body-medium`, `type-body-sm`, `type-caption`, dan `type-overline`
  menjaga hierarchy konsisten pada semua route.

Komponen dan halaman harus memakai semantic token atau primitive tersebut.
Nilai visual baru hanya ditambahkan ke design system jika memang merupakan
keputusan reusable; nilai komposisi khusus tetap dibatasi pada art direction
yang tidak digunakan sebagai pattern global.

## Sistem placeholder (PENTING)

Website ini sengaja dibangun dengan sistem placeholder yang jujur: tidak ada link palsu, klaim palsu, atau foto palsu. Semua yang masih draft ditandai secara visual (badge **Draft/Placeholder/Coming Soon**).

### Cara mengganti data personal

Semua data personal terpusat dan dibaca dari environment variable. Salin `.env.example` menjadi `.env`, lalu isi:

| Variabel | Efek saat diisi |
| --- | --- |
| `VITE_EMAIL` | Email asli tampil dan bisa diklik (mailto) di Contact & footer |
| `VITE_WHATSAPP_NUMBER` | Channel WhatsApp aktif dengan link `wa.me` |
| `VITE_LOCATION` | Mengganti `YOUR_LOCATION` |
| `VITE_CV_URL` | Tombol CV aktif (menggantikan "Coming soon") |
| `VITE_SOCIAL_GITHUB` dll. | Menambah atau mengganti link social yang ditampilkan |
| `VITE_CONTACT_ENDPOINT` | Membuka contact form untuk mengirim POST JSON asli |

Identitas dasar (nama, role, tagline) ada di `src/data/site.ts`.

### Cara mengganti konten project

Edit `src/data/projects.ts`:

1. Isi `period`, `links.demo`, `links.repository` dengan data asli.
2. Lengkapi body case study yang masih draft, lalu set `isPlaceholder: false`.
3. Ubah `status` menjadi `"verified"` untuk menghilangkan badge draft.
4. Frame gambar (`MediaPlaceholder`) diganti dengan `<img>` screenshot asli ketika asset tersedia.

### Cara mengganti journey/pengalaman

Edit `src/data/about.ts` untuk memperbarui pengalaman kerja, pendidikan, mentoring, dan penghargaan yang sudah terverifikasi.

## Catatan

- Contact form tidak dibuka selama `VITE_CONTACT_ENDPOINT` kosong; website menjelaskan kondisi tersebut secara eksplisit dan tidak pernah berpura-pura menerima pesan.
- Foto profil di hero adalah asset asli di `public/images/profile/`.
- Module `src/components/ui/button.tsx` memicu warning Oxlint Fast Refresh yang sudah ada sejak awal (export komponen + konstanta); bukan regression.
