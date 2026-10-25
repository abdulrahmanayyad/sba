# Header, About page and font fixes

## 1. Separate About Us page
- New page at `/about` (EN/AR) holding the About content currently on the homepage: Who We Are, What We Do, Our Approach, Our Values, Why SAMI BIN AYYAD, Company Leadership, Governance, Policies.
- Existing text and leadership cards are moved as-is; missing items (Governance, Policies) get clearly marked placeholders.
- The "About Us" menu items and footer link open sections of the new page instead of homepage anchors.
- Homepage keeps a short About teaser with a "Learn more" button to `/about` (no duplicated full content).

## 2. Same fonts everywhere
- Audit headings and body text on Home, About, sectors, products, partners, news and contact; make every page use the same heading font (Readex Pro) and body font (Cairo), with the same heading sizes/weights through the shared title styles.

## 3. Sector top bar
- Center the sector links in the bar (logo left, links center, quote button and language right; mirrored in Arabic).
- Add a "Home" link as the first item, desktop and phone menu.
- Remove the thin vertical line next to the logo.
- Rename "Our Experience & Projects" to "Our Projects" (Arabic: "مشاريعنا").

## Technical details
- `src/routes/about.tsx` + `src/components/about/about-page.tsx`; reuse data from `group-data.ts`; head() metadata.
- `site-shell.tsx`: About links → `/about#<id>`.
- `sector-header.tsx`: delete divider span; three-column flex layout with `mx-auto` nav; Home link; i18n `constructionNav.experience` updated in en/ar.json.
- Replace any hardcoded font classes with `font-head`/`font-body` tokens.
- Verify with Playwright in EN/AR, desktop and phone; update sector-navigation test.
