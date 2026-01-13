# 🎯 GUIA RÁPIDO - Microsoft Clarity

## ⚡ 5 Minutos Para Configurar

### PASSO 1: Criar conta (2 min)

1. Acesse: https://clarity.microsoft.com/
2. Faça login com qualquer conta (Microsoft, Google, Facebook)
3. Clique em "Create Project"
4. Nome do projeto: "Hipertrofia na Prática"
5. URL do site: seu domínio
6. Clique em "Create"

### PASSO 2: Copiar o ID (1 min)

1. Na tela que aparecer, copie o código
2. Procure por algo como: `clarity("script", "ABC123XYZ")`
3. Copie apenas a parte `ABC123XYZ` (seu ID único)

### PASSO 3: Colar no código (1 min)

1. Abra o arquivo `index.html`
2. Na linha 33, onde está escrito `YOUR_CLARITY_ID`
3. Substitua por seu ID (ex: `ABC123XYZ`)

Exemplo:

```html
<!-- ANTES -->
})(window, document, "clarity", "script", "YOUR_CLARITY_ID");

<!-- DEPOIS -->
})(window, document, "clarity", "script", "ABC123XYZ");
```

### PASSO 4: Fazer deploy (1 min)

```bash
pnpm build
# Faça upload para seu servidor
```

### PASSO 5: Verificar (30s)

1. Acesse seu site
2. Aguarde 10 minutos
3. Volte no Clarity
4. Já vai ter gravações! 🎉

---

## 📊 Como Usar o Clarity

### Dashboard Principal

https://clarity.microsoft.com/projects/view/SEU_ID/dashboard

Você verá:

- **Sessions:** Quantas pessoas visitaram
- **Pages per session:** Quantas páginas viram
- **Avg. session time:** Tempo médio na página

### 🎥 Recordings (O MAIS IMPORTANTE!)

Clique em "Recordings" no menu lateral

**O que você vai ver:**

- Lista de todas as gravações
- Você clica em uma e ASSISTE a pessoa navegando
- Vê EXATAMENTE onde ela clica, quanto tempo fica, onde para

**Como analisar:**

1. Ordene por "Session duration" (mais longo = mais interessado)
2. Assista pelo menos 10 gravações
3. Procure padrões:
   - Param no mesmo lugar?
   - Tentam clicar em algo que não funciona?
   - Scrollam rápido sem ler?
   - Clicam no CTA mas voltam?

### 🔥 Heatmaps

Clique em "Heatmaps" no menu lateral

**O que você vai ver:**

- Mapa de calor da página
- Vermelho = muitos cliques
- Azul = poucos cliques
- Branco = ninguém clica

**Como analisar:**

1. Seus botões CTA estão vermelhos? ✅ BOM
2. Estão azuis/brancos? ❌ PROBLEMA - botão não visível
3. Pessoas clicam em coisas que não são clicáveis? ❌ Confusão

### 📜 Scroll Depth

Ainda nos Heatmaps, veja a barra lateral

**O que você vai ver:**

- % de pessoas que scrollam até cada ponto
- 100% no topo (óbvio)
- Se cai pra 20% no meio = problema

**Como analisar:**

- Se param em 30-40% = Hero não prende atenção
- Se param em 60-70% = Seção de problema/solução fraca
- Se chegam em 90%+ = Leem tudo mas não compram (falta confiança)

---

## 🎯 Respondendo Suas Perguntas

### "Por que ninguém compra?"

**Cenário 1: Param no hero (< 30% scroll)**
→ Sua headline não prende atenção  
→ Solução: Testar headline mais direta

**Cenário 2: Scrollam tudo mas não clicam CTA**
→ Botão não está visível o suficiente  
→ Solução: Aumentar tamanho/cor do botão

**Cenário 3: Clicam CTA mas voltam**
→ Problema no checkout ou preço assustou  
→ Solução: Verificar Kiwify, facilitar pagamento

**Cenário 4: Tempo médio < 1 minuto**
→ Não estão engajados, só scrollando  
→ Solução: Adicionar prova social no topo

**Cenário 5: Tentam clicar em coisas (rage clicks)**
→ Algo está quebrado  
→ Solução: Corrigir elemento que não responde

---

## 🚨 Sinais de Alerta

### 🔴 CRÍTICO

- Tempo médio < 30 segundos
- Scroll médio < 25%
- Zero cliques nos botões CTA
  → **Problema sério:** Desconexão com anúncio ou página horrível

### 🟡 ATENÇÃO

- Tempo médio 1-2 minutos
- Scroll médio 40-60%
- Poucos cliques nos CTAs
  → **Problema médio:** Falta confiança ou botão fraco

### 🟢 BOM (mas ainda sem vendas?)

- Tempo médio > 3 minutos
- Scroll médio > 80%
- Clicam nos CTAs
  → **Problema:** Checkout ou preço

---

## 💡 Quick Wins (baseado no que você VER)

### Se pessoas param no hero:

```tsx
// Testar headline mais direta
"PARE de Treinar Sem Resultados";
// Em vez de:
"Um sistema simples de treino...";
```

### Se scrollam mas não clicam CTA:

```css
/* Botão maior e mais chamativo */
.btn-cta {
  transform: scale(1.1);
  animation: pulse 2s infinite;
}
```

### Se clicam CTA mas não compram:

```html
<!-- Adicionar próximo ao botão -->
<p>🛡️ Garantia de 7 dias ou seu dinheiro de volta</p>
<p>✅ +127 pessoas compraram hoje</p>
```

---

## 📞 FAQ

**Q: Quanto tempo leva pra aparecer dados?**  
A: 10-15 minutos após o primeiro visitante

**Q: Quantas gravações preciso assistir?**  
A: Pelo menos 10 para identificar padrões

**Q: E se ninguém visitar meu site?**  
A: Você mesmo pode testar (mas use aba anônima)

**Q: Clarity é realmente grátis?**  
A: Sim! Sem limite, sem cartão, 100% gratuito

**Q: Posso adicionar GA4 depois?**  
A: Sim! Mas pra descobrir o problema, Clarity já basta

---

## ✅ Checklist

- [ ] Conta criada no Clarity
- [ ] ID copiado
- [ ] ID colado no `index.html` (linha 33)
- [ ] Build feito (`pnpm build`)
- [ ] Deploy realizado
- [ ] Site acessado (gerar primeira gravação)
- [ ] Voltei ao Clarity e vi a gravação
- [ ] Assisti pelo menos 10 gravações
- [ ] Identifiquei o padrão do problema
- [ ] Implementei primeira melhoria

---

## 🎯 O Que Fazer HOJE

1. **Configurar Clarity** (5 min)
2. **Mandar tráfego** (seus anúncios)
3. **Aguardar 100 visitantes** (1-2 dias)
4. **Assistir gravações** (1 hora)
5. **Identificar problema** (óbvio após ver os vídeos)
6. **Implementar fix** (depende do problema)
7. **Repetir**

---

**Última atualização:** 13/01/2026  
**Status:** ✅ Código simplificado | ⏳ Aguardando configuração do Clarity  
**Próximo passo:** https://clarity.microsoft.com/ → Criar projeto → Copiar ID
