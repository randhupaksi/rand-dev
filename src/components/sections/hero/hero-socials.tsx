import { Briefcase, Camera, Code2, Palette } from "lucide-react";

const socialItems = [
  { label: "Instagram", href: "#", icon: Camera },
  { label: "Github", href: "#", icon: Code2 },
  { label: "Dribbble", href: "#", icon: Palette },
  { label: "LinkedIn", href: "#", icon: Briefcase },
];

export function HeroSocials() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socialItems.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className="inline-flex size-10 items-center justify-center rounded-full border border-[rgb(211_196_255/0.14)] bg-white/4 text-[var(--accent)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgb(211_196_255/0.22)] hover:bg-white/6 sm:size-11"
          >
            <Icon className="size-4" />
          </a>
        );
      })}
    </div>
  );
}
