import { useContext,useState } from "react";
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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setSending(true);
      setError(false);

      let formData = new FormData(e.target);

      let response = await fetch("https://formspree.io/f/xyzjlvog", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
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

  return (
    <div className="glass-card p-8 hover-glow">
      <h3 className="text-2xl font-bold mb-8 text-foreground">
        {t("contactFormTitle")} <span className="gradient-text">{t("contactFormAccent")}</span>
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-3 block">
              {t("contactFormName")} *
            </label>
            <Input
              name="Nombre"
              placeholder={t("contactFormNamePlaceholder")}
              className="bg-surface-elevated border-border/50 focus:border-primary"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-3 block">
              {t("contactFormEmail")} *
            </label>
            <Input
              type="email"
              name="Email"
              placeholder={t("contactFormEmailPlaceholder")}
              className="bg-surface-elevated border-border/50 focus:border-primary"
              required
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-3 block">
            {t("contactFormCompany")}
          </label>
          <Input
            name="Empresa"
            placeholder={t("contactFormCompanyPlaceholder")}
            className="bg-surface-elevated border-border/50 focus:border-primary"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-3 block">
            {t("contactFormMessage")} 
          </label>
          <Textarea
            name="Mensaje"
            placeholder={t("contactFormMessagePlaceholder")}
            className="bg-surface-elevated border-border/50 focus:border-primary min-h-[150px] resize-none mb-3"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={sending || submitted}
          variant="hero"
          size="lg"
          className={`w-full hover-lift ${sending || submitted ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          {sending ? t("contactFormSending") : (
            <>
              <Send className="w-5 h-5 mr-2" />
             {t("contactFormSubmit")}
            </>
          )}
        </Button>
      </form>

      {/* Mensajes de feedback */}
      {submitted && (
        <p className="text-green-600 font-medium text-center mt-4">
          {t("contactFormSuccess")}
        </p>
      )}
      {error && (
        <p className="text-red-600 font-medium text-center mt-4">
          {t("contactFormError")}
        </p>
      )}

      <div className="mt-6 pt-6 border-t border-border/20 text-center">
        <p className="text-sm text-muted-foreground">
          {t("contactFormResponse")}
        </p>
      </div>
    </div>
  );
}
