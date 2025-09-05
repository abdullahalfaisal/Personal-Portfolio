import Link from 'next/link';
import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import { personalData } from '@/lib/data';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';

type SocialIconsProps = {
  className?: string;
};

export function SocialIcons({ className }: SocialIconsProps) {
  const socialLinks = [
    { name: 'GitHub', href: personalData.socials.github, icon: <Github className="h-5 w-5" /> },
    { name: 'LinkedIn', href: personalData.socials.linkedin, icon: <Linkedin className="h-5 w-5" /> },
    { name: 'Facebook', href: personalData.socials.facebook, icon: <Facebook className="h-5 w-5" /> },
    { name: 'Instagram', href: personalData.socials.instagram, icon: <Instagram className="h-5 w-5" /> },
  ];

  return (
    <div className={cn('fixed md:top-1/2 md:-translate-y-1/2 bottom-0 left-0 md:left-4 z-50', className)}>
        <div className="relative flex md:flex-col items-center gap-4 p-2 md:p-0 bg-background/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none w-screen justify-center md:w-auto rounded-t-lg md:rounded-none">
             <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-muted-foreground/50 -z-10 hidden md:block"></div>
            <TooltipProvider>
                {socialLinks.map((social) => (
                    social.href && (
                    <Tooltip key={social.name}>
                        <TooltipTrigger asChild>
                        <Button asChild variant="outline" size="icon" className="bg-background rounded-full transition-transform hover:scale-110">
                            <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                            {social.icon}
                            </Link>
                        </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="hidden md:block">
                          <p>{social.name}</p>
                        </TooltipContent>
                    </Tooltip>
                    )
                ))}
            </TooltipProvider>
        </div>
    </div>
  );
}