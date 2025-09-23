#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Script para criar um novo artigo facilmente
function createNewArticle() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log('Uso: node scripts/new-article.js "Título do Artigo" "Article Title"');
    process.exit(1);
  }

  const titlePt = args[0];
  const titleEn = args[1];
  const slug = titlePt.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/[^a-z0-9\s]/g, '') // remove caracteres especiais
    .replace(/\s+/g, '-') // espaços para hífens
    .substring(0, 50); // limita o tamanho

  const today = new Date().toISOString().split('T')[0];
  const id = Date.now().toString();

  const templatePt = `# ${titlePt}

Escreva aqui o conteúdo do seu artigo em português...

## Seção de Exemplo

Conteúdo da seção...

### Código de Exemplo

\`\`\`python
# Seu código aqui
print("Olá, mundo!")
\`\`\`

## Imagens

Para adicionar imagens, coloque-as na pasta \`src/data/articles/images/\` e referencie como:

![Descrição da imagem](../images/nome-da-imagem.png)
`;

  const templateEn = `# ${titleEn}

Write here your article content in English...

## Example Section

Section content...

### Code Example

\`\`\`python
# Your code here
print("Hello, world!")
\`\`\`

## Images

To add images, place them in the \`src/data/articles/images/\` folder and reference like:

![Image description](../images/image-name.png)
`;

  // Cria as pastas se não existirem
  const articlesDir = path.join(__dirname, '..', 'src', 'data', 'articles');
  const ptDir = path.join(articlesDir, 'pt');
  const enDir = path.join(articlesDir, 'en');
  
  if (!fs.existsSync(ptDir)) fs.mkdirSync(ptDir, { recursive: true });
  if (!fs.existsSync(enDir)) fs.mkdirSync(enDir, { recursive: true });

  const filePathPt = path.join(ptDir, `${slug}.md`);
  const filePathEn = path.join(enDir, `${slug}.md`);
  
  fs.writeFileSync(filePathPt, templatePt);
  fs.writeFileSync(filePathEn, templateEn);
  
  console.log(`✅ Artigos criados:`);
  console.log(`   PT: ${filePathPt}`);
  console.log(`   EN: ${filePathEn}`);
  console.log(`📝 Lembre-se de adicionar o artigo em src/data/sampleData.ts`);
  console.log(`🏷️ ID do artigo: ${id}`);
  console.log(`🔗 Slug: ${slug}`);
  console.log(`🖼️  Para imagens, use a pasta: src/data/articles/images/`);
}

createNewArticle();