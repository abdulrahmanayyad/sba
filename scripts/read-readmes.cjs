const fs = require('fs');
const path = require('path');

const extractedDir = path.join(process.cwd(), 'extracted_env');
const txtFiles = fs.readdirSync(extractedDir).filter(f => f.endsWith('.txt') || f.toLowerCase().includes('readme'));

txtFiles.forEach(tf => {
  const full = path.join(extractedDir, tf);
  if (tf.endsWith('.txt')) {
    const text = fs.readFileSync(full, 'utf8');
    console.log(`\n=== ${tf} ===`);
    console.log(text.slice(0, 500));
  }
});
