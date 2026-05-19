import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  ShoppingCart,
  Key,
  PlayCircle,
} from "lucide-react";
import Trending from "@/components/sections/Trending";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "IPTV Pays-Bas — #1 Abonnement IPTV Premium (2026)",
  description:
    "Meilleur IPTV Pays-Bas & Belgique avec 31 000+ chaînes, 140 000+ VOD en qualité 4K/8K. Achetez IPTV avec support 24/7, activation immédiate et 100% stable.",
  path: "/iptv-streaming/iptv-nederland",
});

const IPTVNederland = () => {
  return (
    <main className="flex-1">
      {/* Bespoke Hero Section with Generated Background */}
      <Hero
        pillText="Le #1 Service IPTV des Pays-Bas"
        bgImage="/images/iptv-nederland-hero.webp"
        title={
          <>
            IPTV Premium <span className="text-gradient">Pays-Bas</span>
            <br className="hidden md:block" />
            L'Avenir de la Télévision
          </>
        }
        subtitle="Vivez un divertissement comme jamais auparavant avec l'abonnement IPTV le plus stable des Pays-Bas. 31 000+ chaînes en direct, 140 000+ films & séries en 4K/8K, et activation immédiate sur tous vos appareils."
      />

      <div className="space-y-32 pb-32">
        <Stats />

        {/* Guarantee Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-blanc-50/10 bg-linear-to-br from-france-900 to-france-950 p-8 lg:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck size={200} className="text-france-500" />
            </div>
            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                <ShieldCheck size={14} />
                Sans Risque
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-blanc-50 mb-6">
                Garantie Satisfait ou Remboursé
              </h2>
              <p className="text-xl text-blanc-300 leading-relaxed">
                Pas satisfait après l'achat IPTV ? Remboursement intégral –{" "}
                <span className="text-blanc-50 font-bold">sans complication.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-slide-up">
              <span className="text-france-500 font-bold uppercase tracking-widest text-sm mb-4 block">
                Pourquoi nous choisir
              </span>
              <h2 className="text-3xl lg:text-5xl font-black text-blanc-50 leading-tight mb-8">
                Pourquoi notre fournisseur IPTV est le{" "}
                <span className="text-gradient">meilleur choix</span> aux Pays-Bas
              </h2>
              <div className="space-y-6 text-blanc-300 text-lg leading-relaxed">
                <p>
                  En tant que l'un des principaux fournisseurs IPTV aux Pays-Bas,
                  nous nous concentrons sur ce qui compte vraiment :{" "}
                  <span className="text-blanc-50 font-semibold">
                    la stabilité, la vitesse et la fiabilité.
                  </span>{" "}
                  Notre infrastructure serveur est spécialement optimisée pour le
                  marché néerlandais – cela signifie une latence minimale, zéro
                  buffering et une disponibilité de 99,9 %.
                </p>
                <p>
                  Que ce soit pendant les heures de pointe de l'Eredivisie ou lors
                  du streaming d'un nouveau film – votre image reste fluide et
                  stable. Ce qui nous distingue des autres fournisseurs : Nous
                  offrons un{" "}
                  <span className="text-blanc-50 font-semibold">
                    service client entièrement en français
                  </span>{" "}
                  disponible 24h/24 via WhatsApp, e-mail ou téléphone.
                </p>
                <p>
                  L'installation est très simple : Après l'achat, vous recevez vos
                  identifiants d'accès par e-mail – prêt. Aucune connaissance
                  technique requise, aucune installation compliquée. Entrez
                  simplement les données dans votre application préférée et
                  commencez immédiatement. C'est ainsi qu'acheter IPTV devient
                  agréable.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "99,9% Uptime",
                "Serveurs Stables",
                "Zéro Buffering",
                "Streams Rapides",
                "Support 24/7",
                "En Français",
                "Utilisation Simple",
                "Prêt Immédiatement",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 p-5 rounded-2xl border border-blanc-50/5 bg-blanc-50/[0.02] hover:bg-blanc-50/[0.05] transition-colors group"
                >
                  <div className="h-8 w-8 rounded-lg bg-france-700/15 flex items-center justify-center border border-france-700/25 group-hover:border-france-700/45 transition-colors">
                    <CheckCircle2 size={18} className="text-france-500" />
                  </div>
                  <span className="text-blanc-50 font-bold">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-blanc-50 mb-6">
              Comment acheter IPTV ?{" "}
              <span className="text-gradient">(Étape par étape)</span>
            </h2>
            <p className="text-blanc-400 max-w-2xl mx-auto text-lg">
              Prêt à streamer en quelques minutes sur tous vos appareils
              préférés.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Choisir le forfait",
                desc: "Sélectionnez le forfait IPTV qui vous convient le mieux – 6 mois, 1 an ou 2 ans.",
                icon: ShoppingCart,
                color: "from-france-700 to-france-500",
              },
              {
                step: "2",
                title: "Finaliser la commande",
                desc: "Payez en toute sécurité via PayPal, carte de crédit ou un autre moyen de paiement de votre choix.",
                icon: Zap,
                color: "from-rouge-500 to-rouge-600",
              },
              {
                step: "3",
                title: "Identifiants d'accès",
                desc: "Sous 1 à 5 minutes, vous recevez votre code d'activation ou lien M3U par e-mail.",
                icon: Key,
                color: "from-[#F4C430] to-[#e6b020]",
              },
              {
                step: "4",
                title: "Commencer immédiatement",
                desc: "Saisissez les données dans votre application IPTV et profitez immédiatement de 31 000+ chaînes en 4K.",
                icon: PlayCircle,
                color: "from-emerald-500 to-teal-500",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative group p-8 rounded-3xl border border-blanc-50/5 bg-france-900 hover:border-blanc-50/10 transition-all hover:-translate-y-2"
              >
                <div
                  className={`h-16 w-16 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <item.icon size={32} className="text-blanc-50" />
                  <div className="absolute -top-3 -right-3 h-10 w-10 rounded-full bg-france-900 border-4 border-france-900 flex items-center justify-center text-blanc-50 font-black text-xl">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-black text-blanc-50 mb-4">
                  {item.title}
                </h3>
                <p className="text-blanc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Market Comparison Table */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-france-500 font-bold uppercase tracking-widest text-sm mb-4 block">
              Comparaison du Marché
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-blanc-50 mb-6">
              Pourquoi <span className="text-gradient">IPTV SERVICE</span> est le
              meilleur choix
            </h2>
            <p className="text-blanc-400 max-w-3xl mx-auto text-lg">
              Nous offrons non seulement plus de contenu, mais aussi un service et une
              stabilité supérieurs par rapport aux autres fournisseurs sur le marché.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-blanc-50/10 bg-france-900/50 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-blanc-50/10">
                  <th className="p-6 text-blanc-400 font-bold uppercase tracking-wider text-sm">
                    Fonctionnalité
                  </th>
                  <th className="p-6 text-france-500 font-black uppercase tracking-wider text-sm bg-france-500/5">
                    IPTV SERVICE
                  </th>
                  <th className="p-6 text-blanc-400 font-bold uppercase tracking-wider text-sm">
                    Fournisseur A
                  </th>
                  <th className="p-6 text-blanc-400 font-bold uppercase tracking-wider text-sm">
                    Fournisseur B
                  </th>
                </tr>
              </thead>
              <tbody className="text-blanc-50">
                {[
                  {
                    name: "Nombre de chaînes",
                    v: "31 000+",
                    a: "~10 000",
                    b: "~15 000",
                  },
                  {
                    name: "Contenu VOD (Films & Séries)",
                    v: "140 000+",
                    a: "~50 000",
                    b: "~80 000",
                  },
                  { name: "Qualité 4K / 8K UHD", v: true, a: false, b: true },
                  {
                    name: "Support 24/7 en Français",
                    v: true,
                    a: false,
                    b: false,
                  },
                  { name: "Aide à l'installation", v: true, a: false, b: false },
                  {
                    name: "Uptime serveur",
                    v: "99.9% garanti",
                    a: "Non spécifié",
                    b: "99.5%",
                  },
                  {
                    name: "Technologie Anti-Freeze",
                    v: true,
                    a: false,
                    b: false,
                  },
                  {
                    name: "Paiement sécurisé (PayPal, Carte)",
                    v: true,
                    a: true,
                    b: false,
                  },
                ].map((row) => (
                  <tr
                    key={row.name}
                    className={`border-b border-blanc-50/5 last:border-0 hover:bg-blanc-50/[0.02] transition-colors`}
                  >
                    <td className="p-6 font-medium text-blanc-300">
                      {row.name}
                    </td>
                    <td className="p-6 bg-france-500/5 font-bold">
                      {typeof row.v === "boolean" ? (
                        row.v ? (
                          <CheckCircle2
                            className="text-emerald-400"
                            size={20}
                          />
                        ) : (
                          <span className="text-red-400">✕</span>
                        )
                      ) : (
                        row.v
                      )}
                    </td>
                    <td className="p-6 text-blanc-400">
                      {typeof row.a === "boolean" ? (
                        row.a ? (
                          <CheckCircle2 className="text-blanc-500" size={20} />
                        ) : (
                          <span className="text-red-400/50">✕</span>
                        )
                      ) : (
                        row.a
                      )}
                    </td>
                    <td className="p-6 text-blanc-400">
                      {typeof row.b === "boolean" ? (
                        row.b ? (
                          <CheckCircle2 className="text-blanc-500" size={20} />
                        ) : (
                          <span className="text-red-400/50">✕</span>
                        )
                      ) : (
                        row.b
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <Features />

        {/* Comprehensive Guide Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-france-500 font-bold uppercase tracking-widest text-sm mb-4 block">
                Guide IPTV 2026
              </span>
              <h2 className="text-3xl lg:text-5xl font-black text-blanc-50 mb-8">
                Acheter IPTV aux Pays-Bas –{" "}
                <span className="text-gradient">Votre guide complet</span>
              </h2>
            </div>

            <div className="space-y-16">
              {/* Point 1 */}
              <div className="animate-fade-in">
                <h3 className="text-2xl font-black text-blanc-50 mb-6 flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-france-700/15 border border-france-700/25 text-france-500">
                    1
                  </span>
                  Qu&apos;est-ce qu&apos;acheter IPTV signifie ?
                </h3>
                <div className="text-blanc-300 text-lg leading-relaxed space-y-4">
                  <p>
                    Acheter IPTV signifie acquérir un service de streaming
                    numérique qui propose des programmes télévisés via
                    Internet. Contrairement à la télévision par câble ou
                    satellite classique, l&apos;IPTV nécessite seulement une
                    connexion Internet stable et un appareil compatible.
                  </p>
                  <p>
                    Lorsque vous achetez IPTV chez{" "}
                    <span className="text-blanc-50 font-bold">IPTV SERVICE</span>,
                    vous avez accès à plus de{" "}
                    <span className="text-france-500 font-bold">
                       31 000 chaînes en direct
                    </span>{" "}
                    et plus de{" "}
                    <span className="text-france-500 font-bold">
                       140 000 films et séries
                    </span>{" "}
                    – le tout dans une qualité HD et 4K cristalline.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div>
                <h3 className="text-2xl font-black text-blanc-50 mb-6 flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rouge-500/15 border border-rouge-500/25 text-rouge-500">
                    2
                  </span>
                  Pourquoi acheter IPTV ?
                </h3>
                <p className="text-blanc-300 text-lg mb-8">
                  De plus en plus de Français passent à l&apos;IPTV. Voici les
                  principales raisons :
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { t: "Offre Énorme", d: "31 000+ chaînes dans le monde." },
                    { t: "Bibliothèque VOD", d: "140 000+ films et séries." },
                    { t: "Meilleure Qualité", d: "Support 4K, 8K et UHD." },
                    { t: "Prix Bas", d: "À partir de seulement 4,92 € par mois." },
                    {
                      t: "Sans Engagement",
                      d: "Flexible et annulable mensuellement.",
                    },
                    { t: "Activation Immédiate", d: "Prêt en moins de 5 minutes." },
                  ].map((item) => (
                    <div
                      key={item.t}
                      className="p-6 rounded-2xl border border-blanc-50/5 bg-blanc-50/[0.02] flex items-start gap-4"
                    >
                      <CheckCircle2
                        className="text-emerald-400 shrink-0 mt-1"
                        size={20}
                      />
                      <div>
                        <h4 className="text-blanc-50 font-bold mb-1">{item.t}</h4>
                        <p className="text-blanc-400 text-sm">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Point 3 */}
              <div>
                <h3 className="text-2xl font-black text-blanc-50 mb-6 flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-france-500/15 border border-france-500/25 text-france-500">
                    3
                  </span>
                  Quels appareils sont pris en charge ?
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Samsung Smart TV",
                    "LG Smart TV",
                    "Amazon Fire Stick",
                    "Android TV Box",
                    "Apple TV",
                    "iPhone & iPad",
                    "Android Mobile",
                    "Windows & Mac",
                    "Formuler & MAG",
                    "NVIDIA Shield",
                    "Chromecast",
                    "PlayStation & Xbox",
                  ].map((device) => (
                    <span
                      key={device}
                      className="px-4 py-2 rounded-xl border border-blanc-50/10 bg-blanc-50/5 text-blanc-300 font-medium text-sm"
                    >
                      {device}
                    </span>
                  ))}
                </div>
              </div>

              {/* Point 4 */}
              <div className="p-8 rounded-3xl border border-france-700/25 bg-france-700/10">
                <h3 className="text-2xl font-black text-blanc-50 mb-6">
                  Chaînes néerlandaises & Sport
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-france-500 font-bold mb-4 uppercase tracking-wider text-xs">
                      Chaînes Néerlandaises
                    </h4>
                    <ul className="space-y-2 text-blanc-300">
                      <li>• NPO 1, 2, 3 (HD)</li>
                      <li>• RTL 4, 5, 7, 8, Z</li>
                      <li>• SBS6, Veronica, Net5</li>
                      <li>• Ziggo Sport & ESPN</li>
                      <li>• Toutes les chaînes régionales</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-rouge-500 font-bold mb-4 uppercase tracking-wider text-xs">
                      Sportifs
                    </h4>
                    <ul className="space-y-2 text-blanc-300">
                      <li>• Eredivisie & Keuken Kampioen</li>
                      <li>• Champions & Europa League</li>
                      <li>• Formule 1 (Viaplay & F1TV)</li>
                      <li>• MotoGP, UFC, NBA, NFL</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 6 */}
              <div className="border-t border-blanc-50/10 pt-16">
                <h3 className="text-2xl font-black text-blanc-50 mb-8">
                  Sécurité lors de l&apos;achat IPTV
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { t: "SSL Sécurisé", icon: ShieldCheck },
                    { t: "Paiement Sécurisé", icon: ShoppingCart },
                    { t: "Confidentialité", icon: Key },
                    { t: "Garantie", icon: ShieldCheck },
                  ].map((s) => (
                    <div
                      key={s.t}
                      className="text-center p-6 rounded-2xl bg-blanc-50/[0.02] border border-blanc-50/5"
                    >
                      <s.icon
                        className="mx-auto mb-4 text-france-500"
                        size={32}
                      />
                      <span className="text-blanc-50 font-bold text-sm">
                        {s.t}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compatibility Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-france-500 font-bold uppercase tracking-widest text-sm mb-4 block">
              Compatibilité
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-blanc-50 mb-6">
              Acheter IPTV pour{" "}
              <span className="text-gradient">tous les appareils</span>
            </h2>
            <p className="text-blanc-400 max-w-2xl mx-auto text-lg">
              Notre service IPTV fonctionne sur plus de 50 types d&apos;appareils. Achetez
              une fois et diffusez partout.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                label: "Choix le plus populaire",
                title: "Smart TV",
                desc: "Samsung, LG, Sony, Philips, Hisense, TCL",
                icon: "tv",
              },
              {
                label: "Installation la plus simple",
                title: "Sticks de Streaming",
                desc: "Fire TV Stick, Chromecast, Roku, Apple TV, NVIDIA Shield",
                icon: "zap",
              },
              {
                label: "Streaming en déplacement",
                title: "Smartphones",
                desc: "iPhone, Samsung Galaxy, Pixel, Huawei, Xiaomi",
                icon: "mobile",
              },
              {
                label: "Grand écran",
                title: "Tablettes",
                desc: "iPad, Samsung Tab, Amazon Fire, Lenovo, Surface",
                icon: "tablet",
              },
              {
                label: "Contrôle total",
                title: "Ordinateurs",
                desc: "Windows PC, Mac, Linux, Chromebook",
                icon: "laptop",
              },
              {
                label: "Expérience premium",
                title: "Consoles & Boîtiers",
                desc: "PS5, Xbox, MAG Box, Formuler, Enigma2",
                icon: "box",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-3xl border border-blanc-50/5 bg-france-900 hover:border-blanc-50/10 transition-all group"
              >
                <span className="text-xs font-bold uppercase tracking-tighter text-france-500/60 mb-2 block">
                  {item.label}
                </span>
                <h3 className="text-2xl font-black text-blanc-50 mb-4 flex items-center justify-between">
                  {item.title}
                  <CheckCircle2
                    size={20}
                    className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </h3>
                <p className="text-blanc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl border border-blanc-50/5 bg-blanc-50/[0.02] text-center">
            <p className="text-blanc-400 italic">
              + de nombreux autres appareils. Besoin d&apos;aide pour l&apos;installation ? Notre{" "}
              <span className="text-blanc-50 font-bold">
                support 24/7 en français
              </span>{" "}
              est là pour vous aider.
            </p>
          </div>
        </section>

        <Trending />

        <Testimonials />

        <Pricing />

        {/* Guarantees Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-france-500 font-bold uppercase tracking-widest text-sm mb-4 block">
              Garanties
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-blanc-50 mb-6">
              Nos <span className="text-gradient">Garanties</span>
            </h2>
            <p className="text-blanc-400 max-w-2xl mx-auto text-lg">
              Votre confiance est notre capital. Nous soutenons notre service avec
              des garanties qui assurent votre sécurité et une expérience de première classe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Garantie Satisfait ou Remboursé",
                desc: "Si vous n'êtes pas satisfait, nous offrons une garantie de remboursement sans complication dans les 7 premiers jours.",
                icon: ShieldCheck,
                color: "text-emerald-400",
                bg: "bg-emerald-500/10",
              },
              {
                title: "Confidentialité & Sécurité",
                desc: "Vos données sont en sécurité chez nous. Nous respectons les normes de confidentialité les plus élevées et ne partageons aucune donnée avec des tiers.",
                icon: Key,
                color: "text-france-500",
                bg: "bg-france-700/15",
              },
              {
                title: "Mises à jour Régulières",
                desc: "Nos listes de chaînes et VOD sont mises à jour quotidiennement pour vous garantir toujours le contenu le plus récent.",
                icon: Zap,
                color: "text-rouge-500",
                bg: "bg-rouge-500/15",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-10 rounded-3xl border border-blanc-50/5 bg-france-900 hover:border-blanc-50/10 transition-all text-center"
              >
                <div
                  className={`h-16 w-16 rounded-2xl ${item.bg} flex items-center justify-center mb-8 mx-auto`}
                >
                  <item.icon size={32} className={item.color} />
                </div>
                <h3 className="text-xl font-black text-blanc-50 mb-4">
                  {item.title}
                </h3>
                <p className="text-blanc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <CTA
          title={
            <>
              Prêt pour la Meilleure{" "}
              <span className="text-gradient">Expérience IPTV</span> ?
            </>
          }
          description="Rejoignez des milliers de clients satisfaits aux Pays-Bas et en Belgique. Commencez dès aujourd'hui avec IPTV SERVICE."
        />
      </div>
    </main>
  );
};

export default IPTVNederland;
