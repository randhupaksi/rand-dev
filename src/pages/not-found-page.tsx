import { ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

import { usePageMeta } from "@/hooks/use-page-meta";

export default function NotFoundPage() {
  usePageMeta("Halaman tidak ditemukan — Randhu Paksi Membumi");

  return (
    <section className="flex min-h-[65vh] items-center section-shell-compact">
      <div className="content-stack-md mx-auto max-w-[36rem] text-center">
        <p className="bg-gradient-to-r from-[#f1d3ff] via-[var(--accent)] to-[#c24aff] bg-clip-text font-mono text-[clamp(4.5rem,12vw,8rem)] font-semibold leading-none tracking-tight text-transparent">
          404
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Halaman ini tidak ditemukan
        </h1>
        <p className="text-sm leading-7 text-muted-foreground">
          Link yang kamu buka mungkin salah ketik, sudah dipindahkan, atau memang
          belum dibuat. Kembali ke halaman utama atau jelajahi project.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            to="/"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-[rgb(211_196_255/0.18)] bg-[linear-gradient(135deg,#8f63ff_0%,#7c5cfa_60%,#6b49ef_100%)] px-6 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
          >
            <Home className="size-4" aria-hidden="true" />
            Kembali ke Home
          </Link>
          <Link
            to="/projects"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/10 bg-white/4 px-6 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/7"
          >
            Lihat Project
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
