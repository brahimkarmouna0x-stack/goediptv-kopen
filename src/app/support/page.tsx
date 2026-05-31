import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  CircleHelp,
  CreditCard,
  Flame,
  Rocket,
  Search,
  ShieldCheck,
  Tv,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hilfe-Center",
  description: "Finden Sie Antworten auf Ihre Fragen und erfahren Sie, wie Sie IPTV Germany nutzen können.",
  alternates: {
    canonical: "https://iptvgerman.de/support",
  },
  openGraph: {
    title: "Hilfe-Center",
    description: "Finden Sie Antworten auf Ihre Fragen und erfahren Sie, wie Sie IPTV Germany nutzen können.",
    url: "https://iptvgerman.de/support",
    siteName: "IPTV Germany",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hilfe-Center",
    description: "Finden Sie Antworten auf Ihre Fragen und erfahren Sie, wie Sie IPTV Germany nutzen können.",
  },
};

const HelpCenterPage = () => {
  const categories: Array<{
    Icon: LucideIcon;
    title: string;
    desc: string;
    color: string;
    href: string;
  }> = [
    {
      Icon: Rocket,
      title: "Erste Schritte",
      desc: "Erfahren Sie, wie Sie Ihr Abonnement in wenigen Minuten auf jedem Gerät einrichten.",
      color: "text-france-400",
      href: "/support/guides",
    },
    {
      Icon: CreditCard,
      title: "Abrechnung & Angebote",
      desc: "Informationen zu Abonnements, Verlängerungen und Zahlungsmethoden.",
      color: "text-rouge-400",
      href: "#",
    },
    {
      Icon: ShieldCheck,
      title: "Sicherheit",
      desc: "Wie wir Ihre Daten schützen und Tipps zur Sicherung Ihres Kontos.",
      color: "text-emerald-400",
      href: "#",
    },
    {
      Icon: Wrench,
      title: "Fehlerbehebung",
      desc: "Lösen Sie häufige Streaming-Probleme und Wiedergabefehler.",
      color: "text-yellow-400",
      href: "#",
    },
    {
      Icon: Tv,
      title: "Inhalte & Sender",
      desc: "Entdecken Sie unsere Senderlisten, VOD-Bibliothek und EPG-Details.",
      color: "text-rouge-500",
      href: "#",
    },
    {
      Icon: CircleHelp,
      title: "Allgemeine FAQ",
      desc: "Schnelle Antworten auf die häufigsten Fragen.",
      color: "text-france-400",
      href: "#",
    },
  ];

  const articles = [
    "So konfigurieren Sie IPTV Smarters Pro",
    "Welche Geräte unterstützen 4K-Streaming?",
    "Wie verlängere ich mein Abonnement",
    "Die Xtream Codes API verstehen",
    "Häufige Lösungen gegen Buffering",
    "So nutzen Sie den elektronischen Programmführer (EPG)",
  ];

  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider">
            Support
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6 text-blanc-50 leading-tight">
            Hilfe<span className="text-gradient">Center</span>
          </h1>
          <div className="max-w-2xl mx-auto relative mt-8">
            <input 
              type="text" 
              placeholder="Suchen Sie Artikel, Anleitungen oder Lösungen..." 
              className="w-full px-5 sm:px-8 py-4 sm:py-5 rounded-2xl glass text-blanc-50 placeholder-blanc-500 border border-blanc-50/10 focus:outline-none focus:border-france-500/50 text-base sm:text-lg shadow-2xl"
            />
            <Search
              className="absolute right-6 top-1/2 h-5 w-5 -translate-y-1/2 text-blanc-500"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-14 sm:mb-20">
          {categories.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className="glass rounded-2xl p-6 sm:p-8 hover:bg-blanc-50/5 border border-blanc-50/10 group transition-all animate-fade-up"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-blanc-50/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                <item.Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-blanc-50 mb-2">{item.title}</h3>
              <p className="text-blanc-400 text-sm leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>

        {/* Popular Articles */}
        <div className="glass rounded-2xl p-5 sm:p-8 md:p-12 border border-blanc-50/10">
          <h2 className="text-xl sm:text-2xl font-bold text-blanc-50 mb-6 sm:mb-8 flex items-center gap-3">
            <Flame className="h-6 w-6 text-orange-500" aria-hidden="true" />
            Beliebte Artikel
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <a key={index} href="#" className="flex items-center justify-between gap-4 p-4 rounded-xl hover:bg-blanc-50/5 text-blanc-400 hover:text-france-500 transition-all group">
                <span className="font-medium">{article}</span>
                <ChevronRight
                  className="h-4 w-4 text-blanc-600 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HelpCenterPage;
