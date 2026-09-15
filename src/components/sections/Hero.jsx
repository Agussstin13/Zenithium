import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import { Button } from "@/components/ui/button-glow";
import { ArrowRight, Cloud, Code2, Database, Palette, Shield, Zap } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Hero() {
  const { t } = useContext(LanguageContext);
  const animatedTexts = t("heroAnimatedTexts");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    setTextIndex(0);
  }, [animatedTexts]);

  useEffect(() => {
    const interval = window.setInterval(
      () => setTextIndex((current) => (current + 1) % animatedTexts.length),
      3200,
    );
    return () => window.clearInterval(interval);
  }, [animatedTexts]);

  function scrollTo(id) {
    return document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="hero" className="relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 sm:pt-44 lg:min-h-[960px] lg:px-10 lg:pb-24">
      <div aria-hidden="true" className="absolute left-[-10rem] top-32 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-[120px]" />
      <div aria-hidden="true" className="absolute right-[-12rem] top-24 h-[34rem] w-[34rem] rounded-full bg-accent-neon/10 blur-[130px]" />
      <div aria-hidden="true" className="absolute inset-x-0 top-[20rem] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
        <div className="relative z-10 max-w-[680px]">
          <div className="eyebrow-line mb-7 animate-fade-in">Zenithium</div>
          <h1 className="animate-fade-in text-[3.25rem] font-semibold leading-[0.98] tracking-[-0.06em] text-white stagger-1 sm:text-6xl lg:text-[5.2rem]">
            <span className="block">Zenithium</span>
            <span key={textIndex} className="gradient-text mt-2 block min-h-[2.1em] animate-fade-in pb-2 sm:min-h-[1.2em]">
              {animatedTexts[textIndex]}
            </span>
          </h1>

          <p className="mt-7 max-w-[620px] animate-fade-in text-base leading-8 text-muted-foreground stagger-2 sm:text-lg">
            {t("heroSubtitle")}
            <span className="font-medium text-white">{t("heroSubtitleAccent")}</span>
          </p>

          <div className="mt-9 flex animate-fade-in flex-col gap-3 stagger-3 sm:flex-row">
            <Button variant="hero" size="xl" className="group" onClick={() => scrollTo("#portfolio")}>
              <Code2 className="h-5 w-5" />
              {t("heroProjects")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="glass" size="xl" onClick={() => scrollTo("#contact")}>
              <Zap className="h-5 w-5 text-accent-neon" />
              {t("heroContact")}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[570px] animate-fade-in stagger-3 lg:mx-0">
          <div aria-hidden="true" className="absolute -inset-8 rounded-full border border-dashed border-white/10 [animation:orbit_32s_linear_infinite]" />
          <div aria-hidden="true" className="absolute -right-4 -top-5 h-28 w-28 rounded-full bg-accent-neon/20 blur-3xl" />

          <div className="glass-card relative aspect-square overflow-hidden p-3 shadow-[0_35px_100px_rgba(1,2,35,0.6)] sm:p-4">
            <div className="relative z-20 flex items-center justify-between px-2 py-1">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-accent-neon/70" />
              </div>
              <div className="h-1.5 w-20 rounded-full bg-white/10" aria-hidden="true" />
            </div>

            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(rgba(107,217,240,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(107,217,240,0.045)_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent-neon/20 [animation:orbit_24s_linear_infinite]" />
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30" />

            <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute inset-[14%] h-[72%] w-[72%] text-accent-neon/25">
              <path d="M50 50 L18 22 M50 50 L82 22 M50 50 L18 78 M50 50 L82 78" fill="none" stroke="currentColor" strokeWidth="0.45" strokeDasharray="2 2" />
              <circle cx="50" cy="50" r="2" fill="currentColor" />
            </svg>

            <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-white/15 bg-[#080a49] p-2 shadow-[0_22px_65px_rgba(139,54,232,0.42)] sm:h-36 sm:w-36">
              <img src={logo} alt="" className="h-full w-full rounded-[1.6rem] object-cover" />
            </div>

            {[
              { icon: Code2, label: t("services.webDevelopment"), position: "left-[7%] top-[18%]" },
              { icon: Cloud, label: t("services.cloudSolutions"), position: "right-[7%] top-[18%]" },
              { icon: Database, label: t("services.backendApis"), position: "bottom-[12%] left-[7%]" },
              { icon: Shield, label: t("services.cybersecurity"), position: "bottom-[12%] right-[7%]" },
            ].map(({ icon: Icon, label, position }) => (
              <div key={label} className={`absolute z-10 ${position} flex max-w-[8.5rem] items-center gap-2 rounded-2xl border border-white/10 bg-[#0d0f55]/90 p-2.5 shadow-lg backdrop-blur-md sm:px-3 sm:py-2.5`}>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-neon/10 text-accent-neon">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="hidden text-[9px] font-medium leading-3 text-[#c9c4d6] min-[430px]:block sm:text-[10px]">{label}</span>
              </div>
            ))}

            <div className="absolute left-1/2 top-[8%] z-10 -translate-x-1/2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-primary-glow">
              <Palette className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-24 grid max-w-[1200px] grid-cols-3 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] sm:mt-28">
        {[
          ["10+", t("heroStats.projects")],
          ["4+", t("heroStats.experience")],
          ["24/7", t("heroStats.support")],
        ].map(([value, label], index) => (
          <div key={label} className={`px-3 py-6 text-center sm:px-8 sm:py-7 ${index !== 0 ? "border-l border-white/10" : ""}`}>
            <div className="gradient-text text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{value}</div>
            <div className="mt-1 text-[10px] leading-4 text-muted-foreground sm:text-xs">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}