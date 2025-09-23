# Kapoia's Blog depois pedir para refazr o readme

Um blog pessoal estático construído com React, Vite e Tailwind CSS, otimizado para GitHub Pages.

## 🚀 Deploy no GitHub Pages

### Configuração Automática
1. Faça fork deste repositório
2. Vá em Settings > Pages
3. Selecione "GitHub Actions" como source
4. O deploy será automático a cada push na branch main

### Build Local
```bash
npm install
npm run build
npm run preview
```

## 📝 Adicionando Conteúdo

### Artigos
Para adicionar um novo artigo:

1. Crie um arquivo `.md` em `src/data/articles/`
2. Use o formato:
```markdown
---
id: 'unique-id'
title:
  pt: 'Título em Português'
  en: 'Title in English'
summary:
  pt: 'Resumo em português'
  en: 'Summary in english'
date: '2024-MM-DD'
tags: ['tag1', 'tag2']
slug: 'url-friendly-name'
---

# Conteúdo do artigo em markdown

Conteúdo em português aqui...

---

# Article content in markdown

English content here...
```

3. Adicione o artigo ao arquivo `src/data/sampleData.ts`

### Projetos
Para adicionar projetos, edite o arquivo `src/data/projects/projects.json`:

```json
{
  "id": "unique-id",
  "title": "Project Title", 
  "description": {
    "pt": "Descrição em português",
    "en": "Description in English"
  },
  "githubUrl": "https://github.com/user/repo",
  "tags": ["tag1", "tag2"],
  "featured": true
}
```

## 🎨 Personalização

### Temas
- **Claro**: Tons naturais (bege, madeira)
- **Escuro**: Inspirado no Matrix (verde neon, preto)

Edite `src/index.css` e `tailwind.config.ts` para personalizar cores.

### Configuração
- Informações pessoais: `src/pages/About.tsx`
- Navegação: `src/components/Navigation.tsx`
- Contexto global: `src/contexts/AppContext.tsx`

## 🔧 Estrutura do Projeto

```
src/
├── components/         # Componentes React
├── data/              
│   ├── articles/      # Artigos em Markdown
│   └── projects/      # Projetos em JSON
├── pages/             # Páginas principais
├── contexts/          # Context API
└── utils/             # Utilitários
```

## 🌐 Recursos

- ✅ Suporte bilíngue (PT/EN)
- ✅ Tema claro/escuro
- ✅ Busca em artigos
- ✅ Design responsivo
- ✅ SEO otimizado
- ✅ GitHub Pages ready

## 📱 Tecnologias

- React 18
- TypeScript  
- Tailwind CSS
- Vite
- React Router
- Lucide Icons

