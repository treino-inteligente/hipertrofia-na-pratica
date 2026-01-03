# 🚀 GUIA RÁPIDO DE DEPLOY - TREINO INTELIGENTE

## ✅ CHECKLIST ANTES DO DEPLOY

- [ ] Link de pagamento da Kiwify está correto no código
- [ ] Imagens estão todas na pasta `public/images/`
- [ ] Testou localmente com `pnpm dev`

## 📋 PASSO A PASSO COMPLETO

### 1️⃣ CRIAR REPOSITÓRIO NO GITHUB

1. Acesse https://github.com/new
2. **Nome do repositório**: 
   - Para domínio tipo `seuusuario.github.io`: use **exatamente** `seuusuario.github.io`
   - Para domínio tipo `seuusuario.github.io/projeto`: use qualquer nome (ex: `treino-inteligente`)
3. **Visibilidade**: PÚBLICO (obrigatório para GitHub Pages grátis)
4. **NÃO** inicialize com README, .gitignore ou licença
5. Clique em **Create repository**

### 2️⃣ CONFIGURAR O BASE PATH (IMPORTANTE!)

**Se você criou um repositório de projeto** (não `seuusuario.github.io`):

Edite o arquivo `vite.config.ts` e altere a linha `base`:

```typescript
base: "/nome-do-seu-repositorio/", // ⚠️ IMPORTANTE: Coloque o nome exato do repositório!
```

**Se você criou `seuusuario.github.io`**: deixe como está (`base: "/"`)

### 3️⃣ INICIALIZAR E ENVIAR CÓDIGO

Abra o terminal **NESTA pasta** (`github_pages`) e execute:

```powershell
# Inicializar Git
git init

# Adicionar todos os arquivos
git add .

# Primeiro commit
git commit -m "Initial commit - Treino Inteligente Sales Page"

# Conectar com o GitHub (SUBSTITUA pelos seus dados!)
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

# Criar branch main
git branch -M main

# Enviar para o GitHub
git push -u origin main
```

**Exemplo real:**
```powershell
git remote add origin https://github.com/joaosilva/treino-inteligente.git
```

### 4️⃣ ATIVAR GITHUB PAGES

1. No seu repositório no GitHub, clique em **Settings** (⚙️)
2. No menu lateral esquerdo, clique em **Pages**
3. Em **Source**, selecione: **GitHub Actions**
4. Pronto! O deploy começará automaticamente

### 5️⃣ VERIFICAR O DEPLOY

1. Vá na aba **Actions** do repositório
2. Você verá um workflow chamado "Deploy to GitHub Pages"
3. Aguarde ele ficar verde ✅ (leva 2-5 minutos)
4. Sua página estará em:
   - `https://seuusuario.github.io/` (se repositório de usuário)
   - `https://seuusuario.github.io/nome-repositorio/` (se repositório de projeto)

---

## 🔧 COMANDOS ÚTEIS

### Testar localmente ANTES do deploy:

```powershell
# Instalar dependências (primeira vez)
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Testar o build de produção
pnpm build
pnpm preview
```

### Fazer alterações e atualizar:

```powershell
# Fazer suas alterações...

# Adicionar arquivos modificados
git add .

# Commit
git commit -m "Descrição da alteração"

# Enviar (deploy automático!)
git push
```

---

## 🌐 DOMÍNIO PERSONALIZADO (OPCIONAL)

Se você tem um domínio próprio (ex: `treinointeligente.com.br`):

### No seu provedor de domínio:

Adicione estes registros DNS:

**Para domínio raiz (treinointeligente.com.br):**
```
A     185.199.108.153
A     185.199.109.153
A     185.199.110.153
A     185.199.111.153
```

**Para subdomínio (www.treinointeligente.com.br):**
```
CNAME     seuusuario.github.io
```

### No GitHub:

1. Settings → Pages
2. Em "Custom domain", digite seu domínio
3. Clique em "Save"
4. Aguarde a verificação DNS (pode levar até 24h)

---

## ❓ PROBLEMAS COMUNS

### ❌ Página em branco após deploy

**Causa**: Base path incorreto no `vite.config.ts`

**Solução**: 
- Se repositório é `seuusuario.github.io`: use `base: "/"`
- Se repositório é `projeto`: use `base: "/projeto/"`

### ❌ Erro 404 ao atualizar a página

**Causa**: GitHub Pages não lida bem com SPAs por padrão

**Solução**: Já incluído! O script `copy-404.js` resolve isso automaticamente.

### ❌ Imagens não aparecem

**Causa**: Caminhos incorretos

**Solução**: 
- Imagens devem estar em `public/images/`
- No código, use: `/images/nome-da-imagem.jpg`

### ❌ Actions não está habilitado

**Solução**:
1. Settings → Actions → General
2. Em "Actions permissions", selecione "Allow all actions"
3. Salve e tente fazer push novamente

---

## 📞 SUPORTE

Se algo não funcionar:

1. Verifique os logs na aba **Actions** do GitHub
2. Confira se o repositório está **público**
3. Certifique-se de que o `base` no `vite.config.ts` está correto

---

## 🎉 PRONTO!

Sua página de vendas está no ar! Agora é só divulgar e fazer vendas! 💰

**Próximos passos:**
- [ ] Testar todos os botões e links
- [ ] Verificar no celular (responsividade)
- [ ] Configurar Google Analytics (opcional)
- [ ] Adicionar pixel do Facebook (opcional)

Boa sorte com suas vendas! 🚀
