import { useContext } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageProvider";
import logo from "../../assets/logo.png";

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.3 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.6.4 3.8.7c-.9.3-1.7.7-2.4 1.4-.7.7-1.1 1.5-1.4 2.4-.3.8-.5 1.9-.6 3.2C0 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.3.3 2.4.6 3.2.3.9.7 1.7 1.4 2.4.7.7 1.5 1.1 2.4 1.4.8.3 1.9.5 3.2.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.4-.3 3.2-.6.9-.3 1.7-.7 2.4-1.4.7-.7 1.1-1.5 1.4-2.4.3-.8.5-1.9.6-3.2.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.4-.6-3.2-.3-.9-.7-1.7-1.4-2.4-.7-.7-1.5-1.1-2.4-1.4-.8-.3-1.9-.5-3.2-.6C15.7 0 15.3 0 12 0zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.6c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useContext(LanguageContext);
  const socialLinkClass = "flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition hover:border-accent-neon/30 hover:text-accent-neon";

  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1200px] items-center gap-7 text-center md:grid-cols-[1fr_1.35fr_1fr] md:text-left">
        <div>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center gap-3" aria-label="Zenithium">
            <img src={logo} alt="" className="h-10 w-10 rounded-xl object-cover" />
            <span className="text-base font-semibold tracking-[-0.03em] text-white">Zenithium</span>
          </Link>
          <p className="mt-3 text-xs leading-5 text-muted-foreground">{t("footerDescription")}</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <a href="mailto:zenithiumsolutions@gmail.com" className="inline-flex items-center gap-2 text-xs font-medium text-[#c9c4d6] transition hover:text-accent-neon">
            <Mail className="h-4 w-4 text-accent-neon" />
            zenithiumsolutions@gmail.com
          </a>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] text-muted-foreground" aria-label={t("footerLegalNav")}>
            <Link to="/terminos-y-condiciones/" className="transition hover:text-white">{t("footerTerms")}</Link>
            <Link to="/politica-de-privacidad/" className="transition hover:text-white">{t("footerPrivacy")}</Link>
          </nav>
        </div>

        <div className="flex flex-col items-center gap-3 md:items-end">
          <div className="flex items-center gap-2">
            <a className={socialLinkClass} href="https://ar.linkedin.com/company/zenithium" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Zenithium"><Linkedin className="h-4 w-4" /></a>
            <a className={socialLinkClass} href="https://www.instagram.com/zenithium_solutions" target="_blank" rel="noopener noreferrer" aria-label="Instagram Zenithium"><InstagramIcon /></a>
            <a className={socialLinkClass} href="https://www.tiktok.com/@_zenithium_" target="_blank" rel="noopener noreferrer" aria-label="TikTok Zenithium"><FaTiktok className="h-4 w-4" /></a>
          </div>
          <div className="text-[10px] text-text-dim">{t("footerRights")}</div>
        </div>
      </div>
    </footer>
  );
}