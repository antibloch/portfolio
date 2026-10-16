# Reference investigation and reconstruction

Reference: https://futekov3216.github.io/Ilian-Futekov-Bio/
Inspected: 2026-10-17.

## Evidence and observations

REA controlled browser scenario evidence:
`ev_89afd3b7ddc22516aa210fce6106342c2d39200aaff27fc7992f7241e078eb8a`.
REA navigated a temporary headless Brave instance to the supplied URL and waited 3.5 seconds, capturing DOM, accessibility, and page errors. The DOM identified a Three.js r180 canvas, About/Experience/Education/Skills/Contact buttons, zoom range 1–3, reset, and view movement controls. No page errors were reported in that capture. This scenario did not exercise the reference’s individual sheets.

A Brave screenshot confirmed the tilted blueprint plane, raised rectangles, navy technical grid, cream outlines, orange accents, oversized heading, and blueprint dimension lines.

The delivered entry HTML references `assets/index-MJi6eCGJ.js` and `assets/index-CZvouNea.css`. Direct inspection of those delivered assets showed React rendering, a lazy-loaded `Blueprint-n2jApiiB.js` module, sheet components, timed open/close transitions, and Escape/arrow-key handlers. CSS defines Space Grotesk / IBM Plex Mono, dark navy colors, orange highlights, focus reticles, and unfolding sheet animations. These static observations do not prove every path executed.

REA static analysis of the downloaded blueprint bundle:
parent evidence `ev_4ddd3c6b6d51ab317fc59e8ba509b3371eb20439273c368d9bde83c92a665421`;
summary evidence `ev_fe5fcf3682cd7e96b2147724d5f32e54ff7d7372cea8620949bf21f13fa55754`.
REA parsed 527,068 bytes and 121,736 AST nodes with no parse failures. Coverage was partial: the selected source excluded the entry bundle and the semantic graph was capped at 1,000 nodes per file / 2,000 overall. Dynamic relationships remain unknown. No claim of full original source recovery is made.

## How to build this experience

1. Model the portfolio as numbered content sheets with a shared metadata registry.
2. Build a tilted drawing plane with individually selectable raised zones.
3. Give every visual zone an ordinary keyboard-operable navigation path.
4. Open content in a readable dialog; preserve focus, Escape, and previous/next controls.
5. Provide zoom, reduced motion, alternate flat view, and mobile layouts.
6. Keep factual content separate from presentation and use a static host.

For this reconstruction, CSS perspective and transforms replace the reference’s Three.js scene. Actual DOM buttons provide hover elevation and direct keyboard access without a WebGL dependency. The result reproduces the blueprint interaction concept rather than the exact rendering, joystick, raycasting, or cinematic transition system. No reference application code, branding assets, fonts, or analytics were incorporated.

## Adaptation to Junaid’s work

Six sheets: About, Projects, Experience, Skills, Publications, Contact. Education was replaced with publications because the supplied source did not contain a standalone education history. The projects sheet retains all source entries, category filters, text search, technical notes, images, videos, and repository links. Original career dates and contact details are preserved.

## Frame movement follow-up

A focused reread of the delivered blueprint bundle found `swayX` / `swayZ` animation in its render loop (up to 3° / 5°), a pointer-drag handler with an 8px threshold on compact viewports, and a pointer-operated movement stick with keyboard arrow support. The reference’s sway is time-driven; the inspected pointer handler pans rather than rotating the scene. A live Brave visit confirmed the movement stick’s accessible label.

The local portfolio now adds mouse-position-driven pitch/yaw/roll, screen-space drag panning, an 8px drag threshold, pointer capture, post-drag click suppression, and reset of position and rotation. Pointer tilt returns to neutral on leaving the stage and pauses in flat view, reduced-motion mode, and while a content sheet is open. This is an adaptation of the movement concept rather than an exact copy of the reference’s automatic sway and joystick.

## Original green visual direction

The current Living Systems design replaces the original blueprint styling with a forest-and-lime palette, serif editorial introduction, asymmetrical split layout, orbital outlines, soft dimensional modules, and a custom leaf favicon. Dialogs, search, filters, navigation, and responsive layouts use the same green identity. Pointer rotation, drag panning, zoom, reset, and flat view are retained.
