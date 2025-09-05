import { personalData } from '@/lib/data';
import Link from 'next/link';
import { Github, Linkedin, Facebook, Instagram, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 py-8">
        <div className="hidden md:flex items-center gap-4">
            {personalData.socials.github && (
                <Button asChild variant="ghost" size="icon" className="rounded-full transition-transform hover:scale-110">
                <Link href={personalData.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                </Link>
                </Button>
            )}
            {personalData.socials.linkedin && (
                <Button asChild variant="ghost" size="icon" className="rounded-full transition-transform hover:scale-110">
                <Link href={personalData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                </Link>
                </Button>
            )}
            {personalData.socials.facebook && (
                <Button asChild variant="ghost" size="icon" className="rounded-full transition-transform hover:scale-110">
                <Link href={personalData.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                </Link>
                </Button>
            )}
            {personalData.socials.instagram && (
                <Button asChild variant="ghost" size="icon" className="rounded-full transition-transform hover:scale-110">
                <Link href={personalData.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                </Link>
                </Button>
            )}
            {personalData.email && (
                 <Button asChild variant="ghost" size="icon" className="rounded-full transition-transform hover:scale-110">
                    <a href={`mailto:${personalData.email}`} aria-label="Email">
                        <Mail className="h-5 w-5" />
                    </a>
                </Button>
            )}
        </div>
        <div className="text-center text-sm text-muted-foreground">
            <p>
                © {new Date().getFullYear()} {personalData.name}. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}