import type { Metadata } from "next";
import { Info, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/constants";

export const metadata: Metadata = {
  title: "Conditions Générales — IPTV SERVICE",
  description: "Lisez nos conditions générales pour comprendre vos droits et responsabilités.",
  alternates: {
    canonical: "https://iptvstreaming.nl/terms-of-service",
  },
  openGraph: {
    title: "Conditions Générales — IPTV SERVICE",
    description: "Lisez nos conditions générales pour comprendre vos droits et responsabilités.",
    url: "https://iptvstreaming.nl/terms-of-service",
    siteName: "IPTV SERVICE",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conditions Générales — IPTV SERVICE",
    description: "Lisez nos conditions générales pour comprendre vos droits et responsabilités.",
  },
};

const TermsOfServicePage = () => {
  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-500 text-sm font-bold mb-4 uppercase tracking-wider glow-purple">
            Juridique
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6 text-blanc-50 leading-tight">
            Conditions <span className="text-gradient">Générales</span>
          </h1>
          <p className="text-blanc-400 text-lg">
            Dernière mise à jour : 6 mai 2026
          </p>
        </div>

        <div className="glass rounded-2xl p-5 sm:p-8 lg:p-12 space-y-10 sm:space-y-12 animate-slide-up">
          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">1. Acceptation des Conditions</h2>
            <p className="text-blanc-300 leading-relaxed">
              En visitant ou en utilisant IPTV SERVICE, vous acceptez ces Conditions Générales. Si vous n'acceptez pas toutes les conditions, vous ne devez pas utiliser le service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">2. Description du Service</h2>
            <p className="text-blanc-300 leading-relaxed">
              IPTV SERVICE propose un service d'abonnement IPTV permettant aux utilisateurs d'accéder à des chaînes de télévision en direct et à du contenu vidéo à la demande via Internet. La disponibilité du contenu peut varier selon la région et est sujette à modifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">3. Obligations de l'Utilisateur</h2>
            <ul className="space-y-4">
              {[
                "Vous devez avoir au moins 18 ans pour utiliser ce service.",
                "Vous êtes responsable de la confidentialité de votre compte.",
                "Le service est exclusivement réservé à un usage personnel et non commercial.",
                "Vous acceptez de ne pas redistribuer ou diffuser le contenu proposé.",
                "Un abonnement est valable uniquement pour le nombre de connexions d'appareils spécifié."
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-blanc-300">
                  <Info
                    className="mt-1 h-5 w-5 shrink-0 text-rouge-500"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">4. Paiement et Remboursements</h2>
            <p className="text-blanc-300 leading-relaxed">
              Les abonnements sont facturés à l'avance sur une base récurrente. Tous les paiements sont non remboursables, sauf si requis par la loi ou spécifié dans notre politique de remboursement. Nous nous réservons le droit de modifier nos prix à tout moment moyennant un préavis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">5. Limitation de Responsabilité</h2>
            <p className="text-blanc-300 leading-relaxed">
              IPTV SERVICE n'est pas responsable des dommages indirects, accessoires, spéciaux ou consécutifs découlant de l'utilisation ou de l'incapacité à utiliser le service.
            </p>
          </section>

          <section className="pt-8 border-t border-blanc-50/10 text-center">
            <p className="text-blanc-400 mb-6 font-medium">
              Besoin d'éclaircissements sur nos conditions ?
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-blanc-50 font-bold hover:bg-blanc-50/10 transition-all border border-blanc-50/10"
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

export default TermsOfServicePage;
