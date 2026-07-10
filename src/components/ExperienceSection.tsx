"use client";

import { experienceData } from '@/lib/data';
import { Briefcase, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { motion } from 'framer-motion';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
        >
          Work Experience
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-2xl mx-auto text-muted-foreground"
        >
          My professional journey so far.
        </motion.p>
      </div>
      <div className="relative max-w-3xl mx-auto">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-4 md:left-9 top-0 w-0.5 bg-border -translate-x-1/2"
        />
        {experienceData.map((exp, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2, type: "spring", bounce: 0.4 }}
            className="mb-12 pl-12 md:pl-20 relative"
          >
            <div className="absolute left-4 md:left-9 top-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center -translate-x-1/2 transition-transform hover:scale-110 z-10">
              <Briefcase className="h-4 w-4 text-primary" />
            </div>
            <Card className="bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-primary/50">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    {exp.companyUrl ? (
                      <a 
                        href={exp.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-semibold text-primary hover:underline inline-flex items-center gap-1 group"
                      >
                        {exp.company}
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <p className="font-semibold text-primary">{exp.company}</p>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.date}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
