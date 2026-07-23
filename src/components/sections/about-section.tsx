import { aboutProfile } from "@/data/home";

import { AboutRoot } from "@/components/sections/about/about-root";

export function AboutSection() {
  return <AboutRoot profile={aboutProfile} />;
}
