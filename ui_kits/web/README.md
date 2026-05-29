# Dental Clinic — Web UI Kit

A pixel-honest recreation of the dental-clinic landing page in the style of the reference.
Structure mirrors the reference's signature rhythm:

1. Floating pill nav (frosts on scroll)
2. Hero — text left, 3D-glossy composition right, animated floating glyphs
3. "Manifesto" wide card + 2-up + 3-up feature grid
4. Auto-scrolling horizontal testimonial rail
5. Platform / locations switcher (tabbed product preview)
6. Big final CTA card
7. Minimal centered footer

## Files

| File | Component |
|---|---|
| `index.html` | Entry — loads React, Babel, and every JSX below |
| `Nav.jsx` | Floating pill nav with brand mark + primary CTA |
| `Hero.jsx` | Hero copy + CSS-rendered glossy chrome scene |
| `Manifesto.jsx` | Wide centered card with inline glyphs |
| `Features.jsx` | 2-up + 3-up feature grid |
| `Testimonials.jsx` | Auto-scrolling pill row |
| `Platforms.jsx` | Tabbed clinic-locations preview |
| `FinalCTA.jsx` | Big card with violet glow CTA |
| `Footer.jsx` | Centered logo + links |

## What's mocked vs. real

- **Interactive**: nav buttons, platform tabs, primary CTA hover/press, scroll-reveal of cards, auto-scrolling testimonials.
- **Static / fake content**: clinic locations, testimonial handles, prices.
- **Illustration substitution**: the reference's 3D-rendered chrome scene is approximated with CSS radial gradients and soft-blurred iridescent disks. **For production, swap in real 3D art.**

## Open subs (also in root README)

- **Sora** font is a Google-Fonts substitute for the unidentifiable headline face in the reference.
- **Lucide** icons via CDN substitute for the original (unknown) icon set.
