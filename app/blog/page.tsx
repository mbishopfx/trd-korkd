import { Metadata } from 'next';
import FadeIn from '@/components/shared/FadeIn';
import BlogCard from '@/components/blog/BlogCard';
import { blogPosts } from '@/lib/data';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on digital marketing, SEO, custom technology, and entrepreneurship from Jon Korkowski.',
};

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://korkdmedia.com' },
    { name: 'Blog', url: 'https://korkdmedia.com/blog' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-accent-primary/10 via-transparent to-transparent opacity-50" />
        
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Insights & <span className="text-gradient">Strategies</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400">
                Practical advice on digital marketing, SEO, technology, and building successful businesses.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8 bg-background-secondary">
          <div className="container-custom">
            <FadeIn>
              <BlogCard post={featuredPost} featured />
            </FadeIn>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16">
        <div className="container-custom">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <FadeIn key={post.slug} delay={index * 0.1}>
                <BlogCard post={post} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

