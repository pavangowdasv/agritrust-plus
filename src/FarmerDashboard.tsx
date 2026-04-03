import {
  Sprout,
  Globe,
  ChevronDown,
  CloudUpload,
  CheckCircle2,
  Home,
  Info,
  Settings,
  LogIn,
  X,
  Menu,
  LogOut
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, type ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Language = 'en' | 'hi' | 'kn' | 'ta';

const translations = {
  en: {
    hi: 'Hi',
    notVerified: 'Not Verified',
    verified: 'Verified',
    completeVerification: 'Complete Your Verification',
    address: 'Address',
    aadhaar: 'Aadhaar or Other Identity Details',
    bankDetails: 'Bank Account or Wallet Details',
    profileInfo: 'Profile Information Provided During Registration',
    kycDetails: 'KYC Details',
    kycHint: 'Upload Aadhaar card, PAN card, voter ID, or passport.',
    submitVerification: 'Submit Verification',
    verificationSuccess: 'Verification completed successfully.',
    cropInfo: 'Crop Information',
    cropType: 'Crop Type',
    harvestDetails: 'Harvest Details',
    quantity: 'Quantity of Produce',
    kilograms: 'Kilograms',
    quality: 'Quality of Produce',
    saveCrop: 'Save Crop Details',
    financialInfo: 'Financial Information',
    transactionHistory: 'Transaction and Sales History',
    paymentDetails: 'Payment Details',
    loanDetails: 'Loan Application Details',
    creditRecords: 'Credit-related Records',
    insuranceInfo: 'Insurance-related Information',
    bankLinkage: 'Rural Bank Account Linkage Details',
    customerInfo: 'Customer Information',
    productPurchase: 'Product Purchase Details',
    saveFinancial: 'Save Financial Information',
    languages: 'Languages',
    home: 'Home',
    about: 'About',
    howItWorks: 'How It Works',
    login: 'Logout',
    browse: 'browse',
    dragHint: 'Drag documents here or',
    fileSizeHint: 'PDF, JPG up to 10MB',
    aboutTitle: "About AgriTrust",
    aboutContext1: "AgriTrust is a secure, decentralized network revolutionizing the agricultural supply chain by eliminating unnecessary middlemen.",
    aboutContext2: "Powered by an immutable blockchain ledger, our platform directly connects verified farmers with institutional buyers, financial entities, and everyday consumers. We establish a verified, tamper-proof source of truth allowing farmers to lock in fair prices before harvests, track produce via IoT, and receive instant smart-contract settlements.",
    aboutFooter: "Focus on farming. We'll handle the trust.",
    howTitle: "How Our Traceability Works",
    how1Title: "1. Registration & Verification",
    how1Desc: "Farmers submit their KYC details directly on-device. Identity data is cryptographically hashed to ensure absolute data privacy and establishing a verified identity node.",
    how2Title: "2. Transparent Listing",
    how2Desc: "Input your crop types and capacities. These listings act as immutable digital twins that buyers can immediately bid on globally without a broker.",
    how3Title: "3. Automated Smart Contracts",
    how3Desc: "When harvest is shipped, transport tracking begins. Once the buyer scans the delivery QR code verifying quality, funds are released instantly from escrow straight into your Rural Bank Linkage.",
    cropPhoto: "Crop Real-Time Photo",
    cropPhotoHint: "Upload a real-time picture of your crop from the field."
  },
  hi: {
    hi: 'नमस्ते',
    notVerified: 'असत्यापित',
    verified: 'सत्यापित',
    completeVerification: 'अपना सत्यापन पूरा करें',
    address: 'पता',
    aadhaar: 'आधार या अन्य पहचान विवरण',
    bankDetails: 'बैंक खाते का विवरण',
    profileInfo: 'पंजीकरण के दौरान दी गई प्रोफ़ाइल जानकारी',
    kycDetails: 'केवाईसी विवरण',
    kycHint: 'आधार कार्ड, पैन कार्ड, वोटर आईडी या पासपोर्ट अपलोड करें।',
    submitVerification: 'सत्यापन सबमिट करें',
    verificationSuccess: 'सत्यापन सफलतापूर्वक पूर्ण हुआ।',
    cropInfo: 'फसल की जानकारी',
    cropType: 'फसल का प्रकार',
    harvestDetails: 'फसल कटाई का विवरण',
    quantity: 'उपज की मात्रा',
    kilograms: 'किलोग्राम',
    quality: 'उपज की गुणवत्ता',
    saveCrop: 'फसल विवरण सहेजें',
    financialInfo: 'वित्तीय जानकारी',
    transactionHistory: 'लेन-देन और बिक्री का इतिहास',
    paymentDetails: 'भुगतान विवरण',
    loanDetails: 'ऋण आवेदन विवरण',
    creditRecords: 'क्रेडिट-संबंधित रिकॉर्ड',
    insuranceInfo: 'बीमा-संबंधित जानकारी',
    bankLinkage: 'ग्रामीण बैंक खाता लिंकेज विवरण',
    customerInfo: 'ग्राहक जानकारी',
    productPurchase: 'उत्पाद खरीद विवरण',
    saveFinancial: 'वित्तीय जानकारी सहेजें',
    languages: 'भाषाएँ',
    home: 'होम',
    about: 'हमारे बारे में',
    howItWorks: 'यह कैसे काम करता है',
    login: 'लॉगआउट',
    browse: 'ब्राउज़ करें',
    dragHint: 'दस्तावेज़ यहाँ खींचें या',
    fileSizeHint: 'पीडीएफ, जेपीजी 10MB तक',
    aboutTitle: "एग्रीट्रस्ट के बारे में",
    aboutContext1: "एग्रीट्रस्ट एक सुरक्षित, विकेंद्रीकृत नेटवर्क है जो अनावश्यक बिचौलियों को खत्म करके कृषि आपूर्ति श्रृंखला में क्रांति ला रहा है।",
    aboutContext2: "अपरिवर्तनीय ब्लॉकचेन लेज़र द्वारा संचालित, हमारा प्लेटफ़ॉर्म सीधे किसानों को खरीदारों और वित्तीय संस्थाओं से जोड़ता है। यह सुनिश्चित करता है कि आपको उचित मूल्य और त्वरित स्मार्ट-अनुबंध भुगतान मिले।",
    aboutFooter: "खेती पर ध्यान दें। हम भरोसे का ध्यान रखेंगे।",
    howTitle: "हमारी ट्रेसबिलिटी कैसे काम करती है",
    how1Title: "1. पंजीकरण और सत्यापन",
    how1Desc: "किसान डिवाइस पर KYC जमा करते हैं। पहचान डेटा पूरी तरह से निजी है।",
    how2Title: "2. पारदर्शी लिस्टिंग",
    how2Desc: "अपनी फसल क्षमताओं को दर्ज करें। खरीदार सीधे विश्व स्तर पर बोली लगा सकते हैं।",
    how3Title: "3. पूर्ण स्वचालित भुगतान",
    how3Desc: "डिलीवरी सुनिश्चित होने पर, फंड सीधे आपके ग्रामीण बैंक खाते में भेजे जाते हैं।",
    cropPhoto: "फसल की रियल-टाइम फोटो",
    cropPhotoHint: "खेत से अपनी फसल की रियल-टाइम तस्वीर अपलोड करें।"
  },
  kn: {
    hi: 'ನಮಸ್ಕಾರ',
    notVerified: 'ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ',
    verified: 'ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
    completeVerification: 'ನಿಮ್ಮ ಪರಿಶೀಲನೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ',
    address: 'ವಿಳಾಸ',
    aadhaar: 'ಆಧಾರ್ ಅಥವಾ ಇತರ ಗುರುತಿನ ವಿವರಗಳು',
    bankDetails: 'ಬ್ಯಾಂಕ್ ಖಾತೆ ವಿವರಗಳು',
    profileInfo: 'ನೋಂದಣಿ ಸಮಯದಲ್ಲಿ ಒದಗಿಸಿದ ಪ್ರೊಫೈಲ್ ಮಾಹಿತಿ',
    kycDetails: 'ಕೆವೈಸಿ ವಿವರಗಳು',
    kycHint: 'ಆಧಾರ್ ಕಾರ್ಡ್, ಪ್ಯಾನ್ ಕಾರ್ಡ್, ವೋಟರ್ ಐಡಿ, ಅಥವಾ ಪಾಸ್‌ಪೋರ್ಟ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.',
    submitVerification: 'ಪರಿಶೀಲನೆ ಸಲ್ಲಿಸಿ',
    verificationSuccess: 'ಪರಿಶೀಲನೆ ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡಿದೆ.',
    cropInfo: 'ಬೆಳೆ ಮಾಹಿತಿ',
    cropType: 'ಬೆಳೆಯ ಪ್ರಕಾರ',
    harvestDetails: 'ಕೊಯ್ಲು ವಿವರಗಳು',
    quantity: 'ಉತ್ಪನ್ನದ ಪ್ರಮಾಣ',
    kilograms: 'ಕಿಲೋಗ್ರಾಂಗಳು',
    quality: 'ಉತ್ಪನ್ನದ ಗುಣಮಟ್ಟ',
    saveCrop: 'ಬೆಳೆ ವಿವರಗಳನ್ನು ಉಳಿಸಿ',
    financialInfo: 'ಹಣಕಾಸಿನ ಮಾಹಿತಿ',
    transactionHistory: 'ವಹಿವಾಟು ಮತ್ತು ಮಾರಾಟದ ಇತಿಹಾಸ',
    paymentDetails: 'ಪಾವತಿ ವಿವರಗಳು',
    loanDetails: 'ಸಾಲದ ಅರ್ಜಿ ವಿವರಗಳು',
    creditRecords: 'ಕ್ರೆಡಿಟ್-ಸಂಬಂಧಿತ ದಾಖಲೆಗಳು',
    insuranceInfo: 'ವಿಮೆ-ಸಂಬಂಧಿತ ಮಾಹಿತಿ',
    bankLinkage: 'ಗ್ರಾಮೀಣ ಬ್ಯಾಂಕ್ ಖಾತೆ ಲಿಂಕ್ ವಿವರಗಳು',
    customerInfo: 'ಗ್ರಾಹಕರ ಮಾಹಿತಿ',
    productPurchase: 'ಉತ್ಪನ್ನ ಖರೀದಿಯ ವಿವರಗಳು',
    saveFinancial: 'ಹಣಕಾಸು ಮಾಹಿತಿ ಉಳಿಸಿ',
    languages: 'ಭಾಷೆಗಳು',
    home: 'ಮುಖಪುಟ',
    about: 'ನಮ್ಮ ಬಗ್ಗೆ',
    howItWorks: 'ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ',
    login: 'ಲಾಗ್‌ಔಟ್',
    browse: 'ಬ್ರೌಸ್ ಮಾಡಿ',
    dragHint: 'ದಾಖಲೆಗಳನ್ನು ಇಲ್ಲಿ ಎಳೆಯಿರಿ ಅಥವಾ',
    fileSizeHint: 'ಪಿಡಿಎಫ್, ಜೆಪಿಜಿ 10 ಎಂಬಿ ವರೆಗೆ',
    aboutTitle: "ಅಗ್ರಿಟ್ರಸ್ಟ್ ಬಗ್ಗೆ",
    aboutContext1: "ಅಗ್ರಿಟ್ರಸ್ಟ್ ಅನಗತ್ಯ ಮಧ್ಯವರ್ತಿಗಳನ್ನು ತೆಗೆದುಹಾಕುವ ಮೂಲಕ ಕೃಷಿ ಪೂರೈಕೆ ಸರಪಳಿಯನ್ನು ಕ್ರಾಂತಿಗೊಳಿಸುವ ಸುರಕ್ಷಿತ, ವಿಕೇಂದ್ರೀಕೃತ ನೆಟ್‌ವರ್ಕ್ ಆಗಿದೆ.",
    aboutContext2: "ಬದಲಾಯಿಸಲಾಗದ ಬ್ಲಾಕ್‌ಚೈನ್ ತಂತ್ರಜ್ಞಾನದಿಂದ ನಮ್ಮ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ನೇರವಾಗಿ ರೈತರನ್ನು ಖರೀದಿದಾರರು ಮತ್ತು ಹಣಕಾಸು ಸಂಸ್ಥೆಗಳಿಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ. ಇದು ನಿಮಗೆ ನ್ಯಾಯಯುತ ಬೆಲೆ ಮತ್ತು ತ್ವರಿತ ಪಾವತಿಯನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    aboutFooter: "ಕೃಷಿಯ ಮೇಲೆ ಗಮನಹರಿಸಿ. ನಾವು ವಿಶ್ವಾಸವನ್ನು ನಿಭಾಯಿಸುತ್ತೇವೆ.",
    howTitle: "ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
    how1Title: "1. ನೋಂದಣಿ ಮತ್ತು ಪರಿಶೀಲನೆ",
    how1Desc: "ರೈತರು ತಮ್ಮ ಸಾಧನದಲ್ಲೇ KYC ಅಪ್ಲೋಡ್ ಮಾಡುತ್ತಾರೆ. ದತ್ತಾಂಶ ಸಂಪೂರ್ಣ ಖಾಸಗಿಯಾಗಿರುತ್ತದೆ.",
    how2Title: "2. ಪಾರದರ್ಶಕ ಪಟ್ಟಿ",
    how2Desc: "ನಿಮ್ಮ ಬೆಳೆ ಸಾಮರ್ಥ್ಯಗಳನ್ನು ದಾಖಲಿಸಿ. ಖರೀದಿದಾರರು ನೇರವಾಗಿ ಬಿಡ್ ಮಾಡಬಹುದು.",
    how3Title: "3. ಸ್ವಯಂಚಾಲಿತ ಪಾವತಿ",
    how3Desc: "ಡೆಲಿವರಿ ಖಚಿತಪಡಿಸಿದ ತಕ್ಷಣ, ಹಣ ನೇರವಾಗಿ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಬಿಡುಗಡೆ ಆಗುತ್ತದೆ.",
    cropPhoto: "ಬೆಳೆಯ ನೈಜ-ಸಮಯದ ಫೋಟೋ",
    cropPhotoHint: "ಹೊಲದಿಂದ ನಿಮ್ಮ ಬೆಳೆಯ ನೈಜ-ಸಮಯದ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ."
  },
  ta: {
    hi: 'வணக்கம்',
    notVerified: 'சரிபார்க்கப்படவில்லை',
    verified: 'சரிபார்க்கப்பட்டது',
    completeVerification: 'உங்கள் சரிபார்ப்பை முடிக்கவும்',
    address: 'முகவரி',
    aadhaar: 'ஆதார் அல்லது பிற அடையாள விவரங்கள்',
    bankDetails: 'வங்கி கணக்கு விவரங்கள்',
    profileInfo: 'பதிவு செய்யும் போது வழங்கப்பட்ட சுயவிவரத் தகவல்',
    kycDetails: 'கே.ஒய்.சி (KYC) விவரங்கள்',
    kycHint: 'ஆதார், பான் கார்டு, வாக்காளர் அடையாள அட்டை அல்லது பாஸ்போர்ட்டை பதிவேற்றவும்.',
    submitVerification: 'சமர்ப்பிக்கவும்',
    verificationSuccess: 'சரிபார்ப்பு வெற்றிகரமாக முடிந்தது.',
    cropInfo: 'பயிர் தகவல்',
    cropType: 'பயிர் வகை',
    harvestDetails: 'அறுவடை விவரங்கள்',
    quantity: 'உற்பத்தி அளவு',
    kilograms: 'கிலோகிராம்',
    quality: 'உற்பத்தியின் தரம்',
    saveCrop: 'பயிர் விவரங்களைச் சேமிக்க',
    financialInfo: 'நிதி தகவல்',
    transactionHistory: 'பரிவர்த்தனை மற்றும் விற்பனை வரலாறு',
    paymentDetails: 'பணம் செலுத்துதல் விவரங்கள்',
    loanDetails: 'கடன் விண்ணப்ப விவரங்கள்',
    creditRecords: 'கடன் தொடர்பான பதிவுகள்',
    insuranceInfo: 'காப்பீடு தொடர்பான தகவல்',
    bankLinkage: 'கிராமப்புற வங்கி கணக்கு இணைப்பு விவரங்கள்',
    customerInfo: 'வாடிக்கையாளர் தகவல்',
    productPurchase: 'தயாரிப்பு கொள்முதல் விவரங்கள்',
    saveFinancial: 'நிதி தகவலைச் சேமிக்க',
    languages: 'மொழிகள்',
    home: 'முகப்பு',
    about: 'எங்களை பற்றி',
    howItWorks: 'எப்படி வேலை செய்கிறது',
    login: 'வெளியேறு',
    browse: 'உலாவவும்',
    dragHint: 'ஆவணங்களை இங்கே இழுக்கவும் அல்லது',
    fileSizeHint: 'PDF, JPG 10MB வரை',
    aboutTitle: "அக்ரிட்ரஸ்ட் பற்றி",
    aboutContext1: "அக்ரிட்ரஸ்ட் என்பது பாதுகாப்பான மற்றும் பரவலாக்கப்பட்ட நெட்வொர்க் ஆகும், இது விவசாய விநியோக சங்கிலியை புரட்சிகரமாக்குகிறது.",
    aboutContext2: "மாற்ற முடியாத பிளாக்செயின் தொழில்நுட்பத்தால் இயங்கும் எங்கள் தளம், விவசாயிகளை நேரடியாக வாங்குபவர்களுடன் இணைக்கிறது. வெளிப்படையான விலை மற்றும் உடனடி ஸ்மார்ட் ஒப்பந்த பணம் செலுத்துதல்களை உறுதி செய்கிறோம்.",
    aboutFooter: "விவசாயத்தில் கவனம் செலுத்துங்கள். நம்பிக்கையை நாங்கள் பார்த்துக்கொள்கிறோம்.",
    howTitle: "எப்படி வேலை செய்கிறது",
    how1Title: "1. பதிவு மற்றும் சரிபார்ப்பு",
    how1Desc: "விவசாயிகள் சாதனத்திலேயே KYC ஐ சமர்ப்பிக்கின்றனர். தரவுகள் முற்றிலும் தனிப்பட்டவை.",
    how2Title: "2. வெளிப்படையான பட்டியல்",
    how2Desc: "உங்கள் பயிர் திறன்களை உள்ளிடவும்; வாங்குபவர்கள் தரகர்கள் இன்றி நேரடியாக ஏலம் எடுக்கலாம்.",
    how3Title: "3. தானியங்கி ஸ்மார்ட் ஒப்பந்தங்கள்",
    how3Desc: "விநியோக QR குறியீட்டை ஸ்கேன் செய்தவுடன், நிதி உடனடியாக உங்கள் கிராமப்புற வங்கி கணக்கில் டெபாசிட் செய்யப்படும்.",
    cropPhoto: "பயிர் நிகழ்நேர புகைப்படம்",
    cropPhotoHint: "களத்திலிருந்து உங்கள் பயிரின் நிகழ்நேர புகைப்படத்தைப் பதிவேற்றவும்."
  },
};

export default function FarmerDashboard({ onLogout }: { onLogout?: () => void }) {
  const [lang, setLang] = useState<Language>('en');
  const [isVerified, setIsVerified] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [showFinancial, setShowFinancial] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [verificationSubmitted, setVerificationSubmitted] = useState(false);
  const [cropSaved, setCropSaved] = useState(false);
  const [financialSaved, setFinancialSaved] = useState(false);
  const [bankAccount, setBankAccount] = useState('');
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showHowItWorksModal, setShowHowItWorksModal] = useState(false);

  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);

  const t = translations[lang];

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleVerificationSubmit = () => {
    setVerificationSubmitted(true);
    setIsVerified(true);
    showToast(t.verificationSuccess, 'success');
    setTimeout(() => setShowVerification(false), 2000);
  };

  const handleSaveCrop = () => {
    setCropSaved(true);
    showToast(`${t.cropInfo} Updated Successfully`, 'success');
    setTimeout(() => setCropSaved(false), 3000);
  };

  const handleSaveFinancial = () => {
    setFinancialSaved(true);
    showToast(`${t.financialInfo} Saved Securely`, 'success');
    setTimeout(() => setShowFinancial(false), 2000);
  };

  const userName = localStorage.getItem('agritrust_name') || 'Producer';

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10">
        <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sprout className="text-primary w-6 h-6" />
            <span className="text-xl font-extrabold text-primary font-headline">AgriTrust</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              <NavLink href="#home" icon={<Home className="w-4 h-4" />} label={t.home} />
              
              <div className="relative z-50">
                <NavLink href="#about" icon={<Info className="w-4 h-4" />} label={t.about} onClick={(e) => { e.preventDefault(); setShowHowItWorksModal(false); setShowAboutModal(!showAboutModal); }} />
                <AnimatePresence>
                  {showAboutModal && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-3 w-80 bg-[#1E2322]/95 backdrop-blur-2xl p-6 rounded-[1.5rem] shadow-2xl shadow-black/20 border border-white/10 cursor-default pointer-events-auto text-white">
                      <h3 className="font-headline font-black text-primary mb-3 text-xl">{t.aboutTitle || t.about}</h3>
                      <p className="text-sm text-gray-300 leading-relaxed mb-4">{t.aboutContext1}</p>
                      <p className="text-sm text-gray-300 leading-relaxed mb-4">{t.aboutContext2}</p>
                      <p className="text-sm font-bold text-primary">{t.aboutFooter}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative z-50">
                <NavLink href="#how-it-works" icon={<Settings className="w-4 h-4" />} label={t.howItWorks} onClick={(e) => { e.preventDefault(); setShowAboutModal(false); setShowHowItWorksModal(!showHowItWorksModal); }} />
                <AnimatePresence>
                  {showHowItWorksModal && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-3 w-[26rem] bg-[#1E2322]/95 backdrop-blur-2xl p-6 rounded-[1.5rem] shadow-2xl shadow-black/20 border border-white/10 cursor-default pointer-events-auto text-white">
                      <h3 className="font-headline font-black text-primary mb-5 text-xl">{t.howTitle || t.howItWorks}</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-sm text-gray-100">{t.how1Title}</h4>
                          <p className="text-xs text-gray-400 mt-1 leading-relaxed">{t.how1Desc}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-gray-100">{t.how2Title}</h4>
                          <p className="text-xs text-gray-400 mt-1 leading-relaxed">{t.how2Desc}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-gray-100">{t.how3Title}</h4>
                          <p className="text-xs text-gray-400 mt-1 leading-relaxed">{t.how3Desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink 
                href="#logout" 
                icon={<LogIn className="w-4 h-4" />} 
                label={t.login} 
                onClick={(e) => {
                  e.preventDefault();
                  if (onLogout) onLogout();
                }} 
              />
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="md:hidden p-2 rounded-full hover:bg-primary/10 text-on-surface transition-all active:scale-90"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {showLangMenu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-surface-container-low border-t border-outline-variant/10 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-2">
                <button onClick={() => { setLang('en'); setShowLangMenu(false); }} className="w-full text-left px-4 py-3 rounded-xl hover:bg-primary/5 font-bold">English</button>
                <button onClick={() => { setLang('hi'); setShowLangMenu(false); }} className="w-full text-left px-4 py-3 rounded-xl hover:bg-primary/5 font-bold">हिन्दी (Hindi)</button>
                <button onClick={() => { setLang('kn'); setShowLangMenu(false); }} className="w-full text-left px-4 py-3 rounded-xl hover:bg-primary/5 font-bold">ಕನ್ನಡ (Kannada)</button>
                <button onClick={() => { setLang('ta'); setShowLangMenu(false); }} className="w-full text-left px-4 py-3 rounded-xl hover:bg-primary/5 font-bold">தமிழ் (Tamil)</button>
                <div className="h-px bg-outline-variant/10 my-2" />
                <button 
                  onClick={() => { if (onLogout) onLogout(); }}
                  className="w-full text-left px-4 py-3 rounded-xl bg-red-500/10 text-red-500 flex items-center gap-3 font-bold"
                >
                  <LogOut className="w-5 h-5" />
                  {t.login}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-24 pb-20 px-6 max-w-2xl mx-auto">
        <header className="flex flex-col gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold tracking-tight">{t.hi}, {userName}</h1>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Continue your producer workflow with crop updates, verification, and financial records.
            </p>
          </div>

          <div className="flex justify-start">
            <button
              onClick={() => !isVerified && setShowVerification(!showVerification)}
              className={cn(
                'px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg transition-all active:scale-95 border border-transparent',
                isVerified 
                  ? 'bg-green-600 text-white shadow-green-600/30 cursor-default' 
                  : 'bg-red-500 text-white shadow-red-500/30 hover:bg-red-600 hover:shadow-red-600/40'
              )}
            >
              {isVerified ? t.verified : t.notVerified}
            </button>
          </div>

          <AnimatePresence>
            {showVerification && (
              <motion.section
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
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
                    <InputField label={t.profileInfo} type="text" defaultValue="Producer account details" />

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

                    <button onClick={handleVerificationSubmit} className="w-full h-14 bg-primary text-white font-bold rounded-full text-sm uppercase tracking-widest shadow-lg shadow-primary/20 active:scale-95 transition-transform">
                      {t.submitVerification}
                    </button>

                    {verificationSubmitted && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-primary font-bold">
                        {t.verificationSuccess}
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </header>

        <section className="mb-8">
          <div className="bg-surface-container-low rounded-3xl p-8 space-y-8 border border-outline-variant/10 shadow-sm">
            <div className="flex items-center gap-3">
              <Sprout className="text-primary w-6 h-6" />
              <h2 className="text-2xl font-bold font-headline">{t.cropInfo}</h2>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">{t.cropType}</label>
                <select className="w-full h-14 px-5 bg-black/5 dark:bg-white/5 border border-transparent rounded-xl hover:bg-black/10 dark:hover:bg-white/10 hover:border-gray-400/50 focus:bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-inner transition-all duration-200 text-on-surface font-medium appearance-none outline-none cursor-pointer">
                  <optgroup label="Cereals & Grains">
                    <option>Rice (Paddy)</option>
                    <option>Wheat</option>
                    <option>Maize (Corn)</option>
                    <option>Barley</option>
                    <option>Sorghum (Jowar)</option>
                    <option>Pearl Millet (Bajra)</option>
                    <option>Finger Millet (Ragi)</option>
                    <option>Oats</option>
                  </optgroup>
                  <optgroup label="Pulses & Legumes">
                    <option>Chickpeas (Chana)</option>
                    <option>Pigeon Peas (Toor Dal)</option>
                    <option>Green Gram (Moong)</option>
                    <option>Black Gram (Urad)</option>
                    <option>Lentils (Masoor)</option>
                    <option>Peas</option>
                    <option>Soybeans</option>
                  </optgroup>
                  <optgroup label="Fruits">
                    <option>Mango</option>
                    <option>Banana</option>
                    <option>Apple</option>
                    <option>Orange</option>
                    <option>Grapes</option>
                    <option>Papaya</option>
                    <option>Guava</option>
                    <option>Pineapple</option>
                    <option>Watermelon</option>
                    <option>Pomegranate</option>
                  </optgroup>
                  <optgroup label="Vegetables">
                    <option>Tomato</option>
                    <option>Potato</option>
                    <option>Onion</option>
                    <option>Cabbage</option>
                    <option>Cauliflower</option>
                    <option>Carrot</option>
                    <option>Spinach</option>
                    <option>Eggplant (Brinjal)</option>
                    <option>Bell Pepper (Capsicum)</option>
                    <option>Cucumber</option>
                    <option>Garlic</option>
                    <option>Ginger</option>
                  </optgroup>
                  <optgroup label="Nuts & Oilseeds">
                    <option>Groundnut (Peanut)</option>
                    <option>Cashew</option>
                    <option>Almond</option>
                    <option>Walnut</option>
                    <option>Sunflower Seed</option>
                    <option>Mustard Seed</option>
                    <option>Sesame</option>
                  </optgroup>
                  <optgroup label="Cash Crops & Spices">
                    <option>Sugarcane</option>
                    <option>Cotton</option>
                    <option>Jute</option>
                    <option>Tea</option>
                    <option>Coffee</option>
                    <option>Tobacco</option>
                    <option>Turmeric</option>
                    <option>Chilli</option>
                    <option>Cardamom</option>
                    <option>Black Pepper</option>
                  </optgroup>
                  <optgroup label="Others">
                    <option>Other / Custom</option>
                  </optgroup>
                </select>
              </div>

              <InputField label={t.harvestDetails} type="date" />

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">{t.quantity}</label>
                <div className="relative">
                  <input className="w-full h-14 px-5 bg-black/5 dark:bg-white/5 border border-transparent rounded-xl hover:bg-black/10 dark:hover:bg-white/10 hover:border-gray-400/50 focus:bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-inner transition-all duration-200 text-on-surface font-medium pr-24 outline-none" placeholder="0.00" type="number" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                    {t.kilograms}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">{t.quality}</label>
                <select className="w-full h-14 px-5 bg-black/5 dark:bg-white/5 border border-transparent rounded-xl hover:bg-black/10 dark:hover:bg-white/10 hover:border-gray-400/50 focus:bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-inner transition-all duration-200 text-on-surface font-medium appearance-none outline-none cursor-pointer">
                  <option>Grade A</option>
                  <option>Grade B</option>
                  <option>Grade C</option>
                  <option>Organic</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">{t.cropPhoto}</label>
                <div className="relative border-2 border-dashed border-outline-variant rounded-2xl p-6 text-center bg-surface-container-lowest flex flex-col items-center gap-2 group cursor-pointer hover:border-primary transition-colors overflow-hidden">
                  <CloudUpload className="w-10 h-10 text-on-surface-variant group-hover:text-primary transition-colors" />
                  <p className="text-sm font-medium text-on-surface-variant">
                    {t.dragHint} <span className="text-primary underline">{t.browse}</span>
                  </p>
                  <p className="text-xs text-on-surface-variant/40 mt-1">{t.cropPhotoHint}</p>
                  <input type="file" accept="image/*" capture="environment" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                </div>
              </div>

              <button 
                onClick={handleSaveCrop}
                className="w-full h-14 bg-primary text-white font-bold rounded-full text-sm uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-transform"
              >
                {cropSaved ? "Crop Details Saved!" : t.saveCrop}
              </button>
            </div>
          </div>
        </section>

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
                animate={{ height: 'auto', opacity: 1 }}
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
                    <InputField label={t.insuranceInfo} type="text" placeholder="Policy #VF-2026-991" />
                    <InputField 
                      label={t.bankLinkage} 
                      type="text" 
                      placeholder="12-digit account number" 
                      value={bankAccount}
                      onChange={(e) => {
                        const digits = e.target.value.replace(/\D/g, '').slice(0, 12);
                        setBankAccount(digits);
                      }}
                      pattern="[0-9]{12}"
                      maxLength={12}
                      inputMode="numeric"
                    />
                    <TextAreaField label={t.customerInfo} placeholder="Customer contact details..." />
                    <TextAreaField label={t.productPurchase} placeholder="Seed and fertilizer purchase history..." />

                    <button 
                      onClick={handleSaveFinancial}
                      className="w-full h-14 bg-primary text-white font-bold rounded-full text-sm uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-transform"
                    >
                      {financialSaved ? "Financial Records Saved!" : t.saveFinancial}
                    </button>
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </section>
      </main>

      <footer className="w-full py-12 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-screen-xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="font-headline font-black text-primary">AgriTrust</span>
            <span className="text-outline-variant mx-2">|</span>
            <p className="text-sm text-on-surface-variant">Copyright 2026 Immutable Agricultural Trust.</p>
          </div>
          <div className="flex gap-8">
            <FooterLink href="#privacy" label="Privacy Policy" />
            <FooterLink href="#terms" label="Terms of Service" />
            <FooterLink href="#explorer" label="Blockchain Explorer" />
          </div>
        </div>
      </footer>
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
    </div>
  );
}

function NavLink({ icon, label, href, onClick }: { icon: ReactNode; label: string; href: string; onClick?: React.MouseEventHandler<HTMLAnchorElement> }) {
  return (
    <a onClick={onClick} href={href} className="flex items-center gap-2 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1">
      {icon}
      <span>{label}</span>
    </a>
  );
}

function LangOption({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="w-full px-4 py-3 text-left text-sm font-medium hover:bg-surface-container-high transition-colors focus:outline-none focus:bg-surface-container-high">
      {label}
    </button>
  );
}

function InputField({ label, type, placeholder, defaultValue, value, onChange, maxLength, pattern, inputMode }: { label: string; type: string; placeholder?: string; defaultValue?: string; value?: string; onChange?: React.ChangeEventHandler<HTMLInputElement>; maxLength?: number; pattern?: string; inputMode?: "search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" }) {
  return (
    <div className="flex flex-col gap-1 group relative">
      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1 group-focus-within:text-primary transition-colors duration-200">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        pattern={pattern}
        inputMode={inputMode}
        className="w-full h-14 px-5 bg-black/5 dark:bg-white/5 border border-transparent rounded-xl hover:bg-black/10 dark:hover:bg-white/10 hover:border-gray-400/50 focus:bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-inner transition-all duration-200 text-on-surface font-medium outline-none"
      />
      {maxLength && value !== undefined && (
        <span className={`absolute right-4 top-1/2 translate-y-1 text-xs font-bold tabular-nums ${
          value.length === maxLength ? 'text-primary' : 'text-on-surface-variant/50'
        }`}>
          {value.length}/{maxLength}
        </span>
      )}
    </div>
  );
}

function TextAreaField({ label, placeholder }: { label: string; placeholder?: string }) {
  return (
    <div className="flex flex-col gap-1 group">
      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1 group-focus-within:text-primary transition-colors duration-200">{label}</label>
      <textarea
        placeholder={placeholder}
        className="w-full p-5 bg-black/5 dark:bg-white/5 border border-transparent rounded-xl hover:bg-black/10 dark:hover:bg-white/10 hover:border-gray-400/50 focus:bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-inner transition-all duration-200 text-on-surface font-medium resize-none outline-none"
        rows={3}
      />
    </div>
  );
}

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <a href={href} className="text-on-surface-variant hover:text-primary transition-colors text-sm focus:outline-none focus:underline">
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
