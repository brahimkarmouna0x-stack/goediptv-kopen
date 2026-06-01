import type { Metadata } from "next";
import PopularContent from "@/components/sections/PopularContent";

export const metadata: Metadata = {
  title: "Populaire content",
  description:
    "Ontdek onze uitgebreide bibliotheek met premium films, series en live tv-kanalen.",
  alternates: {
    canonical: "https://goediptv-kopen.nl/popular",
  },
  openGraph: {
    title: "Populaire content",
    description:
      "Ontdek onze uitgebreide bibliotheek met premium films, series en live tv-kanalen.",
    url: "https://goediptv-kopen.nl/popular",
    siteName: "goediptv-kopen",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Populaire content",
    description:
      "Ontdek onze uitgebreide bibliotheek met premium films, series en live tv-kanalen.",
  },
};

export default function PopularPage() {
  return (
    <main className="min-h-screen">
      <PopularContent />
    </main>
  );
}
