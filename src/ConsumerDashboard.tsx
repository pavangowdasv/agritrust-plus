import { 
  Globe, 
  ShieldCheck, 
  Home, 
  Truck, 
  Store, 
  QrCode, 
  Scan, 
  ShoppingBasket, 
  Route, 
  Star, 
  CheckCircle2, 
  History, 
  Award, 
  Heart, 
  ClipboardList, 
  Mail, 
  Share2, 
  Search,
  Tractor,
  X,
  ChevronRight,
  LogOut,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import ConsumerOrderTracking from './ConsumerOrderTracking';

function ScannerCamera() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;
    async function setupCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera access failed:", err);
      }
    }
    setupCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return <video ref={videoRef} autoPlay playsInline muted className="absolute inset-0 w-full h-full object-cover z-0 opacity-70" />;
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  themeColor,
  buttonText,
  onClick,
  customBg,
}: {
  icon: any;
  title: string;
  description: string;
  themeColor: 'primary' | 'secondary' | 'tertiary' | 'blue';
  buttonText: string;
  onClick?: () => void;
  customBg?: string;
}) {
  const themeClasses = {
    primary: 'bg-primary shadow-primary/30 text-white',
    secondary: 'bg-secondary shadow-secondary/30 text-white',
    tertiary: 'bg-tertiary shadow-tertiary/30 text-white',
    blue: 'bg-blue-600 shadow-blue-600/30 text-white',
  }[themeColor];

  const hoverTextClass = {
    primary: 'group-hover:text-primary',
    secondary: 'group-hover:text-secondary',
    tertiary: 'group-hover:text-tertiary',
    blue: 'group-hover:text-blue-500',
  }[themeColor];

  return (
    <motion.div
      onClick={(e) => { e.preventDefault(); onClick?.(); }}
      whileHover={{ scale: 1.015, y: -4 }}
      whileTap={{ scale: 0.98, y: 2 }}
      className={`group cursor-pointer relative overflow-hidden ${customBg ? customBg : 'bg-surface-container-low border-surface-container-highest'} p-6 sm:p-8 rounded-[2rem] flex flex-col md:flex-row items-start sm:items-center gap-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-b-[8px] active:border-b-[2px] active:translate-y-[6px]`}
    >
      <div className={`relative z-10 p-5 rounded-[1.5rem] ${themeClasses} group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
        <Icon className="w-8 h-8" />
      </div>
      <div className="relative z-10 flex-1 space-y-2 text-left">
        <h3 className={`font-headline font-black text-2xl ${customBg ? 'text-white' : 'text-on-surface'} ${hoverTextClass} transition-colors`}>{title}</h3>
        <p className={`text-sm leading-relaxed font-medium md:max-w-[85%] ${customBg ? 'text-white/70' : 'text-on-surface-variant'}`}>{description}</p>
      </div>
      <div className={`relative z-10 mt-4 md:mt-0 w-full md:w-auto px-8 py-4 rounded-xl font-black text-[11px] sm:text-xs uppercase tracking-widest transition-all ${customBg ? 'bg-white/10 text-white hover:bg-white border-white/20 hover:text-black' : 'bg-surface border-surface-container-highest text-on-surface group-hover:bg-black group-hover:text-white'} border flex items-center justify-between sm:justify-center gap-6 shadow-sm`}>
        {buttonText} 
        <ChevronRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </div>
    </motion.div>
  );
}

function DashboardItem({
  icon: Icon,
  label,
  value,
  iconColor,
}: {
  icon: any;
  label: string;
  value: string;
  iconColor: string;
}) {
  return (
    <div className="flex items-center justify-between p-5 bg-surface-container-low rounded-2xl transition-transform hover:translate-x-1 duration-200">
      <div className="flex items-center gap-4">
        <Icon className={`w-6 h-6 ${iconColor}`} />
        <span className="font-medium text-on-surface">{label}</span>
      </div>
      <span className="text-2xl font-black font-headline text-on-surface">{value}</span>
    </div>
  );
}

export default function ConsumerDashboard({ onLogout }: { onLogout?: () => void }) {
  const [activeModal, setActiveModal] = useState<'scan' | 'browse' | 'track' | 'proof' | 'sellers' | 'history' | 'saves' | 'impact' | 'reports' | null>(null);
  const [screen, setScreen] = useState<'dashboard' | 'tracking'>('dashboard');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);
  const [isFabOpen, setIsFabOpen] = useState(false);
  const [cartItem, setCartItem] = useState<any>(null);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  const [paymentMethod, setPaymentMethod] = useState<string>('');

  useEffect(() => {
    if (paymentStatus === 'processing') {
      const t = setTimeout(() => setPaymentStatus('success'), 2500);
      return () => clearTimeout(t);
    }
  }, [paymentStatus]);



  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  if (screen === 'tracking') {
    return <ConsumerOrderTracking onBack={() => setScreen('dashboard')} onLogout={onLogout} />;
  }

  const features = [
    {
      id: 'scan',
      icon: Scan,
      title: 'Scan QR Code',
      description: 'Verify product origin and fair trade details. Integrates securely with Google Location Services & Lens tech.',
      themeColor: 'primary' as const,
      buttonText: 'Simulate Lens Scan',
      onClick: () => setActiveModal('scan'),
    },
    {
      id: 'browse',
      icon: ShoppingBasket,
      title: 'Browse Products',
      description: 'View verified agricultural products. Data structured to align with Google Merchant Center taxonomy.',
      themeColor: 'secondary' as const,
      buttonText: 'View Verified Products',
      onClick: () => setActiveModal('browse'),
    },
    {
      id: 'track',
      icon: Route,
      title: 'Track Journey',
      description: 'See the complete path from farm to delivery mapped out using live Google Maps IoT coordinate routing.',
      themeColor: 'blue' as const,
      buttonText: 'Track via Live GPS',
      onClick: () => setActiveModal('track'),
      customBg: 'bg-[#101827] border-blue-900/50 text-white',
    },
    {
      id: 'proof',
      icon: ShieldCheck,
      title: 'Fair Trade Proof',
      description: 'Check blockchain escrow payouts matched strictly with Authenticator verified identities guaranteeing zero middlemen.',
      themeColor: 'primary' as const,
      buttonText: 'Verify Escrow',
      onClick: () => setActiveModal('proof'),
    },
    {
      id: 'sellers',
      icon: Star,
      title: 'Trusted Sellers',
      description: 'Revisit Verified sellers seamlessly curated automatically via Google Place Verified producer data networks.',
      themeColor: 'secondary' as const,
      buttonText: 'Explore Places',
      onClick: () => setActiveModal('sellers'),
    },
  ];

  const stats = [
    { icon: CheckCircle2, label: 'Products Verified', value: '12', iconColor: 'text-primary' },
    { icon: History, label: 'Recent Scans', value: '05', iconColor: 'text-secondary' },
    { icon: Award, label: 'Fair Trade Items', value: '08', iconColor: 'text-tertiary' },
    { icon: Heart, label: 'Favorite Producers', value: '03', iconColor: 'text-error' },
    { icon: ClipboardList, label: 'Purchase History', value: '10', iconColor: 'text-stone-600' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <header className="fixed top-0 w-full z-[60] bg-background/60 backdrop-blur-xl border-b border-surface-container-high">
        <div className="flex justify-between items-center px-6 h-16 w-full max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-2">
            <Tractor className="w-6 h-6 text-primary" />
            <span className="text-lg font-black tracking-tighter text-primary font-headline uppercase">TERROIR LEDGER</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-primary font-extrabold font-headline text-xs tracking-widest hover:opacity-80 transition-opacity uppercase" href="#">Home</a>
            <button onClick={(e) => { e.preventDefault(); setActiveModal('browse'); setTimeout(() => document.getElementById('feature-browse')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100); }} className="text-on-surface-variant font-bold font-headline text-sm tracking-widest hover:text-primary transition-colors uppercase leading-none px-4 py-2 rounded-xl hover:bg-surface-container-high relative z-10 cursor-pointer">Products</button>
            <button onClick={(e) => { e.preventDefault(); setScreen('tracking'); }} className="text-on-surface-variant font-bold font-headline text-sm tracking-widest hover:text-primary transition-colors uppercase leading-none px-4 py-2 rounded-xl hover:bg-surface-container-high relative z-10 cursor-pointer">Track</button>
            <button
               onClick={(e) => {
                e.preventDefault();
                if (onLogout) onLogout();
               }}
               className="flex items-center gap-2 text-error font-bold font-headline text-sm tracking-widest hover:opacity-80 transition-opacity uppercase px-4 py-2 rounded-xl hover:bg-error/10 relative z-10 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </nav>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
              <Globe className="w-5 h-5 text-on-surface" />
            </button>
            <button onClick={onLogout} className="md:hidden p-2 rounded-full text-error hover:bg-error/10 transition-colors">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-32 px-4 max-w-3xl mx-auto flex flex-col gap-12 w-full">
        <section className="flex flex-col items-center text-center space-y-6 py-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center"
          >
            <ShieldCheck className="w-10 h-10 text-primary fill-primary/20" />
          </motion.div>

          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-on-surface">Welcome, Consumer</h1>
            <p className="text-on-surface-variant max-w-lg mx-auto">
              Continue your consumer journey by exploring trusted agricultural products and verifying each stage on the ledger.
            </p>
          </div>

          <div className="w-full mt-8 rounded-3xl overflow-hidden bg-surface-container-low p-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -z-0 -translate-y-1/2"></div>
              {[
                { icon: Home, label: 'Farm' },
                { icon: Truck, label: 'Logistics' },
                { icon: Store, label: 'Market' },
                { icon: QrCode, label: 'Verify', active: true },
              ].map((step) => (
                <div key={step.label} className="z-10 flex flex-col items-center gap-2">
                  <div className={`p-4 rounded-full shadow-sm transition-all duration-300 ${step.active ? 'bg-primary text-white scale-110' : 'bg-surface-container-lowest text-primary'}`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${step.active ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          {features.map((feature) => {
            const isExpanded = activeModal === feature.id;
            return (
              <div key={feature.title} id={`feature-${feature.id}`} className="flex flex-col gap-2 relative scroll-m-24">
                <FeatureCard 
                  {...feature} 
                  onClick={() => {
                    if (feature.id === 'track') {
                      setScreen('tracking');
                      return;
                    }
                    setActiveModal(isExpanded ? null : feature.id as any);
                  }} 
                />
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-[#0A0D0C] p-4 sm:p-6 md:p-8 rounded-[2rem] border border-surface-container-highest shadow-inner mt-2">
                        {/* INJECT DROPDOWN DETAILS */}
                        {feature.id === 'scan' && (
                          <div className="flex flex-col items-center gap-8 py-2">
                            <div className="text-center space-y-2">
                              <h3 className="text-white font-headline font-black text-xl md:text-2xl">Ledger Authenticity Scanner</h3>
                              <p className="text-white/50 text-sm max-w-sm mx-auto">Point your camera at a Terroir Ledger compliant agricultural product QR code. The system cross-references Google Location Services and Blockchain Hash records.</p>
                            </div>
                            <div className="w-56 h-56 md:w-64 md:h-64 border-4 border-primary border-dashed rounded-[2.5rem] flex items-center justify-center bg-black/40 relative overflow-hidden group shadow-[0_0_40px_rgba(46,125,50,0.1)]">
                              <ScannerCamera />
                              <Scan className="w-20 h-20 md:w-24 md:h-24 text-primary opacity-60 group-hover:scale-110 transition-transform relative z-10" />
                              <motion.div 
                                initial={{ top: "0%" }}
                                animate={{ top: "100%" }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 w-full h-1.5 bg-primary shadow-[0_0_25px_rgba(var(--primary),1)] z-20"
                              />
                            </div>
                            <div className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
                               <div className="flex items-center gap-3">
                                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
                                  <span className="text-xs font-bold text-white/70 uppercase tracking-widest">Scanner Active</span>
                               </div>
                               <span className="text-[10px] font-mono text-white/30 truncate max-w-[120px] sm:max-w-none">Google Maps API: CONNECTED</span>
                            </div>
                            <button 
                              onClick={(e) => {
                                e.preventDefault();
                                showToast('Verification successful! Authenticity & Fair Trade confirmed via Ledger.', 'success');
                                setActiveModal(null);
                              }}
                              className="w-full mt-2 h-16 bg-primary text-white font-black text-sm sm:text-base rounded-2xl shadow-[0_0_30px_rgba(var(--primary),0.4)] uppercase tracking-widest hover:brightness-110 transition-all border-b-[6px] border-black/30 active:border-b-[2px] active:translate-y-1 cursor-pointer flex items-center justify-center gap-3"
                            >
                              <CheckCircle2 className="w-6 h-6" /> Extract Data & Simulate Scan
                            </button>
                          </div>
                        )}

                        {feature.id === 'browse' && (
                          <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                            {[
                              { 
                                name: 'Farm-Fresh Vine Tomatoes', 
                                price: '₹80/kg', 
                                producer: 'Ramesh Patel', 
                                location: 'Surat, Gujarat',
                                rating: '4.9 ★ (120 Verify)',
                                category: 'Vegetables', 
                                desc: 'Pesticide-free, handpicked heirloom right off the vine.',
                                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/400px-Tomato_je.jpg'
                              },
                              { 
                                name: 'Orchard Fresh Red Apples', 
                                price: '₹220/kg', 
                                producer: 'Tariq Ahmed', 
                                location: 'Srinagar, Kashmir',
                                rating: '4.8 ★ (85 Verify)',
                                category: 'Fresh Fruits', 
                                desc: 'Crisp, sweet, snow-melt irrigated premium Kashmiri orchard apples.',
                                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/400px-Red_Apple.jpg'
                              },
                              { 
                                name: 'Organic Hass Avocados', 
                                price: '₹450/kg', 
                                producer: 'Nilgiris Co-op', 
                                location: 'Ooty, Tamil Nadu',
                                rating: '4.7 ★ (210 Verify)',
                                category: 'Fresh Fruits', 
                                desc: 'Buttery, rich organic Hass avocados grown carefully at high altitude.',
                                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Avocado_Hass_-_single_and_halved.jpg/400px-Avocado_Hass_-_single_and_halved.jpg'
                              },
                              { 
                                name: 'Crunchy Orange Carrots', 
                                price: '₹60/kg', 
                                producer: 'Punjab Growers Syndicate', 
                                location: 'Ludhiana, Punjab',
                                rating: '4.9 ★ (340 Verify)',
                                category: 'Vegetables', 
                                desc: 'Earth-washed, sweet farming carrots packed with natural beta-carotene.',
                                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/400px-Vegetable-Carrot-Bundle-wStalks.jpg'
                              },
                              { 
                                name: 'Tri-Color Bell Peppers', 
                                price: '₹140/kg', 
                                producer: 'Pune Polyhouse Network', 
                                location: 'Pune, Maharashtra',
                                rating: '4.8 ★ (195 Verify)',
                                category: 'Vegetables', 
                                desc: 'Freshly harvested large bell peppers cultivated securely under polyhouse.',
                                image: 'https://images.pexels.com/photos/2893635/pexels-photo-2893635.jpeg?auto=compress&cs=tinysrgb&w=400'
                              }
                            ].map((item) => (
                              <div key={item.name} className="flex flex-col sm:flex-row p-4 pb-5 sm:p-4 bg-white/5 rounded-[2rem] border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all gap-5 items-stretch group cursor-pointer">
                                <div className="w-full sm:w-32 h-40 sm:h-auto rounded-[1.5rem] overflow-hidden shrink-0 relative shadow-inner">
                                   <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                   <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[8px] font-black uppercase text-white border border-white/10 z-10 shadow-lg">{item.category}</div>
                                </div>
                                <div className="flex flex-col flex-1 py-1">
                                  <div className="flex justify-between items-start mb-1">
                                     <h4 className="font-headline font-extrabold text-lg sm:text-xl text-white group-hover:text-primary transition-colors leading-tight pr-4">{item.name}</h4>
                                     <span className="bg-secondary/20 text-secondary text-[10px] font-black px-2 py-1 rounded-full whitespace-nowrap shrink-0 border border-secondary/20">{item.rating}</span>
                                  </div>
                                  <p className="text-xs text-white/50 leading-relaxed max-w-sm mb-4">{item.desc}</p>
                                  <div className="mt-auto flex flex-col sm:flex-row items-end justify-between gap-4">
                                     <div className="flex flex-col gap-1.5 w-full sm:w-auto">
                                       <span className="text-[10px] uppercase font-black tracking-widest text-[#FFF] bg-secondary/20 px-2 py-0.5 rounded border border-secondary/30 w-fit">Direct from Farmer</span>
                                       <p className="text-xs font-bold text-white flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-primary"/> {item.producer}</p>
                                       <span className="text-[10px] font-medium text-white/40 flex items-center gap-1 mt-0.5"><Home className="w-3 h-3" /> {item.location}</span>
                                     </div>
                                     <div className="flex items-center gap-4 w-full sm:w-auto shrink-0 justify-between sm:justify-end">
                                        <p className="font-black text-xl sm:text-2xl text-white">{item.price}</p>
                                        <button 
                                           onClick={(e) => {
                                             e.preventDefault();
                                             e.stopPropagation();
                                             setCartItem(item);
                                             setPaymentStatus('idle');
                                           }}
                                           className="px-5 py-3 sm:px-6 bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(46,125,50,0.4)] rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 border-b-[4px] border-black/30 active:border-b-[1px] active:translate-y-1"
                                        >
                                           <ShoppingBasket className="w-4 h-4" /> Buy Direct
                                        </button>
                                     </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {feature.id === 'track' && (
                          <div className="flex flex-col gap-6">
                            <div className="p-5 bg-white/5 rounded-3xl border border-white/10 flex items-center gap-4">
                              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                                <ShoppingBasket className="w-6 h-6" />
                              </div>
                              <div>
                                <h3 className="font-headline font-black text-lg text-white">Arabica Gold Coffee</h3>
                                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1 neon-text">
                                  <ShieldCheck className="w-3 h-3" /> Blockchain Verified Origin
                                </p>
                              </div>
                            </div>
                            <div className="space-y-4 relative pl-4 mt-2 max-h-[50vh] overflow-y-auto custom-scrollbar">
                              <div className="absolute left-[33px] top-6 bottom-6 w-1 bg-white/10 rounded-full overflow-hidden">
                                 <motion.div animate={{ y: ["-100%", "100%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="w-full h-1/2 bg-gradient-to-b from-transparent via-primary to-transparent" />
                              </div>
                              {[
                                { status: 'Harvested & Fermented', time: 'Oct 12, 2025', location: 'Mullayanagiri Ranges, Chikmagalur', gps: '13.3858° N, 75.7570° E', icon: Home, color: 'bg-primary', detail: 'Farmer: Raghu Gowda (ID: IN-KA-092)', done: true },
                                { status: 'Quality Sort & Processing', time: 'Oct 14, 2025', location: 'Hassan Coffee Cure Division', gps: '13.0076° N, 76.1034° E', icon: ShieldCheck, color: 'bg-primary', detail: 'Cupping Score: 86.5/100', done: true },
                                { status: 'Middlemen Avoided', time: 'Oct 15, 2025', location: 'Polygon PoS Blockchain Node', gps: 'Hash: 0x9a8f1...3d9c', icon: Award, color: 'bg-secondary', detail: 'Fairtrade Premium Locked', done: true },
                                { status: 'IoT Monitored Logistics', time: 'Today', location: 'National Highway 48', gps: '18.5204° N, 73.8567° E (Live Google)', icon: Truck, color: 'bg-blue-500', active: true, detail: 'Humidity 42%, Temp 22.4°C' }
                              ].map((point, idx) => (
                                <div key={idx} className="flex gap-4 sm:gap-6 items-start relative z-10 group">
                                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-2xl ${point.color} text-white ${point.active ? 'ring-4 ring-blue-500/50 scale-110 shadow-[0_0_20px_rgba(59,130,246,0.5)]' : ''}`}>
                                    <point.icon className="w-5 h-5" />
                                  </div>
                                  <div className={`flex-1 flex flex-col gap-1 p-4 rounded-[1.5rem] border transition-all duration-300 ${point.active ? 'bg-blue-500/10 border-blue-500/30' : 'bg-white/5 border-white/10'}`}>
                                    <h4 className={`font-headline font-extrabold text-base leading-tight ${point.active ? 'text-blue-400' : 'text-white'}`}>{point.status}</h4>
                                    <p className="text-xs font-bold text-white/80 flex items-center gap-1.5 mt-1"><Route className="w-3 h-3 text-white/50" /> {point.location}</p>
                                    <p className="text-[10px] font-mono text-blue-300 flex items-center gap-1 mt-0.5 opacity-80"><Globe className="w-3 h-3" /> {point.gps}</p>
                                    <div className="mt-3 px-3 py-2 bg-black/40 rounded-xl flex items-center gap-2 w-fit border border-white/5">
                                      <div className={`w-1.5 h-1.5 rounded-full ${point.active ? 'bg-blue-400' : 'bg-green-500'} animate-pulse`} />
                                      <span className="text-[9px] font-bold text-white/90 tracking-widest">{point.detail}</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {feature.id === 'proof' && (
                          <div className="flex flex-col gap-6">
                            <div className="p-6 bg-primary/10 rounded-3xl border border-primary/20 flex flex-col gap-3 text-center">
                              <ShieldCheck className="w-12 h-12 text-primary mx-auto drop-shadow-md" />
                              <div>
                                <h3 className="text-xl font-black text-white">Direct Payment Verified</h3>
                                <p className="text-xs text-primary font-bold">Transaction Hash: 0x5f3e...a1b2</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                              {[
                                { label: 'Producer ID', value: 'FPO-KERALA-009' },
                                { label: 'Market Price', value: '₹14,500/qtl' },
                                { label: 'FT Premium', value: '₹2,200/qtl' },
                                { label: 'Batch ID', value: 'BATCH-CF-001' },
                              ].map((item) => (
                                <div key={item.label} className="p-3 bg-white/5 rounded-2xl border border-white/5">
                                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{item.label}</p>
                                  <p className="text-sm font-bold text-white mt-1">{item.value}</p>
                                </div>
                              ))}
                            </div>
                            <button className="w-full h-12 bg-white text-black font-black rounded-xl uppercase tracking-widest text-xs">Verify on Explorer</button>
                          </div>
                        )}

                        {feature.id === 'sellers' && (
                          <div className="flex flex-col gap-4 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                            {[
                              { name: 'Fairtrade Alliance Kerala (FTAK)', type: 'Spice & Nut Co-op', members: '4,500+ Farmers', location: 'Wayanad, Kerala', rating: 4.9, certified: 'FLO-CERT, USDA Organic' },
                              { name: 'Chetna Organic Agriculture', type: 'Cotton & Grain Co-op', members: '15,000+ Farmers', location: 'Telangana', rating: 4.8, certified: 'GOTS, Fairtrade' },
                              { name: 'Araku Original Coffee', type: 'Premium Arabica Co-op', members: '10,000+ Tribals', location: 'Araku Valley, AP', rating: 5.0, certified: 'SCA 86+, Bio-Dynamic' }
                            ].map((seller) => (
                              <div key={seller.name} className="relative p-5 bg-white/5 rounded-[2rem] border border-white/10 hover:border-secondary/40 transition-all group flex flex-col gap-2">
                                <div className="flex justify-between items-start">
                                  <h4 className="font-headline font-black text-white group-hover:text-secondary">{seller.name}</h4>
                                  <span className="px-2 py-0.5 bg-secondary/20 text-secondary text-[8px] font-black rounded-full uppercase shrink-0">{seller.rating} ★</span>
                                </div>
                                <p className="text-[11px] text-secondary/80 font-bold tracking-wide">{seller.type}</p>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1">
                                   <span className="text-[10px] font-medium text-white/60 flex items-center gap-1.5"><Home className="w-3 h-3" /> {seller.location}</span>
                                   <span className="text-[10px] font-medium text-white/60 flex items-center gap-1.5"><Globe className="w-3 h-3" /> Google Place Verified</span>
                                   <span className="text-[10px] font-medium text-white/60 flex items-center gap-1.5"><ShieldCheck className="w-3 h-3" /> {seller.members}</span>
                                </div>
                                <p className="text-[9px] font-bold text-secondary uppercase mt-2 border border-secondary/20 bg-secondary/10 w-fit px-2 py-1 rounded-full">{seller.certified}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-headline font-extrabold px-2">My Dashboard</h2>
          <div className="flex flex-col gap-3">
            {stats.map((stat) => (
              <DashboardItem key={stat.label} {...stat} />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-headline font-extrabold px-2 text-center md:text-left">Quick Actions</h2>
          <div className="flex flex-col gap-4">
            <motion.button 
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98, y: 2 }} 
              onClick={(e) => { 
                e.preventDefault(); 
                setActiveModal('scan'); 
                setTimeout(() => document.getElementById('feature-scan')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
              }}
              className="w-full py-8 bg-gradient-to-br from-primary to-green-700 text-white rounded-[2rem] font-headline font-black text-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all border-b-[8px] border-black/30 active:border-b-[2px] active:translate-y-[6px] uppercase tracking-widest flex flex-col items-center justify-center gap-3 relative z-10 cursor-pointer overflow-hidden group"
            >
              <Scan className="w-10 h-10 group-hover:scale-110 transition-transform" />
              <span>Initiate Google Lens Scan</span>
              <p className="text-[10px] opacity-70 font-mono mt-1 normal-case tracking-normal">Powered by Google Cloud Vision API</p>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98, y: 2 }} 
              onClick={(e) => { 
                e.preventDefault(); 
                setActiveModal('browse'); 
                setTimeout(() => document.getElementById('feature-browse')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
              }}
              className="w-full py-6 bg-[#1A1C19] text-white rounded-3xl font-headline font-black text-lg shadow-2xl hover:shadow-xl transition-all border-b-[6px] border-black/50 active:border-b-[2px] active:translate-y-[4px] uppercase tracking-widest flex flex-col items-center justify-center gap-2 relative z-10 cursor-pointer group"
            >
              <div className="flex items-center gap-3"><Store className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" /> Verified Places Marketplace</div>
              <p className="text-[10px] opacity-50 font-mono normal-case tracking-normal">Directly cross-referenced with Google Place Producers</p>
            </motion.button>

            <div className="flex flex-col w-full relative">
              <motion.button 
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98, y: 2 }} 
                onClick={(e) => { e.preventDefault(); setActiveModal(activeModal === 'history' ? null : 'history'); }}
                className="w-full py-6 bg-surface-container-low text-on-surface rounded-3xl font-headline font-black text-lg shadow-lg transition-all border-b-[6px] border-surface-container-high active:border-b-[2px] active:translate-y-[4px] uppercase tracking-widest flex items-center justify-center gap-4 relative z-10 cursor-pointer"
              >
                <History className="w-6 h-6 text-secondary" /> Traceability History
              </motion.button>
              <AnimatePresence>
                {activeModal === 'history' && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="flex flex-col gap-4 py-6 bg-[#0A0D0C] p-6 rounded-[2rem] mt-2 border border-surface-container-highest shadow-inner">
                       <div className="text-center mb-2">
                          <p className="text-[10px] font-mono text-white/40 mb-1 tracking-widest">DATA EXTRACTED VIA</p>
                          <h4 className="text-sm font-bold text-white uppercase tracking-widest flex items-center justify-center gap-2">
                             <Globe className="w-4 h-4 text-blue-400" /> Google Supply Chain API
                          </h4>
                       </div>
                       {[
                         { event: 'QR Verification', item: 'Premium Basmati Rice', status: 'Success', time: '2 mins ago' },
                         { event: 'Payment Confirmed', item: 'Organic Honey Batch #04', status: 'Ledger Verified', time: '1 hour ago' },
                         { event: 'Traceability Check', item: 'Arabica Gold Coffee', status: 'Viewed', time: '3 hours ago' },
                         { event: 'New Seller Saved', item: 'Wayanad Spice Co-op', status: 'Google Places Sync', time: '1 day ago' },
                       ].map((item, i) => (
                         <div key={i} className="p-5 bg-white/5 rounded-3xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div>
                               <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">{item.event}</p>
                               <h4 className="font-bold text-white">{item.item}</h4>
                               <p className="text-xs text-white/40">{item.time}</p>
                            </div>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-black text-white/80 uppercase w-fit">{item.status}</span>
                         </div>
                       ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <motion.button 
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98, y: 2 }} 
                onClick={(e) => { e.preventDefault(); setActiveModal(activeModal === 'reports' ? null : 'reports'); }}
                className="py-5 bg-white text-black rounded-2xl font-headline font-black text-xs shadow-xl transition-all border-b-[6px] border-black/10 active:border-b-[2px] active:translate-y-[4px] uppercase tracking-widest relative z-10 cursor-pointer flex flex-col items-center gap-2"
              >
                <ClipboardList className="w-6 h-6" /> Data Ledgers
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98, y: 2 }} 
                onClick={(e) => { e.preventDefault(); setActiveModal(activeModal === 'impact' ? null : 'impact'); }}
                className="py-5 bg-white text-black rounded-2xl font-headline font-black text-xs shadow-xl transition-all border-b-[6px] border-black/10 active:border-b-[2px] active:translate-y-[4px] uppercase tracking-widest relative z-10 cursor-pointer flex flex-col items-center gap-2"
              >
                <Heart className="w-6 h-6 text-error" /> True Impact
              </motion.button>
            </div>

            <AnimatePresence>
              {activeModal === 'reports' && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                   <div className="flex flex-col gap-4 py-6 bg-[#0A0D0C] p-6 rounded-[2rem] mt-2 border border-surface-container-highest shadow-inner">
                      <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10">
                         <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center shrink-0">
                               <ClipboardList className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                               <h3 className="font-headline font-black text-white">Annual Verification Logs</h3>
                               <p className="text-xs text-white/40 flex items-center gap-1 mt-1"><Globe className="w-3 h-3 text-blue-400" /> Queried via Google BigQuery Public Datasets</p>
                            </div>
                         </div>
                         
                         <div className="space-y-3">
                            {[
                               { label: 'Certification Status', value: 'Active/Certified', color: 'text-green-400' },
                               { label: 'Audit Cycle', value: 'Quarterly', color: 'text-white' },
                               { label: 'Last Audit Date', value: 'Mar 15, 2026', color: 'text-white' },
                               { label: 'Next Audit Date', value: 'Jun 15, 2026', color: 'text-white' },
                               { label: 'Cloud Synchronizations', value: 'Real-time', color: 'text-primary' },
                            ].map((row) => (
                               <div key={row.label} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                                  <span className="text-xs font-bold text-white/50">{row.label}</span>
                                  <span className={`text-xs font-black ${row.color}`}>{row.value}</span>
                               </div>
                            ))}
                         </div>
                      </div>
                      <button className="w-full h-14 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl uppercase tracking-widest text-xs border border-white/10 transition-colors">Download Google Drive Backup</button>
                   </div>
                </motion.div>
              )}
              {activeModal === 'impact' && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                   <div className="flex flex-col gap-6 py-6 bg-[#0A0D0C] p-6 rounded-[2rem] mt-2 border border-surface-container-highest shadow-inner">
                      <div className="text-center">
                          <p className="text-[10px] font-mono text-white/40 mb-1 tracking-widest">METRICS VERIFIED BY</p>
                          <h4 className="text-sm font-bold text-white uppercase tracking-widest flex items-center justify-center gap-2">
                             <Globe className="w-4 h-4 text-green-400" /> Google Environmental Insights
                          </h4>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="p-6 bg-gradient-to-br from-primary/20 to-transparent rounded-[2rem] border border-primary/20 text-center text-white">
                            <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Premium Contributed</p>
                            <h3 className="text-xl sm:text-2xl font-black">₹12,450</h3>
                         </div>
                         <div className="p-6 bg-gradient-to-br from-secondary/20 to-transparent rounded-[2rem] border border-secondary/20 text-center text-white">
                            <p className="text-[10px] font-black uppercase tracking-widest text-secondary mb-2">Farmers Supported</p>
                            <h3 className="text-xl sm:text-2xl font-black">14</h3>
                         </div>
                      </div>
                      
                      <div className="space-y-4">
                         <h4 className="text-sm font-black uppercase tracking-widest text-white/60 px-2">Carbon & Social Utilization</h4>
                         {[
                            { label: 'Healthcare & Safety', value: '45%', color: 'bg-primary' },
                            { label: 'Sustainable Equipment', value: '30%', color: 'bg-secondary' },
                            { label: 'Education Projects', value: '25%', color: 'bg-tertiary' },
                         ].map((stat) => (
                            <div key={stat.label} className="p-4 bg-white/5 rounded-2xl border border-white/5">
                               <div className="flex justify-between items-center mb-2">
                                  <span className="text-xs font-bold text-white/80">{stat.label}</span>
                                  <span className="text-xs font-black text-white">{stat.value}</span>
                               </div>
                               <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                  <div className={`h-full ${stat.color} rounded-full`} style={{ width: stat.value }}></div>
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* --- MODALS --- */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className={`fixed bottom-10 left-1/2 z-[100] px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[320px] border ${
              toast.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-blue-50 border-blue-200 text-blue-800'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              toast.type === 'success' ? 'bg-green-100' : 'bg-blue-100'
            }`}>
              {toast.type === 'success' ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <Info className="w-5 h-5 text-blue-600" />}
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

      {/* Floating Action Menu (FAB Popup) */}
      <div className="fixed bottom-28 md:bottom-12 right-5 md:right-10 z-[80] flex flex-col items-end gap-3 pointer-events-none">
        <AnimatePresence>
          {isFabOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="flex flex-col gap-4 mb-2 pointer-events-auto"
            >
              {[
                { icon: Star, label: 'Trusted Sellers', desc: 'Revisit verified producers and cooperatives you trust.', id: 'sellers', color: 'bg-secondary' },
                { icon: ShieldCheck, label: 'Fair Trade Proof', desc: 'Check whether the producer received direct payment.', id: 'proof', color: 'bg-primary' },
                { icon: Route, label: 'Track Journey', desc: 'See the complete product path from farm to delivery.', id: 'track', color: 'bg-tertiary' },
                { icon: ShoppingBasket, label: 'Browse Products', desc: 'View verified agricultural products from trusted producers.', id: 'browse', color: 'bg-[#1A1C19]' },
                { icon: Scan, label: 'Scan QR Code', desc: 'Verify product origin and fair trade details instantly.', id: 'scan', color: 'bg-primary' },
              ].map((item) => (
                <div key={item.id} className="flex items-center gap-4 justify-end group">
                  <div className="bg-surface-container-highest/95 backdrop-blur-xl border border-white/10 text-on-surface p-3.5 rounded-2xl shadow-2xl flex flex-col items-end text-right max-w-[200px] md:max-w-[240px]">
                     <span className="font-headline font-black text-[11px] sm:text-xs uppercase tracking-widest text-primary mb-1">{item.label}</span>
                     <p className="text-[10px] sm:text-[11px] leading-relaxed opacity-80 font-medium">{item.desc}</p>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      setIsFabOpen(false);
                      if (item.id === 'track') {
                        setScreen('tracking');
                        return;
                      }
                      setActiveModal(item.id as any);
                      setTimeout(() => document.getElementById(`feature-${item.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
                    }}
                    className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center text-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] ${item.color} hover:scale-110 active:scale-95 transition-all cursor-pointer border border-white/20 z-10`}
                  >
                    <item.icon className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <button 
          onClick={(e) => { e.preventDefault(); setIsFabOpen(!isFabOpen); }}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-[0_20px_40px_-8px_rgba(46,125,50,0.6)] hover:scale-105 active:scale-95 transition-all border-4 relative pointer-events-auto cursor-pointer ${isFabOpen ? 'bg-on-surface-variant border-surface text-white' : 'bg-primary border-primary/20 text-white'}`}
        >
          <motion.div animate={{ rotate: isFabOpen ? 135 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}>
             <Plus className="w-8 h-8" />
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {cartItem && (
          <Modal key="checkout" title="Checkout & Payment" onClose={() => { setCartItem(null); setPaymentStatus('idle'); }} darkMode>
            <div className="flex flex-col gap-6 py-2 px-2 h-full">
              {paymentStatus === 'idle' && (
                <>
                  <div className="flex bg-[#111] p-4 rounded-3xl gap-4 border border-white/5 items-center">
                     <img src={cartItem.image} alt={cartItem.name} className="w-24 h-24 rounded-2xl object-cover" />
                     <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-1">{cartItem.name}</h4>
                        <p className="text-xs text-secondary font-black mb-1 tracking-widest uppercase">{cartItem.location}</p>
                        <p className="text-xs text-white/50">Sold by: {cartItem.producer}</p>
                        <p className="text-lg font-black text-primary mt-2">{cartItem.price}</p>
                     </div>
                  </div>
                  
                  <div className="bg-white/5 p-5 rounded-3xl border border-white/5 space-y-3">
                     <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-2">Order Summary</h3>
                     <div className="flex justify-between text-sm"><span className="text-white/60">Subtotal</span><span className="text-white font-bold">{cartItem.price}</span></div>
                     <div className="flex justify-between text-sm"><span className="text-white/60">Platform Fee (Transparent)</span><span className="text-white font-bold tracking-widest">₹0.00</span></div>
                     <div className="flex justify-between text-sm"><span className="text-white/60">Farmer Direct Contribution</span><span className="text-primary font-bold">100%</span></div>
                     <div className="border-t border-white/10 pt-3 flex justify-between items-center mt-2">
                         <span className="text-sm font-black uppercase tracking-widest text-white">Total Amount</span>
                         <span className="text-2xl font-black text-white">{cartItem.price}</span>
                     </div>
                  </div>

                  <div className="flex-1">
                     <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-3 px-2">Select Payment Mode</h3>
                     <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: 'Google Pay', icon: Globe, color: 'text-blue-400' },
                          { label: 'UPI Transfer', icon: ShieldCheck, color: 'text-green-400' },
                          { label: 'Card Payment', icon: Store, color: 'text-purple-400' },
                          { label: 'Crypto Ledger', icon: QrCode, color: 'text-yellow-400' },
                        ].map((m) => (
                          <button key={m.label} onClick={() => { setPaymentMethod(m.label); setPaymentStatus('processing'); }} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center gap-2 hover:bg-primary/20 hover:border-primary/50 active:scale-95 transition-all font-bold text-sm text-white group">
                            <m.icon className={`w-6 h-6 ${m.color} group-hover:scale-110 transition-transform`} />
                            {m.label}
                          </button>
                        ))}
                     </div>
                  </div>
                </>
              )}

              {paymentStatus === 'processing' && (
                <div className="flex flex-col items-center justify-center h-full gap-6 min-h-[400px]">
                   <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full" />
                   <div className="text-center">
                      <h3 className="text-lg font-black text-white uppercase tracking-widest mb-2">Processing via {paymentMethod}</h3>
                      <p className="text-sm text-white/50">Securing {paymentMethod} transaction and committing encrypted receipt to the blockchain ledger.</p>
                   </div>
                </div>
              )}

              {paymentStatus === 'success' && (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center min-h-[400px]">
                   <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', damping: 10 }} className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-12 h-12 text-primary" />
                   </motion.div>
                   <h2 className="text-2xl font-black text-white">Payment Successful!</h2>
                   <p className="text-sm text-white/50 mb-4">100% of funds securely routed to <strong className="text-white">{cartItem.producer}</strong>.</p>
                   
                   <div className="w-full bg-[#111] p-5 rounded-3xl border border-white/10 mb-6 flex flex-col gap-3 text-left shadow-inner">
                      <div className="flex justify-between text-[11px] sm:text-xs text-white/60 font-mono tracking-wider border-b border-white/5 pb-2"><span>TXN HASH:</span><span className="text-secondary">0x8F9...3C2A</span></div>
                      <div className="flex justify-between text-[11px] sm:text-xs text-white/60 font-mono tracking-wider border-b border-white/5 pb-2"><span>BLOCK:</span><span className="text-white">#14920442</span></div>
                      <div className="flex justify-between text-[11px] sm:text-xs text-white/60 font-mono tracking-wider"><span>TIMESTAMP:</span><span className="text-white">{new Date().toLocaleTimeString()}</span></div>
                   </div>

                   <button onClick={() => { setCartItem(null); setPaymentStatus('idle'); }} className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-black rounded-2xl uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(var(--primary),0.3)] border-b-[4px] border-black/30 active:border-b-[1px] active:translate-y-1">Continue Browsing</button>
                </div>
              )}
            </div>
          </Modal>
        )}
      </AnimatePresence>

      <footer className="w-full py-12 mb-24 bg-surface-container-low flex flex-col items-center gap-6 px-8 text-center">
        <div className="font-headline font-bold text-primary uppercase tracking-widest">Terroir Ledger</div>
        <div className="flex flex-wrap justify-center gap-6 font-medium text-xs text-on-surface-variant uppercase tracking-widest">
          <a className="hover:text-primary transition-colors" href="#">About</a>
          <a className="hover:text-primary transition-colors" href="#">Contact</a>
          <a className="hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="hover:text-primary transition-colors" href="#">Ledger Status</a>
        </div>
        <div className="flex gap-4">
          <Globe className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
          <Mail className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
          <Share2 className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
        </div>
        <p className="text-xs font-medium text-on-surface-variant mt-4">Copyright 2026 Terroir Ledger. Immutable Agricultural Transparency.</p>
      </footer>

      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-white/80 backdrop-blur-xl rounded-t-[32px] shadow-[0_-12px_32px_rgba(20,20,20,0.1)] border-t border-surface-container-high relative">
        <button onClick={(e) => { e.preventDefault(); setActiveModal('scan'); setTimeout(() => document.getElementById('feature-scan')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100); }} className="flex flex-col items-center justify-center bg-primary/10 text-primary rounded-full py-2 px-5 cursor-pointer shadow-sm border border-primary/20 active:scale-95 transition-transform hover:bg-primary/20 relative z-10 w-20">
          <Scan className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Scan</span>
        </button>
        <button onClick={(e) => { e.preventDefault(); setActiveModal('browse'); setTimeout(() => document.getElementById('feature-browse')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100); }} className="flex flex-col items-center justify-center text-on-surface-variant/60 cursor-pointer active:scale-95 transition-transform hover:text-secondary relative z-10 px-4 py-2 w-16">
          <Search className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Browse</span>
        </button>
        <button onClick={(e) => { e.preventDefault(); setScreen('tracking'); }} className="flex flex-col items-center justify-center text-on-surface-variant/60 cursor-pointer active:scale-95 transition-transform hover:text-tertiary relative z-10 px-4 py-2 w-16">
          <Route className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Track</span>
        </button>
        <button onClick={(e) => { e.preventDefault(); setActiveModal('proof'); setTimeout(() => document.getElementById('feature-proof')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100); }} className="flex flex-col items-center justify-center text-on-surface-variant/60 cursor-pointer active:scale-95 transition-transform hover:text-primary relative z-10 px-4 py-2 w-16">
          <ShieldCheck className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Proof</span>
        </button>
      </nav>
    </div>
  );
}

function Modal({ title, children, onClose, darkMode }: { title: string; children: React.ReactNode; onClose: () => void; darkMode?: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-[#050505]/95 backdrop-blur-3xl overflow-hidden"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-4xl h-[90vh] md:h-[85vh] rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_0_100px_rgba(0,0,0,1)] overflow-hidden flex flex-col border border-white/10 ${darkMode ? 'bg-[#0A0D0C]' : 'bg-surface-container-lowest'}`}
      >
        <div className={`px-6 md:px-10 pt-8 md:pt-10 pb-6 flex justify-between items-center z-50 ${darkMode ? 'bg-[#0A0D0C]' : 'bg-surface-container-lowest'} border-b border-white/5`}>
          <div className="flex flex-col">
             <h2 className={`text-xl md:text-3xl font-black font-headline tracking-tighter uppercase leading-none ${darkMode ? 'text-white' : 'text-on-surface'}`}>{title}</h2>
             <div className="w-12 md:w-16 h-1.5 bg-primary rounded-full mt-3 md:mt-4 shadow-[0_0_20px_rgba(var(--primary),0.5)]" />
          </div>
          <button 
            onClick={(e) => { e.preventDefault(); onClose(); }}
            className={`p-4 md:p-5 rounded-full transition-all hover:scale-110 active:scale-95 shadow-xl flex-shrink-0 cursor-pointer relative z-50 ${darkMode ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'}`}
          >
            <X className="w-5 h-5 md:w-7 md:h-7" />
          </button>
        </div>
        <div className="px-6 md:px-10 py-6 md:py-8 flex-grow overflow-y-auto custom-scrollbar relative z-10 w-full">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Info({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
