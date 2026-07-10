import { skillsData } from '@/lib/data';
import Image from 'next/image';

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 animate-in fade-in slide-in-from-bottom-12 duration-500 overflow-hidden">
      <div className="text-center mb-16 animate-in fade-in duration-500">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">My Toolkit & Competencies</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">The technologies I use and the core skills I bring to the table.</p>
      </div>
      
      <div className="flex flex-col gap-12 max-w-full">
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => {
          const hasIcons = skills.some(skill => skill.iconPath);
          const marqueeSkills = Array(6).fill(skills).flat(); // Repeat enough times for seamless loop
          const animationClass = categoryIndex % 2 === 1 ? 'animate-marquee-reverse' : 'animate-marquee';
          
          // Calculate uniform speed (roughly 60 pixels per second)
          const estimatedItemWidth = hasIcons ? 168 : 144;
          const totalWidth = skills.length * 6 * estimatedItemWidth;
          const distanceToTravel = totalWidth / 2;
          const duration = Math.max(distanceToTravel / 60, 10); // Minimum 10s duration

          return (
            <div key={category} className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight max-w-5xl mx-auto px-4 md:px-0 text-left">{category}</h3>
              
              <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div 
                  className={`${animationClass} flex gap-6 py-4 items-center min-w-max`}
                  style={{ animationDuration: `${duration}s` }}
                >
                  {marqueeSkills.map((skill, index) => (
                    hasIcons ? (
                      <div 
                        key={`${skill.name}-${index}`} 
                        className="flex-shrink-0 flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl bg-card/30 backdrop-blur-md border border-white/5 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20 group h-24 w-28 md:h-32 md:w-36"
                      >
                        {skill.iconPath ? (
                          <div className="flex flex-col items-center gap-2 md:gap-3">
                            <div className="h-8 w-8 md:h-10 md:w-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                              <Image
                                src={skill.iconPath}
                                alt={`${skill.name} icon`}
                                width={40}
                                height={40}
                                className="object-contain"
                              />
                            </div>
                            <span className="text-sm font-medium text-foreground/90 text-center leading-tight">{skill.name}</span>
                          </div>
                        ) : (
                          <span className="text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors duration-300 text-center leading-tight">{skill.name}</span>
                        )}
                      </div>
                    ) : (
                      <div 
                        key={`${skill.name}-${index}`}
                        className="flex-shrink-0 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default font-medium shadow-sm"
                      >
                        {skill.name}
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
