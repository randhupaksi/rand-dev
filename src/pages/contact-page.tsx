import {
  ArrowUpRight,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { SocialLinks } from "@/components/common/social-links";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card } from "@/components/ui/card";
import { contactFaq } from "@/data/about";
import { contactChannels, siteIdentity, socialLinks } from "@/data/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useReveal } from "@/hooks/use-reveal";

const channelIconMap = {
  email: Mail,
  whatsapp: MessageCircle,
  location: MapPin,
} as const;

export default function ContactPage() {
  usePageMeta(
    "Contact - Randhu Paksi Membumi",
    "Find Randhu Paksi Membumi online for frontend, full-stack, and UI/UX collaborations.",
  );

  const scopeRef = useReveal<HTMLDivElement>();
  const directChannels = contactChannels.filter((channel) => channel.href);
  const publishedSocials = socialLinks.filter((link) => link.href);

  return (
    <div ref={scopeRef}>
      <section className="section-shell-compact">
        <div className="grid gap-10 border-b border-border-subtle pb-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(15rem,0.75fr)] lg:items-end lg:gap-16">
          <div className="content-stack-md">
            <div data-reveal className="section-eyebrow">Say hello</div>
            <h1 data-reveal className="type-h1 max-w-3xl">
              Let’s talk about the{" "}
              <span className="text-gradient-brand">work</span>.
            </h1>
          </div>
          <div data-reveal className="border-l border-border-strong pl-5">
            <p className="type-overline">Product frontend</p>
            <p className="mt-3 max-w-xs text-sm leading-7 text-muted-foreground">
              Web products with real workflows behind them—from clear interfaces
              to role-aware screens and connected APIs.
            </p>
          </div>
        </div>
        <p data-reveal className="section-copy mt-8 max-w-3xl">
          I’m a frontend and full-stack developer at Matik Creative Technology.
          If you’re shaping a web product that needs clear interface and
          workflow work, you can reach me through the channels below.
        </p>
      </section>

      <section className="section-shell-compact">
        <div className="grid gap-14 lg:grid-cols-[minmax(12rem,0.58fr)_minmax(0,1.42fr)] lg:items-start lg:gap-20">
          <div className="content-stack-lg">
            <div data-reveal className="content-stack-sm">
              <p className="type-overline">Where to find me</p>
              <h2 className="type-h3 max-w-sm">Use the channel that fits the conversation.</h2>
              <p className="type-body-sm max-w-md">
                Email is best for project conversations. My public profiles are
                there if you want to see the work first.
              </p>
            </div>

            {directChannels.length > 0 ? (
              <ul className="content-stack-sm">
                {directChannels.map((channel) => {
                  const Icon = channelIconMap[channel.key];
                  return (
                    <Card as="li" key={channel.key} data-reveal className="flex items-start gap-4 p-[var(--panel-padding)]">
                      <span className="ds-icon-control mt-0.5 shrink-0 text-accent">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <div className="content-stack-xs min-w-0">
                        <span className="type-overline">{channel.label}</span>
                        <a
                          href={channel.href ?? undefined}
                          className="break-all font-mono text-sm text-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                        >
                          {channel.value}
                        </a>
                      </div>
                    </Card>
                  );
                })}
              </ul>
            ) : null}

            {siteIdentity.cvHref ? (
              <div data-reveal className="content-stack-sm">
                <p className="type-overline">Résumé</p>
                <a
                  href={siteIdentity.cvHref}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "outline", size: "md" })}
                >
                  <FileText className="size-4" aria-hidden="true" />
                  View résumé
                </a>
              </div>
            ) : null}
          </div>

          <aside data-reveal className="content-stack-md border-y border-border-subtle py-6 sm:py-8">
            <div className="content-stack-sm max-w-xl">
              <p className="type-overline">Online profiles</p>
              <h2 className="type-h3">Follow the work in public.</h2>
              <p className="type-body-sm">
                Code, work history, and occasional updates live across these profiles.
              </p>
            </div>

            <SocialLinks className="pt-1" />

            <nav aria-label="Social profiles">
              <ol className="border-t border-border-subtle">
                {publishedSocials.map((link, index) => (
                  <li key={link.key} className="border-b border-border-subtle">
                    <a
                      href={link.href ?? undefined}
                      target="_blank"
                      rel="noreferrer"
                      className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 py-4 text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:grid-cols-[3rem_1fr_auto]"
                    >
                      <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                      <span>{link.label}</span>
                      <span className="flex items-center gap-2 text-muted-foreground group-hover:text-accent">
                        <span className="hidden font-mono text-xs sm:inline">Open profile</span>
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
        </div>
      </section>

      <section className="section-shell-compact">
        <div className="grid gap-10 lg:grid-cols-[minmax(12rem,0.58fr)_minmax(0,1.42fr)] lg:gap-20">
          <div data-reveal className="content-stack-sm">
            <div className="section-eyebrow">A few answers</div>
            <h2 className="type-h3 max-w-sm">A little context before we talk.</h2>
            <p className="type-body-sm max-w-xs">
              The quick version of how I work and what I can help with.
            </p>
          </div>
          <div className="border-t border-border-subtle">
            {contactFaq.map((faq) => (
              <details key={faq.question} data-reveal className="group border-b border-border-subtle">
                <summary className="flex min-h-[var(--button-height-lg)] cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-medium text-foreground focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span aria-hidden="true" className="text-lg text-brand-muted transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="type-body-sm max-w-2xl pb-5 pr-8">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
