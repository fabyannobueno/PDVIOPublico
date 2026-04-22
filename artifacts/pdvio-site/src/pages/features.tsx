import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_URL } from "@/lib/constants";
import { CheckCircle2, CreditCard, Store, ChefHat, Package, Lock, BarChart3, Users, Printer, MonitorSmartphone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Features() {
  const features = [
    { 
      id: "pdv",
      icon: CreditCard, 
      title: "Frente de caixa ultra-rápida", 
      desc: "Um PDV projetado para não criar filas. Venda em segundos com atalhos de teclado, leitor de código de barras e múltiplas formas de pagamento integradas.",
      sub: ["Busca rápida de produtos", "Leitor de código de barras USB", "Descontos no item ou subtotal", "Venda de produtos por peso"],
      color: "from-purple-500 to-fuchsia-500"
    },
    { 
      id: "comandas",
      icon: Store, 
      title: "Gestão inteligente de Mesas e Comandas", 
      desc: "Controle total do salão na palma da mão. Gerencie pedidos por mesa, divida contas facilmente e adicione observações para a cozinha sem erros.",
      sub: ["Mapa de mesas visual e interativo", "Transferência de itens entre mesas", "Taxa de serviço automática", "Divisão de conta por pessoas"],
      color: "from-blue-500 to-cyan-500"
    },
    { 
      id: "kds",
      icon: ChefHat, 
      title: "KDS: A revolução na sua Cozinha", 
      desc: "Adeus impressoras e papéis perdidos. Os pedidos chegam na tela da cozinha instantaneamente, organizados por tempo e setor.",
      sub: ["Fila de preparo com cores por tempo", "Aviso sonoro de novo pedido", "Filtro por setor (bar, cozinha, chapa)", "Histórico de pedidos concluídos"],
      color: "from-orange-500 to-red-500"
    },
    { 
      id: "estoque",
      icon: Package, 
      title: "Controle de Estoque e Fichas Técnicas", 
      desc: "Saiba exatamente o que você tem e o que precisa comprar. Controle ingredientes, crie categorias e gerencie adicionais com precisão.",
      sub: ["Alerta inteligente de estoque mínimo", "Grupos de complementos e adicionais", "Histórico de movimentação detalhado", "Importação em massa via Excel"],
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const secondaryFeatures = [
    { icon: Lock, title: "Caixa Blindado", desc: "Abertura, sangria, suprimento e fechamento cego." },
    { icon: BarChart3, title: "Relatórios e BI", desc: "DRE, Curva ABC e fluxo de caixa em tempo real." },
    { icon: Users, title: "Permissões", desc: "Controle de acessos granular por cargo." },
    { icon: Printer, title: "Impressão", desc: "Compatível com qualquer impressora térmica." },
    { icon: MonitorSmartphone, title: "PWA Offline", desc: "Venda mesmo sem internet. Sincroniza depois." }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-background border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary w-fit mx-auto border border-primary/20">
              <span className="text-xs font-bold uppercase tracking-wider">Por dentro do sistema</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black tracking-tighter">
              Poderoso. <br/><span className="text-muted-foreground">Elegante. Completo.</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore cada módulo do PDVIO e descubra como transformamos a complexidade do varejo em uma experiência fluida.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Feature Alternating Sections */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-32">
            {features.map((feature, idx) => (
              <motion.div 
                key={feature.id} 
                id={feature.id} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 shadow-lg shadow-${feature.color.split('-')[1]}/20`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">{feature.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {feature.desc}
                  </p>
                  <ul className="space-y-4">
                    {feature.sub.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`mt-1 rounded-full p-0.5 bg-gradient-to-br ${feature.color}`}>
                          <CheckCircle2 className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-foreground font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`absolute -inset-4 bg-gradient-to-br ${feature.color} opacity-20 blur-3xl rounded-[3rem] -z-10`}></div>
                  <Card className="border border-border/50 bg-card/50 backdrop-blur-xl shadow-2xl relative z-10 overflow-hidden rounded-[2rem]">
                    <div className="h-12 border-b border-border/50 flex items-center px-4 gap-2 bg-muted/20">
                      <div className="w-3 h-3 rounded-full bg-border"></div>
                      <div className="w-3 h-3 rounded-full bg-border"></div>
                      <div className="w-3 h-3 rounded-full bg-border"></div>
                    </div>
                    <CardContent className="p-8 aspect-[4/3] flex items-center justify-center bg-background/50">
                      <div className="text-center">
                        <feature.icon className="h-16 w-16 text-muted-foreground/20 mx-auto mb-4" />
                        <div className="font-bold text-xl text-muted-foreground/40">Interface do {feature.title.split(' ')[0]}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Features Grid */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">E não para por aí</h2>
            <p className="text-lg text-muted-foreground">Tudo o que você precisa para uma operação redonda e sem dores de cabeça.</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {secondaryFeatures.map((sf, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full bg-card hover:bg-muted/50 transition-colors border-border/50">
                  <CardContent className="p-6">
                    <sf.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">{sf.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{sf.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl font-black mb-4 tracking-tight">A diferença é clara</h2>
          <p className="text-xl text-muted-foreground mb-16">Veja por que as empresas estão migrando de sistemas legados para o PDVIO.</p>
          
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-6 font-bold text-lg w-1/3 border-b border-border bg-muted/20">Recurso</th>
                  <th className="p-6 font-black text-xl w-1/3 border-x border-b border-border bg-gradient-to-br from-primary/10 to-fuchsia-500/10 text-primary text-center">PDVIO</th>
                  <th className="p-6 font-bold text-lg text-muted-foreground w-1/3 border-b border-border bg-muted/20 text-center">Sistemas Antigos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { label: "Instalação", pdv: "Nuvem, em segundos", old: "Presencial, dias ou semanas" },
                  { label: "Equipamento", pdv: "Qualquer PC, tablet ou celular", old: "Computadores caros específicos" },
                  { label: "Atualizações", pdv: "Automáticas e gratuitas", old: "Lentas e pagas" },
                  { label: "Modo Offline", pdv: "Sim (PWA)", old: "Depende de rede local" },
                  { label: "Fidelidade", pdv: "Nenhuma. Cancele quando quiser.", old: "Contratos de 12 a 24 meses" },
                  { label: "Suporte", pdv: "WhatsApp, tempo real", old: "Tickets, e-mail demorado" },
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-muted/10 transition-colors">
                    <td className="p-6 font-medium">{row.label}</td>
                    <td className="p-6 border-x border-border bg-gradient-to-br from-primary/[0.02] to-fuchsia-500/[0.02] text-foreground font-bold text-center">{row.pdv}</td>
                    <td className="p-6 text-muted-foreground text-center">{row.old}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-32 text-center bg-background relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">Chega de sofrer com sistemas ruins.</h2>
          <Button asChild size="lg" className="h-16 px-10 text-xl btn-shine bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-full shadow-2xl hover:scale-105 transition-transform">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">Começar teste de 14 dias grátis</a>
          </Button>
        </div>
      </section>
    </div>
  );
}