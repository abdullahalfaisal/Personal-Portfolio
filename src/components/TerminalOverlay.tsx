'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { personalData, projectsData, skillsData, experienceData, educationData, certificationsData, volunteerData } from '@/lib/data';

interface TerminalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

interface HistoryItem {
  type: 'input' | 'output' | 'error';
  content: string | React.ReactNode;
}

export function TerminalOverlay({ isOpen, onClose }: TerminalOverlayProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: 'output', content: `Welcome to ${personalData.name}'s Terminal.` },
    { type: 'output', content: `Type 'help' to see available commands.` },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (!trimmedCmd) return;

    setHistory((prev) => [...prev, { type: 'input', content: <><span className="hidden sm:inline">guest@portfolio:~$</span><span className="sm:hidden">~$</span> {cmd}</> }]);

    let output: HistoryItem | null = null;

    if (trimmedCmd === 'help') {
      output = {
        type: 'output',
        content: (
          <div className="flex flex-col gap-1 ml-4 mt-2">
            <div><span className="text-blue-400">whoami</span>         - Display profile information</div>
            <div><span className="text-blue-400">experience</span>     - List professional experience</div>
            <div><span className="text-blue-400">education</span>      - Display education history</div>
            <div><span className="text-blue-400">skills</span>         - List technical skills</div>
            <div><span className="text-blue-400">projects</span>       - List recent projects</div>
            <div><span className="text-blue-400">certifications</span> - View certifications</div>
            <div><span className="text-blue-400">volunteer</span>      - Show volunteer experience</div>
            <div><span className="text-blue-400">clear</span>          - Clear the terminal</div>
            <div><span className="text-blue-400">exit</span>           - Close the terminal</div>
          </div>
        )
      };
    } else if (trimmedCmd === 'whoami') {
      output = {
        type: 'output',
        content: (
          <div className="mt-2 text-gray-300">
            <div className="text-green-400 font-bold text-xl">{personalData.name}</div>
            <div className="text-blue-300 mb-2">{personalData.title}</div>
            <div>{personalData.bio}</div>
          </div>
        )
      };
    } else if (trimmedCmd === 'experience') {
      output = {
        type: 'output',
        content: (
          <div className="mt-2 flex flex-col gap-3">
            {experienceData.map(e => (
              <div key={e.title + e.company}>
                <div className="text-yellow-400 font-bold">{e.title} @ {e.company}</div>
                <div className="text-gray-400 text-sm">{e.date}</div>
              </div>
            ))}
          </div>
        )
      };
    } else if (trimmedCmd === 'education') {
      output = {
        type: 'output',
        content: (
          <div className="mt-2 flex flex-col gap-3">
            {educationData.map(e => (
              <div key={e.degree}>
                <div className="text-purple-400 font-bold">{e.degree}</div>
                <div className="text-gray-300">{e.institution}</div>
                <div className="text-gray-400 text-sm">{e.date}</div>
              </div>
            ))}
          </div>
        )
      };
    } else if (trimmedCmd === 'skills') {
      output = {
        type: 'output',
        content: (
          <div className="mt-2">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="mb-2">
                <span className="text-purple-400 font-bold">{category}: </span>
                <span className="text-gray-300">{skills.map(s => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        )
      };
    } else if (trimmedCmd === 'projects') {
      output = {
        type: 'output',
        content: (
          <div className="mt-2 flex flex-col gap-2">
            {projectsData.map(p => (
              <div key={p.title}>
                <span className="text-yellow-400 font-bold">{p.title}</span> - <span className="text-gray-300">{p.technologies.join(', ')}</span>
              </div>
            ))}
          </div>
        )
      };
    } else if (trimmedCmd === 'certifications') {
      output = {
        type: 'output',
        content: (
          <div className="mt-2 flex flex-col gap-2">
            {certificationsData.map(c => (
              <div key={c.name}>
                <span className="text-pink-400 font-bold">{c.name}</span> - <span className="text-gray-300">{c.issuer}</span> <span className="text-gray-500">({c.date})</span>
              </div>
            ))}
          </div>
        )
      };
    } else if (trimmedCmd === 'volunteer') {
      output = {
        type: 'output',
        content: (
          <div className="mt-2 flex flex-col gap-3">
            {volunteerData.map(v => (
              <div key={v.role + v.organization}>
                <div className="text-cyan-400 font-bold">{v.role}</div>
                <div className="text-gray-300">{v.organization}</div>
                <div className="text-gray-400 text-sm">{v.date}</div>
              </div>
            ))}
          </div>
        )
      };
    } else if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    } else if (trimmedCmd === 'exit') {
      onClose();
      return;
    } else if (trimmedCmd.startsWith('sudo')) {
      if (trimmedCmd === 'sudo rm -rf /') {
         output = { type: 'error', content: "Nice try. My QA scripts prevented this disaster." };
      } else {
         output = { type: 'error', content: "Permission denied. This incident will be reported to the Scrum Master." };
      }
    } else {
      output = { type: 'error', content: `Command not found: ${trimmedCmd}` };
    }

    if (output) {
      setHistory((prev) => [...prev, output!]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return createPortal(
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm text-green-500 font-mono p-4 md:p-8 flex flex-col"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="flex justify-between items-center mb-4 border-b border-green-500/30 pb-2">
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={onClose} title="Close" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs text-gray-500 hidden sm:inline-block">guest@portfolio: ~</span>
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="text-sm font-bold text-green-500 hover:text-green-400 hover:bg-green-500/20 px-3 py-1 rounded transition-colors border border-green-500/50"
          >
            [X] Close
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto flex flex-col gap-2 pb-4 scrollbar-thin scrollbar-thumb-green-500/50">
          {history.map((item, i) => (
            <div key={i} className={item.type === 'error' ? 'text-red-400' : ''}>
              {item.content}
            </div>
          ))}
          <div className="flex items-start sm:items-center gap-2 mt-2">
            <span className="text-green-500 shrink-0">
              <span className="hidden sm:inline">guest@portfolio:~$</span>
              <span className="sm:hidden">~$</span>
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-green-400 caret-green-500 w-full"
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
