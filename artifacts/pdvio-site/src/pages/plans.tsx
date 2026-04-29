import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { REGISTER_URL, WHATSAPP_URL } from "@/lib/constants";
import { CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Plans() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter">Planos simples.<br/>Sem surpresas.</h1>
            <p className="text-xl text-muted-foreground mb-12">Teste grátis por 14 dias, sem precisar cadastrar cartão de crédito.</p>
            
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-bold ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>Mensal</span>
              <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-primary" />
              <span className={`text-sm font-bold flex items-center gap-2 ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Anual
                <span className="bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider">Economize 20%</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
            {/* Iniciante */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="border border-border/50 bg-card hover:-translate-y-2 transition-transform duration-300 h-full">
                <CardContent className="p-7 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-2">Iniciante</h3>
                  <p className="text-muted-foreground text-sm h-12 leading-relaxed">Para quem está começando e precisa do básico bem feito.</p>
                  <div className="my-8">
                    <div className="flex items-end gap-1">
                      <span className="text-5xl font-black tracking-tighter">R$ 0</span>
                      <span className="text-muted-foreground font-medium pb-1">/mês</span>
                    </div>
                    <p className="text-xs text-transparent font-bold mt-2 select-none">.</p>
                  </div>
                  <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                    <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> <span className="text-sm font-medium">1 Caixa / Usuário</span></li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> <span className="text-sm font-medium">Até 50 produtos</span></li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> <span className="text-sm font-medium">Relatórios básicos</span></li>
                    <li className="flex items-center gap-3 text-muted-foreground/50"><CheckCircle2 className="h-5 w-5 shrink-0" /> <span className="text-sm">Sem gestão de mesas</span></li>
                    <li className="flex items-center gap-3 text-muted-foreground/50"><CheckCircle2 className="h-5 w-5 shrink-0" /> <span className="text-sm">Sem KDS (Cozinha)</span></li>
                  </ul>
                  <Button asChild variant="outline" className="w-full h-12 rounded-xl font-bold text-base hover:bg-muted">
                    <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">Criar conta grátis</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Essencial */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card className="border border-border/50 bg-card hover:-translate-y-2 transition-transform duration-300 h-full">
                <CardContent className="p-7 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-2">Essencial</h3>
                  <p className="text-muted-foreground text-sm h-12 leading-relaxed">Para quem já tem clientes e precisa crescer com organização.</p>
                  <div className="my-8">
                    <div className="flex items-end gap-1">
                      <span className="text-5xl font-black tracking-tighter">R$ {isAnnual ? '49' : '69'}</span>
                      <span className="text-muted-foreground font-medium pb-1">/mês</span>
                    </div>
                    {isAnnual ? (
                      <p className="text-xs text-green-500 font-bold mt-2">Cobrado R$ 588 anualmente</p>
                    ) : (
                      <p className="text-xs text-transparent font-bold mt-2 select-none">.</p>
                    )}
                  </div>
                  <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                    <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> <span className="text-sm font-medium">Até 2 lojas</span></li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> <span className="text-sm font-medium">Até 1.000 produtos</span></li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> <span className="text-sm font-medium">3 usuários por loja</span></li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> <span className="text-sm font-medium">Comandas e mesas</span></li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> <span className="text-sm font-medium">Suporte por chat</span></li>
                  </ul>
                  <Button asChild variant="outline" className="w-full h-12 rounded-xl font-bold text-base hover:bg-muted">
                    <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">Começar agora</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pro */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="relative z-10">
              <div className="absolute -inset-1 bg-gradient-to-b from-purple-500 to-fuchsia-500 rounded-[2rem] blur opacity-30"></div>
              <Card className="border-border bg-card shadow-2xl relative overflow-hidden rounded-[1.5rem] h-full">
                <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-center text-[10px] font-black py-1.5 uppercase tracking-widest">
                  Mais escolhido
                </div>
                <CardContent className="p-7 flex flex-col h-full mt-3">
                  <h3 className="text-3xl font-black mb-2 text-primary">Pro</h3>
                  <p className="text-muted-foreground text-sm h-12 leading-relaxed">O sistema completo para operar em alta performance, com várias lojas.</p>
                  <div className="my-8">
                    <div className="flex items-end gap-1">
                      <span className="text-5xl font-black tracking-tighter">R$ {isAnnual ? '129' : '159'}</span>
                      <span className="text-muted-foreground font-medium pb-1">/mês</span>
                    </div>
                    {isAnnual ? (
                      <p className="text-xs text-green-500 font-bold mt-2">Cobrado R$ 1.548 anualmente</p>
                    ) : (
                      <p className="text-xs text-transparent font-bold mt-2 select-none">.</p>
                    )}
                  </div>
                  <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                    <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> <span className="text-sm font-bold">Multi-loja (até 10 lojas)</span></li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> <span className="text-sm font-bold">Usuários e caixas ilimitados</span></li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> <span className="text-sm font-bold">Produtos ilimitados</span></li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> <span className="text-sm font-bold">KDS (Tela da cozinha)</span></li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> <span className="text-sm font-bold">Estoque, fichas e BI completo</span></li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> <span className="text-sm font-bold">Suporte prioritário (WhatsApp)</span></li>
                  </ul>
                  <Button asChild className="w-full h-12 rounded-xl font-bold text-base btn-shine bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-lg shadow-primary/25 hover:scale-105 transition-transform">
                    <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">Começar agora</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Empresarial */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Card className="border border-border/50 bg-card hover:-translate-y-2 transition-transform duration-300 h-full">
                <CardContent className="p-7 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-2">Empresarial</h3>
                  <p className="text-muted-foreground text-sm h-12 leading-relaxed">Para redes, franquias e operações complexas com várias lojas.</p>
                  <div className="my-8">
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-black tracking-tighter">Custom</span>
                    </div>
                    <p className="text-xs text-transparent font-bold mt-2 select-none">.</p>
                  </div>
                  <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                    <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-foreground shrink-0" /> <span className="text-sm font-medium">Tudo do plano Pro</span></li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-foreground shrink-0" /> <span className="text-sm font-medium">Lojas ilimitadas</span></li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-foreground shrink-0" /> <span className="text-sm font-medium">API de integração aberta</span></li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-foreground shrink-0" /> <span className="text-sm font-medium">Gerente de conta dedicado</span></li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-foreground shrink-0" /> <span className="text-sm font-medium">Onboarding personalizado</span></li>
                  </ul>
                  <Button asChild variant="outline" className="w-full h-12 rounded-xl font-bold text-base hover:bg-muted">
                    <a href="/contato">Falar com consultor</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ 2-col */}
      <section className="py-32 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-black mb-6 tracking-tight">Perguntas Frequentes</h2>
              <p className="text-lg text-muted-foreground mb-8">Tudo que você precisa saber sobre faturamento e assinaturas do PDVIO.</p>
              
              <Card className="bg-primary text-primary-foreground border-0 overflow-hidden relative">
                <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none"></div>
                <CardContent className="p-8 relative z-10">
                  <MessageSquare className="w-10 h-10 mb-6 text-primary-foreground/80" />
                  <h3 className="text-xl font-bold mb-2">Não encontrou sua dúvida?</h3>
                  <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">Nossa equipe está pronta para responder qualquer pergunta via WhatsApp.</p>
                  <Button asChild variant="secondary" className="w-full font-bold text-primary hover:bg-white transition-colors">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      Falar no WhatsApp <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-3">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  { q: "Como funciona o plano gratuito?", a: "Você pode criar sua conta no plano Iniciante e usar o PDVIO sem custo, sem precisar de cartão de crédito. Quando quiser desbloquear recursos avançados, é só fazer upgrade para o Pro a qualquer momento." },
                  { q: "Posso mudar de plano depois?", a: "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento diretamente pelo painel do PDVIO. Se fizer upgrade no meio do mês, pagará apenas o valor proporcional." },
                  { q: "Como é feito o pagamento?", a: "Aceitamos pagamentos via PIX, Boleto ou Cartão de Crédito. A cobrança é pré-paga e automática caso utilize cartão. No plano anual, você ganha mais de 2 meses grátis de desconto." },
                  { q: "Preciso de um equipamento específico?", a: "Não! O PDVIO roda na nuvem. Você pode usar qualquer computador (Windows, Mac, Linux), tablet (iPad, Android) ou até mesmo seu celular. Ele se adapta a qualquer tamanho de tela." },
                  { q: "E se eu ficar sem internet?", a: "Nossa tecnologia PWA permite que a tela de vendas continue funcionando offline. Você pode continuar registrando pedidos e, assim que a conexão voltar, o sistema sincroniza tudo com a nuvem automaticamente." }
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border border-border/50 rounded-xl px-6 bg-card data-[state=open]:border-primary/50 transition-colors">
                    <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}