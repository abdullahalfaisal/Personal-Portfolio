import { projectsData } from '@/lib/data';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="text-center mb-12 animate-in fade-in duration-1000">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">My Projects</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Here are some of the projects I've worked on.</p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <div key={index} className="animate-in fade-in slide-in-from-bottom-12 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
