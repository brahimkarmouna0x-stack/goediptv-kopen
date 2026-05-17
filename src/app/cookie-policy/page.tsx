import type { Metadata } from "next";
import { WHATSAPP_URL } from "@/constants";

export const metadata: Metadata = {
  title: "Politique des Cookies — IPTV SERVICE",
  description: "Découvrez comment nous utilisons les cookies pour améliorer votre expérience.",
  alternates: {
    canonical: "https://iptvstreaming.nl/cookie-policy",
  },
  openGraph: {
    title: "Politique des Cookies — IPTV SERVICE",
    description: "Découvrez comment nous utilisons les cookies pour améliorer votre expérience.",
    url: "https://iptvstreaming.nl/cookie-policy",
    siteName: "IPTV SERVICE",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Politique des Cookies — IPTV SERVICE",
    description: "Découvrez comment nous utilisons les cookies pour améliorer votre expérience.",
  },
};

const CookiePolicyPage = () => {
  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-france-500 text-sm font-bold mb-4 uppercase tracking-wider glow-blue">
              Juridique
            </span>
            <h1 className="font-display font-black text-4xl sm:text-6xl mb-6 text-blanc-50 leading-tight">
              Politique des <span className="text-gradient">Cookies</span>
            </h1>
            <p className="text-blanc-400 text-lg">
              Dernière mise à jour : 6 mai 2026
            </p>
          </div>

          <div className="glass rounded-2xl p-5 sm:p-8 lg:p-12 space-y-10 sm:space-y-12 animate-slide-up">
            <section>
              <h2 className="text-2xl font-bold text-blanc-50 mb-4">Que Sont les Cookies ?</h2>
              <p className="text-blanc-300 leading-relaxed">
                Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez un site web. Ils aident le site à reconnaître votre appareil et à mémoriser des informations sur votre visite, comme votre langue préférée et d'autres paramètres.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blanc-50 mb-4">Comment Nous Utilisons les Cookies</h2>
              <p className="text-blanc-300 mb-6">
                Nous utilisons les cookies aux fins suivantes :
              </p>
              <div className="grid gap-4">
                {[
                  { title: "Cookies Essentiels", desc: "Nécessaires au bon fonctionnement du site web, comme la gestion de session et la sécurité." },
                  { title: "Cookies de Préférence", desc: "Mémorisent vos paramètres et choix pour offrir une expérience plus personnalisée." },
                  { title: "Cookies Analytiques", desc: "Nous aident à comprendre comment les visiteurs interagissent avec notre site en collectant des données anonymes." }
                ].map((cookie, index) => (
                  <div key={index} className="p-4 rounded-xl bg-blanc-50/5 border border-blanc-50/10">
                    <h3 className="text-blanc-50 font-bold mb-1">{cookie.title}</h3>
                    <p className="text-blanc-400 text-sm">{cookie.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blanc-50 mb-4">Gérer les Cookies</h2>
              <p className="text-blanc-300 leading-relaxed">
                La plupart des navigateurs web vous permettent de gérer les cookies via leurs paramètres. Vous pouvez choisir de bloquer tous les cookies ou uniquement les cookies tiers. Notez toutefois que la désactivation des cookies essentiels peut affecter le fonctionnement de notre service.
              </p>
            </section>

            <section className="pt-8 border-t border-blanc-50/10">
              <h2 className="text-xl font-bold text-blanc-50 mb-4">Contactez-Nous</h2>
              <p className="text-blanc-300">
                Si vous avez des questions sur notre utilisation des cookies, veuillez nous
                contacter via{" "}
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
