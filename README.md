# Aagam Shah — Portfolio

A terminal-styled developer portfolio for **Aagam Shah** — Full-Stack Developer & AI/Backend Builder, Computer Engineering student at LJ University, Ahmedabad.

Built with **React 19 + TypeScript + Vite + Tailwind CSS 4**.

## ✨ What's inside

- **`~/about`** — who I am, interests, identity card, what I'm currently building
- **`~/toolbox`** — tech stack grouped by category + terminal-style skill bars
- **`~/projects`** — featured deep-dives (UniBridge, JCM) + the rest of the public repos
- **`~/github`** — **live** GitHub data: repo count, commits, stars, followers, a language bar computed from the real API, and a recency log of pushes (cached 1h in `localStorage`)
- **`~/connect`** — GitHub / LinkedIn links and a contact card

The design follows the aesthetic of my GitHub profile README: dark terminal, JetBrains Mono, `#00D9FF` accent, `build → break → understand → fix → ship`.

## 🚀 Run it

```bash
npm install
npm run dev      # http://localhost:5173
```

Production build:

```bash
npm run build    # type-check + build → dist/
npm run preview
```

## ✏️ Editing content

Almost every piece of content lives in **`src/data/profile.ts`** — name, roles, links, about text, projects, skills. Edit that one file to update the site.

## 📦 Deploying

The build output is a static `dist/` folder — deploy anywhere (Vercel, Netlify, GitHub Pages):

- **Vercel**: framework preset *Vite*, build command `npm run build`, output `dist`
- **GitHub Pages**: `npm run build` and publish `dist/`

## 🗂 Structure

```
src/
├── data/profile.ts        ← ALL site content
├── hooks/
│   ├── useInView.ts       ← scroll-reveal animations
│   └── useLiveStats.ts    ← live GitHub API + cache
├── components/
│   ├── Nav.tsx            ← fixed nav + scroll-spy
│   ├── Hero.tsx           ← hero + animated boot terminal
│   ├── About.tsx          ← ~/about
│   ├── Skills.tsx         ← ~/toolbox
│   ├── Projects.tsx       ← ~/projects
│   ├── GitHubStats.tsx    ← ~/github (live data)
│   ├── Contact.tsx        ← ~/connect
│   └── Footer.tsx
└── App.tsx
```

---

`// the next commit is already loading...`
