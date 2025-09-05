
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Code2 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { cn } from '@/lib/utils';
import { personalData } from '@/lib/data';
import { useActiveSection } from '@/hooks/useActiveSection';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(
    navLinks.map(link => link.href.substring(1))
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        scrollToSection(targetId);
      }, 350); // Wait for menu closing animation
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string | null | undefined) => {
    if (!targetId) return;
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80; // Height of the sticky header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Code2 className="h-8 w-8 text-foreground font-bold" />
          <div className="funky-animation">
            <span className='text-xl md:text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animated-gradient'>{personalData.name}</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavLinkClick}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium text-muted-foreground transition-colors duration-300 nav-link-hover",
                activeSection === link.href.substring(1) ? "active text-primary" : "hover:text-primary"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                    <Code2 className="h-8 w-8 text-foreground font-bold" />
                     <div className="funky-animation">
                      <span className='text-xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animated-gradient'>{personalData.name}</span>
                    </div>
                  </Link>
                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={handleNavLinkClick}
                         className={cn(
                          "px-3 py-2 rounded-md text-lg font-medium text-muted-foreground transition-colors duration-300 nav-link-hover",
                           activeSection === link.href.substring(1) ? "active text-primary" : "hover:text-primary"
                        )}
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
