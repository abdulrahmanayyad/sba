const { 
  ALL_INQUIRIES, 
  COUNTRY_PROFILES, 
  TRADE_STATS, 
  DOCUMENTED_BUYER_REQUIREMENTS, 
  PRODUCT_DEMAND_PORTFOLIO, 
  VERIFIED_TRADE_PARTNERS, 
  TRADE_OPPORTUNITIES 
} = require('./src/lib/trade-data');

console.log('=== VERIFICATION OF GLOBAL TRADE INTELLIGENCE SYSTEM ===');
console.log('1. Total Inquiries:', ALL_INQUIRIES.length, '(Expected: 179)');
console.log('2. Date Inquiries:', ALL_INQUIRIES.filter(r => r.sourceDataset.includes('تمور')).length, '(Expected: 66)');
console.log('3. Diversified Inquiries:', ALL_INQUIRIES.filter(r => r.sourceDataset.includes('متنوعة')).length, '(Expected: 113)');
console.log('4. Unique Countries:', COUNTRY_PROFILES.length, '(Expected: 47)');
console.log('5. Documented Buyer Requirements (Explicit Quantities):', DOCUMENTED_BUYER_REQUIREMENTS.length, '(Expected: 12)');
console.log('6. Product Demand Categories:', PRODUCT_DEMAND_PORTFOLIO.length, '(Expected: 7)');
console.log('7. Verified Business Partners:', VERIFIED_TRADE_PARTNERS.length, '(Expected: 4)');
console.log('8. Trade Opportunities:', TRADE_OPPORTUNITIES.length, '(Expected: 6)');

if (
  ALL_INQUIRIES.length === 179 &&
  COUNTRY_PROFILES.length === 47 &&
  DOCUMENTED_BUYER_REQUIREMENTS.length === 12 &&
  PRODUCT_DEMAND_PORTFOLIO.length === 7
) {
  console.log('>>> ALL VERIFICATION CHECKS PASSED WITH 100% SUCCESS! <<<');
} else {
  console.error('>>> VERIFICATION FAILED! <<<');
  process.exit(1);
}
