# Beauty In Stem — Next.js, Tailwind CSS & Framer Motion Storefront

A luxury, high-fidelity e-commerce web application for **Beauty In Stem** ([stembeauty.com](https://stembeauty.com/)). Completely converted and engineered with **Next.js 14 (App Router)**, **Tailwind CSS v3.4**, **Framer Motion**, **TypeScript**, and **Three.js** interactive 3D bio-cellular simulations.

---

## 🌟 Tech Stack & Architectural Highlights

1. **Next.js 14 (App Router & React Server Components)**:
   - Full TypeScript architecture with SSG (Static Site Generation) across all routes.
   - Dynamic product routes with SEO OpenGraph metadata generation: `/products/[slug]`.
   - Client Component boundaries for interactive micro-animations and cart drawer.

2. **Tailwind CSS v3 (v3.4)**:
   - Custom curated luxury color palette: `stem-espresso` (`#331b0f`), `stem-taupe` (`#d08c81`), `stem-blush` (`#e8c5c1`), `stem-pearl` (`#f5f2f0`), and `stem-surface` (`#f7f5f3`).
   - Authentic typographic pairings: **Degular Demo** & **Metropolis** fonts loaded locally.
   - Glassmorphism navigation bar (`backdrop-blur-md`).

3. **Framer Motion**:
   - Slide-in shopping cart drawer with spring physics and backdrop blur.
   - Micro-interaction character stagger hovers and page transitions.
   - Interactive 4-step regimen switcher and tab animations.
   - Confetti checkout celebration.

4. **Three.js Interactive 3D Bio-Cellular WebGL Canvas**:
   - Translucent glassmorphic PDRN cellular spheres with real-time mouse interaction, orbital satellite motion, and specular reflections.

5. **Functional Cart Engine with LocalStorage Persistence**:
   - Dynamic live badge count in header.
   - Increment, decrement, and item removal.
   - Free shipping calculation with real-time progress bar.
   - One-click regimen upsell recommendations.
   - Promo code validation (`STEM10` for 10% off).

---

## 🚀 How to Run Locally

### Start Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Build Production Bundle
```bash
npm run build
npm start
```

---

## 📁 Project Directory Structure

```
beautystem/
├── public/
│   └── assets/             # HDRI maps, SVG icons, product photography & fonts
├── src/
│   ├── app/
│   │   ├── globals.css     # Tailwind CSS v3 base, components, and font faces
│   │   ├── layout.tsx      # RootLayout with CartProvider, Header, Footer
│   │   ├── page.tsx        # Homepage (Cinematic video hero, 3D Canvas, Regimen)
│   │   ├── science/        # The Science of PDRN Skin Fitness
│   │   ├── us/             # About Us & Heritage
│   │   ├── shop/           # Complete Catalog with category filtering & sorting
│   │   └── products/[slug]/# Dynamic Product Detail pages (SSG + metadata)
│   ├── components/
│   │   ├── Header.tsx      # Desktop & Mobile glassmorphic navigation
│   │   ├── Footer.tsx      # Newsletter, links, social & trademark
│   │   ├── CartDrawer.tsx  # Framer Motion slide-over cart drawer
│   │   ├── ProductView.tsx # Product detail interactive view
│   │   └── Spheres3D.tsx   # Three.js 3D bio-cellular canvas
│   ├── context/
│   │   └── CartContext.tsx # React Context with localStorage sync
│   ├── data/
│   │   └── products.ts     # Complete product catalog dataset
│   └── types/
│       └── index.ts        # TypeScript interfaces
├── tailwind.config.js      # Tailwind CSS v3 theme configuration
├── postcss.config.js       # PostCSS plugins
├── tsconfig.json           # TypeScript configuration
├── next.config.mjs         # Next.js configuration
└── package.json            # Scripts & dependencies
```
