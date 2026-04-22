import { Link, useLocation } from "wouter";
import { useTheme } from "./theme-provider";
import { APP_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/funcionalidades", label: "Funcionalidades" },
    { href: "/planos", label: "Planos" },
    { href: "/quem-somos", label: "Quem somos" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <img
            src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
            alt="PDVIO Logo"
            className="h-8 md:h-10 cursor-pointer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
            data-testid="btn-theme-toggle"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Button variant="outline" asChild data-testid="link-login">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              Entrar
            </a>
          </Button>
          
          <Button asChild className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-0" data-testid="link-signup">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              Criar conta grátis
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="btn-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium p-2 rounded-md ${
                  location === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 pt-4 border-t border-border">
            <Button variant="outline" asChild className="w-full justify-center" data-testid="link-login-mobile">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                Entrar
              </a>
            </Button>
            <Button asChild className="w-full justify-center bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-0" data-testid="link-signup-mobile">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                Criar conta grátis
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}