import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

/**
 * Contact Section - Cyber Tech Design
 * Features: Contact info cards, contact form with mailto, WhatsApp/Telegram links
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      details: '+20 155 764 9136',
      href: 'https://wa.me/201557649136?text=Hi%2C%20I%20am%20interested%20in%20VoIP%20services.',
      external: true,
    },
    {
      icon: Mail,
      label: 'Email',
      details: 'support@voipcat.com',
      href: 'mailto:support@voipcat.com',
      external: false,
    },
    {
      icon: MessageCircle,
      label: 'Telegram',
      details: '@voipcat',
      href: 'https://t.me/voipcat',
      external: true,
    },
    {
      icon: Clock,
      label: 'Availability',
      details: 'Available 24/7\nFast Response Guaranteed',
      href: '#',
      external: false,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`VoIP Inquiry from ${formData.name}${formData.service ? ` - ${formData.service}` : ''}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Interest: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:support@voipcat.com?subject=${subject}&body=${body}`, '_self');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h2 className="text-3xl md:text-5xl text-foreground uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            GET IN <span className="text-primary">TOUCH</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Contact us for a free test route, custom pricing, or any questions about our VoIP services.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const isClickable = info.href !== '#';
            
            return (
              <a
                key={index}
                href={info.href}
                target={info.external ? '_blank' : undefined}
                rel={info.external ? 'noopener noreferrer' : undefined}
                className={`card-elevated p-8 space-y-6 transition-all duration-500 group ${isClickable ? 'hover:border-primary cursor-pointer' : 'border-primary/10'}`}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {info.label}
                  </h4>
                  <p className={`text-sm whitespace-pre-line leading-relaxed ${isClickable ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                    {info.details}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="card-elevated p-8 md:p-12 border-primary/20 bg-primary/5 backdrop-blur-md relative overflow-hidden">
            {/* Form background accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-5 py-4 rounded-xl border border-primary/20 bg-background/50 text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-5 py-4 rounded-xl border border-primary/20 bg-background/50 text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 8900"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-5 py-4 rounded-xl border border-primary/20 bg-background/50 text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>

                {/* Service Interest */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Service Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-5 py-4 rounded-xl border border-primary/20 bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="SIP Trunking">SIP Trunking</option>
                    <option value="Wholesale VoIP">Wholesale VoIP</option>
                    <option value="Cloud PBX">Cloud PBX</option>
                    <option value="VoIP API">VoIP API</option>
                    <option value="VoIP Reseller">VoIP Reseller Program</option>
                    <option value="Free Test Route">Free Test Route</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Your Message
                </label>
                <textarea
                  placeholder="Tell us about your VoIP needs — traffic volume, destinations, current setup, etc."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl border border-primary/20 bg-background/50 text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button className="w-full h-16 btn-glow uppercase tracking-[0.2em] text-xs font-bold flex items-center justify-center gap-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Send Message
                <Send className="w-4 h-4" />
              </Button>

              {/* Alternative contact */}
              <p className="text-center text-sm text-muted-foreground">
                Prefer instant messaging?{' '}
                <a
                  href="https://wa.me/201557649136?text=Hi%2C%20I%20am%20interested%20in%20VoIP%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  WhatsApp us
                </a>
                {' '}or{' '}
                <a
                  href="https://t.me/voipcat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  Telegram us
                </a>
                {' '}for faster response.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
