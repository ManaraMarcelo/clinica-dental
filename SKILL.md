---
name: dental-clinic-design
description: Use this skill to generate well-branded interfaces and assets for Dental Clinic, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping a modern, premium, slightly playful dental brand (vibrant violet primary, warm-gray surfaces, geometric display sans, pill buttons, inline glyphs in headlines, glossy 3D imagery).
user-invocable: true
---

# Dental Clinic — Design Skill

Read the `README.md` in this skill first — it contains the full content + visual foundations, iconography rules, and a manifest of the other files. Then explore the other files as needed.

## Folder map

- `README.md` — content foundations, visual foundations, iconography, open subs
- `colors_and_type.css` — every CSS token (colors, type, spacing, radii, shadows, motion, semantic element styles, `.btn`, `.card`, `.input`)
- `fonts/` — webfont references (Sora + Inter + JetBrains Mono via Google Fonts CDN)
- `assets/` — `logo-mark.svg`, `logo-lockup.svg`
- `preview/` — small DS-tab cards (color, type, spacing, components) — read these to see tokens in use
- `ui_kits/web/` — full animated landing page in JSX (Nav, Hero, Manifesto, Features, Testimonials, Platforms, FinalCTA, Footer)

## How to use

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out and create static HTML files for the user to view. Start any HTML with:

```html
<link rel="stylesheet" href="./colors_and_type.css">
```

…then use `.btn--primary`, `.card`, `.input`, the CSS variables, and the inline-glyph pattern (`<span class="glyph">⚡</span>`).

If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Non-negotiables

- **Primary violet** `#6E5BFF` — used selectively, never gradient-overload.
- **Page bg** is warm gray `#E9E8E6`, cards float on `#F5F4F2`. No global gradient.
- **Buttons are always pill-shaped.** Never square.
- **Sora** for headlines, **Inter** for body, **JetBrains Mono** for numerical data.
- **Headlines almost always include 1–2 inline glyphs** (⚡ 🦷 ✦ ✧ 💎) at type size.
- **No emoji in body copy.** Glyphs are typographic ornaments only.
- **Voice**: casually confident, mildly tech-bro, second-person, short punchy sentences.
- **Animations**: soft ease-out (`cubic-bezier(.22,.61,.36,1)`), 200ms state changes, gentle floating glyphs, no bouncy springs.
- **Hover = darker, never lighter.** Press = `scale(.97)`.
