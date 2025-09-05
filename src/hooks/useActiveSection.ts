
'use client';

import { useState, useEffect, useRef } from 'react';

type UseActiveSectionOptions = {
  rootMargin?: string;
};

export function useActiveSection(
  sectionIds: string[],
  options: UseActiveSectionOptions = {}
) {
  const { rootMargin = '-50% 0px -50% 0px' } = options;
  const [activeSection, setActiveSection] = useState<string>('home');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        // @ts-ignore
        if (window.isNavigating) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin,
      }
    );

    const { current: currentObserver } = observer;

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    return () => {
      currentObserver.disconnect();
    };
  }, [sectionIds, rootMargin]);

  return activeSection;
}
