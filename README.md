# Vance & Thornbury — React front-end

A front-end-only React rebuild of a law-firm site layout, rewritten from scratch with original
branding, copy, emblem and imagery. No backend, no CMS — all content lives in
[`src/data/firm.js`](src/data/firm.js).

## Stack

| Concern | Choice |
| --- | --- |
| Build | Vite 8 |
| UI | React 19 |
| Routing | react-router-dom (`BrowserRouter`) |
| Styling | Tailwind CSS 3.4 + a component layer in `src/index.css` |
| Icons | Hand-authored SVG set (`LawIcon.jsx`) plus `react-icons` for UI chrome |
| Fonts | Lora (display serif) + Lato (body), via Google Fonts |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # emits dist/
npm run preview  # serve the production build
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Landing page — hero slider, practice areas, about + history + case donut, testimonials/values band, attorneys, consultation form, news, affiliates, contact strip |
| `/about` | Firm story, history timeline, testimonials, attorneys |
| `/practice` | All six practice areas |
| `/practice/:slug` | Practice area detail with sidebar |
| `/attorneys` | Attorney grid |
| `/attorneys/:slug` | Attorney profile + other attorneys |
| `/news` | Article grid |
| `/news/:slug` | Article with sidebar |
| `/faq` | FAQ accordion |
| `/contact` | Consultation form, FAQ, office details, locator |
| `*` | 404 |

Unknown slugs on `/practice/:slug`, `/attorneys/:slug` and `/news/:slug` render their own
"not found" state rather than falling through to the 404 page.

## Project layout

```
src/
  components/
    layout/     Header (gold promise bar → contact row → navy nav), Footer, PageBanner, BackToTop
    sections/   Hero, PracticeAreas, AboutHistory, StatDonut, TestimonialsValues, Attorneys,
                ConsultationForm, LatestNews, Partners, ContactStrip
    ui/         Logo, Emblem, LawIcon, Reveal, SectionTitle
  data/firm.js  Firm details, nav, practice areas, history, attorneys, news, FAQs
  hooks/        useInView (scroll reveals), useCountUp (donut headline figure)
  pages/        One component per route
public/images/  23 photographs, all served locally
```

## Editing content

`src/data/firm.js` drives everything — firm name, address, phone, practice areas, attorneys,
history, news and FAQs. The header wordmark reads `nameLeft` / `nameRight`, so renaming the firm
updates the lockup automatically.

Palette and type live in [`tailwind.config.js`](tailwind.config.js): `gold` (#b89b5e),
`navy` (#223555), `ink`, `body`, `mist`, `line`.

## Interaction notes

- **Header** — three tiers (gold promise bar, contact row with centred logo, navy nav). The nav bar
  becomes fixed past 220px with a spacer so the layout does not jump. Working language selector,
  search overlay and mobile drawer, all closing on `Escape` and on route change.
- **Hero** — fade carousel with autoplay and pause-on-hover. Only the active slide's copy is
  rendered, so the page always has exactly one `<h1>`, and each slide can carry its own portrait
  so the photograph matches the attorney named in the headline.
- **Case donut** — `stroke-dasharray` segments sized by each stat's share of the total, animating
  on scroll into view.
- **Reveals** — `useInView` adds `.is-visible`, and checks the element rect on mount so an anchor
  jump or restored scroll position can never strand a section at `opacity: 0`.
- **Forms** — consultation and newsletter both validate client-side and confirm locally. There is
  no backend; nothing is transmitted.
- Full `prefers-reduced-motion` block disables reveals and looping animation.

## Images & attribution

All 23 photographs come from [Unsplash](https://unsplash.com) under the Unsplash Licence — free for
commercial use with no attribution required — and are stored locally so the build has no external
image dependencies.

The emblem, wordmark, favicon, the twelve-icon `LawIcon` set and the affiliate wordmarks are drawn
for this project. No third-party logos or icon-font glyphs are reproduced anywhere in the build.

Attorney and testimonial photographs are generic stock portraits. They depict models, not real
lawyers or real clients — replace them with your own photography before the site represents an
actual firm.
