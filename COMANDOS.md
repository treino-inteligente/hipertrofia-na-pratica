# 🚀 COMANDOS PRONTOS - COPIE E COLE

## ⚡ Deploy Rápido (5 Minutos)

### PASSO 1: Criar Repositório no GitHub
1. Acesse: https://github.com/new
2. Nome do repositório: `treino-inteligente` (ou outro nome)
3. Visibilidade: **PÚBLICO**
4. **NÃO** marque nenhuma opção (README, .gitignore, etc)
5. Clique em **Create repository**

---

### PASSO 2: Configurar Base Path

⚠️ **IMPORTANTE:** Antes de executar os comandos!

**Edite o arquivo `vite.config.ts` (linha 7):**

Se o nome do seu repositório for `treino-inteligente`, altere para:
```typescript
base: "/treino-inteligente/",
```

Se o nome do seu repositório for `seuusuario.github.io`, deixe:
```typescript
base: "/",
```

---

### PASSO 3: Executar Comandos

**Abra o PowerShell NA PASTA `github_pages`** e execute:

```powershell
# 1. Navegar até a pasta (se ainda não estiver)
cd "c:\Repositórios\treino_inteligente_sales\github_pages"

# 2. Inicializar Git
git init

# 3. Adicionar todos os arquivos
git add .

# 4. Fazer o primeiro commit
git commit -m "Initial commit - Treino Inteligente Sales Page"

# 5. Conectar com GitHub (SUBSTITUA pelos seus dados!)
# ⚠️ TROQUE: SEU_USUARIO e SEU_REPOSITORIO
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

# 6. Criar branch main
git branch -M main

# 7. Enviar para GitHub
git push -u origin main
```

---

### EXEMPLO COM DADOS REAIS:

Se seu usuário GitHub for `joaosilva` e repositório for `treino-inteligente`:

```powershell
cd "c:\Repositórios\treino_inteligente_sales\github_pages"
git init
git add .
git commit -m "Initial commit - Treino Inteligente Sales Page"
git remote add origin https://github.com/joaosilva/treino-inteligente.git
git branch -M main
git push -u origin main
```

---

### PASSO 4: Ativar GitHub Pages

1. No seu repositório GitHub, clique em **Settings** ⚙️
2. Menu lateral → **Pages**
3. Em **Source**, selecione: **GitHub Actions**
4. Pronto! O deploy começará automaticamente

**Aguarde 2-5 minutos e acesse:**
```
https://SEU_USUARIO.github.io/SEU_REPOSITORIO/
```

---

## 🔄 Comandos para Atualizações Futuras

Quando você fizer alterações e quiser atualizar o site:

```powershell
cd "c:\Repositórios\treino_inteligente_sales\github_pages"
git add .
git commit -m "Descrição da sua alteração"
git push
```

O deploy é **automático**! ⚡

---

## 🧪 Comandos para Testar Localmente

### Primeira vez (instalar dependências):
```powershell
cd "c:\Repositórios\treino_inteligente_sales\github_pages"
npm install
```

### Rodar servidor de desenvolvimento:
```powershell
npm run dev
```
Acesse: http://localhost:5173

### Testar build de produção:
```powershell
npm run build
npm run preview
```

---

## 🗑️ Se Precisar Recomeçar

Se algo der errado e você quiser recomeçar:

```powershell
cd "c:\Repositórios\treino_inteligente_sales\github_pages"
Remove-Item -Recurse -Force .git
git init
# ... e execute os comandos novamente
```

---

## 📋 Checklist Rápido

Antes de fazer push:
- [ ] Editei o `base` no `vite.config.ts`
- [ ] Revisei o conteúdo da página
- [ ] Link da Kiwify está correto
- [ ] Testei com `npm run build`

---

## 🆘 Erros Comuns

### Erro: "remote: Repository not found"
**Solução:** Verifique se o nome do usuário e repositório estão corretos no comando `git remote add origin`

### Erro: "failed to push"
**Solução:** Certifique-se de estar autenticado no Git:
```powershell
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### Site mostra 404 ou página em branco
**Solução:** Verifique o `base` no `vite.config.ts` - deve ser `"/nome-do-repo/"`

---

## 📱 Links Úteis

- **Criar Repositório:** https://github.com/new
- **Seus Repositórios:** https://github.com?tab=repositories
- **GitHub Pages Docs:** https://docs.github.com/pages

---

## ✅ Pronto!

Copie os comandos, substitua os dados necessários e execute!

**Boa sorte com suas vendas! 💰🚀**
