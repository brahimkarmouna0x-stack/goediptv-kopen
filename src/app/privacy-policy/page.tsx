import type { Metadata } from "next";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/constants";

export const metadata: Metadata = {
  title: "Datenschutz — IPTV Germany",
  description: "Lesen Sie unsere Datenschutzerklärung, um zu verstehen, wie wir Ihre Daten schützen.",
  alternates: {
    canonical: "https://iptvgerman.de/privacy-policy",
  },
  openGraph: {
    title: "Datenschutz — IPTV Germany",
    description: "Lesen Sie unsere Datenschutzerklärung, um zu verstehen, wie wir Ihre Daten schützen.",
    url: "https://iptvgerman.de/privacy-policy",
    siteName: "IPTV Germany",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Datenschutz — IPTV Germany",
    description: "Lesen Sie unsere Datenschutzerklärung, um zu verstehen, wie wir Ihre Daten schützen.",
  },
};

const PrivacyPolicyPage = () => {
  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            Rechtlich
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6 text-blanc-50 leading-tight">
            <span className="text-gradient">Datenschutz</span>
          </h1>
          <p className="text-blanc-400 text-lg">
            Zuletzt aktualisiert: 6. Mai 2026
          </p>
        </div>

        <div className="glass rounded-2xl p-5 sm:p-8 lg:p-12 space-y-10 sm:space-y-12 animate-slide-up">
          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">Einleitung</h2>
            <p className="text-blanc-300 leading-relaxed">
              Bei IPTV German nehmen wir Ihren Datenschutz ernst. Diese Datenschutzerklärung erklärt, wie wir Ihre persönlichen Daten sammeln, verwenden und schützen, wenn Sie unsere IPTV-Dienste nutzen. Durch die Nutzung von IPTV German stimmen Sie den in diesem Dokument dargelegten Bedingungen zu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">Informationen, Die Wir Sammeln</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-blanc-50/5 border border-blanc-50/10">
                <h3 className="text-france-500 font-bold mb-2">Personenbezogene Daten</h3>
                <p className="text-blanc-400 text-sm">
                  Dies umfasst Ihren Namen, Ihre E-Mail-Adresse und Ihre Rechnungsinformationen, die während des Abonnementprozesses verwendet werden.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-blanc-50/5 border border-blanc-50/10">
                <h3 className="text-rouge-500 font-bold mb-2">Nutzungsdaten</h3>
                <p className="text-blanc-400 text-sm">
                  Wir sammeln Informationen darüber, wie Sie mit unserem Dienst interagieren, einschließlich Gerätetyp und Streaming-Präferenzen.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">Wie Wir Ihre Daten Verwenden</h2>
            <ul className="space-y-4">
              {[
                "Zur Bereitstellung und Wartung unseres Dienstes",
                "Zur Bearbeitung Ihrer Zahlungen und Verwaltung von Abonnements",
                "Um Sie über Änderungen unseres Dienstes zu informieren",
                "Zur Bereitstellung von Kundensupport und technischer Unterstützung",
                "Zur Sammlung von Analysen oder nützlichen Informationen zur Verbesserung unseres Dienstes"
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
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">Datensicherheit</h2>
            <p className="text-blanc-300 leading-relaxed">
              Wir implementieren standardmäßige Sicherheitsmaßnahmen, um die Sicherheit Ihrer persönlichen Daten zu gewährleisten. Alle Zahlungstransaktionen werden über sichere Gateways abgewickelt und nicht auf unseren Servern gespeichert. Wir verwenden Verschlüsselung (SSL), um Ihre Daten während der Übertragung zu schützen.
            </p>
          </section>

          <section className="pt-8 border-t border-blanc-50/10 text-center">
            <p className="text-blanc-400 mb-6 font-medium">
              Fragen zu unserer Datenschutzerklärung?
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-rouge-500 text-blanc-50 font-bold hover:bg-rouge-600 hover:-translate-y-0.5 transition-all glow-red"
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

export default PrivacyPolicyPage;
