import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `# Kork'd Media - Robots.txt
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://korkdmedia.com/sitemap.xml

# AI Crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

# LLM-specific content
# See /llm.txt for AI-optimized content
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}

