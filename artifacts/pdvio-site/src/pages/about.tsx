import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { REGISTER_URL } from "@/lib/constants";
import { Target, Eye, Heart, Code2, Users, Rocket, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import fabianoBueno from "@/assets/team/fabiano-bueno.webp";
import marinaCosta from "@/assets/team/marina-costa.webp";
import thiagoAlmeda from "@/assets/team/thiago-almeda.webp";
import juliaFerraz from "@/assets/team/julia-ferraz.webp";
import pedroPaulo from "@/assets/team/pedro-paulo.webp";
import sofiaLopes from "@/assets/team/sofia-lopes.webp";
import rafaelSantos from "@/assets/team/rafael-santos.webp";
import pdvioPerfil22 from "@/assets/team/pdvio-perfil-22.webp";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}>
            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6">
              Tecnologia brasileira <br/>para o <span className="gradient-text">comércio brasileiro</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Nascemos para descomplicar a gestão das pequenas e médias empresas, entregando tecnologia de ponta com um preço justo e acessível.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="bg-card h-full border-border/50 shadow-lg hover:border-primary/30 transition-colors">
                <CardContent className="p-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight">Nossa Missão</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">Empoderar o pequeno e médio varejista com ferramentas modernas que automatizam rotinas, reduzem erros e aumentam a lucratividade.</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="bg-card h-full border-border/50 shadow-lg hover:border-primary/30 transition-colors">
                <CardContent className="p-10">
                  <div className="w-14 h-14 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center mb-6">
                    <Eye className="h-7 w-7 text-fuchsia-500" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight">Nossa Visão</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">Ser o sistema operacional padrão do varejo brasileiro até 2030, presente em todas as esquinas e ruas de comércio do país.</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card className="bg-card h-full border-border/50 shadow-lg hover:border-primary/30 transition-colors">
                <CardContent className="p-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                    <Heart className="h-7 w-7 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight">Nossos Valores</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">Simplicidade extrema na interface, foco obsessivo no cliente, transparência total e excelência técnica em cada linha de código.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-background border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4 tracking-tight">Nossa Jornada</h2>
            <p className="text-xl text-muted-foreground">Como chegamos até aqui.</p>
          </div>
          
          <div className="relative border-l-2 border-primary/20 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>
            
            {[
              { year: "2023", title: "A Ideia", desc: "Percebemos que os sistemas de PDV eram lentos, feios e caros. Decidimos criar algo melhor.", icon: Code2 },
              { year: "2024", title: "Primeira Versão", desc: "Lançamos o MVP para 10 restaurantes locais testarem em produção real.", icon: Rocket },
              { year: "2025", title: "Tração e PWA", desc: "Lançamento da versão PWA offline e expansão para mais de 1.000 clientes em todo o Brasil.", icon: Users },
              { year: "2026", title: "Expansão Nacional", desc: "Nova versão 3.0, novo KDS, atingindo a marca de 2.500 lojistas ativos.", icon: Building2 }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5 }}
                className={`relative mb-16 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:ml-0 md:text-right' : 'md:pl-16 md:ml-auto'}`}
              >
                <div className={`absolute top-2 w-12 h-12 bg-background border-4 border-primary rounded-full flex items-center justify-center z-10 -left-14 md:left-auto ${i % 2 === 0 ? 'md:!-right-6' : 'md:!-left-6'}`}>
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="bg-card border border-border p-6 rounded-2xl shadow-lg">
                  <div className="text-primary font-black text-2xl mb-2">{item.year}</div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 tracking-tight">Quem faz o PDVIO</h2>
            <p className="text-xl text-muted-foreground">Pessoas apaixonadas por tecnologia e comércio local.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Fabiano Bueno", role: "CEO & Produto", color: "bg-purple-500", image: fabianoBueno },
              { name: "Marina Costa", role: "CTO", color: "bg-fuchsia-500", image: marinaCosta },
              { name: "Thiago Almeda", role: "Design", color: "bg-blue-500", image: thiagoAlmeda },
              { name: "Julia Ferraz", role: "Sucesso do Cliente", color: "bg-orange-500", image: juliaFerraz },
              { name: "Pedro Paulo", role: "Engenharia", color: "bg-teal-500", image: pedroPaulo },
              { name: "Sofia Lopes", role: "Marketing", color: "bg-rose-500", image: sofiaLopes },
              { name: "Rafael Santos", role: "Vendas", color: "bg-indigo-500", image: rafaelSantos },
              { name: "Você?", role: "Ver vagas abertas", color: "bg-primary", image: pdvioPerfil22, href: "/trabalhe-conosco" },
            ].map((member, i) => {
              const card = (
                <Card className="border-border bg-card overflow-hidden group cursor-pointer h-full">
                  <div className={`aspect-square ${member.color} relative`}>
                    {member.image && (
                      <img src={member.image} alt={member.name} loading="lazy" decoding="async" width={400} height={400} className="absolute inset-0 w-full h-full object-cover" />
                    )}
                    <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm text-white font-bold text-center p-4">
                      {member.role}
                    </div>
                  </div>
                  <CardContent className="p-4 text-center">
                    <h4 className="font-bold text-lg">{member.name}</h4>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              );
              return (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                  {member.href ? <Link href={member.href}>{card}</Link> : card}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 text-center bg-background relative border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">Faça parte dessa história.</h2>
          <Button asChild size="lg" className="h-16 px-10 text-xl btn-shine bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-full shadow-2xl hover:scale-105 transition-transform">
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">Começar agora</a>
          </Button>
        </div>
      </section>
    </div>
  );
}