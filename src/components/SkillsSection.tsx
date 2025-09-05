import { skillsData } from '@/lib/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Image from 'next/image';

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="text-center mb-12 animate-in fade-in duration-1000">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">My Skills</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">The technologies and tools I use to build things.</p>
      </div>
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue={Object.keys(skillsData)[0]} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mb-8 h-auto flex-wrap">
            {Object.keys(skillsData).map((category) => (
              <TabsTrigger key={category} value={category} className="text-xs md:text-sm whitespace-normal h-auto py-2">{category}</TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(skillsData).map(([category, skills]) => (
            <TabsContent key={category} value={category} className="animate-in fade-in duration-500">
              <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-none">
                <CardContent className="p-6">
                   <div className="flex flex-wrap justify-center gap-4">
                      {skills.map((skill, index) => (
                        <div 
                          key={skill.name} 
                          className="animate-in fade-in zoom-in-95 duration-500 animate-float hover:[animation-play-state:paused]" 
                          style={{ animationDelay: `${index * 150}ms` }}
                        >
                          {skill.iconPath ? (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div className="flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-muted/50 w-28 h-28 justify-center cursor-pointer">
                                    <div className="h-16 w-16 flex items-center justify-center text-muted-foreground">
                                       <Image
                                          src={skill.iconPath}
                                          alt={`${skill.name} icon`}
                                          width={48}
                                          height={48}
                                          className="object-contain"
                                        />
                                    </div>
                                    <span className="text-sm text-center font-medium">{skill.name}</span>
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          ) : (
                             <Badge variant="secondary" className="text-base px-4 py-2 transition-transform hover:scale-110">
                                {skill.name}
                              </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
