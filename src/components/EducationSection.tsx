import { educationData } from '@/lib/data';
import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function EducationSection() {
  return (
    <section id="education" className="py-16 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="text-center mb-12 animate-in fade-in duration-1000">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Education</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">My academic background.</p>
      </div>
      <div className="flex justify-center max-w-2xl mx-auto">
        {educationData.map((edu, index) => (
          <div key={index} className="w-full animate-in fade-in slide-in-from-bottom-12 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
            <Card className="bg-card/50 backdrop-blur-sm flex items-start p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
              <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 bg-background border-2 border-primary rounded-full flex items-center justify-center transition-transform hover:scale-110">
                      <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
              </div>
              <div>
                <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                <p className="font-semibold text-primary mb-2">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.date}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
