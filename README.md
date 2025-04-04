# oguzhanozenc.me – Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-2E3440?logo=tailwindcss)](https://tailwindcss.com/)
[![Contentful](https://img.shields.io/badge/Contentful-CMS-blue?logo=contentful)](https://www.contentful.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Overview

<a href="https://oguzhanozenc.me" target="_blank">
  <img src="/public/featuredImg.png" alt="Portfolio Preview" />
</a>

This is my personal portfolio website — built with **Next.js**, **Tailwind CSS**, and **Contentful CMS**. It serves as a dynamic, modular, and visually consistent platform to showcase my projects, journey, and resume. The design is inspired by modern apps and optimized for scalability, accessibility, and performance.

## Features

- 🧠 **Modular Components** with reusable UI (e.g., `ProjectCard`, `ExperienceItem`, `Avatar`, etc.)
- 📖 **CMS-Driven Content** via Contentful for Projects, Journey, Resume
- 🗞 **Print-Optimized Resume** with scoped styling and `@media print` support
- 🔀 **Route Groups** for separating layouts across main site and resume section
- 🌐 **SEO-Optimized** with structured metadata per page
- ⚡ **Fast, Client-Friendly Animations** using `PageTransition`
- 📈 **Vercel Deploy Hooks** for auto-builds triggered by Contentful
- 🖼 **Featured Image** on homepage and project thumbnails

## Tech Stack

- **Framework:** Next.js 15 (App Router, Server Components)
- **Routing:** Route groups (e.g., `(main)`, `(resume)`)
- **Styling:** Tailwind CSS
- **CMS:** Contentful
- **Deployment:** Vercel + Deploy Hooks
- **Fonts:** Inter, Roboto Mono (via Next.js font loader)

## Folder Structure

```bash
oguzhanozenc.me/
├── app/                         # App Router root
│   ├── (main)/                  # Main pages and layout
│   │   ├── layout.tsx           # Main layout (Navbar, Footer)
│   │   ├── page.tsx             # Home
│   │   ├── about/               # About section
│   │   ├── journey/             # Career timeline
│   │   ├── projects/            # Portfolio grid and details
│   │   └── contact/             # Contact form
│   ├── (resume)/                # Resume section
│   │   ├── layout.tsx           # Print-optimized resume layout
│   │   ├── resume/page.tsx      # Resume entry point
│   │   └── components/          # Modular resume components
│
├── components/                 # Global reusable components
├── lib/                        # Contentful client + helpers
├── public/                     # Static assets
├── styles/                     # Tailwind + print styles
├── .gitignore
├── README.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/oguzhanozenc/oguzhanozenc.me.git
cd oguzhanozenc.me

# 2. Install dependencies
yarn install

# 3. Run the development server
yarn dev

# Visit: http://localhost:3000
```

## Deployment (Vercel + Deploy Hooks)

- The site is deployed via [Vercel](https://vercel.com/), with automatic rebuilds triggered by Contentful webhooks.
- **Build command**: `yarn build`
- **Output directory**: `.next`
- Live: https://oguzhanozenc.me

## Contributing

1. Fork this repo
2. Create a new branch (`git checkout -b feature`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push branch (`git push origin feature`)
5. Open a Pull Request

## License

MIT License © 2025 Oguzhan Ozenc
