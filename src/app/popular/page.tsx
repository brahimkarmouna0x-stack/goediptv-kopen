import type { Metadata } from "next";
import PopularContent from "@/components/sections/PopularContent";

export const metadata: Metadata = {
  title: "Contenu Populaire — IPTV SERVICE",
  description:
    "Découvrez notre bibliothèque complète de films premium, séries et chaînes TV en direct.",
  alternates: {
    canonical: "https://iptvstreaming.nl/popular",
  },
  openGraph: {
    title: "Contenu Populaire — IPTV SERVICE",
    description:
      "Découvrez notre bibliothèque complète de films premium, séries et chaînes TV en direct.",
    url: "https://iptvstreaming.nl/popular",
    siteName: "IPTV SERVICE",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contenu Populaire — IPTV SERVICE",
    description:
      "Découvrez notre bibliothèque complète de films premium, séries et chaînes TV en direct.",
  },
};

export default function PopularPage() {
  return (
    <main className="min-h-screen">
      <PopularContent />
    </main>
  );
}
