import { 
  Tractor, 
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
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

const FeatureCard = ({ icon: Icon, title, description, colorClass, buttonText }: { 
  icon: any, 
  title: string, 
  description: string, 
  colorClass: string,
  buttonText: string 
}) => (
  <motion.div 
    whileHover={{ scale: 1.01 }}
    className={`bg-surface-container-lowest p-6 rounded-3xl flex items-center gap-6 group hover:${colorClass} transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md`}
  >
    <div className={`p-4 bg-surface-container-low rounded-2xl group-hover:bg-white/20 transition-colors`}>
      <Icon className={`w-8 h-8 group-hover:text-white transition-colors`} />
    </div>
    <div className="flex-1 space-y-1">
      <h3 className="font-headline font-bold text-lg group-hover:text-white transition-colors">{title}</h3>
      <p className="text-sm text-on-surface-variant group-hover:text-white/80 transition-colors">{description}</p>
    </div>
    <button className={`hidden md:block px-6 py-2 rounded-full font-bold text-xs transition-all ${colorClass} text-white group-hover:bg-white group-hover:text-on-background`}>
      {buttonText}
    </button>
  </motion.div>
);

const DashboardItem = ({ icon: Icon, label, value, iconColor }: { 
  icon: any, 
  label: string, 
  value: string, 
  iconColor: string 
}) => (
  <div className="flex items-center justify-between p-5 bg-surface-container-low rounded-2xl transition-transform hover:translate-x-1 duration-200">
    <div className="flex items-center gap-4">
      <Icon className={`w-6 h-6 ${iconColor}`} />
      <span className="font-medium text-on-surface">{label}</span>
    </div>
    <span className="text-2xl font-black font-headline text-on-surface">{value}</span>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-surface-container-high">
        <div className="flex justify-between items-center px-6 h-16 w-full max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-2">
            <Tractor className="w-6 h-6 text-primary" />
            <span className="text-lg font-black tracking-tighter text-primary font-headline uppercase">TERROIR LEDGER</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-primary font-extrabold font-headline text-sm tracking-tight hover:opacity-80 transition-opacity" href="#">HOME</a>
            <a className="text-on-surface-variant font-medium font-headline text-sm tracking-tight hover:text-primary transition-colors" href="#">PRODUCTS</a>
            <a className="text-on-surface-variant font-medium font-headline text-sm tracking-tight hover:text-primary transition-colors" href="#">HOW IT WORKS</a>
            <a className="text-on-surface-variant font-medium font-headline text-sm tracking-tight hover:text-primary transition-colors" href="#">LOGIN</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
              <Globe className="w-5 h-5 text-on-surface" />
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-32 px-4 max-w-3xl mx-auto flex flex-col gap-12 w-full">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-6 py-8">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center"
          >
            <ShieldCheck className="w-10 h-10 text-primary fill-primary/20" />
          </motion.div>
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-on-surface">Welcome, Customer</h1>
            <p className="text-on-surface-variant max-w-lg mx-auto">Explore trusted agricultural products and verify every step from farm to market on our immutable ledger.</p>
          </div>
          
          {/* Process Flow */}
          <div className="w-full mt-8 rounded-3xl overflow-hidden bg-surface-container-low p-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -z-0 -translate-y-1/2"></div>
              
              {[
                { icon: Home, label: 'Farm' },
                { icon: Truck, label: 'Logistics' },
                { icon: Store, label: 'Market' },
                { icon: QrCode, label: 'Verify', active: true }
              ].map((step, i) => (
                <div key={i} className="z-10 flex flex-col items-center gap-2">
                  <div className={`p-4 rounded-full shadow-sm transition-all duration-300 ${step.active ? 'bg-primary text-white scale-110' : 'bg-surface-container-lowest text-primary'}`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${step.active ? 'text-primary' : 'text-on-surface-variant'}`}>{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="flex flex-col gap-4">
          <FeatureCard 
            icon={Scan} 
            title="Scan QR Code" 
            description="Verify product origin and fair trade details instantly." 
            colorClass="bg-primary"
            buttonText="Scan Product"
          />
          <FeatureCard 
            icon={ShoppingBasket} 
            title="Browse Products" 
            description="View available verified agricultural products from trusted farmers." 
            colorClass="bg-secondary"
            buttonText="Browse"
          />
          <FeatureCard 
            icon={Route} 
            title="Track Journey" 
            description="See the complete journey from farm to delivery." 
            colorClass="bg-tertiary"
            buttonText="Track"
          />
          <FeatureCard 
            icon={ShieldCheck} 
            title="Fair Trade Proof" 
            description="Check whether the farmer received direct payment." 
            colorClass="bg-primary"
            buttonText="Verify"
          />
          <FeatureCard 
            icon={Star} 
            title="Trusted Sellers" 
            description="Discover verified farmers and cooperatives you can trust." 
            colorClass="bg-secondary"
            buttonText="View All"
          />
        </section>

        {/* Dashboard Summary */}
        <section className="space-y-6">
          <h2 className="text-2xl font-headline font-extrabold px-2">My Dashboard</h2>
          <div className="flex flex-col gap-3">
            <DashboardItem icon={CheckCircle2} label="Products Verified" value="12" iconColor="text-primary" />
            <DashboardItem icon={History} label="Recent Scans" value="05" iconColor="text-secondary" />
            <DashboardItem icon={Award} label="Fair Trade Certified Items" value="08" iconColor="text-tertiary" />
            <DashboardItem icon={Heart} label="Favorite Sellers" value="03" iconColor="text-error" />
            <DashboardItem icon={ClipboardList} label="Purchase History" value="10" iconColor="text-stone-600" />
          </div>
        </section>

        {/* Quick Actions */}
        <section className="space-y-6">
          <h2 className="text-2xl font-headline font-extrabold px-2 text-center md:text-left">Quick Actions</h2>
          <div className="flex flex-col gap-4">
            <motion.button 
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-primary text-white rounded-full font-headline font-bold text-lg shadow-lg hover:opacity-90 transition-all"
            >
              Scan Product
            </motion.button>
            <motion.button 
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-surface-container-highest text-on-surface rounded-full font-headline font-bold text-lg hover:bg-surface-container-high transition-all"
            >
              Browse Verified Products
            </motion.button>
            <motion.button 
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-surface-container-highest text-on-surface rounded-full font-headline font-bold text-lg hover:bg-surface-container-high transition-all"
            >
              View My Activity
            </motion.button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 mb-24 bg-surface-container-low flex flex-col items-center gap-6 px-8 text-center">
        <div className="font-headline font-bold text-primary uppercase tracking-widest">Veridian Origin</div>
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
        <p className="text-xs font-medium text-on-surface-variant mt-4">© 2024 Terroir Ledger. Immutable Agricultural Transparency.</p>
      </footer>

      {/* Bottom Nav (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-white/80 backdrop-blur-lg rounded-t-[32px] shadow-[0_-12px_32px_rgba(45,21,13,0.06)]">
        <div className="flex flex-col items-center justify-center bg-primary/10 text-primary rounded-full py-2 px-5">
          <Scan className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Scan</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant/50">
          <Search className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Browse</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant/50">
          <Route className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Track</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant/50">
          <ShieldCheck className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Proof</span>
        </div>
      </nav>
    </div>
  );
}
