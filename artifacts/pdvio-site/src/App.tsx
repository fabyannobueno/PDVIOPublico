import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import Home from "@/pages/home";
import About from "@/pages/about";
import Features from "@/pages/features";
import Plans from "@/pages/plans";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

// Scroll to top on route change
function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const PageWrapper = ({ children, path }: { children: React.ReactNode, path: string }) => (
  <motion.div
    key={path}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    className="flex flex-col flex-1 w-full"
  >
    {children}
  </motion.div>
);

function Router() {
  const [location] = useLocation();
  
  return (
    <main className="min-h-[100dvh] w-full flex flex-col font-sans bg-noise">
      <ScrollToTop />
      <Header />
      <div className="flex-1 flex flex-col w-full">
        <AnimatePresence mode="wait">
          <Switch location={location} key={location}>
            <Route path="/" component={() => <PageWrapper path="/"><Home /></PageWrapper>} />
            <Route path="/quem-somos" component={() => <PageWrapper path="/quem-somos"><About /></PageWrapper>} />
            <Route path="/funcionalidades" component={() => <PageWrapper path="/funcionalidades"><Features /></PageWrapper>} />
            <Route path="/planos" component={() => <PageWrapper path="/planos"><Plans /></PageWrapper>} />
            <Route path="/contato" component={() => <PageWrapper path="/contato"><Contact /></PageWrapper>} />
            <Route component={() => <PageWrapper path="404"><NotFound /></PageWrapper>} />
          </Switch>
        </AnimatePresence>
      </div>
      <Footer />
    </main>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="pdvio-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
