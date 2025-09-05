import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { GetInTouchSection } from "@/components/GetInTouchSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 space-y-12 sm:space-y-16">
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection>
        <ProjectsSection />
      </AnimatedSection>
      <AnimatedSection>
        <ExperienceSection />
      </AnimatedSection>
      <AnimatedSection>
        <EducationSection />
      </AnimatedSection>
      <AnimatedSection>
        <CertificationsSection />
      </AnimatedSection>
      <AnimatedSection>
        <SkillsSection />
      </AnimatedSection>
      <AnimatedSection>
        <GetInTouchSection />
      </AnimatedSection>
    </div>
  );
}
