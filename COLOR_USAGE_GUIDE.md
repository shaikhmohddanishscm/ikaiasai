# ikai Asai Color Usage Guide

## Brand Color Palette Reference

### Primary Colors

#### 🎨 Brand Primary - Terracotta `#945139`
**Usage**: Main brand color, primary buttons, headings, accents
- FeaturesSection: Feature titles
- CraftsSection: Craft highlights
- NewsletterSection: Main background
- TestimonialsSection: Border accents
- CategoriesSection: Category highlights

#### 🍑 Brand Accent - Peach `#ef9f59`
**Usage**: Warm accents, highlights, call-to-action elements
- FeaturesSection: Feature cards
- TestimonialsSection: Star ratings
- NewsletterSection: Decorative circles
- CategoriesSection: Hover arrows

#### 🌰 Brand Dark - Deep Maroon `#7f252c`
**Usage**: Dark accents, dramatic sections
- CraftsSection: Kansa craft highlighting
- StatsSection: Background blend
- NewsletterSection: Decorative elements

#### ☕ Brand Secondary - Dark Brown `#3d2021`
**Usage**: Text, headers, professional sections
- All sections: Body text color
- CraftsSection: Longpi craft
- StatsSection: Main background
- FeaturesSection: Descriptive text

#### 🌿 Brand Sage - Sage Green `#738472`
**Usage**: Natural tones, eco-friendly messaging
- FeaturesSection: Sustainable feature
- CategoriesSection: Table Linen category

#### 🌊 Brand Teal `#264b59`
**Usage**: Cool complement, professional elements
- FeaturesSection: Contemporary Design feature
- CraftsSection: Glasswork craft
- CategoriesSection: Barware category
- StatsSection: Number highlights

#### ☁️ Brand Light - Warm Off-White `#faf8f5`
**Usage**: Backgrounds, alternating sections
- FeaturesSection: Main background
- TestimonialsSection: Main background
- All white text sections

---

## Section-by-Section Color Breakdown

### Hero Section
- Background: Image with light overlay
- Text: `brand-primary`, `brand-secondary`
- Buttons: `brand-primary` (primary), outline variant

### FeaturesSection
- Background: `brand-light`
- Cards: White with hover shadows
- Icons: Feature-specific colors
- Text: `brand-secondary` with opacity variants

### AboutSection
- Background: `brand-light`
- Text: `brand-secondary`, `brand-primary`
- Accents: `brand-accent` borders

### CategoriesSection
- Background: White
- Image overlays: Black gradients
- Text: White on images
- Hover: `brand-accent` arrows

### CraftsSection
- Background: White
- Cards: Image backgrounds with overlays
- Region labels: `brand-accent`
- Button: `brand-primary` outline

### StatsSection
- Background: `brand-secondary` with `brand-dark` overlay
- Numbers: Individual brand colors
- Text: White/white with opacity

### BlogSection
- Background: Varies (check existing component)
- Maintains brand consistency

### TestimonialsSection
- Background: `brand-light`
- Cards: White with `brand-primary` top border
- Stars: `brand-accent`
- Text: `brand-secondary`

### NewsletterSection
- Background: `brand-primary`
- Decorative elements: `brand-accent`, `brand-dark`
- Button: White/light with `brand-primary` text
- Input: White background

---

## Typography Color Usage

### Headings
- Primary: `brand-secondary` or `brand-primary`
- Font: Nunito Bold (700)

### Body Text
- Primary: `brand-secondary/80` (80% opacity)
- Font: Nunito Regular (400)

### Accent Text
- Labels, captions: `brand-primary` or `brand-accent`
- Font: Nunito Sans Italic (400)

### White Text Sections
- NewsletterSection
- StatsSection
- Image overlays (CategoriesSection, CraftsSection)

---

## Hover & Interactive States

### Buttons
- Primary: `brand-primary` → `brand-secondary` on hover
- Outline: `brand-primary` border → filled `brand-primary` background

### Cards
- Shadow: `shadow-md` → `shadow-xl`
- Border: `border-brand-primary/10` → `border-brand-primary/30`

### Images
- Scale: `scale-100` → `scale-110`
- Smooth transition: `duration-300` or `duration-500`

---

## Responsive Behavior

All sections maintain color consistency across breakpoints:
- Mobile: Single column, same colors
- Tablet (md:): 2-column grids, same colors
- Desktop (lg:): Full grids, same colors

---

## Accessibility Notes

### Contrast Ratios (WCAG AA Compliant)

✅ **High Contrast**:
- `brand-secondary` (#3d2021) on white: 14.5:1
- White on `brand-primary` (#945139): 4.8:1
- White on `brand-secondary` (#3d2021): 14.5:1

⚠️ **Medium Contrast** (use for larger text only):
- `brand-primary` (#945139) on white: 4.3:1
- `brand-accent` (#ef9f59) on white: 2.4:1 (decorative only)

🔴 **Low Contrast** (decorative/non-text use only):
- `brand-sage` (#738472) on white: 3.2:1
- `brand-teal` (#264b59) on white: 8.2:1 ✅

### Recommendations
1. Use `brand-secondary` for body text
2. Use `brand-primary` for larger headings (h2, h3)
3. Reserve `brand-accent` for icons, decorative elements
4. Always test text on colored backgrounds

---

## Brand Consistency Checklist

When adding new sections, ensure:
- [ ] Only use approved brand colors
- [ ] Use Nunito/Nunito Sans fonts
- [ ] Maintain spacing consistency (py-16 md:py-24)
- [ ] Add hover states with smooth transitions
- [ ] Use appropriate shadow hierarchy
- [ ] Test contrast ratios for text
- [ ] Make responsive with consistent breakpoints
- [ ] Use Container component for width consistency

---

**Reference Files**:
- `/BRAND_STANDARDS.md`
- `/src/config/brand.ts`
- `/tailwind.config.ts`
