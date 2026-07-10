"use client";

import { personalData } from '@/lib/data';
import { Button } from './ui/button';
import Link from 'next/link';
import { ProfilePicture } from './ProfilePicture';
import { motion } from 'framer-motion';

export function HeroSection() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-20">
      <div className="grid grid-cols-1 items-center justify-center gap-12 md:grid-cols-2">
        <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            <span className="block">Hi, I'm</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">{personalData.name}</span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-2xl font-semibold tracking-tight text-muted-foreground"
          >
            {personalData.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl text-base text-muted-foreground leading-relaxed text-justify"
          >
            {personalData.bio}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 border-0 transition-opacity shadow-lg shadow-primary/20">
              <Link href="#contact" onClick={handleScrollToContact}>
                Get in Touch
              </Link>
            </Button>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="order-1 flex justify-center md:order-2"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            {/* The Special Cyber Glow Aura */}
            <div className="absolute -inset-8 bg-gradient-to-r from-primary via-accent to-primary opacity-30 blur-3xl rounded-full animate-pulse z-0 pointer-events-none"></div>
            
            {/* The Rotating Neon Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute -inset-2 bg-gradient-to-tr from-primary via-transparent to-accent rounded-full opacity-50 z-0 pointer-events-none blur-[2px]"
            ></motion.div>

            {/* The Profile Picture Container */}
            <div className="relative w-full h-full z-10 rounded-full overflow-hidden shadow-2xl">
              <ProfilePicture src={personalData.avatar} alt={personalData.name} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
