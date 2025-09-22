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

// Função para carregar conteúdo de artigo específico
export async function loadArticleContent(slug: string): Promise<string | null> {
  try {
    // Para build estático, importa diretamente o arquivo markdown
    const content = await import(`@/data/articles/${slug}.md?raw`);
    return content.default;
  } catch (error) {
    console.warn('Erro ao carregar artigo:', error);
    // Fallback para conteúdo dos dados de exemplo
    const { sampleArticles } = await import('@/data/sampleData');
    const article = sampleArticles.find(a => a.slug === slug);
    return article?.content.pt || null;
  }
}