import {
  Layers3,
  Menu,
  Palette,
  Settings,
  Sparkles,
  WandSparkles,
} from "lucide-react";

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
        className="absolute left-1/2 top-[16%] h-32 w-32 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(194,74,255,0.18),transparent_68%)] blur-3xl sm:h-40 sm:w-40 lg:left-[12%] lg:top-[26%] lg:h-52 lg:w-52 lg:translate-x-0"
        data-hero-orb
      />
      <div
        className="absolute left-1/2 top-[4%] h-44 w-44 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,92,250,0.14),transparent_72%)] blur-3xl sm:h-52 sm:w-52 lg:left-auto lg:right-[8%] lg:top-[14%] lg:h-72 lg:w-72 lg:translate-x-0"
        data-hero-orb
      />

      <div className="relative min-h-[11rem] pt-0 sm:min-h-[22rem] lg:min-h-[34rem] lg:pt-0">
        <div
          className="relative mx-auto h-[15.25rem] w-[15.25rem] overflow-hidden rounded-full border border-[rgb(211_196_255/0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] shadow-[0_14px_32px_rgba(6,3,12,0.24)] sm:h-[19.5rem] sm:w-[19.5rem] lg:absolute lg:left-[10%] lg:top-[7%] lg:mx-0 lg:h-[26rem] lg:w-[26rem] lg:shadow-[0_24px_60px_rgba(6,3,12,0.36)]"
          data-hero-ring
        >
          <div className="absolute inset-0 rounded-full border border-[rgb(255,255,255,0.05)]" />
          <div className="absolute inset-[3%] rounded-full bg-[radial-gradient(120%_90%_at_50%_8%,rgba(194,74,255,0.32)_0%,rgba(27,20,39,0.62)_46%,rgba(16,12,23,0.96)_100%)]" />
          <div className="absolute inset-[9%] overflow-hidden rounded-full border border-[rgb(255,255,255,0.05)] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),rgba(14,10,20,0.94)_72%)]">
            <img
              src="/images/profile/randhu-no-bg.png"
              alt="Portrait of Randhu Paksi Membumi"
              className="absolute inset-0 h-full w-full scale-[1.08] object-contain object-bottom sm:scale-[1.14] lg:scale-[1.19]"
            />
          </div>
        </div>

        <div
          className="surface-panel absolute bottom-0 right-0 hidden w-[18rem] overflow-visible rounded-[1.6rem] p-0 shadow-[0_22px_48px_rgba(4,2,10,0.38)] md:block lg:hidden"
          data-hero-card
        >
          <div className="flex items-center justify-between border-b border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] px-5 py-4">
            <div className="text-base font-semibold tracking-tight text-foreground">
              <span className="text-[var(--accent)]">Randhu</span>{" "}
              <span className="text-foreground">Paksi</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Settings className="size-4" />
              <Menu className="size-4" />
            </div>
          </div>

          <div className="p-5">
            <div className="relative mx-auto mb-5 aspect-square w-[13rem] rounded-full border border-[rgb(211_196_255/0.14)] bg-[radial-gradient(circle,rgba(194,74,255,0.26),transparent_72%)] p-3 shadow-[0_0_36px_rgba(194,74,255,0.24)]">
              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/8 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),rgba(14,10,20,0.94)_72%)]">
                <img
                  src="/images/profile/randhu-no-bg.png"
                  alt="Portrait of Randhu Paksi Membumi"
                  className="absolute inset-0 h-full w-full scale-[1.18] object-contain object-bottom"
                />
              </div>
            </div>

            <div className="content-stack-sm">
              <div className="content-stack-xs">
                <p className="text-[1.75rem] font-semibold leading-tight text-foreground">
                  Hello, I'm
                </p>
                <h3 className="text-[2.2rem] font-semibold leading-[0.95] tracking-tight text-foreground">
                  Randhu Paksi
                </h3>
                <p className="text-[1.05rem] font-semibold text-foreground">
                  And I'm a{" "}
                  <span className="bg-gradient-to-r from-[#f1d3ff] via-[var(--accent)] to-[#c24aff] bg-clip-text text-transparent">
                    Web Developer
                  </span>
                </p>
              </div>

              <p className="text-sm leading-6 text-muted-foreground">
                Fokus pada website modern, interface premium, dan pengalaman
                digital yang rapi, interaktif, dan terasa matang.
              </p>

              <div className="inline-flex w-fit rounded-full border border-[rgb(211_196_255/0.16)] bg-[linear-gradient(135deg,#8f63ff_0%,#7c5cfa_60%,#6b49ef_100%)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground">
                Download CV
              </div>
            </div>
          </div>
        </div>

        {highlightItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`absolute ${item.className} hidden rounded-[1rem] border border-white/10 bg-black/18 px-4 py-3 backdrop-blur-md lg:block lg:rounded-[1.15rem]`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 rounded-full border border-white/10 bg-white/5 p-1.5 text-[var(--accent)]">
                  <Icon className="size-3.5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[0.64rem] uppercase tracking-[0.2em] text-[var(--brand-muted)]">
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
