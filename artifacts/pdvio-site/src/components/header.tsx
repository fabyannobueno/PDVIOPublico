import { Link, useLocation } from "wouter";
import { useTheme } from "./theme-provider";
import { LOGIN_URL, REGISTER_URL, asset } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <img
            src={theme === "dark" ? asset("logo-dark.png") : asset("logo-light.png")}
            alt="PDVIO Logo"
            className="h-8 md:h-10 cursor-pointer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  isActive ? "text-primary font-bold" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
            data-testid="btn-theme-toggle"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Button variant="ghost" asChild className="font-semibold hover:bg-primary/10 hover:text-primary rounded-full px-6" data-testid="link-login">
            <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
              Entrar
            </a>
          </Button>
          
          <Button asChild className="btn-shine rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white border-0 shadow-lg shadow-primary/20 px-6 font-semibold transition-all hover:scale-105 active:scale-95" data-testid="link-signup">
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
              Começar grátis
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-lg overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-4">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = location === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-base font-semibold p-3 rounded-xl transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/80 hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="outline" asChild className="w-full justify-center h-12 rounded-xl text-base font-semibold" data-testid="link-login-mobile">
                  <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
                    Entrar
                  </a>
                </Button>
                <Button asChild className="w-full justify-center h-12 rounded-xl text-base font-semibold bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white border-0 shadow-lg shadow-primary/20" data-testid="link-signup-mobile">
                  <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                    Criar conta grátis
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
