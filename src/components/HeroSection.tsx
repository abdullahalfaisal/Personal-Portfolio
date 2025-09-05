import { personalData } from '@/lib/data';
import { Button } from './ui/button';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { ProfilePicture } from './ProfilePicture';

export function HeroSection() {
  return (
    <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="grid grid-cols-1 items-center justify-center gap-12 md:grid-cols-2">
        <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
           <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl animate-in fade-in duration-1000 delay-200">
            <span className="block">Hi, I'm</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">{personalData.name}</span>
          </h1>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-muted-foreground animate-in fade-in duration-1000 delay-300">{personalData.title}</h2>
          <p className="max-w-xl text-base text-muted-foreground leading-relaxed text-justify animate-in fade-in duration-1000 delay-400">
            {personalData.bio}
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 animate-in fade-in duration-1000 delay-500">
             <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground transition-transform hover:scale-105">
              <Link href="#contact">
                Get in Touch
              </Link>
            </Button>
             <Button asChild variant="outline" size="lg" className="transition-transform hover:scale-105">
              <a href="/resume.pdf" download>
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="order-1 flex justify-center md:order-2 animate-in fade-in zoom-in-50 duration-1000">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-3xl animate-continuous-glow"></div>
            <div className="relative w-full h-full">
                <ProfilePicture src={personalData.avatar} alt={personalData.name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
