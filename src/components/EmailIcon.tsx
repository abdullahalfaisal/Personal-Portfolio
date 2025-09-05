import Link from 'next/link';
import { personalData } from '@/lib/data';
import { cn } from '@/lib/utils';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from './ui/tooltip';

type EmailIconProps = {
  className?: string;
};

export function EmailIcon({ className }: EmailIconProps) {
  if (!personalData.email) {
    return null;
  }

  return (
    <div
      className={cn(
        'md:flex flex-col items-center gap-8 fixed right-4 top-1/2 -translate-y-1/2 z-50',
        'hidden',
        className
      )}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={`mailto:${personalData.email}`}
              className="transition-transform hover:scale-105"
            >
              <p className="[writing-mode:vertical-rl] text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300">
                {personalData.email}
              </p>
            </a>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>{personalData.email}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="w-0.5 h-24 bg-muted-foreground/50"></div>
    </div>
  );
}