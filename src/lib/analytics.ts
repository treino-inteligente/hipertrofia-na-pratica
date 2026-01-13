/**
 * Sistema de Analytics Simplificado
 * 
 * Tracking básico para Microsoft Clarity
 * O Clarity já captura automaticamente: scroll, cliques, tempo na página, heatmaps
 * Esses eventos customizados aparecem no timeline das gravações
 */

/**
 * Rastreia cliques nos botões CTA
 * Isso aparece no Clarity como um evento customizado na linha do tempo
 */
export const trackCTAClick = (location: string, buttonText: string) => {
  // Log para debug (visível no console do navegador)
  console.log('🎯 CTA Clicado:', location, '-', buttonText);

  // Tag customizada para o Clarity (aparece nas gravações)
  if (typeof window !== 'undefined' && (window as any).clarity) {
    (window as any).clarity('set', 'cta_click', location);
  }
};

/**
 * Inicializa tracking básico
 * O Clarity já rastreia automaticamente scroll e tempo
 */
export const trackTimeOnPage = () => {
  // Clarity já faz isso automaticamente, mas vamos logar
  if (typeof window === 'undefined') return;
  
  const startTime = Date.now();
  
  window.addEventListener('beforeunload', () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    console.log(`⏱️ Tempo na página: ${timeSpent}s`);
  });
};

/**
 * Track scroll depth
 * Clarity já rastreia, mas podemos adicionar tags customizadas
 */
export const trackScrollDepth = () => {
  if (typeof window === 'undefined') return;

  let maxScroll = 0;
  const thresholds = [25, 50, 75, 100];
  const tracked = new Set<number>();

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollPercentage = Math.round(
      ((scrollTop + windowHeight) / documentHeight) * 100
    );

    if (scrollPercentage > maxScroll) {
      maxScroll = scrollPercentage;

      thresholds.forEach(threshold => {
        if (scrollPercentage >= threshold && !tracked.has(threshold)) {
          tracked.add(threshold);
          console.log(`📜 Scroll: ${threshold}%`);
          
          // Tag no Clarity
          if ((window as any).clarity) {
            (window as any).clarity('set', `scroll_${threshold}`, 'true');
          }
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
};
