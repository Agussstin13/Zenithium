import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import { Button } from "@/components/ui/button-glow";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useContext(LanguageContext);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
      return;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("navHome"), href: "#hero" },
    { label: t("navServices"), href: "#services" },
    { label: t("navPortfolio"), href: "#portfolio" },
    { label: t("navAbout"), href: "#about" },
    { label: t("navContact"), href: "#contact" },
  ];

  function scrollToSection(href) {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
    return;
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5" aria-label="Principal">
      <div
        className={`mx-auto max-w-[1200px] rounded-full border transition-all duration-300 ${
          isScrolled || isOpen
            ? "border-white/15 bg-[#030541]/90 shadow-[0_18px_60px_rgba(1,2,35,0.36)] backdrop-blur-xl"
            : "border-white/10 bg-[#030541]/55 backdrop-blur-md"
        }`}
      >
        <div className="flex h-[66px] items-center justify-between px-4 sm:px-5 lg:px-6">
          <button
            type="button"
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-neon"
            aria-label="Zenithium"
          >
            <img src={logo} alt="" className="h-10 w-10 rounded-xl object-cover" />
            <span className="text-lg font-semibold tracking-[-0.03em] text-white">Zenithium</span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="rounded-full px-4 py-2 text-[13px] font-medium text-muted-foreground transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="flex h-10 min-w-10 items-center justify-center rounded-full border border-white/10 px-3 text-xs font-semibold text-muted-foreground transition hover:border-white/20 hover:text-white"
              aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
            >
              {language === "es" ? "EN" : "ES"}
            </button>
            <Button variant="hero" onClick={() => scrollToSection("#contact")}>
              {t("navCta")}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-semibold text-muted-foreground"
              aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
            >
              {language === "es" ? "EN" : "ES"}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mx-3 mb-3 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-3 lg:hidden">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm text-muted-foreground transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
                <ArrowUpRight className="h-4 w-4" />
              </button>
            ))}
            <Button variant="hero" className="mt-2 w-full" onClick={() => scrollToSection("#contact")}>
              {t("navCta")}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}