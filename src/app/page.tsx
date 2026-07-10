import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { GetInTouchSection } from "@/components/GetInTouchSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { VolunteerSection } from "@/components/volunteer-section";
import { EducationSection } from "@/components/EducationSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection>
        <ExperienceSection />
      </AnimatedSection>
      <AnimatedSection>
        <EducationSection />
      </AnimatedSection>
      <AnimatedSection>
        <SkillsSection />
      </AnimatedSection>
      <AnimatedSection>
        <ProjectsSection />
      </AnimatedSection>
      <AnimatedSection>
        <CertificationsSection />
      </AnimatedSection>
      <AnimatedSection>
        <VolunteerSection />
      </AnimatedSection>
      <AnimatedSection>
        <GetInTouchSection />
      </AnimatedSection>

    </div>
  );
}
