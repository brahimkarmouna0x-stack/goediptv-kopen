import Hero from "@/components/sections/Hero";
import FeatureMarquee from "@/components/ui/FeatureMarquee";
import Testimonials from "@/components/sections/Testimonials";
import Categories from "@/components/sections/Categories";
import Guide from "@/components/sections/Guide";
import Trending from "@/components/sections/Trending";
import Partners from "@/components/sections/Partners";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Compatibility from "@/components/sections/Compatibility";
import FAQ from "@/components/sections/FAQ";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";

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
