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
import { FaTiktok } from "react-icons/fa";

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
        <WhatsAppButton />
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
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-accent-pink hover:border-accent-pink/50"
              asChild
            >
              <a href="https://www.instagram.com/_zenithium_" target="_blank" rel="noopener noreferrer" aria-label="Instagram Zenithium">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.3 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.6.4 3.8.7c-.9.3-1.7.7-2.4 1.4-.7.7-1.1 1.5-1.4 2.4-.3.8-.5 1.9-.6 3.2C0 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.3.3 2.4.6 3.2.3.9.7 1.7 1.4 2.4.7.7 1.5 1.1 2.4 1.4.8.3 1.9.5 3.2.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.4-.3 3.2-.6.9-.3 1.7-.7 2.4-1.4.7-.7 1.1-1.5 1.4-2.4.3-.8.5-1.9.6-3.2.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.4-.6-3.2-.3-.9-.7-1.7-1.4-2.4-.7-.7-1.5-1.1-2.4-1.4-.8-.3-1.9-.5-3.2-.6C15.7 0 15.3 0 12 0zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.6c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z" />
                </svg>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-accent-purple hover:border-accent-purple/50"
              asChild
            >
              <a href="https://www.tiktok.com/@_zenithium_" target="_blank" rel="noopener noreferrer" aria-label="TikTok Zenithium">
                <FaTiktok className="w-5 h-5" />
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