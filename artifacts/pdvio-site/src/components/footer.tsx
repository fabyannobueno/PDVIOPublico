import { Link } from "wouter";
import { SiInstagram, SiWhatsapp, SiYoutube } from "react-icons/si";
import { useTheme } from "./theme-provider";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <img
                src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                alt="PDVIO Logo"
                className="h-8 w-auto mb-2"
              />
            </Link>
            <p className="text-muted-foreground text-sm">
              Venda mais. Controle tudo. O PDV completo na nuvem para o seu comércio.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-social-instagram">
                <SiInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-social-whatsapp">
                <SiWhatsapp className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-social-youtube">
                <SiYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Produto</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/funcionalidades" className="text-sm text-muted-foreground hover:text-primary transition-colors">Funcionalidades</Link></li>
              <li><Link href="/planos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Planos</Link></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Roadmap</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Novidades</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Empresa</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/quem-somos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Quem somos</Link></li>
              <li><Link href="/contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contato</Link></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Carreiras</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Termos de uso</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacidade</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">LGPD</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 PDVIO. Todos os direitos reservados.
          </p>
          <div className="text-sm text-muted-foreground flex gap-2 items-center">
            Feito com <span className="text-primary">♥</span> no Brasil
          </div>
        </div>
      </div>
    </footer>
  );
}