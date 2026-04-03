/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  ClipboardList 
} from 'lucide-react';
import { motion } from 'motion/react';

const timelineSteps = [
  {
    title: "Order Confirmed",
    date: "Oct 18, 2023 • 09:15 AM",
    location: "Platform Hub • Nairobi",
    status: "completed",
    icon: CheckCircle2
  },
  {
    title: "Farmer Harvested Crop",
    date: "Oct 19, 2023 • 06:30 AM",
    location: "Mwangi Estates • Nyeri Highlands",
    status: "completed",
    icon: Sprout
  },
  {
    title: "Quality Verified",
    date: "Oct 20, 2023 • 11:45 AM (Current)",
    description: "Batch #B-204 passed moisture and acidity testing with Grade A+ rating.",
    status: "current",
    icon: BadgeCheck
  },
  {
    title: "Packed for Delivery",
    date: "Pending Verification",
    status: "upcoming",
    icon: Package
  },
  {
    title: "Transport Started",
    date: "Expected Oct 21",
    status: "upcoming",
    icon: Truck
  },
  {
    title: "Out for Delivery",
    date: "Expected Oct 23",
    status: "upcoming",
    icon: MapPin
  },
  {
    title: "Delivered",
    date: "Expected Oct 24",
    status: "upcoming",
    icon: CheckSquare
  }
];

const journeyDetails = [
  { label: "Farm Location", value: "Nyeri County, Kenya", icon: MapPin },
  { label: "Harvest Date", value: "October 19, 2023", icon: CalendarCheck },
  { label: "Quality Check", value: "Certified Organic (CO-22)", icon: ShieldCheck, highlight: true },
  { label: "Storage Location", value: "Central Highland Hub", icon: WarehouseIcon },
  { label: "Transport ID", value: "TRK-KBA-102", icon: Car },
  { label: "Delivery Status", value: "In Transit (Hub)", icon: Hourglass },
];

export default function App() {
  return (
    <div className="min-h-screen bg-surface pb-32">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <Sprout className="text-primary w-6 h-6" />
            <h1 className="text-xl font-extrabold text-primary tracking-tight">Track Your Product</h1>
          </div>
          <button className="p-2 hover:bg-surface-container-high transition-colors rounded-full">
            <Globe className="text-on-surface-variant w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-24 space-y-12">
        {/* Hero */}
        <section className="text-center space-y-3 py-4">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-2"
          >
            <Target className="text-primary w-8 h-8" />
          </motion.div>
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface">Track Your Product</h2>
          <p className="text-on-surface-variant text-lg max-w-md mx-auto leading-relaxed">
            Follow your product journey from farm to delivery with full transparency.
          </p>
        </section>

        {/* Order Summary Card */}
        <section className="bg-surface-container-low rounded-3xl p-1 overflow-hidden shadow-sm">
          <div className="bg-surface-container-lowest rounded-[1.25rem] p-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-outline mb-6">Order Details</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-32 h-32 rounded-2xl overflow-hidden bg-surface-container-high shrink-0">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_VViXfluYp66EZgZUN-RhyvRgqizVBcFcidiranOGghUMQk6m2bAejJd7dpAOEEiANchNozFyxyICgE_iFM9LkmeLfpAV6BkR4gqhSIuDGsxToBJuOq0NBCQxEGKfJvVVykukqD01Plf_Th1WuX6EaN8Q7kwjpaxfh07L2YAKef0UAZaXnYoTQXjSrWAwV2UQmki2rfj9EXKMb2s6Wt6TuvQDBYVuYsUObCn9ycx9W_6d142TU9uQ2cwuzrWZ6vzTqnYElnbk-Q" 
                  alt="Coffee beans"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-2 gap-y-4">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-outline">Product Name</p>
                    <p className="font-semibold text-on-surface">Organic Arabica Coffee</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-outline">Farmer Name</p>
                    <p className="font-semibold text-on-surface">John Mwangi</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-outline">Order ID</p>
                    <p className="font-mono text-sm text-secondary">#AC-992841-COF</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-outline">Quantity</p>
                    <p className="font-semibold text-on-surface">2.5 kg (Bulk Pouch)</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-outline-variant/15">
                  <p className="text-[10px] uppercase font-bold text-outline mb-1">Delivery Address</p>
                  <p className="text-sm text-on-surface-variant">248 Garden Avenue, Suite 12, Nairobi, Kenya</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-xl flex items-center gap-3 border border-primary/10">
                  <Calendar className="text-primary w-5 h-5" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-primary">Estimated Delivery</p>
                    <p className="font-bold text-on-surface">October 24, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold text-on-surface px-2">Product Journey</h3>
          <div className="relative space-y-0 pl-10 ml-4 border-l-2 border-surface-container-high">
            {timelineSteps.map((step, index) => (
              <div key={index} className={`relative pb-10 ${step.status === 'upcoming' ? 'opacity-50' : ''}`}>
                <div className={`absolute -left-[51px] top-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all
                  ${step.status === 'completed' ? 'bg-primary text-white shadow-primary/20' : 
                    step.status === 'current' ? 'bg-primary-container text-on-primary ring-4 ring-primary-container/20 ring-offset-2 ring-offset-surface' : 
                    'bg-surface-container-high text-outline'}`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <div className={step.status === 'current' ? 'bg-primary/5 p-4 rounded-2xl border border-primary/10' : ''}>
                  <h4 className={`font-bold ${step.status === 'current' ? 'text-primary text-lg' : 'text-on-surface'}`}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant">{step.date}</p>
                  {step.location && <p className="text-xs text-outline mt-1">{step.location}</p>}
                  {step.description && <p className="text-xs text-on-surface-variant mt-2 font-medium">{step.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Journey Details */}
        <section className="bg-surface-container-low rounded-3xl p-6 space-y-6 shadow-sm">
          <h3 className="text-xl font-bold text-on-surface flex items-center gap-2">
            <InfoIcon className="text-primary w-5 h-5" />
            Journey Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {journeyDetails.map((detail, index) => (
              <div key={index} className="flex items-start gap-3">
                <detail.icon className="text-outline w-5 h-5 mt-1" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-outline">{detail.label}</p>
                  <p className={`text-sm font-semibold ${detail.highlight ? 'text-primary' : 'text-on-surface'}`}>
                    {detail.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fair Trade Proof */}
        <section className="bg-secondary/5 rounded-3xl p-8 border border-secondary/10">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-2xl font-bold text-secondary">Fair Trade Proof</h3>
              <p className="text-on-surface-variant text-sm">Blockchain-verified transaction to farmer.</p>
            </div>
            <div className="bg-secondary text-white p-2 rounded-xl shadow-lg shadow-secondary/20">
              <Shield className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant font-medium">Payment Amount</span>
              <span className="text-on-surface font-bold text-lg">KES 42,500.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant font-medium">Payment Date</span>
              <span className="text-on-surface">Oct 18, 2023</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant font-medium">Status</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tight">Confirmed</span>
            </div>
            <div className="pt-4 border-t border-outline-variant/15 flex items-center gap-3">
              <Banknote className="text-secondary w-5 h-5" />
              <div className="text-xs">
                <p className="font-bold text-secondary">Bank Verification Status</p>
                <p className="text-outline">Escrow Release Verified via Ledger Node #442</p>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Route Map */}
        <section className="space-y-4">
          <h3 className="text-xl font-bold text-on-surface px-2">Delivery Route</h3>
          <div className="bg-surface-container rounded-3xl h-[300px] relative overflow-hidden group shadow-inner">
            <img 
              className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzGjCX4BOYlkv5dJ6zAUX4qpJ72QdIpwEib0Vfir7R82bvMouN-nH7FHpuhg_bGf7CBemGsDOqDoFC8l1v-zZtelTSQBfwqB0xFGPHXWzglokMyP_SzTnwe8D2p94-LUSanW-AL7hcCVU-S55oqX6rD7k6hZ-ZsZz5mmf9YCbd9rJYp5SRuIjZi6kVmFN5yh5XgmAG84s1o0TbYxnyt35SUoeIGECJeHAmBGp0nrw8CeEQHQhiv_fXEO0rlxk_0ME50n4JIvh-Rg" 
              alt="Map"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2">
                  <MapPin className="text-primary w-4 h-4 fill-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider">Origin: Nyeri</span>
                </div>
                <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2">
                  <WarehouseIcon className="text-secondary w-4 h-4 fill-secondary" />
                  <span className="text-xs font-bold uppercase tracking-wider">Current: Hub B</span>
                </div>
              </div>
              <div className="flex justify-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-primary text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 scale-110"
                >
                  <Navigation className="w-5 h-5" />
                  <span className="font-bold">Last Mile Pending</span>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="space-y-6 pb-12">
          <h3 className="text-xl font-bold text-on-surface px-2">Quick Actions</h3>
          <div className="flex flex-col gap-4">
            <button className="w-full bg-primary hover:bg-primary-container text-white py-5 px-8 rounded-3xl font-bold text-lg flex items-center justify-between transition-all active:scale-[0.98] shadow-lg shadow-primary/20">
              <span>Download Invoice</span>
              <DownloadIcon className="w-6 h-6" />
            </button>
            <button className="w-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface py-5 px-8 rounded-3xl font-bold text-lg flex items-center justify-between transition-all active:scale-[0.98]">
              <span>Contact Farmer</span>
              <MessageSquare className="w-6 h-6" />
            </button>
            <button className="w-full border-2 border-error/20 hover:bg-error/5 text-error py-5 px-8 rounded-3xl font-bold text-lg flex items-center justify-between transition-all active:scale-[0.98]">
              <span>Report Issue</span>
              <AlertCircle className="w-6 h-6" />
            </button>
          </div>
        </section>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-surface/80 backdrop-blur-md z-50 rounded-t-3xl shadow-[0_-4px_24px_rgba(27,109,36,0.08)] border-t border-outline-variant/10">
        <NavItem icon={HomeIcon} label="Home" />
        <NavItem icon={Package} label="Products" />
        <NavItem icon={MapPin} label="Track Order" active />
        <NavItem icon={ClipboardList} label="My Orders" />
      </nav>
    </div>
  );
}

function NavItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`flex flex-col items-center justify-center px-4 py-2 transition-all duration-300 ease-out active:scale-95 cursor-pointer
      ${active ? 'bg-primary text-white rounded-2xl scale-105 shadow-lg shadow-primary/20' : 'text-on-surface-variant hover:text-primary'}`}
    >
      <Icon className={`w-5 h-5 ${active ? 'fill-white' : ''}`} />
      <span className="text-[11px] font-medium uppercase tracking-wider mt-1">{label}</span>
    </div>
  );
}
