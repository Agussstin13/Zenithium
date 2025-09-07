import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button-glow";

export default function ContactForm() {
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
        Cuéntanos sobre tu <span className="gradient-text">Proyecto</span>
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-3 block">
              Nombre *
            </label>
            <Input
              name="Nombre"
              placeholder="Tu nombre completo"
              className="bg-surface-elevated border-border/50 focus:border-primary"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-3 block">
              Email *
            </label>
            <Input
              type="email"
              name="Email"
              placeholder="tu@email.com"
              className="bg-surface-elevated border-border/50 focus:border-primary"
              required
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-3 block">
            Empresa
          </label>
          <Input
            name="Empresa"
            placeholder="Nombre de tu empresa (opcional)"
            className="bg-surface-elevated border-border/50 focus:border-primary"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-3 block">
            Mensaje *
          </label>
          <Textarea
            name="Mensaje"
            placeholder="Cuéntanos sobre tu proyecto, necesidades y objetivos..."
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
          {sending ? "Enviando..." : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Enviar Mensaje
            </>
          )}
        </Button>
      </form>

      {/* Mensajes de feedback */}
      {submitted && (
        <p className="text-green-600 font-medium text-center mt-4">
          ¡Gracias por tu mensaje! Te responderemos pronto.
        </p>
      )}
      {error && (
        <p className="text-red-600 font-medium text-center mt-4">
          Ocurrió un error al enviar el mensaje. Intentá nuevamente.
        </p>
      )}

      <div className="mt-6 pt-6 border-t border-border/20 text-center">
        <p className="text-sm text-muted-foreground">
          Te responderemos en menos de 24 horas
        </p>
      </div>
    </div>
  );
}
