import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { APP_URL } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

export default function Plans() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-24 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Preços transparentes</h1>
          <p className="text-xl text-muted-foreground">Teste grátis por 14 dias, sem precisar cadastrar cartão de crédito.</p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Grátis */}
            <Card className="border border-border flex flex-col relative overflow-hidden">
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
                  <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-muted-foreground/30" /> Sem gestão de mesas</li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-muted-foreground/30" /> Sem KDS</li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer">Criar conta grátis</a>
                </Button>
              </CardContent>
            </Card>

            {/* Pro */}
            <Card className="border-2 border-primary shadow-xl shadow-primary/10 flex flex-col relative overflow-hidden scale-105 z-10">
              <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center text-xs font-bold py-1.5 uppercase tracking-wider">
                Recomendado
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
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> Comandas e mesas</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> KDS (Tela da cozinha)</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> Suporte prioritário via WhatsApp</li>
                </ul>
                <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600">
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer">Testar grátis por 14 dias</a>
                </Button>
              </CardContent>
            </Card>

            {/* Empresarial */}
            <Card className="border border-border flex flex-col relative overflow-hidden">
              <CardContent className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2">Empresarial</h3>
                <p className="text-muted-foreground text-sm h-10">Para redes, franquias e operações complexas.</p>
                <div className="my-6">
                  <span className="text-3xl font-extrabold">Sob consulta</span>
                </div>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> Multi-loja centralizado</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> API de integração</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> Gerente de conta dedicado</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> Onboarding presencial/online</li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <a href="/contato">Falar com consultor</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Dúvidas sobre pagamentos</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Como funciona o teste grátis?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Você pode testar todos os recursos do plano Pro gratuitamente por 14 dias. Não exigimos cartão de crédito para iniciar o teste. Se ao final do período você não quiser assinar, sua conta volta automaticamente para o plano Grátis.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Posso mudar de plano depois?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento diretamente pelo painel do PDVIO.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Como é feito o pagamento?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Aceitamos pagamentos via PIX ou Cartão de Crédito. No plano anual, você ganha 2 meses grátis.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}