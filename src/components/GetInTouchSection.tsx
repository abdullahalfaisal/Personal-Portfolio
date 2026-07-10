
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { personalData } from '@/lib/data';
import { Send, Mail, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

import { ContactForm } from './ContactForm';

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

  const socialButtonsJSX = (className: string) => (
    <div className={`flex flex-wrap justify-center lg:justify-start gap-4 animate-in fade-in slide-in-from-bottom-12 duration-500 delay-100 ${className}`}>
      {personalData.socials.linkedin && (
        <Button asChild variant="outline" className="hover:bg-primary/10 transition-colors flex-1 min-w-[130px]">
          <Link href={personalData.socials.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <Send className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}
      {personalData.email && (
        <Button variant="outline" onClick={handleCopy} className="hover:bg-primary/10 transition-colors flex-1 min-w-[130px]">
          <Mail className="h-4 w-4 mr-2" />
          Copy Email
          <Copy className={`ml-2 h-4 w-4 transition-transform ${copied ? 'scale-75 text-primary' : ''}`} />
        </Button>
      )}
    </div>
  );

  return (
    <section id="contact" className="py-16 scroll-mt-20 animate-in fade-in slide-in-from-bottom-12 duration-500">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12">
          <div className="group relative flex-shrink-0 flex flex-col items-center lg:items-start gap-6">
            <div className="relative h-80 w-56 md:h-[450px] md:w-[320px] overflow-hidden rounded-2xl bg-background shadow-2xl">
              <Image
                src="/portrait.jpg"
                alt="Get in touch"
                data-ai-hint="portrait"
                fill
                className="object-cover"
              />
            </div>
            
            {socialButtonsJSX("hidden lg:flex w-full max-w-[320px]")}
          </div>
          <div className="flex-grow w-full max-w-lg">
            <div className="text-center lg:text-left mb-6 animate-in fade-in duration-500">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Get In Touch</h2>
              <p className="mt-4 text-muted-foreground">
                I’m open for new opportunities – especially ambitious or large projects. My inbox is always open. Fill out the form below and I'll get back to you as soon as possible!
              </p>
            </div>

            {socialButtonsJSX("flex lg:hidden w-full mb-6")}

            <div className="bg-card/30 backdrop-blur-md border border-white/5 p-6 md:p-8 rounded-2xl shadow-xl animate-in fade-in slide-in-from-bottom-12 duration-500 delay-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
