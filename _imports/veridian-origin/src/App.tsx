/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Sprout, 
  Globe, 
  ChevronDown, 
  CloudUpload, 
  CheckCircle2, 
  AlertCircle,
  Home,
  Info,
  Settings,
  LogIn
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, type ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Language = "en" | "hi" | "kn" | "ta";

const translations = {
  en: {
    hi: "Hi",
    subtitle: "Manage your crop information, financial records, and verification details.",
    notVerified: "Not Verified",
    verified: "Verified",
    completeVerification: "Complete Your Verification",
    address: "Address",
    aadhaar: "Aadhaar or Other Identity Details",
    bankDetails: "Bank Account or Wallet Details",
    profileInfo: "Profile Information Provided During Registration",
    kycDetails: "KYC Details",
    kycHint: "Allow upload of: Aadhaar card, PAN card, Voter ID, Passport",
    submitVerification: "Submit Verification",
    verificationSuccess: "Verification completed successfully.",
    cropInfo: "Crop Information",
    cropType: "Crop Type",
    harvestDetails: "Harvest Details",
    quantity: "Quantity of Produce",
    kilograms: "Kilograms",
    quality: "Quality of Produce",
    saveCrop: "Save Crop Details",
    financialInfo: "Financial Information",
    transactionHistory: "Transaction and Sales History",
    paymentDetails: "Payment Details",
    loanDetails: "Loan Application Details",
    creditRecords: "Credit-related Records",
    insuranceInfo: "Insurance-related Information",
    bankLinkage: "Rural Bank Account Linkage Details",
    customerInfo: "Customer Information",
    productPurchase: "Product Purchase Details",
    saveFinancial: "Save Financial Information",
    languages: "Languages",
    home: "Home",
    about: "About",
    howItWorks: "How It Works",
    login: "Login",
    browse: "browse",
    dragHint: "Drag documents here or",
    fileSizeHint: "PDF, JPG up to 10MB"
  },
  hi: {
    hi: "नमस्ते",
    subtitle: "अपनी फसल की जानकारी, वित्तीय रिकॉर्ड और सत्यापन विवरण प्रबंधित करें।",
    notVerified: "सत्यापित नहीं",
    verified: "सत्यापित",
    completeVerification: "अपना सत्यापन पूरा करें",
    address: "पता",
    aadhaar: "आधार या अन्य पहचान विवरण",
    bankDetails: "बैंक खाता या वॉलेट विवरण",
    profileInfo: "पंजीकरण के दौरान दी गई प्रोफ़ाइल जानकारी",
    kycDetails: "केवाईसी विवरण",
    kycHint: "अपलोड की अनुमति दें: आधार कार्ड, पैन कार्ड, मतदाता पहचान पत्र, पासपोर्ट",
    submitVerification: "सत्यापन जमा करें",
    verificationSuccess: "सत्यापन सफलतापूर्वक पूरा हुआ।",
    cropInfo: "फसल की जानकारी",
    cropType: "फसल का प्रकार",
    harvestDetails: "कटाई का विवरण",
    quantity: "उपज की मात्रा",
    kilograms: "किलोग्राम",
    quality: "उपज की गुणवत्ता",
    saveCrop: "फसल विवरण सहेजें",
    financialInfo: "वित्तीय जानकारी",
    transactionHistory: "लेनदेन और बिक्री इतिहास",
    paymentDetails: "भुगतान विवरण",
    loanDetails: "ऋण आवेदन विवरण",
    creditRecords: "क्रेडिट संबंधी रिकॉर्ड",
    insuranceInfo: "बीमा संबंधी जानकारी",
    bankLinkage: "ग्रामीण बैंक खाता लिंकेज विवरण",
    customerInfo: "ग्राहक जानकारी",
    productPurchase: "उत्पाद खरीद विवरण",
    saveFinancial: "वित्तीय जानकारी सहेजें",
    languages: "भाषाएं",
    home: "होम",
    about: "के बारे में",
    howItWorks: "यह कैसे काम करता है",
    login: "लॉगिन",
    browse: "ब्राउज़ करें",
    dragHint: "दस्तावेज़ यहाँ खींचें या",
    fileSizeHint: "PDF, JPG 10MB तक"
  },
  kn: {
    hi: "ನಮಸ್ಕಾರ",
    subtitle: "ನಿಮ್ಮ ಬೆಳೆ ಮಾಹಿತಿ, ಹಣಕಾಸು ದಾಖಲೆಗಳು ಮತ್ತು ಪರಿಶೀಲನಾ ವಿವರಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
    notVerified: "ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ",
    verified: "ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    completeVerification: "ನಿಮ್ಮ ಪರಿಶೀಲನೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ",
    address: "ವಿಳಾಸ",
    aadhaar: "ಆಧಾರ್ ಅಥವಾ ಇತರ ಗುರುತಿನ ವಿವರಗಳು",
    bankDetails: "ಬ್ಯಾಂಕ್ ಖಾತೆ ಅಥವಾ ವಾಲೆಟ್ ವಿವರಗಳು",
    profileInfo: "ನೋಂದಣಿ ಸಮಯದಲ್ಲಿ ಒದಗಿಸಲಾದ ಪ್ರೊಫೈಲ್ ಮಾಹಿತಿ",
    kycDetails: "ಕೆವೈಸಿ ವಿವರಗಳು",
    kycHint: "ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಅನುಮತಿಸಿ: ಆಧಾರ್ ಕಾರ್ಡ್, ಪ್ಯಾನ್ ಕಾರ್ಡ್, ಮತದಾರರ ಗುರುತಿನ ಚೀಟಿ, ಪಾಸ್‌ಪೋರ್ಟ್",
    submitVerification: "ಪರಿಶೀಲನೆಯನ್ನು ಸಲ್ಲಿಸಿ",
    verificationSuccess: "ಪರಿಶೀಲನೆ ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡಿದೆ.",
    cropInfo: "ಬೆಳೆ ಮಾಹಿತಿ",
    cropType: "ಬೆಳೆ ವಿಧ",
    harvestDetails: "ಕೊಯ್ಲು ವಿವರಗಳು",
    quantity: "ಉತ್ಪನ್ನದ ಪ್ರಮಾಣ",
    kilograms: "ಕಿಲೋಗ್ರಾಂಗಳು",
    quality: "ಉತ್ಪನ್ನದ ಗುಣಮಟ್ಟ",
    saveCrop: "ಬೆಳೆ ವಿವರಗಳನ್ನು ಉಳಿಸಿ",
    financialInfo: "ಹಣಕಾಸು ಮಾಹಿತಿ",
    transactionHistory: "ವಹಿವಾಟು ಮತ್ತು ಮಾರಾಟದ ಇತಿಹಾಸ",
    paymentDetails: "ಪಾವತಿ ವಿವರಗಳು",
    loanDetails: "ಸಾಲದ ಅರ್ಜಿಯ ವಿವರಗಳು",
    creditRecords: "ಕ್ರೆಡಿಟ್ ಸಂಬಂಧಿತ ದಾಖಲೆಗಳು",
    insuranceInfo: "ವಿಮೆಗೆ ಸಂಬಂಧಿಸಿದ ಮಾಹಿತಿ",
    bankLinkage: "ಗ್ರಾಮೀಣ ಬ್ಯಾಂಕ್ ಖಾತೆ ಲಿಂಕ್ ವಿವರಗಳು",
    customerInfo: "ಗ್ರಾಹಕರ ಮಾಹಿತಿ",
    productPurchase: "ಉತ್ಪನ್ನ ಖರೀದಿ ವಿವರಗಳು",
    saveFinancial: "ಹಣಕಾಸು ಮಾಹಿತಿಯನ್ನು ಉಳಿಸಿ",
    languages: "ಭಾಷೆಗಳು",
    home: "ಮುಖಪುಟ",
    about: "ಬಗ್ಗೆ",
    howItWorks: "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
    login: "ಲಾಗಿನ್",
    browse: "ಬ್ರೌಸ್ ಮಾಡಿ",
    dragHint: "ದಾಖಲೆಗಳನ್ನು ಇಲ್ಲಿ ಎಳೆಯಿರಿ ಅಥವಾ",
    fileSizeHint: "PDF, JPG 10MB ವರೆಗೆ"
  },
  ta: {
    hi: "வணக்கம்",
    subtitle: "உங்கள் பயிர் தகவல், நிதி பதிவுகள் மற்றும் சரிபார்ப்பு விவரங்களை நிர்வகிக்கவும்.",
    notVerified: "சரிபார்க்கப்படவில்லை",
    verified: "சரிபார்க்கப்பட்டது",
    completeVerification: "உங்கள் சரிபார்ப்பை முடிக்கவும்",
    address: "முகவரி",
    aadhaar: "ஆதார் அல்லது பிற அடையாள விவரங்கள்",
    bankDetails: "வங்கி கணக்கு அல்லது வாலட் விவரங்கள்",
    profileInfo: "பதிவின் போது வழங்கப்பட்ட சுயவிவரத் தகவல்",
    kycDetails: "KYC விவரங்கள்",
    kycHint: "பதிவேற்ற அனுமதிக்கவும்: ஆதார் அட்டை, பான் அட்டை, வாக்காளர் அடையாள அட்டை, பாஸ்போர்ட்",
    submitVerification: "சரிபார்ப்பைச் சமர்ப்பிக்கவும்",
    verificationSuccess: "சரிபார்ப்பு வெற்றிகரமாக முடிந்தது.",
    cropInfo: "பயிர் தகவல்",
    cropType: "பயிர் வகை",
    harvestDetails: "அறுவடை விவரங்கள்",
    quantity: "உற்பத்தி அளவு",
    kilograms: "கிலோகிராம்",
    quality: "உற்பத்தி தரம்",
    saveCrop: "பயிர் விவரங்களைச் சேமிக்கவும்",
    financialInfo: "நிதி தகவல்",
    transactionHistory: "பரிவர்த்தனை மற்றும் விற்பனை வரலாறு",
    paymentDetails: "கட்டண விவரங்கள்",
    loanDetails: "கடன் விண்ணப்ப விவரங்கள்",
    creditRecords: "கடன் தொடர்பான பதிவுகள்",
    insuranceInfo: "காப்பீடு தொடர்பான தகவல்கள்",
    bankLinkage: "கிராமப்புற வங்கி கணக்கு இணைப்பு விவரங்கள்",
    customerInfo: "வாடிக்கையாளர் தகவல்",
    productPurchase: "தயாரிப்பு கொள்முதல் விவரங்கள்",
    saveFinancial: "நிதி தகவலைச் சேமிக்கவும்",
    languages: "மொழிகள்",
    home: "முகப்பு",
    about: "பற்றி",
    howItWorks: "இது எப்படி வேலை செய்கிறது",
    login: "உள்நுழைவு",
    browse: "உலாவவும்",
    dragHint: "ஆவணங்களை இங்கே இழுக்கவும் அல்லது",
    fileSizeHint: "PDF, JPG 10MB வரை"
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>("en");
  const [isVerified, setIsVerified] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [showFinancial, setShowFinancial] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [verificationSubmitted, setVerificationSubmitted] = useState(false);

  const t = translations[lang];
  const farmerName = "Ramesh"; // Mocked from registration info

  const handleVerificationSubmit = () => {
    setVerificationSubmitted(true);
    setIsVerified(true);
    setTimeout(() => {
      setShowVerification(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10">
        <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sprout className="text-primary w-6 h-6" />
            <span className="text-xl font-extrabold text-primary font-headline">Veridian Origin</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <NavLink icon={<Home className="w-4 h-4" />} label={t.home} />
            <NavLink icon={<Info className="w-4 h-4" />} label={t.about} />
            <NavLink icon={<Settings className="w-4 h-4" />} label={t.howItWorks} />
            <NavLink icon={<LogIn className="w-4 h-4" />} label={t.login} />
            
            <div className="relative">
              <button 
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high hover:bg-surface-container-highest transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-bold">{t.languages}</span>
                <ChevronDown className={cn("w-3 h-3 transition-transform", showLangMenu && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {showLangMenu && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-40 bg-surface-container-lowest rounded-2xl shadow-xl border border-outline-variant/10 overflow-hidden"
                  >
                    <LangOption label="English" onClick={() => { setLang("en"); setShowLangMenu(false); }} />
                    <LangOption label="हिंदी" onClick={() => { setLang("hi"); setShowLangMenu(false); }} />
                    <LangOption label="ಕನ್ನಡ" onClick={() => { setLang("kn"); setShowLangMenu(false); }} />
                    <LangOption label="தமிழ்" onClick={() => { setLang("ta"); setShowLangMenu(false); }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6 max-w-2xl mx-auto">
        {/* Page Header */}
        <header className="flex flex-col gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold tracking-tight">{t.hi}, {farmerName}</h1>
            <p className="text-on-surface-variant text-lg leading-relaxed">{t.subtitle}</p>
          </div>
          
          <div className="flex justify-start">
            <button 
              onClick={() => !isVerified && setShowVerification(!showVerification)}
              className={cn(
                "px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg transition-all active:scale-95",
                isVerified 
                  ? "bg-primary text-white shadow-primary/20 cursor-default" 
                  : "bg-error text-white shadow-error/20 hover:bg-error/90"
              )}
            >
              {isVerified ? t.verified : t.notVerified}
            </button>
          </div>

          {/* Verification Section (Expandable) */}
          <AnimatePresence>
            {showVerification && (
              <motion.section 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-surface-container-low rounded-3xl p-8 mt-4 space-y-8 border border-outline-variant/10 shadow-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-6 h-6" />
                    <h2 className="text-2xl font-bold font-headline">{t.completeVerification}</h2>
                  </div>

                  <div className="flex flex-col gap-6">
                    <InputField label={t.address} type="text" />
                    <InputField label={t.aadhaar} type="text" />
                    <InputField label={t.bankDetails} type="text" />
                    <InputField label={t.profileInfo} type="text" defaultValue="Ramesh, Farmer, Kolar" />
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">{t.kycDetails}</label>
                      <p className="text-xs text-on-surface-variant/60 px-1 mb-2">{t.kycHint}</p>
                      <div className="border-2 border-dashed border-outline-variant rounded-2xl p-8 text-center bg-surface-container-lowest flex flex-col items-center gap-2 group cursor-pointer hover:border-primary transition-colors">
                        <CloudUpload className="w-10 h-10 text-on-surface-variant group-hover:text-primary transition-colors" />
                        <p className="text-sm font-medium text-on-surface-variant">
                          {t.dragHint} <span className="text-primary underline">{t.browse}</span>
                        </p>
                        <p className="text-xs text-on-surface-variant/40">{t.fileSizeHint}</p>
                      </div>
                    </div>

                    <button 
                      onClick={handleVerificationSubmit}
                      className="w-full h-14 bg-primary text-white font-bold rounded-full text-sm uppercase tracking-widest shadow-lg shadow-primary/20 active:scale-95 transition-transform"
                    >
                      {t.submitVerification}
                    </button>

                    {verificationSubmitted && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-primary font-bold"
                      >
                        {t.verificationSuccess}
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </header>

        {/* Crop Information Section */}
        <section className="mb-8">
          <div className="bg-surface-container-low rounded-3xl p-8 space-y-8 border border-outline-variant/10 shadow-sm">
            <div className="flex items-center gap-3">
              <Sprout className="text-primary w-6 h-6" />
              <h2 className="text-2xl font-bold font-headline">{t.cropInfo}</h2>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">{t.cropType}</label>
                <select className="w-full h-14 px-5 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary text-on-surface font-medium appearance-none">
                  <option>Rice</option>
                  <option>Wheat</option>
                  <option>Tomato</option>
                  <option>Potato</option>
                  <option>Onion</option>
                  <option>Other</option>
                </select>
              </div>

              <InputField label={t.harvestDetails} type="date" />
              
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">{t.quantity}</label>
                <div className="relative">
                  <input 
                    className="w-full h-14 px-5 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary text-on-surface font-medium pr-24" 
                    placeholder="0.00" 
                    type="number" 
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                    {t.kilograms}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">{t.quality}</label>
                <select className="w-full h-14 px-5 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary text-on-surface font-medium appearance-none">
                  <option>Grade A</option>
                  <option>Grade B</option>
                  <option>Grade C</option>
                  <option>Organic</option>
                </select>
              </div>

              <button className="w-full h-14 bg-primary text-white font-bold rounded-full text-sm uppercase tracking-widest shadow-lg shadow-primary/20 active:scale-95 transition-transform">
                {t.saveCrop}
              </button>
            </div>
          </div>
        </section>

        {/* Financial Information Button & Section */}
        <section className="flex flex-col gap-4">
          <button 
            onClick={() => setShowFinancial(!showFinancial)}
            className="w-full h-14 bg-primary text-white font-bold rounded-full text-sm uppercase tracking-widest shadow-lg shadow-primary/20 active:scale-95 transition-transform flex items-center justify-center gap-2"
          >
            <Wallet className="w-5 h-5" />
            {t.financialInfo}
          </button>

          <AnimatePresence>
            {showFinancial && (
              <motion.section 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-surface-container-low rounded-3xl p-8 space-y-8 border border-outline-variant/10 shadow-sm">
                  <h2 className="text-2xl font-bold font-headline">{t.financialInfo}</h2>

                  <div className="flex flex-col gap-6">
                    <TextAreaField label={t.transactionHistory} placeholder="Recent grain sales..." />
                    <InputField label={t.paymentDetails} type="text" placeholder="UPI ID / Bank Wire" />
                    <TextAreaField label={t.loanDetails} placeholder="Micro-loan for seeds..." />
                    <TextAreaField label={t.creditRecords} placeholder="Stable credit score tracking..." />
                    <InputField label={t.insuranceInfo} type="text" placeholder="Policy #VF-2024-991" />
                    <InputField label={t.bankLinkage} type="text" placeholder="Enter rural bank account" />
                    <TextAreaField label={t.customerInfo} placeholder="Customer contact details..." />
                    <TextAreaField label={t.productPurchase} placeholder="Seed and fertilizer purchase history..." />

                    <button className="w-full h-14 bg-primary text-white font-bold rounded-full text-sm uppercase tracking-widest shadow-lg shadow-primary/20 active:scale-95 transition-transform">
                      {t.saveFinancial}
                    </button>
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-screen-xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="font-headline font-black text-primary">Veridian Origin</span>
            <span className="text-outline-variant mx-2">|</span>
            <p className="text-sm text-on-surface-variant">© 2024 Immutable Agricultural Trust.</p>
          </div>
          <div className="flex gap-8">
            <FooterLink label="Privacy Policy" />
            <FooterLink label="Terms of Service" />
            <FooterLink label="Blockchain Explorer" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ icon, label }: { icon: ReactNode, label: string }) {
  return (
    <a href="#" className="flex items-center gap-2 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">
      {icon}
      <span>{label}</span>
    </a>
  );
}

function LangOption({ label, onClick }: { label: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="w-full px-4 py-3 text-left text-sm font-medium hover:bg-surface-container-high transition-colors"
    >
      {label}
    </button>
  );
}

function InputField({ label, type, placeholder, defaultValue }: { label: string, type: string, placeholder?: string, defaultValue?: string }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="w-full h-14 px-5 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary text-on-surface font-medium"
      />
    </div>
  );
}

function TextAreaField({ label, placeholder }: { label: string, placeholder?: string }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">{label}</label>
      <textarea 
        placeholder={placeholder}
        className="w-full p-5 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary text-on-surface font-medium resize-none"
        rows={3}
      />
    </div>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">
      {label}
    </a>
  );
}

function Wallet({ className }: { className?: string }) {
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
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  );
}
