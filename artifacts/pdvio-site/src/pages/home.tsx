import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { APP_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
  Quote
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none">
          <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px]" />
          <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] rounded-full bg-fuchsia-600/20 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium">Nova versão 3.0 disponível</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Venda mais. <br />
                <span className="gradient-text">Controle tudo.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                O PDV completo na nuvem para o seu comércio: caixa, comandas, cozinha, estoque e relatórios — em qualquer dispositivo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="h-14 px-8 text-base bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-0 shadow-lg shadow-primary/25 rounded-xl">
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer" data-testid="link-signup">
                    Começar grátis <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base rounded-xl border-border hover:bg-muted" data-testid="link-features">
                  <Link href="/funcionalidades">
                    <PlayCircle className="mr-2 h-5 w-5" /> Ver como funciona
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm font-medium text-muted-foreground">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Sem cartão de crédito</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> 14 dias grátis</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Suporte em português</span>
              </div>
            </motion.div>

            {/* Hero Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative perspective-1000"
            >
              <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl shadow-primary/10 overflow-hidden flex flex-col h-[500px]">
                <div className="h-12 border-b border-border flex items-center px-4 justify-between bg-muted/30">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-xs font-medium text-muted-foreground px-3 py-1 rounded-md bg-background/50 border border-border">app.pdvio.com.br</div>
                  <div className="w-12"></div>
                </div>
                
                <div className="flex flex-1 overflow-hidden">
                  <div className="w-16 border-r border-border bg-muted/10 flex flex-col items-center py-4 gap-6">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xs">P</div>
                    <MonitorSmartphone className="h-5 w-5 text-primary" />
                    <ShoppingCart className="h-5 w-5 text-muted-foreground" />
                    <Package className="h-5 w-5 text-muted-foreground" />
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <BarChart3 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  
                  <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden bg-background/50">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-lg">Visão Geral</h3>
                        <p className="text-xs text-muted-foreground">Vendas de hoje</p>
                      </div>
                      <div className="text-right">
                        <h3 className="font-bold text-2xl text-primary">R$ 4.250,00</h3>
                        <p className="text-xs text-green-500 font-medium">+15% vs ontem</p>
                      </div>
                    </div>
                    
                    <div className="h-[200px] w-full border border-border rounded-xl bg-card p-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={salesData}>
                          <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                          <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                          <YAxis hide />
                          <Tooltip 
                            contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: "8px" }}
                            itemStyle={{ color: "hsl(var(--foreground))" }}
                          />
                          <Area type="monotone" dataKey="sales" stroke="hsl(var(--primary))" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="flex-1 flex gap-4">
                      <div className="flex-1 border border-border rounded-xl bg-card p-3 flex flex-col gap-2">
                        <div className="flex justify-between items-center pb-2 border-b border-border">
                          <span className="text-xs font-medium">Mesa 12</span>
                          <span className="text-[10px] bg-yellow-500/20 text-yellow-600 px-2 py-0.5 rounded-full">Preparo</span>
                        </div>
                        <div className="text-xs text-muted-foreground flex justify-between"><span>2x X-Tudo</span> <span>R$ 56,00</span></div>
                        <div className="text-xs text-muted-foreground flex justify-between"><span>1x Coca 2L</span> <span>R$ 14,00</span></div>
                      </div>
                      <div className="flex-1 border border-border rounded-xl bg-card p-3 flex flex-col gap-2 opacity-50">
                        <div className="flex justify-between items-center pb-2 border-b border-border">
                          <span className="text-xs font-medium">Delivery #45</span>
                          <span className="text-[10px] bg-green-500/20 text-green-600 px-2 py-0.5 rounded-full">Pronto</span>
                        </div>
                        <div className="text-xs text-muted-foreground flex justify-between"><span>1x Pizza G</span> <span>R$ 72,00</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-10 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">Já usado por +2.500 comércios no Brasil</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            <div className="flex items-center gap-2 font-bold text-xl"><Store className="h-6 w-6" /> Empório</div>
            <div className="flex items-center gap-2 font-bold text-xl"><Utensils className="h-6 w-6" /> Sabor</div>
            <div className="flex items-center gap-2 font-bold text-xl"><Beer className="h-6 w-6" /> Bar & Cia</div>
            <div className="flex items-center gap-2 font-bold text-xl"><ShoppingCart className="h-6 w-6" /> Mercado</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tudo que você precisa em um só lugar</h2>
            <p className="text-lg text-muted-foreground">Sistema modular que cresce junto com o seu negócio. Ative apenas o que for usar.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CreditCard, title: "Frente de caixa (PDV)", desc: "Vendas rápidas com leitor de código de barras, atalhos de teclado e PIX, dinheiro, cartão." },
              { icon: Store, title: "Comandas e mesas", desc: "Gerencie pedidos por mesa, divida contas, adicione observações e adicionais." },
              { icon: ChefHat, title: "KDS — Tela da cozinha", desc: "Pedidos preparados aparecem em tempo real para a cozinha; marque como pronto com um clique." },
              { icon: Package, title: "Produtos e estoque", desc: "Catálogo com categorias, código de barras, adicionais com preço e produtos." },
              { icon: Lock, title: "Caixa controlado", desc: "Abertura, sangria, suprimento e fechamento com conferência por forma de pagamento." },
              { icon: BarChart3, title: "Relatórios e Dashboard", desc: "Vendas do dia, ticket médio, métodos de pagamento, comparativos e auditoria." },
              { icon: Users, title: "Permissões por cargo", desc: "Dono, Gerente, Caixa, Garçom, Cozinha — cada um vê só o que precisa." },
              { icon: Printer, title: "Impressão térmica", desc: "ESC/POS via USB, Serial e Bluetooth, com fallback para impressão do navegador." },
              { icon: MonitorSmartphone, title: "PWA — App instalável", desc: "Funciona como aplicativo no celular, tablet ou desktop sem precisar das lojas de app." }
            ].map((f, i) => (
              <AnimatedSection key={i}>
                <Card className="h-full border border-border bg-card hover:border-primary/50 transition-colors group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <f.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona?</h2>
            <p className="text-lg text-muted-foreground">Comece a vender em minutos, não em dias.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-12 right-12 h-[2px] bg-border z-0"></div>
            
            {[
              { num: 1, title: "Crie sua conta grátis", desc: "Sem cartão de crédito, setup instantâneo na nuvem." },
              { num: 2, title: "Cadastre produtos", desc: "Importe por planilha ou adicione manualmente em segundos." },
              { num: 3, title: "Abra o caixa", desc: "Venda no balcão, nas mesas ou no delivery facilmente." },
              { num: 4, title: "Acompanhe tudo", desc: "Veja os resultados em tempo real de qualquer lugar." }
            ].map((s) => (
              <AnimatedSection key={s.num} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold flex items-center justify-center text-xl mb-4 border-4 border-background shadow-md">
                  {s.num}
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Para quem é o PDVIO?</h2>
            <p className="text-lg text-muted-foreground">Projetado para se adaptar a diferentes tipos de comércio.</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: Utensils, title: "Restaurantes", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400&h=300" },
              { icon: Store, title: "Lanchonetes", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400&h=300" },
              { icon: Beer, title: "Bares", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=400&h=300" },
              { icon: ShoppingCart, title: "Mercados", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400&h=300" },
              { icon: Truck, title: "Distribuidoras", image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a77?auto=format&fit=crop&q=80&w=400&h=300" },
              { icon: Building2, title: "Lojas físicas", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=400&h=300" },
              { icon: Package, title: "Delivery", image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=400&h=300" },
            ].map((c, i) => (
              <AnimatedSection key={i}>
                <Card className="overflow-hidden border border-border group relative h-40 cursor-pointer">
                  <div className="absolute inset-0 bg-black/60 z-10 transition-colors group-hover:bg-black/40"></div>
                  <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <CardContent className="relative z-20 p-4 h-full flex flex-col items-center justify-center text-center">
                    <c.icon className="h-8 w-8 text-white mb-2" />
                    <h3 className="text-white font-bold text-lg">{c.title}</h3>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem nossos clientes</h2>
            <p className="text-lg text-muted-foreground">Empreendedores reais que transformaram seus negócios com o PDVIO.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Antes eu perdia horas fechando o caixa. Agora em 5 minutos está tudo conferido. O sistema de comandas também ajudou muito a não perder pedidos na cozinha.", name: "Mariana Costa", role: "Restaurante Sabor da Terra", city: "São Paulo, SP" },
              { quote: "O fato de poder ver as vendas em tempo real pelo celular enquanto não estou na loja me deu uma paz de espírito incrível. Recomendo para todos os meus amigos comerciantes.", name: "Roberto Silva", role: "Distribuidora Bebidas & Cia", city: "Curitiba, PR" },
              { quote: "A implantação foi extremamente rápida. Meus funcionários aprenderam a usar em menos de uma hora porque a tela é muito intuitiva.", name: "Amanda Ferreira", role: "Lanchonete Ponto Certo", city: "Belo Horizonte, MG" }
            ].map((t, i) => (
              <AnimatedSection key={i}>
                <Card className="h-full border border-border bg-card">
                  <CardContent className="p-8 flex flex-col h-full">
                    <Quote className="h-8 w-8 text-primary/40 mb-6" />
                    <p className="text-muted-foreground italic mb-8 flex-1 leading-relaxed">"{t.quote}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-lg">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{t.name}</h4>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                        <p className="text-xs text-muted-foreground/70">{t.city}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos simples e transparentes</h2>
            <p className="text-lg text-muted-foreground">Escolha o plano ideal para o momento do seu negócio.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Grátis */}
            <AnimatedSection>
              <Card className="h-full border border-border flex flex-col relative overflow-hidden">
                <CardContent className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-2">Grátis</h3>
                  <p className="text-muted-foreground text-sm h-10">Para quem está começando e precisa do básico.</p>
                  <div className="my-6">
                    <span className="text-4xl font-extrabold">R$ 0</span><span className="text-muted-foreground">/mês</span>
                  </div>
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> 1 Caixa</li>
                    <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> Até 50 produtos</li>
                    <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> Relatórios básicos</li>
                  </ul>
                  <Button asChild variant="outline" className="w-full mt-auto">
                    <a href={APP_URL} target="_blank" rel="noopener noreferrer" data-testid="link-signup-free">Começar agora</a>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Pro */}
            <AnimatedSection>
              <Card className="h-full border-2 border-primary shadow-xl shadow-primary/10 flex flex-col relative overflow-hidden lg:scale-105 z-10">
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center text-xs font-bold py-1.5 uppercase tracking-wider">
                  Mais popular
                </div>
                <CardContent className="p-8 flex flex-col flex-1 mt-4">
                  <h3 className="text-2xl font-bold mb-2">Pro</h3>
                  <p className="text-muted-foreground text-sm h-10">O sistema completo para o seu comércio operar em alta.</p>
                  <div className="my-6">
                    <span className="text-4xl font-extrabold">R$ 79</span><span className="text-muted-foreground">/mês</span>
                  </div>
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> Caixas ilimitados</li>
                    <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> Produtos ilimitados</li>
                    <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> Comandas e KDS</li>
                    <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> Suporte prioritário</li>
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 mt-auto">
                    <a href={APP_URL} target="_blank" rel="noopener noreferrer" data-testid="link-signup-pro">Testar grátis por 14 dias</a>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Empresarial */}
            <AnimatedSection>
              <Card className="h-full border border-border flex flex-col relative overflow-hidden">
                <CardContent className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-2">Empresarial</h3>
                  <p className="text-muted-foreground text-sm h-10">Para redes, franquias e operações complexas.</p>
                  <div className="my-6">
                    <span className="text-3xl font-extrabold">Sob consulta</span>
                  </div>
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> Multi-loja centralizado</li>
                    <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> API de integração</li>
                    <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> Gerente de conta</li>
                  </ul>
                  <Button asChild variant="outline" className="w-full mt-auto">
                    <Link href="/contato">Falar com consultor</Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Dúvidas Frequentes</h2>
          </AnimatedSection>
          
          <AnimatedSection>
            <Accordion type="single" collapsible className="w-full bg-card rounded-2xl border border-border p-4">
              <AccordionItem value="item-1">
                <AccordionTrigger>Preciso instalar algum programa?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Não. O PDVIO funciona 100% na nuvem. Você só precisa de um navegador e acesso à internet. Você também pode instalá-lo como PWA no celular, tablet ou computador.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Funciona offline?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  O módulo de Frente de Caixa possui tolerância a pequenas quedas de internet para não parar sua operação, sincronizando os dados assim que a conexão retornar. Porém, as outras funções requerem conexão.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Emite NF-e e NFC-e?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  A emissão fiscal está em desenvolvimento e chegará em breve na nossa versão 3.5 (prevista para os próximos meses). Por enquanto, operamos como controle de vendas não-fiscal.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Posso cancelar quando quiser?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Sim! Não temos multa, taxa de cancelamento ou fidelidade. Você pode exportar seus dados e cancelar a assinatura com um clique a qualquer momento.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Quais formas de pagamento aceita?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  O sistema permite registrar pagamentos em Dinheiro, PIX, Cartão de Crédito, Cartão de Débito, Ticket/Voucher e Fiado. Não processamos o pagamento, apenas registramos a transação.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-fuchsia-900"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pronto para vender mais?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl">Junte-se a milhares de comércios que já modernizaram sua gestão com o PDVIO.</p>
            <Button asChild size="lg" className="h-16 px-10 text-lg bg-white text-purple-900 hover:bg-gray-100 rounded-xl font-bold">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" data-testid="link-signup-final">Criar conta grátis agora</a>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}