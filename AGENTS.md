<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture

- Keep shared localization in JSON dictionaries under `src/i18n`; this preserves one source for EN/AR UI copy and explicit English fallback languages.
- Render the site-wide header and footer from the root route through `SiteShell`; this guarantees consistent navigation and direction across future pages.
- Keep the long-form home experience in focused components under `src/components/home`; this keeps the index route limited to metadata and composition.
- Scope group and apparel homepage GSAP animations to `HomeMotion` with separate variants, context cleanup, locale remounting and reduced-motion matching; this prevents overlapping reveal engines, leaking scroll triggers and typography changes between pages.
- Use user-triggered Radix dialogs through `HomePopup` for homepage previews; this centralizes focus trapping, dismissal, and model inquiry links without interrupting browsing.
- Give every additional page its own route file plus a matching body component folder under `src/components/<page>`; this keeps route files limited to metadata, data loading and composition.
- When one route path is a prefix of another (for example `/models` and `/models/$code`), the shorter file renders only `<Outlet />` and the page body lives in the matching `*.index.tsx`; otherwise the parent component swallows the child and the detail URL renders the list.
- Keep shared page furniture — section headings, media placeholders, form field and label classes — in `src/components/site`, and keep catalogue search and ranking logic in `src/lib/models.ts`; this keeps page components free of duplicated copy and query code.
- The group homepage lives in `src/components/group` with sector content in `group-data.ts`; the textile/garment experience lives at `/apparel` so each division can grow its own page.
- Keep JZRA photo matching in `src/lib/jzra-catalogue.ts`, with explicit season, audience and age tags per photo; this supports multiple photos per selection without inventing age assignments for samples.
- Gate hover-only reveals behind the `can-hover` variant defined in `src/styles.css` so content stays open by default on touch devices; this keeps hover polish from hiding information on phones.
- Sector routes swap the group header for `SectorHeader`; shared motion lives in `src/components/site`, while the pinned journey owns its local lifecycle, so navigation cleans up each engine.
- Define sector-specific navigation in `sector-navigation.ts`, render it through `SectorHeader`, and keep labels in shared EN/AR dictionaries with anchors matching sector data; this keeps desktop and mobile menus consistent without duplicated sector branches.
- Shared `Reveal` renders GSAP markers managed by `MotionEnhancer`, including dynamically inserted content; exclude homepage-owned transforms to prevent competing animation engines.
- Use `AnimatedPanel` for navigation panel entrances, Escape dismissal and mobile focus boundaries; this keeps group and sector menus accessible and consistent.
- Subscribe the brand curtain to router navigation and resolution events, with a timeout fallback; this covers page loading without trapping visitors behind an overlay.
- Keep formatted statistic counting in `AnimatedStatistic`, preserving the original value and accessible label; this prevents suffixes or company figures from being altered by motion.
