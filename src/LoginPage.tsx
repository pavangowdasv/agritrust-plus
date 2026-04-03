import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tractor, User, Building2, Lock, Mail, ArrowRight, ShieldCheck, Leaf, Sprout, Wheat } from 'lucide-react';
import { API_BASE } from './config';

interface LoginPageProps {
  role: 'farmer' | 'consumer' | 'bank';
  onLoginSuccess: () => void;
  onBack: () => void;
  onGoToRegister: () => void;
  t: any;
  activeLang: string;
  showToast: (msg: string, type: 'success' | 'error') => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } as const }
} as const;

export default function LoginPage({ role, onLoginSuccess, onBack, onGoToRegister, t, activeLang, showToast }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });
      const data = await response.json();
      if (response.ok) {
        if (data.name) {
          localStorage.setItem('agritrust_name', data.name);
        }
        onLoginSuccess();
      } else {
        showToast(data.error || 'Login failed', 'error');
      }
    } catch (err) {
      showToast('Network error', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const getRoleIcon = () => {
    if (role === 'farmer') return <Tractor className="w-12 h-12 text-primary" />;
    if (role === 'consumer') return <User className="w-12 h-12 text-blue-500" />;
    return <Building2 className="w-12 h-12 text-indigo-500" />;
  };

  const getRoleTitle = () => {
    if (role === 'farmer') return t(activeLang, 'roles.farmer.title') || 'Producer';
    if (role === 'consumer') return t(activeLang, 'roles.consumer.title') || 'Consumer';
    return t(activeLang, 'roles.bank.title') || 'Institution';
  };

  const roleColor = role === 'farmer' ? 'bg-primary/20 border-primary/30' : 
                    role === 'consumer' ? 'bg-blue-500/20 border-blue-500/30' : 
                    'bg-indigo-500/20 border-indigo-500/30';

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden bg-surface">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px]"
        />
        
        {/* Floating Icons */}
        <motion.div 
          animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[15%] text-primary/10"
        >
          <Leaf className="w-16 h-16" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], x: [0, -10, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-[15%] text-accent/10"
        >
          <Wheat className="w-20 h-20" />
        </motion.div>
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-[20%] text-primary/5"
        >
          <Sprout className="w-24 h-24" />
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[440px] relative"
      >
        <motion.div 
          className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-[3rem] blur-xl -z-10"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <div className="glass shadow-premium p-8 sm:p-12 rounded-[2.8rem] relative overflow-hidden backdrop-blur-2xl">
          <motion.button 
            variants={itemVariants}
            whileHover={{ x: -2 }}
            onClick={onBack}
            className="absolute top-8 left-8 text-on-surface-variant hover:text-primary transition-colors text-xs font-black flex items-center gap-1.5 uppercase tracking-widest"
          >
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            Back
          </motion.button>

          <div className="flex flex-col items-center text-center mt-10 mb-12">
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className={`w-28 h-28 rounded-[2.2rem] flex items-center justify-center border-4 shadow-inner mb-8 bg-white/40 border-white/60`}
            >
              <div className={`w-full h-full rounded-[1.8rem] flex items-center justify-center ${roleColor}`}>
                {getRoleIcon()}
              </div>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="font-headline text-4xl font-black text-on-surface tracking-tight mb-3"
            >
              Welcome <span className="text-primary italic">Back</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-on-surface-variant text-sm font-semibold max-w-[240px] leading-relaxed"
            >
              Access your <span className="text-primary font-black uppercase text-[10px] tracking-widest px-2 py-0.5 bg-primary/5 rounded-full">{getRoleTitle()}</span> portal
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-xs font-black text-on-surface ml-1 uppercase tracking-widest opacity-60">Email Address</label>
              <div className="relative group">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isFocused === 'email' ? 'text-primary' : 'text-on-surface-variant'}`}>
                  <Mail className="w-5 h-5" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onFocus={() => setIsFocused('email')}
                  onBlur={() => setIsFocused(null)}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="name@company.com" 
                  className="w-full h-16 pl-13 pr-4 bg-white/40 rounded-2xl border-2 border-transparent focus:border-primary/20 focus:bg-white/80 outline-none shadow-sm text-sm font-bold transition-all placeholder:text-on-surface-variant/30"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-black text-on-surface uppercase tracking-widest opacity-60">Password</label>
                <a href="#" className="text-[10px] font-black text-primary hover:text-primary/70 transition-colors uppercase tracking-widest">Forgot?</a>
              </div>
              <div className="relative group">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isFocused === 'password' ? 'text-primary' : 'text-on-surface-variant'}`}>
                  <Lock className="w-5 h-5" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onFocus={() => setIsFocused('password')}
                  onBlur={() => setIsFocused(null)}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••" 
                  className="w-full h-16 pl-13 pr-4 bg-white/40 rounded-2xl border-2 border-transparent focus:border-primary/20 focus:bg-white/80 outline-none shadow-sm text-sm font-bold transition-all placeholder:text-on-surface-variant/30"
                />
              </div>
            </motion.div>

            <motion.button 
              variants={itemVariants}
              type="submit" 
              disabled={isLoading}
              whileHover={{ scale: 1.01, boxShadow: "0 20px 40px -10px rgba(46, 125, 50, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full h-16 mt-6 bg-primary text-on-primary rounded-2xl font-black text-xs tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-[3px] border-on-primary/20 border-t-on-primary rounded-full animate-spin" />
              ) : (
                <>
                  <span className="relative z-10">Sign In</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform relative z-10" />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 opacity-30" />
                </>
              )}
            </motion.button>
          </form>

          {role === 'farmer' && (
            <motion.div 
              variants={itemVariants}
              className="mt-10 pt-8 border-t border-primary/5"
            >
              <button className="w-full h-14 bg-surface-container-low text-on-surface border border-outline-variant/10 rounded-xl font-black text-[10px] tracking-widest uppercase hover:bg-white/80 hover:border-primary/20 transition-all flex items-center justify-center gap-2 group shadow-sm">
                <ShieldCheck className="w-4 h-4 text-primary transition-transform group-hover:scale-110" />
                Sign in with Secure Multi-Sig
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 text-[11px] text-on-surface-variant font-black tracking-widest uppercase opacity-60 flex items-center gap-4"
      >
        <span className="w-8 h-px bg-on-surface-variant/20" />
        New to AgriTrust? 
        <button onClick={onGoToRegister} className="text-primary hover:text-primary/70 transition-colors">Register here</button>
        <span className="w-8 h-px bg-on-surface-variant/20" />
      </motion.p>
    </div>
  );
}
