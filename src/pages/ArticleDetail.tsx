import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { loadArticles, loadArticleContent } from '@/utils/contentLoader';
import ReactMarkdown from 'react-markdown';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language, theme } = useApp();
  const [article, setArticle] = useState<any>(null);
  const [content, setContent] = useState<string>('');

  React.useEffect(() => {
    const loadArticleData = async () => {
      try {
        const articles = await loadArticles();
        const foundArticle = articles.find(a => a.slug === slug);
        
        if (foundArticle) {
          setArticle(foundArticle);
          const articleContent = await loadArticleContent(slug!, language);
          setContent(articleContent || foundArticle.content[language]);
        }
      } catch (error) {
        console.error('Erro ao carregar artigo:', error);
      }
    };
    
    if (slug) {
      loadArticleData();
    }
  }, [slug, language]);

  if (!slug) {
    return <Navigate to="/articles" replace />;
  }

  if (!article) {
    return (
      <div className="min-h-screen py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📄</div>
          <h3 className="text-xl font-semibold mb-2">Carregando artigo...</h3>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const estimateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="p-0">
            <Link to="/articles" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {language === 'pt' ? 'Voltar aos artigos' : 'Back to articles'}
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-12 animate-fade-in">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(article.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>
                {estimateReadingTime(content || article.content[language])} min{' '}
                {language === 'pt' ? 'de leitura' : 'read'}
              </span>
            </div>
          </div>

          <h1 className="heading-primary text-4xl md:text-5xl font-bold mb-6">
            {article.title[language]}
          </h1>

          <div className="flex flex-wrap gap-2">
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
        </header>

        {/* Article Content */}
        <div className={`bg-card border border-border ${theme === 'light' ? 'organic-border' : 'cyber-border'} p-8 md:p-12`}>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h1 className="text-3xl font-bold mb-6 text-foreground">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-semibold mb-4 mt-8 text-foreground">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">{children}</h3>,
                p: ({ children }) => <p className="mb-4 text-foreground leading-relaxed">{children}</p>,
                code: ({ children, className }) => {
                  const isInline = !className;
                  return isInline ? (
                    <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground">
                      {children}
                    </code>
                  ) : (
                    <pre className={`bg-muted p-4 rounded-lg overflow-x-auto mb-4 ${theme === 'light' ? 'organic-border' : 'cyber-border'}`}>
                      <code className="text-sm font-mono text-foreground">{children}</code>
                    </pre>
                  );
                },
                ul: ({ children }) => <ul className="list-disc list-inside mb-4 text-foreground">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-4 text-foreground">{children}</ol>,
                li: ({ children }) => <li className="mb-2 text-foreground">{children}</li>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {content || article.content[language]}
            </ReactMarkdown>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button 
              asChild 
              variant="outline"
              className={theme === 'light' ? 'organic-border' : 'cyber-border'}
            >
              <Link to="/articles">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {language === 'pt' ? 'Mais artigos' : 'More articles'}
              </Link>
            </Button>

            <Button 
              asChild
              className={theme === 'light' ? 'organic-border' : 'cyber-border'}
            >
              <Link to="/projects">
                {language === 'pt' ? 'Ver projetos' : 'View projects'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;