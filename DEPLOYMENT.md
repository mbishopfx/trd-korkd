# Kork'd Media - Deployment Guide

## Pre-Deployment Checklist

### 1. Update Content & Images

- [ ] Add Jon's professional photo to `/public/images/`
- [ ] Update email addresses if different from `jon@korkdmedia.com`
- [ ] Add phone number in `components/layout/Footer.tsx`
- [ ] Add real social media links in Footer
- [ ] Replace placeholder stats in `components/home/TestimonialCarousel.tsx`
- [ ] Add service images/illustrations to `/public/images/services/`
- [ ] Expand blog post content in `lib/data.ts` or individual blog pages

### 2. SEO Configuration

- [ ] Update domain in `lib/schema.ts` (currently `korkdmedia.com`)
- [ ] Update domain in `app/sitemap.xml/route.ts`
- [ ] Update domain in `app/robots.txt/route.ts`
- [ ] Update domain in `public/llm.txt`
- [ ] Add Google Analytics tracking code in `app/layout.tsx`
- [ ] Add Google Search Console verification meta tag

### 3. Contact Form Integration

- [ ] Set up email service (SendGrid, Resend, etc.)
- [ ] Add email service API keys to environment variables
- [ ] Update `app/api/contact/route.ts` with email sending logic
- [ ] Test contact form submissions
- [ ] Set up form notification emails

### 4. Performance Optimization

- [ ] Compress and optimize all images
- [ ] Test Lighthouse scores on all pages
- [ ] Verify mobile responsiveness
- [ ] Test cross-browser compatibility

## Environment Variables

Create a `.env.local` file (if needed for email service):

```env
# Email Service (Example for SendGrid)
SENDGRID_API_KEY=your_api_key
FROM_EMAIL=jon@korkdmedia.com
TO_EMAIL=jon@korkdmedia.com

# Or for Resend
RESEND_API_KEY=your_api_key
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: Deploy via GitHub

1. Push code to GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Kork'd Media website"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Import project in Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: Next.js
     - Root Directory: `./`
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Add environment variables if needed
   - Click "Deploy"

3. Configure custom domain:
   - In Vercel project settings
   - Go to "Domains"
   - Add `korkdmedia.com` and `www.korkdmedia.com`
   - Update DNS records as instructed

## Post-Deployment

### 1. Submit to Search Engines

```bash
# Verify sitemap is accessible
curl https://korkdmedia.com/sitemap.xml

# Verify robots.txt
curl https://korkdmedia.com/robots.txt

# Verify llm.txt
curl https://korkdmedia.com/llm.txt
```

- Submit sitemap to Google Search Console
- Submit sitemap to Bing Webmaster Tools
- Verify site in both platforms

### 2. Test All Functionality

- [ ] Test navigation on all pages
- [ ] Test mobile menu
- [ ] Test all service links
- [ ] Test blog post navigation
- [ ] Test contact form submission
- [ ] Verify schema markup with Google Rich Results Test
- [ ] Test all CTAs and buttons

### 3. Monitor Performance

- Run Lighthouse audits on:
  - Homepage
  - Services page
  - Individual service pages
  - Blog pages
  - Contact page

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### 4. Set Up Analytics

- [ ] Add Google Analytics 4
- [ ] Set up conversion tracking for contact form
- [ ] Create custom events for CTA clicks
- [ ] Set up monthly performance reports

## Ongoing Maintenance

### Weekly
- Monitor contact form submissions
- Check Google Search Console for issues
- Review site performance metrics

### Monthly
- Update blog with new content
- Review and update service descriptions
- Check for broken links
- Update testimonials

### Quarterly
- Review and update SEO strategy
- Analyze traffic patterns
- Update portfolio/case studies
- Refresh images and content

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading
- Verify image paths are correct
- Check Next.js image optimization settings in `next.config.js`
- Ensure images are in `/public` directory

### Contact Form Not Working
- Check environment variables are set
- Verify API route is accessible at `/api/contact`
- Check browser console for errors
- Test API endpoint with Postman

## Support

For technical issues or questions:
- Email: jon@korkdmedia.com
- Repository: [Add GitHub repo URL]

---

**Current Status:** ✅ Build successful, ready for deployment
**Last Updated:** October 2024

