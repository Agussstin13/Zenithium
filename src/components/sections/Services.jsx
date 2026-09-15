import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button-glow";
import { ArrowRight, Cloud, Code2, Database, Globe, Palette, Shield } from "lucide-react";

export default function Services(){
  const { t } = useContext(LanguageContext);

  const services = [
    {
      icon: Globe,
      title: t("services.webDevelopment"),
      description: t("services.webDevelopmentDescription"),
      features: t("services.webDevelopmentFeatures"),
    },
    {
      icon: Shield,
      title: t("services.cybersecurity"),
      description: t("services.cybersecurityDescription"),
      features: t("services.cybersecurityFeatures"),
    },
    {
      icon: Cloud,
      title: t("services.cloudSolutions"),
      description: t("services.cloudSolutionsDescription"),
      features: t("services.cloudSolutionsFeatures"),
    },
    {
      icon: Database,
      title: t("services.backendApis"),
      description: t("services.backendApisDescription"),
      features: t("services.backendApisFeatures"),
    },
    {
      icon: Code2,
      title: t("services.techConsulting"),
      description: t("services.techConsultingDescription"),
      features: t("services.techConsultingFeatures"),
    },
    {
      icon: Palette,
      title: t("services.uiuxDesign"),
      description: t("services.uiuxDesignDescription"),
      features: t("services.uiuxDesignFeatures"),
    },
  ];

  return (
    <Section id="services" className="overflow-hidden">
      <div aria-hidden="true" className="absolute -right-56 top-40 h-[34rem] w-[34rem] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mb-14 grid items-end gap-6 md:grid-cols-[0.9fr_1.1fr] lg:mb-16">
        <h2 className="section-heading">
          <span className="gradient-text">{t("servicesTitle")}</span>
        </h2>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground md:justify-self-end md:text-right lg:text-lg">
          {t("servicesSubtitle")}
        </p>
      </div>

      <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <article
              key={service.title}
              className="glass-card group flex min-h-[330px] flex-col overflow-hidden p-7 hover-glow sm:p-8"
            >
              <span className="absolute right-6 top-5 text-xs font-medium tracking-[0.18em] text-white/25">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-neon/20 bg-accent-neon/10 text-accent-neon transition duration-300 group-hover:scale-105 group-hover:bg-accent-neon group-hover:text-background">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="max-w-sm text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl">{service.title}</h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">{service.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {service.features.map((feature) => (
                  <span key={feature} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium text-[#c9c4d6] sm:text-xs">
                    {feature}
                  </span>
                ))}
              </div>
              <div aria-hidden="true" className="absolute -bottom-20 -right-20 h-44 w-44 rounded-full bg-primary/0 blur-3xl transition duration-500 group-hover:bg-primary/20" />
            </article>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <Button variant="hero" size="lg" className="group" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
          <Code2 className="h-5 w-5" />
          {t("servicesCta")}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Section>
  );
};