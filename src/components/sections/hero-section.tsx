import { Marquee } from "@/components/common/marquee";
import { HeroRoot } from "@/components/sections/hero/hero-root";
import { heroContent, heroTickerItems } from "@/data/hero";

export function HeroSection() {
  return (
    <>
      <HeroRoot content={heroContent} />

      <div className="border-y border-white/6 py-5">
        <Marquee
          items={heroTickerItems}
          duration={40}
          itemClassName="font-mono text-xs font-medium uppercase tracking-[0.3em] text-[var(--brand-muted)]"
        />
      </div>
    </>
  );
}
