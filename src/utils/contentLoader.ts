import { Article, Project } from '@/data/sampleData';

// Função para carregar artigos - para blog estático, importa diretamente
export async function loadArticles(): Promise<Article[]> {
  const articles = await import('@/data/sampleData');
  return articles.sampleArticles;
}

// Função para carregar projetos - para blog estático, importa diretamente  
export async function loadProjects(): Promise<Project[]> {
  try {
    // Importa diretamente o arquivo JSON para build estático
    const projects = await import('@/data/projects/projects.json');
    return projects.default || projects;
  } catch (error) {
    console.warn('Erro ao carregar projetos, usando dados de exemplo:', error);
    const { sampleProjects } = await import('@/data/sampleData');
    return sampleProjects;
  }
}

// Função para carregar conteúdo de artigo específico por idioma
export async function loadArticleContent(slug: string, language: string = 'pt'): Promise<string | null> {
  try {
    // Para build estático, importa diretamente o arquivo markdown por idioma
    const content = await import(`@/data/articles/${language}/${slug}.md?raw`);
    return content.default;
  } catch (error) {
    console.warn(`Erro ao carregar artigo ${slug} em ${language}:`, error);
    // Fallback para conteúdo dos dados de exemplo
    const { sampleArticles } = await import('@/data/sampleData');
    const article = sampleArticles.find(a => a.slug === slug);
    return article?.content[language as keyof typeof article.content] || null;
  }
}