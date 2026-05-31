import type { Metadata } from "next";
import { WHATSAPP_URL } from "@/constants";

export const metadata: Metadata = {
  title: "Cookie-Richtlinie — IPTV Germany",
  description: "Erfahren Sie, wie wir Cookies verwenden, um Ihr Erlebnis zu verbessern.",
  alternates: {
    canonical: "https://iptvgerman.de/cookie-policy",
  },
  openGraph: {
    title: "Cookie-Richtlinie — IPTV Germany",
    description: "Erfahren Sie, wie wir Cookies verwenden, um Ihr Erlebnis zu verbessern.",
    url: "https://iptvgerman.de/cookie-policy",
    siteName: "IPTV Germany",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie-Richtlinie — IPTV Germany",
    description: "Erfahren Sie, wie wir Cookies verwenden, um Ihr Erlebnis zu verbessern.",
  },
};

const CookiePolicyPage = () => {
  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
              Rechtlich
            </span>
            <h1 className="font-display font-black text-4xl sm:text-6xl mb-6 text-blanc-50 leading-tight">
              <span className="text-gradient">Cookie</span>-Richtlinie
            </h1>
            <p className="text-blanc-400 text-lg">
              Zuletzt aktualisiert: 6. Mai 2026
            </p>
          </div>

          <div className="glass rounded-2xl p-5 sm:p-8 lg:p-12 space-y-10 sm:space-y-12 animate-slide-up">
            <section>
              <h2 className="text-2xl font-bold text-blanc-50 mb-4">Was Sind Cookies?</h2>
              <p className="text-blanc-300 leading-relaxed">
                Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie helfen der Website, Ihr Gerät zu erkennen und Informationen über Ihren Besuch zu speichern, wie z.B. Ihre bevorzugte Sprache und andere Einstellungen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blanc-50 mb-4">Wie Wir Cookies Verwenden</h2>
              <p className="text-blanc-300 mb-6">
                Wir verwenden Cookies für folgende Zwecke:
              </p>
              <div className="grid gap-4">
                {[
                  { title: "Notwendige Cookies", desc: "Erforderlich für das ordnungsgemäße Funktionieren der Website, wie Sitzungsverwaltung und Sicherheit." },
                  { title: "Präferenz-Cookies", desc: "Speichern Ihre Einstellungen und Auswahlmöglichkeiten, um ein personalisierteres Erlebnis zu bieten." },
                  { title: "Analyse-Cookies", desc: "Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie anonyme Daten sammeln." }
                ].map((cookie, index) => (
                  <div key={index} className="p-4 rounded-xl bg-blanc-50/5 border border-blanc-50/10">
                    <h3 className="text-blanc-50 font-bold mb-1">{cookie.title}</h3>
                    <p className="text-blanc-400 text-sm">{cookie.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blanc-50 mb-4">Cookies Verwalten</h2>
              <p className="text-blanc-300 leading-relaxed">
                Die meisten Webbrowser ermöglichen Ihnen die Verwaltung von Cookies über ihre Einstellungen. Sie können wählen, ob Sie alle Cookies oder nur Cookies von Drittanbietern blockieren möchten. Beachten Sie jedoch, dass die Deaktivierung wesentlicher Cookies die Funktionalität unseres Dienstes beeinträchtigen kann.
              </p>
            </section>

            <section className="pt-8 border-t border-blanc-50/10">
              <h2 className="text-xl font-bold text-blanc-50 mb-4">Kontaktieren Sie Uns</h2>
              <p className="text-blanc-300">
                Wenn Sie Fragen zu unserer Verwendung von Cookies haben, kontaktieren Sie
                uns bitte über{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-france-500 hover:underline"
                >
                  WhatsApp
                </a>.
              </p>
            </section>
        </div>
      </div>
    </main>
  );
};

export default CookiePolicyPage;
