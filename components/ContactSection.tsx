import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import { useState } from 'react';

/**
 * Contact Section - Cyber Tech Design
 * Features: Contact info cards, contact form with validation
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Global HQ',
      details: '251 Mercer St, New York, NY 10012, USA',
    },
    {
      icon: Phone,
      label: 'Neural Link',
      details: '+201557649136',
    },
    {
      icon: Mail,
      label: 'Direct Uplink',
      details: 'sales.voipcat@gmail.com',
    },
    {
      icon: Clock,
      label: 'Sync Hours',
      details: 'Mon-Fri: 9AM - 8PM\nSat: 10AM - 4PM',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
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
            Initiate a secure communication channel with our experts.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            let href = '#';
            
            if (info.label === 'Neural Link') {
              href = 'https://wa.me/201557649136?text=Hello%20VoIP%20Cat';
            } else if (info.label === 'Direct Uplink') {
              href = 'mailto:sales.voipcat@gmail.com';
            }
            
            const isClickable = info.label === 'Neural Link' || info.label === 'Direct Uplink';
            
            return (
              <a
                key={index}
                href={href}
                target={isClickable && info.label === 'Neural Link' ? '_blank' : undefined}
                rel={isClickable && info.label === 'Neural Link' ? 'noopener noreferrer' : undefined}
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

              {/* Phone Field */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+201557649136"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl border border-primary/20 bg-background/50 text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Your Message
                </label>
                <textarea
                  placeholder="How can we help you?"
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
