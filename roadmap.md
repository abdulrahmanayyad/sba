# SBA Roadmap — comment fixes (Oct 2026)

## Unified sector navigation plan (2026-10-18)
- [x] Prepare and apply the approved plan for the four visible sectors using supplied briefs: shared menu definitions, EN/AR About dropdowns, environment services/products/sectors, food vision/highlights/cooperation and Join Us, garment services/products/capabilities and collection links
- [x] Verify four sector menus in EN/AR, matching section anchors, Escape dismissal, phone menus without overflow, garment collection and food contact navigation; 10 regression tests pass and build OK

## Construction navigation (2026-10-18)
- [x] Arrange the construction bar with About Us (Who We Are, What We Do, Why Us), Our Sectors, Our Services and experience/projects; desktop anchors, Arabic submenu, phone dismissal and no overflow verified; routing test and build pass

## Site-wide animation upgrade (2026-10-18)
- [x] Extend shared GSAP reveals, image motion, hover details, formatted statistics and dynamic-content coverage across every page without changing copy
- [x] Coordinate route transitions and accessible animated group/sector/mobile menus in EN and AR
- [x] Verify every route, product filters, real model details, menu keyboard interaction, phone layouts and reduced motion; navigation and catalogue tests pass
- [x] Mark the pre-existing invented journey dates explicitly as placeholders; preserve their text pending owner confirmation

From 74 open comment threads by Dr. Abdulrahman Ayyad (Oct 11–14). Old apparel-home comments from Oct 11 are obsolete where their sections were removed in the group rebuild.

## Phase 1 — Header & navigation
- [ ] Add "Our Partners شركاؤنا" nav item (826b3e7e)
- [ ] Add "Join Us انضم إلينا" nav item (8755dea6)
- [ ] Rename nav #2 → "About Us نبذة عنا" (0d02e83a); nav #4 → "Our Products منتجاتنا" (b806e829)
- [ ] About dropdown: Who We Are / What We Do / Our Approach / Our Values / Why SAMI BIN AYYAD / Company Governance / Policies (98679640, dd80cd0c)
- [ ] Sectors dropdown with 5 sectors → standalone pages; rename "Our Divisions" → "Our Sectors" (7db13872, fa9904ac)
- [ ] Add "Our News" (e10e7ce2)
- [ ] Language switcher: globe icon, full language names, after Contact Us, far end (EN far right / AR far left) (dd22feb4, fe7ed925, 88541bdb, 45dac0bc)
- [ ] Arabic lockup "سامي بن عياد" under logo in Arabic version (cb7f1ee9)

## Phase 2 — Hero copy (EN + AR)
- [ ] Eyebrow orange: "Driving Progress Across Industries · نقود التقدم عبر مختلف القطاعات" (c29446ef, 9528fc7b)
- [ ] H1: "Building Value • Shaping the Future · نبني القيمة ونصنع المستقبل" (214f227d)
- [ ] Paragraph: "Driving Progress Across Five Strategic Sectors / We unite five strategic sectors — Apparel, Construction, Sustainability, Research, and Education — ..." EN+AR (f847c98a)
- [ ] Two equal-width slogan lines (7c9cc1f9)

## Phase 3 — Five standalone sector pages (315559ff, ad4a42a9, 21855a5f, 3deef78a, 6f7da802)
- [ ] /sectors/garment — Capabilities, Products, Services, Manufacturing Solutions, Quality & Compliance, Partners, News & Resources, Contact & Opportunities
- [ ] /sectors/construction — Capabilities, Services, Projects, Expertise, Quality/Safety/Compliance, Partners, News, Contact
- [ ] /sectors/environmental — Capabilities, Services, Solutions, Projects, Sustainability & Impact, Partners, News, Contact
- [ ] /sectors/research — Capabilities, Research Areas, Projects, Innovation & Development, Publications & Studies, Partnerships, News, Contact
- [ ] /sectors/education — Capabilities, Programs, Learning Solutions, Projects, Expertise, Partners, News, Contact
- [ ] Rules: max 8 main headings per sector; no pages for titles without real content (29bd6637); placeholder content clearly marked

## Phase 4 — Footer
- [ ] Company address AR + EN (El Obour City) (160e2fd6)
- [ ] Company registration number field (6a48eb80)
- [ ] Line under copyright (c9771ff8)
- [ ] Footer menus = header menus, EN + AR (db4a1729, 7b556d27, e9df2852)
- [ ] Only info@ email everywhere (983b7e19, ae8f28f3)
- [ ] Social: Facebook, Instagram, LinkedIn only (3ef1ecc1); stacked vertically (68e678c9)
- [ ] Blurred subtle image behind green footer (4070afb1)
- [ ] Company addresses under SBA logo (8015b0b1)
- [ ] Globe language switcher in footer (45dac0bc)

## Phase 5 — Homepage additions
- [ ] "Who We Serve" section (0985ed48)
- [ ] Analytics charts: work volume / projects / employees per sector + overall (f402625b, ab6a92c3, 87655cb7)
- [ ] Environmental sector: add projects + up to 10M$ volume (ea06353e, a708dd9a, 8593e234); "منذ 1977" → 1977 (57e0095c)
- [ ] Rename JZRA → "JZRA FASHION" (0d6c7ec3); env label "Sustainable Environmental Services & Renewable Energy" (99196eb9)
- [x] Remove duplicated divisions section; sector cards link to sector pages (e847b0a2, b1cc0e2c, fa9904ac)
- [ ] About: founders slider + dropdown items (467323f6, 030137aa, bd27f91b, ef4ad0c9, 6410f1cc)
- [ ] Our Brands page (6e30b5fc, c6186c2b)
- [ ] Our News page (e10e7ce2)
- [ ] About page "you are here" clear titles (0120594d)
- [ ] Contact: redesign compact + animated, info@ only (c44d2e2e, ec46c76a)

## Deferred / blocked
- Real catalogue, founders' names, partner logos, news items, registration number value — awaiting user material.
- Arabic versions of all new pages (i18n dictionaries updated in same pass where feasible).
- Smart AI assistant in footer (6e25e721) — needs scope decision; skipped for now.

## Sector polish (2026-10-16)
- [x] Read 6 uploaded sector briefs and rebuild /sectors pages from real content (all six, bilingual)
- [x] Add 6th sector (Food & Natural Products): route /sectors/food, nav dropdown, footer, homepage cards/stats/performance
- [x] Polish sector page layout (nav chevrons inline, tighter section index spacing, hover reveals)
- [ ] Reply on open sector-related comment threads if covered (blocked: remaining comment-fix campaign)

## Phase 7 — Products & brand marks
- [x] Add combined JZRA season, age and boys/girls photo filters (tested matching, empty selection and reset)
- [x] Footer tagline: general six-sector line (EN + AR)
- [x] JZRA logo on /sectors/garment hero (EN + AR)
- [ ] TIJARI + AZRA product pages: real photos and descriptions
- [ ] JZRA summer/winter galleries: replace AI samples with real photos
- [x] JZRA page: remove "Three lines, one standard"; add Summer + Winter groups, each with Casual (ages 2-5, 3-6, 6-12, 8-14, 14-18 for boys and girls) and Dresses (ages 2-5, 3-6, 6-12, 8-14, 14-18)

## Phase 8 — Products & homepage (2026-10-18)
- [x] Leadership names corrected to Abdulhakam Mashhour, Abdulrahman Sami Bin Ayyad, Abdullah Sami Bin Ayyad
- [x] Move homepage "Wholesale models, transparent pricing" section into the TIJARI tab on /products

## Mobile polish (2026-10-18)
- [x] Add scoped GSAP hero, section, card and chart animations on the group homepage; verify mobile, Arabic and reduced-motion behavior
- [x] Make navigation dropdown backgrounds glassy instead of white; verify opened menus
- [x] Phone-width pass across home, products, sector and contact pages: no horizontal overflow, no console errors
- [x] Section padding and section-title sizes reduced for 390px; section titles now use the heading font
- [x] Hero copy readable on phones (even vertical scrim) and both CTAs full width; sector hero same
- [x] Stats band: dividers on mobile, odd last cell spans full width and is centred; "6" stat corrected to "4"
- [x] About tabs and sector "In this sector" chips are single swipeable rows instead of jagged wraps
- [x] Leadership bios and performance-chart notes stay open on touch devices (hover-only reveal gated to hover-capable pointers)
- [x] Products: JZRA/TIJARI/AZRA tabs a compact 3-up row (descriptions on larger screens), season toggle a rounded segmented control, filters in one rounded card with pill selects, reset full width
- [x] Contact: form reaches the fields on the first screen on phones (model/MOQ/WhatsApp/next-steps notes moved under the form), dashed drop-zone upload with pill button, stacked submit row, larger checkbox and remove-file target
- [x] Phone menu language list opens upward so all six languages stay on screen
- [x] Arabic phone layouts verified: RTL alignment, swipeable rows, no overflow; desktop re-checked with zero overflow

## Home page edits (2026-10-18)
- [x] Polish the homepage email link with a compact icon layout and scoped GSAP entrance, pointer and keyboard-focus motion
- [x] Remove "Inside Our Factory / From design to finished garment" process section from group homepage (section, step buttons and image panel); dropped the now-unused step state and processSteps import from group-page.tsx. Verified live: section text absent in EN, no page errors, build OK.
- [x] Reference-inspired polish: sector top bar, page transitions, expanding sector panels, image reveals, journey strip, magnetic buttons

## Homepage sectors overview brief (done 2026-10-19)
- [x] Corporate intro "Driving Progress Across Industries" with scroll CTA
- [x] "Our Sectors at a Glance" — 4 editorial sector blocks (figures only where verified: construction 57+/EGP 400.5M, garment 5k/day-20k styles; enviro/food use expertise & category chips)
- [x] "Our Capabilities in Numbers" — 7 verified stats with animated counters
- [x] "Our Approach" — 4 value cards with icons
- [x] "Partnerships & Markets" + Discuss a Partnership CTA (no unverified logos)
- [x] Final CTA "Let's Build What's Next" (Contact + Explore Sectors)
- [x] Removed placeholder Group Performance chart; Latest News hidden (no published news)
- [x] Verified EN/AR RTL, sector links, mobile 390px, build + tests OK
