import type { Metadata } from "next";
import { IPTV_STREAMING_PAGES } from "@/content/iptv-streaming-pages";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Link from "next/link";
import VaultSearch from "@/components/iptv-streaming/VaultSearch";

export const metadata: Metadata = {
  title: "Base de connaissances IPTV SERVICE",
  description:
    "Parcourez la base de connaissances IPTV SERVICE avec des guides sur les applications, abonnements, 4K, IPTV, playlists M3U et streaming sécurisé.",
  alternates: {
    canonical: "/iptv-streaming",
  },
  openGraph: {
    title: "Base de connaissances IPTV SERVICE | IPTV SERVICE",
    description:
      "Tous les guides IPTV SERVICE au même endroit : applications, lecteurs, abonnements, appareils, 4K et streaming sécurisé.",
    url: "/iptv-streaming",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Base de connaissances IPTV SERVICE | IPTV SERVICE",
    description:
      "Découvrez des guides IPTV SERVICE pratiques pour les applications, appareils, forfaits et un visionnage responsable.",
  },
};

export default function IPTVStreamingPage() {
  return (
    <main className="flex-1 px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 inline-flex rounded-full border border-[#3B82F6]/25 bg-[#3B82F6]/15 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#DBEAFE]">
          Base de connaissances IPTV SERVICE
        </p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          IPTV SERVICE
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          Une bibliothèque centrale avec des guides IPTV pratiques et humains pour
          les applications, lecteurs, appareils, abonnements, qualité et streaming sécurisé.
        </p>

        <div className="mt-12">
          <VaultSearch />
        </div>


        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {IPTV_STREAMING_PAGES.map((page) => (
            <Link
              key={page.slug}
              href={`/iptv-streaming/${page.slug}`}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-colors hover:border-[#3B82F6]/40 hover:bg-white/6"
            >
              <h2 className="text-lg font-black text-white">{page.keyword}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {page.metaDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-32">
        <Pricing />
      </div>

      <div className="mt-32">
        <CTA 
          title={<>Commencez Aujourd'hui avec <span className="text-gradient">IPTV SERVICE</span></>}
          description="Découvrez la meilleure expérience IPTV avec des milliers de chaînes, films et séries en haute qualité."
        />
      </div>
    </main>
  );
}
