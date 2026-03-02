import { volunteerData } from '@/lib/data';
import { Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function VolunteerSection() {
  return (
    <section id="volunteer" className="py-16 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="text-center mb-12 animate-in fade-in duration-1000">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Volunteer Experience</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Giving back to the community.</p>
      </div>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-9 top-0 h-full w-0.5 bg-border -translate-x-1/2 animate-in fade-in duration-1000 delay-500"></div>
        {volunteerData.map((vol, index) => (
          <div key={index} className="mb-12 pl-12 md:pl-20 relative animate-in fade-in slide-in-from-bottom-12 duration-1000" style={{ animationDelay: `${index * 200}ms` }}>
            <div className="absolute left-4 md:left-9 top-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center -translate-x-1/2 transition-transform hover:scale-110">
              <Heart className="h-4 w-4 text-primary" />
            </div>
            <Card className="bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-primary/50">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                  <div>
                    <CardTitle className="text-xl">{vol.role}</CardTitle>
                    <p className="font-semibold text-primary">{vol.organization}</p>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap">{vol.date}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {vol.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
