import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { Button } from "@/components/ui/button-glow";
import { Linkedin } from "lucide-react";
import logo from "../assets/logo.png"
import WhatsAppButton from "../components/myComponents/WhatsAppButton";
import { LanguageContext } from "../context/LanguageProvider";
import { useContext } from "react";

const Index = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
        <WhatsAppButton/>
      </main>

      <footer className="bg-surface/80 backdrop-blur-md border-t border-border/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo y nombre */}
          <div className="flex items-center gap-2">
            <img src={logo} className="w-[40px]" />
            <span className="text-lg md:text-xl font-bold gradient-text">Zenithium</span>
          </div>

          {/* Descripción */}
          <p className="text-muted-foreground text-sm md:text-base text-center md:text-left flex-1 md:flex-none">
            {t("footerDescription")}
          </p>

          {/* Redes */}
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-accent-neon hover:border-accent-neon/50"
              asChild
            >
              <a href="https://ar.linkedin.com/company/zenithium" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Zenithium">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Derechos */}
          <div className="text-sm text-text-dim text-center md:text-left">
            {t("footerRights")}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;