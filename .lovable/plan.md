# Add Work/Projects Section

## Goal

Add a polished, scannable Work/Projects section to the portfolio featuring 2–4 project cards, each linking to its own detail page.

## Plan

### 1. Create the Projects list component

- **File:** `src/components/portfolio/Projects.tsx`
- A new section card following the existing design language (rounded-2xl, border, shadow-sm, SectionHeader).
- Display 3 featured projects in a responsive grid (1 col mobile → 2 cols tablet → 3 cols desktop):
  1. **Location-Based Attendance Application** (thesis) — web-based attendance using Geolocation API for SMAN 5 Pinrang.
  2. **Operational Data Management System** — data processing & reporting workflows at Puskesmas Suppa.
  3. **Mass Payment Digital Administration** — digital SPPD & travel expense management at Kelurahan Galung Maloang.
- Each card shows: project title, 1-line description, tech tags, and a "View details →" link.

### 2. Create individual project detail routes

- **Files:** `src/routes/projects.$projectId.tsx` and `src/routes/projects.index.tsx`
- `projects.$projectId.tsx`: Dynamic route that renders full project detail based on the `projectId` param.
  - Includes: hero title, detailed description, tech stack tags, key features bullet list, outcome/results, and a "Back to projects" link.
- `projects.index.tsx`: A dedicated `/projects` landing page that lists all projects with the same cards (useful for direct navigation and SEO).
- Both pages use the same project data array for consistency.

### 3. Wire navigation

- **File:** `src/components/portfolio/Nav.tsx`
- Add a `{ href: "#projects", label: "Projects" }` link in the anchor list (between Experience and Skills).
- Ensure mobile/responsive behavior remains intact.

### 4. Integrate into the home page

- **File:** `src/routes/index.tsx`
- Insert `<Projects />` between `<Experience />` and `<Skills />`.
- The section uses `id="projects"` for anchor scrolling.

### 5. Add route tree entries

- The TanStack Router plugin auto-generates `routeTree.gen.ts` from new route files, so no manual edits are needed there.

## Out of Scope

- No backend / database — project data is a static const array shared between components.
- No external demos or live links assumed; detail pages are self-contained.
- No heavy animations; keep the existing subtle, professional feel.
