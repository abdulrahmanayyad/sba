const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\20101\\.gemini\\antigravity\\brain';
try {
  const dirs = fs.readdirSync(brainDir);
  for (const d of dirs) {
    const transcript = path.join(brainDir, d, '.system_generated', 'logs', 'transcript.jsonl');
    if (fs.existsSync(transcript)) {
      const content = fs.readFileSync(transcript, 'utf8');
      if (content.includes('بيان تصدير') || content.includes('47 unique countries') || content.includes('179 total source records')) {
        console.log('Found in conversation:', d);
      }
    }
  }
} catch (e) {
  console.error(e.message);
}

