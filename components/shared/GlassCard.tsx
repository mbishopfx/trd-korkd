import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({ children, className, hover = true, glow = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass rounded-xl p-6',
        hover && 'glass-hover cursor-pointer',
        glow && 'hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]',
        'transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  );
}

