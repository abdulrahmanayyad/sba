const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'lib', 'studies', 'apparel-master-studies.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add import of STUDY_KWT_APPAREL_001
const importUae = 'import { STUDY_UAE_APPAREL_001 } from "./sba-gm-app-uae-001";';
const importKwt = 'import { STUDY_UAE_APPAREL_001 } from "./sba-gm-app-uae-001";\nimport { STUDY_KWT_APPAREL_001 } from "./sba-gm-app-kwt-001";';

if (!content.includes('import { STUDY_KWT_APPAREL_001 }')) {
  content = content.replace(importUae, importKwt);
}

// 2. Replace the inline STUDY_KW_APPAREL object with reference to STUDY_KWT_APPAREL_001
const start = content.indexOf('export const STUDY_KW_APPAREL: GlobalMarketStudy = {');
const end = content.indexOf('export const STUDY_QA_APPAREL: GlobalMarketStudy = {', start);

if (start === -1 || end === -1) {
  console.error('Could not locate STUDY_KW_APPAREL block!');
  process.exit(1);
}

const replacement = `/**
 * State of Kuwait — Apparel & Textiles Market Intelligence Report
 * Upgraded to Version 2.0 (SBA-GM-APP-KWT-001)
 * Fully comprehensive 18-section research study
 */
export const STUDY_KW_APPAREL: GlobalMarketStudy = STUDY_KWT_APPAREL_001;
export { STUDY_KWT_APPAREL_001 };

`;

content = content.slice(0, start) + replacement + content.slice(end);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated apparel-master-studies.ts with upgraded Kuwait study');
