import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { REGISTER_URL, asset } from "@/lib/constants";
import pdvioIcon from "@/assets/pdvio-icon.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import useEmblaCarousel from "embla-carousel-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
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

// Spotlight Card component (DOM-driven, no React re-renders on mousemove)
function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || !overlayRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    overlayRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(124, 58, 237, 0.1), transparent 40%)`;
  };

  const handleMouseEnter = () => {
    if (overlayRef.current) overlayRef.current.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    if (overlayRef.current) overlayRef.current.style.opacity = "0";
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        ref={overlayRef}
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
      />
      {children}
    </div>
  );
}

// Animated Counter component (DOM-driven, no React re-renders during animation)
function AnimatedCounter({ value, prefix = "", suffix = "", currency = false }: { value: number, prefix?: string, suffix?: string, currency?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const formatValue = (n: number): string => {
    if (currency) {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(n);
    }
    const fmt = (val: number, digits: number) =>
      new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: digits,
      }).format(val);
    let num: string;
    let abbr = "";
    if (value >= 1_000_000_000) {
      num = fmt(n / 1_000_000_000, 1);
      abbr = " bi";
    } else if (value >= 1_000_000) {
      num = fmt(n / 1_000_000, 1);
      abbr = " mi";
    } else if (value >= 1_000) {
      num = fmt(n / 1_000, 1);
      abbr = " mil";
    } else {
      num = fmt(n, Number.isInteger(value) ? 0 : 1);
    }
    return `${prefix}${num}${abbr}${suffix}`;
  };

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const end = value;
    const duration = 2000;
    const startTime = performance.now();
    let raf = 0;

    const tick = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      if (ref.current) ref.current.textContent = formatValue(end * easeProgress);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, value]);

  return <span ref={ref}>{formatValue(0)}</span>;
}

const formatBRL = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

export default function Home() {
  const [activeTab, setActiveTab] = useState("pdv");
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
                <h1 className="relative z-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[1.05]">
                  Venda mais. <br />
                  <span className="gradient-text animate-pulse block pb-2">Controle tudo.</span>
                </h1>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <p className="text-lg md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-xl">
                  O sistema de gestão na nuvem que acelera sua operação, reduz falhas e multiplica lucros. 
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="h-16 px-8 text-lg btn-shine bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-2xl shadow-xl shadow-primary/25 hover:scale-105 active:scale-95 transition-all">
                  <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" data-testid="link-signup">
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
                      <img src={pdvioIcon} alt="PDVIO" className="w-10 h-10 object-contain drop-shadow-lg" />
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
                            <AnimatedCounter value={12450} currency />
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
                              formatter={(value: number) => [formatBRL(value), "Vendas"]}
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
        <div className="flex w-max animate-marquee gap-16 pr-16 whitespace-nowrap opacity-40 font-bold text-xl tracking-widest text-muted-foreground uppercase">
          {[...Array(8)].flatMap((_, idx) => [
            <span key={`pwa-${idx}`} aria-hidden={idx > 0} className="flex items-center gap-3 shrink-0"><MonitorSmartphone className="w-6 h-6" /> PWA</span>,
            <span key={`esc-${idx}`} aria-hidden={idx > 0} className="flex items-center gap-3 shrink-0"><Printer className="w-6 h-6" /> ESC/POS</span>,
            <span key={`pix-${idx}`} aria-hidden={idx > 0} className="flex items-center gap-3 shrink-0"><CreditCard className="w-6 h-6" /> PIX</span>,
            <span key={`dre-${idx}`} aria-hidden={idx > 0} className="flex items-center gap-3 shrink-0"><BarChart3 className="w-6 h-6" /> DRE</span>,
            <span key={`lgpd-${idx}`} aria-hidden={idx > 0} className="flex items-center gap-3 shrink-0"><Lock className="w-6 h-6" /> LGPD</span>,
            <span key={`multi-${idx}`} aria-hidden={idx > 0} className="flex items-center gap-3 shrink-0"><Store className="w-6 h-6" /> Multi-loja</span>,
          ])}
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Tudo que você precisa.<br/><span className="text-muted-foreground">Nada do que você não precisa.</span></h2>
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed">Arquitetura modular desenhada para o varejo moderno. Ative as funcionalidades conforme o seu negócio cresce.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 auto-rows-[380px]">
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
              <SpotlightCard className="h-full rounded-[2rem] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10 max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/10 mb-5">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    <span className="text-xs font-bold uppercase tracking-wider">Sempre online</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">A internet caiu? O PDV não.</h3>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    Nossa tecnologia PWA permite que você continue vendendo mesmo offline. Quando a conexão volta, tudo é sincronizado automaticamente.
                  </p>
                </div>
                <div className="relative z-10 hidden md:block w-80 h-80 shrink-0">
                  <DotLottieReact
                    src="https://lottie.host/fbb051d4-9805-41c0-bd68-a6274dfac4a7/WaBto1fhcj.lottie"
                    loop
                    autoplay
                    className="w-full h-full"
                  />
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

            <div className="w-full max-w-5xl aspect-video rounded-3xl border border-border bg-card shadow-2xl relative overflow-hidden p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.04, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full bg-background border border-border rounded-xl shadow-inner overflow-hidden"
                >
                  {activeTab === "pdv" && (
                    <div className="grid grid-cols-12 h-full bg-background">
                      {/* Sidebar */}
                      <div className="col-span-1 bg-gradient-to-b from-muted/40 to-muted/10 border-r border-border flex flex-col items-center py-3 gap-1.5">
                        <img src={pdvioIcon} alt="PDVIO" className="w-8 h-8 object-contain mb-2" />
                        {[
                          { i: CreditCard, a: true, l: "PDV" },
                          { i: ShoppingCart, l: "Pedidos" },
                          { i: Package, l: "Estoque" },
                          { i: Users, l: "Clientes" },
                          { i: BarChart3, l: "Relatórios" },
                          { i: Store, l: "Lojas" },
                        ].map((it, i) => (
                          <div key={i} className={`w-9 h-9 rounded-lg flex flex-col items-center justify-center relative ${it.a ? "bg-primary/15 text-primary" : "text-muted-foreground/70 hover:bg-muted/50"}`}>
                            <it.i className="w-3.5 h-3.5" />
                            {it.a && <span className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-primary rounded-r-full" />}
                          </div>
                        ))}
                        <div className="mt-auto w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-[10px] font-bold ring-2 ring-background">JM</div>
                      </div>

                      {/* Products */}
                      <div className="col-span-7 flex flex-col min-h-0 bg-background">
                        {/* Top bar */}
                        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
                          <div className="flex items-center gap-2">
                            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Loja Centro</div>
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-green-500/15 text-green-600 font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Online</span>
                          </div>
                          <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-medium">
                            <span>Caixa 02</span>
                            <span className="text-border">•</span>
                            <span>João M.</span>
                            <span className="text-border">•</span>
                            <span className="font-mono">20:14</span>
                          </div>
                        </div>
                        <div className="px-4 pt-3 pb-2">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex-1 h-9 rounded-lg bg-muted/30 border border-border flex items-center gap-2 px-3 text-[11px] text-muted-foreground/80">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></svg>
                              <span>Buscar produto, código ou ler código de barras…</span>
                              <kbd className="ml-auto text-[9px] font-mono bg-background border border-border rounded px-1.5 py-0.5 text-foreground/60">F2</kbd>
                            </div>
                          </div>
                          <div className="flex gap-1.5 mb-3 overflow-hidden">
                            {[
                              { n: "Todos", c: 124, a: true },
                              { n: "Lanches", c: 32 },
                              { n: "Bebidas", c: 28 },
                              { n: "Pizzas", c: 14 },
                              { n: "Sobremesas", c: 9 },
                              { n: "Combos", c: 12 },
                            ].map((c, i) => (
                              <button key={i} className={`text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 whitespace-nowrap transition-colors ${c.a ? "bg-foreground text-background" : "bg-muted/30 text-muted-foreground hover:bg-muted/60"}`}>
                                {c.n}
                                <span className={`text-[9px] px-1 rounded ${c.a ? "bg-background/20" : "bg-background/50"}`}>{c.c}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2 px-4 pb-4 flex-1 min-h-0 overflow-hidden">
                          {[
                            { n: "X-Bacon Especial", sku: "LCH001", p: "22,00", e: "🥓", c: "from-orange-400 to-amber-600", est: 18 },
                            { n: "Coca-Cola 2L", sku: "BEB003", p: "14,00", e: "🥤", c: "from-red-500 to-rose-700", est: 42 },
                            { n: "Batata Frita G", sku: "ACO002", p: "18,00", e: "🍟", c: "from-yellow-400 to-amber-500", est: 24 },
                            { n: "Suco Natural", sku: "BEB011", p: "9,00", e: "🧃", c: "from-green-400 to-emerald-600", est: 15 },
                            { n: "Pizza Calabresa M", sku: "PIZ001", p: "55,00", e: "🍕", c: "from-rose-400 to-red-600", est: 8 },
                            { n: "Heineken 600ml", sku: "BEB022", p: "12,00", e: "🍺", c: "from-amber-400 to-yellow-700", est: 36 },
                            { n: "Combo Família", sku: "COM004", p: "39,90", e: "🍔", c: "from-purple-500 to-fuchsia-600", est: 0, novo: true },
                            { n: "Sundae Caramelo", sku: "SOB007", p: "16,00", e: "🍨", c: "from-pink-400 to-rose-500", est: 22 },
                          ].map((p, i) => (
                            <div key={i} className="rounded-xl border border-border bg-card overflow-hidden flex flex-col hover:border-primary/40 hover:shadow-md transition-all cursor-pointer group">
                              <div className={`relative h-14 bg-gradient-to-br ${p.c} flex items-center justify-center overflow-hidden`}>
                                <span className="text-3xl drop-shadow-sm">{p.e}</span>
                                {p.novo && <span className="absolute top-1 right-1 text-[8px] font-black bg-white text-black px-1 py-0.5 rounded">NOVO</span>}
                                {p.est > 0 && p.est < 10 && <span className="absolute top-1 left-1 text-[8px] font-bold bg-amber-500/90 text-white px-1 py-0.5 rounded">{p.est} un.</span>}
                                {p.est === 0 && <div className="absolute inset-0 bg-black/40 flex items-center justify-center"><span className="text-[9px] font-black text-white">SEM ESTOQUE</span></div>}
                              </div>
                              <div className="p-2 flex flex-col gap-0.5">
                                <div className="text-[10px] text-muted-foreground/70 font-mono leading-none">{p.sku}</div>
                                <div className="text-[11px] font-bold leading-tight truncate">{p.n}</div>
                                <div className="text-[12px] font-mono font-black text-foreground mt-0.5">R$ {p.p}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Cart */}
                      <div className="col-span-4 flex flex-col bg-muted/15 border-l border-border min-h-0">
                        <div className="px-4 py-3 border-b border-border bg-card">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center"><ShoppingCart className="w-3.5 h-3.5 text-primary" /></div>
                              <div>
                                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold leading-none mb-0.5">Venda em andamento</div>
                                <div className="text-sm font-black leading-none">#1284</div>
                              </div>
                            </div>
                            <span className="text-[9px] font-black px-2 py-1 rounded-full bg-green-500/15 text-green-600 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> ABERTO</span>
                          </div>
                          <div className="flex items-center gap-2 text-[10px] text-muted-foreground mt-2">
                            <Users className="w-3 h-3" />
                            <span className="font-medium">Cliente: <span className="text-foreground font-bold">Maria S.</span></span>
                            <span className="text-border">•</span>
                            <span>CPF nota: ✓</span>
                          </div>
                        </div>
                        <div className="flex-1 px-3 py-2.5 space-y-1.5 overflow-hidden">
                          {[
                            { q: 1, n: "X-Bacon Especial", v: "22,00", obs: "sem cebola" },
                            { q: 2, n: "Coca-Cola 2L", v: "28,00" },
                            { q: 1, n: "Batata Frita G", v: "18,00" },
                            { q: 1, n: "Combo Família", v: "39,90", desc: "10%" },
                          ].map((it, i) => (
                            <div key={i} className="bg-card border border-border rounded-lg px-2.5 py-2 flex items-center gap-2">
                              <div className="flex items-center gap-0.5 bg-muted/40 rounded">
                                <button className="w-4 h-5 text-muted-foreground text-[10px] font-bold hover:text-foreground">−</button>
                                <span className="w-5 text-center text-[11px] font-black">{it.q}</span>
                                <button className="w-4 h-5 text-muted-foreground text-[10px] font-bold hover:text-foreground">+</button>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-[11px] font-bold leading-tight truncate">{it.n}</div>
                                {it.obs && <div className="text-[9px] text-amber-600 italic leading-tight">obs: {it.obs}</div>}
                                {it.desc && <div className="text-[9px] text-green-600 font-bold leading-tight">desc {it.desc}</div>}
                              </div>
                              <span className="font-mono font-black text-[11px]">{it.v}</span>
                            </div>
                          ))}
                        </div>
                        <div className="px-4 py-2.5 border-t border-border bg-card space-y-1">
                          <div className="flex justify-between text-[10px] text-muted-foreground"><span>Subtotal (4 itens)</span><span className="font-mono">R$ 107,90</span></div>
                          <div className="flex justify-between text-[10px] text-green-600 font-medium"><span>Desconto</span><span className="font-mono">− R$ 7,90</span></div>
                          <div className="flex justify-between items-baseline pt-1 mt-1 border-t border-dashed border-border">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Total</span>
                            <span className="text-primary font-black text-xl font-mono">R$ 100,00</span>
                          </div>
                          <div className="grid grid-cols-3 gap-1 pt-2">
                            <button className="bg-primary text-primary-foreground rounded-md py-2 text-[10px] font-black flex flex-col items-center gap-0.5 shadow-sm">
                              <span className="text-[9px] opacity-80">F5</span>
                              <span>PIX</span>
                            </button>
                            <button className="bg-foreground text-background rounded-md py-2 text-[10px] font-black flex flex-col items-center gap-0.5">
                              <span className="text-[9px] opacity-80">F6</span>
                              <span>CARTÃO</span>
                            </button>
                            <button className="bg-card text-foreground border border-border rounded-md py-2 text-[10px] font-black flex flex-col items-center gap-0.5">
                              <span className="text-[9px] opacity-60">F7</span>
                              <span>DINHEIRO</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "comandas" && (
                    <div className="h-full grid grid-cols-2 bg-gradient-to-br from-primary/10 via-fuchsia-500/5 to-background">
                      <div className="hidden md:flex flex-col justify-center p-8">
                        <div className="text-[10px] uppercase tracking-widest text-primary font-black mb-3">Comanda Mobile</div>
                        <h4 className="text-2xl font-black tracking-tight mb-3">Garçom no controle.<br/>Cozinha em sincronia.</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">Anote pedidos pelo celular ou tablet, divida a conta por pessoa e acompanhe o status de cada item em tempo real.</p>
                        <div className="space-y-2">
                          {["Divisão de conta inteligente", "Envio direto para a cozinha", "Funciona offline 100%"].map((f, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                              <span className="font-medium">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-center p-4">
                        <div className="w-[245px] h-full max-h-[460px] rounded-[2.2rem] border-[8px] border-foreground bg-background overflow-hidden flex flex-col shadow-2xl relative">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-foreground rounded-b-2xl z-10"></div>
                          {/* Status bar */}
                          <div className="flex justify-between items-center px-5 pt-2 pb-1 text-[9px] font-bold">
                            <span>20:14</span>
                            <span className="opacity-60">●●●●● 5G ▮</span>
                          </div>
                          <div className="bg-gradient-to-br from-primary to-fuchsia-600 text-white px-4 py-3">
                            <div className="text-[9px] uppercase tracking-wider opacity-80">Comanda Aberta</div>
                            <div className="text-base font-black">Mesa 12</div>
                            <div className="text-[10px] opacity-80">4 pessoas • Carlos (garçom)</div>
                          </div>
                          <div className="flex-1 p-2.5 space-y-1.5 overflow-hidden bg-muted/10">
                            {[
                              { n: "X-Bacon", q: 2, s: "Pronto", c: "bg-green-500", i: "✓" },
                              { n: "Pizza Calabresa M", q: 1, s: "Cozinha", c: "bg-yellow-500", i: "🔥" },
                              { n: "Coca 2L", q: 2, s: "Entregue", c: "bg-blue-500", i: "🚚" },
                              { n: "Pudim", q: 4, s: "Pendente", c: "bg-orange-500", i: "⏱" },
                            ].map((it, i) => (
                              <div key={i} className="flex items-center gap-2 bg-card border border-border rounded-xl px-2 py-1.5">
                                <div className={`w-6 h-6 rounded-lg ${it.c} text-white text-[10px] font-bold flex items-center justify-center shrink-0`}>{it.i}</div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-[11px] font-bold leading-tight truncate">{it.q}× {it.n}</div>
                                  <div className="text-[9px] text-muted-foreground">{it.s}</div>
                                </div>
                              </div>
                            ))}
                            <button className="w-full border border-dashed border-primary/40 text-primary text-[10px] font-bold py-1.5 rounded-xl">+ Adicionar item</button>
                          </div>
                          <div className="border-t border-border p-2.5 bg-card">
                            <div className="flex justify-between text-[10px] mb-0.5"><span className="text-muted-foreground">Subtotal</span><span className="font-mono">132,90</span></div>
                            <div className="flex justify-between text-[10px] mb-1.5"><span className="text-muted-foreground">Serviço (10%)</span><span className="font-mono">13,29</span></div>
                            <div className="flex justify-between text-xs font-black mb-2"><span>Total</span><span className="text-primary font-mono">R$ 146,19</span></div>
                            <div className="bg-gradient-to-r from-primary to-fuchsia-600 text-white rounded-xl py-2 text-center text-[10px] font-black">Dividir e Fechar</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "kds" && (
                    <div className="h-full flex flex-col bg-zinc-950 text-white">
                      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <ChefHat className="w-4 h-4 text-primary" />
                          <div className="text-xs font-black">COZINHA • TURNO NOITE</div>
                          <span className="text-[10px] text-white/50">Marcos</span>
                        </div>
                        <div className="flex items-center gap-3 text-[10px] font-bold">
                          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span>3 pendentes</span>
                          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-500"></span>2 em preparo</span>
                          <span className="text-white/50">20:14</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2.5 p-3 flex-1 min-h-0">
                        {[
                          { mesa: "MESA 4", n: "#1281", tempo: "12:34", urg: "atrasado", cor: "border-red-500 bg-red-950/40", badge: "bg-red-500", itens: [{ n: "X-Bacon", q: 2, ok: true }, { n: "Batata G", q: 1, ok: true }, { n: "Coca 2L", q: 2, ok: false }] },
                          { mesa: "DELIVERY iFood", n: "#1283", tempo: "03:21", urg: "preparo", cor: "border-yellow-500 bg-yellow-950/30", badge: "bg-yellow-500", itens: [{ n: "Pizza Calabresa M", q: 1, ok: false }, { n: "Suco Laranja", q: 1, ok: false }, { n: "Sundae", q: 1, ok: false }] },
                          { mesa: "MESA 8", n: "#1284", tempo: "00:48", urg: "novo", cor: "border-green-500 bg-green-950/30", badge: "bg-green-500", itens: [{ n: "Combo Família", q: 3, ok: false }, { n: "Pudim", q: 1, ok: false }] },
                        ].map((p, i) => (
                          <div key={i} className={`border-2 ${p.cor} rounded-xl p-2.5 flex flex-col`}>
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <div className="text-[11px] font-black">{p.mesa}</div>
                                <div className="text-[9px] text-white/60">{p.n}</div>
                              </div>
                              <div className={`px-2 py-0.5 rounded ${p.badge} text-black text-[10px] font-mono font-black`}>{p.tempo}</div>
                            </div>
                            <div className="space-y-1 flex-1">
                              {p.itens.map((it, j) => (
                                <div key={j} className={`text-[11px] font-bold border rounded px-2 py-1.5 flex items-center gap-2 ${it.ok ? "bg-green-500/10 border-green-500/40 line-through opacity-60" : "bg-white/5 border-white/10"}`}>
                                  <span className={`w-3.5 h-3.5 rounded border ${it.ok ? "bg-green-500 border-green-500 text-black flex items-center justify-center text-[8px]" : "border-white/30"}`}>{it.ok ? "✓" : ""}</span>
                                  <span className="flex-1">{it.q}× {it.n}</span>
                                </div>
                              ))}
                            </div>
                            <button className="mt-2 bg-white text-black text-[10px] font-black py-1.5 rounded">FINALIZAR</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "dashboard" && (
                    <div className="h-full flex flex-col">
                      <div className="px-4 py-2.5 border-b border-border flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-primary" />
                          <div className="text-xs font-black">Visão Geral • Hoje</div>
                        </div>
                        <div className="flex gap-1">
                          {["Hoje", "7d", "30d", "Mês"].map((p, i) => (
                            <span key={i} className={`text-[10px] font-bold px-2 py-0.5 rounded ${i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>{p}</span>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-2.5 p-3 flex-1 min-h-0">
                        {/* Big chart */}
                        <div className="col-span-3 row-span-2 border border-border rounded-xl p-3 flex flex-col bg-card">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Faturamento</div>
                              <div className="flex items-baseline gap-2">
                                <div className="text-2xl font-black">R$ 12.450,00</div>
                                <span className="text-[10px] text-green-500 font-black">↗ +24%</span>
                              </div>
                            </div>
                            <div className="flex gap-2 text-[10px]">
                              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary"></span>Hoje</span>
                              <span className="flex items-center gap-1 text-muted-foreground"><span className="w-2 h-2 rounded-full bg-muted-foreground/40"></span>Ontem</span>
                            </div>
                          </div>
                          <div className="flex-1 min-h-0 -mx-1">
                            <ResponsiveContainer width="100%" height="100%">
                              <AreaChart
                                data={[
                                  { h: "10h", hoje: 420, ontem: 380 },
                                  { h: "11h", hoje: 680, ontem: 520 },
                                  { h: "12h", hoje: 1240, ontem: 980 },
                                  { h: "13h", hoje: 1480, ontem: 1120 },
                                  { h: "14h", hoje: 1180, ontem: 940 },
                                  { h: "15h", hoje: 920, ontem: 860 },
                                  { h: "16h", hoje: 1050, ontem: 880 },
                                  { h: "17h", hoje: 1380, ontem: 1140 },
                                  { h: "18h", hoje: 1820, ontem: 1420 },
                                  { h: "19h", hoje: 2240, ontem: 1780 },
                                  { h: "20h", hoje: 2480, ontem: 1920 },
                                  { h: "21h", hoje: 2120, ontem: 1680 },
                                  { h: "22h", hoje: 1680, ontem: 1320 },
                                ]}
                                margin={{ top: 8, right: 8, left: 8, bottom: 0 }}
                              >
                                <defs>
                                  <linearGradient id="dashHoje" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.45} />
                                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                                  </linearGradient>
                                  <linearGradient id="dashOntem" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0.18} />
                                    <stop offset="100%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0} />
                                  </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.5} />
                                <XAxis dataKey="h" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }} interval={1} />
                                <YAxis hide />
                                <Tooltip
                                  cursor={{ stroke: "hsl(var(--primary))", strokeWidth: 1.5, strokeDasharray: "4 4" }}
                                  contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: 10, fontSize: 11, fontWeight: 600, padding: "6px 10px" }}
                                  formatter={(value: number, name: string) => [formatBRL(value), name === "hoje" ? "Hoje" : "Ontem"]}
                                  labelFormatter={(l) => `Horário ${l}`}
                                />
                                <Area type="monotone" dataKey="ontem" stroke="hsl(var(--muted-foreground))" strokeWidth={1.5} strokeDasharray="4 3" fill="url(#dashOntem)" />
                                <Area type="monotone" dataKey="hoje" stroke="hsl(var(--primary))" strokeWidth={2.5} fill="url(#dashHoje)" />
                              </AreaChart>
                            </ResponsiveContainer>
                          </div>
                        </div>

                        {/* KPIs */}
                        {[
                          { l: "Ticket médio", v: "R$ 87,40", d: "+8%", g: true },
                          { l: "Pedidos", v: "142", d: "+12", g: true },
                        ].map((k, i) => (
                          <div key={i} className="border border-border rounded-xl p-2.5 bg-card">
                            <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold mb-0.5">{k.l}</div>
                            <div className="text-base font-black leading-none">{k.v}</div>
                            <div className={`text-[9px] font-bold mt-1 ${k.g ? "text-green-500" : "text-red-500"}`}>{k.d} vs ontem</div>
                            <div className="mt-1.5 flex items-end gap-0.5 h-5">
                              {[3, 5, 4, 6, 5, 7, 6, 8, 7, 9].map((h, j) => (
                                <div key={j} className="flex-1 bg-primary/40 rounded-sm" style={{ height: `${h * 10}%` }}></div>
                              ))}
                            </div>
                          </div>
                        ))}

                        {/* Top products */}
                        <div className="col-span-4 border border-border rounded-xl p-3 bg-card">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Top Produtos</div>
                            <div className="text-[10px] text-muted-foreground">vendidos hoje</div>
                          </div>
                          <div className="space-y-1.5">
                            {[
                              { n: "X-Bacon", v: 48, p: 100, e: "🥓" },
                              { n: "Pizza Calabresa M", v: 32, p: 67, e: "🍕" },
                              { n: "Combo Família", v: 28, p: 58, e: "🍔" },
                              { n: "Coca 2L", v: 22, p: 46, e: "🥤" },
                            ].map((p, i) => (
                              <div key={i} className="flex items-center gap-2 text-[11px]">
                                <span className="text-base">{p.e}</span>
                                <span className="w-32 font-bold truncate">{p.n}</span>
                                <div className="flex-1 h-1.5 bg-muted/40 rounded-full overflow-hidden">
                                  <div className="h-full bg-gradient-to-r from-primary to-fuchsia-500 rounded-full" style={{ width: `${p.p}%` }}></div>
                                </div>
                                <span className="font-mono font-black w-8 text-right">{p.v}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 text-center md:divide-x divide-y md:divide-y-0 divide-primary-foreground/10">
            {[
              { value: 2500, label: "Lojas ativas", prefix: "+" },
              { value: 1200000000, label: "Processados", prefix: "R$ " },
              { value: 99.9, label: "Uptime", suffix: "%" },
              { value: 4.9, label: "Na App Store", suffix: " ★" }
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="flex flex-col items-center justify-center pt-10 md:pt-0 first:pt-0">
                <div className="text-4xl md:text-6xl font-black mb-3 tracking-tighter">
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
                  { quote: "Abandonamos um sistema que custava R$400/mês e travava todo fim de semana. O PDVIO é 10x melhor, mais rápido e o suporte realmente resolve.", name: "Mariana Costa", role: "Dona", company: "Hamburgueria Sabor", city: "São Paulo, SP", img: asset("mariana.webp") },
                  { quote: "O KDS mudou a dinâmica da nossa cozinha. Antes perdíamos pedidos no papel. Hoje a tela organiza tudo por tempo de espera. Impecável.", name: "Roberto Silva", role: "Chef", company: "Bistro 44", city: "Curitiba, PR", img: asset("roberto.webp") },
                  { quote: "A implantação demorou literalmente 10 minutos. Importei minha planilha de produtos, loguei no tablet e abri o caixa. Simples assim.", name: "Amanda Ferreira", role: "Gerente", company: "Mercadinho Express", city: "Belo Horizonte, MG", img: asset("amanda.webp") },
                  { quote: "O Dashboard no celular me permite viajar tranquilo. Vejo as vendas, ticket médio e cancelamentos em tempo real de qualquer lugar do mundo.", name: "Carlos Mendes", role: "Sócio-Diretor", company: "Rede Bar Brasil", city: "Rio de Janeiro, RJ", img: asset("carlos.webp") }
                ].map((t, i) => (
                  <div key={i} className="flex-[0_0_85%] md:flex-[0_0_400px] pl-4">
                    <Card className="h-full border border-border bg-card shadow-lg hover:border-primary/30 transition-colors">
                      <CardContent className="p-8 flex flex-col h-full gap-6">
                        <div className="flex gap-1 text-yellow-400">
                          {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                        </div>
                        <p className="text-lg text-foreground font-medium leading-relaxed flex-1">"{t.quote}"</p>
                        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border">
                          <img src={t.img} alt={t.name} loading="lazy" width={48} height={48} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 shrink-0" />
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
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
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