import { useContext,useState } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button-glow";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Linkedin,
} from "lucide-react";
import ContactForm from "../myComponents/ContactForm";

const Contact = () => {
  const { t } = useContext(LanguageContext);

  return (
    <Section
      id="contact"
      className="relative bg-gradient-to-b from-[hsl(var(--background)/0.1)] to-[hsl(var(--surface)/0.1)] backdrop-blur-sm"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
        <span className="gradient-text">{t("contactTitle")}</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        {t("contactSubtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">
            {t("contactConnect")} <span className="text-accent-neon">{t("contactConnectAccent")}</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
            {t("contactDescription")}
            </p>
          </div>

          <div className="space-y-6">
            <a href="mailto:zenithiumsolutions@gmail.com" className="flex items-center gap-4 glass-card p-6 hover-glow">
              <div className="p-3 rounded-lg bg-accent-neon/10 border border-accent-neon/20">
                <Mail className="w-6 h-6 text-accent-neon" />
              </div>
              <div>
                <div className="font-semibold text-foreground">{t("contactEmail")}</div>
                <div className="text-muted-foreground">zenithiumsolutions@gmail.com</div>
              </div>
            </a>

            <a href="https://wa.me/5492235582433" className="flex items-center gap-4 glass-card p-6 hover-glow">
              <div className="p-3 rounded-lg bg-accent-purple/10 border border-accent-purple/20">
                <Phone className="w-6 h-6 text-accent-purple" />
              </div>
              <div>
                <div className="font-semibold text-foreground">{t("contactPhone")}</div>
                <div className="text-muted-foreground">+54 9 223 558-2433</div>
              </div>
            </a>

            <div className="flex items-center gap-4 glass-card p-6 hover-glow">
              <div className="p-3 rounded-lg bg-accent-pink/10 border border-accent-pink/20">
                <MapPin className="w-6 h-6 text-accent-pink" />
              </div>
              <div>
                <div className="font-semibold text-foreground">{t("contactLocation")}</div>
                <div className="text-muted-foreground">Mar Del Plata, Buenos Aires, Argentina</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">{t("contactFollow")}</h4>
            <div className="flex gap-4">
              <Button variant="glass" size="icon" className="hover:text-accent-neon hover:border-accent-neon/50">
                <a href="https://ar.linkedin.com/company/zenithium" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Zenithium">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4 pt-6">
            <a href="https://wa.me/5492235582433" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Zenithium">
              <Button variant="neon" size="lg" className="w-full hover-lift">
                <Calendar className="w-5 h-5" />
                {t("contactSchedule")}
              </Button>
            </a>
          </div>
        </div>

        <ContactForm/>
      </div>
    </Section >
  );
};

export default Contact;