# Junaid Iqbal Khan — Living Systems

A local, self-contained portfolio with an original Living Systems identity: forest green, lime, editorial serif typography, orbital framing, rounded dimensional modules, and a full-width interactive canvas beneath a compact identity header. The interactive frame began as an adaptation of the reference’s engineering blueprint. Built with HTML, CSS 3D transforms, and vanilla JavaScript. No package installation, build step, CDN, analytics, or backend required.

## Run

```sh
cd /home/junaid/codework/portfolio
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765. Alternatively, open index.html directly (clipboard copying may require localhost).

## Explore

- Click a raised module or a bottom navigation button to open a sheet.
- Sections rise outward in a staggered loop and lift further on hover or focus. Pause Lift stops the loop; reduced-motion preferences disable it automatically.
- The frame has a full-width canvas, free of introduction-panel overlap and inner clipping.
- Escape closes the sheet; left/right arrows move between sheets.
- Use Tab and Enter for keyboard navigation. Native dialogs contain focus and return it to the trigger.
- Project search matches titles, descriptions, and tools; category buttons filter all 101 projects.
- Expand technical notes to view the original project overview and supporting images/videos.
- Move the mouse across the drawing to tilt the entire frame in perspective.
- Drag the drawing with the left mouse button to move it. A drag never opens a sheet.
- Zoom and flat view offer alternate views; Reset restores position, rotation, and zoom.
- Mouse-follow tilt is disabled when reduced motion is enabled; manual dragging remains available.

## Content

Content retained from the original portfolio: 101 projects, 9 publications, 7 career entries, portrait, skills, and contact details. Original project descriptions and repository links are retained, including projects that may be implementations of other researchers’ work. No new credentials, outcomes, or employment claims were added. Publication citation counts were omitted because the source is a historical snapshot.

Edit `data.js` for projects, publications, and career entries. Edit `app.js` for biography, skills, and contact sheet content; `style.css` controls the design. Assets are stored locally in this repository. Some original source image references may be unavailable; failed project previews hide gracefully.

This repository is ready for static hosting, including GitHub Pages. The `.nojekyll` file disables Jekyll processing; all runtime links are relative and support a `/portfolio/` project URL. No build step is required. Legacy helper scripts and data snapshots remain for reference; the live site loads only `app.js` and `data.js`. Deployment has not been performed.

See REFERENCE_ANALYSIS.md for the REA investigation and implementation choices.
