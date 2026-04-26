import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Rocket,
  Heart,
  Code2,
  Sparkles,
  Coffee,
  GraduationCap,
  Plane,
  Stethoscope,
  Wallet,
  Home,
  Users,
  ArrowRight,
  MapPin,
  Briefcase,
  Mail,
} from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/constants";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const values = [
  {
    icon: Heart,
    title: "Cliente no centro",
    desc: "Cada decisão começa com a pergunta: isso ajuda o lojista a vender mais?",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    icon: Rocket,
    title: "Velocidade com qualidade",
    desc: "Entregamos rápido, mas sem deixar dívida técnica pra trás.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Sparkles,
    title: "Simplicidade obsessiva",
    desc: "Se ficou complicado, não está pronto. Refinamos até ficar óbvio.",
    color: "text-fuchsia-500",
    bg: "bg-fuchsia-500/10",
  },
  {
    icon: Code2,
    title: "Excelência técnica",
    desc: "Code review honesto, testes que importam e arquitetura pensada pra escalar.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
];

const benefits = [
  { icon: Home, title: "100% remoto", desc: "Trabalhe de onde quiser, no Brasil ou exterior." },
  { icon: Stethoscope, title: "Plano de saúde", desc: "Bradesco Top Nacional, sem coparticipação." },
  { icon: Wallet, title: "Salário competitivo", desc: "Faixas referenciadas pelo mercado tech brasileiro." },
  { icon: GraduationCap, title: "Verba de estudos", desc: "R$ 3.000/ano para cursos, livros e conferências." },
  { icon: Coffee, title: "Auxílio home office", desc: "R$ 1.500 de setup + R$ 200/mês de manutenção." },
  { icon: Plane, title: "Férias estendidas", desc: "30 dias + 5 dias extras de recesso no fim de ano." },
  { icon: Users, title: "Stock options", desc: "Participação no crescimento da empresa para todos." },
  { icon: Sparkles, title: "Encontros presenciais", desc: "Off-sites trimestrais com toda a equipe." },
];

const openings = [
  {
    title: "Engenheiro(a) Fullstack Sênior",
    area: "Engenharia",
    type: "CLT · Remoto",
    location: "Brasil",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Engenheiro(a) Mobile (React Native)",
    area: "Engenharia",
    type: "CLT · Remoto",
    location: "Brasil",
    tags: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    title: "Product Designer Pleno",
    area: "Design",
    type: "CLT · Remoto",
    location: "Brasil",
    tags: ["Figma", "Design System", "UX Research"],
  },
  {
    title: "Customer Success Specialist",
    area: "Sucesso do Cliente",
    type: "CLT · Híbrido SP",
    location: "São Paulo, SP",
    tags: ["Atendimento", "Onboarding", "WhatsApp"],
  },
  {
    title: "SDR — Inside Sales",
    area: "Vendas",
    type: "CLT · Remoto",
    location: "Brasil",
    tags: ["Prospecção", "HubSpot", "Restaurantes"],
  },
  {
    title: "Analista de Marketing de Conteúdo",
    area: "Marketing",
    type: "CLT · Remoto",
    location: "Brasil",
    tags: ["SEO", "Copy", "Vídeo curto"],
  },
];

const process = [
  { step: "01", title: "Conversa inicial", desc: "Bate-papo de 30 min com o time de pessoas para nos conhecermos." },
  { step: "02", title: "Entrevista técnica", desc: "Discussão sobre experiência e desafio prático curto (sem hackathon de fim de semana)." },
  { step: "03", title: "Conversa com o time", desc: "Você conhece quem vai trabalhar com você no dia a dia." },
  { step: "04", title: "Proposta", desc: "Em até 48h após a última etapa, com transparência total sobre faixa salarial e benefícios." },
];

export default function Careers() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-20 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-fuchsia-500/10 blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
              <Briefcase className="h-3.5 w-3.5" />
              <span className="text-xs font-bold uppercase tracking-wider">Estamos contratando</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.05]">
              Construa o futuro do <br className="hidden sm:block" />
              <span className="gradient-text">varejo brasileiro</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Buscamos pessoas que se importam com cada detalhe e querem fazer parte de algo que impacta milhares de comerciantes todos os dias.
            </motion.p>
            <motion.div variants={fadeIn} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8 text-base btn-shine bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-2xl shadow-xl shadow-primary/25">
                <a href="#vagas">
                  Ver vagas abertas <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base rounded-2xl">
                <a href={`mailto:${CONTACT_EMAIL}?subject=Candidatura espontânea`}>
                  <Mail className="mr-2 h-5 w-5" /> Enviar currículo
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "47", label: "Pessoas no time" },
              { value: "100%", label: "Remoto" },
              { value: "12", label: "Estados representados" },
              { value: "4,8", label: "Glassdoor (de 5)" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">{s.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">No que acreditamos</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Os 4 valores que guiam cada decisão dentro do PDVIO.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-border bg-card hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 md:p-8">
                    <div className={`w-12 h-12 rounded-2xl ${v.bg} flex items-center justify-center mb-5`}>
                      <v.icon className={`h-6 w-6 ${v.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">Benefícios que fazem diferença</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Pacote pensado para quem quer crescer com tranquilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-card border border-border rounded-2xl p-5 md:p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600/15 to-fuchsia-600/15 flex items-center justify-center mb-4">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-base mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="vagas" className="py-20 md:py-32 bg-background scroll-mt-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">Vagas abertas</h2>
            <p className="text-base md:text-xl text-muted-foreground">
              {openings.length} oportunidades esperando por você agora.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {openings.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all group">
                  <CardContent className="p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                          {job.area}
                        </span>
                        <span className="text-xs text-muted-foreground font-semibold">{job.type}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3 flex-wrap">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" /> {job.location}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button
                      asChild
                      className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-xl shrink-0 h-11 px-6 font-semibold"
                    >
                      <a
                        href={`mailto:${CONTACT_EMAIL}?subject=Candidatura: ${encodeURIComponent(job.title)}`}
                      >
                        Candidatar-se <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Não encontrou uma vaga que combina com você?</p>
            <Button asChild variant="outline" className="rounded-xl">
              <a href={`mailto:${CONTACT_EMAIL}?subject=Candidatura espontânea`}>
                <Mail className="mr-2 h-4 w-4" /> Enviar currículo espontâneo
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">Como é nosso processo</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Direto ao ponto. Sem dezenas de etapas, sem testes que tomam o seu fim de semana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-2xl p-6 h-full">
                  <div className="text-5xl font-black gradient-text mb-4 tracking-tighter">{p.step}</div>
                  <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-32 text-center bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
            Faça parte do próximo capítulo.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Se você quer trabalhar com gente boa, em um produto que realmente importa, vem com a gente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-14 px-8 text-base btn-shine bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-2xl shadow-xl shadow-primary/25">
              <a href="#vagas">
                Ver vagas <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base rounded-2xl">
              <Link href="/quem-somos">Conhecer a empresa</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
