/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Globe, 
  ArrowRight, 
  QrCode, 
  Wallet, 
  CreditCard, 
  Search, 
  User, 
  ShoppingCart, 
  ShieldCheck, 
  Tractor, 
  Building2, 
  Send, 
  Share2, 
  Network,
  Mic,
  Mail,
  CheckCircle2,
  ArrowRightCircle,
  ChevronRight,
  Activity,
  MessageCircle,
  Phone,
  X,
  MessageSquare,
  Menu
} from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from 'motion/react';
import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { t, languages } from './translations';
import FarmerDashboard from './FarmerDashboard';
import ConsumerDashboard from './ConsumerDashboard';
import BankDashboard from './BankDashboard';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ChatAssistant from './ChatAssistant';

type View = 'home' | 'roles' | 'farmer' | 'consumer' | 'bank' | 
            'login_farmer' | 'login_consumer' | 'login_bank' |
            'register_farmer' | 'register_consumer' | 'register_bank';

function TiltCard({ children, className = "" }: { children: ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function App() {
  const [view, setView] = useState<View>(() => {
    const savedView = localStorage.getItem('agritrust_view');
    const savedRole = localStorage.getItem('agritrust_role');
    if (savedRole && savedView === savedRole) {
      return savedView as View;
    }
    return 'home';
  });
  const [activeLang, setActiveLang] = useState('English');
  const [isScanning, setIsScanning] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeNavDropdown, setActiveNavDropdown] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<'farmer' | 'consumer' | 'bank' | null>(() => {
    return (localStorage.getItem('agritrust_role') as any) || null;
  });
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'contact' | 'languages' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [toast, setToast] = useState<{ message: string, type: 'success' | 'error' | 'info' } | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000);
  };

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 350]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 800], [1, 1.2]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as View;
      if (['home', 'roles', 'farmer', 'consumer', 'bank'].includes(hash)) {
        setView(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.location.hash = `#${view}`;
    localStorage.setItem('agritrust_view', view);
    if (userRole) {
      localStorage.setItem('agritrust_role', userRole);
    } else {
      localStorage.removeItem('agritrust_role');
    }
  }, [view, userRole]);

  const startScan = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      const video = document.getElementById('qr-video') as HTMLVideoElement;
      if (video) {
        video.srcObject = stream;
        video.play();
        setIsScanning(true);
      }
    } catch (err: any) {
      console.error("Error accessing camera:", err);
      const errorMsg = t(activeLang, 'errors.camera_generic') || "Could not access camera. Please ensure you've granted permission.";
      showToast(errorMsg, 'error');
    }
  };

  const stopScan = () => {
    const video = document.getElementById('qr-video') as HTMLVideoElement;
    if (video && video.srcObject) {
      const stream = video.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      setIsScanning(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToSection = (id: string) => {
    setView('home');
    setActiveNavDropdown(null);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToSection(id);
      });
    });
  };

  const homeMenuItems = [
    { label: 'Overview', target: 'overview' },
    { label: 'Mission', target: 'mission' },
    { label: 'Vision', target: 'vision' },
    { label: 'Impact', target: 'impact' },
  ];

  const contactItems = [
    {
      label: 'Email',
      value: 'support@agritrust.com',
      href: 'mailto:support@agritrust.com',
      icon: <Mail className="w-4 h-4 text-primary" />,
    },
    {
      label: 'Phone',
      value: '+91 80456 78900',
      href: 'tel:+918045678900',
      icon: <Phone className="w-4 h-4 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary">
      {/* Fixed Navigation Bar */}
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-surface/90 border-b border-outline-variant/10 shadow-sm"
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-3">
          <div className="flex items-center justify-between gap-6">
            {/* Logo and Main Menu */}
            <div className="flex items-center gap-4 lg:gap-10">
              <div 
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => navigateToSection('overview')}
              >
                <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src="/logo.png" 
                    alt={t(activeLang, 'common.logo')} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-xl shadow-primary/30"><svg class="text-on-primary w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div>';
                    }}
                  />
                </div>
                <span className="text-xl font-black text-primary tracking-tighter font-headline uppercase group-hover:text-primary/80 transition-colors">
                  {t(activeLang, 'common.logo')}
                </span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-4 lg:gap-8">
                <div 
                  className="relative group"
                  onMouseEnter={() => setActiveNavDropdown('home')}
                  onMouseLeave={() => setActiveNavDropdown(null)}
                >
                  <button onClick={() => navigateToSection('overview')} className="font-headline font-bold text-sm uppercase tracking-wider hover:text-primary transition-all relative flex items-center gap-1 group whitespace-nowrap">
                    {t(activeLang, 'nav.home')}
                    <ChevronRight className={`w-3 h-3 transition-transform duration-300 ${activeNavDropdown === 'home' ? 'rotate-90' : ''}`} />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </button>
                  <AnimatePresence>
                    {activeNavDropdown === 'home' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute left-0 mt-2 w-64 bg-surface rounded-2xl shadow-2xl border border-outline-variant/10 py-4 z-50 overflow-hidden"
                      >
                        <div className="px-6 py-2">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3">{t(activeLang, 'nav.home')}</p>
                          <div className="space-y-1">
                            {homeMenuItems.map((item) => (
                              <button
                                key={item.label}
                                onClick={() => navigateToSection(item.target)}
                                className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/5 text-sm font-bold text-on-surface-variant hover:text-primary transition-all"
                              >
                                {item.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div 
                  className="relative group"
                  onMouseEnter={() => setActiveNavDropdown('about')}
                  onMouseLeave={() => setActiveNavDropdown(null)}
                >
                  <button onClick={() => navigateToSection('mission')} className="font-headline font-bold text-sm uppercase tracking-wider hover:text-primary transition-all relative flex items-center gap-1 group whitespace-nowrap">
                    {t(activeLang, 'nav.about')}
                    <ChevronRight className={`w-3 h-3 transition-transform duration-300 ${activeNavDropdown === 'about' ? 'rotate-90' : ''}`} />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </button>
                  <AnimatePresence>
                    {activeNavDropdown === 'about' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute left-0 mt-2 w-72 bg-surface rounded-2xl shadow-2xl border border-outline-variant/10 py-4 z-50 overflow-hidden"
                      >
                        <div className="px-6 py-2">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3">{t(activeLang, 'nav.about')}</p>
                          <div className="space-y-1">
                            {(t(activeLang, 'about.points') as string[]).map((point) => (
                              <button key={point} className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/5 text-xs font-bold text-on-surface-variant hover:text-primary transition-all leading-tight">
                                {point}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div 
                  className="relative group"
                  onMouseEnter={() => setActiveNavDropdown('how')}
                  onMouseLeave={() => setActiveNavDropdown(null)}
                >
                  <button onClick={() => navigateToSection('vision')} className="font-headline font-bold text-sm uppercase tracking-wider hover:text-primary transition-all relative flex items-center gap-1 group whitespace-nowrap">
                    {t(activeLang, 'nav.howItWorks')}
                    <ChevronRight className={`w-3 h-3 transition-transform duration-300 ${activeNavDropdown === 'how' ? 'rotate-90' : ''}`} />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </button>
                  <AnimatePresence>
                    {activeNavDropdown === 'how' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute left-0 mt-2 w-80 bg-surface rounded-2xl shadow-2xl border border-outline-variant/10 py-4 z-50 overflow-hidden"
                      >
                        <div className="px-6 py-2">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3">{t(activeLang, 'nav.howItWorks')}</p>
                          <div className="space-y-1">
                            {(t(activeLang, 'howItWorks.steps') as string[]).map((step, i) => (
                              <button key={i} className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/5 text-[11px] font-bold text-on-surface-variant hover:text-primary transition-all leading-tight">
                                <span className="text-primary mr-2">{i + 1}.</span> {step}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div 
                  className="relative group"
                  onMouseEnter={() => setActiveNavDropdown('contact')}
                  onMouseLeave={() => setActiveNavDropdown(null)}
                >
                  <button className="font-headline font-bold text-sm uppercase tracking-wider hover:text-primary transition-all relative flex items-center gap-1 group whitespace-nowrap">
                    {t(activeLang, 'footer.contact.title')}
                    <ChevronRight className={`w-3 h-3 transition-transform duration-300 ${activeNavDropdown === 'contact' ? 'rotate-90' : ''}`} />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </button>
                  <AnimatePresence>
                    {activeNavDropdown === 'contact' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute left-0 mt-2 w-80 bg-surface rounded-2xl shadow-2xl border border-outline-variant/10 py-4 z-50 overflow-hidden"
                      >
                        <div className="px-6 py-2">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3">
                            {t(activeLang, 'footer.contact.title')}
                          </p>
                          <div className="space-y-2">
                            {contactItems.map((item) => (
                              <a
                                key={item.label}
                                href={item.href}
                                className="flex items-center justify-between gap-3 px-3 py-3 rounded-xl hover:bg-primary/5 transition-all"
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    {item.icon}
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">
                                      {item.label}
                                    </p>
                                    <p className="text-sm font-bold text-on-surface break-all">
                                      {item.value}
                                    </p>
                                  </div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-primary shrink-0" />
                              </a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 lg:gap-4">
              {/* Language Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="hidden sm:flex items-center gap-2 px-3 lg:px-4 py-2 rounded-full bg-surface-container-low border border-outline-variant/20 hover:border-primary/40 hover:bg-surface transition-all font-bold text-sm text-on-surface-variant shadow-sm whitespace-nowrap"
                >
                  <Globe className="w-4 h-4 text-primary" />
                  <span>{t(activeLang, 'nav.languages')}</span>
                </button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-48 bg-surface rounded-2xl shadow-2xl border border-outline-variant/10 overflow-hidden py-2 z-[60]"
                    >
                      <div className="max-h-[300px] overflow-y-auto no-scrollbar">
                        {languages.map((lang) => (
                          <button
                            key={lang.name}
                            onClick={() => {
                              setActiveLang(lang.name);
                              setIsLangOpen(false);
                            }}
                            className={`w-full text-left px-6 py-2.5 text-sm font-medium transition-colors hover:bg-primary/5 ${
                              activeLang === lang.name ? 'text-primary bg-primary/5' : 'text-on-surface-variant'
                            }`}
                          >
                            {lang.native}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {userRole ? (
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => {
                      if (userRole === 'farmer') setView('farmer');
                      else if (userRole === 'consumer') setView('consumer');
                      else if (userRole === 'bank') setView('bank');
                    }}
                    className="flex items-center gap-3 bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-full border border-primary/20 shadow-sm transition-all group scale-100 active:scale-95"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                      {userRole === 'farmer' && <Tractor className="w-4 h-4" />}
                      {userRole === 'consumer' && <User className="w-4 h-4" />}
                      {userRole === 'bank' && <Building2 className="w-4 h-4" />}
                    </div>
                    <div className="flex flex-col items-start pr-2">
                      <span className="text-[10px] font-black uppercase tracking-wider text-primary/60 leading-none">Dashboard</span>
                      <span className="font-bold text-sm text-primary uppercase tracking-wider whitespace-nowrap leading-tight">
                        {t(activeLang, `roles.${userRole}.title`)}
                      </span>
                    </div>
                  </button>
                  <button 
                    onClick={() => {
                      setUserRole(null);
                      setView('home');
                      showToast(activeLang === 'English' ? 'Logged Out Successfully' : 'Logout Successful', 'success');
                    }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high border border-outline-variant/20 hover:border-red-500/50 hover:bg-red-500/10 transition-all text-on-surface-variant hover:text-red-500 group"
                    title="Logout"
                  >
                    <X className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </button>
                </div>
              ) : (
                <button 
                  className="bg-primary hover:bg-primary/90 text-on-primary px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-headline font-bold text-xs lg:text-sm uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-primary/30 hover:shadow-primary/40 whitespace-nowrap"
                  onClick={() => setView('roles')}
                >
                  {t(activeLang, 'nav.login')}
                </button>
              )}

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-full hover:bg-primary/10 text-on-surface transition-all active:scale-90"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[280px] bg-surface z-[101] shadow-2xl flex flex-col border-l border-outline-variant/10"
            >
              <div className="p-6 border-b border-outline-variant/5 flex items-center justify-between">
                <span className="font-black text-primary tracking-tighter uppercase">{t(activeLang, 'common.logo')}</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto py-8">
                <div className="px-6 space-y-6">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 mb-3 px-3">Navigation</p>
                    <button onClick={() => { setView('home'); setIsMobileMenuOpen(false); scrollToSection('overview'); }} className="w-full text-left px-4 py-3 rounded-xl hover:bg-primary/5 text-lg font-bold text-on-surface">Overview</button>
                    <button onClick={() => { setView('home'); setIsMobileMenuOpen(false); scrollToSection('mission'); }} className="w-full text-left px-4 py-3 rounded-xl hover:bg-primary/5 text-lg font-bold text-on-surface">Mission</button>
                    <button onClick={() => { setView('home'); setIsMobileMenuOpen(false); scrollToSection('vision'); }} className="w-full text-left px-4 py-3 rounded-xl hover:bg-primary/5 text-lg font-bold text-on-surface">Vision</button>
                    <button onClick={() => { setView('home'); setIsMobileMenuOpen(false); scrollToSection('impact'); }} className="w-full text-left px-4 py-3 rounded-xl hover:bg-primary/5 text-lg font-bold text-on-surface">Impact</button>
                  </div>

                  <div className="h-px bg-outline-variant/10 my-6" />

                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 mb-3 px-3">Language</p>
                    <button onClick={() => { setActiveModal('languages'); setIsMobileMenuOpen(false); }} className="w-full text-left px-4 py-3 rounded-xl hover:bg-primary/5 flex items-center gap-3 text-lg font-bold text-on-surface">
                      <Globe className="w-5 h-5 text-primary" />
                      {activeLang}
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-outline-variant/5">
                {!userRole ? (
                  <button 
                    onClick={() => { setView('roles'); setIsMobileMenuOpen(false); }}
                    className="w-full bg-primary text-on-primary py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-primary/20"
                  >
                    Login / Join
                  </button>
                ) : (
                  <button 
                    onClick={() => { setUserRole(null); setView('home'); setIsMobileMenuOpen(false); }}
                    className="w-full bg-red-500/10 text-red-500 py-4 rounded-2xl font-black uppercase tracking-widest border border-red-500/20"
                  >
                    Logout
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.main
            key={activeLang}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=""
          >
            {/* Hero Section */}
            <section id="overview" className="relative min-h-screen flex items-center overflow-hidden preserve-3d">
              <motion.div 
                style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
                className="absolute inset-0 z-0"
              >
                <img 
                  className="w-full h-full object-cover brightness-[0.7]" 
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
                  alt="Lush farm field"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-surface"></div>
              </motion.div>

              {/* Hero Content */}
              <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
                <div className="max-w-4xl">
                  <motion.h1 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className={`font-headline font-extrabold text-white leading-[1.1] tracking-tighter mb-8 break-words hyphens-auto text-balance ${activeLang === 'English' ? 'text-4xl sm:text-5xl md:text-7xl lg:text-8xl' : 'text-3xl sm:text-4xl md:text-5xl lg:text-7xl'}`}
                  >
                    {t(activeLang, 'hero.title').split('[ACCENT]')[0]}
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                      className="text-accent italic inline-block whitespace-normal break-words"
                    >
                      {t(activeLang, 'hero.accent')}
                    </motion.span>
                    {t(activeLang, 'hero.title').split('[ACCENT]')[1]}
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="text-white/90 text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed font-medium break-words"
                  >
                    {t(activeLang, 'hero.subtitle')}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col sm:flex-row gap-6"
                  >
                    <button 
                      onClick={() => setView('roles')}
                      className="bg-primary text-on-primary h-16 px-10 rounded-full font-bold text-lg shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        {t(activeLang, 'hero.cta')} 
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <motion.div 
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </button>
                  </motion.div>
                </div>
              </div>

              {/* Scroll Down Indicator */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
              >
                <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">Scroll</span>
                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center p-1"
                >
                  <div className="w-1 h-2 bg-white/40 rounded-full" />
                </motion.div>
              </motion.div>
            </section>

            {/* About Section */}
            <section id="mission" className="py-32 px-6 bg-surface-container-low">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-on-surface mb-8 tracking-tighter break-words hyphens-auto text-balance">
                      {t(activeLang, 'about.title')}
                    </h2>
                    <div className="space-y-6 text-on-surface-variant text-lg md:text-xl leading-relaxed break-words">
                      <p>{t(activeLang, 'about.p1')}</p>
                      <p>{t(activeLang, 'about.p2')}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 gap-6"
                  >
                    {(t(activeLang, 'about.points') as string[]).map((point: string, i: number) => (
                      <MissionPoint key={i} icon={<Activity className="text-primary" />} text={point} />
                    ))}
                  </motion.div>
                </div>
              </div>
            </section>

            {/* How It Works Section */}
            <section id="vision" className="py-32 px-6 bg-surface">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                  <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-on-surface mb-6 tracking-tighter break-words hyphens-auto text-balance">
                    {t(activeLang, 'howItWorks.title')}
                  </h2>
                  <p className="text-on-surface-variant text-xl max-w-2xl mx-auto break-words">
                    {t(activeLang, 'howItWorks.subtitle')}
                  </p>
                </div>

                <div className="relative">
                  {/* Connecting Line (Desktop) */}
                  <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -translate-y-1/2 z-0"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                    <StepCard step="1" icon={<Tractor />} title={t(activeLang, 'howItWorks.steps')[0]} />
                    <StepCard step="2" icon={<ShoppingCart />} title={t(activeLang, 'howItWorks.steps')[1]} />
                    <StepCard step="3" icon={<Network />} title={t(activeLang, 'howItWorks.steps')[2]} />
                    <StepCard step="4" icon={<CreditCard />} title={t(activeLang, 'howItWorks.steps')[3]} />
                    <StepCard step="5" icon={<QrCode />} title={t(activeLang, 'howItWorks.steps')[4]} />
                    <StepCard step="6" icon={<Building2 />} title={t(activeLang, 'howItWorks.steps')[5]} />
                  </div>
                  
                  {/* Arrows for desktop */}
                  <div className="hidden lg:flex absolute top-1/2 left-0 w-full justify-between px-[8%] -translate-y-1/2 pointer-events-none">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="text-primary/30"
                      >
                        <ChevronRight className="w-8 h-8" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-32 px-6 bg-surface-container-low">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {((t(activeLang, 'features.items') || []) as any[]).map((feature: any, i: number) => (
                    <FeatureCard 
                      key={i}
                      icon={i === 0 ? <Network className="w-8 h-8" /> : i === 1 ? <Wallet className="w-8 h-8" /> : i === 2 ? <QrCode className="w-8 h-8" /> : i === 3 ? <Building2 className="w-8 h-8" /> : <Activity className="w-8 h-8" />} 
                      title={feature.title} 
                      description={feature.desc}
                    />
                  ))}
                  <div className="bg-primary rounded-3xl p-8 flex flex-col justify-center text-on-primary">
                    <h3 className="text-2xl font-bold mb-4">{t(activeLang, 'features.cta')}</h3>
                    <button 
                      onClick={() => setView('roles')}
                      className="bg-white text-primary px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all"
                    >
                      {t(activeLang, 'features.joinNow')} <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Trust Section */}
            <section id="impact" className="py-32 px-6 bg-on-surface text-surface">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-20">
                  <div className="bg-primary/20 text-primary-container px-6 py-2 rounded-full flex items-center gap-3 mb-8 border border-primary/30">
                    <ShieldCheck className="w-6 h-6" />
                    <span className="font-bold uppercase tracking-widest text-sm">{t(activeLang, 'trust.badge')}</span>
                  </div>
                  <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter break-words hyphens-auto text-balance">
                    {t(activeLang, 'trust.title')}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                  {(t(activeLang, 'trust.stats') as any[]).map((stat: any, i: number) => (
                    <StatItem key={i} value={stat.value} label={stat.label} />
                  ))}
                </div>

              </div>
            </section>

            {/* Footer - Minimal */}
            <footer className="py-16 px-6 border-t border-outline-variant/10 bg-surface">
              <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 text-center">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img 
                      src="/logo.png" 
                      alt={t(activeLang, 'common.logo')} 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"><svg class="text-on-primary w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div>';
                      }}
                    />
                  </div>
                  <span className="font-black text-primary tracking-tighter uppercase">{t(activeLang, 'common.logo')}</span>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                  <button onClick={() => setActiveModal('privacy')} className="hover:text-primary transition-colors">{t(activeLang, 'footer.links')[0]}</button>
                  <button onClick={() => setActiveModal('terms')} className="hover:text-primary transition-colors">{t(activeLang, 'footer.links')[1]}</button>
                  <button onClick={() => setActiveModal('languages')} className="hover:text-primary transition-colors">{t(activeLang, 'footer.links')[2]}</button>
                </div>
                
                <div className="text-on-surface-variant text-sm">
                  {t(activeLang, 'footer.rights')}
                </div>
              </div>
            </footer>
          </motion.main>
        ) : view === 'roles' ? (
          <motion.main
            key="roles"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pt-24 pb-20 px-6 min-h-screen flex flex-col items-center relative overflow-hidden"
          >
            <div className="max-w-7xl w-full relative z-10">
              <div className="text-center mb-16">
                <motion.h2 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-on-surface mb-6 tracking-tighter break-words hyphens-auto text-balance"
                >
                  {t(activeLang, 'roles.title')}
                </motion.h2>
                <p className="text-on-surface-variant text-xl break-words">{t(activeLang, 'roles.subtitle')}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <RoleSelectionCard 
                  icon={<Tractor className="w-10 h-10" />}
                  title={t(activeLang, 'roles.farmer.title')}
                  description={t(activeLang, 'roles.farmer.desc')}
                  onContinue={() => {
                    setView('login_farmer');
                  }}
                  continueText={t(activeLang, 'roles.continue')}
                />
                <RoleSelectionCard 
                  icon={<User className="w-10 h-10" />}
                  title={t(activeLang, 'roles.consumer.title')}
                  description={t(activeLang, 'roles.consumer.desc')}
                  onContinue={() => {
                    setView('login_consumer');
                  }}
                  continueText={t(activeLang, 'roles.continue')}
                />
                <RoleSelectionCard 
                  icon={<Building2 className="w-10 h-10" />}
                  title={t(activeLang, 'roles.bank.title')}
                  description={t(activeLang, 'roles.bank.desc')}
                  onContinue={() => {
                    setView('login_bank');
                  }}
                  continueText={t(activeLang, 'roles.continue')}
                />
              </div>

              <div className="mt-16 text-center">
                <button 
                  onClick={() => setView('home')}
                  className="text-on-surface-variant hover:text-primary font-bold flex items-center justify-center gap-2 mx-auto transition-colors"
                >
                  <ArrowRightCircle className="w-5 h-5 rotate-180" />
                  {t(activeLang, 'roles.back')}
                </button>
              </div>
            </div>
          </motion.main>
        ) : view === 'login_farmer' ? (
          <LoginPage key="login_farmer" role="farmer" t={t} activeLang={activeLang} showToast={showToast} onGoToRegister={() => setView('register_farmer')} onBack={() => setView('roles')} onLoginSuccess={() => { setUserRole('farmer'); setView('farmer'); showToast(`${t(activeLang, 'roles.farmer.title')} Login Successful`, 'success'); }} />
        ) : view === 'login_consumer' ? (
          <LoginPage key="login_consumer" role="consumer" t={t} activeLang={activeLang} showToast={showToast} onGoToRegister={() => setView('register_consumer')} onBack={() => setView('roles')} onLoginSuccess={() => { setUserRole('consumer'); setView('consumer'); showToast(`${t(activeLang, 'roles.consumer.title')} Login Successful`, 'success'); }} />
        ) : view === 'login_bank' ? (
          <LoginPage key="login_bank" role="bank" t={t} activeLang={activeLang} showToast={showToast} onGoToRegister={() => setView('register_bank')} onBack={() => setView('roles')} onLoginSuccess={() => { setUserRole('bank'); setView('bank'); showToast(`${t(activeLang, 'roles.bank.title')} Login Successful`, 'success'); }} />
        ) : view === 'register_farmer' ? (
          <RegisterPage key="reg_farmer" role="farmer" t={t} activeLang={activeLang} showToast={showToast} onBack={() => setView('roles')} onRegisterSuccess={(email) => { if (email) { setUserRole('farmer'); setView('farmer'); showToast(`Welcome, ${email}!`, 'success'); } else { setView('login_farmer'); } }} />
        ) : view === 'register_consumer' ? (
          <RegisterPage key="reg_consumer" role="consumer" t={t} activeLang={activeLang} showToast={showToast} onBack={() => setView('roles')} onRegisterSuccess={(email) => { if (email) { setUserRole('consumer'); setView('consumer'); showToast(`Welcome, ${email}!`, 'success'); } else { setView('login_consumer'); } }} />
        ) : view === 'register_bank' ? (
          <RegisterPage key="reg_bank" role="bank" t={t} activeLang={activeLang} showToast={showToast} onBack={() => setView('roles')} onRegisterSuccess={(email) => { if (email) { setUserRole('bank'); setView('bank'); showToast(`Welcome, ${email}!`, 'success'); } else { setView('login_bank'); } }} />
        ) : view === 'farmer' ? (
          <FarmerDashboard key="farmer" onLogout={() => { setUserRole(null); setView('home'); }} />
        ) : view === 'consumer' ? (
          <ConsumerDashboard key="consumer" onLogout={() => { setUserRole(null); setView('home'); }} />
        ) : view === 'bank' ? (
          <BankDashboard key="bank" onLogout={() => { setUserRole(null); setView('home'); }} />
        ) : null}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className={`fixed bottom-10 left-1/2 z-[100] px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[320px] border ${
              toast.type === 'error' ? 'bg-red-50 border-red-200 text-red-800' : 
              toast.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 
              'bg-blue-50 border-blue-200 text-blue-800'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              toast.type === 'error' ? 'bg-red-100' : 
              toast.type === 'success' ? 'bg-green-100' : 
              'bg-blue-100'
            }`}>
              {toast.type === 'error' && <X className="w-5 h-5" />}
              {toast.type === 'success' && <CheckCircle2 className="w-5 h-5" />}
              {toast.type === 'info' && <Activity className="w-5 h-5" />}
            </div>
            <div className="flex-grow max-w-sm">
              <p className="font-bold text-sm leading-tight break-words">{toast.message}</p>
            </div>
            <button onClick={() => setToast(null)} className="opacity-50 hover:opacity-100 transition-opacity">
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Modals */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-surface rounded-[2.5rem] shadow-2xl overflow-hidden border border-outline-variant/10"
            >
              <div className="p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-headline text-2xl sm:text-3xl font-black text-on-surface tracking-tight uppercase break-words hyphens-auto">
                    {activeModal === 'privacy' && t(activeLang, 'footer.privacy.title')}
                    {activeModal === 'terms' && t(activeLang, 'footer.terms.title')}
                    {activeModal === 'languages' && t(activeLang, 'nav.languages')}
                  </h3>
                  <button 
                    onClick={() => setActiveModal(null)}
                    className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                  {activeModal === 'privacy' && (
                    <div className="space-y-6 text-left">
                      {((t(activeLang, 'footer.privacy.sections') as any) || []).map((section: any, idx: number) => (
                        <div key={idx} className="space-y-2">
                          <h4 className="font-headline text-xl font-bold text-on-surface">{section.title}</h4>
                          <p className="text-on-surface-variant text-base leading-relaxed break-words">
                            {section.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeModal === 'terms' && (
                    <div className="space-y-6 text-left">
                      {((t(activeLang, 'footer.terms.sections') as any) || []).map((section: any, idx: number) => (
                        <div key={idx} className="space-y-2">
                          <h4 className="font-headline text-xl font-bold text-on-surface">{section.title}</h4>
                          <p className="text-on-surface-variant text-base leading-relaxed break-words">
                            {section.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeModal === 'languages' && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {languages.map((lang) => (
                        <button
                          key={lang.name}
                          onClick={() => {
                            setActiveLang(lang.name);
                            setActiveModal(null);
                          }}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                            activeLang === lang.name
                              ? 'bg-primary text-on-primary font-bold'
                              : 'hover:bg-surface-container-high text-on-surface-variant font-medium'
                          }`}
                        >
                          <span className="text-xl">{lang.native}</span>
                          <span className="truncate">{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Chat Assistant */}
      <ChatAssistant activeLang={activeLang} />
    </div>
  );
}

function MissionPoint({ icon, text }: { icon: ReactNode, text: string, key?: any }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, x: 10 }}
      className="flex items-center gap-4 p-5 bg-surface rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all shadow-sm hover:shadow-md cursor-default"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
        {icon}
      </div>
      <span className="font-bold text-on-surface break-words">{text}</span>
    </motion.div>
  );
}

function StepCard({ step, icon, title }: { step: string, icon: ReactNode, title: string }) {
  return (
    <TiltCard>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: parseInt(step) * 0.1 }}
        className="flex flex-col items-center text-center group bg-surface p-8 rounded-[2.5rem] border border-outline-variant/5 shadow-sm hover:shadow-xl transition-all h-full"
      >
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-3xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-500 shadow-lg">
            {icon}
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-black text-sm shadow-md">
            {step}
          </div>
        </div>
        <h3 className="font-bold text-on-surface leading-tight px-4 break-words">{title}</h3>
      </motion.div>
    </TiltCard>
  );
}

function FeatureCard({ icon, title, description }: { icon: ReactNode, title: string, description: string, key?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TiltCard>
      <motion.div 
        className="bg-surface p-10 rounded-[2.5rem] border border-outline-variant/10 hover:border-primary/30 transition-all shadow-sm hover:shadow-xl h-full flex flex-col"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
          {icon}
        </div>
        <h3 className="text-2xl font-black text-on-surface mb-4 tracking-tight break-words hyphens-auto">{title}</h3>
        <p className="text-on-surface-variant leading-relaxed mb-6 break-words">{description}</p>
        
        <div className="mt-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all"
          >
            Details <ChevronRight className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
          </button>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-6 mt-6 border-t border-outline-variant/10">
                  <p className="text-sm text-on-surface-variant/80 italic leading-relaxed break-words">
                    This feature utilizes advanced decentralized protocols to ensure maximum efficiency and security within the AgriTrust ecosystem.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {['Real-time verification', 'End-to-end encryption', 'Automated workflows'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-bold text-primary">
                        <CheckCircle2 className="w-3 h-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </TiltCard>
  );
}

function StatItem({ value, label }: { value: string, label: string, key?: any }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="text-6xl md:text-7xl font-black text-primary-container mb-4 tracking-tighter"
      >
        {value}
      </motion.div>
      <div className="text-sm font-bold uppercase tracking-[0.2em] text-surface/60 text-center break-words">{label}</div>
    </div>
  );
}

function RoleSelectionCard({ icon, title, description, onContinue, continueText }: { icon: ReactNode, title: string, description: string, onContinue: () => void, continueText: string }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <TiltCard className="h-full">
      <motion.div 
        className="bg-surface p-10 rounded-[3rem] border border-outline-variant/10 hover:border-primary/50 transition-all shadow-xl flex flex-col h-full group"
      >
        <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-on-surface mb-4 tracking-tight break-words hyphens-auto">{title}</h3>
        <p className="text-on-surface-variant leading-relaxed mb-6 flex-grow break-words">{description}</p>
        
        <div className="mb-8">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary font-bold text-xs uppercase tracking-widest transition-colors"
          >
            Capabilities <ChevronRight className={`w-3 h-3 transition-transform ${showDetails ? 'rotate-90' : ''}`} />
          </button>
          
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-4 space-y-3">
                  {['Verified Identity', 'Secure Wallet', 'Direct Access', 'Audit History'].map((cap) => (
                    <div key={cap} className="flex items-center gap-2 text-[11px] font-black text-primary uppercase tracking-tighter">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {cap}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button 
          onClick={onContinue}
          className="w-full bg-on-surface text-surface py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary transition-all group/btn"
        >
          {continueText} <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </TiltCard>
  );
}
