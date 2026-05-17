import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  CreditCard,
  Film,
  Headphones,
  List,
  Server,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Statut du Service — IPTV SERVICE",
  description: "Statut en temps réel des services et clusters de serveurs IPTV SERVICE.",
  alternates: {
    canonical: "https://iptvstreaming.nl/support/status",
  },
  openGraph: {
    title: "Statut du Service — IPTV SERVICE",
    description: "Statut en temps réel des services et clusters de serveurs IPTV SERVICE.",
    url: "https://iptvstreaming.nl/support/status",
    siteName: "IPTV SERVICE",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Statut du Service — IPTV SERVICE",
    description: "Statut en temps réel des services et clusters de serveurs IPTV SERVICE.",
  },
};

const StatusPage = () => {
  const services: Array<{
    name: string;
    status: string;
    health: number;
    Icon: LucideIcon;
  }> = [
    { name: "Cluster de Streaming Mondial", status: "Opérationnel", health: 100, Icon: Server },
    { name: "API Xtream Codes", status: "Opérationnel", health: 100, Icon: Code2 },
    { name: "Accès Bibliothèque VOD", status: "Opérationnel", health: 100, Icon: Film },
    { name: "Fournisseur de Données EPG", status: "Opérationnel", health: 99, Icon: List },
    { name: "Traitement des Paiements", status: "Opérationnel", health: 100, Icon: CreditCard },
    { name: "Portail de Support Client", status: "Opérationnel", health: 100, Icon: Headphones }
  ];

  const regions = [
    { name: "Noord-Amerika", latency: "24ms", load: "34%" },
    { name: "Europa", latency: "18ms", load: "42%" },
    { name: "Midden-Oosten", latency: "45ms", load: "28%" },
    { name: "Azië-Pacific", latency: "62ms", load: "31%" }
  ];

  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-emerald-400 text-sm font-bold mb-4 uppercase tracking-wider glow-emerald">
            Tous les Systèmes Fonctionnent
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6       text-blanc-50 leading-tight">
            Statut du <span className="text-gradient">Service</span>
          </h1>
          <p className="text-blanc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Surveillance en temps réel de notre infrastructure mondiale et de nos services de streaming.
          </p>
        </div>

        {/* Global Health Header */}
        <div className="glass rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 border border-emerald-500/20 bg-emerald-500/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 animate-slide-up shadow-2xl shadow-emerald-500/5">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center animate-pulse">
                <CheckCircle2
                  className="h-8 w-8 text-emerald-500"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full"></div>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold       text-blanc-50 mb-1">Tous les Systèmes Opérationnels</h2>
              <p className="text-blanc-400 text-sm">Dernière vérification : À l'instant (actualisation automatique)</p>
            </div>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
             <button className="px-6 py-3 rounded-xl glass       text-blanc-50 font-bold hover:bg-blanc-50/10 transition-all border border-blanc-50/10">
                Actualiser le Statut
             </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Services */}
          <div className="lg:col-span-2 space-y-4 animate-slide-up">
            <h2 className="text-xl font-bold       text-blanc-50 mb-6 ml-2">Services Principaux</h2>
            {services.map((service, i) => (
              <div key={i} className="glass rounded-2xl p-5 sm:p-6 border border-blanc-50/5 hover:border-blanc-50/10 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-blanc-50/5 flex items-center justify-center text-blanc-400 group-hover:text-france-500 transition-colors">
                    <service.Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="      text-blanc-50 font-bold text-sm mb-0.5">{service.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-1 rounded-full bg-blanc-50/5 overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500" 
                          style={{ width: `${service.health}%` }}
                        ></div>
                      </div>
                      <span className="text-[10px] text-blanc-500">{service.health}% Santé</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 self-start sm:self-auto">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                   <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">{service.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Regional Status */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-xl font-bold       text-blanc-50 mb-6 ml-2">Nœuds Régionaux</h2>
              <div className="glass rounded-2xl p-6 sm:p-8 border border-blanc-50/5 space-y-8">
                {regions.map((region, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="      text-blanc-50 font-bold text-sm">{region.name}</h3>
                      <span className="text-[10px] font-bold text-blanc-500 uppercase tracking-widest">{region.latency}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-blanc-50/5 overflow-hidden">
                      <div 
                        className="h-full bg-linear-to-r from-france-500 to-rouge-500" 
                        style={{ width: region.load }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-medium text-blanc-500">
                      <span>Charge serveur</span>
                      <span>{region.load}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Callout */}
            <div className="glass rounded-2xl p-6 sm:p-8 border border-france-500/20 bg-france-500/5 relative overflow-hidden group">
               <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-france-500/10 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
               <h2 className="text-lg font-bold       text-blanc-50 mb-2">Un problème constaté ?</h2>
               <p className="text-sm text-blanc-400 mb-6 leading-relaxed">Si vous rencontrez des problèmes de streaming qui ne sont pas affichés ici, veuillez nous contacter.</p>
               <Link href="/support/contact" className="text-sm font-bold text-france-500 hover:      text-blanc-50 transition-colors flex items-center gap-2 group/btn">
                  Signaler un Problème
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StatusPage;
