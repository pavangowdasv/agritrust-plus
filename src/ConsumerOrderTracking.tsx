import {
  Sprout,
  Globe,
  Target,
  Calendar,
  CheckCircle2,
  BadgeCheck,
  Package,
  Truck,
  MapPin,
  CheckSquare,
  Info as InfoIcon,
  CalendarCheck,
  ShieldCheck,
  Warehouse as WarehouseIcon,
  Car,
  Hourglass,
  Shield,
  Banknote,
  Navigation,
  Download as DownloadIcon,
  MessageSquare,
  AlertCircle,
  Home as HomeIcon,
  ClipboardList,
  ArrowLeft,
  LogOut,
  Star,
  TrendingUp,
  X,
  ChevronRight,
  Clock,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const timelineSteps = [
  {
    title: 'Order Confirmed',
    date: 'Oct 18, 2023 | 09:15 AM',
    location: 'Platform Hub | Nairobi',
    status: 'completed',
    icon: CheckCircle2,
  },
  {
    title: 'Producer Harvested Crop',
    date: 'Oct 19, 2023 | 06:30 AM',
    location: 'Mwangi Estates | Nyeri Highlands',
    status: 'completed',
    icon: Sprout,
  },
  {
    title: 'Quality Verified — Grade A+',
    date: 'Oct 20, 2023 | 11:45 AM',
    description: 'Batch B-204 passed moisture & acidity testing. Certified Organic CO-22.',
    status: 'current',
    icon: BadgeCheck,
  },
  {
    title: 'Packed for Delivery',
    date: 'Pending Verification',
    status: 'upcoming',
    icon: Package,
  },
  {
    title: 'Transport Started',
    date: 'Expected Oct 21',
    status: 'upcoming',
    icon: Truck,
  },
  {
    title: 'Out for Delivery',
    date: 'Expected Oct 23',
    status: 'upcoming',
    icon: MapPin,
  },
  {
    title: 'Delivered',
    date: 'Expected Oct 24',
    status: 'upcoming',
    icon: CheckSquare,
  },
];

const journeyDetails = [
  { label: 'Farm Location', value: 'Nyeri County, Kenya', icon: MapPin },
  { label: 'Harvest Date', value: 'October 19, 2023', icon: CalendarCheck },
  { label: 'Quality Check', value: 'Certified Organic (CO-22)', icon: ShieldCheck, highlight: true },
  { label: 'Storage Location', value: 'Central Highland Hub', icon: WarehouseIcon },
  { label: 'Transport ID', value: 'TRK-KBA-102', icon: Car },
  { label: 'Delivery Status', value: 'In Transit (Hub)', icon: Hourglass },
];

const myOrdersData = [
  { id: '#AC-992841-COF', name: 'Organic Arabica Coffee', qty: '2.5 kg', date: 'Oct 18, 2023', status: 'In Transit', statusColor: 'text-blue-600 bg-blue-50', amount: '₹1,230.25', rating: null },
  { id: '#AC-881203-RIC', name: 'Premium Basmati Rice', qty: '5 kg', date: 'Sep 30, 2023', status: 'Delivered', statusColor: 'text-green-700 bg-green-50', amount: '₹875.00', rating: 5 },
  { id: '#AC-774510-HNY', name: 'Organic Honey Batch', qty: '1 kg', date: 'Sep 12, 2023', status: 'Delivered', statusColor: 'text-green-700 bg-green-50', amount: '₹540.00', rating: 4 },
];

export default function ConsumerOrderTracking({
  onBack,
  onLogout,
}: {
  onBack: () => void;
  onLogout?: () => void;
}) {
  const [activeAction, setActiveAction] = useState<'invoice' | 'contact' | 'report' | null>(null);
  const [activeNav, setActiveNav] = useState<'track' | 'orders'>('track');
  const [reportCategory, setReportCategory] = useState('');
  const [reportDesc, setReportDesc] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);

  const toggleAction = (id: 'invoice' | 'contact' | 'report') =>
    setActiveAction(prev => (prev === id ? null : id));

  return (
    <div className="min-h-screen bg-mesh pb-32">
      {/* ── HEADER ── */}
      <header className="fixed top-0 w-full z-50 glass border-b border-white/30 shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onBack}
              className="p-2 hover:bg-primary/10 transition-colors rounded-full shrink-0 text-primary"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center shadow-glow-primary">
                <Sprout className="text-white w-4 h-4" />
              </div>
              <h1 className="text-xl font-extrabold text-on-surface tracking-tight truncate">
                {activeNav === 'track' ? 'Track Your Order' : 'My Orders'}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open('https://maps.google.com', '_blank')}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-200 transition-all"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Google Maps</span>
            </motion.button>
            {onLogout && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={onLogout}
                className="p-2 hover:bg-error/10 text-error transition-colors rounded-full"
              >
                <LogOut className="w-5 h-5" />
              </motion.button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 space-y-10">

        <AnimatePresence mode="wait">
          {activeNav === 'track' ? (
            <motion.div
              key="track"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* ── HERO ── */}
              <section className="text-center space-y-3 py-4">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-primary to-green-600 rounded-3xl mb-2 shadow-glow-primary animate-float"
                >
                  <Target className="text-white w-9 h-9" />
                </motion.div>
                <h2 className="text-4xl font-extrabold tracking-tight text-on-surface">
                  Live Product Journey
                </h2>
                <p className="text-on-surface-variant text-base max-w-md mx-auto leading-relaxed">
                  Follow your order from farm to doorstep with full blockchain transparency.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-200 mt-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-ping inline-block" />
                  <span className="text-xs font-black text-green-700 uppercase tracking-widest">Live Google Maps Sync</span>
                </div>
              </section>

              {/* ── ORDER DETAILS ── */}
              <section className="card-3d bg-surface-container-lowest rounded-3xl shadow-depth border border-outline-variant/10 overflow-hidden">
                <div className="bg-gradient-to-r from-primary/5 to-transparent px-6 pt-6 pb-2 border-b border-outline-variant/10">
                  <h3 className="text-xs font-black uppercase tracking-widest text-primary">Order Details</h3>
                </div>
                <div className="p-6 flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-36 h-36 rounded-2xl overflow-hidden bg-surface-container-high shrink-0 shadow-depth">
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_VViXfluYp66EZgZUN-RhyvRgqizVBcFcidiranOGghUMQk6m2bAejJd7dpAOEEiANchNozFyxyICgE_iFM9LkmeLfpAV6BkR4gqhSIuDGsxToBJuOq0NBCQxEGKfJvVVykukqD01Plf_Th1WuX6EaN8Q7kwjpaxfh07L2YAKef0UAZaXnYoTQXjSrWAwV2UQmki2rfj9EXKMb2s6Wt6TuvQDBYVuYsUObCn9ycx9W_6d142TU9uQ2cwuzrWZ6vzTqnYElnbk-Q"
                      alt="Coffee beans"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-2 gap-y-4">
                      {[
                        { label: 'Product Name', value: 'Organic Arabica Coffee' },
                        { label: 'Producer', value: 'John Mwangi' },
                        { label: 'Order ID', value: '#AC-992841-COF', mono: true },
                        { label: 'Quantity', value: '2.5 kg (Bulk Pouch)' },
                      ].map(({ label, value, mono }) => (
                        <div key={label}>
                          <p className="text-[10px] uppercase font-black text-outline">{label}</p>
                          <p className={`font-semibold text-on-surface mt-0.5 ${mono ? 'font-mono text-sm text-secondary' : ''}`}>{value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-outline-variant/15">
                      <p className="text-[10px] uppercase font-black text-outline mb-1">Delivery Address</p>
                      <p className="text-sm text-on-surface-variant">248 Garden Avenue, Suite 12, Nairobi, Kenya</p>
                    </div>
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-4 rounded-2xl flex items-center gap-3 border border-primary/15">
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
                        <Calendar className="text-white w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-black text-primary">Estimated Delivery</p>
                        <p className="font-bold text-on-surface">October 24, 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── PRODUCT JOURNEY TIMELINE ── */}
              <section className="space-y-6">
                <h3 className="text-2xl font-bold text-on-surface px-1 text-shimmer">Product Journey</h3>
                <div className="relative space-y-0 pl-12 ml-3 border-l-2 border-dashed border-primary/30">
                  {timelineSteps.map((step, idx) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className={`relative pb-8 ${step.status === 'upcoming' ? 'opacity-40' : ''}`}
                    >
                      <div
                        className={`absolute -left-[52px] top-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all ${
                          step.status === 'completed'
                            ? 'bg-primary text-white shadow-glow-primary'
                            : step.status === 'current'
                              ? 'bg-white border-4 border-primary text-primary animate-pulse-ring'
                              : 'bg-surface-container-high text-outline border-2 border-outline-variant/30'
                        }`}
                      >
                        <step.icon className="w-5 h-5" />
                      </div>
                      <div className={`${step.status === 'current' ? 'glass-green p-5 rounded-2xl border border-primary/20 shadow-glow-primary' : 'p-1'}`}>
                        <h4 className={`font-bold ${step.status === 'current' ? 'text-primary text-lg' : 'text-on-surface'}`}>
                          {step.title}
                        </h4>
                        <p className="text-sm text-on-surface-variant mt-0.5">{step.date}</p>
                        {'location' in step && step.location
                          ? <p className="text-xs text-outline mt-1 flex items-center gap-1"><MapPin className="w-3 h-3" />{step.location}</p>
                          : null}
                        {'description' in step && step.description
                          ? <p className="text-xs text-on-surface-variant mt-2 font-medium leading-relaxed">{step.description}</p>
                          : null}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* ── JOURNEY DETAILS ── */}
              <section className="card-3d bg-surface-container-lowest rounded-3xl shadow-depth border border-outline-variant/10 p-6 space-y-5">
                <h3 className="text-lg font-bold text-on-surface flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center">
                    <InfoIcon className="text-primary w-4 h-4" />
                  </div>
                  Journey Details
                  <span className="ml-auto text-[9px] font-black text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">Google Maps API</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {journeyDetails.map((detail) => (
                    <div key={detail.label} className="flex items-start gap-3 p-3 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/20 transition-all">
                      <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <detail.icon className="text-primary w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-black text-outline">{detail.label}</p>
                        <p className={`text-sm font-semibold mt-0.5 ${detail.highlight ? 'text-primary' : 'text-on-surface'}`}>
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── FAIR TRADE PROOF ── */}
              <section className="relative overflow-hidden rounded-3xl shadow-depth">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/5" />
                <div className="relative p-6 border border-secondary/15 rounded-3xl">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-secondary/70 bg-secondary/10 px-2 py-0.5 rounded-full border border-secondary/20">Blockchain Verified</span>
                      <h3 className="text-2xl font-bold text-secondary mt-2">Fair Trade Proof</h3>
                      <p className="text-on-surface-variant text-sm">Direct payment confirmed to producer.</p>
                    </div>
                    <div className="bg-secondary text-white p-3 rounded-2xl shadow-glow-secondary">
                      <Shield className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm space-y-3 border border-outline-variant/10">
                    {[
                      { label: 'Payment Amount', value: '₹42,500.00', bold: true },
                      { label: 'Payment Date', value: 'Oct 18, 2023' },
                      { label: 'Status', value: 'Confirmed', chip: true },
                    ].map(r => (
                      <div key={r.label} className="flex justify-between items-center py-1.5 border-b border-outline-variant/10 last:border-0">
                        <span className="text-on-surface-variant font-medium text-sm">{r.label}</span>
                        {r.chip
                          ? <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-black uppercase">{r.value}</span>
                          : <span className={`${r.bold ? 'font-black text-on-surface text-base' : 'text-on-surface text-sm'}`}>{r.value}</span>}
                      </div>
                    ))}
                    <div className="pt-3 flex items-center gap-3">
                      <div className="w-8 h-8 bg-secondary/10 rounded-xl flex items-center justify-center">
                        <Banknote className="text-secondary w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <p className="font-bold text-secondary">Bank Verification Status</p>
                        <p className="text-outline">Escrow release verified via ledger node #442</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── DELIVERY ROUTE ── */}
              <section className="space-y-4">
                <div className="flex items-center justify-between px-1">
                  <h3 className="text-xl font-bold text-on-surface">Delivery Route</h3>
                  <span className="text-[9px] font-black text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 uppercase tracking-widest">Google Maps Live</span>
                </div>
                <div className="bg-surface-container rounded-3xl h-[280px] relative overflow-hidden group shadow-depth border border-outline-variant/10">
                  <img
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzGjCX4BOYlkv5dJ6zAUX4qpJ72QdIpwEib0Vfir7R82bvMouN-nH7FHpuhg_bGf7CBemGsDOqDoFC8l1v-zZtelTSQBfwqB0xFGPHXWzglokMyP_SzTnwe8D2p94-LUSanW-AL7hcCVU-S55oqX6rD7k6hZ-ZsZz5mmf9YCbd9rJYp5SRuIjZi6kVmFN5yh5XgmAG84s1o0TbYxnyt35SUoeIGECJeHAmBGp0nrw8CeEQHQhiv_fXEO0rlxk_0ME50n4JIvh-Rg"
                    alt="Map"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container/60 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="glass px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2">
                        <MapPin className="text-primary w-4 h-4 fill-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider">Origin: Nyeri</span>
                      </div>
                      <div className="glass px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2">
                        <WarehouseIcon className="text-secondary w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Hub B</span>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05, y: -4 }}
                        className="bg-primary text-white px-6 py-3 rounded-2xl shadow-glow-primary flex items-center gap-3 cursor-pointer"
                        onClick={() => window.open('https://maps.google.com', '_blank')}
                      >
                        <Navigation className="w-5 h-5 animate-float" />
                        <span className="font-bold">Open in Google Maps</span>
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── QUICK ACTIONS ── */}
              <section className="space-y-4 pb-4">
                <h3 className="text-xl font-bold text-on-surface px-1">Quick Actions</h3>
                <div className="flex flex-col gap-3">

                  {/* DOWNLOAD INVOICE */}
                  <div className="flex flex-col">
                    <motion.button
                      whileTap={{ scale: 0.98, y: 3 }}
                      onClick={() => toggleAction('invoice')}
                      className={`w-full py-5 px-8 rounded-3xl font-bold text-lg flex items-center justify-between transition-all shadow-glow-primary border-b-[5px] active:border-b-[2px] ${
                        activeAction === 'invoice' ? 'bg-primary text-white border-black/20' : 'bg-gradient-to-r from-primary to-green-600 text-white border-black/30'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                          <DownloadIcon className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <p className="font-black leading-tight">Download Invoice</p>
                          <p className="text-[10px] opacity-70 font-mono">Google Cloud Billing API</p>
                        </div>
                      </div>
                      <motion.div animate={{ rotate: activeAction === 'invoice' ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronRight className="w-6 h-6 rotate-90" />
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {activeAction === 'invoice' && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="mt-2 bg-surface-container-lowest rounded-3xl border border-outline-variant/10 p-6 shadow-depth flex flex-col gap-5">
                            <div className="flex items-center gap-2">
                              <Globe className="w-3.5 h-3.5 text-blue-500" />
                              <p className="text-[10px] font-black uppercase tracking-widest text-outline">Generated via Google Cloud Billing API</p>
                            </div>
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-black text-xl text-on-surface">TAX INVOICE</p>
                                <p className="text-xs text-outline font-mono">#INV-AC-992841-COF</p>
                                <p className="text-xs text-outline mt-1">John Mwangi → Nairobi Consumer</p>
                              </div>
                              <span className="px-3 py-1.5 bg-green-100 text-green-700 text-[10px] font-black uppercase rounded-full border border-green-200">✓ PAID</span>
                            </div>
                            <div className="divide-y divide-outline-variant/15">
                              {[
                                { label: 'Organic Arabica Coffee × 2.5 kg', amount: '₹1,125.00' },
                                { label: 'Platform Transparent Fee (Zero Middlemen)', amount: '₹0.00' },
                                { label: 'GST @5% (Google Finance Verified)', amount: '₹56.25' },
                                { label: 'Delivery Charges (Last Mile)', amount: '₹49.00' },
                              ].map(r => (
                                <div key={r.label} className="flex justify-between py-2.5 text-sm">
                                  <span className="text-on-surface-variant">{r.label}</span>
                                  <span className="font-bold text-on-surface">{r.amount}</span>
                                </div>
                              ))}
                            </div>
                            <div className="flex justify-between items-center pt-2 border-t-2 border-primary/20">
                              <span className="font-black uppercase tracking-widest text-sm">Total Paid</span>
                              <span className="text-3xl font-black text-primary">₹1,230.25</span>
                            </div>
                            <div className="bg-surface-container rounded-2xl p-4 space-y-1.5 border border-outline-variant/10">
                              <div className="flex justify-between text-xs"><span className="text-outline">Order Date</span><span className="font-bold">Oct 18, 2023</span></div>
                              <div className="flex justify-between text-xs"><span className="text-outline">Payment Method</span><span className="font-bold text-blue-600">Google Pay B2B</span></div>
                              <div className="flex justify-between text-xs"><span className="text-outline">Blockchain TXN</span><span className="font-mono font-bold text-secondary">0x8F9...3C2A</span></div>
                              <div className="flex justify-between text-xs"><span className="text-outline">Block #</span><span className="font-mono font-bold">#14920442</span></div>
                            </div>
                            <motion.button
                              whileTap={{ scale: 0.97 }}
                              onClick={() => alert('Invoice downloading… (Google Drive Backup triggered)')}
                              className="w-full py-4 bg-primary text-white font-black rounded-2xl uppercase tracking-widest text-xs hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-glow-primary"
                            >
                              <DownloadIcon className="w-4 h-4" /> Save as PDF — Backed to Google Drive
                            </motion.button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* CONTACT PRODUCER */}
                  <div className="flex flex-col">
                    <motion.button
                      whileTap={{ scale: 0.98, y: 3 }}
                      onClick={() => toggleAction('contact')}
                      className={`w-full py-5 px-8 rounded-3xl font-bold text-lg flex items-center justify-between transition-all border-b-[5px] active:border-b-[2px] ${
                        activeAction === 'contact'
                          ? 'bg-surface-container-highest text-on-surface border-outline-variant/30'
                          : 'bg-surface-container-high hover:bg-surface-container-highest text-on-surface border-outline-variant/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="font-black leading-tight">Contact Producer</p>
                          <p className="text-[10px] opacity-60 font-mono">Google Places Business API</p>
                        </div>
                      </div>
                      <motion.div animate={{ rotate: activeAction === 'contact' ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronRight className="w-6 h-6 rotate-90 text-outline" />
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {activeAction === 'contact' && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="mt-2 bg-surface-container-lowest rounded-3xl border border-outline-variant/10 p-6 shadow-depth flex flex-col gap-5">
                            <div className="flex items-center gap-2">
                              <Globe className="w-3.5 h-3.5 text-blue-500" />
                              <p className="text-[10px] font-black uppercase tracking-widest text-outline">Verified via Google Places Business API</p>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl border border-primary/15">
                              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-glow-primary">JM</div>
                              <div>
                                <p className="font-black text-on-surface text-lg">John Mwangi</p>
                                <p className="text-xs text-outline">Mwangi Estates, Nyeri County, Kenya</p>
                                <div className="flex items-center gap-1 mt-1">
                                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                                  <span className="text-[10px] font-bold text-outline ml-1">4.9 (127 reviews)</span>
                                </div>
                                <span className="text-[9px] bg-green-100 text-green-700 font-black px-2 py-0.5 rounded-full uppercase border border-green-200">✓ Google-Verified Producer</span>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                              {[
                                { icon: MessageSquare, label: 'WhatsApp Business', sub: 'Google Business Messenger', value: '+254 712 345 678', color: 'text-green-600', bg: 'bg-green-50 border-green-200' },
                                { icon: Globe, label: 'Email', sub: 'Google Workspace Verified', value: 'john@mwangifarm.co.ke', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
                                { icon: MapPin, label: 'Google Maps', sub: '0.4 km from nearest hub', value: 'Nyeri Highland Hub — View Location', color: 'text-primary', bg: 'bg-primary/5 border-primary/20' },
                                { icon: Navigation, label: 'Get Directions', sub: 'Google Maps Navigation', value: 'Open Route to Farm', color: 'text-secondary', bg: 'bg-secondary/5 border-secondary/20' },
                              ].map(c => (
                                <motion.button key={c.label} whileTap={{ scale: 0.97 }} className={`w-full flex items-center gap-3 p-4 ${c.bg} rounded-2xl border text-left hover:brightness-95 transition-all`}>
                                  <div className={`w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center ${c.color} shadow-sm`}>
                                    <c.icon className="w-5 h-5" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-outline">{c.label}</p>
                                    <p className={`text-sm font-bold ${c.color} truncate`}>{c.value}</p>
                                    <p className="text-[9px] text-outline">{c.sub}</p>
                                  </div>
                                  <ChevronRight className={`w-4 h-4 ${c.color} shrink-0`} />
                                </motion.button>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* REPORT ISSUE */}
                  <div className="flex flex-col">
                    <motion.button
                      whileTap={{ scale: 0.98, y: 3 }}
                      onClick={() => toggleAction('report')}
                      className={`w-full py-5 px-8 rounded-3xl font-bold text-lg flex items-center justify-between transition-all border-b-[5px] active:border-b-[2px] ${
                        activeAction === 'report'
                          ? 'bg-error/10 text-error border-error/20'
                          : 'border-2 border-error/25 hover:bg-error/5 text-error'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-error/10 rounded-xl flex items-center justify-center">
                          <AlertCircle className="w-5 h-5 text-error" />
                        </div>
                        <div className="text-left">
                          <p className="font-black leading-tight">Report Issue</p>
                          <p className="text-[10px] opacity-60 font-mono">Google Cloud Pub/Sub Routing</p>
                        </div>
                      </div>
                      <motion.div animate={{ rotate: activeAction === 'report' ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronRight className="w-6 h-6 rotate-90" />
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {activeAction === 'report' && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="mt-2 bg-surface-container-lowest rounded-3xl border border-error/10 p-6 shadow-depth flex flex-col gap-5">
                            {!reportSubmitted ? (
                              <>
                                <div className="flex items-center gap-2">
                                  <Globe className="w-3.5 h-3.5 text-blue-500" />
                                  <p className="text-[10px] font-black uppercase tracking-widest text-outline">Powered by Google Support Infrastructure</p>
                                </div>
                                <div>
                                  <p className="text-xs font-black uppercase tracking-widest text-outline mb-3">Select Issue Category</p>
                                  <div className="grid grid-cols-2 gap-2">
                                    {['Wrong Item Delivered', 'Quality Not as Expected', 'Payment Discrepancy', 'Delivery Delay', 'Packaging Damaged', 'Other'].map(cat => (
                                      <motion.button
                                        key={cat}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setReportCategory(cat)}
                                        className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-left ${
                                          reportCategory === cat
                                            ? 'bg-error text-white border-error shadow-lg'
                                            : 'bg-surface-container border-outline-variant/20 text-on-surface-variant hover:border-error/40 hover:text-error'
                                        }`}
                                      >
                                        {cat}
                                      </motion.button>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <p className="text-xs font-black uppercase tracking-widest text-outline mb-2">Describe the Issue</p>
                                  <textarea
                                    value={reportDesc}
                                    onChange={e => setReportDesc(e.target.value)}
                                    rows={3}
                                    placeholder="Describe the issue in detail…"
                                    className="w-full bg-surface-container rounded-xl border border-outline-variant/20 p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-error/30 transition-all"
                                  />
                                </div>
                                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-3">
                                  <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                                  <div className="text-xs text-amber-700">
                                    <p className="font-black mb-0.5">Auto-Tagged with Order ID</p>
                                    <p>This report is linked to <span className="font-bold">#AC-992841-COF</span> and will be routed to the AgriTrust Dispute Engine via <span className="font-bold">Google Cloud Pub/Sub</span> within 30 seconds.</p>
                                  </div>
                                </div>
                                <motion.button
                                  whileTap={{ scale: 0.97 }}
                                  onClick={() => { if (reportCategory) setReportSubmitted(true); }}
                                  disabled={!reportCategory}
                                  className="w-full py-4 bg-error text-white font-black rounded-2xl uppercase tracking-widest text-sm hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                  <AlertCircle className="w-4 h-4" /> Submit Report
                                </motion.button>
                              </>
                            ) : (
                              <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="flex flex-col items-center text-center gap-4 py-6"
                              >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
                                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                                </div>
                                <div>
                                  <p className="font-black text-xl text-on-surface">Report Submitted!</p>
                                  <p className="text-sm text-outline mt-1 max-w-xs">Ticket <span className="font-mono font-bold text-secondary">#TKT-{Date.now().toString().slice(-6)}</span> created. Producer and AgriTrust dispute team notified via Google Cloud Pub/Sub.</p>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-200">
                                  <Clock className="w-4 h-4 text-green-600" />
                                  <span className="text-xs font-bold text-green-700">Expected response: 2–4 hours</span>
                                </div>
                                <button onClick={() => { setReportSubmitted(false); setReportCategory(''); setReportDesc(''); }} className="text-xs font-bold text-outline underline mt-1">
                                  Submit another issue
                                </button>
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </section>
            </motion.div>
          ) : (
            /* ── MY ORDERS VIEW ── */
            <motion.div
              key="orders"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <section className="text-center space-y-2 py-4">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-secondary to-amber-700 rounded-3xl mb-2 shadow-glow-secondary animate-float"
                >
                  <ClipboardList className="text-white w-9 h-9" />
                </motion.div>
                <h2 className="text-4xl font-extrabold tracking-tight text-on-surface">My Orders</h2>
                <p className="text-on-surface-variant text-sm">All orders synced via Google Cloud Firestore</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mt-2">
                  <Globe className="w-3.5 h-3.5 text-blue-500" />
                  <span className="text-xs font-black text-blue-700 uppercase tracking-widest">Google Cloud Firestore Sync</span>
                </div>
              </section>

              {/* Order stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Total Orders', value: '3', icon: Package, color: 'bg-primary/10 text-primary' },
                  { label: 'Delivered', value: '2', icon: CheckCircle2, color: 'bg-green-100 text-green-700' },
                  { label: 'In Transit', value: '1', icon: Truck, color: 'bg-blue-100 text-blue-700' },
                ].map(s => (
                  <motion.div
                    key={s.label}
                    whileHover={{ y: -4 }}
                    className="card-3d bg-surface-container-lowest rounded-2xl p-4 text-center border border-outline-variant/10 shadow-depth"
                  >
                    <div className={`w-10 h-10 ${s.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                      <s.icon className="w-5 h-5" />
                    </div>
                    <p className="text-2xl font-black text-on-surface">{s.value}</p>
                    <p className="text-[10px] font-bold text-outline uppercase tracking-widest mt-0.5">{s.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Order cards */}
              <div className="flex flex-col gap-4">
                {myOrdersData.map((order, idx) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="card-3d bg-surface-container-lowest rounded-3xl border border-outline-variant/10 shadow-depth p-5 flex flex-col sm:flex-row gap-4 cursor-pointer"
                    onClick={() => order.id === '#AC-992841-COF' && setActiveNav('track')}
                  >
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-black text-on-surface">{order.name}</p>
                          <p className="text-xs font-mono text-secondary">{order.id}</p>
                        </div>
                        <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase ${order.statusColor}`}>{order.status}</span>
                      </div>
                      <div className="flex items-center gap-4 mt-3 text-xs text-outline">
                        <span className="flex items-center gap-1"><Package className="w-3.5 h-3.5" />{order.qty}</span>
                        <span className="flex items-center gap-1"><CalendarCheck className="w-3.5 h-3.5" />{order.date}</span>
                      </div>
                      {order.rating && (
                        <div className="flex items-center gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3.5 h-3.5 ${i < order.rating! ? 'fill-amber-400 text-amber-400' : 'text-outline'}`} />
                          ))}
                          <span className="text-[10px] text-outline ml-1">You rated this</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-2 sm:min-w-[100px] sm:text-right">
                      <p className="font-black text-lg text-on-surface">{order.amount}</p>
                      {order.id === '#AC-992841-COF' && (
                        <div className="flex items-center gap-1 text-[10px] text-primary font-black uppercase tracking-widest">
                          <TrendingUp className="w-3.5 h-3.5" /> Track
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* ── BOTTOM NAV ── */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 glass z-50 rounded-t-3xl shadow-[0_-4px_24px_rgba(27,109,36,0.1)] border-t border-white/40">
        <NavItem icon={HomeIcon} label="Home" onClick={onBack} />
        <NavItem icon={Package} label="Products" onClick={onBack} />
        <NavItem icon={MapPin} label="Track" active={activeNav === 'track'} onClick={() => setActiveNav('track')} />
        <NavItem icon={ClipboardList} label="My Orders" active={activeNav === 'orders'} onClick={() => setActiveNav('orders')} />
      </nav>
    </div>
  );
}

function NavItem({
  icon: Icon,
  label,
  active = false,
  onClick,
}: {
  icon: any;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`flex flex-col items-center justify-center px-4 py-2 transition-all duration-300 ease-out cursor-pointer ${
        active ? 'bg-primary text-white rounded-2xl scale-105 shadow-glow-primary' : 'text-on-surface-variant hover:text-primary'
      }`}
    >
      <Icon className={`w-5 h-5 ${active ? 'fill-white' : ''}`} />
      <span className="text-[11px] font-medium uppercase tracking-wider mt-1">{label}</span>
    </motion.button>
  );
}
