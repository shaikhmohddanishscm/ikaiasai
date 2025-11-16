# ikai Asai Blog System

## 📝 Dynamic Blog Structure

The blog system has been set up to automatically generate pages from your `public/blogs.json` file.

### File Structure
```
app/
├── blog/
│   ├── page.tsx              # Blog listing page (all articles)
│   └── [slug]/
│       └── page.tsx          # Dynamic blog detail page
```

### How It Works

1. **Blog Data Source**: All blog content comes from `public/blogs.json` (11 articles)

2. **URL Generation**: Blog URLs are automatically created from titles:
   - "The Perfect Setting: 7 Classic Dining Table Decoration Ideas" 
   - → `/blog/the-perfect-setting-7-classic-dining-table-decoration-ideas`

3. **Static Generation**: All blog pages are pre-generated at build time for optimal performance

### Available Routes

- **Homepage**: `/` - Shows first 6 blog articles in grid
- **Blog Listing**: `/blog` - Shows all 11 articles
- **Blog Detail**: `/blog/[slug]` - Individual article pages

### Blog Articles (from blogs.json)

1. The Perfect Setting: 7 Classic Dining Table Decoration Ideas
2. An Elegant Touch To Your Setting: All-things Table Runners
3. For Lasting First Impressions: Living Room Décor Ideas
4. For Evenings Dipped In Delight: All About Wine Decanting
5. The Tale Of Terracotta: Origin, Products & Care
6. Bring Home Barware Essentials For Festive Indulgences
7. Age-Old Kansa Metal Craft: Origin, Benefits, Products & Care
8. Best Diwali Gift Ideas: For The Love Of Festivals
9. For Your Work Family: Unique Corporate Gifting Ideas
10. Revel In Floral Bliss: 7 Table Flower Decoration Ideas
11. The Art Of Papier Mache: Origin, Products & Care

### Brand Styling

All blog pages follow ikai Asai brand guidelines:
- **Colors**: Terracotta (#945139), Dark Brown (#3d2021), Peach (#ef9f59)
- **Fonts**: Nunito & Nunito Sans
- **Design**: Clean, magazine-style layout with hero images

### Features

✅ **Dynamic routing** - Automatic page generation from JSON
✅ **SEO optimized** - Metadata for each blog post
✅ **Responsive design** - Mobile-first approach
✅ **Related articles** - Shows 3 related posts at bottom
✅ **CTA sections** - Links to original ikai Asai articles
✅ **Brand consistency** - All brand colors and fonts applied

### Navigation

- Click any blog card on homepage → Opens detail page
- Header "Stories" link → Opens blog listing
- Blog detail page → Links to original article on ikaiasai.com
- Related articles → Links to other blog posts

### Adding New Blog Posts

Simply add new entries to `public/blogs.json` with the same structure:

```json
{
  "title": "Your Article Title",
  "date": "December 15, 2021",
  "author": "By Ikai Asai",
  "excerpt": "Brief description...",
  "url": "https://ikaiasai.com/blogs/...",
  "image_url": "https://ikaiasai.com/cdn/shop/...",
  "content": "Full article content..."
}
```

The system will automatically:
- Generate a URL slug
- Create the detail page
- Add it to the blog listing
- Make it available for related articles

### Original Article Links

Each blog detail page includes a CTA button linking to the original article on ikaiasai.com for the full shopping experience.
