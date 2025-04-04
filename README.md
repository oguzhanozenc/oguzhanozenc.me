# oguzhanozenc.me – Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-2E3440?logo=tailwindcss)](https://tailwindcss.com/)
[![Contentful](https://img.shields.io/badge/Contentful-CMS-blue?logo=contentful)](https://www.contentful.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Overview

<a href="https://oguzhanozenc.me" target="_blank">
  <img src="/public/featuredImg.png" alt="Portfolio Preview" />
</a>

This is my personal portfolio website — built with **Next.js**, **Tailwind CSS**, and **Contentful CMS**. It serves as a dynamic, modular, and visually consistent platform to showcase my projects, journey, and resume. The design is inspired by modern SaaS products and optimized for scalability, accessibility, and performance.

## Features

- 🧠 **Modular Components** with reusable UI (e.g., `ProjectCard`, `ExperienceItem`, `Avatar`, etc.)
- 📖 **CMS-Driven Content** via Contentful for Projects, Journey, Resume
- 🧾 **Dynamic Routing** with Next.js App Router + Layouts
- 🌐 **SEO-Optimized** with structured metadata per page
- 🧰 **Developer-Friendly Architecture** for future scalability
- 📈 **Vercel Deploy Hooks** for auto-builds triggered by Contentful
- 🖼 **Featured Image** on homepage and project thumbnails

## Tech Stack

- **Framework:** Next.js (with TypeScript)
- **Routing:** Next.js App Router
- **Styling:** Tailwind CSS
- **CMS:** Contentful
- **Deployment:** Vercel + Deploy Hooks
- **Fonts:** Inter, Roboto Mono (via Next.js fonts)

## Folder Structure

```bash
oguzhanozenc.me/
├── app/                   # App Router entry
│   ├── layout.tsx         # Global layout
│   ├── page.tsx           # Home
│   ├── about/page.tsx     # About page
│   ├── journey/page.tsx   # Career timeline
│   ├── projects/page.tsx  # Portfolio grid
│   ├── project/[slug]/page.tsx # Project detail page
│   ├── resume/page.tsx    # Resume
│   ├── contact/page.tsx   # Contact form
│   └── not-found.tsx      # 404 page
│
├── components/            # Reusable UI components
├── data/                  # Local static config and types
├── lib/                   # Contentful client + helpers
├── public/                # Static assets (images, favicons)
├── styles/                # Tailwind global styles
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Getting Started

```bash
# 1. Clone the repo
$ git clone https://github.com/oguzhanozenc/oguzhanozenc.me.git
$ cd oguzhanozenc.me

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
