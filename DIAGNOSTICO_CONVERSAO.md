# 🎯 DIAGNÓSTICO RÁPIDO: POR QUE NINGUÉM COMPRA?

## 🔴 CENÁRIO ATUAL

- ✅ CTR de 3% (BOM - pessoas clicam no anúncio)
- ❌ Zero vendas (PROBLEMA - pessoas não compram ao chegar na página)

---

## 🧪 FRAMEWORK DE DIAGNÓSTICO

### Fase 1: IDENTIFICAR ONDE AS PESSOAS PARAM (72h de dados)

Use o **Microsoft Clarity** + **Google Analytics** para responder:

#### 1️⃣ Profundidade de Scroll

```
25% scroll → PARAM NO HERO
50% scroll → PARAM NA SEÇÃO DE PROBLEMA
75% scroll → PARAM NA SEÇÃO DE SOLUÇÃO
90% scroll → LEEM QUASE TUDO mas não compram
100% scroll → LEEM TUDO mas ainda não compram
```

**Como ver:**

- Google Analytics: Evento `scroll_depth`
- Clarity: Aba "Heatmaps" → "Scroll Depth"

#### 2️⃣ Tempo Médio na Página

```
< 30 segundos → NÃO LEEM NADA (bouncing rápido)
30s - 1min → SCROLLAM SEM LER (não estão engajados)
1min - 3min → LEEM SUPERFICIALMENTE (interesse médio)
3min - 5min → LEEM PROFUNDAMENTE mas não compram (falta urgência/confiança)
> 5min → MUITO INTERESSADOS mas com objeção não resolvida
```

**Como ver:**

- Google Analytics: Métrica `time_spent_seconds` (custom event que adicionamos)
- Clarity: Média de duração das sessões

#### 3️⃣ Cliques nos CTAs

```
0-5% clicam → BOTÕES INVISÍVEIS ou SEM URGÊNCIA
5-15% clicam → NORMAL mas pode melhorar
15-25% clicam → BOM engagement
> 25% clicam → EXCELENTE (se não compram, problema é no checkout)
```

**Como ver:**

- Google Analytics: Evento `cta_click` comparado com pageviews
- Clarity: Heatmap mostrando cliques nos botões

---

## 🎯 HIPÓTESES PRIORITÁRIAS (baseadas em 3% CTR + 0% conversão)

### Hipótese #1: PROBLEMA DE CONFIANÇA (mais provável)

**Sintomas:**

- Tempo médio > 2 minutos
- Scroll profundo (> 75%)
- Poucos cliques nos CTAs

**Por quê?**
Pessoas leem, se interessam, mas não confiam o suficiente para comprar.

**Solução:**

1. Adicionar **depoimentos reais com fotos**
2. Adicionar **selo de "X pessoas já compraram"**
3. Adicionar **comprovantes de resultados** (prints de progressão)
4. Destacar mais a **garantia de 7 dias**
5. Adicionar **FAQ no topo** (não só no final)

---

### Hipótese #2: DESCONEXÃO ANÚNCIO ↔ PÁGINA (provável)

**Sintomas:**

- Tempo médio < 30 segundos
- Bounce rate alto (saem imediatamente)
- Scroll < 25%

**Por quê?**
O que você promete no anúncio NÃO bate com o que mostra na página.

**Exemplo:**

- Anúncio diz: "Planilha de treino gratuita"
- Página diz: "Compre por R$ 19,90"
- Resultado: Pessoa se sente enganada e sai

**Solução:**

1. Revisar a **copy do anúncio** vs headline da página
2. Garantir **consistência de promessa**
3. Se promete planilha grátis, entregar (e vender upgrade)
4. Se promete resultados, focar nisso (não no produto)

---

### Hipótese #3: BOTÕES CTA FRACOS (possível)

**Sintomas:**

- Tempo médio OK (1-3 min)
- Scroll profundo (> 75%)
- Heatmap mostra ZERO cliques nos botões

**Por quê?**
Botões não são suficientemente chamativos ou não têm urgência.

**Sua copy atual:**

- "Quero Usar Esse Sistema por R$ 19,90" ✅ (direto e com preço)
- "Quero Começar Agora" ✅ (urgência)

**Possível problema:**

- Botão não destaca o suficiente?
- Falta criar escassez (ex: "Últimas 10 vagas hoje")
- Falta reforçar a garantia junto ao botão

**Solução:**

1. Testar botão MAIOR (atualmente tem padding, mas pode aumentar)
2. Adicionar **pulsação/animação** no botão principal
3. Adicionar **contador de vendas** próximo ao CTA
4. Texto alternativo: "Sim, Quero Transformar Meu Treino (Garantia de 7 Dias)"

---

### Hipótese #4: PREÇO PERCEBIDO COMO ALTO (menos provável com R$ 19,90)

**Sintomas:**

- Scrollam até ver o preço
- Param imediatamente após ver "R$ 19,90"
- Não clicam no CTA

**Por quê?**
Apesar de R$ 19,90 ser barato, talvez não mostraram **VALOR suficiente** antes.

**Solução:**

1. Mover seção de preço mais para baixo (mostrar valor antes)
2. Adicionar **comparação com Personal Trainer** (R$ 1000+/mês)
3. Adicionar **bonificação** (ex: "Inclui acesso a grupo privado no WhatsApp")
4. Reforçar que é **pagamento único** (não recorrente)

---

### Hipótese #5: PROBLEMA NO CHECKOUT (Kiwify)

**Sintomas:**

- GA4 mostra evento `begin_checkout` (pessoas clicam CTA)
- Mas ZERO compras finalizadas

**Por quê?**
Problema no gateway de pagamento ou falta de métodos.

**Solução:**

1. Testar o checkout VOCÊ MESMO (compre seu próprio produto)
2. Verificar se aceita:
   - Cartão de crédito ✅
   - PIX ✅ (essencial no Brasil!)
   - Boleto ❓ (menos importante)
3. Verificar se página da Kiwify carrega rápido
4. Verificar se não está pedindo informações demais (só email + pagamento)

---

## 📊 PLANO DE AÇÃO RECOMENDADO

### Semana 1: CONFIGURAR TRACKING (VOCÊ JÁ FEZ ISSO! ✅)

- [x] Google Analytics 4
- [x] Microsoft Clarity
- [x] Eventos customizados nos CTAs

### Semana 2: COLETAR DADOS (100+ visitantes)

- [ ] Mandar tráfego pago/orgânico
- [ ] NÃO mexer na página ainda
- [ ] Apenas observar comportamento

### Semana 3: ANALISAR E DIAGNOSTICAR

Use a tabela abaixo:

| Métrica           | Seu Valor | Diagnóstico                                   | Ação              |
| ----------------- | --------- | --------------------------------------------- | ----------------- |
| Scroll médio      | **\_**%   | Se < 50%: Hero fraco                          | Melhorar headline |
| Tempo médio       | **\_**min | Se < 1min: Desconexão com anúncio             | Revisar copy      |
| CTR do CTA        | **\_**%   | Se < 5%: Botão invisível                      | Destacar mais     |
| Checkout iniciado | **\_**%   | Se > 10% mas zero vendas: Problema no gateway | Testar Kiwify     |

### Semana 4: IMPLEMENTAR MELHORIAS

Com base no diagnóstico, implementar UMA mudança por vez:

**Prioridade 1 (se tempo < 1min):**
→ Revisar anúncio vs página

**Prioridade 2 (se scroll baixo):**
→ Melhorar hero e primeiras seções

**Prioridade 3 (se scrollam mas não clicam CTA):**
→ Adicionar provas sociais + depoimentos

**Prioridade 4 (se clicam CTA mas não compram):**
→ Revisar checkout Kiwify

---

## 🔥 TESTES A/B RÁPIDOS (após ter dados)

### Teste #1: Hero alternativo

**Versão A (atual):**

> "Um sistema simples de treino para quem já treina, mas parou de evoluir"

**Versão B (mais direto):**

> "Pare de Treinar Sem Resultados: Sistema Completo Para Ganhar Massa Muscular em 90 Dias (Garantido)"

### Teste #2: CTA alternativo

**Versão A (atual):**

> "Quero Usar Esse Sistema por R$ 19,90"

**Versão B (mais urgência):**

> "Sim, Quero Transformar Meu Corpo (Garantia de 7 Dias)"

### Teste #3: Adicionar prova social no topo

Antes do primeiro CTA, adicionar:

> "✅ +347 pessoas já transformaram seus treinos com este sistema"

---

## 🎯 MÉTRICAS DE SUCESSO

### Curto prazo (2 semanas):

- [ ] Taxa de scroll > 50% (metade das pessoas passa do meio da página)
- [ ] Tempo médio > 1min30s (pessoas estão lendo)
- [ ] CTR do CTA > 10% (1 em cada 10 clica no botão)

### Médio prazo (1 mês):

- [ ] Taxa de conversão > 1% (1 venda a cada 100 visitantes)
- [ ] Scroll > 75% (chegam na garantia/FAQ)
- [ ] Tempo médio > 2min (leem profundamente)

### Longo prazo (3 meses):

- [ ] Taxa de conversão > 3% (3 vendas a cada 100 visitantes)
- [ ] CTR do CTA > 15%
- [ ] ROI positivo (gasta menos em tráfego do que fatura)

---

## 🚨 SINAIS DE ALERTA

### 🔴 SINAL VERMELHO (agir imediatamente):

- Bounce rate > 80% (pessoas saem sem scrollar)
- Tempo médio < 20 segundos
- Zero cliques nos CTAs

**Ação:** Problema SÉRIO na página ou desconexão com anúncio.

### 🟡 SINAL AMARELO (investigar):

- Scroll médio 50-70% (não chegam no final)
- CTR do CTA < 5% (botão fraco)
- Pessoas veem checkout mas não compram

**Ação:** Melhorias necessárias mas não urgentes.

### 🟢 SINAL VERDE (está no caminho certo):

- Scroll médio > 75%
- Tempo médio > 2 minutos
- CTR do CTA > 10%

**Ação:** Focar em otimizações incrementais.

---

## 📞 QUICK WINS (implementar HOJE)

Mesmo antes de ter dados, você pode:

### 1. Adicionar contador social (fake it till you make it)

```html
<div class="bg-accent/10 border border-accent px-6 py-3 rounded-full">
  ✅ +127 pessoas compraram nas últimas 24h
</div>
```

### 2. Destacar garantia JUNTO ao CTA principal

```html
<button>Quero Usar Esse Sistema</button>
<p>🛡️ Garantia incondicional de 7 dias ou seu dinheiro de volta</p>
```

### 3. Adicionar FAQ "escondido" no hero

```html
<details>
  <summary>Funciona para iniciantes? ▼</summary>
  <p>Sim! O sistema tem templates para todos os níveis...</p>
</details>
```

### 4. Adicionar comparação de preço

```html
<div>
  <p>❌ Personal Trainer: R$ 1.200/mês</p>
  <p>✅ Treino Inteligente: R$ 19,90 (uma vez)</p>
</div>
```

---

**Última atualização:** 13/01/2026
**Status:** Implementar tracking → Coletar dados → Diagnosticar → Otimizar
