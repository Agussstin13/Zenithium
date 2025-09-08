import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button-glow";
import { Globe, Shield, Cloud, Database, Code2, Palette, ArrowRight } from "lucide-react";

const Services = () => {
  const { t } = useContext(LanguageContext);

  const services = [
    {
      icon: Globe,
      title: t("services.webDevelopment"),
      description: t("services.webDevelopmentDescription"),
      features: ["React", "TypeScript", "Tailwind CSS", "PWA"],
    },
    {
      icon: Shield,
      title: t("services.cybersecurity"),
      description: t("services.cybersecurityDescription"),
      features: ["Auditoría de Seguridad", "Pruebas de Penetración", "Protección de Datos", "Cumplimiento Normativo"],
    },
    {
      icon: Cloud,
      title: t("services.cloudSolutions"),
      description: t("services.cloudSolutionsDescription"),
      features: ["AWS & Azure", "Serverless", "Microservicios", "DevOps"],
    },
    {
      icon: Database,
      title: t("services.backendApis"),
      description: t("services.backendApisDescription"),
      features: ["Node.js & .NET", "PostgreSQL & SQLServer", "Bases de Datos", "Seguridad informática"],
    },
    {
      icon: Code2,
      title: t("services.techConsulting"),
      description: t("services.techConsultingDescription"),
      features: ["Auditorias", "Soluciones informáticas", "Arquitectura", "Mejores Prácticas"],
    },
    {
      icon: Palette,
      title: t("services.uiuxDesign"),
      description: t("services.uiuxDesignDescription"),
      features: ["Diseño UI/UX", "Prototipado", "Investigación de Usuario"],
    },
  ];

  return (
    <Section id="services" className="relative bg-gradient-to-b from-[hsl(var(--background)/0.1)] to-[hsl(var(--surface)/0.1)] backdrop-blur-sm">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">{t("servicesTitle")}</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("servicesSubtitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="glass-card p-8 hover-glow hover-lift transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="inline-flex p-3 rounded-lg bg-surface-elevated border border-primary/20">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-glow">{service.title}</h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-text-dim">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <Button
          variant="hero"
          size="lg"
          className="hover-lift"
          onClick={() => {
            const contactSection = document.querySelector("#contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <Code2 className="w-5 h-5" />
          {t("servicesCta")}
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </Section>
  );
};

export default Services;