import React, { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Star } from 'lucide-react';
import { loadProjects } from '@/utils/contentLoader';

const Projects = () => {
  const { t, language, theme } = useApp();
  const [projects, setProjects] = useState<any[]>([]);

  React.useEffect(() => {
    loadProjects().then(setProjects);
  }, []);

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="heading-primary text-5xl md:text-6xl font-bold mb-6">
            {t('projects')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('projectsDescription')}
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 flex items-center gap-2">
            <Star className="h-8 w-8 text-primary" />
            {language === 'pt' ? 'Projetos em Destaque' : 'Featured Projects'}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`bg-card border border-border ${theme === 'light' ? 'organic-border' : 'cyber-border'} p-8 blog-card`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <Star className="h-5 w-5 text-primary flex-shrink-0 ml-2" />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description[language]}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
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
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    {t('viewOnGitHub')}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">
            {language === 'pt' ? 'Outros Projetos' : 'Other Projects'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`bg-card border border-border ${theme === 'light' ? 'organic-border' : 'cyber-border'} p-6 blog-card`}
                style={{ animationDelay: `${(featuredProjects.length + index) * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description[language]}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>

                <Button 
                  asChild 
                  size="sm" 
                  variant="outline"
                  className={`w-full ${theme === 'light' ? 'organic-border' : 'cyber-border'}`}
                >
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Github className="mr-2 h-3 w-3" />
                    GitHub
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-semibold mb-4">
            {language === 'pt' ? 'Interessado em colaborar?' : 'Interested in collaborating?'}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {language === 'pt' 
              ? 'Sempre aberto a novos projetos e oportunidades. Vamos criar algo incrível juntos!'
              : 'Always open to new projects and opportunities. Let\'s create something amazing together!'
            }
          </p>
          <Button 
            asChild 
            size="lg"
            className={`px-8 py-6 ${theme === 'light' ? 'organic-border' : 'cyber-border'}`}
          >
            <a 
              href="https://github.com/kapoia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="mr-2 h-5 w-5" />
              {language === 'pt' ? 'Ver no GitHub' : 'View on GitHub'}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
