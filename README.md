# Treino Inteligente - Sales Page

Landing page de vendas para o produto digital "Treino Inteligente".

## 🌐 Site no Ar

[Adicione aqui o link do seu site após o deploy]

## 🛠️ Tecnologias

- React 19
- TypeScript
- Vite 7
- TailwindCSS 4
- Radix UI
- Wouter (routing)
- Lucide Icons

## 🚀 Deploy no GitHub Pages

### Passo 1: Criar um novo repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login
2. Clique em "New repository"
3. Nome sugerido: `treino-inteligente` (ou o nome que preferir)
4. Marque como **Público** (obrigatório para GitHub Pages gratuito)
5. Clique em "Create repository"

### Passo 2: Enviar o código para o GitHub

Na pasta `github_pages`, execute os seguintes comandos:

```bash
# Inicializar o repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit"

# Adicionar o repositório remoto (substitua YOUR_USERNAME e YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Criar a branch main (se necessário)
git branch -M main

# Enviar para o GitHub
git push -u origin main
```

### Passo 3: Configurar GitHub Pages

1. No seu repositório no GitHub, vá em **Settings** (Configurações)
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione **GitHub Actions**
4. Pronto! O deploy será feito automaticamente

### Passo 4: Acessar sua página

Após alguns minutos, sua página estará disponível em:
- **Repositório de usuário**: `https://YOUR_USERNAME.github.io/`
- **Repositório de projeto**: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

⚠️ **IMPORTANTE**: Se você usar um repositório de projeto (não de usuário), edite o arquivo `vite.config.ts` e altere:

```typescript
base: "/", // Altere para
base: "/nome-do-seu-repositorio/",
```

## 🛠️ Desenvolvimento Local

Para testar localmente antes de fazer deploy:

```bash
# Instalar dependências
pnpm install

# Rodar em modo de desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Preview do build
pnpm preview
```

## 📝 Notas Importantes

- **Sem backend**: Esta é uma versão estática. Não há servidor Node.js
- **Link de pagamento**: O link da Kiwify está hardcoded no botão de checkout
- **Imagens**: Certifique-se de que as imagens estão na pasta `public/images/`
- **Domínio customizado**: Você pode configurar um domínio próprio nas configurações do GitHub Pages

## 🎨 Personalização

Para alterar o conteúdo, edite:
- `src/pages/Home.tsx` - Todo o conteúdo da página de vendas
- `public/images/` - Imagens utilizadas

## 📦 Estrutura do Projeto

```
github_pages/
├── .github/
│   └── workflows/
│       └── deploy.yml      # Configuração do GitHub Actions
├── public/
│   └── images/            # Suas imagens
├── src/
│   ├── components/        # Componentes React
│   ├── pages/            # Home.tsx (página principal)
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
└── package.json
```

## 🆘 Suporte

Se tiver problemas com o deploy:
1. Verifique se o repositório está público
2. Confira se o GitHub Actions está habilitado
3. Veja os logs do workflow na aba "Actions" do repositório
4. Certifique-se de que o `base` no `vite.config.ts` está correto

---

✨ **Boa sorte com suas vendas!**
