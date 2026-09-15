import { useContext, useState } from "react";
import { MessageCircle } from "lucide-react";
import { LanguageContext } from "../../context/LanguageProvider";

export default function WhatsAppButton() {
  const [hover, setHover] = useState(false);
  const { t } = useContext(LanguageContext);

  return (
    <div
      className="fixed bottom-4 right-4 z-40 flex flex-col items-end sm:bottom-6 sm:right-6"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <div className="mb-2 rounded-full border border-white/10 bg-[#090b48]/95 px-4 py-2 text-xs text-white shadow-xl backdrop-blur-xl">
          {t("whatsappHoverText")}
        </div>
      )}
      <a
        href="https://wa.me/5492235582433"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("whatsappHoverText")}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#25D366] text-white shadow-[0_14px_40px_rgba(37,211,102,0.3)] transition hover:-translate-y-1 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}