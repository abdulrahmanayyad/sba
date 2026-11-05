import fs from 'fs';
import PDFDocument from 'pdfkit';
import ArabicReshaper from 'arabic-persian-reshaper';

const reshaper = new ArabicReshaper.ArabicReshaper();
const arabicText = 'مجموعة سامي بن عياد للتجارة والصناعة';
// Reshape connects letters:
const reshaped = reshaper.reshape(arabicText);
// In PDFKit, RTL text needs to be reversed for left-to-right font drawing:
const reversed = reshaped.split('').reverse().join('');

console.log('Original:', arabicText);
console.log('Reshaped & reversed:', reversed);

const doc = new PDFDocument({ size: 'A4' });
const stream = fs.createWriteStream('public/test-arabic-reshaped.pdf');
doc.pipe(stream);

doc.font('C:\\Windows\\Fonts\\arial.ttf');
doc.fontSize(22).text(reversed, 50, 80, { align: 'right' });
doc.end();

stream.on('finish', () => {
  console.log('Finished test-arabic-reshaped.pdf, size:', fs.statSync('public/test-arabic-reshaped.pdf').size);
  fs.unlinkSync('public/test-arabic-reshaped.pdf');
  if (fs.existsSync('public/test-arabic-render.pdf')) fs.unlinkSync('public/test-arabic-render.pdf');
});
