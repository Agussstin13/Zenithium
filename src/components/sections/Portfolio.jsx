import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button-glow";
import { ExternalLink } from "lucide-react";
import Fidebill from "@/assets/Fidebill.png";
import SaintAnalytics from "@/assets/SaintAnalytics.png";
import ElMolino from "@/assets/ElMolino.jpg";

const Portfolio = () => {
  const { t } = useContext(LanguageContext);
  const projects = [
    {
      title: t("portfolio.fidebill.title"),
      category: t("portfolio.fidebill.category"),
      description: t("portfolio.fidebill.description"),
      imageAlt: t("portfolio.fidebill.imageAlt"),
      image: Fidebill,
      tech: ["React", ".NET", "SQL Server", "Azure"],
      liveUrl: "https://www.fidebill.com.ar",
    },
    {
      title: t("portfolio.saintAnalytics.title"),
      category: t("portfolio.saintAnalytics.category"),
      description: t("portfolio.saintAnalytics.description"),
      imageAlt: t("portfolio.saintAnalytics.imageAlt"),
      image: SaintAnalytics,
      tech: ["HTML", "JavaScript", "CSS", "Bootstrap"],
      liveUrl: "https://saintanalytics.com",
    },
    {
      title: t("portfolio.elMolino.title"),
      category: t("portfolio.elMolino.category"),
      description: t("portfolio.elMolino.description"),
      imageAlt: t("portfolio.elMolino.imageAlt"),
      image: ElMolino,
      tech: ["React", "Vite", "CSS", "SEO"],
      liveUrl: "https://elmolinomdp.com.ar/",
    },
  ];

  return (
    <Section id="portfolio" className="overflow-hidden">
      <div className="relative mb-14 text-center lg:mb-16">
        <h2 className="section-heading">
          <span className="gradient-text">{t("portfolioTitle")}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-muted-foreground lg:text-lg">
          {t("portfolioSubtitle")}
        </p>
      </div>

      <div className="space-y-6 lg:space-y-8">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="glass-card group grid overflow-hidden lg:grid-cols-[1.12fr_0.88fr] lg:p-3"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative min-h-[260px] overflow-hidden bg-[#090b48] sm:min-h-[360px] lg:min-h-[460px] lg:rounded-[1.15rem] ${index % 2 ? "lg:order-2" : ""}`}
              aria-label={`${t("portfolio.viewProject.title")}: ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030541]/45 via-transparent to-transparent" />
              <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#030541]/70 text-white backdrop-blur-md transition group-hover:bg-accent-neon group-hover:text-background">
                <ExternalLink className="h-4 w-4" />
              </span>
            </a>

            <div className={`flex flex-col justify-center p-7 sm:p-10 lg:p-12 ${index % 2 ? "lg:order-1" : ""}`}>
              <span className="mb-6 w-fit rounded-full border border-accent-neon/20 bg-accent-neon/10 px-3 py-1.5 text-[11px] font-semibold text-accent-neon">
                {project.category}
              </span>
              <h3 className="text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">{project.title}</h3>
              <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">{project.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-[#c9c4d6]">
                    {tech}
                  </span>
                ))}
              </div>
              <Button asChild variant="neon" size="lg" className="mt-9 w-fit group/button">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  {t("portfolio.viewProject.title")}
                  <ExternalLink className="h-4 w-4 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;