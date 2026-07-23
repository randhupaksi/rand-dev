import { AboutSection } from "@/components/sections/about-section";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HomeCtaSection } from "@/components/sections/home-cta-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ToolsSection } from "@/components/sections/tools-section";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteShell } from "@/components/layout/site-shell";

export default function App() {
  return (
    <SiteShell>
      <SiteNavbar />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ProcessSection />
      <ToolsSection />
      <HomeCtaSection />
    </SiteShell>
  );
}
