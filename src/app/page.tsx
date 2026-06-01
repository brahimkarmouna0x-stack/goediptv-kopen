import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "goediptv-kopen — Beste IPTV Abonnement van Nederland",
  description:
    "Het beste IPTV abonnement van Nederland: 25.000+ kanalen, 140.000+ films & series in 4K, nul buffering. Premium IPTV bestellen met gratis proef.",
  path: "/",
});

// Above-fold: Hero is static (LCP element)
// Below-fold sections: dynamically imported with SSR enabled (pre-rendered, not client-only)
const FeatureMarquee = dynamic(() => import("@/components/ui/FeatureMarquee"), {
  ssr: true,
});
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { ssr: true },
);
const Categories = dynamic(() => import("@/components/sections/Categories"), {
  ssr: true,
});
const Trending = dynamic(() => import("@/components/sections/Trending"), {
  ssr: true,
});
const Partners = dynamic(() => import("@/components/sections/Partners"), {
  ssr: true,
});
const Features = dynamic(() => import("@/components/sections/Features"), {
  ssr: true,
});
const Guide = dynamic(() => import("@/components/sections/Guide"), {
  ssr: true,
});
const Pricing = dynamic(() => import("@/components/sections/Pricing"), {
  ssr: true,
});
const Compatibility = dynamic(
  () => import("@/components/sections/Compatibility"),
  { ssr: true },
);
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: true });
const Stats = dynamic(() => import("@/components/sections/Stats"), {
  ssr: true,
});
const CTA = dynamic(() => import("@/components/sections/CTA"), { ssr: true });

export default function Home() {
  return (
    <main className="home-page flex-1">
      <Hero />
      <FeatureMarquee />
      <Testimonials />
      <Categories />
      <Trending />
      <Partners />
      <Features />
      <Guide />
      <Pricing />
      <Compatibility />
      <FAQ />
      <Stats />
      <CTA />
    </main>
  );
}
