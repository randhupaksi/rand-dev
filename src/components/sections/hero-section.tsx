import { HeroRoot } from "@/components/sections/hero/hero-root";
import { heroContent } from "@/data/hero";

export function HeroSection() {
  return <HeroRoot content={heroContent} />;
}
