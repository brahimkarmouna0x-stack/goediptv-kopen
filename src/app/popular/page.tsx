import type { Metadata } from "next";
import PopularContent from "@/components/sections/PopularContent";

export const metadata: Metadata = {
  title: "Beliebte Inhalte",
  description:
    "Entdecken Sie unsere umfangreiche Bibliothek mit Premium-Filmen, Serien und Live-TV-Sendern.",
  alternates: {
    canonical: "https://iptvgerman.de/popular",
  },
  openGraph: {
    title: "Beliebte Inhalte",
    description:
      "Entdecken Sie unsere umfangreiche Bibliothek mit Premium-Filmen, Serien und Live-TV-Sendern.",
    url: "https://iptvgerman.de/popular",
    siteName: "IPTV German",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beliebte Inhalte",
    description:
      "Entdecken Sie unsere umfangreiche Bibliothek mit Premium-Filmen, Serien und Live-TV-Sendern.",
  },
};

export default function PopularPage() {
  return (
    <main className="min-h-screen">
      <PopularContent />
    </main>
  );
}
