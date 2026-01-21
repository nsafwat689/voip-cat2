import { useParams, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Tag, Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { articles } from '@/data/articles';
import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Streamdown } from 'streamdown';

/**
 * Article Detail Page - Individual Article View
 * Features: Full article content, enhanced typography, related articles
 * Design: Minimalist, focused on readability with subtle animations
 */
export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();

  // Find the article by ID
  const article = articles.find(a => a.id === id);

  // Get related articles (same category, different article)
  const relatedArticles = article
    ? articles.filter(a => a.category === article.category && a.id !== article.id).slice(0, 3)
    : [];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Button onClick={() => setLocation('/articles')}>
              Back to Articles
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  useSEO({
    title: `${article.title} | Enterprise VoIP & Business Communication | VOIP CAT`,
    description: article.excerpt,
    keywords: `${article.category}, ${article.title}, enterprise VoIP, business communication, cloud PBX`,
    canonical: `https://voipcat.com/articles/${article.id}`,
    ogImage: 'https://voipcat.com/images/og-articles.png',
    ogType: 'article',
    author: article.author,
    publishedDate: article.date,
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow" role="main">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-4"
        >
          <div className="container">
            <button
              onClick={() => setLocation('/articles')}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Articles
            </button>
          </div>
        </motion.div>

        {/* Article Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 md:py-16 border-b border-border"
        >
          <div className="container max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {article.readTime} min read
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground"
              itemProp="headline"
            >
              {article.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              {article.excerpt}
            </motion.p>

            {/* Article Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-t border-border pt-6"
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span>{article.category}</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Article Content */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-12 md:py-20"
        >
          <div className="container max-w-4xl">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-lg leading-relaxed text-foreground/90 whitespace-pre-wrap">
                {article.content}
              </div>
            </article>

            {/* Divider */}
            <div className="my-12 border-t border-border" />

            {/* Author Bio Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">About the Author</h3>
                  <p className="text-muted-foreground">
                    {article.author} is an expert in {article.category.toLowerCase()} with years of experience in enterprise technology and digital transformation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-16 md:py-24 bg-gradient-to-b from-transparent to-primary/5 border-t border-border"
          >
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle, index) => (
                  <motion.div
                    key={relatedArticle.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setLocation(`/articles/${relatedArticle.id}`)}
                    className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {relatedArticle.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {relatedArticle.readTime} min
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Read More <ChevronRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

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
              Explore More Insights
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover more articles on enterprise technology, cybersecurity, and digital transformation.
            </p>
            <Button onClick={() => setLocation('/articles')} className="btn-glow">
              View All Articles
            </Button>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}


