const fs = require('fs');

try {
  let content = fs.readFileSync('src/translations.ts', 'utf8');

  const titleAccentPairs = {
    English: { title: 'Trust from [ACCENT]', accent: 'Farm to Finance' },
    Hindi: { title: '[ACCENT] से जुड़ा अटूट विश्वास', accent: 'खेत से फाइनेंस' },
    Bengali: { title: '[ACCENT] থেকে অটুট বিশ্বাস', accent: 'খামার থেকে ফাইন্যান্স' },
    Telugu: { title: '[ACCENT] వరకు నమ్మకం', accent: 'పొలం నుండి ఫైనాన్స్' },
    Marathi: { title: '[ACCENT] पर्यंतचा विश्वास', accent: 'शेतापासून फायनान्स' },
    Tamil: { title: '[ACCENT] வரையிலான நம்பிக்கை', accent: 'பண்ணை முதல் நிதி' },
    Urdu: { title: '[ACCENT] تک کا اعتماد', accent: 'کھیت سے فنانس' },
    Gujarati: { title: '[ACCENT] સુધીનો વિશ્વાસ', accent: 'ખેતરથી ફાઇનાન્સ' },
    Kannada: { title: '[ACCENT] ವರೆಗಿನ ನಂಬಿಕೆ', accent: 'ಹೊಲದಿಂದ ಹಣಕಾಸಿನ' },
    Malayalam: { title: '[ACCENT] വരെയുള്ള വിശ്വാസം', accent: 'പാടം മുതൽ ഫിനാൻസ്' },
    Punjabi: { title: '[ACCENT] ਤੱਕ ਦਾ ਭਰੋਸਾ', accent: 'ਖੇਤ ਤੋਂ ਫਾਈਨਾਂਸ' },
    Odia: { title: '[ACCENT] ପର୍ଯ୍ୟନ୍ତ ବିଶ୍ୱାସ', accent: 'କ୍ଷେତରୁ ଫାଇନାନ୍ସ' }
  };

  for (const lang in titleAccentPairs) {
    const blockStart = content.indexOf(lang + ': {');
    if (blockStart !== -1) {
      let subEnd = content.indexOf('subtitle:', blockStart);
      if (subEnd === -1) subEnd = blockStart + 500;
      let sub = content.substring(blockStart, subEnd);
      
      sub = sub.replace(/title:\s*'[^']+',/g, `title: '${titleAccentPairs[lang].title}',`);
      sub = sub.replace(/accent:\s*'[^']+',/g, `accent: '${titleAccentPairs[lang].accent}',`);
      
      content = content.substring(0, blockStart) + sub + content.substring(subEnd);
    }
  }

  fs.writeFileSync('src/translations.ts', content);
  console.log("Translations updated successfully.");
} catch (e) {
  console.error(e);
}
