import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Sparkles,
  Zap,
  Bug,
  Plus,
  Wrench,
  ArrowRight,
  Rocket,
  Bell,
} from "lucide-react";
import { REGISTER_URL } from "@/lib/constants";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

type EntryType = "novo" | "melhoria" | "fix" | "destaque";

const typeMeta: Record<EntryType, { label: string; icon: typeof Plus; color: string; bg: string }> = {
  destaque: { label: "DESTAQUE", icon: Sparkles, color: "text-fuchsia-500", bg: "bg-fuchsia-500/10 border-fuchsia-500/30" },
  novo: { label: "NOVO", icon: Plus, color: "text-emerald-500", bg: "bg-emerald-500/10 border-emerald-500/30" },
  melhoria: { label: "MELHORIA", icon: Zap, color: "text-blue-500", bg: "bg-blue-500/10 border-blue-500/30" },
  fix: { label: "CORREÇÃO", icon: Bug, color: "text-orange-500", bg: "bg-orange-500/10 border-orange-500/30" },
};

const releases: {
  version: string;
  date: string;
  codename?: string;
  highlight?: string;
  entries: { type: EntryType; title: string; desc: string }[];
}[] = [
  {
    version: "v3.0",
    date: "Abril de 2026",
    codename: "Aurora",
    highlight: "A maior atualização da história do PDVIO. Reescrevemos o motor de sincronização, lançamos KDS em tempo real e abrimos a API pública.",
    entries: [
      { type: "destaque", title: "KDS (Kitchen Display System)", desc: "Tela de cozinha em tempo real, organização por urgência (cores) e som customizável por estação. Sincroniza em <300ms." },
      { type: "destaque", title: "API Pública v1", desc: "REST com OpenAPI 3.0, webhooks e SDKs oficiais para Node, Python e PHP. Documentação interativa em /developers." },
      { type: "novo", title: "Multi-loja unificado", desc: "Estoque, clientes e relatórios consolidados de até 50 lojas em um único dashboard." },
      { type: "novo", title: "Conciliação bancária Open Finance", desc: "Conecte qualquer banco BR e tenha extrato unificado. Match automático com cartões." },
      { type: "novo", title: "Modo offline reescrito (PWA)", desc: "Vendas continuam mesmo sem internet. Sincronização incremental quando volta." },
      { type: "melhoria", title: "PDV 3x mais rápido", desc: "Tempo médio de checkout caiu de 2.4s pra 0.8s. Atalhos de teclado redesenhados." },
      { type: "melhoria", title: "Tema escuro nativo", desc: "Disponível em todas as telas, com troca automática conforme o sistema." },
    ],
  },
  {
    version: "v2.8",
    date: "Janeiro de 2026",
    codename: "Polaris",
    entries: [
      { type: "novo", title: "Cardápio digital com QR Code", desc: "Cliente lê o QR e pede pelo próprio celular, sem app." },
      { type: "novo", title: "Pix automático com Banco Central", desc: "QR dinâmico com confirmação imediata via webhook." },
      { type: "melhoria", title: "Importação em massa via CSV", desc: "Suba 10.000 produtos em menos de 30 segundos." },
      { type: "fix", title: "Impressão em ESC/POS Bematech MP-4200", desc: "Resolvido bug de codificação de caracteres acentuados." },
    ],
  },
  {
    version: "v2.7",
    date: "Outubro de 2025",
    codename: "Nimbus",
    entries: [
      { type: "novo", title: "Comandas Mobile para garçons", desc: "App nativo iOS/Android pra anotar pedidos no salão." },
      { type: "novo", title: "Divisão de conta inteligente", desc: "Por pessoa, por item ou proporcional, com 1 toque." },
      { type: "melhoria", title: "Relatório de Curva ABC", desc: "Identifica top 20% de produtos que geram 80% do faturamento." },
      { type: "fix", title: "Sincronização com iFood", desc: "Pedidos cancelados agora atualizam o estoque corretamente." },
    ],
  },
  {
    version: "v2.6",
    date: "Julho de 2025",
    codename: "Vega",
    entries: [
      { type: "novo", title: "Integração WhatsApp Business API", desc: "Envio de comprovantes e campanhas de fidelização." },
      { type: "novo", title: "Programa de fidelidade", desc: "Cashback, pontos e níveis configuráveis por loja." },
      { type: "melhoria", title: "Dashboard mobile redesenhado", desc: "Cards adaptáveis, gráficos touch-friendly e modo paisagem." },
    ],
  },
  {
    version: "v2.5",
    date: "Abril de 2025",
    codename: "Cosmos",
    entries: [
      { type: "novo", title: "Conector Mercado Livre", desc: "Anúncios e pedidos sincronizados automaticamente." },
      { type: "novo", title: "Emissão de NFC-e em todos os estados", desc: "Compatível com SEFAZ de SP, RJ, MG, RS, PR, SC, BA e mais 20." },
      { type: "melhoria", title: "Velocidade de busca", desc: "Encontre qualquer produto em menos de 50ms, mesmo com 50k SKUs." },
      { type: "fix", title: "Cálculo de desconto progressivo", desc: "Resolvido edge case com promoções compostas." },
    ],
  },
];

export default function Changelog() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-fuchsia-600/10 blur-[140px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">Changelog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.05]">
              Novidades do <span className="gradient-text">PDVIO</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground font-medium leading-relaxed">
              Toda atualização, melhoria e correção. Construímos rápido — e contamos tudo aqui.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            {releases.map((release, i) => (
              <motion.article
                key={release.version}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end gap-3 md:gap-6 mb-6 pb-6 border-b border-border">
                  <div className="flex items-baseline gap-3">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter gradient-text">{release.version}</h2>
                    {release.codename && (
                      <span className="text-sm md:text-base font-bold uppercase tracking-widest text-muted-foreground">
                        "{release.codename}"
                      </span>
                    )}
                  </div>
                  <div className="md:ml-auto text-sm md:text-base text-muted-foreground font-semibold">
                    {release.date}
                  </div>
                  {i === 0 && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-fuchsia-500/15 text-fuchsia-500 text-[11px] font-black uppercase tracking-wider border border-fuchsia-500/30 w-fit">
                      <Rocket className="w-3 h-3" /> Atual
                    </span>
                  )}
                </div>

                {release.highlight && (
                  <Card className="mb-8 border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/5 via-purple-500/5 to-transparent">
                    <CardContent className="p-6 md:p-8 flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-fuchsia-500/15 flex items-center justify-center shrink-0">
                        <Sparkles className="w-5 h-5 text-fuchsia-500" />
                      </div>
                      <p className="text-base md:text-lg leading-relaxed font-medium">{release.highlight}</p>
                    </CardContent>
                  </Card>
                )}

                {/* Entries */}
                <ul className="space-y-4">
                  {release.entries.map((e, j) => {
                    const meta = typeMeta[e.type];
                    return (
                      <li key={j} className="flex flex-col sm:flex-row gap-3 sm:gap-5 group">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${meta.bg} ${meta.color} text-[10px] font-black uppercase tracking-wider border w-fit shrink-0 sm:mt-0.5`}>
                          <meta.icon className="w-3 h-3" />
                          {meta.label}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-base md:text-lg mb-1 group-hover:text-primary transition-colors">{e.title}</h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{e.desc}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe / CTA */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
              <Bell className="w-3.5 h-3.5" />
              <span className="text-xs font-bold uppercase tracking-wider">Fique por dentro</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
              Quer receber as novidades antes de todo mundo?
            </h2>
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-10">
              Crie sua conta e ative as notificações de release. Avisamos por e-mail e dentro do app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8 text-lg btn-shine bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-2xl shadow-xl shadow-primary/25">
                <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                  Começar grátis <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-2xl">
                <Link href="/funcionalidades">
                  <Wrench className="mr-2 h-5 w-5" /> Ver funcionalidades
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
