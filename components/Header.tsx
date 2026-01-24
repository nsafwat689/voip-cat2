import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Header Component - Cyber Tech Design
 * Features: Sticky navigation, responsive mobile menu, smooth transitions
 * Color scheme: Logo-inspired blue palette
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Cloud PBX', href: '/#cloud-pbx' },
    { label: 'Plans', href: '/#plans' },
    { label: 'Articles', href: '/articles' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20 py-2">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="/images/logo-fox.jpg"
                alt="VoIP Cat Logo"
                className="h-12 w-auto rounded-lg shadow-sm border border-primary/20"
              />
              <div className="absolute -inset-1 bg-primary/20 blur-sm rounded-lg -z-10"></div>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              VOIP CAT
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 uppercase tracking-widest"
                style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://wa.me/201557649136?text=Hello%20VoIP%20Cat" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 uppercase tracking-wider text-xs"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Contact
              </Button>
            </a>
            <Button className="btn-glow uppercase tracking-wider text-xs" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors uppercase tracking-widest"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 px-4 pt-2">
                <a href="https://wa.me/201557649136?text=Hello%20VoIP%20Cat" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary/5 uppercase tracking-wider text-xs"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    Contact
                  </Button>
                </a>
                <Button className="flex-1 btn-glow uppercase tracking-wider text-xs" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Get Started
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
