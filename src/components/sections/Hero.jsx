import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import { Button } from "@/components/ui/button-glow";
import { ArrowRight, Code2, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useContext(LanguageContext);
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [animatedTexts, setAnimatedTexts] = useState(t("heroAnimatedTexts"));

  // Reiniciar texto animado si cambia el idioma
  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
    setIsDeleting(false);
    setTextIndex(0);
    setAnimatedTexts(t("heroAnimatedTexts"));
  }, [t]);

  useEffect(() => {
    const fullText = animatedTexts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < fullText.length) {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      } else if (!isDeleting && currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex(0);
        setTextIndex((prev) => (prev + 1) % animatedTexts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, displayedText, isDeleting, textIndex, animatedTexts]);

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      style={{ "--background": "100% 100% 100%" }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary opacity-20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-neon opacity-15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="flex flex-col z-10 text-center px-4 sm:px-6 lg:px-8 md:w-[920px] lg:w-[1000px] max-w-[90%]">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in stagger-1">
          <span className="flex justify-center font-bold gradient-text">
            Zenithium
          </span>
          <span className="flex justify-center text-4xl md:text-6xl min-h-[5rem] font-normal">
            {displayedText}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in stagger-2">
          {t("heroSubtitle")}
          <span className="text-accent-neon">{t("heroSubtitleAccent")}</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in stagger-3">
          <Button
            variant="hero"
            size="xl"
            className="hover-lift group"
            onClick={() => {
              const portfolioSection = document.getElementById("portfolio");
              if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Code2 className="w-5 h-5" />
            {t("heroProjects")}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            variant="glass"
            size="xl"
            className="hover-lift"
            onClick={scrollToContact}
          >
            <Zap className="w-5 h-5" />
            {t("heroContact")}
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in stagger-4">
          <div className="glass-card p-6 hover-glow hover-lift">
            <div className="text-3xl font-bold text-accent-neon mb-2">10+</div>
            <div className="text-muted-foreground">{t("heroStats.projects")}</div>
          </div>
          <div className="glass-card p-6 hover-glow hover-lift">
            <div className="text-3xl font-bold text-accent-purple mb-2">2+</div>
            <div className="text-muted-foreground">{t("heroStats.experience")}</div>
          </div>
          <div className="glass-card p-6 hover-glow hover-lift">
            <div className="text-3xl font-bold text-accent-pink mb-2">24/7</div>
            <div className="text-muted-foreground">{t("heroStats.support")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;