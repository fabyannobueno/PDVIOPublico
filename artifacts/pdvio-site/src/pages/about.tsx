import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_URL } from "@/lib/constants";
import { History, Target, Eye, Heart, MapPin, Mail, Phone } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-24 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tecnologia brasileira para o <span className="gradient-text">comércio brasileiro</span></h1>
          <p className="text-xl text-muted-foreground">Nascemos para descomplicar a gestão das pequenas e médias empresas, entregando tecnologia de ponta com um preço justo.</p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card">
              <CardContent className="p-8">
                <Target className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
                <p className="text-muted-foreground leading-relaxed">Empoderar o pequeno e médio varejista com ferramentas modernas que automatizam rotinas, reduzem erros e aumentam a lucratividade.</p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-8">
                <Eye className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
                <p className="text-muted-foreground leading-relaxed">Ser o sistema operacional padrão do varejo brasileiro até 2030, presente em todas as esquinas do país.</p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-8">
                <Heart className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Nossos Valores</h3>
                <p className="text-muted-foreground leading-relaxed">Simplicidade extrema, foco no cliente, transparência total e excelência técnica em tudo o que fazem.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary/5 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">+2.5k</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Lojas ativas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">R$ 50M</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Transacionados/mês</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">99.9%</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Uptime</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">24/7</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Suporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Faça parte da nossa história</h2>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-xl">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">Criar conta grátis</a>
          </Button>
        </div>
      </section>
    </div>
  );
}