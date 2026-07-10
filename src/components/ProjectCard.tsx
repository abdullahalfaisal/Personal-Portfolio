"use client";

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
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, technologies, image, image_hint, links } = project;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full w-full perspective-[1000px]"
    >
      <Card className="h-full group relative flex flex-col overflow-hidden hover:shadow-primary/20 shadow-xl transition-shadow duration-300">
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
                  <Button asChild variant="outline" size="icon" className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 transition-opacity hover:opacity-90 shadow-md shadow-primary/20">
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
                  <Button asChild variant="ghost" size="icon" className="transition-colors hover:bg-white/10 hover:text-foreground">
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
                  <Button asChild variant="ghost" size="icon" className="transition-colors hover:bg-white/10 hover:text-foreground">
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
    </motion.div>
  );
}
