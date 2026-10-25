# SBA Step 1 — Brand shell and bilingual navigation

## Scope
Build only the shared SBA foundation requested in Step 1. The page body remains intentionally empty so the English and Arabic header/footer states can be reviewed without any page sections.

## Implementation
1. **Apply the SBA design system**
   - Keep the existing React 19, Vite, TanStack Start, Tailwind CSS v4, and shadcn-compatible setup already present in the project.
   - Translate the brief’s `brand.css` and Tailwind extension values into the existing Tailwind v4 token system: SBA green/orange scales, ink/page/frame/muted/stone roles, 1440px container, responsive gutters and section spacing.
   - Load Readex Pro, Cairo, and JetBrains Mono through document-head Google Fonts links.
   - Set Readex Pro for headings, Cairo for body/navigation/buttons, JetBrains Mono for labels, and force square corners globally and in shared controls.
   - Preserve the brief’s hairline-border, no-shadow, no-gradient visual direction.

2. **Add and prepare brand artwork**
   - Store the supplied SBA mark, full lockup, and JZRA logo through the project’s asset flow for use by the app.
   - Create the required real square favicon from the SBA mark and remove the template favicon.
   - Use the supplied raster files because no SVG or separate white-mark file was attached; the header/footer treatment will keep the supplied mark legible without inventing a replacement logo.

3. **Create localized shared copy**
   - Add separate English and Arabic JSON dictionaries for navigation, footer labels, accessibility text, and the supplied footer copy.
   - EN and AR switch immediately in place; AR applies `lang="ar"` and `dir="rtl"` to the whole document and mirrors layout/alignment.
   - FR, IT, TR, and DE remain selectable but intentionally resolve to English copy with a visible “Coming soon” status, as required by the brief.

4. **Build the fixed header**
   - 76px SBA-mark header with centered primary navigation, language switcher, one orange Contact Us action, and the specified transparent-to-solid scroll treatment.
   - “More” exposes About, Clients & Projects, and Quality.
   - Mobile and tablet layouts use a full-screen accessible menu with focus handling, close controls, and language selection.
   - Because Step 1 creates no destination pages, navigation is presented without introducing broken page routes; route targets can be activated as their pages are built.

5. **Build the footer**
   - Dark ink footer using the SBA mark only, the supplied manufacturing descriptor, restrained link columns, all supplied phone/email/social/website details, and the same language switcher.
   - Translate structural labels and navigation into Arabic while preserving proper nouns, addresses, contact values, and brand handles.

6. **Create the empty review page**
   - Replace the starter placeholder with a minimal full-height empty content area between the shared header and footer.
   - Add unique SBA metadata for the home route and remove template Lovable metadata.
   - Ensure the footer sits at the bottom on short screens and the fixed header does not cover the empty content.

## Verification
- Check the live page in English and Arabic on desktop and mobile, including RTL mirroring, document language/direction, header scroll state, More menu, mobile menu, and every language option.
- Confirm FR/IT/TR/DE show English fallback with the coming-soon state.
- Confirm fonts, exact brand colors, square corners, logo clarity, contact links, keyboard access, no overflow, no runtime errors, and a successful preview build.

## Intentionally deferred
No Home sections, model pages, manufacturing page, contact form, photography, model data, database, or storage integration will be added in this step.
