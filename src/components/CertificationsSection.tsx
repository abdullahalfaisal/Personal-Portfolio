import { certificationsData } from '@/lib/data';
import { Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="text-center mb-12 animate-in fade-in duration-1000">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Certifications</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">My professional certifications.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {certificationsData.map((cert, index) => (
          <div key={index} className="animate-in fade-in slide-in-from-bottom-12 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
            <Card className="bg-card/50 backdrop-blur-sm flex items-start p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
              <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 bg-background border-2 border-primary rounded-full flex items-center justify-center transition-transform hover:scale-110">
                      <Award className="h-6 w-6 text-primary" />
                  </div>
              </div>
              <div>
                <CardTitle className="text-xl mb-1">{cert.name}</CardTitle>
                <p className="font-semibold text-primary mb-2">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.date}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
