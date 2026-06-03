
## Goal
A single-page, responsive portfolio with anchor navigation between sections. Professional palette: deep navy, white, subtle gray, with a refined accent. Restrained motion, strong typography hierarchy, highly scannable.

## Design Direction
- Palette: deep navy `#0F1B3D` primary, white background, soft gray surfaces, muted slate text, single subtle accent (cool steel blue) for links/badges.
- Typography: "Instrument Serif" for display headings paired with "Inter" for body — gives an editorial-yet-technical feel, professional and not generic.
- Layout: generous whitespace, single-column with content max-width ~1100px, clear section dividers, sticky minimal top nav.
- Motion: only subtle fade-in on scroll for sections, hover states on cards/buttons. No parallax, no heavy animations.

## Sections (single page, `src/routes/index.tsx`)

1. **Top Nav** — Name/logo left, anchor links right (About, Experience, Skills, Contact). Mobile: condensed.

2. **Hero**
   - Two-column on desktop, stacked on mobile.
   - Left: name (display serif), role subtitle, short bio, "View Work" (primary) + "Contact Me" (outline) CTAs.
   - Right: circular/rounded-square photo placeholder (neutral silhouette avatar generated as asset — clearly a placeholder so user can swap in real photo).

3. **About & Education**
   - Short intro paragraph.
   - Education card: Degree, university, GPA badge.
   - Thesis highlight card: title + description of geolocation/web-based attendance system.

4. **Work Experience**
   - Vertical timeline (left rail with dots) of two entries:
     - Operator Bendahara — Puskesmas Suppa — Mar 2025–Present.
     - Internship — Kantor Kelurahan Galung Maloang — Sep–Oct 2023.
   - Each entry: role, organization, dates, bulleted responsibilities.

5. **Skills & Certifications**
   - Three categorized blocks (Tech & Web / Data & Office / Soft Skills) shown as badge grids.
   - Certification highlight card for VSGA — Operator Komputer Madya.

6. **Contact**
   - Left: email, phone, location with icons (Lucide).
   - Right: functional contact form (name, email, message) with Zod validation; on submit shows a success toast via sonner (no backend wired — client-only acknowledgement, mentions email as fallback).

7. **Footer** — name, © year, simple.

## Technical Details
- Stack: existing TanStack Start + Tailwind v4 + shadcn/ui.
- Update `src/styles.css` `:root` tokens to the navy/white/gray palette (oklch), keep `@theme inline` mapping intact. Add Google Fonts via `<link>` in `__root.tsx` head.
- Update `src/routes/index.tsx` head meta (title, description, og tags) for SEO. Single H1 in hero.
- Build small components under `src/components/portfolio/`: `Nav.tsx`, `Hero.tsx`, `About.tsx`, `Experience.tsx`, `Skills.tsx`, `Contact.tsx`, `Footer.tsx`.
- Use shadcn `button`, `card`, `badge`, `input`, `textarea`, `label`, `sonner` (Toaster added in root).
- Contact form: client-side Zod validation, no server function (per "UI only").
- Generate one placeholder profile image asset (neutral, professional avatar illustration) into `src/assets/`.
- Accessibility: semantic landmarks (`<header>`, `<main>`, `<section aria-labelledby>`, `<footer>`), alt text, focus states.
- Responsive: mobile-first; verified at 390px and desktop widths.

## Out of Scope
- No backend, no auth, no database — contact form is client-only.
- No animations beyond subtle fade/hover.
