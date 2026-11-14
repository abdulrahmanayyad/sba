const fs = require('fs');
const path = require('path');

const envDir = path.join(process.cwd(), 'public', 'دراسات قطاع البيئة');
const extractedDir = path.join(process.cwd(), 'extracted_env');

// Check all txt files
const txts = fs.readdirSync(extractedDir).filter(f => f.endsWith('.txt'));
txts.forEach(t => {
  const content = fs.readFileSync(path.join(extractedDir, t), 'utf8');
  const lines = content.split('\n');
  const numLine = lines.find(l => l.includes('رقم') || l.includes('الدراسة رقم') || l.includes('Study #') || l.includes('الدول'));
  console.log(`${t}:`, numLine || lines[0] || 'no header');
});
