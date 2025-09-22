import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Github, Linkedin, MapPin, Coffee, Code, Database, Sparkles } from 'lucide-react';

const About = () => {
  const { t, language, theme } = useApp();

  const skills = [
    'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js',
    'SQL', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS',
    'Data Science', 'Machine Learning', 'ETL', 'API Development'
  ];

  const interests = language === 'pt' 
    ? ['Análise de Dados', 'Inteligência Artificial', 'Automação', 'Open Source', 'Fotografia', 'Viagens']
    : ['Data Analysis', 'Artificial Intelligence', 'Automation', 'Open Source', 'Photography', 'Travel'];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="heading-primary text-5xl md:text-6xl font-bold mb-8">
            {t('aboutTitle')}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className={`bg-card border border-border ${theme === 'light' ? 'organic-border' : 'cyber-border'} p-8 text-center blog-card`}>
              {/* Avatar Placeholder */}
              <div className={`w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center ${theme === 'light' ? 'organic-border' : 'cyber-border'}`}>
                <span className="text-4xl font-bold text-primary-foreground">
                  K
                </span>
              </div>

              <h2 className="text-2xl font-semibold mb-2 text-foreground">
                Kapoia
              </h2>
              
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                <MapPin className="h-4 w-4" />
                <span>
                  {language === 'pt' ? 'Brasil' : 'Brazil'}
                </span>
              </div>

              {/* Contact Links */}
              <div className="space-y-3">
                <Button 
                  asChild 
                  variant="outline" 
                  className={`w-full justify-start ${theme === 'light' ? 'organic-border' : 'cyber-border'}`}
                >
                  <a href="mailto:contact@kapoia.dev" className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    contact@kapoia.dev
                  </a>
                </Button>

                <Button 
                  asChild 
                  variant="outline" 
                  className={`w-full justify-start ${theme === 'light' ? 'organic-border' : 'cyber-border'}`}
                >
                  <a 
                    href="https://github.com/kapoia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>

                <Button 
                  asChild 
                  variant="outline" 
                  className={`w-full justify-start ${theme === 'light' ? 'organic-border' : 'cyber-border'}`}
                >
                  <a 
                    href="https://linkedin.com/in/kapoia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <div className={`bg-card border border-border ${theme === 'light' ? 'organic-border' : 'cyber-border'} p-8 blog-card`}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Coffee className="h-6 w-6 text-primary" />
                {language === 'pt' ? 'Sobre mim' : 'About me'}
              </h3>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-foreground leading-relaxed mb-4">
                  {language === 'pt' 
                    ? 'Sou um desenvolvedor apaixonado por tecnologia e dados, com experiência em criar soluções que transformam informação em insights valiosos. Minha jornada começou com curiosidade sobre como os dados podem contar histórias e evoluiu para uma carreira focada em desenvolvimento de aplicações robustas e análises sofisticadas.'
                    : 'I\'m a developer passionate about technology and data, with experience in creating solutions that transform information into valuable insights. My journey started with curiosity about how data can tell stories and evolved into a career focused on developing robust applications and sophisticated analyses.'
                  }
                </p>
                <p className="text-foreground leading-relaxed">
                  {language === 'pt'
                    ? 'Quando não estou codando, gosto de explorar novas tecnologias, contribuir para projetos open source, e compartilhar conhecimento através de artigos e apresentações. Acredito que a melhor forma de aprender é ensinando e colaborando com a comunidade.'
                    : 'When I\'m not coding, I enjoy exploring new technologies, contributing to open source projects, and sharing knowledge through articles and presentations. I believe the best way to learn is by teaching and collaborating with the community.'
                  }
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className={`bg-card border border-border ${theme === 'light' ? 'organic-border' : 'cyber-border'} p-8 blog-card`}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                {language === 'pt' ? 'Habilidades Técnicas' : 'Technical Skills'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className={`${theme === 'dark' ? 'matrix-glow' : ''} animate-fade-in`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className={`bg-card border border-border ${theme === 'light' ? 'organic-border' : 'cyber-border'} p-8 blog-card`}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                {language === 'pt' ? 'Interesses' : 'Interests'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge 
                    key={interest} 
                    variant="outline"
                    className={`animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Experience Highlights */}
            <div className={`bg-card border border-border ${theme === 'light' ? 'organic-border' : 'cyber-border'} p-8 blog-card`}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Database className="h-6 w-6 text-primary" />
                {language === 'pt' ? 'Experiência' : 'Experience'}
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">
                    {language === 'pt' ? 'Engenheiro de Dados' : 'Data Engineer'}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    {language === 'pt' ? '2022 - Presente' : '2022 - Present'}
                  </p>
                  <p className="text-foreground text-sm">
                    {language === 'pt'
                      ? 'Desenvolvimento de pipelines de dados robustos e sistemas de análise em tempo real para suporte à tomada de decisões estratégicas.'
                      : 'Development of robust data pipelines and real-time analysis systems to support strategic decision making.'
                    }
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground">
                    {language === 'pt' ? 'Desenvolvedor Full Stack' : 'Full Stack Developer'}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    {language === 'pt' ? '2020 - 2022' : '2020 - 2022'}
                  </p>
                  <p className="text-foreground text-sm">
                    {language === 'pt'
                      ? 'Criação de aplicações web modernas e APIs escaláveis usando tecnologias JavaScript e Python.'
                      : 'Creation of modern web applications and scalable APIs using JavaScript and Python technologies.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-semibold mb-4">
            {language === 'pt' ? 'Vamos conversar!' : 'Let\'s talk!'}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {language === 'pt'
              ? 'Estou sempre interessado em novos projetos, oportunidades de colaboração ou apenas uma conversa sobre tecnologia.'
              : 'I\'m always interested in new projects, collaboration opportunities, or just a conversation about technology.'
            }
          </p>
          <Button 
            asChild 
            size="lg"
            className={`px-8 py-6 ${theme === 'light' ? 'organic-border' : 'cyber-border'}`}
          >
            <a href="mailto:contact@kapoia.dev" className="flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              {language === 'pt' ? 'Entre em contato' : 'Get in touch'}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;