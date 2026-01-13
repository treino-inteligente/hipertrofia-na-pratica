# 📊 GUIA DE CONFIGURAÇÃO - SISTEMA DE ANALYTICS

## 🎯 O que foi implementado?

Seu site agora tem um **sistema completo de tracking** que vai te mostrar EXATAMENTE:

- ✅ Quantas pessoas clicam em cada botão CTA
- ✅ Quanto tempo as pessoas ficam na página
- ✅ Até onde elas scrollam (25%, 50%, 75%, 100%)
- ✅ Quais seções da página são visualizadas
- ✅ Heatmaps mostrando onde clicam (Microsoft Clarity)
- ✅ Gravações das sessões dos usuários (Microsoft Clarity)

---

## 🚀 PASSO A PASSO PARA ATIVAR

### 1️⃣ Google Analytics 4 (GA4) - ESSENCIAL

**O que é:** Rastreamento completo de eventos, tempo na página, conversões.

**Como configurar:**

1. Acesse: https://analytics.google.com/
2. Crie uma conta e uma propriedade
3. Copie seu ID (formato: `G-XXXXXXXXXX`)
4. No arquivo `index.html`, substitua `G-XXXXXXXXXX` pelo seu ID real:

```html
<!-- Linha 26 do index.html -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=SEU_ID_AQUI"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "SEU_ID_AQUI", {
    send_page_view: true,
  });
</script>
```

**Onde ver os dados:**

- Dashboard do Google Analytics
- Eventos personalizados em: `Engajamento > Eventos`

---

### 2️⃣ Meta Pixel (Facebook/Instagram Ads) - SE VOCÊ USA ADS

**O que é:** Rastreamento de conversões para anúncios no Facebook/Instagram.

**Como configurar:**

1. Acesse: https://business.facebook.com/events_manager
2. Crie um Pixel
3. Copie o ID do Pixel (sequência de números)
4. No arquivo `index.html`, substitua `YOUR_PIXEL_ID` pelo seu ID:

```html
<!-- Linha 36 do index.html -->
fbq('init', 'SEU_PIXEL_ID_AQUI');
```

**Onde ver os dados:**

- Facebook Events Manager
- Dentro do Gerenciador de Anúncios

---

### 3️⃣ Microsoft Clarity - SUPER RECOMENDADO (100% GRÁTIS!)

**O que é:**

- **Heatmaps:** Mostra EXATAMENTE onde as pessoas clicam
- **Gravações de Sessão:** Você assiste o usuário navegando na sua página
- **Análise de Comportamento:** Rage clicks, dead clicks, etc.

**Como configurar:**

1. Acesse: https://clarity.microsoft.com/
2. Crie um projeto gratuito
3. Copie o ID do projeto
4. No arquivo `index.html`, substitua `YOUR_CLARITY_ID`:

```html
<!-- Linha 50 do index.html -->
(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); })(window,
document, "clarity", "script", "SEU_CLARITY_ID_AQUI");
```

**Onde ver os dados:**

- Dashboard do Microsoft Clarity
- Aba "Recordings" = gravações das sessões
- Aba "Heatmaps" = onde as pessoas clicam

---

## 🎯 EVENTOS RASTREADOS AUTOMATICAMENTE

Cada botão CTA da sua página está rastreando:

| Botão                                  | Localização   | Nome do Evento                       |
| -------------------------------------- | ------------- | ------------------------------------ |
| "Quero Usar Esse Sistema por R$ 19,90" | Hero (topo)   | `cta_click` - hero_section           |
| "Quero Usar Esse Sistema"              | Após solução  | `cta_click` - after_solution         |
| "Quero Usar Esse sistema por R$ 19,90" | Garantia      | `cta_click` - guarantee_section      |
| "Quero Começar Agora"                  | Após FAQ      | `cta_click` - after_faq              |
| Botão fixo mobile                      | Rodapé mobile | `cta_click` - floating_mobile_button |

### Outros eventos automáticos:

- ✅ **Scroll Depth:** 25%, 50%, 75%, 90%, 100%
- ✅ **Tempo na Página:** Registrado ao sair
- ✅ **Begin Checkout:** Enviado ao Meta Pixel

---

## 📈 COMO ANALISAR OS DADOS

### 🔍 Perguntas que você vai conseguir responder:

**1. Qual botão CTA converte mais?**

- GA4: Vá em `Engajamento > Eventos` e filtre por `cta_click`
- Compare qual `button_location` tem mais cliques

**2. As pessoas estão scrollando até o final?**

- GA4: Filtre evento `scroll_depth`
- Se muita gente não passa de 50%, seu conteúdo do meio está fraco

**3. Onde as pessoas clicam na página?**

- Clarity: Aba "Heatmaps"
- Você vai ver um mapa de calor visual

**4. Por que as pessoas não compram?**

- Clarity: Assista as gravações de sessão
- Veja EXATAMENTE o que elas fazem antes de sair

**5. Quanto tempo ficam na página?**

- GA4: Métrica `time_spent_seconds`
- Se for menos de 30s, sua página não prende atenção

---

## 🚨 DIAGNÓSTICO: POR QUE NINGUÉM COMPRA?

Com base no seu problema (3% CTR mas zero vendas), aqui está o que você deve fazer:

### 📊 Semana 1 - Coleta de Dados

1. Configure os 3 sistemas acima
2. Mande tráfego (pelo menos 100 visitantes)
3. Não mude NADA na página ainda

### 🔍 Semana 2 - Análise

Perguntas para responder:

**a) As pessoas estão scrollando?**

- Se param em menos de 50% → Seu hero não prende atenção
- Se param em 50-75% → Problema na seção de solução/benefícios
- Se chegam em 90%+ mas não compram → Problema de confiança/preço

**b) Onde elas clicam?**

- Heatmap no Clarity mostra se clicam nos botões
- Se NÃO clicam = botão não chamativo ou sem urgência
- Se clicam mas não compram = problema no checkout/preço

**c) Quanto tempo ficam?**

- Menos de 1 minuto = não leem nada, só scrollam
- 1-3 minutos = leem superficialmente
- Mais de 3 minutos = leem tudo mas ainda não compram

### 🎯 Hipóteses Comuns:

| Sintoma                          | Diagnóstico                | Solução                                      |
| -------------------------------- | -------------------------- | -------------------------------------------- |
| Param no hero (< 30% scroll)     | Headline fraca             | Testar nova copy mais direta                 |
| Scrollam tudo mas não clicam CTA | Botão não visível          | Aumentar tamanho/cor do botão                |
| Clicam CTA mas não compram       | Problema no checkout       | Verificar Kiwify, preço, método de pagamento |
| Tempo < 1 min na página          | Não confiam / não entendem | Adicionar prova social, depoimentos          |
| Rage clicks (Clarity)            | Elemento quebrado          | Corrigir elemento que não responde           |

---

## 🛠️ FERRAMENTAS EXTRAS (OPCIONAL)

### Hotjar (alternativa ao Clarity)

- Pago, mas tem trial gratuito
- https://www.hotjar.com/

### Google Tag Manager

- Gerenciamento de tags mais avançado
- https://tagmanager.google.com/

---

## ✅ CHECKLIST DE ATIVAÇÃO

- [ ] Criar conta no Google Analytics 4
- [ ] Substituir `G-XXXXXXXXXX` pelo ID real no `index.html`
- [ ] Criar conta no Microsoft Clarity (ESSENCIAL!)
- [ ] Substituir `YOUR_CLARITY_ID` pelo ID real no `index.html`
- [ ] (Opcional) Criar Meta Pixel se usa Facebook Ads
- [ ] Fazer deploy da versão atualizada
- [ ] Testar clicando nos botões e verificando no console do navegador (F12)
- [ ] Aguardar 24h e começar a analisar dados

---

## 🎯 PRÓXIMOS PASSOS

1. **Configure HOJE** os sistemas (15 minutos)
2. **Aguarde 100+ visitantes** antes de tirar conclusões
3. **Analise os dados** usando as perguntas acima
4. **Faça mudanças baseadas em dados**, não em achismo
5. **Repita o ciclo**

---

## 📞 SUPORTE

Se tiver dúvidas, abra o console do navegador (F12) ao clicar nos botões.
Você deve ver mensagens como:

```
📊 GA4 Event: cta_click {button_location: "hero_section", ...}
🎯 CTA Clicado: hero_section
```

Se ver essas mensagens, está funcionando! ✅

---

**Última atualização:** 13/01/2026
