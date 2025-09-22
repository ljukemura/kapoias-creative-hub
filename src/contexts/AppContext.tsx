import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'pt' | 'en';
type Theme = 'light' | 'dark';

interface AppContextType {
  language: Language;
  theme: Theme;
  setLanguage: (lang: Language) => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    home: 'Home',
    articles: 'Artigos',
    projects: 'Projetos',
    about: 'Sobre mim',
    
    // Home page
    heroTitle: "Kapoia's",
    heroSubtitle: 'Explorando dados, projetos e ideias criativas',
    welcomeMessage: 'Bem-vindo ao meu espaço digital onde compartilho descobertas sobre tecnologia, análise de dados e projetos criativos.',
    
    // Articles
    searchPlaceholder: 'Buscar artigos...',
    readMore: 'Ler mais',
    noArticlesFound: 'Nenhum artigo encontrado',
    
    // Projects
    viewOnGitHub: 'Ver no GitHub',
    projectsDescription: 'Uma coleção dos meus projetos favoritos e experimentos de código.',
    
    // About
    aboutTitle: 'Sobre mim',
    aboutBio: 'Sou um entusiasta de tecnologia e dados, sempre explorando novas formas de resolver problemas através do código.',
    contactTitle: 'Contato',
    
    // Common
    loading: 'Carregando...',
    backToTop: 'Voltar ao topo',
  },
  en: {
    // Navigation
    home: 'Home',
    articles: 'Articles',
    projects: 'Projects',
    about: 'About me',
    
    // Home page
    heroTitle: "Kapoia's",
    heroSubtitle: 'Exploring data, projects and creative ideas',
    welcomeMessage: 'Welcome to my digital space where I share discoveries about technology, data analysis and creative projects.',
    
    // Articles
    searchPlaceholder: 'Search articles...',
    readMore: 'Read more',
    noArticlesFound: 'No articles found',
    
    // Projects
    viewOnGitHub: 'View on GitHub',
    projectsDescription: 'A collection of my favorite projects and code experiments.',
    
    // About
    aboutTitle: 'About me',
    aboutBio: 'I\'m a technology and data enthusiast, always exploring new ways to solve problems through code.',
    contactTitle: 'Contact',
    
    // Common
    loading: 'Loading...',
    backToTop: 'Back to top',
  },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Load saved preferences
    const savedLang = localStorage.getItem('kapoia-lang') as Language;
    const savedTheme = localStorage.getItem('kapoia-theme') as Theme;
    
    if (savedLang) setLanguage(savedLang);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('kapoia-lang', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('kapoia-theme', theme);
    
    // Apply theme class to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <AppContext.Provider
      value={{
        language,
        theme,
        setLanguage,
        setTheme,
        toggleTheme,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};