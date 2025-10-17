import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import LoadingSplash from '@/components/shared/LoadingSplash';
import { getOrganizationSchema } from '@/lib/schema';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://korkdmedia.com'),
  title: {
    default: "Kork'd Media | Digital Marketing & Tech Solutions",
    template: "%s | Kork'd Media"
  },
  description: 'Get more leads and grow your business with proven digital marketing strategies. Lead generation, local SEO, Google Business optimization, and custom websites starting at $499. Call (732) 215-6319.',
  keywords: [
    'lead generation',
    'digital marketing',
    'local SEO',
    'get more leads',
    'business visibility',
    'Google Business Profile',
    'website traffic',
    'SEO services',
    'custom website development',
    'entrepreneurial mentoring',
    'business startup services',
    'Google foundational building',
    'organic growth strategies',
    'New Jersey digital marketing',
    'affordable SEO',
  ],
  authors: [{ name: 'Jon Korkowski' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://korkdmedia.com',
    siteName: "Kork'd Media",
    title: "Kork'd Media | Digital Marketing & Tech Solutions",
    description: 'Building digital empires through custom technology solutions, SEO strategy, and entrepreneurial mentoring.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Kork'd Media Logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kork'd Media | Digital Marketing & Tech Solutions",
    description: 'Building digital empires through custom technology solutions, SEO strategy, and entrepreneurial mentoring.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = getOrganizationSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        {/* <LoadingSplash /> - Temporarily disabled for testing */}
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
