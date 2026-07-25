# Vercel React Best Practices — Audit & Fix Plan

## Context

Auditing **BizBuddy** (`next 16.2.10`, `react 19.2.4`, Tailwind v4, Turbopack) against the [Vercel React Best Practices](https://github.com/vercel/react-best-practices) skill (70 rules across 8 categories). Goal: apply the highest-impact fixes first.

## Approach

Run automated static analysis (regex/heuristic) on all `.tsx`/`.ts` source files (27 files, ~5.3K total LoC), then validate each candidate with manual rule file review to eliminate false positives. Apply fixes prioritized by rule category (CRITICAL → HIGH → MEDIUM).

## Files to Modify

| File | Rules to fix |
|---|---|
| `components/QuoteCalculator.tsx` | `rendering-conditional-render` (1), `rerender-lazy-state-init` (1) |
| `components/ConsultationModal.tsx` | `rerender-lazy-state-init` (1) |
| `components/LineWaves.tsx` | `client-passive-event-listeners` (2) |
| `components/ThemeProvider.tsx` | `client-passive-event-listeners` (1) |
| `app/dashboard/page.tsx` | `rerender-lazy-state-init` (1) |
| `app/testimonials/page.tsx` | `rerender-lazy-state-init` (1) |

## Reuse

Existing utilities already present:

- `motion/react` — used in homepage + DeviceMockupHero for scroll animations (not a dynamic import candidate since it's used in JSX directly)
- `next/dynamic` — available if needed for heavy components like `LineWaves` (WebGL via `ogl`)

## False Positives Identified (not fixing)

| Rule | File(s) | Why false positive |
|---|---|---|
| `bundle-dynamic-imports` | `app/page.tsx`, `DeviceMockupHero.tsx` | `motion/react` used directly in JSX; dynamic import not applicable |
| `rerender-derived-state-no-effect` | `ThemeProvider.tsx`, `BorderGlow.tsx`, `LineWaves.tsx` | ThemeProvider uses effect for localStorage + media query (valid side effects); BorderGlow uses DOM API; LineWaves uses OGL renderer |
| `rerender-no-inline-components` | 5 files | Regex caught event handler closures, not actual inline component definitions |
| `server-cache-react` | `lib/supabase.ts`, modals | `submitLead` is client-side write operation; `React.cache()` is server-only |
| `bundle-defer-third-party` | `app/dashboard/page.tsx` | "analytics" is a tab label string, not analytics code |
| `server-serialization` | `app/contact/page.tsx` | Supabase call is in event handler, not serialized RSC props |
| `async-parallel` | All files | No file has multiple independent awaits without Promise.all |
| `rerender-memo` | 13 large files | Heuristic was file-size-based; most components are view-only with no expensive computations to memoize |

## Steps

### Phase 1: Rendering Performance (MEDIUM)

- [ ] **Fix `rendering-conditional-render`** in `QuoteCalculator.tsx`:
  - Line 74: `{discountRate > 0 && (` is safe (`0` is falsy, but `>` makes it boolean). No change needed.
  - Line 162: `{isSelected && <Check ... />}` is safe (isSelected is boolean). No change needed.
  - Result: **skip — all uses are boolean-safe**.

- [ ] **Fix `rerender-lazy-state-init`** in `ConsultationModal.tsx`:
  - `useState({...})` on line 26 → use lazy init: `useState(() => ({...}))`
  - Saves recreating the object on every render.

- [ ] **Fix `rerender-lazy-state-init`** in `app/dashboard/page.tsx`:
  - `useState([...])` on line 13 → use lazy init: `useState(() => [...])`

- [ ] **Fix `rerender-lazy-state-init`** in `app/testimonials/page.tsx`:
  - `useState({...})` on line 9 → use lazy init: `useState(() => ({...}))`

### Phase 2: Client-Side Event Listener Performance (MEDIUM)

- [ ] **Fix `client-passive-event-listeners`** in `LineWaves.tsx`:
  - `window.addEventListener('resize', resize)` → add `{ passive: true }` (line 198)
  - `gl.canvas.addEventListener('mousemove', handleMouseMove)` → add `{ passive: true }` (line 230)

- [ ] **Fix `client-passive-event-listeners`** in `ThemeProvider.tsx`:
  - `mediaQuery.addEventListener("change", handleChange)` → add `{ passive: true }` (line 63)

### Phase 3: Additional Manual Audit Items (LOW)

These are lower-priority items from the skill that warrant a brief manual check:

- **`bundle-barrel-imports`** — All imports are direct (`../components/ThemeProvider`, `../lib/data`, etc.). No barrel `index.ts` files exist. ✅ already compliant.
- **`rendering-hydration-suppress-warning`** — `layout.tsx` uses `suppressHydrationWarning` on `<html>`. ✅ already correct.
- **`js-early-exit`** — Manually review key functions for early-return patterns (nice-to-have).
- **`server-hoist-static-io`** — `layout.tsx` uses `next/font/google` (Inter, JetBrains Mono). ✅ already hoisted.

## Verification

1. `pnpm dev` — dev server starts without errors.
2. `curl http://localhost:3000/` — returns 200.
3. `git diff --stat` — only 5 files changed.
4. Each changed file reviewed: `pnpm lint` passes.
