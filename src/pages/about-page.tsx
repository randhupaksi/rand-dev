import { ArrowRight, ArrowUpRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

import { DraftBadge } from "@/components/common/draft-badge";
import { journeyItems, principles, skillGroups } from "@/data/about";
import { siteIdentity } from "@/data/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useReveal } from "@/hooks/use-reveal";

export default function AboutPage() {
  usePageMeta(
    "About — Randhu Paksi Membumi",
    "Cara berpikir, prinsip kerja, skill, dan perjalanan Randhu Paksi Membumi sebagai creative web developer.",
  );

  const scopeRef = useReveal<HTMLDivElement>();

  return (
    <div ref={scopeRef}>
      {/* Intro editorial */}
      <section className="section-shell-compact">
        <div className="content-stack-md max-w-[52rem]">
          <div data-reveal className="section-eyebrow">
            About Me
          </div>
          <h1
            data-reveal
            className="section-title text-[clamp(2.6rem,5.2vw,4.5rem)]"
          >
            Menggabungkan struktur engineering dengan{" "}
            <span className="bg-gradient-to-r from-[#f1d3ff] via-[var(--accent)] to-[#c24aff] bg-clip-text text-transparent">
              rasa visual
            </span>
            .
          </h1>
          <p data-reveal className="section-copy max-w-[44rem]">
            Saya {siteIdentity.name}, siswa SMK PPLG kelas 11 dan {siteIdentity.role}.
            Bagi saya website yang baik lahir dari dua hal yang berjalan bersama:
            struktur yang dipikirkan dengan rapi, dan tampilan yang terasa disengaja
            sampai ke detail kecilnya.
          </p>
          <div data-reveal className="flex flex-wrap gap-2.5">
            <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-[var(--brand-soft)]">
              SMK PPLG — Kelas 11
            </span>
            <span className="rounded-full border border-[rgb(211_196_255/0.18)] bg-[rgb(124,92,250,0.1)] px-3.5 py-1.5 text-xs text-[var(--accent)]">
              {siteIdentity.role}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-[var(--brand-soft)]">
              {siteIdentity.availability.value}
            </span>
          </div>
        </div>
      </section>

      {/* Prinsip kerja — editorial rows, bukan card grid */}
      <section className="section-shell-compact">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div data-reveal className="content-stack-sm lg:sticky lg:top-32 lg:self-start">
            <div className="section-eyebrow">Working Philosophy</div>
            <h2 className="text-[clamp(1.9rem,3vw,2.7rem)] font-semibold tracking-tight text-foreground">
              Prinsip yang saya pegang di setiap project
            </h2>
            <p className="section-copy">
              Prinsip ini yang membuat hasil kerja tetap konsisten — apa pun jenis
              project dan stack-nya.
            </p>
          </div>

          <ol className="content-stack-lg">
            {principles.map((principle, index) => (
              <li
                key={principle.title}
                data-reveal
                className="grid gap-4 border-t border-white/8 pt-6 sm:grid-cols-[3.5rem_minmax(0,1fr)]"
              >
                <span className="font-mono text-sm text-[var(--brand-muted)]">
                  0{index + 1}
                </span>
                <div className="content-stack-xs">
                  <h3 className="text-xl font-semibold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Skills */}
      <section className="section-shell-compact">
        <div className="content-stack-lg">
          <div data-reveal className="content-stack-sm max-w-[44rem]">
            <div className="section-eyebrow">Skills & Tools</div>
            <h2 className="text-[clamp(1.9rem,3vw,2.7rem)] font-semibold tracking-tight text-foreground">
              Area yang sedang saya bangun dan dalami
            </h2>
            <p className="section-copy">
              Daftar ini adalah gambaran arah belajar saya saat ini — bukan klaim
              tingkat keahlian, melainkan peta area yang saya kerjakan setiap hari.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                data-reveal
                className="surface-panel interactive-ring p-[var(--panel-padding)]"
              >
                <div className="content-stack-sm">
                  <div className="content-stack-xs">
                    <h3 className="text-lg font-semibold text-foreground">
                      {group.title}
                    </h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {group.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-[var(--brand-soft)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="section-shell-compact">
        <div className="content-stack-lg">
          <div data-reveal className="content-stack-sm max-w-[44rem]">
            <div className="section-eyebrow">Journey</div>
            <h2 className="text-[clamp(1.9rem,3vw,2.7rem)] font-semibold tracking-tight text-foreground">
              Perjalanan sejauh ini
            </h2>
            <p className="section-copy">
              Entri bertanda draft adalah slot untuk pengalaman yang akan diisi
              seiring perjalanan — magang, lomba, atau project kolaborasi.
            </p>
          </div>

          <ol className="relative content-stack-lg border-l border-white/8 pl-8">
            {journeyItems.map((item) => (
              <li key={item.title} data-reveal className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.35rem] top-1.5 inline-flex size-3 items-center justify-center rounded-full border border-[rgb(211_196_255/0.35)] bg-[var(--background)]"
                >
                  <span className="size-1.5 rounded-full bg-[var(--accent)]" />
                </span>

                <div className="content-stack-xs">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--brand-muted)]">
                      {item.period}
                    </span>
                    {item.isPlaceholder ? <DraftBadge /> : null}
                  </div>
                  <h3 className="flex flex-wrap items-center gap-2.5 text-xl font-semibold text-foreground">
                    {!item.isPlaceholder ? (
                      <GraduationCap
                        aria-hidden="true"
                        className="size-4.5 text-[var(--accent)]"
                      />
                    ) : null}
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-[var(--brand-soft)]">
                    {item.organization}
                  </p>
                  <p className="max-w-[38rem] text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell-compact">
        <div
          data-reveal
          className="surface-elevated flex flex-col gap-6 p-[var(--card-padding)] sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="content-stack-xs">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Ingin lihat cara berpikir ini dalam bentuk nyata?
            </h2>
            <p className="text-sm leading-7 text-muted-foreground">
              Jelajahi project pilihan, atau langsung mulai percakapan.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[rgb(211_196_255/0.18)] bg-[linear-gradient(135deg,#8f63ff_0%,#7c5cfa_60%,#6b49ef_100%)] px-6 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
            >
              Lihat Project
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/10 bg-white/4 px-6 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/7"
            >
              Hubungi Saya
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
