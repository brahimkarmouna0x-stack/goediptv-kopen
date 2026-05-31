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
  title: "IPTV Niederlande — #1 Premium IPTV Abo (2026)",
  description:
    "Beste IPTV Niederlande & Belgien mit 31.000+ Sendern, 140.000+ VOD in 4K/8K Qualität. IPTV kaufen mit 24/7 Support, sofortiger Aktivierung und 100% stabil.",
  path: "/iptv-german/iptv-nederland",
});

const IPTVNederland = () => {
  return (
    <main className="flex-1">
      {/* Bespoke Hero Section with Generated Background */}
      <Hero
        pillText="Der #1 IPTV Dienst der Niederlande"
        bgImage="/images/iptv-nederland-hero.webp"
          title={
            <>
              IPTV Premium <span className="text-gradient">Niederlande</span>
              <br className="hidden md:block" />
              Die Zukunft des Fernsehens
            </>
          }
          subtitle="Erleben Sie Unterhaltung wie nie zuvor mit dem stabilsten IPTV-Abonnement der Niederlande. 31.000+ Live-Sender, 140.000+ Filme & Serien in 4K/8K, sofortige Aktivierung auf all Ihren Geräten."
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
                Ohne Risiko
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-blanc-50 mb-6">
                Geld-zurück-Garantie
              </h2>
              <p className="text-xl text-blanc-300 leading-relaxed">
                Nicht zufrieden nach dem IPTV-Kauf? Vollständige Rückerstattung –{" "}
                <span className="text-blanc-50 font-bold">ohne Komplikationen.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-slide-up">
              <span className="text-france-500 font-bold uppercase tracking-widest text-sm mb-4 block">
                Warum uns wählen
              </span>
              <h2 className="text-3xl lg:text-5xl font-black text-blanc-50 leading-tight mb-8">
                Warum unser IPTV-Anbieter die{" "}
                <span className="text-gradient">beste Wahl</span> in den Niederlanden ist
              </h2>
              <div className="space-y-6 text-blanc-300 text-lg leading-relaxed">
                <p>
                  Als einer der führenden IPTV-Anbieter in den Niederlanden
                  konzentrieren wir uns auf das, was wirklich zählt:{" "}
                  <span className="text-blanc-50 font-semibold">
                    Stabilität, Geschwindigkeit und Zuverlässigkeit.
                  </span>{" "}
                  Unsere Server-Infrastruktur ist speziell für den
                  niederländischen Markt optimiert – das bedeutet minimale Latenz, null
                  Pufferung und 99,9 % Verfügbarkeit.
                </p>
                <p>
                  Ob während der Hauptsendezeit der Eredivisie oder beim
                  Streamen eines neuen Films – Ihr Bild bleibt flüssig und
                  stabil. Was uns von anderen Anbietern unterscheidet: Wir
                  bieten einen{" "}
                  <span className="text-blanc-50 font-semibold">
                    Kundenservice auf Deutsch
                  </span>{" "}
                  verfügbar 24/7 per WhatsApp, E-Mail oder Telefon.
                </p>
                <p>
                  Die Installation ist sehr einfach: Nach dem Kauf erhalten Sie Ihre
                  Zugangsdaten per E-Mail – fertig. Keine technischen
                  Kenntnisse erforderlich, keine komplizierte Einrichtung. Geben Sie
                  einfach die Daten in Ihre bevorzugte App ein und
                  beginnen Sie sofort. So einfach wird IPTV kaufen.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "99,9% Uptime",
                "Stabile Server",
                "Null Pufferung",
                "Schnelle Streams",
                "Support 24/7",
                "Auf Deutsch",
                "Einfache Nutzung",
                "Sofort Bereit",
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
              Wie kaufe ich IPTV?{" "}
              <span className="text-gradient">(Schritt für Schritt)</span>
            </h2>
            <p className="text-blanc-400 max-w-2xl mx-auto text-lg">
              Bereit zum Streamen in wenigen Minuten auf all Ihren
              Lieblingsgeräten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Paket wählen",
                desc: "Wählen Sie das IPTV-Paket, das am besten zu Ihnen passt – 6 Monate, 1 Jahr oder 2 Jahre.",
                icon: ShoppingCart,
                color: "from-france-700 to-france-500",
              },
              {
                step: "2",
                title: "Bestellung abschließen",
                desc: "Bezahlen Sie sicher per PayPal, Kreditkarte oder einer anderen Zahlungsmethode Ihrer Wahl.",
                icon: Zap,
                color: "from-rouge-500 to-rouge-600",
              },
              {
                step: "3",
                title: "Zugangsdaten erhalten",
                desc: "Innerhalb von 1-5 Minuten erhalten Sie Ihren Aktivierungscode oder M3U-Link per E-Mail.",
                icon: Key,
                color: "from-[#F4C430] to-[#e6b020]",
              },
              {
                step: "4",
                title: "Sofort loslegen",
                desc: "Geben Sie die Daten in Ihre IPTV-App ein und genießen Sie sofort 31.000+ Sender in 4K.",
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
              Marktvergleich
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-blanc-50 mb-6">
              Warum <span className="text-gradient">IPTV German</span> die
              beste Wahl ist
            </h2>
            <p className="text-blanc-400 max-w-3xl mx-auto text-lg">
              Wir bieten nicht nur mehr Inhalt, sondern auch einen überlegenen Service und
              Stabilität im Vergleich zu anderen Anbietern auf dem Markt.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-blanc-50/10 bg-france-900/50 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-blanc-50/10">
                  <th className="p-6 text-blanc-400 font-bold uppercase tracking-wider text-sm">
                    Funktion
                  </th>
                  <th className="p-6 text-france-500 font-black uppercase tracking-wider text-sm bg-france-500/5">
                    IPTV German
                  </th>
                  <th className="p-6 text-blanc-400 font-bold uppercase tracking-wider text-sm">
                    Anbieter A
                  </th>
                  <th className="p-6 text-blanc-400 font-bold uppercase tracking-wider text-sm">
                    Anbieter B
                  </th>
                </tr>
              </thead>
              <tbody className="text-blanc-50">
                {[
                  {
                    name: "Anzahl Sender",
                    v: "31 000+",
                    a: "~10 000",
                    b: "~15 000",
                  },
                  {
                    name: "VOD-Inhalt (Filme & Serien)",
                    v: "140 000+",
                    a: "~50 000",
                    b: "~80 000",
                  },
                  { name: "4K / 8K UHD Qualität", v: true, a: false, b: true },
                  {
                    name: "24/7 Support auf Deutsch",
                    v: true,
                    a: false,
                    b: false,
                  },
                  { name: "Installationshilfe", v: true, a: false, b: false },
                  {
                    name: "Server Uptime",
                    v: "99.9% garantiert",
                    a: "Nicht angegeben",
                    b: "99.5%",
                  },
                  {
                    name: "Anti-Freeze Technologie",
                    v: true,
                    a: false,
                    b: false,
                  },
                  {
                    name: "Sichere Zahlung (PayPal, Karte)",
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
                IPTV Guide 2026
              </span>
              <h2 className="text-3xl lg:text-5xl font-black text-blanc-50 mb-8">
                IPTV in den Niederlanden kaufen –{" "}
                <span className="text-gradient">Ihr vollständiger Guide</span>
              </h2>
            </div>

            <div className="space-y-16">
              {/* Point 1 */}
              <div className="animate-fade-in">
                <h3 className="text-2xl font-black text-blanc-50 mb-6 flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-france-700/15 border border-france-700/25 text-france-500">
                    1
                  </span>
                  Was bedeutet IPTV kaufen?
                </h3>
                <div className="text-blanc-300 text-lg leading-relaxed space-y-4">
                  <p>
                    IPTV kaufen bedeutet, einen digitalen Streaming-Dienst zu
                    erwerben, der Fernsehprogramme über das Internet anbietet.
                    Im Gegensatz zum herkömmlichen Kabel- oder
                    Satellitenfernsehen benötigt IPTV nur eine
                    stabile Internetverbindung und ein kompatibles Gerät.
                  </p>
                  <p>
                    Wenn Sie IPTV bei{" "}
                    <span className="text-blanc-50 font-bold">IPTV German</span> kaufen,
                    haben Sie Zugang zu über{" "}
                    <span className="text-france-500 font-bold">
                       31.000 Live-Sendern
                    </span>{" "}
                    und über{" "}
                    <span className="text-france-500 font-bold">
                       140.000 Filme und Serien
                    </span>{" "}
                    – alles in kristallklarer HD und 4K Qualität.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div>
                <h3 className="text-2xl font-black text-blanc-50 mb-6 flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rouge-500/15 border border-rouge-500/25 text-rouge-500">
                    2
                  </span>
                  Warum IPTV kaufen?
                </h3>
                <p className="text-blanc-300 text-lg mb-8">
                  Immer mehr Deutsche wechseln zu IPTV. Hier sind die
                  Hauptgründe:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { t: "Riesiges Angebot", d: "31.000+ Sender weltweit." },
                    { t: "VOD-Bibliothek", d: "140.000+ Filme und Serien." },
                    { t: "Beste Qualität", d: "4K, 8K und UHD Unterstützung." },
                    { t: "Niedrige Preise", d: "Ab nur 4,92 € pro Monat." },
                    {
                      t: "Ohne Bindung",
                      d: "Flexibel und monatlich kündbar.",
                    },
                    { t: "Sofortige Aktivierung", d: "Fertig in unter 5 Minuten." },
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
                  Welche Geräte werden unterstützt?
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
                  Niederländische Sender & Sport
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-france-500 font-bold mb-4 uppercase tracking-wider text-xs">
                      Niederländische Sender
                    </h4>
                    <ul className="space-y-2 text-blanc-300">
                      <li>• NPO 1, 2, 3 (HD)</li>
                      <li>• RTL 4, 5, 7, 8, Z</li>
                      <li>• SBS6, Veronica, Net5</li>
                      <li>• Ziggo Sport & ESPN</li>
                      <li>• Alle regionalen Sender</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-rouge-500 font-bold mb-4 uppercase tracking-wider text-xs">
                      Sport
                    </h4>
                    <ul className="space-y-2 text-blanc-300">
                      <li>• Eredivisie & Keuken Kampioen</li>
                      <li>• Champions & Europa League</li>
                      <li>• Formel 1 (Viaplay & F1TV)</li>
                      <li>• MotoGP, UFC, NBA, NFL</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 6 */}
              <div className="border-t border-blanc-50/10 pt-16">
                <h3 className="text-2xl font-black text-blanc-50 mb-8">
                  Sicherheit beim IPTV-Kauf
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { t: "SSL Verschlüsselung", icon: ShieldCheck },
                    { t: "Sichere Zahlung", icon: ShoppingCart },
                    { t: "Datenschutz", icon: Key },
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
              Kompatibilität
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-blanc-50 mb-6">
              IPTV kaufen für{" "}
              <span className="text-gradient">alle Geräte</span>
            </h2>
            <p className="text-blanc-400 max-w-2xl mx-auto text-lg">
              Unser IPTV-Dienst funktioniert auf über 50 Gerätetypen. Einmal
              kaufen und überall streamen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                label: "Beliebteste Wahl",
                title: "Smart TV",
                desc: "Samsung, LG, Sony, Philips, Hisense, TCL",
                icon: "tv",
              },
              {
                label: "Einfachste Installation",
                title: "Streaming-Sticks",
                desc: "Fire TV Stick, Chromecast, Roku, Apple TV, NVIDIA Shield",
                icon: "zap",
              },
              {
                label: "Streamen unterwegs",
                title: "Smartphones",
                desc: "iPhone, Samsung Galaxy, Pixel, Huawei, Xiaomi",
                icon: "mobile",
              },
              {
                label: "Großer Bildschirm",
                title: "Tablets",
                desc: "iPad, Samsung Tab, Amazon Fire, Lenovo, Surface",
                icon: "tablet",
              },
              {
                label: "Volle Kontrolle",
                title: "Computer",
                desc: "Windows PC, Mac, Linux, Chromebook",
                icon: "laptop",
              },
              {
                label: "Premium-Erlebnis",
                title: "Konsolen & Boxen",
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
              + viele weitere Geräte. Hilfe bei der Einrichtung? Unser{" "}
              <span className="text-blanc-50 font-bold">
                24/7 Support auf Deutsch
              </span>{" "}
              ist für Sie da.
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
              Garantien
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-blanc-50 mb-6">
              Unsere <span className="text-gradient">Garantien</span>
            </h2>
            <p className="text-blanc-400 max-w-2xl mx-auto text-lg">
              Ihr Vertrauen ist unser Kapital. Wir untermauern unseren Service mit
              Garantien, die Ihre Sicherheit und ein erstklassiges Erlebnis gewährleisten.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Geld-zurück-Garantie",
                desc: "Wenn Sie nicht zufrieden sind, bieten wir eine problemlose Rückerstattungsgarantie innerhalb der ersten 7 Tage.",
                icon: ShieldCheck,
                color: "text-emerald-400",
                bg: "bg-emerald-500/10",
              },
              {
                title: "Datenschutz & Sicherheit",
                desc: "Ihre Daten sind bei uns sicher. Wir halten die höchsten Datenschutzstandards ein und geben keine Daten an Dritte weiter.",
                icon: Key,
                color: "text-france-500",
                bg: "bg-france-700/15",
              },
              {
                title: "Regelmäßige Updates",
                desc: "Unsere Senderlisten und VOD werden täglich aktualisiert, um Ihnen stets die aktuellsten Inhalte zu garantieren.",
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
              Bereit für das Beste{" "}
              <span className="text-gradient">IPTV-Erlebnis</span>?
            </>
          }
          description="Schließen Sie sich tausenden zufriedenen Kunden in den Niederlanden und Belgien an. Starten Sie noch heute mit IPTV German."
        />
      </div>
    </main>
  );
};

export default IPTVNederland;
