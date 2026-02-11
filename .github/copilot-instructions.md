<!-- Copilot instructions for AI coding agents working on this repository -->
# Copilot instructions — portfolio (static site)

Purpose
- Help AI coding agents make safe, precise edits to this small static portfolio site.

Big picture
- This is a single-page static portfolio: `index.html` (markup), `style.css` (presentation), `script.js` (behavior), and `html_finalprojimages/` (assets).
- No build system, no package manager, and no server-side code. Changes should preserve simple DOM-first patterns used in `script.js`.

Key files and examples
- `index.html`: contains site sections (About, Skills, Projects, Recommendations, Contact) and uses inline links and image references in `html_finalprojimages/`.
- `script.js`: minimal DOM manipulation. Primary functions:
  - `addRecommendation()` — reads `#new_recommendation`, appends a `.recommendation` div into `#all_recommendations`, and calls `showPopup(true)`.
  - `showPopup(bool)` — toggles `#popup` visibility.
  Example: When adding a recommendation the code creates an element via `document.createElement("div")` and sets `innerHTML`.

Conventions & patterns
- Keep changes simple and DOM-focused — prefer small, local edits to `script.js` that use `getElementById` / `querySelector` and append children rather than introducing frameworks.
- Follow existing class/id naming: `recommendation`, `all_recommendations`, `projects-container`, `profile_image`.
- Images live in `html_finalprojimages/`. Use relative paths (same folder) when adding assets.

Developer workflows
- No build step. To preview locally, open `index.html` in a browser or run a simple HTTP server (recommended) to avoid file-protocol quirks:
  - Python 3: `python -m http.server 8000` (run in repo root)
  - VS Code: use Live Server extension to serve the workspace.
- Debugging: use browser DevTools Console to inspect runtime errors. `script.js` logs to console with `console.log("New recommendation added")`.

Editing guidance for AI agents
- Preserve user-visible text and layout unless the change purpose is content updates.
- When editing `script.js`:
  - Keep function names stable (`addRecommendation`, `showPopup`) unless refactoring both markup and all call-sites.
  - Avoid changing how elements are selected (`getElementById("all_recommendations")`) unless you update the corresponding `id` in `index.html`.
  - When creating DOM elements, prefer building elements with `createElement` + `textContent` / `appendChild` to avoid XSS — do not trust unescaped user input.

Merging policy (if file already exists)
- If a `.github/copilot-instructions.md` exists, merge by preserving any project-specific notes and append missing items from this file. Keep the resulting file concise (20–50 lines).

What not to change
- Do not add complex tooling (Node, bundlers) or tests unless the user asks. This repo is intended as a static site.
- Do not modify external image URLs unless replacing them with local assets inside `html_finalprojimages/`.

If you need clarification
- Ask the human owner about any feature that requires new dependencies (e.g., adding a build tool, server, or third-party services). Provide a short plan and suggested commands.

Next steps for reviewers
- Confirm if you want progressive enhancement (e.g., store recommendations to backend) — if yes, request a separate plan to scaffold server code and API.

— end —
