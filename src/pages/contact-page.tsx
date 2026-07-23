import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CheckCircle2,
  FileText,
  Info,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  TriangleAlert,
} from "lucide-react";

import { DraftBadge } from "@/components/common/draft-badge";
import { SocialLinks } from "@/components/common/social-links";
import { contactFaq } from "@/data/about";
import { contactChannels, contactEndpoint, siteIdentity } from "@/data/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useReveal } from "@/hooks/use-reveal";

const channelIconMap = {
  email: Mail,
  whatsapp: MessageCircle,
  location: MapPin,
} as const;

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SubmitStatus = "idle" | "sent" | "demo" | "error";

const inputClass =
  "h-[var(--input-height)] w-full rounded-[1.1rem] border border-white/10 bg-white/[0.03] px-4 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors duration-200 focus:border-[rgb(211_196_255/0.35)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] aria-[invalid=true]:border-[rgb(239_107_129/0.5)]";

export default function ContactPage() {
  usePageMeta(
    "Contact — Randhu Paksi Membumi",
    "Hubungi Randhu Paksi Membumi untuk diskusi project website branding, dashboard, atau kolaborasi frontend.",
  );

  const scopeRef = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");

    if (!contactEndpoint) {
      // Mode demo: tidak ada endpoint yang dikonfigurasi, jadi tidak ada
      // pesan yang benar-benar terkirim — status "demo" menjelaskannya.
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("demo");
      return;
    }

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`Contact endpoint responded ${response.status}`);
      }

      setStatus("sent");
      reset();
    } catch (error) {
      console.error("Failed to submit contact form:", error);
      setStatus("error");
    }
  };

  return (
    <div ref={scopeRef}>
      <section className="section-shell-compact">
        <div className="content-stack-md max-w-[52rem]">
          <div data-reveal className="section-eyebrow">
            Contact
          </div>
          <h1 data-reveal className="section-title text-[clamp(2.6rem,5.2vw,4.5rem)]">
            Mari bicara soal{" "}
            <span className="bg-gradient-to-r from-[#f1d3ff] via-[var(--accent)] to-[#c24aff] bg-clip-text text-transparent">
              project kamu
            </span>
            .
          </h1>
          <p data-reveal className="section-copy max-w-[44rem]">
            {siteIdentity.availability.value}. Ceritakan kebutuhanmu — website
            branding, dashboard, atau eksperimen interface — dan kita lihat apa
            yang bisa dibangun bersama.
          </p>
        </div>
      </section>

      <section className="section-shell-compact">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
          {/* Kontak & sosial */}
          <div className="content-stack-lg">
            <ul className="content-stack-sm">
              {contactChannels.map((channel) => {
                const Icon = channelIconMap[channel.key];

                return (
                  <li
                    key={channel.key}
                    data-reveal
                    className="surface-panel flex items-start gap-4 p-[var(--panel-padding)]"
                  >
                    <span className="mt-0.5 inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/4 text-[var(--accent)]">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div className="content-stack-xs min-w-0">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-muted)]">
                        {channel.label}
                      </span>
                      <span className="flex flex-wrap items-center gap-2.5">
                        {channel.href ? (
                          <a
                            href={channel.href}
                            className="break-all font-mono text-sm text-foreground transition-colors duration-200 hover:text-[var(--accent)]"
                          >
                            {channel.value}
                          </a>
                        ) : (
                          <span className="break-all font-mono text-sm text-[var(--brand-soft)]">
                            {channel.value}
                          </span>
                        )}
                        {channel.isPlaceholder ? (
                          <DraftBadge label="Placeholder" />
                        ) : null}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div data-reveal className="content-stack-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-muted)]">
                Social
              </p>
              <SocialLinks />
            </div>

            <div data-reveal className="content-stack-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-muted)]">
                Curriculum Vitae
              </p>
              {siteIdentity.cvHref ? (
                <a
                  href={siteIdentity.cvHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 w-fit items-center gap-2 rounded-full border border-[rgb(211_196_255/0.18)] bg-white/4 px-6 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/7"
                >
                  <FileText className="size-4" aria-hidden="true" />
                  Lihat CV
                </a>
              ) : (
                <span className="inline-flex h-12 w-fit cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-white/14 bg-white/[0.02] px-6 text-sm text-muted-foreground/70">
                  <FileText className="size-4" aria-hidden="true" />
                  CV
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[var(--brand-muted)]">
                    Coming soon
                  </span>
                </span>
              )}
            </div>
          </div>

          {/* Form */}
          <div data-reveal className="surface-panel p-[var(--card-padding)]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="content-stack-md"
            >
              <div className="content-stack-xs">
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  Kirim pesan
                </h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  Isi form di bawah, atau gunakan channel di samping.
                </p>
              </div>

              {!contactEndpoint ? (
                <p className="flex items-start gap-2.5 rounded-[1.1rem] border border-[rgb(116_183_255/0.22)] bg-[rgb(116_183_255/0.06)] px-4 py-3 text-xs leading-5 text-[var(--info)]">
                  <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                  Form ini berjalan dalam mode demo karena endpoint pengiriman
                  belum dikonfigurasi (VITE_CONTACT_ENDPOINT). Pesan tidak akan
                  terkirim ke mana pun.
                </p>
              ) : null}

              <div className="grid gap-[var(--form-gap)] sm:grid-cols-2">
                <div className="content-stack-xs">
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-foreground"
                  >
                    Nama
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Nama kamu"
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={inputClass}
                    {...register("name", {
                      required: "Nama wajib diisi.",
                      minLength: {
                        value: 2,
                        message: "Nama minimal 2 karakter.",
                      },
                    })}
                  />
                  {errors.name ? (
                    <p
                      id="contact-name-error"
                      className="text-xs text-[var(--destructive)]"
                    >
                      {errors.name.message}
                    </p>
                  ) : null}
                </div>

                <div className="content-stack-xs">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder="nama@email.com"
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={inputClass}
                    {...register("email", {
                      required: "Email wajib diisi.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Format email tidak valid.",
                      },
                    })}
                  />
                  {errors.email ? (
                    <p
                      id="contact-email-error"
                      className="text-xs text-[var(--destructive)]"
                    >
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="content-stack-xs">
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-medium text-foreground"
                >
                  Topik{" "}
                  <span className="font-normal text-muted-foreground">(opsional)</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Misal: website branding, dashboard, kolaborasi"
                  className={inputClass}
                  {...register("subject")}
                />
              </div>

              <div className="content-stack-xs">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-foreground"
                >
                  Pesan
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Ceritakan konteks project atau ide kamu…"
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                  className="w-full resize-y rounded-[1.1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors duration-200 focus:border-[rgb(211_196_255/0.35)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] aria-[invalid=true]:border-[rgb(239_107_129/0.5)]"
                  {...register("message", {
                    required: "Pesan wajib diisi.",
                    minLength: {
                      value: 10,
                      message: "Pesan minimal 10 karakter.",
                    },
                  })}
                />
                {errors.message ? (
                  <p
                    id="contact-message-error"
                    className="text-xs text-[var(--destructive)]"
                  >
                    {errors.message.message}
                  </p>
                ) : null}
              </div>

              <div className="content-stack-sm">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-[var(--button-height-lg)] w-full items-center justify-center gap-2 rounded-full border border-[rgb(211_196_255/0.18)] bg-[linear-gradient(135deg,#8f63ff_0%,#7c5cfa_60%,#6b49ef_100%)] px-6 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting ? (
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <Send className="size-4" aria-hidden="true" />
                  )}
                  {isSubmitting ? "Mengirim…" : "Kirim Pesan"}
                </button>

                <div aria-live="polite">
                  {status === "demo" ? (
                    <p className="flex items-start gap-2.5 rounded-[1.1rem] border border-[rgb(245_191_93/0.24)] bg-[rgb(245_191_93/0.06)] px-4 py-3 text-xs leading-5 text-[var(--warning)]">
                      <TriangleAlert
                        className="mt-0.5 size-3.5 shrink-0"
                        aria-hidden="true"
                      />
                      Validasi form berhasil, tetapi ini mode demo — pesan TIDAK
                      terkirim. Konfigurasikan VITE_CONTACT_ENDPOINT untuk
                      mengaktifkan pengiriman asli.
                    </p>
                  ) : null}
                  {status === "sent" ? (
                    <p className="flex items-start gap-2.5 rounded-[1.1rem] border border-[rgb(61_214_160/0.24)] bg-[rgb(61_214_160/0.06)] px-4 py-3 text-xs leading-5 text-[var(--success)]">
                      <CheckCircle2
                        className="mt-0.5 size-3.5 shrink-0"
                        aria-hidden="true"
                      />
                      Pesan terkirim. Terima kasih — akan dibalas secepatnya.
                    </p>
                  ) : null}
                  {status === "error" ? (
                    <p className="flex items-start gap-2.5 rounded-[1.1rem] border border-[rgb(239_107_129/0.24)] bg-[rgb(239_107_129/0.06)] px-4 py-3 text-xs leading-5 text-[var(--destructive)]">
                      <TriangleAlert
                        className="mt-0.5 size-3.5 shrink-0"
                        aria-hidden="true"
                      />
                      Pesan gagal terkirim. Coba lagi, atau gunakan channel
                      kontak di samping.
                    </p>
                  ) : null}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-shell-compact">
        <div className="content-stack-lg">
          <div data-reveal className="content-stack-sm max-w-[44rem]">
            <div className="section-eyebrow">FAQ</div>
            <h2 className="text-[clamp(1.9rem,3vw,2.7rem)] font-semibold tracking-tight text-foreground">
              Pertanyaan yang sering muncul
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {contactFaq.map((faq) => (
              <details
                key={faq.question}
                data-reveal
                className="group rounded-[1.4rem] border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.03),rgba(0,0,0,0.18))] open:border-[rgb(211_196_255/0.22)]"
              >
                <summary className="flex min-h-[3.5rem] cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-medium text-foreground [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="text-lg text-[var(--brand-muted)] transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
