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
  title: "Centre d'Aide — IPTV SERVICE",
  description: "Trouvez des réponses à vos questions et apprenez à utiliser IPTV SERVICE.",
  alternates: {
    canonical: "https://iptvstreaming.nl/support",
  },
  openGraph: {
    title: "Centre d'Aide — IPTV SERVICE",
    description: "Trouvez des réponses à vos questions et apprenez à utiliser IPTV SERVICE.",
    url: "https://iptvstreaming.nl/support",
    siteName: "IPTV SERVICE",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centre d'Aide — IPTV SERVICE",
    description: "Trouvez des réponses à vos questions et apprenez à utiliser IPTV SERVICE.",
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
      title: "Premiers Pas",
      desc: "Apprenez à configurer votre abonnement en quelques minutes sur n'importe quel appareil.",
      color: "text-accent-cyan",
      href: "/support/guides",
    },
    {
      Icon: CreditCard,
      title: "Facturation & Forfaits",
      desc: "Informations sur les abonnements, renouvellements et méthodes de paiement.",
      color: "text-accent-purple",
      href: "#",
    },
    {
      Icon: ShieldCheck,
      title: "Sécurité",
      desc: "Comment nous protégeons vos données et conseils pour sécuriser votre compte.",
      color: "text-emerald-400",
      href: "#",
    },
    {
      Icon: Wrench,
      title: "Dépannage",
      desc: "Résolvez les problèmes de streaming et les erreurs de lecture courants.",
      color: "text-[#F4C430]",
      href: "#",
    },
    {
      Icon: Tv,
      title: "Contenu & Chaînes",
      desc: "Découvrez nos listes de chaînes, bibliothèque VOD et détails EPG.",
      color: "text-[#EF4135]",
      href: "#",
    },
    {
      Icon: CircleHelp,
      title: "FAQ Générale",
      desc: "Réponses rapides aux questions les plus fréquentes.",
      color: "text-blue-400",
      href: "#",
    },
  ];

  const articles = [
    "Comment configurer IPTV Smarters Pro",
    "Quels appareils supportent le streaming 4K ?",
    "Comment renouveler mon abonnement",
    "Comprendre l'API Xtream Codes",
    "Solutions courantes contre le buffering",
    "Comment utiliser le guide des programmes (EPG)",
  ];

  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-[#3B82F6] text-sm font-bold mb-4 uppercase tracking-wider glow-blue">
            Assistance
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6 text-white leading-tight">
            Centre d'<span className="text-gradient">Aide</span>
          </h1>
          <div className="max-w-2xl mx-auto relative mt-8">
            <input 
              type="text" 
              placeholder="Recherchez des articles, guides ou solutions..." 
              className="w-full px-5 sm:px-8 py-4 sm:py-5 rounded-2xl glass text-white placeholder-slate-500 border border-white/10 focus:outline-none focus:border-[#3B82F6]/50 text-base sm:text-lg shadow-2xl"
            />
            <Search
              className="absolute right-6 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
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
              className="glass rounded-2xl p-6 sm:p-8 hover:bg-white/5 border border-white/10 group transition-all animate-slide-up"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                <item.Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>

        {/* Popular Articles */}
        <div className="glass rounded-2xl p-5 sm:p-8 md:p-12 border border-white/10">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
            <Flame className="h-6 w-6 text-orange-500" aria-hidden="true" />
            Articles Populaires
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <a key={index} href="#" className="flex items-center justify-between gap-4 p-4 rounded-xl hover:bg-white/5 text-slate-300 hover:text-[#3B82F6] transition-all group">
                <span className="font-medium">{article}</span>
                <ChevronRight
                  className="h-4 w-4 text-slate-600 transition-transform group-hover:translate-x-1"
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
