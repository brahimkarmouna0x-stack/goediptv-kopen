import type { Metadata } from "next";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/constants";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — IPTV SERVICE",
  description: "Lisez notre politique de confidentialité pour comprendre comment nous protégeons vos données.",
  alternates: {
    canonical: "https://iptvstreaming.nl/privacy-policy",
  },
  openGraph: {
    title: "Politique de Confidentialité — IPTV SERVICE",
    description: "Lisez notre politique de confidentialité pour comprendre comment nous protégeons vos données.",
    url: "https://iptvstreaming.nl/privacy-policy",
    siteName: "IPTV SERVICE",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Politique de Confidentialité — IPTV SERVICE",
    description: "Lisez notre politique de confidentialité pour comprendre comment nous protégeons vos données.",
  },
};

const PrivacyPolicyPage = () => {
  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-500 text-sm font-bold mb-4 uppercase tracking-wider glow-blue">
            Juridique
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6 text-blanc-50 leading-tight">
            Politique de <span className="text-gradient">Confidentialité</span>
          </h1>
          <p className="text-blanc-400 text-lg">
            Dernière mise à jour : 6 mai 2026
          </p>
        </div>

        <div className="glass rounded-2xl p-5 sm:p-8 lg:p-12 space-y-10 sm:space-y-12 animate-slide-up">
          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">Introduction</h2>
            <p className="text-blanc-300 leading-relaxed">
              Chez IPTV SERVICE, nous prenons votre confidentialité au sérieux. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez nos services IPTV. En utilisant IPTV SERVICE, vous acceptez les conditions énoncées dans ce document.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">Informations Que Nous Collectons</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-blanc-50/5 border border-blanc-50/10">
                <h3 className="text-france-500 font-bold mb-2">Données Personnelles</h3>
                <p className="text-blanc-400 text-sm">
                  Cela inclut votre nom, votre adresse e-mail et vos informations de facturation utilisées lors du processus d'abonnement.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-blanc-50/5 border border-blanc-50/10">
                <h3 className="text-rouge-500 font-bold mb-2">Données d'Utilisation</h3>
                <p className="text-blanc-400 text-sm">
                  Nous collectons des informations sur la façon dont vous interagissez avec notre service, y compris le type d'appareil et les préférences de streaming.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">Comment Nous Utilisons Vos Données</h2>
            <ul className="space-y-4">
              {[
                "Pour fournir et maintenir notre Service",
                "Pour traiter vos paiements et gérer les abonnements",
                "Pour vous informer des modifications de notre Service",
                "Pour fournir un support client et une assistance technique",
                "Pour collecter des analyses ou des informations utiles afin d'améliorer notre Service"
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-blanc-300">
                  <CheckCircle2
                    className="mt-1 h-5 w-5 shrink-0 text-france-500"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">Sécurité des Données</h2>
            <p className="text-blanc-300 leading-relaxed">
              Nous mettons en œuvre des mesures de sécurité standard pour garantir la sécurité de vos informations personnelles. Toutes les transactions de paiement sont traitées via des passerelles sécurisées et ne sont pas stockées sur nos serveurs. Nous utilisons le chiffrement (SSL) pour protéger vos données pendant le transfert.
            </p>
          </section>

          <section className="pt-8 border-t border-blanc-50/10 text-center">
            <p className="text-blanc-400 mb-6 font-medium">
              Des questions sur notre politique de confidentialité ?
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-france-700 to-rouge-500 text-blanc-50 font-bold hover:shadow-lg hover:shadow-france-700/35 transition-all glow-blue"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Discuter sur WhatsApp
            </a>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
