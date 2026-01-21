import { Star, Quote } from 'lucide-react';

/**
 * Testimonials Section - Cyber Tech Design
 * Features: Quote cards with avatars, star ratings, smooth animations
 */
export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'VoIP Cat has revolutionized our international communications. The call quality is exceptional, and the pricing is unbeatable. We\'ve saved over 60% on our communication costs!',
      author: 'Michael Johnson',
      title: 'CEO, TechGlobal Inc.',
      initials: 'MJ',
      rating: 5,
    },
    {
      quote: 'As a multinational company, we needed a reliable VoIP provider that could handle our complex communication needs. VoIP Cat delivered beyond our expectations with their Platinum plan.',
      author: 'Sarah Lee',
      title: 'Operations Director, Nexus Solutions',
      initials: 'SL',
      rating: 5,
    },
    {
      quote: 'The customer support at VoIP Cat is outstanding. Any time we\'ve had an issue, it\'s been resolved quickly and professionally. Their Diamond plan offers the perfect balance of features and value.',
      author: 'David Roberts',
      title: 'IT Manager, Innovate Corp',
      initials: 'DR',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10"></div>

      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h2 className="text-3xl md:text-5xl text-white uppercase tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            CLIENT <span className="text-primary">FEEDBACK</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            Hear from businesses that transformed their communication with VoIP Cat.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card/5 border border-primary/20 p-10 space-y-8 flex flex-col rounded-2xl backdrop-blur-sm relative group hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary drop-shadow-[0_0_5px_rgba(0,163,255,0.5)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 leading-relaxed flex-grow italic text-lg">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-5 pt-6 border-t border-primary/10">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-primary font-bold text-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {testimonial.initials}
                  </span>
                </div>

                {/* Author Details */}
                <div>
                  <div className="font-bold text-white uppercase tracking-wider text-xs" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {testimonial.author}
                  </div>
                  <div className="text-[10px] text-primary/70 uppercase tracking-widest mt-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
