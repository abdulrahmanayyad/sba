# SBA Home — English

## Goal
Build the complete English home page at `/`, using the uploaded HTML as the visual/layout reference and the original SBA brief as the source of truth for brand rules and copy.

## What will be built
1. **Full-viewport hero**
   - Deep ink/green visual field with the supplied full SBA lockup, orange manufacturing line and tagline, supporting paragraph, primary Contact action, secondary Explore Models action, and bottom scroll cue.
   - Use an intentional framed media placeholder for the future hero photography/video rather than inventing factory imagery.
   - Adapt the shared header so it is transparent with light navigation over the hero, then switches to the solid page treatment after scrolling.

2. **Manufacturing scale**
   - Recreate the HTML reference’s strong editorial hierarchy: mono eyebrow, large left-aligned heading, supporting introduction, oversized `30,000` and `100` production figures, and dedicated classic-shirt facility feature.

3. **Capabilities and textile integration**
   - Build the “One Manufacturing Group. Multiple Capabilities”, “Fabric is where the product begins”, and “From Fabric to Finished Product” sections with alternating page/ink bands, precise hairline dividers, restrained SBA-green accents, and frame placeholders where the reference expects photography.

4. **Development and model-library preview**
   - Present the `20,000+ Designs` development story and the compact model-preview treatment shown in the reference.
   - Use styled 4:5 frame placeholders and non-broken in-page actions because the Models route is intentionally deferred.

5. **Manufacturing process**
   - Implement the reference’s horizontal/step-based “From Idea to Export” presentation with all ten stages from the brief/reference, clear numbering, and a future-page action that does not link to a missing route.

6. **Global presence**
   - Build the dark international-markets section with the France, Italy, Türkiye, and Saudi Arabia market list plus the Obour coordinates/map-style graphic treatment from the HTML reference.

7. **JZRA brand feature**
   - Use the supplied orange JZRA logo and verbatim brief copy.
   - Include the three-part business model, exhibition timeline with season labels, and Egypt/Türkiye sales-channel details.

8. **Why SBA and contact CTA**
   - Create the “More than a factory” value section and the final manufacturing inquiry band with Contact, WhatsApp, MOQ, and phone details.
   - Keep the existing global footer directly after the CTA.

9. **Motion and shared copy**
   - Add the specified subtle fade-and-24px-rise reveals with 80ms staggering and reduced-motion support.
   - Place English home copy in the established JSON localization structure; EN and untranslated FR/IT/TR/DE use this content. Arabic home-page translation remains deferred to the dedicated Arabic step, while the existing Arabic shell continues to work.

## Technical details
- Break the page into focused home-section components rather than one oversized route file.
- Extend only the semantic SBA tokens/utilities in the global design system; keep square corners, hairline borders, no shadows, and no decorative icons.
- Add Framer Motion for the specified reveals.
- Keep `/` metadata SBA-specific and update it for the completed Home content.
- Do not add a database, model routes, manufacturing route, contact form, or fabricated photography in this step.

## Verification
- Compare the implemented page against the uploaded HTML’s hierarchy, proportions, alternating section rhythm, and visual treatments.
- Verify desktop and mobile layouts, header transition, all in-page actions, model/process interactions, English and fallback-language content, no horizontal overflow, reduced-motion behavior, and a clean build/runtime state.
