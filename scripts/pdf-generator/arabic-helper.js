import shaperPkg from 'arabic-persian-reshaper';

const shaper = shaperPkg.default ? shaperPkg.default.ArabicShaper : shaperPkg.ArabicShaper;

export function formatArabicText(text) {
  if (!text) return '';
  // Check if text has Arabic characters
  const hasArabic = /[\u0600-\u06FF]/.test(text);
  if (!hasArabic) return text;

  try {
    const reshaped = shaper.convertArabic(text);
    // Reverse character order for standard LTR rendering engines
    return reshaped.split('').reverse().join('');
  } catch (err) {
    return text;
  }
}

