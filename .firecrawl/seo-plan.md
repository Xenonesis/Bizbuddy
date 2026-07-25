# SEO Audit Implementation Plan

## Context

Implement the high and medium impact fixes from the SEO audit of `bizbuddy.consulting`. All changes are within the Next.js 16 app router — metadata is managed via the `Metadata` API, schema via JSON-LD in layout/page components.

## Approach

Stage 1: Root-level technical SEO (sitemap, robots, canonical, OG, schema, lang).
Stage 2: Per-page metadata (`generateMetadata`) for every route.
Stage 3: Content/asset fixes (images, blog placeholder, FAQ schema).
Stage 4: Verification.

## Files to Modify

| File | Change |
|---|---|
| `app/layout.tsx` | Add `openGraph`, `twitter`, `canonical`, `metadataBase`, `lang="en-IN"`, `LocalBusiness` JSON-LD |
| `app/sitemap.ts` | **New** — auto-generated sitemap from route segments |
| `app/robots.ts` | **New** — allow all, point to sitemap |
| `app/not-found.tsx` | **New** — custom 404 page |
| `app/page.tsx` | Add `FAQPage` JSON-LD schema in FAQ section |
| `app/pricing/page.tsx` | Add `metadata` export with unique title/description + OG |
| `app/services/social-media/page.tsx` | Add `metadata` export for page |
| `app/services/accounts/page.tsx` | Add `metadata` export for page |
| `app/services/website-development/page.tsx` | Add `metadata` export for page |
| `app/services/editing/page.tsx` | Add `metadata` export for page |
| `app/services/other/page.tsx` | Add `metadata` export for page |
| `app/about/page.tsx` | Add `metadata` export for page |
| `app/contact/page.tsx` | Add `metadata` export for page |
| `app/testimonials/page.tsx` | Add `metadata` export for page |
| `app/portfolio/page.tsx` | Add `metadata` export for page |
| `lib/data.ts` | Download unsplash images to `/public/images/` and update src paths |
| `app/globals.css` | No change needed |

## Reuse

- Next.js `generateMetadata` API — server component function for per-page metadata
- Next.js `MetadataRoute.Sitemap` — type for `sitemap.ts`
- JSON-LD injected via `<script>` tag in layout/page components

## Steps

### Stage 1: Root Technical SEO

- [ ] **1a. Update root layout** — Add `metadataBase`, `openGraph`, `twitter`, `alternates.canonical`, change `<html lang="en">` → `<html lang="en-IN">`
- [ ] **1b. Add LocalBusiness schema** — JSON-LD script in `layout.tsx` with address, phone, opening hours from business data
- [ ] **1c. Create `app/sitemap.ts`** — Static sitemap covering all 12 routes
- [ ] **1d. Create `app/robots.ts`** — Allow all, sitemap reference
- [ ] **1e. Create `app/not-found.tsx`** — Simple branded 404 page

### Stage 2: Per-Page Metadata

Each page gets a `metadata` export (static) or `generateMetadata()` (if it needs dynamic data). Titles include price points where relevant.

- [ ] **2a. `app/pricing/page.tsx`** — "Social Media & Web Dev Pricing Plans (₹1,499–₹14,999) | BizBuddy"
- [ ] **2b. `app/services/social-media/page.tsx`** — "Social Media Management Starting ₹1,499/mo | BizBuddy"
- [ ] **2c. `app/services/accounts/page.tsx`** — "GST, ITR & EPF Filing Services (₹999+) | BizBuddy"
- [ ] **2d. `app/services/website-development/page.tsx`** — "Custom Websites Starting ₹3,999 | BizBuddy"
- [ ] **2e. `app/services/editing/page.tsx`** — "Reel Editing & Graphic Design (₹299+) | BizBuddy"
- [ ] **2f. `app/services/other/page.tsx`** — "Business Support Services | BizBuddy"
- [ ] **2g. `app/about/page.tsx`** — "About BizBuddy — Digital Solutions for Indian Businesses"
- [ ] **2h. `app/contact/page.tsx`** — "Contact BizBuddy — WhatsApp, Phone & Email Support"
- [ ] **2i. `app/testimonials/page.tsx`** — "Client Testimonials & Reviews | BizBuddy"
- [ ] **2j. `app/portfolio/page.tsx`** — "Portfolio & Case Studies | BizBuddy"

### Stage 3: Content & Assets

- [ ] **3a. Add FAQPage schema** — JSON-LD in `app/page.tsx` FAQ section using `FAQ_LIST` data
- [ ] **3b. Migrate images** — Download unsplash images to `/public/images/`, update `lib/data.ts` and component src refs
- [ ] **3c. Add alt text improvements** — Make portfolio image alt text more descriptive in `app/page.tsx`

### Stage 4: Verification

- [ ] **4a. Build check** — `pnpm build` passes without errors
- [ ] **4b. Metadata check** — `curl` each page, verify unique `<title>` and `<meta name="description">`
- [ ] **4c. Sitemap check** — `curl /sitemap.xml` returns valid XML
- [ ] **4d. Robots check** — `curl /robots.txt` returns directives
- [ ] **4e. OG check** — Verify `og:title`, `og:description`, `twitter:card` present in HTML
- [ ] **4f. Schema check** — Verify JSON-LD blocks present in rendered HTML

## Verification

```bash
pnpm build
curl -s https://bizbuddy.consulting | grep -oP '<title>[^<]+</title>'
curl -s https://bizbuddy.consulting/sitemap.xml | head -5
curl -s https://bizbuddy.consulting/robots.txt
curl -s https://bizbuddy.consulting/pricing | grep -oP '<title>[^<]+</title>'
```
