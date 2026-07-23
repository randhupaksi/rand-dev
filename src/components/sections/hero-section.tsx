import { Marquee } from "@/components/common/marquee";
import { HeroRoot } from "@/components/sections/hero/hero-root";
import { heroContent, heroTickerItems } from "@/data/hero";

export function HeroSection() {
  return (
    <>
      <HeroRoot content={heroContent} />

      <div className="ds-divider border-y py-5">
        <Marquee
          items={heroTickerItems}
          duration={40}
          itemClassName="type-overline"
        />
      </div>
    </>
  );
}
