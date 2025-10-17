import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Business Startup', href: '/services/business-startup' },
    { name: 'Google Foundation', href: '/services/google-foundation' },
    { name: 'Custom Tech', href: '/services/custom-tech' },
    { name: 'Organic Websites', href: '/services/organic-websites' },
    { name: 'SEO Strategy', href: '/services/seo-strategy' },
    { name: 'Mentoring', href: '/services/entrepreneurial-mentoring' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-white/10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity">
              <div className="relative w-20 h-20">
                <Image
                  src="/korklogo.png"
                  alt="Kork'd Media"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Building digital empires, one vision at a time.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-accent-primary" />
                <a href="tel:17322156319" className="hover:text-accent-primary transition-colors">
                  (732) 215-6319
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-accent-primary" />
                <span>Serving clients nationwide</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-white mb-4">Ready to Build?</h4>
            <p className="text-gray-400 mb-4">
              Whether you have a fresh idea or an established business, let's talk about growth.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-accent-gradient text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
            >
              Schedule a Call
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Kork'd Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

