import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button-glow";
import { ArrowRight, Award, Target, Users, Zap } from "lucide-react";

const About = () => {
  const { t } = useContext(LanguageContext);

  const stats = [
    { number: "4+", label: t("aboutStats.experience"), icon: Award },
    { number: "10+", label: t("aboutStats.projects"), icon: Target },
    { number: "10+", label: t("aboutStats.clients"), icon: Users },
    { number: "24/7", label: t("aboutStats.support"), icon: Zap },
  ];

  const team = [
    {
      name: "Agustín Sgromo",
      role: "Tech Lead & Founder",
      bio: t("aboutAgustin"),
      skills: ["React", ".NET", "PHP", "SQL", "Docker", "Architecture", "Azure"],
      img: "https://media.licdn.com/dms/image/v2/D4D03AQHw1-Zuj0iSTA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710525222930?e=2147483647&v=beta&t=hvmF03nvgbkMqgVld_PyoG6nWMdhmAMNdsJWtCuxtK4",
    },
    {
      name: "Julián Lingurini",
      role: "Backend & Database Specialist",
      bio: t("aboutJulian"),
      skills: ["SQL", ".NET", "AWS", "Database"],
    },
    {
      name: "Tomás Corujo",
      role: "Full-stack Developer",
      bio: t("aboutTomas"),
      skills: [".NET", "Azure", "React", "SQL Server"],
      img: "https://media.licdn.com/dms/image/v2/D4D03AQGQDAe-WfP1tA/profile-displayphoto-scale_100_100/B4DZyHmPQ1IoAc-/0/1771801474706?e=1790812800&v=beta&t=85OesPAxGgo5-kBOIG1ufZyYdi5KjjGa72bhD-dSRRU",
    },
    {
      name: "Bruno Esteban Maturano",
      role: "Full-stack Developer",
      bio: t("aboutBruno"),
      skills: ["React", ".NET", "Java", "Spring Boot"],
      img: "https://media.licdn.com/dms/image/v2/D4D03AQHDY9VUVy9pDg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727778843792?e=2147483647&v=beta&t=prfI27-VpLaSf7ZVVzr1-ijYrwy1JurJk25LWac34-U",
    },
    {
      name: "Máximo Schmith",
      role: "Frontend Developer & UX/UI Designer",
      bio: t("aboutMaximo"),
      skills: ["React", "Figma", "Tailwind CSS", "UI/UX"],
    },
  ];

  return (
    <Section id="about" className="overflow-hidden">
      <div aria-hidden="true" className="absolute -left-52 top-[35%] h-[34rem] w-[34rem] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <h2 className="section-heading">
          <span className="gradient-text">{t("aboutTitle")}</span>
        </h2>
        <p className="text-base leading-8 text-muted-foreground lg:text-lg">{t("aboutSubtitle")}</p>
      </div>

      <div className="relative mt-14 grid grid-cols-2 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`flex min-h-40 flex-col justify-between p-5 sm:p-7 ${index % 2 ? "border-l border-white/10" : ""} ${index > 1 ? "border-t border-white/10 lg:border-t-0" : ""} ${index === 2 ? "lg:border-l" : ""}`}
            >
              <Icon className="h-5 w-5 text-accent-neon" />
              <div>
                <div className="gradient-text text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{stat.number}</div>
                <div className="mt-1 text-[10px] leading-4 text-muted-foreground sm:text-xs">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative mt-6 grid gap-6 lg:grid-cols-2">
        <article className="glass-card min-h-[280px] overflow-hidden p-7 sm:p-10">
          <span className="absolute right-7 top-6 text-6xl font-semibold text-white/[0.035]">01</span>
          <div className="mb-10 h-1 w-14 rounded-full bg-accent-neon" />
          <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white">{t("aboutMission")}</h3>
          <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">{t("aboutMissionDescription")}</p>
        </article>
        <article className="glass-card min-h-[280px] overflow-hidden p-7 sm:p-10">
          <span className="absolute right-7 top-6 text-6xl font-semibold text-white/[0.035]">02</span>
          <div className="mb-10 h-1 w-14 rounded-full bg-primary" />
          <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white">{t("aboutVision")}</h3>
          <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">{t("aboutVisionDescription")}</p>
        </article>
      </div>

      <div className="relative mt-24">
        <h3 className="text-center text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
          {t("aboutTeam")} <span className="gradient-text">{t("aboutTeam2")}</span>
        </h3>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {team.map((member, index) => (
            <article
              key={member.name}
              className={`glass-card group p-6 hover-glow sm:p-7 ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 shrink-0 rounded-full bg-gradient-primary p-[2px] shadow-[0_10px_30px_rgba(139,54,232,0.2)]">
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#11135a] text-sm font-semibold text-white">
                    {member.name.split(" ").map((part) => part[0]).join("")}
                    {member.img && (
                      <img
                        src={member.img}
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full rounded-full object-cover"
                        onError={(event) => { event.currentTarget.style.display = "none"; }}
                      />
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">{member.name}</h4>
                  <p className="mt-1 text-[11px] font-medium leading-4 text-accent-neon">{member.role}</p>
                </div>
              </div>
              <p className="mt-6 text-xs leading-6 text-muted-foreground sm:text-sm">{member.bio}</p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {member.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[10px] text-[#c9c4d6]">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Button variant="hero" size="lg" className="group" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
          <Users className="h-5 w-5" />
          {t("aboutCta")}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Section>
  );
};

export default About;