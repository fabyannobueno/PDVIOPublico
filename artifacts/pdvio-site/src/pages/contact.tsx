import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, MessageSquare, ArrowRight, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Nossa equipe retornará em até 2 horas.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">Vamos conversar.</h1>
            <p className="text-xl text-muted-foreground">Dúvidas comerciais, parcerias ou suporte? Escolha seu canal preferido.</p>
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Info Cards (Left Side) */}
            <div className="lg:col-span-2 flex flex-col gap-6 order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <Card className="bg-gradient-to-br from-primary to-fuchsia-600 text-white border-0 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none"></div>
                  <CardContent className="p-8 relative z-10 flex flex-col items-start">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-black text-2xl mb-2">WhatsApp</h3>
                    <p className="text-white/80 mb-6 leading-relaxed">O canal mais rápido. Fale direto com nossos consultores agora mesmo.</p>
                    <a href="#" className="font-bold text-xl hover:underline mb-2 flex items-center gap-2">
                      (11) 98765-4321 <ArrowRight className="w-5 h-5" />
                    </a>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white/20 py-1 px-3 rounded-full mt-4">
                      <Clock className="w-3 h-3" /> Resposta em minutos
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <Card className="bg-card border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">E-mail</h3>
                      <p className="text-muted-foreground text-sm mb-2">Para dúvidas gerais e suporte.</p>
                      <a href="mailto:contato@pdvio.com.br" className="font-bold text-primary hover:underline">contato@pdvio.com.br</a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <Card className="bg-card border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Escritório</h3>
                      <p className="text-muted-foreground text-sm">Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP, 01310-100</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Form (Right Side) */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <Card className="bg-card border-border shadow-xl rounded-3xl">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-3xl font-black tracking-tight">Envie uma mensagem</h2>
                      <div className="hidden md:flex items-center gap-2 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        <Clock className="w-3 h-3" /> Resposta em até 2h
                      </div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2 relative group">
                          <label htmlFor="name" className="text-sm font-bold text-muted-foreground group-focus-within:text-primary transition-colors">Nome completo</label>
                          <Input id="name" required placeholder="João da Silva" className="bg-muted/30 border-border/50 h-12 rounded-xl focus-visible:ring-primary/50 text-base" />
                        </div>
                        <div className="space-y-2 relative group">
                          <label htmlFor="company" className="text-sm font-bold text-muted-foreground group-focus-within:text-primary transition-colors">Empresa</label>
                          <Input id="company" required placeholder="Sua Loja" className="bg-muted/30 border-border/50 h-12 rounded-xl focus-visible:ring-primary/50 text-base" />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2 relative group">
                          <label htmlFor="email" className="text-sm font-bold text-muted-foreground group-focus-within:text-primary transition-colors">E-mail corporativo</label>
                          <Input id="email" type="email" required placeholder="joao@empresa.com.br" className="bg-muted/30 border-border/50 h-12 rounded-xl focus-visible:ring-primary/50 text-base" />
                        </div>
                        <div className="space-y-2 relative group">
                          <label htmlFor="whatsapp" className="text-sm font-bold text-muted-foreground group-focus-within:text-primary transition-colors">WhatsApp</label>
                          <Input id="whatsapp" required placeholder="(11) 99999-9999" className="bg-muted/30 border-border/50 h-12 rounded-xl focus-visible:ring-primary/50 text-base" />
                        </div>
                      </div>
                      
                      <div className="space-y-2 relative group">
                        <label htmlFor="message" className="text-sm font-bold text-muted-foreground group-focus-within:text-primary transition-colors">Como podemos ajudar?</label>
                        <Textarea id="message" required placeholder="Detalhe sua necessidade, número de lojas, etc." className="min-h-[150px] bg-muted/30 border-border/50 rounded-xl focus-visible:ring-primary/50 text-base resize-none" />
                      </div>
                      
                      <Button type="submit" className="w-full h-14 text-lg font-bold rounded-xl btn-shine bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white border-0 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}