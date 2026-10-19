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
- Project search matches titles, descriptions, and tools; category buttons filter all 102 projects.
- Expand technical notes to view the original project overview and supporting images/videos.
- Move the mouse across the drawing to tilt the entire frame in perspective.
- Drag the drawing with the left mouse button to move it. A drag never opens a sheet.
- Zoom and flat view offer alternate views; Reset restores position, rotation, and zoom.
- Mouse-follow tilt is disabled when reduced motion is enabled; manual dragging remains available.

## Content

Content includes 102 projects, 9 publications, 7 career entries, portrait, skills, and contact details. Original project descriptions and repository links are retained, including projects that may be implementations of other researchers’ work. No new credentials, outcomes, or employment claims were added. Publication citation counts were omitted because the source is a historical snapshot.

Edit `data.js` for projects, publications, and career entries. Edit `app.js` for biography, skills, and contact sheet content; `style.css` controls the design. Assets are stored locally in this repository. Some original source image references may be unavailable; failed project previews hide gracefully.

This repository is ready for static hosting, including GitHub Pages. The `.nojekyll` file disables Jekyll processing; all runtime links are relative and support a `/portfolio/` project URL. No build step is required. Legacy helper scripts and data snapshots remain for reference; the live site loads only `app.js` and `data.js`. Deployment has not been performed.

See REFERENCE_ANALYSIS.md for the REA investigation and implementation choices.


## Capability universe

The Capabilities sheet includes ten revolving domain worlds that open capability popups, supporting tools, and project evidence. The full capability directory is also available through the Capabilities sheet. `capabilities.js` is the shared content source for both views; it is based on the saved career profile and repository evidence. Public descriptions preserve the selective professional-project presentation.

The field uses CSS lighting, perspective, orbital rings, and floating animation, without external assets or WebGL dependencies. Domain buttons support keyboard activation, expose their selected state, and remain usable on narrow screens. Pause orbit motion stops the floating animation; system reduced-motion preferences disable it automatically. The existing project archive and portfolio sheets are preserved.

Planets follow elliptical orbits around the center with upright labels and depth scaling. Hover or keyboard focus pauses the orbit for selection; opening a capability popup also pauses it. Close with Escape, the close button, or the backdrop. The motion toggle and reduced-motion preference remain supported.

The original staggered floating lift is retained on each planet alongside orbital travel. Subtle planet rotation adds dimensional motion; pause and reduced-motion controls cover both effects.

Open Capabilities from the main portfolio board or bottom navigation to explore the planetary field. The main page retains its original section board; the planetary view and expandable text directory are contained within Capabilities.

Project categories are floating 3D cards that open searchable category dialogs. Each project title opens a separate detail popup with its full original description, tools, repository link, technical overview, and available media. Escape or Close returns through the dialog stack. A motion toggle and reduced-motion support cover category cards.

Projects opens with category cards only. Project lists and search are contained in category popups; each domain card opens its own project list.

The All projects card has been removed. Seven category cards provide access to the archive, with stronger staggered floating, lateral drift, 3D tilt, and independent artwork motion. Hover/focus, pause controls, and reduced-motion support remain available.


## Langgraphics 3D

The project archive includes [Langgraphics 3D](https://github.com/antibloch/langgraphics), a modified open-source fork of [proactive-agent/langgraphics](https://github.com/proactive-agent/langgraphics). Its entry describes actual execution tracing, named tool calls, and prompt-dependent ReAct tool selection. The Agentic AI capability links to the project demo.

`assets/images/projects/langgraphics/demo-preview.jpg` is a frame extracted at three seconds from the news-versus-Lahore-weather comparison. The accompanying local MP4 is available in the project detail popup. Both assets are derived from the actual recorded demo.
