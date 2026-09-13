import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CheckCircle2,
  FileText,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  TriangleAlert,
} from "lucide-react";

import { SocialLinks } from "@/components/common/social-links";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";
import { contactFaq } from "@/data/about";
import { contactChannels, contactEndpoint, siteIdentity, socialLinks } from "@/data/site";
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

type SubmitStatus = "idle" | "sent" | "error";

export default function ContactPage() {
  usePageMeta(
    "Contact - Randhu Paksi Membumi",
    "Get in touch with Randhu Paksi Membumi about frontend work, websites, apps, and UI/UX collaborations.",
  );

  const scopeRef = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const directChannels = contactChannels.filter((channel) => channel.href);
  const hasPublishedSocials = socialLinks.some((link) => link.href);

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

    if (!contactEndpoint) return;

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
        <div className="content-stack-md max-w-4xl">
          <div data-reveal className="section-eyebrow">
            Say hello
          </div>
          <h1 data-reveal className="type-h1">
            Let’s talk about{" "}
            <span className="text-gradient-brand">
              your project
            </span>
            .
          </h1>
          <p data-reveal className="section-copy max-w-3xl">
            {siteIdentity.availability.value}. Tell me what you’re working on—a
            website, dashboard, app, or interface experiment—and we can see where
            it goes.
          </p>
        </div>
      </section>

      <section className="section-shell-compact">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
          {/* Kontak & sosial */}
          <div className="content-stack-lg">
            {directChannels.length > 0 ? (
              <ul className="content-stack-sm">
              {directChannels.map((channel) => {
                const Icon = channelIconMap[channel.key];

                return (
                  <Card
                    as="li"
                    key={channel.key}
                    data-reveal
                    className="flex items-start gap-4 p-[var(--panel-padding)]"
                  >
                    <span className="ds-icon-control mt-0.5 shrink-0 text-accent">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div className="content-stack-xs min-w-0">
                      <span className="type-overline">
                        {channel.label}
                      </span>
                      <span className="flex flex-wrap items-center gap-2.5">
                        {channel.href ? (
                          <a
                            href={channel.href}
                            className="break-all font-mono text-sm text-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                          >
                            {channel.value}
                          </a>
                        ) : null}
                      </span>
                    </div>
                  </Card>
                );
              })}
              </ul>
            ) : (
              <div data-reveal className="border-y border-border-subtle py-6">
                <p className="type-overline">Direct contact</p>
                <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
                  Direct contact details are not published yet. I’m keeping this space
                  free of dummy email addresses or phone numbers.
                </p>
              </div>
            )}

            {hasPublishedSocials ? <div data-reveal className="content-stack-sm">
              <p className="type-overline">
                Find me online
              </p>
              <SocialLinks />
            </div> : null}

            {siteIdentity.cvHref ? <div data-reveal className="content-stack-sm">
              <p className="type-overline">
                Résumé
              </p>
              <a
                href={siteIdentity.cvHref}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "outline", size: "md" })}
              >
                <FileText className="size-4" aria-hidden="true" />
                View résumé
              </a>
            </div> : null}
          </div>

          {/* Form */}
          {contactEndpoint ? (
          <Card data-reveal className="p-[var(--card-padding)]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="content-stack-md"
            >
              <div className="content-stack-xs">
                <h2 className="type-h4">
                  Send a message
                </h2>
                <p className="type-body-sm">
                  Fill out the form below, or use one of the channels beside it.
                </p>
              </div>

              <div className="grid gap-[var(--form-gap)] sm:grid-cols-2">
                <div className="content-stack-xs">
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <Input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                  placeholder="Your name"
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    {...register("name", {
                      required: "Name is required.",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters.",
                      },
                    })}
                  />
                  {errors.name ? (
                    <p
                      id="contact-name-error"
                      className="type-caption text-destructive"
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
                  <Input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                  placeholder="you@email.com"
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "That email format doesn’t look right.",
                      },
                    })}
                  />
                  {errors.email ? (
                    <p
                      id="contact-email-error"
                      className="type-caption text-destructive"
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
                  Topic{" "}
                  <span className="font-normal text-muted-foreground">(optional)</span>
                </label>
                <Input
                  id="contact-subject"
                  type="text"
                  placeholder="e.g. website, dashboard, frontend collaboration"
                  {...register("subject")}
                />
              </div>

              <div className="content-stack-xs">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-foreground"
                >
                    Message
                </label>
                <Textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell me a little about the project or idea…"
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                  {...register("message", {
                      required: "Message is required.",
                    minLength: {
                      value: 10,
                        message: "Message must be at least 10 characters.",
                    },
                  })}
                />
                {errors.message ? (
                  <p
                    id="contact-message-error"
                    className="type-caption text-destructive"
                  >
                    {errors.message.message}
                  </p>
                ) : null}
              </div>

              <div className="content-stack-sm">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <Send className="size-4" aria-hidden="true" />
                  )}
                  {isSubmitting ? "Sending…" : "Send message"}
                </Button>

                <div aria-live="polite">
                  {status === "sent" ? (
                    <p className="ds-alert ds-alert-success">
                      <CheckCircle2
                        className="mt-0.5 size-3.5 shrink-0"
                        aria-hidden="true"
                      />
                      Message sent. Thanks—I’ll get back to you soon.
                    </p>
                  ) : null}
                  {status === "error" ? (
                    <p className="ds-alert ds-alert-error">
                      <TriangleAlert
                        className="mt-0.5 size-3.5 shrink-0"
                        aria-hidden="true"
                      />
                      The message could not be sent. Try again, or use one of the
                      contact channels beside it.
                    </p>
                  ) : null}
                </div>
              </div>
            </form>
          </Card>
          ) : (
            <aside data-reveal className="border-y border-border-subtle py-8 sm:py-10">
              <div className="content-stack-sm max-w-lg">
                <p className="type-overline">Contact form</p>
                <h2 className="type-h3">The form isn’t open yet.</h2>
                <p className="type-body-sm">
                  I’ll open this form once message delivery is configured, so nothing
                  gets submitted into a dead end.
                </p>
              </div>
            </aside>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-shell-compact">
        <div className="content-stack-lg">
          <div data-reveal className="content-stack-sm max-w-3xl">
            <div className="section-eyebrow">A few answers</div>
            <h2 className="type-h3">
              A few things you might want to know
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {contactFaq.map((faq) => (
              <details
                key={faq.question}
                data-reveal
                className="ds-card-subtle group open:border-border-strong"
              >
                <summary className="flex min-h-[var(--button-height-lg)] cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-medium text-foreground focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="text-lg text-brand-muted transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="type-body-sm px-5 pb-5">
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
