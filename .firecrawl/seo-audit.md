# SEO Audit: bizbuddy.consulting

**Date:** 2026-07-25
**Tool:** Firecrawl + manual source code review + SERP analysis

---

## Executive Summary

BizBuddy has solid on-page fundamentals (clean metadata, semantic HTML, fast Next.js stack) but misses several **high-impact SEO opportunities** that competitors are already exploiting. The most critical issues are missing structured data, absent social meta tags, and a brand-name collision with an existing `bizbuddy.co.in`. The biggest opportunity is the **aggressive price advantage** (₹1,499–₹2,499 vs. market ₹5,000–₹1,00,000) — currently not used in any title/meta strategy.

**Top risks:**

1. Competitor `bizbuddy.co.in` (Gujarat-based agency, 14 years old) already ranks for "BizBuddy" brand searches
2. Zero schema markup — no LocalBusiness, Service, or FAQ structured data
3. No Open Graph / X (Twitter) cards — social shares get blank previews
4. No blog/content engine — missed organic keyword surface area

**Top opportunities:**

1. Price dominance message in titles/metas ("Starting at ₹1,499/mo")
2. FAQ page has 20+ answers primed for FAQ schema
3. Next.js stack enables instant technical SEO wins (sitemap, robots, metadata API)

---

## Site Structure

| Property | Status |
|---|---|
| Pages discovered | 11 |
| URL pattern | Clean `/services/{slug}` hierarchy |
| Sitemap.xml | ❌ Missing |
| Robots.txt | ❌ Missing |
| Canonical tags | ❌ Missing |
| WWW redirect | ⚠️ `www.bizbuddy.consulting` also resolves |
| HTTP→HTTPS | ✅ |
| PageSpeed (estimated) | 90+ (Next.js static rendering) |

**Discovered URLs:**

- `/` — Homepage
- `/pricing` — Pricing plans
- `/portfolio` — Portfolio showcase
- `/testimonials` — Client testimonials
- `/about` — About page
- `/contact` — Contact form
- `/dashboard` — Client portal
- `/services/social-media` — SMM plans
- `/services/accounts` — Tax & accounting
- `/services/website-development` — Web dev packages
- `/services/editing` — Reel & video editing
- `/services/other` — Other business support

---

## On-Page SEO

### Metadata

| Page | Title Tag | Meta Description | H1 |
|---|---|---|---|
| `/` | ✅ "BizBuddy - Digital Marketing, Accounts, Web Dev & Business Growth" (52 chars) | ✅ "BizBuddy is an all-in-one digital business solutions platform. Monthly Social Media Management (₹1499+)..." (158 chars) | "Grow your business with marketing, tax compliance & custom websites." |
| `/pricing` | ⚠️ Inherits global title "BizBuddy - Digital Marketing..." | ⚠️ Inherits global description | "Simple plans for every stage of your business." |
| `/services/social-media` | ⚠️ Same global fallback | ⚠️ Same global fallback | "Social Media Management & Viral Reels Editing" |
| `/services/accounts` | ⚠️ Same global fallback | ⚠️ Same global fallback | "Accounts, GST & Tax Compliance Solutions" |
| `/services/website-development` | ⚠️ Same global fallback | ⚠️ Same global fallback | "Fast, Responsive Websites That Convert Visitors into Clients" |
| `/contact` | ⚠️ Same global fallback | ⚠️ Same global fallback | "We are here to help your business grow." |
| `/about` | ⚠️ Same global fallback | ⚠️ Same global fallback | "Empowering Indian Businesses to Scale Digitally" |

**Issue:** All sub-pages inherit the root layout's global metadata. No per-page `generateMetadata` export. Each page should have its own unique title/description.

### Open Graph & Twitter Cards

❌ **Completely missing.** No `og:title`, `og:description`, `og:image`, `twitter:card` in any page. Social shares render as bare URLs with no preview.

### Headings Hierarchy

✅ Generally good — single H1 per page, H2 for sections, H3/H4 for cards. Homepage uses clear hierarchy.

### Image Alt Text

⚠️ Portfolio images (`app/page.tsx`, `app/dashboard/page.tsx`) use `<img src={item.image} alt={item.title}>` — alt text is present but not descriptive for SEO (uses title, not a description).

❌ Avatar images in testimonials use `alt={item.name}` — good for accessibility but could be more descriptive.

### Content Quality

✅ Strong, unique content across all pages. FAQ section (20 questions) is excellent for long-tail capture.

❌ **No blog.** Zero ongoing content production means no organic keyword growth engine.

---

## Technical Issues

### 1. Missing Structured Data (JSON-LD) — HIGH IMPACT

No schema markup of any kind. The site is a perfect candidate for:

- `LocalBusiness` — "Tech Tower, Cyber Hub, MG Road, New Delhi"
- `Service` — social media management, tax filing, web development
- `FAQPage` — 20+ Q&A pairs already exist on the homepage
- `Product` — pricing plans with amounts
- `Review` — client testimonials with ratings

### 2. Missing Sitemap & Robots — HIGH IMPACT

No `/sitemap.xml` or `/robots.txt`. Next.js can auto-generate both via `app/sitemap.ts` and `app/robots.ts`.

### 3. No Canonical URLs — MEDIUM IMPACT

Both `bizbuddy.consulting` and `www.bizbuddy.consulting` resolve. Without canonicals, search engines may split ranking signals.

### 4. External Image Hosting — MEDIUM IMPACT

Portfolio and testimonial images use `images.unsplash.com` CDN URLs. These are not controllable, could go down, and miss self-hosted optimization.

### 5. Missing Hreflang — LOW IMPACT

Site serves Indian audience in English. No `hreflang="en-in"` tag.

### 6. Missing Language Attribute Optimization — LOW IMPACT

`<html lang="en">` — should be `<html lang="en-IN">` for Indian English targeting.

---

## Keyword Opportunities

### Current keyword footprint (inferred from content)

| Keyword | Present on | Competitor pricing |
|---|---|---|
| social media management India | Homepage, Pricing, Services/Social | ₹5,000–₹1,00,000/mo |
| GST return filing | Services/Accounts, FAQ | ₹499–₹999/mo |
| ITR filing online | Services/Accounts | ₹500–₹2,000/yr |
| website development India | Services/Web-Dev | ₹15,000–₹2,50,000 |
| reel editing service | Services/Editing | ₹500–₹3,000/reel |
| EPF return filing | Services/Accounts | ₹500–₹1,500/mo |

### Missing content gaps

| Keyword | Why important | Action |
|---|---|---|
| "affordable social media management India" | High intent, low competition | Add phrase to homepage H1 or meta |
| "social media marketing for restaurants" | Specific vertical targeting | Dedicated landing page |
| "GST filing for small business India" | High volume | Add to Accounts page |
| "website for clinic near me" | Local SEO | Location pages |
| "Instagram reel editing service India" | Service specific | Improve Editing page SEO |

### Price Advantage — NOT USED IN SEO

BizBuddy charges ₹1,499–₹2,499/mo for SMM. Market average is ₹5,000–₹1,00,000/mo. **This is the single biggest differentiator** — yet no title or meta mentions pricing. Consider:

- Title: "Affordable Social Media Management Starting at ₹1,499/mo | BizBuddy"
- Meta: "Get social media management, tax filing & websites from ₹1,499/mo. Trusted by 250+ Indian businesses."

---

## Competitor/SERP Comparison

| Competitor | Strength | BizBuddy Gap |
|---|---|---|
| **bizbuddy.co.in** (Gujarat, 14yr old) | Same brand name, 14yr domain age, higher DA | Brand confusion — could lose traffic to this competitor |
| Lemon Bomb (Delhi SMM agency) | Blog content, location-specific pages | No blog, no location pages |
| TaxRobo (GST filing) | Strong category-specific domain, schema markup | No schema, no dedicated tax content |
| BuildByRaviRai (web dev) | Detailed pricing guides, blog | No blog/guide content |

---

## Prioritized Recommendations

### HIGH IMPACT (fix this week)

| # | Issue | Fix | Files |
|---|---|---|---|
| 1 | **No per-page metadata** | Add `generateMetadata()` or `metadata` export to every page file | `app/pricing/page.tsx`, `app/services/*/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`, etc. |
| 2 | **No schema markup** | Add `JSON-LD` for LocalBusiness + FAQPage + Service + Product | `app/layout.tsx` or individual page components |
| 3 | **No sitemap/robots** | Create `app/sitemap.ts` and `app/robots.ts` | New files |
| 4 | **No OG/Twitter cards** | Add `openGraph` and `twitter` to root metadata + per-page | `app/layout.tsx` (root), each page (per-page) |

### MEDIUM IMPACT (fix this month)

| # | Issue | Fix | Files |
|---|---|---|---|
| 5 | **Same-name competitor exists** | Add brand-specific meta ("BizBuddy.consulting — NOT bizbuddy.co.in") and trademark indicators | `app/layout.tsx` |
| 6 | **No canonical tags** | Add `alternates: { canonical: ... }` to metadata | `app/layout.tsx` |
| 7 | **Portfolio images on external CDN** | Download unsplash images to `/public/images/` and update src | `lib/data.ts` + app/page.tsx |
| 8 | **Language tag too broad** | Change `<html lang="en">` to `<html lang="en-IN">` | `app/layout.tsx` |

### LOW IMPACT (nice to have)

| # | Issue | Fix | Files |
|---|---|---|---|
| 9 | **Hreflang missing** | Add `alternates: { languages: { 'en-IN': '...' } }` | `app/layout.tsx` |
| 10 | **No blog** | Create `/blog` route with MDX content — even 4-5 posts on "Social Media for Restaurants" etc. | New structure |
| 11 | **FAQ rich snippet not active** | Already have 20+ Q&A — add `FAQPage` schema | `app/page.tsx` (FAQ section) |
| 12 | **No 404 page** | Add `app/not-found.tsx` | New file |

---

## Sources

- `https://bizbuddy.consulting` — homepage scraped via Firecrawl
- `https://bizbuddy.consulting/pricing` — pricing page content
- `https://bizbuddy.consulting/services/social-media`
- `https://bizbuddy.consulting/services/accounts`
- `https://bizbuddy.consulting/services/website-development`
- `https://bizbuddy.consulting/contact`
- `https://bizbuddy.consulting/about`
- Source code: `app/layout.tsx`, `app/page.tsx`, `app/pricing/page.tsx`, `components/` directory
- SERP analysis: Web search for target keywords and competitor sites

## Rerun Inputs

```yaml
workflow: firecrawl-seo-audit
site: https://bizbuddy.consulting
keywords:
  - social media management India
  - GST filing service
  - website development India
  - affordable digital marketing agency
  - Instagram reel editing service
output: markdown
```
