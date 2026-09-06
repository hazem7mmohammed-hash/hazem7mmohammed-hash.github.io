# Portfolio — Video Editor

A bilingual (English / Arabic) portfolio website for a video editor, built with React + Vite + TypeScript.

## Quick start

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Customize it

Everything editable lives in `src/content.ts`. That single file holds your name, role, email, social links, projects, experience and skills.

### 1. Your identity
Open `src/content.ts` → `PROFILE`:

- `name` — your real name
- `role` — localized role (`en` / `ar`)
- `email` — contact email
- `location` — localized location line
- `socials` — replace the `yourname` placeholder URLs

### 2. Your videos
Place MP4 files in `public/videos/`:

| File (inside `public/videos`)   | Used for                 |
| ------------------------------- | ------------------------ |
| `showreel.mp4`                  | The featured Showreel    |
| `project-1.mp4` … `project-6.mp4` | The portfolio grid   |

Recommended: 1080p H.264, keep each clip under ~50MB, use a `.mp4` (`video/mp4`).

### 3. Posters / thumbnails (optional)
Drop poster images in `public/projects/` and reference them in each project's `poster` field, e.g.:

```ts
poster: '/projects/summer-campaign.jpg'
```

Without a poster, cards show a styled gradient placeholder automatically.

### 4. Content
- `PROJECTS` — portfolio grid (title, category, description, tools, duration, year)
- `EXPERIENCE` — CV timeline
- `SKILL_GROUPS` — skill bars

All text fields that are localized look like `{ en: '...', ar: '...' }`.

### 5. Language
Click the `عربي / EN` pill in the nav to switch languages (RTL auto-flips). The choice is saved in `localStorage`.

## Deployment (recommended: Vercel)

1. Push this folder to a GitHub repo
2. On vercel.com → New Project → Import the repo
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy — every push to `main` redeploys automatically

Netlify works the same way (build `npm run build`, publish `dist`).

Vercel free tier will happily serve your portfolio; keep clips compressed to control bandwidth.