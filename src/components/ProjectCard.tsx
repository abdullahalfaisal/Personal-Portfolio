import Image from 'next/image';
import Link from 'next/link';
import { Github, Link as LinkIcon } from 'lucide-react';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, technologies, image, image_hint, links } = project;

  return (
    <Card className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
      <div className="aspect-video relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            data-ai-hint={image_hint}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <TooltipProvider>
          <div className="flex items-center gap-2">
            {links.live && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild variant="outline" size="icon" className="bg-gradient-to-r from-primary to-accent text-primary-foreground transition-transform hover:scale-110">
                    <Link href={links.live} target="_blank" rel="noopener noreferrer">
                      <LinkIcon className="h-4 w-4" />
                      <span className="sr-only">Live Demo</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Live Demo</p>
                </TooltipContent>
              </Tooltip>
            )}
            {links.client && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild variant="ghost" size="icon" className="transition-transform hover:scale-110">
                    <Link href={links.client} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">Client Repo</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Client Repo</p>
                </TooltipContent>
              </Tooltip>
            )}
            {links.server && (
               <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild variant="ghost" size="icon" className="transition-transform hover:scale-110">
                    <Link href={links.server} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">Server Repo</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Server Repo</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
}
