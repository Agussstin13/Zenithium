import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button-glow";

export default function ContactForm() {
  const { t } = useContext(LanguageContext);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setSending(true);
      setError(false);

      const formData = new FormData(event.currentTarget);
      const response = await fetch("https://formspree.io/f/xyzjlvog", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        event.target.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      console.warn(err);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const fieldClass = "h-12 rounded-2xl border-white/10 bg-white/[0.045] px-4 text-white placeholder:text-white/30 focus-visible:border-accent-neon/50 focus-visible:ring-1 focus-visible:ring-accent-neon focus-visible:ring-offset-0";

  return (
    <div className="border-t border-white/10 bg-white/[0.035] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
        {t("contactFormTitle")} <span className="gradient-text">{t("contactFormAccent")}</span>
      </h3>

      <form onSubmit={handleSubmit} className="mt-9 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="mb-2 block text-xs font-medium text-[#c9c4d6]">{t("contactFormName")} *</label>
            <Input id="contact-name" name="Nombre" placeholder={t("contactFormNamePlaceholder")} className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-2 block text-xs font-medium text-[#c9c4d6]">{t("contactFormEmail")} *</label>
            <Input id="contact-email" type="email" name="Email" placeholder={t("contactFormEmailPlaceholder")} className={fieldClass} required />
          </div>
        </div>

        <div>
          <label htmlFor="contact-company" className="mb-2 block text-xs font-medium text-[#c9c4d6]">{t("contactFormCompany")}</label>
          <Input id="contact-company" name="Empresa" placeholder={t("contactFormCompanyPlaceholder")} className={fieldClass} />
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-2 block text-xs font-medium text-[#c9c4d6]">{t("contactFormMessage")}</label>
          <Textarea id="contact-message" name="Mensaje" placeholder={t("contactFormMessagePlaceholder")} className={`${fieldClass} min-h-[156px] resize-none py-4`} required />
        </div>

        <Button type="submit" disabled={sending || submitted} variant="hero" size="lg" className="w-full">
          {sending ? t("contactFormSending") : (
            <>
              {t("contactFormSubmit")}
              <Send className="h-4 w-4" />
            </>
          )}
        </Button>
      </form>

      {submitted && <p role="status" className="mt-4 text-center text-sm font-medium text-accent-neon">{t("contactFormSuccess")}</p>}
      {error && <p role="alert" className="mt-4 text-center text-sm font-medium text-red-400">{t("contactFormError")}</p>}

      <div className="mt-6 border-t border-white/10 pt-5 text-center text-[11px] text-muted-foreground">
        {t("contactFormResponse")}
      </div>
    </div>
  );
}