const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'lib', 'studies', 'apparel-master-studies.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add import of STUDY_UAE_APPAREL_001
const importSau = 'import { STUDY_SAU_APPAREL_001 } from "./sba-gm-app-sau-001";';
const importUae = 'import { STUDY_SAU_APPAREL_001 } from "./sba-gm-app-sau-001";\nimport { STUDY_UAE_APPAREL_001 } from "./sba-gm-app-uae-001";';

if (!content.includes('import { STUDY_UAE_APPAREL_001 }')) {
  content = content.replace(importSau, importUae);
}

// 2. Replace the inline STUDY_AE_APPAREL object with reference to STUDY_UAE_APPAREL_001
const start = content.indexOf('export const STUDY_AE_APPAREL: GlobalMarketStudy = {');
const end = content.indexOf('export const STUDY_KW_APPAREL: GlobalMarketStudy = {', start);

if (start === -1 || end === -1) {
  console.error('Could not locate STUDY_AE_APPAREL block!');
  process.exit(1);
}

const replacement = `/**
 * United Arab Emirates — Apparel & Textiles Market Intelligence Report
 * Upgraded to Version 2.0 (SBA-GM-APP-UAE-001)
 * Fully comprehensive 18-section research study
 */
export const STUDY_AE_APPAREL: GlobalMarketStudy = STUDY_UAE_APPAREL_001;
export { STUDY_UAE_APPAREL_001 };

`;

content = content.slice(0, start) + replacement + content.slice(end);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated apparel-master-studies.ts with upgraded UAE study');
