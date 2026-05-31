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
  title: "Installationsanleitungen — IPTV German",
  description:
    "Schritt-für-Schritt-Anleitungen zur Einrichtung von IPTV German auf allen Ihren Geräten.",
  alternates: {
    canonical: "https://iptvgerman.de/support/guides",
  },
  openGraph: {
    title: "Installationsanleitungen — IPTV German",
    description:
      "Schritt-für-Schritt-Anleitungen zur Einrichtung von IPTV German auf allen Ihren Geräten.",
    url: "https://iptvgerman.de/support/guides",
    siteName: "IPTV German",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Installationsanleitungen — IPTV German",
    description:
      "Schritt-für-Schritt-Anleitungen zur Einrichtung von IPTV German auf allen Ihren Geräten.",
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
        "Laden Sie die gewünschte App aus dem TV App Store herunter.",
        "Öffnen Sie die App und wählen Sie 'Anmeldung mit Xtream Codes API'.",
        "Geben Sie den Namen, Benutzernamen, das Passwort und die URL ein, die Sie per E-Mail erhalten haben.",
        "Klicken Sie auf 'Benutzer hinzufügen' und warten Sie, bis der Inhalt geladen wird.",
      ],
    },
    {
      device: "Android / Firestick",
      Icon: Box,
      apps: ["Downloader", "IPTV Smarters", "Perfect Player"],
      steps: [
        "Aktivieren Sie 'Apps aus unbekannten Quellen' in den Geräteeinstellungen.",
        "Verwenden Sie die 'Downloader'-App, um den gewünschten IPTV-Player zu installieren.",
        "Geben Sie Ihre Anmeldedaten ein (M3U oder Xtream Codes).",
        "Starten Sie die App neu, um die Senderliste zu aktualisieren.",
      ],
    },
    {
      device: "Apple (iOS/TVOS)",
      Icon: Apple,
      apps: ["GSE Smart IPTV", "Cloud Stream", "iPlayTV"],
      steps: [
        "Suchen Sie im App Store nach 'GSE Smart IPTV'.",
        "Gehen Sie zu 'Remote Playlists' und klicken Sie auf das '+' Symbol.",
        "Wählen Sie 'M3U-URL hinzufügen' und fügen Sie Ihren eindeutigen Link ein.",
        "Geben Sie der Playlist einen Namen und klicken Sie auf 'Hinzufügen'.",
      ],
    },
  ];

  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            Tutorials
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6 text-blanc-50 leading-tight">
            Installations<span className="text-gradient">anleitungen</span>
          </h1>
          <p className="text-blanc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Einfache Schritt-für-Schritt-Anleitungen zum Streamen auf jedem
            Gerät in weniger als 5 Minuten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 animate-slide-up">
          {guides.map((guide, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-6 sm:p-8 border border-blanc-50/10 hover:bg-blanc-50/2 transition-all flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-france-700 to-rouge-500 flex items-center justify-center">
                  <guide.Icon className="h-6 w-6 text-blanc-50" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-blanc-50">
                  {guide.device}
                </h3>
              </div>

              <div className="mb-6">
                <span className="text-xs font-bold text-blanc-500 uppercase tracking-widest block mb-3">
                  Empfohlene Apps
                </span>
                <div className="flex flex-wrap gap-2">
                  {guide.apps.map((app, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-blanc-50/5 border border-blanc-50/10 text-blanc-300 text-xs font-medium"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6 flex-grow">
                {guide.steps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-france-500/10 text-france-500 flex items-center justify-center text-xs font-bold border border-france-500/20">
                      {i + 1}
                    </span>
                    <p className="text-blanc-300 text-sm leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/support/contact" className="w-full py-4 mt-10 rounded-xl glass text-blanc-50 text-sm font-bold hover:bg-blanc-50/10 transition-all border border-blanc-50/10 text-center block">
                Besoin d'aide ?
              </Link>
            </div>
          ))}
        </div>

        {/* Video Tutorial Placeholder */}
        <div className="mt-14 sm:mt-20 glass rounded-2xl p-6 sm:p-8 md:p-12 border border-blanc-50/10 bg-linear-to-br from-blanc-50/5 to-transparent flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-blanc-50 mb-4">
                Bevorzugen Sie ein Video?
              </h2>
              <p className="text-blanc-400 mb-8">
                Sehen Sie sich unsere detaillierten Video-Tutorials an.
                Wir decken alles ab, von der ersten Einrichtung bis zur
                fortgeschrittenen Nutzung.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/support/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-blanc-50 font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
                >
                  <Play className="h-5 w-5 fill-current" aria-hidden="true" />
                  Installationshilfe
                </Link>
                <a
                  href="/support/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-blanc-50 font-bold hover:bg-blanc-50/10 transition-all border border-blanc-50/10"
                >
                  Hilfe nötig?
                </a>
            </div>
          </div>
          <div className="flex-1 w-full aspect-video rounded-2xl bg-france-900 border border-blanc-50/10 flex items-center justify-center relative overflow-hidden group">
            <Image
              src="/images/hero-bg.webp"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="absolute inset-0 object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
              quality={45}
            />
            <div className="w-20 h-20 rounded-full bg-white text-blanc-950 flex items-center justify-center shadow-2xl relative z-10 group-hover:scale-110 transition-transform">
              <Play className="ml-1 h-8 w-8 fill-current" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SetupGuidesPage;
