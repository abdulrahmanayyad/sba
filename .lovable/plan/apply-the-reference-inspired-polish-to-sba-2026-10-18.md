# Apply the reference-inspired polish to SBA

Keep the SBA green/orange identity, glass menus, Arabic typography and four visible sectors. Borrow behaviour from the references, not their looks.

## 1. Sector pages get their own top bar (your earlier request)
- When a visitor opens one of the four sectors, the main bar (Home, About Us, ...) is replaced by a sector bar: SBA logo (back to home), sector name, links to that sector's sections (Overview, Services, Projects, Contact), a "Other sectors" switcher, language globe and a Request/Contact button.
- Same on phones: the menu shows the sector's sections plus a "Back to SBA Group" link.

## 2. Page transitions (Integra Magna)
- A short green curtain wipe with the SBA mark when moving between pages; direction flips in Arabic.
- Skipped for reduced-motion users.

## 3. Group and sector presentation (Pacific Partners)
- Homepage sectors section: large horizontal panels that expand on hover/tap, showing the sector photo, one-line summary and key figure.
- Stats band: horizontal counters with drawn divider lines.

## 4. Image motion (Dodivetro)
- Photos reveal with a clip-mask wipe and slight zoom-settle on sector pages and the JZRA gallery.
- JZRA filter changes cross-fade the photos instead of jumping.

## 5. Story moment (Ninth Seat)
- About section: a pinned "Our journey" strip on desktop where milestones advance while scrolling; a plain stacked list on phones. Milestone text will be placeholders until you send real dates.

## 6. Fine details (Harajuku)
- Magnetic hover on main buttons, underline draw on nav links, small arrow nudge on cards. Mouse only.

## Technical details
- Sector bar: `SiteShell` detects `/sectors/$slug` and renders a `SectorHeader` from `src/components/sectors`, using section ids already on the sector page.
- Transitions: a `PageTransition` overlay in the root shell, triggered via router `onBeforeNavigate`/`onResolved`, GSAP timeline with context cleanup.
- New motion attributes (`data-clip-reveal`, `data-magnetic`) handled inside `HomeMotion` variants and a light sector variant; all gated by `prefers-reduced-motion` and `can-hover`.
- Verify EN/AR, desktop and 390px with Playwright; update roadmap.md and AGENTS.md.
