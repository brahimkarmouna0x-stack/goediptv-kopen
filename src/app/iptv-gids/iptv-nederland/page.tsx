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
  title: "IPTV Nederland — #1 Premium IPTV Abonnement (2026)",
  description:
    "Beste IPTV Nederland & België met 31.000+ kanalen, 140.000+ VOD in 4K/8K kwaliteit. IPTV kopen met 24/7 klantenservice, directe activering en 100% stabiel.",
  path: "/iptv-gids/iptv-nederland",
});

const IPTVNederland = () => {
  return (
    <main className="flex-1">
      {/* Bespoke Hero Section with Generated Background */}
      <Hero
        pillText="De #1 IPTV-dienst van Nederland"
        bgImage="/images/iptv-nederland-hero.webp"
          title={
            <>
              IPTV Premium <span className="text-gradient">Nederland</span>
              <br className="hidden md:block" />
              De toekomst van televisie
            </>
          }
          subtitle="Beleef entertainment zoals nooit tevoren met het meest stabiele IPTV-abonnement van Nederland. 31.000+ live kanalen, 140.000+ films & series in 4K/8K, directe activering op al uw apparaten."
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
                Zonder risico
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-blanc-50 mb-6">
                Niet-goed-geld-terug-garantie
              </h2>
              <p className="text-xl text-blanc-300 leading-relaxed">
                Niet tevreden na uw IPTV-aankoop? Volledige terugbetaling –{" "}
                <span className="text-blanc-50 font-bold">zonder gedoe.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-slide-up">
              <span className="text-france-500 font-bold uppercase tracking-widest text-sm mb-4 block">
                Waarom voor ons kiezen
              </span>
              <h2 className="text-3xl lg:text-5xl font-black text-blanc-50 leading-tight mb-8">
                Waarom onze IPTV-aanbieder de{" "}
                <span className="text-gradient">beste keuze</span> in Nederland is
              </h2>
              <div className="space-y-6 text-blanc-300 text-lg leading-relaxed">
                <p>
                  Als een van de toonaangevende IPTV-aanbieders in Nederland
                  richten wij ons op wat echt telt:{" "}
                  <span className="text-blanc-50 font-semibold">
                    stabiliteit, snelheid en betrouwbaarheid.
                  </span>{" "}
                  Onze serverinfrastructuur is speciaal geoptimaliseerd voor de
                  Nederlandse markt – dat betekent minimale latentie, nul
                  buffering en 99,9% beschikbaarheid.
                </p>
                <p>
                  Of het nu tijdens de primetime van de Eredivisie is of bij het
                  streamen van een nieuwe film – uw beeld blijft vloeiend en
                  stabiel. Wat ons onderscheidt van andere aanbieders: wij
                  bieden een{" "}
                  <span className="text-blanc-50 font-semibold">
                    klantenservice in het Nederlands
                  </span>{" "}
                  24/7 beschikbaar via WhatsApp, e-mail of telefoon.
                </p>
                <p>
                  De installatie is heel eenvoudig: na uw aankoop ontvangt u uw
                  inloggegevens per e-mail – klaar. Geen technische
                  kennis nodig, geen ingewikkelde installatie. Voer
                  simpelweg de gegevens in uw favoriete app in en
                  begin direct. Zo eenvoudig is IPTV kopen.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "99,9% uptime",
                "Stabiele servers",
                "Nul buffering",
                "Snelle streams",
                "Klantenservice 24/7",
                "In het Nederlands",
                "Eenvoudig in gebruik",
                "Direct klaar",
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
              Hoe koop ik IPTV?{" "}
              <span className="text-gradient">(Stap voor stap)</span>
            </h2>
            <p className="text-blanc-400 max-w-2xl mx-auto text-lg">
              Klaar om binnen enkele minuten te streamen op al uw
              favoriete apparaten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Pakket kiezen",
                desc: "Kies het IPTV-pakket dat het beste bij u past – 6 maanden, 1 jaar of 2 jaar.",
                icon: ShoppingCart,
                color: "from-france-700 to-france-500",
              },
              {
                step: "2",
                title: "Bestelling afronden",
                desc: "Betaal veilig met PayPal, creditcard of een andere betaalmethode naar keuze.",
                icon: Zap,
                color: "from-rouge-500 to-rouge-600",
              },
              {
                step: "3",
                title: "Inloggegevens ontvangen",
                desc: "Binnen 1-5 minuten ontvangt u uw activeringscode of M3U-link per e-mail.",
                icon: Key,
                color: "from-france-400 to-france-600",
              },
              {
                step: "4",
                title: "Direct beginnen",
                desc: "Voer de gegevens in uw IPTV-app in en geniet direct van 31.000+ kanalen in 4K.",
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
              Marktvergelijking
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-blanc-50 mb-6">
              Waarom <span className="text-gradient">goediptv-kopen</span> de
              beste keuze is
            </h2>
            <p className="text-blanc-400 max-w-3xl mx-auto text-lg">
              Wij bieden niet alleen meer content, maar ook een superieure service en
              stabiliteit vergeleken met andere aanbieders op de markt.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-blanc-50/10 bg-france-900/50 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-blanc-50/10">
                  <th className="p-6 text-blanc-400 font-bold uppercase tracking-wider text-sm">
                    Functie
                  </th>
                  <th className="p-6 text-france-500 font-black uppercase tracking-wider text-sm bg-france-500/5">
                    goediptv-kopen
                  </th>
                  <th className="p-6 text-blanc-400 font-bold uppercase tracking-wider text-sm">
                    Aanbieder A
                  </th>
                  <th className="p-6 text-blanc-400 font-bold uppercase tracking-wider text-sm">
                    Aanbieder B
                  </th>
                </tr>
              </thead>
              <tbody className="text-blanc-50">
                {[
                  {
                    name: "Aantal kanalen",
                    v: "31 000+",
                    a: "~10 000",
                    b: "~15 000",
                  },
                  {
                    name: "VOD-content (films & series)",
                    v: "140 000+",
                    a: "~50 000",
                    b: "~80 000",
                  },
                  { name: "4K / 8K UHD kwaliteit", v: true, a: false, b: true },
                  {
                    name: "24/7 support in het Nederlands",
                    v: true,
                    a: false,
                    b: false,
                  },
                  { name: "Installatiehulp", v: true, a: false, b: false },
                  {
                    name: "Server uptime",
                    v: "99.9% gegarandeerd",
                    a: "Niet vermeld",
                    b: "99.5%",
                  },
                  {
                    name: "Anti-freeze technologie",
                    v: true,
                    a: false,
                    b: false,
                  },
                  {
                    name: "Veilig betalen (PayPal, kaart)",
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
                IPTV Gids 2026
              </span>
              <h2 className="text-3xl lg:text-5xl font-black text-blanc-50 mb-8">
                IPTV in Nederland kopen –{" "}
                <span className="text-gradient">uw complete gids</span>
              </h2>
            </div>

            <div className="space-y-16">
              {/* Point 1 */}
              <div className="animate-fade-in">
                <h3 className="text-2xl font-black text-blanc-50 mb-6 flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-france-700/15 border border-france-700/25 text-france-500">
                    1
                  </span>
                  Wat betekent IPTV kopen?
                </h3>
                <div className="text-blanc-300 text-lg leading-relaxed space-y-4">
                  <p>
                    IPTV kopen betekent het aanschaffen van een digitale
                    streamingdienst die tv-programma's via internet aanbiedt.
                    In tegenstelling tot traditionele kabel- of
                    satelliettelevisie heeft IPTV alleen een
                    stabiele internetverbinding en een compatibel apparaat nodig.
                  </p>
                  <p>
                    Wanneer u IPTV koopt bij{" "}
                    <span className="text-blanc-50 font-bold">goediptv-kopen</span>,
                    heeft u toegang tot meer dan{" "}
                    <span className="text-france-500 font-bold">
                       31.000 live kanalen
                    </span>{" "}
                    en meer dan{" "}
                    <span className="text-france-500 font-bold">
                       140.000 films en series
                    </span>{" "}
                    – allemaal in kristalheldere HD- en 4K-kwaliteit.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div>
                <h3 className="text-2xl font-black text-blanc-50 mb-6 flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rouge-500/15 border border-rouge-500/25 text-rouge-500">
                    2
                  </span>
                  Waarom IPTV kopen?
                </h3>
                <p className="text-blanc-300 text-lg mb-8">
                  Steeds meer Nederlanders stappen over op IPTV. Dit zijn de
                  belangrijkste redenen:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { t: "Enorm aanbod", d: "31.000+ kanalen wereldwijd." },
                    { t: "VOD-bibliotheek", d: "140.000+ films en series." },
                    { t: "Beste kwaliteit", d: "4K, 8K en UHD ondersteuning." },
                    { t: "Lage prijzen", d: "Vanaf slechts 4,92 € per maand." },
                    {
                      t: "Zonder binding",
                      d: "Flexibel en maandelijks opzegbaar.",
                    },
                    { t: "Directe activering", d: "Klaar in minder dan 5 minuten." },
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
                  Welke apparaten worden ondersteund?
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Samsung Smart-tv",
                    "LG Smart-tv",
                    "Amazon Fire Stick",
                    "Android TV Box",
                    "Apple TV",
                    "iPhone & iPad",
                    "Android mobiel",
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
                  Nederlandse kanalen & sport
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-france-500 font-bold mb-4 uppercase tracking-wider text-xs">
                      Nederlandse kanalen
                    </h4>
                    <ul className="space-y-2 text-blanc-300">
                      <li>• NPO 1, 2, 3 (HD)</li>
                      <li>• RTL 4, 5, 7, 8, Z</li>
                      <li>• SBS6, Veronica, Net5</li>
                      <li>• Ziggo Sport & ESPN</li>
                      <li>• Alle regionale zenders</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-rouge-500 font-bold mb-4 uppercase tracking-wider text-xs">
                      Sport
                    </h4>
                    <ul className="space-y-2 text-blanc-300">
                      <li>• Eredivisie & Keuken Kampioen Divisie</li>
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
                  Veiligheid bij het kopen van IPTV
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { t: "SSL-versleuteling", icon: ShieldCheck },
                    { t: "Veilig betalen", icon: ShoppingCart },
                    { t: "Privacy", icon: Key },
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
              Compatibiliteit
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-blanc-50 mb-6">
              IPTV kopen voor{" "}
              <span className="text-gradient">alle apparaten</span>
            </h2>
            <p className="text-blanc-400 max-w-2xl mx-auto text-lg">
              Onze IPTV-dienst werkt op meer dan 50 soorten apparaten. Eén keer
              kopen en overal streamen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                label: "Populairste keuze",
                title: "Smart-tv",
                desc: "Samsung, LG, Sony, Philips, Hisense, TCL",
                icon: "tv",
              },
              {
                label: "Eenvoudigste installatie",
                title: "Streaming-sticks",
                desc: "Fire TV Stick, Chromecast, Roku, Apple TV, NVIDIA Shield",
                icon: "zap",
              },
              {
                label: "Onderweg streamen",
                title: "Smartphones",
                desc: "iPhone, Samsung Galaxy, Pixel, Huawei, Xiaomi",
                icon: "mobile",
              },
              {
                label: "Groot scherm",
                title: "Tablets",
                desc: "iPad, Samsung Tab, Amazon Fire, Lenovo, Surface",
                icon: "tablet",
              },
              {
                label: "Volledige controle",
                title: "Computers",
                desc: "Windows PC, Mac, Linux, Chromebook",
                icon: "laptop",
              },
              {
                label: "Premium-ervaring",
                title: "Consoles & boxen",
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
              + nog veel meer apparaten. Hulp bij de installatie? Onze{" "}
              <span className="text-blanc-50 font-bold">
                24/7 klantenservice in het Nederlands
              </span>{" "}
              staat voor u klaar.
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
              Onze <span className="text-gradient">garanties</span>
            </h2>
            <p className="text-blanc-400 max-w-2xl mx-auto text-lg">
              Uw vertrouwen is ons kapitaal. Wij onderbouwen onze service met
              garanties die uw veiligheid en een eersteklas ervaring waarborgen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Niet-goed-geld-terug-garantie",
                desc: "Bent u niet tevreden? Dan bieden wij een probleemloze terugbetalingsgarantie binnen de eerste 7 dagen.",
                icon: ShieldCheck,
                color: "text-emerald-400",
                bg: "bg-emerald-500/10",
              },
              {
                title: "Privacy & veiligheid",
                desc: "Uw gegevens zijn bij ons veilig. Wij hanteren de hoogste privacynormen en delen geen gegevens met derden.",
                icon: Key,
                color: "text-france-500",
                bg: "bg-france-700/15",
              },
              {
                title: "Regelmatige updates",
                desc: "Onze kanaallijsten en VOD worden dagelijks bijgewerkt, zodat u altijd de meest actuele content krijgt.",
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
              Klaar voor de beste{" "}
              <span className="text-gradient">IPTV-ervaring</span>?
            </>
          }
          description="Sluit u aan bij duizenden tevreden klanten in Nederland en België. Begin vandaag nog met goediptv-kopen."
        />
      </div>
    </main>
  );
};

export default IPTVNederland;
