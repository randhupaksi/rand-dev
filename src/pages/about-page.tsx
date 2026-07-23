import { ArrowRight, ArrowUpRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

import { DraftBadge } from "@/components/common/draft-badge";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
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
        <div className="content-stack-md max-w-4xl">
          <div data-reveal className="section-eyebrow">
            About Me
          </div>
          <h1
            data-reveal
            className="type-h1"
          >
            Menggabungkan struktur engineering dengan{" "}
            <span className="text-gradient-brand">
              rasa visual
            </span>
            .
          </h1>
          <p data-reveal className="section-copy max-w-3xl">
            Saya {siteIdentity.name}, siswa SMK PPLG kelas 11 dan {siteIdentity.role}.
            Bagi saya website yang baik lahir dari dua hal yang berjalan bersama:
            struktur yang dipikirkan dengan rapi, dan tampilan yang terasa disengaja
            sampai ke detail kecilnya.
          </p>
          <div data-reveal className="flex flex-wrap gap-2.5">
            <Badge>
              SMK PPLG — Kelas 11
            </Badge>
            <Badge variant="primary">
              {siteIdentity.role}
            </Badge>
            <Badge>
              {siteIdentity.availability.value}
            </Badge>
          </div>
        </div>
      </section>

      {/* Prinsip kerja — editorial rows, bukan card grid */}
      <section className="section-shell-compact">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div data-reveal className="content-stack-sm lg:sticky lg:top-32 lg:self-start">
            <div className="section-eyebrow">Working Philosophy</div>
            <h2 className="type-h3">
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
                className="ds-divider grid gap-4 border-t pt-6 sm:grid-cols-[3.5rem_minmax(0,1fr)]"
              >
                <span className="font-mono text-sm text-brand-muted">
                  0{index + 1}
                </span>
                <div className="content-stack-xs">
                  <h3 className="type-h4">
                    {principle.title}
                  </h3>
                  <p className="type-body-sm">
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
          <div data-reveal className="content-stack-sm max-w-3xl">
            <div className="section-eyebrow">Skills & Tools</div>
            <h2 className="type-h3">
              Area yang sedang saya bangun dan dalami
            </h2>
            <p className="section-copy">
              Daftar ini adalah gambaran arah belajar saya saat ini — bukan klaim
              tingkat keahlian, melainkan peta area yang saya kerjakan setiap hari.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <Card
                as="article"
                key={group.title}
                data-reveal
                interactive
                className="p-[var(--panel-padding)]"
              >
                <div className="content-stack-sm">
                  <div className="content-stack-xs">
                    <h3 className="type-h4">
                      {group.title}
                    </h3>
                    <p className="type-body-sm">
                      {group.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item}>
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="section-shell-compact">
        <div className="content-stack-lg">
          <div data-reveal className="content-stack-sm max-w-3xl">
            <div className="section-eyebrow">Journey</div>
            <h2 className="type-h3">
              Perjalanan sejauh ini
            </h2>
            <p className="section-copy">
              Entri bertanda draft adalah slot untuk pengalaman yang akan diisi
              seiring perjalanan — magang, lomba, atau project kolaborasi.
            </p>
          </div>

          <ol className="ds-divider relative content-stack-lg border-l pl-8">
            {journeyItems.map((item) => (
              <li key={item.title} data-reveal className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-9 top-1.5 inline-flex size-3 items-center justify-center rounded-full border border-border-strong bg-background"
                >
                  <span className="size-1.5 rounded-full bg-accent" />
                </span>

                <div className="content-stack-xs">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="type-overline">
                      {item.period}
                    </span>
                    {item.isPlaceholder ? <DraftBadge /> : null}
                  </div>
                  <h3 className="type-h4 flex flex-wrap items-center gap-2.5">
                    {!item.isPlaceholder ? (
                      <GraduationCap
                        aria-hidden="true"
                        className="size-4 text-accent"
                      />
                    ) : null}
                    {item.title}
                  </h3>
                  <p className="type-body-medium text-brand-soft">
                    {item.organization}
                  </p>
                  <p className="type-body-sm max-w-2xl">
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
            <h2 className="type-h4">
              Ingin lihat cara berpikir ini dalam bentuk nyata?
            </h2>
            <p className="type-body-sm">
              Jelajahi project pilihan, atau langsung mulai percakapan.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className={buttonVariants({ variant: "primary", size: "md" })}
            >
              Lihat Project
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className={buttonVariants({ variant: "outline", size: "md" })}
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
