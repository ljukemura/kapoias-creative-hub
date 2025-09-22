import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, ArrowRight } from 'lucide-react';
import { sampleArticles } from '@/data/sampleData';

const Articles = () => {
  const { t, language, theme } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = useMemo(() => {
    if (!searchTerm) return sampleArticles;
    
    return sampleArticles.filter(article => {
      const title = article.title[language].toLowerCase();
      const summary = article.summary[language].toLowerCase();
      const search = searchTerm.toLowerCase();
      
      return title.includes(search) || summary.includes(search) || 
             article.tags.some(tag => tag.toLowerCase().includes(search));
    });
  }, [searchTerm, language]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="heading-primary text-5xl md:text-6xl font-bold mb-6">
            {t('articles')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'pt' 
              ? 'Compartilhando conhecimentos sobre tecnologia, dados e desenvolvimento.'
              : 'Sharing knowledge about technology, data and development.'
            }
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`pl-10 py-6 text-lg ${theme === 'light' ? 'organic-border' : 'cyber-border'}`}
          />
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article, index) => (
              <article 
                key={article.id}
                className={`bg-card border border-border ${theme === 'light' ? 'organic-border' : 'cyber-border'} p-8 blog-card`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(article.date)}</span>
                </div>

                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  {article.title[language]}
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {article.summary[language]}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className={theme === 'dark' ? 'matrix-glow' : ''}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button 
                  asChild 
                  className={`w-full ${theme === 'light' ? 'organic-border' : 'cyber-border'}`}
                >
                  <Link to={`/article/${article.slug}`}>
                    {t('readMore')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">{t('noArticlesFound')}</h3>
            <p className="text-muted-foreground">
              {language === 'pt' 
                ? 'Tente ajustar sua busca ou explore outros tópicos.'
                : 'Try adjusting your search or explore other topics.'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;