import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import { buildMetadata } from "@/lib/seo";
import { productSchema } from "@/lib/structured-data";

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
const HowItWorks = dynamic(
  () => import("@/components/sections/HowItWorks"),
  { ssr: true },
);
const AboutGoodIPTV = dynamic(
  () => import("@/components/sections/AboutGoodIPTV"),
  { ssr: true },
);
const WhyGoodIPTV = dynamic(
  () => import("@/components/sections/WhyGoodIPTV"),
  { ssr: true },
);
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { ssr: true },
);
const Categories = dynamic(() => import("@/components/sections/Categories"), {
  ssr: true,
});
const ChannelShowcase = dynamic(
  () => import("@/components/sections/ChannelShowcase"),
  { ssr: true },
);
const Trending = dynamic(() => import("@/components/sections/Trending"), {
  ssr: true,
});
const Partners = dynamic(() => import("@/components/sections/Partners"), {
  ssr: true,
});
const Features = dynamic(() => import("@/components/sections/Features"), {
  ssr: true,
});
const ComparisonTable = dynamic(
  () => import("@/components/sections/ComparisonTable"),
  { ssr: true },
);
const Guide = dynamic(() => import("@/components/sections/Guide"), {
  ssr: true,
});
const Guarantee = dynamic(
  () => import("@/components/sections/Guarantee"),
  { ssr: true },
);
const Pricing = dynamic(() => import("@/components/sections/Pricing"), {
  ssr: true,
});
const Compatibility = dynamic(
  () => import("@/components/sections/Compatibility"),
  { ssr: true },
);
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: true });
const ContentHighlights = dynamic(
  () => import("@/components/sections/ContentHighlights"),
  { ssr: true },
);
const Stats = dynamic(() => import("@/components/sections/Stats"), {
  ssr: true,
});
const TrustBadges = dynamic(
  () => import("@/components/sections/TrustBadges"),
  { ssr: true },
);
const CTA = dynamic(() => import("@/components/sections/CTA"), { ssr: true });

export default function Home() {
  return (
    <main className="home-page flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema()),
        }}
      />
      <Hero />
      <FeatureMarquee />
      <HowItWorks />
      <AboutGoodIPTV />
      <Testimonials />
      <Categories />
      <ChannelShowcase />
      <Trending />
      <Partners />
      <Features />
      <WhyGoodIPTV />
      <ComparisonTable />
      <Guide />
      <Guarantee />
      <Pricing />
      <Compatibility />
      <FAQ />
      <ContentHighlights />
      <Stats />
      <TrustBadges />
      <CTA />
    </main>
  );
}
