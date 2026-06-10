# JBL Headphones — Brand Landing Page

A premium dark-themed brand landing page for JBL audio products built with Next.js 16, React 19, and Tailwind CSS v4.

## Pages

| Route | Content |
|---|---|
| `/` | Home — Hero, Most Popular, Audio Features, New Arrivals, Noise Cancelling, Today's Offer, Coming Soon, Client Reviews, Delivery Banner, Newsletter, Footer |
| `/aboutus` | About — Page Banner, Our History (75 Years), What We Offer (tabbed categories), Newsletter, Footer |

## Tech Stack

- **Framework:** Next.js 16.2.7 (Turbopack, App Router)
- **UI Library:** React 19.2.4
- **Styling:** Tailwind CSS v4 with `@theme` tokens
- **Language:** TypeScript (strict)
- **Fonts:** Geist Sans (UI), Oswald (headings), Geist Mono (code) via `next/font`
- **Icons:** Lucide React
- **Linter/Formatter:** Biome 2.2.0
- **Compiler:** React Compiler (automatic memoization)

## Sections (Home Page)

- **Hero** — Full-screen split layout with headphone hero image and thumbnail strip
- **Most Popular Categories** — 5 product cards with SVG backgrounds, center card featured
- **Our Audio Does It All** — Split layout with 7 feature cards (3 staggered columns)
- **New Arrivals** — JBL Boombox 3 Wi-Fi spotlight with color picker and thumbnail navigation
- **Noise Cancelling Headphones** — 6-product grid with orange accent on first card
- **Today's Offer** — JBL Tune 770NC promo with "Save 20%" badge and thumbnail switcher
- **Coming Soon** — Countdown timer overlay section
- **Client Reviews** — Reviewer card with testimonial and quote accent
- **24H Delivery Banner** — Overlapping banner with purple gradient and scooter image
- **Newsletter Signup** — Sign-up form with email/password inputs
- **Footer** — Countries bar (6 flags), 5-column grid (JBL info, Shop, Support, About, Product Support), 8 brand logos, JBL watermark

## Sections (About Page)

- **Page Banner** — Hero banner with breadcrumbs and background image
- **Our History** — "Find Your True Sound" intro + "75 Years of JBL" timeline with interactive year navigation and tilted image cards
- **What We Offer** — 7-category tabbed section (Bluetooth, Headphones, Gaming, Home, Specialty, Car, Toyota Edition)
- **Newsletter** — Compact variant of the home page signup
- **Footer** — Reused from home page

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Action |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Biome lint check |
| `npm run format` | Biome format |

## Design

- **Theme:** Dark-first (`#0a0a0a` background), white text, orange (`#FF5A00` / `#E84B07`) as primary accent
- **Typography:** Bold uppercase Oswald headings, Geist Sans for body text
- **Layout:** Full-bleed sections with background images (`object-cover`), gradient overlays, and SVG wave dividers
- **Interaction:** Hover scale transitions, orange accent borders/rings, thumbnail navigation with active state highlighting
