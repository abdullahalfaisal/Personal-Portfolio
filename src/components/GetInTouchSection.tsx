
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { personalData } from '@/lib/data';
import { Send, Mail, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export function GetInTouchSection() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (personalData.email) {
      navigator.clipboard.writeText(personalData.email);
      setCopied(true);
      toast({
        title: 'Copied!',
        description: 'Email address copied to clipboard.',
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-16 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="group relative flex-shrink-0 md:mr-2">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-accent blur-md animate-continuous-glow"></div>
            <div className="relative h-80 w-56 md:h-96 md:w-64 overflow-hidden rounded-2xl bg-background">
              <Image
                src="/portrait.jpg"
                alt="Get in touch"
                data-ai-hint="portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-grow md:max-w-md">
            <div className="text-center md:text-left mb-8 animate-in fade-in duration-1000">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Get In Touch</h2>
              <p className="mt-4 text-muted-foreground text-justify">
                I’m open for new opportunities – especially ambitious or large projects. My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
              {personalData.socials.linkedin && (
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground transition-transform hover:scale-105 w-full sm:w-auto">
                      <Link href={personalData.socials.linkedin} target="_blank" rel="noopener noreferrer">
                          Say Hello <Send className="ml-2 h-4 w-4" />
                      </Link>
                  </Button>
              )}
               {personalData.email && (
                <div className="flex items-center justify-center md:justify-start w-full sm:w-auto p-3 rounded-lg bg-muted/50 border">
                    <Mail className="h-5 w-5 mr-3 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground truncate">{personalData.email}</span>
                    <Button variant="ghost" size="icon" onClick={handleCopy} className="ml-auto flex-shrink-0 h-8 w-8">
                      <Copy className={`h-4 w-4 transition-transform ${copied ? 'scale-75 text-primary' : ''}`} />
                      <span className="sr-only">Copy email</span>
                    </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
