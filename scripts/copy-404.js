// Script para copiar index.html para 404.html (necessário para SPAs no GitHub Pages)
const { copyFileSync } = require('fs');
const { join } = require('path');

const distPath = join(process.cwd(), 'dist');
const indexPath = join(distPath, 'index.html');
const notFoundPath = join(distPath, '404.html');

try {
  copyFileSync(indexPath, notFoundPath);
  console.log('✅ 404.html criado com sucesso para suporte a SPA no GitHub Pages');
} catch (error) {
  console.error('❌ Erro ao criar 404.html:', error);
  process.exit(1);
}
