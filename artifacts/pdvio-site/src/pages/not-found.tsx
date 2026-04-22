import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, type: "spring" }}
          className="relative"
        >
          {/* Glitch / Broken Receipt graphic */}
          <div className="relative w-64 h-80 mx-auto mb-8 bg-card border border-border shadow-2xl rounded-sm p-6 overflow-hidden transform rotate-3">
            <div className="border-b border-dashed border-border pb-4 mb-4">
              <div className="font-mono text-xs font-bold text-center mb-1">CUPOM NÃO FISCAL</div>
              <div className="font-mono text-[10px] text-center text-muted-foreground">PDVIO LTDA</div>
            </div>
            <div className="space-y-3 font-mono text-xs text-left">
              <div className="flex justify-between text-muted-foreground"><span>1x ROTA /</span><span>R$ 0,00</span></div>
              <div className="flex justify-between font-bold text-destructive"><span>ERRO 404</span><span>#FALHA</span></div>
              <div className="flex justify-between text-muted-foreground"><span>PÁGINA</span><span>NÃO ENCONTRADA</span></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-background" style={{ clipPath: "polygon(0 100%, 10% 0, 20% 100%, 30% 0, 40% 100%, 50% 0, 60% 100%, 70% 0, 80% 100%, 90% 0, 100% 100%)" }}></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">Erro 404</h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto mb-8">
            Parece que essa página foi cancelada antes mesmo de chegar na cozinha.
          </p>
          
          <Button asChild size="lg" className="rounded-full h-14 px-8 font-bold text-base btn-shine bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-lg shadow-primary/20">
            <Link href="/">
              <ArrowLeft className="mr-2 h-5 w-5" /> Voltar para o início
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}