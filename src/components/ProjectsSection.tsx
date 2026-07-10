"use client";

import { projectsData } from '@/lib/data';
import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
        >
          My Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-2xl mx-auto text-muted-foreground"
        >
          Here are some of the projects I've worked on.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <motion.div 
            key={index} 
            className="h-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.2 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
