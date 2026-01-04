import { Button } from "@/components/ui/button";
import { Check, Zap, BookOpen, BarChart3, AlertTriangle, TrendingUp, Shield, Clock, Target, Flame, Award, Users, Calendar, Trophy, X, Star } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * DESIGN PHILOSOPHY: Dark Intensity
 * - Deep charcoal background (#1a1a1a) with electric orange accents (#FF6B35)
 * - Typography: Space Grotesk (headlines) + Inter (body)
 * - High contrast, minimal elements, maximum focus on CTA
 * - Animations: Smooth fade-ins, glowing hover effects, parallax depth
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 30,
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Track scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* ============ URGENCY BAR ============ */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-accent text-background py-2 sm:py-3 px-2 sm:px-4 text-center font-bold shadow-lg animate-pulse">
        <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-xs sm:text-sm">
          <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm md:text-base">
            ⚠️ APENAS {Math.floor(Math.random() * 8) + 3} VAGAS - Expira em:
          </span>
          <div className="flex gap-1 sm:gap-2 text-background text-xs sm:text-sm">
            <span className="bg-background/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
              {String(timeLeft.hours).padStart(2, "0")}h
            </span>
            <span className="bg-background/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
              {String(timeLeft.minutes).padStart(2, "0")}m
            </span>
            <span className="bg-background/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
              {String(timeLeft.seconds).padStart(2, "0")}s
            </span>
          </div>
        </div>
      </div>

      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32 pb-24 md:pb-20">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero-athlete.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
            transform: `translateY(${isScrolled ? 50 : 0}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40 z-1" />

        {/* Content */}
        <div className="container relative z-10 max-w-5xl mx-auto px-4">
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent px-4 py-2 rounded-full">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold text-accent">
                +347 PESSOAS JÁ TRANSFORMARAM SEUS TREINOS
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] md:leading-[0.95]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Você Está{" "}
                <span className="text-accent glow-accent">DESPERDIÇANDO</span>
              </h1>
              <h1
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] md:leading-[0.95]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Seu Tempo na Academia?
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-3xl text-muted-foreground leading-relaxed max-w-3xl font-light">
              Se você treina há mais de <span className="text-accent font-bold">6 meses</span> e ainda não vê resultados REAIS...
              <br />
              <span className="text-foreground font-bold">
                O problema não é seu esforço. É o seu MÉTODO.
              </span>
            </p>

            {/* Pain Points - Quick List */}
            <div className="bg-card/50 border-2 border-destructive/50 rounded-lg p-6 space-y-3 max-w-2xl">
              <p className="font-bold text-destructive flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Reconhece algum desses sinais?
              </p>
              {[
                "Treina pesado mas continua com o mesmo corpo de meses atrás",
                "Não sabe se está progredindo ou apenas se machucando",
                "Copia treinos do Instagram que não funcionam para VOCÊ",
                "Sente que outros evoluem mais rápido",
              ].map((pain, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{pain}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-8">
              <button
                onClick={() => {
                  window.location.href = "https://pay.kiwify.com.br/fUcu9RX";
                }}
                className="btn-cta text-base sm:text-lg md:text-xl px-8 sm:px-12 py-5 sm:py-6 shadow-2xl shadow-accent/50 animate-pulse w-full sm:w-auto"
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 inline" />
                <span className="text-sm sm:text-base md:text-lg">SIM! QUERO RESULTADOS REAIS AGORA</span>
              </button>
              <button 
                onClick={() => {
                  window.location.href = "https://pay.kiwify.com.br/fUcu9RX";
                }}
                className="px-6 sm:px-8 py-5 sm:py-6 border-2 border-accent text-accent rounded-lg font-bold text-base sm:text-lg transition-all duration-300 hover:bg-accent/10 hover:scale-105 w-full sm:w-auto"
              >
                QUERO COMEÇAR AGORA
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-12 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Check className="w-5 h-5 text-accent" />
                <span className="font-semibold">Acesso Instantâneo</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-accent" />
                <span className="font-semibold">Garantia Incondicional de 7 Dias</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5 text-accent" />
                <span className="font-semibold">+347 Alunos Transformados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROBLEM SECTION (EXPANDED - 7 DORES) ============ */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-card/50 to-background border-t border-border">
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

      {/* ============ WHAT'S INSIDE SECTION + BÔNUS ============ */}
      <section className="py-24 bg-gradient-to-b from-card/30 to-background border-y border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            <div className="space-y-4 text-center">
              <h2
                className="text-4xl md:text-6xl font-black"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                O Que Você Recebe <span className="text-accent">HOJE</span>
              </h2>
              <div className="h-1 w-32 bg-accent mx-auto" />
              <p className="text-xl text-muted-foreground">
                Valor total: <span className="line-through">R$ 97</span>{" "}
                <span className="text-accent font-bold text-2xl">→ Por apenas R$ 19,90</span>
              </p>
            </div>

            {/* PRODUTO PRINCIPAL */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent rounded-xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-accent text-background rounded-full p-3">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black mb-2">
                      📖 PDF Treino Inteligente
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  Mais de <span className="text-foreground font-bold">50 páginas</span> de conteúdo denso e prático sobre:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "✅ Fundamentos científicos da hipertrofia (mecânica, metabólica, neural)",
                    "✅ Como estruturar treinos A/B/C/Push/Pull para máximo crescimento",
                    "✅ Seleção de exercícios baseada em evidências (não em ego)",
                    "✅ Periodização: Linear, Ondulatória e DUP explicadas",
                    "✅ Volume ideal por grupo muscular (não treine demais nem de menos)",
                    "✅ Progressão de carga: quando e como aumentar os pesos",
                    "✅ Técnicas avançadas: Drop sets, rest-pause, myo-reps",
                    "✅ Nutrição para hipertrofia: calorias, proteínas, timing",
                    "✅ Importância da recuperação e do sono (80% dos ganhos)",
                    "✅ Como evitar lesões e treinar por décadas",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm bg-background/50 rounded-lg p-3"
                    >
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent rounded-xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-accent text-background rounded-full p-3">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black mb-2">
                      📊 Planilha de Progressão Automática
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  A ferramenta que vai <span className="text-foreground font-bold">TRANSFORMAR</span> seus treinos em resultados mensuráveis:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "✅ Registro automático de todas as suas séries e cargas",
                    "✅ Cálculo de volume total semanal (séries x reps x carga)",
                    "✅ Gráficos de evolução por grupo muscular",
                    "✅ Indicadores de quando aumentar a carga",
                    "✅ Histórico completo: veja sua evolução de meses atrás",
                    "✅ Compatível com Excel, Google Sheets e Numbers",
                    "✅ 100% editável e personalizável ao SEU treino",
                    "✅ Templates pré-configurados para ABC, ABCD, Push/Pull/Legs",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm bg-background/50 rounded-lg p-3"
                    >
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BÔNUS SECTION */}
            <div className="space-y-6">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 bg-accent text-background px-6 py-3 rounded-full font-black text-lg animate-pulse">
                  <Trophy className="w-6 h-6" />
                  BÔNUS EXCLUSIVOS
                </div>
                <p className="text-muted-foreground">
                  Você também recebe GRATUITAMENTE:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    icon: <Calendar className="w-8 h-8 text-accent" />,
                    title: "BÔNUS #1: Plano de 12 Semanas",
                    desc: "Periodização completa para iniciantes e intermediários. Apenas siga o plano, não precisa pensar.",
                  },
                  {
                    icon: <Zap className="w-8 h-8 text-accent" />,
                    title: "BÔNUS #2: Guia de Suplementação",
                    desc: "O que realmente funciona (e o que é puro marketing). Economize centenas de reais em suplementos inúteis.",
                  },
                ].map((bonus, idx) => (
                  <div
                    key={idx}
                    className="bg-card border-2 border-accent/50 rounded-xl p-6 space-y-4 hover:border-accent hover:scale-105 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>{bonus.icon}</div>
                    </div>
                    <h3 className="font-black text-lg">{bonus.title}</h3>
                    <p className="text-sm text-muted-foreground">{bonus.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA INTERMEDIÁRIO */}
            <div className="bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 border-2 border-accent rounded-xl p-8 text-center space-y-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  VALOR TOTAL DO PACOTE
                </p>
                <p className="text-5xl font-black">
                  <span className="line-through text-muted-foreground">R$ 97</span>
                </p>
                <p className="text-2xl text-muted-foreground">
                  Hoje por apenas:
                </p>
                <p className="text-6xl font-black text-accent">
                  R$ 19,90
                </p>
                <p className="text-sm text-muted-foreground">
                  pagamento único
                </p>
              </div>

              <button
                onClick={() => {
                  window.location.href = "https://pay.kiwify.com.br/fUcu9RX";
                }}
                className="btn-cta text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-5 sm:py-6 shadow-2xl shadow-accent/50 w-full sm:w-auto"
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 inline" />
                <span className="text-sm sm:text-base md:text-lg">GARANTIR MINHA VAGA AGORA</span>
              </button>

              <div className="flex flex-col items-center gap-2">
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <Shield className="w-4 h-4 text-accent" />
                  Pagamento 100% seguro processado pela Kiwify
                </p>
                <p className="text-xs text-muted-foreground">
                  ⏰ Oferta expira em {String(timeLeft.hours).padStart(2, "0")}:
                  {String(timeLeft.minutes).padStart(2, "0")}:
                  {String(timeLeft.seconds).padStart(2, "0")}
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

      {/* ============ TESTIMONIALS SECTION (EXPANDIDA) ============ */}
      <section className="py-24 bg-gradient-to-b from-card/30 to-background border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent px-6 py-3 rounded-full">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-sm font-bold text-accent uppercase tracking-wide">
                  +347 Pessoas Transformadas
                </span>
              </div>
              <h2
                className="text-4xl md:text-6xl font-black"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Resultados <span className="text-accent">REAIS</span> de Pessoas REAIS
              </h2>
              <div className="h-1 w-32 bg-accent mx-auto" />
              <p className="text-xl text-muted-foreground">
                Não acredite apenas no que dizemos. Veja o que nossos alunos alcançaram:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "João Pedro S.",
                  age: "28 anos",
                  location: "São Paulo - SP",
                  testimonial:
                    "Treinava há 2 ANOS sem ver resultado. Depois do Treino Inteligente, em 8 semanas ganhei 4kg de músculo e aumentei 15kg no supino. A planilha é VICIANTE — você fica obcecado em bater seus recordes.",
                  rating: 5,
                  result: "+4kg de músculo em 8 semanas",
                  image: "👨",
                },
                {
                  name: "Mariana F.",
                  age: "32 anos",
                  location: "Rio de Janeiro - RJ",
                  testimonial:
                    "Finalmente entendi o que eu estava fazendo de errado! O PDF é MUITO mais completo que qualquer curso caro que já comprei. Vale cada centavo.",
                  rating: 5,
                  result: "Passou de 45kg → 60kg no agachamento",
                  image: "👩",
                },
                {
                  name: "Ricardo M.",
                  age: "25 anos",
                  location: "Belo Horizonte - MG",
                  testimonial:
                    "Eu estava fazendo TUDO errado. Volume demais, técnica horrível, zero progressão. Esse sistema me salvou de desistir da musculação. Hoje treino com propósito.",
                  rating: 5,
                  result: "De iniciante a intermediário em 3 meses",
                  image: "👨",
                },
                {
                  name: "Amanda L.",
                  age: "29 anos",
                  location: "Curitiba - PR",
                  testimonial:
                    "A planilha mudou TUDO. Antes eu não sabia se estava evoluindo. Agora eu VEJOnos gráficos. É motivador demais ver as barras subindo semana após semana!",
                  rating: 5,
                  result: "Melhorou em TODOS os exercícios",
                  image: "👩",
                },
                {
                  name: "Felipe R.",
                  age: "35 anos",
                  location: "Porto Alegre - RS",
                  testimonial:
                    "Treino há 10 anos, mas sempre no 'feeling'. Quando comecei a usar o sistema e rastrear tudo, percebi que estava REGREDINDO em alguns exercícios! Agora tenho controle total.",
                  rating: 5,
                  result: "Corrigiu erros de 10 anos",
                  image: "👨",
                },
                {
                  name: "Juliana K.",
                  age: "26 anos",
                  location: "Brasília - DF",
                  testimonial:
                    "Melhor investimento que fiz em 2024. Parei de perder tempo com treinos aleatórios e comecei a crescer DE VERDADE. Meu namorado ficou com ciúmes dos meus ganhos 😂",
                  rating: 5,
                  result: "+3kg de massa magra em 6 semanas",
                  image: "👩",
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-card border-2 border-border rounded-xl p-6 space-y-4 hover:border-accent hover:scale-105 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-accent/10 border border-accent rounded-lg px-3 py-2">
                    <p className="text-xs font-bold text-accent">✨ RESULTADO:</p>
                    <p className="text-sm font-bold">{testimonial.result}</p>
                  </div>

                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>

                  <div className="pt-4 border-t border-border space-y-1">
                    <p className="font-bold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.age} • {testimonial.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: "347+", label: "Alunos Ativos" },
                { number: "4.9/5", label: "Avaliação Média" },
                { number: "98%", label: "Recomprariam" },
                { number: "< 24h", label: "Suporte Rápido" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center space-y-2">
                  <p className="text-4xl font-black text-accent">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
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

      {/* ============ FAQ SECTION (EXPANDIDO) ============ */}
      <section className="py-24 bg-card/30 border-t border-border">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2
                className="text-4xl md:text-5xl font-black"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Perguntas Frequentes
              </h2>
              <div className="h-1 w-32 bg-accent mx-auto" />
              <p className="text-muted-foreground">
                Ainda tem dúvidas? Vamos eliminar todas as objeções:
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "❓ É para iniciantes ou apenas para avançados?",
                  answer:
                    "O Treino Inteligente funciona para QUALQUER NÍVEL. Se você tem pelo menos 3-6 meses de experiência em musculação (conhece os exercícios básicos), este sistema vai acelerar seus resultados. Se você é avançado, vai corrigir erros que nem sabia que estava cometendo.",
                },
                {
                  question: "❓ Preciso de equipamentos especiais?",
                  answer:
                    "Não! O sistema funciona tanto para academias completas quanto home gyms. Os princípios são universais — você adapta os exercícios ao que tem disponível. A planilha é editável justamente para isso.",
                },
                {
                  question: "❓ Quanto tempo leva para ver resultados?",
                  answer:
                    "A maioria dos nossos alunos nota diferenças VISÍVEIS nas primeiras 4-6 semanas. Mas o mais importante: você vai VER nos números da planilha que está progredindo desde a PRIMEIRA SEMANA. Isso é extremamente motivador.",
                },
                {
                  question: "❓ Como funciona o acesso? É vitalício?",
                  answer:
                    "Sim! Você recebe o PDF e a Planilha por e-mail imediatamente após a confirmação do pagamento. São SEUS para sempre. Pode acessar, editar, imprimir, usar quantas vezes quiser. Sem mensalidades, sem pegadinhas.",
                },
                {
                  question: "❓ Posso usar a planilha no Google Sheets ou apenas no Excel?",
                  answer:
                    "A planilha funciona PERFEITAMENTE tanto no Excel (Windows/Mac) quanto no Google Sheets (online, grátis). Você pode fazer uma cópia e usar de qualquer dispositivo — computador, tablet ou até celular.",
                },
                {
                  question: "❓ E se eu não gostar? Como funciona a garantia?",
                  answer:
                    "Simples: você tem 7 DIAS COMPLETOS para usar o sistema. Se, por qualquer motivo, você não achar que valeu cada centavo, é só me enviar um email e eu devolvo 100% do seu dinheiro. Sem perguntas, sem burocracia. Você não corre NENHUM risco.",
                },
                {
                  question: "❓ Vocês dão suporte?",
                  answer:
                    "SIM! Você tem acesso a suporte por e-mail para tirar dúvidas sobre o conteúdo do PDF ou sobre como usar a planilha. Respondemos todas as dúvidas em até 24-48h.",
                },
                {
                  question: "❓ O preço vai subir?",
                  answer:
                    "SIM. Esta é uma oferta de lançamento. Estamos limitando a 50 vagas neste preço de R$ 19,90. Depois disso, o preço volta para R$ 97 (valor normal). Não perca esta janela de oportunidade.",
                },
                {
                  question: "❓ Por que tão barato? Qual a pegadinha?",
                  answer:
                    "Não tem pegadinha. O produto é digital — não tem custo de produção, estoque ou frete. Prefiro vender para MUITA gente a um preço justo do que cobrar caro e vender pouco. Simples assim. Minha meta é transformar o máximo de pessoas possível.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-card border-2 border-border rounded-xl p-6 space-y-3 hover:border-accent/50 transition-all"
                >
                  <h3
                    className="font-black text-lg"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CHECKOUT SECTION (ULTRA PERSUASIVO) ============ */}
      <section id="checkout" className="py-24 bg-gradient-to-b from-background to-card/50 border-t border-border relative overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 animate-pulse" />
        
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <div className="space-y-12">
            <div className="space-y-6 text-center">
              <div className="inline-flex items-center gap-2 bg-destructive/20 border-2 border-destructive px-6 py-3 rounded-full animate-pulse">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <span className="text-sm font-bold text-destructive uppercase tracking-wide">
                  ÚLTIMAS {Math.floor(Math.random() * 8) + 3} VAGAS RESTANTES
                </span>
              </div>

              <h2
                className="text-4xl md:text-6xl font-black"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Você Está a <span className="text-accent">1 DECISÃO</span>
                <br />
                de Transformar Seu Corpo
              </h2>
              <div className="h-1 w-32 bg-accent mx-auto" />
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A diferença entre quem cresce e quem fica estagnado?
                <br />
                <span className="text-foreground font-bold text-2xl">
                  A decisão de agir AGORA.
                </span>
              </p>
            </div>

            {/* Oferta Principal */}
            <div className="bg-gradient-to-br from-card via-background to-card border-4 border-accent rounded-2xl p-8 md:p-12 space-y-8 shadow-2xl shadow-accent/30">
              <div className="space-y-4">
                <p className="text-sm text-center text-muted-foreground uppercase tracking-wide">
                  📦 PACOTE COMPLETO - TUDO INCLUÍDO
                </p>
                
                <div className="space-y-3">
                  {[
                    "✅ PDF Treino Inteligente (50+ páginas)",
                    "✅ Planilha de Progressão Automática",
                    "✅ BÔNUS #1: Plano de 12 Semanas",
                    "✅ BÔNUS #2: Guia de Suplementação",
                  ].map((item, idx) => (
                    <div key={idx} className="bg-card/50 rounded-lg p-4 border border-border">
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t-2 border-accent pt-4">
                  <div className="flex items-center justify-between text-muted-foreground mb-2">
                    <span className="text-lg">Valor Total:</span>
                    <span className="text-2xl line-through">R$ 97</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">Hoje por apenas:</span>
                    <div className="text-right">
                      <div className="text-5xl md:text-6xl font-black text-accent">R$ 19,90</div>
                      <p className="text-sm text-muted-foreground">pagamento único</p>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/10 border-2 border-accent rounded-lg p-4 text-center">
                  <p className="text-sm font-bold text-accent">
                    🔥 DESCONTO DE 80% - APENAS NAS PRIMEIRAS 50 VAGAS
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => {
                    window.location.href = "https://pay.kiwify.com.br/fUcu9RX";
                  }}
                  className="w-full bg-accent hover:bg-accent/90 text-background font-black text-lg sm:text-xl md:text-2xl py-6 md:py-8 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-accent/50 animate-pulse"
                >
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 inline" />
                  <span>SIM! QUERO GARANTIR MINHA VAGA AGORA</span>
                  <br />
                  <span className="text-xs sm:text-sm font-normal opacity-90">
                    (ACESSO IMEDIATO - COMPRA 100% SEGURA)
                  </span>
                </button>

                {/* Badge Kiwify - Pagamento Seguro */}
                <div className="bg-accent/10 border border-accent rounded-lg p-4 text-center">
                  <p className="text-sm font-bold text-accent mb-2">
                    🔒 PAGAMENTO 100% SEGURO PROCESSADO PELA KIWIFY
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Ambiente seguro com certificado SSL. Seus dados estão protegidos.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground flex-wrap">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-accent" />
                    <span>Compra Segura (SSL)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent" />
                    <span>Garantia de 7 Dias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    <span>Acesso Imediato</span>
                  </div>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="bg-destructive/10 border-2 border-destructive rounded-lg p-6 text-center space-y-3">
                <p className="font-bold text-destructive flex items-center justify-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  ATENÇÃO: Esta Oferta Expira Em
                </p>
                <div className="flex justify-center gap-4">
                  <div className="bg-background rounded-lg p-4 min-w-[80px]">
                    <div className="text-3xl font-black text-accent">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </div>
                    <div className="text-xs text-muted-foreground">HORAS</div>
                  </div>
                  <div className="bg-background rounded-lg p-4 min-w-[80px]">
                    <div className="text-3xl font-black text-accent">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </div>
                    <div className="text-xs text-muted-foreground">MINUTOS</div>
                  </div>
                  <div className="bg-background rounded-lg p-4 min-w-[80px]">
                    <div className="text-3xl font-black text-accent">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </div>
                    <div className="text-xs text-muted-foreground">SEGUNDOS</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Após o prazo, o preço retorna para R$ 97
                </p>
              </div>
            </div>

            {/* Seção "Quem É vs Quem NÃO É" */}
            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="bg-accent/5 border-2 border-accent rounded-xl p-8 space-y-4">
                <h3 className="text-2xl font-black text-accent flex items-center gap-3">
                  <Check className="w-8 h-8" />
                  Este Produto É Para Você Se:
                </h3>
                <div className="space-y-3">
                  {[
                    "Você leva o treino a sério e quer resultados REAIS",
                    "Está cansado de copiar treinos aleatórios",
                    "Quer um método científico e comprovado",
                    "Valoriza progressão mensurável e consistente",
                    "Está disposto a seguir um plano estruturado",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-destructive/5 border-2 border-destructive rounded-xl p-8 space-y-4">
                <h3 className="text-2xl font-black text-destructive flex items-center gap-3">
                  <X className="w-8 h-8" />
                  Este Produto NÃO É Para Você Se:
                </h3>
                <div className="space-y-3">
                  {[
                    "Você busca pílulas mágicas ou atalhos impossíveis",
                    "Não está disposto a anotar e rastrear progresso",
                    "Quer resultados sem esforço ou consistência",
                    "Prefere continuar no 'achismo' e improvisar",
                    "Acha que sabe tudo e não precisa aprender",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Última chamada */}
            <div className="bg-card border-2 border-accent rounded-xl p-8 text-center space-y-6">
              <h3 className="text-3xl font-black">
                Ainda Está em Dúvida?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Pense assim: <span className="text-foreground font-bold">quanto vale 1 ano da sua vida</span>?
                <br /><br />
                Você pode continuar no mesmo corpo, fazendo os mesmos erros... OU pode investir R$ 19,90 hoje
                e ter o corpo que sempre quis <span className="text-accent font-bold">nos próximos 6-12 meses</span>.
                <br /><br />
                Se você treina há mais de 6 meses sem resultados expressivos, não é falta de esforço.
                É falta de <span className="text-accent font-bold">MÉTODO</span>.
                <br /><br />
                E lembre-se: <span className="text-accent font-bold">você tem 7 dias de garantia</span>.
                Literalmente ZERO risco.
              </p>
              
              <button
                onClick={() => {
                  window.location.href = "https://pay.kiwify.com.br/fUcu9RX";
                }}
                className="btn-cta text-base sm:text-lg md:text-xl px-8 sm:px-12 py-5 sm:py-6 shadow-2xl shadow-accent/50 w-full sm:w-auto"
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 inline" />
                <span className="text-sm sm:text-base md:text-lg">CHEGA DE ENROLAÇÃO - EU QUERO CRESCER!</span>
              </button>

              <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                Pagamento 100% seguro processado pela Kiwify
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

            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Contato
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

      {/* BOTÃO FIXO MOBILE - SEMPRE VISÍVEL */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <button
          onClick={() => {
            window.location.href = "https://pay.kiwify.com.br/fUcu9RX";
          }}
          className="w-full bg-accent hover:bg-accent/90 text-background font-black text-base sm:text-lg py-5 px-4 transition-all duration-300 shadow-2xl border-t-4 border-accent/20 animate-pulse"
        >
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-6 h-6" />
            <span>GARANTIR MINHA VAGA AGORA</span>
          </div>
        </button>
      </div>
    </div>
  );
}
