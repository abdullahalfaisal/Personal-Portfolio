"use client";

import { educationData } from '@/lib/data';
import { GraduationCap, ExternalLink } from 'lucide-react';
import { Card, CardTitle } from './ui/card';
import { motion } from 'framer-motion';

export function EducationSection() {
  return (
    <section id="education" className="py-16">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
        >
          Education
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-2xl mx-auto text-muted-foreground"
        >
          My academic background.
        </motion.p>
      </div>
      <div className="flex flex-col justify-center max-w-2xl mx-auto gap-4">
        {educationData.map((edu, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.3 }}
            className="w-full"
          >
            <Card className="bg-card/50 backdrop-blur-sm flex items-start p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
              <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 bg-background border-2 border-primary rounded-full flex items-center justify-center transition-transform hover:scale-110">
                      <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
              </div>
              <div>
                <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                {edu.institutionUrl ? (
                  <a 
                    href={edu.institutionUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-semibold text-primary mb-2 hover:underline inline-flex items-center gap-1 group"
                  >
                    {edu.institution}
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <p className="font-semibold text-primary mb-2">{edu.institution}</p>
                )}
                <p className="text-sm text-muted-foreground">{edu.date}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
