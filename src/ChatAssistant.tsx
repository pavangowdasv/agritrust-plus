import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Bot, Minus } from 'lucide-react';
import { API_BASE } from './config';

interface Message {
  role: 'model' | 'user';
  text: string;
}

interface ChatAssistantProps {
  activeLang: string;
}

/** Simple markdown → JSX: bold, bullets, numbered lists, line breaks */
function renderMarkdown(text: string): React.ReactNode {
  return text.split('\n').map((line, i) => {
    // Bold: **text**
    const parts = line.split(/\*\*(.*?)\*\*/g).map((part, j) =>
      j % 2 === 1 ? <strong key={j}>{part}</strong> : part
    );
    // Bullet / numbered list
    const isBullet = /^[-•]/.test(line.trim());
    const isNumered = /^\d+\./.test(line.trim());
    const content = isBullet
      ? line.trim().replace(/^[-•]\s*/, '')
      : isNumered
      ? line.trim().replace(/^\d+\.\s*/, '')
      : null;

    if (isBullet || isNumered) {
      return (
        <div key={i} className="flex items-start gap-2 my-0.5">
          <span className="text-primary font-bold shrink-0 mt-0.5">
            {isBullet ? '•' : `${i + 1}.`}
          </span>
          <span>{content?.split(/\*\*(.*?)\*\*/g).map((p, j) =>
            j % 2 === 1 ? <strong key={j}>{p}</strong> : p
          )}</span>
        </div>
      );
    }
    if (!line.trim()) return <div key={i} className="h-2" />;
    return <div key={i}>{parts}</div>;
  });
}


export default function ChatAssistant({ activeLang }: ChatAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welcome to AgriTrust. I am your AI assistant. How may I help you today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    const newMessages: Message[] = [...messages, { role: 'user', text: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: newMessages,
          language: activeLang
        }),
      });

      const data = await response.json();
      if (data.text) {
        setMessages(prev => [...prev, { role: 'model', text: data.text }]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'I am sorry, I am having trouble connecting right now. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed top-20 right-6 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: -20 }}
            animate={{ opacity: 1, scale: 1,  y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -20 }}
            transition={{ type: 'spring', stiffness: 340, damping: 28 }}
            className="w-[370px] h-[520px] bg-surface rounded-[2rem] shadow-premium border border-outline-variant/10 overflow-hidden flex flex-col order-2"
          >
            {/* Header */}
            <div className="p-6 bg-primary text-on-primary flex items-center justify-between shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline font-black text-lg tracking-tight uppercase">Agri Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-80">AI Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all relative z-10"
              >
                <Minus className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4 no-scrollbar bg-surface-container-low/30">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[88%] p-4 rounded-2xl text-sm font-medium shadow-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-primary text-on-primary rounded-tr-none'
                      : 'bg-white border border-outline-variant/10 text-on-surface rounded-tl-none'
                  }`}>
                    {m.role === 'user' ? m.text : renderMarkdown(m.text)}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-outline-variant/10 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="p-6 bg-surface border-t border-outline-variant/10">
              <div className="relative group">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about AgriTrust..."
                  className="w-full pl-6 pr-14 py-4 rounded-2xl bg-surface-container-high border-none outline-none focus:ring-2 focus:ring-primary transition-all font-bold text-sm shadow-inner"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-lg shadow-primary/30 active:scale-95 disabled:grayscale disabled:opacity-50 transition-all group-hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? 'Close Assistant' : 'Open AI Assistant'}
        className="order-1 w-14 h-14 rounded-2xl bg-primary text-on-primary flex items-center justify-center shadow-premium relative group overflow-hidden"
      >
        {/* Shine sweep on hover */}
        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0,   opacity: 1 }}
              exit={{   rotate:  90,  opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="open"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{   scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Bot className="w-6 h-6" />
              {/* Live notification dot */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-primary animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
