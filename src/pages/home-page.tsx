import { AboutSection } from "@/components/sections/about-section";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HomeCtaSection } from "@/components/sections/home-cta-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ToolsSection } from "@/components/sections/tools-section";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function HomePage() {
  usePageMeta(
    "Randhu Paksi Membumi — Creative Web Developer",
    "Portfolio Randhu Paksi Membumi: frontend developer yang fokus pada website modern dengan struktur rapi, visual refined, dan interaksi terkontrol.",
  );

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ProcessSection />
      <ToolsSection />
      <HomeCtaSection />
    </>
  );
}
