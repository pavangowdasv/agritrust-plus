export const languages = [
  { name: 'English', native: 'English' },
  { name: 'Hindi', native: 'हिंदी' },
  { name: 'Bengali', native: 'বাংলা' },
  { name: 'Telugu', native: 'తెలుగు' },
  { name: 'Marathi', native: 'मराठी' },
  { name: 'Tamil', native: 'தமிழ்' },
  { name: 'Urdu', native: 'اردو' },
  { name: 'Gujarati', native: 'ગુજરાતી' },
  { name: 'Kannada', native: 'ಕನ್ನಡ' },
  { name: 'Malayalam', native: 'മലയാളം' },
  { name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
  { name: 'Odia', native: 'ଓଡ଼ିଆ' },
];

export const translations: Record<string, any> = {
  English: {
    common: { logo: 'AGRITRUST' },
    partners: { agriBank: 'AGRI-BANK', ruralTrust: 'RURAL-TRUST', globalFin: 'GLOBAL-FIN', farmCredit: 'FARM-CREDIT' },
    nav: { home: 'Home', about: 'About', howItWorks: 'How It Works', login: 'Login', languages: 'Languages' },
    hero: {
      title: 'Trust from [ACCENT]',
      accent: 'Farm to Finance',
      subtitle: 'AgriTrust eliminates the middleman, ensuring fair compensation for farmers and absolute traceability for consumers through secure, decentralized technology.',
      cta: 'Get Started',
      alt: 'Lush farm field'
    },
    about: {
      title: 'Redefining Agricultural Commerce',
      p1: 'AgriTrust is a pioneering decentralized ecosystem designed to facilitate direct, transparent commerce between agricultural producers and global consumers.',
      p2: 'By integrating advanced blockchain protocols, we eliminate inefficient intermediaries, guarantee equitable pricing, and provide an immutable audit trail for every product.',
      points: ['Blockchain-Verified Integrity', 'Direct-to-Farmer Remittance', 'End-to-End Traceability', 'Institutional Banking Integration']
    },
    howItWorks: {
      title: 'The AgriTrust Ecosystem',
      subtitle: 'A seamless, secure journey from the field to the final consumer.',
      steps: [
        'Producers list verified inventory on the secure ledger.',
        'Consumers browse high-quality, traceable agricultural products.',
        'Direct peer-to-peer transactions are initiated without intermediaries.',
        'Blockchain protocols record and validate every transaction step.',
        'Automated, secure payments are remitted directly to the producer.',
        'Integrated financial institutions provide credit based on verified data.'
      ]
    },
    features: {
      items: [
        { title: 'Immutable Transparency', desc: 'Every transaction is permanently recorded on a secure, distributed ledger.' },
        { title: 'Direct Remittance', desc: 'Instant and secure fund transfers directly to the producer\'s digital wallet.' },
        { title: 'Granular Traceability', desc: 'Track the complete lifecycle of your produce from origin to destination.' },
        { title: 'Institutional Integration', desc: 'Seamless connection with financial services for credit and insurance.' },
        { title: 'Real-Time Auditability', desc: 'Live, verifiable updates on logistics, payments, and product status.' }
      ],
      cta: 'Ready to transform the future of agriculture?',
      joinNow: 'Join the Network'
    },
    search: {
      title: 'Find Fresh Produce',
      subtitle: 'Connecting you directly to the source.',
      placeholder: 'Search crops or farmers',
      filters: ['Location', 'Crop Type', 'Quality Grade'],
      no_results: 'No results found for your search. Please try different keywords.'
    },
    trust: {
      badge: 'Blockchain Verified',
      title: 'Built on a Foundation of Absolute Trust',
      stats: [
        { value: '100%', label: 'Traceability' },
        { value: '0%', label: 'Intermediary Fees' },
        { value: '24/7', label: 'Network Uptime' }
      ]
    },
    roles: {
      title: 'Select Your Profile',
      subtitle: 'Choose your role within the AgriTrust network to proceed.',
      farmer: { title: 'Producer', desc: 'List your harvest, connect with buyers, and receive secure, direct payments.' },
      consumer: { title: 'Consumer', desc: 'Access premium, traceable produce directly from the source with verified integrity.' },
      bank: { title: 'Financial Institution', desc: 'Provide credit and insurance services backed by immutable transaction data.' },
      continue: 'Proceed',
      back: 'Return Home'
    },
    chatbot: {
      title: 'AgriTrust Assistant',
      welcome: 'Welcome to AgriTrust. How may I assist you with our decentralized marketplace today?',
      placeholder: 'Enter your inquiry...',
      faqs: [
        'How do producers list their harvest?',
        'How do consumers purchase produce?',
        'How is blockchain transparency maintained?',
        'How are secure payments processed?',
        'How can I access credit facilities?',
        'How do I join the network?'
      ]
    },
    qr: {
      title: 'Verify Authenticity',
      desc: 'Utilize our blockchain-integrated scanner to validate the origin, quality, and supply chain journey of any produce instantaneously.',
      stop: 'Deactivate Scanner',
      button: 'Initialize Scanner',
      align: 'Position the QR code within the designated frame',
      cameraError: 'Camera permissions are required for blockchain verification.'
    },
    footer: {
      links: ['Privacy Policy', 'Terms and Conditions', 'Languages'],
      rights: '© 2026 AgriTrust+ — Transparent Farming Powered by Blockchain',
      privacy: {
        title: 'Privacy Policy',
        sections: [
          { title: 'Effective Date', content: 'This Privacy Policy is effective as of April 1, 2026.' },
          { title: 'Information We Collect', content: 'We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, and other information you choose to provide.' },
          { title: 'How We Use Your Information', content: 'We may use the information we collect about you to provide, maintain, and improve our services, including, for example, to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support to Users and Farmers, develop safety features, authenticate users, and send product updates and administrative messages.' },
          { title: 'Blockchain and Data Transparency', content: 'AgriTrust+ utilizes blockchain technology to ensure transparency and traceability of agricultural products. Transaction data, including product origin, quality certifications, and movement through the supply chain, is recorded on a public or consortium blockchain. This data is immutable and visible to participants to verify the authenticity of the products. Personal identifiable information (PII) is kept off-chain or encrypted to protect your privacy.' },
          { title: 'Sharing of Information', content: 'We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including as follows: With Farmers to enable them to provide the Services you request. For example, we share your name, photo (if you provide one), average User rating given by Farmers, and pickup and/or drop-off locations with Farmers.' },
          { title: 'Data Security', content: 'We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.' },
          { title: 'User Rights', content: 'You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us.' },
          { title: 'Cookies and Analytics', content: 'We use cookies and similar technologies to analyze trends, administer the website, track users’ movements around the website, and to gather demographic information about our user base as a whole.' },
          { title: 'Children’s Privacy', content: 'Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we take steps to remove such information and terminate the child’s account.' },
          { title: 'Third-Party Services', content: 'Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices or the content of those third-party services.' },
          { title: 'Updates to This Privacy Policy', content: 'We may change this Statement from time to time. If we make significant changes in the way we treat your personal information, or to the Statement, we will provide you notice through the Services or by some other means, such as email.' },
          { title: 'Contact Us', content: 'If you have any questions about this Privacy Statement, please contact us at privacy@agritrust.com.' },
          { title: 'Consent Statement', content: 'By using our services, you consent to the collection, use, and sharing of your information as described in this Privacy Policy.' }
        ]
      },
      terms: {
        title: 'Terms and Conditions',
        sections: [
          { title: 'Acceptance of Terms', content: 'By accessing and using the AgriTrust+ platform, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.' },
          { title: 'About the Platform', content: 'AgriTrust+ is a decentralized platform that connects farmers directly with consumers using blockchain technology to ensure transparency, traceability, and fair trade in the agricultural supply chain.' },
          { title: 'User Eligibility', content: 'You must be at least 18 years old to use this platform. By using the platform, you represent and warrant that you have the right, authority, and capacity to enter into this agreement and to abide by all of the terms and conditions of this agreement.' },
          { title: 'User Accounts', content: 'To access certain features of the platform, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account.' },
          { title: 'Farmer Responsibilities', content: 'Farmers are responsible for providing accurate and truthful information about their products, including origin, farming practices, and quality. Farmers must ensure that the products they list comply with all applicable agricultural and safety standards.' },
          { title: 'Consumer Responsibilities', content: 'Consumers are responsible for reviewing product information before making a purchase. Consumers must provide accurate delivery and payment information and comply with the platform\'s payment terms.' },
          { title: 'Payments and Transactions', content: 'All transactions on the AgriTrust+ platform are facilitated through secure payment gateways and recorded on the blockchain. Users agree to pay all charges incurred by users of their credit card, debit card, or other payment method used in connection with a purchase or transaction or other monetary transaction interaction with the platform at the prices in effect when such charges are incurred.' },
          { title: 'Product Information and Quality', content: 'While AgriTrust+ uses blockchain to verify the origin and journey of products, we do not guarantee the physical quality of the products. Any disputes regarding product quality should be resolved directly between the consumer and the farmer.' },
          { title: 'Data Privacy and Security', content: 'Your use of the platform is also governed by our Privacy Policy. We implement security measures to protect your data, but we cannot guarantee absolute security.' },
          { title: 'Prohibited Activities', content: 'Users may not use the platform for any unlawful purpose, to solicit others to perform or participate in any unlawful acts, to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances, or to infringe upon or violate our intellectual property rights or the intellectual property rights of others.' },
          { title: 'Service Availability', content: 'We strive to ensure the platform is available 24/7, but we do not guarantee uninterrupted access. The platform may be temporarily unavailable due to maintenance, updates, or technical issues.' },
          { title: 'Limitation of Liability', content: 'In no event shall AgriTrust+, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the platform.' },
          { title: 'Account Suspension or Termination', content: 'We reserve the right to suspend or terminate your account and access to the platform at our sole discretion, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users of the platform, us, or third parties, or for any other reason.' },
          { title: 'Changes to Terms and Conditions', content: 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.' },
          { title: 'Governing Law', content: 'These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which AgriTrust+ operates, without regard to its conflict of law provisions.' },
          { title: 'Contact and Support', content: 'If you have any questions about these Terms, please contact us at support@agritrust.com.' }
        ]
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Our global support team is here to assist you with any inquiries regarding the AgriTrust network.',
        form: {
          name: 'Full Name',
          email: 'Email Address',
          subject: 'Subject',
          message: 'Message',
          send: 'Send Inquiry',
          success: 'Your inquiry has been received. Our team will respond shortly.'
        }
      }
    },
    errors: {
      generic_ai: 'I\'m having trouble connecting to my brain right now. Please try again later.',
      camera_generic: 'Could not access camera. Please ensure you\'ve granted permission.'
    }
  },
  Hindi: {
    common: { logo: 'एग्रीट्रस्ट' },
    partners: { agriBank: 'एग्री-बैंक', ruralTrust: 'रूरल-ट्रस्ट', globalFin: 'ग्लोबल-फिन', farmCredit: 'फार्म-क्रेडिट' },
    nav: { home: 'होम', about: 'हमारे बारे में', howItWorks: 'यह कैसे काम करता है', login: 'लॉगिन', languages: 'भाषाएं' },
    hero: {
      title: '[ACCENT] से जुड़ा अटूट विश्वास',
      accent: 'खेत से फाइनेंस',
      subtitle: 'किसानों को उचित कीमतों के साथ सशक्त बनाना और उपभोक्ताओं को पूर्ण पारदर्शिता और विश्वास के साथ सीधे ताजा उपज खरीदने में सक्षम बनाना।',
      cta: 'शुरू करें',
      alt: 'लहलहाता खेत'
    },
    about: {
      title: 'हमारे प्लेटफॉर्म के बारे में',
      p1: 'हम ब्लॉकचेन तकनीक द्वारा संचालित एक पारदर्शी कृषि बाजार बना रहे हैं जो किसानों को एक सुरक्षित पारिस्थितिकी तंत्र में सीधे उपभोक्ताओं से जोड़ता है।',
      p2: 'हमारा प्लेटफॉर्म बिचौलियों को हटाता है, उचित मूल्य निर्धारण सुनिश्चित करता है, सुरक्षित डिजिटल भुगतान सक्षम करता है, और ग्राहकों को उत्पाद की प्रामाणिकता को सत्यापित करने और आपूर्ति श्रृंखला पर भरोसा करने की अनुमति देता है।',
      points: ['ब्लॉकचेन पारदर्शिता', 'किसानों को सीधा भुगतान', 'उत्पाद की पता लगाने की क्षमता', 'सुरक्षित बैंकिंग एकीकरण']
    },
    howItWorks: {
      title: 'यह कैसे काम करता है',
      subtitle: 'खेत से अंतिम उपभोक्ता तक एक निर्बाध, सुरक्षित यात्रा।',
      steps: [
        'किसान प्लेटफॉर्म पर फसलों को सूचीबद्ध करता है।',
        'उपभोक्ता उपलब्ध फसलों को ब्राउज़ करता है।',
        'उपभोक्ता सीधे किसान से ऑर्डर देता है।',
        'ब्लॉकचेन लेनदेन को सुरक्षित रूप से रिकॉर्ड करता है।',
        'भुगतान सीधे किसान को हस्तांतरित किया जाता है।',
        'बैंक सत्यापित लेनदेन के आधार पर ऋण और वित्तीय सहायता प्रदान करता है।'
      ]
    },
    features: {
      items: [
        { title: 'ब्लॉकचेन पारदर्शिता', desc: 'प्रत्येक लेनदेन एक सुरक्षित, अपरिवर्तनीय बहीखाते पर दर्ज किया जाता है।' },
        { title: 'किसानों को सीधा भुगतान', desc: 'सीधे किसान के वॉलेट में त्वरित और सुरक्षित फंड ट्रांसफर।' },
        { title: 'उत्पाद की पता लगाने की क्षमता', desc: 'खेत से अपनी मेज तक अपनी उपज की यात्रा को ट्रैक करें।' },
        { title: 'सुरक्षित बैंकिंग एकीकरण', desc: 'ऋण और क्रेडिट सहायता के लिए एकीकृत वित्तीय सेवाएं।' },
        { title: 'वास्तविक समय लेनदेन निगरानी', desc: 'ऑर्डर, भुगतान और रसद पर लाइव अपडेट।' }
      ],
      cta: 'कृषि को बदलने के लिए तैयार हैं?',
      joinNow: 'अभी जुड़ें'
    },
    search: {
      title: 'ताजा उपज खोजें',
      subtitle: 'आपको सीधे स्रोत से जोड़ना।',
      placeholder: 'फसलें या किसान खोजें',
      filters: ['स्थान', 'फसल का प्रकार', 'गुणवत्ता ग्रेड']
    },
    trust: {
      badge: 'ब्लॉकचेन सुरक्षित',
      title: 'विश्वसनीय और सुरक्षित प्लेटफॉर्म',
      stats: [
        { value: '10,000+', label: 'लेनदेन' },
        { value: '5,000+', label: 'किसान' },
        { value: '100+', label: 'उपभोक्ता' }
      ]
    },
    roles: {
      title: 'आप कौन हैं?',
      subtitle: 'प्लेटफॉर्म पर जारी रखने के लिए अपनी भूमिका चुनें',
      farmer: { title: 'किसान', desc: 'फसलें सीधे उपभोक्ताओं को बेचें और सुरक्षित भुगतान प्राप्त करें।' },
      consumer: { title: 'उपभोक्ता', desc: 'किसानों से सीधे ताजा फसलें खरीदें और उत्पाद विवरण सत्यापित करें।' },
      bank: { title: 'बैंक', desc: 'सत्यापित लेनदेन के आधार पर किसानों को ऋण और वित्तीय सहायता प्रदान करें।' },
      continue: 'जारी रखें',
      back: 'होम पर वापस'
    },
    chatbot: {
      title: 'सहायता सहायक',
      welcome: 'नमस्ते! मैं आज आपकी कैसे मदद कर सकता हूँ?',
      placeholder: 'एक संदेश टाइप करें...',
      faqs: [
        'किसान फसलें कैसे बेचते हैं?',
        'उपभोक्ता फसलें कैसे खरीद सकते हैं?',
        'ब्लॉकचेन पारदर्शिता कैसे सुनिश्चित करता है?',
        'भुगतान कैसे काम करता है?',
        'मैं ऋण के लिए कैसे आवेदन कर सकता हूँ?',
        'मैं पंजीकरण कैसे करूं?'
      ]
    },
    qr: {
      title: 'स्कैन करें और सत्यापित करें',
      desc: 'किसी भी उपज की उत्पत्ति, गुणवत्ता और यात्रा को सेकंडों में सत्यापित करने के लिए हमारे ब्लॉकचेन-संचालित स्कैनर का उपयोग करें।',
      stop: 'स्कैनर रोकें',
      button: 'स्कैनर शुरू करें',
      align: 'फ्रेम के भीतर क्यूआर कोड संरेखित करें',
      cameraError: 'क्यूआर डेमो के लिए कैमरा एक्सेस आवश्यक है।',
      alt: 'फसल स्कैनिंग'
    },
    footer: {
      links: ['गोपनीयता नीति', 'सेवा की शर्तें', 'संपर्क करें'],
      rights: '© 2026 एग्रीट्रस्ट। सर्वाधिकार सुरक्षित।',
      privacy: {
        title: 'गोपनीयता नीति',
        content: 'एग्रीट्रस्ट में, हम अपने उपयोगकर्ताओं की सुरक्षा और गोपनीयता को प्राथमिकता देते हैं। यह नीति बताती है कि हम आपके डेटा को अपने विकेंद्रीकृत पारिस्थितिकी तंत्र में कैसे संभालते हैं। हम मुख्य रूप से पहचान सत्यापन और सुरक्षित लेनदेन के लिए न्यूनतम व्यक्तिगत जानकारी एकत्र करते हैं। आपका लेनदेन डेटा एक सुरक्षित, वितरित बहीखाते पर दर्ज किया जाता है, जो संवेदनशील विवरणों की रक्षा करते हुए पारदर्शिता सुनिश्चित करता है। हम आपका डेटा तीसरे पक्ष को नहीं बेचते हैं। एग्रीट्रस्ट का उपयोग करके, आप किसानों को सशक्त बनाने और उपभोक्ताओं की रक्षा के लिए डिज़ाइन की गई हमारी डेटा प्रथाओं के लिए सहमति देते हैं।'
      },
      terms: {
        title: 'सेवा की शर्तें',
        content: 'एग्रीट्रस्ट प्लेटफॉर्म का उपयोग करके, आप हमारी शर्तों का पालन करने के लिए सहमत होते हैं। एग्रीट्रस्ट कृषि उत्पादों के लिए एक विकेंद्रीकृत बाज़ार प्रदान करता है। उपयोगकर्ता अपनी लिस्टिंग की सटीकता और अपने लेनदेन की अखंडता के लिए जिम्मेदार हैं। जबकि हम सुरक्षित बुनियादी ढांचा और ब्लॉकचेन सत्यापन प्रदान करते हैं, उपयोगकर्ताओं को स्थानीय कृषि और वित्तीय नियमों का पालन करना चाहिए। एग्रीट्रस्ट पक्षों के बीच विवादों के लिए उत्तरदायी नहीं है लेकिन समाधान की सुविधा के लिए एक पारदर्शी ऑडिट ट्रेल प्रदान करता है।'
      },
      contact: {
        title: 'संपर्क करें',
        subtitle: 'हमारी वैश्विक सहायता टीम एग्रीट्रस्ट नेटवर्क के संबंध में किसी भी पूछताछ में आपकी सहायता के लिए यहां है।',
        form: {
          name: 'पूरा नाम',
          email: 'ईमेल पता',
          subject: 'विषय',
          message: 'संदेश',
          send: 'पूछताछ भेजें',
          success: 'आपकी पूछताछ प्राप्त हो गई है। हमारी टीम जल्द ही जवाब देगी।'
        }
      }
    },
    errors: {
      generic_ai: 'मुझे अभी कनेक्ट करने में समस्या हो रही है। कृपया बाद में पुनः प्रयास करें।',
      camera_generic: 'कैमरा एक्सेस नहीं किया जा सका। कृपया सुनिश्चित करें कि आपने अनुमति दी है।'
    }
  },
  Bengali: {
    common: { logo: 'এগ্রিট্রাস্ট' },
    partners: { agriBank: 'এগ্রি-ব্যাংক', ruralTrust: 'রুরাল-ট্রাস্ট', globalFin: 'ग्लोबल-ফিন', farmCredit: 'ফার্ম-ক্রেডিট' },
    nav: { home: 'হোম', about: 'আমাদের সম্পর্কে', howItWorks: 'এটি কীভাবে কাজ করে', login: 'লগইন', languages: 'ভাষা' },
    hero: {
      title: '[ACCENT] থেকে অটুট বিশ্বাস',
      accent: 'খামার থেকে ফাইন্যান্স',
      subtitle: 'কৃষকদের ন্যায্য মূল্যের মাধ্যমে ক্ষমতায়ন এবং ভোক্তাদের পূর্ণ স্বচ্ছতা ও বিশ্বাসের সাথে সরাসরি তাজা পণ্য কেনার সুযোগ করে দেওয়া।',
      cta: 'শুরু করুন',
      alt: 'সবুজ খামার'
    },
    about: {
      title: 'আমাদের প্ল্যাটফর্ম সম্পর্কে',
      p1: 'আমরা ব্লকচেইন প্রযুক্তির মাধ্যমে একটি স্বচ্ছ কৃষি বাজার তৈরি করছি যা কৃষকদের সরাসরি একটি নিরাপদ ইকোসিস্টেমে ভোক্তাদের সাথে সংযুক্ত করে।',
      p2: 'আমাদের প্ল্যাটফর্ম মধ্যস্বত্বভোগীদের সরিয়ে দেয়, ন্যায্য মূল্য নিশ্চিত করে, নিরাপদ ডিজিটাল পেমেন্ট সক্ষম করে এবং গ্রাহকদের পণ্যের সত্যতা যাচাই করতে সাহায্য করে।',
      points: ['ব্লকচেইন স্বচ্ছতা', 'কৃষকদের সরাসরি পেমেন্ট', 'পণ্যের সন্ধানযোগ্যতা', 'নিরাপদ ব্যাংকিং ইন্টিগ্রেশন']
    },
    howItWorks: {
      title: 'এটি কীভাবে কাজ করে',
      subtitle: 'মাঠ থেকে শেষ ভোক্তা পর্যন্ত একটি নিরবচ্ছিন্ন, নিরাপদ যাত্রা।',
      steps: [
        'কৃষক প্ল্যাটফর্মে ফসলের তালিকা করেন।',
        'ভোক্তা উপলব্ধ ফসল দেখেন।',
        'ভোক্তা সরাসরি কৃষকের কাছ থেকে অর্ডার দেন।',
        'ব্লকচেইন লেনদেনটি নিরাপদে রেকর্ড করে।',
        'পেমেন্ট সরাসরি কৃষকের কাছে স্থানান্তরিত হয়।',
        'ব্যাংক যাচাইকৃত লেনদেনের ভিত্তিতে ঋণ ও আর্থিক সহায়তা প্রদান করে।'
      ]
    },
    features: {
      items: [
        { title: 'ব্লকচেইন স্বচ্ছতা', desc: 'প্রতিটি লেনদেন একটি নিরাপদ, অপরিবর্তনীয় লেজারে রেকর্ড করা হয়।' },
        { title: 'কৃষকদের সরাসরি পেমেন্ট', desc: 'সরাসরি কৃষকের ওয়ালেটে তাৎক্ষণিক এবং নিরাপদ তহবিল স্থানান্তর।' },
        { title: 'পণ্যের সন্ধানযোগ্যতা', desc: 'মাঠ থেকে আপনার টেবিল পর্যন্ত আপনার পণ্যের যাত্রা ট্র্যাক করুন।' },
        { title: 'নিরাপদ ব্যাংকিং ইন্টিগ্রেশন', desc: 'ঋণ এবং ক্রেডিট সহায়তার জন্য সমন্বিত আর্থিক পরিষেবা।' },
        { title: 'রিয়েল-টাইম লেনদেন পর্যবেক্ষণ', desc: 'অর্ডার, পেমেন্ট এবং লজিস্টিকসের লাইভ আপডেট।' }
      ],
      cta: 'কৃষিকে রূপান্তর করতে প্রস্তুত?',
      joinNow: 'এখনই যোগ দিন'
    },
    search: {
      title: 'তাজা পণ্য খুঁজুন',
      subtitle: 'আপনাকে সরাসরি উৎসের সাথে সংযুক্ত করা হচ্ছে।',
      placeholder: 'ফসলের নাম বা কৃষক খুঁজুন',
      filters: ['অবস্থান', 'ফসলের ধরন', 'গুণমান গ্রেড']
    },
    trust: {
      badge: 'ব্লকচেইন সুরক্ষিত',
      title: 'বিশ্বস্ত এবং নিরাপদ প্ল্যাটফর্ম',
      stats: [
        { value: '১০,০০০+', label: 'লেনদেন' },
        { value: '৫,০০০+', label: 'কৃষক' },
        { value: '১০০+', label: 'ভোক্তা' }
      ]
    },
    roles: {
      title: 'আপনি কে?',
      subtitle: 'প্ল্যাটফর্মে চালিয়ে যেতে আপনার ভূমিকা নির্বাচন করুন',
      farmer: { title: 'কৃষক', desc: 'সরাসরি ভোক্তাদের কাছে ফসল বিক্রি করুন এবং নিরাপদ পেমেন্ট গ্রহণ করুন।' },
      consumer: { title: 'ভোক্তা', desc: 'সরাসরি কৃষকদের কাছ থেকে তাজা ফসল কিনুন এবং পণ্যের বিবরণ যাচাই করুন।' },
      bank: { title: 'ব্যাংক', desc: 'যাচাইকৃত লেনদেনের ভিত্তিতে কৃষকদের ঋণ এবং আর্থিক সহায়তা প্রদান করুন।' },
      continue: 'চালিয়ে যান',
      back: 'হোমে ফিরে যান'
    },
    chatbot: {
      title: 'সহায়তা সহকারী',
      welcome: 'হ্যালো! আমি আজ আপনাকে কীভাবে সাহায্য করতে পারি?',
      placeholder: 'একটি বার্তা লিখুন...',
      faqs: [
        'কৃষকরা কীভাবে ফসল বিক্রি করেন?',
        'ভোক্তারা কীভাবে ফসল কিনতে পারেন?',
        'ব্লকচেইন কীভাবে স্বচ্ছতা নিশ্চিত করে?',
        'পেমেন্ট কীভাবে কাজ করে?',
        'আমি কীভাবে ঋণের জন্য আবেদন করতে পারি?',
        'আমি কীভাবে নিবন্ধন করব?'
      ]
    },
    qr: {
      title: 'স্ক্যান এবং যাচাই করুন',
      desc: 'যেকোনো পণ্যের উৎস, গুণমান এবং যাত্রা সেকেন্ডের মধ্যে যাচাই করতে আমাদের ব্লকচেইন-চালিত স্ক্যানার ব্যবহার করুন।',
      stop: 'স্ক্যানার বন্ধ করুন',
      button: 'স্ক্যানার শুরু করুন',
      align: 'ফ্রেমের মধ্যে QR কোডটি রাখুন',
      cameraError: 'কিউআর ডেমোর জন্য ক্যামেরা অ্যাক্সেস প্রয়োজন।',
      alt: 'ফসল স্ক্যানিং'
    },
    footer: {
      links: ['গোপনীয়তা নীতি', 'পরিষেবার শর্তাবলী', 'আমাদের সাথে যোগাযোগ করুন'],
      rights: '© ২০২৬ এগ্রিট্রাস্ট। সমস্ত অধিকার সংরক্ষিত।'
    },
    errors: {
      generic_ai: 'সংযোগ করতে সমস্যা হচ্ছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।',
      camera_generic: 'ক্যামেরা অ্যাক্সেস করা যায়নি। অনুগ্রহ করে নিশ্চিত করুন যে আপনি অনুমতি দিয়েছেন।'
    }
  },
  Telugu: {
    common: { logo: 'అగ్రిట్రస్ట్' },
    partners: { agriBank: 'అగ్రి-బ్యాంక్', ruralTrust: 'రూరల్-ట్రస్ట్', globalFin: 'గ్లోబల్-ఫిన్', farmCredit: 'ఫామ్-క్రెడిట్' },
    nav: { home: 'హోమ్', about: 'మా గురించి', howItWorks: 'ఇది ఎలా పనిచేస్తుంది', login: 'లాగిన్', languages: 'భాషలు' },
    hero: {
      title: '[ACCENT] వరకు నమ్మకం',
      accent: 'పొలం నుండి ఫైనాన్స్',
      subtitle: 'రైతులకు సరైన ధరలతో సాధికారత కల్పించడం మరియు వినియోగదారులు పూర్తి పారదర్శకతతో నేరుగా తాజా ఉత్పత్తులను కొనుగోలు చేసేలా చేయడం.',
      cta: 'ప్రారంభించండి',
      alt: 'పచ్చని పొలం'
    },
    about: {
      title: 'మా ప్లాట్‌ఫారమ్ గురించి',
      p1: 'మేము బ్లాక్‌చైన్ సాంకేతికతతో పనిచేసే పారదర్శక వ్యవసాయ మార్కెట్‌ను నిర్మిస్తున్నాము, ఇది రైతులను నేరుగా వినియోగదారులతో కలుపుతుంది.',
      p2: 'మా ప్లాట్‌ఫారమ్ మధ్యవర్తులను తొలగిస్తుంది, సరైన ధరను నిర్ధారిస్తుంది, సురక్షితమైన డిజిటల్ చెల్లింపులను అనుమతిస్తుంది మరియు వినియోగదారులు ఉత్పత్తుల నాణ్యతను ధృవీకరించడానికి అనుమతిస్తుంది.',
      points: ['బ్లాక్‌చైన్ పారదర్శకత', 'రైతులకు ప్రత్యక్ష చెల్లింపులు', 'ఉత్పత్తి ట్రేసిబిలిటీ', 'సురక్షిత బ్యాంకింగ్ ఇంటిగ్రేషన్']
    },
    howItWorks: {
      title: 'ఇది ఎలా పనిచేస్తుంది',
      subtitle: 'పొలం నుండి తుది వినియోగదారు వరకు అతుకులు లేని, సురక్షితమైన ప్రయాణం.',
      steps: [
        'రైతు పంట వివరాలను ప్లాట్‌ఫారమ్‌లో ఉంచుతారు.',
        'వినియోగదారు అందుబాటులో ఉన్న పంటలను చూస్తారు.',
        'వినియోగదారు నేరుగా రైతు వద్ద ఆర్డర్ చేస్తారు.',
        'బ్లాక్‌చైన్ లావాదేవీని సురక్షితంగా నమోదు చేస్తుంది.',
        'చెల్లింపు నేరుగా రైతుకు బదిలీ చేయబడుతుంది.',
        'ధృవీకరించబడిన లావాదేవీల ఆధారంగా బ్యాంక్ రుణాలు మరియు ఆర్థిక సహాయం అందిస్తుంది.'
      ]
    },
    features: {
      items: [
        { title: 'బ్లాక్‌చైన్ పారదర్శకత', desc: 'ప్రతి లావాదేవీ సురక్షితమైన, మార్చలేని లెడ్జర్‌లో నమోదు చేయబడుతుంది.' },
        { title: 'రైతులకు ప్రత్యక్ష చెల్లింపులు', desc: 'రైతు వాలెట్‌కు తక్షణ మరియు సురక్షిత నిధుల బదిలీ.' },
        { title: 'ఉత్పత్తి ట్రేసిబిలిటీ', desc: 'పొలం నుండి మీ టేబుల్ వరకు ప్రయాణాన్ని ట్రాక్ చేయండి.' },
        { title: 'సురక్షిత బ్యాంకింగ్ ఇంటిగ్రేషన్', desc: 'రుణాలు మరియు క్రెడిట్ మద్దతు కోసం ఆర్థిక సేవలు.' },
        { title: 'రియల్-టైమ్ మానిటరింగ్', desc: 'ఆర్డర్లు మరియు చెల్లింపులపై ప్రత్యక్ష అప్‌డేట్లు.' }
      ],
      cta: 'వ్యవసాయాన్ని మార్చడానికి సిద్ధంగా ఉన్నారా?',
      joinNow: 'ఇప్పుడే చేరండి'
    },
    search: {
      title: 'తాజా ఉత్పత్తులను కనుగొనండి',
      subtitle: 'మిమ్మల్ని నేరుగా మూలంతో కలుపుతోంది.',
      placeholder: 'పంటలు లేదా రైతుల కోసం వెతకండి',
      filters: ['ప్రాంతం', 'పంట రకం', 'నాణ్యత గ్రేడ్']
    },
    trust: {
      badge: 'బ్లాక్‌చైన్ సురక్షితం',
      title: 'నమ్మకమైన మరియు సురక్షితమైన ప్లాట్‌ఫారమ్',
      stats: [
        { value: '10,000+', label: 'లావాదేవీలు' },
        { value: '5,000+', label: 'రైతులు' },
        { value: '100+', label: 'వినియోగదారులు' }
      ]
    },
    roles: {
      title: 'మీరు ఎవరు?',
      subtitle: 'ప్లాట్‌ఫారమ్‌ను కొనసాగించడానికి మీ పాత్రను ఎంచుకోండి',
      farmer: { title: 'రైతు', desc: 'పంటలను నేరుగా వినియోగదారులకు అమ్మండి మరియు సురక్షితమైన చెల్లింపులను పొందండి.' },
      consumer: { title: 'వినియోగదారు', desc: 'రైతుల నుండి నేరుగా తాజా పంటలను కొనుగోలు చేయండి మరియు వివరాలను ధృవీకరించండి.' },
      bank: { title: 'బ్యాంక్', desc: 'ధృవీకరించబడిన లావాదేవీల ఆధారంగా రైతులకు రుణాలు మరియు ఆర్థిక సహాయం అందించండి.' },
      continue: 'కొనసాగించండి',
      back: 'హోమ్‌కు తిరిగి వెళ్ళు'
    },
    chatbot: {
      title: 'సహాయక అసిస్టెంట్',
      welcome: 'నమస్కారం! నేను మీకు ఎలా సహాయపడగలను?',
      placeholder: 'సందేశాన్ని టైప్ చేయండి...',
      faqs: [
        'రైతులు పంటలను ఎలా అమ్ముతారు?',
        'వినియోగదారులు పంటలను ఎలా కొంటారు?',
        'బ్లాక్‌చైన్ పారదర్శకతను ఎలా నిర్ధారిస్తుంది?',
        'చెల్లింపులు ఎలా జరుగుతాయి?',
        'నేను రుణం కోసం ఎలా దరఖాస్తు చేయాలి?',
        'నేను ఎలా నమోదు చేసుకోవాలి?'
      ]
    },
    qr: {
      title: 'స్కాన్ & వెరిఫై',
      desc: 'ఏదైనా ఉత్పత్తి యొక్క మూలం, నాణ్యత మరియు ప్రయాణాన్ని సెకన్లలో ధృవీకరించడానికి మా బ్లాక్‌చైన్ ఆధారిత స్కానర్‌ను ఉపయోగించండి.',
      stop: 'స్కాన్నర్‌ను ఆపు',
      button: 'స్కాన్నర్‌ను ప్రారంభించు',
      align: 'ఫ్రేమ్‌లో QR కోడ్‌ను ఉంచండి',
      cameraError: 'QR డెమో కోసం కెమెరా యాక్సెస్ అవసరం.',
      alt: 'పంట స్కాన్ చేయడం'
    },
    footer: {
      links: ['గోప్యతా విధానం', 'సేవా నిబంధనలు', 'మమ్మల్ని సంప్రదించండి'],
      rights: '© 2026 అగ్రిట్రస్ట్. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.'
    },
    errors: {
      generic_ai: 'కనెక్ట్ చేయడంలో సమస్య ఉంది. దయచేసి తర్వాత మళ్ళీ ప్రయత్నించండి.',
      camera_generic: 'కెమెరాను యాక్సెస్ చేయడం సాధ్యం కాలేదు. దయచేసి మీరు అనుమతి ఇచ్చారని నిర్ధారించుకోండి.'
    }
  },
  Marathi: {
    common: { logo: 'एग्रीट्रस्ट' },
    partners: { agriBank: 'एग्री-बैंक', ruralTrust: 'रूरल-ट्रस्ट', globalFin: 'ग्लोबल-फिन', farmCredit: 'फार्म-क्रेडिट' },
    nav: { home: 'होम', about: 'आमच्याबद्दल', howItWorks: 'हे कसे कार्य करते', login: 'लॉगिन', languages: 'भाषा' },
    hero: {
      title: '[ACCENT] पर्यंतचा विश्वास',
      accent: 'शेतापासून फायनान्स',
      subtitle: 'शेतकऱ्यांना रास्त भावांसह सक्षम करणे आणि ग्राहकांना पूर्ण पारदर्शकतेसह थेट ताजी उत्पादने खरेदी करण्यास सक्षम करणे.',
      cta: 'सुरू करा',
      alt: 'हिरवेगार शेत'
    },
    about: {
      title: 'आमच्या प्लॅटफॉर्मबद्दल',
      p1: 'आम्ही ब्लॉकचेन तंत्रज्ञानाद्वारे संचालित एक पारदर्शक कृषी बाजारपेठ तयार करत आहोत जी शेतकऱ्यांना थेट ग्राहकांशी जोडते.',
      p2: 'आमचा प्लॅटफॉर्म मध्यस्थांना काढून टाकतो, रास्त किंमत सुनिश्चित करतो आणि ग्राहकांना उत्पादनाची सत्यता तपासण्याची परवानगी देतो.',
      points: ['ब्लॉकचेन पारदर्शकता', 'शेतकऱ्यांना थेट पेमेंट', 'उत्पादन शोधण्यायोग्यता', 'सुरक्षित बँकिंग एकत्रीकरण']
    },
    howItWorks: {
      title: 'हे कसे कार्य करते',
      subtitle: 'शेतापासून अंतिम ग्राहकापर्यंत एक अखंड, सुरक्षित प्रवास.',
      steps: [
        'शेतकरी प्लॅटफॉर्मवर पिकांची नोंदणी करतो.',
        'ग्राहक उपलब्ध पिके पाहतो.',
        'ग्राहक थेट शेतकऱ्याकडून ऑर्डर देतो.',
        'ब्लॉकचेन व्यवहाराची सुरक्षितपणे नोंद करते.',
        'पेमेंट थेट शेतकऱ्याकडे हस्तांतरित केले जाते.',
        'बँक सत्यापित व्यवहारांच्या आधारे कर्ज आणि आर्थिक सहाय्य प्रदान करते.'
      ]
    },
    features: {
      items: [
        { title: 'ब्लॉकचेन पारदर्शकता', desc: 'प्रत्येक व्यवहार सुरक्षित लेजरवर नोंदवला जातो.' },
        { title: 'शेतकऱ्यांना थेट पेमेंट', desc: 'शेतकऱ्याच्या वॉलेटमध्ये थेट आणि सुरक्षित निधी हस्तांतरण.' },
        { title: 'उत्पादन शोधण्यायोग्यता', desc: 'शेतापासून तुमच्या टेबलापर्यंत तुमच्या उत्पादनाचा प्रवास ट्रॅक करा.' },
        { title: 'सुरक्षित बँकिंग एकत्रीकरण', desc: 'कर्ज आणि क्रेडिट समर्थनासाठी एकात्मिक आर्थिक सेवा.' },
        { title: 'रिअल-टाइम मॉनिटरिंग', desc: 'ऑर्डर आणि पेमेंटवर थेट अपडेट्स.' }
      ],
      cta: 'शेती बदलण्यासाठी तयार आहात?',
      joinNow: 'आताच सामील व्हा'
    },
    search: {
      title: 'ताजी उत्पादने शोधा',
      subtitle: 'तुम्हाला थेट स्त्रोताशी जोडत आहे.',
      placeholder: 'पिके किंवा शेतकरी शोधा',
      filters: ['स्थान', 'पिकाचा प्रकार', 'गुणवत्ता श्रेणी']
    },
    trust: {
      badge: 'ब्लॉकचेन सुरक्षित',
      title: 'विश्वसनीय आणि सुरक्षित प्लॅटफॉर्म',
      stats: [
        { value: '१०,०००+', label: 'व्यवहार' },
        { value: '५,०००+', label: 'शेतकरी' },
        { value: '१००+', label: 'ग्राहक' }
      ]
    },
    roles: {
      title: 'तुम्ही कोण आहात?',
      subtitle: 'प्लॅटफॉर्मवर सुरू ठेवण्यासाठी तुमची भूमिका निवडा',
      farmer: { title: 'शेतकरी', desc: 'पिके थेट ग्राहकांना विका आणि सुरक्षित पेमेंट मिळवा.' },
      consumer: { title: 'ग्राहक', desc: 'शेतकऱ्यांकडून थेट ताजी पिके खरेदी करा आणि तपशील तपासा.' },
      bank: { title: 'बँक', desc: 'सत्यापित व्यवहारांच्या आधारे शेतकऱ्यांना कर्ज आणि आर्थिक सहाय्य प्रदान करा.' },
      continue: 'सुरू ठेवा',
      back: 'होमवर परत'
    },
    chatbot: {
      title: 'सहाय्यक सहाय्यक',
      welcome: 'नमस्कार! मी तुम्हाला कशी मदत करू शकतो?',
      placeholder: 'संदेश टाइप करा...',
      faqs: [
        'शेतकरी पिके कशी विकतात?',
        'ग्राहक पिके कशी खरेदी करू शकतात?',
        'ब्लॉकचेन पारदर्शकता कशी सुनिश्चित करते?',
        'पेमेंट कसे कार्य करते?',
        'मी कर्जासाठी अर्ज कसा करू शकतो?',
        'मी नोंदणी कशी करू?'
      ]
    },
    qr: {
      title: 'स्कॅन आणि सत्यापित करा',
      desc: 'कोणत्याही उत्पादनाचे मूळ, गुणवत्ता आणि प्रवास सेकंदात सत्यापित करण्यासाठी आमचे ब्लॉकचेन-संचालित स्कॅनर वापरा.',
      stop: 'स्कॅनर थांबवा',
      button: 'स्कॅनर सुरू करा',
      align: 'फ्रेममध्ये QR कोड संरेखित करा',
      cameraError: 'QR डेमोसाठी कॅमेरा प्रवेश आवश्यक आहे.',
      alt: 'पीक स्कॅनिंग'
    },
    footer: {
      links: ['गोपनीयता धोरण', 'सेवा अटी', 'आमच्याशी संपर्क साधा'],
      rights: '© २०२६ एग्रीट्रस्ट. सर्व हक्क राखीव.'
    },
    errors: {
      generic_ai: 'कनेक्ट करण्यात समस्या येत आहे. कृपया नंतर पुन्हा प्रयत्न करा.',
      camera_generic: 'कॅमेरा प्रवेश करता आला नाही. कृपया आपण परवानगी दिल्याची खात्री करा.'
    }
  },
  Tamil: {
    common: { logo: 'அக்ரிட்ரஸ்ட்' },
    partners: { agriBank: 'அக்ரி-பேங்க்', ruralTrust: 'ரூரல்-ட்ரஸ்ட்', globalFin: 'குளோபல்-ஃபின்', farmCredit: 'ஃபார்ம்-கிரெடிட்' },
    nav: { home: 'முகப்பு', about: 'எங்களைப் பற்றி', howItWorks: 'எப்படி வேலை செய்கிறது', login: 'உள்நுழை', languages: 'மொழிகள்' },
    hero: {
      title: '[ACCENT] வரையிலான நம்பிக்கை',
      accent: 'பண்ணை முதல் நிதி',
      subtitle: 'விவசாயிகளுக்கு நியாயமான விலைகளை வழங்குதல் மற்றும் நுகர்வோர் நேரடியாக புதிய விளைபொருட்களை வாங்க உதவுதல்.',
      cta: 'தொடங்குங்கள்',
      alt: 'பசுமையான பண்ணை'
    },
    about: {
      title: 'எங்கள் தளம் பற்றி',
      p1: 'விவசாயிகளையும் நுகர்வோரையும் நேரடியாக இணைக்கும் வெளிப்படையான விவசாய சந்தையை நாங்கள் உருவாக்கி வருகிறோம்.',
      p2: 'எங்கள் தளம் இடைத்தரகர்களை நீக்கி, நியாயமான விலையை உறுதி செய்கிறது மற்றும் பாதுகாப்பான டிஜிட்டல் கொடுப்பனவுகளை வழங்குகிறது.',
      points: ['பிளாக்செயின் வெளிப்படைத்தன்மை', 'விவசாயிகளுக்கு நேரடி பணம்', 'தயாரிப்பு கண்டறியும் வசதி', 'பாதுகாப்பான வங்கி ஒருங்கிணைப்பு']
    },
    howItWorks: {
      title: 'எப்படி வேலை செய்கிறது',
      subtitle: 'வயலில் இருந்து இறுதி நுகர்வோர் வரை தடையற்ற, பாதுகாப்பான பயணம்.',
      steps: [
        'விவசாயி பயிர்களை தளத்தில் பட்டியலிடுகிறார்.',
        'நுகர்வோர் பயிர்களைப் பார்க்கிறார்.',
        'நுகர்வோர் நேரடியாக விவசாயியிடம் ஆர்டர் செய்கிறார்.',
        'பிளாக்செயின் பரிவர்த்தனையை பாதுகாப்பாக பதிவு செய்கிறது.',
        'பணம் நேரடியாக விவசாயிக்கு மாற்றப்படுகிறது.',
        'வங்கி சரிபார்க்கப்பட்ட பரிவர்த்தனைகளின் அடிப்படையில் கடன் வழங்குகிறது.'
      ]
    },
    features: {
      items: [
        { title: 'பிளாக்செயின் வெளிப்படைத்தன்மை', desc: 'ஒவ்வொரு பரிவர்த்தனையும் பாதுகாப்பான பதிவேட்டில் பதிவு செய்யப்படுகிறது.' },
        { title: 'விவசாயிகளுக்கு நேரடி பணம்', desc: 'விவசாயியின் வாலட்டிற்கு நேரடி மற்றும் பாதுகாப்பான பணப் பரிமாற்றம்.' },
        { title: 'தயாரிப்பு கண்டறியும் வசதி', desc: 'வயலில் இருந்து உங்கள் மேசை வரை விளைபொருட்களைப் பின்தொடரவும்.' },
        { title: 'பாதுகாப்பான வங்கி ஒருங்கிணைப்பு', desc: 'கடன்களுக்கான ஒருங்கிணைந்த நிதிச் சேவைகள்.' },
        { title: 'நிகழ்நேர கண்காணிப்பு', desc: 'ஆர்டர்கள் மற்றும் கொடுப்பனவுகள் குறித்த நேரடி அறிவிப்புகள்.' }
      ],
      cta: 'விவசாயத்தை மாற்றத் தயாரா?',
      joinNow: 'இப்போதே இணையுங்கள்'
    },
    search: {
      title: 'புதிய விளைபொருட்களைக் கண்டறியவும்',
      subtitle: 'உங்களை நேரடியாக மூலத்துடன் இணைக்கிறது.',
      placeholder: 'பயிர்கள் அல்லது விவசாயிகளைத் தேடுங்கள்',
      filters: ['இடம்', 'பயிர் வகை', 'தர நிலை']
    },
    trust: {
      badge: 'பிளாக்செயின் பாதுகாப்பு',
      title: 'நம்பகமான மற்றும் பாதுகாப்பான தளம்',
      stats: [
        { value: '10,000+', label: 'பரிவர்த்தனைகள்' },
        { value: '5,000+', label: 'விவசாயிகள்' },
        { value: '100+', label: 'நுகர்வோர்' }
      ]
    },
    roles: {
      title: 'நீங்கள் யார்?',
      subtitle: 'தளத்தைத் தொடர உங்கள் பாத்திரத்தைத் தேர்ந்தெடுக்கவும்',
      farmer: { title: 'விவசாயி', desc: 'பயிர்களை நேரடியாக நுகர்வோருக்கு விற்று பாதுகாப்பான பணத்தைப் பெறுங்கள்.' },
      consumer: { title: 'நுகர்வோர்', desc: 'விவசாயிகளிடமிருந்து நேரடியாக புதிய பயிர்களை வாங்கி விவரங்களைச் சரிபார்க்கவும்.' },
      bank: { title: 'வங்கி', desc: 'சரிபார்க்கப்பட்ட பரிவர்த்தனைகளின் அடிப்படையில் விவசாயிகளுக்கு கடன் வழங்கவும்.' },
      continue: 'தொடரவும்',
      back: 'முகப்பிற்குத் திரும்பு'
    },
    chatbot: {
      title: 'உதவி உதவியாளர்',
      welcome: 'வணக்கம்! நான் உங்களுக்கு எப்படி உதவ முடியும்?',
      placeholder: 'செய்தியைத் தட்டச்சு செய்க...',
      faqs: [
        'விவசாயிகள் பயிர்களை எப்படி விற்கிறார்கள்?',
        'நுகர்வோர் பயிர்களை எப்படி வாங்கலாம்?',
        'பிளாக்செயின் எப்படி வெளிப்படைத்தன்மையை உறுதி செய்கிறது?',
        'பணம் செலுத்துதல் எப்படி வேலை செய்கிறது?',
        'நான் கடனுக்கு எப்படி விண்ணப்பிப்பது?',
        'நான் எப்படி பதிவு செய்வது?'
      ]
    },
    qr: {
      title: 'ஸ்கேன் & சரிபார்க்கவும்',
      desc: 'எந்தவொரு விளைபொருளின் தோற்றம், தரம் மற்றும் பயணத்தை நொடிகளில் சரிபார்க்க எங்கள் பிளாக்செயினில் இயங்கும் ஸ்கேனரைப் பயன்படுத்தவும்.',
      stop: 'ஸ்கேனரை நிறுத்து',
      button: 'ஸ்கேனரைத் தொடங்கு',
      align: 'QR குறியீட்டை சட்டத்திற்குள் சீரமைக்கவும்',
      cameraError: 'QR டெமோவிற்கு கேமரா அணுகல் தேவை.',
      alt: 'பயிர் ஸ்கேன் செய்தல்'
    },
    footer: {
      links: ['தனியுரிமைக் கொள்கை', 'சேவை விதிமுறைகள்', 'எங்களைத் தொடர்பு கொள்ளவும்'],
      rights: '© 2026 அக்ரிட்ரஸ்ட். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'
    },
    errors: {
      generic_ai: 'இணைப்பதில் சிக்கல் உள்ளது. தயவுசெய்து பிறகு மீண்டும் முயற்சிக்கவும்.',
      camera_generic: 'கேமராவை அணுக முடியவில்லை. நீங்கள் அனுமதி வழங்கியுள்ளீர்கள் என்பதை உறுதிப்படுத்தவும்.'
    }
  },
  Urdu: {
    common: { logo: 'ایگری ٹرسٹ' },
    partners: { agriBank: 'ایگری بینک', ruralTrust: 'رورل ٹرسٹ', globalFin: 'گلوبل فن', farmCredit: 'فارم کریڈٹ' },
    nav: { home: 'ہوم', about: 'ہمارے بارے میں', howItWorks: 'یہ کیسے کام کرتا ہے', login: 'لاگ ان', languages: 'زبانیں' },
    hero: {
      title: '[ACCENT] تک کا اعتماد',
      accent: 'کھیت سے فنانس',
      subtitle: 'کسانوں کو منصفانہ قیمتوں کے ساتھ بااختیار بنانا اور صارفین کو مکمل شفافیت کے ساتھ براہ راست تازہ پیداوار خریدنے کے قابل بنانا۔',
      cta: 'شروع کریں',
      alt: 'لہلہاتا کھیت'
    },
    about: {
      title: 'ہمارے پلیٹ فارم کے بارے میں',
      p1: 'ہم بلاک چین ٹیکنالوجی کے ذریعے ایک شفاف زرعی مارکیٹ بنا رہے ہیں جو کسانوں کو براہ راست صارفین سے جوڑتی ہے۔',
      p2: 'ہمارا پلیٹ فارم درمیانی افراد کو ختم کرتا ہے، منصفانہ قیمتوں کو یقینی بناتا ہے اور محفوظ ڈیجیٹل ادائیگیوں کو ممکن بناتا ہے۔',
      points: ['بلاک چین شفافیت', 'کسانوں کو براہ راست ادائیگی', 'مصنوعات کی ٹریس ایبلٹی', 'محفوظ بینکنگ انٹیگریشن']
    },
    howItWorks: {
      title: 'یہ کیسے کام کرتا ہے',
      subtitle: 'کھیت سے آخری صارف تک ایک ہموار، محفوظ سفر।',
      steps: [
        'کسان پلیٹ فارم پر فصلوں کی فہرست بناتا ہے۔',
        'صارف دستیاب فصلوں کو دیکھتا ہے۔',
        'صارف براہ راست کسان سے آرڈر دیتا ہے۔',
        'بلاک چین لین دین کو محفوظ طریقے سے ریکارڈ کرتا ہے۔',
        'ادائیگی براہ راست کسان کو منتقل کر دی جاتی ہے۔',
        'بینک تصدیق شدہ لین دین کی بنیاد پر قرض فراہم کرتا ہے۔'
      ]
    },
    features: {
      items: [
        { title: 'بلاک چین شفافیت', desc: 'ہر لین دین ایک محفوظ لیجر پر ریکارڈ کیا جاتا ہے۔' },
        { title: 'کسانوں کو براہ راست ادائیگی', desc: 'براہ راست کسان کے والٹ میں فوری اور محفوظ فنڈز کی منتقلی۔' },
        { title: 'مصنوعات کی ٹریس ایبلٹی', desc: 'کھیت سے اپنی میز تک اپنی پیداوار کے سفر کو ٹریک کریں۔' },
        { title: 'محفوظ بینکنگ انٹیگریشن', desc: 'قرضوں کے لیے مربوط مالیاتی خدمات।' },
        { title: 'ریئل ٹائم مانیٹرنگ', desc: 'آرڈرز اور ادائیگیوں پر لائیو اپ ڈیٹس।' }
      ],
      cta: 'زراعت کو بدلنے کے لیے تیار ہیں؟',
      joinNow: 'ابھی شامل ہوں'
    },
    search: {
      title: 'تازہ پیداوار تلاش کریں',
      subtitle: 'آپ کو براہ راست ذریعہ سے جوڑ رہا ہے۔',
      placeholder: 'فصلیں یا کسان تلاش کریں',
      filters: ['مقام', 'فصل کی قسم', 'کوالٹی گریڈ']
    },
    trust: {
      badge: 'بلاک چین محفوظ',
      title: 'قابل اعتماد اور محفوظ پلیٹ فارم',
      stats: [
        { value: '10,000+', label: 'لین دین' },
        { value: '5,000+', label: 'کسان' },
        { value: '100+', label: 'صارفین' }
      ]
    },
    roles: {
      title: 'آپ کون ہیں؟',
      subtitle: 'پلیٹ فارم پر جاری رکھنے کے لیے اپنا کردار منتخب کریں',
      farmer: { title: 'کسان', desc: 'فصلیں براہ راست صارفین کو فروخت کریں اور محفوظ ادائیگی حاصل کریں۔' },
      consumer: { title: 'صارف', desc: 'کسانوں سے براہ راست تازہ فصلیں خریدیں اور تفصیلات کی تصدیق کریں۔' },
      bank: { title: 'بینک', desc: 'تصدیق شدہ لین دین کی بنیاد پر کسانوں کو قرض فراہم کریں۔' },
      continue: 'جاری رکھیں',
      back: 'ہوم پر واپس'
    },
    chatbot: {
      title: 'سپورٹ اسسٹنٹ',
      welcome: 'سلام! میں آج آپ کی کیسے مدد کر سکتا ہوں؟',
      placeholder: 'پیغام ٹائپ کریں...',
      faqs: [
        'کسان فصلیں کیسے بیچتے ہیں؟',
        'صارفین فصلیں کیسے خرید سکتے ہیں؟',
        'بلاک چین شفافیت کو کیسے یقینی بناتا ہے؟',
        'ادائیگیاں کیسے کام کرتی ہیں؟',
        'میں قرض کے لیے کیسے درخواست دے سکتا ہوں؟',
        'میں رجسٹریشن کیسے کروں؟'
      ]
    },
    qr: {
      title: 'اسکین اور تصدیق',
      desc: 'سیکنڈوں میں کسی بھی پیداوار کی اصلیت، معیار اور سفر کی تصدیق کے لیے ہمارے بلاک چین سے چلنے والے اسکینر کا استعمال کریں۔',
      stop: 'اسکینر روکیں',
      button: 'اسکینر شروع کریں',
      align: 'فریم کے اندر QR کوڈ رکھیں',
      cameraError: 'QR ڈیمو کے لیے کیمرہ تک رسائی درکار ہے۔',
      alt: 'فصل اسکیننگ'
    },
    footer: {
      links: ['رازداری کی پالیسی', 'سروس کی شرائط', 'ہم سے رابطہ کریں'],
      rights: '© 2026 ایگری ٹرسٹ۔ جملہ حقوق محفوظ ہیں۔'
    },
    errors: {
      generic_ai: 'کنیکٹ کرنے میں مسئلہ ہو رہا ہے۔ براہ کرم بعد میں دوبارہ کوشش کریں۔',
      camera_generic: 'کیمرہ تک رسائی نہیں ہو سکی۔ براہ کرم یقینی بنائیں کہ آپ نے اجازت دی ہے۔'
    }
  },
  Gujarati: {
    common: { logo: 'એગ્રીટ્રસ્ટ' },
    partners: { agriBank: 'એગ્રી-બેંક', ruralTrust: 'રૂરલ-ટ્રસ્ટ', globalFin: 'ગ્લોબલ-ફિન', farmCredit: 'ફાર્મ-ક્રેડિટ' },
    nav: { home: 'હોમ', about: 'અમારા વિશે', howItWorks: 'તે કેવી રીતે કામ કરે છે', login: 'લોગિન', languages: 'ભાષાઓ' },
    hero: {
      title: '[ACCENT] સુધીનો વિશ્વાસ',
      accent: 'ખેતરથી ફાઇનાન્સ',
      subtitle: 'ખેડૂતોને વાજબી ભાવો સાથે સશક્ત બનાવવા અને ગ્રાહકોને સીધી તાજી પેદાશો ખરીદવા માટે સક્ષમ કરવા.',
      cta: 'શરૂ કરો',
      alt: 'લીલુંછમ ખેતર'
    },
    about: {
      title: 'અમારા પ્લેટફોર્મ વિશે',
      p1: 'અમે બ્લોકચેન ટેકનોલોજી દ્વારા સંચાલિત એક પારદર્શક કૃષિ બજાર બનાવી રહ્યા છીએ જે ખેડૂતોને સીધા ગ્રાહકો સાથે જોડે છે.',
      p2: 'અમારું પ્લેટફોર્મ વચેટિયાઓને દૂર કરે છે, વાજબી કિંમત સુનિશ્ચિત કરે છે અને સુરક્ષિત ડિજિટલ ચૂકવણીને સક્ષમ કરે છે.',
      points: ['બ્લોકચેન પારદર્શિતા', 'ખેડૂતોને સીધી ચુકવણી', 'પ્રોડક્ટ ટ્રેસેબિલટી', 'સુરક્ષિત બેંકિંગ એકીકરણ']
    },
    howItWorks: {
      title: 'તે કેવી રીતે કામ કરે છે',
      subtitle: 'ખેતરથી અંતિમ ગ્રાહક સુધીની એક સીમલેસ, સુરક્ષિત મુસાફરી.',
      steps: [
        'ખેડૂત પ્લેટફોર્મ પર પાકની યાદી આપે છે.',
        'ગ્રાહક ઉપલબ્ધ પાક જુએ છે.',
        'ગ્રાહક સીધો ખેડૂત પાસેથી ઓર્ડર આપે છે.',
        'બ્લોકચેન વ્યવહારને સુરક્ષિત રીતે રેકોર્ડ કરે છે.',
        'ચુકવણી સીધી ખેડૂતને ટ્રાન્સફર કરવામાં આવે છે.',
        'બેંક ચકાસાયેલ વ્યવહારોના આધારે લોન અને નાણાકીય સહાય પૂરી પાડે છે.'
      ]
    },
    features: {
      items: [
        { title: 'બ્લોકચેન પારદર્શિતા', desc: 'દરેક વ્યવહાર સુરક્ષિત લેજર પર રેકોર્ડ કરવામાં આવે છે.' },
        { title: 'ખેડૂતોને સીધી ચુકવણી', desc: 'ખેડૂતના વોલેટમાં સીધા અને સુરક્ષિત ફંડ ટ્રાન્સફર.' },
        { title: 'પ્રોડક્ટ ટ્રેસેબિલટી', desc: 'ખેતરથી તમારા ટેબલ સુધી તમારી પેદાશોની મુસાફરીને ટ્રૅક કરો.' },
        { title: 'સુરક્ષિત બેંકિંગ એકીકરણ', desc: 'લોન અને ક્રેડિટ સપોર્ટ માટે સંકલિત નાણાકીય સેવાઓ.' },
        { title: 'રીઅલ-ટાઇમ મોનિટરિંગ', desc: 'ઓર્ડર અને પેમેન્ટ પર લાઈવ અપડેટ્સ.' }
      ],
      cta: 'ખેતી બદલવા માટે તૈયાર છો?',
      joinNow: 'અત્યારે જ જોડાઓ'
    },
    search: {
      title: 'તાજી પેદાશો શોધો',
      subtitle: 'તમને સીધા સ્ત્રોત સાથે જોડે છે.',
      placeholder: 'પાક અથવા ખેડૂતો શોધો',
      filters: ['સ્થાન', 'પાકનો પ્રકાર', 'ગુણવત્તા ગ્રેડ']
    },
    trust: {
      badge: 'બ્લોકચેન સુરક્ષિત',
      title: 'વિશ્વસનીય અને સુરક્ષિત પ્લેટફોર્મ',
      stats: [
        { value: '10,000+', label: 'વ્યવહારો' },
        { value: '5,000+', label: 'ખેડૂતો' },
        { value: '100+', label: 'ગ્રાહકો' }
      ]
    },
    roles: {
      title: 'તમે કોણ છો?',
      subtitle: 'પ્લેટફોર્મ પર ચાલુ રાખવા માટે તમારી ભૂમિકા પસંદ કરો',
      farmer: { title: 'ખેડૂત', desc: 'પાક સીધો ગ્રાહકોને વેચો અને સુરક્ષિત ચુકવણી મેળવો.' },
      consumer: { title: 'ગ્રાહક', desc: 'ખેડૂતો પાસેથી સીધો તાજો પાક ખરીદો અને વિગતો ચકાસો.' },
      bank: { title: 'બેંક', desc: 'ચકાસાયેલ વ્યવહારોના આધારે ખેડૂતોને લોન અને નાણાકીય સહાય પૂરી પાડો.' },
      continue: 'ચાલુ રાખો',
      back: 'હોમ પર પાછા ફરો'
    },
    chatbot: {
      title: 'સપોર્ટ આસિસ્ટન્ટ',
      welcome: 'નમસ્તે! હું આજે તમને કેવી રીતે મદદ કરી શકું?',
      placeholder: 'સંદેશ ટાઇપ કરો...',
      faqs: [
        'ખેડૂતો પાક કેવી રીતે વેચે છે?',
        'ગ્રાહકો પાક કેવી રીતે ખરીદી શકે?',
        'બ્લોકચેન પારદર્શિતા કેવી રીતે સુનિશ્ચિત કરે છે?',
        'ચુકવણી કેવી રીતે કામ કરે છે?',
        'હું લોન માટે કેવી રીતે અરજી કરી શકું?',
        'હું કેવી રીતે નોંધણી કરું?'
      ]
    },
    qr: {
      title: 'સ્કેન અને વેરિફાય',
      desc: 'કોઈપણ પેદાશનું મૂળ, ગુણવત્તા અને મુસાફરી સેકન્ડોમાં ચકાસવા માટે અમારા બ્લોકચેન-સંચાલિત સ્કેનરનો ઉપયોગ કરો.',
      stop: 'સ્કેનર બંધ કરો',
      button: 'સ્કેનર શરૂ કરો',
      align: 'ફ્રેમમાં QR કોડ ગોઠવો',
      cameraError: 'QR ડેમો માટે કેમેરા એક્સેસ જરૂરી છે.',
      alt: 'પાક સ્કેનિંગ'
    },
    footer: {
      links: ['ગોપનીયતા નીતિ', 'સેવાની શરતો', 'અમારો સંપર્ક કરો'],
      rights: '© 2026 એગ્રીટ્રસ્ટ. સર્વાધિકાર સુરક્ષિત.'
    },
    errors: {
      generic_ai: 'કનેક્ટ કરવામાં સમસ્યા આવી રહી છે. કૃપા કરીને પછીથી ફરી પ્રયાસ કરો.',
      camera_generic: 'કેમેરા એક્સેસ કરી શકાયો નથી. કૃપા કરીને ખાતરી કરો કે તમે પરવાનગી આપી છે.'
    }
  },
  Kannada: {
    common: { logo: 'ಅಗ್ರಿಟ್ರಸ್ಟ್' },
    partners: { agriBank: 'ಅಗ್ರಿ-ಬ್ಯಾಂಕ್', ruralTrust: 'ರೂರಲ್-ಟ್ರಸ್ಟ್', globalFin: 'ಗ್ಲೋಬಲ್-ಫಿನ್', farmCredit: 'ಫಾರ್ಮ್-ಕ್ರೆಡಿಟ್' },
    nav: { home: 'ಹೋಮ್', about: 'ನಮ್ಮ ಬಗ್ಗೆ', howItWorks: 'ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ', login: 'ಲಾಗಿನ್', languages: 'ಭಾಷೆಗಳು' },
    hero: {
      title: '[ACCENT] ವರೆಗಿನ ನಂಬಿಕೆ',
      accent: 'ಹೊಲದಿಂದ ಹಣಕಾಸಿನ',
      subtitle: 'ರೈತರಿಗೆ ನ್ಯಾಯಯುತ ಬೆಲೆಗಳೊಂದಿಗೆ ಸಬಲೀಕರಣ ಮತ್ತು ಗ್ರಾಹಕರಿಗೆ ನೇರವಾಗಿ ತಾಜಾ ಉತ್ಪನ್ನಗಳನ್ನು ಖರೀದಿಸಲು ಅನುವು ಮಾಡಿಕೊಡುವುದು.',
      cta: 'ಪ್ರಾರಂಭಿಸಿ',
      alt: 'ಹಸಿರು ಹೊಲ'
    },
    about: {
      title: 'ನಮ್ಮ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಬಗ್ಗೆ',
      p1: 'ನಾವು ಬ್ಲಾಕ್‌ಚೈನ್ ತಂತ್ರಜ್ಞಾನದ ಮೂಲಕ ರೈತರನ್ನು ನೇರವಾಗಿ ಗ್ರಾಹಕರಿಗೆ ಸಂಪರ್ಕಿಸುವ ಪಾರದರ್ಶಕ ಕೃಷಿ ಮಾರುಕಟ್ಟೆಯನ್ನು ನಿರ್ಮಿಸುತ್ತಿದ್ದೇವೆ.',
      p2: 'ನಮ್ಮ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಮಧ್ಯವರ್ತಿಗಳನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ ಮತ್ತು ಸುರಕ್ಷಿತ ಡಿಜಿಟಲ್ ಪಾವತಿಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ.',
      points: ['ಬ್ಲಾಕ್‌ಚೈನ್ ಪಾರದರ್ಶಕತೆ', 'ರೈತರಿಗೆ ನೇರ ಪಾವತಿ', 'ಉತ್ಪನ್ನ ಪತ್ತೆಹಚ್ಚುವಿಕೆ', 'ಸುರಕ್ಷಿತ ಬ್ಯಾಂಕಿಂಗ್ ಏಕೀಕರಣ']
    },
    howItWorks: {
      title: 'ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      subtitle: 'ಹೊಲದಿಂದ ಅಂತಿಮ ಗ್ರಾಹಕರವರೆಗೆ ತಡೆರಹಿತ, ಸುರಕ್ಷಿತ ಪ್ರಯಾಣ.',
      steps: [
        'ರೈತರು ಬೆಳೆಗಳನ್ನು ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ನಲ್ಲಿ ಪಟ್ಟಿ ಮಾಡುತ್ತಾರೆ.',
        'ಗ್ರಾಹಕರು ಲಭ್ಯವಿರುವ ಬೆಳೆಗಳನ್ನು ನೋಡುತ್ತಾರೆ.',
        'ಗ್ರಾಹಕರು ನೇರವಾಗಿ ರೈತರಿಂದ ಆರ್ಡರ್ ಮಾಡುತ್ತಾರೆ.',
        'ಬ್ಲಾಕ್‌ಚೈನ್ ವಹಿವಾಟನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ದಾಖಲಿಸುತ್ತದೆ.',
        'ಪಾವತಿಯನ್ನು ನೇರವಾಗಿ ರೈತರಿಗೆ ವರ್ಗಾಯಿಸಲಾಗುತ್ತದೆ.',
        'ಬ್ಯಾಂಕ್ ವಹಿವಾಟುಗಳ ಆಧಾರದ ಮೇಲೆ ಸಾಲ ಮತ್ತು ಹಣಕಾಸಿನ ನೆರವು ನೀಡುತ್ತದೆ.'
      ]
    },
    features: {
      items: [
        { title: 'ಬ್ಲಾಕ್‌ಚೈನ್ ಪಾರದರ್ಶಕತೆ', desc: 'ಪ್ರತಿ ವಹಿವಾಟನ್ನು ಸುರಕ್ಷಿತ ಲೆಡ್ಜರ್‌ನಲ್ಲಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ.' },
        { title: 'ರೈತರಿಗೆ ನೇರ ಪಾವತಿ', desc: 'ರೈತರ ವಾಲೆಟ್‌ಗೆ ನೇರ ಮತ್ತು ಸುರಕ್ಷಿತ ಹಣ ವರ್ಗಾವಣೆ.' },
        { title: 'ಉತ್ಪನ್ನ ಪತ್ತೆಹಚ್ಚುವಿಕೆ', desc: 'ಹೊಲದಿಂದ ನಿಮ್ಮ ಟೇಬಲ್‌ವರೆಗೆ ಉತ್ಪನ್ನದ ಪ್ರಯಾಣವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.' },
        { title: 'ಸುರಕ್ಷಿತ ಬ್ಯಾಂಕಿಂಗ್ ಏಕೀಕರಣ', desc: 'ಸಾಲಗಳಿಗಾಗಿ ಸಂಯೋಜಿತ ಹಣಕಾಸು ಸೇವೆಗಳು.' },
        { title: 'ನೈಜ-ಸಮಯದ ಮೇಲ್ವಿಚಾರಣೆ', desc: 'ಆರ್ಡರ್‌ಗಳು ಮತ್ತು ಪಾವತಿಗಳ ಕುರಿತು ಲೈವ್ ಅಪ್‌ಡೇಟ್‌ಗಳು.' }
      ],
      cta: 'ಕೃಷಿಯನ್ನು ಬದಲಾಯಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?',
      joinNow: 'ಈಗಲೇ ಸೇರಿ'
    },
    search: {
      title: 'ತಾಜಾ ಉತ್ಪನ್ನಗಳನ್ನು ಹುಡುಕಿ',
      subtitle: 'ನಿಮ್ಮನ್ನು ನೇರವಾಗಿ ಮೂಲಕ್ಕೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ.',
      placeholder: 'ಬೆಳೆಗಳು ಅಥವಾ ರೈತರನ್ನು ಹುಡುಕಿ',
      filters: ['ಸ್ಥಳ', 'ಬೆಳೆ ಪ್ರಕಾರ', 'ಗುಣಮಟ್ಟದ ದರ್ಜೆ']
    },
    trust: {
      badge: 'ಬ್ಲಾಕ್‌ಚೈನ್ ಸುರಕ್ಷಿತ',
      title: 'ವಿಶ್ವಾಸಾರ್ಹ ಮತ್ತು ಸುರಕ್ಷಿತ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್',
      stats: [
        { value: '10,000+', label: 'ವಹಿವಾಟುಗಳು' },
        { value: '5,000+', label: 'ರೈತರು' },
        { value: '100+', label: 'ಗ್ರಾಹಕರು' }
      ]
    },
    roles: {
      title: 'ನೀವು ಯಾರು?',
      subtitle: 'ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ನಲ್ಲಿ ಮುಂದುವರಿಯಲು ನಿಮ್ಮ ಪಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
      farmer: { title: 'ರೈತ', desc: 'ಬೆಳೆಗಳನ್ನು ನೇರವಾಗಿ ಗ್ರಾಹಕರಿಗೆ ಮಾರಾಟ ಮಾಡಿ ಮತ್ತು ಸುರಕ್ಷಿತ ಪಾವತಿ ಪಡೆಯಿರಿ.' },
      consumer: { title: 'ಗ್ರಾಹಕ', desc: 'ರೈತರಿಂದ ನೇರವಾಗಿ ತಾಜಾ ಬೆಳೆಗಳನ್ನು ಖರೀದಿಸಿ ಮತ್ತು ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.' },
      bank: { title: 'ಬ್ಯಾಂಕ್', desc: 'ವಹಿವಾಟುಗಳ ಆಧಾರದ ಮೇಲೆ ರೈತರಿಗೆ ಸಾಲ ಮತ್ತು ಹಣಕಾಸಿನ ನೆರವು ನೀಡಿ.' },
      continue: 'ಮುಂದುವರಿಸಿ',
      back: 'ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ'
    },
    chatbot: {
      title: 'ಸಹಾಯ ಸಹಾಯಕ',
      welcome: 'ನಮಸ್ಕಾರ! ನಾನು ಇಂದು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
      placeholder: 'ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ...',
      faqs: [
        'ರೈತರು ಬೆಳೆಗಳನ್ನು ಹೇಗೆ ಮಾರಾಟ ಮಾಡುತ್ತಾರೆ?',
        'ಗ್ರಾಹಕರು ಬೆಳೆಗಳನ್ನು ಹೇಗೆ ಖರೀದಿಸಬಹುದು?',
        'ಬ್ಲಾಕ್‌ಚೈನ್ ಪಾರದರ್ಶಕತೆಯನ್ನು ಹೇಗೆ ಖಚಿತಪಡಿಸುತ್ತದೆ?',
        'ಪಾವತಿಗಳು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ?',
        'ನಾನು ಸಾಲಕ್ಕಾಗಿ ಹೇಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು?',
        'ನಾನು ಹೇಗೆ ನೋಂದಾಯಿಸಿಕೊಳ್ಳಬೇಕು?'
      ]
    },
    qr: {
      title: 'ಸ್ಕ್ಯಾನ್ ಮತ್ತು ಪರಿಶೀಲಿಸಿ',
      desc: 'ಯಾವುದೇ ಉತ್ಪನ್ನದ ಮೂಲ, ಗುಣಮಟ್ಟ ಮತ್ತು ಪ್ರಯಾಣವನ್ನು ಸೆಕೆಂಡುಗಳಲ್ಲಿ ಪರಿಶೀಲಿಸಲು ನಮ್ಮ ಬ್ಲಾಕ್‌ಚೈನ್ ಚಾಲಿತ ಸ್ಕ್ಯಾನರ್ ಬಳಸಿ.',
      stop: 'ಸ್ಕ್ಯಾನರ್ ನಿಲ್ಲಿಸಿ',
      button: 'ಸ್ಕ್ಯಾನರ್ ಪ್ರಾರಂಭಿಸಿ',
      align: 'ಫ್ರೇಮ್‌ನಲ್ಲಿ QR ಕೋಡ್ ಅನ್ನು ಹೊಂದಿಸಿ',
      cameraError: 'QR ಡೆಮೊಗಾಗಿ ಕ್ಯಾಮರಾ ಪ್ರವೇಶದ ಅಗತ್ಯವಿದೆ.',
      alt: 'ಬೆಳೆ ಸ್ಕ್ಯಾನಿಂಗ್'
    },
    footer: {
      links: ['ಗೌಪ್ಯತಾ ನೀತಿ', 'ಸೇವಾ ನಿಯಮಗಳು', 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ'],
      rights: '© 2026 ಅಗ್ರಿಟ್ರಸ್ಟ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.'
    },
    errors: {
      generic_ai: 'ಸಂಪರ್ಕಿಸಲು ತೊಂದರೆಯಾಗುತ್ತಿದೆ. ದಯವಿಟ್ಟು ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
      camera_generic: 'ಕ್ಯಾಮರಾ ಪ್ರವೇಶಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ನೀವು ಅನುಮತಿ ನೀಡಿದ್ದೀರಿ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.'
    }
  },
  Malayalam: {
    common: { logo: 'അഗ്രിട്രസ്റ്റ്' },
    partners: { agriBank: 'അഗ്രി-ബാങ്ക്', ruralTrust: 'റൂറൽ-ട്രസ്റ്റ്', globalFin: 'ഗ്ലോബൽ-ഫിൻ', farmCredit: 'ഫാം-ക്രെഡിറ്റ്' },
    nav: { home: 'ഹോം', about: 'ഞങ്ങളെക്കുറിച്ച്', howItWorks: 'ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു', login: 'ലോഗിൻ', languages: 'ഭാഷകൾ' },
    hero: {
      title: '[ACCENT] വരെയുള്ള വിശ്വാസം',
      accent: 'പാടം മുതൽ ഫിനാൻസ്',
      subtitle: 'കർഷകർക്ക് ന്യായമായ വില ഉറപ്പാക്കുകയും ഉപഭോക്താക്കൾക്ക് നേരിട്ട് പുതിയ ഉൽപ്പന്നങ്ങൾ വാങ്ങാൻ സഹായിക്കുകയും ചെയ്യുന്നു.',
      cta: 'ആരംഭിക്കുക',
      alt: 'പച്ചപ്പുള്ള പാടം'
    },
    about: {
      title: 'ഞങ്ങളുടെ പ്ലാറ്റ്‌ഫോമിനെക്കുറിച്ച്',
      p1: 'കർഷകരെ നേരിട്ട് ഉപഭോക്താക്കളുമായി ബന്ധിപ്പിക്കുന്ന സുതാര്യമായ ഒരു കാർഷിക വിപണിയാണ് ഞങ്ങൾ നിർമ്മിക്കുന്നത്.',
      p2: 'ഞങ്ങളുടെ പ്ലാറ്റ്‌ഫോം ഇടനിലക്കാരെ ഒഴിവാക്കുകയും സുരക്ഷിതമായ ഡിജിറ്റൽ പേയ്‌മെന്റുകൾ ഉറപ്പാക്കുകയും ചെയ്യുന്നു.',
      points: ['ബ്ലോക്ക്ചെയിൻ സുതാര്യത', 'കർഷകർക്ക് നേരിട്ടുള്ള പേയ്‌മെന്റ്', 'ഉൽപ്പന്ന ട്രെയ്‌സിബിലിറ്റി', 'സുരക്ഷിത ബാങ്കിംഗ് സംയോജനം']
    },
    howItWorks: {
      title: 'ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു',
      subtitle: 'പാടം മുതൽ അന്തിമ ഉപഭോക്താവ് വരെ തടസ്സമില്ലാത്തതും സുരക്ഷിതവുമായ യാത്ര.',
      steps: [
        'കർഷകൻ വിളകൾ പ്ലാറ്റ്‌ഫോമിൽ ലിസ്റ്റ് ചെയ്യുന്നു.',
        'ഉപഭോക്താവ് വിളകൾ ബ്രൗസ് ചെയ്യുന്നു.',
        'ഉപഭോക്താവ് നേരിട്ട് കർഷകനിൽ നിന്ന് ഓർഡർ ചെയ്യുന്നു.',
        'ബ്ലോക്ക്ചെയിൻ ഇടപാട് സുരക്ഷിതമായി രേഖപ്പെടുത്തുന്നു.',
        'പേയ്‌മെന്റ് നേരിട്ട് കർഷകന് കൈമാറുന്നു.',
        'ബാങ്ക് വായ്പകളും സാമ്പത്തിക സഹായവും നൽകുന്നു.'
      ]
    },
    features: {
      items: [
        { title: 'ബ്ലോക്ക്ചെയിൻ സുതാര്യത', desc: 'ഓരോ ഇടപാടും സുരക്ഷിതമായ ഒരു ലെഡ്ജറിൽ രേഖപ്പെടുത്തുന്നു.' },
        { title: 'കർഷകർക്ക് നേരിട്ടുള്ള പേയ്‌മെന്റ്', desc: 'കർഷകന്റെ വാലറ്റിലേക്ക് നേരിട്ടുള്ള ഫണ്ട് കൈമാറ്റം.' },
        { title: 'ഉൽപ്പന്ന ട്രെയ്‌സിബിലിറ്റി', desc: 'പാടം മുതൽ നിങ്ങളുടെ മേശ വരെ ഉൽപ്പന്നത്തിന്റെ യാത്ര ട്രാക്ക് ചെയ്യുക.' },
        { title: 'സുരക്ഷിത ബാങ്കിംഗ് സംയോജനം', desc: 'വായ്പകൾക്കായി സംയോജിത സാമ്പത്തിക സേവനങ്ങൾ.' },
        { title: 'തത്സമയ നിരീക്ഷണം', desc: 'ഓർഡറുകളിലും പേയ്‌മെന്റുകളിലും തത്സമയ അപ്‌ഡേറ്റുകൾ.' }
      ],
      cta: 'കൃഷിയെ മാറ്റാൻ തയ്യാറാണോ?',
      joinNow: 'ഇപ്പോൾ ചേരുക'
    },
    search: {
      title: 'പുതിയ ഉൽപ്പന്നങ്ങൾ കണ്ടെത്തുക',
      subtitle: 'നിങ്ങളെ നേരിട്ട് ഉറവിടവുമായി ബന്ധിപ്പിക്കുന്നു.',
      placeholder: 'വിളകളോ കർഷകരെയോ തിരയുക',
      filters: ['സ്ഥലം', 'വിളയുടെ തരം', 'ഗുണനിലവാരം'],
      no_results: 'നിങ്ങളുടെ തിരയലിന് ഫലങ്ങളൊന്നും ലഭിച്ചില്ല. ദയവായി മറ്റ് കീവേഡുകൾ പരീക്ഷിക്കുക.'
    },
    trust: {
      badge: 'ബ്ലോക്ക്ചെയിൻ സുരക്ഷിതം',
      title: 'വിശ്വസനീയവും സുരക്ഷിതവുമായ പ്ലാറ്റ്‌ഫോം',
      stats: [
        { value: '10,000+', label: 'ഇടപാടുകൾ' },
        { value: '5,000+', label: 'കർഷകർ' },
        { value: '100+', label: 'ഉപഭോക്താക്കൾ' }
      ]
    },
    roles: {
      title: 'നിങ്ങൾ ആരാണ്?',
      subtitle: 'പ്ലാറ്റ്‌ഫോമിൽ തുടരാൻ നിങ്ങളുടെ റോൾ തിരഞ്ഞെടുക്കുക',
      farmer: { title: 'കർഷകൻ', desc: 'വിളകൾ നേരിട്ട് ഉപഭോക്താക്കൾക്ക് വിൽക്കുകയും പേയ്‌മെന്റ് സ്വീകരിക്കുകയും ചെയ്യുക.' },
      consumer: { title: 'ഉപഭോക്താവ്', desc: 'കർഷകരിൽ നിന്ന് നേരിട്ട് വിളകൾ വാങ്ങുകയും വിവരങ്ങൾ പരിശോധിക്കുകയും ചെയ്യുക.' },
      bank: { title: 'ബാങ്ക്', desc: 'ഇടപാടുകളുടെ അടിസ്ഥാനത്തിൽ കർഷകർക്ക് വായ്പകൾ നൽകുക.' },
      continue: 'തുടരുക',
      back: 'ഹോമിലേക്ക് മടങ്ങുക'
    },
    chatbot: {
      title: 'സഹായ സഹായി',
      welcome: 'നമസ്കാരം! എനിക്ക് ഇന്ന് നിങ്ങളെ എങ്ങനെ സഹായിക്കാനാകും?',
      placeholder: 'ഒരു സന്ദേശം ടൈപ്പ് ചെയ്യുക...',
      faqs: [
        'കർഷകർ എങ്ങനെയാണ് വിളകൾ വിൽക്കുന്നത്?',
        'ഉപഭോക്താക്കൾക്ക് എങ്ങനെ വിളകൾ വാങ്ങാം?',
        'ബ്ലോക്ക്ചെയിൻ സുതാര്യത എങ്ങനെ ഉറപ്പാക്കുന്നു?',
        'പേയ്‌മെന്റുകൾ എങ്ങനെയാണ് പ്രവർത്തിക്കുന്നത്?',
        'എനിക്ക് എങ്ങനെ വായ്പയ്ക്ക് അപേക്ഷിക്കാം?',
        'ഞാൻ എങ്ങനെ രജിസ്റ്റർ ചെയ്യും?'
      ]
    },
    qr: {
      title: 'സ്കാൻ & വെരിഫൈ',
      desc: 'ഏതെങ്കിലും ഉൽപ്പന്നത്തിന്റെ ഉത്ഭവം, ഗുണനിലവാരം, യാത്ര എന്നിവ നിമിഷങ്ങൾക്കുള്ളിൽ പരിശോധിക്കാൻ ഞങ്ങളുടെ ബ്ലോക്ക്ചെയിൻ അധിഷ്ഠിത സ്കാനർ ഉപയോഗിക്കുക.',
      stop: 'സ്കാനർ നിർത്തുക',
      button: 'സ്കാനർ ആരംഭിക്കുക',
      align: 'ഫ്രെയിമിനുള്ളിൽ QR കോഡ് ക്രമീകരിക്കുക',
      cameraError: 'QR ഡെമോയ്ക്ക് ക്യാമറ ആക്സസ് ആവശ്യമാണ്.',
      alt: 'വിള സ്കാനിംഗ്'
    },
    footer: {
      links: ['സ്വകാര്യതാ നയം', 'സേവന നിബന്ധനകൾ', 'ഞങ്ങളെ ബന്ധപ്പെടുക'],
      rights: '© 2026 അഗ്രിട്രസ്റ്റ്. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.'
    },
    errors: {
      generic_ai: 'കണക്റ്റുചെയ്യുന്നതിൽ പ്രശ്‌നമുണ്ട്. ദയവായി പിന്നീട് വീണ്ടും ശ്രമിക്കുക.',
      camera_generic: 'ക്യാമറ ആക്‌സസ് ചെയ്യാൻ കഴിഞ്ഞില്ല. നിങ്ങൾ അനുമതി നൽകിയിട്ടുണ്ടെന്ന് ഉറപ്പാക്കുക.'
    }
  },
  Punjabi: {
    common: { logo: 'ਐਗਰੀਟਰੱਸਟ' },
    partners: { agriBank: 'ਐਗਰੀ-ਬੈਂਕ', ruralTrust: 'ਰੂਰਲ-ਟਰੱਸਟ', globalFin: 'ਗਲੋਬਲ-ਫਿਨ', farmCredit: 'ਫਾਰਮ-ਕ੍ਰੈਡਿਟ' },
    nav: { home: 'ਹੋਮ', about: 'ਸਾਡੇ ਬਾਰੇ', howItWorks: 'ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ', login: 'ਲੌਗਇਨ', languages: 'ਭਾਸ਼ਾਵਾਂ' },
    hero: {
      title: '[ACCENT] ਤੱਕ ਦਾ ਭਰੋਸਾ',
      accent: 'ਖੇਤ ਤੋਂ ਫਾਈਨਾਂਸ',
      subtitle: 'ਕਿਸਾਨਾਂ ਨੂੰ ਵਾਜਬ ਕੀਮਤਾਂ ਨਾਲ ਸਸ਼ਕਤ ਬਣਾਉਣਾ ਅਤੇ ਖਪਤਕਾਰਾਂ ਨੂੰ ਸਿੱਧੇ ਤੌਰ \'ਤੇ ਤਾਜ਼ਾ ਉਤਪਾਦ ਖਰੀਦਣ ਦੇ ਯੋਗ ਬਣਾਉਣਾ।',
      cta: 'ਸ਼ੁਰੂ ਕਰੋ',
      alt: 'ਹਰਾ-ਭਰਾ ਖੇਤ'
    },
    about: {
      title: 'ਸਾਡੇ ਪਲੇਟਫਾਰਮ ਬਾਰੇ',
      p1: 'ਅਸੀਂ ਬਲਾਕਚੈਨ ਤਕਨਾਲੋਜੀ ਦੁਆਰਾ ਸੰਚਾਲਿਤ ਇੱਕ ਪਾਰਦਰਸ਼ੀ ਖੇਤੀਬਾੜੀ ਮਾਰਕੀਟ ਬਣਾ ਰਹੇ ਹਾਂ ਜੋ ਕਿਸਾਨਾਂ ਨੂੰ ਸਿੱਧਾ ਖਪਤਕਾਰਾਂ ਨਾਲ ਜੋੜਦੀ ਹੈ।',
      p2: 'ਸਾਡਾ ਪਲੇਟਫਾਰਮ ਵਿਚੋਲਿਆਂ ਨੂੰ ਹਟਾਉਂਦਾ ਹੈ ਅਤੇ ਸੁਰੱਖਿਅਤ ਡਿਜੀਟਲ ਭੁਗਤਾਨਾਂ ਨੂੰ ਸਮਰੱਥ ਬਣਾਉਂਦਾ ਹੈ।',
      points: ['ਬਲਾਕਚੈਨ ਪਾਰਦਰਸ਼ਤਾ', 'ਕਿਸਾਨਾਂ ਨੂੰ ਸਿੱਧੀ ਅਦਾਇਗੀ', 'ਉਤਪਾਦ ਟਰੇਸੇਬਿਲਟੀ', 'ਸੁਰੱਖਿਅਤ ਬੈਂਕਿੰਗ ਏਕੀਕਰਣ']
    },
    howItWorks: {
      title: 'ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ',
      subtitle: 'ਖੇਤ ਤੋਂ ਅੰਤਮ ਖਪਤਕਾਰ ਤੱਕ ਇੱਕ ਨਿਰਵਿਘਨ, ਸੁਰੱਖਿਅਤ ਯਾਤਰਾ।',
      steps: [
        'ਕਿਸਾਨ ਪਲੇਟਫਾਰਮ \'ਤੇ ਫਸਲਾਂ ਦੀ ਸੂਚੀ ਬਣਾਉਂਦਾ ਹੈ।',
        'ਖਪਤਕਾਰ ਉਪਲਬਧ ਫਸਲਾਂ ਨੂੰ ਦੇਖਦਾ ਹੈ।',
        'ਖਪਤਕਾਰ ਸਿੱਧਾ ਕਿਸਾਨ ਤੋਂ ਆਰਡਰ ਦਿੰਦਾ ਹੈ।',
        'ਬਲਾਕਚੈਨ ਲੈਣ-ਦੇਣ ਨੂੰ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਰਿਕਾਰਡ ਕਰਦਾ ਹੈ।',
        'ਭੁਗਤਾਨ ਸਿੱਧਾ ਕਿਸਾਨ ਨੂੰ ਟ੍ਰਾਂਸਫਰ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।',
        'ਬੈਂਕ ਲੈਣ-ਦੇਣ ਦੇ ਅਧਾਰ \'ਤੇ ਕਰਜ਼ੇ ਅਤੇ ਵਿੱਤੀ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।'
      ]
    },
    features: {
      items: [
        { title: 'ਬਲਾਕਚੈਨ ਪਾਰਦਰਸ਼ਤਾ', desc: 'ਹਰ ਲੈਣ-ਦੇਣ ਇੱਕ ਸੁਰੱਖਿਅਤ ਲੇਜ਼ਰ \'ਤੇ ਰਿਕਾਰਡ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।' },
        { title: 'ਕਿਸਾਨਾਂ ਨੂੰ ਸਿੱਧੀ ਅਦਾਇਗੀ', desc: 'ਕਿਸਾਨ ਦੇ ਵਾਲਿਟ ਵਿੱਚ ਸਿੱਧਾ ਅਤੇ ਸੁਰੱਖਿਅਤ ਫੰਡ ਟ੍ਰਾਂਸਫਰ।' },
        { title: 'ਉਤਪਾਦ ਟਰੇਸੇਬਿਲਟੀ', desc: 'ਖੇਤ ਤੋਂ ਆਪਣੀ ਮੇਜ਼ ਤੱਕ ਉਤਪਾਦ ਦੀ ਯਾਤਰਾ ਨੂੰ ਟ੍ਰੈਕ ਕਰੋ।' },
        { title: 'ਸੁਰੱਖਿਅਤ ਬੈਂਕਿੰਗ ਏਕੀਕਰਣ', desc: 'ਕਰਜ਼ਿਆਂ ਲਈ ਏਕੀਕ੍ਰਿਤ ਵਿੱਤੀ ਸੇਵਾਵਾਂ।' },
        { title: 'ਰੀਅਲ-ਟਾਈਮ ਨਿਗਰਾਨੀ', desc: 'ਆਰਡਰਾਂ ਅਤੇ ਭੁਗਤਾਨਾਂ \'ਤੇ ਲਾਈਵ ਅਪਡੇਟਸ।' }
      ],
      cta: 'ਖੇਤੀਬਾੜੀ ਨੂੰ ਬਦਲਣ ਲਈ ਤਿਆਰ ਹੋ?',
      joinNow: 'ਹੁਣੇ ਸ਼ਾਮਲ ਹੋਵੋ'
    },
    search: {
      title: 'ਤਾਜ਼ਾ ਉਤਪਾਦ ਲੱਭੋ',
      subtitle: 'ਤੁਹਾਨੂੰ ਸਿੱਧਾ ਸਰੋਤ ਨਾਲ ਜੋੜ ਰਿਹਾ ਹੈ।',
      placeholder: 'ਫਸਲਾਂ ਜਾਂ ਕਿਸਾਨਾਂ ਦੀ ਖੋਜ ਕਰੋ',
      filters: ['ਸਥਾਨ', 'ਫਸਲ ਦੀ ਕਿਸਮ', 'ਗੁਣਵੱਤਾ ਗ੍ਰੇਡ']
    },
    trust: {
      badge: 'ਬਲਾਕਚੈਨ ਸੁਰੱਖਿਅਤ',
      title: 'ਭਰੋਸੇਮੰਦ ਅਤੇ ਸੁਰੱਖਿਅਤ ਪਲੇਟਫਾਰਮ',
      stats: [
        { value: '10,000+', label: 'ਲੈਣ-ਦੇਣ' },
        { value: '5,000+', label: 'ਕਿਸਾਨ' },
        { value: '100+', label: 'ਖਪਤਕਾਰ' }
      ]
    },
    roles: {
      title: 'ਤੁਸੀਂ ਕੌਣ ਹੋ?',
      subtitle: 'ਪਲੇਟਫਾਰਮ \'ਤੇ ਜਾਰੀ ਰੱਖਣ ਲਈ ਆਪਣੀ ਭੂਮਿਕਾ ਚੁਣੋ',
      farmer: { title: 'ਕਿਸਾਨ', desc: 'ਫਸਲਾਂ ਸਿੱਧੇ ਖਪਤਕਾਰਾਂ ਨੂੰ ਵੇਚੋ ਅਤੇ ਸੁਰੱਖਿਅਤ ਭੁਗਤਾਨ ਪ੍ਰਾਪਤ ਕਰੋ।' },
      consumer: { title: 'ਖਪਤਕਾਰ', desc: 'ਕਿਸਾਨਾਂ ਤੋਂ ਸਿੱਧੇ ਤਾਜ਼ੀ ਫਸਲਾਂ ਖਰੀਦੋ ਅਤੇ ਵੇਰਵਿਆਂ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ।' },
      bank: { title: 'ਬੈਂਕ', desc: 'ਲੈਣ-ਦੇਣ ਦੇ ਅਧਾਰ \'ਤੇ ਕਿਸਾਨਾਂ ਨੂੰ ਕਰਜ਼ੇ ਪ੍ਰਦਾਨ ਕਰੋ।' },
      continue: 'ਜਾਰੀ ਰੱਖੋ',
      back: 'ਹੋਮ \'ਤੇ ਵਾਪਸ'
    },
    chatbot: {
      title: 'ਸਹਾਇਤਾ ਸਹਾਇਕ',
      welcome: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਅੱਜ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?',
      placeholder: 'ਸੁਨੇਹਾ ਟਾਈਪ ਕਰੋ...',
      faqs: [
        'ਕਿਸਾਨ ਫਸਲਾਂ ਕਿਵੇਂ ਵੇਚਦੇ ਹਨ?',
        'ਖਪਤਕਾਰ ਫਸਲਾਂ ਕਿਵੇਂ ਖਰੀਦ ਸਕਦੇ ਹਨ?',
        'ਬਲਾਕਚੈਨ ਪਾਰਦਰਸ਼ਤਾ ਕਿਵੇਂ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ?',
        'ਭੁਗਤਾਨ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ?',
        'ਮੈਂ ਕਰਜ਼ੇ ਲਈ ਕਿਵੇਂ ਅਪਲਾਈ ਕਰ ਸਕਦਾ ਹਾਂ?',
        'ਮੈਂ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਕਿਵੇਂ ਕਰਾਂ?'
      ]
    },
    qr: {
      title: 'ਸਕੈਨ ਅਤੇ ਤਸਦੀਕ',
      desc: 'ਕਿਸੇ ਵੀ ਉਤਪਾਦ ਦੀ ਉਤਪਤੀ, ਗੁਣਵੱਤਾ ਅਤੇ ਯਾਤਰਾ ਦੀ ਸਕਿੰਟਾਂ ਵਿੱਚ ਪੁਸ਼ਟੀ ਕਰਨ ਲਈ ਸਾਡੇ ਬਲਾਕਚੈਨ-ਸੰਚਾਲਿਤ ਸਕੈਨਰ ਦੀ ਵਰਤੋਂ ਕਰੋ।',
      stop: 'ਸਕੈਨਰ ਰੋਕੋ',
      button: 'ਸਕੈਨਰ ਸ਼ੁਰੂ ਕਰੋ',
      align: 'ਫਰੇਮ ਦੇ ਅੰਦਰ QR ਕੋਡ ਰੱਖੋ',
      cameraError: 'QR ਡੈਮੋ ਲਈ ਕੈਮਰਾ ਪਹੁੰਚ ਦੀ ਲੋੜ ਹੈ।',
      alt: 'ਫਸਲ ਸਕੈਨਿੰਗ'
    },
    footer: {
      links: ['ਪਰਦੇਦਾਰੀ ਨੀਤੀ', 'ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ', 'ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ'],
      rights: '© 2026 ਐਗਰੀਟਰੱਸਟ। ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।'
    },
    errors: {
      quota_exceeded: 'ਮੇਰਾ ਕੋਟਾ ਖਤਮ ਹੋ ਗਿਆ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਕੁਝ ਮਿੰਟਾਂ ਬਾਅবে ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।',
      generic_ai: 'ਕਨੈਕਟ ਕਰਨ ਵਿੱਚ ਸਮੱਸਿਆ ਆ ਰਹੀ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਬਾਅਦ ਵਿੱਚ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।',
      camera_generic: 'ਕੈਮਰਾ ਐਕਸੈਸ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਸੀਂ ਇਜਾਜ਼ਤ ਦਿੱਤੀ ਹੈ।'
    }
  },
  Odia: {
    common: { logo: 'ଅଗ୍ରିଟ୍ରଷ୍ଟ' },
    partners: { agriBank: 'ଏଗ୍ରି-ବ୍ୟାଙ୍କ୍', ruralTrust: 'ରୁରାଲ୍-ଟ୍ରଷ୍ଟ୍', globalFin: 'ଗ୍ଲୋବାଲ୍-ଫିନ୍', farmCredit: 'ଫାର୍ମ-କ୍ରେଡିଟ୍' },
    nav: { home: 'ହୋମ', about: 'ଆମ ବିଷୟରେ', howItWorks: 'ଏହା କିପରି କାମ କରେ', login: 'ଲଗଇନ୍', languages: 'ଭାଷା' },
    hero: {
      title: '[ACCENT] ପର୍ଯ୍ୟନ୍ତ ବିଶ୍ୱାସ',
      accent: 'କ୍ଷେତରୁ ଫାଇନାନ୍ସ',
      subtitle: 'ଚାଷୀଙ୍କୁ ଉଚିତ୍ ମୂଲ୍ୟ ସହିତ ସଶକ୍ତ କରିବା ଏବଂ ଉପଭୋକ୍ତାଙ୍କୁ ସିଧାସଳଖ ସତେଜ ପନିପରିବା କିଣିବାକୁ ସକ୍ଷମ କରିବା।',
      cta: 'ଆରମ୍ଭ କରନ୍ତୁ',
      alt: 'ସବୁଜ କ୍ଷେତ'
    },
    about: {
      title: 'ଆମ ପ୍ଲାଟଫର୍ମ ବିଷୟରେ',
      p1: 'ଆମେ ବ୍ଲକଚେନ୍ ଟେକ୍ନୋଲୋଜି ମାଧ୍ୟମରେ ଚାଷୀଙ୍କୁ ସିଧାସଳଖ ଉପଭୋକ୍ତାଙ୍କ ସହ ଯୋଡୁଥିବା ଏକ ସ୍ୱଚ୍ଛ କୃଷି ବଜାର ନିର୍ମାଣ କରୁଛୁ।',
      p2: 'ଆମ ପ୍ଲାଟଫର୍ମ ମଧ୍ୟସ୍ଥିଙ୍କୁ ହଟାଇଥାଏ ଏବଂ ସୁରକ୍ଷିତ ଡିଜିଟାଲ୍ ପେମେଣ୍ଟ ସକ୍ଷମ କରିଥାଏ।',
      points: ['ବ୍ଲକଚେନ୍ ସ୍ୱଚ୍ଛତା', 'ଚାଷୀଙ୍କୁ ପ୍ରତ୍ୟକ୍ଷ ପେମେଣ୍ଟ', 'ଉତ୍ପାଦର ଅନୁସନ୍ଧାନ', 'ସୁରକ୍ଷିତ ବ୍ୟାଙ୍କିଙ୍ଗ୍ ଏକୀକରଣ']
    },
    howItWorks: {
      title: 'ଏହା କିପରି କାମ କରେ',
      subtitle: 'କ୍ଷେତରୁ ଶେଷ ଉପଭୋକ୍ତା ପର୍ଯ୍ୟନ୍ତ ଏକ ନିରବଚ୍ଛିନ୍ନ, ସୁରକ୍ଷିତ ଯାତ୍ରା |',
      steps: [
        'ଚାଷୀ ପ୍ଲାଟଫର୍ମରେ ଫସଲ ତାଲିକାଭୁକ୍ତ କରନ୍ତି।',
        'ଉପଭୋକ୍ତା ଉପଲବ୍ଧ ଫସଲ ଦେଖନ୍ତି।',
        'ଉପଭୋକ୍ତା ସିଧାସଳଖ ଚାଷୀଙ୍କଠାରୁ ଅର୍ଡର କରନ୍ତି।',
        'ବ୍ଲକଚେନ୍ କାରବାରକୁ ସୁରକ୍ଷିତ ଭାବରେ ରେକର୍ଡ କରେ।',
        'ପେମେଣ୍ଟ ସିଧାସଳଖ ଚାଷୀଙ୍କ ପାଖକୁ ସ୍ଥାନାନ୍ତର ହୁଏ।',
        'ବ୍ୟାଙ୍କ କାରବାର ଆଧାରରେ ଋଣ ଏବଂ ଆର୍ଥିକ ସହାୟତା ପ୍ରଦານ କରେ।'
      ]
    },
    features: {
      items: [
        { title: 'ବ୍ଲକଚେନ୍ ସ୍ୱଚ୍ଛତା', desc: 'ପ୍ରତ୍ୟେକ କାରବାର ଏକ ସୁରକ୍ଷିତ ଲେଜରରେ ରେକର୍ଡ କରାଯାଏ।' },
        { title: 'ଚାଷୀଙ୍କୁ ପ୍ରତ୍ୟକ୍ଷ ପେମେଣ୍ଟ', desc: 'ଚାଷୀଙ୍କ ୱାଲେଟକୁ ସିଧାସଳଖ ଏବଂ ସୁରକ୍ષିତ ପାଣ୍ଠି ସ୍ଥାନାନ୍ତର।' },
        { title: 'ଉତ୍ପାଦର ଅନୁସନ୍ଧାନ', desc: 'କ୍ଷେତରୁ ଆପଣଙ୍କ ଟେବୁଲ୍ ପର୍ଯ୍ୟନ୍ତ ଉତ୍ପାਦର ଯାତ୍ରା ଟ୍ରାକ୍ କରନ୍ତୁ।' },
        { title: 'ସୁରକ୍ଷିତ ବ୍ୟାଙ୍କିଙ୍ଗ୍ ଏକୀକରଣ', desc: 'ଋଣ ପାଇଁ ସମନ୍ୱିତ ଆର୍ଥିକ ସେବା।' },
        { title: 'ରିଏଲ-ଟାଇମ୍ ମନିଟରିଂ', desc: 'ଅର୍ଡର ଏବଂ ପେମେଣ୍ଟ ଉପରେ ଲାଇଭ୍ ଅପଡେଟ୍।' }
      ],
      cta: 'କୃଷିକୁ ବଦଳାଇବାକୁ ପ୍ରସ୍ତୁତ କି?',
      joinNow: 'ଏବେ ଯୋଗ ଦିଅନ୍ତੁ'
    },
    search: {
      title: 'ସତେଜ ଉତ୍ପାଦ ଖୋଜନ୍ତୁ',
      subtitle: 'ଆପଣଙ୍କୁ ସିଧାସଳଖ ଉତ୍ସ ସହିତ ଯୋଡୁଛି।',
      placeholder: 'ଫସଲ କିମ୍ବା ଚାଷୀଙ୍କୁ ଖୋଜନ୍ତୁ',
      filters: ['ସ୍ଥାନ', 'ଫସଲ ପ୍ରକାର', 'ଗୁଣବତ୍ତା ଗ୍ରେଡ୍']
    },
    trust: {
      badge: 'ବ୍ଲକଚେନ୍ ସୁରକ୍ଷିତ',
      title: 'ବିଶ୍ୱସନୀୟ ଏବଂ ସୁରକ୍ଷିତ ପ୍ଲାଟଫର୍ମ',
      stats: [
        { value: '୧୦,୦୦୦+', label: 'କାରବାର' },
        { value: '୫,୦୦૦+', label: 'ଚାଷୀ' },
        { value: '୧୦୦+', label: 'ଉପଭୋକ୍ତା' }
      ]
    },
    roles: {
      title: 'ଆପଣ କିଏ?',
      subtitle: 'ପ୍ଲାଟଫର୍ମରେ ଜାରି ରଖିବା ପାଇଁ ଆପଣଙ୍କର ଭୂମିକା ଚୟନ କରନ୍ତୁ',
      farmer: { title: 'ଚାଷୀ', desc: 'ସିଧาସଳଖ ଉପଭୋକ୍ତାଙ୍କୁ ଫସଲ ବିକ୍ରି କରନ୍ତୁ ଏବଂ ସୁରକ୍ଷିତ ପେମେଣ୍ଟ ପାଆନ୍ତୁ।' },
      consumer: { title: 'ଉପଭୋକ୍ତା', desc: 'ଚାଷୀଙ୍କଠାରୁ ସିଧାସଳଖ ସତେଜ ଫସଲ କିଣନ୍ତୁ ଏବଂ ବିବରଣୀ ଯାଞ୍ચ କରନ୍ତୁ।' },
      bank: { title: 'ବ୍ୟାଙ୍କ', desc: 'କାରବାର ଆଧାରରେ ଚାଷୀଙ୍କୁ ଋଣ ପ୍ରଦାନ କରନ୍ତୁ।' },
      continue: 'ଆଗକୁ ବଢନ୍ତୁ',
      back: 'ହୋମକୁ ଫେରନ୍ତୁ'
    },
    chatbot: {
      title: 'ସହାୟତା ସହକାରୀ',
      welcome: 'ନମସ୍କାର! ମୁଁ ଆଜି ଆପଣଙ୍କୁ କିପରି ସାହାଯ୍ୟ କରିପାରିବି?',
      placeholder: 'ଏକ ବାର୍ତ୍ତା ଟାଇପ୍ କରନ୍ତୁ...',
      faqs: [
        'ଚାଷୀମାନେ କିପରି ଫସଲ ବିକ୍ରି କରନ୍ତି?',
        'ଉପଭୋକ୍ତାମାନେ କିପରି ଫସଲ କିଣି ପାରିବେ?',
        'ବ୍ଲକଚେନ୍ କିପରି ସ୍ୱଚ୍ଛତା ନିଶ୍ଚିତ କରେ?',
        'ପେମେଣ୍ଟ କିପରି କାମ କରେ?',
        'ମୁଁ କିପରି ଋଣ ପାଇଁ ଆବେଦନ କରିବି?',
        'ମୁଁ କିପରି ପଞ୍ਜੀକରଣ କରିବି?'
      ]
    },
    qr: {
      title: 'ସ୍କାନ୍ ଏବଂ ଯାଞ୍ଚ',
      desc: 'ଯେକୌଣସି ଉତ୍ପାଦର ଉତ୍ପତ୍ତି, ଗୁଣବତ୍ତା ଏବଂ ଯାତ୍ରାକୁ ସେକେଣ୍ଡ ମଧ୍ୟରେ ଯାଞ୍ଚ କରିବା ପାଇଁ ଆମର ବ୍ଲକଚେନ୍-ଚାଳିତ ସ୍କାନର୍ ବ୍ୟବହਾਰ କରନ୍ତୁ।',
      stop: 'ସ୍କାନର୍ ବନ୍ଦ କରନ୍ତୁ',
      button: 'ସ୍କାନର୍ ଆରମ୍ଭ କରନ୍ତୁ',
      align: 'ଫ୍ରେମ୍ ମଧ୍ୟରେ QR କୋଡ୍ ରଖନ୍ତୁ',
      cameraError: 'QR ଡେମୋ ପାଇଁ କ୍ୟାମେରା ଆକ୍ସେସ୍ ଆବଶ୍ୟକ |',
      alt: 'ଫସଲ ସ୍କାନିଂ'
    },
    footer: {
      links: ['ଗୋପନୀୟତା ନୀତି', 'ସେବା ସର୍ତ୍ତାବଳୀ', 'ଆମ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ'],
      rights: '© 2026 ଅଗ୍ରିଟ୍ରଷ୍ଟ। ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।'
    },
    errors: {
      generic_ai: 'ସଂଯୋଗ କରିବାରେ ଅସୁବିଧା ହେଉଛି | ଦୟାକରି ପରେ ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ |',
      camera_generic: 'କ୍ୟାମେରା ଆକ୍ସେସ୍ ହୋଇପାରିଲା ନାହିଁ | ଦୟାକରି ଆପଣ ଅନୁମତି ଦେଇଛନ୍ତି ବୋଲି ନିଶ୍ಚಿತ କରନ୍ତୁ |'
    }
  }
};

export const t = (lang: string, path: string) => {
  const keys = path.split('.');
  let result = translations[lang];
  for (const key of keys) {
    result = result?.[key];
  }
  if (result === undefined) {
    let fallbackResult = translations['English'];
    for (const key of keys) {
      fallbackResult = fallbackResult?.[key];
    }
    return fallbackResult || path;
  }
  return result;
};
