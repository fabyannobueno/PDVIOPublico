import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  CreditCard,
  Truck,
  ShoppingBag,
  FileText,
  BarChart3,
  MessageCircle,
  Banknote,
  Printer,
  Scale,
  Package,
  Smartphone,
  Globe,
  Plug,
  ArrowRight,
  CheckCircle2,
  Mail,
} from "lucide-react";
import { CONTACT_EMAIL, REGISTER_URL } from "@/lib/constants";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const categories = [
  {
    id: "pagamentos",
    title: "Pagamentos",
    icon: CreditCard,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    items: [
      { name: "PIX (Banco Central)", desc: "QR Code dinâmico com confirmação automática" },
      { name: "Stone", desc: "Maquininha integrada com TEF" },
      { name: "Cielo", desc: "Crédito, débito e voucher" },
      { name: "Rede", desc: "Conciliação automática de vendas" },
      { name: "GetNet", desc: "Pagamentos in-app e POS" },
      { name: "PagSeguro", desc: "Link de pagamento e Moderninha" },
      { name: "Mercado Pago", desc: "Point e checkout transparente" },
      { name: "SafraPay", desc: "TEF integrado ao PDV" },
    ],
  },
  {
    id: "delivery",
    title: "Delivery & Marketplace",
    icon: Truck,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    items: [
      { name: "iFood", desc: "Pedidos chegam direto no KDS" },
      { name: "Rappi", desc: "Cardápio sincronizado em tempo real" },
      { name: "99 Food", desc: "Aceite e despache automático" },
      { name: "Goomer", desc: "Cardápio digital QR Code" },
      { name: "Anota AI", desc: "Atendimento via WhatsApp com IA" },
      { name: "Loggi", desc: "Cálculo de frete e rastreio" },
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    icon: ShoppingBag,
    color: "text-fuchsia-500",
    bg: "bg-fuchsia-500/10",
    items: [
      { name: "Shopify", desc: "Estoque sincronizado bidirecional" },
      { name: "Nuvemshop", desc: "Pedidos e produtos integrados" },
      { name: "WooCommerce", desc: "Sincronização via API REST" },
      { name: "Tray", desc: "Multi-loja com estoque unificado" },
      { name: "VTEX", desc: "Conector enterprise para grandes lojas" },
      { name: "Mercado Livre", desc: "Anúncios e pedidos automáticos" },
    ],
  },
  {
    id: "fiscal",
    title: "Fiscal & Contabilidade",
    icon: FileText,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    items: [
      { name: "NFC-e (SEFAZ)", desc: "Emissão em todos os estados" },
      { name: "NF-e", desc: "Nota fiscal eletrônica completa" },
      { name: "MEI / Simples Nacional", desc: "Regime tributário automático" },
      { name: "Conta Azul", desc: "Exportação contábil mensal" },
      { name: "Omie", desc: "ERP e contabilidade integrados" },
      { name: "Bling", desc: "Sincronização de produtos e pedidos" },
    ],
  },
  {
    id: "bi",
    title: "BI & Análise",
    icon: BarChart3,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    items: [
      { name: "Google Analytics 4", desc: "Eventos de e-commerce automáticos" },
      { name: "Meta Pixel", desc: "Conversões para Facebook e Instagram Ads" },
      { name: "Power BI", desc: "Conector nativo para dashboards" },
      { name: "Looker Studio", desc: "Relatórios visuais customizados" },
      { name: "Google Sheets", desc: "Exportação programada" },
    ],
  },
  {
    id: "comunicacao",
    title: "Comunicação",
    icon: MessageCircle,
    color: "text-green-500",
    bg: "bg-green-500/10",
    items: [
      { name: "WhatsApp Business API", desc: "Pedidos, comprovantes e fidelização" },
      { name: "Brevo (Sendinblue)", desc: "E-mail marketing e transacional" },
      { name: "Zenvia", desc: "SMS para confirmação de pedidos" },
      { name: "Twilio", desc: "Notificações multicanal" },
    ],
  },
  {
    id: "bancos",
    title: "Bancos & Conciliação",
    icon: Banknote,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    items: [
      { name: "Open Finance", desc: "Extrato unificado de todas as contas" },
      { name: "Banco Inter", desc: "Boletos e PIX automáticos" },
      { name: "Itaú", desc: "Conciliação de cartões e cobranças" },
      { name: "Bradesco", desc: "Boletos registrados" },
      { name: "Santander", desc: "Pix Cobv e cobranças recorrentes" },
      { name: "Nubank PJ", desc: "Conexão direta para conciliação" },
    ],
  },
  {
    id: "hardware",
    title: "Hardware & Periféricos",
    icon: Printer,
    color: "text-slate-500",
    bg: "bg-slate-500/10",
    items: [
      { name: "Impressoras ESC/POS", desc: "Bematech, Elgin, Epson, Daruma" },
      { name: "Balanças Toledo", desc: "Prix 4, Prix 6 e Prix 6 Plus" },
      { name: "Balanças Filizola", desc: "Platina e CS-15" },
      { name: "Leitores de código", desc: "USB e Bluetooth, qualquer marca" },
      { name: "Gavetas", desc: "Acionamento via impressora" },
      { name: "TEF (Sitef/PayGo)", desc: "Maquininhas integradas ao PDV" },
    ],
  },
];

const apiFeatures = [
  { icon: Plug, title: "API REST documentada", desc: "OpenAPI 3.0 com SDKs para Node, Python e PHP." },
  { icon: Globe, title: "Webhooks em tempo real", desc: "Receba eventos de vendas, estoque e pagamentos." },
  { icon: Smartphone, title: "App + WebView", desc: "Embed o PDVIO no seu app com autenticação OAuth2." },
  { icon: Package, title: "Importação em massa", desc: "Suba produtos, clientes e estoque via CSV ou API." },
];

export default function Integrations() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
              <Plug className="w-3.5 h-3.5" />
              <span className="text-xs font-bold uppercase tracking-wider">Conecte tudo</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.05]">
              Integrações que <span className="gradient-text">trabalham por você</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground font-medium leading-relaxed">
              Mais de 60 conectores nativos com pagamentos, delivery, e-commerce, bancos e contabilidade.
              Tudo plug-and-play, sem código.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-20 md:py-32 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.05 }}
              >
                <Card className="h-full border border-border bg-card hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${cat.bg} flex items-center justify-center`}>
                        <cat.icon className={`w-6 h-6 ${cat.color}`} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-black">{cat.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {cat.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 group">
                          <CheckCircle2 className={`w-4 h-4 ${cat.color} shrink-0 mt-1`} />
                          <div>
                            <div className="font-bold text-foreground text-sm md:text-base">{item.name}</div>
                            <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.desc}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API & Webhooks */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-500 mb-6">
              <Code2Icon />
              <span className="text-xs font-bold uppercase tracking-wider">Para devs</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
              Não achou o que precisa?<br/>
              <span className="text-muted-foreground">Construa.</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
              API REST completa, documentação interativa e webhooks em tempo real para integrar o PDVIO ao seu stack.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {apiFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border border-border bg-card rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-black text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-purple-700 to-fuchsia-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
              Precisa de uma integração específica?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              Nosso time de parcerias avalia novas integrações toda semana. Conta pra gente o que falta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8 text-lg bg-white text-primary hover:bg-white/90 rounded-2xl shadow-xl">
                <a href={`mailto:${CONTACT_EMAIL}?subject=Sugestão de integração`}>
                  <Mail className="mr-2 h-5 w-5" /> Sugerir integração
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-2xl border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                  Começar grátis <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-white/80">
              <Link href="/funcionalidades" className="hover:text-white underline-offset-4 hover:underline">Ver funcionalidades</Link>
              <span className="opacity-30">•</span>
              <Link href="/planos" className="hover:text-white underline-offset-4 hover:underline">Planos e preços</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Code2Icon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
