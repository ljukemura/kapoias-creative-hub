import { Article, Project } from '@/data/sampleData';

// Função para carregar artigos dos arquivos markdown
export async function loadArticles(): Promise<Article[]> {
  // Para um blog estático, os artigos seriam carregados em build time
  // Por enquanto, retornamos os dados de exemplo
  const articles = await import('@/data/sampleData');
  return articles.sampleArticles;
}

// Função para carregar projetos do arquivo JSON
export async function loadProjects(): Promise<Project[]> {
  try {
    const response = await fetch('/src/data/projects/projects.json');
    if (!response.ok) {
      // Fallback para dados de exemplo se o arquivo não existir
      const { sampleProjects } = await import('@/data/sampleData');
      return sampleProjects;
    }
    return await response.json();
  } catch (error) {
    console.warn('Erro ao carregar projetos, usando dados de exemplo:', error);
    const { sampleProjects } = await import('@/data/sampleData');
    return sampleProjects;
  }
}

// Função para carregar conteúdo de artigo específico
export async function loadArticleContent(slug: string): Promise<string | null> {
  try {
    // Em um blog estático real, isso carregaria o arquivo markdown
    const response = await fetch(`/src/data/articles/${slug}.md`);
    if (!response.ok) return null;
    return await response.text();
  } catch (error) {
    console.warn('Erro ao carregar artigo:', error);
    return null;
  }
}