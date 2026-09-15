import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { LanguageContext } from "@/context/LanguageProvider";
import logo from "@/assets/logo.png";

const CONTACT_EMAIL = "zenithiumsolutions@gmail.com";

const termsContentEs = {
  title: "Términos y Condiciones",
  description: "Términos y Condiciones de contratación de los servicios digitales de Zenithium Solutions.",
  intro: "Estos Términos y Condiciones regulan la contratación y el uso de los servicios digitales prestados por Zenithium Solutions. Al aceptar una propuesta, realizar un pago o utilizar un servicio, el cliente acepta estas condiciones junto con el alcance particular acordado.",
  sections: [
    {
      title: "1. Descripción de los servicios",
      paragraphs: [
        "Zenithium Solutions ofrece servicios digitales para empresas, incluyendo desarrollo de software a medida, desarrollo web, automatizaciones y soluciones de inteligencia artificial. Según cada proyecto, también pueden incluirse consultoría tecnológica, diseño UI/UX, APIs, backend, infraestructura en la nube, mantenimiento y soporte.",
        "El alcance, los entregables y los plazos de cada servicio se detallan en la propuesta, presupuesto u orden de contratación correspondiente. Zenithium Solutions no comercializa ni envía productos físicos, por lo que no aplica una política de envíos.",
      ],
    },
    {
      title: "2. Contratación",
      paragraphs: [
        "La contratación queda confirmada cuando el cliente acepta por escrito la propuesta o presupuesto, confirma una orden de servicio o realiza el pago solicitado. Antes de contratar se informarán el alcance, precio, moneda, modalidad de trabajo, plazos estimados y condiciones particulares aplicables.",
        "Los cambios de alcance solicitados luego de la contratación pueden requerir una nueva estimación de precio y plazo, que deberá ser aceptada por ambas partes.",
      ],
    },
    {
      title: "3. Pagos y suscripciones",
      paragraphs: [
        "Los importes, moneda, impuestos aplicables, vencimientos y etapas de pago se informan antes de confirmar la contratación. Los pagos pueden procesarse mediante dLocal Go u otro medio de pago acordado con el cliente. El uso del procesador de pagos también se encuentra sujeto a sus propios términos y políticas.",
        "Cuando se contrate una suscripción o servicio recurrente, el precio y la frecuencia de cobro —semanal, mensual, trimestral, semestral, anual u otra expresamente informada— se mostrarán antes de confirmar el pago. Al contratar, el cliente autoriza los cobros recurrentes correspondientes.",
      ],
    },
    {
      title: "4. Renovación",
      paragraphs: [
        "Los servicios recurrentes se renovarán automáticamente por períodos iguales al contratado únicamente cuando esa condición haya sido informada antes del pago. La renovación continuará hasta que el cliente solicite la cancelación. Cualquier cambio de precio o de condiciones será comunicado antes de aplicarse a un nuevo período.",
      ],
    },
    {
      title: "5. Cancelación",
      paragraphs: [
        `El cliente puede solicitar la cancelación escribiendo a ${CONTACT_EMAIL}. En las suscripciones, la solicitud realizada antes de la próxima fecha de cobro evita renovaciones y cargos futuros; el servicio permanecerá disponible hasta finalizar el período ya abonado, salvo que se acuerde algo distinto.`,
        "En proyectos de pago único o por etapas, la cancelación no elimina la obligación de abonar el trabajo ya realizado, los entregables aprobados ni los costos de terceros asumidos para el proyecto. Las condiciones particulares de la propuesta aceptada tendrán prioridad cuando establezcan un procedimiento diferente.",
      ],
    },
    {
      title: "6. Reembolsos",
      paragraphs: [
        "Se realizará un reembolso total cuando exista un cobro duplicado o incorrecto verificado, o cuando Zenithium Solutions cancele el servicio antes de comenzar y no pueda ofrecer una alternativa aceptada por el cliente.",
        "Si el cliente cancela antes del inicio, se reintegrará el importe abonado menos los costos de terceros no recuperables. Si el trabajo ya comenzó, podrá corresponder un reembolso proporcional únicamente por la parte no ejecutada; el trabajo realizado, los entregables entregados y los costos no recuperables no son reembolsables.",
        "En suscripciones, el período ya iniciado no es reembolsable, excepto ante un error de cobro, falta de prestación del servicio o cuando la normativa aplicable disponga lo contrario. Las solicitudes deben enviarse por email con los datos de la operación y serán respondidas dentro de diez días hábiles. Una vez aprobado el reembolso, el tiempo de acreditación dependerá del medio de pago utilizado.",
      ],
    },
    {
      title: "7. Responsabilidades",
      paragraphs: [
        "Zenithium Solutions se compromete a prestar los servicios con criterios profesionales y de acuerdo con el alcance aceptado. El cliente debe proporcionar información, accesos, materiales y aprobaciones correctas y oportunas, y utilizar los entregables de manera lícita.",
        "Zenithium Solutions no será responsable por demoras o interrupciones ocasionadas por información incompleta del cliente, servicios de terceros, fallas de proveedores, cambios en plataformas externas o situaciones de fuerza mayor. Cualquier garantía o nivel de servicio específico deberá constar en la propuesta o contrato correspondiente.",
      ],
    },
    {
      title: "8. Propiedad intelectual y confidencialidad",
      paragraphs: [
        "La titularidad y las licencias sobre código, diseños, contenidos y otros entregables se regirán por la propuesta o contrato de cada proyecto. Cada parte deberá respetar los derechos de terceros y mantener la confidencialidad de la información no pública recibida durante la prestación del servicio.",
      ],
    },
    {
      title: "9. Contacto",
      paragraphs: [
        `Para consultas, cancelaciones, reclamos o solicitudes de reembolso, escribí a ${CONTACT_EMAIL}. Zenithium Solutions tiene su base de operaciones en Mar del Plata, Buenos Aires, Argentina.`,
      ],
    },
  ],
};

const privacyContentEs = {
  title: "Política de Privacidad",
  description: "Política de Privacidad de Zenithium Solutions y tratamiento de datos personales.",
  intro: "Esta Política de Privacidad explica cómo Zenithium Solutions recopila, utiliza y protege los datos personales de quienes visitan el sitio, realizan una consulta o contratan un servicio.",
  sections: [
    {
      title: "1. Datos que recopilamos",
      paragraphs: [
        "Podemos recopilar los datos que el usuario proporciona mediante el formulario de contacto o por otros canales, como nombre, email, empresa, teléfono, contenido del mensaje e información necesaria para preparar una propuesta o prestar un servicio.",
        "También podemos recibir datos técnicos y de uso, como dirección IP, tipo de dispositivo, navegador, páginas visitadas e interacciones con el sitio. Si se realiza un pago, podemos recibir información sobre la operación, como importe, moneda, fecha y estado, pero no almacenamos los datos completos de tarjetas.",
      ],
    },
    {
      title: "2. Para qué usamos los datos",
      paragraphs: [
        "Utilizamos los datos para responder consultas, preparar propuestas, contratar y prestar servicios, gestionar pagos y suscripciones, brindar soporte, mantener la seguridad del sitio, cumplir obligaciones legales y mejorar la experiencia y el rendimiento de la web.",
      ],
    },
    {
      title: "3. Formularios, analítica y cookies",
      paragraphs: [
        "El formulario de contacto es procesado mediante Formspree. El sitio utiliza herramientas de Google, como Google Tag Manager y Google Ads, que pueden emplear cookies o tecnologías similares para obtener métricas de uso y medir campañas.",
        "El usuario puede limitar o eliminar cookies desde la configuración de su navegador. Algunas funciones de medición pueden verse afectadas al hacerlo.",
      ],
    },
    {
      title: "4. Pagos",
      paragraphs: [
        "Cuando un pago se procesa mediante dLocal Go u otro proveedor habilitado, los datos necesarios para la transacción son tratados directamente por ese proveedor conforme a sus propios términos y políticas de privacidad. Zenithium Solutions recibe únicamente la información necesaria para identificar, confirmar y administrar la operación.",
      ],
    },
    {
      title: "5. Proveedores y divulgación de datos",
      paragraphs: [
        "Podemos compartir datos únicamente con proveedores que resulten necesarios para operar el sitio y prestar los servicios, como alojamiento, formularios, analítica, comunicaciones y procesamiento de pagos. También podremos comunicarlos cuando exista una obligación legal o sea necesario proteger derechos y prevenir fraude.",
        "Zenithium Solutions no vende ni alquila datos personales a terceros.",
      ],
    },
    {
      title: "6. Conservación",
      paragraphs: [
        "Los datos se conservan durante el tiempo necesario para responder la consulta, prestar el servicio, mantener la relación contractual y cumplir obligaciones legales, contables o de seguridad. Luego se eliminan o anonimizan cuando dejan de ser necesarios.",
      ],
    },
    {
      title: "7. Seguridad",
      paragraphs: [
        "Aplicamos medidas técnicas y organizativas razonables para proteger la información frente a accesos no autorizados, pérdida, alteración o divulgación. Ningún sistema es completamente infalible, pero revisamos las medidas de acuerdo con la naturaleza de los datos tratados.",
      ],
    },
    {
      title: "8. Derechos de los usuarios",
      paragraphs: [
        `El usuario puede solicitar acceso, corrección, actualización o eliminación de sus datos, retirar su consentimiento u oponerse a determinados tratamientos escribiendo a ${CONTACT_EMAIL}. Podremos solicitar información razonable para verificar su identidad antes de responder.`,
      ],
    },
    {
      title: "9. Transferencias internacionales",
      paragraphs: [
        "Algunos proveedores tecnológicos pueden procesar información fuera del país del usuario. En esos casos procuramos trabajar con proveedores que apliquen medidas adecuadas de privacidad y seguridad.",
      ],
    },
    {
      title: "10. Cambios y contacto",
      paragraphs: [
        `Podemos actualizar esta Política de Privacidad para reflejar cambios operativos o normativos. La versión vigente estará siempre publicada en esta página. Para consultas sobre privacidad, escribí a ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};

const termsContentEn = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for contracting digital services from Zenithium Solutions.",
  intro: "These Terms and Conditions govern the contracting and use of the digital services provided by Zenithium Solutions. By accepting a proposal, making a payment, or using a service, the client accepts these conditions together with the specific scope agreed upon.",
  sections: [
    {
      title: "1. Description of services",
      paragraphs: [
        "Zenithium Solutions provides digital services for businesses, including custom software development, web development, automation, and artificial intelligence solutions. Depending on the project, services may also include technology consulting, UI/UX design, APIs, backend development, cloud infrastructure, maintenance, and support.",
        "The scope, deliverables, and deadlines for each service are detailed in the corresponding proposal, quote, or service order. Zenithium Solutions does not sell or ship physical products, so no shipping policy applies.",
      ],
    },
    {
      title: "2. Contracting",
      paragraphs: [
        "The engagement is confirmed when the client accepts the proposal or quote in writing, confirms a service order, or makes the requested payment. Before contracting, the applicable scope, price, currency, working method, estimated timeline, and specific conditions will be communicated.",
        "Changes to the scope requested after contracting may require a new price and timeline estimate, which must be accepted by both parties.",
      ],
    },
    {
      title: "3. Payments and subscriptions",
      paragraphs: [
        "Amounts, currency, applicable taxes, due dates, and payment stages are communicated before the engagement is confirmed. Payments may be processed through dLocal Go or another payment method agreed upon with the client. Use of the payment processor is also subject to its own terms and policies.",
        "When a subscription or recurring service is contracted, the price and billing frequency—weekly, monthly, quarterly, semiannual, annual, or another expressly stated frequency—will be displayed before payment is confirmed. By contracting, the client authorizes the corresponding recurring charges.",
      ],
    },
    {
      title: "4. Renewal",
      paragraphs: [
        "Recurring services will automatically renew for periods equal to the contracted term only when this condition was disclosed before payment. Renewal will continue until the client requests cancellation. Any change in price or conditions will be communicated before it applies to a new period.",
      ],
    },
    {
      title: "5. Cancellation",
      paragraphs: [
        `The client may request cancellation by writing to ${CONTACT_EMAIL}. For subscriptions, a request made before the next billing date prevents future renewals and charges; the service will remain available until the end of the paid period unless otherwise agreed.`,
        "For one-time or milestone-based projects, cancellation does not remove the obligation to pay for work already completed, approved deliverables, or third-party costs incurred for the project. The specific conditions in the accepted proposal will take precedence when they establish a different procedure.",
      ],
    },
    {
      title: "6. Refunds",
      paragraphs: [
        "A full refund will be issued when a duplicate or incorrect charge is verified, or when Zenithium Solutions cancels the service before work begins and cannot offer an alternative accepted by the client.",
        "If the client cancels before work begins, the amount paid will be refunded less any non-recoverable third-party costs. If work has already begun, a proportional refund may apply only to the unperformed portion; completed work, delivered deliverables, and non-recoverable costs are non-refundable.",
        "For subscriptions, a period that has already begun is non-refundable, except in the event of a billing error, failure to provide the service, or when applicable law provides otherwise. Requests must be sent by email with the transaction details and will be answered within ten business days. Once a refund is approved, the time required for funds to be credited will depend on the payment method used.",
      ],
    },
    {
      title: "7. Responsibilities",
      paragraphs: [
        "Zenithium Solutions undertakes to provide its services professionally and in accordance with the accepted scope. The client must provide accurate and timely information, access, materials, and approvals, and must use the deliverables lawfully.",
        "Zenithium Solutions will not be responsible for delays or interruptions caused by incomplete client information, third-party services, provider failures, changes to external platforms, or force majeure events. Any specific warranty or service level must be included in the corresponding proposal or contract.",
      ],
    },
    {
      title: "8. Intellectual property and confidentiality",
      paragraphs: [
        "Ownership and licenses concerning code, designs, content, and other deliverables will be governed by the proposal or contract for each project. Each party must respect third-party rights and maintain the confidentiality of non-public information received while the service is being provided.",
      ],
    },
    {
      title: "9. Contact",
      paragraphs: [
        `For questions, cancellations, complaints, or refund requests, write to ${CONTACT_EMAIL}. Zenithium Solutions is based in Mar del Plata, Buenos Aires, Argentina.`,
      ],
    },
  ],
};

const privacyContentEn = {
  title: "Privacy Policy",
  description: "Zenithium Solutions Privacy Policy and information about personal data processing.",
  intro: "This Privacy Policy explains how Zenithium Solutions collects, uses, and protects the personal data of people who visit the website, submit an inquiry, or contract a service.",
  sections: [
    {
      title: "1. Data we collect",
      paragraphs: [
        "We may collect information that users provide through the contact form or other channels, such as name, email address, company, telephone number, message content, and information required to prepare a proposal or provide a service.",
        "We may also receive technical and usage data, such as IP address, device type, browser, pages visited, and interactions with the website. If a payment is made, we may receive information about the transaction, such as amount, currency, date, and status, but we do not store complete card details.",
      ],
    },
    {
      title: "2. How we use data",
      paragraphs: [
        "We use data to respond to inquiries, prepare proposals, contract and provide services, manage payments and subscriptions, provide support, maintain website security, comply with legal obligations, and improve the website experience and performance.",
      ],
    },
    {
      title: "3. Forms, analytics, and cookies",
      paragraphs: [
        "The contact form is processed through Formspree. The website uses Google tools, such as Google Tag Manager and Google Ads, which may use cookies or similar technologies to obtain usage metrics and measure campaigns.",
        "Users can restrict or delete cookies through their browser settings. Some measurement features may be affected by doing so.",
      ],
    },
    {
      title: "4. Payments",
      paragraphs: [
        "When a payment is processed through dLocal Go or another enabled provider, the data required for the transaction is handled directly by that provider in accordance with its own terms and privacy policies. Zenithium Solutions receives only the information required to identify, confirm, and manage the transaction.",
      ],
    },
    {
      title: "5. Service providers and data disclosure",
      paragraphs: [
        "We may share data only with providers required to operate the website and deliver services, such as hosting, forms, analytics, communications, and payment processing providers. We may also disclose data when legally required or when necessary to protect rights and prevent fraud.",
        "Zenithium Solutions does not sell or rent personal data to third parties.",
      ],
    },
    {
      title: "6. Data retention",
      paragraphs: [
        "Data is retained for as long as necessary to respond to an inquiry, provide the service, maintain the contractual relationship, and comply with legal, accounting, or security obligations. It is then deleted or anonymized when no longer required.",
      ],
    },
    {
      title: "7. Security",
      paragraphs: [
        "We apply reasonable technical and organizational measures to protect information against unauthorized access, loss, alteration, or disclosure. No system is completely infallible, but we review these measures according to the nature of the data processed.",
      ],
    },
    {
      title: "8. User rights",
      paragraphs: [
        `Users may request access to, correction, updating, or deletion of their data, withdraw consent, or object to certain processing activities by writing to ${CONTACT_EMAIL}. We may request reasonable information to verify their identity before responding.`,
      ],
    },
    {
      title: "9. International transfers",
      paragraphs: [
        "Some technology providers may process information outside the user's country. In such cases, we seek to work with providers that apply appropriate privacy and security measures.",
      ],
    },
    {
      title: "10. Changes and contact",
      paragraphs: [
        `We may update this Privacy Policy to reflect operational or regulatory changes. The current version will always be published on this page. For privacy-related questions, write to ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};

const legalUi = {
  es: {
    backHome: "Volver al inicio",
    contactTitle: "Contacto de Zenithium Solutions",
    contactDescription: "Consultas sobre estas políticas o sobre nuestros servicios.",
    switchLanguage: "Switch to English",
  },
  en: {
    backHome: "Back to home",
    contactTitle: "Contact Zenithium Solutions",
    contactDescription: "Questions about these policies or our services.",
    switchLanguage: "Cambiar a español",
  },
};

function LegalPage({ page }) {
  const { language, setLanguage } = useContext(LanguageContext);
  const isSpanish = language === "es";
  const content = page === "terms"
    ? (isSpanish ? termsContentEs : termsContentEn)
    : (isSpanish ? privacyContentEs : privacyContentEn);
  const ui = legalUi[language] || legalUi.es;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${content.title} | Zenithium Solutions`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", content.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", `${content.title} | Zenithium Solutions`);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", content.description);
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
              aria-label={ui.switchLanguage}
            >
              {isSpanish ? "EN" : "ES"}
            </button>
            <Link
              to="/"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 px-3 text-xs font-medium text-muted-foreground transition hover:border-white/20 hover:text-white sm:px-4"
              aria-label={ui.backHome}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{ui.backHome}</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[900px]">
          <div className="eyebrow-line mb-6">Zenithium Solutions</div>
          <h1 className="section-heading text-white">{content.title}</h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-muted-foreground">{content.intro}</p>

          <div className="glass-card mt-12 divide-y divide-white/10 overflow-hidden px-6 sm:px-10">
            {content.sections.map((section) => (
              <section key={section.title} className="py-8 sm:py-10">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">{section.title}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="mt-8 flex flex-col items-start gap-4 rounded-[1.5rem] border border-accent-neon/20 bg-accent-neon/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-sm font-semibold text-white">{ui.contactTitle}</p>
              <p className="mt-1 text-xs text-muted-foreground">{ui.contactDescription}</p>
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

export function TermsPage() {
  return <LegalPage page="terms" />;
}

export function PrivacyPage() {
  return <LegalPage page="privacy" />;
}