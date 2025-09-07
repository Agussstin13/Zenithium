import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button-glow";
import { ExternalLink } from "lucide-react";
import Fidebill from "@/assets/Fidebill.png";
import SaintAnalytics from "@/assets/SaintAnalytics.png";

const projects = [
{
  title: "Fidebill",
  category: "Fidelización de clientes",
  description: "Plataforma digital de fidelización que permite a los clientes visualizar promociones, puntos acumulados, historial de transacciones y ubicación de locales, ofreciendo a las empresas una herramienta eficaz para fortalecer la relación con sus consumidores.",
  image: Fidebill,
  tech: ["React", ".NET", "SQL Server", "Azure"],
  liveUrl: "https://www.fidebill.com.ar"
},
{
  title: "Saint Analytics",
  category: "Análisis estadístico",
  description: "Aplicación web de análisis de datos que facilita la gestión y visualización de estadísticas para instituciones, integrando dashboards interactivos, reportes dinámicos y herramientas intuitivas para la toma de decisiones estratégicas.",
  image: SaintAnalytics,
  tech: ["HTML", "JavaScript", "CSS", "Bootstrap"],
  liveUrl: "https://saintanalytics.com"
}
];

const Portfolio = () => {

  return (
    <Section
      id="portfolio"
      className="relative bg-gradient-to-b from-[hsl(var(--background)/0.1)] to-[hsl(var(--surface)/0.1)] backdrop-blur-sm"
    >

      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Nuestro Portfolio</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Proyectos que demuestran nuestra expertise en tecnologías de vanguardia y diseño innovador
        </p>
      </div>

      {/* Featured Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group relative glass-card overflow-hidden hover-glow hover-lift transition-all duration-500"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-primary bg-surface-elevated px-2 py-1 rounded-full border border-primary/20">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-glow transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-surface-elevated px-3 py-1 rounded-full text-text-dim border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

                <div className="flex gap-3">
                  <Button asChild variant="neon" size="sm" className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Ver Proyecto
                    </a>
                  </Button>
                </div>

            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
