import { useState } from "react";
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

type IntegrationItem = {
  name: string;
  desc: string;
  slug?: string;
  color?: string;
};

const categories: {
  id: string;
  title: string;
  icon: typeof CreditCard;
  color: string;
  bg: string;
  items: IntegrationItem[];
}[] = [
  {
    id: "pagamentos",
    title: "Pagamentos",
    icon: CreditCard,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    items: [
      { name: "PIX (Banco Central)", desc: "QR Code dinâmico com confirmação automática", slug: "pix", color: "32BCAD" },
      { name: "Stone", desc: "Maquininha integrada com TEF", slug: "stone", color: "00A868" },
      { name: "Cielo", desc: "Crédito, débito e voucher" },
      { name: "Rede", desc: "Conciliação automática de vendas" },
      { name: "GetNet", desc: "Pagamentos in-app e POS" },
      { name: "PagSeguro", desc: "Link de pagamento e Moderninha", slug: "pagseguro", color: "FFC107" },
      { name: "Mercado Pago", desc: "Point e checkout transparente", slug: "mercadopago", color: "00B1EA" },
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
      { name: "iFood", desc: "Pedidos chegam direto no KDS", slug: "ifood", color: "EA1D2C" },
      { name: "Rappi", desc: "Cardápio sincronizado em tempo real", slug: "rappi", color: "FF441F" },
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
      { name: "Shopify", desc: "Estoque sincronizado bidirecional", slug: "shopify", color: "7AB55C" },
      { name: "Nuvemshop", desc: "Pedidos e produtos integrados", slug: "tiendanube", color: "1AC0FF" },
      { name: "WooCommerce", desc: "Sincronização via API REST", slug: "woocommerce", color: "96588A" },
      { name: "Tray", desc: "Multi-loja com estoque unificado" },
      { name: "VTEX", desc: "Conector enterprise para grandes lojas", slug: "vtex", color: "ED125F" },
      { name: "Mercado Livre", desc: "Anúncios e pedidos automáticos", slug: "mercadolibre", color: "FFE600" },
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
      { name: "Google Analytics 4", desc: "Eventos de e-commerce automáticos", slug: "googleanalytics", color: "E37400" },
      { name: "Meta Pixel", desc: "Conversões para Facebook e Instagram Ads", slug: "meta", color: "0467DF" },
      { name: "Power BI", desc: "Conector nativo para dashboards", slug: "powerbi", color: "F2C811" },
      { name: "Looker Studio", desc: "Relatórios visuais customizados", slug: "looker", color: "4285F4" },
      { name: "Google Sheets", desc: "Exportação programada", slug: "googlesheets", color: "34A853" },
    ],
  },
  {
    id: "comunicacao",
    title: "Comunicação",
    icon: MessageCircle,
    color: "text-green-500",
    bg: "bg-green-500/10",
    items: [
      { name: "WhatsApp Business API", desc: "Pedidos, comprovantes e fidelização", slug: "whatsapp", color: "25D366" },
      { name: "Brevo (Sendinblue)", desc: "E-mail marketing e transacional", slug: "brevo", color: "0B996E" },
      { name: "Zenvia", desc: "SMS para confirmação de pedidos" },
      { name: "Twilio", desc: "Notificações multicanal", slug: "twilio", color: "F22F46" },
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
      { name: "Banco Inter", desc: "Boletos e PIX automáticos", slug: "bancointer", color: "FF7A00" },
      { name: "Itaú", desc: "Conciliação de cartões e cobranças" },
      { name: "Bradesco", desc: "Boletos registrados" },
      { name: "Santander", desc: "Pix Cobv e cobranças recorrentes", slug: "santander", color: "EC0000" },
      { name: "Nubank PJ", desc: "Conexão direta para conciliação", slug: "nubank", color: "820AD1" },
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

const logoWall: { name: string; slug: string; color: string }[] = [
  { name: "iFood", slug: "ifood", color: "EA1D2C" },
  { name: "PIX", slug: "pix", color: "32BCAD" },
  { name: "Stone", slug: "stone", color: "00A868" },
  { name: "Mercado Pago", slug: "mercadopago", color: "00B1EA" },
  { name: "PagSeguro", slug: "pagseguro", color: "FFC107" },
  { name: "Rappi", slug: "rappi", color: "FF441F" },
  { name: "Shopify", slug: "shopify", color: "7AB55C" },
  { name: "VTEX", slug: "vtex", color: "ED125F" },
  { name: "WooCommerce", slug: "woocommerce", color: "96588A" },
  { name: "Mercado Livre", slug: "mercadolibre", color: "FFE600" },
  { name: "Nuvemshop", slug: "tiendanube", color: "1AC0FF" },
  { name: "WhatsApp", slug: "whatsapp", color: "25D366" },
  { name: "Twilio", slug: "twilio", color: "F22F46" },
  { name: "Brevo", slug: "brevo", color: "0B996E" },
  { name: "Google Analytics", slug: "googleanalytics", color: "E37400" },
  { name: "Meta", slug: "meta", color: "0467DF" },
  { name: "Power BI", slug: "powerbi", color: "F2C811" },
  { name: "Looker", slug: "looker", color: "4285F4" },
  { name: "Google Sheets", slug: "googlesheets", color: "34A853" },
  { name: "Nubank", slug: "nubank", color: "820AD1" },
  { name: "Santander", slug: "santander", color: "EC0000" },
  { name: "Banco Inter", slug: "bancointer", color: "FF7A00" },
];

function BrandLogo({
  slug,
  name,
  color,
  size = 32,
}: {
  slug?: string;
  name: string;
  color?: string;
  size?: number;
}) {
  const [errored, setErrored] = useState(false);
  const initials = name
    .replace(/[()]/g, "")
    .split(/[\s/-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  if (!slug || errored) {
    return (
      <div
        className="rounded-md bg-muted/60 border border-border flex items-center justify-center font-black text-muted-foreground"
        style={{ width: size, height: size, fontSize: Math.max(9, Math.round(size / 3)) }}
        aria-label={name}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ""}`}
      alt={name}
      width={size}
      height={size}
      loading="lazy"
      onError={() => setErrored(true)}
      className="object-contain"
      style={{ width: size, height: size }}
    />
  );
}

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

      {/* Logo Wall */}
      <section className="py-16 md:py-24 bg-background border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Marcas que confiam no PDVIO
            </p>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight">
              Plugue e <span className="gradient-text">comece a vender</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4 max-w-6xl mx-auto">
            {logoWall.map((brand, i) => (
              <motion.div
                key={brand.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                className="group relative aspect-square rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all flex flex-col items-center justify-center gap-2 p-3"
                title={brand.name}
              >
                <BrandLogo slug={brand.slug} name={brand.name} color={brand.color} size={36} />
                <span className="text-[10px] md:text-xs font-bold text-muted-foreground text-center leading-tight truncate w-full">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </div>
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
                        <li
                          key={j}
                          className="flex items-start gap-3 group p-2 -mx-2 rounded-lg hover:bg-muted/40 transition-colors"
                        >
                          <div className="shrink-0 w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center">
                            <BrandLogo slug={item.slug} name={item.name} color={item.color} size={24} />
                          </div>
                          <div className="flex-1 min-w-0 pt-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-foreground text-sm md:text-base">{item.name}</span>
                              <CheckCircle2 className={`w-3.5 h-3.5 ${cat.color} shrink-0`} />
                            </div>
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
