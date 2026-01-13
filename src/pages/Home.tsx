import { Button } from "@/components/ui/button";
import { Check, Zap, BookOpen, BarChart3, AlertTriangle, TrendingUp, Shield, Clock, Target, Flame, Award, Users, Calendar, Trophy, X, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { trackCTAClick, trackScrollDepth, trackTimeOnPage } from "@/lib/analytics";

/**
 * DESIGN PHILOSOPHY: Dark Intensity
 * - Deep charcoal background (#1a1a1a) with electric orange accents (#FF6B35)
 * - Typography: Space Grotesk (headlines) + Inter (body)
 * - High contrast, minimal elements, maximum focus on CTA
 * - Animations: Smooth fade-ins, glowing hover effects, parallax depth
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Inicializar analytics ao carregar a página
  useEffect(() => {
    trackTimeOnPage();
    trackScrollDepth();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* ============ HERO SECTION - REFORMULADO ============ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 pb-12 md:pb-16">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero-athlete.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
            transform: `translateY(${isScrolled ? 50 : 0}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60 z-1" />

        {/* Content */}
        <div className="container relative z-10 max-w-6xl mx-auto px-4">
          {/* ========== MOBILE: Ordem otimizada ========== */}
          <div className="block md:hidden space-y-6">
            {/* 1. Badge + Headline curta e direta */}
            <div className="space-y-3 text-center animate-fade-in">
              <div className="inline-block bg-accent/10 border border-accent px-4 py-2 rounded-full">
                <span className="text-xs font-bold text-accent uppercase">Transformação Real</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-black leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                4 Anos Treinando
                <br />
                <span className="text-destructive">SEM Resultado</span>
                <br />
                <span className="text-accent">vs</span>
                <br />
                1 Ano COM Método
              </h1>
            </div>

            {/* 2. FOTOS GRANDES - Prova visual IMEDIATA */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <div className="relative rounded-xl overflow-hidden border-4 border-destructive shadow-2xl">
                  <img 
                    src="/hipertrofia-na-pratica/images/antes.jpg" 
                    alt="Antes - 4 anos sem método"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-destructive text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg">
                    ANTES
                  </div>
                </div>
                <p className="text-xs text-center text-destructive font-bold">
                  4 anos NO ESCURO
                </p>
              </div>

              <div className="space-y-2">
                <div className="relative rounded-xl overflow-hidden border-4 border-accent shadow-2xl animate-pulse">
                  <img 
                    src="/hipertrofia-na-pratica/images/depois.jpg" 
                    alt="Depois - 1 ano com método"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-accent text-background text-xs px-3 py-1.5 rounded-full font-bold shadow-lg">
                    DEPOIS
                  </div>
                </div>
                <p className="text-xs text-center text-accent font-bold">
                  1 ano COM ESTRUTURA
                </p>
              </div>
            </div>

            {/* 3. Subheadline compacta */}
            <div className="bg-background/80 border-2 border-accent/30 rounded-lg p-4 text-center">
              <p className="text-sm text-foreground font-semibold">
                O problema não era esforço.
                <br />
                Era <span className="text-accent">treinar sem método</span>.
              </p>
            </div>

            {/* 4. CTA GIGANTE */}
            <button
              onClick={() => {
                trackCTAClick('hero_section_mobile', 'Quero Transformar Meu Treino');
                window.location.href = "https://pay.kiwify.com.br/fUcu9RX";
              }}
              className="btn-cta text-lg px-6 py-7 shadow-2xl shadow-accent/50 w-full animate-pulse"
            >
              <span className="font-black">Quero Este Método por R$ 19,90</span>
            </button>

            {/* 5. Trust badges */}
            <div className="flex items-center justify-center gap-4 text-xs">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Shield className="w-4 h-4 text-accent" />
                <span className="font-semibold">Garantia 7 dias</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Zap className="w-4 h-4 text-accent" />
                <span className="font-semibold">Acesso na hora</span>
              </div>
            </div>
          </div>

          {/* ========== DESKTOP: Layout 2 colunas ========== */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* LADO ESQUERDO: História + Prova Visual */}
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-3">
                <div className="inline-block bg-accent/10 border border-accent px-4 py-2 rounded-full">
                  <span className="text-sm font-bold text-accent">TRANSFORMAÇÃO REAL</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold">
                  Eu Treinava 4 Anos Sem Resultado...
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Até descobrir que o problema não era esforço.
                  <br />
                  <span className="text-foreground font-semibold">Era treinar sem método.</span>
                </p>
              </div>

              {/* Fotos Antes/Depois - DESTAQUE VISUAL */}
              <div className="grid grid-cols-2 gap-4">
                {/* Antes */}
                <div className="space-y-2">
                  <div className="relative rounded-lg overflow-hidden border-2 border-destructive shadow-xl">
                    <img 
                      src="/hipertrofia-na-pratica/images/antes.jpg" 
                      alt="Antes - 4 anos sem método"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-destructive text-white text-xs px-3 py-1 rounded-full font-bold">
                      ANTES
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground font-medium">
                    4 anos treinando<br />SEM método
                  </p>
                </div>

                {/* Depois */}
                <div className="space-y-2">
                  <div className="relative rounded-lg overflow-hidden border-2 border-accent shadow-xl">
                    <img 
                      src="/hipertrofia-na-pratica/images/depois.jpg" 
                      alt="Depois - 1 ano com método"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-accent text-background text-xs px-3 py-1 rounded-full font-bold">
                      DEPOIS
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground font-medium">
                    1 ano aplicando<br />ESTE método
                  </p>
                </div>
              </div>

              <div className="bg-accent/5 border-l-4 border-accent p-4 rounded-r">
                <p className="text-sm text-foreground italic">
                  "Não sou Personal, não uso anabolizantes, não tenho genética privilegiada.
                  Sou só uma pessoa comum que <span className="font-bold">parou de treinar no achismo</span>."
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Lucas Sambati</p>
              </div>
            </div>

            {/* LADO DIREITO: Headline + CTA */}
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-4">
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Você Treina Pesado, Mas{" "}
                  <span className="text-accent">Não Cresce</span>?
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  O problema não é falta de esforço.
                  <br />
                  É <span className="text-foreground font-bold">falta de ESTRUTURA</span>.
                </p>
              </div>

              {/* Para quem é - MAIS COMPACTO */}
              <div className="bg-card/60 border border-accent/30 rounded-lg p-5 space-y-3">
                <p className="font-bold text-accent text-sm uppercase tracking-wide">
                  ✓ Este sistema é para você:
                </p>
                {[
                  "Treina há meses/anos mas parou de evoluir",
                  "Não sabe se está progredindo ou estagnado",
                  "Quer um método simples e comprovado",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button - MAIS DESTAQUE */}
              <div className="space-y-3 pt-4">
                <button
                  onClick={() => {
                    trackCTAClick('hero_section', 'Quero Transformar Meu Treino');
                    window.location.href = "https://pay.kiwify.com.br/fUcu9RX";
                  }}
                  className="btn-cta text-base sm:text-lg px-8 py-6 shadow-2xl shadow-accent/50 w-full"
                >
                  <span>Quero Transformar Meu Treino por R$ 19,90</span>
                </button>
                
                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-accent" />
                    <span>Garantia 7 dias</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4 text-accent" />
                    <span>Acesso imediato</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-center text-muted-foreground italic">
                Pagamento seguro via Kiwify • PDF + Planilha editável
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROOF POINT RÁPIDO ============ */}
      <section className="py-12 bg-card/20 border-y border-border">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">
              Por Que Ouvir Alguém Que <span className="text-accent">NÃO é Personal</span>?
            </h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Porque passei EXATAMENTE pelo que você está passando.
              <br />
              4 anos treinando sem resultado → <span className="text-accent font-semibold">1 ano com método = transformação</span>
            </p>
          </div>
        </div>
      </section>

      {/* ============ PROBLEM SECTION (EXPANDED - 7 DORES) ============ */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-12 bg-gradient-to-b from-card/30 to-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            <div className="space-y-4 sm:space-y-6 text-center max-w-3xl mx-auto">
              <h2
                className="text-3xl sm:text-4xl md:text-6xl font-black"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Por Que Você Não Está{" "}
                <span className="text-destructive">CRESCENDO</span>?
              </h2>
              <div className="h-1 w-24 sm:w-32 bg-destructive mx-auto" />
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                A maioria dos praticantes <span className="text-foreground font-bold">NUNCA</span> alcança seu potencial real.
                <br />
                Não por falta de esforço... mas por falta de <span className="text-accent font-bold">DIREÇÃO</span>.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: "Treinos Copiados do Instagram",
                  description:
                    "Você segue influencers que usam anabolizantes e genética privilegiada. Copia o treino deles e... nada acontece. O que funciona para ELE não funciona para VOCÊ.",
                  icon: "📱",
                  severity: "high",
                },
                {
                  title: "Zero Progressão de Carga",
                  description:
                    "Segunda-feira você levanta 30kg no supino. 3 meses depois... ainda 30kg. Sem progressão = sem crescimento. Simples assim.",
                  icon: "📉",
                  severity: "high",
                },
                {
                  title: "Volume de Treino Errado",
                  description:
                    "Ou você treina demais e não recupera, ou treina de menos e não estimula. Encontrar o sweet spot é CIÊNCIA, não achismo.",
                  icon: "⚖️",
                  severity: "medium",
                },
                {
                  title: "Técnica Horrível",
                  description:
                    "Ego lifting, amplitude parcial, sem controle. Você acha que está treinando... mas está só se machucando.",
                  icon: "⚠️",
                  severity: "high",
                },
                {
                  title: "Falta de Registro",
                  description:
                    "Não anota nada. Não lembra o que fez semana passada. Como vai progredir se não sabe de onde partiu?",
                  icon: "📝",
                  severity: "medium",
                },
                {
                  title: "Nutrição Desconexa",
                  description:
                    "Treina pesado, mas come que nem passarinho. Ou come demais e fica gordo. Hipertrofia exige o balanço certo.",
                  icon: "🍽️",
                  severity: "medium",
                },
                {
                  title: "Desiste no Platô",
                  description:
                    "Depois de 2-3 meses, os resultados param. Você pensa 'isso não funciona' e desiste. Mas o platô é NORMAL - você só não sabe como superá-lo.",
                  icon: "🚫",
                  severity: "high",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-background border-2 ${
                    item.severity === "high"
                      ? "border-destructive/70 hover:border-destructive"
                      : "border-border hover:border-accent/50"
                  } rounded-lg p-6 space-y-4 transition-all hover:scale-105 hover:shadow-xl`}
                >
                  <div className="flex items-start justify-between">
                    <div className="text-5xl">{item.icon}</div>
                    {item.severity === "high" && (
                      <span className="text-xs bg-destructive/20 text-destructive px-2 py-1 rounded-full font-bold">
                        CRÍTICO
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-destructive/10 border-2 border-destructive rounded-lg p-8 text-center max-w-3xl mx-auto space-y-4">
              <AlertTriangle className="w-16 h-16 text-destructive mx-auto" />
              <p className="text-xl font-bold">
                A VERDADE DOLOROSA:
              </p>
              <p className="text-lg text-muted-foreground italic">
                "Se você continuar fazendo o que sempre fez, continuará tendo os mesmos resultados medíocres.
                Treinar SEM método é como dirigir SEM GPS — você vai se mover, mas nunca vai chegar ao destino."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SOLUTION SECTION (TRANSFORMAÇÃO) ============ */}
      <section className="py-24 bg-gradient-to-b from-background to-card/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            <div className="space-y-6 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent px-6 py-3 rounded-full">
                <Flame className="w-5 h-5 text-accent" />
                <span className="text-sm font-bold text-accent uppercase tracking-wide">
                  A Transformação Começa Aqui
                </span>
              </div>
              
              <h2
                className="text-4xl md:text-6xl font-black"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Apresentamos o{" "}
                <span className="text-accent glow-accent">TREINO INTELIGENTE</span>
              </h2>
              <div className="h-1 w-32 bg-accent mx-auto" />
              <p className="text-2xl font-light text-muted-foreground">
                O Único Sistema Completo que Você Precisa Para{" "}
                <span className="text-foreground font-bold">Crescer de Verdade</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">
                    Não É Mais Um "Treino ABC"...
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    É um <span className="text-accent font-bold">SISTEMA CIENTÍFICO COMPLETO</span> que combina:
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: <BookOpen className="w-6 h-6 text-accent" />,
                      title: "PDF Estratégico de 50+ Páginas",
                      desc: "Toda a ciência da hipertrofia traduzida para linguagem simples e ACIONÁVEL",
                    },
                    {
                      icon: <BarChart3 className="w-6 h-6 text-accent" />,
                      title: "Planilha de Progressão Automática",
                      desc: "Rastreie TUDO. Cargas, volume, frequência. Nunca mais treine no escuro.",
                    },
                    {
                      icon: <Target className="w-6 h-6 text-accent" />,
                      title: "Método de Sobrecarga Progressiva",
                      desc: "O segredo para crescer TODA SEMANA, não apenas no primeiro mês.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 bg-card/50 border border-border rounded-lg p-5 hover:border-accent/50 transition-all"
                    >
                      <div className="flex-shrink-0 mt-1">{item.icon}</div>
                      <div className="space-y-1">
                        <p className="font-bold">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-accent/10 border-2 border-accent rounded-lg p-6">
                  <p className="text-sm font-bold text-accent mb-3">💡 POR QUE ISSO FUNCIONA?</p>
                  <p className="text-sm text-muted-foreground">
                    Porque não é baseado em "feeling" ou modinha. É baseado em{" "}
                    <span className="text-foreground font-bold">
                      décadas de pesquisa científica sobre hipertrofia
                    </span>
                    , simplificado para você aplicar HOJE.
                  </p>
                </div>
              </div>

              {/* Product showcase image */}
              <div className="relative rounded-xl overflow-hidden border-2 border-accent shadow-2xl shadow-accent/20">
                <img
                  src="./images/product-showcase.jpg"
                  alt="Treino Inteligente - Sistema Completo"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-4 right-4 bg-accent text-background px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  🔥 BEST-SELLER
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT'S INSIDE SECTION - REFATORADA ============ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-card/30 border-t border-border">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="space-y-12">
            {/* Título */}
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <h2
                className="text-3xl md:text-5xl font-black"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                O Que Você Vai Receber
              </h2>
              <div className="h-1 w-24 bg-accent mx-auto" />
              <p className="text-lg md:text-xl text-muted-foreground">
                Tudo o que você precisa para organizar seus treinos e progredir de forma consistente
              </p>
            </div>

            {/* Entregáveis */}
            <div className="space-y-6">
              {/* PDF */}
              <div className="bg-card border-2 border-border rounded-xl p-6 md:p-8 hover:border-accent/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-accent/10 rounded-lg p-3">
                    <BookOpen className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold">
                      📖 PDF: Treino Inteligente
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Guia completo sobre os fundamentos da hipertrofia, como estruturar treinos,
                      progressão de carga, volume ideal e técnicas avançadas. Linguagem direta, sem enrolação.
                    </p>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Fundamentos científicos da hipertrofia",
                        "Como estruturar divisões de treino (A/B/C, Push/Pull)",
                        "Seleção de exercícios baseada em evidências",
                        "Progressão de carga e periodização",
                        "Nutrição básica para ganho de massa muscular"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Planilha */}
              <div className="bg-card border-2 border-border rounded-xl p-6 md:p-8 hover:border-accent/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-accent/10 rounded-lg p-3">
                    <BarChart3 className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold">
                      📊 Planilha de Progressão (Excel / Google Sheets)
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Planilha editável para registrar séries, repetições e cargas. Cálculo automático de volume
                      e gráficos de evolução. Funciona no Excel (Windows/Mac) e Google Sheets (grátis, online).
                    </p>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Registro de todas as séries e cargas",
                        "Cálculo automático de volume total semanal",
                        "Gráficos de evolução por grupo muscular",
                        "Templates pré-configurados (ABC, ABCD, Push/Pull/Legs)",
                        "100% editável e personalizável"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bônus */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-accent/5 border border-accent/30 rounded-xl p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-accent" />
                    <h4 className="font-bold">Bônus #1: Plano de 12 Semanas</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Periodização completa para iniciantes e intermediários. Apenas siga o plano.
                  </p>
                </div>

                <div className="bg-accent/5 border border-accent/30 rounded-xl p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-accent" />
                    <h4 className="font-bold">Bônus #2: Guia de Suplementação</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    O que realmente funciona (e o que é marketing). Economize dinheiro em suplementos inúteis.
                  </p>
                </div>
              </div>
            </div>

            {/* Como receber */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent rounded-xl p-8 space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-center">
                Como Você Recebe o Acesso
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center space-y-3">
                  <div className="bg-accent text-background rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mx-auto">
                    1
                  </div>
                  <p className="text-sm font-semibold">Finalize o pagamento</p>
                  <p className="text-xs text-muted-foreground">
                    Via Kiwify (cartão ou Pix)
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="bg-accent text-background rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mx-auto">
                    2
                  </div>
                  <p className="text-sm font-semibold">Receba por e-mail</p>
                  <p className="text-xs text-muted-foreground">
                    Imediatamente após aprovação do pagamento
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="bg-accent text-background rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mx-auto">
                    3
                  </div>
                  <p className="text-sm font-semibold">Acesso vitalício</p>
                  <p className="text-xs text-muted-foreground">
                    Baixe, edite, use quantas vezes quiser
                  </p>
                </div>
              </div>

              <div className="bg-background/50 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-semibold">Atenção:</span> Verifique sua caixa de spam caso não receba em até 10 minutos.
                  Se tiver problemas, entre em contato pelo e-mail de suporte.
                </p>
              </div>
            </div>

            {/* Preço */}
            <div className="text-center space-y-4 pt-8">
              <p className="text-lg text-muted-foreground">
                Tudo isso por:
              </p>
              <div className="space-y-2">
                <p className="text-5xl md:text-6xl font-black text-accent">R$ 19,90</p>
                <p className="text-sm text-muted-foreground">pagamento único</p>
              </div>

              <button
                onClick={() => {
                  trackCTAClick('after_solution', 'Quero Usar Esse Sistema');
                  window.location.href = "https://pay.kiwify.com.br/fUcu9RX";
                }}
                className="btn-cta text-base sm:text-lg px-12 py-6 shadow-2xl shadow-accent/50 mx-auto"
              >
                Quero Usar Esse Sistema
              </button>

              <p className="text-xs text-muted-foreground pt-2">
                Você será redirecionado para o checkout seguro da Kiwify
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DEMONSTRAÇÃO DO PRODUTO ============ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-card/30 to-background border-t border-border">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="space-y-12">
            {/* Título */}
            <div className="space-y-4 text-center">
              <h2
                className="text-3xl md:text-5xl font-black"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Veja Exatamente O Que Você Vai Receber
              </h2>
              <div className="h-1 w-24 bg-accent mx-auto" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Sem mistério, sem enrolação. Isso é o que chega na sua mão:
              </p>
            </div>

            {/* Preview do PDF */}
            <div className="space-y-6">
              <div className="bg-card border-2 border-accent/50 rounded-xl p-6 md:p-8">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3">
                    <BookOpen className="w-7 h-7 text-accent" />
                    Exemplo: Uma Página do PDF
                  </h3>
                  <div className="bg-accent/5 border border-accent/30 rounded-lg overflow-hidden">
                    <img 
                      src="/hipertrofia-na-pratica/images/pdf-preview.jpg" 
                      alt="Preview do PDF Treino Inteligente"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">O que você encontra no PDF:</strong> explicações diretas sobre como estruturar treinos, 
                    quando aumentar carga, volume ideal por grupo muscular, e os erros que impedem crescimento.
                  </p>
                </div>
              </div>

              <div className="bg-card border-2 border-accent/50 rounded-xl p-6 md:p-8">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3">
                    <BarChart3 className="w-7 h-7 text-accent" />
                    Exemplo: Tabela da Planilha
                  </h3>
                  <div className="bg-accent/5 border border-accent/30 rounded-lg overflow-hidden">
                    <img 
                      src="/hipertrofia-na-pratica/images/planilha-preview.jpg" 
                      alt="Preview da Planilha de Progressão"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Como funciona a planilha:</strong> você anota séries/reps/cargas após cada treino, 
                    e a planilha calcula volume total, mostra gráficos de evolução e indica quando progredir.
                  </p>
                </div>
              </div>
            </div>

            {/* Como usar em 3 passos */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent rounded-xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8">
                Como Usar em 3 Passos Simples
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3 text-center">
                  <div className="bg-accent text-background rounded-full w-14 h-14 flex items-center justify-center font-black text-2xl mx-auto">
                    1
                  </div>
                  <h4 className="font-bold">Leia o PDF</h4>
                  <p className="text-sm text-muted-foreground">
                    Entenda os fundamentos e estruture seu treino conforme seu nível e objetivo. Leitura única.
                  </p>
                </div>

                <div className="space-y-3 text-center">
                  <div className="bg-accent text-background rounded-full w-14 h-14 flex items-center justify-center font-black text-2xl mx-auto">
                    2
                  </div>
                  <h4 className="font-bold">Configure a Planilha</h4>
                  <p className="text-sm text-muted-foreground">
                    Escolha um template (ABC, Push/Pull, etc.) e personalize com seus exercícios. Tempo: 15-20 minutos (uma vez).
                  </p>
                </div>

                <div className="space-y-3 text-center">
                  <div className="bg-accent text-background rounded-full w-14 h-14 flex items-center justify-center font-black text-2xl mx-auto">
                    3
                  </div>
                  <h4 className="font-bold">Registre e Evolua</h4>
                  <p className="text-sm text-muted-foreground">
                    Após cada treino, anote suas cargas. A planilha mostra sua evolução. Tempo: 5-10 min por semana.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-background/50 rounded-lg p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Investimento real de tempo:</strong> menos de 15 minutos por semana após a configuração inicial.
                  O resto é só treinar e ver os resultados aparecerem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BENEFITS SECTION (TRANSFORMAÇÃO) ============ */}
      <section data-section="benefits" className="py-24 bg-gradient-to-b from-background to-card/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            <div className="space-y-4 text-center">
              <h2
                className="text-4xl md:text-6xl font-black"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                O Que Você Vai <span className="text-accent">CONQUISTAR</span>
              </h2>
              <div className="h-1 w-32 bg-accent mx-auto" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Não é sobre ter mais um PDF. É sobre <span className="text-foreground font-bold">TRANSFORMAR SEU CORPO</span> e sua relação com o treino.
              </p>
            </div>

            {/* Transformation abstract image */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-accent shadow-2xl shadow-2xl shadow-accent/20 max-w-4xl mx-auto">
              <img
                src="./images/transformation-abstract.jpg"
                alt="Transformação e Crescimento"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-2xl md:text-4xl font-black text-white drop-shadow-2xl">
                  A Diferença Entre TENTAR e CONSEGUIR
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Eliminar o Achismo Para Sempre",
                  description:
                    "Chega de copiar influencers. Você vai basear seu treino em CIÊNCIA comprovada, não em modismos que não funcionam.",
                  icon: <Target className="w-12 h-12 text-accent" />,
                  impact: "🎯 Alta Prioridade",
                },
                {
                  title: "Garantir Sobrecarga Progressiva",
                  description:
                    "A planilha mostra EXATAMENTE quando e como aumentar a intensidade. Você nunca mais vai estagnar.",
                  icon: <TrendingUp className="w-12 h-12 text-accent" />,
                  impact: "📈 Ganhos Garantidos",
                },
                {
                  title: "Otimizar Cada Repetição",
                  description:
                    "Aprenda a técnica perfeita para maximizar ativação muscular. Menos lesões, mais crescimento.",
                  icon: <Trophy className="w-12 h-12 text-accent" />,
                  impact: "💪 Técnica Pro",
                },
                {
                  title: "Manter Consistência Brutal",
                  description:
                    "Com um plano claro e resultados visíveis, você vai estar VICIADO em ir pra academia. Motivação não vai ser problema.",
                  icon: <Flame className="w-12 h-12 text-accent" />,
                  impact: "🔥 Vício Saudável",
                },
                {
                  title: "Economizar Anos de Tentativa e Erro",
                  description:
                    "Não cometa os mesmos erros que 90% dos praticantes cometem. Chegue ao corpo dos seus sonhos em METADE do tempo.",
                  icon: <Clock className="w-12 h-12 text-accent" />,
                  impact: "⏰ Atalho Legítimo",
                },
                {
                  title: "Ter Controle Total do Seu Progresso",
                  description:
                    "Visualize seus ganhos em gráficos. Números não mentem — você vai VER a transformação acontecendo.",
                  icon: <BarChart3 className="w-12 h-12 text-accent" />,
                  impact: "📊 Dados Reais",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-card border-2 border-border rounded-xl p-8 space-y-5 hover:border-accent hover:bg-card/80 hover:scale-105 transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div className="group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-bold">
                      {item.impact}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-black"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Comparação ANTES vs DEPOIS */}
            <div className="bg-gradient-to-r from-destructive/10 via-card to-accent/10 border-2 border-accent/50 rounded-xl p-8 md:p-12">
              <h3 className="text-3xl font-black text-center mb-8">
                Sem o Treino Inteligente vs Com o Treino Inteligente
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <X className="w-8 h-8 text-destructive" />
                    <h4 className="text-xl font-bold text-destructive">SEM o Sistema</h4>
                  </div>
                  {[
                    "Treina no escuro, sem saber se está progredindo",
                    "Copia treinos aleatórios do Instagram",
                    "Estagna depois de 2-3 meses",
                    "Perde a motivação e desiste",
                    "Nunca atinge o corpo que quer",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 bg-accent/5 rounded-lg p-6 border-2 border-accent">
                  <div className="flex items-center gap-3 mb-4">
                    <Check className="w-8 h-8 text-accent" />
                    <h4 className="text-xl font-bold text-accent">COM o Sistema</h4>
                  </div>
                  {[
                    "Sabe EXATAMENTE o que fazer em cada treino",
                    "Segue um plano científico personalizado",
                    "Progride consistentemente, semana após semana",
                    "Fica viciado em ver os números subindo",
                    "Conquista o corpo que sempre quis",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 font-medium">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS SECTION - REALISTA ============ */}
      <section className="pt-16 md:pt-24 pb-0 bg-gradient-to-b from-card/30 to-background border-t border-border">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2
                className="text-3xl md:text-5xl font-black"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                O Que Alguns Alunos Estão Dizendo
              </h2>
              <div className="h-1 w-24 bg-accent mx-auto" />
              <p className="text-lg text-muted-foreground">
                Feedback real de pessoas que estão usando o sistema
              </p>
            </div>

            {/* Prints reais de feedback */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border-2 border-accent/30 rounded-xl overflow-hidden hover:border-accent transition-all">
                <img 
                  src="/hipertrofia-na-pratica/images/feedback1.jpg" 
                  alt="Feedback de cliente 1"
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="bg-card border-2 border-accent/30 rounded-xl overflow-hidden hover:border-accent transition-all">
                <img 
                  src="/hipertrofia-na-pratica/images/feedback2.jpg" 
                  alt="Feedback de cliente 2"
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="bg-card border-2 border-accent/30 rounded-xl overflow-hidden hover:border-accent transition-all">
                <img 
                  src="/hipertrofia-na-pratica/images/feedback3.jpg" 
                  alt="Feedback de cliente 3"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-center text-muted-foreground italic">
              Prints reais de conversas com clientes (dados pessoais ocultos por privacidade)
            </p>
          </div>
        </div>
      </section>

      {/* ============ GARANTIA INCONDICIONAL ============ */}
      <section className="py-24 bg-gradient-to-b from-background to-card/30">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            <div className="bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 border-4 border-accent rounded-2xl p-12 space-y-8 shadow-2xl shadow-accent/20">
              <div className="text-center space-y-4">
                <Shield className="w-24 h-24 text-accent mx-auto" />
                <h2
                  className="text-4xl md:text-5xl font-black"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Garantia <span className="text-accent">BLINDADA</span> de 7 Dias
                </h2>
                <div className="h-1 w-32 bg-accent mx-auto" />
              </div>

              <div className="space-y-6">
                <p className="text-xl text-center leading-relaxed">
                  Estou TÃO confiante que o Treino Inteligente vai transformar seus resultados,
                  que vou assumir TODO o risco:
                </p>

                <div className="bg-background border-2 border-accent rounded-xl p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-accent text-center">
                    Como Funciona a Garantia?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-background rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-bold">Compre Hoje</p>
                        <p className="text-sm text-muted-foreground">
                          Receba acesso imediato ao PDF, Planilha e todos os bônus
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-background rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-bold">Use por 7 Dias Completos</p>
                        <p className="text-sm text-muted-foreground">
                          Leia o PDF, use a planilha, implemente o sistema
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-background rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-bold">Não Gostou? Devolução 100%</p>
                        <p className="text-sm text-muted-foreground">
                          Sem perguntas, sem burocracia. Dinheiro de volta na conta em 24h.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent rounded-lg p-6 text-center">
                  <p className="text-lg font-bold mb-2">
                    Ou seja: O risco é ZERO. Todo MEU.
                  </p>
                  <p className="text-muted-foreground">
                    Se você não sentir que este é o sistema mais completo e prático que já usou...
                    <br />
                    <span className="text-foreground font-bold">
                      Eu devolvo 100% do seu investimento. Sem enrolação.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ SECTION - FOCADO EM CONFIANÇA ============ */}
      <section className="py-16 md:py-24 bg-card/30 border-t border-border">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2
                className="text-3xl md:text-5xl font-black"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Perguntas Frequentes
              </h2>
              <div className="h-1 w-24 bg-accent mx-auto" />
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Como recebo o acesso?",
                  answer:
                    "Após a confirmação do pagamento (cartão é imediato, Pix leva até 10 minutos), você recebe um e-mail com os links de download do PDF e da planilha. Verifique sua caixa de spam. Se não receber em até 15 minutos, entre em contato pelo e-mail de suporte.",
                },
                {
                  question: "O pagamento é seguro?",
                  answer:
                    "Sim. O checkout é processado pela Kiwify, uma das maiores plataformas de produtos digitais do Brasil. Eles usam criptografia SSL e são certificados pelas operadoras de cartão. Seus dados estão protegidos.",
                },
                {
                  question: "A planilha funciona no Google Sheets ou só no Excel?",
                  answer:
                    "Funciona perfeitamente nos dois. Excel (Windows/Mac) e Google Sheets (grátis, online). Você pode fazer uma cópia e usar de qualquer dispositivo — computador, tablet ou celular.",
                },
                {
                  question: "Isso serve para quem?",
                  answer:
                    "Se você é iniciante ou avançado e quer sair do platô, esse produto é para você. Não é para iniciantes absolutos (zero experiência) nem para quem já compete. É para o intermediário frustrado que quer método.",
                },
                {
                  question: "Preciso de dieta perfeita ou suplementos caros?",
                  answer:
                    "Não. O foco é treino e progressão. O PDF tem orientações básicas de nutrição (calorias, proteína), mas não exige dieta complexa. Sobre suplementos: o bônus mostra o que realmente funciona (spoiler: bem menos do que você imagina).",
                },
                {
                  question: "E se eu tiver problemas com o acesso?",
                  answer:
                    "Temos suporte por e-mail. Respondemos todas as dúvidas sobre acesso, uso da planilha ou dúvidas técnicas em até 24-48 horas úteis. Se você não recebeu os arquivos, resolvemos rapidamente.",
                },
                {
                  question: "Como funciona a garantia de 7 dias?",
                  answer:
                    "Você compra, testa o sistema por 7 dias completos. Se não gostar por qualquer motivo, solicita reembolso por e-mail. A Kiwify processa o estorno conforme as regras da plataforma (normalmente de 5 a 10 dias úteis, dependendo do meio de pagamento).",
                },
                {
                  question: "O preço vai aumentar?",
                  answer:
                    "Possivelmente. R$ 19,90 é o preço de lançamento. Mas não há 'vagas limitadas' artificiais — enquanto estiver disponível por esse valor, você pode comprar.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl p-6 space-y-3 hover:border-accent/50 transition-all"
                >
                  <h3 className="font-bold text-lg">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CHECKOUT SECTION - LIMPA ============ */}
      <section id="checkout" className="py-16 md:py-24 bg-gradient-to-b from-background to-card/50 border-t border-border">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            <div className="space-y-6 text-center">
              <h2
                className="text-3xl md:text-5xl font-black"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Pronto Para Começar?
              </h2>
              <div className="h-1 w-24 bg-accent mx-auto" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tudo o que você precisa para organizar seus treinos e progredir de forma consistente
              </p>
            </div>

            {/* Oferta Principal */}
            <div className="bg-card border-2 border-accent rounded-2xl p-8 md:p-12 space-y-8 shadow-xl">
              <div className="space-y-6">
                <p className="text-sm text-center text-muted-foreground uppercase tracking-wide">
                  O que está incluído
                </p>
                
                <div className="space-y-3">
                  {[
                    "✅ PDF Treino Inteligente",
                    "✅ Planilha de Progressão Automática",
                    "✅ Bônus #1: Plano de 12 Semanas",
                    "✅ Bônus #2: Guia de Suplementação",
                    "✅ Acesso vitalício (sem mensalidades)",
                    "✅ Suporte por e-mail",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm md:text-base">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t-2 border-accent pt-6 text-center space-y-3">
                  <p className="text-xl">Investimento:</p>
                  <div className="text-5xl md:text-6xl font-black text-accent">R$ 19,90</div>
                  <p className="text-sm text-muted-foreground">pagamento único</p>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => {
                    trackCTAClick('guarantee_section', 'Quero Usar Esse sistema por R$ 19,90');
                    window.location.href = "https://pay.kiwify.com.br/fUcu9RX";
                  }}
                  className="w-full bg-accent hover:bg-accent/90 text-background font-bold text-lg md:text-xl py-6 md:py-7 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-accent/30"
                >
                  Quero Usar Esse sistema por R$ 19,90
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  Você será redirecionado para o checkout seguro da Kiwify
                  <br />
                  Pagamento com cartão (aprovação imediata) ou Pix
                </p>

                <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground flex-wrap">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-accent" />
                    <span>Checkout seguro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent" />
                    <span>Garantia de 7 dias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    <span>Acesso por e-mail</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Para quem é / Para quem NÃO é */}
            <div className="bg-card border border-border rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-center">
                Para Quem É Este Produto
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="font-semibold text-accent flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    Ideal para você se:
                  </p>
                  {[
                    "Treina há pelo menos 6 meses",
                    "Quer sair do platô e progredir",
                    "Busca método organizado",
                    "Está disposto a anotar treinos",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <p className="font-semibold text-destructive flex items-center gap-2">
                    <X className="w-5 h-5" />
                    Não é para você se:
                  </p>
                  {[
                    "Busca soluções mágicas instantâneas",
                    "Não quer anotar e rastrear progresso",
                    "Espera resultados sem esforço",
                    "Prefere improvisar sem plano",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Última chamada */}
            <div className="bg-card border border-border rounded-xl p-8 text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Investimento de R$ 19,90 • Garantia de 7 Dias
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Você pode continuar treinando sem direção clara, ou pode investir menos que o preço de um lanche
                em um sistema que organiza seus treinos e mostra sua evolução.
                <br /><br />
                <span className="text-foreground font-semibold">
                  Com garantia de 7 dias, você não tem nada a perder.
                </span>
              </p>
              
              <button
                onClick={() => {
                  trackCTAClick('after_faq', 'Quero Começar Agora');
                  window.location.href = "https://pay.kiwify.com.br/fUcu9RX";
                }}
                className="bg-accent hover:bg-accent/90 text-background font-bold text-lg px-10 py-5 rounded-xl transition-all hover:scale-105 shadow-xl shadow-accent/30"
              >
                Quero Começar Agora
              </button>

              <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                Checkout seguro via Kiwify
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="py-12 border-t border-border bg-card/30">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3
                className="font-bold text-lg"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Treino Inteligente
              </h3>
              <p className="text-sm text-muted-foreground">
                Hipertrofia na Prática
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-muted-foreground text-center md:text-left">
              <a href="mailto:contato@treinointeligente.com" className="hover:text-accent transition-colors">
                Contato: contato@treinointeligente.com
              </a>
              <a href="/politica-privacidade.html" className="hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos-uso.html" className="hover:text-accent transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
            <p>
              © 2025 Treino Inteligente. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* BOTÃO FIXO MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <button
          onClick={() => {
            trackCTAClick('floating_mobile_button', 'Comprar Agora - Mobile');
            window.location.href = "https://pay.kiwify.com.br/fUcu9RX";
          }}
          className="w-full bg-accent hover:bg-accent/90 text-background font-bold text-base py-4 px-4 transition-all shadow-xl border-t-2 border-background"
        >
          <div className="flex items-center justify-center gap-2">
            <span>Quero Acessar Agora por R$ 19,90</span>
          </div>
        </button>
      </div>
    </div>
  );
}
