import React, { useState, useMemo } from 'react';
import { Tractor, User, Building2, Lock, Mail, ArrowRight, Leaf, Wheat, Phone, MapPin, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { API_BASE } from './config';

// ─── Indian States & Cities Data ───────────────────────────────────────────
const INDIA_STATES_CITIES: Record<string, string[]> = {
  'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Tirupati', 'Kakinada', 'Rajahmundry', 'Kadapa', 'Anantapur'],
  'Arunachal Pradesh': ['Itanagar', 'Naharlagun', 'Pasighat', 'Tezpur', 'Ziro', 'Bomdila'],
  'Assam': ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur', 'Bongaigaon', 'Karimganj'],
  'Bihar': ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga', 'Arrah', 'Begusarai', 'Katihar', 'Munger', 'Purnia'],
  'Chhattisgarh': ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Raigarh', 'Ambikapur'],
  'Goa': ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Bicholim'],
  'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Gandhinagar', 'Junagadh', 'Anand', 'Morbi', 'Navsari', 'Bharuch'],
  'Haryana': ['Faridabad', 'Gurgaon', 'Panipat', 'Ambala', 'Yamunanagar', 'Rohtak', 'Hisar', 'Karnal', 'Sonipat', 'Panchkula'],
  'Himachal Pradesh': ['Shimla', 'Solan', 'Dharamshala', 'Mandi', 'Kullu', 'Manali', 'Kangra', 'Bilaspur', 'Hamirpur'],
  'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Phusro', 'Hazaribagh', 'Giridih', 'Ramgarh'],
  'Karnataka': ['Bengaluru', 'Mysuru', 'Hubli', 'Mangaluru', 'Belagavi', 'Kalaburagi', 'Ballari', 'Tumakuru', 'Shivamogga', 'Davangere', 'Vijayapura', 'Hassan'],
  'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam', 'Palakkad', 'Alappuzha', 'Kannur', 'Kottayam', 'Malappuram', 'Manjeri'],
  'Madhya Pradesh': ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Dewas', 'Satna', 'Ratlam', 'Rewa', 'Murwara', 'Burhanpur'],
  'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad', 'Solapur', 'Amravati', 'Kolhapur', 'Nanded', 'Sangli', 'Jalgaon', 'Akola', 'Latur'],
  'Manipur': ['Imphal', 'Thoubal', 'Bishnupur', 'Churachandpur', 'Senapati', 'Ukhrul'],
  'Meghalaya': ['Shillong', 'Tura', 'Jowai', 'Nongstoin', 'Williamnagar'],
  'Mizoram': ['Aizawl', 'Lunglei', 'Champhai', 'Serchhip', 'Kolasib'],
  'Nagaland': ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha', 'Zunheboto'],
  'Odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Brahmapur', 'Sambalpur', 'Puri', 'Balasore', 'Baripada', 'Bhadrak', 'Jharsuguda'],
  'Punjab': ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Hoshiarpur', 'Batala', 'Pathankot', 'Moga'],
  'Rajasthan': ['Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Ajmer', 'Udaipur', 'Bhilwara', 'Alwar', 'Bharatpur', 'Sri Ganganagar', 'Sikar', 'Pali'],
  'Sikkim': ['Gangtok', 'Namchi', 'Mangan', 'Gyalshing', 'Ravangla'],
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Vellore', 'Erode', 'Thoothukudi', 'Dindigul', 'Thanjavur', 'Ranipet'],
  'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Ramagundam', 'Khammam', 'Mahbubnagar', 'Nalgonda', 'Adilabad', 'Siddipet'],
  'Tripura': ['Agartala', 'Dharmanagar', 'Udaipur', 'Kailashahar', 'Belonia', 'Ambassa'],
  'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Meerut', 'Allahabad', 'Bareilly', 'Aligarh', 'Moradabad', 'Saharanpur', 'Gorakhpur', 'Noida', 'Ghaziabad', 'Mathura', 'Jhansi', 'Muzaffarnagar'],
  'Uttarakhand': ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rudrapur', 'Kashipur', 'Rishikesh', 'Nainital', 'Mussoorie'],
  'West Bengal': ['Kolkata', 'Howrah', 'Asansol', 'Siliguri', 'Durgapur', 'Bardhaman', 'Malda', 'Baharampur', 'Habra', 'Kharagpur', 'Shillong', 'Jalpaiguri'],
  'Delhi': ['New Delhi', 'Dwarka', 'Rohini', 'Janakpuri', 'Laxmi Nagar', 'Saket', 'Pitampura', 'Karol Bagh', 'Vasant Kunj'],
  'Jammu & Kashmir': ['Srinagar', 'Jammu', 'Baramulla', 'Anantnag', 'Sopore', 'Udhampur', 'Kathua'],
  'Ladakh': ['Leh', 'Kargil', 'Diskit', 'Khalsi'],
  'Chandigarh': ['Chandigarh'],
  'Dadra & Nagar Haveli': ['Silvassa', 'Amli', 'Khanvel'],
  'Daman & Diu': ['Daman', 'Diu'],
  'Lakshadweep': ['Kavaratti', 'Agatti', 'Minicoy'],
  'Puducherry': ['Puducherry', 'Karaikal', 'Mahe', 'Yanam'],
};

// ─── Types ──────────────────────────────────────────────────────────────────
interface RegisterPageProps {
  role: 'farmer' | 'consumer' | 'bank';
  onRegisterSuccess: (email: string) => void;
  onBack: () => void;
  t: any;
  activeLang: string;
  showToast: (msg: string, type: 'success' | 'error') => void;
}

// ─── Field Component ─────────────────────────────────────────────────────────
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-bold text-on-surface ml-1">{label}</label>
      {children}
    </div>
  );
}

const inputClass = "w-full h-14 pl-12 pr-4 bg-white/50 rounded-2xl border border-white/30 outline-none focus:ring-2 focus:ring-primary shadow-sm text-sm font-medium transition-all placeholder:text-on-surface-variant/50 backdrop-blur-sm";
const selectClass = "w-full h-14 pl-12 pr-10 bg-white/50 rounded-2xl border border-white/30 outline-none focus:ring-2 focus:ring-primary shadow-sm text-sm font-medium transition-all appearance-none backdrop-blur-sm cursor-pointer";

// ─── Main Component ──────────────────────────────────────────────────────────
export default function RegisterPage({ role, onRegisterSuccess, onBack, t, activeLang, showToast }: RegisterPageProps) {
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone]       = useState('');
  const [address, setAddress]   = useState('');
  const [state, setState]       = useState('');
  const [city, setCity]         = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Cities update when state changes
  const cities = useMemo(() => state ? INDIA_STATES_CITIES[state] ?? [] : [], [state]);
  const sortedStates = useMemo(() => Object.keys(INDIA_STATES_CITIES).sort(), []);

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
    setCity(''); // Reset city when state changes
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!state || !city) {
      showToast('Please select your State and City.', 'error');
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role, phone, address, state, city }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('agritrust_name', name);
        showToast('Account Created! Logging you in...', 'success');
        onRegisterSuccess(email);
      } else {
        showToast(data.error || 'Registration failed', 'error');
      }
    } catch {
      showToast('Network error. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const getRoleIcon = () => {
    if (role === 'farmer')   return <Tractor className="w-12 h-12 text-primary" />;
    if (role === 'consumer') return <User className="w-12 h-12 text-blue-500" />;
    return <Building2 className="w-12 h-12 text-indigo-500" />;
  };

  const getRoleTitle = () => {
    if (role === 'farmer')   return t(activeLang, 'roles.farmer.title') || 'Producer';
    if (role === 'consumer') return t(activeLang, 'roles.consumer.title') || 'Consumer';
    return t(activeLang, 'roles.bank.title') || 'Institution';
  };

  const roleColor = role === 'farmer'   ? 'bg-primary/20 border-primary/30' :
                    role === 'consumer' ? 'bg-blue-500/20 border-blue-500/30' :
                                         'bg-indigo-500/20 border-indigo-500/30';

  const containerVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
  } as const;

  const itemVariants = {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } as const }
  } as const;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen pt-28 pb-16 px-6 flex flex-col items-center justify-center relative overflow-hidden bg-surface"
    >
      {/* ── Decorative Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[8%] left-[4%] text-primary/10"
        >
          <Leaf size={120} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[8%] right-[6%] text-primary/10"
        >
          <Wheat size={140} />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      {/* ── Card ── */}
      <motion.div
        variants={itemVariants}
        className="w-full max-w-lg bg-white/40 backdrop-blur-2xl glass p-8 sm:p-10 rounded-[2.5rem] border border-white/30 shadow-premium relative z-10"
      >
        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-6 left-6 text-on-surface-variant hover:text-primary transition-colors text-sm font-bold flex items-center gap-1"
        >
          ← Back
        </button>

        {/* Header */}
        <div className="flex flex-col items-center text-center mt-6 mb-8">
          <div className={`w-20 h-20 rounded-[1.75rem] flex items-center justify-center border mb-5 ${roleColor}`}>
            {getRoleIcon()}
          </div>
          <h2 className="font-headline text-3xl font-black text-on-surface tracking-tighter mb-1">
            Create Account
          </h2>
          <p className="text-on-surface-variant text-sm font-medium">
            Join AgriTrust as a <span className="font-bold text-primary">{getRoleTitle()}</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <motion.div variants={itemVariants}>
            <Field label="Full Name">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/70 pointer-events-none" />
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  placeholder="John Doe"
                  className={inputClass}
                />
              </div>
            </Field>
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants}>
            <Field label="Email Address">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/70 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
            </Field>
          </motion.div>

          {/* Phone */}
          <motion.div variants={itemVariants}>
            <Field label="Phone Number">
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/70 pointer-events-none" />
                <input
                  type="tel"
                  value={phone}
                  onChange={e => {
                    // Strip everything that isn't a digit, cap at 10
                    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
                    setPhone(digits);
                  }}
                  required
                  placeholder="10-digit mobile number"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  inputMode="numeric"
                  className={inputClass}
                />
                {/* Live digit counter */}
                <span className={`absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold tabular-nums ${
                  phone.length === 10 ? 'text-primary' : 'text-on-surface-variant/50'
                }`}>
                  {phone.length}/10
                </span>
              </div>
              {phone.length > 0 && phone.length < 10 && (
                <p className="text-xs text-red-500 font-medium mt-1 ml-1">
                  Enter all 10 digits ({10 - phone.length} remaining)
                </p>
              )}
            </Field>
          </motion.div>

          {/* Password */}
          <motion.div variants={itemVariants}>
            <Field label="Password">
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/70 pointer-events-none" />
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  minLength={6}
                  placeholder="Min. 6 characters"
                  className={inputClass}
                />
              </div>
            </Field>
          </motion.div>

          {/* Address */}
          <motion.div variants={itemVariants}>
            <Field label="Street Address">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/70 pointer-events-none" />
                <input
                  type="text"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  required
                  placeholder="House No., Street, Locality"
                  className={inputClass}
                />
              </div>
            </Field>
          </motion.div>

          {/* State & City — side by side on desktop, stacked on mobile */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* State Dropdown */}
            <Field label="State">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/70 pointer-events-none z-10" />
                <select
                  value={state}
                  onChange={handleStateChange}
                  required
                  className={selectClass}
                >
                  <option value="">Select State</option>
                  {sortedStates.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/70 pointer-events-none" />
              </div>
            </Field>

            {/* City Dropdown — disabled until state picked */}
            <Field label="City">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/70 pointer-events-none z-10" />
                <select
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  required
                  disabled={!state}
                  className={`${selectClass} disabled:opacity-40 disabled:cursor-not-allowed`}
                >
                  <option value="">{state ? 'Select City' : 'Pick state first'}</option>
                  {cities.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/70 pointer-events-none" />
              </div>
            </Field>
          </motion.div>

          {/* Submit */}
          <motion.div variants={itemVariants} className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-primary hover:bg-primary/90 text-on-primary rounded-2xl font-bold text-sm tracking-widest uppercase transition-all shadow-xl shadow-primary/30 active:scale-[0.98] flex items-center justify-center gap-2 group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                </>
              )}
            </button>
          </motion.div>

        </form>
      </motion.div>

      {/* Return link */}
      <motion.button
        variants={itemVariants}
        onClick={onBack}
        className="mt-8 text-on-surface-variant hover:text-primary transition-all font-bold flex items-center gap-2 group"
      >
        <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
        Return to Selection
      </motion.button>
    </motion.div>
  );
}
