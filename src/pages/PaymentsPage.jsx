import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, CreditCard, LockKeyhole, Mail } from "lucide-react";
import Footer from "@/components/layout/Footer";
import PayPalSubscriptionButton from "@/components/payments/PayPalSubscriptionButton";
import { LanguageContext } from "@/context/LanguageProvider";
import logo from "@/assets/logo.png";

const CONTACT_EMAIL = "zenithiumsolutions@gmail.com";

const SUBSCRIPTIONS = [
  {
    id: "paypal-subscription-P-7VN15830D47162157NKVQDZY",
    provider: "paypal",
    providerName: "PayPal",
    planId: "P-7VN15830D47162157NKVQDZY",
    content: {
      es: {
        name: "Mantenimiento de página web",
        price: "USD 2",
        period: "por mes",
        description: "Para mantener publicada y accesible tu página web personalizada.",
        features: [
          "Tu página web permanece publicada durante cada período abonado.",
          "Tu propio dominio .ar o .com.ar.",
          "La suscripción se renueva automáticamente una vez por mes.",
          "Podés cancelar antes del próximo cobro.",
        ],
        scope: "Los cambios de contenido o diseño y cualquier servicio adicional se cotizan por separado, salvo que tu propuesta indique lo contrario.",
        billingNotice: "Al suscribirte, autorizás un cobro automático de USD 2 cada mes hasta que canceles.",
      },
      en: {
        name: "Website maintenance",
        price: "USD 2",
        period: "per month",
        description: "Keeps your personalized website published and accessible.",
        features: [
          "Your website remains published throughout each paid period.",
          "Your own .ar or .com.ar domain.",
          "The subscription renews automatically once a month.",
          "You can cancel before the next charge.",
        ],
        scope: "Content or design changes and any additional services are quoted separately unless your proposal states otherwise.",
        billingNotice: "By subscribing, you authorize an automatic USD 2 charge every month until you cancel.",
      },
    },
  },
];

const paymentsContent = {
  es: {
    title: "Cobros y suscripciones",
    description: "Suscripciones de Zenithium Solutions para mantener publicada una landing page personalizada.",
    intro: "Acá podés revisar qué incluye cada servicio y contratarlo de forma segura. Elegí únicamente el plan acordado con Zenithium Solutions.",
    backHome: "Volver al inicio",
    switchLanguage: "Switch to English",
    cardEyebrow: "Suscripción mensual",
    includesTitle: "Qué incluye",
    scopeTitle: "Importante",
    securityTitle: "Pago procesado por",
    securityDescription: "El proveedor de pago te mostrará el importe y la frecuencia antes de confirmar. Zenithium Solutions no recibe ni almacena los datos completos de tu tarjeta o cuenta de pago.",
    legalPrefix: "Al continuar, aceptás los",
    terms: "Términos y Condiciones",
    legalConnector: "y la",
    privacy: "Política de Privacidad",
    contactTitle: "¿No estás seguro de qué plan elegir?",
    contactDescription: "Escribinos antes de pagar y te indicaremos cuál corresponde a tu servicio.",
    paypal: {
      loading: "Cargando el botón seguro de PayPal…",
      approved: "Listo. PayPal confirmó tu suscripción.",
      subscriptionId: "ID de suscripción",
      cancelled: "La operación fue cancelada. No se creó ninguna suscripción.",
      error: "No pudimos iniciar la suscripción. Intentá nuevamente o contactanos.",
      unavailable: "PayPal no está disponible para este navegador o ubicación.",
      unsupported: "Este medio de pago todavía no está disponible. Contactanos para continuar.",
    },
  },
  en: {
    title: "Payments and subscriptions",
    description: "Zenithium Solutions subscriptions for keeping a personalized landing page published.",
    intro: "Here you can review what each service includes and subscribe securely. Select only the plan agreed upon with Zenithium Solutions.",
    backHome: "Back to home",
    switchLanguage: "Cambiar a español",
    cardEyebrow: "Monthly subscription",
    includesTitle: "What's included",
    scopeTitle: "Important",
    securityTitle: "Payment processed by",
    securityDescription: "The payment provider will show the amount and billing frequency before you confirm. Zenithium Solutions does not receive or store your complete card or payment account details.",
    legalPrefix: "By continuing, you agree to the",
    terms: "Terms and Conditions",
    legalConnector: "and the",
    privacy: "Privacy Policy",
    contactTitle: "Not sure which plan to choose?",
    contactDescription: "Contact us before paying and we will tell you which plan applies to your service.",
    paypal: {
      loading: "Loading the secure PayPal button…",
      approved: "Done. PayPal confirmed your subscription.",
      subscriptionId: "Subscription ID",
      cancelled: "The operation was cancelled. No subscription was created.",
      error: "We could not start the subscription. Please try again or contact us.",
      unavailable: "PayPal is not available for this browser or location.",
      unsupported: "This payment method is not available yet. Contact us to continue.",
    },
  },
};

function SubscriptionPayment({ subscription, copy }) {
  if (subscription.provider === "paypal") {
    return <PayPalSubscriptionButton copy={copy} planId={subscription.planId} />;
  }

  return <p className="text-center text-xs text-amber-200" role="alert">{copy.unsupported}</p>;
}

export default function PaymentsPage() {
  const { language, setLanguage } = useContext(LanguageContext);
  const isSpanish = language === "es";
  const content = paymentsContent[language] || paymentsContent.es;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${content.title} | Zenithium Solutions`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", content.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", `${content.title} | Zenithium Solutions`);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", content.description);
    return;
  }, [content.description, content.title]);

  return (
    <div className="site-shell min-h-screen">
      <header className="border-b border-white/10 px-5 py-5 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1000px] items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" aria-label="Zenithium">
            <img src={logo} alt="" className="h-10 w-10 rounded-xl object-cover" />
            <span className="hidden text-base font-semibold tracking-[-0.03em] text-white min-[420px]:inline">Zenithium</span>
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLanguage(isSpanish ? "en" : "es")}
              className="flex h-10 min-w-10 items-center justify-center rounded-full border border-white/10 px-3 text-xs font-semibold text-muted-foreground transition hover:border-white/20 hover:text-white"
              aria-label={content.switchLanguage}
            >
              {isSpanish ? "EN" : "ES"}
            </button>
            <Link
              to="/"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 px-3 text-xs font-medium text-muted-foreground transition hover:border-white/20 hover:text-white sm:px-4"
              aria-label={content.backHome}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{content.backHome}</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[900px]">
          <div className="eyebrow-line mb-6">Zenithium Solutions</div>
          <h1 className="section-heading text-white">{content.title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">{content.intro}</p>

          <div className="mt-10 space-y-6">
            {SUBSCRIPTIONS.map((subscription) => (
              <article key={subscription.id} className="glass-card grid overflow-hidden lg:grid-cols-[0.9fr_1.1fr]">
                <div className="border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r">
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">{subscription.content[language]?.name || subscription.content.es.name}</h2>
                  <div className="mt-5 flex items-end gap-2">
                    <span className="text-3xl font-semibold tracking-[-0.04em] text-white">{subscription.content[language]?.price || subscription.content.es.price}</span>
                    <span className="pb-1 text-sm text-muted-foreground">{subscription.content[language]?.period || subscription.content.es.period}</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{subscription.content[language]?.description || subscription.content.es.description}</p>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#c9c4d6]">{content.includesTitle}</p>
                  <ul className="mt-3 space-y-3">
                    {(subscription.content[language]?.features || subscription.content.es.features).map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-accent-neon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-dim">{content.scopeTitle}</p>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{subscription.content[language]?.scope || subscription.content.es.scope}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-center bg-white/[0.025] p-7 sm:p-9">
                  <span className="mb-6 flex w-fit items-center gap-2 rounded-full border border-accent-neon/20 bg-accent-neon/10 px-3 py-1.5 text-[11px] font-semibold text-accent-neon">
                    <CreditCard className="h-3.5 w-3.5" />
                    {content.cardEyebrow}
                  </span>
                  <div className="mb-6 flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-neon/10 text-accent-neon">
                      <LockKeyhole className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{content.securityTitle} {subscription.providerName}</p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">{content.securityDescription}</p>
                    </div>
                  </div>

                  <p className="mb-6 rounded-xl border border-accent-neon/20 bg-accent-neon/[0.06] px-4 py-3 text-sm leading-6 text-[#d9f8ee]">
                    {subscription.content[language]?.billingNotice || subscription.content.es.billingNotice}
                  </p>

                  <SubscriptionPayment copy={content.paypal} subscription={subscription} />

                  <p className="mt-5 text-center text-[11px] leading-5 text-text-dim">
                    {content.legalPrefix}{" "}
                    <Link to="/terminos-y-condiciones/" className="text-muted-foreground underline decoration-white/20 underline-offset-4 transition hover:text-white">{content.terms}</Link>{" "}
                    {content.legalConnector}{" "}
                    <Link to="/politica-de-privacidad/" className="text-muted-foreground underline decoration-white/20 underline-offset-4 transition hover:text-white">{content.privacy}</Link>.
                  </p>
                </div>
              </article>
            ))}
          </div>

          <aside className="mt-8 flex flex-col items-start gap-4 rounded-[1.5rem] border border-accent-neon/20 bg-accent-neon/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-sm font-semibold text-white">{content.contactTitle}</p>
              <p className="mt-1 text-xs text-muted-foreground">{content.contactDescription}</p>
            </div>
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 text-sm font-medium text-accent-neon transition hover:text-white">
              <Mail className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}