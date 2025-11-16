# ikai Asai Brand Standards

## 🎨 Brand Colors
Reference: `/public/brand-colors.jpg`

**Current colors in use (from brand-colors.jpg):**
- Primary: `#945139` - Terracotta (main brand color)
- Secondary: `#3d2021` - Dark brown (text/headers)
- Accent: `#ef9f59` - Peach (warm accent)
- Light: `#faf8f5` - Warm off-white (backgrounds)
- Dark: `#7f252c` - Deep maroon (dark accents)
- Sage: `#738472` - Sage green (natural tone)
- Teal: `#264b59` - Teal (cool complement)

### Usage in Tailwind:
```tsx
<div className="bg-brand-primary text-white">
<div className="text-brand-secondary">
<div className="border-brand-accent">
```

### Usage in CSS:
```css
color: var(--brand-primary);
background-color: var(--brand-secondary);
```

---

## 📝 Typography

### Fonts
- **Primary Font**: Nunito (Light 300, Regular 400, Bold 700)
- **Secondary Font**: Nunito Sans (Italic 400, Bold 700)

### Font Classes:
```tsx
className="font-nunito"          // Primary brand font
className="font-nunito-sans"     // Secondary brand font
className="brand-heading"        // For headings (Nunito Bold)
className="brand-body"           // For body text (Nunito Regular)
className="brand-accent-text"    // For accents (Nunito Sans)
```

### React Components:
```tsx
import { BrandHeading } from '@/components';

<BrandHeading level={1}>Your Heading</BrandHeading>
```

---

## 🖼️ Logos

### Available Variants:
- `main` - `/logos/IA-logo.png`
- `white` - `/logos/IA_All_Logos-01-white.png` (for dark backgrounds)
- `standard` - `/logos/IA_All_Logos-01.png`
- `variant2` - `/logos/IA_All_Logos-02.png`
- `variant3` - `/logos/IA_All_Logos-03.png`
- `jpg` - `/logos/logo.jpg`

### Usage:
```tsx
import { Logo } from '@/components';

<Logo variant="main" width={300} height={100} />
<Logo variant="white" width={200} height={80} /> // For dark backgrounds
```

---

## 🧩 Brand Components

### Logo Component
```tsx
import { Logo } from '@/components';

<Logo 
  variant="main" 
  width={300} 
  height={100} 
  priority 
/>
```

### Brand Button
```tsx
import { BrandButton } from '@/components';

<BrandButton variant="primary">Click Me</BrandButton>
<BrandButton variant="secondary">Secondary</BrandButton>
<BrandButton variant="outline">Outline</BrandButton>
```

### Brand Heading
```tsx
import { BrandHeading } from '@/components';

<BrandHeading level={1}>Main Title</BrandHeading>
<BrandHeading level={2}>Subtitle</BrandHeading>
```

---

## 📦 Brand Configuration

All brand settings are centralized in `/src/config/brand.ts`:

```tsx
import { brandConfig } from '@/config/brand';

brandConfig.name        // "ikai Asai"
brandConfig.logos.main  // "/logos/IA-logo.png"
brandConfig.colors.primary
brandConfig.fonts.primary
```

---

## ✅ Brand Standards Checklist

- ✅ All fonts configured (Nunito & Nunito Sans)
- ✅ Brand colors extracted from brand-colors.jpg and applied
- ✅ shadcn/ui installed and configured with warm theme
- ✅ Logo components with all variants
- ✅ Brand-compliant button components
- ✅ Brand-compliant heading components
- ✅ CSS variables for colors
- ✅ Centralized brand configuration
- ✅ **Demo Site**: One-page site with Hero, About, Crafts, Blog sections

---

## 🎯 Best Practices

1. **Always use brand components** instead of custom styled elements
2. **Use Tailwind brand classes** (bg-brand-primary, text-brand-secondary)
3. **Reference brandConfig** for all brand assets and settings
4. **Use Logo component** instead of Image directly
5. **Apply brand fonts** via className or component props
6. **Maintain consistency** across all pages and components

---

## 📁 File Structure
```
src/
├── app/
│   ├── fonts.ts          # Font configurations
│   ├── globals.css       # Brand CSS variables
│   └── layout.tsx        # Font integration
├── components/
│   ├── Logo.tsx          # Brand logo component
│   ├── BrandButton.tsx   # Brand button component
│   ├── BrandHeading.tsx  # Brand heading component
│   └── index.ts          # Component exports
└── config/
    └── brand.ts          # Centralized brand config

public/
├── logos/                # All logo variants
├── fonts/                # Brand fonts (Nunito family)
└── brand-colors.jpg      # Brand color reference
```
