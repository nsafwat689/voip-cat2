import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';
import { faqs } from '@/data/faqs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQ() {
  useSEO({
    title: 'FAQ | Frequently Asked Questions | VOIP CAT',
    description: 'Find answers to common questions about our CRM, cybersecurity, and networking solutions. Get insights into implementation, security, compliance, and support.',
    keywords: 'FAQ, frequently asked questions, CRM help, cybersecurity questions, networking support, implementation guide, customer support',
    canonical: 'https://voipcat.com/faq',
    ogImage: 'https://voipcat.com/images/og-faq.png',
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(faqs.map(f => f.category)));
  }, []);

  // Filter FAQs based on search and category
  const filteredFAQs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/5 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] -z-10" />
          </div>

          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Find answers to common questions about our CRM, cybersecurity, and networking solutions. Can't find what you're looking for? Contact our support team.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 rounded-xl border border-primary/20 bg-background/50 text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                onClick={() => setSelectedCategory(null)}
                variant={selectedCategory === null ? 'default' : 'outline'}
                className="rounded-full"
              >
                All Categories
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {filteredFAQs.length > 0 ? (
                <div className="space-y-4">
                  <AnimatePresence>
                    {filteredFAQs.map((faq, index) => (
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleExpand(faq.id)}
                          className="w-full px-6 py-5 flex items-center justify-between hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-4 flex-1 text-left">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <span className="text-sm font-semibold text-primary">Q</span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                          </div>
                          <motion.div
                            animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                          >
                            <ChevronDown className="w-5 h-5 text-primary" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {expandedId === faq.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-border"
                            >
                              <div className="px-6 py-5 bg-muted/30">
                                <div className="flex gap-4">
                                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                                    <span className="text-sm font-semibold text-accent">A</span>
                                  </div>
                                  <p className="text-muted-foreground leading-relaxed flex-1">{faq.answer}</p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-border/50">
                                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                                    {faq.category}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-lg text-muted-foreground mb-4">
                    No FAQs found matching your search.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory(null);
                    }}
                    variant="outline"
                  >
                    Clear Filters
                  </Button>
                </motion.div>
              )}
            </div>

            {/* Still Need Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-20 pt-12 border-t border-border"
            >
              <div className="max-w-2xl mx-auto text-center bg-card border border-border rounded-2xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Still Need Help?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Can't find the answer you're looking for? Our support team is here to help. Contact us anytime, and we'll get back to you as soon as possible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-glow">
                    Contact Support
                  </Button>
                  <Button variant="outline">
                    Email Us
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
