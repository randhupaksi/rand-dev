import {
  ArrowUpRight,
  ChevronDown,
  FileText,
  Mail,
} from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

import { SocialLinks } from "@/components/common/social-links";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card } from "@/components/ui/card";
import { contactFaq } from "@/data/about";
import { contactChannels, siteIdentity, socialLinks } from "@/data/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const channelIconMap = {
  email: Mail,
} as const;

export default function ContactPage() {
  usePageMeta(
    "Contact - Randhu Paksi Membumi",
    "Find Randhu Paksi Membumi for enterprise UI/UX, frontend, and full-stack product collaborations.",
  );

  const scopeRef = useReveal<HTMLDivElement>();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const faqAnswerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const faqMotionReady = useRef(false);
  const directChannels = contactChannels.filter((channel) => channel.href);
  const publishedSocials = socialLinks.filter((link) => link.href);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    faqAnswerRefs.current.forEach((answer, index) => {
      if (!answer) {
        return;
      }

      const isOpen = index === openFaqIndex;

      if (!faqMotionReady.current || reduceMotion) {
        gsap.set(answer, { height: isOpen ? "auto" : 0 });
        return;
      }

      gsap.to(answer, {
        height: isOpen ? "auto" : 0,
        duration: isOpen ? 0.42 : 0.3,
        ease: isOpen ? "power3.out" : "power2.inOut",
        overwrite: "auto",
      });
    });

    faqMotionReady.current = true;
  }, [openFaqIndex]);

  return (
    <div ref={scopeRef}>
      <section className="section-shell-compact">
        <div className="grid gap-10 border-b border-border-subtle pb-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(15rem,0.75fr)] lg:items-end lg:gap-16">
          <div className="content-stack-md">
            <div data-reveal className="section-eyebrow">Say hello</div>
            <h1 data-reveal className="type-h1 max-w-3xl">
              Let’s talk about the{" "}
              <span className="text-gradient-brand">work!</span>
            </h1>
          </div>
          <div data-reveal className="border-l border-border-strong pl-5">
            <p className="type-overline">Product frontend</p>
            <p className="mt-3 max-w-xs text-sm leading-7 text-muted-foreground">
              Enterprise web products with real workflows behind them - from clean interfaces
              to role-aware screens and connected APIs.
            </p>
          </div>
        </div>
        <p data-reveal className="section-copy mt-8 max-w-3xl">
          I’m a frontend and full-stack developer at Matik Creative Technology.
          If you’re shaping an enterprise product that needs a clean interface,
          thoughtful interaction, and clear workflow logic, you can reach me through the channels below.
        </p>
      </section>

      <section className="section-shell-compact">
        <div className="grid gap-14 lg:grid-cols-[minmax(12rem,0.58fr)_minmax(0,1.42fr)] lg:items-start lg:gap-20">
          <div className="content-stack-lg">
            <div data-reveal className="content-stack-sm">
              <p className="type-overline">Where to find me</p>
              <h2 className="type-h3 max-w-sm">Let’s talk about the workflow</h2>
              <p className="type-body-sm max-w-md">
                Email is best for project conversations. My public profiles are
                there if you want to see the projects first.
              </p>
            </div>

            {directChannels.length > 0 ? (
              <ul className="content-stack-sm">
                {directChannels.map((channel) => {
                  const Icon = channelIconMap[channel.key];
                  return (
                    <Card as="li" key={channel.key} data-reveal className="flex items-start gap-4 p-(--panel-padding)">
                      <span className="ds-icon-control mt-0.5 shrink-0 text-accent">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <div className="content-stack-xs min-w-0">
                        <span className="type-overline">{channel.label}</span>
                        <a
                          href={channel.href ?? undefined}
                          className="ds-text-link break-all font-mono text-sm text-foreground hover:text-accent"
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
                <p className="type-overline">Resume</p>
                <a
                  href={siteIdentity.cvHref}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "outline", size: "md" })}
                >
                  <FileText className="size-4" aria-hidden="true" />
                  View resume
                </a>
              </div>
            ) : null}
          </div>

          <aside data-reveal className="content-stack-md border-y border-border-subtle py-6 sm:py-8">
            <div className="content-stack-sm max-w-xl">
              <p className="type-overline">Online profiles</p>
              <h2 className="type-h3">Follow the projects in public</h2>
              <p className="type-body-sm">
              Code, project history, and occasional updates live across these profiles.
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
                      className="ds-text-link group grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 py-4 text-sm font-medium text-foreground hover:text-accent sm:grid-cols-[3rem_1fr_auto]"
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
            <div className="section-eyebrow">Working together</div>
            <h2 className="type-h3 max-w-sm">The useful stuff to know before you reach out</h2>
            <p className="type-body-sm max-w-xs">
              A quick read on the product work I’m best placed to help with - and how I turn unclear requirements into clean, usable flows.
            </p>
          </div>
          <div className="border-t border-border-subtle">
            {contactFaq.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              const answerId = `contact-faq-answer-${index}`;

              return (
                <article key={faq.question} data-reveal className="group border-b border-border-subtle">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenFaqIndex((current) => (current === index ? -1 : index))}
                    className="faq-option group grid min-h-(--button-height-lg) w-full grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-3 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring motion-reduce:transition-none sm:grid-cols-[2.5rem_minmax(0,1fr)_auto]"
                  >
                    <span className="font-mono text-xs font-medium tracking-widest text-brand-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-medium text-foreground transition-transform duration-200 group-hover:translate-x-0.5 sm:text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        "size-5 shrink-0 text-accent transition-transform duration-300 ease-standard motion-reduce:transition-none",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                  <div
                    ref={(node) => {
                      faqAnswerRefs.current[index] = node;
                    }}
                    id={answerId}
                    role="region"
                    aria-hidden={!isOpen}
                    className="h-0 overflow-hidden"
                  >
                    <p className="type-body-sm max-w-2xl pb-5 pl-8 pr-8 sm:pl-10">{faq.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
