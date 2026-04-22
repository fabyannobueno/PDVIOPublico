import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import Home from "@/pages/home";
import About from "@/pages/about";
import Features from "@/pages/features";
import Plans from "@/pages/plans";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <main className="min-h-screen w-full flex flex-col font-sans">
      <Header />
      <div className="flex-1 pt-20">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/quem-somos" component={About} />
          <Route path="/funcionalidades" component={Features} />
          <Route path="/planos" component={Plans} />
          <Route path="/contato" component={Contact} />
          <Route component={NotFound} />
        </Switch>
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