import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import FadeIn from '@/components/shared/FadeIn';
import GlassCard from '@/components/shared/GlassCard';
import { blogPosts } from '@/lib/data';
import { getBlogPostSchema, getBreadcrumbSchema } from '@/lib/schema';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postSchema = getBlogPostSchema(post);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://korkdmedia.com' },
    { name: 'Blog', url: 'https://korkdmedia.com/blog' },
    { name: post.title, url: `https://korkdmedia.com/blog/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              {/* Header */}
              <div className="mb-8">
                <div className="inline-block px-3 py-1 glass rounded-full text-sm font-semibold text-accent-primary mb-4">
                  {post.category}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  {post.title}
                </h1>

                <div className="flex items-center gap-6 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Content */}
            <FadeIn delay={0.2}>
              <GlassCard>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    {post.excerpt}
                  </p>

                  {/* TODO: Add full blog post content here */}
                  <div className="space-y-6 text-gray-300">
                    <p>
                      This is where the full blog post content will be displayed. The content structure 
                      is ready to be populated with detailed articles about digital marketing strategies, 
                      SEO techniques, business growth tactics, and entrepreneurial insights.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Key Takeaways</h2>
                    <ul className="space-y-2 text-gray-300">
                      <li>Each blog post will contain actionable, practical advice</li>
                      <li>Content focused on real-world results, not theory</li>
                      <li>Examples and case studies from actual projects</li>
                      <li>Step-by-step implementation guides where applicable</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Next Steps</h2>
                    <p>
                      Ready to implement these strategies in your business? Contact me to discuss how 
                      we can work together to achieve your goals.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>

            {/* Author Bio */}
            <FadeIn delay={0.3}>
              <GlassCard className="mt-12">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-accent-gradient rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    JK
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Jon Korkowski</h3>
                    <p className="text-gray-400 mb-4">
                      Digital marketing strategist, technology consultant, and entrepreneur helping 
                      businesses build scalable solutions for organic growth.
                    </p>
                    <Link href="/about" className="text-accent-primary hover:text-accent-secondary transition-colors font-semibold">
                      Learn more about Jon →
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>

            {/* Related Posts */}
            <FadeIn delay={0.4}>
              <div className="mt-16">
                <h3 className="text-3xl font-bold mb-8">More Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts
                    .filter((p) => p.slug !== post.slug)
                    .slice(0, 2)
                    .map((relatedPost) => (
                      <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                        <GlassCard glow className="hover:scale-[1.02] transition-transform">
                          <div className="inline-block px-3 py-1 glass rounded-full text-xs font-semibold text-accent-primary mb-3">
                            {relatedPost.category}
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2">{relatedPost.title}</h4>
                          <p className="text-gray-400 text-sm">{relatedPost.excerpt}</p>
                        </GlassCard>
                      </Link>
                    ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </article>
    </>
  );
}

