import { Link } from "wouter";
import { SiInstagram, SiWhatsapp, SiYoutube } from "react-icons/si";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { WHATSAPP_URL, TERMS_URL, PRIVACY_URL, LGPD_URL, INTEGRATIONS_URL, CHANGELOG_URL, CAREERS_URL, BLOG_URL, COMPANY_CNPJ, INSTAGRAM_URL, YOUTUBE_URL } from "@/lib/constants";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-card border-t border-border pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <Button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        className="absolute top-6 right-6 md:top-8 md:right-8 h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white border-0 shadow-lg shadow-primary/30 hover:scale-110 active:scale-95 transition-transform z-20 p-0 flex items-center justify-center"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Link href="/">
              <img
                src={theme === "dark" ? logoDark : logoLight}
                alt="PDVIO Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-base max-w-sm leading-relaxed">
              O sistema operacional do varejo brasileiro. Descomplicando a gestão e acelerando vendas desde 2024.
            </p>
            <div className="flex gap-4 mt-2">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all hover:scale-110" aria-label="Instagram">
                <SiInstagram className="h-5 w-5" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all hover:scale-110" aria-label="WhatsApp">
                <SiWhatsapp className="h-5 w-5" />
              </a>
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all hover:scale-110" aria-label="YouTube">
                <SiYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground">Produto</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/funcionalidades" className="text-muted-foreground hover:text-primary font-medium transition-colors">Funcionalidades</Link></li>
              <li><Link href="/planos" className="text-muted-foreground hover:text-primary font-medium transition-colors">Preços e Planos</Link></li>
              <li><a href={INTEGRATIONS_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary font-medium transition-colors">Integrações</a></li>
              <li><a href={CHANGELOG_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary font-medium transition-colors">Novidades (v3.0)</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground">Empresa</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/quem-somos" className="text-muted-foreground hover:text-primary font-medium transition-colors">Nossa História</Link></li>
              <li><Link href="/contato" className="text-muted-foreground hover:text-primary font-medium transition-colors">Fale Conosco</Link></li>
              <li><a href={CAREERS_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary font-medium transition-colors">Trabalhe Conosco <span className="ml-2 text-[10px] font-bold bg-primary/20 text-primary px-2 py-0.5 rounded-full">VAGAS</span></a></li>
              <li><a href={BLOG_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary font-medium transition-colors">Blog do Varejo</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground">Legal</h3>
            <ul className="flex flex-col gap-4">
              <li><a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary font-medium transition-colors">Termos de Serviço</a></li>
              <li><a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary font-medium transition-colors">Política de Privacidade</a></li>
              <li><a href={LGPD_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary font-medium transition-colors">Compliance LGPD</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground font-medium">
            © {new Date().getFullYear()} PDVIO Tecnologia Ltda. CNPJ: {COMPANY_CNPJ}.
          </p>
          <div className="flex gap-6 items-center">
            <span className="text-muted-foreground font-medium flex items-center gap-2">
              Feito com <span className="text-red-500 animate-pulse">♥</span> no Brasil
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}