const fs = require('fs');
const content = fs.readFileSync('src/lib/studies/apparel-master-studies.ts', 'utf8');
const lines = content.split('\n');

let start = 1278;
let nextStudy = -1;
for (let i = start; i < lines.length; i++) {
  if (lines[i].startsWith('export const STUDY_') && !lines[i].includes('STUDY_LB_APPAREL')) {
    nextStudy = i;
    break;
  }
}

console.log('Next study starts at line:', nextStudy + 1);
console.log('Line text:', lines[nextStudy]);
console.log(lines.slice(nextStudy - 10, nextStudy + 5).join('\n'));
