import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/page/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Over Ons | goediptv-kopen — De IPTV Provider van Nederland",
  description:
    "Leer meer over goediptv-kopen, de meest betrouwbare premium IPTV provider van Nederland. Wij bieden 24/7 support en 99,9% uptime.",
  path: "/over-ons",
});

export default function AboutPage() {
  return (
    <main className="flex-1 bg-france-950">
      <PageHero
        hero={{
          headline: "Over goediptv-kopen",
          subheadline:
            "De meest betrouwbare Premium IPTV Provider in Nederland. Wij geloven in kwaliteit, stabiliteit en 24/7 klanttevredenheid.",
          cta: { label: "Bekijk Abonnementen", href: "/#pakketten" },
          badgeTags: ["Betrouwbaar", "24/7 Support", "Premium 4K"],
        }}
      >
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Over Ons", href: "/over-ons" },
          ]}
        />
      </PageHero>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-blanc-50">
          <div className="prose prose-invert lg:prose-lg mx-auto prose-a:text-france-400 hover:prose-a:text-france-300">
            <h2>Wie Wij Zijn</h2>
            <p>
              Bij <strong>goediptv-kopen</strong> zijn wij toegewijd aan het leveren van de ultieme tv-kijkervaring voor de Nederlandse markt. 
              Als toonaangevende IPTV-provider combineren wij geavanceerde streamingtechnologie met ongeëvenaarde klantenservice.
            </p>
            
            <h2>Onze Missie</h2>
            <p>
              Onze missie is simpel: grenzeloos entertainment toegankelijk maken voor iedereen, zonder haperingen, zonder verborgen kosten en met de hoogste beeldkwaliteit (4K en 8K HDR).
            </p>

            <h2>Waarom Kiezen Voor Ons?</h2>
            <ul>
              <li><strong>Betrouwbaarheid:</strong> Onze servers bieden een gegarandeerde uptime van 99,9%.</li>
              <li><strong>Kwaliteit:</strong> We leveren meer dan 31.000 live kanalen en 140.000 VODs in kristalheldere kwaliteit.</li>
              <li><strong>Klantenservice:</strong> Ons team staat 24/7 voor u klaar via WhatsApp om u te helpen bij installatie of technische vragen.</li>
            </ul>

            <h2>Neem Contact Op</h2>
            <p>
              Heeft u vragen of wilt u meer weten over onze diensten? Bezoek dan onze <a href="/support">Support pagina</a> of neem direct contact met ons op via WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
