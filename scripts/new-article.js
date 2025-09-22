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

  const template = `---
id: '${id}'
title:
  pt: '${titlePt}'
  en: '${titleEn}'
summary:
  pt: 'Adicione aqui um resumo em português'
  en: 'Add here a summary in English'
date: '${today}'
tags: ['tag1', 'tag2']
slug: '${slug}'
---

# ${titlePt}

Escreva aqui o conteúdo do seu artigo em português...

## Seção de Exemplo

Conteúdo da seção...

---

# ${titleEn}

Write here your article content in English...

## Example Section

Section content...
`;

  const filePath = path.join(__dirname, '..', 'src', 'data', 'articles', `${slug}.md`);
  
  fs.writeFileSync(filePath, template);
  
  console.log(`✅ Artigo criado: ${filePath}`);
  console.log(`📝 Lembre-se de adicionar o artigo em src/data/sampleData.ts`);
  console.log(`🏷️ ID do artigo: ${id}`);
  console.log(`🔗 Slug: ${slug}`);
}

createNewArticle();