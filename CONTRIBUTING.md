# Guia de Contribuição - Kapoia's Blog

## 📝 Adicionando Novos Artigos

### Método Automático (Recomendado)
Use o script helper para criar um novo artigo:

```bash
node scripts/new-article.js "Título em Português" "Title in English"
```

Este script criará automaticamente:
- Arquivo `.md` em `src/data/articles/`
- Template com metadados corretos
- Slug gerado automaticamente

### Método Manual

1. **Crie o arquivo markdown**:
   - Vá para `src/data/articles/`
   - Crie um arquivo com nome descritivo: `meu-novo-artigo.md`

2. **Adicione os metadados**:
```markdown
---
id: 'unique-timestamp'
title:
  pt: 'Meu Novo Artigo'
  en: 'My New Article'
summary:
  pt: 'Descrição curta em português'
  en: 'Short description in English'
date: '2024-MM-DD'
tags: ['Python', 'Tutorial', 'Data Science']
slug: 'meu-novo-artigo'
---
```

3. **Escreva o conteúdo**:
   - Use Markdown padrão
   - Separe as versões PT/EN com `---`
   - Primeira parte: português
   - Segunda parte: inglês

4. **Registre no sistema**:
   - Abra `src/data/sampleData.ts`
   - Adicione o artigo ao array `sampleArticles`

## 🚀 Adicionando Projetos

Edite `src/data/projects/projects.json`:

```json
{
  "id": "projeto-unico-id",
  "title": "Nome do Projeto",
  "description": {
    "pt": "Descrição completa em português do que o projeto faz",
    "en": "Complete description in English of what the project does"
  },
  "githubUrl": "https://github.com/seu-usuario/seu-repo",
  "tags": ["Python", "API", "Machine Learning"],
  "featured": false
}
```

### Campos obrigatórios:
- `id`: Identificador único
- `title`: Nome do projeto
- `description`: Descrição bilíngue
- `githubUrl`: Link do repositório
- `tags`: Array de tecnologias/tópicos
- `featured`: true/false para destacar na home

## 🎨 Personalizando Cores

### Tema Claro (Natureza)
Edite as variáveis CSS em `src/index.css`:

```css
:root {
  --background: 32 20% 95%; /* Bege claro */
  --primary: 25 65% 45%;     /* Marrom terra */
  --accent: 145 45% 35%;     /* Verde musgo */
}
```

### Tema Escuro (Matrix)
```css
.dark {
  --background: 120 5% 8%;   /* Preto esverdeado */
  --primary: 120 100% 50%;   /* Verde neon */
  --accent: 120 50% 25%;     /* Verde escuro */
}
```

## 📂 Estrutura de Arquivos

```
src/
├── data/
│   ├── articles/          # Artigos em Markdown
│   │   ├── artigo-1.md
│   │   └── artigo-2.md
│   ├── projects/          # Projetos
│   │   └── projects.json
│   └── sampleData.ts      # Dados centralizados
├── pages/
│   ├── Articles.tsx       # Página de artigos
│   ├── Projects.tsx       # Página de projetos
│   ├── About.tsx         # Sobre mim
│   └── Index.tsx         # Home
└── components/
    ├── Navigation.tsx     # Menu principal
    └── Layout.tsx        # Layout geral
```

## 🔧 Comandos Úteis

```bash
# Desenvolvimento local
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Criar novo artigo
node scripts/new-article.js "Título PT" "Title EN"
```

## 📋 Checklist para Novos Artigos

- [ ] Arquivo `.md` criado em `src/data/articles/`
- [ ] Metadados preenchidos corretamente
- [ ] Conteúdo em português e inglês
- [ ] Tags relevantes adicionadas
- [ ] Artigo registrado em `sampleData.ts`
- [ ] Build local testado
- [ ] Commit feito com mensagem descritiva

## 🐛 Resolução de Problemas

### Artigo não aparece no site
1. Verifique se está em `sampleData.ts`
2. Confirme se o ID é único
3. Verifique se a data está no formato correto

### Erro de build
1. Verifique sintaxe do JSON em `projects.json`
2. Confirme se não há caracteres especiais não escapados
3. Teste localmente com `npm run build`

### Problemas de tema
1. Verifique se as cores estão em formato HSL
2. Confirme se as variáveis CSS estão definidas
3. Teste em ambos os temas (claro/escuro)