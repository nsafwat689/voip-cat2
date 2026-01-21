import { Facebook, Linkedin, Twitter } from 'lucide-react';

/**
 * Footer Component - Cyber Tech Design
 * Features: Multi-column link layout, social icons, copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Cloud PBX', href: '#cloud-pbx' },
      { label: 'Our Plans', href: '#plans' },
    ],
    services: [
      { label: 'Business VoIP', href: '#' },
      { label: 'Residential VoIP', href: '#' },
      { label: 'International Calling', href: '#' },
      { label: 'Virtual Numbers', href: '#' },
      { label: 'Call Center Solutions', href: '#' },
      { label: 'API Integration', href: '#' },
    ],
    support: [
      { label: 'Contact', href: '#contact' },
      { label: 'FAQ', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-secondary text-white py-16 md:py-20 border-t border-primary/20">
      <div className="container">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/images/logo-fox.jpg"
                  alt="VoIP Cat Logo"
                  className="h-10 w-auto rounded-md border border-primary/30"
                />
                <div className="absolute -inset-1 bg-primary/20 blur-sm rounded-md -z-10"></div>
              </div>
              <span className="font-bold text-xl tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>VOIP CAT</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Pioneering the next generation of global communication with neural-quality voice and circuit-level reliability.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold mb-6 uppercase tracking-widest text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-bold mb-6 uppercase tracking-widest text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-xs font-bold mb-6 uppercase tracking-widest text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <p className="text-slate-500 text-xs uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            © {currentYear} VoIP Cat. Neural Communication Systems.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/40 hover:bg-primary/10 transition-all flex items-center justify-center group"
                  title={social.label}
                >
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
