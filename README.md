# Beauty In Stem — Korean Skincare (1:1 Replica)

A complete, high-fidelity replica of the award-winning **Beauty In Stem** ([stembeauty.com](https://stembeauty.com/)) website. Engineered with Korean skin fitness branding, fluid GSAP scroll interactions, Three.js interactive 3D WebGL sphere animations, and a fully functional shopping cart drawer.

---

## 🌟 Key Highlights & Included Features

1. **Exact 1:1 Design & Editorial Aesthetics**:
   - Original typography: **Degular Demo** & **Metropolis** fonts loaded locally (`.woff2`).
   - Signature brand palette: warm taupe, blush pink (`#D08C81`, `#E8C5C1`), deep charcoal espresso (`#331b0f`), off-white pearl background (`#F5F2F0`).
   - High-definition cinematic background video in the hero section.

2. **Interactive 3D WebGL Spheres (Three.js)**:
   - Bio-cellular PDRN spherical metaball simulation with custom Fresnel refraction, specular highlights, and real-time HDRI environment reflections.
   - Mouse-tracking interactive movement and scroll-driven morphing.

3. **Sticky 4 Essential Steps Regimen**:
   - Pinned 3D cellular animation that travels across the 4 skin fitness steps as you scroll:
     1. **Cleanse** — Hydra-Foam Cleanser
     2. **Activate** — Reset Serum
     3. **Recovery** — Hydra-Nutrition Essence
     4. **Maintain** — Eye & Lash Conditioner

4. **Working Shopping Cart Drawer**:
   - Slide-in cart sidebar with overlay backdrop.
   - Live counter badge (`SHOPPING CART ( n )`).
   - In-memory & `localStorage` persistence.
   - One-click upsells ("You May Also Like" carousel).
   - Dynamic subtotal and price recalculation.

5. **Multi-Page Storefront Architecture**:
   - `index.html` — Homepage
   - `science.html` — The Science of Skin Fitness
   - `us.html` — About Us
   - `shop.html` — Full Catalog Showcase
   - `products/` — Individual dedicated product pages for each item

---

## 🚀 How to Run Locally

### Option 1: Using Node.js Dev Server (Already Running)
```bash
npm run dev
# or
npm start
```
Then open your browser at:
👉 **[http://localhost:3000/](http://localhost:3000/)**

### Option 2: Direct Browser Viewing
You can open [index.html](file:///e:/e%20commerce/beautystem/index.html) directly in any modern browser (Chrome, Edge, Firefox, Safari).

---

## 📁 Project Directory Structure

```
beautystem/
├── assets/
│   ├── css/
│   │   └── app.css             # Main styling, responsive layout, animations
│   ├── fonts/                  # Metropolis & Degular Demo font files
│   ├── images/                 # HDRI maps, SVG icons, background vectors, logos
│   ├── js/
│   │   ├── vendors.js          # Three.js, GSAP, ScrollTrigger, Lenis smooth scroll
│   │   ├── app.js              # 3D sphere shaders, animations, interactive logic
│   │   └── mock-cart.js        # Client-side shopping cart engine
│   └── products/               # High-res product photography & gallery images
├── products/
│   ├── hydra-foam-cleanser.html
│   ├── reset-serum.html
│   ├── lash-and-eye-conditioner.html
│   └── hydra-nutrition-essence.html
├── index.html                  # Homepage (1:1 replica of stembeauty.com)
├── science.html                # Science page
├── us.html                     # About Us page
├── shop.html                   # Shop / Catalog page
├── server.js                   # Lightweight zero-dependency HTTP server
├── package.json                # Project scripts
└── README.md
```
