import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Database, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const { t, theme } = useApp();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="heading-primary text-6xl md:text-8xl font-bold mb-8">
              {t('heroTitle')}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('heroSubtitle')}
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('welcomeMessage')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button 
                asChild 
                size="lg" 
                className={`px-8 py-6 text-lg ${theme === 'light' ? 'organic-border' : 'cyber-border'}`}
              >
                <Link to="/articles">
                  {t('articles')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className={`px-8 py-6 text-lg ${theme === 'light' ? 'organic-border' : 'cyber-border'}`}
              >
                <Link to="/projects">
                  {t('projects')}
                  <Code className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-30 dark:opacity-20">
          <Database className="h-16 w-16 text-primary animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-30 dark:opacity-20">
          <Sparkles className="h-12 w-12 text-accent animate-pulse" />
        </div>
        <div className="absolute top-40 right-20 opacity-20 dark:opacity-10">
          <Code className="h-20 w-20 text-muted-foreground animate-pulse" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-8 bg-card border border-border ${theme === 'light' ? 'organic-border' : 'cyber-border'} blog-card`}>
              <Database className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Data Science</h3>
              <p className="text-muted-foreground">
                {theme === 'light' 
                  ? 'Explorando insights através de dados, desde análise exploratória até modelos preditivos.'
                  : 'Decodificando padrões nos dados para revelar conhecimento oculto na matrix digital.'
                }
              </p>
            </div>

            <div className={`p-8 bg-card border border-border ${theme === 'light' ? 'organic-border' : 'cyber-border'} blog-card`}>
              <Code className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <p className="text-muted-foreground">
                {theme === 'light' 
                  ? 'Criando soluções elegantes e eficientes usando as melhores práticas de desenvolvimento.'
                  : 'Construindo aplicações que transcendem o código comum, criando experiências digitais únicas.'
                }
              </p>
            </div>

            <div className={`p-8 bg-card border border-border ${theme === 'light' ? 'organic-border' : 'cyber-border'} blog-card`}>
              <Sparkles className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                {theme === 'light' 
                  ? 'Experimentos criativos e projetos que exploram as fronteiras da tecnologia.'
                  : 'Quebrando barreiras entre realidade e possibilidade através da inovação tecnológica.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
