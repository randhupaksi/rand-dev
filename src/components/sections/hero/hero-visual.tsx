import {
  Layers3,
  Menu,
  Palette,
  Settings,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlightItems = [
  {
    title: "Focus",
    description: "Premium branding rhythm.",
    icon: Sparkles,
    className:
      "left-[2%] top-[68%] max-w-[12rem] lg:bottom-[10%] lg:top-auto lg:left-[2%] lg:max-w-[13rem]",
  },
  {
    title: "Interactive UI",
    description: "Controlled motion and feedback.",
    icon: WandSparkles,
    className:
      "right-[2%] top-[12%] max-w-[12rem] lg:right-[2%] lg:top-[18%] lg:max-w-[13rem]",
  },
  {
    title: "Standard",
    description: "Clean product visual system.",
    icon: Layers3,
    className:
      "right-[4%] top-[72%] max-w-[12rem] lg:bottom-[18%] lg:top-auto lg:right-[6%] lg:max-w-[13rem]",
  },
  {
    title: "Visual Sense",
    description: "Refined contrast and spacing.",
    icon: Palette,
    className:
      "left-[6%] top-[16%] max-w-[12rem] lg:left-[0%] lg:top-[16%] lg:max-w-[13rem]",
  },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[37rem] overflow-hidden lg:overflow-visible" data-hero-float>
      <div
        className="hero-glow-secondary absolute left-1/2 top-[16%] h-32 w-32 -translate-x-1/2 rounded-full blur-3xl sm:h-40 sm:w-40 lg:left-[12%] lg:top-[26%] lg:h-52 lg:w-52 lg:translate-x-0"
        data-hero-orb
      />
      <div
        className="hero-glow-primary absolute left-1/2 top-[4%] h-44 w-44 -translate-x-1/2 rounded-full blur-3xl sm:h-52 sm:w-52 lg:left-auto lg:right-[8%] lg:top-[14%] lg:h-72 lg:w-72 lg:translate-x-0"
        data-hero-orb
      />

      <div className="relative min-h-[11rem] pt-0 sm:min-h-[22rem] lg:min-h-[34rem] lg:pt-0">
        <div
          className="hero-frame relative mx-auto size-60 overflow-hidden rounded-full border sm:size-80 lg:absolute lg:left-[10%] lg:top-[7%] lg:mx-0 lg:size-[26rem]"
          data-hero-ring
        >
          <div className="absolute inset-0 rounded-full border border-border-subtle" />
          <div className="hero-portrait-surface absolute inset-[3%] rounded-full" />
          <div className="hero-portrait-inner absolute inset-[9%] overflow-hidden rounded-full border">
            <img
              src="/images/profile/randhu-no-bg.png"
              alt="Portrait of Randhu Paksi Membumi"
              className="absolute inset-0 h-full w-full scale-[1.08] object-contain object-bottom sm:scale-[1.14] lg:scale-[1.19]"
            />
          </div>
        </div>

        <div
          className="ds-card absolute bottom-0 right-0 hidden w-72 overflow-visible p-0 shadow-[var(--shadow-dropdown)] md:block lg:hidden"
          data-hero-card
        >
          <div className="ds-divider flex items-center justify-between border-b bg-surface-subtle px-5 py-4">
            <div className="text-base font-semibold tracking-tight text-foreground">
              <span className="text-accent">Randhu</span>{" "}
              <span className="text-foreground">Paksi</span>
            </div>
            <div aria-hidden="true" className="flex items-center gap-2 text-muted-foreground">
              <Settings className="size-4" />
              <Menu className="size-4" />
            </div>
          </div>

          <div className="p-5">
            <div className="hero-glow-secondary relative mx-auto mb-5 aspect-square w-52 rounded-full border border-border-subtle p-3 shadow-[var(--shadow-glow)]">
              <div className="hero-portrait-inner relative h-full w-full overflow-hidden rounded-full border">
                <img
                  src="/images/profile/randhu-no-bg.png"
                  alt="Portrait of Randhu Paksi Membumi"
                  className="absolute inset-0 h-full w-full scale-[1.18] object-contain object-bottom"
                />
              </div>
            </div>

            <div className="content-stack-sm">
              <div className="content-stack-xs">
                <p className="type-h3">
                  Hello, I'm
                </p>
                <h3 className="type-h2">
                  Randhu Paksi
                </h3>
                <p className="type-body-medium text-foreground">
                  And I'm a{" "}
                  <span className="text-gradient-brand">
                    Web Developer
                  </span>
                </p>
              </div>

              <p className="text-sm leading-6 text-muted-foreground">
                Fokus pada website modern, interface premium, dan pengalaman
                digital yang rapi, interaktif, dan terasa matang.
              </p>

              <Link
                to="/contact"
                className="ds-badge ds-badge-primary type-overline text-primary-foreground"
              >
                Hubungi Saya
              </Link>
            </div>
          </div>
        </div>

        {highlightItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`absolute ${item.className} ds-card-subtle hidden rounded-[var(--control-radius)] px-4 py-3 backdrop-blur-md lg:block`}
            >
              <div className="flex items-start gap-3">
                <div className="ds-icon-control mt-0.5 size-8 shrink-0 text-accent">
                  <Icon className="size-3.5" />
                </div>
                <div className="min-w-0">
                  <p className="type-overline">
                    {item.title}
                  </p>
                  <p className="mt-1.5 max-w-[11.5rem] text-sm font-medium leading-5 text-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
