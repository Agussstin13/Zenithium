import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button-glow";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaTiktok } from "react-icons/fa"; // Importa el ícono de TikTok
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
              <Button variant="glass" size="icon" className="hover:text-accent-pink hover:border-accent-pink/50">
                <a href="https://www.instagram.com/_zenithium_" target="_blank" rel="noopener noreferrer" aria-label="Instagram Zenithium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.3 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.6.4 3.8.7c-.9.3-1.7.7-2.4 1.4-.7.7-1.1 1.5-1.4 2.4-.3.8-.5 1.9-.6 3.2C0 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.3.3 2.4.6 3.2.3.9.7 1.7 1.4 2.4.7.7 1.5 1.1 2.4 1.4.8.3 1.9.5 3.2.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.4-.3 3.2-.6.9-.3 1.7-.7 2.4-1.4.7-.7 1.1-1.5 1.4-2.4.3-.8.5-1.9.6-3.2.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.4-.6-3.2-.3-.9-.7-1.7-1.4-2.4-.7-.7-1.5-1.1-2.4-1.4-.8-.3-1.9-.5-3.2-.6C15.7 0 15.3 0 12 0zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.6c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z" />
                  </svg>
                </a>
              </Button>
              <Button variant="glass" size="icon" className="hover:text-accent-purple hover:border-accent-purple/50">
                <a href="https://www.tiktok.com/@_zenithium_" target="_blank" rel="noopener noreferrer" aria-label="TikTok Zenithium">
                  <FaTiktok className="w-5 h-5" />
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

        <ContactForm />
      </div>
    </Section >
  );
};

export default Contact;