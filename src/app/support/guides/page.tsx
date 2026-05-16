import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Apple,
  Box,
  MonitorPlay,
  Play,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Guides d'Installation — IPTV SERVICE",
  description:
    "Instructions étape par étape pour configurer IPTV SERVICE sur tous vos appareils.",
  alternates: {
    canonical: "https://iptvstreaming.nl/support/guides",
  },
  openGraph: {
    title: "Guides d'Installation — IPTV SERVICE",
    description:
      "Instructions étape par étape pour configurer IPTV SERVICE sur tous vos appareils.",
    url: "https://iptvstreaming.nl/support/guides",
    siteName: "IPTV SERVICE",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guides d'Installation — IPTV SERVICE",
    description:
      "Instructions étape par étape pour configurer IPTV SERVICE sur tous vos appareils.",
  },
};

const SetupGuidesPage = () => {
  const guides: Array<{
    device: string;
    Icon: LucideIcon;
    apps: string[];
    steps: string[];
  }> = [
    {
      device: "Smart TV",
      Icon: MonitorPlay,
      apps: ["IPTV Smarters Pro", "TiviMate", "Nanomid"],
      steps: [
        "Téléchargez l'application de votre choix depuis le TV App Store.",
        "Ouvrez l'application et sélectionnez 'Connexion avec Xtream Codes API'.",
        "Saisissez le nom, l'identifiant, le mot de passe et l'URL que vous avez reçus par e-mail.",
        "Cliquez sur 'Ajouter un utilisateur' et attendez que le contenu se charge.",
      ],
    },
    {
      device: "Android / Firestick",
      Icon: Box,
      apps: ["Downloader", "IPTV Smarters", "Perfect Player"],
      steps: [
        "Activez 'Applications de sources inconnues' dans les paramètres de votre appareil.",
        "Utilisez l'application 'Downloader' pour installer le lecteur IPTV de votre choix.",
        "Saisissez vos identifiants de connexion (M3U ou Xtream Codes).",
        "Redémarrez l'application pour actualiser la liste des chaînes.",
      ],
    },
    {
      device: "Apple (iOS/TVOS)",
      Icon: Apple,
      apps: ["GSE Smart IPTV", "Cloud Stream", "iPlayTV"],
      steps: [
        "Cherchez 'GSE Smart IPTV' dans l'App Store.",
        "Allez dans 'Remote Playlists' et cliquez sur l'icône '+'.",
        "Sélectionnez 'Ajouter une URL M3U' et collez votre lien unique.",
        "Donnez un nom à la liste de lecture et cliquez sur 'Ajouter'.",
      ],
    },
  ];

  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-[#EF4135] text-sm font-bold mb-4 uppercase tracking-wider glow-purple">
            Tutoriels
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6 text-white leading-tight">
            Guides d'<span className="text-gradient">Installation</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Instructions simples étape par étape pour streamer sur n'importe quel
            appareil en moins de 5 minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 animate-slide-up">
          {guides.map((guide, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/2 transition-all flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#0055A4] to-[#EF4135] flex items-center justify-center">
                  <guide.Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {guide.device}
                </h3>
              </div>

              <div className="mb-6">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-3">
                  Applications Recommandées
                </span>
                <div className="flex flex-wrap gap-2">
                  {guide.apps.map((app, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6 flex-grow">
                {guide.steps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center text-xs font-bold border border-[#3B82F6]/20">
                      {i + 1}
                    </span>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/support/contact" className="w-full py-4 mt-10 rounded-xl glass text-white text-sm font-bold hover:bg-white/10 transition-all border border-white/10 text-center block">
                Besoin d'aide ?
              </Link>
            </div>
          ))}
        </div>

        {/* Video Tutorial Placeholder */}
        <div className="mt-14 sm:mt-20 glass rounded-2xl p-6 sm:p-8 md:p-12 border border-white/10 bg-linear-to-br from-white/5 to-transparent flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Vous préférez la vidéo ?
            </h2>
            <p className="text-slate-400 mb-8">
              Regardez nos tutoriels vidéo détaillés sur notre chaîne YouTube.
              Nous couvrons tout, de la première installation à l'utilisation
              avancée.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/support/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
              >
                <Play className="h-5 w-5 fill-current" aria-hidden="true" />
                Aide à l'installation
              </Link>
              <a
                href="/support/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-white font-bold hover:bg-white/10 transition-all border border-white/10"
              >
                Besoin d'aide ?
              </a>
            </div>
          </div>
          <div className="flex-1 w-full aspect-video rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center relative overflow-hidden group">
            <Image
              src="/images/hero-bg.webp"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="absolute inset-0 object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
              quality={45}
            />
            <div className="w-20 h-20 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-2xl relative z-10 group-hover:scale-110 transition-transform">
              <Play className="ml-1 h-8 w-8 fill-current" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SetupGuidesPage;
