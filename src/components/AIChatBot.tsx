'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, MessageCircle, Send, Sparkles } from 'lucide-react';

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  isTyping?: boolean;
};

const QA_MAP: Record<string, string> = {
  "Thoughts on AI transition in the future?": "I believe we should drive AI, not let AI drive us. Just like a car engine generates power to move us forward, we still need a driver to steer the wheel and control the speed. AI is a powerful leverage, and we should use that leverage to build more ultimate and impactful solutions.",
  "What are your favorite AI tools?": "My favorite AI tools include Gemini, Antigravity, OpenCode, Claude Code, Cursor, and Kimi Code. I heavily leverage these tools to accelerate development, ensure high code quality, and streamline my workflows!",
  "Tell me about your QA experience.": "I have extensive experience as a Software Quality Assurance Engineer. At Brain Station 23, I build and enhance robust automated test suites. I go beyond basic paths by focusing heavily on uncovering hidden edge cases, applying unique testing techniques, and ensuring software behaves exactly according to complex business workflows.",
  "What is your approach as a Scrum Master?": "As a Scrum Master, I facilitate Agile processes, manage sprint ceremonies, remove blockers, and ensure smooth team collaboration. My goal is to empower the development team to work efficiently without interruptions.",
  "What is AIDLC?": "AIDLC stands for Artificial Intelligence Development Life Cycle. I work within this framework to ensure the quality, reliability, and smooth delivery of AI-integrated products, making sure AI components are rigorously tested before hitting production.",
  "Do you have leadership experience?": "Yes! I've held multiple leadership roles at the IEEE AIUB Student Branch, including Chapter Chairperson and Creative Team Lead. I've managed executive teams and organized large technical events.",
  "What is your educational background?": "I have completed my Bachelor of Science in Computer Science & Engineering (Major in Software Engineering) at American International University-Bangladesh (AIUB), graduating in 2025.",
  "What is your working motto?": "My guiding motto is simple: 'It's not hard, it's just new.' This mindset drives my passion for continuous learning and tackling unfamiliar technologies head-on.",
  "Alternative career to Software Engineering?": "If I weren't in Software Engineering, I would likely pursue a career in Graphic Design and Video Editing. I have a strong creative background in those fields and I'm very passionate about them!"
};

export function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'bot', text: "Hi! I'm Orion, Abdullah's AI Assistant. How can I help you learn about his experience?" }
  ]);
  const [availableQuestions, setAvailableQuestions] = useState<string[]>(Object.keys(QA_MAP));
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleQuestionClick = (question: string) => {
    // Add User Message
    const userMsgId = Date.now().toString();
    setMessages(prev => [...prev, { id: userMsgId, sender: 'user', text: question }]);

    // Add Bot Typing Message
    const botMsgId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: botMsgId, sender: 'bot', text: '', isTyping: true }]);

    const fullAnswer = QA_MAP[question];
    let currentText = '';
    let i = 0;

    // Simulate typing effect
    const interval = setInterval(() => {
      currentText += fullAnswer.charAt(i);
      setMessages(prev => 
        prev.map(msg => 
          msg.id === botMsgId ? { ...msg, text: currentText } : msg
        )
      );
      i++;
      
      if (i >= fullAnswer.length) {
        clearInterval(interval);
        setMessages(prev => 
          prev.map(msg => 
            msg.id === botMsgId ? { ...msg, isTyping: false } : msg
          )
        );
      }
    }, 20); // Typing speed
  };

  return (
    <div className="fixed bottom-20 right-6 md:bottom-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[calc(100vw-3rem)] sm:w-96 h-[calc(100dvh-10rem)] md:h-[600px] max-h-[85vh] flex flex-col bg-card/95 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary/10 border-b border-primary/20 p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Orion</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-muted-foreground">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/20">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-primary-foreground rounded-tr-sm' 
                      : 'bg-muted text-foreground rounded-tl-sm border border-border/50 shadow-sm'
                  }`}>
                    {msg.text}
                    {msg.isTyping && <span className="inline-block w-1 h-4 ml-1 align-middle bg-primary animate-pulse" />}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Questions/Options Area */}
            <div className="p-4 bg-muted/30 border-t border-border/50 shrink-0 max-h-[40%] flex flex-col">
              <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider shrink-0">
                <Sparkles className="w-3 h-3" />
                Ask a question
              </div>
              <div className="flex flex-wrap gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 pb-2">
                {availableQuestions.length > 0 ? (
                  availableQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleQuestionClick(q)}
                      className="text-left text-xs bg-background border border-primary/30 hover:border-primary hover:bg-primary/5 text-foreground px-3 py-2 rounded-lg transition-all duration-200"
                    >
                      {q}
                    </button>
                  ))
                ) : (
                  <div className="text-xs text-muted-foreground italic text-center w-full">
                    No more preset questions. Feel free to explore the rest of the portfolio!
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 md:w-14 md:h-14 bg-primary text-primary-foreground rounded-full shadow-xl flex items-center justify-center hover:shadow-primary/25 transition-shadow relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-background animate-pulse" />
        )}
      </motion.button>
    </div>
  );
}
