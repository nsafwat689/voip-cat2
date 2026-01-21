import { useState, useMemo } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Search, Clock, User, Tag, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { articles } from '@/data/articles';
import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Articles Page - Knowledge Hub
 * Design: Modern card-based grid layout with smooth animations
 * Features: Search, category filtering, individual article navigation
 */
export default function Articles() {
  useSEO({
    title: 'Knowledge Hub | Enterprise VoIP, CRM & Cybersecurity Insights | VOIP CAT',
    description: 'Explore in-depth articles on enterprise VoIP solutions, business communication, cloud PBX, cybersecurity best practices, network infrastructure, and digital transformation. Expert insights for enterprise technology leaders worldwide.',
    keywords: 'VoIP knowledge hub, enterprise communication articles, cloud PBX guides, cybersecurity best practices, network infrastructure, digital transformation, business communication insights, unified communications',
    canonical: 'https://voipcat.com/articles',
    ogImage: 'https://voipcat.com/images/og-articles.png',
    ogType: 'website',
    author: 'VOIP CAT',
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  });

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
      <main className="flex-grow" role="main">
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
                Knowledge Hub - Enterprise VoIP & Business Communication Insights
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Discover comprehensive guides on enterprise VoIP solutions, cloud PBX systems, business communication strategies, cybersecurity best practices, and networking infrastructure. Stay informed about the latest trends and best practices in enterprise technology and digital transformation.
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
              Stay Updated with Latest Insights
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest articles, industry trends, and best practices delivered to your inbox.
            </p>
            <Button className="btn-glow">
              Subscribe Now
            </Button>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
