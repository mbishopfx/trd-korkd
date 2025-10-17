import { NextResponse } from 'next/server';
import { services, blogPosts } from '@/lib/data';

export async function GET() {
  const baseUrl = 'https://korkdmedia.com';
  const currentDate = new Date().toISOString();

  type SitemapPage = {
    url: string;
    changefreq: string;
    priority: string;
    lastmod?: string;
  };

  const staticPages: SitemapPage[] = [
    { url: '', changefreq: 'weekly', priority: '1.0' },
    { url: '/about', changefreq: 'monthly', priority: '0.8' },
    { url: '/services', changefreq: 'monthly', priority: '0.9' },
    { url: '/blog', changefreq: 'weekly', priority: '0.8' },
    { url: '/contact', changefreq: 'monthly', priority: '0.7' },
  ];

  const servicePages: SitemapPage[] = services.map(service => ({
    url: `/services/${service.slug}`,
    changefreq: 'monthly',
    priority: '0.8',
  }));

  const blogPages: SitemapPage[] = blogPosts.map(post => ({
    url: `/blog/${post.slug}`,
    changefreq: 'weekly',
    priority: '0.7',
    lastmod: post.date,
  }));

  const allPages = [...staticPages, ...servicePages, ...blogPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod || currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

