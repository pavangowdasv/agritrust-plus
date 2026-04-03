import React, { useState } from 'react';
import type { MouseEvent } from 'react';
import {
  LayoutDashboard,
  UserCheck,
  CheckCircle2,
  FileCheck,
  Clock,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  FileText,
  ShieldAlert,
  Link as LinkIcon,
  ChevronDown,
  UserPlus,
  CheckSquare,
  Wallet,
  Receipt,
  Bell,
  Tractor,
  BarChart3,
  Globe,
  UploadCloud,
  TrendingUp,
  Landmark,
  LogOut,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function StatCard({
  icon: Icon,
  label,
  value,
  colorClass,
  isOpen,
  onClick,
  children
}: {
  icon: any;
  label: string;
  value: string | number;
  colorClass: string;
  isOpen?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <button 
        onClick={onClick}
        className={`w-full text-left bg-surface-container-lowest p-5 rounded-xl flex justify-between items-center shadow-sm border transition-colors ${isOpen ? 'border-primary/30 bg-surface-container-low' : 'border-outline-variant/10 hover:border-primary/30'} cursor-pointer`}
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-full ${colorClass}`}>
            <Icon size={24} />
          </div>
          <div>
            <p className="text-xs text-on-surface-variant font-medium">{label}</p>
            <p className="text-xl font-bold">{value}</p>
          </div>
        </div>
        <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
          <ChevronRight className="text-outline" size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && children && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
             <div className="mt-2 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-inner">
               {children}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AccordionItem({
  icon: Icon,
  title,
  children,
  isOpen,
  onClick,
  id,
}: {
  icon: any;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  id?: string;
}) {
  return (
    <div className="group scroll-m-24 relative" id={id}>
      <button
        onClick={onClick}
        className={`w-full text-left p-6 rounded-xl flex items-center justify-between transition-all ${isOpen ? 'bg-surface-container-high' : 'bg-surface-container-low hover:bg-surface-container-high'}`}
      >
        <div className="flex items-center gap-4">
          <Icon className="text-primary" size={24} />
          <span className="font-semibold text-lg">{title}</span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="text-outline" size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="mt-2 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function QuickActionButton({ icon: Icon, label, subLabel, onClick }: { icon: any; label: string; subLabel?: string; onClick?: () => void }) {
  return (
    <motion.button onClick={onClick} whileHover={{ y: -4 }} whileTap={{ scale: 0.95 }} className="cursor-pointer flex flex-col items-center justify-center gap-3 bg-primary text-white p-6 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:bg-primary-container transition-all relative overflow-hidden group border-b-[6px] border-black/20 active:border-b-[2px] active:translate-y-[4px]">
      <Icon size={32} className="relative z-10 group-hover:scale-110 transition-transform" />
      <span className="text-[10px] font-bold uppercase tracking-widest text-center mt-1 relative z-10">{label}</span>
      {subLabel && <span className="text-[9px] font-mono opacity-70 normal-case tracking-normal relative z-10 text-center max-w-[120px]">{subLabel}</span>}
      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
    </motion.button>
  );
}

export default function BankDashboard({ onLogout }: { onLogout?: () => void }) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [activeStat, setActiveStat] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface pb-32">
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md flex items-center justify-between px-6 py-4 border-b border-outline-variant/10">
        <div className="flex items-center gap-3">
          <Landmark className="text-primary" size={32} />
          <div className="flex flex-col">
            <h1 className="text-primary font-extrabold tracking-tight text-2xl leading-tight">Hi, Financial Institution</h1>
            <p className="text-[10px] text-on-surface-variant font-medium">
              Continue reviewing producer verification, payments, loans, and ledger records.
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
            <Bell size={24} className="text-on-surface-variant" />
          </button>
          {onLogout && (
            <button
              onClick={(e: MouseEvent) => { e.preventDefault(); onLogout(); }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-error/10 hover:bg-error/20 text-error font-bold text-xs uppercase tracking-widest transition-all border border-error/20 hover:border-error/50 active:scale-95 cursor-pointer"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          )}
        </div>
      </header>

      <main className="max-w-2xl mx-auto pt-24 px-4 space-y-12">
        <section className="space-y-6">
          <div className="flex justify-between items-end">
            <h2 className="text-2xl font-bold tracking-tight text-on-surface">Dashboard Overview</h2>
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest animate-pulse">Live Updates</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-primary-container p-8 rounded-2xl text-on-primary-container relative overflow-hidden group shadow-xl shadow-primary/20">
              <div className="relative z-10">
                <p className="text-sm font-medium opacity-80 mb-1">Active Accounts</p>
                <h3 className="text-6xl font-extrabold">120</h3>
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <TrendingUp size={18} />
                  <span className="font-medium">12% increase from last month</span>
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <LayoutDashboard size={200} />
              </div>
            </div>

            <div className="space-y-3">
              <StatCard 
                icon={UserCheck} 
                label="Producers Verified" 
                value="42" 
                colorClass="bg-primary/10 text-primary"
                isOpen={activeStat === 'producers'}
                onClick={() => setActiveStat(activeStat === 'producers' ? null : 'producers')}
              >
                <div className="space-y-4">
                   <p className="text-[10px] font-bold tracking-widest uppercase text-primary flex items-center gap-1.5"><Globe size={14} /> Synced via Google Identity & Places</p>
                   {['Ramesh Patel (Gujarat)', 'Tariq Ahmed (Kashmir)'].map(p => (
                      <div key={p} className="flex items-center justify-between text-sm py-2 border-b border-outline-variant/10 last:border-0">
                         <span className="font-semibold text-on-surface">{p}</span>
                         <span className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-full font-bold">VERIFIED</span>
                      </div>
                   ))}
                </div>
              </StatCard>

              <StatCard 
                icon={CheckCircle2} 
                label="Payments Confirmed" 
                value="15" 
                colorClass="bg-secondary/10 text-secondary"
                isOpen={activeStat === 'payments'}
                onClick={() => setActiveStat(activeStat === 'payments' ? null : 'payments')}
              >
                <div className="space-y-4">
                   <p className="text-[10px] font-bold tracking-widest uppercase text-secondary flex items-center gap-1.5"><Globe size={14} /> Processed via Google Pay Business API</p>
                   {['₹12,450 to Ratnagiri Orchards', '₹8,900 to Silvas Cashew'].map(p => (
                      <div key={p} className="flex items-center justify-between text-sm py-2 border-b border-outline-variant/10 last:border-0">
                         <span className="font-semibold text-on-surface">{p}</span>
                         <span className="text-[10px] bg-secondary/10 text-secondary px-2 py-1 rounded-full font-bold">SUCCESS</span>
                      </div>
                   ))}
                </div>
              </StatCard>

              <StatCard 
                icon={FileCheck} 
                label="Loans Approved" 
                value="8" 
                colorClass="bg-tertiary/10 text-tertiary"
                isOpen={activeStat === 'loans'}
                onClick={() => setActiveStat(activeStat === 'loans' ? null : 'loans')}
              >
                <div className="space-y-4">
                   <p className="text-[10px] font-bold tracking-widest uppercase text-tertiary flex items-center gap-1.5"><Globe size={14} /> Google Cloud AI Risk Engine</p>
                   {['Tractor Financing - Nilgiris Co-op', 'Polyhouse Credit - Pune Network'].map(p => (
                      <div key={p} className="flex flex-col gap-1 py-2 border-b border-outline-variant/10 last:border-0">
                         <span className="text-sm font-semibold text-on-surface">{p}</span>
                         <span className="text-[10px] text-tertiary font-bold">CREDIT SCORE: A+</span>
                      </div>
                   ))}
                </div>
              </StatCard>

              <StatCard 
                icon={Clock} 
                label="Pending Requests" 
                value="5" 
                colorClass="bg-error/10 text-error"
                isOpen={activeStat === 'pending'}
                onClick={() => setActiveStat(activeStat === 'pending' ? null : 'pending')}
              >
                <div className="space-y-4">
                   <p className="text-[10px] font-bold tracking-widest uppercase text-error flex items-center gap-1.5"><ShieldAlert size={14} /> ACTION REQUIRED ALERTS</p>
                   {['KYC Document mismatch for Node #124', 'Payment delayed due to NEFT bounce'].map(p => (
                      <div key={p} className="flex items-start gap-2 py-2 border-b border-outline-variant/10 last:border-0">
                         <span className="text-error mt-0.5"><Clock size={12} /></span>
                         <span className="text-sm font-medium text-on-surface-variant leading-tight">{p}</span>
                      </div>
                   ))}
                </div>
              </StatCard>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-on-surface px-1">Institution Tools</h2>

          <AccordionItem id="accordion-verify" icon={ShieldCheck} title="Verify Producers" isOpen={openAccordion === 'verify'} onClick={() => toggleAccordion('verify')}>
            <h3 className="text-xs font-bold text-primary mb-6 uppercase tracking-widest flex items-center gap-2"><Globe size={16} /> Google Places Verification Matrix</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] font-bold text-on-surface-variant mb-1 ml-1 uppercase tracking-wider">Producer Name</label>
                <input className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 p-3 text-sm" placeholder="Full Legal Name" type="text" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-on-surface-variant mb-1 ml-1 uppercase tracking-wider">Aadhaar / ID</label>
                  <input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm" placeholder="1234-5678-9012" type="text" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-on-surface-variant mb-1 ml-1 uppercase tracking-wider">Account Number</label>
                  <input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm" placeholder="8899001122" type="text" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-on-surface-variant mb-1 ml-1 uppercase tracking-wider">KYC Document Upload</label>
                <div className="border-2 border-dashed border-outline-variant/30 rounded-lg p-8 text-center bg-surface-container-low hover:bg-surface-container-high cursor-pointer transition-colors group">
                  <UploadCloud className="text-outline mb-2 mx-auto group-hover:text-primary transition-colors" size={32} />
                  <span className="text-xs font-medium text-on-surface-variant">Click to upload or drag files</span>
                </div>
              </div>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-container transition-colors mt-2 shadow-lg shadow-primary/10">
                Verify Producer
              </button>
            </form>
          </AccordionItem>

          <AccordionItem id="accordion-payment" icon={CreditCard} title="Payment Verification" isOpen={openAccordion === 'payment'} onClick={() => toggleAccordion('payment')}>
            <h3 className="text-xs font-bold text-primary mb-6 uppercase tracking-widest flex items-center gap-2"><Globe size={16} /> Google Pay API Settlement Hub</h3>
            <div className="space-y-4">
              <input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm" placeholder="Producer Name" type="text" />
              <input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm" placeholder="Transaction ID" type="text" />
              <div className="grid grid-cols-2 gap-4">
                <input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm" placeholder="Amount (INR)" type="text" />
                <input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm" type="date" />
              </div>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-xl">Confirm Payment</button>
            </div>
          </AccordionItem>

          <AccordionItem id="accordion-loans" icon={FileText} title="Loan Applications" isOpen={openAccordion === 'loans'} onClick={() => toggleAccordion('loans')}>
            <h3 className="text-xs font-bold text-primary mb-6 uppercase tracking-widest flex items-center gap-2"><Globe size={16} /> Google Cloud AI Risk Engine</h3>
            <div className="space-y-4">
              <input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm" placeholder="Producer Name" type="text" />
              <input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm" placeholder="Loan Amount" type="text" />
              <textarea className="w-full bg-surface-container-low border-none rounded-lg p-3 h-24 text-sm resize-none" placeholder="Loan Purpose"></textarea>
              <div className="flex items-center justify-between p-4 bg-secondary/5 rounded-lg border border-secondary/10">
                <span className="text-sm font-semibold text-on-surface-variant">Credit Score Calculation</span>
                <span className="text-lg font-bold text-secondary">742</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-primary text-white font-bold py-4 rounded-xl hover:opacity-90">Approve Loan</button>
                <button className="bg-error text-white font-bold py-4 rounded-xl hover:opacity-90">Reject Loan</button>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem icon={ShieldCheck} title="Insurance and Credit Records" isOpen={openAccordion === 'insurance'} onClick={() => toggleAccordion('insurance')}>
            <h3 className="text-xs font-bold text-primary mb-6 uppercase tracking-widest">Update Records</h3>
            <div className="space-y-4">
              <input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm" placeholder="Policy Number" type="text" />
              <select className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm text-on-surface-variant">
                <option>Crop Failure Insurance</option>
                <option>Equipment Damage</option>
                <option>Livestock Protection</option>
              </select>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-xl">Update Record</button>
            </div>
          </AccordionItem>

          <AccordionItem id="accordion-linkage" icon={LinkIcon} title="Account Linkage" isOpen={openAccordion === 'linkage'} onClick={() => toggleAccordion('linkage')}>
            <h3 className="text-xs font-bold text-primary mb-6 uppercase tracking-widest">Wallet and Ledger Linkage</h3>
            <div className="space-y-4">
              <input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm" placeholder="IFSC Code" type="text" />
              <input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm" placeholder="Blockchain Wallet Address" type="text" />
              <button className="w-full bg-primary text-white font-bold py-4 rounded-xl">Link Account</button>
            </div>
          </AccordionItem>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-on-surface px-1">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <QuickActionButton 
              icon={UserPlus} 
              label="Verify Producer" 
              subLabel="Google Identity Sync"
              onClick={() => {
                setOpenAccordion('verify');
                setTimeout(() => document.getElementById('accordion-verify')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
              }}
            />
            <QuickActionButton 
              icon={CheckSquare} 
              label="Confirm Payment" 
              subLabel="Google Pay B2B"
              onClick={() => {
                setOpenAccordion('payment');
                setTimeout(() => document.getElementById('accordion-payment')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
              }}
            />
            <QuickActionButton 
              icon={Wallet} 
              label="Process Loan" 
              subLabel="Cloud AI Assessment"
              onClick={() => {
                setOpenAccordion('loans');
                setTimeout(() => document.getElementById('accordion-loans')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
              }}
            />
            <QuickActionButton 
              icon={Receipt} 
              label="Account Linkage" 
              subLabel="Sync Wallet LEDGER"
              onClick={() => {
                setOpenAccordion('linkage');
                setTimeout(() => document.getElementById('accordion-linkage')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
              }}
            />
          </div>
        </section>

        <section className="pt-8">
          <div className="relative h-64 rounded-2xl overflow-hidden group shadow-2xl">
            <img
              alt="Agricultural landscape"
              className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-[3000ms]"
              referrerPolicy="no-referrer"
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2 opacity-80">Sustainable Finance</p>
                <h3 className="text-3xl font-extrabold mb-1">Fertile Horizon Ledger</h3>
                <p className="text-sm opacity-90 max-w-xs font-medium">Blockchain-powered transparency for agricultural financial institutions.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-container-low w-full py-16 mb-20 flex flex-col items-center space-y-8 px-6">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {['About', 'Contact', 'Privacy Policy', 'Terms', 'Support'].map((link) => (
            <a key={link} className="text-on-surface-variant hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest" href="#">
              {link}
            </a>
          ))}
        </div>
        <div className="text-center space-y-3">
          <p className="text-primary font-extrabold text-sm tracking-tight">Fertile Horizon Blockchain</p>
          <p className="text-on-surface-variant text-[9px] font-bold uppercase tracking-[0.4em] opacity-60">Copyright 2026 Secure Agricultural Ledger.</p>
        </div>
      </footer>

      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-surface/90 backdrop-blur-xl border-t border-outline-variant/10">
        <button className="flex flex-col items-center justify-center bg-primary text-white rounded-2xl px-4 py-2 active:scale-90 transition-transform duration-200 shadow-lg shadow-primary/20">
          <LayoutDashboard size={20} />
          <span className="text-[10px] font-bold mt-1">Dashboard</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant py-2 hover:text-primary transition-colors active:scale-90 duration-200">
          <Tractor size={20} />
          <span className="text-[10px] font-bold mt-1">Producers</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant py-2 hover:text-primary transition-colors active:scale-90 duration-200">
          <CreditCard size={20} />
          <span className="text-[10px] font-bold mt-1">Payments</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant py-2 hover:text-primary transition-colors active:scale-90 duration-200">
          <BarChart3 size={20} />
          <span className="text-[10px] font-bold mt-1">Reports</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant py-2 hover:text-primary transition-colors active:scale-90 duration-200">
          <Globe size={20} />
          <span className="text-[10px] font-bold mt-1">English</span>
        </button>
      </nav>
    </div>
  );
}
