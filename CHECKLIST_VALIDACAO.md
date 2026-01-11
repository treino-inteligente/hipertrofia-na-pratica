# ✅ Checklist de Validação Pré-Deploy

Use este checklist para validar todas as mudanças antes de colocar a página no ar.

---

## 📱 1. TESTE VISUAL NO NAVEGADOR

### Desktop (1920x1080)

- [ ] Hero section: headline legível, CTA visível, sem quebras de layout
- [ ] Seção "Quem Sou Eu": placeholder de foto aparecendo, texto alinhado
- [ ] Seção "O Que Você Recebe": cards organizados, ícones visíveis
- [ ] Demonstração: placeholders de prints visíveis e centralizados
- [ ] Testimonials: 3 cards lado a lado
- [ ] FAQ: perguntas e respostas bem espaçadas
- [ ] Checkout: preço destacado, CTA centralizado
- [ ] Footer: links funcionando, e-mail visível

### Tablet (768x1024)

- [ ] Layout responsivo funcionando
- [ ] Textos legíveis (não muito pequenos)
- [ ] Botões clicáveis (não muito próximos)
- [ ] Imagens/placeholders adaptados

### Mobile (375x667 - iPhone SE)

- [ ] Hero: headline em 2-3 linhas, CTA grande e visível
- [ ] Todos os textos legíveis sem zoom
- [ ] Botão mobile fixo aparecendo (testado com scroll)
- [ ] Cards empilhados verticalmente
- [ ] Espaçamento adequado entre seções
- [ ] Sem texto cortado ou overflow horizontal

---

## 🔗 2. TESTE DE LINKS E NAVEGAÇÃO

### Links Internos

- [ ] Botão "Quero Acessar por R$ 19,90" → abre https://pay.kiwify.com.br/fUcu9RX
- [ ] Botão "Quero Acessar Agora" (seção O Que Você Recebe) → Kiwify
- [ ] Botão "Quero Começar Agora" (última chamada) → Kiwify
- [ ] Botão mobile fixo → Kiwify
- [ ] Todos os CTAs redirecionam para o mesmo link Kiwify

### Links do Footer

- [ ] E-mail de contato clicável (abre cliente de e-mail)
- [ ] Link "Política de Privacidade" → leva para /politica-privacidade.html (criar se não existir)
- [ ] Link "Termos de Uso" → leva para /termos-uso.html (criar se não existir)

### Teste de Redirecionamento Kiwify

- [ ] Abra o link da Kiwify em nova aba
- [ ] Confirme que o checkout carrega corretamente
- [ ] Confirme que o preço (R$ 19,90) está correto no checkout

---

## 📝 3. VALIDAÇÃO DE CONTEÚDO

### Textos Obrigatórios Preenchidos

- [ ] Nome real na seção "Quem Sou Eu" (removido placeholder)
- [ ] E-mail real no footer (removido placeholder)
- [ ] CNPJ ou CPF no footer (se aplicável)
- [ ] Textos da seção "Quem Sou Eu" ajustados à sua história

### Placeholders Para Substituir (CRÍTICO)

- [ ] Foto na seção "Quem Sou Eu" (remover emoji 👤)
- [ ] Print do PDF na seção "Demonstração"
- [ ] Print da Planilha na seção "Demonstração"
- [ ] Prints de feedback na seção "Prova Social"

### Verificação de Consistência

- [ ] Preço aparece sempre como "R$ 19,90" (verificar em 4 lugares)
- [ ] Menção à Kiwify aparece em todos os CTAs principais
- [ ] Garantia mencionada como "7 dias" (não 7 DIAS ou variações)
- [ ] Sem CAPS excessivo (verificar se não voltou por engano)

---

## 🎨 4. VALIDAÇÃO DE DESIGN

### Cores e Contraste

- [ ] Texto legível em fundo escuro/claro
- [ ] Botão accent (laranja/vermelho) destacado e visível
- [ ] Links hover mudando de cor
- [ ] Bordas e separadores visíveis

### Espaçamento

- [ ] Seções não coladas umas nas outras
- [ ] Padding adequado nos cards
- [ ] Margem entre textos e imagens

### Ícones

- [ ] Ícones carregando corretamente (lucide-react)
- [ ] Ícones alinhados com texto
- [ ] Tamanho adequado (não muito grandes ou pequenos)

---

## 🚀 5. VALIDAÇÃO TÉCNICA

### Performance

- [ ] Página carrega em menos de 3 segundos (teste no mobile)
- [ ] Imagens otimizadas (se já adicionou prints)
- [ ] Sem erros no console do navegador (F12 → Console)

### SEO Básico

- [ ] Title tag configurado: "Treino Inteligente: Hipertrofia na Prática"
- [ ] Meta description configurada (max 160 caracteres)
- [ ] Imagens com alt text (quando adicionar)

### Pixel do Meta Ads

- [ ] Pixel do Facebook instalado (se aplicável)
- [ ] Evento PageView disparando (verifique no Facebook Pixel Helper)
- [ ] Evento de clique no botão configurado (opcional)

---

## 📊 6. TESTE DO FLUXO COMPLETO

### Simulação de Compra (CRÍTICO)

1. [ ] Abra a página como novo visitante (modo anônimo)
2. [ ] Role até a primeira dobra → headline clara?
3. [ ] Leia "Quem Sou Eu" → você confia?
4. [ ] Veja "O Que Você Recebe" → ficou claro o produto?
5. [ ] Clique no CTA → vai para Kiwify?
6. [ ] Veja o checkout Kiwify → preço bate?
7. [ ] Volte para a página → leia FAQ → dúvidas respondidas?
8. [ ] Clique no botão mobile fixo (se mobile) → funciona?

### Teste com Amigo/Familiar

- [ ] Peça para alguém abrir a página (sem contexto prévio)
- [ ] Pergunte: "O que essa página vende?" (deve responder em 5 segundos)
- [ ] Pergunte: "Você confia nessa página?" (resposta honesta)
- [ ] Pergunte: "Ficou claro como receber o produto?"

---

## 🔒 7. VALIDAÇÃO LEGAL (OBRIGATÓRIO)

### Páginas Legais Criadas

- [ ] /politica-privacidade.html existe e está acessível
- [ ] /termos-uso.html existe e está acessível
- [ ] CNPJ ou CPF (se MEI) visível no footer

### Conformidade com LGPD (Brasil)

- [ ] Política de Privacidade menciona coleta de e-mail
- [ ] Política de Privacidade menciona uso de cookies/pixel (se aplicável)
- [ ] Termo de Uso menciona garantia de 7 dias
- [ ] Termo de Uso menciona que produto é digital (sem reembolso após download, exceto garantia)

### Kiwify/Plataforma de Pagamento

- [ ] Confirme que a Kiwify processa a garantia automaticamente
- [ ] Confirme que o e-mail de entrega está configurado na Kiwify
- [ ] Teste o fluxo de compra completo (mesmo que seja sua própria compra)

---

## 📧 8. TESTE DE ENTREGA DO PRODUTO

### Após Compra de Teste (FAÇA ISSO)

- [ ] Faça uma compra de teste (ou peça para alguém fazer)
- [ ] Confirme que o e-mail chega em até 10 minutos
- [ ] Verifique se o e-mail não cai no spam
- [ ] Teste os links de download do PDF e planilha
- [ ] Confirme que ambos os arquivos abrem corretamente

### Configuração no Kiwify

- [ ] Produto cadastrado com nome correto
- [ ] Preço configurado: R$ 19,90
- [ ] E-mail de entrega configurado com os links
- [ ] Garantia de 7 dias ativada
- [ ] Página de obrigado configurada (opcional)

---

## 🎯 9. CHECKLIST PRÉ-LANÇAMENTO

### Antes de Ativar os Anúncios

- [ ] Todos os itens acima validados ✅
- [ ] Placeholders de imagem substituídos por prints reais
- [ ] Links legais funcionando (Política/Termos)
- [ ] E-mail de contato real no footer
- [ ] Teste de compra completo realizado
- [ ] Pixel do Meta Ads funcionando (se aplicável)

### Backup e Segurança

- [ ] Código original salvo (antes das mudanças)
- [ ] Novo código commitado no Git
- [ ] Deploy feito no GitHub Pages
- [ ] URL final testada (não localhost)

---

## 🚨 10. ERROS COMUNS - VERIFIQUE ISTO

### Erros Críticos que Matam Conversão

- [ ] ❌ Link do checkout Kiwify quebrado ou errado
- [ ] ❌ Preço diferente na página vs checkout
- [ ] ❌ Links "Política" e "Termos" ainda apontando para "#"
- [ ] ❌ E-mail de entrega não configurado na Kiwify
- [ ] ❌ Página não responsiva no mobile
- [ ] ❌ Botão mobile fixo não aparecendo
- [ ] ❌ Console do navegador mostrando erros JavaScript

### Erros Médios que Reduzem Trust

- [ ] ⚠️ Placeholder de foto ainda aparecendo
- [ ] ⚠️ E-mail placeholder no footer
- [ ] ⚠️ Sem CNPJ/CPF no footer
- [ ] ⚠️ Placeholders de prints não substituídos
- [ ] ⚠️ Texto "Quem Sou Eu" genérico

---

## ✅ VALIDAÇÃO FINAL

Marque APENAS quando 100% de todos os itens acima estiverem OK:

- [ ] **TODOS os testes visuais passaram**
- [ ] **TODOS os links funcionando**
- [ ] **TODOS os placeholders substituídos**
- [ ] **Teste de compra completo realizado**
- [ ] **Páginas legais criadas e funcionando**
- [ ] **Deploy feito e URL final testada**

---

## 🎉 APÓS VALIDAÇÃO COMPLETA

Quando todos os checkboxes acima estiverem marcados:

1. ✅ Ative os anúncios no Meta Ads
2. 📊 Configure Google Analytics (opcional, mas recomendado)
3. 📧 Monitore seu e-mail de suporte nos primeiros 3 dias
4. 📈 Acompanhe métricas: LP View → Checkout → Compra
5. 🔄 Aguarde 3-7 dias antes de fazer mais mudanças

---

## 📞 SUPORTE PÓS-DEPLOY

Se algo der errado após o deploy:

**Problema: Botão não redireciona para Kiwify**

- Verifique se o link está correto (https://pay.kiwify.com.br/fUcu9RX)
- Teste em modo anônimo
- Limpe cache do navegador

**Problema: Página quebrada no mobile**

- Force um hard refresh (Ctrl+Shift+R)
- Teste em dispositivo real (não apenas emulador)

**Problema: Cliente não recebe e-mail**

- Verifique configuração de entrega na Kiwify
- Peça para verificar spam
- Teste com outro e-mail

**Problema: Links legais 404**

- Confirme que os arquivos existem na pasta raiz
- Confirme que o deploy incluiu esses arquivos
- Teste a URL direta: seudominio.com/politica-privacidade.html

---

**Boa sorte! Esta é sua checklist de ouro para um deploy sem erros. 🚀**
