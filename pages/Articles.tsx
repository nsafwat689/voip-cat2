import { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Search, Clock, User, Tag, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { articles, getArticleImage } from '@/data/articles';
import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { breadcrumbSchema, injectStructuredData } from '@/utils/structuredData';

/**
 * Articles Page - Knowledge Hub
 * Design: Modern card-based grid layout with smooth animations
 * Features: Search, category filtering, individual article navigation
 */
export default function Articles() {
  useSEO({
    title: 'VoIP Blog & Knowledge Hub | SIP Trunking, Cloud PBX, Wholesale VoIP & Call Center Guides | VOIP CAT',
    description: 'In-depth guides, tutorials and industry analysis on VoIP, SIP trunking, Cloud PBX, wholesale voice termination, call center technology, VoIP security, codecs, STIR/SHAKEN and integrations with Asterisk, FreePBX, 3CX, FusionPBX, Vicidial, Genesys and Microsoft Teams. Written by the VOIP CAT engineering team.',
    keywords: 'VoIP blog, VoIP knowledge base, VoIP guides, VoIP tutorials, SIP trunk guides, SIP trunk tutorial, SIP trunk setup, Cloud PBX guide, hosted PBX setup, wholesale VoIP guide, voice termination guide, call center setup, call center VoIP guide, Asterisk setup, FreePBX configuration, 3CX configuration, FusionPBX setup, Issabel guide, Vicidial setup, Genesys SIP guide, Microsoft Teams direct routing guide, VoIP security, VoIP fraud prevention, VoIP codecs, G.711, G.729, opus, STIR SHAKEN guide',
    canonical: 'https://voipcat.com/articles',
    ogImage: 'https://voipcat.com/images/og-articles.png',
  });

  useEffect(() => {
    injectStructuredData(
      breadcrumbSchema([
        { name: 'Home', url: 'https://voipcat.com/' },
        { name: 'Knowledge Hub', url: 'https://voipcat.com/articles' },
      ]),
    );
    injectStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'VOIP CAT Knowledge Hub',
      url: 'https://voipcat.com/articles',
      description:
        'In-depth guides on VoIP, SIP trunking, Cloud PBX, wholesale VoIP, call centers and integrations with major PBX/dialer platforms.',
      publisher: {
        '@type': 'Organization',
        name: 'VOIP CAT',
        logo: {
          '@type': 'ImageObject',
          url: 'https://voipcat.com/images/logo-fox.jpg',
        },
      },
      blogPost: articles.map((a) => ({
        '@type': 'BlogPosting',
        headline: a.title,
        description: a.excerpt,
        author: { '@type': 'Person', name: a.author },
        datePublished: a.date,
        url: `https://voipcat.com/articles/${a.id}`,
      })),
    });
  }, []);

  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(articles.map(a => a.category)));
  }, []);

  // Filter articles based on search and category
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden py-16 md:py-24 border-b border-border"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 pointer-events-none" />
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                VoIP Knowledge Hub
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Expert guides on VoIP technology, SIP trunking, Cloud PBX, wholesale VoIP, and PBX setup. Learn best practices from our team of specialists.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Search and Filter Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-6"
        >
          <div className="container">
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  className="rounded-full"
                >
                  All Articles
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Results Count */}
              <p className="text-sm text-muted-foreground">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </div>
        </motion.section>

        {/* Articles Grid */}
        <section className="py-12 md:py-16">
          <div className="container">
            {filteredArticles.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {filteredArticles.map((article) => (
                  <motion.article
                    key={article.id}
                    variants={itemVariants}
                    className="group"
                  >
                    <motion.div
                      onClick={() => setLocation(`/articles/${article.id}`)}
                      className="h-full bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer flex flex-col"
                      whileHover={{ y: -4 }}
                    >
                      {/* Cover Image */}
                      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                        <img
                          src={getArticleImage(article)}
                          alt={`${article.title} - ${article.category} guide by VOIP CAT`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src =
                              '/images/hero-voip-communication.jpg';
                          }}
                        />
                      </div>

                      {/* Article Content */}
                      <div className="p-6 md:p-7 flex flex-col h-full">
                        {/* Category and Read Time */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                            {article.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {article.readTime} min
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 text-foreground">
                          {article.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-muted-foreground text-sm mb-5 line-clamp-3 flex-grow">
                          {article.excerpt}
                        </p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-5 border-t border-border pt-4">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>
                              {new Date(article.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                              })}
                            </span>
                          </div>
                        </div>

                        {/* Read More Button */}
                        <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                          Read Full Article
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <p className="text-lg text-muted-foreground mb-4">
                  No articles found matching your criteria.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                  }}
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 border-t border-border"
        >
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started with VoIP?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check our competitive VoIP rates, explore our services, or request a free test route to experience the quality firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-glow" onClick={() => setLocation('/voip-rates')}>
                Check VoIP Rates
              </Button>
              <Button variant="outline" onClick={() => setLocation('/contact')}>
                Contact Us
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
