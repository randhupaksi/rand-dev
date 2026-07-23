import { ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button-variants";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function NotFoundPage() {
  usePageMeta("Halaman tidak ditemukan — Randhu Paksi Membumi");

  return (
    <section className="flex min-h-[65vh] items-center section-shell-compact">
      <div className="content-stack-md mx-auto max-w-xl text-center">
        <p className="text-gradient-brand font-mono text-6xl font-semibold leading-none tracking-tight sm:text-8xl">
          404
        </p>
        <h1 className="type-h3">
          Halaman ini tidak ditemukan
        </h1>
        <p className="type-body-sm">
          Link yang kamu buka mungkin salah ketik, sudah dipindahkan, atau memang
          belum dibuat. Kembali ke halaman utama atau jelajahi project.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            to="/"
            className={buttonVariants({ variant: "primary", size: "md" })}
          >
            <Home className="size-4" aria-hidden="true" />
            Kembali ke Home
          </Link>
          <Link
            to="/projects"
            className={buttonVariants({ variant: "outline", size: "md" })}
          >
            Lihat Project
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
