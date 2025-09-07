import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button-glow";
import { 
  Globe, 
  Shield, 
  Cloud, 
  Database, 
  Code2, 
  Palette,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas y agiles con tecnologías de vanguardia. Responsive, rápidas y optimizadas para SEO.",
    features: ["React", "TypeScript", "Tailwind CSS", "PWA"]
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description: "Protegemos tus sistemas y datos con auditorías, pruebas de penetración y estrategias de seguridad.",
    features: ["Auditoría de Seguridad", "Pruebas de Penetración", "Protección de Datos", "Cumplimiento Normativo"]
  },
  {
    icon: Cloud,
    title: "Soluciones Cloud",
    description: "Infraestructura escalable en AWS, Azure. Arquitecturas serverless y microservicios para máximo rendimiento.",
    features: ["AWS & Azure", "Serverless", "Microservicios", "DevOps"]
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description: "APIs robustas y bases de datos optimizadas. Node.js, .NET, y tecnologías que escalan con tu negocio.",
    features: ["Node.js & .NET", "PostgreSQL & SQLServer", "Bases de Datos", "Seguridad informática"]
  },
  {
    icon: Code2,
    title: "Consultoría Tech",
    description: "Asesoramiento estratégico en tecnología. Auditorías, arquitectura de software y mejores prácticas.",
    features: ["Auditorias", "Soluciones informáticas", "Arquitectura", "Mejores Prácticas"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interfaces que enamoran y experiencias que convierten. Diseño centrado en el usuario con las últimas tendencias.",
    features: ["Diseño UI/UX", "Prototipado", "Investigación de Usuario"]
  }
];

const Services = () => {
  return (
    <Section
  id="services"
  className="relative bg-gradient-to-b from-[hsl(var(--background)/0.1)] to-[hsl(var(--surface)/0.1)] backdrop-blur-sm"
>

      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Nuestros Servicios</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ofrecemos soluciones tecnológicas completas para llevar tu negocio al siguiente nivel digital
        </p>
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
              
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-glow">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
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
        <Button variant="hero" size="lg" className="hover-lift" onClick={() => {
          const contactSection = document.querySelector('#contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          <Code2 className="w-5 h-5" />
          Consulta Gratuita
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </Section>
  );
};

export default Services;