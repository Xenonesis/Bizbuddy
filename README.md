<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/BizBuddy-000?style=for-the-badge&logo=vercel&logoColor=white">
    <img alt="BizBuddy" src="https://img.shields.io/badge/BizBuddy-000?style=for-the-badge&logo=vercel&logoColor=white" width="200">
  </picture>
</p>

# BizBuddy — All-in-One Digital Business Platform

BizBuddy is a full-featured lead-generation website and service catalog for a digital solutions agency. It combines **social media management**, **accounting & tax compliance**, **web development**, **video editing**, and **business support** into one seamless platform — with real-time WhatsApp inquiries, an AI-powered quote calculator, and a future client dashboard.

Built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **Supabase**.

---

## ✨ Features

| Feature | Description |
|---|---|
| **Service Catalog** | 5 core service pages with tiered pricing, feature comparisons, and package details |
| **AI Quote Calculator** | Interactive bundle builder with auto-discounts when you combine services |
| **Lead Capture** | Consultation booking modal + lead intake form → Supabase |
| **WhatsApp Integration** | Pre-filled messaging for instant client connection |
| **Portfolio Showcase** | Filterable grid with client case studies and impact metrics |
| **Testimonials** | Verified client reviews with rating system |
| **FAQ Accordion** | 20+ searchable, filterable FAQs across all categories |
| **Dark Mode** | Full light/dark/system theme support persisted via zustand |
| **Device Mockup Hero** | Interactive MacBook + iPhone composite with live dashboard previews |
| **Client Dashboard** | Admin portal with lead management, analytics, and subscription tracking |
| **Razorpay Ready** | Payment gateway integration for online transactions |

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| **UI Library** | [React 19](https://react.dev) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) with CSS custom properties |
| **Typography** | Inter + JetBrains Mono via `next/font` |
| **Animations** | [Motion](https://motion.dev) (framer-motion v12) |
| **Icons** | [Lucide React](https://lucide.dev) + [React Icons](https://react-icons.github.io/react-icons) |
| **Backend** | [Supabase](https://supabase.com) (PostgreSQL, Auth) |
| **Forms** | React Hook Form + Zod |
| **Payments** | Razorpay SDK |
| **State** | Zustand |
| **Smooth Scroll** | Lenis |
| **3D / WebGL** | OGL |
| **Language** | TypeScript |
| **Package Manager** | pnpm |

---

## 📁 Project Structure

```
app/
├── page.tsx              # Homepage (hero, services, portfolio, testimonials, FAQ, CTA)
├── layout.tsx            # Root layout (fonts, theme, metadata)
├── globals.css           # Tailwind v4 imports, design tokens, utility classes
├── about/                # About page
├── contact/              # Contact form page
├── dashboard/            # Client admin dashboard
├── portfolio/            # Filterable case studies grid
├── pricing/              # Pricing plans + feature comparison table
├── services/
│   ├── social-media/     # Monthly SM plans (Basic/Super/Premium)
│   ├── accounts/         # Tax & compliance services
│   ├── website-development/ # Web dev packages
│   ├── editing/          # Reels, thumbnails, AI video
│   └── other/            # Printing, support, growth services
└── testimonials/         # Client reviews + review submission form

components/
├── Navbar.tsx            # Sticky nav with services dropdown + mobile drawer
├── Footer.tsx            # Footer with WhatsApp strip, sitemap, contact
├── DeviceMockupHero.tsx  # MacBook + iPhone composite with tabbed dashboards
├── ExpoBentoCard.tsx     # Reusable bento/card wrapper
├── BorderGlow.tsx        # Animated gradient border effect
├── QuoteCalculator.tsx   # AI quote builder with bundle discounts
├── FaqAccordion.tsx      # Searchable, categorized FAQ accordion
├── ConsultationModal.tsx # Booking modal → Supabase
├── LeadModal.tsx         # Lead capture modal
├── ThemeProvider.tsx     # Dark mode context (zustand)
├── ThemeToggle.tsx       # Light / Dark / System toggle
├── LayoutWrapper.tsx     # Injects modal handlers into all pages
└── LineWaves.tsx         # Animated background wave effect

lib/
├── data.ts               # All plans, services, FAQs, portfolio, testimonials
└── supabase.ts           # Supabase client + lead submission helper
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** 20+
- **pnpm** (`npm install -g pnpm`)

### Installation

```bash
pnpm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Supabase is optional — the app gracefully falls back to console logging if env vars are missing.

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
pnpm start
```

---

## 🌐 Routes Overview

| Route | Page |
|---|---|
| `/` | Homepage — hero, services, portfolio, testimonials, FAQ, CTA |
| `/pricing` | Monthly SM plans + feature comparison matrix |
| `/services/social-media` | Social media management plans |
| `/services/accounts` | GST, ITR, TDS, EPF, bookkeeping services |
| `/services/website-development` | Landing page, business site, e-commerce packages |
| `/services/editing` | Reels, thumbnails, AI video editing |
| `/services/other` | Printing, accounting support, growth services |
| `/portfolio` | Client case studies with filtering |
| `/about` | Company mission, stats, core values |
| `/testimonials` | Client reviews + review submission form |
| `/contact` | Contact form with WhatsApp fallback |
| `/dashboard` | Admin portal — lead list, analytics, services |

---

## 🎨 Design System

The UI follows an Expo-inspired design language:

- **Canvas**: Pure white / near-black (`#0c0d10`) in dark mode
- **Ink**: `#171717` / `#f4f4f5` (dark)
- **Primary CTA**: Pure black / pure white (dark)
- **Accent**: Blue link `#0d74ce` / `#38bdf8` (dark)
- **Typography**: Inter at 400/600 weights, JetBrains Mono for code
- **Surfaces**: Subtle borders (`#dcdee0` / `#27272a` dark), smooth hover transitions
- **Hero**: Radial sky-blue gradient wash + animated LineWaves background

Full design tokens in [`DESIGN.md`](./DESIGN.md).

---

## 📄 License

Private — all rights reserved.

---

<p align="center">
  Built with Next.js 16, React 19, Tailwind CSS 4 & Supabase.
</p>
