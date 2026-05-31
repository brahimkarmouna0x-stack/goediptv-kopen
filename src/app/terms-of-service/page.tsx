import type { Metadata } from "next";
import { Info, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/constants";

export const metadata: Metadata = {
  title: "AGB — IPTV Germany",
  description: "Lesen Sie unsere Allgemeinen Geschäftsbedingungen, um Ihre Rechte und Pflichten zu verstehen.",
  alternates: {
    canonical: "https://iptvgerman.de/terms-of-service",
  },
  openGraph: {
    title: "AGB — IPTV Germany",
    description: "Lesen Sie unsere Allgemeinen Geschäftsbedingungen, um Ihre Rechte und Pflichten zu verstehen.",
    url: "https://iptvgerman.de/terms-of-service",
    siteName: "IPTV Germany",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AGB — IPTV Germany",
    description: "Lesen Sie unsere Allgemeinen Geschäftsbedingungen, um Ihre Rechte und Pflichten zu verstehen.",
  },
};

const TermsOfServicePage = () => {
  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-400 text-sm font-bold mb-4 uppercase tracking-wider glow-red">
            Rechtlich
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6 text-blanc-50 leading-tight">
            Allgemeine <span className="text-gradient">Geschäftsbedingungen</span>
          </h1>
          <p className="text-blanc-400 text-lg">
            Zuletzt aktualisiert: 6. Mai 2026
          </p>
        </div>

        <div className="glass rounded-2xl p-5 sm:p-8 lg:p-12 space-y-10 sm:space-y-12 animate-slide-up">
          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">1. Annahme der Bedingungen</h2>
            <p className="text-blanc-300 leading-relaxed">
              Durch den Besuch oder die Nutzung von IPTV German stimmen Sie diesen Allgemeinen Geschäftsbedingungen zu. Wenn Sie nicht allen Bedingungen zustimmen, dürfen Sie den Dienst nicht nutzen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">2. Beschreibung des Dienstes</h2>
            <p className="text-blanc-300 leading-relaxed">
              IPTV German bietet einen IPTV-Abonnementdienst, der Benutzern den Zugang zu Live-Fernsehsendern und Video-on-Demand-Inhalten über das Internet ermöglicht. Die Verfügbarkeit von Inhalten kann je nach Region variieren und ist Änderungen vorbehalten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">3. Pflichten des Nutzers</h2>
            <ul className="space-y-4">
              {[
                "Sie müssen mindestens 18 Jahre alt sein, um diesen Dienst zu nutzen.",
                "Sie sind für die Vertraulichkeit Ihres Kontos verantwortlich.",
                "Der Dienst ist ausschließlich für den persönlichen, nicht-kommerziellen Gebrauch bestimmt.",
                "Sie stimmen zu, die angebotenen Inhalte nicht weiterzuverbreiten oder zu veröffentlichen.",
                "Ein Abonnement gilt nur für die angegebene Anzahl von Geräteverbindungen."
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
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">4. Zahlung und Rückerstattungen</h2>
            <p className="text-blanc-300 leading-relaxed">
              Abonnements werden im Voraus auf wiederkehrender Basis abgerechnet. Alle Zahlungen sind nicht erstattungsfähig, sofern nicht gesetzlich vorgeschrieben oder in unserer Rückerstattungsrichtlinie festgelegt. Wir behalten uns das Recht vor, unsere Preise jederzeit mit Vorankündigung zu ändern.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">5. Haftungsbeschränkung</h2>
            <p className="text-blanc-300 leading-relaxed">
              IPTV German haftet nicht für indirekte, zufällige, besondere oder Folgeschäden, die aus der Nutzung oder der Unfähigkeit zur Nutzung des Dienstes entstehen.
            </p>
          </section>

          <section className="pt-8 border-t border-blanc-50/10 text-center">
            <p className="text-blanc-400 mb-6 font-medium">
              Benötigen Sie Klarstellungen zu unseren Bedingungen?
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-blanc-50 font-bold hover:bg-blanc-50/10 transition-all border border-blanc-50/10"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp Chat
            </a>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsOfServicePage;
