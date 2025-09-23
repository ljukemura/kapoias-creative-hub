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

#### Método Automático (Recomendado)
```bash
node scripts/new-article.js "Título em Português" "Title in English"
```

#### Método Manual
1. Crie os arquivos separados por idioma:
   - `src/data/articles/pt/seu-slug.md` (versão portuguesa)
   - `src/data/articles/en/seu-slug.md` (versão inglesa)

2. Formato dos arquivos:
```markdown
# Título do Artigo

Conteúdo do artigo em markdown...

## Seção de Exemplo

### Código
\`\`\`python
# Seu código aqui
\`\`\`

### Imagens
![Descrição](../images/sua-imagem.png)
```

3. Para imagens:
   - Coloque em `src/data/articles/images/`
   - Referencie como `../images/nome-da-imagem.png`

4. Adicione o artigo ao arquivo `src/data/sampleData.ts`

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

