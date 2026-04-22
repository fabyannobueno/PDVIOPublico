import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_URL } from "@/lib/constants";
import { CheckCircle2, CreditCard, Store, ChefHat, Package, Lock, BarChart3, Users, Printer, MonitorSmartphone } from "lucide-react";

export default function Features() {
  const features = [
    { 
      id: "pdv",
      icon: CreditCard, 
      title: "Frente de caixa (PDV)", 
      desc: "Vendas rápidas com leitor de código de barras, atalhos de teclado e múltiplas formas de pagamento (PIX, dinheiro, cartão, ticket, misto).",
      sub: ["Busca rápida de produtos", "Leitor de código de barras USB", "Descontos no item ou subtotal", "Venda de produtos por peso"]
    },
    { 
      id: "comandas",
      icon: Store, 
      title: "Comandas e mesas", 
      desc: "Gerencie pedidos por mesa, divida contas, adicione observações e adicionais.",
      sub: ["Mapa de mesas visual", "Transferência de itens entre mesas", "Taxa de serviço automática", "Divisão de conta por pessoas"]
    },
    { 
      id: "kds",
      icon: ChefHat, 
      title: "KDS — Tela da cozinha", 
      desc: "Pedidos preparados aparecem em tempo real para a cozinha; marque como pronto com um clique.",
      sub: ["Fila de preparo color-coded", "Aviso sonoro de novo pedido", "Filtro por setor (bar, cozinha)", "Histórico de pedidos concluídos"]
    },
    { 
      id: "estoque",
      icon: Package, 
      title: "Produtos e estoque", 
      desc: "Catálogo com categorias, código de barras, adicionais com preço e produtos preparados na cozinha.",
      sub: ["Alerta de estoque mínimo", "Grupos de complementos e adicionais", "Histórico de movimentação", "Importação em massa via Excel"]
    },
    { 
      id: "caixa",
      icon: Lock, 
      title: "Caixa controlado", 
      desc: "Abertura, sangria, suprimento e fechamento com conferência por forma de pagamento.",
      sub: ["Abertura com saldo inicial", "Registro de retiradas e depósitos", "Fechamento cego", "Impressão do resumo do turno"]
    },
    { 
      id: "relatorios",
      icon: BarChart3, 
      title: "Relatórios e Dashboard", 
      desc: "Vendas do dia, ticket médio, métodos de pagamento, comparativos e auditoria.",
      sub: ["Dashboard em tempo real", "Curva ABC de produtos", "Fluxo de caixa detalhado", "Exportação para PDF e Excel"]
    },
    { 
      id: "permissoes",
      icon: Users, 
      title: "Permissões por cargo", 
      desc: "Dono, Gerente, Caixa, Garçom, Cozinha — cada um vê só o que precisa.",
      sub: ["Controle de acessos granular", "Senha PIN para ações sensíveis", "Log de auditoria completo", "Múltiplos usuários simultâneos"]
    },
    { 
      id: "impressao",
      icon: Printer, 
      title: "Impressão térmica", 
      desc: "ESC/POS via USB, Serial e Bluetooth, com fallback para impressão do navegador.",
      sub: ["Tickets não-fiscais customizáveis", "Impressão remota na cozinha", "Suporte a impressoras genéricas", "Logo da loja no cupom"]
    },
    { 
      id: "pwa",
      icon: MonitorSmartphone, 
      title: "PWA — App instalável", 
      desc: "Funciona como aplicativo no celular, tablet ou desktop sem precisar de lojas de app.",
      sub: ["Modo tela cheia imersivo", "Ícone na tela inicial", "Consumo reduzido de dados", "Atualizações automáticas"]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-24 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Funcionalidades</h1>
          <p className="text-xl text-muted-foreground">Conheça cada detalhe do PDVIO e entenda por que somos a melhor escolha para o seu comércio.</p>
        </div>
      </section>

      {/* Feature List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-24">
            {features.map((feature, idx) => (
              <div key={feature.id} id={feature.id} className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 flex items-center justify-center mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {feature.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {feature.sub.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`relative ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl -m-4"></div>
                  <Card className="border border-border bg-card shadow-2xl relative z-10 overflow-hidden">
                    <CardContent className="p-0 aspect-video flex items-center justify-center bg-muted/30">
                      <feature.icon className="h-24 w-24 text-muted-foreground/30" />
                      <div className="absolute inset-0 flex items-center justify-center font-medium text-muted-foreground">
                        Mockup Ilustrativo
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12">PDVIO vs Concorrência Tradicional</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-card rounded-2xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="p-4 font-semibold w-1/3">Recurso</th>
                  <th className="p-4 font-bold text-primary w-1/3 border-x border-border bg-primary/5">PDVIO</th>
                  <th className="p-4 font-semibold text-muted-foreground w-1/3">Sistemas Antigos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4">Implantação</td>
                  <td className="p-4 border-x border-border bg-primary/5 text-foreground font-medium">Imediata (Nuvem)</td>
                  <td className="p-4 text-muted-foreground">Dias ou semanas</td>
                </tr>
                <tr>
                  <td className="p-4">Equipamento</td>
                  <td className="p-4 border-x border-border bg-primary/5 text-foreground font-medium">Qualquer PC, Tablet ou Celular</td>
                  <td className="p-4 text-muted-foreground">Computadores caros específicos</td>
                </tr>
                <tr>
                  <td className="p-4">Atualizações</td>
                  <td className="p-4 border-x border-border bg-primary/5 text-foreground font-medium">Automáticas e Gratuitas</td>
                  <td className="p-4 text-muted-foreground">Lentas e muitas vezes pagas</td>
                </tr>
                <tr>
                  <td className="p-4">Fidelidade</td>
                  <td className="p-4 border-x border-border bg-primary/5 text-foreground font-medium">Nenhuma</td>
                  <td className="p-4 text-muted-foreground">Contratos de 12 a 24 meses</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <section className="py-20 text-center bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Convencido?</h2>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-xl">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">Começar teste de 14 dias grátis</a>
          </Button>
        </div>
      </section>
    </div>
  );
}