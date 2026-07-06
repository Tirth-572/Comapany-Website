import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Share2, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    Products: [
      { name: 'AI Solutions', href: '/products/ai' },
      { name: 'Enterprise', href: '/products/enterprise' },
      { name: 'Cloud Platform', href: '/products/cloud' },
    ],
    Resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Security', href: '/security' },
    ],
  };

  return (
    <footer className="bg-primary text-white pt-24 pb-8 border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-8">
              <img src="/Krishiva Technologies New Logo.png" alt="Krishiva Technology" className="h-24 md:h-32 w-auto object-contain" />
            </Link>
            <Typography variant="body" className="text-text-on-dark mb-8 max-w-sm">
              Engineering Intelligent Products for the Future. Building tomorrow through technology and elegant design.
            </Typography>

            <div className="mb-6">
              <Typography variant="h6" className="text-white mb-4 text-sm uppercase tracking-wider">Subscribe to Newsletter</Typography>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 border border-white/10 rounded-full px-4 py-2 focus:outline-none focus:border-secondary transition-colors text-white text-sm w-full"
                />
                <Button variant="secondary" size="sm" className="bg-secondary text-primary border-none hover:bg-white hover:text-primary rounded-full px-4">
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <Typography variant="h6" className="text-white mb-6 text-sm uppercase tracking-wider">
                {category}
              </Typography>
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-text-on-dark hover:text-secondary transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Typography variant="small" className="text-text-on-dark">
            © {currentYear} Krishiva Technology. All rights reserved.
          </Typography>

          <div className="flex items-center gap-4">
            <a href="#" className="text-white/40 hover:text-white transition-colors p-2">
              <Globe size={20} />
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors p-2">
              <Share2 size={20} />
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors p-2">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
