# Kork'd Media Website

A modern, high-conversion website for Kork'd Media built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Dark theme with glassmorphic design
- ✨ Smooth Framer Motion animations
- 📱 Fully responsive mobile-first design
- ⚡ High-performance (90+ Lighthouse score)
- 🔍 SEO optimized with schema markup
- 🤖 AI-friendly (llm.txt included)
- 📊 Dynamic sitemap and robots.txt

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.3.0
- **Animations:** Framer Motion 10.16.0
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
korkd-media/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── services/          # Services pages
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── home/              # Homepage components
│   ├── layout/            # Navigation & Footer
│   ├── services/          # Service components
│   ├── blog/              # Blog components
│   └── shared/            # Reusable components
├── lib/
│   ├── data.ts            # Content data
│   ├── schema.ts          # Schema markup
│   └── utils.ts           # Utility functions
└── public/
    └── llm.txt            # AI crawler content
```

## Content Management

The site is currently built with static content in `lib/data.ts`. This structure is designed to easily integrate with Sanity.io or another headless CMS later.

### To Connect Sanity.io (Future)

1. Create Sanity.io project and schemas
2. Install `@sanity/client` and dependencies
3. Replace imports from `lib/data.ts` with Sanity queries
4. Update components to handle dynamic data

## Deployment

### Vercel (Recommended)

1. Push code to GitHub repository
2. Import project in Vercel
3. Configure custom domain
4. Deploy

### Build for Production

```bash
npm run build
npm start
```

## SEO Configuration

- **Sitemap:** Auto-generated at `/sitemap.xml`
- **Robots.txt:** Available at `/robots.txt`
- **Schema Markup:** Implemented on all pages
- **LLM.txt:** AI-optimized content at `/llm.txt`

## Customization

### Update Contact Information

Edit `components/layout/Footer.tsx` and `lib/schema.ts` to update:
- Email address
- Phone number
- Social media links

### Add Images

Place images in `/public` directory and reference them in components. Recommended to add:
- Jon's professional photo
- Service illustration images
- Blog post featured images

### Modify Services

Edit `lib/data.ts` to update service offerings, descriptions, and benefits.

## Performance

Target metrics:
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Kork'd Media. All rights reserved.

## Contact

For questions or support:
- Email: jon@korkdmedia.com
- Website: https://korkdmedia.com
