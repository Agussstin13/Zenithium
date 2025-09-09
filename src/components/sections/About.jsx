import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button-glow";
import {
  Users,
  Award,
  Target,
  Zap,
  ArrowRight,
  Linkedin
} from "lucide-react";

const About = () => {
  const { t } = useContext(LanguageContext);

  const stats = [
    { number: "2+", label: t("aboutStats.experience"), icon: Award },
    { number: "10+", label: t("aboutStats.projects"), icon: Target },
    { number: "10+", label: t("aboutStats.clients"), icon: Users },
    { number: "24/7", label: t("aboutStats.support"), icon: Zap }
  ];

  const team = [
    {
      name: "Agustin Sgromo",
      role: "Tech Lead & Founder",
      bio: "Tech Lead & Founder con experiencia en diseño de arquitecturas escalables y seguras. Lidera equipos en la construcción de soluciones innovadoras utilizando React, .NET y Azure.",
      skills: ["React", ".NET", "PHP", "SQL", "Docker", "Architecture", "Azure"],
      img: "https://media.licdn.com/dms/image/v2/D4D03AQHw1-Zuj0iSTA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710525222930?e=2147483647&v=beta&t=hvmF03nvgbkMqgVld_PyoG6nWMdhmAMNdsJWtCuxtK4",
      social: { linkedin: "#" }
    },
    {
      name: "Julian Lingurini",
      role: "Backend & Database Specialist",
      bio: "Especialista en backend y bases de datos, con amplia experiencia en modelado, optimización de consultas y despliegue en entornos cloud. Experto en SQL, .NET y AWS.",
      skills: ["SQL", ".NET", "AWS", "Database"],
      social: { linkedin: "#" }
    },
    {
      name: "Tomas Corujo",
      role: "Full-stack Developer",
      bio: "Full-stack Developer orientado al ecosistema Microsoft y la nube. Integra frontends modernos en React con backends en .NET, priorizando escalabilidad, seguridad y buenas prácticas.",
      skills: [".NET", "Azure", "React", "SQL Server"],
      img: "data:image/jpeg;base64,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",
      social: { linkedin: "#" }
    },
    {
      name: "Bruno Esteban Maturano",
      role: "Full-stack Developer",
      bio: "Full-stack Developer con foco en la construcción de aplicaciones robustas y mantenibles. Experiencia en React, .NET y desarrollo empresarial con Java y Spring Boot.",
      skills: ["React", ".NET", "Java", "Spring Boot"],
      img: "https://media.licdn.com/dms/image/v2/D4D03AQHDY9VUVy9pDg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727778843792?e=2147483647&v=beta&t=prfI27-VpLaSf7ZVVzr1-ijYrwy1JurJk25LWac34-U",
      social: { linkedin: "#" }
    },
    {
      name: "Maximo Schmith",
      role: "Frontend Developer & UX/UI Designer",
      bio: "Frontend Developer y UX/UI Designer especializado en interfaces limpias, intuitivas y centradas en el usuario. Experto en React, Figma y diseño de experiencias digitales.",
      skills: ["React", "Figma", "tailwind CSS", "UI/UX"],
      social: { linkedin: "#" }
    }
  ];

  return (
    <Section
      id="about"
      className="relative bg-gradient-to-b from-[hsl(var(--background)/0.1)] to-[hsl(var(--surface)/0.1)] backdrop-blur-sm"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">{t("aboutTitle")}</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        {t("aboutSubtitle")}
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="text-center glass-card p-6 hover-glow hover-lift transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-3 rounded-lg bg-surface-elevated border border-primary/20 mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-accent-neon mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="glass-card p-8 hover-glow">
          <h3 className="text-2xl font-bold mb-4 text-accent-neon">{t("aboutMission")}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {t("aboutMissionDescription")}
          </p>
        </div>

        <div className="glass-card p-8 hover-glow">
          <h3 className="text-2xl font-bold mb-4 text-accent-purple">{t("aboutVision")}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {t("aboutVisionDescription")}
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Conoce a Nuestro <span className="gradient-text">Equipo</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group glass-card p-8 hover-glow hover-lift transition-all duration-500 text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {
                member.img ?
                  <img src={member.img} className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-white"/>
                  :
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
              }

              <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {member.name}
              </h4>

              <div className="text-accent-neon text-sm font-semibold mb-4">
                {member.role}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-surface-elevated px-2 py-1 rounded-full text-text-dim border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Button variant="hero" size="lg" className="hover-lift" onClick={() => {
          const portfolioSection = document.getElementById("contact");
          if (portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: "smooth" });
          }
        }}>
          <Users className="w-5 h-5" />
          {t("aboutCta")}
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </Section>
  );
};

export default About;