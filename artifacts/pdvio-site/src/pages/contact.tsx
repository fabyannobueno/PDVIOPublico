import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-24 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Fale com a gente</h1>
          <p className="text-xl text-muted-foreground">Estamos aqui para ajudar o seu negócio a crescer. Entre em contato pelos canais abaixo ou envie uma mensagem.</p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" required placeholder="João da Silva" className="bg-muted/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" required placeholder="Nome do seu negócio" className="bg-muted/50" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" required placeholder="joao@empresa.com.br" className="bg-muted/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <Input id="whatsapp" required placeholder="(11) 99999-9999" className="bg-muted/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Como podemos ajudar?</Label>
                  <Input id="subject" required placeholder="Dúvida comercial, suporte, etc." className="bg-muted/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea id="message" required placeholder="Detalhe sua necessidade..." className="min-h-[120px] bg-muted/50" />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </form>
            </div>

            {/* Info Cards */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold mb-0">Canais de atendimento</h2>
              <Card className="bg-card">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">WhatsApp de Vendas</h3>
                    <p className="text-muted-foreground mb-2">Fale com um consultor agora mesmo.</p>
                    <a href="#" className="font-medium text-primary hover:underline">(11) 98765-4321</a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">E-mail</h3>
                    <p className="text-muted-foreground mb-2">Para dúvidas gerais e suporte técnico.</p>
                    <a href="mailto:contato@pdvio.com.br" className="font-medium text-primary hover:underline">contato@pdvio.com.br</a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Endereço</h3>
                    <p className="text-muted-foreground">Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP, 01310-100</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}