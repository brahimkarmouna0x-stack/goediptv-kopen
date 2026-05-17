import Link from "next/link";
import Logo, { LogoText } from "../shared/Logo";
import KeywordCloud from "../shared/KeywordCloud";
import { productsFooterLinks, supportFooterLinks } from "@/constants/data";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/constants";

const Footer = () => {
  return (
    <footer className="mt-15 border-t border-white/5 pt-20 pb-10 min-h-[300px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pages Links - SEO Keyword Engine (lazy, content-visibility) */}
        <KeywordCloud />

        {/* Main Grid */}
        <div className="footer-main-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16 text-center sm:text-left">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2 flex flex-col items-center sm:items-start">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-blanc-400 text-sm leading-relaxed mb-8 max-w-sm mt-6">
              L'expérience IPTV premium ultime. Plus de 25 000 chaînes, 4K
              Ultra HD et zéro buffering. Un divertissement sans limites.
            </p>
          </div>

          {/* Links Sections */}
          <ProductsLinks />
          <SupportLinks />

          {/* WhatsApp Support Section */}
          <div className="flex flex-col items-center sm:items-start p-6 rounded-2xl bg-white/2 border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-rouge-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="font-bold text-blanc-50 mb-4 flex items-center gap-2">
              <MessageCircle
                size={16}
                className="text-emerald-300"
                aria-hidden="true"
              />
              Support WhatsApp
            </h2>
            <p className="text-sm text-blanc-400 mb-6 leading-relaxed">
              Des questions sur l'installation, l'activation ou les abonnements ? Discutez directement
              avec notre équipe.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-black text-blanc-950 shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-colors hover:bg-emerald-300"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Discuter sur WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm text-blanc-500">
            &copy; 2026 <LogoText className="text-sm" />. Tous droits
            réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <FooterBottomLink label="Politique de confidentialité" href="/privacy-policy" />
            <FooterBottomLink
              label="Conditions générales"
              href="/terms-of-service"
            />
            <FooterBottomLink label="Politique des cookies" href="/cookie-policy" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterBottomLink = ({ label, href }: { label: string; href: string }) => (
  <Link
    href={href}
    className="text-xs font-medium text-blanc-500 hover:text-france-400 transition-colors hover-effect"
  >
    {label}
  </Link>
);

const ProductsLinks = () => {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <h2 className="text-sm font-black uppercase tracking-widest text-blanc-50/50 mb-6">
        Produit
      </h2>
      <ul className="space-y-4">
        {productsFooterLinks.map((link, idx) => (
          <li key={idx} className="group">
            <Link
              href={link.href}
              className="text-sm text-blanc-400 group-hover:text-france-500 transition-all flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-france-500 scale-0 group-hover:scale-100 transition-transform duration-300" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SupportLinks = () => {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <h2 className="text-sm font-black uppercase tracking-widest text-blanc-50/50 mb-6">
        Assistance
      </h2>
      <ul className="space-y-4">
        {supportFooterLinks.map((link, idx) => (
          <li key={idx} className="group">
            <Link
              href={link.href}
              className="text-sm text-blanc-400 group-hover:text-france-500 transition-all flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-france-500 scale-0 group-hover:scale-100 transition-transform duration-300" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
