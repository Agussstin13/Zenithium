import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button-glow";
import { Calendar, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import ContactForm from "../myComponents/ContactForm";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.3 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.6.4 3.8.7c-.9.3-1.7.7-2.4 1.4-.7.7-1.1 1.5-1.4 2.4-.3.8-.5 1.9-.6 3.2C0 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.3.3 2.4.6 3.2.3.9.7 1.7 1.4 2.4.7.7 1.5 1.1 2.4 1.4.8.3 1.9.5 3.2.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.4-.3 3.2-.6.9-.3 1.7-.7 2.4-1.4.7-.7 1.1-1.5 1.4-2.4.3-.8.5-1.9.6-3.2.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.4-.6-3.2-.3-.9-.7-1.7-1.4-2.4-.7-.7-1.5-1.1-2.4-1.4-.8-.3-1.9-.5-3.2-.6C15.7 0 15.3 0 12 0zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.6c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z" />
  </svg>
);

const Contact = () => {
  const { t } = useContext(LanguageContext);

  const contactItems = [
    { icon: Mail, label: t("contactEmail"), value: "zenithiumsolutions@gmail.com", href: "mailto:zenithiumsolutions@gmail.com" },
    { icon: Phone, label: t("contactPhone"), value: "+54 9 223 558-2433", href: "https://wa.me/5492235582433" },
    { icon: MapPin, label: t("contactLocation"), value: "Mar del Plata, Buenos Aires, Argentina" },
  ];

  return (
    <Section id="contact" className="pb-24 lg:pb-32">
      <div className="mb-14 text-center">
        <h2 className="section-heading"><span className="gradient-text">{t("contactTitle")}</span></h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-muted-foreground lg:text-lg">{t("contactSubtitle")}</p>
      </div>

      <div className="relative rounded-[2rem] bg-gradient-to-br from-primary/80 via-accent-neon/40 to-primary/20 p-px shadow-[0_35px_100px_rgba(1,2,35,0.42)]">
        <div className="grid overflow-hidden rounded-[calc(2rem-1px)] bg-[#080a49]/95 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden p-7 sm:p-10 lg:p-12">
            <div aria-hidden="true" className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/25 blur-[90px]" />
            <div className="relative">
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                {t("contactConnect")} <span className="text-accent-neon">{t("contactConnectAccent")}</span>
              </h3>
              <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">{t("contactDescription")}</p>

              <div className="mt-9 space-y-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent-neon/15 bg-accent-neon/10 text-accent-neon">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold text-white">{item.label}</span>
                        <span className="mt-1 block break-words text-xs text-muted-foreground sm:text-sm">{item.value}</span>
                      </span>
                    </>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-accent-neon/25 hover:bg-white/[0.065]">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">{content}</div>
                  );
                })}
              </div>

              <div className="mt-8">
                <p className="mb-3 text-xs font-semibold text-white">{t("contactFollow")}</p>
                <div className="flex gap-2">
                  <Button asChild variant="glass" size="icon"><a href="https://ar.linkedin.com/company/zenithium" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Zenithium"><Linkedin /></a></Button>
                  <Button asChild variant="glass" size="icon"><a href="https://www.instagram.com/zenithium_solutions" target="_blank" rel="noopener noreferrer" aria-label="Instagram Zenithium"><InstagramIcon /></a></Button>
                  <Button asChild variant="glass" size="icon"><a href="https://www.tiktok.com/@_zenithium_" target="_blank" rel="noopener noreferrer" aria-label="TikTok Zenithium"><FaTiktok /></a></Button>
                </div>
              </div>

              <Button asChild variant="neon" size="lg" className="mt-8 w-full sm:w-auto">
                <a href="https://wa.me/5492235582433" target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-5 w-5" />
                  {t("contactSchedule")}
                </a>
              </Button>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default Contact;