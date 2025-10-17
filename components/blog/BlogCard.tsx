import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import GlassCard from '@/components/shared/GlassCard';
import { BlogPost } from '@/lib/data';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <GlassCard 
        glow 
        className={`h-full hover:scale-[1.02] transition-transform duration-300 ${
          featured ? 'md:col-span-2' : ''
        }`}
      >
        {featured && (
          <div className="inline-block px-3 py-1 bg-accent-gradient text-white text-xs font-bold rounded-full mb-4">
            FEATURED
          </div>
        )}
        
        <div className="inline-block px-3 py-1 glass rounded-full text-xs font-semibold text-accent-primary mb-4">
          {post.category}
        </div>

        <h3 className={`font-bold text-white mb-3 ${featured ? 'text-3xl' : 'text-xl'}`}>
          {post.title}
        </h3>

        <p className={`text-gray-400 mb-4 ${featured ? 'text-lg' : 'text-base'}`}>
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center text-accent-primary font-semibold group">
          Read Article
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </GlassCard>
    </Link>
  );
}

