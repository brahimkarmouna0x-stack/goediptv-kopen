import type { Metadata } from "next";
import { IPTV_STREAMING_PAGES } from "@/content/iptv-streaming-pages";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Link from "next/link";
import VaultSearch from "@/components/iptv-streaming/VaultSearch";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Base de connaissances IPTV SERVICE",
  description:
    "Parcourez la base de connaissances IPTV SERVICE avec des guides sur les applications, abonnements, 4K, IPTV, playlists M3U et streaming sécurisé.",
  path: "/iptv-streaming",
});

export default function IPTVStreamingPage() {
  return (
    <main className="flex-1 px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 inline-flex rounded-full border border-france-500/25 bg-france-500/15 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-france-100">
          Base de connaissances IPTV SERVICE
        </p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-blanc-50 sm:text-5xl lg:text-6xl">
          IPTV SERVICE
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-blanc-300 sm:text-lg">
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
              className="rounded-2xl border border-blanc-50/10 bg-blanc-50/[0.035] p-5 transition-colors hover:border-france-500/40 hover:bg-blanc-50/5"
            >
              <h2 className="text-lg font-black text-blanc-50">{page.keyword}</h2>
              <p className="mt-3 text-sm leading-6 text-blanc-400">
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
