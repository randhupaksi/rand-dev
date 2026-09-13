import { AboutSection } from "@/components/sections/about-section";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HomeCtaSection } from "@/components/sections/home-cta-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function HomePage() {
  usePageMeta(
    "Randhu Paksi Membumi - Frontend Developer",
    "Portfolio Randhu Paksi Membumi, Frontend Developer di Matik Creative Technology yang membangun website dan aplikasi responsive dengan React, Next.js, dan TypeScript.",
  );

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ProcessSection />
      <HomeCtaSection />
    </>
  );
}
