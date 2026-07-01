import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '/products' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Industries', href: '/industries' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4 md:px-6 pointer-events-none">
      <div 
        className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl px-6 py-2 md:py-2.5 transition-all duration-500 ease-out rounded-full border ${
          isScrolled 
            ? 'bg-surface/90 backdrop-blur-xl shadow-lg border-border/50' 
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center z-50 shrink-0">
          <img src="/Krishiva Technologies New Logo.png" alt="Krishiva Technology" className="h-16 md:h-20 lg:h-24 w-auto object-contain -my-6 lg:-my-8" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-sm font-semibold transition-colors px-1 py-2 group ${
                  isActive ? 'text-primary' : 'text-text-secondary hover:text-primary'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute left-0 right-0 -bottom-1 h-[2px] bg-secondary transition-transform duration-300 origin-left rounded-full ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="primary" size="sm" onClick={() => window.location.href = '/contact'}>Get Started</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-4 right-4 mt-2 bg-surface shadow-2xl border border-border/50 rounded-3xl p-6 flex flex-col gap-4 md:hidden pointer-events-auto"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-lg font-medium py-2 border-b border-border ${
                      isActive ? 'text-secondary' : 'text-primary hover:text-secondary'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="flex gap-4 pt-4">
                <Button variant="primary" className="w-full" onClick={() => { setIsMobileMenuOpen(false); window.location.href = '/contact'; }}>Get Started</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
