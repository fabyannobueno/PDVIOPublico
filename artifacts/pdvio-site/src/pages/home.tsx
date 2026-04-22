import { useState, useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { APP_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import useEmblaCarousel from "embla-carousel-react";
import { 
  CheckCircle2, 
  Store, 
  Utensils, 
  Beer, 
  ShoppingCart, 
  Truck, 
  Building2, 
  MonitorSmartphone,
  CreditCard,
  ChefHat,
  Package,
  Lock,
  BarChart3,
  Users,
  Printer,
  ChevronRight,
  PlayCircle,
  Quote,
  Star,
  ArrowRight,
  MessageCircle
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const salesData = [
  { time: "08:00", sales: 120 },
  { time: "10:00", sales: 450 },
  { time: "12:00", sales: 1200 },
  { time: "14:00", sales: 1800 },
  { time: "16:00", sales: 900 },
  { time: "18:00", sales: 1500 },
  { time: "20:00", sales: 2400 },
  { time: "22:00", sales: 3100 },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Spotlight Card component
function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(124, 58, 237, 0.1), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}

// Animated Counter component
function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(end * easeProgress));

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    }
  }, [isInView, value]);

  // Format large numbers
  const formattedCount = value >= 1000000 
    ? (count / 1000000).toFixed(1) 
    : value >= 1000 
      ? (count / 1000).toFixed(1) 
      : count;

  return (
    <span ref={ref}>
      {prefix}{formattedCount}{value >= 1000000 ? "M" : value >= 1000 ? "k" : ""}{suffix}
    </span>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("pdv");
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" });

  return (
    <div className="flex flex-col w-full">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden bg-background">
        <div className="absolute inset-0 w-full h-full bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] z-0"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/30 blur-[120px] animate-blob mix-blend-screen" />
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-fuchsia-600/30 blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
          <div className="absolute -bottom-32 left-[20%] w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col gap-8 max-w-2xl"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md text-primary w-fit border border-primary/20 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider">Novidade · KDS em tempo real</span>
              </motion.div>
              
              <motion.div variants={fadeIn} className="relative">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-primary/20 to-fuchsia-500/20 blur-2xl opacity-50 dark:opacity-30 rounded-[3rem]"></div>
                <h1 className="relative z-10 text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[1.05]">
                  Venda mais. <br />
                  <span className="gradient-text animate-pulse block pb-2">Controle tudo.</span>
                </h1>
              </motion.div>
              
              <motion.variants variants={fadeIn}>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-xl">
                  O sistema de gestão na nuvem que acelera sua operação, reduz falhas e multiplica lucros. 
                </p>
              </motion.variants>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="h-16 px-8 text-lg btn-shine bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-2xl shadow-xl shadow-primary/25 hover:scale-105 active:scale-95 transition-all">
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer" data-testid="link-signup">
                    Começar grátis <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-16 px-8 text-lg rounded-2xl border-border bg-background/50 backdrop-blur-sm hover:bg-muted transition-all hover:scale-105 active:scale-95" data-testid="link-features">
                  <Link href="/funcionalidades">
                    <PlayCircle className="mr-2 h-5 w-5" /> Ver demonstração
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex flex-wrap gap-x-6 gap-y-3 pt-4 text-sm font-semibold text-muted-foreground">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Sem cartão de crédito</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> 14 dias grátis</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Cancela quando quiser</span>
              </motion.div>
            </motion.div>

            {/* 3D Floating Mockup Stack */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative h-[600px] w-full hidden lg:block perspective-[2000px]"
            >
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                  rotateX: [5, 7, 5],
                  rotateY: [-10, -8, -10]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Main Dashboard Card */}
                <div className="w-[110%] h-[480px] rounded-3xl border border-white/10 bg-card/90 backdrop-blur-2xl shadow-2xl shadow-primary/20 overflow-hidden flex flex-col relative z-10 -mr-12">
                  <div className="absolute inset-0 bg-noise opacity-[0.03] z-0"></div>
                  <div className="relative z-10 h-14 border-b border-border flex items-center px-4 justify-between bg-muted/40">
                    <div className="flex gap-2">
                      <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-sm shadow-red-500/50"></div>
                      <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shadow-sm shadow-yellow-500/50"></div>
                      <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-sm shadow-green-500/50"></div>
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground px-4 py-1.5 rounded-full bg-background/80 shadow-inner border border-border/50 backdrop-blur-md flex items-center gap-2">
                      <Lock className="w-3 h-3" /> app.pdvio.com.br
                    </div>
                    <div className="w-14"></div>
                  </div>
                  
                  <div className="flex flex-1 overflow-hidden relative z-10">
                    <div className="w-20 border-r border-border bg-muted/20 flex flex-col items-center py-6 gap-8">
                      <img src="/pdvio-icon.png" alt="PDVIO" className="w-10 h-10 object-contain drop-shadow-lg" />
                      <MonitorSmartphone className="h-6 w-6 text-primary drop-shadow-md" />
                      <ShoppingCart className="h-6 w-6 text-muted-foreground/60 hover:text-muted-foreground transition-colors" />
                      <Package className="h-6 w-6 text-muted-foreground/60 hover:text-muted-foreground transition-colors" />
                      <Users className="h-6 w-6 text-muted-foreground/60 hover:text-muted-foreground transition-colors" />
                      <BarChart3 className="h-6 w-6 text-muted-foreground/60 hover:text-muted-foreground transition-colors" />
                    </div>
                    
                    <div className="flex-1 p-8 flex flex-col gap-8 bg-background/40">
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className="font-bold text-2xl mb-1">Faturamento Hoje</h3>
                          <p className="text-sm text-muted-foreground font-medium">Atualizado agora</p>
                        </div>
                        <div className="text-right">
                          <h3 className="font-black text-4xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            R$ <AnimatedCounter value={12450} />
                          </h3>
                          <p className="text-sm text-green-500 font-bold flex items-center justify-end gap-1 mt-1">
                            <span className="bg-green-500/20 p-0.5 rounded text-[10px]">↗</span> +24% vs ontem
                          </p>
                        </div>
                      </div>
                      
                      <div className="h-[220px] w-full border border-border rounded-2xl bg-card/60 p-5 shadow-sm">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={salesData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                            <defs>
                              <linearGradient id="colorSalesHero" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.5}/>
                                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.5} />
                            <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))", fontWeight: 500 }} dy={10} />
                            <YAxis hide />
                            <Tooltip 
                              cursor={{ stroke: "hsl(var(--primary))", strokeWidth: 2, strokeDasharray: "4 4" }}
                              contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: "12px", boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)", fontWeight: 600 }}
                              itemStyle={{ color: "hsl(var(--primary))", fontWeight: 700 }}
                            />
                            <Area type="monotone" dataKey="sales" stroke="hsl(var(--primary))" strokeWidth={4} fillOpacity={1} fill="url(#colorSalesHero)" animationDuration={2000} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Notification - Top Right */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-6 -right-6 w-64 rounded-2xl bg-card border border-border shadow-2xl p-4 flex items-center gap-4 z-30 transform-gpu"
                  style={{ transform: "translateZ(100px)" }}
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <Store className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-green-500 uppercase tracking-wider mb-0.5">Novo Pedido</p>
                    <p className="text-sm font-bold">Mesa 12 • R$ 145,90</p>
                  </div>
                </motion.div>

                {/* Floating Notification - Bottom Left */}
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-10 -left-10 w-72 rounded-2xl bg-card border border-border shadow-2xl p-4 flex items-center gap-4 z-30 transform-gpu"
                  style={{ transform: "translateZ(150px)" }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-0.5">Pagamento Confirmado</p>
                    <p className="text-sm font-bold">PIX • R$ 89,50</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrolling Trust Marquee */}
      <section className="py-6 border-y border-border bg-card overflow-hidden">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...Array(2)].fill(null).map((_, idx) => (
            <div key={idx} aria-hidden={idx === 1} className="flex items-center gap-16 shrink-0 pr-16 opacity-40 font-bold text-xl tracking-widest text-muted-foreground uppercase">
              <span className="flex items-center gap-3"><MonitorSmartphone className="w-6 h-6" /> PWA</span>
              <span className="flex items-center gap-3"><Printer className="w-6 h-6" /> ESC/POS</span>
              <span className="flex items-center gap-3"><CreditCard className="w-6 h-6" /> PIX</span>
              <span className="flex items-center gap-3"><BarChart3 className="w-6 h-6" /> DRE</span>
              <span className="flex items-center gap-3"><Lock className="w-6 h-6" /> LGPD</span>
              <span className="flex items-center gap-3"><Store className="w-6 h-6" /> Multi-loja</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Tudo que você precisa.<br/><span className="text-muted-foreground">Nada do que você não precisa.</span></h2>
            <p className="text-xl text-muted-foreground leading-relaxed">Arquitetura modular desenhada para o varejo moderno. Ative as funcionalidades conforme o seu negócio cresce.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 auto-rows-[320px]">
            {/* Bento 1: PDV (Large) */}
            <AnimatedSection delay={0.1} className="md:col-span-2 md:row-span-2">
              <SpotlightCard className="h-full rounded-[2rem] bg-gradient-to-br from-card to-background border border-border flex flex-col p-10 group">
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <CreditCard className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Frente de Caixa Relâmpago</h3>
                  <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                    Venda em segundos com atalhos de teclado, leitor de código de barras e integração com PIX e balanças. Desenvolvido para não criar filas.
                  </p>
                </div>
                <div className="mt-8 h-48 w-full bg-muted/30 rounded-xl border border-border overflow-hidden relative">
                  {/* Faux receipt animation */}
                  <div className="absolute inset-x-8 -bottom-10 h-64 bg-card shadow-lg border border-border rounded-t-md px-4 pb-4 pt-16 transition-transform duration-700 group-hover:translate-y-[-20px]">
                    <div className="border-b border-dashed border-border pb-2 mb-2 text-center text-xs font-mono font-bold">CUPOM NÃO FISCAL</div>
                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex justify-between"><span>1x COCA COLA 2L</span><span>R$ 14,00</span></div>
                      <div className="flex justify-between"><span>2x X-BACON</span><span>R$ 44,00</span></div>
                      <div className="flex justify-between pt-2 border-t border-border font-bold"><span>TOTAL</span><span>R$ 58,00</span></div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedSection>

            {/* Bento 2: KDS */}
            <AnimatedSection delay={0.2}>
              <SpotlightCard className="h-full rounded-[2rem] bg-card border border-border p-8 flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">
                  <ChefHat className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">KDS (Cozinha)</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Adeus papel. Pedidos chegam na cozinha em tempo real organizados por cores.
                </p>
                <div className="mt-auto flex gap-2">
                  <div className="flex-1 bg-red-500/10 border border-red-500/20 rounded-lg p-2 text-[10px] text-red-500 font-bold">MESA 4 (12min)</div>
                  <div className="flex-1 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-2 text-[10px] text-yellow-600 font-bold">DELIVERY (3min)</div>
                </div>
              </SpotlightCard>
            </AnimatedSection>

            {/* Bento 3: Reports */}
            <AnimatedSection delay={0.3}>
              <SpotlightCard className="h-full rounded-[2rem] bg-card border border-border p-8 flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <BarChart3 className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">BI & Relatórios</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Decisões baseadas em dados. DRE, Curva ABC e fluxo de caixa na palma da mão.
                </p>
                <div className="mt-auto h-16 flex items-end gap-1 px-2">
                  {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
                    <div key={i} className="flex-1 bg-blue-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </SpotlightCard>
            </AnimatedSection>

            {/* Bento 4: Offline */}
            <AnimatedSection delay={0.4} className="md:col-span-3">
              <SpotlightCard className="h-full rounded-[2rem] bg-primary text-primary-foreground border border-primary p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10 max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/10 mb-6">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    <span className="text-xs font-bold uppercase tracking-wider">Sempre online</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">A internet caiu? O PDV não.</h3>
                  <p className="text-primary-foreground/80 text-lg leading-relaxed">
                    Nossa tecnologia PWA permite que você continue vendendo mesmo offline. Quando a conexão volta, tudo é sincronizado automaticamente.
                  </p>
                </div>
                <div className="relative z-10 hidden md:block">
                  <MonitorSmartphone className="w-32 h-32 text-primary-foreground/20" />
                </div>
              </SpotlightCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-6">Um sistema. Todas as telas.</h2>
            <p className="text-xl text-muted-foreground">O PDVIO se adapta ao seu dispositivo. Computador, tablet ou celular — a mesma experiência fluida.</p>
          </AnimatedSection>

          <div className="flex flex-col items-center">
            <div className="flex bg-background p-1.5 rounded-2xl border border-border shadow-sm mb-12 overflow-x-auto max-w-full">
              {[
                { id: "pdv", label: "Frente de Caixa" },
                { id: "comandas", label: "Comandas Mobile" },
                { id: "kds", label: "Cozinha (KDS)" },
                { id: "dashboard", label: "Dashboard" }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                    activeTab === tab.id 
                      ? "bg-primary text-primary-foreground shadow-md" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="w-full max-w-5xl aspect-video rounded-3xl border border-border bg-card shadow-2xl relative overflow-hidden flex items-center justify-center p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full bg-background border border-border rounded-xl shadow-inner flex items-center justify-center"
                >
                  <div className="text-center text-muted-foreground flex flex-col items-center">
                    {activeTab === "pdv" && <CreditCard className="w-16 h-16 mb-4 opacity-20" />}
                    {activeTab === "comandas" && <Store className="w-16 h-16 mb-4 opacity-20" />}
                    {activeTab === "kds" && <ChefHat className="w-16 h-16 mb-4 opacity-20" />}
                    {activeTab === "dashboard" && <BarChart3 className="w-16 h-16 mb-4 opacity-20" />}
                    <p className="font-bold text-lg">Mockup Interativo: {activeTab.toUpperCase()}</p>
                    <p className="text-sm">Representação visual detalhada do módulo</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-primary-foreground/10">
            {[
              { value: 2500, label: "Lojas ativas", prefix: "+" },
              { value: 1200000000, label: "Processados", prefix: "R$ " },
              { value: 99.9, label: "Uptime", suffix: "%" },
              { value: 4.9, label: "Na App Store", suffix: " ★" }
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="flex flex-col items-center justify-center">
                <div className="text-5xl md:text-6xl font-black mb-3 tracking-tighter">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-primary-foreground/80 font-semibold uppercase tracking-widest text-sm">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-6">Quem usa, ama.</h2>
            <p className="text-xl text-muted-foreground">Não acredite apenas na gente. Veja o que os donos de negócios dizem.</p>
          </AnimatedSection>

          <div className="relative -mx-4 md:-mx-6">
            <div className="overflow-hidden px-4 md:px-6 py-10" ref={emblaRef}>
              <div className="flex gap-6 -ml-4">
                {[
                  { quote: "Abandonamos um sistema que custava R$400/mês e travava todo fim de semana. O PDVIO é 10x melhor, mais rápido e o suporte realmente resolve.", name: "Mariana Costa", role: "Dona", company: "Hamburgueria Sabor", city: "São Paulo, SP" },
                  { quote: "O KDS mudou a dinâmica da nossa cozinha. Antes perdíamos pedidos no papel. Hoje a tela organiza tudo por tempo de espera. Impecável.", name: "Roberto Silva", role: "Chef", company: "Bistro 44", city: "Curitiba, PR" },
                  { quote: "A implantação demorou literalmente 10 minutos. Importei minha planilha de produtos, loguei no tablet e abri o caixa. Simples assim.", name: "Amanda Ferreira", role: "Gerente", company: "Mercadinho Express", city: "Belo Horizonte, MG" },
                  { quote: "O Dashboard no celular me permite viajar tranquilo. Vejo as vendas, ticket médio e cancelamentos em tempo real de qualquer lugar do mundo.", name: "Carlos Mendes", role: "Sócio-Diretor", company: "Rede Bar Brasil", city: "Rio de Janeiro, RJ" }
                ].map((t, i) => (
                  <div key={i} className="flex-[0_0_85%] md:flex-[0_0_400px] pl-4">
                    <Card className="h-full border border-border bg-card shadow-lg hover:border-primary/30 transition-colors">
                      <CardContent className="p-8 flex flex-col h-full gap-6">
                        <div className="flex gap-1 text-yellow-400">
                          {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                        </div>
                        <p className="text-lg text-foreground font-medium leading-relaxed flex-1">"{t.quote}"</p>
                        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                            {t.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground">{t.name}</h4>
                            <p className="text-sm text-muted-foreground">{t.role}, {t.company}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Fade edges */}
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none hidden md:block"></div>
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Final Massive CTA */}
      <section className="relative py-40 bg-background overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-noise opacity-[0.05] z-0 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/20 to-fuchsia-500/20 blur-[100px] animate-pulse z-0 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
              Pronto para transformar<br/>seu negócio?
            </h2>
            <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium">
              Junte-se a milhares de comerciantes que já simplificaram suas vendas com o PDVIO.
            </p>
            <Button asChild size="lg" className="h-16 px-10 text-xl btn-shine bg-foreground text-background hover:bg-foreground/90 rounded-full shadow-2xl">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                Criar conta gratuitamente
              </a>
            </Button>
            <p className="mt-6 text-sm text-muted-foreground font-semibold">14 dias grátis • Sem cartão de crédito • Cancela online</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}