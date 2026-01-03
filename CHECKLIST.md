# 🎯 CHECKLIST FINAL ANTES DO DEPLOY

## ✅ Verificações Obrigatórias

### 1. Link de Pagamento
- [ ] O link da Kiwify está correto em `src/pages/Home.tsx`
- [ ] Link atual: `https://pay.kiwify.com.br/fUcu9RX`
- [ ] Testei o link e ele abre corretamente

### 2. Conteúdo
- [ ] Revisei todo o texto da página
- [ ] Verifiquei se não há erros de português
- [ ] Confirmei que o preço está correto (R$ 19,90)
- [ ] Timer de countdown está funcionando

### 3. Imagens
- [ ] Todas as imagens estão na pasta `public/images/`
- [ ] As 3 imagens principais existem:
  - `hero-athlete.jpg`
  - `product-showcase.jpg`
  - `transformation-abstract.jpg`
- [ ] Testei a página e todas as imagens carregaram

### 4. Configuração do Vite
- [ ] Configurei o `base` corretamente no `vite.config.ts`:
  - Se repositório for `seuusuario.github.io`: deixei `base: "/"`
  - Se repositório for outro nome: alterei para `base: "/nome-do-repo/"`

### 5. Testes Locais
- [ ] Rodei `npm install` sem erros
- [ ] Rodei `npm run dev` e testei localmente
- [ ] Rodei `npm run build` sem erros
- [ ] Testei responsividade (mobile, tablet, desktop)

### 6. GitHub
- [ ] Criei o repositório no GitHub (público)
- [ ] Anotei o nome exato do repositório: ___________________
- [ ] Confirmo que é um repositório PÚBLICO

---

## 📋 Informações para Anotar

**Nome do usuário GitHub:** ___________________

**Nome do repositório:** ___________________

**URL final do site será:**
- Repositório de usuário: `https://[usuario].github.io/`
- Repositório de projeto: `https://[usuario].github.io/[repositorio]/`

---

## 🚀 Próximos Passos

Depois que o site estiver no ar:

1. **Teste completo**
   - [ ] Abrir em diferentes navegadores (Chrome, Firefox, Safari)
   - [ ] Testar em celular real
   - [ ] Clicar no botão de compra e verificar se abre a Kiwify

2. **Analytics (Opcional)**
   - [ ] Configurar Google Analytics
   - [ ] Adicionar pixel do Facebook
   - [ ] Configurar Google Tag Manager

3. **SEO (Opcional)**
   - [ ] Adicionar domínio personalizado
   - [ ] Configurar meta tags OpenGraph
   - [ ] Enviar para Google Search Console

4. **Marketing**
   - [ ] Criar posts nas redes sociais
   - [ ] Preparar campanhas de tráfego pago
   - [ ] Testar diferentes CTAs

---

## ⚠️ IMPORTANTE - BASE PATH

**Se você criou um repositório de projeto** (ex: `treino-inteligente`), **OBRIGATORIAMENTE** edite o `vite.config.ts`:

```typescript
// Linha 7 do vite.config.ts
base: "/treino-inteligente/", // ⚠️ Substitua pelo nome do SEU repositório!
```

**Se você criou `seuusuario.github.io`**, deixe como está:

```typescript
base: "/",
```

---

## 📞 Ajuda

Se algo não funcionar:
1. Verifique os logs na aba "Actions" do GitHub
2. Confirme que o repositório está público
3. Aguarde 5-10 minutos após o primeiro deploy
4. Limpe o cache do navegador (Ctrl + Shift + R)

**Data da criação:** 01/01/2026
**Versão:** 1.0.0
