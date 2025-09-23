import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Github, Linkedin, MapPin, Coffee, Code, Database, Sparkles, Award, Globe } from 'lucide-react';

const About = () => {
  const { t, language, theme } = useApp();

  const skills = [
    'dbt',
    'Apache Spark',
    'SQL',
    'Python',
    'PySpark',
    'Airflow',
    'Kafka',
    'Power BI',
    'Tableau',
    'CI/CD',
    'Git',
    'LangChain',
    'OpenAI API',
    'Chatbot Design',
    'Unit Testing',
    'Data Modeling',
    'DataOps',
    'ETL Automation'
  ];

  const funFacts = language === 'pt'
    ? ['Ex-campeão brasileiro de xadrez sub-14', 'Pratico arco e flecha', 'Casado em 2024', 'Pai de duas cachorras']
    : ['Former Brazilian U14 chess champion', 'Archery enthusiast', 'Married in 2024', 'Dog dad to two pups'];

  const experience = language === 'pt'
    ? [
        {
          company: 'Buser Brasil',
          role: 'Lead Analytics Engineer',
          period: 'ago de 2021 - atual · São Paulo, Brasil',
          highlights: [
            'Construí modelos em dbt, Spark e SQL que atendem múltiplas áreas de negócio.',
            'Automatizei pipelines CI/CD para reforçar a confiabilidade dos dados.',
            'Integrei APIs e dados em streaming utilizando PySpark.',
            'Defini práticas de DataOps e mentorei engenheiros em início de carreira.',
            'Liderei chatbot com LLM para acesso em linguagem natural ao data catalog.'
          ]
        },
        {
          company: 'Cielo',
          role: 'Business Analyst → Process Analyst',
          period: 'jan de 2016 - ago de 2021 · São Paulo, Brasil',
          highlights: [
            'Criei dashboards em SQL e Power BI que reduziram o trabalho manual em 40%.',
            'Apliquei Lean Six Sigma para otimizar operações.',
            'Consolidei fontes fragmentadas em data marts confiáveis.'
          ]
        }
      ]
    : [
        {
          company: 'Buser Brasil',
          role: 'Lead Analytics Engineer',
          period: 'Aug 2021 - Present · São Paulo, Brazil',
          highlights: [
            'Built dbt, Spark, and SQL models supporting analytics across the business.',
            'Automated CI/CD pipelines to boost data reliability.',
            'Integrated APIs and streaming data with PySpark.',
            'Defined DataOps best practices and mentored junior engineers.',
            'Led an LLM chatbot for natural-language access to the data catalog.'
          ]
        },
        {
          company: 'Cielo',
          role: 'Business Analyst → Process Analyst',
          period: 'Jan 2016 - Aug 2021 · São Paulo, Brazil',
          highlights: [
            'Built SQL and Power BI dashboards that cut manual work by 40%.',
            'Applied Lean Six Sigma to streamline operations.',
            'Consolidated fragmented data sources into reliable data marts.'
          ]
        }
      ];

  const certifications = language === 'pt'
    ? [
        'Data Analytics Certificate · Digital House',
        'dbt Fundamentals · dbt Labs',
        'Apache Spark with Delta Lake · Databricks',
        'Advanced SQL · Udemy',
        'Python for Data · DataCamp'
      ]
    : [
        'Data Analytics Certificate · Digital House',
        'dbt Fundamentals · dbt Labs',
        'Apache Spark with Delta Lake · Databricks',
        'Advanced SQL · Udemy',
        'Python for Data · DataCamp'
      ];

  const languagesList = language === 'pt'
    ? ['Português · Nativo', 'Inglês · Fluente']
    : ['Portuguese · Native', 'English · Fluent'];

  const whyMe = language === 'pt'
    ? [
        'Combinação sólida de experiência técnica e visão de negócio.',
        'Entrega de soluções com LLMs para analytics escalável.',
        'Histórico de liderança, mentoria e construção de equipes.',
        'Pronto para oportunidades globais e remotas.'
      ]
    : [
        'Strong blend of technical depth and business acumen.',
        'Delivered LLM-powered solutions that scale analytics.',
        'Track record of leadership, mentorship, and team building.',
        'Ready for global, remote opportunities.'
      ];

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
                  LJ
                </span>
              </div>

              <h2 className="text-2xl font-semibold mb-2 text-foreground">
                Leandro Jukemura
              </h2>

              <p className="text-muted-foreground mb-4">
                {language === 'pt' ? 'Lead Analytics Engineer' : 'Lead Analytics Engineer'}
              </p>

              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                <MapPin className="h-4 w-4" />
                <span>
                  São Paulo, Brazil
                </span>
              </div>

              {/* Contact Links */}
              <div className="space-y-3">
                <Button
                  asChild
                  variant="outline"
                  className={`w-full justify-start ${theme === 'light' ? 'organic-border' : 'cyber-border'}`}
                >
                  <a href="mailto:ljukemura@gmail.com" className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    ljukemura@gmail.com
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className={`w-full justify-start ${theme === 'light' ? 'organic-border' : 'cyber-border'}`}
                >
                  <a
                    href="https://github.com/ljukemura"
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
                    href="https://www.linkedin.com/in/leandro-jukemura/"
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
                    ? 'Lead Analytics Engineer com mais de 5 anos de experiência em modelagem de dados, desenvolvimento de ETL e DataOps. Domino dbt, Apache Spark, SQL e Python para entregar pipelines automatizados e soluções de analytics self-service que empoderam as equipes de negócio.'
                    : 'Lead Analytics Engineer with 5+ years of experience in data modeling, ETL development, and DataOps. I specialize in dbt, Apache Spark, SQL, and Python to deliver automated pipelines and self-service analytics that empower business teams.'
                  }
                </p>
                <p className="text-foreground leading-relaxed">
                  {language === 'pt'
                    ? 'Já integrei APIs e dados em streaming com PySpark, liderei a criação de um chatbot baseado em LLM para busca em linguagem natural no data catalog e ajudei a definir práticas de DataOps. Trago combinação de visão técnica e de negócios, atuo com testes automatizados, versionamento e CI/CD, e mantenho foco constante em confiabilidade e escalabilidade.'
                    : 'I have integrated APIs and streaming data with PySpark, led an LLM-powered chatbot for natural-language search across the data catalog, and helped define DataOps best practices. I pair technical and business expertise, apply automated testing, version control, and CI/CD, and stay focused on reliability and scale.'
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

            {/* Experience Highlights */}
            <div className={`bg-card border border-border ${theme === 'light' ? 'organic-border' : 'cyber-border'} p-8 blog-card`}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Database className="h-6 w-6 text-primary" />
                {language === 'pt' ? 'Experiência Profissional' : 'Professional Experience'}
              </h3>
              <div className="space-y-6">
                {experience.map((job) => (
                  <div key={job.company} className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">{job.role}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{job.company} · {job.period}</p>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-foreground">
                      {job.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className={`bg-card border border-border ${theme === 'light' ? 'organic-border' : 'cyber-border'} p-8 blog-card`}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                {language === 'pt' ? 'Certificações e Cursos' : 'Certifications & Courses'}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-foreground">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className={`bg-card border border-border ${theme === 'light' ? 'organic-border' : 'cyber-border'} p-8 blog-card`}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Globe className="h-6 w-6 text-primary" />
                {language === 'pt' ? 'Idiomas' : 'Languages'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {languagesList.map((item, index) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className={`animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Fun Facts / Why Me */}
            <div className={`bg-card border border-border ${theme === 'light' ? 'organic-border' : 'cyber-border'} p-8 blog-card`}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                {language === 'pt' ? 'Por que trabalhar comigo?' : 'Why work with me?'}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    {language === 'pt' ? 'Diferenciais' : 'Highlights'}
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-foreground">
                    {whyMe.map((reason) => (
                      <li key={reason}>{reason}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    {language === 'pt' ? 'Curiosidades' : 'Fun facts'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {funFacts.map((fact, index) => (
                      <Badge
                        key={fact}
                        variant="outline"
                        className={`animate-fade-in`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {fact}
                      </Badge>
                    ))}
                  </div>
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
            <a href="mailto:ljukemura@gmail.com" className="flex items-center">
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